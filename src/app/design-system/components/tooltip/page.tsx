"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"
import { Plus, Save, Trash, Info, Settings } from "lucide-react"

export default function TooltipPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Tooltip</h1>
        <p className="text-sm text-muted-foreground">
          Cửa sổ nội dung nhỏ xuất hiện khi người dùng di chuột qua (hover) hoặc tập trung (focus) vào một thành phần.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <p className="text-sm text-muted-foreground mb-4">
          Tất cả các Tooltip cần được bao bọc bởi <code className="text-xs font-mono">TooltipProvider</code>. Thông thường, bạn nên đặt Provider ở cấp cao nhất của ứng dụng (ví dụ trong <code className="text-xs font-mono">layout.tsx</code>).
        </p>
        <CodeBlock alwaysOpen code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <TooltipProvider>
          <DemoBlock>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Nội dung tooltip hiển thị ở đây</p>
              </TooltipContent>
            </Tooltip>
          </DemoBlock>
        </TooltipProvider>
        <CodeBlock code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Nội dung tooltip hiển thị ở đây</p>
  </TooltipContent>
</Tooltip>`} />
      </ShowcaseSection>

      {/* ── 2. Vị trí ── */}
      <ShowcaseSection title="2. Vị trí (Side & Align)">
        <p className="text-sm text-muted-foreground text-pretty">
          Sử dụng prop <code className="text-xs font-mono">side</code> để điều chỉnh hướng hiển thị: <code className="text-xs font-mono">top</code>, <code className="text-xs font-mono">right</code>, <code className="text-xs font-mono">bottom</code>, hoặc <code className="text-xs font-mono">left</code>.
        </p>
        <TooltipProvider>
          <DemoBlock>
            <div className="flex flex-wrap gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Top</Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                  Tooltip on Top
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">
                  Tooltip on Right
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Bottom</Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  Tooltip on Bottom
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">Left</Button>
                </TooltipTrigger>
                <TooltipContent side="left">
                  Tooltip on Left
                </TooltipContent>
              </Tooltip>
            </div>
          </DemoBlock>
        </TooltipProvider>
        <CodeBlock code={`<TooltipContent side="top">Top</TooltipContent>
<TooltipContent side="right">Right</TooltipContent>
<TooltipContent side="bottom">Bottom</TooltipContent>
<TooltipContent side="left">Left</TooltipContent>`} />
      </ShowcaseSection>

      {/* ── 3. Delay & Tùy chỉnh ── */}
      <ShowcaseSection title="3. Delay & Tùy chỉnh">
        <p className="text-sm text-muted-foreground text-pretty">
          Bạn có thể cấu hình <code className="text-xs font-mono">delayDuration</code> trên <code className="text-xs font-mono">TooltipProvider</code> (mặc định trong project là 0ms để phản hồi tức thì).
        </p>
        <DemoBlock>
          <div className="flex gap-4">
            <TooltipProvider delayDuration={700}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">Delay 700ms</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Tooltip này hiện chậm hơn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">No Delay</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Hiện ngay lập tức</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </DemoBlock>
        <CodeBlock code={`<TooltipProvider delayDuration={700}>
  <Tooltip>...</Tooltip>
</TooltipProvider>`} />
      </ShowcaseSection>

      {/* ── 4. Ví dụ thực tế ── */}
      <ShowcaseSection title="4. Ví dụ thực tế">
        <p className="text-sm text-muted-foreground text-pretty font-semibold">
          Nút icon không có nhãn chữ
        </p>
        <TooltipProvider>
          <DemoBlock>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Plus className="size-4" />
                    <span className="sr-only">Add new</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Thêm mới</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Save className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Lưu thay đổi</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive" size="icon">
                    <Trash className="size-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Xóa mục này</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </DemoBlock>
        </TooltipProvider>

        <p className="text-sm text-muted-foreground text-pretty font-semibold mt-6">
          Tooltip với Kbd (Phím tắt)
        </p>
        <TooltipProvider>
          <DemoBlock>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="flex items-center gap-2">
                <span>Cài đặt</span>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                  <span className="text-xs">⌘</span>S
                </kbd>
              </TooltipContent>
            </Tooltip>
          </DemoBlock>
        </TooltipProvider>
      </ShowcaseSection>

      {/* ── 5. Khi trigger bị disabled ── */}
      <ShowcaseSection title="5. Khi trigger bị disabled">
        <p className="text-sm text-muted-foreground mb-4">
          Phần tử bị <code className="text-xs font-mono">disabled</code> sẽ không nhận các sự kiện chuột (hover). Để hiển thị tooltip cho chúng, hãy bọc phần tử đó bằng một thẻ <code className="text-xs font-mono">&lt;span&gt;</code> (hoặc thẻ block khác) và đặt trigger lên thẻ bọc đó.
        </p>
        <TooltipProvider>
          <DemoBlock>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Button variant="outline" disabled>
                    Nút bị khóa
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tính năng này tạm thời không khả dụng</p>
              </TooltipContent>
            </Tooltip>
          </DemoBlock>
        </TooltipProvider>
        <CodeBlock code={`<Tooltip>
  <TooltipTrigger asChild>
    <span className="inline-block">
      <Button variant="outline" disabled>
        Nút bị khóa
      </Button>
    </span>
  </TooltipTrigger>
  <TooltipContent>
    <p>Tính năng này tạm thời không khả dụng</p>
  </TooltipContent>
</Tooltip>`} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">TooltipProvider</h4>
            <PropsTable rows={[
              { prop: "delayDuration", type: "number", default_: "0", description: "Thời gian chờ (ms) trước khi tooltip hiện." },
              { prop: "skipDelayDuration", type: "number", default_: "300", description: "Thời gian chờ để bỏ qua delay khi di chuyển giữa các trigger." },
            ]} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">TooltipContent</h4>
            <PropsTable rows={[
              { prop: "side", type: '"top" | "right" | "bottom" | "left"', default_: '"top"', description: "Vị trí của tooltip so với trigger." },
              { prop: "sideOffset", type: "number", default_: "4", description: "Khoảng cách giữa tooltip và trigger." },
              { prop: "align", type: '"start" | "center" | "end"', default_: '"center"', description: "Căn lề của tooltip so với trigger." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung cho content." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn sử dụng <code className="text-xs font-mono">TooltipProvider</code> để bao bọc các Tooltip.</li>
          <li>Khi dùng với <code className="text-xs font-mono">Button</code> hoặc các component phức tạp, hãy dùng <code className="text-xs font-mono">asChild</code> trên <code className="text-xs font-mono">TooltipTrigger</code> để tránh nesting thẻ <code className="text-xs font-mono">&lt;button&gt;</code> sai quy định.</li>
          <li>Dùng <code className="text-xs font-mono">sr-only</code> bên trong trigger nếu trigger chỉ chứa icon để đảm bảo tính tiếp cận (Accessibility).</li>
          <li>Tooltip nội tại của project đã được styled sẵn với nền tối, chữ sáng và hỗ trợ bo góc, animation mượt mà.</li>
          <li>Khi phần tử trigger bị <code className="text-xs font-mono">disabled</code> (như Button), hãy bọc nó trong một thẻ <code className="text-xs font-mono">&lt;span&gt;</code> để đảm bảo tooltip vẫn hiển thị khi hover.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
