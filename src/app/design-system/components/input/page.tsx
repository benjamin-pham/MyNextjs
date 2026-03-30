"use client"
import { InfoIcon } from "lucide-react"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4 text-muted-foreground">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4 text-muted-foreground">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function InputPage() {
  const [showPassword, setShowPassword] = React.useState(false)

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Input</h1>
        <p className="text-sm text-muted-foreground">
          Trường nhập liệu văn bản — wrapper mỏng xung quanh thẻ <code className="text-xs font-mono">&lt;input&gt;</code> với styling nhất quán, hỗ trợ tất cả các type HTML chuẩn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Input } from "@/components/ui/input"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Input type="email" placeholder="Email" />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Input placeholder="Nhập văn bản..." className="max-w-sm" />
        </DemoBlock>
        <CodeBlock code={`<Input placeholder="Nhập văn bản..." />`} />
      </ShowcaseSection>

      {/* ── 2. Các type phổ biến ── */}
      <ShowcaseSection title="2. Các type phổ biến">
        <p className="text-sm text-muted-foreground">
          Input hỗ trợ tất cả các <code className="text-xs font-mono">type</code> HTML chuẩn.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full max-w-sm">
            <Input type="text" placeholder="type=&quot;text&quot;" />
            <Input type="email" placeholder="type=&quot;email&quot;" />
            <Input type="password" placeholder="type=&quot;password&quot;" />
            <Input type="number" placeholder="type=&quot;number&quot;" />
            <Input type="search" placeholder="type=&quot;search&quot;" />
            <Input type="url" placeholder="type=&quot;url&quot;" />
            <Input type="tel" placeholder="type=&quot;tel&quot;" />
          </div>
        </DemoBlock>
        <CodeBlock code={`<Input type="text" placeholder="Văn bản" />
<Input type="email" placeholder="Email" />
<Input type="password" placeholder="Mật khẩu" />
<Input type="number" placeholder="Số" />
<Input type="search" placeholder="Tìm kiếm" />
<Input type="url" placeholder="URL" />
<Input type="tel" placeholder="Số điện thoại" />`} />
      </ShowcaseSection>

      {/* ── 3. File input ── */}
      <ShowcaseSection title="3. File input">
        <p className="text-sm text-muted-foreground">
          Khi <code className="text-xs font-mono">type="file"</code>, Input tự áp dụng style cho nút chọn file bên trong.
        </p>
        <DemoBlock>
          <Input type="file" className="max-w-sm" />
        </DemoBlock>
        <CodeBlock code={`<Input type="file" />`} />
      </ShowcaseSection>

      {/* ── 4. Trạng thái disabled ── */}
      <ShowcaseSection title="4. Trạng thái disabled">
        <p className="text-sm text-muted-foreground">
          Thêm prop <code className="text-xs font-mono">disabled</code> để vô hiệu hóa input — con trỏ chuyển thành <code className="text-xs font-mono">not-allowed</code> và nền chuyển sang màu mờ.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full max-w-sm">
            <Input placeholder="Input bình thường" />
            <Input placeholder="Input bị disabled" disabled />
            <Input value="Giá trị cố định" disabled readOnly />
          </div>
        </DemoBlock>
        <CodeBlock code={`<Input placeholder="Input bình thường" />
<Input placeholder="Input bị disabled" disabled />
<Input value="Giá trị cố định" disabled readOnly />`} />
      </ShowcaseSection>

      {/* ── 5. Trạng thái aria-invalid ── */}
      <ShowcaseSection title="5. Trạng thái lỗi — aria-invalid">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">aria-invalid="true"</code> để hiển thị viền và ring màu destructive, thường dùng khi form validation thất bại.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full max-w-sm">
            <Input placeholder="Input bình thường" />
            <Input placeholder="Input có lỗi" aria-invalid="true" />
            <div className="space-y-1">
              <Input defaultValue="email-sai-format" aria-invalid="true" />
              <p className="text-xs text-destructive">Email không hợp lệ.</p>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Input placeholder="Input bình thường" />
<Input placeholder="Input có lỗi" aria-invalid="true" />

{/* Kết hợp với thông báo lỗi */}
<div className="space-y-1">
  <Input value="email-sai-format" aria-invalid="true" />
  <p className="text-xs text-destructive">Email không hợp lệ.</p>
</div>`} />
      </ShowcaseSection>

      {/* ── 6. Với icon/adornment ── */}
      <ShowcaseSection title="6. Với icon — wrapper pattern">
        <p className="text-sm text-muted-foreground">
          Input không có slot icon tích hợp sẵn. Dùng wrapper <code className="text-xs font-mono">relative</code> + icon <code className="text-xs font-mono">absolute</code>, sau đó thêm padding vào Input để tránh text bị che.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full max-w-sm">
            {/* Icon bên trái */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
                <SearchIcon />
              </div>
              <Input type="search" placeholder="Tìm kiếm..." className="pl-8" />
            </div>

            {/* Icon bên trái (email) */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
                <MailIcon />
              </div>
              <Input type="email" placeholder="email@example.com" className="pl-8" />
            </div>

            {/* Password với toggle */}
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                className="pr-9"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-2.5 flex items-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Icon bên trái */}
<div className="relative">
  <div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
    <SearchIcon className="size-4 text-muted-foreground" />
  </div>
  <Input placeholder="Tìm kiếm..." className="pl-8" />
</div>

{/* Password với toggle hiện/ẩn */}
<div className="relative">
  <Input
    type={showPassword ? "text" : "password"}
    placeholder="Nhập mật khẩu"
    className="pr-9"
  />
  <button
    type="button"
    onClick={() => setShowPassword(v => !v)}
    className="absolute inset-y-0 right-2.5 flex items-center"
  >
    {showPassword ? <EyeOffIcon /> : <EyeIcon />}
  </button>
</div>`} />
      </ShowcaseSection>

      {/* ── 7. Với label ── */}
      <ShowcaseSection title="7. Với Label">
        <p className="text-sm text-muted-foreground">
          Luôn liên kết Input với một <code className="text-xs font-mono">&lt;label&gt;</code> qua <code className="text-xs font-mono">htmlFor</code> / <code className="text-xs font-mono">id</code> để đảm bảo accessibility.
        </p>
        <DemoBlock>
          <div className="space-y-4 w-full max-w-sm">
            <div className="space-y-1.5">
              <label htmlFor="username" className="text-sm font-medium leading-none">
                Tên đăng nhập
              </label>
              <Input id="username" type="text" placeholder="nguyenvan" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email-demo" className="text-sm font-medium leading-none">
                Email
              </label>
              <Input id="email-demo" type="email" placeholder="email@example.com" />
              <p className="text-xs text-muted-foreground">Chúng tôi sẽ không chia sẻ email của bạn.</p>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="space-y-1.5">
  <label htmlFor="username" className="text-sm font-medium">
    Tên đăng nhập
  </label>
  <Input id="username" type="text" placeholder="nguyenvan" />
</div>

<div className="space-y-1.5">
  <label htmlFor="email" className="text-sm font-medium">
    Email
  </label>
  <Input id="email" type="email" placeholder="email@example.com" />
  <p className="text-xs text-muted-foreground">
    Chúng tôi sẽ không chia sẻ email của bạn.
  </p>
</div>`} />
      </ShowcaseSection>

      {/* ── 8. Ví dụ thực tế — form đăng nhập ── */}
      <ShowcaseSection title="8. Ví dụ thực tế — Form đăng nhập">
        <DemoBlock>
          <form className="space-y-4 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label htmlFor="login-email" className="text-sm font-medium">Email</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
                  <MailIcon />
                </div>
                <Input id="login-email" type="email" placeholder="email@example.com" className="pl-8" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="login-password" className="text-sm font-medium">Mật khẩu</label>
              <Input id="login-password" type="password" placeholder="••••••••" />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary text-primary-foreground py-1.5 text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Đăng nhập
            </button>
          </form>
        </DemoBlock>
        <CodeBlock code={`<form className="space-y-4">
  <div className="space-y-1.5">
    <label htmlFor="email">Email</label>
    <div className="relative">
      <MailIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4" />
      <Input id="email" type="email" placeholder="email@example.com" className="pl-8" />
    </div>
  </div>
  <div className="space-y-1.5">
    <label htmlFor="password">Mật khẩu</label>
    <Input id="password" type="password" placeholder="••••••••" />
  </div>
  <button type="submit">Đăng nhập</button>
</form>`} />
      </ShowcaseSection>

      {/* ── 9. Inline ── */}
      <ShowcaseSection title="9. Inline — Kết hợp với Button">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">Field</code> với <code className="text-xs font-mono">orientation="horizontal"</code> để hiển thị Input và Button trên cùng một hàng.
        </p>
        <DemoBlock>
          <Field orientation="horizontal" className="max-w-sm">
            <Input type="search" placeholder="Search..." />
            <Button>Search</Button>
          </Field>
        </DemoBlock>
        <CodeBlock code={`import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 10. Field ── */}
      <ShowcaseSection title="10. Field — Với Label và Description">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Field</code> kết hợp với <code className="text-xs font-mono">FieldLabel</code> và <code className="text-xs font-mono">FieldDescription</code> để tạo ra một trường nhập liệu đầy đủ thông tin và có cấu trúc tốt.
        </p>
        <DemoBlock>
          <Field className="max-w-sm">
            <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
            <Input
              id="input-field-username"
              type="text"
              placeholder="Enter your username"
            />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
        </DemoBlock>
        <CodeBlock code={`import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputField() {
  return (
    <Field>
      <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
      <Input
        id="input-field-username"
        type="text"
        placeholder="Enter your username"
      />
      <FieldDescription>
        Choose a unique username for your account.
      </FieldDescription>
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 11. Field Group ── */}
      <ShowcaseSection title="11. Field Group — Nhóm nhiều trường">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">FieldGroup</code> để bọc các <code className="text-xs font-mono">Field</code> riêng lẻ, giúp tạo khoảng cách và cấu trúc nhất quán cho biểu mẫu.
        </p>
        <DemoBlock>
          <FieldGroup className="w-full max-w-sm">
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
              <Input id="fieldgroup-name" placeholder="Jordan Lee" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
              />
              <FieldDescription>
                We&apos;ll send updates to this address.
              </FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <Button type="reset" variant="outline" className="flex-1">
                Reset
              </Button>
              <Button type="submit" className="flex-1">Submit</Button>
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputFieldgroup() {
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input id="fieldgroup-name" placeholder="Jordan Lee" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          We&apos;ll send updates to this address.
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </Field>
    </FieldGroup>
  )
}`} />
      </ShowcaseSection>

      {/* ── 12. Grid ── */}
      <ShowcaseSection title="12. Grid — Chia cột biểu mẫu">
        <p className="text-sm text-muted-foreground">
          Kết hợp <code className="text-xs font-mono">FieldGroup</code> với các class <code className="text-xs font-mono">grid</code> của Tailwind để chia các trường nhập liệu thành nhiều cột.
        </p>
        <DemoBlock>
          <FieldGroup className="grid max-w-sm grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="first-name">First Name</FieldLabel>
              <Input id="first-name" placeholder="Jordan" />
            </Field>
            <Field>
              <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
              <Input id="last-name" placeholder="Lee" />
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputGrid() {
  return (
    <FieldGroup className="grid max-w-sm grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Input id="first-name" placeholder="Jordan" />
      </Field>
      <Field>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Input id="last-name" placeholder="Lee" />
      </Field>
    </FieldGroup>
  )
}`} />
      </ShowcaseSection>

      {/* ── 13. Required ── */}
      <ShowcaseSection title="13. Required — Trường bắt buộc">
        <p className="text-sm text-muted-foreground">
          Đánh dấu các trường bắt buộc bằng prop <code className="text-xs font-mono">required</code> và bổ sung ký tự <code className="text-xs font-mono text-destructive">*</code> vào nhãn (Label).
        </p>
        <DemoBlock>
          <Field className="max-w-sm">
            <FieldLabel htmlFor="input-required">
              Required Field <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="input-required"
              placeholder="This field is required"
              required
            />
            <FieldDescription>This field must be filled out.</FieldDescription>
          </Field>
        </DemoBlock>
        <CodeBlock code={`import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputRequired() {
  return (
    <Field>
      <FieldLabel htmlFor="input-required">
        Required Field <span className="text-destructive">*</span>
      </FieldLabel>
      <Input
        id="input-required"
        placeholder="This field is required"
        required
      />
      <FieldDescription>This field must be filled out.</FieldDescription>
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 14. Badge ── */}
      <ShowcaseSection title="14. Badge — Nhãn đi kèm trạng thái">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Badge</code> bên cạnh nhãn để đánh dấu trạng thái (ví dụ: Beta, New, v.v.).
        </p>
        <DemoBlock>
          <Field className="max-w-sm">
            <FieldLabel htmlFor="input-badge" className="flex items-center">
              Webhook URL
              <Badge variant="secondary" className="ml-auto">
                Beta
              </Badge>
            </FieldLabel>
            <Input
              id="input-badge"
              type="url"
              placeholder="https://api.example.com/webhook"
            />
          </Field>
        </DemoBlock>
        <CodeBlock code={`import { Badge } from "@/components/ui/badge"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputBadge() {
  return (
    <Field>
      <FieldLabel htmlFor="input-badge" className="flex items-center">
        Webhook URL
        <Badge variant="secondary" className="ml-auto">
          Beta
        </Badge>
      </FieldLabel>
      <Input
        id="input-badge"
        type="url"
        placeholder="https://api.example.com/webhook"
      />
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 15. Input Group ── */}
      <ShowcaseSection title="15. Input Group — Nhóm các thành phần">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">InputGroup</code> để kết hợp trường nhập liệu với các phần tử bổ sung như tiền tố, hậu tố hoặc icon.
        </p>
        <DemoBlock>
          <Field className="max-w-sm">
            <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
            <InputGroup>
              <InputGroupAddon>
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput id="input-group-url" placeholder="example.com" />
              <InputGroupAddon align="inline-end">
                <InfoIcon className="size-4" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </DemoBlock>
        <CodeBlock code={`import { InfoIcon } from "lucide-react"

import { Field, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"

export function InputInputGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput id="input-group-url" placeholder="example.com" />
        <InputGroupAddon align="inline-end">
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 16. Button Group ── */}
      <ShowcaseSection title="16. Button Group — Kết hợp với Button">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">ButtonGroup</code> để gắn chặt Input với Button, tạo cảm giác là một khối thống nhất (bo góc ngoài, bỏ viền giữa).
        </p>
        <DemoBlock>
          <Field className="max-w-sm">
            <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
            <ButtonGroup>
              <Input id="input-button-group" placeholder="Type to search..." />
              <Button variant="outline">Search</Button>
            </ButtonGroup>
          </Field>
        </DemoBlock>
        <CodeBlock code={`import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputButtonGroup() {
  return (
    <Field>
      <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}`} />
      </ShowcaseSection>

      {/* ── 17. Form ── */}
      <ShowcaseSection title="17. Ví dụ thực tế — Form thông tin">
        <p className="text-sm text-muted-foreground">
          Kết hợp tất cả các thành phần để tạo ra một biểu mẫu hoàn chỉnh, nhất quán về giao diện và trải nghiệm.
        </p>
        <DemoBlock>
          <form className="w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="form-name">
                  Name <span className="text-destructive">*</span>
                </FieldLabel>
                <Input
                  id="form-name"
                  type="text"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-email">Email</FieldLabel>
                <Input id="form-email" type="email" placeholder="john@example.com" />
                <FieldDescription>
                   Chúng tôi sẽ không chia sẻ email của bạn.
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                  <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="form-country">Country</FieldLabel>
                  <Select defaultValue="us">
                    <SelectTrigger id="form-country">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="form-address">Address</FieldLabel>
                <Input id="form-address" type="text" placeholder="123 Main St" />
              </Field>
              <Field orientation="horizontal">
                <Button type="button" variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </DemoBlock>
        <CodeBlock code={`import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function InputForm() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Name</FieldLabel>
          <Input id="form-name" type="text" placeholder="Evil Rabbit" required />
        </Field>
        ...
        <Field orientation="horizontal">
          <Button type="button" variant="outline">Cancel</Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}`} />
      </ShowcaseSection>

      {/* ── 18. Props reference ── */}
      <ShowcaseSection title="18. Props reference">
        <PropsTable rows={[
          { prop: "type", type: "string", default_: '"text"', description: 'Type HTML chuẩn: "text", "email", "password", "number", "file", "search", "url", "tel", v.v.' },
          { prop: "placeholder", type: "string", description: "Văn bản gợi ý hiển thị khi input trống." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa input — không nhận focus, không nhập được." },
          { prop: "readOnly", type: "boolean", default_: "false", description: "Chỉ đọc — có thể focus nhưng không sửa được." },
          { prop: "aria-invalid", type: '"true" | boolean', description: 'Hiển thị viền và ring màu destructive khi có lỗi validation.' },
          { prop: "value", type: "string | number", description: "Giá trị controlled. Dùng kèm onChange." },
          { prop: "defaultValue", type: "string | number", description: "Giá trị mặc định (uncontrolled)." },
          { prop: "onChange", type: "(e: ChangeEvent<HTMLInputElement>) => void", description: "Callback khi giá trị thay đổi." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 19. Lưu ý ── */}
      <ShowcaseSection title="19. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn liên kết với <code className="text-xs font-mono">&lt;label&gt;</code> qua <code className="text-xs font-mono">id</code> / <code className="text-xs font-mono">htmlFor</code> hoặc dùng <code className="text-xs font-mono">aria-label</code> để đảm bảo accessibility.</li>
          <li>Input không có icon slot tích hợp — dùng wrapper <code className="text-xs font-mono">relative</code> + icon <code className="text-xs font-mono">absolute</code> rồi thêm <code className="text-xs font-mono">pl-8</code> / <code className="text-xs font-mono">pr-9</code> cho Input.</li>
          <li>Dùng <code className="text-xs font-mono">aria-invalid="true"</code> thay vì custom class để báo hiệu lỗi — screen reader và browser mặc định hiểu được attribute này.</li>
          <li>Với form phức tạp, nên dùng kết hợp với thư viện như <code className="text-xs font-mono">react-hook-form</code> + <code className="text-xs font-mono">zod</code> để quản lý state và validation.</li>
          <li><code className="text-xs font-mono">type="search"</code> trên một số browser hiển thị nút X để xóa nội dung — style nút này qua selector <code className="text-xs font-mono">::-webkit-search-cancel-button</code> nếu cần.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
