import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function KbdPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Kbd</h1>
        <p className="text-sm text-muted-foreground">
          Hiển thị phím bàn phím hoặc tổ hợp phím — dùng để chú thích phím tắt trong UI, tooltip, button và input.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Kbd, KbdGroup } from "@/components/ui/kbd"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Kbd>Ctrl</Kbd>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">Kbd</code> render thành thẻ{" "}
          <code className="text-xs font-mono">&lt;kbd&gt;</code> với style phím bàn phím — nền mờ, bo góc nhỏ.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Kbd>Ctrl</Kbd>
            <Kbd>Alt</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>Tab</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Esc</Kbd>
            <Kbd>Delete</Kbd>
            <Kbd>Space</Kbd>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Kbd>Ctrl</Kbd>
<Kbd>Alt</Kbd>
<Kbd>Shift</Kbd>
<Kbd>Tab</Kbd>
<Kbd>Enter</Kbd>
<Kbd>Esc</Kbd>`} />
      </ShowcaseSection>

      {/* ── 2. Với icon ── */}
      <ShowcaseSection title="2. Với icon (SVG)">
        <p className="text-sm text-muted-foreground">
          Có thể đặt SVG icon bên trong <code className="text-xs font-mono">Kbd</code> — icon tự động được set{" "}
          <code className="text-xs font-mono">size-3</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3 items-center">
            <Kbd>
              {/* Command / ⌘ */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" />
              </svg>
            </Kbd>
            <Kbd>
              {/* Arrow up */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </Kbd>
            <Kbd>
              {/* Arrow down */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </Kbd>
            <Kbd>
              {/* Arrow left */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </Kbd>
            <Kbd>
              {/* Arrow right */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Kbd>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Kbd>
  <svg>...</svg>
</Kbd>`} />
      </ShowcaseSection>

      {/* ── 3. KbdGroup ── */}
      <ShowcaseSection title="3. KbdGroup — tổ hợp phím">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">KbdGroup</code> để nhóm nhiều phím lại với nhau, tạo tổ hợp phím tắt.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Lưu file:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>S</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>In đậm:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>B</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Tìm kiếm:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Undo:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>Z</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Screenshot:</span>
              <KbdGroup>
                <Kbd>Shift</Kbd>
                <Kbd>Cmd</Kbd>
                <Kbd>4</Kbd>
              </KbdGroup>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>

<KbdGroup>
  <Kbd>Shift</Kbd>
  <Kbd>Cmd</Kbd>
  <Kbd>4</Kbd>
</KbdGroup>`} />
      </ShowcaseSection>

      {/* ── 4. Trong Button ── */}
      <ShowcaseSection title="4. Trong Button">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">Kbd</code> bên trong Button để hiển thị phím tắt ngay trên nút.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-3 items-center">
            <button className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
              Mở Command Palette
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>K</Kbd>
              </KbdGroup>
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
              Lưu thay đổi
              <Kbd>Ctrl</Kbd>
            </button>
            <button className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-accent transition-colors">
              Tìm kiếm
              <Kbd>/</Kbd>
            </button>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Button variant="outline">
  Mở Command Palette
  <KbdGroup>
    <Kbd>Ctrl</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>
</Button>

<Button>
  Lưu thay đổi
  <Kbd>Ctrl</Kbd>
</Button>`} />
      </ShowcaseSection>

      {/* ── 5. Trong Tooltip ── */}
      <ShowcaseSection title="5. Trong Tooltip">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">Kbd</code> bên trong Tooltip để gợi ý phím tắt khi hover.
          Trong tooltip, <code className="text-xs font-mono">Kbd</code> tự động đổi sang style trắng mờ.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4 items-center">
            <p className="text-sm text-muted-foreground text-center max-w-sm">
              Hover vào nút bên dưới để xem phím tắt trong tooltip.
              <br />
              <span className="text-xs">(Minh hoạ — tooltip thực cần Tooltip component)</span>
            </p>
            <div className="relative group inline-block">
              <button className="rounded-md border border-input bg-background px-3 py-1.5 text-sm shadow-sm hover:bg-accent transition-colors">
                Bold
              </button>
              <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-md bg-foreground px-2 py-1 text-xs text-background flex items-center gap-1 whitespace-nowrap" data-slot="tooltip-content">
                  In đậm văn bản
                  <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>B</Kbd>
                  </KbdGroup>
                </div>
              </div>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Bold</Button>
  </TooltipTrigger>
  <TooltipContent>
    In đậm văn bản
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>B</Kbd>
    </KbdGroup>
  </TooltipContent>
</Tooltip>`} />
      </ShowcaseSection>

      {/* ── 6. Trong Input / Search ── */}
      <ShowcaseSection title="6. Trong Input / Search">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">Kbd</code> bên trong ô input dùng{" "}
          <code className="text-xs font-mono">InputGroup</code> để gợi ý phím tắt kích hoạt tìm kiếm.
        </p>
        <DemoBlock>
          <div className="flex w-full max-w-xs flex-col gap-6">
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <InputGroupInput placeholder="Tìm kiếm tài liệu..." />
              <InputGroupAddon align="inline-end">
                <Kbd>/</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock
          code={`import { SearchIcon } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function KbdInputGroup() {
  return (
    <InputGroup>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}`}
        />
      </ShowcaseSection>

      {/* ── 7. Phím tắt thực tế ── */}
      <ShowcaseSection title="7. Bảng phím tắt thực tế">
        <p className="text-sm text-muted-foreground">
          Ví dụ hiển thị danh sách phím tắt dùng <code className="text-xs font-mono">KbdGroup</code>.
        </p>
        <DemoBlock className="min-h-0">
          <div className="w-full max-w-sm space-y-1 rounded-lg border overflow-hidden divide-y text-sm">
            {[
              { label: "Mở Command Palette", keys: ["Ctrl", "K"] },
              { label: "Tìm kiếm", keys: ["/"] },
              { label: "Lưu", keys: ["Ctrl", "S"] },
              { label: "In đậm", keys: ["Ctrl", "B"] },
              { label: "Undo", keys: ["Ctrl", "Z"] },
              { label: "Redo", keys: ["Ctrl", "Y"] },
              { label: "Đóng modal", keys: ["Esc"] },
            ].map(({ label, keys }) => (
              <div key={label} className="flex items-center justify-between px-3 py-2">
                <span className="text-muted-foreground">{label}</span>
                <KbdGroup>
                  {keys.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </KbdGroup>
              </div>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="flex items-center justify-between">
  <span>Mở Command Palette</span>
  <KbdGroup>
    <Kbd>Ctrl</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>
</div>`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference — Kbd">
        <PropsTable rows={[
          { prop: "children", type: "ReactNode", default_: "—", description: "Nội dung phím — chuỗi ký tự hoặc SVG icon." },
          { prop: "className", type: "string", default_: "—", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      <ShowcaseSection title="Props reference — KbdGroup">
        <PropsTable rows={[
          { prop: "children", type: "ReactNode", default_: "—", description: "Các Kbd con bên trong group." },
          { prop: "className", type: "string", default_: "—", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            <code className="text-xs font-mono">Kbd</code> render thành thẻ{" "}
            <code className="text-xs font-mono">&lt;kbd&gt;</code> — đúng ngữ nghĩa HTML cho phím bàn phím.
          </li>
          <li>
            SVG icon bên trong <code className="text-xs font-mono">Kbd</code> tự động được set{" "}
            <code className="text-xs font-mono">size-3</code> — không cần thêm class size thủ công.
          </li>
          <li>
            Khi dùng bên trong Tooltip (có{" "}
            <code className="text-xs font-mono">data-slot=&quot;tooltip-content&quot;</code>),{" "}
            <code className="text-xs font-mono">Kbd</code> tự chuyển sang nền trắng mờ để tương phản với nền tối của tooltip.
          </li>
          <li>
            <code className="text-xs font-mono">KbdGroup</code> chỉ là wrapper{" "}
            <code className="text-xs font-mono">flex items-center gap-1</code> — không thêm dấu phân cách; các{" "}
            <code className="text-xs font-mono">Kbd</code> tự sát nhau theo gap.
          </li>
          <li>
            <code className="text-xs font-mono">Kbd</code> có{" "}
            <code className="text-xs font-mono">pointer-events-none select-none</code> — không thể chọn hay nhấp vào.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
