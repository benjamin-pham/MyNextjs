"use client"

import * as React from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
  </svg>
)

const AtSignIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
  </svg>
)

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" />
  </svg>
)

const EyeOffIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" /><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" /><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" /><path d="m2 2 20 20" />
  </svg>
)

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
)

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function InputGroupPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [search, setSearch] = React.useState("")

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Input Group</h1>
        <p className="text-sm text-muted-foreground">
          Nhóm input kết hợp — bọc <code className="text-xs font-mono">&lt;InputGroupInput&gt;</code> cùng addon, text, hoặc button trong một border chung, tạo ra các trường nhập liệu phức tạp hơn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">InputGroup</code> là container, bên trong chứa một hoặc nhiều{" "}
          <code className="text-xs font-mono">InputGroupAddon</code> và một{" "}
          <code className="text-xs font-mono">InputGroupInput</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>https://</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="example.com" />
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 2. align — vị trí addon ── */}
      <ShowcaseSection title="2. Addon — align">
        <p className="text-sm text-muted-foreground">
          Prop <code className="text-xs font-mono">align</code> trên <code className="text-xs font-mono">InputGroupAddon</code> nhận 4 giá trị:{" "}
          <code className="text-xs font-mono">inline-start</code>,{" "}
          <code className="text-xs font-mono">inline-end</code>,{" "}
          <code className="text-xs font-mono">block-start</code>,{" "}
          <code className="text-xs font-mono">block-end</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            {/* inline-start */}
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><GlobeIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="inline-start" />
            </InputGroup>

            {/* inline-end */}
            <InputGroup>
              <InputGroupInput placeholder="inline-end" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.com</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            {/* cả hai phía */}
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText>$</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="number" placeholder="0.00" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>VND</InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            {/* block-start */}
            <InputGroup>
              <InputGroupAddon align="block-start">
                <InputGroupText>Tiêu đề email</InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="block-start" />
            </InputGroup>

            {/* block-end */}
            <InputGroup>
              <InputGroupInput placeholder="block-end" />
              <InputGroupAddon align="block-end">
                <InputGroupText>Tối đa 100 ký tự</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* icon bên trái */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><GlobeIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="inline-start" />
</InputGroup>

{/* text bên phải */}
<InputGroup>
  <InputGroupInput placeholder="inline-end" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>.com</InputGroupText>
  </InputGroupAddon>
</InputGroup>

{/* tiền tệ cả hai phía */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput type="number" placeholder="0.00" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>VND</InputGroupText>
  </InputGroupAddon>
</InputGroup>

{/* label phía trên */}
<InputGroup>
  <InputGroupAddon align="block-start">
    <InputGroupText>Tiêu đề email</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="block-start" />
</InputGroup>

{/* gợi ý phía dưới */}
<InputGroup>
  <InputGroupInput placeholder="block-end" />
  <InputGroupAddon align="block-end">
    <InputGroupText>Tối đa 100 ký tự</InputGroupText>
  </InputGroupAddon>
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 3. Với icon ── */}
      <ShowcaseSection title="3. Addon với icon">
        <p className="text-sm text-muted-foreground">
          SVG bên trong <code className="text-xs font-mono">InputGroupText</code> tự được set kích thước <code className="text-xs font-mono">size-4</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><SearchIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="Tìm kiếm..." />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><MailIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput type="email" placeholder="email@example.com" />
            </InputGroup>

            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><AtSignIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="username" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>.vn</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><SearchIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Tìm kiếm..." />
</InputGroup>

<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><AtSignIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="username" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>.vn</InputGroupText>
  </InputGroupAddon>
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 4. InputGroupButton ── */}
      <ShowcaseSection title="4. InputGroupButton">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">InputGroupButton</code> bên trong <code className="text-xs font-mono">InputGroupAddon</code> để đặt button tích hợp vào input group.
          Size mặc định là <code className="text-xs font-mono">xs</code>; dùng <code className="text-xs font-mono">icon-xs</code> / <code className="text-xs font-mono">icon-sm</code> cho button chỉ có icon.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            {/* Nút copy bên phải */}
            <InputGroup>
              <InputGroupInput defaultValue="https://example.com/share/abc123" readOnly />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="icon-xs" aria-label="Copy">
                  <CopyIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            {/* Tìm kiếm có nút xóa */}
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><SearchIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                placeholder="Tìm kiếm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="icon-xs" onClick={() => setSearch("")} aria-label="Xóa">
                    <XIcon />
                  </InputGroupButton>
                </InputGroupAddon>
              )}
            </InputGroup>

            {/* Button có label */}
            <InputGroup>
              <InputGroupInput type="email" placeholder="email@example.com" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton size="xs">Đăng ký</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>

            {/* Mật khẩu toggle */}
            <InputGroup>
              <InputGroupInput
                type={showPassword ? "text" : "password"}
                placeholder="Nhập mật khẩu"
              />
              <InputGroupAddon align="inline-end">
                <InputGroupButton
                  size="icon-xs"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Nút copy */}
<InputGroup>
  <InputGroupInput defaultValue="https://example.com/share" readOnly />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="icon-xs" aria-label="Copy">
      <CopyIcon />
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>

{/* Button có label */}
<InputGroup>
  <InputGroupInput type="email" placeholder="email@example.com" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="xs">Đăng ký</InputGroupButton>
  </InputGroupAddon>
</InputGroup>

{/* Mật khẩu toggle */}
<InputGroup>
  <InputGroupInput
    type={showPassword ? "text" : "password"}
    placeholder="Nhập mật khẩu"
  />
  <InputGroupAddon align="inline-end">
    <InputGroupButton
      size="icon-xs"
      onClick={() => setShowPassword(v => !v)}
      aria-label="Toggle password"
    >
      {showPassword ? <EyeOffIcon /> : <EyeIcon />}
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 5. InputGroupTextarea ── */}
      <ShowcaseSection title="5. Với Textarea">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">InputGroupTextarea</code> thay cho <code className="text-xs font-mono">InputGroupInput</code> khi cần vùng nhập nhiều dòng.
          Group sẽ tự chuyển sang <code className="text-xs font-mono">flex-col</code> và điều chỉnh chiều cao.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            {/* Textarea với label block-start */}
            <InputGroup>
              <InputGroupAddon align="block-start">
                <InputGroupText>Nội dung tin nhắn</InputGroupText>
              </InputGroupAddon>
              <InputGroupTextarea placeholder="Nhập nội dung..." rows={3} />
            </InputGroup>

            {/* Textarea với button block-end */}
            <InputGroup>
              <InputGroupTextarea placeholder="Viết bình luận..." rows={3} />
              <InputGroupAddon align="block-end">
                <InputGroupButton size="xs">Gửi</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Textarea với tiêu đề block-start */}
<InputGroup>
  <InputGroupAddon align="block-start">
    <InputGroupText>Nội dung tin nhắn</InputGroupText>
  </InputGroupAddon>
  <InputGroupTextarea placeholder="Nhập nội dung..." rows={3} />
</InputGroup>

{/* Textarea với button gửi block-end */}
<InputGroup>
  <InputGroupTextarea placeholder="Viết bình luận..." rows={3} />
  <InputGroupAddon align="block-end">
    <InputGroupButton size="xs">Gửi</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 6. Disabled & aria-invalid ── */}
      <ShowcaseSection title="6. Disabled và aria-invalid">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">disabled</code> áp trên <code className="text-xs font-mono">InputGroupInput</code> làm mờ toàn bộ group.{" "}
          <code className="text-xs font-mono">aria-invalid="true"</code> hiển thị viền và ring màu destructive.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            {/* Disabled */}
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><GlobeIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput placeholder="Đã vô hiệu hóa" disabled />
            </InputGroup>

            {/* aria-invalid */}
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <InputGroupText><MailIcon /></InputGroupText>
              </InputGroupAddon>
              <InputGroupInput
                type="email"
                defaultValue="email-sai-format"
                aria-invalid="true"
              />
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Disabled */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><GlobeIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="Đã vô hiệu hóa" disabled />
</InputGroup>

{/* aria-invalid */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><MailIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput
    type="email"
    defaultValue="email-sai-format"
    aria-invalid="true"
  />
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 7. Ví dụ thực tế ── */}
      <ShowcaseSection title="7. Ví dụ thực tế">
        <DemoBlock>
          <div className="w-full max-w-sm space-y-4">
            {/* URL field */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Website</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="example.com" />
              </InputGroup>
            </div>

            {/* Username @ domain */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Email công ty</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText><AtSignIcon /></InputGroupText>
                </InputGroupAddon>
                <InputGroupInput placeholder="username" />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>@company.vn</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Giá tiền */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Giá bán</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText>₫</InputGroupText>
                </InputGroupAddon>
                <InputGroupInput type="number" placeholder="0" />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>VND</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>

            {/* Newsletter signup */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Nhận tin tức</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <InputGroupText><MailIcon /></InputGroupText>
                </InputGroupAddon>
                <InputGroupInput type="email" placeholder="email@example.com" />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton size="xs">Đăng ký</InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* URL field */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText>https://</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>

{/* Email công ty */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><AtSignIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="username" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>@company.vn</InputGroupText>
  </InputGroupAddon>
</InputGroup>

{/* Newsletter signup */}
<InputGroup>
  <InputGroupAddon align="inline-start">
    <InputGroupText><MailIcon /></InputGroupText>
  </InputGroupAddon>
  <InputGroupInput type="email" placeholder="email@example.com" />
  <InputGroupAddon align="inline-end">
    <InputGroupButton size="xs">Đăng ký</InputGroupButton>
  </InputGroupAddon>
</InputGroup>`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <p className="text-sm font-medium mb-2">InputGroupAddon</p>
        <PropsTable rows={[
          { prop: "align", type: '"inline-start" | "inline-end" | "block-start" | "block-end"', default_: '"inline-start"', description: "Vị trí của addon so với input." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="text-sm font-medium mt-6 mb-2">InputGroupButton</p>
        <PropsTable rows={[
          { prop: "size", type: '"xs" | "sm" | "icon-xs" | "icon-sm"', default_: '"xs"', description: "Kích thước button trong group." },
          { prop: "variant", type: "string", default_: '"ghost"', description: "Variant từ Button component." },
          { prop: "type", type: "string", default_: '"button"', description: 'Type HTML mặc định "button" để tránh submit form ngoài ý muốn.' },
        ]} />

        <p className="text-sm font-medium mt-6 mb-2">InputGroupInput / InputGroupTextarea</p>
        <PropsTable rows={[
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa input và làm mờ toàn bộ InputGroup." },
          { prop: "aria-invalid", type: '"true" | boolean', description: "Hiển thị viền và ring destructive cho toàn bộ group." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
          { prop: "...rest", type: "HTMLInputElement / HTMLTextareaElement", description: "Nhận tất cả props của thẻ input / textarea gốc." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            Click vào <code className="text-xs font-mono">InputGroupAddon</code> sẽ tự động focus vào input bên trong group — trừ khi click trúng một button.
          </li>
          <li>
            Dùng <code className="text-xs font-mono">align="block-start"</code> / <code className="text-xs font-mono">block-end</code> để đặt addon theo trục dọc — group sẽ tự chuyển sang <code className="text-xs font-mono">flex-col</code>.
          </li>
          <li>
            <code className="text-xs font-mono">InputGroupButton</code> mặc định <code className="text-xs font-mono">type="button"</code> để tránh vô tình submit form.
          </li>
          <li>
            Trạng thái <code className="text-xs font-mono">disabled</code> và <code className="text-xs font-mono">aria-invalid</code> đặt trên <code className="text-xs font-mono">InputGroupInput</code> sẽ ảnh hưởng style toàn bộ group thông qua CSS selector <code className="text-xs font-mono">has-[...]</code>.
          </li>
          <li>
            Không nên dùng cùng lúc <code className="text-xs font-mono">block-start</code> và <code className="text-xs font-mono">inline-start</code> vì có thể gây xung đột layout.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
