"use client"

import { useState } from "react"
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" />
  </svg>
)

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14H6L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4h6v2" />
  </svg>
)

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)

const ScissorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
  </svg>
)

/* ─── trigger area ────────────────────────────────────────────────────────── */

function TriggerArea({ label = "Nhấp chuột phải vào đây" }: { label?: string }) {
  return (
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/30 bg-muted/20 text-sm text-muted-foreground select-none">
      {label}
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function ContextMenuPage() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState("pedro")

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Context Menu</h1>
        <p className="text-sm text-muted-foreground">
          Menu ngữ cảnh hiển thị khi nhấp chuột phải — cung cấp các hành động phù hợp với nội dung được chọn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuLabel,
  ContextMenuGroup,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
} from "@/components/ui/context-menu"`} />
      </ShowcaseSection>

      {/* ── Usage ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<ContextMenu>
  <ContextMenuTrigger>Nhấp chuột phải vào đây</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Hồ sơ</ContextMenuItem>
    <ContextMenuItem>Thanh toán</ContextMenuItem>
    <ContextMenuItem>Cài đặt</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-48">
              <ContextMenuItem>Hồ sơ</ContextMenuItem>
              <ContextMenuItem>Thanh toán</ContextMenuItem>
              <ContextMenuItem>Nhóm</ContextMenuItem>
              <ContextMenuItem>Đăng ký</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenu>
  <ContextMenuTrigger>Nhấp chuột phải vào đây</ContextMenuTrigger>
  <ContextMenuContent className="w-48">
    <ContextMenuItem>Hồ sơ</ContextMenuItem>
    <ContextMenuItem>Thanh toán</ContextMenuItem>
    <ContextMenuItem>Nhóm</ContextMenuItem>
    <ContextMenuItem>Đăng ký</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`} />
      </ShowcaseSection>

      {/* ── 2. Phím tắt ── */}
      <ShowcaseSection title="2. Phím tắt (Shortcuts)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ContextMenuShortcut</code> để hiển thị gợi ý phím tắt bên phải mục.
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuItem>
                Cắt
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Sao chép
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Dán
                <ContextMenuShortcut>⌘V</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                Hoàn tác
                <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                Làm lại
                <ContextMenuShortcut>⌘⇧Z</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenuContent>
  <ContextMenuItem>
    Cắt
    <ContextMenuShortcut>⌘X</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuItem>
    Sao chép
    <ContextMenuShortcut>⌘C</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuItem>
    Dán
    <ContextMenuShortcut>⌘V</ContextMenuShortcut>
  </ContextMenuItem>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 3. Submenu ── */}
      <ShowcaseSection title="3. Submenu">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ContextMenuSub</code>, <code className="text-xs font-mono">ContextMenuSubTrigger</code> và <code className="text-xs font-mono">ContextMenuSubContent</code> để tạo menu con lồng nhau.
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuItem>
                Tải lại
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSub>
                <ContextMenuSubTrigger>Thêm công cụ</ContextMenuSubTrigger>
                <ContextMenuSubContent className="w-48">
                  <ContextMenuItem>Lưu trang thành…</ContextMenuItem>
                  <ContextMenuItem>Tạo lối tắt…</ContextMenuItem>
                  <ContextMenuSeparator />
                  <ContextMenuItem>Công cụ dành cho lập trình viên</ContextMenuItem>
                </ContextMenuSubContent>
              </ContextMenuSub>
              <ContextMenuSeparator />
              <ContextMenuItem>Xem mã nguồn trang</ContextMenuItem>
              <ContextMenuItem>Kiểm tra</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenu>
  <ContextMenuTrigger>Nhấp chuột phải</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Tải lại</ContextMenuItem>
    <ContextMenuSub>
      <ContextMenuSubTrigger>Thêm công cụ</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Lưu trang thành…</ContextMenuItem>
        <ContextMenuItem>Tạo lối tắt…</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Công cụ dành cho lập trình viên</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuSeparator />
    <ContextMenuItem>Kiểm tra</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`} />
      </ShowcaseSection>

      {/* ── 4. Với icon ── */}
      <ShowcaseSection title="4. Với icon">
        <p className="text-sm text-muted-foreground">
          Đặt icon SVG trực tiếp bên trong <code className="text-xs font-mono">ContextMenuItem</code>.
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuItem>
                <UserIcon />
                Hồ sơ
                <ContextMenuShortcut>⌘P</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <CreditCardIcon />
                Thanh toán
                <ContextMenuShortcut>⌘B</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <SettingsIcon />
                Cài đặt
                <ContextMenuShortcut>⌘,</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem>
                <CopyIcon />
                Sao chép
              </ContextMenuItem>
              <ContextMenuItem>
                <ScissorsIcon />
                Cắt
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenuContent>
  <ContextMenuItem>
    <UserIcon />
    Hồ sơ
    <ContextMenuShortcut>⌘P</ContextMenuShortcut>
  </ContextMenuItem>
  <ContextMenuItem>
    <SettingsIcon />
    Cài đặt
    <ContextMenuShortcut>⌘,</ContextMenuShortcut>
  </ContextMenuItem>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 5. Nhóm ── */}
      <ShowcaseSection title="5. Nhóm (Groups)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ContextMenuGroup</code> và <code className="text-xs font-mono">ContextMenuLabel</code> để tổ chức các mục liên quan.
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuLabel>Tài khoản</ContextMenuLabel>
              <ContextMenuGroup>
                <ContextMenuItem>Hồ sơ</ContextMenuItem>
                <ContextMenuItem>Cài đặt</ContextMenuItem>
              </ContextMenuGroup>
              <ContextMenuSeparator />
              <ContextMenuLabel>Nhóm</ContextMenuLabel>
              <ContextMenuGroup>
                <ContextMenuItem>Tạo nhóm mới</ContextMenuItem>
                <ContextMenuItem>Mời thành viên</ContextMenuItem>
                <ContextMenuItem>Quản lý thành viên</ContextMenuItem>
              </ContextMenuGroup>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenuContent>
  <ContextMenuLabel>Tài khoản</ContextMenuLabel>
  <ContextMenuGroup>
    <ContextMenuItem>Hồ sơ</ContextMenuItem>
    <ContextMenuItem>Cài đặt</ContextMenuItem>
  </ContextMenuGroup>
  <ContextMenuSeparator />
  <ContextMenuLabel>Nhóm</ContextMenuLabel>
  <ContextMenuGroup>
    <ContextMenuItem>Tạo nhóm mới</ContextMenuItem>
    <ContextMenuItem>Mời thành viên</ContextMenuItem>
  </ContextMenuGroup>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 6. Checkbox ── */}
      <ShowcaseSection title="6. Checkbox items">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ContextMenuCheckboxItem</code> để tạo mục bật/tắt. Dấu tích hiện ở bên phải khi được chọn.
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea label="Nhấp chuột phải — thử bật/tắt tuỳ chọn" />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-56">
              <ContextMenuLabel>Hiển thị</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuCheckboxItem
                checked={bookmarksChecked}
                onCheckedChange={setBookmarksChecked}
              >
                Thanh bookmarks
              </ContextMenuCheckboxItem>
              <ContextMenuCheckboxItem
                checked={urlsChecked}
                onCheckedChange={setUrlsChecked}
              >
                Hiển thị đầy đủ URL
              </ContextMenuCheckboxItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`const [bookmarksChecked, setBookmarksChecked] = useState(true)
const [urlsChecked, setUrlsChecked] = useState(false)

<ContextMenuContent>
  <ContextMenuLabel>Hiển thị</ContextMenuLabel>
  <ContextMenuSeparator />
  <ContextMenuCheckboxItem
    checked={bookmarksChecked}
    onCheckedChange={setBookmarksChecked}
  >
    Thanh bookmarks
  </ContextMenuCheckboxItem>
  <ContextMenuCheckboxItem
    checked={urlsChecked}
    onCheckedChange={setUrlsChecked}
  >
    Hiển thị đầy đủ URL
  </ContextMenuCheckboxItem>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 7. Radio ── */}
      <ShowcaseSection title="7. Radio items">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ContextMenuRadioGroup</code> và <code className="text-xs font-mono">ContextMenuRadioItem</code> để chọn một trong nhiều giá trị.
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea label={`Nhấp chuột phải — người: ${person}`} />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuLabel>Người dùng</ContextMenuLabel>
              <ContextMenuSeparator />
              <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                <ContextMenuRadioItem value="nhat">Nhất Trần</ContextMenuRadioItem>
              </ContextMenuRadioGroup>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`const [person, setPerson] = useState("pedro")

<ContextMenuContent>
  <ContextMenuLabel>Người dùng</ContextMenuLabel>
  <ContextMenuSeparator />
  <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
    <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
    <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
    <ContextMenuRadioItem value="nhat">Nhất Trần</ContextMenuRadioItem>
  </ContextMenuRadioGroup>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 8. Destructive ── */}
      <ShowcaseSection title="8. Destructive variant">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">variant="destructive"</code> vào <code className="text-xs font-mono">ContextMenuItem</code> để hiển thị hành động nguy hiểm (xóa, xóa vĩnh viễn…).
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuItem>
                <CopyIcon />
                Sao chép
                <ContextMenuShortcut>⌘C</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                <ScissorsIcon />
                Cắt
                <ContextMenuShortcut>⌘X</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuItem variant="destructive">
                <TrashIcon />
                Xóa
                <ContextMenuShortcut>⌫</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem variant="destructive">
                Xóa vĩnh viễn
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenuContent>
  <ContextMenuItem>Sao chép</ContextMenuItem>
  <ContextMenuItem>Cắt</ContextMenuItem>
  <ContextMenuSeparator />
  <ContextMenuItem variant="destructive">
    <TrashIcon />
    Xóa
  </ContextMenuItem>
  <ContextMenuItem variant="destructive">
    Xóa vĩnh viễn
  </ContextMenuItem>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 9. inset ── */}
      <ShowcaseSection title="9. Inset — thụt lề nội dung">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">inset</code> để thụt lề nội dung sang phải (căn chỉnh với các mục có icon).
        </p>
        <DemoBlock>
          <ContextMenu>
            <ContextMenuTrigger>
              <TriggerArea />
            </ContextMenuTrigger>
            <ContextMenuContent className="w-52">
              <ContextMenuItem>
                <UserIcon />
                Có icon
              </ContextMenuItem>
              <ContextMenuItem inset>Không có icon (inset)</ContextMenuItem>
              <ContextMenuSeparator />
              <ContextMenuLabel inset>Nhãn thụt lề</ContextMenuLabel>
              <ContextMenuItem inset>Mục thụt lề 1</ContextMenuItem>
              <ContextMenuItem inset>Mục thụt lề 2</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </DemoBlock>
        <CodeBlock code={`<ContextMenuContent>
  <ContextMenuItem>
    <UserIcon />
    Có icon
  </ContextMenuItem>
  <ContextMenuItem inset>Không có icon (inset)</ContextMenuItem>
  <ContextMenuSeparator />
  <ContextMenuLabel inset>Nhãn thụt lề</ContextMenuLabel>
  <ContextMenuItem inset>Mục thụt lề 1</ContextMenuItem>
</ContextMenuContent>`} />
      </ShowcaseSection>

      {/* ── 10. Props reference ── */}
      <ShowcaseSection title="10. Props reference">
        <PropsTable rows={[
          { prop: "ContextMenuItem · variant", type: '"default" | "destructive"', default_: '"default"', description: "Kiểu hiển thị — destructive dùng cho hành động nguy hiểm." },
          { prop: "ContextMenuItem · inset", type: "boolean", default_: "false", description: "Thụt lề nội dung sang phải để căn chỉnh với các mục có icon." },
          { prop: "ContextMenuItem · disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá mục, không thể click." },
          { prop: "ContextMenuCheckboxItem · checked", type: "boolean | 'indeterminate'", description: "Trạng thái chọn của checkbox item." },
          { prop: "ContextMenuCheckboxItem · onCheckedChange", type: "(checked: boolean) => void", description: "Callback khi trạng thái thay đổi." },
          { prop: "ContextMenuRadioGroup · value", type: "string", description: "Giá trị đang được chọn trong nhóm radio." },
          { prop: "ContextMenuRadioGroup · onValueChange", type: "(value: string) => void", description: "Callback khi giá trị được chọn thay đổi." },
          { prop: "ContextMenuContent · side", type: '"top" | "right" | "bottom" | "left"', description: "Hướng mở của content (khi dùng trong SubContent)." },
        ]} />
      </ShowcaseSection>

      {/* ── 11. Lưu ý ── */}
      <ShowcaseSection title="11. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Context Menu kích hoạt bằng <strong>chuột phải</strong> (desktop) hoặc <strong>nhấn giữ</strong> (mobile).</li>
          <li><code className="text-xs font-mono">ContextMenuTrigger</code> mặc định render thành <code className="text-xs font-mono">&lt;span&gt;</code> — dùng <code className="text-xs font-mono">asChild</code> để wrap thành phần tùy ý.</li>
          <li>Icon SVG bên trong <code className="text-xs font-mono">ContextMenuItem</code> tự nhận <code className="text-xs font-mono">size-4</code>, không cần set thủ công.</li>
          <li>Dùng <code className="text-xs font-mono">inset</code> trên các mục không có icon để căn chỉnh với các mục có icon trong cùng menu.</li>
          <li><code className="text-xs font-mono">ContextMenuContent</code> tự wrap trong <code className="text-xs font-mono">Portal</code> — không cần thêm Portal thủ công.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
