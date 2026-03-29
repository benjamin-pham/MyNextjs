import Link from "next/link"
import { components } from "./data"

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
