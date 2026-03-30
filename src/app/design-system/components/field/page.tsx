"use client"

import * as React from "react"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"
import { CreditCard, Wallet, Smartphone } from "lucide-react"

/* ─── page ───────────────────────────────────────────────────────────────── */

export function FieldSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <FieldDescription>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </FieldDescription>
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as [number, number])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="Price Range"
      />
    </Field>
  )
}

export function FieldFieldset() {
  return (
    <FieldSet className="w-full max-w-sm">
      <FieldLegend>Address Information</FieldLegend>
      <FieldDescription>
        We need your address to deliver your order.
      </FieldDescription>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="street">Street Address</FieldLabel>
          <Input id="street" type="text" placeholder="123 Main St" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="city">City</FieldLabel>
            <Input id="city" type="text" placeholder="New York" />
          </Field>
          <Field>
            <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
            <Input id="zip" type="text" placeholder="90502" />
          </Field>
        </div>
      </FieldGroup>
    </FieldSet>
  )
}

export function FieldCheckbox() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLegend variant="label">
          Show these items on the desktop
        </FieldLegend>
        <FieldDescription>
          Select the items you want to show on the desktop.
        </FieldDescription>
        <FieldGroup className="gap-3">
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
            <FieldLabel
              htmlFor="finder-pref-9k2-hard-disks-ljj"
              className="font-normal"
            >
              Hard disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-external-disks-1yg" />
            <FieldLabel
              htmlFor="finder-pref-9k2-external-disks-1yg"
              className="font-normal"
            >
              External disks
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
            <FieldLabel
              htmlFor="finder-pref-9k2-cds-dvds-fzt"
              className="font-normal"
            >
              CDs, DVDs, and iPods
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
            <FieldLabel
              htmlFor="finder-pref-9k2-connected-servers-6l2"
              className="font-normal"
            >
              Connected servers
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <Field orientation="horizontal">
        <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
        <FieldContent>
          <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
            Sync Desktop & Documents folders
          </FieldLabel>
          <FieldDescription>
            Your Desktop & Documents folders are being synced with iCloud Drive.
            You can access them from other devices.
          </FieldDescription>
        </FieldContent>
      </Field>
    </FieldGroup>
  )
}

export function FieldRadio() {
  return (
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
        <Field orientation="horizontal">
          <RadioGroupItem value="yearly" id="plan-yearly" />
          <FieldLabel htmlFor="plan-yearly" className="font-normal">
            Yearly ($99.99/year)
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <RadioGroupItem value="lifetime" id="plan-lifetime" />
          <FieldLabel htmlFor="plan-lifetime" className="font-normal">
            Lifetime ($299.99)
          </FieldLabel>
        </Field>
      </RadioGroup>
    </FieldSet>
  )
}

export function FieldSwitch() {
  return (
    <Field orientation="horizontal" className="w-fit">
      <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
      <Switch id="2fa" />
    </Field>
  )
}

export function FieldChoiceCard() {
  return (
    <FieldSet className="w-full max-w-md">
      <FieldLegend variant="label">Payment Method</FieldLegend>
      <FieldDescription>Choose your preferred way to pay.</FieldDescription>
      <RadioGroup
        defaultValue="card"
        className="grid grid-cols-1 gap-3 sm:grid-cols-3 mt-2"
      >
        <FieldLabel className="flex-1 cursor-pointer">
          <RadioGroupItem value="card" id="pm-card" className="sr-only" />
          <Field className="items-center justify-center py-4">
            <CreditCard className="size-6 mb-2" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Card
            </span>
          </Field>
        </FieldLabel>

        <FieldLabel className="flex-1 cursor-pointer">
          <RadioGroupItem value="paypal" id="pm-paypal" className="sr-only" />
          <Field className="items-center justify-center py-4">
            <Wallet className="size-6 mb-2" />
            <span className="text-xs font-medium uppercase tracking-wider">
              PayPal
            </span>
          </Field>
        </FieldLabel>

        <FieldLabel className="flex-1 cursor-pointer">
          <RadioGroupItem value="apple" id="pm-apple" className="sr-only" />
          <Field className="items-center justify-center py-4">
            <Smartphone className="size-6 mb-2" />
            <span className="text-xs font-medium uppercase tracking-wider">
              Apple Pay
            </span>
          </Field>
        </FieldLabel>
      </RadioGroup>
    </FieldSet>
  )
}

export function FieldGroupExample() {
  return (
    <FieldGroup className="w-full max-w-xs">
      <FieldSet>
        <FieldLabel>Responses</FieldLabel>
        <FieldDescription>
          Get notified when ChatGPT responds to requests that take time, like
          research or image generation.
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="push" defaultChecked disabled />
            <FieldLabel htmlFor="push" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSeparator />
      <FieldSet>
        <FieldLabel>Tasks</FieldLabel>
        <FieldDescription>
          Get notified when tasks you&apos;ve created have updates.{" "}
          <a href="#">Manage tasks</a>
        </FieldDescription>
        <FieldGroup data-slot="checkbox-group">
          <Field orientation="horizontal">
            <Checkbox id="push-tasks" />
            <FieldLabel htmlFor="push-tasks" className="font-normal">
              Push notifications
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="email-tasks" />
            <FieldLabel htmlFor="email-tasks" className="font-normal">
              Email notifications
            </FieldLabel>
          </Field>
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  )
}

export default function FieldPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Field</h1>
        <p className="text-sm text-muted-foreground">
          Bộ component bố cục form — bao gồm nhãn, mô tả, thông báo lỗi và nhóm các trường liên quan.
          Tách biệt logic bố cục khỏi các input, giúp form nhất quán và dễ bảo trì.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Field>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" type="email" placeholder="you@example.com" />
  <FieldDescription>Nhập địa chỉ email của bạn.</FieldDescription>
  <FieldError>Email không hợp lệ.</FieldError>
</Field>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Field>
            <FieldLabel htmlFor="name-basic">Họ tên</FieldLabel>
            <Input id="name-basic" placeholder="Nguyễn Văn A" />
            <FieldDescription>Tên hiển thị trên hồ sơ của bạn.</FieldDescription>
          </Field>
        </DemoBlock>
        <CodeBlock code={`<Field>
  <FieldLabel htmlFor="name">Họ tên</FieldLabel>
  <Input id="name" placeholder="Nguyễn Văn A" />
  <FieldDescription>Tên hiển thị trên hồ sơ của bạn.</FieldDescription>
</Field>`} />
      </ShowcaseSection>

      {/* ── 2. Orientations ── */}
      <ShowcaseSection title="2. Orientations">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">Field</code> có 3 hướng:{" "}
          <code className="text-xs font-mono">vertical</code> (mặc định),{" "}
          <code className="text-xs font-mono">horizontal</code> (nhãn ngang hàng với input),{" "}
          <code className="text-xs font-mono">responsive</code> (tự động chuyển theo container).
        </p>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">vertical (mặc định)</p>
          <DemoBlock>
            <Field orientation="vertical">
              <FieldLabel htmlFor="v-email">Email</FieldLabel>
              <Input id="v-email" placeholder="you@example.com" />
              <FieldDescription>Nhãn phía trên, input bên dưới.</FieldDescription>
            </Field>
          </DemoBlock>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">horizontal</p>
          <DemoBlock>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="h-email">Email</FieldLabel>
              <Input id="h-email" placeholder="you@example.com" />
            </Field>
          </DemoBlock>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">responsive</p>
          <DemoBlock>
            <FieldGroup>
              <Field orientation="responsive">
                <FieldLabel htmlFor="r-name">Họ tên</FieldLabel>
                <Input id="r-name" placeholder="Nguyễn Văn A" />
              </Field>
              <Field orientation="responsive">
                <FieldLabel htmlFor="r-email">Email</FieldLabel>
                <Input id="r-email" placeholder="you@example.com" />
              </Field>
            </FieldGroup>
          </DemoBlock>
        </div>

        <CodeBlock code={`{/* Dọc (mặc định) */}
<Field orientation="vertical">
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" placeholder="you@example.com" />
</Field>

{/* Ngang */}
<Field orientation="horizontal">
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" placeholder="you@example.com" />
</Field>

{/* Responsive — dọc trên mobile, ngang khi container >= md */}
<FieldGroup>
  <Field orientation="responsive">
    <FieldLabel htmlFor="name">Họ tên</FieldLabel>
    <Input id="name" />
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 3. FieldError ── */}
      <ShowcaseSection title="3. FieldError — Thông báo lỗi">
        <p className="text-sm text-muted-foreground">
          Truyền <code className="text-xs font-mono">children</code> để hiển thị một lỗi cố định, hoặc{" "}
          <code className="text-xs font-mono">errors</code> (mảng object{" "}
          <code className="text-xs font-mono">{"{ message }"}</code>) để hiển thị nhiều lỗi tự động — tự khử trùng lặp.
        </p>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Một lỗi</p>
          <DemoBlock>
            <Field data-invalid="true">
              <FieldLabel htmlFor="err-email">Email</FieldLabel>
              <Input id="err-email" aria-invalid="true" defaultValue="not-an-email" />
              <FieldError>Email không đúng định dạng.</FieldError>
            </Field>
          </DemoBlock>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Nhiều lỗi (dùng prop errors)</p>
          <DemoBlock>
            <Field data-invalid="true">
              <FieldLabel htmlFor="err-pass">Mật khẩu</FieldLabel>
              <Input id="err-pass" type="password" aria-invalid="true" />
              <FieldError errors={[
                { message: "Mật khẩu phải có ít nhất 8 ký tự." },
                { message: "Phải chứa ít nhất một ký tự đặc biệt." },
                { message: "Phải chứa ít nhất một chữ hoa." },
              ]} />
            </Field>
          </DemoBlock>
        </div>

        <CodeBlock code={`{/* Lỗi đơn qua children */}
<Field data-invalid="true">
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input id="email" aria-invalid="true" />
  <FieldError>Email không đúng định dạng.</FieldError>
</Field>

{/* Nhiều lỗi qua prop errors — tự khử trùng lặp */}
<Field data-invalid="true">
  <FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
  <Input id="password" type="password" aria-invalid="true" />
  <FieldError errors={[
    { message: "Phải có ít nhất 8 ký tự." },
    { message: "Phải chứa ký tự đặc biệt." },
    { message: "Phải chứa chữ hoa." },
  ]} />
</Field>`} />
      </ShowcaseSection>

      {/* ── 4. FieldSeparator ── */}
      <ShowcaseSection title="4. FieldSeparator — Đường phân cách">
        <p className="text-sm text-muted-foreground">
          Dùng trong <code className="text-xs font-mono">FieldGroup</code> để ngăn cách các nhóm trường.
          Có thể thêm text ở giữa.
        </p>
        <DemoBlock>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sep-email">Email</FieldLabel>
              <Input id="sep-email" type="email" placeholder="you@example.com" />
            </Field>
            <FieldSeparator>hoặc</FieldSeparator>
            <Field>
              <FieldLabel htmlFor="sep-phone">Số điện thoại</FieldLabel>
              <Input id="sep-phone" type="tel" placeholder="0912 345 678" />
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" />
  </Field>

  <FieldSeparator>hoặc</FieldSeparator>

  <Field>
    <FieldLabel htmlFor="phone">Số điện thoại</FieldLabel>
    <Input id="phone" type="tel" />
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 5. FieldContent — Bố cục ngang đa thành phần ── */}
      <ShowcaseSection title="5. FieldContent — Bố cục ngang đa thành phần">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">FieldContent</code> khi làm form nằm ngang (horizontal) 
          để nhóm các thành phần phụ trợ (mô tả, thông báo lỗi) cùng với input chính. 
          Nó đảm bảo nhãn bên trái luôn căn lề chính xác với dòng đầu tiên của nội dung bên phải.
        </p>

        <DemoBlock>
          <FieldGroup className="w-full max-w-xl">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="fc-visibility" className="sm:w-32 shrink-0 pt-1.5">Công khai hồ sơ</FieldLabel>
              <FieldContent>
                <Switch id="fc-visibility" defaultChecked />
                <FieldDescription>Cho phép mọi người tìm thấy bạn qua email hoặc tên người dùng.</FieldDescription>
              </FieldContent>
            </Field>

            <Field orientation="horizontal">
              <FieldLabel htmlFor="fc-bio" className="sm:w-32 shrink-0 pt-2">Tiểu sử</FieldLabel>
              <FieldContent>
                <Textarea id="fc-bio" placeholder="Kể về bạn..." className="min-h-[100px]" />
                <FieldDescription>Tối đa 160 ký tự. Sử dụng Markdown để định dạng.</FieldDescription>
              </FieldContent>
            </Field>

            <Field orientation="horizontal" data-invalid="true">
              <FieldLabel htmlFor="fc-email" className="sm:w-32 shrink-0 pt-2">Email</FieldLabel>
              <FieldContent>
                <Input id="fc-email" defaultValue="not-an-email" aria-invalid="true" />
                <FieldError>Email này đã được sử dụng bởi một tài khoản khác.</FieldError>
              </FieldContent>
            </Field>
          </FieldGroup>
        </DemoBlock>

        <CodeBlock code={`<Field orientation="horizontal">
  <FieldLabel className="sm:w-32 pt-1">Công khai hồ sơ</FieldLabel>
  <FieldContent>
    <div className="flex h-9 items-center">
      <Switch defaultChecked />
    </div>
    <FieldDescription>Cho phép mọi người tìm thấy bạn.</FieldDescription>
  </FieldContent>
</Field>

<Field orientation="horizontal">
  <FieldLabel className="sm:w-32 pt-2">Tiểu sử</FieldLabel>
  <FieldContent>
    <Textarea placeholder="Kể về bạn..." />
    <FieldDescription>Tối đa 160 ký tự.</FieldDescription>
  </FieldContent>
</Field>

<Field orientation="horizontal" data-invalid="true">
  <FieldLabel className="sm:w-32 pt-2">Email</FieldLabel>
  <FieldContent>
    <Input aria-invalid="true" />
    <FieldError>Email này đã được sử dụng.</FieldError>
  </FieldContent>
</Field>`} />
      </ShowcaseSection>

      {/* ── 6. Textarea ── */}
      <ShowcaseSection title="6. Textarea">
        <DemoBlock>
          <FieldSet className="w-full max-w-xs">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
                <Textarea
                  id="feedback"
                  placeholder="Your feedback helps us improve..."
                  rows={4}
                />
                <FieldDescription>
                  Share your thoughts about our service.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </FieldSet>
        </DemoBlock>
        <CodeBlock code={`<FieldSet className="w-full max-w-xs">
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
      <Textarea
        id="feedback"
        placeholder="Your feedback helps us improve..."
        rows={4}
      />
      <FieldDescription>
        Share your thoughts about our service.
      </FieldDescription>
    </Field>
  </FieldGroup>
</FieldSet>`} />
      </ShowcaseSection>

      {/* ── 7. Select ── */}
      <ShowcaseSection title="7. Select">
        <DemoBlock>
          <Field className="w-full max-w-xs">
            <FieldLabel>Department</FieldLabel>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose department" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="support">Customer Support</SelectItem>
                  <SelectItem value="hr">Human Resources</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="operations">Operations</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FieldDescription>
              Select your department or area of work.
            </FieldDescription>
          </Field>
        </DemoBlock>
        <CodeBlock code={`<Field className="w-full max-w-xs">
  <FieldLabel>Department</FieldLabel>
  <Select>
    <SelectTrigger>
      <SelectValue placeholder="Choose department" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="engineering">Engineering</SelectItem>
        <SelectItem value="design">Design</SelectItem>
        <SelectItem value="marketing">Marketing</SelectItem>
        <SelectItem value="sales">Sales</SelectItem>
        <SelectItem value="support">Customer Support</SelectItem>
        <SelectItem value="hr">Human Resources</SelectItem>
        <SelectItem value="finance">Finance</SelectItem>
        <SelectItem value="operations">Operations</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  <FieldDescription>
    Select your department or area of work.
  </FieldDescription>
</Field>`} />
      </ShowcaseSection>

      {/* ── 8. Slider ── */}
      <ShowcaseSection title="8. Slider">
        <DemoBlock>
          <FieldSlider />
        </DemoBlock>
        <CodeBlock code={`"use client"

import * as React from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@/components/ui/field"
import { Slider } from "@/components/ui/slider"

export function FieldSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <Field className="w-full max-w-xs">
      <FieldTitle>Price Range</FieldTitle>
      <FieldDescription>
        Set your budget range ($
        <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
        <span className="font-medium tabular-nums">{value[1]}</span>).
      </FieldDescription>
      <Slider
        value={value}
        onValueChange={(value) => setValue(value as [number, number])}
        max={1000}
        min={0}
        step={10}
        className="mt-2 w-full"
        aria-label="Price Range"
      />
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 9. Cấu trúc phức tạp với FieldSet ── */}
      <ShowcaseSection title="9. Cấu trúc phức tạp với FieldSet">
        <DemoBlock>
          <FieldFieldset />
        </DemoBlock>
        <CodeBlock code={`<FieldSet className="w-full max-w-sm">
  <FieldLegend>Address Information</FieldLegend>
  <FieldDescription>
    We need your address to deliver your order.
  </FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="street">Street Address</FieldLabel>
      <Input id="street" type="text" placeholder="123 Main St" />
    </Field>
    <div className="grid grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="city">City</FieldLabel>
        <Input id="city" type="text" placeholder="New York" />
      </Field>
      <Field>
        <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
        <Input id="zip" type="text" placeholder="90502" />
      </Field>
    </div>
  </FieldGroup>
</FieldSet>`} />
      </ShowcaseSection>

      {/* ── 10. Ví dụ nâng cao với Checkbox ── */}
      <ShowcaseSection title="10. Ví dụ nâng cao với Checkbox">
        <DemoBlock>
          <FieldCheckbox />
        </DemoBlock>
        <CodeBlock code={`<FieldGroup className="w-full max-w-xs">
  <FieldSet>
    <FieldLegend variant="label">
      Show these items on the desktop
    </FieldLegend>
    <FieldDescription>
      Select the items you want to show on the desktop.
    </FieldDescription>
    <FieldGroup className="gap-3">
      <Field orientation="horizontal">
        <Checkbox id="hard-disks" />
        <FieldLabel htmlFor="hard-disks" className="font-normal">
          Hard disks
        </FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="external-disks" />
        <FieldLabel htmlFor="external-disks" className="font-normal">
          External disks
        </FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
  <FieldSeparator />
  <Field orientation="horizontal">
    <Checkbox id="sync-folders" defaultChecked />
    <FieldContent>
      <FieldLabel htmlFor="sync-folders">
        Sync Desktop & Documents folders
      </FieldLabel>
      <FieldDescription>
        Your folders are being synced with iCloud Drive.
      </FieldDescription>
    </FieldContent>
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 11. Ví dụ với Radio ── */}
      <ShowcaseSection title="11. Ví dụ với Radio">
        <DemoBlock>
          <FieldRadio />
        </DemoBlock>
        <CodeBlock code={`<FieldSet className="w-full max-w-xs">
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
    <Field orientation="horizontal">
      <RadioGroupItem value="yearly" id="plan-yearly" />
      <FieldLabel htmlFor="plan-yearly" className="font-normal">
        Yearly ($99.99/year)
      </FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <RadioGroupItem value="lifetime" id="plan-lifetime" />
      <FieldLabel htmlFor="plan-lifetime" className="font-normal">
        Lifetime ($299.99)
      </FieldLabel>
    </Field>
  </RadioGroup>
</FieldSet>`} />
      </ShowcaseSection>

      {/* ── 12. Ví dụ với Switch ── */}
      <ShowcaseSection title="12. Ví dụ với Switch">
        <DemoBlock>
          <FieldSwitch />
        </DemoBlock>
        <CodeBlock code={`<Field orientation="horizontal" className="w-fit">
  <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
  <Switch id="2fa" />
</Field>`} />
      </ShowcaseSection>

      {/* ── 13. Choice Card ── */}
      <ShowcaseSection title="13. Choice Card">
        <DemoBlock>
          <FieldChoiceCard />
        </DemoBlock>
        <CodeBlock code={`<FieldSet className="w-full max-w-md">
  <FieldLegend variant="label">Payment Method</FieldLegend>
  <FieldDescription>Choose your preferred way to pay.</FieldDescription>
  <RadioGroup defaultValue="card" className="grid grid-cols-1 gap-3 sm:grid-cols-3 mt-2">
    <FieldLabel className="flex-1 cursor-pointer">
      <RadioGroupItem value="card" id="card" className="sr-only" />
      <Field className="items-center justify-center py-4">
        <CreditCard className="size-6 mb-2" />
        <span className="text-xs font-medium uppercase">Card</span>
      </Field>
    </FieldLabel>

    <FieldLabel className="flex-1 cursor-pointer">
      <RadioGroupItem value="paypal" id="paypal" className="sr-only" />
      <Field className="items-center justify-center py-4">
        <Wallet className="size-6 mb-2" />
        <span className="text-xs font-medium uppercase">PayPal</span>
      </Field>
    </FieldLabel>
  </RadioGroup>
</FieldSet>`} />
      </ShowcaseSection>

      {/* ── 14. Ví dụ nâng cao với FieldGroup ── */}
      <ShowcaseSection title="14. Ví dụ nâng cao với FieldGroup">
        <DemoBlock>
          <FieldGroupExample />
        </DemoBlock>
        <CodeBlock code={`<FieldGroup className="w-full max-w-xs">
  <FieldSet>
    <FieldLabel>Responses</FieldLabel>
    <FieldDescription>Get notified when ChatGPT responds.</FieldDescription>
    <FieldGroup data-slot="checkbox-group">
      <Field orientation="horizontal">
        <Checkbox id="push" defaultChecked disabled />
        <FieldLabel htmlFor="push" className="font-normal">Push notifications</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
  <FieldSeparator />
  <FieldSet>
    <FieldLabel>Tasks</FieldLabel>
    <FieldDescription>Get notified when tasks have updates.</FieldDescription>
    <FieldGroup data-slot="checkbox-group">
      <Field orientation="horizontal">
        <Checkbox id="push-tasks" />
        <FieldLabel htmlFor="push-tasks" className="font-normal">Push notifications</FieldLabel>
      </Field>
      <Field orientation="horizontal">
        <Checkbox id="email-tasks" />
        <FieldLabel htmlFor="email-tasks" className="font-normal">Email notifications</FieldLabel>
      </Field>
    </FieldGroup>
  </FieldSet>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 15. Với nhiều loại input ── */}
      <ShowcaseSection title="15. Với nhiều loại input">
        <p className="text-sm text-muted-foreground">
          Field hoạt động với mọi input component — Input, Textarea, Select, Checkbox, Switch.
        </p>
        <DemoBlock>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="input-select">Vai trò</FieldLabel>
              <Select>
                <SelectTrigger id="input-select">
                  <SelectValue placeholder="Chọn vai trò..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <FieldDescription>Quyền hạn truy cập của tài khoản.</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="input-textarea">Ghi chú</FieldLabel>
              <Textarea id="input-textarea" placeholder="Nhập ghi chú..." />
            </Field>

            <Field orientation="horizontal">
              <FieldTitle>Nhận email marketing</FieldTitle>
              <Switch />
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="role">Vai trò</FieldLabel>
    <Select>
      <SelectTrigger id="role"><SelectValue placeholder="Chọn vai trò..." /></SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
      </SelectContent>
    </Select>
    <FieldDescription>Quyền hạn truy cập.</FieldDescription>
  </Field>

  <Field>
    <FieldLabel htmlFor="note">Ghi chú</FieldLabel>
    <Textarea id="note" placeholder="Nhập ghi chú..." />
  </Field>

  <Field orientation="horizontal">
    <FieldTitle>Nhận email marketing</FieldTitle>
    <Switch />
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 16. FieldTitle vs FieldLabel ── */}
      <ShowcaseSection title="16. FieldTitle vs FieldLabel">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">FieldLabel</code> render thành{" "}
          <code className="text-xs font-mono">&lt;label&gt;</code> — dùng khi có input đi kèm.{" "}
          <code className="text-xs font-mono">FieldTitle</code> render thành{" "}
          <code className="text-xs font-mono">&lt;div&gt;</code> — dùng cho các control không cần htmlFor (như Switch, Checkbox đã tự liên kết).
        </p>
        <DemoBlock>
          <FieldGroup>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="sw-notify">Thông báo đẩy</FieldLabel>
              <Switch id="sw-notify" />
            </Field>
            <Field orientation="horizontal">
              <FieldTitle>Chế độ tối</FieldTitle>
              <Switch defaultChecked />
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`{/* FieldLabel — có htmlFor để liên kết */}
<Field orientation="horizontal">
  <FieldLabel htmlFor="notify">Thông báo đẩy</FieldLabel>
  <Switch id="notify" />
</Field>

{/* FieldTitle — không cần htmlFor */}
<Field orientation="horizontal">
  <FieldTitle>Chế độ tối</FieldTitle>
  <Switch defaultChecked />
</Field>`} />
      </ShowcaseSection>

      {/* ── 17. Ví dụ form thực tế ── */}
      <ShowcaseSection title="17. Ví dụ form thực tế">
        <DemoBlock>
          <form className="w-full max-w-md space-y-0">
            <FieldGroup>
              <FieldSet>
                <FieldLegend variant="label">Thông tin cơ bản</FieldLegend>
                <Field>
                  <FieldLabel htmlFor="form-name">Họ tên *</FieldLabel>
                  <Input id="form-name" placeholder="Nguyễn Văn A" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-email">Email *</FieldLabel>
                  <Input id="form-email" type="email" placeholder="you@example.com" aria-invalid="true" />
                  <FieldError>Email đã được sử dụng bởi tài khoản khác.</FieldError>
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-role">Vai trò</FieldLabel>
                  <Select>
                    <SelectTrigger id="form-role">
                      <SelectValue placeholder="Chọn vai trò..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="viewer">Viewer</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldSet>

              <FieldSeparator />

              <FieldSet>
                <FieldLegend variant="label">Tùy chọn thông báo</FieldLegend>
                <Field orientation="horizontal">
                  <Checkbox id="form-email-notif" defaultChecked />
                  <FieldLabel htmlFor="form-email-notif">Thông báo qua email</FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="form-sms-notif" />
                  <FieldLabel htmlFor="form-sms-notif">Thông báo qua SMS</FieldLabel>
                </Field>
              </FieldSet>
            </FieldGroup>
          </form>
        </DemoBlock>
      </ShowcaseSection>

      {/* ── 18. Props reference ── */}
      <ShowcaseSection title="18. Props reference">
        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Field</p>
        <PropsTable rows={[
          { prop: "orientation", type: '"vertical" | "horizontal" | "responsive"', default_: '"vertical"', description: "Hướng sắp xếp nhãn và input." },
          { prop: "data-invalid", type: '"true"', description: "Đánh dấu trường lỗi — chuyển text sang màu destructive." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 mt-4">FieldError</p>
        <PropsTable rows={[
          { prop: "children", type: "ReactNode", description: "Hiển thị lỗi cố định. Ưu tiên hơn prop errors." },
          { prop: "errors", type: "Array<{ message?: string } | undefined>", description: "Mảng lỗi — tự khử trùng lặp. Hiển thị dạng danh sách nếu có nhiều hơn 1 lỗi." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 mt-4">FieldLegend</p>
        <PropsTable rows={[
          { prop: "variant", type: '"legend" | "label"', default_: '"legend"', description: 'legend: text-base (to hơn). label: text-sm (cùng cỡ FieldLabel).' },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 mt-4">FieldSeparator</p>
        <PropsTable rows={[
          { prop: "children", type: "ReactNode", description: "Text hoặc nội dung hiển thị ở giữa đường phân cách." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 mt-4">FieldGroup / FieldSet / FieldContent / FieldTitle / FieldDescription / FieldLabel</p>
        <PropsTable rows={[
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
          { prop: "...props", type: "React.ComponentProps<\"div\" | \"fieldset\" | \"p\" | ...>", description: "Tất cả props native đều được forward." },
        ]} />
      </ShowcaseSection>

      {/* ── 19. Lưu ý ── */}
      <ShowcaseSection title="19. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Thêm <code className="text-xs font-mono">data-invalid="true"</code> vào <code className="text-xs font-mono">Field</code> và <code className="text-xs font-mono">aria-invalid="true"</code> vào input để hiện trạng thái lỗi đúng cách.</li>
          <li><code className="text-xs font-mono">FieldError</code> tự ẩn khi không có <code className="text-xs font-mono">children</code> và <code className="text-xs font-mono">errors</code> rỗng — không cần điều kiện render thủ công.</li>
          <li>Dùng <code className="text-xs font-mono">FieldSet</code> thay vì <code className="text-xs font-mono">FieldGroup</code> khi nhóm các checkbox hoặc radio — ngữ nghĩa HTML chính xác hơn.</li>
          <li><code className="text-xs font-mono">orientation="responsive"</code> yêu cầu bọc trong <code className="text-xs font-mono">FieldGroup</code> để nhận container query <code className="text-xs font-mono">@md/field-group</code>.</li>
          <li><code className="text-xs font-mono">FieldTitle</code> phù hợp hơn <code className="text-xs font-mono">FieldLabel</code> khi dùng với <code className="text-xs font-mono">Switch</code> hoặc các control tự quản lý label riêng.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
