import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const Settings2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-2">
    <path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function PopoverPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Popover</h1>
        <p className="text-sm text-muted-foreground">
          Cửa sổ nội dung nổi bật xuất hiện khi nhấn vào một phần tử trigger. Khác với Tooltip, Popover thường chứa nội dung phức tạp hơn và có thể tương tác.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader>
      <PopoverTitle>Title</PopoverTitle>
      <PopoverDescription>Description text here.</PopoverDescription>
    </PopoverHeader>
  </PopoverContent>
</Popover>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">PopoverTrigger</code> để mở và <code className="text-xs font-mono">PopoverContent</code> để chứa nội dung.
        </p>
        <DemoBlock>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Set the dimensions for the layer.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </DemoBlock>
        <CodeBlock code={`
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent>
    Nội dung popover ở đây.
  </PopoverContent>
</Popover>
        `} />
      </ShowcaseSection>

      {/* ── 2. Với Header, Title & Description ── */}
      <ShowcaseSection title="2. Với Header, Title & Description">
        <p className="text-sm text-muted-foreground">
          Sử dụng các component bổ trợ để tạo cấu trúc nội dung rõ ràng và nhất quán.
        </p>
        <DemoBlock>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">View Info</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <PopoverHeader>
                <PopoverTitle>Cấu hình Webhook</PopoverTitle>
                <PopoverDescription>
                  Thiết lập địa chỉ URL để nhận thông báo từ hệ thống.
                </PopoverDescription>
              </PopoverHeader>
              <div className="pt-2">
                <Input placeholder="https://example.com/webhook" />
              </div>
            </PopoverContent>
          </Popover>
        </DemoBlock>
        <CodeBlock code={`
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">View Info</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <PopoverHeader>
      <PopoverTitle>Cấu hình Webhook</PopoverTitle>
      <PopoverDescription>
        Thiết lập địa chỉ URL để nhận thông báo từ hệ thống.
      </PopoverDescription>
    </PopoverHeader>
    <div className="pt-2">
      <Input placeholder="https://example.com/webhook" />
    </div>
  </PopoverContent>
</Popover>
        `} />
      </ShowcaseSection>

      {/* ── 3. Vị trí & Căn lề ── */}
      <ShowcaseSection title="3. Vị trí & Căn lề">
        <p className="text-sm text-muted-foreground">
          Điều chỉnh bằng props <code className="text-xs font-mono">side</code> (top, right, bottom, left) và <code className="text-xs font-mono">align</code> (start, center, end).
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Top Start</Button>
              </PopoverTrigger>
              <PopoverContent side="top" align="start">
                Side: Top, Align: Start
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Right</Button>
              </PopoverTrigger>
              <PopoverContent side="right">
                Side: Right, Align: Center
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="secondary">Bottom End</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="end">
                Side: Bottom, Align: End
              </PopoverContent>
            </Popover>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<PopoverContent side="top" align="start">...</PopoverContent>
<PopoverContent side="right">...</PopoverContent>
<PopoverContent side="bottom" align="end">...</PopoverContent>
        `} />
      </ShowcaseSection>

      {/* ── 4. Form trong Popover ── */}
      <ShowcaseSection title="4. Form trong Popover">
        <p className="text-sm text-muted-foreground">
          Ví dụ thực tế về việc sử dụng Popover để thay đổi cài đặt nhanh.
        </p>
        <DemoBlock>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings2Icon />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">Dimensions</h4>
                  <p className="text-sm text-muted-foreground">
                    Cập nhật kích thước vùng chọn.
                  </p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="maxWidth">Max. width</Label>
                    <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </DemoBlock>
        <CodeBlock code={`
<PopoverContent className="w-80">
  <div className="grid gap-4">
    <div className="space-y-2">
      <h4 className="font-medium leading-none">Dimensions</h4>
      <p className="text-sm text-muted-foreground">Cập nhật kích thước vùng chọn.</p>
    </div>
    <div className="grid gap-2">
      <div className="grid grid-cols-3 items-center gap-4">
        <Label htmlFor="width">Width</Label>
        <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
      </div>
      {/* ... */}
    </div>
  </div>
</PopoverContent>
        `} />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <h3 className="text-sm font-semibold mb-3">PopoverContent</h3>
        <PropsTable rows={[
          { prop: "side", type: '"top" | "right" | "bottom" | "left"', default_: '"bottom"', description: "Vị trí hiển thị so với trigger." },
          { prop: "sideOffset", type: "number", default_: "4", description: "Khoảng cách so với trigger (pixel)." },
          { prop: "align", type: '"start" | "center" | "end"', default_: '"center"', description: "Căn lề so với trigger." },
          { prop: "alignOffset", type: "number", default_: "0", description: "Khoảng cách căn lề (pixel)." },
          { prop: "avoidCollisions", type: "boolean", default_: "true", description: "Tự động đổi vị trí nếu bị tràn màn hình." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Render thành thẻ con của Slot." },
        ]} />
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Dùng <code className="text-xs font-mono">asChild</code> trên <code className="text-xs font-mono">PopoverTrigger</code> nếu bạn lồng một component khác (như Button) vào trong.</li>
          <li>Popover sẽ tự động focus vào phần tử đầu tiên bên trong khi mở — hữu ích cho việc nhập liệu.</li>
          <li>Nó tuân thủ WAI-ARIA cho các component dạng Layer — đóng khi nhấn Esc hoặc nhấp ra ngoài.</li>
          <li>Tránh dùng Popover cho các nội dung chỉ mang tính chất giải thích ngắn gọn (nên dùng Tooltip).</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
