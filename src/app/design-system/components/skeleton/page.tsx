import { Skeleton } from "@/components/ui/skeleton"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function SkeletonPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Skeleton</h1>
        <p className="text-sm text-muted-foreground">
          Dùng để hiển thị một bản xem trước (placeholder) của nội dung trong khi đang tải dữ liệu.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Skeleton } from "@/components/ui/skeleton"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Skeleton className="h-[20px] w-[100px] rounded-full" />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Skeleton</code> với các class Tailwind để định hình kích thước.
        </p>
        <DemoBlock>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 2. Card Skeleton ── */}
      <ShowcaseSection title="2. Card Skeleton">
        <p className="text-sm text-muted-foreground">
          Một ví dụ phức tạp hơn mô phỏng cấu trúc của một thẻ bài (Card).
        </p>
        <DemoBlock>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>
        `} />
      </ShowcaseSection>

      {/* ── 3. List Skeleton ── */}
      <ShowcaseSection title="3. List Skeleton">
        <p className="text-sm text-muted-foreground">
          Sử dụng cho danh sách các mục.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="size-10 shrink-0 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-3 w-1/3" />
                  <Skeleton className="h-3 w-full" />
                </div>
              </div>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`
<div className="space-y-4">
  {[1, 2, 3].map((i) => (
    <div key={i} className="flex items-center gap-3">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-3 w-full" />
      </div>
    </div>
  ))}
</div>
        `} />
      </ShowcaseSection>

      {/* ── 4. Props Reference ── */}
      <ShowcaseSection title="4. Props Reference">
        <PropsTable rows={[
          {
            prop: "className",
            type: "string",
            description: "Dùng để tùy chỉnh kích thước (w-*, h-*), hình dáng (rounded-*) và màu sắc nếu cần."
          },
          {
            prop: "...props",
            type: "React.ComponentProps<'div'>",
            description: "Tất cả các thuộc tính khác của thẻ div."
          }
        ]} />
      </ShowcaseSection>

      {/* ── 5. Lưu ý ── */}
      <ShowcaseSection title="5. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Skeleton mặc định có hiệu ứng <code className="text-xs font-mono">animate-pulse</code> để tạo cảm giác đang tải.</li>
          <li>Nên sử dụng các kích thước tương đồng với nội dung thật để tránh hiện tượng nhảy layout khi dữ liệu load xong (Layout Shift).</li>
          <li>Có thể thay đổi màu nền bằng class <code className="text-xs font-mono">bg-*</code> (mặc định là <code className="text-xs font-mono">bg-muted</code>).</li>
          <li>Cần đảm bảo tính tương phản và độ truy cập (Accessibility) khi sử dụng các màu tùy chỉnh.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
