import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

export default function ResizablePage() {
  return (
    <div className="p-8 space-y-12 max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Resizable</h1>
        <p className="text-sm text-muted-foreground">
          Các nhóm bảng có thể thay đổi kích thước và bố cục có hỗ trợ phím tắt, xây dựng trên nền tảng react-resizable-panels.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock
          alwaysOpen
          code={`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup
} from "@/components/ui/resizable"`}
        />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock
          alwaysOpen
          code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>`}
        />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">ResizablePanelGroup</code> để chứa các <code className="text-xs font-mono">ResizablePanel</code>, ngăn cách bởi <code className="text-xs font-mono">ResizableHandle</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-md h-[200px] border rounded-lg overflow-hidden">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-muted/20">
                <span className="font-semibold text-sm text-muted-foreground">Một</span>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50} className="flex items-center justify-center bg-muted/40">
                <span className="font-semibold text-sm text-muted-foreground">Hai</span>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`<ResizablePanelGroup orientation="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Một</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Hai</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </ShowcaseSection>

      {/* ── 2. Vertical ── */}
      <ShowcaseSection title="2. Vertical">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">orientation="vertical"</code> cho chiều dọc.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm h-[300px] border rounded-lg overflow-hidden">
            <ResizablePanelGroup orientation="vertical">
              <ResizablePanel defaultSize={25} className="flex items-center justify-center bg-muted/20">
                <span className="font-semibold text-sm text-muted-foreground">Trên</span>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75} className="flex items-center justify-center bg-muted/40">
                <span className="font-semibold text-sm text-muted-foreground">Dưới</span>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`<ResizablePanelGroup orientation="vertical" className="min-h-[200px] max-w-md rounded-lg border">
  <ResizablePanel defaultSize={25}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Trên</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={75}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Dưới</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </ShowcaseSection>

      {/* ── 3. Handle with Visual ── */}
      <ShowcaseSection title="3. Handle with icon">
        <p className="text-sm text-muted-foreground">
          Thêm prop <code className="text-xs font-mono">withHandle</code> vào <code className="text-xs font-mono">ResizableHandle</code> để hiển thị thanh kéo trực quan.
        </p>
        <DemoBlock>
          <div className="w-full max-w-md h-[200px] border rounded-lg overflow-hidden">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize={30} className="flex items-center justify-center bg-muted/20">
                <span className="font-semibold text-sm text-muted-foreground">Sidebar</span>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70} className="flex items-center justify-center bg-muted/40">
                <span className="font-semibold text-sm text-muted-foreground">Content</span>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={30}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={70}>
    <div className="flex h-full items-center justify-center p-6">
      <span className="font-semibold">Content</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </ShowcaseSection>

      {/* ── 4. Nested ── */}
      <ShowcaseSection title="4. Lồng nhau (Nested)">
        <p className="text-sm text-muted-foreground">
          Bạn có thể lồng các <code className="text-xs font-mono">ResizablePanelGroup</code> để tạo bố cục phức tạp.
        </p>
        <DemoBlock>
          <div className="w-full max-w-lg h-[400px] border rounded-lg overflow-hidden">
            <ResizablePanelGroup orientation="horizontal">
              <ResizablePanel defaultSize={20} className="flex items-center justify-center bg-accent/20">
                <span className="font-semibold text-xs text-muted-foreground">Sidebar</span>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={80}>
                <ResizablePanelGroup orientation="vertical">
                  <ResizablePanel defaultSize={25} className="flex items-center justify-center bg-muted/20">
                    <span className="font-semibold text-xs text-muted-foreground">Header</span>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={75} className="flex items-center justify-center bg-muted/40">
                    <span className="font-semibold text-xs text-muted-foreground">Main Content</span>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={20}>Sidebar</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={80}>
    <ResizablePanelGroup orientation="vertical">
      <ResizablePanel defaultSize={25}>Header</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>Main Content</ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}
        />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <h3 className="text-sm font-semibold mb-2">ResizablePanelGroup</h3>
        <PropsTable rows={[
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng của nhóm bảng." },
          { prop: "autoSaveId", type: "string", description: "ID duy nhất để tự động lưu bố cục vào storage." },
          { prop: "storage", type: "Storage", default_: "localStorage", description: "Storage để lưu bố cục." },
        ]} />

        <h3 className="text-sm font-semibold mb-2 mt-6">ResizablePanel</h3>
        <PropsTable rows={[
          { prop: "defaultSize", type: "number", description: "Kích thước mặc định (0-100)." },
          { prop: "maxSize", type: "number", description: "Kích thước tối đa (0-100)." },
          { prop: "minSize", type: "number", description: "Kích thước tối thiểu (0-100)." },
          { prop: "onCollapse", type: "function", description: "Callback khi bảng bị xoay." },
          { prop: "collapsible", type: "boolean", description: "Cho phép bảng thu gọn về 0." },
        ]} />

        <h3 className="text-sm font-semibold mb-2 mt-6">ResizableHandle</h3>
        <PropsTable rows={[
          { prop: "withHandle", type: "boolean", default_: "false", description: "Hiển thị thêm thanh kéo trực quan." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa kéo." },
        ]} />
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Component này sử dụng <code className="text-xs font-mono">react-resizable-panels</code>, cung cấp khả năng truy cập phím tắt tuyệt vời.</li>
          <li>Kích thước được tính theo phần trăm (0-100), không phải pixel.</li>
          <li>Dùng <code className="text-xs font-mono">autoSaveId</code> nếu bạn muốn trình duyệt ghi nhớ bố cục sau khi load lại trang.</li>
          <li>Đảm bảo container của <code className="text-xs font-mono">ResizablePanelGroup</code> có kích thước (chiều cao/rộng) xác định.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
