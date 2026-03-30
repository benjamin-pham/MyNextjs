import { Alert, AlertTitle, AlertDescription, AlertAction } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertTriangleIcon } from "lucide-react"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"
/* ─── icons ──────────────────────────────────────────────────────────────── */

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const WarningIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function AlertPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Alert</h1>
        <p className="text-sm text-muted-foreground">
          Hiển thị thông báo quan trọng cho người dùng dưới dạng inline, không làm gián đoạn luồng thao tác.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Alert>
  <InfoIcon />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
  <AlertAction>
    <Button variant="outline">Enable</Button>
  </AlertAction>
</Alert>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Alert className="w-full">
            <AlertTitle>Tiêu đề thông báo</AlertTitle>
            <AlertDescription>Đây là nội dung mô tả thêm chi tiết về thông báo.</AlertDescription>
          </Alert>
        </DemoBlock>
        <CodeBlock code={`
<Alert>
  <AlertTitle>Tiêu đề thông báo</AlertTitle>
  <AlertDescription>Nội dung mô tả.</AlertDescription>
</Alert>
        `} />
      </ShowcaseSection>

      {/* ── 2. Variants ── */}
      <ShowcaseSection title="2. Variants">
        <p className="text-sm text-muted-foreground">
          Có 2 variant: <code className="text-xs font-mono">default</code> và <code className="text-xs font-mono">destructive</code>.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full">
            <Alert>
              <AlertTitle>Default</AlertTitle>
              <AlertDescription>Thông báo thông thường không kèm trạng thái đặc biệt.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertTitle>Destructive</AlertTitle>
              <AlertDescription>Có lỗi xảy ra. Vui lòng kiểm tra lại thông tin của bạn.</AlertDescription>
            </Alert>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Alert>...</Alert>
<Alert variant="destructive">...</Alert>
        `} />
      </ShowcaseSection>

      {/* ── 3. Với icon ── */}
      <ShowcaseSection title="3. Với icon">
        <p className="text-sm text-muted-foreground">
          Đặt bất kỳ <code className="text-xs font-mono">&lt;svg&gt;</code> nào làm con đầu tiên của <code className="text-xs font-mono">&lt;Alert&gt;</code>. Layout tự chuyển sang 2 cột, icon span 2 hàng.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full">
            <Alert>
              <InfoIcon />
              <AlertTitle>Thông tin</AlertTitle>
              <AlertDescription>Icon tự động căn chỉnh với tiêu đề và mô tả.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <WarningIcon />
              <AlertTitle>Cảnh báo</AlertTitle>
              <AlertDescription>Hành động này không thể hoàn tác. Hãy cân nhắc trước khi tiếp tục.</AlertDescription>
            </Alert>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Alert>
  <InfoIcon />          {/* SVG con đầu tiên → icon */}
  <AlertTitle>Thông tin</AlertTitle>
  <AlertDescription>Mô tả.</AlertDescription>
</Alert>
        `} />
      </ShowcaseSection>

      {/* ── 4. Với AlertAction ── */}
      <ShowcaseSection title="4. Với AlertAction">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AlertAction</code> hiển thị ở góc phải. Alert tự mở rộng padding-right khi có slot này.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full">
            <Alert>
              <AlertTitle>Cập nhật khả dụng</AlertTitle>
              <AlertDescription>Phiên bản mới đã sẵn sàng để cài đặt.</AlertDescription>
              <AlertAction>
                <Button size="xs" variant="outline">Cập nhật</Button>
              </AlertAction>
            </Alert>
            <Alert variant="destructive">
              <WarningIcon />
              <AlertTitle>Phiên đăng nhập hết hạn</AlertTitle>
              <AlertDescription>Vui lòng đăng nhập lại để tiếp tục.</AlertDescription>
              <AlertAction>
                <Button size="xs" variant="destructive">Đăng nhập</Button>
              </AlertAction>
            </Alert>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Alert>
  <AlertTitle>Cập nhật khả dụng</AlertTitle>
  <AlertDescription>Phiên bản mới đã sẵn sàng.</AlertDescription>
  <AlertAction>
    <Button size="xs" variant="outline">Cập nhật</Button>
  </AlertAction>
</Alert>
        `} />
      </ShowcaseSection>

      {/* ── 5. Title only / Description only ── */}
      <ShowcaseSection title="5. Chỉ title hoặc chỉ description">
        <p className="text-sm text-muted-foreground">
          Cả <code className="text-xs font-mono">AlertTitle</code> và <code className="text-xs font-mono">AlertDescription</code> đều tuỳ chọn.
        </p>
        <DemoBlock>
          <div className="space-y-3 w-full">
            <Alert>
              <AlertTitle>Chỉ có tiêu đề</AlertTitle>
            </Alert>
            <Alert>
              <AlertDescription>Chỉ có mô tả, không có tiêu đề — phù hợp với thông báo ngắn gọn.</AlertDescription>
            </Alert>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Alert><AlertTitle>Chỉ có tiêu đề</AlertTitle></Alert>
<Alert><AlertDescription>Chỉ có mô tả.</AlertDescription></Alert>
        `} />
      </ShowcaseSection>

      {/* ── 6. Link trong Alert ── */}
      <ShowcaseSection title="6. Link trong Alert">
        <p className="text-sm text-muted-foreground">
          Các thẻ <code className="text-xs font-mono">&lt;a&gt;</code> bên trong <code className="text-xs font-mono">AlertTitle</code> và <code className="text-xs font-mono">AlertDescription</code> tự nhận style underline.
        </p>
        <DemoBlock>
          <Alert className="w-full">
            <InfoIcon />
            <AlertTitle>Xem <a href="#">tài liệu hướng dẫn</a> để biết thêm</AlertTitle>
            <AlertDescription>
              Chi tiết cấu hình có tại <a href="#">trang cài đặt</a> hoặc liên hệ <a href="#">support</a>.
            </AlertDescription>
          </Alert>
        </DemoBlock>
        <CodeBlock code={`
<Alert>
  <AlertTitle>Xem <a href="/docs">tài liệu</a> để biết thêm</AlertTitle>
  <AlertDescription>Chi tiết tại <a href="/settings">trang cài đặt</a>.</AlertDescription>
</Alert>
        `} />
      </ShowcaseSection>

      {/* ── 7. Custom Colors ── */}
      <ShowcaseSection title="7. Custom Colors">
        <p className="text-sm text-muted-foreground">
          Bạn có thể tuỳ chỉnh màu sắc bản thân bằng cách sử dụng các class Tailwind trực tiếp trên <code className="text-xs font-mono">&lt;Alert&gt;</code>.
        </p>
        <DemoBlock>
          <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
            <AlertTriangleIcon />
            <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
            <AlertDescription>
              Renew now to avoid service interruption or upgrade to a paid plan to
              continue using the service.
            </AlertDescription>
          </Alert>
        </DemoBlock>
        <CodeBlock code={`
<Alert className="border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
  <AlertTriangleIcon />
  <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
  <AlertDescription>
    Renew now to avoid service interruption...
  </AlertDescription>
</Alert>
        `} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;Alert&gt;</h3>
            <PropsTable rows={[
              { prop: "variant", type: '"default" | "destructive"', default_: '"default"', description: "Kiểu hiển thị. destructive dùng cho lỗi và cảnh báo nguy hiểm." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung cho wrapper." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertTitle&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Tiêu đề. Hỗ trợ inline link với <a>." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertDescription&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Nội dung mô tả. Hỗ trợ inline link với <a> và nhiều <p>." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AlertAction&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Nội dung action (Button, link, v.v.) hiển thị ở góc phải." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung (mặc định: absolute top-2 right-2)." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Icon phải là <code className="text-xs font-mono">&lt;svg&gt;</code> đặt làm con đầu tiên trực tiếp của <code className="text-xs font-mono">&lt;Alert&gt;</code> — không bọc thêm wrapper.</li>
          <li>SVG không cần set <code className="text-xs font-mono">{'className="size-4"'}</code> vì Alert tự áp dụng khi không có class size.</li>
          <li>Khi dùng <code className="text-xs font-mono">AlertAction</code>, tránh đặt action quá rộng vì chỉ có <code className="text-xs font-mono">pr-18</code> padding.</li>
          <li>Alert render <code className="text-xs font-mono">{'role="alert"'}</code> — screen reader sẽ đọc ngay khi xuất hiện trong DOM.</li>
          <li>Không dùng Alert cho thông báo toast hay modal — chỉ dùng cho thông báo inline gắn liền với nội dung trang.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
