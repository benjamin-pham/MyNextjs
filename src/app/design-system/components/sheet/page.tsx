"use client"

import * as React from "react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const SettingsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2 2 2 0 0 1-2 2 2 2 0 0 0-2 2v.44a2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2v-.44a2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-2-2 2 2 0 0 1-2-2 2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function SheetPage() {
  const SHEET_SIDES = ["top", "right", "bottom", "left"] as const

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Sheet</h1>
        <p className="text-sm text-muted-foreground">
          Tấm panel trượt ra từ các cạnh của màn hình, thường được dùng cho điều hướng, bộ lọc, hoặc cấu hình bổ sung.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetDescription, 
  SheetFooter, 
  SheetClose 
} from "@/components/ui/sheet"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Tiêu đề</SheetTitle>
      <SheetDescription>Mô tả nội dung của Sheet.</SheetDescription>
    </SheetHeader>
    {/* Nội dung của bạn */}
  </SheetContent>
</Sheet>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">SheetTrigger</code> để kích hoạt và <code className="text-xs font-mono">SheetContent</code> để chứa nội dung.
        </p>
        <DemoBlock>
          <Sheet>
            <SheetTrigger className="text-sm font-medium hover:underline">Mở Sheet</SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Tiêu đề</SheetTitle>
                <SheetDescription>Mô tả nội dung của Sheet.</SheetDescription>
              </SheetHeader>
              <div className="py-6 text-center text-muted-foreground">
                Nội dung panel.
              </div>
            </SheetContent>
          </Sheet>
        </DemoBlock>
        <CodeBlock code={`<Sheet>
  <SheetTrigger>Mở Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Tiêu đề</SheetTitle>
      <SheetDescription>Mô tả nội dung.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`} />
      </ShowcaseSection>

      {/* ── 2. Hướng (Side) ── */}
      <ShowcaseSection title="2. Hướng (Side)">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">side</code> để chọn hướng xuất hiện:{" "}
          <code className="text-xs font-mono">top</code>, <code className="text-xs font-mono">right</code>,{" "}
          <code className="text-xs font-mono">bottom</code>, hoặc <code className="text-xs font-mono">left</code>.
        </p>
        <DemoBlock>
          <div className="grid grid-cols-2 gap-2 max-w-xs">
            {SHEET_SIDES.map((side) => (
              <Sheet key={side}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="capitalize">{side}</Button>
                </SheetTrigger>
                <SheetContent side={side}>
                  <SheetHeader>
                    <SheetTitle className="capitalize">Sheet {side}</SheetTitle>
                    <SheetDescription>
                      Nội dung này xuất hiện từ phía {side}.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<SheetContent side="top | right | bottom | left">
  ...
</SheetContent>`} />
      </ShowcaseSection>

      {/* ── 3. Ẩn nút đóng ── */}
      <ShowcaseSection title="3. Ẩn nút đóng mặc định">
        <p className="text-sm text-muted-foreground">
          Sét <code className="text-xs font-mono">showCloseButton={"{false}"}</code> trên <code className="text-xs font-mono">SheetContent</code> nếu bạn muốn tự quản lý việc đóng sheet.
        </p>
        <DemoBlock>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">No default close</Button>
            </SheetTrigger>
            <SheetContent showCloseButton={false}>
              <SheetHeader>
                <SheetTitle>Sheet không có nút X</SheetTitle>
                <SheetDescription>
                  Nút đóng mặc định ở góc trên bên phải đã bị ẩn.
                </SheetDescription>
              </SheetHeader>
              <div className="py-8 text-center text-muted-foreground italic">
                Bạn phải dùng nút bên dưới để đóng.
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="secondary" className="w-full">Đóng ngay</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </DemoBlock>
        <CodeBlock code={`<SheetContent showCloseButton={false}>
  ...
</SheetContent>`} />
      </ShowcaseSection>

      {/* ── 4. Tùy chỉnh kích thước ── */}
      <ShowcaseSection title="4. Tùy chỉnh kích thước">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">className</code> trên <code className="text-xs font-mono">SheetContent</code> để thay đổi chiều rộng (với left/right) hoặc chiều cao (với top/bottom).
        </p>
        <DemoBlock>
          <div className="flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Full width (L/R)</Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-full">
                <SheetHeader>
                  <SheetTitle>Full Width Sheet</SheetTitle>
                  <SheetDescription>
                    Sheet này chiếm toàn bộ chiều rộng màn hình.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">Custom h-1/2 (Bottom)</Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-1/2">
                <SheetHeader>
                  <SheetTitle>Half Height Sheet</SheetTitle>
                  <SheetDescription>
                    Sheet xuất hiện từ dưới lên với chiều cao 50%.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </DemoBlock>
        <CodeBlock code={`<SheetContent className="w-full sm:max-w-full">
  {/* Full width */}
</SheetContent>

<SheetContent side="bottom" className="h-1/2">
  {/* Half height from bottom */}
</SheetContent>`} />
      </ShowcaseSection>

      {/* ── 5. asChild — render thành thành phần khác ── */}
      <ShowcaseSection title="5. asChild — render thành thành phần khác">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">asChild</code> để <code className="text-xs font-mono">SheetTrigger</code> hoặc <code className="text-xs font-mono">SheetClose</code> render thành component con (ví dụ <code className="text-xs font-mono">Button</code>), giúp giữ ngữ nghĩa và style của component đó.
        </p>
        <DemoBlock>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Chỉnh sửa Profile</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Chỉnh sửa profile</SheetTitle>
                <SheetDescription>
                  Thay đổi thông tin cá nhân của bạn.
                </SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name-2">Tên</Label>
                  <Input id="name-2" defaultValue="John Doe" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Lưu</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </DemoBlock>
        <CodeBlock code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Mở</Button>
  </SheetTrigger>
  <SheetContent>
    ...
    <SheetFooter>
      <SheetClose asChild>
        <Button type="submit">Lưu</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`} />
      </ShowcaseSection>

      {/* ── 6. Ví dụ thực tế ── */}
      <ShowcaseSection title="6. Ví dụ thực tế: Mobile Menu">
        <p className="text-sm text-muted-foreground">
          Sheet thường dùng để làm menu điều hướng trên thiết bị di động.
        </p>
        <DemoBlock>
          <div className="border rounded-lg p-2 bg-muted/20 flex items-center justify-between">
            <span className="font-bold px-2">Logo</span>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-sm">
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="text-left">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Trang chủ</Button>
                  <Button variant="ghost" className="w-full justify-start">Sản phẩm</Button>
                  <Button variant="ghost" className="w-full justify-start">Dịch vụ</Button>
                  <Button variant="ghost" className="w-full justify-start">Liên hệ</Button>
                </div>
                <SheetFooter>
                  <div className="w-full pt-4 border-t text-xs text-muted-foreground">
                    Version 2.4.0
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </DemoBlock>
      </ShowcaseSection>

      {/* ── 7. Props reference ── */}
      <ShowcaseSection title="7. Props reference">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-3">SheetContent</h3>
            <PropsTable rows={[
              { prop: "side", type: '"top" | "right" | "bottom" | "left"', default_: '"right"', description: "Hướng xuất hiện của sheet." },
              { prop: "showCloseButton", type: "boolean", default_: "true", description: "Hiển thị nút X đóng sheet mặc định." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung giúp tùy chỉnh kích thước hoặc style." },
            ]} />
          </div>
          <p className="text-sm text-muted-foreground italic">
            * Các component khác như <code className="text-xs font-mono">Sheet</code>, <code className="text-xs font-mono">SheetTrigger</code> kế thừa props từ Radix UI Dialog.
          </p>
        </div>
      </ShowcaseSection>

      {/* ── 8. Lưu ý ── */}
      <ShowcaseSection title="8. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Sheet sử dụng Portal để render nội dung ra ngoài DOM hierarchy chính, giúp tránh các vấn đề về <code className="text-xs font-mono">z-index</code> và <code className="text-xs font-mono">overflow: hidden</code>.</li>
          <li>Khi mở Sheet, focus sẽ được khóa (trap focus) bên trong panel để đảm bảo tính accessibility.</li>
          <li>Mặc định, click vào vùng overlay hoặc nhấn phím <kbd className="text-[10px] font-sans border rounded px-0.5 bg-muted">Esc</kbd> sẽ đóng sheet.</li>
          <li>Dùng <code className="text-xs font-mono">asChild</code> trên <code className="text-xs font-mono">SheetTrigger</code> nếu bạn dùng Button custom hoặc component khác làm trigger.</li>
          <li>Dùng <code className="text-xs font-mono">SheetClose</code> bên trong <code className="text-xs font-mono">SheetContent</code> để tạo các nút đóng thủ công.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
