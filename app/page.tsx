import { ShowcaseShell } from '@/components/showcase/shell'
import { Overview, Foundations } from '@/components/showcase/foundations'
import { ButtonShowcase, FormShowcase } from '@/components/showcase/interactive'
import { FormControlsShowcase, FeedbackShowcase, DataNavShowcase } from '@/components/showcase/controls'
import { CardShowcase, NavigationShowcase, ProductComposite } from '@/components/showcase/patterns'
import { Documentation } from '@/components/showcase/documentation'

export default function Page() {
  return <ShowcaseShell>
    {/* v0 Design System Showcase Page */}
    <Overview />
    <Foundations />
    <ButtonShowcase />
    <FormShowcase />
    <FormControlsShowcase />
    <FeedbackShowcase />
    <DataNavShowcase />
    <CardShowcase />
    <NavigationShowcase />
    <ProductComposite />
    <Documentation />
  </ShowcaseShell>
}
