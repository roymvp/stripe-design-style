'use client'

import { useState } from 'react'
import { ArrowRight, Info, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import {
  Checkbox,
  Radio,
  RadioGroup,
  Switch,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  Label,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Alert,
  AlertContent,
  AlertTitle,
  AlertDescription,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  Progress,
  Skeleton,
  Avatar,
  AvatarFallback,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionPanel,
  Button,
} from '@design-systems/stripe-style'
import { Section } from './section'

export function FormControlsShowcase() {
  const [plan, setPlan] = useState('standard')
  return (
    <Section
      id="form-controls"
      title="表单控件"
      description="勾选、单选、开关与下拉选择共享同一套焦点环、圆角与状态色。选中态统一使用品牌靛蓝。"
      meta="4px 圆角 · 靛蓝选中 · 40px 命中区"
    >
      <div className="preview-panel grid gap-10 p-8 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <span className="spec-label">勾选框 · Checkbox</span>
          <div className="flex flex-col gap-3">
            <Label className="flex items-center gap-2.5"><Checkbox defaultChecked /> 接收产品更新邮件</Label>
            <Label className="flex items-center gap-2.5"><Checkbox /> 启用双重验证</Label>
            <Label className="flex items-center gap-2.5 opacity-50"><Checkbox disabled /> 此选项暂不可用</Label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="spec-label">单选 · Radio</span>
          <RadioGroup defaultValue="monthly" className="flex flex-col gap-3">
            <Label className="flex items-center gap-2.5"><Radio value="monthly" /> 按月结算</Label>
            <Label className="flex items-center gap-2.5"><Radio value="yearly" /> 按年结算（省 20%）</Label>
          </RadioGroup>
        </div>
        <div className="flex flex-col gap-5">
          <span className="spec-label">开关 · Switch</span>
          <div className="flex flex-col gap-3">
            <Label className="flex items-center justify-between gap-4"><span>测试模式</span><Switch defaultChecked /></Label>
            <Label className="flex items-center justify-between gap-4"><span>自动结算</span><Switch /></Label>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <span className="spec-label">下拉选择 · Select</span>
          <Select value={plan} onValueChange={setPlan}>
            <SelectTrigger className="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">标准版</SelectItem>
              <SelectItem value="scale">增长版</SelectItem>
              <SelectItem value="enterprise">企业版</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Section>
  )
}

export function FeedbackShowcase() {
  return (
    <Section
      id="feedback"
      title="反馈与浮层"
      description="提示、气泡、模态与横幅共享同一套浮层阴影与圆角。四种语义色仅用于状态表达，不作装饰。"
      meta="浮层阴影 · 语义状态色"
    >
      <div className="preview-panel flex flex-col gap-8 p-8">
        <div className="flex flex-col gap-4">
          <span className="spec-label">横幅提示 · Alert</span>
          <Alert variant="info"><Info /><AlertContent><AlertTitle>测试模式已开启</AlertTitle><AlertDescription>当前所有交易均为模拟数据，不会产生真实扣款。</AlertDescription></AlertContent></Alert>
          <Alert variant="success"><CheckCircle2 /><AlertContent><AlertTitle>支付已完成</AlertTitle><AlertDescription>本次结算已成功入账。</AlertDescription></AlertContent></Alert>
          <Alert variant="warning"><AlertTriangle /><AlertContent><AlertTitle>API 密钥即将过期</AlertTitle><AlertDescription>请在 7 天内轮换密钥以避免服务中断。</AlertDescription></AlertContent></Alert>
          <Alert variant="danger"><XCircle /><AlertContent><AlertTitle>结算失败</AlertTitle><AlertDescription>卡片被拒付，请更换支付方式后重试。</AlertDescription></AlertContent></Alert>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger render={<Button variant="outline">悬停显示提示</Button>} />
              <TooltipContent>密钥仅在创建时可见一次</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Popover>
            <PopoverTrigger render={<Button variant="outline">打开气泡</Button>} />
            <PopoverContent>
              <PopoverTitle>切换环境</PopoverTitle>
              <PopoverDescription>在测试与生产环境之间切换，数据相互隔离。</PopoverDescription>
            </PopoverContent>
          </Popover>
          <Dialog>
            <DialogTrigger render={<Button>打开模态框</Button>} />
            <DialogContent>
              <DialogHeader>
                <DialogTitle>删除 API 密钥</DialogTitle>
                <DialogDescription>此操作不可撤销。使用该密钥的集成将立即停止工作。</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose render={<Button variant="outline">取消</Button>} />
                <DialogClose render={<Button variant="danger">确认删除</Button>} />
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Section>
  )
}

export function DataNavShowcase() {
  const [page, setPage] = useState(2)
  return (
    <Section
      id="data-nav"
      title="数据与导航"
      description="表格、标签页、折叠面板、面包屑与分页构成后台常用骨架。数值列使用等宽数字对齐。"
      meta="发丝分隔 · 等宽数字"
    >
      <div className="preview-panel flex flex-col gap-10 p-8">
        <div className="flex flex-col gap-4">
          <span className="spec-label">标签页 · Tabs</span>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTab value="overview">概览</TabsTab>
              <TabsTab value="transactions">交易</TabsTab>
              <TabsTab value="payouts">结算</TabsTab>
            </TabsList>
            <TabsPanel value="overview" className="pt-4 text-body-md text-muted-foreground">账户在过去 30 天共处理 1,284 笔交易。</TabsPanel>
            <TabsPanel value="transactions" className="pt-4 text-body-md text-muted-foreground">最新交易将在此列出。</TabsPanel>
            <TabsPanel value="payouts" className="pt-4 text-body-md text-muted-foreground">下一次结算预计在两个工作日内完成。</TabsPanel>
          </Tabs>
        </div>

        <div className="flex flex-col gap-4">
          <span className="spec-label">表格 · Table</span>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>客户</TableHead>
                <TableHead>状态</TableHead>
                <TableHead className="text-right">金额</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow><TableCell>Acme Inc.</TableCell><TableCell>已支付</TableCell><TableCell className="text-right">¥1,204.00</TableCell></TableRow>
              <TableRow><TableCell>Globex</TableCell><TableCell>待处理</TableCell><TableCell className="text-right">¥860.50</TableCell></TableRow>
              <TableRow><TableCell>Initech</TableCell><TableCell>已退款</TableCell><TableCell className="text-right">¥320.00</TableCell></TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="spec-label">折叠面板 · Accordion</span>
            <Accordion openMultiple={false} defaultValue={['q1']}>
              <AccordionItem value="q1"><AccordionTrigger>如何轮换 API 密钥？</AccordionTrigger><AccordionPanel>在开发者设置中生成新密钥，旧密钥可设置宽限期后失效。</AccordionPanel></AccordionItem>
              <AccordionItem value="q2"><AccordionTrigger>支持哪些结算周期？</AccordionTrigger><AccordionPanel>支持按日、按周与按月自动结算。</AccordionPanel></AccordionItem>
            </Accordion>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="spec-label">进度 · Progress</span>
              <Progress value={64} />
            </div>
            <div className="flex flex-col gap-3">
              <span className="spec-label">骨架屏 · Skeleton</span>
              <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-pill" />
                <div className="flex flex-1 flex-col gap-2"><Skeleton className="h-3 w-2/3" /><Skeleton className="h-3 w-1/3" /></div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="spec-label">头像 · Avatar</span>
              <div className="flex items-center gap-3">
                <Avatar><AvatarFallback>SC</AvatarFallback></Avatar>
                <Avatar><AvatarFallback>AI</AvatarFallback></Avatar>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="spec-label">面包屑 · Breadcrumb</span>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem><BreadcrumbLink href="#data-nav">控制台</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbLink href="#data-nav">开发者</BreadcrumbLink></BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem><BreadcrumbPage>API 密钥</BreadcrumbPage></BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col gap-4">
          <span className="spec-label">分页 · Pagination</span>
          <Pagination>
            <PaginationContent>
              <PaginationItem><PaginationPrevious href="#data-nav" onClick={(e) => { e.preventDefault(); setPage((p) => Math.max(1, p - 1)) }} /></PaginationItem>
              {[1, 2, 3].map((n) => (
                <PaginationItem key={n}><PaginationLink href="#data-nav" isActive={page === n} onClick={(e) => { e.preventDefault(); setPage(n) }}>{n}</PaginationLink></PaginationItem>
              ))}
              <PaginationItem><PaginationEllipsis /></PaginationItem>
              <PaginationItem><PaginationLink href="#data-nav" isActive={page === 8} onClick={(e) => { e.preventDefault(); setPage(8) }}>8</PaginationLink></PaginationItem>
              <PaginationItem><PaginationNext href="#data-nav" onClick={(e) => { e.preventDefault(); setPage((p) => Math.min(8, p + 1)) }} /></PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </Section>
  )
}
