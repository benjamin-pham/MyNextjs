"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"
import {
  ShowcaseSection,
  DemoBlock,
  CodeBlock,
  PropsTable,
} from "@/app/design-system/_showcase"
import {
  Home,
  Settings,
  User,
  Inbox,
  Search,
  ChevronRight,
  MoreHorizontal,
  Folder,
  PieChart,
  FileText,
  Mail,
  HelpCircle,
  LogOut,
  Bell,
  Check,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

/* ─── icons ──────────────────────────────────────────────────────────────── */

// Common icons are imported from lucide-react above.

/* ─── demo components ────────────────────────────────────────────────────── */

const SidebarDemo = ({
  variant = "sidebar",
  collapsible = "offcanvas",
  side = "left",
  defaultOpen = false,
  children
}: {
  variant?: "sidebar" | "floating" | "inset",
  collapsible?: "offcanvas" | "icon" | "none",
  side?: "left" | "right",
  defaultOpen?: boolean,
  children?: React.ReactNode
}) => {
  return (
    <TooltipProvider>
      <div className="relative border rounded-lg overflow-hidden bg-background h-[500px] flex w-full">
        <SidebarProvider defaultOpen={defaultOpen} className="min-h-0 w-full">
          <Sidebar
            variant={variant}
            collapsible={collapsible}
            side={side}
            className="absolute! h-full!"
          >
            {children || (
              <>
                <SidebarHeader className="border-b">
                  <div className="flex items-center gap-2 py-1">
                    <div className="size-8 bg-primary rounded-md flex items-center justify-center text-primary-foreground font-bold shrink-0">
                      A
                    </div>
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                      <span className="text-sm font-semibold leading-none text-nowrap">Admin</span>
                      <span className="text-xs text-muted-foreground mt-1 text-nowrap">Admin Dashboard</span>
                    </div>
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive tooltip="Overview">
                            <Home />
                            <span>Overview</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Analytics">
                            <PieChart />
                            <span>Analytics</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton tooltip="Reports">
                            <FileText />
                            <span>Reports</span>
                          </SidebarMenuButton>
                          <SidebarMenuBadge>12</SidebarMenuBadge>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter className="border-t">
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <User className="size-4 shrink-0" />
                        <span>John Doe</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </>
            )}
            <SidebarRail />
          </Sidebar>
          <SidebarInset className="relative flex-1 min-h-0">
            <div className="p-4 flex-col flex h-full">
              <header className="flex items-center gap-2 pb-4 border-b mb-4">
                <SidebarTrigger />
                <Separator orientation="vertical" className="h-4" />
                <div className="text-sm font-medium">Dashboard / Overview</div>
              </header>
              <div className="flex-1 bg-muted/20 rounded-md border-2 border-dashed flex items-center justify-center text-muted-foreground">
                Main Content Area
              </div>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function SidebarPage() {
  return (
    <div className="p-8 space-y-12 max-w-5xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Sidebar</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần điều hướng bên cho ứng dụng, hỗ trợ thu gọn, các nhóm mục, huy hiệu và các biến thể giao diện khác nhau.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground mb-4">
          Sidebar cần được bao bởi <code className="text-xs font-mono">SidebarProvider</code>. Cấu trúc gồm Header, Content (với các Group/Menu) và Footer.
          Mặc định trong ví dụ này tôi đặt <code className="text-xs font-mono">defaultOpen={'{false}'}</code> và sử dụng chế độ thu gọn icon.
        </p>
        <DemoBlock>
          <SidebarDemo defaultOpen={false} collapsible="icon" />
        </DemoBlock>
        <CodeBlock code={`<SidebarProvider defaultOpen={false}>
  <Sidebar collapsible="icon">
    <SidebarHeader>...</SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Label</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Home">
                <Home />
                <span>Home</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>...</SidebarFooter>
  </Sidebar>
  <SidebarInset>
    <main>Main Content</main>
  </SidebarInset>
</SidebarProvider>`} />
      </ShowcaseSection>

      {/* ── 2. Variants ── */}
      <ShowcaseSection title="2. Variants">
        <p className="text-sm text-muted-foreground mb-4">
          Sử dụng prop <code className="text-xs font-mono">variant</code> để thay đổi kiểu hiển thị.
        </p>
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold mb-4">Floating</h3>
            <DemoBlock>
              <SidebarDemo variant="floating" collapsible="icon" />
            </DemoBlock>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Inset</h3>
            <DemoBlock>
              <SidebarDemo variant="inset" collapsible="icon" />
            </DemoBlock>
          </div>
        </div>
        <CodeBlock code={`<Sidebar variant="sidebar | floating | inset" />`} />
      </ShowcaseSection>

      {/* ── 3. Collapsible ── */}
      <ShowcaseSection title="3. Khả năng thu gọn">
        <p className="text-sm text-muted-foreground space-y-2 mb-4">
          Điều chỉnh cách sidebar thu gọn. Kết hợp với <code className="text-xs font-mono">SidebarTrigger</code> hoặc <code className="text-xs font-mono">SidebarRail</code>.
        </p>
        <div className="space-y-8 mt-4">
          <div>
            <h3 className="text-sm font-semibold mb-4">Collapsible: Icon (Hiện icon khi thu gọn)</h3>
            <DemoBlock>
              <SidebarDemo collapsible="icon" defaultOpen={false} />
            </DemoBlock>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Collapsible: Offcanvas (Ẩn hoàn toàn khi thu gọn)</h3>
            <DemoBlock>
              <SidebarDemo collapsible="offcanvas" defaultOpen={false} />
            </DemoBlock>
          </div>
        </div>
        <CodeBlock code={`<Sidebar collapsible="offcanvas | icon | none" />`} />
      </ShowcaseSection>

      {/* ── 4. Submenu ── */}
      <ShowcaseSection title="4. Menu đa cấp">
        <p className="text-sm text-muted-foreground mb-4">
          Dùng <code className="text-xs font-mono">SidebarMenuSub</code> để tạo danh sách con. Trong bản demo này tôi để <code className="text-xs font-mono">defaultOpen={'{true}'}</code> để bạn dễ quan sát.
        </p>
        <DemoBlock>
          <SidebarDemo defaultOpen={true}>
            <SidebarHeader className="border-b">
              <div className="px-2 py-1 font-semibold text-sm group-data-[collapsible=icon]:hidden text-nowrap">Nested Menu</div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Settings />
                      <span>Cài đặt</span>
                      <ChevronRight className="ml-auto" />
                    </SidebarMenuButton>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton isActive>
                          <span>Tài khoản</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                      <SidebarMenuSubItem>
                        <SidebarMenuSubButton>
                          <span>Thông báo</span>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
          </SidebarDemo>
        </DemoBlock>
        <CodeBlock code={`<SidebarMenuItem>
  <SidebarMenuButton>...</SidebarMenuButton>
  <SidebarMenuSub>
    <SidebarMenuSubItem>
      <SidebarMenuSubButton isActive>Sub Item</SidebarMenuSubButton>
    </SidebarMenuSubItem>
  </SidebarMenuSub>
</SidebarMenuItem>`} />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-3">Sidebar</h3>
            <PropsTable rows={[
              { prop: "side", type: '"left" | "right"', default_: '"left"', description: "Vị trí của sidebar." },
              { prop: "variant", type: '"sidebar" | "floating" | "inset"', default_: '"sidebar"', description: "Biến thể giao diện." },
              { prop: "collapsible", type: '"offcanvas" | "icon" | "none"', default_: '"offcanvas"', description: "Hành vi khi thu gọn." },
            ]} />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">SidebarMenuButton</h3>
            <PropsTable rows={[
              { prop: "isActive", type: "boolean", default_: "false", description: "Trạng thái đang được chọn." },
              { prop: "size", type: '"sm" | "md" | "lg"', default_: '"md"', description: "Kích thước của button." },
              { prop: "variant", type: '"default" | "outline"', default_: '"default"', description: "Kiểu của button." },
              { prop: "tooltip", type: "string | TooltipContent", description: "Hiện tooltip khi sidebar ở chế độ thu gọn icon." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn sử dụng <code className="text-xs font-mono">SidebarProvider</code> làm wrapper ngoài cùng để cung cấp context.</li>
          <li>Sử dụng <code className="text-xs font-mono">SidebarInset</code> cho vùng nội dung chính để padding và border được điều chỉnh tự động theo trạng thái của sidebar.</li>
          <li>Mặc định Sidebar có vị trí <code className="text-xs font-mono">fixed</code>. Trong các ví dụ trên, tôi đã ghi đè bằng <code className="text-xs font-mono">absolute!</code> để nó nằm gọn trong khung demo.</li>
          <li>Phím tắt mặc định để toggle sidebar là <kbd>Ctrl/Cmd + B</kbd>.</li>
          <li>Prop <code className="text-xs font-mono">tooltip</code> trong <code className="text-xs font-mono">SidebarMenuButton</code> sẽ được tự động hiển thị khi sidebar ở chế độ thu gọn icon.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
