import { LayoutFullPage } from "@/components/Layout"

export default function FullPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LayoutFullPage>{children}</LayoutFullPage>
    )
}