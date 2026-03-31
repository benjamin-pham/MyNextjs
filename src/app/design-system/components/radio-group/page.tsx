import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export function RadioGroupInvalid() {
  return (
    <FieldSet className="w-full max-w-xs">
      <FieldLegend variant="label">Notification Preferences</FieldLegend>
      <FieldDescription>
        Choose how you want to receive notifications.
      </FieldDescription>
      <RadioGroup defaultValue="email">
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="email" id="invalid-email" aria-invalid />
          <FieldLabel htmlFor="invalid-email" className="font-normal">
            Email only
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
          <FieldLabel htmlFor="invalid-sms" className="font-normal">
            SMS only
          </FieldLabel>
        </Field>
        <Field orientation="horizontal" data-invalid>
          <RadioGroupItem value="both" id="invalid-both" aria-invalid />
          <FieldLabel htmlFor="invalid-both" className="font-normal">
            Both Email & SMS
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

export default function RadioGroupPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Radio Group</h1>
        <p className="text-sm text-muted-foreground">
          Một tập hợp các nút chọn (radio buttons) trong đó chỉ có một nút có thể được chọn tại một thời điểm.
          Dựa trên Radix UI Radio Group.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Tuỳ chọn 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Tuỳ chọn 2</Label>
  </div>
</RadioGroup>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">RadioGroupItem</code> kết hợp với <code className="text-xs font-mono">Label</code> để tạo các lựa chọn.
        </p>
        <DemoBlock>
          <RadioGroup defaultValue="option-one">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Tuỳ chọn 1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Tuỳ chọn 2</Label>
            </div>
          </RadioGroup>
        </DemoBlock>
        <CodeBlock code={`
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Tuỳ chọn 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Tuỳ chọn 2</Label>
  </div>
</RadioGroup>
        `} />
      </ShowcaseSection>

      {/* ── 2. Hướng hiển thị (Orientation) ── */}
      <ShowcaseSection title="2. Hướng hiển thị (Orientation)">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">orientation="horizontal"</code> và các class Tailwind để điều chỉnh layout.
        </p>
        <DemoBlock>
          <RadioGroup defaultValue="comfortable" orientation="horizontal" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1">Mặc định</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2">Thoải mái</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3">Gọn gàng</Label>
            </div>
          </RadioGroup>
        </DemoBlock>
        <CodeBlock code={`
<RadioGroup defaultValue="comfortable" orientation="horizontal" className="flex gap-4">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="default" id="r1" />
    <Label htmlFor="r1">Mặc định</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <Label htmlFor="r2">Thoải mái</Label>
  </div>
</RadioGroup>
        `} />
      </ShowcaseSection>

      {/* ── 3. Trạng thái disabled ── */}
      <ShowcaseSection title="3. Trạng thái disabled">
        <p className="text-sm text-muted-foreground">
          Bạn có thể vô hiệu hoá từng item hoặc toàn bộ group.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Từng item</p>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="d1" />
                  <Label htmlFor="d1">Hoạt động</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="d2" disabled />
                  <Label htmlFor="d2">Bị vô hiệu hoá</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Toàn bộ group</p>
              <RadioGroup defaultValue="option-one" disabled>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="dg1" />
                  <Label htmlFor="dg1">Tuỳ chọn 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="dg2" />
                  <Label htmlFor="dg2">Tuỳ chọn 2</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
{/* Vô hiệu hoá từng item */}
<RadioGroupItem value="option-two" disabled />

{/* Vô hiệu hoá toàn bộ group */}
<RadioGroup disabled>
  <RadioGroupItem value="option-one" />
  <RadioGroupItem value="option-two" />
</RadioGroup>
        `} />
      </ShowcaseSection>

      {/* ── 4. Choice Card ── */}
      <ShowcaseSection title="4. Choice Card">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">FieldLabel</code> để bao bọc toàn bộ <code className="text-xs font-mono">Field</code> tạo giao diện dạng thẻ (card) có thể nhấn vào để chọn.
        </p>
        <DemoBlock>
          <RadioGroup defaultValue="plus" className="flex flex-col gap-3 max-w-sm w-full">
            <FieldLabel htmlFor="plus-plan">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Plus</FieldTitle>
                  <FieldDescription>
                    Dành cho cá nhân và đội nhóm nhỏ.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="plus" id="plus-plan" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="pro-plan">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Pro</FieldTitle>
                  <FieldDescription>Cho doanh nghiệp đang phát triển.</FieldDescription>
                </FieldContent>
                <RadioGroupItem value="pro" id="pro-plan" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="enterprise-plan">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Enterprise</FieldTitle>
                  <FieldDescription>
                    Cho các đội nhóm lớn và tập đoàn.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="enterprise" id="enterprise-plan" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </DemoBlock>
        <CodeBlock code={`
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"

<RadioGroup defaultValue="plus" className="max-w-sm">
  <FieldLabel htmlFor="plus-plan">
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Plus</FieldTitle>
        <FieldDescription>
          For individuals and small teams.
        </FieldDescription>
      </FieldContent>
      <RadioGroupItem value="plus" id="plus-plan" />
    </Field>
  </FieldLabel>
  {/* ... */}
</RadioGroup>
        `} />
      </ShowcaseSection>

      {/* ── 5. Fieldset ── */}
      <ShowcaseSection title="5. Fieldset">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">FieldSet</code> và <code className="text-xs font-mono">FieldLegend</code> để nhóm các radio item với nhãn và mô tả chung cho cả nhóm.
        </p>
        <DemoBlock>
          <FieldSet className="w-full max-w-xs">
            <FieldLegend variant="label">Gói đăng ký (Subscription Plan)</FieldLegend>
            <FieldDescription>
              Các gói năm và trọn đời giúp bạn tiết kiệm chi phí đáng kể.
            </FieldDescription>
            <RadioGroup defaultValue="monthly">
              <Field orientation="horizontal">
                <RadioGroupItem value="monthly" id="plan-monthly" />
                <FieldLabel htmlFor="plan-monthly" className="font-normal">
                  Hàng tháng ($9.99/tháng)
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="yearly" id="plan-yearly" />
                <FieldLabel htmlFor="plan-yearly" className="font-normal">
                  Hàng năm ($99.99/năm)
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="lifetime" id="plan-lifetime" />
                <FieldLabel htmlFor="plan-lifetime" className="font-normal">
                  Trọn đời ($299.99)
                </FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>
        </DemoBlock>
        <CodeBlock code={`
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"

<FieldSet className="w-full max-w-xs">
  <FieldLegend variant="label">Subscription Plan</FieldLegend>
  <FieldDescription>
    Yearly and lifetime plans offer significant savings.
  </FieldDescription>
  <RadioGroup defaultValue="monthly">
    <Field orientation="horizontal">
      <RadioGroupItem value="monthly" id="plan-monthly" />
      <FieldLabel htmlFor="plan-monthly" className="font-normal">
        Monthly ($9.99/month)
      </FieldLabel>
    </Field>
    {/* ... */}
  </RadioGroup>
</FieldSet>
        `} />
      </ShowcaseSection>

      {/* ── 6. Trạng thái lỗi (Invalid) ── */}
      <ShowcaseSection title="6. Trạng thái lỗi (Invalid)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">data-invalid</code> trên <code className="text-xs font-mono">Field</code> và <code className="text-xs font-mono">aria-invalid</code> trên <code className="text-xs font-mono">RadioGroupItem</code> để biểu thị trạng thái lỗi.
        </p>
        <DemoBlock>
          <RadioGroupInvalid />
        </DemoBlock>
        <CodeBlock code={`
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<FieldSet className="w-full max-w-xs">
  <FieldLegend variant="label">Notification Preferences</FieldLegend>
  <FieldDescription>
    Choose how you want to receive notifications.
  </FieldDescription>
  <RadioGroup defaultValue="email">
    <Field orientation="horizontal" data-invalid>
      <RadioGroupItem value="email" id="invalid-email" aria-invalid />
      <FieldLabel htmlFor="invalid-email" className="font-normal">
        Email only
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-invalid>
      <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
      <FieldLabel htmlFor="invalid-sms" className="font-normal">
        SMS only
      </FieldLabel>
    </Field>
    <Field orientation="horizontal" data-invalid>
      <RadioGroupItem value="both" id="invalid-both" aria-invalid />
      <FieldLabel htmlFor="invalid-both" className="font-normal">
        Both Email & SMS
      </FieldLabel>
    </Field>
  </RadioGroup>
</FieldSet>
        `} />
      </ShowcaseSection>

      {/* ── 7. Props reference ── */}
      <ShowcaseSection title="7. Props reference">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold mb-3">RadioGroup (Root)</h3>
            <PropsTable rows={[
              { prop: "defaultValue", type: "string", description: "Giá trị được chọn mặc định khi render lần đầu." },
              { prop: "value", type: "string", description: "Giá trị hiện tại của RadioGroup (dùng cho controlled component)." },
              { prop: "onValueChange", type: "(value: string) => void", description: "Callback được gọi khi giá trị thay đổi." },
              { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá tương tác với tất cả các item con." },
              { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"vertical"', description: "Hướng hiển thị của các item cho mục đích accessibility." },
              { prop: "name", type: "string", description: "Tên thuộc tính name cho form submission." },
              { prop: "required", type: "boolean", default_: "false", description: "Yêu cầu phải chọn một giá trị trong form." },
            ]} />
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">RadioGroupItem</h3>
            <PropsTable rows={[
              { prop: "value", type: "string", description: "Giá trị của item này (bắt buộc)." },
              { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá item này." },
              { prop: "required", type: "boolean", description: "Kế thừa từ root RadioGroup." },
              { prop: "id", type: "string", description: "ID để liên kết với nhãn Label." },
              { prop: "asChild", type: "boolean", default_: "false", description: "Render thành phần con được truyền vào thay vì thẻ button." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 8. Lưu ý ── */}
      <ShowcaseSection title="8. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn sử dụng <code className="text-xs font-mono">Label</code> kết hợp với <code className="text-xs font-mono">id</code> của <code className="text-xs font-mono">RadioGroupItem</code> để đảm bảo tính truy cập (accessibility).</li>
          <li>Component tự động xử lý điều hướng bằng bàn phím (phím mũi tên để di chuyển giữa các lựa chọn).</li>
          <li>Bạn có thể tùy chỉnh khoảng cách giữa các item bằng <code className="text-xs font-mono">className</code> trên <code className="text-xs font-mono">RadioGroup</code> (mặc định là <code className="text-xs font-mono">gap-2</code>).</li>
          <li>Màu sắc của vòng tròn chọn tuân theo biến <code className="text-xs font-mono">primary</code> của hệ thống theme.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
