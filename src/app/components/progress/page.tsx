"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

export default function ProgressPage() {
  const [progress, setProgress] = React.useState(13)
  const [controlledValue, setControlledValue] = React.useState([45])

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Progress</h1>
        <p className="text-sm text-muted-foreground">
          Thanh hiển thị tiến độ hoàn thành của một tác vụ hoặc thời gian chờ.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Progress } from "@/components/ui/progress"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Progress value={66} />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">value</code> (từ 0 đến 100) để xác định mức độ hoàn thành.
        </p>
        <DemoBlock>
          <div className="w-full space-y-4">
            <Progress value={30} />
            <Progress value={60} />
            <Progress value={90} />
          </div>
        </DemoBlock>
        <CodeBlock code={`<Progress value={30} />`} />
      </ShowcaseSection>

      {/* ── 2. Controlled ── */}
      <ShowcaseSection title="2. Controlled">
        <p className="text-sm text-muted-foreground">
          Thanh progress được điều khiển trực tiếp bởi một component khác (ví dụ: Slider).
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hệ thống đang tải...</span>
                <span className="text-sm text-muted-foreground font-mono">{controlledValue[0]}%</span>
              </div>
              <Progress value={controlledValue[0]} className="h-2" />
            </div>
            <Slider 
              value={controlledValue} 
              onValueChange={setControlledValue} 
              max={100} 
              step={1} 
            />
          </div>
        </DemoBlock>
        <CodeBlock code={`
const [value, setValue] = useState([45])

<div className="space-y-4">
  <Progress value={value[0]} />
  <Slider value={value} onValueChange={setValue} max={100} step={1} />
</div>
        `} />
      </ShowcaseSection>

      {/* ── 3. Động (Dynamic) ── */}
      <ShowcaseSection title="3. Cập nhật tự động">
        <p className="text-sm text-muted-foreground">
          Thanh progress hỗ trợ animation mặc định khi giá trị <code className="text-xs font-mono">value</code> thay đổi.
        </p>
        <DemoBlock>
          <div className="w-full space-y-4">
            <Progress value={progress} />
            <div className="flex justify-end">
              <button 
                onClick={() => setProgress(Math.floor(Math.random() * 100))}
                className="text-xs font-medium hover:underline"
              >
                Randomize
              </button>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
const [progress, setProgress] = React.useState(13)

useEffect(() => {
  const timer = setTimeout(() => setProgress(66), 500)
  return () => clearTimeout(timer)
}, [])

<Progress value={progress} />
        `} />
      </ShowcaseSection>

      {/* ── 4. Tùy chỉnh kích thước ── */}
      <ShowcaseSection title="4. Tùy chỉnh kích thước">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">className</code> để thay đổi chiều cao hoặc bo góc.
        </p>
        <DemoBlock>
          <div className="w-full space-y-6">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Height: h-0.5 (2px)</span>
              <Progress value={45} className="h-0.5" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Height: h-2 (8px)</span>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Square corners: rounded-none</span>
              <Progress value={45} className="h-1 rounded-none" />
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Progress value={45} className="h-0.5" />
<Progress value={45} className="h-2" />
<Progress value={45} className="rounded-none" />
        `} />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <PropsTable rows={[
          { prop: "value", type: "number", default_: "0", description: "Giá trị hiện tại của progress (0-100)." },
          { prop: "max", type: "number", default_: "100", description: "Giá trị tối đa của progress." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho container (Root)." },
        ]} />
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Dựa trên <code className="text-xs font-mono">@radix-ui/react-progress</code>.</li>
          <li>Tự động hỗ trợ các thuộc tính ARIA cần thiết cho accessibility.</li>
          <li>Animation được xử lý thông qua CSS transition trên indicator.</li>
          <li>Mặc định thanh có màu <code className="text-xs font-mono">bg-muted</code> và indicator có màu <code className="text-xs font-mono">bg-primary</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
