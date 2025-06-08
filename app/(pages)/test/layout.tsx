export default function TestLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="prose w-full max-w-[600px] mx-auto p-[24px] bg-gray-200">{children}</main>
    )
}