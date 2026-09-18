export const sourceUrl = 'https://github.com/VoltAgent/awesome-design-md/blob/e06a96660396d741d0c106c8972172254dafbdc2/design-md/stripe/DESIGN.md'

export const navigation = [
  { title: '开始', items: [{ id: 'overview', label: '设计概览', icon: 'overview' }, { id: 'installation', label: '快速开始', icon: 'code' }] },
  { title: '设计基础', items: [{ id: 'colors', label: '色彩', icon: 'color' }, { id: 'typography', label: '字体与排版', icon: 'type' }, { id: 'geometry', label: '间距与层次', icon: 'layout' }] },
  { title: '组件', items: [{ id: 'buttons', label: '按钮与标签', icon: 'button' }, { id: 'inputs', label: '输入与表单', icon: 'input' }, { id: 'cards', label: '卡片与定价', icon: 'card' }, { id: 'navigation', label: '导航与页脚', icon: 'nav' }] },
  { title: '组合与规范', items: [{ id: 'patterns', label: '产品界面组合', icon: 'layers' }, { id: 'audit', label: '源规范核对', icon: 'check' }] },
] as const

export const colors = [
  { name: 'primary', label: '主强调', value: '#533afd' },
  { name: 'ink', label: '深海军蓝', value: '#0d253d' },
  { name: 'canvas', label: '纯白画布', value: '#ffffff' },
  { name: 'canvas-soft', label: '冷色表面', value: '#f6f9fc' },
  { name: 'canvas-cream', label: '暖色间奏', value: '#f5e9d4' },
  { name: 'primary-deep', label: '强调悬停', value: '#4434d4' },
  { name: 'primary-press', label: '强调按下', value: '#2e2b8c' },
  { name: 'primary-soft', label: '产品强调', value: '#665efd' },
  { name: 'primary-bg-subdued-hover', label: '标签背景', value: '#b9b9f9' },
  { name: 'brand-dark-900', label: '深色面板', value: '#1c1e54' },
  { name: 'ink-secondary', label: '次级文字', value: '#273951' },
  { name: 'ink-mute', label: '辅助文字', value: '#64748d' },
  { name: 'ink-mute-2', label: '导航辅助', value: '#61718a' },
  { name: 'on-primary', label: '反白文字', value: '#ffffff' },
  { name: 'hairline', label: '细分隔线', value: '#e3e8ee' },
  { name: 'hairline-input', label: '输入边界', value: '#a8c3de' },
  { name: 'ruby', label: '渐变点色', value: '#ea2261' },
  { name: 'magenta', label: '渐变粉色', value: '#f96bee' },
  { name: 'lemon', label: '渐变暖色', value: '#9b6829' },
  { name: 'shadow-blue', label: '阴影基色', value: '#003770' },
] as const

export const typeRoles = [
  ['display-xxl', 56, 300, '1.03', '-1.4'], ['display-xl', 48, 300, '1.15', '-0.96'],
  ['display-lg', 32, 300, '1.1', '-0.64'], ['display-md', 26, 300, '1.12', '-0.26'],
  ['heading-lg', 22, 300, '1.1', '-0.22'], ['heading-md', 20, 300, '1.4', '-0.2'],
  ['heading-sm', 18, 300, '1.4', '0'], ['body-lg', 16, 300, '1.4', '0'],
  ['body-md', 15, 300, '1.4', '0'], ['body-tabular', 14, 300, '1.4', '-0.42'],
  ['button-md', 16, 400, '1.0', '0'], ['button-sm', 14, 400, '1.0', '0'],
  ['caption', 13, 400, '1.4', '-0.39'], ['micro', 11, 300, '1.4', '0'],
  ['micro-cap', 10, 400, '1.15', '0.1'],
] as const

export const spacing = [['xxs', 2], ['xs', 4], ['sm', 8], ['md', 12], ['lg', 16], ['xl', 24], ['xxl', 32], ['huge', 64]] as const
export const radii = [['xs', 4], ['sm', 6], ['md', 8], ['lg', 12], ['xl', 16], ['pill', 9999]] as const

export const auditRows = [
  ['色彩', '20 / 20', '完整保留原值和用途。Ruby 与 Magenta 只用于渐变或产品点色，不作为操作按钮。'],
  ['排版', '15 / 15', '字号、字重、行高、字距均已落实；ss01 全局启用，金额另加 tnum。'],
  ['几何', '14 / 14', '8 档间距与 6 档圆角完整实现；容器 1200px，响应断点 768 / 1024 / 1440px。'],
  ['深度', '完整', '平面、两级蓝调阴影、网状渐变。渐变图是重新制作的资产，不是官方原图。'],
  ['组件条目', '15 / 15', '按钮及按下态、输入及聚焦态、5 类卡片、标签、导航、链接与页脚全部有对应实现。'],
  ['签名组合', '完整', '渐变背景、深色产品面板、等宽数字；组合面板随屏宽从三块减到两块再到一块。'],
  ['字体授权', '已替代', '未打包 Sohne 或 SF Pro。使用 OFL 授权 Inter；中文优先系统字体，缺字时按需加载 Noto Sans SC。'],
  ['交互与状态', '工程补充', '原文没有完整状态机；补齐悬停、禁用、焦点、校验反馈、菜单关闭与减少动态效果。'],
  ['语义与暗色', '源文件未定义', '不编造成功/警告色板，不声称有完整暗色主题。深色卡片是局部表面，不是全站主题。'],
  ['品牌资产', '不导入', '不复制品牌 logo、营销文案或真实交易；所有界面数据均明确标为演示。'],
] as const
