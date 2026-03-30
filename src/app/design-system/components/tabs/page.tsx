import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function TabsPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Tabs</h1>
        <p className="text-sm text-muted-foreground">
          Một tập hợp các lớp nội dung phân tầng — được gọi là các panel — trong đó mỗi lần chỉ có một panel được hiển thị.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
        `} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4 p-4 border rounded-md">
              <p className="text-sm text-muted-foreground">Make changes to your account here. Click save when you're done.</p>
            </TabsContent>
            <TabsContent value="password" className="mt-4 p-4 border rounded-md">
              <p className="text-sm text-muted-foreground">Change your password here. After saving, you'll be logged out.</p>
            </TabsContent>
          </Tabs>
        </DemoBlock>
        <CodeBlock code={`
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">...</TabsContent>
  <TabsContent value="password">...</TabsContent>
</Tabs>
        `} />
      </ShowcaseSection>

      {/* ── 2. Variants (TabsList) ── */}
      <ShowcaseSection title="2. Variants">
        <p className="text-sm text-muted-foreground">
          Thành phần <code className="text-xs font-mono">TabsList</code> hỗ trợ hai variant: <code className="text-xs font-mono">default</code> (có nền xám) và <code className="text-xs font-mono">line</code> (dạng thanh gạch chân).
        </p>
        <DemoBlock>
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-medium uppercase text-muted-foreground">Default</span>
              <Tabs defaultValue="tab1">
                <TabsList>
                  <TabsTrigger value="tab1">Tab One</TabsTrigger>
                  <TabsTrigger value="tab2">Tab Two</TabsTrigger>
                  <TabsTrigger value="tab3">Tab Three</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="space-y-4">
              <span className="text-xs font-medium uppercase text-muted-foreground">Line Variant</span>
              <Tabs defaultValue="tab1">
                <TabsList variant="line">
                  <TabsTrigger value="tab1">Tab One</TabsTrigger>
                  <TabsTrigger value="tab2">Tab Two</TabsTrigger>
                  <TabsTrigger value="tab3">Tab Three</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
{/* Default Variant */}
<TabsList>
  <TabsTrigger value="tab1">Tab One</TabsTrigger>
</TabsList>

{/* Line Variant */}
<TabsList variant="line">
  <TabsTrigger value="tab1">Tab One</TabsTrigger>
</TabsList>
        `} />
      </ShowcaseSection>

      {/* ── 3. Orientation (Vertical) ── */}
      <ShowcaseSection title="3. Hướng hiển thị (Orientation)">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">orientation="vertical"</code> trên <code className="text-xs font-mono">Tabs</code> để hiển thị danh sách tab theo chiều dọc.
        </p>
        <DemoBlock>
          <Tabs defaultValue="general" orientation="vertical" className="w-[400px]">
            <TabsList className="w-40">
              <TabsTrigger value="general">Cài đặt chung</TabsTrigger>
              <TabsTrigger value="account">Tài khoản</TabsTrigger>
              <TabsTrigger value="security">Bảo mật</TabsTrigger>
              <TabsTrigger value="notifications">Thông báo</TabsTrigger>
            </TabsList>
            <div className="flex-1 p-4 border rounded-md">
              <TabsContent value="general">Nội dung cài đặt chung...</TabsContent>
              <TabsContent value="account">Nội dung tài khoản...</TabsContent>
              <TabsContent value="security">Nội dung bảo mật...</TabsContent>
              <TabsContent value="notifications">Nội dung thông báo...</TabsContent>
            </div>
          </Tabs>
        </DemoBlock>
        <CodeBlock code={`
<Tabs defaultValue="general" orientation="vertical">
  <TabsList className="w-40">
    <TabsTrigger value="general">Cài đặt chung</TabsTrigger>
    {/* ... */}
  </TabsList>
  <div className="flex-1">
    <TabsContent value="general">...</TabsContent>
    {/* ... */}
  </div>
</Tabs>
        `} />
      </ShowcaseSection>

      {/* ── 4. Với Icon ── */}
      <ShowcaseSection title="4. Với Icon">
        <p className="text-sm text-muted-foreground">
          Có thể thêm icon vào <code className="text-xs font-mono">TabsTrigger</code>.
        </p>
        <DemoBlock>
          <Tabs defaultValue="home">
            <TabsList>
              <TabsTrigger value="home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Trang chủ
              </TabsTrigger>
              <TabsTrigger value="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                Tìm kiếm
              </TabsTrigger>
              <TabsTrigger value="settings">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.72V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.17a2 2 0 0 1 1-1.74l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                Cài đặt
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </DemoBlock>
        <CodeBlock code={`
<TabsTrigger value="home">
  <HomeIcon className="mr-2 h-4 w-4" />
  Trang chủ
</TabsTrigger>
        `} />
      </ShowcaseSection>

      {/* ── 5. Disabled State ── */}
      <ShowcaseSection title="5. Trạng thái vô hiệu (Disabled)">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">disabled</code> vào <code className="text-xs font-mono">TabsTrigger</code> để ngăn tương tác với tab đó.
        </p>
        <DemoBlock>
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Đang hoạt động</TabsTrigger>
              <TabsTrigger value="disabled" disabled>Bị khóa</TabsTrigger>
              <TabsTrigger value="other">Tùy chọn khác</TabsTrigger>
            </TabsList>
          </Tabs>
        </DemoBlock>
        <CodeBlock code={`<TabsTrigger value="disabled" disabled>Bị khóa</TabsTrigger>`} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">Tabs (Root)</h4>
            <PropsTable rows={[
              { prop: "defaultValue", type: "string", description: "Giá trị của tab được chọn mặc định." },
              { prop: "value", type: "string", description: "Giá trị của tab đang được chọn (dùng cho controlled state)." },
              { prop: "onValueChange", type: "(value: string) => void", description: "Callback khi thay đổi tab." },
              { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng hiển thị của tabs." },
              { prop: "activationMode", type: '"automatic" | "manual"', default_: '"automatic"', description: "Cách kích hoạt tab khi di chuyển bằng bàn phím." },
            ]} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">TabsList</h4>
            <PropsTable rows={[
              { prop: "variant", type: '"default" | "line"', default_: '"default"', description: "Kiểu dáng hiển thị của danh sách tabs." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">TabsTrigger</h4>
            <PropsTable rows={[
              { prop: "value", type: "string", description: "Giá trị duy nhất định danh cho tab này." },
              { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa tab." },
              { prop: "asChild", type: "boolean", default_: "false", description: "Render thành thẻ con thay vì <button>." },
            ]} />
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2">TabsContent</h4>
            <PropsTable rows={[
              { prop: "value", type: "string", description: "Giá trị khớp với TabsTrigger để hiển thị nội dung này." },
              { prop: "forceMount", type: "boolean", description: "Buộc render nội dung ngay cả khi không được chọn." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Dùng <code className="text-xs font-mono">orientation="vertical"</code> kết hợp với các class layout như <code className="text-xs font-mono">flex</code> để tạo giao diện tab dọc.</li>
          <li>Prop <code className="text-xs font-mono">asChild</code> cho phép bạn sử dụng <code className="text-xs font-mono">Link</code> từ <code className="text-xs font-mono">next/link</code> hoặc các thẻ khác làm trigger.</li>
          <li>Đảm bảo mỗi <code className="text-xs font-mono">TabsTrigger</code> và <code className="text-xs font-mono">TabsContent</code> tương ứng có cùng thuộc tính <code className="text-xs font-mono">value</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
