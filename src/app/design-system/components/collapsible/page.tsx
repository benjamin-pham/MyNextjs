"use client"

import * as React from "react"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const ChevronsUpDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" />
  </svg>
)

const ViewVerticalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M3 12h18" /><path d="M3 18h18" /><path d="M3 6h18" />
  </svg>
)

const MaximizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />
  </svg>
)

const MinimizeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" />
  </svg>
)

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`size-4 ${className}`}>
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </svg>
)

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function CollapsiblePage() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Collapsible</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần cho phép người dùng mở rộng hoặc thu gọn một vùng nội dung.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>
        `} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Collapsible className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
              <h4 className="text-sm font-semibold">
                Bấm để xem thêm thông tin
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDownIcon />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                Nội dung bổ sung được hiển thị khi bạn mở rộng component này.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </DemoBlock>
        <CodeBlock code={`
<Collapsible className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
    <h4 className="text-sm font-semibold">
      Bấm để xem thêm thông tin
    </h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDownIcon />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm text-muted-foreground">
      Nội dung bổ sung được hiển thị khi bạn mở rộng component này.
    </div>
  </CollapsibleContent>
</Collapsible>
        `} />
      </ShowcaseSection>

      {/* ── 2. Controlled state ── */}
      <ShowcaseSection title="2. Controlled state">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">open</code> và <code className="text-xs font-mono">onOpenChange</code> để điều khiển trạng thái mở rộng từ bên ngoài.
        </p>
        <DemoBlock>
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-[350px] space-y-2"
          >
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
              <h4 className="text-sm font-semibold">
                @manpm starred 3 repositories
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ChevronsUpDownIcon />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">
              @radix-ui/primitives
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @radix-ui/colors
              </div>
              <div className="rounded-md border px-4 py-3 font-mono text-sm">
                @lucide-react
              </div>
            </CollapsibleContent>
          </Collapsible>
        </DemoBlock>
        <CodeBlock code={`
const [isOpen, setIsOpen] = React.useState(false)

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <div className="flex items-center justify-between">
    <h4>@manpm starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">
        <ChevronsUpDownIcon />
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="border px-4 py-3 font-mono text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="border px-4 py-3 font-mono text-sm">
      @radix-ui/colors
    </div>
    <div className="border px-4 py-3 font-mono text-sm">
      @lucide-react
    </div>
  </CollapsibleContent>
</Collapsible>
        `} />
      </ShowcaseSection>

      {/* ── 3. Disabled ── */}
      <ShowcaseSection title="3. Disabled">
        <p className="text-sm text-muted-foreground">
          Khi <code className="text-xs font-mono">disabled</code> được set thành true, người dùng không thể tương tác với trigger.
        </p>
        <DemoBlock>
          <Collapsible disabled className="w-[350px] space-y-2 opacity-60">
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
              <h4 className="text-sm font-semibold">
                Vùng bị khóa (Disabled)
              </h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="w-9 p-0" disabled>
                  <ChevronsUpDownIcon />
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </DemoBlock>
        <CodeBlock code={`
<Collapsible disabled>
  <CollapsibleTrigger asChild>
    <Button disabled>Toggle</Button>
  </CollapsibleTrigger>
</Collapsible>
        `} />
      </ShowcaseSection>

      {/* ── 4. Settings Panel ── */}
      <ShowcaseSection title="4. Settings Panel">
        <p className="text-sm text-muted-foreground">
          Ví dụ thực tế sử dụng Collapsible trong bảng điều khiển cài đặt để ẩn/hiện các tùy chọn nâng cao.
        </p>
        <DemoBlock>
          <CollapsibleSettingsDemo />
        </DemoBlock>
        <CodeBlock code={`
export function CollapsibleSettings() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex items-start gap-2">
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="radius-x" className="sr-only">Radius X</FieldLabel>
              <Input id="radius-x" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-y" className="sr-only">Radius Y</FieldLabel>
              <Input id="radius-y" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel htmlFor="radius-tl" className="sr-only">Top Left</FieldLabel>
                <Input id="radius-tl" placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-tr" className="sr-only">Top Right</FieldLabel>
                <Input id="radius-tr" placeholder="0" defaultValue={0} />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon">
              {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
        `} />
      </ShowcaseSection>

      {/* ── 5. File Tree ── */}
      <ShowcaseSection title="5. File Tree">
        <p className="text-sm text-muted-foreground">
          Sử dụng Collapsible lồng nhau để tạo giao diện cây thư mục (File Tree) phức tạp.
        </p>
        <DemoBlock>
          <CollapsibleFileTreeDemo />
        </DemoBlock>
        <CodeBlock code={`
type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

export function CollapsibleFileTree() {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
          ],
        },
        { name: "form.tsx" },
      ],
    },
    { name: "app.tsx" },
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="group w-full justify-start transition-none">
              <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
              <FolderIcon />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button key={fileItem.name} variant="link" size="sm" className="w-full justify-start gap-2 text-foreground">
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <Card className="w-full max-w-[16rem]">
      <CardHeader>
        <Tabs defaultValue="explorer">
          <TabsList className="w-full">
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="outline">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}
        `} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <PropsTable rows={[
          { prop: "open", type: "boolean", description: "Trạng thái mở của thành phần (controlled)." },
          { prop: "onOpenChange", type: "function", description: "Callback được gọi khi trạng thái mở thay đổi." },
          { prop: "defaultOpen", type: "boolean", default_: "false", description: "Trạng thái mở mặc định (uncontrolled)." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Ngăn người dùng tương tác." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Render component cha thành tag/component con." },
        ]} />
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Sử dụng <code className="text-xs font-mono">asChild</code> trên <code className="text-xs font-mono">CollapsibleTrigger</code> nếu bạn muốn dùng <code className="text-xs font-mono">Button</code> hoặc custom component làm trigger.</li>
          <li>Đảm bảo nội dung trong <code className="text-xs font-mono">CollapsibleContent</code> có thể truy cập được thông qua bàn phím khi được mở.</li>
          <li>Bạn có thể thêm animation cho <code className="text-xs font-mono">CollapsibleContent</code> bằng cách sử dụng các utility class của Tailwind CSS (ví dụ: <code className="text-xs font-mono">overflow-hidden</code> và transitions).</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}

function CollapsibleFileTreeDemo() {
  type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" },
          ],
        },
        { name: "login-form.tsx" },
        { name: "register-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    },
    {
      name: "hooks",
      items: [
        { name: "use-media-query.ts" },
        { name: "use-debounce.ts" },
        { name: "use-local-storage.ts" },
      ],
    },
    {
      name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground gap-2"
            >
              <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
              <FolderIcon />
              {fileItem.name}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-1 ml-5">
            <div className="flex flex-col gap-1">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2 text-foreground h-8 px-2 font-normal"
      >
        <div className="size-4" />
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  return (
    <Card className="mx-auto w-full max-w-[16rem] h-[400px] flex flex-col" size="sm">
      <CardHeader className="py-2">
        <Tabs defaultValue="explorer">
          <TabsList className="w-full h-8">
            <TabsTrigger value="explorer" className="text-xs">Explorer</TabsTrigger>
            <TabsTrigger value="outline" className="text-xs">Outline</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="flex-1 overflow-auto py-2">
        <div className="flex flex-col gap-1">
          {fileTree.map((item) => renderItem(item))}
        </div>
      </CardContent>
    </Card>
  )
}

function CollapsibleSettingsDemo() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="w-full max-w-xs" size="sm">
      <CardHeader>
        <CardTitle>Radius</CardTitle>
        <CardDescription>Set the corner radius of the element.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="radius-x" className="sr-only">
                Radius X
              </FieldLabel>
              <Input id="radius-x" placeholder="0" defaultValue={0} />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-y" className="sr-only">
                Radius Y
              </FieldLabel>
              <Input id="radius-y" placeholder="0" defaultValue={0} />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-2 gap-2">
              <Field>
                <FieldLabel htmlFor="radius-tl" className="sr-only">
                  Top Left
                </FieldLabel>
                <Input id="radius-tl" placeholder="0" defaultValue={0} />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-tr" className="sr-only">
                  Top Right
                </FieldLabel>
                <Input id="radius-tr" placeholder="0" defaultValue={0} />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger asChild>
            <Button variant="outline" size="icon">
              {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
            </Button>
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
