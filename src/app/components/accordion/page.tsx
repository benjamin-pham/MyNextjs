"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { ShowcaseSection, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── controlled demo ────────────────────────────────────────────────────── */

function ControlledSingleDemo() {
  const [open, setOpen] = useState<string>("")
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Mục đang mở: <code className="font-mono">{open || "(none)"}</code>
      </p>
      <Accordion type="single" collapsible value={open} onValueChange={setOpen} className="px-3">
        <AccordionItem value="ctrl-1">
          <AccordionTrigger>Panel A</AccordionTrigger>
          <AccordionContent>Nội dung panel A.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="ctrl-2">
          <AccordionTrigger>Panel B</AccordionTrigger>
          <AccordionContent>Nội dung panel B.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="ctrl-3">
          <AccordionTrigger>Panel C</AccordionTrigger>
          <AccordionContent>Nội dung panel C.</AccordionContent>
        </AccordionItem>
      </Accordion>
      <div className="flex gap-2 flex-wrap">
        {["ctrl-1", "ctrl-2", "ctrl-3", ""].map((v) => (
          <button
            key={v}
            onClick={() => setOpen(v)}
            className="rounded border px-2 py-1 text-xs hover:bg-muted transition-colors"
          >
            {v ? `Mở ${v.replace("ctrl-", "Panel ")}` : "Đóng tất cả"}
          </button>
        ))}
      </div>
    </div>
  )
}

function ControlledMultipleDemo() {
  const [open, setOpen] = useState<string[]>(["m-1"])
  const items = ["m-1", "m-2", "m-3"]
  return (
    <div className="space-y-3">
      <p className="text-xs text-muted-foreground">
        Đang mở: <code className="font-mono">[{open.join(", ") || ""}]</code>
      </p>
      <Accordion type="multiple" value={open} onValueChange={setOpen} className="px-3">
        {items.map((v) => (
          <AccordionItem key={v} value={v}>
            <AccordionTrigger>Mục {v.replace("m-", "")}</AccordionTrigger>
            <AccordionContent>Nội dung {v}.</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex gap-2 flex-wrap">
        <button onClick={() => setOpen(items)} className="rounded border px-2 py-1 text-xs hover:bg-muted transition-colors">Mở tất cả</button>
        <button onClick={() => setOpen([])} className="rounded border px-2 py-1 text-xs hover:bg-muted transition-colors">Đóng tất cả</button>
      </div>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function AccordionPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Accordion</h1>
        <p className="text-sm text-muted-foreground">
          Hiển thị / ẩn nội dung theo từng mục. Xây dựng trên{" "}
          <code className="text-xs">radix-ui/AccordionPrimitive</code>.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Accordion type="single" collapsible defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>`} />
      </ShowcaseSection>

      {/* ── 1. Usage cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <Accordion type="single" collapsible className="px-3">
          <AccordionItem value="q1">
            <AccordionTrigger>Accordion là gì?</AccordionTrigger>
            <AccordionContent>
              Accordion cho phép người dùng mở/đóng từng phần nội dung, giúp tiết kiệm không gian và giảm tải thị giác.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Khi nào nên dùng?</AccordionTrigger>
            <AccordionContent>
              Dùng cho FAQ, cài đặt nhóm, navigation phân cấp, hoặc bất kỳ nơi nào cần ẩn bớt nội dung thứ cấp.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <CodeBlock code={`
<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>Câu hỏi</AccordionTrigger>
    <AccordionContent>Nội dung trả lời.</AccordionContent>
  </AccordionItem>
</Accordion>
        `} />
      </ShowcaseSection>

      {/* ── 2. type="single" ── */}
      <ShowcaseSection title={`2. type="single" — chỉ một mục mở`}>
        <p className="text-sm text-muted-foreground">
          Mặc định khi mở mục mới, mục cũ tự đóng. Thêm <code className="text-xs font-mono">collapsible</code> để cho phép click lại để đóng.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium">Không có collapsible</p>
            <Accordion type="single" className="px-3">
              <AccordionItem value="a"><AccordionTrigger>Mục A</AccordionTrigger><AccordionContent>Không thể đóng bằng click lại.</AccordionContent></AccordionItem>
              <AccordionItem value="b"><AccordionTrigger>Mục B</AccordionTrigger><AccordionContent>Mở mục này đóng mục kia.</AccordionContent></AccordionItem>
            </Accordion>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">Có collapsible</p>
            <Accordion type="single" collapsible className="px-3">
              <AccordionItem value="a"><AccordionTrigger>Mục A</AccordionTrigger><AccordionContent>Click lại để đóng.</AccordionContent></AccordionItem>
              <AccordionItem value="b"><AccordionTrigger>Mục B</AccordionTrigger><AccordionContent>Click lại để đóng.</AccordionContent></AccordionItem>
            </Accordion>
          </div>
        </div>
        <CodeBlock code={`
// Không collapsible — luôn giữ 1 mục mở
<Accordion type="single">...</Accordion>

// Có collapsible — click lại để đóng hết
<Accordion type="single" collapsible>...</Accordion>
        `} />
      </ShowcaseSection>

      {/* ── 3. type="multiple" ── */}
      <ShowcaseSection title={`3. type="multiple" — nhiều mục mở cùng lúc`}>
        <Accordion type="multiple" className="px-3">
          <AccordionItem value="m1"><AccordionTrigger>Mục 1</AccordionTrigger><AccordionContent>Có thể mở cùng Mục 2, Mục 3.</AccordionContent></AccordionItem>
          <AccordionItem value="m2"><AccordionTrigger>Mục 2</AccordionTrigger><AccordionContent>Các mục hoàn toàn độc lập nhau.</AccordionContent></AccordionItem>
          <AccordionItem value="m3"><AccordionTrigger>Mục 3</AccordionTrigger><AccordionContent>Tất cả có thể mở đồng thời.</AccordionContent></AccordionItem>
        </Accordion>
        <CodeBlock code={`
<Accordion type="multiple">
  <AccordionItem value="m1">...</AccordionItem>
  <AccordionItem value="m2">...</AccordionItem>
</Accordion>
        `} />
      </ShowcaseSection>

      {/* ── 4. defaultValue ── */}
      <ShowcaseSection title="4. defaultValue — mở sẵn khi render">
        <p className="text-sm text-muted-foreground">
          Uncontrolled — chỉ dùng lần đầu render, React không quản lý state sau đó.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs font-medium">single — string</p>
            <Accordion type="single" collapsible defaultValue="dv-1" className="px-3">
              <AccordionItem value="dv-1"><AccordionTrigger>Mặc định mở</AccordionTrigger><AccordionContent>{'defaultValue="dv-1"'}</AccordionContent></AccordionItem>
              <AccordionItem value="dv-2"><AccordionTrigger>Đóng mặc định</AccordionTrigger><AccordionContent>Nội dung.</AccordionContent></AccordionItem>
            </Accordion>
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">multiple — string[]</p>
            <Accordion type="multiple" defaultValue={["dv-a", "dv-c"]} className="px-3">
              <AccordionItem value="dv-a"><AccordionTrigger>Mục A (mở)</AccordionTrigger><AccordionContent>Trong defaultValue.</AccordionContent></AccordionItem>
              <AccordionItem value="dv-b"><AccordionTrigger>Mục B (đóng)</AccordionTrigger><AccordionContent>Không có trong defaultValue.</AccordionContent></AccordionItem>
              <AccordionItem value="dv-c"><AccordionTrigger>Mục C (mở)</AccordionTrigger><AccordionContent>Trong defaultValue.</AccordionContent></AccordionItem>
            </Accordion>
          </div>
        </div>
        <CodeBlock code={`
// type="single" — truyền string
<Accordion type="single" collapsible defaultValue="item-1">
  ...
</Accordion>

// type="multiple" — truyền string[]
<Accordion type="multiple" defaultValue={["item-1", "item-3"]}>
  ...
</Accordion>
        `} />
      </ShowcaseSection>

      {/* ── 5. Controlled ── */}
      <ShowcaseSection title="5. Controlled (value + onValueChange)">
        <p className="text-sm text-muted-foreground">
          Kiểm soát hoàn toàn từ component cha — hữu ích khi cần mở/đóng từ bên ngoài (button, URL, logic nghiệp vụ).
        </p>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-medium">{'type="single"'}</p>
            <ControlledSingleDemo />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-medium">{'type="multiple"'}</p>
            <ControlledMultipleDemo />
          </div>
        </div>
        <CodeBlock code={`
// type="single"
const [open, setOpen] = useState<string>("")

<Accordion type="single" collapsible value={open} onValueChange={setOpen}>
  ...
</Accordion>

// type="multiple"
const [open, setOpen] = useState<string[]>([])

<Accordion type="multiple" value={open} onValueChange={setOpen}>
  ...
</Accordion>
        `} />
      </ShowcaseSection>

      {/* ── 6. Disabled ── */}
      <ShowcaseSection title="6. Disabled">
        <p className="text-sm text-muted-foreground">
          Có thể vô hiệu hoá từng <code className="text-xs font-mono">AccordionItem</code> riêng lẻ.
        </p>
        <Accordion type="single" collapsible className="px-3">
          <AccordionItem value="ok">
            <AccordionTrigger>Bình thường</AccordionTrigger>
            <AccordionContent>Hoạt động bình thường.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="dis" disabled>
            <AccordionTrigger>Bị disabled (cả item)</AccordionTrigger>
            <AccordionContent>Nội dung này không thể mở.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <CodeBlock code={`
<AccordionItem value="item-1" disabled>
  <AccordionTrigger>Tiêu đề</AccordionTrigger>
  <AccordionContent>Nội dung.</AccordionContent>
</AccordionItem>
        `} />
      </ShowcaseSection>

      {/* ── 7. Rich content ── */}
      <ShowcaseSection title="7. Rich content trong AccordionContent">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AccordionContent</code> render HTML thông thường — hỗ trợ paragraph, link, danh sách, v.v.
        </p>
        <Accordion type="single" collapsible className="px-3">
          <AccordionItem value="rc-1">
            <AccordionTrigger>Paragraph & link</AccordionTrigger>
            <AccordionContent>
              <p>Đoạn văn đầu tiên giải thích về tính năng.</p>
              <p>Đoạn văn thứ hai với <a href="#" onClick={(e) => e.preventDefault()}>một link ví dụ</a> bên trong.</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rc-2">
            <AccordionTrigger>Danh sách & code</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-1">
                <li>Bước 1: cài đặt <code>npm install</code></li>
                <li>Bước 2: chạy <code>npm run dev</code></li>
                <li>Bước 3: mở <code>localhost:3000</code></li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="rc-3">
            <AccordionTrigger>Custom className</AccordionTrigger>
            <AccordionContent className="text-blue-600 dark:text-blue-400 font-medium">
              Đây là nội dung với className tuỳ chỉnh — màu xanh và in đậm.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <CodeBlock code={`
<AccordionContent>
  <p>Đoạn văn thứ nhất.</p>
  <p>Đoạn văn thứ hai với <a href="/docs">link</a>.</p>
</AccordionContent>

{/* Custom className */}
<AccordionContent className="text-blue-600 font-medium">
  Nội dung có style riêng.
</AccordionContent>
        `} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;Accordion&gt;</h3>
            <PropsTable rows={[
              { prop: "type *", type: '"single" | "multiple"', description: "Chế độ mở. Bắt buộc." },
              { prop: "collapsible", type: "boolean", default_: "false", description: 'Chỉ dùng với type="single". Cho phép đóng mục đang mở bằng cách click lại.' },
              { prop: "defaultValue", type: "string | string[]", description: "Giá trị mở mặc định (uncontrolled). string[] khi type=\"multiple\"." },
              { prop: "value", type: "string | string[]", description: "Giá trị controlled — dùng kèm onValueChange." },
              { prop: "onValueChange", type: "(value: string | string[]) => void", description: "Callback khi trạng thái mở/đóng thay đổi." },
              { prop: "className", type: "string", description: "Class Tailwind cho wrapper flex-col." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AccordionItem&gt;</h3>
            <PropsTable rows={[
              { prop: "value *", type: "string", description: "ID duy nhất — phải match với defaultValue/value của Accordion. Bắt buộc." },
              { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá toàn bộ mục (trigger + content)." },
              { prop: "className", type: "string", description: "Class Tailwind cho item (có border-b theo mặc định)." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AccordionTrigger&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Nhãn hiển thị trên trigger." },
              { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá trigger (ít dùng, thường dùng disabled trên AccordionItem)." },
              { prop: "className", type: "string", description: "Class Tailwind cho button trigger." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AccordionContent&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Nội dung hiển thị khi mục được mở." },
              { prop: "className", type: "string", description: "Class Tailwind cho div bên trong (có padding-bottom, hỗ trợ p và a)." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Mỗi <code className="text-xs font-mono">AccordionItem</code> phải có <code className="text-xs font-mono">value</code> duy nhất trong cùng một <code className="text-xs font-mono">Accordion</code>.</li>
          <li><code className="text-xs font-mono">collapsible</code> chỉ có tác dụng khi <code className="text-xs font-mono">{'type="single"'}</code>, bỏ qua khi <code className="text-xs font-mono">{'type="multiple"'}</code>.</li>
          <li>Không dùng đồng thời <code className="text-xs font-mono">defaultValue</code> và <code className="text-xs font-mono">value</code> — chọn một trong hai (uncontrolled hoặc controlled).</li>
          <li>Animation mở/đóng chạy qua <code className="text-xs font-mono">data-open / data-closed</code> — tuỳ chỉnh trong Tailwind config nếu cần.</li>
          <li>Component đã có <code className="text-xs font-mono">focus-visible</code> và hỗ trợ điều hướng bàn phím (Space/Enter để toggle, Arrow keys để di chuyển).</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
