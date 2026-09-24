import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const inter = localFont({
  src: '../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  weight: '100 900',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'stripe 风格 — 设计系统与组件规范',
  description: '基于单一设计规范构建的独立 UI 系统。包含完整 tokens、可复用组件与 Next.js starter；非官方，与 Stripe 无关联。',
  robots: { index: false, follow: false },
}
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#ffffff', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" className={`bg-background ${inter.variable}`}><body className="font-sans antialiased">{children}</body></html>
}
