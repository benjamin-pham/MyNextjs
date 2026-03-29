"use client"

import * as React from "react"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from "lucide-react"

/* ─── CommandDialogDemo ──────────────────────────────────────────────────── */

function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-sm text-muted-foreground">
        Nhấn phím{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        hoặc{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">Ctrl</span>J
        </kbd>
        {" "}để mở
      </p>
      <button 
        onClick={() => setOpen(true)}
        className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Mở Command Dialog
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Tìm kiếm công cụ hoặc chức năng..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
            <CommandGroup heading="Gợi ý">
              <CommandItem>
                <CalendarIcon />
                <span>Lịch</span>
              </CommandItem>
              <CommandItem>
                <SmileIcon />
                <span>Tìm Emoji</span>
              </CommandItem>
              <CommandItem>
                <CalculatorIcon />
                <span>Máy tính</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Cài đặt">
              <CommandItem>
                <UserIcon />
                <span>Tài khoản</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>Thanh toán</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>Cấu hình</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function CommandPage() {
  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Command</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần command menu (palette) nhanh và có thể tùy biến, hỗ trợ bàn phím, được xây dựng trên cmdk.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Command className="max-w-sm rounded-lg border">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Command className="rounded-lg border shadow-md md:min-w-[450px]">
            <CommandInput placeholder="Tìm kiếm..." />
            <CommandList>
              <CommandEmpty>Không tìm thấy kết quả phù hợp.</CommandEmpty>
              <CommandGroup heading="Gợi ý">
                <CommandItem>
                  <CalendarIcon />
                  <span>Lịch trình</span>
                </CommandItem>
                <CommandItem>
                  <SmileIcon />
                  <span>Tìm kiếm Emoji</span>
                </CommandItem>
                <CommandItem disabled>
                  <CalculatorIcon />
                  <span>Máy tính (Disabled)</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Cài đặt">
                <CommandItem>
                  <UserIcon />
                  <span>Hồ sơ cá nhân</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon />
                  <span>Thông tin thanh toán</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon />
                  <span>Tùy chỉnh hệ thống</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </DemoBlock>
        <CodeBlock code={`<Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput placeholder="Tìm kiếm..." />
  <CommandList>
    <CommandEmpty>Không tìm thấy kết quả phù hợp.</CommandEmpty>
    <CommandGroup heading="Gợi ý">
      <CommandItem>
        <CalendarIcon />
        <span>Lịch trình</span>
      </CommandItem>
      <CommandItem>
        <SmileIcon />
        <span>Tìm kiếm Emoji</span>
      </CommandItem>
      <CommandItem disabled>
        <CalculatorIcon />
        <span>Máy tính (Disabled)</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Cài đặt">
      <CommandItem>
        <UserIcon />
        <span>Hồ sơ cá nhân</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCardIcon />
        <span>Thông tin thanh toán</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <SettingsIcon />
        <span>Tùy chỉnh hệ thống</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`} />
      </ShowcaseSection>

      {/* ── 2. Command Dialog (Modal) ── */}
      <ShowcaseSection title="2. Dạng Dialog (Modal)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">CommandDialog</code> để render command palette dưới dạng một modal ở giữa màn hình, tương tự như Spotlight trên macOS.
        </p>
        <DemoBlock>
          <CommandDialogDemo />
        </DemoBlock>
        <CodeBlock code={`"use client"

import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Nhấn phím <kbd>⌘ J</kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="Tìm kiếm..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả.</CommandEmpty>
            <CommandGroup heading="Gợi ý">
              <CommandItem>
                <CalendarIcon />
                <span>Lịch</span>
              </CommandItem>
              {/* ... */}
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  )
}`} />
      </ShowcaseSection>

      {/* ── 3. Lưu ý ── */}
      <ShowcaseSection title="3. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Component này bao bọc thư viện <code className="text-xs font-mono">cmdk</code>.</li>
          <li>Đảm bảo import đủ các phần phụ (Input, List, Empty, Group, Item, v.v...) để giữ đúng cấu trúc.</li>
          <li>Bạn có thể render custom icon bên trong <code className="text-xs font-mono">CommandItem</code>.</li>
          <li><code className="text-xs font-mono">CommandDialog</code> bản chất là một <code className="text-xs font-mono">Dialog</code> chứa <code className="text-xs font-mono">Command</code> bên trong.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
