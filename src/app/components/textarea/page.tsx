"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

export default function TextareaPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Textarea</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần nhập liệu văn bản nhiều dòng, hỗ trợ tự động co giãn và các trạng thái form tiêu chuẩn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Textarea } from "@/components/ui/textarea"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Textarea placeholder="Nhập nội dung..." />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Textarea placeholder="Type your message here." />
        </DemoBlock>
        <CodeBlock code={`<Textarea placeholder="Type your message here." />`} />
      </ShowcaseSection>

      {/* ── 2. Với Label & Description ── */}
      <ShowcaseSection title="2. Với Label & Description">
        <p className="text-sm text-muted-foreground">
          Sử dụng kèm với các thành phần <code className="text-xs font-mono">Field</code> để tạo layout form chuẩn.
        </p>
        <DemoBlock>
          <Field className="w-full max-w-sm">
            <FieldLabel htmlFor="message">Your Message</FieldLabel>
            <Textarea placeholder="Type your message here." id="message" />
            <FieldDescription>
              Your message will be sent to the support team.
            </FieldDescription>
          </Field>
        </DemoBlock>
        <CodeBlock code={`
<Field className="w-full max-w-sm">
  <FieldLabel htmlFor="message">Your Message</FieldLabel>
  <Textarea placeholder="Type your message here." id="message" />
  <FieldDescription>
    Your message will be sent to the support team.
  </FieldDescription>
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 3. Trạng thái Disabled ── */}
      <ShowcaseSection title="3. Trạng thái Disabled">
        <DemoBlock>
          <Textarea disabled placeholder="Textarea bị vô hiệu hóa" />
        </DemoBlock>
        <CodeBlock code={`<Textarea disabled placeholder="Textarea bị vô hiệu hóa" />`} />
      </ShowcaseSection>

      {/* ── 4. Trạng thái Invalid ── */}
      <ShowcaseSection title="4. Trạng thái Invalid">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">aria-invalid="true"</code> hoặc bọc trong <code className="text-xs font-mono">Field</code> có lỗi.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-8">
            <div className="space-y-2">
              <Label htmlFor="invalid-1">Sử dụng aria-invalid</Label>
              <Textarea id="invalid-1" aria-invalid="true" placeholder="Nội dung không hợp lệ" />
            </div>
            
            <Field data-invalid="true">
              <FieldLabel>Sử dụng Field context</FieldLabel>
              <Textarea placeholder="Lỗi từ Field context" />
              <FieldError>Trường này là bắt buộc.</FieldError>
            </Field>
          </div>
        </DemoBlock>
        <CodeBlock code={`
// Cách 1: Trực tiếp trên Textarea
<Textarea aria-invalid="true" />

// Cách 2: Qua Field context
<Field data-invalid="true">
  <FieldLabel>Label</FieldLabel>
  <Textarea />
  <FieldError>Thông báo lỗi</FieldError>
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 5. Auto-resizing ── */}
      <ShowcaseSection title="5. Tự động co giãn (Auto-resizing)">
        <p className="text-sm text-muted-foreground">
          Thành phần này sử dụng <code className="text-xs font-mono">field-sizing-content</code> (CSS hiện đại) để tự động thay đổi chiều cao theo nội dung nhập vào.
        </p>
        <DemoBlock>
          <Textarea 
            placeholder="Thử nhập nhiều dòng để thấy nó tự động giãn ra..." 
            className="min-h-[100px]"
          />
        </DemoBlock>
        <CodeBlock code={`
<Textarea 
  placeholder="Thử nhập nhiều dòng..." 
  className="min-h-[100px]"
/>
        `} />
      </ShowcaseSection>

      {/* ── 6. Ví dụ Form ── */}
      <ShowcaseSection title="6. Ví dụ Form">
        <DemoBlock>
          <div className="grid w-full max-w-sm gap-4">
            <Field>
              <FieldLabel htmlFor="message-2">Your Message</FieldLabel>
              <Textarea placeholder="Type your message here." id="message-2" />
              <FieldDescription>
                Your message will be sent to the support team.
              </FieldDescription>
            </Field>
            <Button className="w-fit">Send Message</Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="grid w-full max-w-sm gap-4">
  <Field>
    <FieldLabel htmlFor="message">Your Message</FieldLabel>
    <Textarea placeholder="Type your message here." id="message" />
    <FieldDescription>
      Your message will be sent to the support team.
    </FieldDescription>
  </Field>
  <Button className="w-fit">Send Message</Button>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 7. Props reference ── */}
      <ShowcaseSection title="7. Props reference">
        <PropsTable rows={[
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho textarea." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa textarea." },
          { prop: "aria-invalid", type: '"true" | boolean', description: "Hiển thị trạng thái lỗi." },
          { prop: "...props", type: "React.ComponentProps<'textarea'>", description: "Hỗ trợ tất cả các props tiêu chuẩn của thẻ textarea." },
        ]} />
      </ShowcaseSection>

      {/* ── 8. Lưu ý ── */}
      <ShowcaseSection title="8. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Mặc định có <code className="text-xs font-mono">field-sizing-content</code>, nó sẽ tự động giãn chiều cao. Nếu muốn cố định chiều cao, hãy ghi đè bằng <code className="text-xs font-mono">field-sizing-fixed</code> hoặc set <code className="text-xs font-mono">height</code> cố định.</li>
          <li>Sử dụng <code className="text-xs font-mono">min-h-*</code> để đặt chiều cao tối thiểu khởi tạo.</li>
          <li>Hỗ trợ dark mode và các trạng thái focus mặc định theo hệ thống design.</li>
          <li>Kết hợp tốt với <code className="text-xs font-mono">Field</code> để quản lý label, description và error message tập trung.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
