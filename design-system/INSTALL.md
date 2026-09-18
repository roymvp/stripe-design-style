# 完整 starter 与组件包

建议通过 GitHub 复用完整 starter；本项目尚在验收，仓库创建与正式 v0 导入将等待用户确认。

## 完整 starter

安装锁定依赖后运行 Next.js。根项目已包含 `transpilePackages`、Tailwind source 扫描、Inter 本地加载、中文回退以及全部资产。入口 `app/page.tsx` 展示组件的公共 API 用法。

## 仅安装组件包

```sh
pnpm add ./packages/stripe-style
# 或在 packages/stripe-style 中 pnpm pack 后安装生成的 tgz
```

包提供 TypeScript/TSX 源码，要求 React 19 + Tailwind CSS 4 与能转译源码的构建工具。不声称支持无构建的 script 标签。

```js
// next.config.mjs
export default { transpilePackages: ['@design-systems/stripe-style'] }
```

```css
@import 'tailwindcss';
@import '@design-systems/stripe-style/tokens.css';
@source '../node_modules/@design-systems/stripe-style/src';
```

如 CSS 文件不在 app 目录，调整 `@source` 相对路径。加载 Inter 后设置 `--font-inter`；完整 starter 已通过 `next/font/local` 做好。未提供该变量时回退到已安装的 Inter 与中文系统字体，不暗中请求远端字体。完整 starter 额外导入 `@fontsource-variable/noto-sans-sc/wght.css`，仅在系统字体缺字时按 unicode-range 加载自托管分片。单独安装组件包时，由应用自行提供对应字体资源。

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent, SiteNav } from '@design-systems/stripe-style'

export function Example() {
  return <Card>
    <CardHeader><CardTitle>工作空间</CardTitle></CardHeader>
    <CardContent><Input aria-label="项目名称" placeholder="填写项目名称" /></CardContent>
  </Card>
}
```

## 公共 API

- `Button`: variant default / outline / secondary / dark / ghost / link；size default / sm / lg / icon；标准按钮 props。加载态通过 children + disabled + aria-busy 组合，不存在 isLoading prop。
- `ActionLink`: 同 Button 视觉 variants，真实 a 元素，保留链接语义。
- `Input`: 原生输入 props；用 Field + FieldLabel + FieldDescription / FieldError 组合。
- `Card`: variant default / pricing / featured / cream / dashboard；elevation flat / lift / panel；配套 Header / Title / Description / Content / Footer / Action。
- `Badge`: default 为软靛蓝标签；outline 等变体用于展示文档，不能引入新品牌色。
- `SiteNav`: title、homeHref、items: `{label,href}[]`、可选 action、可选 label。响应式受控移动导航。
- `NavigationMenu*`: shadcn/Base UI 底层导航原语，按标准组合，必要时受控 value 管理下拉内容。
- `MeshSurface`: src（调用方资产路径）、priority、children；资产可从包 `assets/mesh.webp` 复制至应用 public，不依赖外链。
- `SiteFooter`: groups: `{title, links: {label,href}[]}[]`、note。
- `Label` / `Separator` / `Field*` 为表单与结构原语。

组件 className 用于布局；颜色与排版应使用内置 variants 和 tokens，不在调用点随意改色。无完整暗色主题，不添加默认 dark: 随机配色。

## 约束

显示文字字重 300；金额必须使用 `.ds-numeric`。按钮保持 pill。卡片 32px、产品面板 24px。容器 `.ds-container` 最大 1200px。源规范照片场景（本 starter 未使用）：4:3、无阴影、提供图片宽高；禁止用生成的人物/客户标志作虚假背书。

源规范颜色与其他品牌体系隔离，原文禁止的配色不能由 shadcn 默认 variants 绕开。全局主题、表单行为及 token 对照测试均是完整 starter 的一部分。
