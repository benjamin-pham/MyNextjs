import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/components/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const BoldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </svg>
)

const ItalicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="4" x2="10" y2="4" /><line x1="14" y1="20" x2="5" y2="20" /><line x1="15" y1="4" x2="9" y2="20" />
  </svg>
)

const UnderlineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /><line x1="4" y1="21" x2="20" y2="21" />
  </svg>
)

const LoginIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" /><polyline points="10 17 15 12 10 7" /><line x1="15" y1="12" x2="3" y2="12" />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function ButtonGroupPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Button Group</h1>
        <p className="text-sm text-muted-foreground">
          Nhóm các button liền kề nhau thành một khối thống nhất — dùng để biểu thị các hành động liên quan hoặc loại trừ lẫn nhau.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock
          alwaysOpen
          code={`import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"`}
        />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock
          alwaysOpen
          code={`<ButtonGroup>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>`}
        />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Bọc các <code className="text-xs font-mono">&lt;Button&gt;</code> bên trong{" "}
          <code className="text-xs font-mono">&lt;ButtonGroup&gt;</code> — border và border-radius sẽ tự động hợp nhất.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <ButtonGroup>
              <Button variant="outline">Left</Button>
              <Button variant="outline">Center</Button>
              <Button variant="outline">Right</Button>
            </ButtonGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 2. Orientation ── */}
      <ShowcaseSection title="2. Orientation">
        <p className="text-sm text-muted-foreground">
          Prop <code className="text-xs font-mono">orientation</code> nhận{" "}
          <code className="text-xs font-mono">"horizontal"</code> (mặc định) hoặc{" "}
          <code className="text-xs font-mono">"vertical"</code>.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-6 items-start">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">horizontal</p>
              <ButtonGroup>
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">vertical</p>
              <ButtonGroup orientation="vertical">
                <Button variant="outline">Top</Button>
                <Button variant="outline">Middle</Button>
                <Button variant="outline">Bottom</Button>
              </ButtonGroup>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup orientation="horizontal">
  ...
</ButtonGroup>

<ButtonGroup orientation="vertical">
  ...
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 3. Variants ── */}
      <ShowcaseSection title="3. Variants">
        <p className="text-sm text-muted-foreground">
          ButtonGroup hoạt động với mọi variant của Button.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-3">
            {(["default", "outline", "secondary", "ghost", "destructive"] as const).map((variant) => (
              <div key={variant} className="flex items-center gap-4">
                <span className="w-24 text-xs text-muted-foreground">{variant}</span>
                <ButtonGroup>
                  <Button variant={variant}>One</Button>
                  <Button variant={variant}>Two</Button>
                  <Button variant={variant}>Three</Button>
                </ButtonGroup>
              </div>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="default">One</Button>
  <Button variant="default">Two</Button>
  <Button variant="default">Three</Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 4. Sizes ── */}
      <ShowcaseSection title="4. Sizes">
        <p className="text-sm text-muted-foreground">
          Truyền cùng <code className="text-xs font-mono">size</code> cho tất cả Button trong nhóm để đồng đều kích thước.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-3">
            {(["xs", "sm", "default", "lg"] as const).map((size) => (
              <div key={size} className="flex items-center gap-4">
                <span className="w-16 text-xs text-muted-foreground">{size}</span>
                <ButtonGroup>
                  <Button variant="outline" size={size}>One</Button>
                  <Button variant="outline" size={size}>Two</Button>
                  <Button variant="outline" size={size}>Three</Button>
                </ButtonGroup>
              </div>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline" size="sm">One</Button>
  <Button variant="outline" size="sm">Two</Button>
  <Button variant="outline" size="sm">Three</Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 5. ButtonGroupSeparator ── */}
      <ShowcaseSection title="5. ButtonGroupSeparator">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">&lt;ButtonGroupSeparator&gt;</code> để chèn đường kẻ ngăn cách giữa các button.
        </p>
        <DemoBlock>
          <ButtonGroup>
            <Button variant="outline">Copy</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Paste</Button>
            <ButtonGroupSeparator />
            <Button variant="outline">Cut</Button>
          </ButtonGroup>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline">Copy</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Paste</Button>
  <ButtonGroupSeparator />
  <Button variant="outline">Cut</Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 6. ButtonGroupText ── */}
      <ShowcaseSection title="6. ButtonGroupText — nhãn văn bản">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">&lt;ButtonGroupText&gt;</code> để thêm nhãn văn bản tĩnh (prefix / suffix) kèm với button.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-3">
            <ButtonGroup>
              <ButtonGroupText>https://</ButtonGroupText>
              <Button variant="outline">example.com</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">Amount</Button>
              <ButtonGroupText>USD</ButtonGroupText>
            </ButtonGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <ButtonGroupText>https://</ButtonGroupText>
  <Button variant="outline">example.com</Button>
</ButtonGroup>

<ButtonGroup>
  <Button variant="outline">Amount</Button>
  <ButtonGroupText>USD</ButtonGroupText>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 7. Icon buttons ── */}
      <ShowcaseSection title="7. Icon buttons">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">size="icon"</code> cho các button chỉ chứa icon.
        </p>
        <DemoBlock>
          <ButtonGroup>
            <Button variant="outline" size="icon" aria-label="Bold">
              <BoldIcon />
            </Button>
            <Button variant="outline" size="icon" aria-label="Italic">
              <ItalicIcon />
            </Button>
            <Button variant="outline" size="icon" aria-label="Underline">
              <UnderlineIcon />
            </Button>
          </ButtonGroup>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline" size="icon" aria-label="Bold">
    <BoldIcon />
  </Button>
  <Button variant="outline" size="icon" aria-label="Italic">
    <ItalicIcon />
  </Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 8. Icon + text ── */}
      <ShowcaseSection title="8. Icon kết hợp với text">
        <DemoBlock>
          <div className="flex flex-wrap gap-3">
            <ButtonGroup>
              <Button variant="outline">
                <LoginIcon />
                Login
              </Button>
              <Button variant="outline">
                Register
                <ArrowIcon />
              </Button>
            </ButtonGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline">
    <LoginIcon />
    Login
  </Button>
  <Button variant="outline">
    Register
    <ArrowIcon />
  </Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 9. Disabled ── */}
      <ShowcaseSection title="9. Disabled">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">disabled</code> vào từng button riêng lẻ hoặc toàn bộ nhóm.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-3">
            <ButtonGroup>
              <Button variant="outline" disabled>One</Button>
              <Button variant="outline" disabled>Two</Button>
              <Button variant="outline" disabled>Three</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="outline">Active</Button>
              <Button variant="outline" disabled>Disabled</Button>
              <Button variant="outline">Active</Button>
            </ButtonGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline" disabled>One</Button>
  <Button variant="outline" disabled>Two</Button>
  <Button variant="outline" disabled>Three</Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 10. Props reference ── */}
      <ShowcaseSection title="10. Props reference">
        <p className="text-sm font-medium mb-2">ButtonGroup</p>
        <PropsTable rows={[
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng xếp các button trong nhóm." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
        <p className="text-sm font-medium mt-4 mb-2">ButtonGroupText</p>
        <PropsTable rows={[
          { prop: "asChild", type: "boolean", default_: "false", description: "Khi true, render thành thẻ con thay vì <div>." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
        <p className="text-sm font-medium mt-4 mb-2">ButtonGroupSeparator</p>
        <PropsTable rows={[
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"vertical"', description: "Hướng của đường kẻ ngăn cách." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 11. Lưu ý ── */}
      <ShowcaseSection title="11. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Các button trong nhóm nên dùng cùng <code className="text-xs font-mono">variant</code> và <code className="text-xs font-mono">size</code> để giao diện nhất quán.</li>
          <li><code className="text-xs font-mono">ButtonGroupSeparator</code> mặc định là <code className="text-xs font-mono">orientation="vertical"</code> — phù hợp với nhóm ngang. Đổi sang <code className="text-xs font-mono">"horizontal"</code> khi dùng nhóm dọc.</li>
          <li><code className="text-xs font-mono">ButtonGroupText</code> không phải button — không có hành vi click, chỉ là nhãn hiển thị.</li>
          <li>ButtonGroup có thể lồng bên trong nhau — khoảng cách giữa các nhóm con được tự động thêm qua <code className="text-xs font-mono">gap-2</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
