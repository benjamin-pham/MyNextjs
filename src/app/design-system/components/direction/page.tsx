"use client"

import { useState } from "react"
import { DirectionProvider, useDirection } from "@/components/ui/direction"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── Demo: useDirection hook ─────────────────────────────────────────────── */

function DirectionReadout() {
  const dir = useDirection()
  return (
    <div className="rounded-md border bg-muted/40 px-4 py-2 text-sm">
      <span className="text-muted-foreground">useDirection() → </span>
      <code className="font-mono font-semibold">{dir}</code>
    </div>
  )
}

/* ─── Demo: Interactive switcher ─────────────────────────────────────────── */

function DirectionSwitcher() {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

  return (
    <div className="space-y-4 w-full max-w-sm">
      <div className="flex gap-2">
        <button
          onClick={() => setDir("ltr")}
          className={`flex-1 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${dir === "ltr"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
        >
          LTR
        </button>
        <button
          onClick={() => setDir("rtl")}
          className={`flex-1 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors ${dir === "rtl"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/70"
            }`}
        >
          RTL
        </button>
      </div>

      <DirectionProvider dir={dir}>
        <div dir={dir} className="space-y-2">
          <DirectionReadout />
          <div className="rounded-md border px-4 py-3 text-sm space-y-1">
            <p className="font-medium">Nội dung theo chiều {dir.toUpperCase()}</p>
            <p className="text-muted-foreground">
              {dir === "ltr"
                ? "Text flows from left to right (English, Vietnamese…)"
                : "النص يتدفق من اليمين إلى اليسار (عربي، عبري…)"}
            </p>
          </div>
        </div>
      </DirectionProvider>
    </div>
  )
}

/* ─── Demo: Nested providers ─────────────────────────────────────────────── */

function NestedDirections() {
  return (
    <DirectionProvider dir="ltr">
      <div dir="ltr" className="w-full max-w-sm space-y-2">
        <div className="rounded-md border px-4 py-3 text-sm">
          <p className="text-xs text-muted-foreground mb-1">DirectionProvider dir="ltr"</p>
          <p>Left to right text →</p>

          <DirectionProvider dir="rtl">
            <div dir="rtl" className="mt-2 rounded-md border px-3 py-2 bg-muted/40">
              <p className="text-xs text-muted-foreground mb-1">Nested dir="rtl"</p>
              <p>← النص من اليمين إلى اليسار</p>
            </div>
          </DirectionProvider>
        </div>
      </div>
    </DirectionProvider>
  )
}

/* ─── Demo: RTL form ─────────────────────────────────────────────────────── */

function RTLForm() {
  return (
    <DirectionProvider dir="rtl">
      <div dir="rtl" className="w-full max-w-sm space-y-3">
        <p className="text-xs text-muted-foreground">Biểu mẫu RTL — ví dụ tiếng Ả Rập</p>
        <div className="space-y-1">
          <label className="block text-sm font-medium">الاسم</label>
          <input
            className="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="أدخل اسمك"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-sm font-medium">البريد الإلكتروني</label>
          <input
            className="w-full rounded-md border bg-background px-3 py-1.5 text-sm outline-none focus:ring-2 focus:ring-primary/50"
            placeholder="example@mail.com"
            dir="ltr"
          />
        </div>
        <button className="w-full rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground">
          إرسال
        </button>
      </div>
    </DirectionProvider>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function DirectionPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Direction</h1>
        <p className="text-sm text-muted-foreground">
          Provider thiết lập hướng văn bản (LTR/RTL) cho toàn bộ cây component con —
          hữu ích khi xây dựng ứng dụng đa ngôn ngữ hỗ trợ tiếng Ả Rập, Hebrew…
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock
          alwaysOpen
          code={`import { DirectionProvider, useDirection } from "@/components/ui/direction"`}
        />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock
          alwaysOpen
          code={`<DirectionProvider dir="rtl">
  {children}
</DirectionProvider>`}
        />
      </ShowcaseSection>

      {/* ── 1. Interactive switcher ── */}
      <ShowcaseSection title="1. Chuyển đổi LTR / RTL">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">DirectionProvider</code> nhận prop{" "}
          <code className="text-xs font-mono">dir</code> (hoặc alias{" "}
          <code className="text-xs font-mono">direction</code>) với giá trị{" "}
          <code className="text-xs font-mono">"ltr"</code> hoặc{" "}
          <code className="text-xs font-mono">"rtl"</code>.
        </p>
        <DemoBlock>
          <DirectionSwitcher />
        </DemoBlock>
        <CodeBlock
          code={`const [dir, setDir] = useState<"ltr" | "rtl">("ltr")

<DirectionProvider dir={dir}>
  <div dir={dir}>
    {/* nội dung tự điều chỉnh hướng */}
  </div>
</DirectionProvider>`}
        />
      </ShowcaseSection>

      {/* ── 2. useDirection hook ── */}
      <ShowcaseSection title="2. useDirection — đọc hướng hiện tại">
        <p className="text-sm text-muted-foreground">
          Hook <code className="text-xs font-mono">useDirection()</code> trả về{" "}
          <code className="text-xs font-mono">"ltr"</code> hoặc{" "}
          <code className="text-xs font-mono">"rtl"</code> từ{" "}
          <code className="text-xs font-mono">DirectionProvider</code> gần nhất trong cây.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full max-w-sm">
            <DirectionProvider dir="ltr">
              <div dir="ltr" className="space-y-2">
                <p className="text-xs text-muted-foreground">Bên trong DirectionProvider dir="ltr"</p>
                <DirectionReadout />
              </div>
            </DirectionProvider>
            <DirectionProvider dir="rtl">
              <div dir="rtl" className="space-y-2">
                <p className="text-xs text-muted-foreground">Bên trong DirectionProvider dir="rtl"</p>
                <DirectionReadout />
              </div>
            </DirectionProvider>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`function MyComponent() {
  const dir = useDirection() // "ltr" | "rtl"
  return <p>Hướng hiện tại: {dir}</p>
}

<DirectionProvider dir="rtl">
  <MyComponent /> {/* useDirection() → "rtl" */}
</DirectionProvider>`}
        />
      </ShowcaseSection>

      {/* ── 3. Nested providers ── */}
      <ShowcaseSection title="3. Lồng nhiều DirectionProvider">
        <p className="text-sm text-muted-foreground">
          Các provider có thể lồng nhau — provider trong cùng sẽ ghi đè hướng của provider cha.
        </p>
        <DemoBlock>
          <NestedDirections />
        </DemoBlock>
        <CodeBlock
          code={`<DirectionProvider dir="ltr">
  <p>Left to right →</p>

  <DirectionProvider dir="rtl">
    {/* override: rtl trong phạm vi này */}
    <p>← من اليمين إلى اليسار</p>
  </DirectionProvider>
</DirectionProvider>`}
        />
      </ShowcaseSection>

      {/* ── 4. Biểu mẫu RTL thực tế ── */}
      <ShowcaseSection title="4. Biểu mẫu RTL thực tế">
        <p className="text-sm text-muted-foreground">
          Bọc toàn bộ form trong{" "}
          <code className="text-xs font-mono">DirectionProvider dir="rtl"</code> để label,
          input và button tự căn phải. Cần thêm{" "}
          <code className="text-xs font-mono">dir</code> trực tiếp lên thẻ HTML để trình duyệt
          render đúng chiều.
        </p>
        <DemoBlock>
          <RTLForm />
        </DemoBlock>
        <CodeBlock
          code={`<DirectionProvider dir="rtl">
  <form dir="rtl" className="space-y-3">
    <div className="space-y-1">
      <label>الاسم</label>
      <input placeholder="أدخل اسمك" />
    </div>
    <button type="submit">إرسال</button>
  </form>
</DirectionProvider>`}
        />
      </ShowcaseSection>

      {/* ── 5. Prop direction alias ── */}
      <ShowcaseSection title="5. Alias prop: direction">
        <p className="text-sm text-muted-foreground">
          Component này hỗ trợ cả hai prop{" "}
          <code className="text-xs font-mono">dir</code> và{" "}
          <code className="text-xs font-mono">direction</code> —{" "}
          <code className="text-xs font-mono">direction</code> sẽ được ưu tiên nếu cả hai được truyền.
        </p>
        <CodeBlock
          alwaysOpen
          code={`{/* Cả hai đều hợp lệ */}
<DirectionProvider dir="rtl">...</DirectionProvider>
<DirectionProvider direction="rtl">...</DirectionProvider>

{/* direction được ưu tiên khi truyền cả hai */}
<DirectionProvider dir="ltr" direction="rtl">
  {/* useDirection() → "rtl" */}
</DirectionProvider>`}
        />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <p className="text-sm text-muted-foreground font-medium mb-2">DirectionProvider</p>
        <PropsTable
          rows={[
            {
              prop: "dir",
              type: '"ltr" | "rtl"',
              description: 'Hướng văn bản. Mặc định là "ltr" nếu không truyền.',
            },
            {
              prop: "direction",
              type: '"ltr" | "rtl"',
              description: "Alias cho dir — được ưu tiên hơn dir khi cả hai cùng được truyền.",
            },
            {
              prop: "children",
              type: "React.ReactNode",
              description: "Các component con sẽ nhận context hướng.",
            },
          ]}
        />
        <p className="text-sm text-muted-foreground font-medium mt-4 mb-2">useDirection()</p>
        <PropsTable
          rows={[
            {
              prop: "return",
              type: '"ltr" | "rtl"',
              description:
                'Trả về hướng từ DirectionProvider gần nhất. Mặc định là "ltr" nếu không có provider.',
            },
          ]}
        />
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            <code className="text-xs font-mono">DirectionProvider</code> chỉ cung cấp context —
            cần thêm thuộc tính <code className="text-xs font-mono">dir</code> trực tiếp lên thẻ
            HTML (
            <code className="text-xs font-mono">&lt;div dir="rtl"&gt;</code>) để trình duyệt
            render chiều văn bản đúng.
          </li>
          <li>
            Đặt provider ở cấp cao nhất (layout hoặc page) để toàn bộ cây con nhất quán về hướng.
          </li>
          <li>
            <code className="text-xs font-mono">useDirection()</code> luôn trả về{" "}
            <code className="text-xs font-mono">"ltr"</code> nếu không có{" "}
            <code className="text-xs font-mono">DirectionProvider</code> bao bên ngoài.
          </li>
          <li>
            Kết hợp với các thư viện UI hỗ trợ RTL (Radix UI, shadcn/ui) — chúng đọc context này
            để đảo chiều animation, padding, v.v. tự động.
          </li>
          <li>
            Với trường input chứa email/URL thường là LTR ngay cả trong form RTL — thêm{" "}
            <code className="text-xs font-mono">dir="ltr"</code> riêng cho input đó.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
