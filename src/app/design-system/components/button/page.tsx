import { Button } from "@/components/ui/button"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start">
    <path d="M12 5v14M5 12h14" />
  </svg>
)

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start">
    <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
  </svg>
)

const ArrowIconPlain = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function ButtonPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Button</h1>
        <p className="text-sm text-muted-foreground">
          Nút bấm dùng để kích hoạt hành động — hỗ trợ nhiều variant, size, icon, và trạng thái khác nhau.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Button } from "@/components/ui/button"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Button variant="outline">Button</Button>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Button>Default</Button>`} />
      </ShowcaseSection>

      {/* ── 2. Variants ── */}
      <ShowcaseSection title="2. Variants">
        <p className="text-sm text-muted-foreground">
          Có 6 variant:{" "}
          {(["default", "secondary", "destructive", "outline", "ghost", "link"] as const).map((v, i, arr) => (
            <span key={v}>
              <code className="text-xs font-mono">{v}</code>
              {i < arr.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
        `} />
      </ShowcaseSection>

      {/* ── 3. Sizes ── */}
      <ShowcaseSection title="3. Sizes">
        <p className="text-sm text-muted-foreground">
          Có 4 size văn bản:{" "}
          {(["xs", "sm", "default", "lg"] as const).map((s, i, arr) => (
            <span key={s}>
              <code className="text-xs font-mono">{s}</code>
              {i < arr.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
        <DemoBlock>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="xs">xs</Button>
            <Button size="sm">sm</Button>
            <Button size="default">default</Button>
            <Button size="lg">lg</Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button size="xs">xs</Button>
<Button size="sm">sm</Button>
<Button size="default">default</Button>
<Button size="lg">lg</Button>
        `} />
      </ShowcaseSection>

      {/* ── 4. Icon sizes ── */}
      <ShowcaseSection title="4. Icon sizes">
        <p className="text-sm text-muted-foreground">
          Dùng size <code className="text-xs font-mono">icon-xs</code>, <code className="text-xs font-mono">icon-sm</code>, <code className="text-xs font-mono">icon</code>, <code className="text-xs font-mono">icon-lg</code> cho button chỉ có icon (hình vuông).
        </p>
        <DemoBlock>
          <div className="flex flex-wrap items-end gap-3">
            <Button size="icon-xs" aria-label="icon-xs"><ArrowIconPlain /></Button>
            <Button size="icon-sm" aria-label="icon-sm"><ArrowIconPlain /></Button>
            <Button size="icon" aria-label="icon"><ArrowIconPlain /></Button>
            <Button size="icon-lg" aria-label="icon-lg"><ArrowIconPlain /></Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button size="icon-xs" aria-label="..."><ArrowIcon /></Button>
<Button size="icon-sm" aria-label="..."><ArrowIcon /></Button>
<Button size="icon"    aria-label="..."><ArrowIcon /></Button>
<Button size="icon-lg" aria-label="..."><ArrowIcon /></Button>
        `} />
      </ShowcaseSection>

      {/* ── 5. Với icon ── */}
      <ShowcaseSection title="5. Với icon">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">&lt;svg&gt;</code> với{" "}
          <code className="text-xs font-mono">data-icon="inline-start"</code> hoặc{" "}
          <code className="text-xs font-mono">data-icon="inline-end"</code> để điều chỉnh padding tự động.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Button>
              <PlusIcon />
              Thêm mới
            </Button>
            <Button variant="outline">
              Tiếp theo
              <ArrowIcon />
            </Button>
            <Button variant="destructive">
              <TrashIcon />
              Xoá
            </Button>
            <Button variant="secondary">
              <PlusIcon />
              Tạo
              <ArrowIcon />
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button>
  <svg data-icon="inline-start">...</svg>
  Thêm mới
</Button>

<Button variant="outline">
  Tiếp theo
  <svg data-icon="inline-end">...</svg>
</Button>
        `} />
      </ShowcaseSection>

      {/* ── 6. Trạng thái ── */}
      <ShowcaseSection title="6. Trạng thái">
        <p className="text-sm text-muted-foreground">
          Hỗ trợ <code className="text-xs font-mono">disabled</code> và <code className="text-xs font-mono">aria-invalid</code>.
        </p>
        <DemoBlock>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3 items-center">
              <Button>Normal</Button>
              <Button disabled>Disabled</Button>
              <Button aria-invalid="true">Invalid</Button>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <Button variant="outline">Normal</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="outline" aria-invalid="true">Invalid</Button>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button>Normal</Button>
<Button disabled>Disabled</Button>
<Button aria-invalid="true">Invalid</Button>
        `} />
      </ShowcaseSection>

      {/* ── 7. asChild ── */}
      <ShowcaseSection title="7. asChild — render thành thẻ khác">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">asChild</code> để Button render thành thẻ con (ví dụ <code className="text-xs font-mono">&lt;a&gt;</code>), giữ nguyên style Button nhưng dùng thẻ khác trong DOM.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Button asChild variant="outline">
              <a href="#">Button dạng link</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#">Xem thêm</a>
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button asChild variant="outline">
  <a href="/docs">Button dạng link</a>
</Button>
        `} />
      </ShowcaseSection>

      {/* ── 8. Variants × Sizes ── */}
      <ShowcaseSection title="8. Variants × Sizes">
        <DemoBlock>
          <div className="space-y-3">
            {(["default", "secondary", "destructive", "outline", "ghost", "link"] as const).map((variant) => (
              <div key={variant} className="flex flex-wrap items-end gap-3">
                {(["xs", "sm", "default", "lg"] as const).map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {variant} · {size}
                  </Button>
                ))}
              </div>
            ))}
          </div>
        </DemoBlock>
      </ShowcaseSection>

      {/* ── 9. Props reference ── */}
      <ShowcaseSection title="9. Props reference">
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default_: '"default"', description: "Kiểu hiển thị của button." },
          { prop: "size", type: '"xs" | "sm" | "default" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg"', default_: '"default"', description: "Kích thước button. Các size icon- tạo button hình vuông." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Khi true, render thành thẻ con thay vì <button>. Dùng với Slot." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá button, không cho tương tác." },
          { prop: "aria-invalid", type: '"true" | boolean', description: 'Hiển thị trạng thái lỗi với viền và ring màu destructive.' },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Button render thành <code className="text-xs font-mono">&lt;button&gt;</code> mặc định — dùng <code className="text-xs font-mono">asChild</code> nếu cần render thành <code className="text-xs font-mono">&lt;a&gt;</code> hoặc thẻ khác.</li>
          <li>Icon SVG không cần set <code className="text-xs font-mono">className="size-4"</code> thủ công — Button tự áp dụng <code className="text-xs font-mono">size-4</code> cho SVG không có class size.</li>
          <li><code className="text-xs font-mono">data-icon="inline-start"</code> / <code className="text-xs font-mono">inline-end</code> điều chỉnh padding trái/phải tự động khi có icon.</li>
          <li>Các size <code className="text-xs font-mono">icon-*</code> tạo button vuông — chỉ nên chứa một icon, kèm <code className="text-xs font-mono">aria-label</code> để đảm bảo accessibility.</li>
          <li>Variant <code className="text-xs font-mono">ghost</code> và <code className="text-xs font-mono">link</code> chỉ hiện style khi hover — phù hợp cho button ít nổi bật trong giao diện.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
