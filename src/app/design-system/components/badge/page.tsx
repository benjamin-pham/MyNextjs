import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z" /><path d="M12 8v4l3 3" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start">
    <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-end">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function BadgePage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Badge</h1>
        <p className="text-sm text-muted-foreground">
          Nhãn nhỏ gọn dùng để hiển thị trạng thái, danh mục, hoặc số đếm — thường đặt kèm với các thành phần khác.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Badge } from "@/components/ui/badge"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Badge variant="default | outline | secondary | destructive">Badge</Badge>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Badge>Default</Badge>`} />
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
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="ghost">Ghost</Badge>
<Badge variant="link">Link</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 3. Custom Colors ── */}
      <ShowcaseSection title="3. Custom Colors">
        <p className="text-sm text-muted-foreground">
          Sử dụng Tailwind CSS utility classes để tùy chỉnh màu sắc cho Badge.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              Blue
            </Badge>
            <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Green
            </Badge>
            <Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
              Sky
            </Badge>
            <Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              Purple
            </Badge>
            <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
              Red
            </Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
  Blue
</Badge>

<Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
  Green
</Badge>

<Badge className="bg-sky-50 text-sky-700 dark:bg-sky-950 dark:text-sky-300">
  Sky
</Badge>

<Badge className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
  Purple
</Badge>

<Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
  Red
</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 4. Với icon ── */}
      <ShowcaseSection title="4. Với icon">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">&lt;svg&gt;</code> với{" "}
          <code className="text-xs font-mono">data-icon="inline-start"</code> hoặc{" "}
          <code className="text-xs font-mono">data-icon="inline-end"</code> để điều chỉnh padding tự động.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge>
              <ClockIcon />
              Icon start
            </Badge>
            <Badge variant="secondary">
              Icon end
              <ArrowIcon />
            </Badge>
            <Badge variant="outline">
              <CheckIcon />
              Cả hai
              <XIcon />
            </Badge>
            <Badge variant="destructive">
              <XIcon />
              Lỗi
            </Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge>
  <svg data-icon="inline-start">...</svg>
  Icon start
</Badge>

<Badge variant="secondary">
  Icon end
  <svg data-icon="inline-end">...</svg>
</Badge>

<Badge variant="outline">
  <svg data-icon="inline-start">...</svg>
  Cả hai
  <svg data-icon="inline-end">...</svg>
</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 5. Với Spinner ── */}
      <ShowcaseSection title="5. Với Spinner">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">&lt;Spinner&gt;</code> để hiển thị trạng thái đang xử lý.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="destructive">
              <Spinner data-icon="inline-start" />
              Deleting
            </Badge>
            <Badge variant="secondary">
              Generating
              <Spinner data-icon="inline-end" />
            </Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge variant="destructive">
  <Spinner data-icon="inline-start" />
  Deleting
</Badge>

<Badge variant="secondary">
  Generating
  <Spinner data-icon="inline-end" />
</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 6. Trạng thái invalid ── */}
      <ShowcaseSection title="6. Trạng thái invalid">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">aria-invalid="true"</code> để hiển thị trạng thái lỗi với viền đỏ.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge>Bình thường</Badge>
            <Badge aria-invalid="true">aria-invalid</Badge>
            <Badge variant="outline" aria-invalid="true">Outline + invalid</Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge>Bình thường</Badge>
<Badge aria-invalid="true">aria-invalid</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 7. asChild ── */}
      <ShowcaseSection title="7. asChild — render thành thẻ khác">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">asChild</code> để Badge render thành thẻ con (ví dụ <code className="text-xs font-mono">&lt;a&gt;</code>), giữ nguyên style Badge nhưng dùng thẻ khác trong DOM.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge asChild variant="outline">
              <a href="#">Badge dạng link</a>
            </Badge>
            <Badge asChild variant="secondary">
              <a href="#">New</a>
            </Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge asChild variant="outline">
  <a href="/docs">Badge dạng link</a>
</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 8. Ví dụ thực tế ── */}
      <ShowcaseSection title="8. Ví dụ thực tế">
        <p className="text-sm text-muted-foreground">
          Badge thường được dùng kèm với các thành phần khác để biểu thị trạng thái.
        </p>
        <DemoBlock>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Đơn hàng #1042</span>
              <Badge variant="secondary">Đang xử lý</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Thanh toán</span>
              <Badge>
                <CheckIcon />
                Thành công
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Kết nối API</span>
              <Badge variant="destructive">Lỗi</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Tính năng Beta</span>
              <Badge variant="outline">Beta</Badge>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="flex items-center gap-2">
  <span>Đơn hàng #1042</span>
  <Badge variant="secondary">Đang xử lý</Badge>
</div>

<div className="flex items-center gap-2">
  <span>Thanh toán</span>
  <Badge>
    <CheckIcon />
    Thành công
  </Badge>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 9. Props reference ── */}
      <ShowcaseSection title="9. Props reference">
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "secondary" | "destructive" | "outline" | "ghost" | "link"', default_: '"default"', description: "Kiểu hiển thị của badge." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Khi true, render thành thẻ con thay vì <span>. Dùng với Slot." },
          { prop: "aria-invalid", type: '"true" | boolean', description: 'Hiển thị trạng thái lỗi với viền và ring màu destructive.' },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Badge render thành <code className="text-xs font-mono">&lt;span&gt;</code> mặc định — không phải thẻ tương tác, không nên dùng thay cho button hay link trực tiếp.</li>
          <li>Dùng <code className="text-xs font-mono">asChild</code> nếu cần Badge có hành vi tương tác (ví dụ: thẻ <code className="text-xs font-mono">&lt;a&gt;</code>).</li>
          <li>Icon SVG không cần set <code className="text-xs font-mono">{'className="size-3"'}</code> vì Badge tự áp dụng <code className="text-xs font-mono">size-3!</code>.</li>
          <li><code className="text-xs font-mono">data-icon="inline-start"</code> / <code className="text-xs font-mono">inline-end</code> điều chỉnh padding trái/phải tự động khi có icon.</li>
          <li>Variant <code className="text-xs font-mono">ghost</code> và <code className="text-xs font-mono">link</code> chỉ hiện style khi hover — phù hợp cho badge ít nổi bật.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
