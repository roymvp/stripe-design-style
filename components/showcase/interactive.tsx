'use client'

import { useRef, useState, type FormEvent } from 'react'
import { ArrowRight, Check, Copy, LoaderCircle, Code2, Eye } from 'lucide-react'
import { Badge, Button, Input, Field, FieldLabel, FieldDescription, FieldError, FieldGroup } from '@design-systems/stripe-style'
import { Section } from './section'

export function ButtonShowcase() {
  const [code, setCode] = useState(false)
  const [message, setMessage] = useState('')
  return <Section id="buttons" title="按钮与标签" description="胶囊轮廓、简洁标签、明确主次。以下是不同状态的样本，不是同一页面的操作密度。" meta="圆角 9999px · 内边距 8 / 16px">
    <div className="preview-panel"><div className="flex items-center justify-between border-b border-border px-6 py-3"><span className="text-sm text-muted-foreground">交互样例</span><Button variant="ghost" size="sm" aria-expanded={code} aria-controls="button-code" onClick={() => setCode(!code)}>{code ? <Eye /> : <Code2 />}{code ? '显示预览' : '查看代码'}</Button></div>
      {code ? <pre id="button-code" className="section-code rounded-none" tabIndex={0} aria-label="按钮组件用法"><code>{`import { Button } from '@design-systems/stripe-style'\n\n<Button>创建项目</Button>\n<Button variant="outline">了解详情</Button>\n<Button variant="dark">打开控制台</Button>\n<Button disabled>暂不可用</Button>`}</code></pre> : <div className="grid gap-8 p-8 sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col items-start gap-4"><Button onClick={() => setMessage('已触发主操作。这是组件演示，不会创建真实项目。')}>创建项目<ArrowRight data-icon="inline-end" /></Button><span className="spec-label">主按钮 · Primary</span></div>
        <div className="flex flex-col items-start gap-4"><Button variant="outline" onClick={() => setMessage('已触发次操作。这是描边按钮的交互反馈。')}>了解详情<ArrowRight data-icon="inline-end" /></Button><span className="spec-label">次按钮 · Secondary</span></div>
        <div className="flex flex-col items-start gap-4"><Button variant="dark" onClick={() => setMessage('已触发深色按钮。这是局部深色表面的样例。')}>打开控制台</Button><span className="spec-label">深色按钮 · On dark</span></div>
        <div className="flex flex-col items-start gap-4"><Button disabled>暂不可用</Button><span className="spec-label">禁用 · Disabled</span></div>
        <div className="flex flex-col items-start gap-4"><Button disabled aria-busy="true"><LoaderCircle className="animate-spin" />处理中</Button><span className="spec-label">加载状态静态样例</span></div>
        <div className="flex flex-col items-start gap-4"><Button variant="link" onClick={() => setMessage('已触发文字操作。')}>查看文档<ArrowRight data-icon="inline-end" /></Button><span className="spec-label">轻量文字操作</span></div>
        <div className="flex flex-col items-start gap-4"><Badge>预览版本</Badge><span className="spec-label">柔和标签 · Soft tag</span></div>
        <div className="flex flex-col items-start gap-4"><Badge variant="outline">工程补充</Badge><span className="spec-label">描边标签 · 补充变体</span></div>
      </div>}
      <div className="preview-caption" role="status" aria-live="polite">{message || '试试悬停、按下，或使用 Tab 键检查焦点。主按钮按下时切换到 primary-press。'}</div>
    </div>
  </Section>
}

export function FormShowcase() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [valid, setValid] = useState(false)
  const emailRef = useRef<HTMLInputElement>(null)
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const okay = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    setError(okay ? '' : '请输入完整邮箱地址，例如 hello@example.com。')
    setValid(okay)
    if (!okay) emailRef.current?.focus()
  }
  return <Section id="inputs" title="输入与表单" description="冷色边界，靛蓝焦点。标签、提示和错误信息保持同一条阅读基线。" meta="6px 圆角 · ≥ 40px 高度">
    <div className="grid items-start gap-8 lg:grid-cols-2">
      <form noValidate onSubmit={submit} className="preview-panel p-8">
        <h3 className="text-heading-md">试用表单交互</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">仅在当前页面校验，不发送或保存任何数据。</p>
        <FieldGroup className="mt-6">
          <Field data-invalid={Boolean(error)}><FieldLabel htmlFor="demo-email">工作邮箱</FieldLabel><Input ref={emailRef} id="demo-email" name="email" type="email" value={email} required autoComplete="email" placeholder="hello@example.com" aria-invalid={Boolean(error)} aria-describedby={error ? 'demo-email-error' : 'demo-email-help'} onChange={event => { setEmail(event.target.value); setError(''); setValid(false) }} />{error ? <FieldError id="demo-email-error">{error}</FieldError> : <FieldDescription id="demo-email-help">输入邮箱后，点击下方按钮验证。</FieldDescription>}</Field>
          <Field><FieldLabel htmlFor="demo-project">项目名称</FieldLabel><Input id="demo-project" name="project" placeholder="例如：我的工作空间" maxLength={80} /></Field>
        </FieldGroup>
        <div className="mt-6"><Button type="submit">验证输入<ArrowRight data-icon="inline-end" /></Button></div>
        <p role="status" className="mt-4 min-h-6 text-sm text-secondary-foreground">{valid ? '格式校验通过。演示结束，未提交任何数据。' : ''}</p>
      </form>
      <div className="flex flex-col gap-6">
        <Field><FieldLabel htmlFor="state-default">默认状态</FieldLabel><Input id="state-default" placeholder="等待输入内容" /></Field>
        <Field data-disabled><FieldLabel htmlFor="state-disabled">禁用状态</FieldLabel><Input id="state-disabled" disabled value="此字段当前不可编辑" /></Field>
        <Field data-invalid><FieldLabel htmlFor="state-invalid">校验失败样例</FieldLabel><Input id="state-invalid" defaultValue="hello@" aria-invalid aria-describedby="state-error" /><FieldDescription id="state-error">邮箱地址不完整，请补全域名。错误用文字与虚线共同表达。</FieldDescription></Field>
        <p className="rounded-md bg-secondary px-5 py-4 text-sm leading-relaxed text-muted-foreground">工程补充：原规范没有错误色板，因此不引入新红色；用原有深色、虚线边界与明确文案表达错误。</p>
      </div>
    </div>
  </Section>
}

export function CopyCommand({ value }: { value: string }) {
  const [message, setMessage] = useState('')
  async function copy() {
    try { await navigator.clipboard.writeText(value); setMessage('已复制') }
    catch { setMessage('无法自动复制，请选中命令复制。') }
  }
  return <div><div className="flex items-center justify-between gap-3 rounded-md bg-secondary px-5 py-4"><code className="min-w-0 break-all font-mono text-sm">{value}</code><Button variant="ghost" size="icon" aria-label="复制安装命令" onClick={copy}>{message === '已复制' ? <Check /> : <Copy />}</Button></div><p className="mt-2 min-h-5 text-sm text-muted-foreground" role="status">{message}</p></div>
}
