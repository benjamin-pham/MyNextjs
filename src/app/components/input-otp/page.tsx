"use client"

import * as React from "react"
import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── Demo helpers ───────────────────────────────────────────────────────── */

function ControlledDemo() {
  const [value, setValue] = React.useState("")
  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP maxLength={6} value={value} onChange={setValue}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">
        Giá trị: <code className="font-mono text-xs">{value || "(trống)"}</code>
      </p>
    </div>
  )
}

function PatternDemo() {
  const [digits, setDigits] = React.useState("")
  const [alphanum, setAlphanum] = React.useState("")
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-muted-foreground">Chỉ số (REGEXP_ONLY_DIGITS)</p>
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS} value={digits} onChange={setDigits}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-xs text-muted-foreground">Chữ + số (REGEXP_ONLY_DIGITS_AND_CHARS)</p>
        <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} value={alphanum} onChange={setAlphanum}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function InputOTPPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Input OTP</h1>
        <p className="text-sm text-muted-foreground">
          Ô nhập mã OTP (One-Time Password) được tạo bởi thư viện{" "}
          <code className="text-xs font-mono">input-otp</code> — hỗ trợ paste, điều hướng bàn phím, pattern lọc ký tự, và tích hợp form.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock
          alwaysOpen
          code={`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"`}
        />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock
          alwaysOpen
          code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </DemoBlock>
        <CodeBlock
          code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 2. Với separator ── */}
      <ShowcaseSection title="2. Với InputOTPSeparator">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">InputOTPSeparator</code> để chia nhóm ô nhập thành các phần trực quan hơn.
        </p>
        <DemoBlock>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">6 ký tự, tách 3–3</p>
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">8 ký tự, tách 4–4</p>
              <InputOTP maxLength={8}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                  <InputOTPSlot index={6} />
                  <InputOTPSlot index={7} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 3. Controlled ── */}
      <ShowcaseSection title="3. Controlled (có state)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">value</code> và <code className="text-xs font-mono">onChange</code> để kiểm soát giá trị từ component cha.
        </p>
        <DemoBlock>
          <ControlledDemo />
        </DemoBlock>
        <CodeBlock
          code={`const [value, setValue] = React.useState("")

<InputOTP maxLength={6} value={value} onChange={setValue}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>

<p>Giá trị: {value}</p>`}
        />
      </ShowcaseSection>

      {/* ── 4. Pattern lọc ký tự ── */}
      <ShowcaseSection title="4. Pattern — lọc ký tự nhập">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">pattern</code> để chỉ cho phép một số loại ký tự.{" "}
          <code className="text-xs font-mono">input-otp</code> export sẵn{" "}
          <code className="text-xs font-mono">REGEXP_ONLY_DIGITS</code> và{" "}
          <code className="text-xs font-mono">REGEXP_ONLY_DIGITS_AND_CHARS</code>.
        </p>
        <DemoBlock>
          <PatternDemo />
        </DemoBlock>
        <CodeBlock
          code={`import { REGEXP_ONLY_DIGITS, REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

// Chỉ nhận số 0–9
<InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>

// Nhận chữ hoa A–Z và số 0–9
<InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
  ...
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 5. Disabled ── */}
      <ShowcaseSection title="5. Disabled">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">disabled</code> để vô hiệu hóa toàn bộ input. Container tự động mờ qua{" "}
          <code className="text-xs font-mono">has-disabled:opacity-50</code>.
        </p>
        <DemoBlock>
          <InputOTP maxLength={6} disabled value="123456" onChange={() => {}}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </DemoBlock>
        <CodeBlock
          code={`<InputOTP maxLength={6} disabled>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    ...
  </InputOTPGroup>
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 6. Invalid ── */}
      <ShowcaseSection title="6. Trạng thái invalid">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">aria-invalid="true"</code> vào{" "}
          <code className="text-xs font-mono">InputOTPGroup</code> để hiển thị viền và ring màu destructive.
        </p>
        <DemoBlock>
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">Bình thường</p>
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-muted-foreground">aria-invalid</p>
              <InputOTP maxLength={4}>
                <InputOTPGroup aria-invalid="true">
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`<InputOTP maxLength={4}>
  <InputOTPGroup aria-invalid="true">
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 7. onComplete callback ── */}
      <ShowcaseSection title="7. onComplete — callback khi nhập đủ">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">onComplete</code> được gọi khi người dùng điền đầy đủ{" "}
          <code className="text-xs font-mono">maxLength</code> ký tự. Dùng để tự động submit hoặc xác thực.
        </p>
        <CodeBlock
          alwaysOpen
          code={`<InputOTP
  maxLength={6}
  onComplete={(value) => {
    console.log("Mã OTP:", value)
    // gọi API xác thực...
  }}
>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}
        />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <p className="text-sm text-muted-foreground font-medium mb-2">InputOTP</p>
        <PropsTable
          rows={[
            { prop: "maxLength", type: "number", description: "Số ký tự tối đa (số lượng slot)." },
            { prop: "value", type: "string", description: "Giá trị hiện tại (controlled)." },
            { prop: "onChange", type: "(value: string) => void", description: "Callback khi giá trị thay đổi." },
            { prop: "onComplete", type: "(value: string) => void", description: "Callback khi điền đủ maxLength ký tự." },
            { prop: "pattern", type: "string | RegExp", description: "Regex lọc ký tự được phép nhập." },
            { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa toàn bộ input." },
            { prop: "containerClassName", type: "string", description: "Class cho thẻ bọc container." },
            { prop: "className", type: "string", description: "Class cho input ẩn bên trong." },
          ]}
        />
        <p className="text-sm text-muted-foreground font-medium mb-2 mt-4">InputOTPSlot</p>
        <PropsTable
          rows={[
            { prop: "index", type: "number", description: "Vị trí (0-based) của slot trong OTP." },
            { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
          ]}
        />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            Mỗi <code className="text-xs font-mono">InputOTPSlot</code> phải có{" "}
            <code className="text-xs font-mono">index</code> đúng thứ tự từ <code className="text-xs font-mono">0</code> đến{" "}
            <code className="text-xs font-mono">maxLength - 1</code>.
          </li>
          <li>
            Có thể có nhiều <code className="text-xs font-mono">InputOTPGroup</code> trong một{" "}
            <code className="text-xs font-mono">InputOTP</code> — index slot vẫn phải liên tục.
          </li>
          <li>
            <code className="text-xs font-mono">InputOTPSeparator</code> chỉ là phần tử trực quan (
            <code className="text-xs font-mono">role="separator"</code>), không ảnh hưởng đến giá trị.
          </li>
          <li>
            Hỗ trợ paste toàn bộ mã OTP — người dùng có thể dán vào bất kỳ slot nào và thư viện tự phân phối các ký tự.
          </li>
          <li>
            Dùng <code className="text-xs font-mono">pattern={"{REGEXP_ONLY_DIGITS}"}</code> cho mã PIN thuần số để tránh nhập nhầm chữ cái.
          </li>
          <li>
            <code className="text-xs font-mono">aria-invalid</code> đặt trên{" "}
            <code className="text-xs font-mono">InputOTPGroup</code>, không phải trên{" "}
            <code className="text-xs font-mono">InputOTP</code>.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
