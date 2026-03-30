"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { categories } from "./data"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 shrink-0 border-r bg-muted/30 h-screen sticky top-0 overflow-y-auto">
      <div className="p-4">
        <Link href="/design-system" className="block text-sm font-semibold mb-4 text-foreground hover:underline">
          Design System
        </Link>
        <div className="flex flex-col gap-2">
          {categories.map((category) => {
            const isAnyItemActive = category.items.some(item => pathname === item.href)
            
            return (
              <Collapsible key={category.name} defaultOpen={isAnyItemActive || category.name === "Atoms"}>
                <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider hover:bg-muted/50 transition-colors group">
                  {category.name}
                  <ChevronDown className="h-3 w-3 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
                  <nav className="flex flex-col gap-0.5 mt-1 ml-2 border-l pl-2">
                    {category.items.map((item) => (
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
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
