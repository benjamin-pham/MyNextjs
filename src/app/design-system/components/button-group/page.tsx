"use client"

import * as React from "react"
import {
  AlertTriangleIcon,
  ArrowRightIcon,
  AudioLinesIcon,
  BotIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  PlusIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/design-system/_showcase"

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

const CURRENCIES = [
  { value: "$", label: "US Dollar" },
  { value: "€", label: "Euro" },
  { value: "£", label: "British Pound" },
]

function ButtonGroupSelectDemo() {
  const [currency, setCurrency] = React.useState("$")

  return (
    <ButtonGroup>
      <ButtonGroup>
        <Select value={currency} onValueChange={setCurrency}>
          <SelectTrigger className="font-mono min-w-20">{currency}</SelectTrigger>
          <SelectContent className="min-w-32">
            <SelectGroup>
              {CURRENCIES.map((c) => (
                <SelectItem key={c.value} value={c.value}>
                  {c.value} <span className="text-muted-foreground ml-2 text-xs">{c.label}</span>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="10.00" pattern="[0-9]*" className="w-32" />
      </ButtonGroup>
      <ButtonGroup>
        <Button aria-label="Send" size="icon" variant="outline">
          <ArrowRightIcon className="w-4 h-4" />
        </Button>
      </ButtonGroup>
    </ButtonGroup>
  )
}

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

      {/* ── 10. Nested ── */}
      <ShowcaseSection title="10. Nested">
        <p className="text-sm text-muted-foreground">
          ButtonGroup có thể lồng vào nhau hoặc kết hợp với các component khác như InputGroup.
        </p>
        <DemoBlock>
          <TooltipProvider>
            <ButtonGroup>
              <ButtonGroup>
                <Button variant="outline" size="icon">
                  <PlusIcon className="w-4 h-4" />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <InputGroup>
                  <InputGroupInput placeholder="Send a message..." />
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <InputGroupAddon align="inline-end">
                        <AudioLinesIcon className="w-4 h-4" />
                      </InputGroupAddon>
                    </TooltipTrigger>
                    <TooltipContent>Voice Mode</TooltipContent>
                  </Tooltip>
                </InputGroup>
              </ButtonGroup>
            </ButtonGroup>
          </TooltipProvider>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <ButtonGroup>
    <Button variant="outline" size="icon">
      <PlusIcon />
    </Button>
  </ButtonGroup>
  <ButtonGroup>
    <InputGroup>
      <InputGroupInput placeholder="Send a message..." />
      <Tooltip>
        <TooltipTrigger asChild>
          <InputGroupAddon align="inline-end">
            <AudioLinesIcon />
          </InputGroupAddon>
        </TooltipTrigger>
        <TooltipContent>Voice Mode</TooltipContent>
      </Tooltip>
    </InputGroup>
  </ButtonGroup>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 11. Input ── */}
      <ShowcaseSection title="11. Input">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">&lt;Input&gt;</code> bên trong ButtonGroup để tạo thanh tìm kiếm hoặc nhập liệu có nút đi kèm.
        </p>
        <DemoBlock>
          <ButtonGroup>
            <Input placeholder="Search..." className="min-w-[200px]" />
            <Button variant="outline" aria-label="Search" size="icon">
              <SearchIcon className="w-4 h-4" />
            </Button>
          </ButtonGroup>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Input placeholder="Search..." />
  <Button variant="outline" aria-label="Search">
    <SearchIcon />
  </Button>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 12. Dropdown Menu ── */}
      <ShowcaseSection title="12. Dropdown Menu">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">&lt;DropdownMenu&gt;</code> để tạo các nút hành động mở rộng (Split Button).
        </p>
        <DemoBlock>
          <ButtonGroup>
            <Button variant="outline">Follow</Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="px-2">
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <VolumeOffIcon className="mr-2 w-4 h-4" />
                    Mute Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CheckIcon className="mr-2 w-4 h-4" />
                    Mark as Read
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <AlertTriangleIcon className="mr-2 w-4 h-4" />
                    Report Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserRoundXIcon className="mr-2 w-4 h-4" />
                    Block User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ShareIcon className="mr-2 w-4 h-4" />
                    Share Conversation
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon className="mr-2 w-4 h-4" />
                    Copy Conversation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    <TrashIcon className="mr-2 w-4 h-4" />
                    Delete Conversation
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline">Follow</Button>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="icon">
        <ChevronDownIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-48">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <VolumeOffIcon />
          Mute Conversation
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CheckIcon />
          Mark as Read
        </DropdownMenuItem>
        {/* ... */}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <TrashIcon />
        Delete Conversation
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 13. Select ── */}
      <ShowcaseSection title="13. Select">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">&lt;Select&gt;</code> để tạo các điều khiển chọn lựa nâng cao trong nhóm.
        </p>
        <DemoBlock>
          <ButtonGroupSelectDemo />
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <ButtonGroup>
    <Select value={currency} onValueChange={setCurrency}>
      <SelectTrigger className="font-mono">{currency}</SelectTrigger>
      <SelectContent>
        <SelectItem value="$">$ US Dollar</SelectItem>
        <SelectItem value="€">€ Euro</SelectItem>
      </SelectContent>
    </Select>
    <Input placeholder="10.00" />
  </ButtonGroup>
  <ButtonGroup>
    <Button size="icon" variant="outline">
      <ArrowRightIcon />
    </Button>
  </ButtonGroup>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 14. Popover ── */}
      <ShowcaseSection title="14. Popover">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">&lt;Popover&gt;</code> để hiển thị các form hoặc nội dung bổ sung khi nhấn nút.
        </p>
        <DemoBlock>
          <ButtonGroup>
            <Button variant="outline">
              <BotIcon className="w-4 h-4 mr-2" /> Copilot
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open Popover">
                  <ChevronDownIcon className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="text-sm w-80 font-normal">
                <PopoverHeader className="px-1.5 pt-1.5 pb-2">
                  <PopoverTitle>Start a new task with Copilot</PopoverTitle>
                  <PopoverDescription>
                    Describe your task in natural language.
                  </PopoverDescription>
                </PopoverHeader>
                <div className="flex flex-col gap-4 p-1.5 pt-0">
                  <Field>
                    <FieldLabel htmlFor="task" className="sr-only">
                      Task Description
                    </FieldLabel>
                    <Textarea
                      id="task"
                      placeholder="I need to..."
                      className="resize-none min-h-[80px]"
                    />
                    <FieldDescription>
                      Copilot will open a pull request for review.
                    </FieldDescription>
                  </Field>
                  <Button className="w-full h-8 text-xs">Start task</Button>
                </div>
              </PopoverContent>
            </Popover>
          </ButtonGroup>
        </DemoBlock>
        <CodeBlock code={`
<ButtonGroup>
  <Button variant="outline">
    <BotIcon /> Copilot
  </Button>
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" size="icon">
        <ChevronDownIcon />
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      {/* Popover content with Field and Textarea */}
    </PopoverContent>
  </Popover>
</ButtonGroup>
        `} />
      </ShowcaseSection>

      {/* ── 15. Props reference ── */}
      <ShowcaseSection title="15. Props reference">
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

      {/* ── 16. Lưu ý ── */}
      <ShowcaseSection title="16. Lưu ý khi sử dụng">
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
