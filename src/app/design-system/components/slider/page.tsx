"use client"

import * as React from "react"
import { Slider } from "@/components/ui/slider"
import { Field, FieldLabel } from "@/components/ui/field"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function SliderPage() {
  const [value, setValue] = React.useState([50])

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Slider</h1>
        <p className="text-sm text-muted-foreground">
          Thanh trượt cho phép người dùng chọn một giá trị từ một khoảng hoặc dải giá trị cho trước.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Slider } from "@/components/ui/slider"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Slider defaultValue={[33]} max={100} step={1} />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
        </DemoBlock>
        <CodeBlock code={`<Slider defaultValue={[50]} max={100} step={1} />`} />
      </ShowcaseSection>

      {/* ── 2. Range (Khoảng giá trị) ── */}
      <ShowcaseSection title="2. Range (Khoảng giá trị)">
        <p className="text-sm text-muted-foreground mb-4">
          Cung cấp một mảng gồm 2 giá trị để tạo khoảng trượt với 2 điểm neo.
        </p>
        <DemoBlock>
          <Slider defaultValue={[25, 75]} max={100} step={1} className="w-[60%]" />
        </DemoBlock>
        <CodeBlock code={`<Slider defaultValue={[25, 75]} max={100} step={1} />`} />
      </ShowcaseSection>

      {/* ── 3. Multiple Thumbs (Nhiều điểm neo) ── */}
      <ShowcaseSection title="3. Multiple Thumbs (Nhiều điểm neo)">
        <p className="text-sm text-muted-foreground mb-4">
          Cung cấp một mảng gồm nhiều giá trị để tạo ra nhiều điểm neo trên thanh trượt.
        </p>
        <DemoBlock>
          <Slider defaultValue={[10, 50, 90]} max={100} step={1} className="w-[60%]" />
        </DemoBlock>
        <CodeBlock code={`<Slider defaultValue={[10, 50, 90]} max={100} step={1} />`} />
      </ShowcaseSection>

      {/* ── 4. Vertical (Chiều dọc) ── */}
      <ShowcaseSection title="4. Vertical (Chiều dọc)">
        <p className="text-sm text-muted-foreground mb-4">
          Sử dụng <code className="text-xs font-mono">orientation="vertical"</code> để hiển thị thanh trượt theo chiều dọc.
        </p>
        <DemoBlock>
          <Slider defaultValue={[50]} max={100} step={1} orientation="vertical" className="h-40" />
        </DemoBlock>
        <CodeBlock code={`<Slider defaultValue={[50]} max={100} step={1} orientation="vertical" className="h-40" />`} />
      </ShowcaseSection>

      {/* ── 5. Controlled (Kiểm soát trạng thái) ── */}
      <ShowcaseSection title="5. Controlled (Kiểm soát trạng thái)">
        <p className="text-sm text-muted-foreground mb-4">
          Sử dụng <code className="text-xs font-mono">value</code> và <code className="text-xs font-mono">onValueChange</code> để quản lý giá trị.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 w-[60%]">
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Giá trị:</span>
              <span>{value[0]}</span>
            </div>
            <Slider value={value} onValueChange={setValue} max={100} step={1} />
          </div>
        </DemoBlock>
        <CodeBlock code={`
const [value, setValue] = React.useState([50])

<div className="flex flex-col gap-4">
  <div className="flex justify-between items-center text-sm font-medium">
    <span>Giá trị:</span>
    <span>{value[0]}</span>
  </div>
  <Slider value={value} onValueChange={setValue} max={100} step={1} />
</div>
        `} />
      </ShowcaseSection>

      {/* ── 6. Vô hiệu hoá (Disabled) ── */}
      <ShowcaseSection title="6. Vô hiệu hoá (Disabled)">
        <DemoBlock>
          <Slider defaultValue={[30]} max={100} step={1} disabled className="w-[60%]" />
        </DemoBlock>
        <CodeBlock code={`<Slider defaultValue={[30]} max={100} step={1} disabled />`} />
      </ShowcaseSection>

      {/* ── 7. Với Field Label ── */}
      <ShowcaseSection title="7. Kèm theo nhãn (Label)">
        <p className="text-sm text-muted-foreground mb-4">
          Nên kết hợp với <code className="text-xs font-mono">&lt;Field&gt;</code> để cung cấp nhãn hiển thị cho thanh trượt.
        </p>
        <DemoBlock>
          <Field className="w-[60%] gap-4">
            <FieldLabel htmlFor="volume">Âm lượng</FieldLabel>
            <Slider id="volume" defaultValue={[70]} max={100} step={1} />
          </Field>
        </DemoBlock>
        <CodeBlock code={`
<Field className="gap-4">
  <FieldLabel htmlFor="volume">Âm lượng</FieldLabel>
  <Slider id="volume" defaultValue={[70]} max={100} step={1} />
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <PropsTable rows={[
          { prop: "defaultValue", type: "number[]", default_: "[0]", description: "Giá trị mặc định ban đầu của thanh trượt." },
          { prop: "value", type: "number[]", description: "Giá trị được kiểm soát qua state." },
          { prop: "onValueChange", type: "(value: number[]) => void", description: "Hàm callback kích hoạt khi trượt." },
          { prop: "min", type: "number", default_: "0", description: "Giá trị tối thiểu." },
          { prop: "max", type: "number", default_: "100", description: "Giá trị tối đa." },
          { prop: "step", type: "number", default_: "1", description: "Khoảng cách (bước nhảy) giữa các giá trị." },
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng của thanh trượt." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa tương tác." },
        ]} />
      </ShowcaseSection>
    </div>
  )
}
