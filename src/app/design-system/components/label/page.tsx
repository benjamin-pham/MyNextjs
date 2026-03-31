"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── components ─────────────────────────────────────────────────────────── */

function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form onSubmit={(e) => e.preventDefault()}>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="01">01</SelectItem>
                        <SelectItem value="02">02</SelectItem>
                        <SelectItem value="03">03</SelectItem>
                        <SelectItem value="04">04</SelectItem>
                        <SelectItem value="05">05</SelectItem>
                        <SelectItem value="06">06</SelectItem>
                        <SelectItem value="07">07</SelectItem>
                        <SelectItem value="08">08</SelectItem>
                        <SelectItem value="09">09</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="11">11</SelectItem>
                        <SelectItem value="12">12</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                        <SelectItem value="2029">2029</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <div className="flex gap-2">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </div>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function LabelPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Label</h1>
        <p className="text-sm text-muted-foreground">
          Nhãn có thể truy cập được liên kết với các điều khiển form — được xây dựng trên Radix UI Label Primitive.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Label } from "@/components/ui/label"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Label htmlFor="email">Địa chỉ email</Label>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Label render thành thẻ{" "}
          <code className="text-xs font-mono">&lt;label&gt;</code> với{" "}
          <code className="text-xs font-mono">htmlFor</code> để liên kết với input.
          Nhấp vào label sẽ focus vào input tương ứng.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-2">
            <Label htmlFor="demo-email">Địa chỉ email</Label>
            <Input id="demo-email" type="email" placeholder="name@example.com" className="max-w-xs" />
          </div>
        </DemoBlock>
        <CodeBlock code={`<Label htmlFor="email">Địa chỉ email</Label>
<Input id="email" type="email" placeholder="name@example.com" />`} />
      </ShowcaseSection>

      {/* ── 2. Label với Checkbox ── */}
      <ShowcaseSection title="2. Label với Checkbox">
        <p className="text-sm text-muted-foreground">
          Khi dùng với Checkbox hoặc Switch, label và control thường đặt ngang nhau.
          Nhấp vào label sẽ toggle trạng thái của checkbox.
        </p>
        <DemoBlock>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Tôi đồng ý với điều khoản sử dụng</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="newsletter" defaultChecked />
              <Label htmlFor="newsletter">Nhận thông báo qua email</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="promo" disabled />
              <Label htmlFor="promo">Nhận ưu đãi khuyến mãi (disabled)</Label>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Tôi đồng ý với điều khoản sử dụng</Label>
</div>`} />
      </ShowcaseSection>

      {/* ── 3. Label với Switch ── */}
      <ShowcaseSection title="3. Label với Switch">
        <DemoBlock>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Switch id="dark-mode" />
              <Label htmlFor="dark-mode">Chế độ tối</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="notifications" defaultChecked />
              <Label htmlFor="notifications">Bật thông báo</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="auto-update" disabled />
              <Label htmlFor="auto-update">Tự động cập nhật (disabled)</Label>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="flex items-center gap-2">
  <Switch id="dark-mode" />
  <Label htmlFor="dark-mode">Chế độ tối</Label>
</div>`} />
      </ShowcaseSection>

      {/* ── 4. Label với Textarea ── */}
      <ShowcaseSection title="4. Label với Textarea">
        <DemoBlock>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Tin nhắn</Label>
            <Textarea id="message" placeholder="Nhập nội dung tin nhắn..." className="max-w-xs" rows={3} />
          </div>
        </DemoBlock>
        <CodeBlock code={`<Label htmlFor="message">Tin nhắn</Label>
<Textarea id="message" placeholder="Nhập nội dung tin nhắn..." />`} />
      </ShowcaseSection>

      {/* ── 5. Trạng thái disabled (peer) ── */}
      <ShowcaseSection title="5. Trạng thái disabled (peer)">
        <p className="text-sm text-muted-foreground">
          Khi input/checkbox/switch bị disabled, Label tự động giảm opacity và đổi con trỏ thành{" "}
          <code className="text-xs font-mono">not-allowed</code> nhờ selector{" "}
          <code className="text-xs font-mono">peer-disabled</code> trong class mặc định.
        </p>
        <DemoBlock>
          <div className="space-y-3">
            <div className="flex flex-col gap-2">
              <Label htmlFor="disabled-input">Trường bị vô hiệu</Label>
              <Input id="disabled-input" disabled placeholder="Không thể chỉnh sửa" className="max-w-xs peer" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="disabled-check" disabled className="peer" />
              <Label htmlFor="disabled-check">Tùy chọn bị khóa</Label>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Input disabled — label tự động mờ */}
<Label htmlFor="field">Trường bị vô hiệu</Label>
<Input id="field" disabled className="peer" />

{/* Checkbox disabled */}
<Checkbox id="opt" disabled className="peer" />
<Label htmlFor="opt">Tùy chọn bị khóa</Label>`} />
      </ShowcaseSection>

      {/* ── 6. Label trong Field component ── */}
      <ShowcaseSection title="6. Dùng trong Field component">
        <p className="text-sm text-muted-foreground">
          Với form phức tạp, nên dùng{" "}
          <code className="text-xs font-mono">Field</code> thay vì Label trực tiếp —{" "}
          Field bao gồm{" "}
          <code className="text-xs font-mono">FieldLabel</code>,{" "}
          <code className="text-xs font-mono">FieldDescription</code> và{" "}
          <code className="text-xs font-mono">FieldError</code> tích hợp sẵn.
        </p>
        <CodeBlock alwaysOpen code={`import { Field, FieldLabel, FieldDescription, FieldError } from "@/components/ui/field"

<Field>
  <FieldLabel htmlFor="email">Địa chỉ email</FieldLabel>
  <Input id="email" />
  <FieldDescription>Chúng tôi sẽ không chia sẻ email của bạn.</FieldDescription>
  <FieldError>Email không hợp lệ.</FieldError>
</Field>`} />
      </ShowcaseSection>

      {/* ── 7. Ví dụ form thực tế ── */}
      <ShowcaseSection title="7. Ví dụ form thực tế">
        <p className="text-sm text-muted-foreground">
          Sử dụng hệ thống <code className="text-xs font-mono">Field</code> để xây dựng các form phức tạp với layout, group và legend.
        </p>
        <DemoBlock>
          <FieldDemo />
        </DemoBlock>
        <CodeBlock code={`<FieldGroup>
  <FieldSet>
    <FieldLegend>Payment Method</FieldLegend>
    <FieldDescription>All transactions are secure and encrypted</FieldDescription>
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="card-name">Name on Card</FieldLabel>
        <Input id="card-name" placeholder="Evil Rabbit" required />
      </Field>
      <div className="grid grid-cols-3 gap-4">
        <Field>
          <FieldLabel htmlFor="month">Month</FieldLabel>
          <Select>...</Select>
        </Field>
        {/* ... */}
      </div>
    </FieldGroup>
  </FieldSet>
  
  <FieldSeparator />
  
  <FieldSet>
    <FieldLegend>Billing Address</FieldLegend>
    <Field orientation="horizontal">
      <Checkbox id="same-address" defaultChecked />
      <FieldLabel htmlFor="same-address" className="font-normal">
        Same as shipping address
      </FieldLabel>
    </Field>
  </FieldSet>

  <Field orientation="horizontal">
    <Button type="submit">Submit</Button>
    <Button variant="outline">Cancel</Button>
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <PropsTable rows={[
          { prop: "htmlFor", type: "string", description: "ID của control mà label liên kết. Nhấp vào label sẽ focus vào control đó." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
          { prop: "children", type: "React.ReactNode", description: "Nội dung văn bản hoặc phần tử con của label." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn liên kết Label với control bằng <code className="text-xs font-mono">htmlFor</code> khớp với <code className="text-xs font-mono">id</code> của input — đây là yêu cầu về khả năng tiếp cận (accessibility).</li>
          <li>Label tự động áp dụng <code className="text-xs font-mono">peer-disabled:cursor-not-allowed peer-disabled:opacity-50</code> — input cần có class <code className="text-xs font-mono">peer</code> để kích hoạt.</li>
          <li>Với form phức tạp, sử dụng <code className="text-xs font-mono">Field</code> component thay cho Label đơn lẻ để có thêm <code className="text-xs font-mono">FieldDescription</code> và <code className="text-xs font-mono">FieldError</code>.</li>
          <li>Label render thành thẻ <code className="text-xs font-mono">&lt;label&gt;</code> HTML native — không cần <code className="text-xs font-mono">asChild</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
