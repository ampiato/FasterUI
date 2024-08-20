import { Subheading } from "./Subheading"
import { Text } from "./Text"

export interface SectionProps {
  title: string
  subtitle?: string
  children?: React.ReactNode | React.ReactNode[]
}

export const Section: React.FC<SectionProps> = ({ title, subtitle, children }) => {
  return (
    <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="space-y-1">
        <Subheading title={title} />
        {subtitle && <Text>{subtitle}</Text>}
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}
