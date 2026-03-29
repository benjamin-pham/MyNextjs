"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const components: { name: string; href: string }[] = [

]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 shrink-0 border-r bg-muted/30 h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <Link href="/components" className="block text-sm font-semibold mb-4 text-foreground">
          Components
        </Link>
        <nav className="flex flex-col gap-0.5">
          {components.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm transition-colors",
                pathname === item.href
                  ? "bg-background font-medium text-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-background/60 hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
