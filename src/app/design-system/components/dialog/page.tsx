"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── Controlled example ──────────────────────────────────────────────────── */

function ControlledDialog() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="flex gap-2">
        <Button onClick={() => setOpen(true)}>Mở dialog</Button>
        <Button variant="outline" onClick={() => setOpen(false)} disabled={!open}>
          Đóng từ ngoài
        </Button>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Dialog có kiểm soát</DialogTitle>
            <DialogDescription>
              Trạng thái <code className="text-xs font-mono">open</code> được quản lý bằng{" "}
              <code className="text-xs font-mono">useState</code>. Nhấn nút bên ngoài để đóng.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter showCloseButton>
            <Button onClick={() => setOpen(false)}>Lưu thay đổi</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

/* ─── Form example ────────────────────────────────────────────────────────── */

function FormDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Chỉnh sửa hồ sơ</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Chỉnh sửa hồ sơ</DialogTitle>
          <DialogDescription>
            Cập nhật thông tin tài khoản của bạn. Nhấn lưu khi hoàn tất.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-2">
          <div className="grid gap-1.5">
            <label htmlFor="name" className="text-sm font-medium">Họ và tên</label>
            <input
              id="name"
              defaultValue="Nguyễn Văn A"
              className="h-9 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              defaultValue="nguyenvana@example.com"
              className="h-9 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
        <DialogFooter showCloseButton>
          <Button type="submit">Lưu thay đổi</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function DialogPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Dialog</h1>
        <p className="text-sm text-muted-foreground">
          Cửa sổ modal xuất hiện phía trên trang, yêu cầu người dùng thực hiện hành động
          hoặc xem thông tin quan trọng trước khi tiếp tục.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Mở</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Tiêu đề</DialogTitle>
      <DialogDescription>Mô tả ngắn.</DialogDescription>
    </DialogHeader>
    {/* nội dung */}
    <DialogFooter>
      <Button>Xác nhận</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Mở dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Xác nhận hành động</DialogTitle>
                <DialogDescription>
                  Đây là dialog cơ bản nhất. Nút X ở góc trên phải được hiển thị mặc định.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </DemoBlock>
        <CodeBlock code={`<Dialog>
  <DialogTrigger asChild>
    <Button>Mở dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Xác nhận hành động</DialogTitle>
      <DialogDescription>
        Đây là dialog cơ bản nhất.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>`} />
      </ShowcaseSection>

      {/* ── 2. Với DialogFooter ── */}
      <ShowcaseSection title="2. Với DialogFooter">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">DialogFooter</code> tự động có nền muted,
          viền trên và căn nút sang phải trên màn hình lớn.
        </p>
        <DemoBlock>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Xem ví dụ footer</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Xoá tài khoản</DialogTitle>
                <DialogDescription>
                  Hành động này không thể hoàn tác. Tài khoản và toàn bộ dữ liệu của bạn
                  sẽ bị xoá vĩnh viễn.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter showCloseButton>
                <Button variant="destructive">Xoá tài khoản</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DemoBlock>
        <CodeBlock code={`<DialogFooter showCloseButton>
  <Button variant="destructive">Xoá tài khoản</Button>
</DialogFooter>`} />
      </ShowcaseSection>

      {/* ── 3. showCloseButton ── */}
      <ShowcaseSection title="3. showCloseButton">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">DialogContent</code> có prop{" "}
          <code className="text-xs font-mono">showCloseButton</code> (mặc định{" "}
          <code className="text-xs font-mono">true</code>) để ẩn/hiện nút X.{" "}
          <code className="text-xs font-mono">DialogFooter</code> cũng hỗ trợ prop này
          để thêm nút Close ở footer.
        </p>
        <DemoBlock>
          <div className="flex gap-2 flex-wrap">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Có nút X (mặc định)</Button>
              </DialogTrigger>
              <DialogContent showCloseButton>
                <DialogHeader>
                  <DialogTitle>showCloseButton = true</DialogTitle>
                  <DialogDescription>Nút X hiển thị ở góc trên phải (mặc định).</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Ẩn nút X</Button>
              </DialogTrigger>
              <DialogContent showCloseButton={false}>
                <DialogHeader>
                  <DialogTitle>showCloseButton = false</DialogTitle>
                  <DialogDescription>Nút X bị ẩn — hữu ích khi footer đã có nút đóng.</DialogDescription>
                </DialogHeader>
                <DialogFooter showCloseButton>
                  <Button>Xác nhận</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Ẩn nút X, dùng nút Close ở footer */}
<DialogContent showCloseButton={false}>
  ...
  <DialogFooter showCloseButton>
    <Button>Xác nhận</Button>
  </DialogFooter>
</DialogContent>`} />
      </ShowcaseSection>

      {/* ── 4. Controlled ── */}
      <ShowcaseSection title="4. Controlled (có kiểm soát)">
        <p className="text-sm text-muted-foreground">
          Truyền <code className="text-xs font-mono">open</code> và{" "}
          <code className="text-xs font-mono">onOpenChange</code> để tự quản lý trạng thái.
          Lúc này không cần <code className="text-xs font-mono">DialogTrigger</code>.
        </p>
        <DemoBlock>
          <ControlledDialog />
        </DemoBlock>
        <CodeBlock code={`const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Mở dialog</Button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog có kiểm soát</DialogTitle>
      <DialogDescription>...</DialogDescription>
    </DialogHeader>
    <DialogFooter showCloseButton>
      <Button onClick={() => setOpen(false)}>Lưu thay đổi</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`} />
      </ShowcaseSection>

      {/* ── 5. Với form bên trong ── */}
      <ShowcaseSection title="5. Với form bên trong">
        <p className="text-sm text-muted-foreground">
          Đặt các input/form vào giữa <code className="text-xs font-mono">DialogHeader</code> và{" "}
          <code className="text-xs font-mono">DialogFooter</code>.
        </p>
        <DemoBlock>
          <FormDialog />
        </DemoBlock>
        <CodeBlock code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Chỉnh sửa hồ sơ</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Chỉnh sửa hồ sơ</DialogTitle>
      <DialogDescription>Cập nhật thông tin tài khoản.</DialogDescription>
    </DialogHeader>
    <div className="grid gap-3 py-2">
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">Họ và tên</label>
        <input id="name" className="h-9 rounded-md border px-3 text-sm" />
      </div>
    </div>
    <DialogFooter showCloseButton>
      <Button type="submit">Lưu thay đổi</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`} />
      </ShowcaseSection>

      {/* ── 6. Tuỳ chỉnh width ── */}
      <ShowcaseSection title="6. Tuỳ chỉnh chiều rộng">
        <p className="text-sm text-muted-foreground">
          Mặc định dialog có <code className="text-xs font-mono">max-w-sm</code>.
          Ghi đè bằng <code className="text-xs font-mono">className</code> để tăng kích thước.
        </p>
        <DemoBlock>
          <div className="flex gap-2 flex-wrap">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Mặc định (sm)</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>max-w-sm (mặc định)</DialogTitle>
                  <DialogDescription>Chiều rộng mặc định của DialogContent.</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Rộng hơn (lg)</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>sm:max-w-lg</DialogTitle>
                  <DialogDescription>
                    Ghi đè bằng <code className="text-xs font-mono">className="sm:max-w-lg"</code>.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Mặc định */}
<DialogContent>...</DialogContent>

{/* Rộng hơn */}
<DialogContent className="sm:max-w-lg">...</DialogContent>

{/* Toàn màn hình */}
<DialogContent className="sm:max-w-screen-md">...</DialogContent>`} />
      </ShowcaseSection>

      {/* ── 7. DialogClose thủ công ── */}
      <ShowcaseSection title="7. DialogClose tuỳ chỉnh">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">DialogClose</code> bọc quanh bất kỳ thành
          phần nào để đóng dialog khi nhấn.
        </p>
        <DemoBlock>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Mở</Button>
            </DialogTrigger>
            <DialogContent showCloseButton={false}>
              <DialogHeader>
                <DialogTitle>Xác nhận xoá</DialogTitle>
                <DialogDescription>
                  Bạn có chắc muốn xoá mục này không?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Huỷ</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="destructive">Xoá</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DemoBlock>
        <CodeBlock code={`<DialogFooter>
  <DialogClose asChild>
    <Button variant="outline">Huỷ</Button>
  </DialogClose>
  <DialogClose asChild>
    <Button variant="destructive">Xoá</Button>
  </DialogClose>
</DialogFooter>`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <p className="text-sm font-medium mb-2">DialogContent</p>
        <PropsTable rows={[
          { prop: "showCloseButton", type: "boolean", default_: "true", description: "Hiển thị nút X ở góc trên phải." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung — thường dùng để ghi đè max-w." },
          { prop: "onOpenAutoFocus", type: "(e: Event) => void", description: "Callback khi dialog mở và focus được thiết lập." },
          { prop: "onCloseAutoFocus", type: "(e: Event) => void", description: "Callback sau khi dialog đóng và focus trả về." },
          { prop: "onEscapeKeyDown", type: "(e: KeyboardEvent) => void", description: "Gọi khi nhấn Escape; gọi e.preventDefault() để chặn đóng." },
          { prop: "onInteractOutside", type: "(e: Event) => void", description: "Gọi khi click bên ngoài dialog." },
        ]} />
        <p className="text-sm font-medium mb-2 mt-4">Dialog (Root)</p>
        <PropsTable rows={[
          { prop: "open", type: "boolean", description: "Trạng thái mở/đóng — dùng khi controlled." },
          { prop: "onOpenChange", type: "(open: boolean) => void", description: "Callback khi trạng thái thay đổi." },
          { prop: "defaultOpen", type: "boolean", default_: "false", description: "Trạng thái mở ban đầu — dùng khi uncontrolled." },
          { prop: "modal", type: "boolean", default_: "true", description: "Khi true, tương tác nền bị khoá khi dialog mở." },
        ]} />
        <p className="text-sm font-medium mb-2 mt-4">DialogFooter</p>
        <PropsTable rows={[
          { prop: "showCloseButton", type: "boolean", default_: "false", description: 'Thêm nút "Close" mặc định vào footer.' },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            Luôn cung cấp <code className="text-xs font-mono">DialogTitle</code> — Radix yêu cầu
            để đảm bảo accessibility. Nếu muốn ẩn về mặt thị giác, dùng{" "}
            <code className="text-xs font-mono">className="sr-only"</code>.
          </li>
          <li>
            <code className="text-xs font-mono">DialogTrigger asChild</code> cho phép dùng bất
            kỳ element nào làm trigger thay vì render thêm thẻ HTML thừa.
          </li>
          <li>
            Khi dùng controlled (<code className="text-xs font-mono">open</code> /{" "}
            <code className="text-xs font-mono">onOpenChange</code>), không cần{" "}
            <code className="text-xs font-mono">DialogTrigger</code> — mở dialog bằng{" "}
            <code className="text-xs font-mono">setOpen(true)</code> từ bất kỳ đâu.
          </li>
          <li>
            Mặc định nhấn Escape hoặc click overlay sẽ đóng dialog. Dùng{" "}
            <code className="text-xs font-mono">onEscapeKeyDown</code> /{" "}
            <code className="text-xs font-mono">onInteractOutside</code> để chặn nếu cần.
          </li>
          <li>
            <code className="text-xs font-mono">modal=&#123;false&#125;</code> cho phép tương tác
            với nền trong khi dialog vẫn mở — dùng thận trọng vì ảnh hưởng đến UX và accessibility.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
