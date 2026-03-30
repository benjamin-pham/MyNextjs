"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
  </svg>
)

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const LogOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
  </svg>
)

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" />
  </svg>
)

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
)

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5v14" />
  </svg>
)

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
  </svg>
)

/* ─── demos ──────────────────────────────────────────────────────────────── */

function BasicDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Mở menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Hồ sơ</DropdownMenuItem>
        <DropdownMenuItem>Thanh toán</DropdownMenuItem>
        <DropdownMenuItem>Cài đặt</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function WithIconsDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <UserIcon />
          Tài khoản
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tài khoản của tôi</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <UserIcon />
            Hồ sơ
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            Thanh toán
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            Cài đặt
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <GithubIcon />
            GitHub
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CloudIcon />
            API
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Đăng xuất
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function CheckboxDemo() {
  const [showStatus, setShowStatus] = useState(true)
  const [showPanel, setShowPanel] = useState(false)
  const [showActivity, setShowActivity] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Hiển thị</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Tuỳ chọn hiển thị</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked={showStatus} onCheckedChange={setShowStatus}>
          Thanh trạng thái
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
          Bảng điều khiển
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem checked={showActivity} onCheckedChange={setShowActivity} disabled>
          Nhật ký hoạt động
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function RadioDemo() {
  const [position, setPosition] = useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Vị trí panel</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Vị trí</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Trên</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Dưới</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Phải</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function SubMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Tùy chọn</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <UserIcon />
          Hồ sơ
        </DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <PlusIcon />
            Mời thành viên
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Qua Email</DropdownMenuItem>
            <DropdownMenuItem>Qua tin nhắn</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Thêm cách khác...</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SettingsIcon />
          Cài đặt
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function DestructiveDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Hành động</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Sao chép</DropdownMenuItem>
        <DropdownMenuItem>Chỉnh sửa</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <TrashIcon />
          Xoá
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function InsetDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Inset items</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel inset>Dự án</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset>Tạo mới</DropdownMenuItem>
        <DropdownMenuItem inset>Nhân bản</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem inset variant="destructive">Xoá dự án</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function DropdownMenuPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Dropdown Menu</h1>
        <p className="text-sm text-muted-foreground">
          Menu thả xuống hiển thị danh sách các hành động hoặc tuỳ chọn khi người dùng nhấn vào trigger — được xây dựng trên Radix UI DropdownMenu.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Mở menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Nhãn</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Mục 1</DropdownMenuItem>
    <DropdownMenuItem>Mục 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <BasicDemo />
        </DemoBlock>
        <CodeBlock code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Mở menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Hồ sơ</DropdownMenuItem>
    <DropdownMenuItem>Thanh toán</DropdownMenuItem>
    <DropdownMenuItem>Cài đặt</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Đăng xuất</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`} />
      </ShowcaseSection>

      {/* ── 2. Với icon và shortcut ── */}
      <ShowcaseSection title="2. Với icon và shortcut">
        <p className="text-sm text-muted-foreground">
          Đặt icon SVG trực tiếp trong <code className="text-xs font-mono">DropdownMenuItem</code>. Dùng{" "}
          <code className="text-xs font-mono">DropdownMenuShortcut</code> để hiển thị phím tắt ở bên phải.
        </p>
        <DemoBlock>
          <WithIconsDemo />
        </DemoBlock>
        <CodeBlock code={`<DropdownMenuItem>
  <UserIcon />
  Hồ sơ
  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
</DropdownMenuItem>`} />
      </ShowcaseSection>

      {/* ── 3. Checkbox items ── */}
      <ShowcaseSection title="3. Checkbox items">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">DropdownMenuCheckboxItem</code> để cho phép người dùng bật/tắt nhiều tuỳ chọn độc lập.
        </p>
        <DemoBlock>
          <CheckboxDemo />
        </DemoBlock>
        <CodeBlock code={`const [show, setShow] = useState(true)

<DropdownMenuCheckboxItem checked={show} onCheckedChange={setShow}>
  Thanh trạng thái
</DropdownMenuCheckboxItem>`} />
      </ShowcaseSection>

      {/* ── 4. Radio items ── */}
      <ShowcaseSection title="4. Radio items">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">DropdownMenuRadioGroup</code> kết hợp{" "}
          <code className="text-xs font-mono">DropdownMenuRadioItem</code> để chọn một trong nhiều tuỳ chọn.
        </p>
        <DemoBlock>
          <RadioDemo />
        </DemoBlock>
        <CodeBlock code={`const [position, setPosition] = useState("bottom")

<DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
  <DropdownMenuRadioItem value="top">Trên</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="bottom">Dưới</DropdownMenuRadioItem>
  <DropdownMenuRadioItem value="right">Phải</DropdownMenuRadioItem>
</DropdownMenuRadioGroup>`} />
      </ShowcaseSection>

      {/* ── 5. Submenu ── */}
      <ShowcaseSection title="5. Submenu">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">DropdownMenuSub</code>,{" "}
          <code className="text-xs font-mono">DropdownMenuSubTrigger</code> và{" "}
          <code className="text-xs font-mono">DropdownMenuSubContent</code> để tạo menu lồng nhau.
        </p>
        <DemoBlock>
          <SubMenuDemo />
        </DemoBlock>
        <CodeBlock code={`<DropdownMenuSub>
  <DropdownMenuSubTrigger>
    <PlusIcon />
    Mời thành viên
  </DropdownMenuSubTrigger>
  <DropdownMenuSubContent>
    <DropdownMenuItem>Qua Email</DropdownMenuItem>
    <DropdownMenuItem>Qua tin nhắn</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Thêm cách khác...</DropdownMenuItem>
  </DropdownMenuSubContent>
</DropdownMenuSub>`} />
      </ShowcaseSection>

      {/* ── 6. Destructive variant ── */}
      <ShowcaseSection title="6. Destructive variant">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">variant="destructive"</code> vào{" "}
          <code className="text-xs font-mono">DropdownMenuItem</code> để hiển thị hành động nguy hiểm bằng màu đỏ.
        </p>
        <DemoBlock>
          <DestructiveDemo />
        </DemoBlock>
        <CodeBlock code={`<DropdownMenuItem variant="destructive">
  <TrashIcon />
  Xoá
  <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
</DropdownMenuItem>`} />
      </ShowcaseSection>

      {/* ── 7. Inset ── */}
      <ShowcaseSection title="7. Inset — thụt lề căn chỉnh với icon">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">inset</code> vào <code className="text-xs font-mono">DropdownMenuItem</code>{" "}
          hoặc <code className="text-xs font-mono">DropdownMenuLabel</code> để thụt lề trái, căn thẳng hàng với các item có icon.
        </p>
        <DemoBlock>
          <InsetDemo />
        </DemoBlock>
        <CodeBlock code={`<DropdownMenuLabel inset>Dự án</DropdownMenuLabel>
<DropdownMenuItem inset>Tạo mới</DropdownMenuItem>
<DropdownMenuItem inset variant="destructive">Xoá dự án</DropdownMenuItem>`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <p className="text-sm text-muted-foreground font-medium mb-2">DropdownMenuContent</p>
        <PropsTable rows={[
          { prop: "align", type: '"start" | "center" | "end"', default_: '"start"', description: "Căn chỉnh ngang của content so với trigger." },
          { prop: "sideOffset", type: "number", default_: "4", description: "Khoảng cách (px) giữa content và trigger." },
          { prop: "side", type: '"top" | "right" | "bottom" | "left"', default_: '"bottom"', description: "Phía mở menu." },
        ]} />
        <p className="text-sm text-muted-foreground font-medium mt-4 mb-2">DropdownMenuItem</p>
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "destructive"', default_: '"default"', description: 'Màu destructive khi "destructive".' },
          { prop: "inset", type: "boolean", default_: "false", description: "Thêm padding trái để căn với item có icon." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá item." },
          { prop: "onSelect", type: "(event: Event) => void", description: "Callback khi item được chọn." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Render thành component con thay vì thẻ mặc định." },
        ]} />
        <p className="text-sm text-muted-foreground font-medium mt-4 mb-2">DropdownMenuCheckboxItem</p>
        <PropsTable rows={[
          { prop: "checked", type: "boolean | 'indeterminate'", description: "Trạng thái đang chọn." },
          { prop: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback khi trạng thái thay đổi." },
          { prop: "inset", type: "boolean", default_: "false", description: "Thêm padding trái." },
        ]} />
        <p className="text-sm text-muted-foreground font-medium mt-4 mb-2">DropdownMenuRadioGroup</p>
        <PropsTable rows={[
          { prop: "value", type: "string", description: "Giá trị đang được chọn." },
          { prop: "onValueChange", type: "(value: string) => void", description: "Callback khi giá trị thay đổi." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li><code className="text-xs font-mono">DropdownMenuTrigger</code> bọc button gốc của bạn — dùng <code className="text-xs font-mono">asChild</code> để tránh render thêm thẻ <code className="text-xs font-mono">&lt;button&gt;</code> lồng nhau.</li>
          <li><code className="text-xs font-mono">DropdownMenuContent</code> tự bọc trong <code className="text-xs font-mono">Portal</code> — không cần thêm <code className="text-xs font-mono">DropdownMenuPortal</code> thủ công trừ khi cần kiểm soát container.</li>
          <li>Icon SVG trong <code className="text-xs font-mono">DropdownMenuItem</code> tự được áp dụng <code className="text-xs font-mono">size-4</code> qua selector <code className="text-xs font-mono">[&_svg:not([class*='size-'])]</code>.</li>
          <li>Dùng <code className="text-xs font-mono">DropdownMenuGroup</code> để nhóm các item liên quan — không ảnh hưởng visual nhưng giúp accessibility.</li>
          <li><code className="text-xs font-mono">DropdownMenuShortcut</code> chỉ hiển thị UI — không tự đăng ký keyboard shortcut, cần tự xử lý với <code className="text-xs font-mono">useEffect</code> + <code className="text-xs font-mono">keydown</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
