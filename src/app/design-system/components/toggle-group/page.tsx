"use client"

import * as React from "react"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered } from "lucide-react"
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field"

export default function ToggleGroupPage() {
  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Toggle Group</h1>
        <p className="text-sm text-muted-foreground">
          Một nhóm các nút bật/tắt (toggle buttons) có thể được sử dụng để chọn một hoặc nhiều tùy chọn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<ToggleGroup type="single | multiple">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Mặc định là <code className="text-xs font-mono">type="single"</code> và <code className="text-xs font-mono">spacing={0}</code> (các nút dính liền nhau).
        </p>
        <DemoBlock>
          <ToggleGroup type="single" defaultValue="bold">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Underline className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 2. Đa chọn (Multiple) ── */}
      <ShowcaseSection title="2. Đa chọn (Multiple)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">type="multiple"</code> để cho phép chọn nhiều mục cùng lúc.
        </p>
        <DemoBlock>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
  <ToggleGroupItem value="bold">...</ToggleGroupItem>
  <ToggleGroupItem value="italic">...</ToggleGroupItem>
</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 3. Biến thể (Variants) ── */}
      <ShowcaseSection title="3. Biến thể (Variants)">
        <p className="text-sm text-muted-foreground">
          Hỗ trợ variant <code className="text-xs font-mono">default</code> (không viền) và <code className="text-xs font-mono">outline</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <span className="text-xs font-medium text-muted-foreground uppercase">Default</span>
              <ToggleGroup variant="default" type="single">
                <ToggleGroupItem value="left"><AlignLeft className="size-4" /></ToggleGroupItem>
                <ToggleGroupItem value="center"><AlignCenter className="size-4" /></ToggleGroupItem>
                <ToggleGroupItem value="right"><AlignRight className="size-4" /></ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-medium text-muted-foreground uppercase">Outline</span>
              <ToggleGroup variant="outline" type="single">
                <ToggleGroupItem value="left"><AlignLeft className="size-4" /></ToggleGroupItem>
                <ToggleGroupItem value="center"><AlignCenter className="size-4" /></ToggleGroupItem>
                <ToggleGroupItem value="right"><AlignRight className="size-4" /></ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup variant="default" type="single">...</ToggleGroup>
<ToggleGroup variant="outline" type="single">...</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 4. Kích thước (Sizes) ── */}
      <ShowcaseSection title="4. Kích thước (Sizes)">
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <ToggleGroup size="sm" type="single" variant="outline">
              <ToggleGroupItem value="1">SM</ToggleGroupItem>
              <ToggleGroupItem value="2">Size</ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup size="default" type="single" variant="outline">
              <ToggleGroupItem value="1">Default</ToggleGroupItem>
              <ToggleGroupItem value="2">Size</ToggleGroupItem>
            </ToggleGroup>
            <ToggleGroup size="lg" type="single" variant="outline">
              <ToggleGroupItem value="1">LG</ToggleGroupItem>
              <ToggleGroupItem value="2">Size</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup size="sm">...</ToggleGroup>
<ToggleGroup size="default">...</ToggleGroup>
<ToggleGroup size="lg">...</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 5. Khoảng cách (Spacing) ── */}
      <ShowcaseSection title="5. Khoảng cách (Spacing)">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">spacing</code> để tách biệt các nút (mặc định là 0).
        </p>
        <DemoBlock>
          <ToggleGroup type="multiple" variant="outline" spacing={2}>
            <ToggleGroupItem value="list"><List className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="ordered"><ListOrdered className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup type="multiple" variant="outline" spacing={2}>
  <ToggleGroupItem value="list">...</ToggleGroupItem>
  <ToggleGroupItem value="ordered">...</ToggleGroupItem>
</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 6. Hướng (Orientation) ── */}
      <ShowcaseSection title="6. Hướng (Orientation)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">orientation="vertical"</code> để hiển thị cột.
        </p>
        <DemoBlock>
          <ToggleGroup type="single" variant="outline" orientation="vertical">
            <ToggleGroupItem value="left"><AlignLeft className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center"><AlignCenter className="size-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right"><AlignRight className="size-4" /></ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup orientation="vertical" variant="outline" type="single">
  <ToggleGroupItem value="left">...</ToggleGroupItem>
  <ToggleGroupItem value="center">...</ToggleGroupItem>
  <ToggleGroupItem value="right">...</ToggleGroupItem>
</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 7. Vô hiệu hóa (Disabled) ── */}
      <ShowcaseSection title="7. Vô hiệu hóa (Disabled)">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">disabled</code> để vô hiệu hóa toàn bộ nhóm.
        </p>
        <DemoBlock>
          <ToggleGroup type="multiple" variant="outline" disabled>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="size-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="size-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        </DemoBlock>
        <CodeBlock code={`<ToggleGroup disabled type="multiple" variant="outline">
  <ToggleGroupItem value="bold">
    <Bold className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic">
    <Italic className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline">
    <Underline className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`} />
      </ShowcaseSection>

      {/* ── 8. Tùy chỉnh (Custom) ── */}
      <ShowcaseSection title="8. Tùy chỉnh (Custom)">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">useState</code> và các thành phần khác như <code className="text-xs font-mono">Field</code> để tạo giao diện chọn linh hoạt.
        </p>
        <DemoBlock>
          <ToggleGroupFontWeightSelector />
        </DemoBlock>
        <CodeBlock code={`"use client"

import * as React from "react"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function ToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = React.useState("normal")
  return (
    <Field>
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        type="single"
        value={fontWeight}
        onValueChange={(value) => value && setFontWeight(value)}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem value="light" aria-label="Light" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="normal" aria-label="Normal" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="medium" aria-label="Medium" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem value="bold" aria-label="Bold" className="flex size-16 flex-col items-center justify-center rounded-xl">
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Dùng code <code className="rounded-md bg-muted px-1 py-0.5 font-mono">font-{fontWeight}</code> để thiết lập độ dày font.
      </FieldDescription>
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 9. Props reference ── */}
      <ShowcaseSection title="9. Props reference">
        <PropsTable rows={[
          { prop: "type", type: '"single" | "multiple"', default_: '"single"', description: "Cho phép chọn một hay nhiều mục." },
          { prop: "variant", type: '"default" | "outline"', default_: '"default"', description: "Kiểu hiển thị của các nút." },
          { prop: "size", type: '"default" | "sm" | "lg"', default_: '"default"', description: "Kích thước của các nút." },
          { prop: "spacing", type: "number", default_: "0", description: "Khoảng cách giữa các nút (tính theo đơn vị spacing hệ thống)." },
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng sắp xếp của nhóm." },
          { prop: "defaultValue", type: "string | string[]", description: "Giá trị mặc định khi khởi tạo." },
          { prop: "onValueChange", type: "(value: any) => void", description: "Callback khi giá trị thay đổi." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa toàn bộ các nút trong nhóm." },
        ]} />
      </ShowcaseSection>

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Khi <code className="text-xs font-mono">spacing={0}</code>, các nút sẽ tự động bo góc hợp lý (nút đầu bo trái, nút cuối bo phải).</li>
          <li>Khi dùng icon, nên set <code className="text-xs font-mono">size-4</code> để cân đối với kích thước nút mặc định.</li>
          <li>Đừng quên thêm <code className="text-xs font-mono">aria-label</code> cho các item chỉ có icon để đảm bảo accessibility.</li>
          <li>Prop <code className="text-xs font-mono">variant</code> và <code className="text-xs font-mono">size</code> trên ToggleGroup sẽ được truyền xuống tất cả ToggleGroupItem thông qua Context.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}

function ToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = React.useState("normal")
  return (
    <Field>
      <FieldLabel>Font Weight</FieldLabel>
      <ToggleGroup
        type="single"
        value={fontWeight}
        onValueChange={(value) => value && setFontWeight(value)}
        variant="outline"
        spacing={2}
        size="lg"
      >
        <ToggleGroupItem
          value="light"
          aria-label="Light"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="normal"
          aria-label="Normal"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="medium"
          aria-label="Medium"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          value="bold"
          aria-label="Bold"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
        >
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-xs text-muted-foreground font-normal">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <FieldDescription>
        Dùng code <code className="rounded-md bg-muted px-1 py-0.5 font-mono">font-{fontWeight}</code> để thiết lập độ dày font.
      </FieldDescription>
    </Field>
  )
}
