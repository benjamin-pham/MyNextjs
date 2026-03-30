"use client"

import * as React from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"
import { cn } from "@/lib/utils"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

/* ─── helpers ────────────────────────────────────────────────────────────── */

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href ?? "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function NavigationMenuPage() {
  return (
    <div className="p-8 space-y-12 max-w-4xl pb-20">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p className="text-base text-muted-foreground">
          Hệ thống điều hướng linh hoạt với dropdown content, hỗ trợ cả liên kết đơn và các trình đơn phức tạp.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Link đơn giản">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">asChild</code> để lồng <code className="text-xs font-mono">Link</code> từ Next.js vào <code className="text-xs font-mono">NavigationMenuLink</code>.
        </p>
        <DemoBlock>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">Tài liệu</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">API Reference</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">GitHub</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DemoBlock>
        <CodeBlock code={`<NavigationMenuItem>
  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
    <Link href="/docs">Tài liệu</Link>
  </NavigationMenuLink>
</NavigationMenuItem>`} />
      </ShowcaseSection>

      {/* ── 2. Với Menu Content ── */}
      <ShowcaseSection title="2. Dropdown content (Mega-menu)">
        <p className="text-sm text-muted-foreground">
          Kết hợp <code className="text-xs font-mono">NavigationMenuTrigger</code> và <code className="text-xs font-mono">NavigationMenuContent</code> để hiển thị nội dung tùy chỉnh.
        </p>
        <DemoBlock>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Bắt đầu thôi</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-indigo-500/20 via-purple-500/10 to-muted p-6 no-underline outline-none focus:shadow-md border border-indigo-500/10"
                          href="#"
                        >
                          <div className="size-10 rounded-full bg-indigo-500 flex items-center justify-center mb-2">
                            <svg className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                          </div>
                          <div className="mb-1 mt-2 text-lg font-bold">
                            Admin UI
                          </div>
                          <p className="text-xs leading-tight text-muted-foreground">
                            Xây dựng ứng dụng nhanh hơn với bộ component được tối ưu hóa.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#" title="Giới thiệu">
                      Khám phá các nguyên tắc thiết kế và cách bắt đầu.
                    </ListItem>
                    <ListItem href="#" title="Cài đặt">
                      Hướng dẫn từng bước để tích hợp vào dự án của bạn.
                    </ListItem>
                    <ListItem href="#" title="Tùy biến">
                      Cách thay đổi theme, màu sắc và kiểu dáng mặc định.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Thành phần</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    <ListItem title="Alert Dialog" href="#">
                      Một cửa sổ modal ngắt người dùng với nội dung quan trọng.
                    </ListItem>
                    <ListItem title="Hover Card" href="#">
                      Cho phép người dùng xem nhanh nội dung đằng sau một liên kết.
                    </ListItem>
                    <ListItem title="Progress" href="#">
                      Hiển thị trạng thái hoàn thành của một tác vụ.
                    </ListItem>
                    <ListItem title="Scroll-area" href="#">
                      Tăng trải nghiệm cuộn cho các vùng nội dung dài.
                    </ListItem>
                    <ListItem title="Tabs" href="#">
                      Một tập hợp các phần nội dung phân lớp.
                    </ListItem>
                    <ListItem title="Tooltip" href="#">
                      Một popup hiển thị thông tin ngắn gọn khi hover.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DemoBlock>
        <CodeBlock code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Thành phần</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
          {components.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            >
              {component.description}
            </ListItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`} />
      </ShowcaseSection>

      {/* ── 3. Props reference ── */}
      <ShowcaseSection title="3. Props reference">
        <PropsTable rows={[
          { prop: "children", type: "React.ReactNode", description: "Các NavigationMenuItem hoặc nội dung khác." },
          { prop: "viewport", type: "boolean", default_: "true", description: "Có hiển thị NavigationMenuViewport hay không." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho Root." },
        ]} />
        <p className="mt-4 text-sm font-medium">NavigationMenuTrigger</p>
        <PropsTable rows={[
          { prop: "children", type: "React.ReactNode", description: "Nội dung của trigger." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho trigger." },
        ]} />
      </ShowcaseSection>

      {/* ── 4. Lưu ý ── */}
      <ShowcaseSection title="4. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Dùng <code className="text-xs font-mono">navigationMenuTriggerStyle()</code> để áp dụng style của trigger cho các liên kết trực tiếp (không có dropdown).</li>
          <li>Khi dùng với <code className="text-xs font-mono">next/link</code>, nên sử dụng pattern <code className="text-xs font-mono">legacyBehavior passHref</code> và bọc <code className="text-xs font-mono">NavigationMenuLink</code> bên trong.</li>
          <li><code className="text-xs font-mono">NavigationMenuViewport</code> là nơi chứa nội dung của các sub-menu, nó được tự động render trong <code className="text-xs font-mono">NavigationMenu</code> trừ khi set <code className="text-xs font-mono">viewport={'{false}'}</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
