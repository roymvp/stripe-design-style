# stripe 风格：来源与完整性核对

状态：验收候选，尚未保存 skill，未创建 GitHub 仓库或正式 v0 设计系统。

## 唯一视觉来源

- https://getdesign.md/stripe/design-md 是索引与使用说明，没有第二套更详细的规范。
- 规范：https://github.com/VoltAgent/awesome-design-md/blob/e06a96660396d741d0c106c8972172254dafbdc2/design-md/stripe/DESIGN.md
- 原文快照：`design-system/source/DESIGN.md`。原文是第三方 alpha 分析，不是官方 Stripe 设计系统。快照仅作为来源证据，不把原文品牌文本引入组件或营销文案。
- 开始时仓库仅有默认 Next.js/shadcn 脚手架，没有已导入的品牌组件。未读取或混入其他品牌规范。

## 完整性对照

| 原文条目 | 实现 | 覆盖 |
|---|---|---|
| 20 个颜色 | `packages/stripe-style/src/tokens.css` 的 `--stripe-*` | 全部原值 |
| 15 个排版角色 | `--text-*`，含字号、字重、行高、字距 | 全部保留 |
| ss01 / tnum | 全局 body + `.ds-numeric` | 已覆盖 |
| 8 个间距 | `--spacing-xxs` 至 `--spacing-huge` | 全部原值 |
| 6 个圆角 | `--radius-xs` 至 `--radius-pill` | 全部原值 |
| 平面与两级阴影 | `shadow-lift` / `shadow-panel` | 原蓝调阴影值 |
| primary / pressed / secondary / on-dark | `Button` default/active/outline/dark | 4 项 |
| input / focused | `Input` 默认与 focus-visible | 2 项 |
| feature / pricing / featured / cream / dashboard | `Card` 的 5 个 variants | 5 项 |
| pill-tag-soft | `Badge` default | 1 项，中文实用字号另列补充 |
| nav-bar-on-mesh | `SiteNav` + `MeshSurface` | 1 项 |
| link-on-light | `.ds-link` | 1 项 |
| footer-light | `SiteFooter` | 1 项 |
| 网状渐变、组合产品面板、金额排版 | `MeshSurface` / 展示页组合 / `.ds-numeric` | 3 个签名模式 |
| 1200px 容器与断点 | `.ds-container` / 768、1024px，1440px 以上保持完整组合 | 已覆盖 |
| 4→2→1 定价，3→2→1 产品面板 | `.ds-pricing-grid` / `.ds-composite` | 已覆盖 |
| 圆角、照片比例和组件用法限制 | 本文与包安装说明 | 规则保留；未捏造客户照片 |

原文组件 YAML 共 **15 项**（含 2 个状态条目），不是 15 个互相独立的组件文件。

## 原文件没有提供，不应称为导入遗漏

1. 现成组件包、公开组件 API、shadcn registry、starter。
2. Sohne 字体文件或字体分发许可。
3. 可用渐变原图、官方 logo、真实客户照片、业务数据。
4. 全套暗色主题 token；只有局部深色卡片/产品表面。
5. 错误、成功、警告语义颜色，以及完整状态机。
6. 动效时长、缓动、键盘与屏幕阅读器行为。
7. 完整图表规则、支付业务集成、鉴权或数据库规范。

## 显式工程补充 / 与原文的取舍

- 组件依据 shadcn/ui Base UI 原语实现，包名 `@design-systems/stripe-style` 是本项目创建的本地包，不是已有官方包；未发布 npm。
- Inter Variable 是原文指定的开放替代方案，采用 `@fontsource-variable/inter` 的 OFL 文件，通过 `next/font/local` 自托管。不分发 Sohne、SF Pro。Inter 的 ss01 并不保证产生 Sohne 相同的字形；因此是排版近似，不宣称像素级还原。
- 中文优先使用 PingFang SC / Microsoft YaHei / Noto Sans CJK SC 系统栈。首轮实际浏览器发现该环境缺少中文字形，因此增加自托管、unicode-range 分片的 Noto Sans SC Variable 最后兜底；只有本机字体无法提供字形时才下载相关分片，而不是整库预载。这是基于缺字证据的工程例外。中文界面说明最小 14px；原始 caption/micro tokens 仍保留并展示。部分系统字体没有 300 字重，可能使用最接近字重。
- 原始 display-xxl 行高 1.03 保留。响应式中文 hero 使用 1.12–1.3，以避免上下笔画拥挤。展示页 hero 使用 48/36px，公开 `.ds-display` 保留 56/48/36 响应式层级。
- 按钮使用原 padding 与 pill；为满足源文件触控要求，桌面最小高 40px，移动 44px。输入框在手机使用 16px 防 iOS 自动放大，桌面回到 15px。
- 主按钮 hover 采用既有 primary-deep，pressed 使用原 primary-press；补充 disabled、focus-visible、loading 示意，不伪造请求。
- 错误使用原有 ink-secondary 和虚线边框 + 文案，不新增未经来源支持的语义红/绿。原 ruby 不被挪作错误按钮色。
- 浏览器 axe 实测原 ink-mute 在 canvas-soft 上为 4.49:1、原 primary-deep 在 subdued 标签底上为 4.23:1，低于 4.5:1。原 20 个色值全部保留；语义 muted-foreground 改映射到同源 ink-mute-2，accent-foreground 改映射到同源 primary-press。这是明确的可访问性修正，不声称完全照抄有缺陷的配对。
- Tailwind 使用 `@theme static` 保留所有公开 CSS 变量。逐区截图发现 `@theme inline` 会将只在动态 style 中引用的字号变量裁剪，导致标注 56px 的样例实际只有 16px；改为静态导出并浏览器逐项核对全部 15 个角色，而不仅仅比对源码。
- 修复 tailwind-merge 对自定义 text-button-md 等字号的误判：它原本把字号当成文字颜色，合并时删掉反白色。包内 cn 扩展 15 个字号角色，并加入可执行回归断言。
- 渐变表面的透明度按断点降低，避免窄屏文案覆盖饱和蓝色后失去对比；原始图片和调色 token 不变。
- 动效 160ms ease 是工程默认，原文未定义；reduced-motion 覆盖。导航受控，支持 Escape、失焦、链接跳转关闭。
- 标签及页脚文案由原 10/13px 提至 14px 便于中文阅读；原 tokens 不改。描边 Badge、ghost/link 按钮为文档操作补充。
- 渐变图为依据原规范独立生成的新资产，不是官方素材；1920×1920 WebP，27,662 bytes。原 PNG 在非公开 source 目录作为制作记录，不通过页面加载。
- 原文并未给出“sherbet orange / lavender”的精确独立色值，只提供已记录的 stops。未编造额外原始色 token。渐变图片天然含连续色值。
- 产品组合用可访问 DOM 而不是静态截图；按屏宽隐藏次要面板��比复制不可读的小图更适合 starter。没有虚构客户背书、交易事实或真实支付能力。
- 所有演示状态只存 React 临时 state，不使用 localStorage；这不是业务应用，不需要数据库或 Stripe 支付集成。
- 展示页作为内部验收 surface 使用 noindex；没有扩展 SEO 页面。

## 与官方 stripe.com 的实测对比（2026-09，agent-browser 抓取 getComputedStyle）

原文 alpha 分析并非官方设计系统。本轮直接打开 https://stripe.com/ 抓取真实计算样式并逐项比对，凡不一致以官方为准修正。

| 维度 | 官方实测 | 修正前 | 处理 |
|---|---|---|---|
| 字体族 | `sohne-var, "SF Pro Display", sans-serif` | 同 | 一致，无需改 |
| 展示字重 | 300 | 300 | 一致 |
| H1 | 48px / 行高 55.2px(1.15) / 字距 -0.96px | display-xl 完全相同 | 一致 |
| H2 | 32px / 1.1 / -0.64px、H3 26px | display-lg / md 相同 | 一致 |
| 主色 / 链接色 | `#533afd` | `#533afd` | 一致 |
| 引导段正文 | 32px / 300 / `#64748d` | ink-mute `#64748d` | 一致 |
| 标准正文 & 标题墨色 | `#061b31` | `#0d253d` | **改** → `--stripe-ink: #061b31` |
| **按钮圆角** | **4px 圆角矩形**（Get started / Contact sales / Sign in 全部 4px） | pill 9999px | **改** → 按钮 `rounded-xs`；规范去 pill 描述 |
| 按钮字号 | 14px / 400 / padding ~11.5–14.5px × 20–24px | button-md 16px / pill padding 8×16 | **改** → `button-sm` + `12px 20px` |
| 次级按钮描边 | 1px 柔和浅靛 `#d6d9fc` | 全饱和 `primary` | **改** → 新增 `primary-border-soft` 并应用 |
| eyebrow 眉标 | 14px / 400 / 句首大写 / `#061b31` | 无对应形态（micro-cap 是 10px 全大写） | **补** → 新增 `eyebrow-label` 规范 |
| 主导航 | Products/Solutions/Developers/Resources 带 chevron 展开面板 | 仅链接 + 移动端折叠 | **补** → 新增 `nav-dropdown` 规范 |
| 客户 logo 带 | hero 下单行原生 logo 平铺、无卡片 | 未记录 | **补** → 新增 `logo-cloud` 规范 |
| 数字证明带 | `$1.9T / 99.999% / 200M+` 超大 tnum 数字 + 灰标签 | 未记录 | **补** → 新增 `stat-band` 规范 |
| 两段式标题 | 深色首句 + `#64748d` 续句同一标题 | 未记录 | **补** → 新增 `heading-two-tone` 规范 |

修正落地文件：`packages/stripe-style/src/tokens.css`（ink、新增 primary-border-soft/`--color-primary-border`）、`packages/stripe-style/src/button.tsx`（rounded-xs、柔和描边）、`design-system/source/DESIGN.md`（按钮定义、关键特征、禁忌、触控、新增 6 项组件规范）。badge 的小圆点状态标签仍保留 pill——官方产品 UI 的状态 chip 确实是 pill，仅营销按钮不是。

## 资产、包与 starter

- `packages/stripe-style/`：可独立 pnpm pack 的源码包，公共导出与同包相对引用。
- `app/`、`components/showcase/`、`lib/design-system.ts`：完整 Next.js starter 和展示页；从包的公共入口消费，不从只读挂载或其他品牌目录导入。
- 原 source 文档不作为执行依赖；框架配置、字体依赖、图片、lockfile 都随项目交付。
- 无官方 logo。图标来自已安装 Lucide；这里的图标是工程补充，不宣称原文指定 Lucide。

## 验证

自动源码核对见 `scripts/verify-design-system.mjs`。浏览器检查、截图录屏和安装验证结果在 `design-system/VALIDATION.md` 汇总；仅记录实际完成的检查。

## 验收后流程

等待用户确认后再保存可复用 skill；再创建或连接当前项目的 GitHub 仓库，最后以完整、已验收的 starter 仓库创建 v0 Design Systems 2.0，并使用名称「stripe 风格」。不以仅组件 JSON 替代 starter，不提前声称已经完成平台注册。
