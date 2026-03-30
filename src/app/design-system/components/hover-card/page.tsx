"use client"

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" />
  </svg>
)

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function HoverCardPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Hover Card</h1>
        <p className="text-sm text-muted-foreground">
          Hiển thị nội dung bổ sung khi người dùng hover vào một phần tử — thường dùng để preview thông tin mà không cần điều hướng.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<HoverCard>
  <HoverCardTrigger>Hover vào đây</HoverCardTrigger>
  <HoverCardContent>
    Nội dung hiển thị khi hover.
  </HoverCardContent>
</HoverCard>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <HoverCard>
            <HoverCardTrigger className="underline underline-offset-4 cursor-pointer text-sm font-medium">
              @shadcn
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-full bg-muted flex items-center justify-center text-sm font-bold">S</div>
                  <div>
                    <p className="text-sm font-semibold">@shadcn</p>
                    <p className="text-xs text-muted-foreground">shadcn.com</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tác giả của shadcn/ui — thư viện component dựa trên Radix UI và Tailwind CSS.
                </p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <CalendarIcon />
                  Tham gia tháng 12 năm 2022
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </DemoBlock>
        <CodeBlock code={`<HoverCard>
  <HoverCardTrigger className="underline underline-offset-4 cursor-pointer">
    @shadcn
  </HoverCardTrigger>
  <HoverCardContent>
    <div className="space-y-2">
      <p className="text-sm font-semibold">@shadcn</p>
      <p className="text-sm text-muted-foreground">
        Tác giả của shadcn/ui.
      </p>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <CalendarIcon />
        Tham gia tháng 12 năm 2022
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`} />
      </ShowcaseSection>

      {/* ── 2. align ── */}
      <ShowcaseSection title="2. Căn chỉnh — align">
        <p className="text-sm text-muted-foreground">
          Prop <code className="text-xs font-mono">align</code> trên <code className="text-xs font-mono">HoverCardContent</code> nhận{" "}
          <code className="text-xs font-mono">"start"</code>, <code className="text-xs font-mono">"center"</code> (mặc định), hoặc <code className="text-xs font-mono">"end"</code>.
        </p>
        <DemoBlock>
          <div className="flex gap-6">
            {(["start", "center", "end"] as const).map((align) => (
              <HoverCard key={align}>
                <HoverCardTrigger className="underline underline-offset-4 cursor-pointer text-sm">
                  {align}
                </HoverCardTrigger>
                <HoverCardContent align={align}>
                  <p className="text-sm">Căn theo <strong>{align}</strong></p>
                  <p className="text-xs text-muted-foreground mt-1">align="{align}"</p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<HoverCardContent align="start">...</HoverCardContent>
<HoverCardContent align="center">...</HoverCardContent>
<HoverCardContent align="end">...</HoverCardContent>`} />
      </ShowcaseSection>

      {/* ── 3. side ── */}
      <ShowcaseSection title="3. Vị trí — side">
        <p className="text-sm text-muted-foreground">
          Prop <code className="text-xs font-mono">side</code> xác định hướng mở của card:{" "}
          <code className="text-xs font-mono">"top"</code>, <code className="text-xs font-mono">"right"</code>, <code className="text-xs font-mono">"bottom"</code> (mặc định), <code className="text-xs font-mono">"left"</code>.
        </p>
        <DemoBlock>
          <div className="grid grid-cols-2 gap-6">
            {(["top", "right", "bottom", "left"] as const).map((side) => (
              <HoverCard key={side}>
                <HoverCardTrigger className="underline underline-offset-4 cursor-pointer text-sm">
                  side="{side}"
                </HoverCardTrigger>
                <HoverCardContent side={side}>
                  <p className="text-sm">Mở về phía <strong>{side}</strong></p>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<HoverCardContent side="top">...</HoverCardContent>
<HoverCardContent side="right">...</HoverCardContent>
<HoverCardContent side="bottom">...</HoverCardContent>
<HoverCardContent side="left">...</HoverCardContent>`} />
      </ShowcaseSection>

      {/* ── 4. openDelay / closeDelay ── */}
      <ShowcaseSection title="4. Độ trễ — openDelay / closeDelay">
        <p className="text-sm text-muted-foreground">
          Mặc định <code className="text-xs font-mono">openDelay=700ms</code>, <code className="text-xs font-mono">closeDelay=300ms</code>. Đặt trên <code className="text-xs font-mono">HoverCard</code> (root).
        </p>
        <DemoBlock>
          <div className="flex gap-8">
            <HoverCard openDelay={0} closeDelay={0}>
              <HoverCardTrigger className="underline underline-offset-4 cursor-pointer text-sm">
                Không trễ (0ms)
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm font-medium">openDelay=0</p>
                <p className="text-xs text-muted-foreground">Mở ngay lập tức</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard openDelay={700}>
              <HoverCardTrigger className="underline underline-offset-4 cursor-pointer text-sm">
                Trễ mặc định (700ms)
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm font-medium">openDelay=700</p>
                <p className="text-xs text-muted-foreground">Mặc định của Radix</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Mở ngay lập tức */}
<HoverCard openDelay={0} closeDelay={0}>
  ...
</HoverCard>

{/* Trễ tuỳ chỉnh */}
<HoverCard openDelay={200} closeDelay={100}>
  ...
</HoverCard>`} />
      </ShowcaseSection>

      {/* ── 5. asChild trên Trigger ── */}
      <ShowcaseSection title="5. asChild trên HoverCardTrigger">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">asChild</code> để HoverCardTrigger wrap thẻ con tuỳ ý thay vì render thêm thẻ <code className="text-xs font-mono">&lt;span&gt;</code>.
        </p>
        <DemoBlock>
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <a href="#" className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4 text-blue-600 dark:text-blue-400">
                <LinkIcon />
                shadcn/ui docs
              </a>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="text-sm font-semibold">shadcn/ui</p>
              <p className="text-xs text-muted-foreground mt-1">
                Thư viện component mã nguồn mở, có thể copy trực tiếp vào dự án.
              </p>
            </HoverCardContent>
          </HoverCard>
        </DemoBlock>
        <CodeBlock code={`<HoverCardTrigger asChild>
  <a href="/docs" className="underline">
    shadcn/ui docs
  </a>
</HoverCardTrigger>`} />
      </ShowcaseSection>

      {/* ── 6. Ví dụ thực tế ── */}
      <ShowcaseSection title="6. Ví dụ thực tế">
        <p className="text-sm text-muted-foreground">
          HoverCard phù hợp để hiển thị preview thông tin người dùng, repository, hoặc bài viết.
        </p>
        <DemoBlock>
          <div className="space-y-4 text-sm w-full max-w-sm">
            {/* mention trong bình luận */}
            <p className="text-muted-foreground leading-relaxed">
              Bình luận bởi{" "}
              <HoverCard openDelay={0}>
                <HoverCardTrigger asChild>
                  <button className="font-medium text-foreground underline underline-offset-2 cursor-pointer">
                    @nguyenvan
                  </button>
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <div className="flex items-start gap-3">
                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-bold text-blue-700 dark:text-blue-300">N</div>
                    <div className="space-y-1 min-w-0">
                      <p className="text-sm font-semibold">Nguyễn Văn A</p>
                      <p className="text-xs text-muted-foreground">@nguyenvan · Senior Developer</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        Lập trình viên full-stack với 5 năm kinh nghiệm về React và Node.js.
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground pt-1">
                        <span className="flex items-center gap-1"><UsersIcon />128 followers</span>
                        <span className="flex items-center gap-1"><CalendarIcon />Thg 3, 2020</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>{" "}
              — thành phần này rất hữu ích!
            </p>

            {/* link đến repo */}
            <p className="text-muted-foreground leading-relaxed">
              Xem thêm tại{" "}
              <HoverCard openDelay={0}>
                <HoverCardTrigger asChild>
                  <a href="#" className="font-mono text-xs font-medium text-foreground underline underline-offset-2">
                    shadcn/ui
                  </a>
                </HoverCardTrigger>
                <HoverCardContent align="start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded bg-muted flex items-center justify-center">
                        <LinkIcon />
                      </div>
                      <div>
                        <p className="text-sm font-semibold">shadcn/ui</p>
                        <p className="text-xs text-muted-foreground">github.com/shadcn-ui/ui</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span>⭐ 78k</span>
                      <span>TypeScript</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              .
            </p>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Preview người dùng khi hover mention */}
<HoverCard openDelay={0}>
  <HoverCardTrigger asChild>
    <button className="font-medium underline">@nguyenvan</button>
  </HoverCardTrigger>
  <HoverCardContent align="start">
    <div className="flex items-start gap-3">
      <Avatar />
      <div>
        <p className="font-semibold">Nguyễn Văn A</p>
        <p className="text-xs text-muted-foreground">Senior Developer</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`} />
      </ShowcaseSection>

      {/* ── 7. Props reference ── */}
      <ShowcaseSection title="7. Props reference">
        <p className="text-sm font-medium mb-2">HoverCard (root)</p>
        <PropsTable rows={[
          { prop: "openDelay", type: "number", default_: "700", description: "Thời gian trễ (ms) trước khi card mở." },
          { prop: "closeDelay", type: "number", default_: "300", description: "Thời gian trễ (ms) trước khi card đóng." },
          { prop: "open", type: "boolean", description: "Kiểm soát trạng thái mở/đóng từ bên ngoài (controlled)." },
          { prop: "defaultOpen", type: "boolean", default_: "false", description: "Trạng thái mở mặc định (uncontrolled)." },
          { prop: "onOpenChange", type: "(open: boolean) => void", description: "Callback khi trạng thái thay đổi." },
        ]} />

        <p className="text-sm font-medium mt-4 mb-2">HoverCardTrigger</p>
        <PropsTable rows={[
          { prop: "asChild", type: "boolean", default_: "false", description: "Khi true, merge props vào thẻ con thay vì tạo thêm thẻ." },
        ]} />

        <p className="text-sm font-medium mt-4 mb-2">HoverCardContent</p>
        <PropsTable rows={[
          { prop: "align", type: '"start" | "center" | "end"', default_: '"center"', description: "Căn chỉnh theo trục ngang so với trigger." },
          { prop: "side", type: '"top" | "right" | "bottom" | "left"', default_: '"bottom"', description: "Hướng mở của card." },
          { prop: "sideOffset", type: "number", default_: "4", description: "Khoảng cách (px) giữa trigger và card." },
          { prop: "alignOffset", type: "number", default_: "0", description: "Dịch chuyển theo trục align." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 8. Lưu ý ── */}
      <ShowcaseSection title="8. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>HoverCard chỉ hoạt động trên thiết bị có chuột — trên mobile/touch nó không mở. Dùng <code className="text-xs font-mono">Popover</code> nếu cần hỗ trợ touch.</li>
          <li>Trigger mặc định render thành <code className="text-xs font-mono">&lt;span&gt;</code>. Dùng <code className="text-xs font-mono">asChild</code> để dùng thẻ ngữ nghĩa phù hợp hơn (<code className="text-xs font-mono">&lt;a&gt;</code>, <code className="text-xs font-mono">&lt;button&gt;</code>).</li>
          <li>Content được render trong <code className="text-xs font-mono">Portal</code> — thoát khỏi stacking context của cha, không bị cắt bởi <code className="text-xs font-mono">overflow: hidden</code>.</li>
          <li>Radix tự xử lý va chạm với cạnh màn hình và lật hướng nếu không đủ chỗ.</li>
          <li>Để dùng <code className="text-xs font-mono">openDelay={0}</code> trong showcase/demo, nhưng trong production nên giữ mặc định 700ms để tránh card hiện liên tục khi di chuột qua.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
