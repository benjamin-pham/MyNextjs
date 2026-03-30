import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

const ratios = [
  { label: "16 / 9", ratio: 16 / 9, note: "Widescreen video" },
  { label: "4 / 3", ratio: 4 / 3, note: "Màn hình cổ điển" },
  { label: "1 / 1", ratio: 1, note: "Hình vuông" },
  { label: "3 / 4", ratio: 3 / 4, note: "Portrait" },
  { label: "21 / 9", ratio: 21 / 9, note: "Ultrawide" },
  { label: "9 / 16", ratio: 9 / 16, note: "Dọc (Reels / Shorts)" },
]

export default function AspectRatioPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Aspect Ratio</h1>
        <p className="text-sm text-muted-foreground">
          Giữ tỉ lệ chiều rộng / chiều cao cố định cho bất kỳ nội dung nào — hình ảnh, video, embed hay layout tuỳ chỉnh.
          Xây dựng trên{" "}
          <code className="text-xs">radix-ui/AspectRatioPrimitive</code>.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { AspectRatio } from "@/components/ui/aspect-ratio"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <DemoBlock>
          <div className="max-w-sm w-full">
            <AspectRatio ratio={16 / 9}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                alt="Demo image"
                className="h-full w-full rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </DemoBlock>
        <CodeBlock alwaysOpen code={`<AspectRatio ratio={16 / 9}>
  <Image src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Truyền prop <code className="text-xs font-mono">ratio</code> dưới dạng số (chiều rộng / chiều cao).
          Nội dung bên trong cần có <code className="text-xs font-mono">h-full w-full</code> để lấp đầy khung.
        </p>
        <DemoBlock>
          <div className="max-w-sm w-full">
            <AspectRatio ratio={16 / 9}>
              <div className="flex h-full w-full items-center justify-center rounded-md border bg-muted text-sm text-muted-foreground">
                16 / 9
              </div>
            </AspectRatio>
          </div>
        </DemoBlock>
        <CodeBlock code={`
import { AspectRatio } from "@/components/ui/aspect-ratio"

<AspectRatio ratio={16 / 9}>
  <div className="h-full w-full ...">Nội dung</div>
</AspectRatio>
        `} />
      </ShowcaseSection>

      {/* ── 2. Tỉ lệ phổ biến ── */}
      <ShowcaseSection title="2. Tỉ lệ phổ biến">
        <DemoBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {ratios.map(({ label, ratio, note }) => (
              <div key={label} className="space-y-2">
                <AspectRatio ratio={ratio}>
                  <div className="flex h-full w-full items-center justify-center rounded-md border bg-muted text-xs text-muted-foreground">
                    {label}
                  </div>
                </AspectRatio>
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">{label}</span> — {note}
                </p>
              </div>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`
{/* ratio nhận số thực — thường dùng biểu thức chia cho dễ đọc */}
<AspectRatio ratio={16 / 9}>…</AspectRatio>   {/* widescreen */}
<AspectRatio ratio={4 / 3}>…</AspectRatio>    {/* classic    */}
<AspectRatio ratio={1}>…</AspectRatio>         {/* square     */}
<AspectRatio ratio={9 / 16}>…</AspectRatio>   {/* portrait   */}
        `} />
      </ShowcaseSection>

      {/* ── 3. Với hình ảnh ── */}
      <ShowcaseSection title="3. Với hình ảnh">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">object-cover</code> để ảnh luôn lấp đầy khung mà không bị méo,
          dù kích thước gốc khác với tỉ lệ chỉ định.
        </p>
        <DemoBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="space-y-2">
              <AspectRatio ratio={16 / 9}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
              <p className="text-xs text-muted-foreground">16 / 9 — object-cover</p>
            </div>
            <div className="space-y-2">
              <AspectRatio ratio={1}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                  alt="Photo by Drew Beamer"
                  className="h-full w-full rounded-md object-cover"
                />
              </AspectRatio>
              <p className="text-xs text-muted-foreground">1 / 1 — object-cover</p>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<AspectRatio ratio={16 / 9}>
  <img
    src="/photo.jpg"
    alt="..."
    className="h-full w-full rounded-md object-cover"
  />
</AspectRatio>
        `} />
      </ShowcaseSection>

      {/* ── 4. Với nội dung tuỳ chỉnh ── */}
      <ShowcaseSection title="4. Với nội dung tuỳ chỉnh">
        <p className="text-sm text-muted-foreground">
          Bất kỳ nội dung nào cũng có thể đặt bên trong — embed video, placeholder, overlay, v.v.
        </p>
        <DemoBlock>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg w-full">
            <div className="space-y-2">
              <AspectRatio ratio={16 / 9}>
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-md border bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span className="text-xs font-medium">Play Video</span>
                </div>
              </AspectRatio>
              <p className="text-xs text-muted-foreground">Video thumbnail overlay</p>
            </div>

            <div className="space-y-2">
              <AspectRatio ratio={4 / 3}>
                <div className="flex h-full w-full items-center justify-center gap-2 rounded-md border bg-muted text-muted-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-xs">Bản đồ</span>
                </div>
              </AspectRatio>
              <p className="text-xs text-muted-foreground">Map embed placeholder</p>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
{/* Gradient overlay */}
<AspectRatio ratio={16 / 9}>
  <div className="flex h-full w-full items-center justify-center
                  rounded-md bg-gradient-to-br from-violet-500 to-indigo-500 text-white">
    <PlayIcon />
  </div>
</AspectRatio>

{/* iframe embed — ví dụ YouTube */}
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    className="h-full w-full rounded-md"
    allow="autoplay; fullscreen"
  />
</AspectRatio>
        `} />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold font-mono">&lt;AspectRatio&gt;</h3>
          <PropsTable rows={[
            { prop: "ratio", type: "number", default_: "1", description: "Tỉ lệ chiều rộng / chiều cao. Ví dụ: 16/9, 4/3, 1. Mặc định là 1 (hình vuông)." },
            { prop: "children", type: "ReactNode", description: "Nội dung bên trong — phải có className h-full w-full để lấp đầy khung." },
            { prop: "className", type: "string", description: "Class Tailwind bổ sung cho wrapper ngoài cùng." },
          ]} />
        </div>
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Nội dung con <strong>phải có</strong> <code className="text-xs font-mono">className=&quot;h-full w-full&quot;</code> để lấp đầy khung — nếu thiếu, nội dung sẽ không stretch đúng tỉ lệ.</li>
          <li>Với <code className="text-xs font-mono">&lt;img&gt;</code>, luôn thêm <code className="text-xs font-mono">object-cover</code> hoặc <code className="text-xs font-mono">object-contain</code> để tránh ảnh bị méo.</li>
          <li><code className="text-xs font-mono">AspectRatio</code> hoạt động bằng cách đặt <code className="text-xs font-mono">padding-bottom</code> tương đối — wrapper cha cần có <code className="text-xs font-mono">position: relative</code> (đã được xử lý tự động).</li>
          <li>Không cần set chiều cao cố định cho wrapper — chiều cao được tính tự động từ <code className="text-xs font-mono">ratio</code> và chiều rộng hiện tại.</li>
          <li>Kết hợp với <code className="text-xs font-mono">max-w-*</code> trên wrapper ngoài để giới hạn kích thước tối đa trong khi vẫn giữ tỉ lệ responsive.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
