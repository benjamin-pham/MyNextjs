import { Spinner } from "@/components/ui/spinner"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpIcon } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

export default function SpinnerPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Spinner</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần hiển thị trạng thái đang tải (loading) của hệ thống hoặc tác vụ.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Spinner } from "@/components/ui/spinner"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Spinner />`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Spinner />
        </DemoBlock>
        <CodeBlock code={`<Spinner />`} />
      </ShowcaseSection>

      {/* ── 2. Kích thước (Sizes) ── */}
      <ShowcaseSection title="2. Kích thước (Sizes)">
        <p className="text-sm text-muted-foreground">
          Dùng class <code className="text-xs font-mono">size-*</code> để thay đổi kích cỡ của Spinner.
        </p>
        <DemoBlock>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-4" />
              <span className="text-[10px] text-muted-foreground font-mono">size-4</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-6" />
              <span className="text-[10px] text-muted-foreground font-mono">size-6</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-8" />
              <span className="text-[10px] text-muted-foreground font-mono">size-8</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="size-10" />
              <span className="text-[10px] text-muted-foreground font-mono">size-10</span>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Spinner className="size-4" />
<Spinner className="size-6" />
<Spinner className="size-8" />
<Spinner className="size-10" />
        `} />
      </ShowcaseSection>

      {/* ── 3. Màu sắc ── */}
      <ShowcaseSection title="3. Màu sắc">
        <p className="text-sm text-muted-foreground">
          Dùng các utility class <code className="text-xs font-mono">text-*</code> để thay đổi màu sắc của Spinner.
        </p>
        <DemoBlock>
          <div className="flex items-center gap-6">
            <Spinner className="text-primary" />
            <Spinner className="text-destructive" />
            <Spinner className="text-muted-foreground" />
            <Spinner className="text-orange-500" />
            <Spinner className="text-blue-500" />
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Spinner className="text-primary" />
<Spinner className="text-destructive" />
<Spinner className="text-muted-foreground" />
<Spinner className="text-orange-500" />
        `} />
      </ShowcaseSection>

      {/* ── 4. Trong Button ── */}
      <ShowcaseSection title="4. Sử dụng trong Button">
        <p className="text-sm text-muted-foreground">
          Đặt <code className="text-xs font-mono">&lt;Spinner /&gt;</code> vào trong Button để biểu thị trạng thái đang xử lý. 
          Sử dụng <code className="text-xs font-mono">data-icon="inline-start"</code> hoặc <code className="text-xs font-mono">inline-end</code> để tự động điều chỉnh khoảng cách.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-4 items-center">
            <Button disabled>
              <Spinner data-icon="inline-start" />
              Loading
            </Button>
            <Button variant="secondary" disabled>
              Processing
              <Spinner data-icon="inline-end" />
            </Button>
            <Button variant="outline" size="icon" disabled>
              <Spinner />
            </Button>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Button disabled>
  <Spinner data-icon="inline-start" /> 
  Loading
</Button>

<Button variant="secondary" disabled>
  Processing
  <Spinner data-icon="inline-end" />
</Button>

<Button variant="outline" size="icon" disabled>
  <Spinner />
</Button>
        `} />
      </ShowcaseSection>

      {/* ── 5. Trong Badge ── */}
      <ShowcaseSection title="5. Sử dụng trong Badge">
        <p className="text-sm text-muted-foreground">
          Tương tự Button, Spinner cũng có thể đặt trong Badge.
        </p>
        <DemoBlock>
          <div className="flex flex-wrap gap-4 items-center">
            <Badge>
              <Spinner data-icon="inline-start" />
              Updating
            </Badge>
            <Badge variant="secondary">
              Synchronizing
              <Spinner data-icon="inline-end" />
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <Spinner className="size-3" />
              Running
            </Badge>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Badge>
  <Spinner data-icon="inline-start" />
  Updating
</Badge>

<Badge variant="secondary">
  Synchronizing
  <Spinner data-icon="inline-end" />
</Badge>
        `} />
      </ShowcaseSection>

      {/* ── 6. Trong Input Group ── */}
      <ShowcaseSection title="6. Sử dụng trong Input Group">
        <p className="text-sm text-muted-foreground">
          Spinner có thể được dùng trong Input Group để hiển thị trạng thái đang xử lý/kiểm tra dữ liệu (validating).
        </p>
        <DemoBlock>
          <div className="flex w-full max-w-md flex-col gap-4">
            <InputGroup>
              <InputGroupInput placeholder="Send a message..." disabled />
              <InputGroupAddon align="inline-end">
                <Spinner />
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupTextarea placeholder="Send a message..." disabled />
              <InputGroupAddon align="block-end">
                <Spinner /> Validating...
                <InputGroupButton className="ml-auto" variant="default">
                  <ArrowUpIcon />
                  <span className="sr-only">Send</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<InputGroup>
  <InputGroupInput placeholder="Send a message..." disabled />
  <InputGroupAddon align="inline-end">
    <Spinner />
  </InputGroupAddon>
</InputGroup>

<InputGroup>
  <InputGroupTextarea placeholder="Send a message..." disabled />
  <InputGroupAddon align="block-end">
    <Spinner /> Validating...
    <InputGroupButton className="ml-auto" variant="default">
      <ArrowUpIcon />
      <span className="sr-only">Send</span>
    </InputGroupButton>
  </InputGroupAddon>
</InputGroup>
        `} />
      </ShowcaseSection>

      {/* ── 7. Trong Empty ── */}
      <ShowcaseSection title="7. Sử dụng trong Empty">
        <p className="text-sm text-muted-foreground">
          Sử dụng trong thành phần Empty để thông báo cho người dùng về tiến trình đang xử lý trên quy mô toàn vùng nội dung.
        </p>
        <DemoBlock>
          <Empty className="w-full">
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Spinner />
              </EmptyMedia>
              <EmptyTitle>Processing your request</EmptyTitle>
              <EmptyDescription>
                Please wait while we process your request. Do not refresh the page.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button variant="outline" size="sm">
                Cancel
              </Button>
            </EmptyContent>
          </Empty>
        </DemoBlock>
        <CodeBlock code={`
<Empty className="w-full">
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Spinner />
    </EmptyMedia>
    <EmptyTitle>Processing your request</EmptyTitle>
    <EmptyDescription>
      Please wait while we process your request. Do not refresh the page.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button variant="outline" size="sm">
      Cancel
    </Button>
  </EmptyContent>
</Empty>
        `} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <PropsTable rows={[
          { prop: "className", type: "string", description: "Class Tailwind bổ sung để tùy chỉnh style (size, color, margin...)." },
          { prop: "data-icon", type: '"inline-start" | "inline-end"', description: "Dùng khi đặt trong Button/Badge để tự động căn lề." },
          { prop: "...props", type: "React.ComponentProps<\"svg\">", description: "Các thuộc tính SVG tiêu chuẩn." },
        ]} />
      </ShowcaseSection>
    </div>
  )
}
