import { Toggle } from "@/components/ui/toggle"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const BoldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </svg>
)

const ItalicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <line x1="19" y1="4" x2="10" y2="4" /><line x1="14" y1="20" x2="5" y2="20" /><line x1="15" y1="4" x2="9" y2="20" />
  </svg>
)

const UnderlineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M6 3v7a6 6 0 0 0 12 0V3" /><line x1="4" y1="21" x2="20" y2="21" />
  </svg>
)

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function TogglePage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Toggle</h1>
        <p className="text-sm text-muted-foreground">
          Nút hai trạng thái (bật/tắt) dùng để kích hoạt hoặc hủy kích hoạt một tính năng hoặc lựa chọn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Toggle } from "@/components/ui/toggle"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Toggle aria-label="Toggle italic">
  <ItalicIcon />
</Toggle>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Toggle thường chứa icon và cần có <code className="text-xs font-mono">aria-label</code> để đảm bảo tính truy cập.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Toggle aria-label="Toggle bold">
  <BoldIcon />
</Toggle>`} />
      </ShowcaseSection>

      {/* ── 2. Variants ── */}
      <ShowcaseSection title="2. Variants">
        <p className="text-sm text-muted-foreground">
          Có 2 variant: <code className="text-xs font-mono">default</code> (không viền) và <code className="text-xs font-mono">outline</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex flex-col gap-2 items-center">
              <Toggle variant="default" aria-label="Default">
                <BoldIcon />
              </Toggle>
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Default</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Toggle variant="outline" aria-label="Outline">
                <ItalicIcon />
              </Toggle>
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Outline</span>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Toggle variant="default">...</Toggle>
<Toggle variant="outline">...</Toggle>`} />
      </ShowcaseSection>

      {/* ── 3. Sizes ── */}
      <ShowcaseSection title="3. Sizes">
        <p className="text-sm text-muted-foreground">
          Hỗ trợ 3 kích thước: <code className="text-xs font-mono">sm</code>, <code className="text-xs font-mono">default</code>, và <code className="text-xs font-mono">lg</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex flex-col gap-2 items-center">
              <Toggle size="sm" aria-label="Small">
                <UnderlineIcon />
              </Toggle>
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Small</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Toggle size="default" aria-label="Default">
                <UnderlineIcon />
              </Toggle>
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Default</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Toggle size="lg" aria-label="Large">
                <UnderlineIcon />
              </Toggle>
              <span className="text-[10px] text-muted-foreground uppercase font-medium">Large</span>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Toggle size="sm">...</Toggle>
<Toggle size="default">...</Toggle>
<Toggle size="lg">...</Toggle>`} />
      </ShowcaseSection>

      {/* ── 4. Kèm với Text ── */}
      <ShowcaseSection title="4. Kèm với Text">
        <p className="text-sm text-muted-foreground">
          Toggle có thể kết hợp cả icon và chữ.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <Toggle variant="outline" className="gap-2">
              <ItalicIcon />
              Italic
            </Toggle>
            <Toggle variant="outline" className="gap-2">
              <BoldIcon />
              Bold
            </Toggle>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Toggle variant="outline" className="gap-2">
  <ItalicIcon />
  Italic
</Toggle>`} />
      </ShowcaseSection>

      {/* ── 5. Trạng thái Disabled ── */}
      <ShowcaseSection title="5. Trạng thái Disabled">
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <Toggle disabled aria-label="Disabled">
              <UnderlineIcon />
            </Toggle>
            <Toggle disabled variant="outline" pressed aria-label="Disabled pressed">
              <BoldIcon />
            </Toggle>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Toggle disabled>...</Toggle>
<Toggle disabled pressed>...</Toggle>`} />
      </ShowcaseSection>

      {/* ── 6. Ví dụ thực tế ── */}
      <ShowcaseSection title="6. Ví dụ thực tế (Toolbar)">
        <p className="text-sm text-muted-foreground">
          Phổ biến nhất là dùng trong các thanh công cụ (Toolbar).
        </p>
        <DemoBlock>
          <div className="flex items-center gap-1 p-1 border rounded-lg bg-background w-fit">
            <Toggle size="sm" variant="default" aria-label="Bold">
              <BoldIcon />
            </Toggle>
            <Toggle size="sm" variant="default" aria-label="Italic">
              <ItalicIcon />
            </Toggle>
            <Toggle size="sm" variant="default" aria-label="Underline">
              <UnderlineIcon />
            </Toggle>
            <div className="w-[1px] h-4 bg-muted mx-1" />
            <Toggle size="sm" variant="default" aria-label="Notifications">
              <BellIcon />
            </Toggle>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="flex items-center gap-1 p-1 border rounded-lg bg-background">
  <Toggle size="sm">...</Toggle>
  <Toggle size="sm">...</Toggle>
  <Toggle size="sm">...</Toggle>
</div>`} />
      </ShowcaseSection>

      {/* ── 7. Props reference ── */}
      <ShowcaseSection title="7. Props reference">
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "outline"', default_: '"default"', description: "Kiểu hiển thị của toggle." },
          { prop: "size", type: '"default" | "sm" | "lg"', default_: '"default"', description: "Kích thước của toggle." },
          { prop: "pressed", type: "boolean", description: "Trạng thái bật/tắt (controlled)." },
          { prop: "defaultPressed", type: "boolean", description: "Trạng thái mặc định khi load (uncontrolled)." },
          { prop: "onPressedChange", type: "(pressed: boolean) => void", description: "Callback khi trạng thái thay đổi." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa toggle." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Render thành thẻ con (Radix UI Slot)." },
        ]} />
      </ShowcaseSection>

      {/* ── 8. Lưu ý ── */}
      <ShowcaseSection title="8. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn cung cấp <code className="text-xs font-mono">aria-label</code> cho các toggle chỉ có icon để đảm bảo accessibility.</li>
          <li>Dùng <code className="text-xs font-mono">pressed</code> và <code className="text-xs font-mono">onPressedChange</code> nếu bạn muốn quản lý trạng thái toggle từ bên ngoài.</li>
          <li>Kích thước mặc định của icon bên trong nên là <code className="text-xs font-mono">size-4</code> để cân đối với padding của component.</li>
          <li>Toggle sử dụng Radix UI Primitive nên hỗ trợ đầy đủ phím tắt và screen reader.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
