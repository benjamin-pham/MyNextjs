import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function SwitchPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Switch</h1>
        <p className="text-sm text-muted-foreground">
          Nút gạt dùng để bật/tắt một cài đặt hoặc trạng thái duy nhất. Thường được dùng thay cho checkbox khi hành động có hiệu lực ngay lập tức.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Switch } from "@/components/ui/switch"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Switch />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">Label</code> để tăng tính dễ đọc và accessibility.
        </p>
        <DemoBlock>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 2. Size ── */}
      <ShowcaseSection title="2. Kích thước">
        <p className="text-sm text-muted-foreground">
          Hỗ trợ 2 kích thước: <code className="text-xs font-mono">default</code> và <code className="text-xs font-mono">sm</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="switch-default" size="default" />
              <Label htmlFor="switch-default">Default size</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="switch-sm" size="sm" />
              <Label htmlFor="switch-sm">Small size</Label>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Switch size="default" />
<Switch size="sm" />
        `} />
      </ShowcaseSection>

      {/* ── 3. Với mô tả ── */}
      <ShowcaseSection title="3. Với mô tả">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Field</code> để hiển thị tiêu đề kèm mô tả chi tiết.
        </p>
        <DemoBlock>
          <Field orientation="horizontal" className="max-w-sm">
            <FieldContent>
              <FieldLabel htmlFor="switch-focus-mode">
                Share across devices
              </FieldLabel>
              <FieldDescription>
                Focus is shared across devices, and turns off when you leave the app.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-focus-mode" />
          </Field>
        </DemoBlock>
        <CodeBlock code={`
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"

<Field orientation="horizontal" className="max-w-sm">
  <FieldContent>
    <FieldLabel htmlFor="switch-focus-mode">
      Share across devices
    </FieldLabel>
    <FieldDescription>
      Focus is shared across devices, and turns off when you leave the app.
    </FieldDescription>
  </FieldContent>
  <Switch id="switch-focus-mode" />
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 4. Choice Card ── */}
      <ShowcaseSection title="4. Choice Card">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">FieldGroup</code> kết hợp với <code className="text-xs font-mono">FieldLabel</code> bao quanh <code className="text-xs font-mono">Field</code> để tạo thành các vùng chọn lớn (Choice Card).
        </p>
        <DemoBlock>
          <FieldGroup className="w-full max-w-sm">
            <FieldLabel htmlFor="switch-share">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Share across devices</FieldTitle>
                  <FieldDescription>
                    Focus is shared across devices, and turns off when you leave the app.
                  </FieldDescription>
                </FieldContent>
                <Switch id="switch-share" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="switch-notifications">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Enable notifications</FieldTitle>
                  <FieldDescription>
                    Receive notifications when focus mode is enabled or disabled.
                  </FieldDescription>
                </FieldContent>
                <Switch id="switch-notifications" defaultChecked />
              </Field>
            </FieldLabel>
          </FieldGroup>
        </DemoBlock>
        <CodeBlock code={`
<FieldGroup className="w-full max-w-sm">
  <FieldLabel htmlFor="switch-share">
    <Field orientation="horizontal">
      <FieldContent>
        <FieldTitle>Share across devices</FieldTitle>
        <FieldDescription>
          Focus is shared across devices, and turns off when you leave the app.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-share" />
    </Field>
  </FieldLabel>
  {/* ... more fields */}
</FieldGroup>
        `} />
      </ShowcaseSection>

      {/* ── 5. Trạng thái vô hiệu hóa ── */}
      <ShowcaseSection title="5. Trạng thái vô hiệu hóa">
        <DemoBlock>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode-disabled" disabled />
            <Label htmlFor="airplane-mode-disabled">Disabled</Label>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Switch disabled />`} />
      </ShowcaseSection>

      {/* ── 6. Trạng thái Invalid ── */}
      <ShowcaseSection title="6. Trạng thái Invalid">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">aria-invalid="true"</code> để hiển thị lỗi.
        </p>
        <DemoBlock>
          <div className="flex items-center space-x-2">
            <Switch id="invalid-switch" aria-invalid="true" />
            <Label htmlFor="invalid-switch">Invalid Switch</Label>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Switch aria-invalid="true" />`} />
      </ShowcaseSection>

      {/* ── 7. Ví dụ thực tế ── */}
      <ShowcaseSection title="7. Ví dụ thực tế">
        <p className="text-sm text-muted-foreground">
          Thường dùng trong danh sách cài đặt.
        </p>
        <DemoBlock>
          <div className="rounded-lg border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Thông báo email</Label>
                <p className="text-[0.8rem] text-muted-foreground">Nhận email về hoạt động tài khoản của bạn.</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Chế độ tối</Label>
                <p className="text-[0.8rem] text-muted-foreground">Sử dụng giao diện tối cho toàn bộ ứng dụng.</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Tự động cập nhật</Label>
                <p className="text-[0.8rem] text-muted-foreground">Tự động tải và cài đặt các bản cập nhật mới.</p>
              </div>
              <Switch disabled />
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="flex items-center justify-between">
  <div className="space-y-0.5">
    <Label className="text-base">Thông báo email</Label>
    <p className="text-[0.8rem] text-muted-foreground">Nhận email về hoạt động tài khoản của bạn.</p>
  </div>
  <Switch defaultChecked />
</div>
        `} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <PropsTable rows={[
          { prop: "checked", type: "boolean", description: "Trạng thái được chọn (controlled)." },
          { prop: "onCheckedChange", type: "(checked: boolean) => void", description: "Hàm callback khi trạng thái thay đổi." },
          { prop: "defaultChecked", type: "boolean", default_: "false", description: "Trạng thái mặc định (uncontrolled)." },
          { prop: "size", type: '"default" | "sm"', default_: '"default"', description: "Kích thước của switch." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa switch." },
          { prop: "required", type: "boolean", default_: "false", description: "Yêu cầu phải chọn trước khi submit form." },
          { prop: "name", type: "string", description: "Tên cho form data." },
          { prop: "value", type: "string", description: "Giá trị khi submit form." },
          { prop: "id", type: "string", description: "Mã định danh duy nhất (dùng để map label)." },
          { prop: "aria-invalid", type: "boolean", description: "Hiển thị trạng thái lỗi." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn truyền <code className="text-xs font-mono">id</code> cho Switch và <code className="text-xs font-mono">htmlFor</code> cho Label tương ứng để đảm bảo Accessibility.</li>
          <li>Sử dụng <code className="text-xs font-mono">defaultChecked</code> nếu bạn không cần quản lý trạng thái Switch bằng biến state.</li>
          <li>Nếu hành động tốn thời gian (ví dụ: gọi API), hãy cân nhắc hiển thị loading thay thế hoặc vô hiệu hóa Switch tạm thời.</li>
          <li>Cẩn thận với việc dùng Switch thay cho Checkbox — Switch nên đại diện cho các thiết lập có hiệu ứng ngay tức thì, trong khi Checkbox thường được dùng trong form để submit một lượt.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
