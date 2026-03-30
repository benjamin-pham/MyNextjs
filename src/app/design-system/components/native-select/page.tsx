"use client"

import React, { useState } from "react"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"
import { Label } from "@/components/ui/label"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function NativeSelectPage() {
  const [fruit, setFruit] = useState("")

  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Native Select</h1>
        <p className="text-sm text-muted-foreground">
          Thẻ <code className="text-xs font-mono">&lt;select&gt;</code> gốc của trình duyệt được tạo kiểu nhất quán với design system —
          nhẹ, không phụ thuộc Radix, phù hợp cho mobile.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
</NativeSelect>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <NativeSelect defaultValue="">
            <NativeSelectOption value="">Select a fruit</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
            <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
          </NativeSelect>
        </DemoBlock>
        <CodeBlock code={`<NativeSelect>
  <NativeSelectOption value="">Select a fruit</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
</NativeSelect>`} />
      </ShowcaseSection>

      {/* ── 2. Size ── */}
      <ShowcaseSection title="2. Kích thước (size)">
        <p className="text-sm text-muted-foreground">
          Prop <code className="text-xs font-mono">size</code> nhận giá trị{" "}
          <code className="text-xs font-mono">"default"</code> (h-8) hoặc{" "}
          <code className="text-xs font-mono">"sm"</code> (h-7, bo góc nhỏ hơn).
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <Label className="w-16 text-right">default</Label>
              <NativeSelect size="default" defaultValue="">
                <NativeSelectOption value="">Select…</NativeSelectOption>
                <NativeSelectOption value="a">Option A</NativeSelectOption>
                <NativeSelectOption value="b">Option B</NativeSelectOption>
              </NativeSelect>
            </div>
            <div className="flex items-center gap-3">
              <Label className="w-16 text-right">sm</Label>
              <NativeSelect size="sm" defaultValue="">
                <NativeSelectOption value="">Select…</NativeSelectOption>
                <NativeSelectOption value="a">Option A</NativeSelectOption>
                <NativeSelectOption value="b">Option B</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<NativeSelect size="default">…</NativeSelect>
<NativeSelect size="sm">…</NativeSelect>`} />
      </ShowcaseSection>

      {/* ── 3. Groups ── */}
      <ShowcaseSection title="3. Groups — nhóm option bằng OptGroup">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">NativeSelectOptGroup</code> để phân loại option thành các nhóm có nhãn.
        </p>
        <DemoBlock>
          <NativeSelect defaultValue="">
            <NativeSelectOption value="">Chọn loại thực vật…</NativeSelectOption>
            <NativeSelectOptGroup label="Fruits">
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
              <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
              <NativeSelectOption value="grapes">Grapes</NativeSelectOption>
              <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Vegetables">
              <NativeSelectOption value="aubergine">Aubergine</NativeSelectOption>
              <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
              <NativeSelectOption value="carrot">Carrot</NativeSelectOption>
              <NativeSelectOption value="courgette">Courgette</NativeSelectOption>
              <NativeSelectOption value="leek">Leek</NativeSelectOption>
            </NativeSelectOptGroup>
            <NativeSelectOptGroup label="Meat">
              <NativeSelectOption value="beef">Beef</NativeSelectOption>
              <NativeSelectOption value="chicken">Chicken</NativeSelectOption>
              <NativeSelectOption value="lamb">Lamb</NativeSelectOption>
              <NativeSelectOption value="pork">Pork</NativeSelectOption>
            </NativeSelectOptGroup>
          </NativeSelect>
        </DemoBlock>
        <CodeBlock code={`<NativeSelect>
  <NativeSelectOption value="">Chọn loại thực vật…</NativeSelectOption>
  <NativeSelectOptGroup label="Fruits">
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
  </NativeSelectOptGroup>
  <NativeSelectOptGroup label="Vegetables">
    <NativeSelectOption value="aubergine">Aubergine</NativeSelectOption>
    <NativeSelectOption value="broccoli">Broccoli</NativeSelectOption>
  </NativeSelectOptGroup>
</NativeSelect>`} />
      </ShowcaseSection>

      {/* ── 4. Disabled ── */}
      <ShowcaseSection title="4. Disabled — vô hiệu hoá toàn bộ select">
        <p className="text-sm text-muted-foreground">
          Thêm prop <code className="text-xs font-mono">disabled</code> vào <code className="text-xs font-mono">NativeSelect</code> để vô hiệu hoá.
          Wrapper tự giảm opacity qua selector{" "}
          <code className="text-xs font-mono">has-[select:disabled]:opacity-50</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 items-start">
            <NativeSelect defaultValue="apple">
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
            </NativeSelect>
            <NativeSelect disabled defaultValue="apple">
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
            </NativeSelect>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* enabled */}
<NativeSelect>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
</NativeSelect>

{/* disabled */}
<NativeSelect disabled>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
</NativeSelect>`} />
      </ShowcaseSection>

      {/* ── 5. Disabled Option ── */}
      <ShowcaseSection title="5. Disabled Option — vô hiệu một mục con">
        <p className="text-sm text-muted-foreground">
          Thêm prop <code className="text-xs font-mono">disabled</code> vào từng{" "}
          <code className="text-xs font-mono">NativeSelectOption</code> để chỉ vô hiệu mục đó.
        </p>
        <DemoBlock>
          <NativeSelect defaultValue="">
            <NativeSelectOption value="">Select a fruit…</NativeSelectOption>
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana" disabled>Banana (unavailable)</NativeSelectOption>
            <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
            <NativeSelectOption value="pineapple" disabled>Pineapple (out of stock)</NativeSelectOption>
          </NativeSelect>
        </DemoBlock>
        <CodeBlock code={`<NativeSelect>
  <NativeSelectOption value="">Select a fruit…</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana" disabled>Banana (unavailable)</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
</NativeSelect>`} />
      </ShowcaseSection>

      {/* ── 6. Invalid ── */}
      <ShowcaseSection title="6. Invalid — hiển thị lỗi validation">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">aria-invalid</code> để kích hoạt border và ring màu đỏ destructive
          — tuân theo chuẩn ARIA form validation.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 items-start">
            <div className="space-y-1">
              <Label htmlFor="select-invalid">Loại trái cây *</Label>
              <NativeSelect id="select-invalid" aria-invalid defaultValue="">
                <NativeSelectOption value="">Chọn một loại…</NativeSelectOption>
                <NativeSelectOption value="apple">Apple</NativeSelectOption>
                <NativeSelectOption value="banana">Banana</NativeSelectOption>
              </NativeSelect>
              <p className="text-xs text-destructive">Vui lòng chọn một loại trái cây.</p>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="space-y-1">
  <Label htmlFor="select-invalid">Loại trái cây *</Label>
  <NativeSelect id="select-invalid" aria-invalid>
    <NativeSelectOption value="">Chọn một loại…</NativeSelectOption>
    <NativeSelectOption value="apple">Apple</NativeSelectOption>
    <NativeSelectOption value="banana">Banana</NativeSelectOption>
  </NativeSelect>
  <p className="text-xs text-destructive">Vui lòng chọn một loại trái cây.</p>
</div>`} />
      </ShowcaseSection>

      {/* ── 7. Controlled ── */}
      <ShowcaseSection title="7. Controlled — kết nối với React state">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">value</code> + <code className="text-xs font-mono">onChange</code> để điều khiển
          từ state bên ngoài.
        </p>
        <DemoBlock>
          <div className="flex flex-col items-center gap-4">
            <NativeSelect
              value={fruit}
              onChange={(e) => setFruit(e.target.value)}
            >
              <NativeSelectOption value="">Select a fruit…</NativeSelectOption>
              <NativeSelectOption value="apple">Apple</NativeSelectOption>
              <NativeSelectOption value="banana">Banana</NativeSelectOption>
              <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
              <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption>
            </NativeSelect>
            {fruit && (
              <p className="text-sm text-muted-foreground">
                Đã chọn: <span className="font-medium text-foreground">{fruit}</span>
              </p>
            )}
          </div>
        </DemoBlock>
        <CodeBlock code={`const [fruit, setFruit] = useState("")

<NativeSelect
  value={fruit}
  onChange={(e) => setFruit(e.target.value)}
>
  <NativeSelectOption value="">Select a fruit…</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
</NativeSelect>

{fruit && <p>Đã chọn: {fruit}</p>}`} />
      </ShowcaseSection>

      {/* ── 8. Với Label ── */}
      <ShowcaseSection title="8. Kết hợp với Label">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">Label</code> kết hợp với thuộc tính{" "}
          <code className="text-xs font-mono">htmlFor</code> / <code className="text-xs font-mono">id</code> để liên
          kết nhãn với select cho khả năng truy cập tốt hơn.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 w-64">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ns-country">Quốc gia</Label>
              <NativeSelect id="ns-country" defaultValue="">
                <NativeSelectOption value="">Chọn quốc gia…</NativeSelectOption>
                <NativeSelectOptGroup label="Đông Nam Á">
                  <NativeSelectOption value="vn">Việt Nam</NativeSelectOption>
                  <NativeSelectOption value="th">Thái Lan</NativeSelectOption>
                  <NativeSelectOption value="sg">Singapore</NativeSelectOption>
                  <NativeSelectOption value="my">Malaysia</NativeSelectOption>
                </NativeSelectOptGroup>
                <NativeSelectOptGroup label="Đông Á">
                  <NativeSelectOption value="jp">Nhật Bản</NativeSelectOption>
                  <NativeSelectOption value="kr">Hàn Quốc</NativeSelectOption>
                  <NativeSelectOption value="cn">Trung Quốc</NativeSelectOption>
                </NativeSelectOptGroup>
              </NativeSelect>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="ns-timezone">Múi giờ</Label>
              <NativeSelect id="ns-timezone" size="sm" defaultValue="utc7">
                <NativeSelectOption value="utc7">UTC+7 (Hà Nội)</NativeSelectOption>
                <NativeSelectOption value="utc8">UTC+8 (Singapore)</NativeSelectOption>
                <NativeSelectOption value="utc9">UTC+9 (Tokyo)</NativeSelectOption>
              </NativeSelect>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="flex flex-col gap-1.5">
  <Label htmlFor="ns-country">Quốc gia</Label>
  <NativeSelect id="ns-country">
    <NativeSelectOption value="">Chọn quốc gia…</NativeSelectOption>
    <NativeSelectOptGroup label="Đông Nam Á">
      <NativeSelectOption value="vn">Việt Nam</NativeSelectOption>
      <NativeSelectOption value="th">Thái Lan</NativeSelectOption>
    </NativeSelectOptGroup>
  </NativeSelect>
</div>`} />
      </ShowcaseSection>

      {/* ── 9. NativeSelect vs Select ── */}
      <ShowcaseSection title="9. NativeSelect vs Select — khi nào dùng gì?">
        <div className="overflow-x-auto rounded-lg border text-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="px-3 py-2 font-medium">Tiêu chí</th>
                <th className="px-3 py-2 font-medium">NativeSelect</th>
                <th className="px-3 py-2 font-medium">Select (Radix)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Rendering", "Native <select>", "Custom Radix popup"],
                ["Mobile UX", "✅ Native picker", "⚠️ Custom popup nhỏ trên mobile"],
                ["Custom style", "⚠️ Giới hạn CSS", "✅ Tuỳ chỉnh hoàn toàn"],
                ["Animation", "❌ Không", "✅ Có"],
                ["Bundle size", "✅ Nhỏ (0 Radix)", "⚠️ Cộng Radix Select"],
                ["Accessibility", "✅ Browser native", "✅ Radix ARIA"],
              ].map(([criteria, native, select]) => (
                <tr key={criteria} className="border-t">
                  <td className="px-3 py-2 font-medium">{criteria}</td>
                  <td className="px-3 py-2 text-muted-foreground">{native}</td>
                  <td className="px-3 py-2 text-muted-foreground">{select}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ShowcaseSection>

      {/* ── 10. Props reference ── */}
      <ShowcaseSection title="10. Props reference">
        <p className="text-sm font-medium mb-2">NativeSelect</p>
        <PropsTable rows={[
          { prop: "size", type: '"default" | "sm"', default_: '"default"', description: 'Kích thước select — "default" cao 32px, "sm" cao 28px.' },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá toàn bộ select, wrapper tự giảm opacity." },
          { prop: "value", type: "string", description: "Giá trị được chọn (controlled)." },
          { prop: "defaultValue", type: "string", description: "Giá trị mặc định (uncontrolled)." },
          { prop: "onChange", type: "React.ChangeEventHandler<HTMLSelectElement>", description: "Callback khi người dùng thay đổi lựa chọn." },
          { prop: "aria-invalid", type: "boolean", description: "Kích hoạt border/ring màu destructive để báo lỗi validation." },
          { prop: "className", type: "string", description: "Class gán lên wrapper div (không phải thẻ <select>)." },
        ]} />

        <p className="text-sm font-medium mt-6 mb-2">NativeSelectOption</p>
        <PropsTable rows={[
          { prop: "value", type: "string", description: "Giá trị định danh của option — bắt buộc." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá riêng option này." },
        ]} />

        <p className="text-sm font-medium mt-6 mb-2">NativeSelectOptGroup</p>
        <PropsTable rows={[
          { prop: "label", type: "string", description: "Nhãn hiển thị cho nhóm option — bắt buộc." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá toàn bộ nhóm option." },
        ]} />
      </ShowcaseSection>

      {/* ── 11. Lưu ý ── */}
      <ShowcaseSection title="11. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            <code className="text-xs font-mono">className</code> áp dụng lên wrapper{" "}
            <code className="text-xs font-mono">&lt;div&gt;</code>, không phải thẻ{" "}
            <code className="text-xs font-mono">&lt;select&gt;</code> bên trong —
            dùng để kiểm soát <code className="text-xs font-mono">width</code>.
          </li>
          <li>
            Icon <code className="text-xs font-mono">ChevronDown</code> được render tuyệt đối bên trong
            wrapper và không tham gia event — không cần xử lý thêm.
          </li>
          <li>
            Kiểu dáng bị giới hạn bởi platform — trên iOS/Android trình duyệt luôn hiển thị picker gốc.
          </li>
          <li>
            Khi cần custom animation, search, hoặc render nội dung phức tạp trong dropdown, dùng{" "}
            <code className="text-xs font-mono">Select</code> (Radix) thay thế.
          </li>
          <li>
            Hỗ trợ tất cả thuộc tính HTML chuẩn của{" "}
            <code className="text-xs font-mono">&lt;select&gt;</code> qua spread props.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
