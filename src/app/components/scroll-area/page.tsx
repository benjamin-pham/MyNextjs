import * as React from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── sample data ─────────────────────────────────────────────────────────── */

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)

interface Album {
  artist: string
  art: string
}

const WORKS: Album[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465865523598-a834aac5d3ad?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1492681210078-2731d55ad9a9?auto=format&fit=crop&w=300&q=80",
  },
]

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function ScrollAreaPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Scroll Area</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần bao bọc vùng cuộn, cung cấp các thanh cuộn có thể tạo kiểu tùy chỉnh cho các trình duyệt khác nhau.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={'import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"'} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={'<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">\n  {content}\n</ScrollArea>'} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Một vùng cuộn dọc cơ bản với chiều cao cố định.
        </p>
        <DemoBlock>
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {TAGS.map((tag) => (
                <React.Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <div className="my-2 h-px bg-border" />
                </React.Fragment>
              ))}
            </div>
          </ScrollArea>
        </DemoBlock>
        <CodeBlock code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {TAGS.map((tag) => (
      <React.Fragment key={tag}>
        <div className="text-sm">{tag}</div>
        <div className="my-2 h-px bg-border" />
      </React.Fragment>
    ))}
  </div>
</ScrollArea>`} />
      </ShowcaseSection>

      {/* ── 2. Cuộn ngang ── */}
      <ShowcaseSection title="2. Cuộn ngang">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ScrollBar</code> với <code className="text-xs font-mono">{'orientation="horizontal"'}</code> để hỗ trợ cuộn ngang.
        </p>
        <DemoBlock>
          <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {WORKS.map((artwork) => (
                <figure key={artwork.artist} className="shrink-0">
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={artwork.art}
                      alt={`Photo by ${artwork.artist}`}
                      className="aspect-[3/4] h-fit w-fit object-cover"
                      width={300}
                      height={400}
                    />
                  </div>
                  <figcaption className="pt-2 text-xs text-muted-foreground">
                    Photo by <span className="font-semibold text-foreground">{artwork.artist}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </DemoBlock>
        <CodeBlock code={`<ScrollArea className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {WORKS.map((artwork) => (
      <figure key={artwork.artist} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img
            src={artwork.art}
            alt={"Photo by " + artwork.artist}
            className="aspect-[3/4] h-fit w-fit object-cover"
            width={300}
            height={400}
          />
        </div>
        <figcaption className="pt-2 text-xs text-muted-foreground">
          Photo by <span className="font-semibold text-foreground">{artwork.artist}</span>
        </figcaption>
      </figure>
    ))}
  </div>
  <ScrollBar orientation="horizontal" />
</ScrollArea>`} />
      </ShowcaseSection>

      {/* ── 3. Props reference ── */}
      <ShowcaseSection title="3. Props reference">
        <PropsTable rows={[
          { prop: "type", type: '"auto" | "always" | "scroll" | "hover"', default_: '"hover"', description: "Quyết định khi nào các thanh cuộn sẽ hiển thị." },
          { prop: "scrollHideDelay", type: "number", default_: "600", description: "Thời gian chờ (ms) trước khi thanh cuộn ẩn (chỉ dùng với type='hover' hoặc type='scroll')." },
          { prop: "dir", type: '"ltr" | "rtl"', default_: '"ltr"', description: "Hướng của vùng cuộn." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho Root container." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Render thành thẻ con thay vì div." },
        ]} />
      </ShowcaseSection>

      {/* ── 4. Lưu ý ── */}
      <ShowcaseSection title="4. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn cung cấp kích thước (chiều cao/rộng) cho <code className="text-xs font-mono">ScrollArea</code> hoặc lớp cha của nó để xác định vùng có thể cuộn.</li>
          <li>Thanh cuộn mặc định là dọc. Nếu muốn cuộn ngang, bạn cần thêm <code className="text-xs font-mono">&lt;ScrollBar orientation="horizontal" /&gt;</code> vào bên trong <code className="text-xs font-mono">ScrollArea</code>.</li>
          <li>Thành phần sử dụng Radix UI ScrollArea dưới nền, cung cấp trải nghiệm cuộn mượt mà trên mọi thiết bị và trình duyệt.</li>
          <li>Đặc biệt hữu ích khi bạn muốn có các thanh cuộn trông đồng nhất trên Windows và macOS/Mobile.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
