"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { components } from "@/app/design-system/data"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Search } from "lucide-react"

export function ComponentSearch() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false)
      command()
    },
    []
  )

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="shrink-0"
        onClick={() => setOpen(true)}
        aria-label="Tìm kiếm components"
      >
        <Search className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Tìm kiếm components</span>
      </Button>
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        className="sm:max-w-2xl"
      >
        <Command>
          <CommandInput placeholder="Tìm kiếm components..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy component nào.</CommandEmpty>
            <CommandGroup heading="Components">
              {components.map((component) => (
                <CommandItem
                  key={component.href}
                  value={component.name}
                  onSelect={() => {
                    runCommand(() => router.push(component.href))
                  }}
                >
                  {component.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}
