import Link from "next/link"

const components: { name: string; href: string; description: string }[] = [
  { name: "Accordion", href: "/components/accordion", description: "A vertically stacked set of interactive headings that each contain a title, content snippet, and an icon indicating whether the content is expanded or collapsed." },
  { name: "Alert", href: "/components/alert", description: "Default & destructive variants, with icon support" },
  { name: "Alert Dialog", href: "/components/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { name: "Aspect Ratio", href: "/components/aspect-ratio", description: "Giữ tỷ lệ khung hình cho media & nội dung" },
]

export default function ComponentsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-2">Components</h1>
      <p className="text-sm text-muted-foreground mb-8">Chọn một component từ sidebar hoặc danh sách bên dưới.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
        {components.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border bg-card p-4 hover:bg-muted/50 transition-colors"
          >
            <div className="font-medium text-sm">{item.name}</div>
            <div className="text-xs text-muted-foreground mt-0.5">{item.description}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
