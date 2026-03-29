"use client"

import { useState } from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function DrawerPage() {
  const [openDirection, setOpenDirection] = useState<"bottom" | "top" | "left" | "right" | null>(null)
  const [openNonDismissible, setOpenNonDismissible] = useState(false)
  const [openDismissibleFalse, setOpenDismissibleFalse] = useState(false)

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Drawer</h1>
        <p className="text-sm text-muted-foreground">
          Panel trượt ra từ cạnh màn hình — phù hợp để hiển thị nội dung bổ sung, form, hoặc menu điều hướng mà không che khuất toàn bộ trang.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Mở drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Tiêu đề</DrawerTitle>
      <DrawerDescription>Mô tả ngắn.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Xác nhận</Button>
      <DrawerClose asChild>
        <Button variant="outline">Huỷ</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Mặc định Drawer trượt lên từ phía dưới (<code className="text-xs font-mono">direction="bottom"</code>). Có thanh handle ở trên cùng nội dung.
        </p>
        <DemoBlock>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Mở drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Xác nhận thao tác</DrawerTitle>
                <DrawerDescription>
                  Bạn có chắc chắn muốn tiếp tục? Hành động này không thể hoàn tác.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button>Xác nhận</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Huỷ</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DemoBlock>
        <CodeBlock code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Mở drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Xác nhận thao tác</DrawerTitle>
      <DrawerDescription>
        Bạn có chắc chắn muốn tiếp tục? Hành động này không thể hoàn tác.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Xác nhận</Button>
      <DrawerClose asChild>
        <Button variant="outline">Huỷ</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </ShowcaseSection>

      {/* ── 2. Hướng ── */}
      <ShowcaseSection title="2. Hướng (direction)">
        <p className="text-sm text-muted-foreground">
          Prop <code className="text-xs font-mono">direction</code> nhận 4 giá trị:{" "}
          {(["bottom", "top", "left", "right"] as const).map((d, i, arr) => (
            <span key={d}>
              <code className="text-xs font-mono">{d}</code>
              {i < arr.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 justify-center">
            {(["bottom", "top", "left", "right"] as const).map((dir) => (
              <div key={dir}>
                <Drawer
                  direction={dir}
                  open={openDirection === dir}
                  onOpenChange={(v) => setOpenDirection(v ? dir : null)}
                >
                  <DrawerTrigger asChild>
                    <Button variant="outline" className="capitalize">{dir}</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>
                      <DrawerTitle>Direction: {dir}</DrawerTitle>
                      <DrawerDescription>
                        Drawer trượt vào từ phía <strong>{dir}</strong>.
                      </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">Đóng</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">Right</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Direction: right</DrawerTitle>
      <DrawerDescription>Drawer trượt vào từ phía right.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Đóng</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </ShowcaseSection>

      {/* ── 3. Controlled ── */}
      <ShowcaseSection title="3. Controlled (open / onOpenChange)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">open</code> và <code className="text-xs font-mono">onOpenChange</code> để kiểm soát trạng thái từ bên ngoài.
        </p>
        <DemoBlock>
          <Drawer open={openNonDismissible} onOpenChange={setOpenNonDismissible}>
            <DrawerTrigger asChild>
              <Button variant="secondary">Mở (controlled)</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Controlled Drawer</DrawerTitle>
                <DrawerDescription>
                  Trạng thái mở/đóng được quản lý bởi state bên ngoài.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button onClick={() => setOpenNonDismissible(false)}>
                  Lưu thay đổi
                </Button>
                <Button variant="outline" onClick={() => setOpenNonDismissible(false)}>
                  Huỷ
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DemoBlock>
        <CodeBlock code={`const [open, setOpen] = useState(false)

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>
    <Button variant="secondary">Mở (controlled)</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Controlled Drawer</DrawerTitle>
      <DrawerDescription>
        Trạng thái mở/đóng được quản lý bởi state bên ngoài.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={() => setOpen(false)}>Lưu thay đổi</Button>
      <Button variant="outline" onClick={() => setOpen(false)}>Huỷ</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </ShowcaseSection>

      {/* ── 4. dismissible=false ── */}
      <ShowcaseSection title="4. Không cho đóng bằng cách kéo (dismissible)">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">dismissible=&#123;false&#125;</code> để ngăn người dùng đóng drawer bằng cách kéo — buộc phải dùng nút đóng tường minh.
        </p>
        <DemoBlock>
          <Drawer
            dismissible={false}
            open={openDismissibleFalse}
            onOpenChange={setOpenDismissibleFalse}
          >
            <DrawerTrigger asChild>
              <Button variant="destructive">Mở (không kéo để đóng)</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Yêu cầu xác nhận</DrawerTitle>
                <DrawerDescription>
                  Drawer này không thể đóng bằng cách kéo hoặc click ngoài. Bạn phải chọn một hành động.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button onClick={() => setOpenDismissibleFalse(false)}>Đồng ý</Button>
                <Button variant="outline" onClick={() => setOpenDismissibleFalse(false)}>Từ chối</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DemoBlock>
        <CodeBlock code={`const [open, setOpen] = useState(false)

// dismissible={false} chặn toàn bộ cơ chế đóng tự động (kéo, click overlay,
// và cả DrawerClose). Cần dùng controlled state + onClick để đóng thủ công.
<Drawer dismissible={false} open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>
    <Button variant="destructive">Mở</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Yêu cầu xác nhận</DrawerTitle>
      <DrawerDescription>
        Drawer này không thể đóng bằng cách kéo hoặc click ngoài.
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={() => setOpen(false)}>Đồng ý</Button>
      <Button variant="outline" onClick={() => setOpen(false)}>Từ chối</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </ShowcaseSection>

      {/* ── 5. Nội dung phong phú ── */}
      <ShowcaseSection title="5. Ví dụ thực tế — form trong drawer">
        <p className="text-sm text-muted-foreground">
          Drawer thường dùng để chứa form chỉnh sửa nhanh mà không cần chuyển trang.
        </p>
        <DemoBlock>
          <Drawer>
            <DrawerTrigger asChild>
              <Button>Chỉnh sửa hồ sơ</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Chỉnh sửa hồ sơ</DrawerTitle>
                <DrawerDescription>
                  Cập nhật thông tin cá nhân của bạn. Nhấn Lưu khi hoàn tất.
                </DrawerDescription>
              </DrawerHeader>
              <div className="px-4 space-y-3">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Họ tên</label>
                  <input
                    className="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    defaultValue="Nguyễn Văn A"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                    defaultValue="nguyenvana@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium">Bio</label>
                  <textarea
                    className="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-ring resize-none"
                    rows={3}
                    defaultValue="Lập trình viên full-stack tại TP.HCM."
                  />
                </div>
              </div>
              <DrawerFooter>
                <Button>Lưu thay đổi</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Huỷ</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </DemoBlock>
        <CodeBlock code={`<Drawer>
  <DrawerTrigger asChild>
    <Button>Chỉnh sửa hồ sơ</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Chỉnh sửa hồ sơ</DrawerTitle>
      <DrawerDescription>
        Cập nhật thông tin cá nhân. Nhấn Lưu khi hoàn tất.
      </DrawerDescription>
    </DrawerHeader>
    <div className="px-4 space-y-3">
      <div className="space-y-1">
        <label className="text-sm font-medium">Họ tên</label>
        <input className="w-full rounded-md border px-3 py-1.5 text-sm" />
      </div>
      {/* ... more fields */}
    </div>
    <DrawerFooter>
      <Button>Lưu thay đổi</Button>
      <DrawerClose asChild>
        <Button variant="outline">Huỷ</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <p className="text-sm font-medium mb-2">Drawer (Root)</p>
        <PropsTable rows={[
          { prop: "direction", type: '"bottom" | "top" | "left" | "right"', default_: '"bottom"', description: "Hướng trượt của drawer." },
          { prop: "open", type: "boolean", description: "Kiểm soát trạng thái mở/đóng (controlled)." },
          { prop: "onOpenChange", type: "(open: boolean) => void", description: "Callback khi trạng thái mở/đóng thay đổi." },
          { prop: "defaultOpen", type: "boolean", default_: "false", description: "Trạng thái mở mặc định (uncontrolled)." },
          { prop: "dismissible", type: "boolean", default_: "true", description: "Cho phép đóng bằng cách kéo hoặc click overlay." },
          { prop: "modal", type: "boolean", default_: "true", description: "Khi true, hiển thị overlay và khoá scroll trang." },
        ]} />
        <p className="text-sm font-medium mt-4 mb-2">DrawerContent</p>
        <PropsTable rows={[
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho panel nội dung." },
        ]} />
        <p className="text-sm font-medium mt-4 mb-2">DrawerTrigger / DrawerClose</p>
        <PropsTable rows={[
          { prop: "asChild", type: "boolean", default_: "false", description: "Khi true, render thành component con thay vì button mặc định." },
        ]} />
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Drawer được xây dựng trên thư viện <code className="text-xs font-mono">vaul</code> — hỗ trợ gesture kéo trên mobile.</li>
          <li>Thanh handle (grip) chỉ hiển thị với <code className="text-xs font-mono">direction="bottom"</code>; các hướng khác không có handle.</li>
          <li>Dùng <code className="text-xs font-mono">DrawerTrigger asChild</code> để trigger là Button hoặc bất kỳ element nào.</li>
          <li>Khi dùng <code className="text-xs font-mono">dismissible=&#123;false&#125;</code>, cần cung cấp nút đóng tường minh (DrawerClose) để người dùng có thể thoát.</li>
          <li>Với <code className="text-xs font-mono">direction="left"</code> hoặc <code className="text-xs font-mono">"right"</code>, chiều rộng mặc định là <code className="text-xs font-mono">w-3/4</code> (<code className="text-xs font-mono">sm:max-w-sm</code> ở màn lớn).</li>
          <li>Với <code className="text-xs font-mono">direction="bottom"</code> hoặc <code className="text-xs font-mono">"top"</code>, chiều cao tối đa là <code className="text-xs font-mono">max-h-[80vh]</code> — nên dùng <code className="text-xs font-mono">overflow-y-auto</code> bên trong khi nội dung dài.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
