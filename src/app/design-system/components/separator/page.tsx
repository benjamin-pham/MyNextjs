import { Separator } from "@/components/ui/separator"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function SeparatorPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Separator</h1>
        <p className="text-sm text-muted-foreground">
          Thanh chia tách nội dung hoặc các phần của ứng dụng — có thể theo chiều ngang hoặc dọc.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Separator } from "@/components/ui/separator"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Separator orientation="horizontal | vertical" decorative={true | false} />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng để chia giữa tiêu đề và nội dung.
        </p>
        <DemoBlock>
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">Radix UI</h4>
            <p className="text-sm text-muted-foreground">
              An open-source UI component library.
            </p>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="space-y-1">
  <h4 className="text-sm font-medium leading-none">Radix UI</h4>
  <p className="text-sm text-muted-foreground">
    An open-source UI component library.
  </p>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 2. Orientation ── */}
      <ShowcaseSection title="2. Orientation">
        <p className="text-sm text-muted-foreground">
          Có 2 hướng:{" "}
          <code className="text-xs font-mono">horizontal</code> (mặc định) và{" "}
          <code className="text-xs font-mono">vertical</code>.
        </p>
        <DemoBlock>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Horizontal</span>
              <Separator />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest block">Vertical</span>
              <div className="flex h-10 items-center gap-4 bg-muted/30 p-2 rounded-md w-fit">
                <div className="size-4 rounded-full bg-primary/20" />
                <Separator orientation="vertical" />
                <div className="size-4 rounded-full bg-primary/20" />
                <Separator orientation="vertical" />
                <div className="size-4 rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
{/* Horizontal (Default) */}
<Separator />

{/* Vertical */}
<div className="flex h-5 items-center space-x-4">
  <span>Item A</span>
  <Separator orientation="vertical" />
  <span>Item B</span>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 3. Decorative ── */}
      <ShowcaseSection title="3. Decorative">
        <p className="text-sm text-muted-foreground">
          Mặc định <code className="text-xs font-mono">decorative=true</code> — phần tử sẽ bị các trình đọc màn hình bỏ qua. Nếu separator có ý nghĩa phân cấp dữ liệu quan trọng, hãy đặt <code className="text-xs font-mono">decorative=false</code>.
        </p>
        <DemoBlock>
          <div className="space-y-4">
            <div className="p-4 border rounded-lg space-y-4">
              <div className="font-semibold text-sm">Account Settings</div>
              <Separator decorative={false} />
              <div className="text-xs text-muted-foreground">Public profile information.</div>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
{/* Có ý nghĩa nội dung - screen reader sẽ thông báo là "separator" */}
<Separator decorative={false} />

{/* Chỉ mang tính trang trí (mặc định) */}
<Separator decorative={true} />
        `} />
      </ShowcaseSection>

      {/* ── 4. Ví dụ thực tế ── */}
      <ShowcaseSection title="4. Ví dụ thực tế">
        <p className="text-sm text-muted-foreground">
          Sử dụng Separator để phân chia các mục trong danh sách hoặc các cặp key-value.
        </p>
        <DemoBlock>
          <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
            <dl className="flex items-center justify-between">
              <dt>Item 1</dt>
              <dd className="text-muted-foreground">Value 1</dd>
            </dl>
            <Separator />
            <dl className="flex items-center justify-between">
              <dt>Item 2</dt>
              <dd className="text-muted-foreground">Value 2</dd>
            </dl>
            <Separator />
            <dl className="flex items-center justify-between">
              <dt>Item 3</dt>
              <dd className="text-muted-foreground">Value 3</dd>
            </dl>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="flex w-full max-w-sm flex-col gap-2 text-sm">
  <dl className="flex items-center justify-between">
    <dt>Item 1</dt>
    <dd className="text-muted-foreground">Value 1</dd>
  </dl>
  <Separator />
  <dl className="flex items-center justify-between">
    <dt>Item 2</dt>
    <dd className="text-muted-foreground">Value 2</dd>
  </dl>
  <Separator />
  <dl className="flex items-center justify-between">
    <dt>Item 3</dt>
    <dd className="text-muted-foreground">Value 3</dd>
  </dl>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <PropsTable rows={[
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng của thanh chia tách." },
          { prop: "decorative", type: "boolean", default_: "true", description: "Khi true, phần tử chỉ mang tính trang trí và bị bỏ qua bởi screen reader." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung để điều chỉnh margin, màu sắc hoặc kích thước." },
        ]} />
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Separator mặc định có màu <code className="text-xs font-mono">bg-border</code>.</li>
          <li>Khi dùng <code className="text-xs font-mono">orientation="vertical"</code>, separator cần được đặt trong một container có chiều cao xác định hoặc dùng <code className="text-xs font-mono">self-stretch</code> trong flexbox.</li>
          <li>Thêm <code className="text-xs font-mono">my-4</code> hoặc <code className="text-xs font-mono">mx-4</code> qua <code className="text-xs font-mono">className</code> để tạo khoảng cách nếu cần (không có prop spacing riêng).</li>
          <li>Sử dụng Radix UI Separator đảm bảo khả năng truy cập tốt (ARIA roles).</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
