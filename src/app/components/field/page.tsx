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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── page ───────────────────────────────────────────────────────────────── */

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

      {/* ── 4. FieldGroup ── */}
      <ShowcaseSection title="4. FieldGroup — Nhóm nhiều trường">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">FieldGroup</code> xếp nhiều <code className="text-xs font-mono">Field</code> theo chiều dọc với khoảng cách đều nhau.
        </p>
        <DemoBlock>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="g-first">Tên</FieldLabel>
              <Input id="g-first" placeholder="Văn A" />
            </Field>
            <Field>
              <FieldLabel htmlFor="g-last">Họ</FieldLabel>
              <Input id="g-last" placeholder="Nguyễn" />
            </Field>
            <Field>
              <FieldLabel htmlFor="g-email">Email</FieldLabel>
              <Input id="g-email" type="email" placeholder="you@example.com" />
              <FieldDescription>Chúng tôi sẽ không chia sẻ email của bạn.</FieldDescription>
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`<FieldGroup>
  <Field>
    <FieldLabel htmlFor="first">Tên</FieldLabel>
    <Input id="first" placeholder="Văn A" />
  </Field>
  <Field>
    <FieldLabel htmlFor="last">Họ</FieldLabel>
    <Input id="last" placeholder="Nguyễn" />
  </Field>
  <Field>
    <FieldLabel htmlFor="email">Email</FieldLabel>
    <Input id="email" type="email" placeholder="you@example.com" />
    <FieldDescription>Chúng tôi sẽ không chia sẻ email.</FieldDescription>
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 5. FieldSet + FieldLegend ── */}
      <ShowcaseSection title="5. FieldSet + FieldLegend — Nhóm checkbox/radio">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">FieldSet</code> + <code className="text-xs font-mono">FieldLegend</code> cho các nhóm checkbox hoặc radio để đảm bảo ngữ nghĩa HTML đúng.{" "}
          <code className="text-xs font-mono">FieldLegend</code> có 2 variant:{" "}
          <code className="text-xs font-mono">legend</code> (chữ lớn hơn) và{" "}
          <code className="text-xs font-mono">label</code> (cùng cỡ với FieldLabel).
        </p>
        <DemoBlock>
          <FieldSet>
            <FieldLegend>Thông báo qua</FieldLegend>
            <Field orientation="horizontal">
              <Checkbox id="cb-email" />
              <FieldLabel htmlFor="cb-email">Email</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="cb-sms" />
              <FieldLabel htmlFor="cb-sms">SMS</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="cb-push" defaultChecked />
              <FieldLabel htmlFor="cb-push">Push notification</FieldLabel>
            </Field>
          </FieldSet>
        </DemoBlock>
        <CodeBlock code={`<FieldSet>
  <FieldLegend>Thông báo qua</FieldLegend>
  <Field orientation="horizontal">
    <Checkbox id="email" />
    <FieldLabel htmlFor="email">Email</FieldLabel>
  </Field>
  <Field orientation="horizontal">
    <Checkbox id="sms" />
    <FieldLabel htmlFor="sms">SMS</FieldLabel>
  </Field>
</FieldSet>`} />
      </ShowcaseSection>

      {/* ── 6. FieldSeparator ── */}
      <ShowcaseSection title="6. FieldSeparator — Đường phân cách">
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

      {/* ── 7. FieldContent (horizontal với description) ── */}
      <ShowcaseSection title="7. FieldContent — Mô tả bên cạnh input">
        <p className="text-sm text-muted-foreground">
          Trong layout <code className="text-xs font-mono">horizontal</code>, dùng{" "}
          <code className="text-xs font-mono">FieldContent</code> để bọc input + description thành một cột,
          giữ nhãn căn trái.
        </p>
        <DemoBlock>
          <FieldGroup>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="fc-username">Tên đăng nhập</FieldLabel>
              <FieldContent>
                <Input id="fc-username" placeholder="nguyenvana" />
                <FieldDescription>Tên dùng để đăng nhập vào hệ thống.</FieldDescription>
              </FieldContent>
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="fc-bio">Giới thiệu</FieldLabel>
              <FieldContent>
                <Textarea id="fc-bio" placeholder="Vài dòng về bạn..." />
                <FieldDescription>Tối đa 160 ký tự.</FieldDescription>
              </FieldContent>
            </Field>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`<FieldGroup>
  <Field orientation="horizontal">
    <FieldLabel htmlFor="username">Tên đăng nhập</FieldLabel>
    <FieldContent>
      <Input id="username" placeholder="nguyenvana" />
      <FieldDescription>Tên dùng để đăng nhập.</FieldDescription>
    </FieldContent>
  </Field>

  <Field orientation="horizontal">
    <FieldLabel htmlFor="bio">Giới thiệu</FieldLabel>
    <FieldContent>
      <Textarea id="bio" placeholder="Vài dòng về bạn..." />
      <FieldDescription>Tối đa 160 ký tự.</FieldDescription>
    </FieldContent>
  </Field>
</FieldGroup>`} />
      </ShowcaseSection>

      {/* ── 8. Với nhiều loại input ── */}
      <ShowcaseSection title="8. Với nhiều loại input">
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

      {/* ── 9. FieldTitle vs FieldLabel ── */}
      <ShowcaseSection title="9. FieldTitle vs FieldLabel">
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

      {/* ── 10. Ví dụ form thực tế ── */}
      <ShowcaseSection title="10. Ví dụ form thực tế">
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

      {/* ── 11. Props reference ── */}
      <ShowcaseSection title="11. Props reference">
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

      {/* ── 12. Lưu ý ── */}
      <ShowcaseSection title="12. Lưu ý khi sử dụng">
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
