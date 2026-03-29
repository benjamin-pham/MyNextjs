import { Sidebar } from "./_sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { ComponentSearch } from "@/app/components/component-search"

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6 justify-between">
          <div className="flex-1"></div>
          <div className="flex items-center gap-4">
            <ComponentSearch />
            <ModeToggle />
          </div>
        </header>
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
