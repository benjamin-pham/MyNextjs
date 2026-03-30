"use client"

import React from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function SonnerPage() {
  const [position, setPosition] = React.useState<any>("bottom-right")

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <Toaster position={position} />
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Sonner</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần thông báo (toast) hiện đại, nhẹ và có thể tùy chỉnh cao.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"`} />
      </ShowcaseSection>

      {/* ── Cấu hình ── */}
      <ShowcaseSection title="Cấu hình">
        <p className="text-sm text-muted-foreground">
          Thêm thành phần <code className="text-xs font-mono">&lt;Toaster /&gt;</code> vào root layout của bạn.
        </p>
        <CodeBlock alwaysOpen code={`// src/app/layout.tsx
import { Toaster } from "@/components/ui/sonner"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng hàm <code className="text-xs font-mono">toast()</code> để hiển thị một thông báo đơn giản.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button
              variant="outline"
              onClick={() => toast("Hello World")}
            >
              Simple Toast
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`toast("Hello World")`} />
      </ShowcaseSection>

      {/* ── 2. Với Description ── */}
      <ShowcaseSection title="2. Với Description">
        <p className="text-sm text-muted-foreground">
          Bạn có thể thêm mô tả chi tiết cho thông báo bằng cách truyền thuộc tính <code className="text-xs font-mono">description</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button
              variant="outline"
              onClick={() =>
                toast("Event has been created", {
                  description: "Sunday, December 03, 2023 at 9:00 AM",
                })
              }
            >
              Toast with Description
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
toast("Event has been created", {
  description: "Sunday, December 03, 2023 at 9:00 AM",
})
        `} />
      </ShowcaseSection>

      {/* ── 3. Các loại thông báo ── */}
      <ShowcaseSection title="3. Các loại thông báo">
        <p className="text-sm text-muted-foreground">
          Sử dụng các phương thức <code className="text-xs font-mono">toast.success</code>, <code className="text-xs font-mono">toast.error</code>, v.v. để hiển thị icon tương ứng.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            <Button variant="outline" onClick={() => toast("Đây là thông báo mặc định.")}>
              Default
            </Button>
            <Button variant="outline" onClick={() => toast.success("Đã lưu thành công!")}>
              Success
            </Button>
            <Button variant="outline" onClick={() => toast.info("Có một bản cập nhật mới.")}>
              Info
            </Button>
            <Button variant="outline" onClick={() => toast.warning("Dung lượng sắp đầy.")}>
              Warning
            </Button>
            <Button variant="outline" onClick={() => toast.error("Đã có lỗi xảy ra.")}>
              Error
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
toast("Đây là thông báo mặc định.")
toast.success("Đã lưu thành công!")
toast.info("Có một bản cập nhật mới.")
toast.warning("Dung lượng sắp đầy.")
toast.error("Đã có lỗi xảy ra.")
        `} />
      </ShowcaseSection>

      {/* ── 4. Trạng thái Loading ── */}
      <ShowcaseSection title="4. Trạng thái Loading">
        <p className="text-sm text-muted-foreground">
          Hiển thị thông báo đang xử lý và cập nhật khi hoàn thành.
        </p>
        <DemoBlock>
          <Button
            variant="outline"
            onClick={() => {
              const promise = () => new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000))
              toast.promise(promise, {
                loading: "Đang tải...",
                success: (data: any) => {
                  return `${data.name} đã được tải thành công!`
                },
                error: "Lỗi khi tải.",
              })
            }}
          >
            Show Promise Toast
          </Button>
        </DemoBlock>
        <CodeBlock code={`
const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

toast.promise(promise, {
  loading: "Đang tải...",
  success: "Đã tải xong!",
  error: "Lỗi khi tải.",
})
        `} />
      </ShowcaseSection>

      {/* ── 5. Tùy chỉnh vị trí ── */}
      <ShowcaseSection title="5. Tùy chỉnh vị trí">
        <p className="text-sm text-muted-foreground">
          Bạn có thể thay đổi vị trí thông qua prop <code className="text-xs font-mono">position</code> trên <code className="text-xs font-mono">&lt;Toaster /&gt;</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"].map((pos) => (
                <Button
                  key={pos}
                  variant={position === pos ? "default" : "outline"}
                  size="sm"
                  onClick={() => setPosition(pos)}
                >
                  {pos}
                </Button>
              ))}
            </div>
            <Button
              onClick={() => toast(`Thông báo tại vị trí: ${position}`)}
            >
              Test Position
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock alwaysOpen code={`<Toaster position="${position}" />`} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <h3 className="text-sm font-medium mb-2 text-foreground">Toaster Props</h3>
        <PropsTable rows={[
          { prop: "theme", type: '"light" | "dark" | "system"', default_: '"system"', description: "Chủ đề của toast." },
          { prop: "position", type: '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"', default_: '"bottom-right"', description: "Vị trí hiển thị toast." },
          { prop: "closeButton", type: "boolean", default_: "false", description: "Hiển thị nút đóng toast." },
          { prop: "richColors", type: "boolean", default_: "false", description: "Sử dụng màu sắc đậm cho success, error, v.v." },
          { prop: "expand", type: "boolean", default_: "false", description: "Luôn hiển thị các toast đang chờ thay vì xếp chồng." },
        ]} />
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Đảm bảo chỉ có một instance <code className="text-xs font-mono">&lt;Toaster /&gt;</code> được render trong toàn bộ ứng dụng.</li>
          <li>Bạn có thể gọi <code className="text-xs font-mono">toast()</code> từ bất kỳ đâu: component, server action (nếu gọi từ client), hoặc các hàm logic khác.</li>
          <li>Mặc định, toast sẽ tự đóng sau 4 giây. Bạn có thể thay đổi bằng prop <code className="text-xs font-mono">duration</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
