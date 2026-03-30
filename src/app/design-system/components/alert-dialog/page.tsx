"use client"

import { useState } from "react"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogMedia,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

/* ─── controlled demo ────────────────────────────────────────────────────── */

function ControlledDemo() {
  const [open, setOpen] = useState(false)
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Trạng thái: <code className="font-mono">{open ? "mở" : "đóng"}</code>
        {confirmed && <span className="ml-2 text-green-600 dark:text-green-400">✓ Đã xác nhận</span>}
      </p>
      <div className="flex gap-2 flex-wrap">
        <Button variant="outline" size="sm" onClick={() => { setOpen(true); setConfirmed(false) }}>
          Mở dialog
        </Button>
        <Button variant="outline" size="sm" onClick={() => setConfirmed(false)}>
          Reset
        </Button>
      </div>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận hành động</AlertDialogTitle>
            <AlertDialogDescription>
              Dialog này được điều khiển bằng <code>open</code> và <code>onOpenChange</code> từ component cha.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={() => setConfirmed(true)}>Xác nhận</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function AlertDialogPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Alert Dialog</h1>
        <p className="text-sm text-muted-foreground">
          Dialog yêu cầu người dùng xác nhận trước khi thực hiện hành động quan trọng. Xây dựng trên{" "}
          <code className="text-xs">radix-ui/AlertDialogPrimitive</code>.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Tối thiểu cần: <code className="text-xs font-mono">AlertDialog</code> → <code className="text-xs font-mono">AlertDialogTrigger</code> + <code className="text-xs font-mono">AlertDialogContent</code> (header, footer).
        </p>
        <DemoBlock>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Mở dialog</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Bạn có chắc không?</AlertDialogTitle>
                <AlertDialogDescription>
                  Hành động này không thể hoàn tác. Dữ liệu sẽ bị xóa vĩnh viễn khỏi hệ thống.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Hủy</AlertDialogCancel>
                <AlertDialogAction>Xác nhận</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </DemoBlock>
        <CodeBlock code={`
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Mở dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Bạn có chắc không?</AlertDialogTitle>
      <AlertDialogDescription>
        Hành động này không thể hoàn tác.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Hủy</AlertDialogCancel>
      <AlertDialogAction>Xác nhận</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        `} />
      </ShowcaseSection>

      {/* ── 2. size ── */}
      <ShowcaseSection title={`2. size — kích thước content`}>
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AlertDialogContent</code> hỗ trợ <code className="text-xs font-mono">size="default"</code> (mặc định) và <code className="text-xs font-mono">size="sm"</code>.
          Với <code className="text-xs font-mono">size="sm"</code>, footer hiển thị dạng grid 2 cột thay vì flex-row.
        </p>
        <DemoBlock>
          <div className="flex gap-3 flex-wrap">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">size="default"</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="default">
                <AlertDialogHeader>
                  <AlertDialogTitle>Kích thước default</AlertDialogTitle>
                  <AlertDialogDescription>
                    Max-width sm:max-w-sm. Footer các button nằm hàng ngang bên phải.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction>Xác nhận</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">size="sm"</Button>
              </AlertDialogTrigger>
              <AlertDialogContent size="sm">
                <AlertDialogHeader>
                  <AlertDialogTitle>Kích thước sm</AlertDialogTitle>
                  <AlertDialogDescription>
                    Footer hiển thị dạng 2 cột, phù hợp cho dialog xác nhận nhanh.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">Xóa</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </DemoBlock>
        <CodeBlock code={`
// size="default" — max-w-sm, footer flex-row
<AlertDialogContent size="default">...</AlertDialogContent>

// size="sm" — max-w-xs, footer grid 2 cột
<AlertDialogContent size="sm">...</AlertDialogContent>
        `} />
      </ShowcaseSection>

      {/* ── 3. AlertDialogMedia ── */}
      <ShowcaseSection title="3. AlertDialogMedia — icon minh họa">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">AlertDialogMedia</code> trước <code className="text-xs font-mono">AlertDialogTitle</code> trong header.
          Ở breakpoint sm trở lên, media hiển thị bên trái và span 2 hàng của title + description.
        </p>
        <DemoBlock>
          <div className="flex gap-3 flex-wrap">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Xóa tài khoản</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia>
                    <TrashIcon />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Xóa tài khoản</AlertDialogTitle>
                  <AlertDialogDescription>
                    Tất cả dữ liệu liên quan đến tài khoản này sẽ bị xóa vĩnh viễn. Hành động này không thể hoàn tác.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Giữ tài khoản</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">Xóa vĩnh viễn</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Cảnh báo</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogMedia className="text-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
                    <AlertTriangleIcon />
                  </AlertDialogMedia>
                  <AlertDialogTitle>Cảnh báo</AlertDialogTitle>
                  <AlertDialogDescription>
                    Thao tác này sẽ ảnh hưởng đến toàn bộ nhóm của bạn. Vui lòng xác nhận.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction>Tiếp tục</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<AlertDialogHeader>
  <AlertDialogMedia>
    <TrashIcon />
  </AlertDialogMedia>
  <AlertDialogTitle>Xóa tài khoản</AlertDialogTitle>
  <AlertDialogDescription>...</AlertDialogDescription>
</AlertDialogHeader>

{/* Tuỳ chỉnh màu nền media */}
<AlertDialogMedia className="text-yellow-500 bg-yellow-50">
  <AlertTriangleIcon />
</AlertDialogMedia>
        `} />
      </ShowcaseSection>

      {/* ── 4. Action & Cancel variants ── */}
      <ShowcaseSection title="4. Action & Cancel variants">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AlertDialogAction</code> và <code className="text-xs font-mono">AlertDialogCancel</code> nhận prop <code className="text-xs font-mono">variant</code> và <code className="text-xs font-mono">size</code> giống <code className="text-xs font-mono">Button</code>.
        </p>
        <DemoBlock>
          <div className="flex gap-3 flex-wrap">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Action: default</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Xác nhận</AlertDialogTitle>
                  <AlertDialogDescription>Action dùng <code>variant="default"</code>.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction variant="default">Xác nhận</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Action: destructive</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Cảnh báo nguy hiểm</AlertDialogTitle>
                  <AlertDialogDescription>Action dùng <code>variant="destructive"</code>.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction variant="destructive">Xóa</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Cancel: ghost</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Cancel variant</AlertDialogTitle>
                  <AlertDialogDescription>Cancel dùng <code>variant="ghost"</code>.</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel variant="ghost">Bỏ qua</AlertDialogCancel>
                  <AlertDialogAction>Tiếp tục</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </DemoBlock>
        <CodeBlock code={`
// Action destructive
<AlertDialogAction variant="destructive">Xóa</AlertDialogAction>

// Cancel ghost
<AlertDialogCancel variant="ghost">Bỏ qua</AlertDialogCancel>

// Button size nhỏ
<AlertDialogAction size="sm">Xác nhận</AlertDialogAction>
        `} />
      </ShowcaseSection>

      {/* ── 5. Controlled ── */}
      <ShowcaseSection title="5. Controlled (open + onOpenChange)">
        <p className="text-sm text-muted-foreground">
          Bỏ <code className="text-xs font-mono">AlertDialogTrigger</code>, điều khiển dialog bằng <code className="text-xs font-mono">open</code> và <code className="text-xs font-mono">onOpenChange</code> — hữu ích khi cần mở dialog từ logic nghiệp vụ hoặc sự kiện ngoài UI.
        </p>
        <DemoBlock>
          <ControlledDemo />
        </DemoBlock>
        <CodeBlock code={`
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Mở dialog</Button>

<AlertDialog open={open} onOpenChange={setOpen}>
  {/* Không cần AlertDialogTrigger */}
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Xác nhận</AlertDialogTitle>
      <AlertDialogDescription>...</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Hủy</AlertDialogCancel>
      <AlertDialogAction onClick={() => handleConfirm()}>
        Xác nhận
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
        `} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDialog&gt;</h3>
            <PropsTable rows={[
              { prop: "open", type: "boolean", description: "Controlled — trạng thái mở/đóng. Dùng kèm onOpenChange." },
              { prop: "onOpenChange", type: "(open: boolean) => void", description: "Callback khi trạng thái open thay đổi (bao gồm nhấn Esc, click overlay)." },
              { prop: "defaultOpen", type: "boolean", default_: "false", description: "Uncontrolled — mở sẵn khi render lần đầu." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDialogContent&gt;</h3>
            <PropsTable rows={[
              { prop: "size", type: '"default" | "sm"', default_: '"default"', description: 'Kích thước dialog. "sm" dùng footer dạng grid 2 cột, max-w-xs.' },
              { prop: "className", type: "string", description: "Class Tailwind cho phần nội dung dialog." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDialogTrigger&gt;</h3>
            <PropsTable rows={[
              { prop: "asChild", type: "boolean", default_: "false", description: 'Truyền hành vi trigger vào element con thay vì render thêm DOM node. Dùng khi wrap <Button>.' },
              { prop: "children", type: "ReactNode", description: "Element kích hoạt dialog." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDialogAction&gt; / &lt;AlertDialogCancel&gt;</h3>
            <PropsTable rows={[
              { prop: "variant", type: '"default" | "destructive" | "outline" | "ghost" | "link" | "secondary"', default_: '"default" / "outline"', description: "Variant của Button bên trong. Action mặc định default, Cancel mặc định outline." },
              { prop: "size", type: '"default" | "sm" | "lg" | "icon"', default_: '"default"', description: "Kích thước button." },
              { prop: "onClick", type: "(e: MouseEvent) => void", description: "Callback khi nhấn. Với Action/Cancel dialog tự đóng sau khi gọi." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDialogMedia&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Thường là SVG icon. Size mặc định 24px (size-6) nếu không có class size-* trên icon." },
              { prop: "className", type: "string", description: "Class Tailwind cho wrapper media (mặc định size-10, bg-muted, rounded-md)." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDialogTitle&gt; / &lt;AlertDialogDescription&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Nội dung tiêu đề / mô tả." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            <code className="text-xs font-mono">AlertDialog</code> khác <code className="text-xs font-mono">Dialog</code> ở chỗ người dùng <strong>bắt buộc</strong> phải chọn Action hoặc Cancel — không thể đóng bằng click ngoài vùng content.
          </li>
          <li>
            Luôn dùng <code className="text-xs font-mono">asChild</code> trên <code className="text-xs font-mono">AlertDialogTrigger</code> khi wrap <code className="text-xs font-mono">Button</code> để tránh render hai element tương tác lồng nhau.
          </li>
          <li>
            Không dùng đồng thời <code className="text-xs font-mono">defaultOpen</code> và <code className="text-xs font-mono">open</code> — chọn một trong hai (uncontrolled hoặc controlled).
          </li>
          <li>
            Nhấn <code className="text-xs font-mono">Esc</code> sẽ gọi <code className="text-xs font-mono">onOpenChange(false)</code> — hành vi tương đương Cancel về mặt UX, nhưng callback <code className="text-xs font-mono">onClick</code> của <code className="text-xs font-mono">AlertDialogCancel</code> <strong>không</strong> được gọi.
          </li>
          <li>
            <code className="text-xs font-mono">AlertDialogMedia</code> phải đặt trước <code className="text-xs font-mono">AlertDialogTitle</code> trong header để layout CSS grid hoạt động đúng.
          </li>
          <li>
            Component đã có <code className="text-xs font-mono">focus trap</code> và hỗ trợ điều hướng bàn phím đầy đủ theo ARIA <code className="text-xs font-mono">alertdialog</code>.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
