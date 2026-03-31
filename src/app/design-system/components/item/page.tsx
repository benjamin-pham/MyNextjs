"use client"

import * as React from "react"
import Image from "next/image"
import { Plus, PlusIcon, ChevronDownIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
)

const ShieldAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const BadgeCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4 text-muted-foreground">
    <path d="m9 18 6-6-6-6" />
  </svg>
)


const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4 text-muted-foreground">
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
)

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
  </svg>
)

/* ─── Examples ───────────────────────────────────────────────────────────── */

export function ItemAvatar() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia>
          <Avatar className="size-10">
            <AvatarImage src="https://github.com/evilrabbit.png" />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Evil Rabbit</ItemTitle>
          <ItemDescription>Last seen 5 months ago</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button
            size="icon-sm"
            variant="outline"
            className="rounded-full"
            aria-label="Invite"
          >
            <Plus />
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar className="hidden sm:flex">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="hidden sm:flex">
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>No Team Members</ItemTitle>
          <ItemDescription>
            Invite your team to collaborate on this project.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            Invite
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
]

export function ItemGroupExample() {
  return (
    <ItemGroup className="max-w-sm">
      {people.map((person) => (
        <Item key={person.username} variant="outline">
          <ItemMedia>
            <Avatar>
              <AvatarImage src={person.avatar} className="grayscale" />
              <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent className="gap-1">
            <ItemTitle>{person.username}</ItemTitle>
            <ItemDescription>{person.email}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="ghost" size="icon" className="rounded-full">
              <PlusIcon />
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}

const models = [
  {
    name: "v0-1.5-sm",
    description: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    credit: "Valeria Reverdo on Unsplash",
  },
  {
    name: "v0-1.5-lg",
    description: "Advanced thinking or reasoning.",
    image:
      "https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
    credit: "Michael Oeser on Unsplash",
  },
  {
    name: "v0-2.0-mini",
    description: "Open Source model for everyone.",
    image:
      "https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
    credit: "Cherry Laithang on Unsplash",
  },
]

export function ItemHeaderDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}

export function ItemDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          Select <ChevronDownIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end">
        <DropdownMenuGroup>
          {people.map((person) => (
            <DropdownMenuItem key={person.username}>
              <Item size="xs" className="w-full p-2">
                <ItemMedia>
                  <Avatar className="size-[--spacing(6.5)]">
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription className="leading-none">
                    {person.email}
                  </ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function ItemFullDemo() {
  return (
    <div className="w-full max-w-sm">
      <ItemGroup className="border rounded-xl bg-card overflow-hidden shadow-sm">
        <ItemHeader className="px-4 pt-4 border-b pb-2 bg-muted/30">
          <div className="flex items-center justify-between w-full">
            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Kho lưu trữ</span>
            <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Quản lý</span>
          </div>
        </ItemHeader>
        
        <Item variant="default" className="hover:bg-muted/50 transition-colors">
          <ItemMedia variant="image">
           <div className="size-full bg-blue-500/10 rounded-md flex items-center justify-center text-blue-600">
             <InboxIcon />
           </div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="font-semibold">Bản nháp thiết kế</ItemTitle>
            <ItemDescription>Dự án Antigravity - v2.4.0</ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon />
          </ItemActions>
        </Item>
        
        <ItemSeparator />
        
        <Item variant="default" className="hover:bg-muted/50 transition-colors">
          <ItemMedia variant="image">
           <div className="size-full bg-green-500/10 rounded-md flex items-center justify-center text-green-600">
             <BadgeCheckIcon />
           </div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="font-semibold">Tài liệu đã duyệt</ItemTitle>
            <ItemDescription>Chỉ số hiệu năng quý 1/2026</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline" className="h-7 text-xs">Xem</Button>
          </ItemActions>
        </Item>
        
        <ItemFooter className="px-4 py-3 border-t bg-muted/30">
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
            <span>Hệ thống đang hoạt động bình thường</span>
          </div>
        </ItemFooter>
      </ItemGroup>
    </div>
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function ItemPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Item</h1>
        <p className="text-sm text-muted-foreground">
          Component đa năng hiển thị nội dung với media, tiêu đề, mô tả và hành động — dùng để xây dựng danh sách, cài đặt, thông báo và nhiều loại UI khác.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemHeader,
  ItemFooter,
} from "@/components/ui/item"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Item>
  <ItemMedia variant="icon">
    <Icon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Title</ItemTitle>
    <ItemDescription>Description</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button>Action</Button>
  </ItemActions>
</Item>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Item tối thiản với tiêu đề và mô tả, không có media.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Item>
              <ItemContent>
                <ItemTitle>Hồ sơ của bạn đã được xác nhận.</ItemTitle>
                <ItemDescription>
                  Tài khoản của bạn đã được xác minh thành công và sẵn sàng sử dụng.
                </ItemDescription>
              </ItemContent>
            </Item>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item>
  <ItemContent>
    <ItemTitle>Hồ sơ của bạn đã được xác nhận.</ItemTitle>
    <ItemDescription>
      Tài khoản của bạn đã được xác minh thành công.
    </ItemDescription>
  </ItemContent>
</Item>`} />
      </ShowcaseSection>

      {/* ── 2. Variants ── */}
      <ShowcaseSection title="2. Variant">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">variant</code> để thay đổi kiểu hiển thị:{" "}
          {(["default", "outline", "muted"] as const).map((v, i, arr) => (
            <span key={v}>
              <code className="text-xs font-mono">{v}</code>
              {i < arr.length - 1 ? ", " : "."}
            </span>
          ))}
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            {(["default", "outline", "muted"] as const).map((v) => (
              <Item key={v} variant={v}>
                <ItemMedia variant="icon">
                  <InboxIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Variant: {v}</ItemTitle>
                  <ItemDescription>
                    {v === "default" && "Nền trong suốt, không có đường viền."}
                    {v === "outline" && "Kiểu outlined với đường viền hiển thị rõ."}
                    {v === "muted" && "Nền mờ dùng cho nội dung thứ cấp."}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item variant="default">...</Item>
<Item variant="outline">...</Item>
<Item variant="muted">...</Item>`} />
      </ShowcaseSection>

      {/* ── 3. Sizes ── */}
      <ShowcaseSection title="3. Size">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">size</code> để thay đổi kích thước:{" "}
          <code className="text-xs font-mono">default</code>,{" "}
          <code className="text-xs font-mono">sm</code>,{" "}
          <code className="text-xs font-mono">xs</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-3">
            {(["default", "sm", "xs"] as const).map((s) => (
              <Item key={s} variant="outline" size={s}>
                <ItemMedia variant="icon">
                  <InboxIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Size: {s}</ItemTitle>
                  <ItemDescription>
                    {s === "default" && "Kích thước tiêu chuẩn cho hầu hết trường hợp."}
                    {s === "sm" && "Kích thước nhỏ gọn cho layout dày đặc."}
                    {s === "xs" && "Kích thước nhỏ nhất hiện có."}
                  </ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item size="default">...</Item>
<Item size="sm">...</Item>
<Item size="xs">...</Item>`} />
      </ShowcaseSection>

      {/* ── 4. ItemActions ── */}
      <ShowcaseSection title="4. Hành động (ItemActions)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ItemActions</code> để thêm các nút bấm hoặc hành động bên phải item.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Item variant="outline">
              <ItemContent>
                <ItemTitle>Cài đặt tài khoản</ItemTitle>
                <ItemDescription>Quản lý các tuỳ chọn bảo mật và thông tin cá nhân.</ItemDescription>
              </ItemContent>
              <ItemActions>
                <Button size="sm" variant="outline">
                  Action
                </Button>
              </ItemActions>
            </Item>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item variant="outline">
  <ItemContent>
    <ItemTitle>Title</ItemTitle>
    <ItemDescription>Description</ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button>Action</Button>
  </ItemActions>
</Item>`} />
      </ShowcaseSection>

      {/* ── 5. Icon ── */}
      <ShowcaseSection title="5. Với Icon (ItemMedia variant=&quot;icon&quot;)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">{"<ItemMedia variant=\"icon\">"}</code> để hiển thị icon bên trái.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Item variant="outline">
              <ItemMedia variant="icon">
                <ShieldAlertIcon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>Phát hiện đăng nhập mới</ItemTitle>
                <ItemDescription>
                  Đăng nhập từ thiết bị lạ đã được phát hiện.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <button className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded border hover:bg-muted">
                  Xem
                </button>
              </ItemActions>
            </Item>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item variant="outline">
  <ItemMedia variant="icon">
    <ShieldAlertIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Phát hiện đăng nhập mới</ItemTitle>
    <ItemDescription>
      Đăng nhập từ thiết bị lạ đã được phát hiện.
    </ItemDescription>
  </ItemContent>
  <ItemActions>
    <Button variant="outline" size="sm">Xem</Button>
  </ItemActions>
</Item>`} />
      </ShowcaseSection>

      {/* ── 6. Avatar ── */}
      <ShowcaseSection title="6. Với Avatar (ItemMedia)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">{"<ItemMedia>"}</code> kết hợp với Avatar component để hiển thị hình đại diện.
        </p>
        <DemoBlock>
          <ItemAvatar />
        </DemoBlock>
        <CodeBlock code={`<ItemGroup className="max-w-lg flex flex-col gap-6">
  <Item variant="outline">
    <ItemMedia>
      <Avatar className="size-10">
        <AvatarImage src="https://github.com/evilrabbit.png" />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    </ItemMedia>
    <ItemContent>
      <ItemTitle>Evil Rabbit</ItemTitle>
      <ItemDescription>Last seen 5 months ago</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="icon-sm" variant="outline" className="rounded-full">
        <Plus />
      </Button>
    </ItemActions>
  </Item>
  
  <Item variant="outline">
    <ItemMedia>
      <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
        <Avatar><AvatarImage src="..." /><AvatarFallback>CN</AvatarFallback></Avatar>
        <Avatar><AvatarImage src="..." /><AvatarFallback>LR</AvatarFallback></Avatar>
        <Avatar><AvatarImage src="..." /><AvatarFallback>ER</AvatarFallback></Avatar>
      </div>
    </ItemMedia>
    <ItemContent>
      <ItemTitle>No Team Members</ItemTitle>
      <ItemDescription>Invite your team to collaborate.</ItemDescription>
    </ItemContent>
    <ItemActions>
      <Button size="sm" variant="outline">Invite</Button>
    </ItemActions>
  </Item>
</ItemGroup>`} />
      </ShowcaseSection>

      {/* ── 7. Image ── */}
      <ShowcaseSection title="7. Với Image (ItemMedia variant=&quot;image&quot;)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">{"<ItemMedia variant=\"image\">"}</code> để hiển thị ảnh thumbnail.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-2">
            {[
              { title: "Midnight City Lights", album: "Neon Dreams", duration: "3:45", hue: "270" },
              { title: "Coffee Shop Conversations", album: "The Morning Brew", duration: "4:05", hue: "210" },
              { title: "Digital Rain", album: "Cyber Symphony", duration: "3:30", hue: "160" },
            ].map((track) => (
              <Item key={track.title} variant="outline">
                <ItemMedia variant="image">
                  <div
                    className="flex size-full items-center justify-center rounded-sm"
                    style={{ background: `hsl(${track.hue} 60% 40%)` }}
                  >
                    <MusicIcon />
                  </div>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{track.title}</ItemTitle>
                  <ItemDescription>{track.album}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <span className="text-xs text-muted-foreground tabular-nums">{track.duration}</span>
                </ItemActions>
              </Item>
            ))}
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item variant="outline">
  <ItemMedia variant="image">
    <img src="..." alt="..." />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Midnight City Lights</ItemTitle>
    <ItemDescription>Neon Dreams</ItemDescription>
  </ItemContent>
  <ItemActions>
    <span>3:45</span>
  </ItemActions>
</Item>`} />
      </ShowcaseSection>

      {/* ── 8. Group & Separator ── */}
      <ShowcaseSection title="8. ItemGroup & ItemSeparator">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ItemGroup</code> để nhóm các item liên quan. Dùng{" "}
          <code className="text-xs font-mono">ItemSeparator</code> để phân tách các nhóm.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-8">
            <ItemGroup>
              <Item>
                <ItemMedia variant="icon"><BadgeCheckIcon /></ItemMedia>
                <ItemContent>
                  <ItemTitle>Cài đặt tài khoản</ItemTitle>
                  <ItemDescription>Quản lý thông tin hồ sơ</ItemDescription>
                </ItemContent>
                <ChevronRightIcon />
              </Item>
              <ItemSeparator />
              <Item>
                <ItemMedia variant="icon"><ShieldAlertIcon /></ItemMedia>
                <ItemContent>
                  <ItemTitle>Bảo mật</ItemTitle>
                  <ItemDescription>Mật khẩu và xác thực</ItemDescription>
                </ItemContent>
                <ChevronRightIcon />
              </Item>
            </ItemGroup>

            <ItemGroupExample />
          </div>
        </DemoBlock>
        <CodeBlock code={`<ItemGroup className="max-w-sm">
  {people.map((person) => (
    <Item key={person.username} variant="outline">
      <ItemMedia>
        <Avatar>
          <AvatarImage src={person.avatar} className="grayscale" />
          <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent className="gap-1">
        <ItemTitle>{person.username}</ItemTitle>
        <ItemDescription>{person.email}</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="ghost" size="icon" className="rounded-full">
          <PlusIcon />
        </Button>
      </ItemActions>
    </Item>
  ))}
</ItemGroup>`} />
      </ShowcaseSection>

      {/* ── 9. ItemHeader & ItemFooter ── */}
      <ShowcaseSection title="9. ItemHeader & ItemFooter">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">ItemHeader</code> để thêm header bên trên nội dung (thường là media/ảnh lớn),{" "}
          <code className="text-xs font-mono">ItemFooter</code> để thêm footer bên dưới.
        </p>
        <DemoBlock>
          <div className="w-full max-w-2xl space-y-12">
            <div className="w-full max-w-sm space-y-3">
              {[
                { model: "GPT-4o", desc: "Tác vụ hằng ngày & tạo UI.", badge: "Phổ biến", badgeClass: "bg-primary/10 text-primary" },
                { model: "Claude 3.5", desc: "Suy luận nâng cao và phân tích.", badge: "Nâng cao", badgeClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400" },
              ].map((m) => (
                <Item key={m.model} variant="outline">
                  <ItemHeader>
                    <span className="text-xs font-semibold">{m.model}</span>
                    <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${m.badgeClass}`}>{m.badge}</span>
                  </ItemHeader>
                  <ItemContent>
                    <ItemDescription>{m.desc}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </div>

            <ItemHeaderDemo />
          </div>
        </DemoBlock>
        <CodeBlock code={`<ItemGroup className="grid grid-cols-3 gap-4">
  {models.map((model) => (
    <Item key={model.name} variant="outline">
      <ItemHeader>
        <Image
          src={model.image}
          alt={model.name}
          width={128}
          height={128}
          className="aspect-square w-full rounded-sm object-cover"
        />
      </ItemHeader>
      <ItemContent>
        <ItemTitle>{model.name}</ItemTitle>
        <ItemDescription>{model.description}</ItemDescription>
      </ItemContent>
    </Item>
  ))}
</ItemGroup>`} />
      </ShowcaseSection>

      {/* ── 10. asChild / Link ── */}
      <ShowcaseSection title="10. asChild — Render thành Link">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">asChild</code> để render Item thành thẻ{" "}
          <code className="text-xs font-mono">{"<a>"}</code>. Trạng thái hover/focus được áp dụng tự động.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-2">
            <Item asChild variant="outline">
              <a href="#">
                <ItemMedia variant="icon">
                  <BadgeCheckIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Xem tài liệu</ItemTitle>
                  <ItemDescription>Tìm hiểu cách bắt đầu với các components.</ItemDescription>
                </ItemContent>
                <ChevronRightIcon />
              </a>
            </Item>
            <Item asChild variant="muted">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ItemMedia variant="icon">
                  <ExternalLinkIcon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Tài nguyên bên ngoài</ItemTitle>
                  <ItemDescription>Mở trong tab mới với thuộc tính bảo mật.</ItemDescription>
                </ItemContent>
                <ExternalLinkIcon />
              </a>
            </Item>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Item asChild variant="outline">
  <a href="/docs">
    <ItemMedia variant="icon"><Icon /></ItemMedia>
    <ItemContent>
      <ItemTitle>Xem tài liệu</ItemTitle>
      <ItemDescription>Tìm hiểu cách bắt đầu với components.</ItemDescription>
    </ItemContent>
  </a>
</Item>`} />
      </ShowcaseSection>

      {/* ── 11. Dropdown ── */}
      <ShowcaseSection title="11. Trong Dropdown">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Item</code> với kích thước{" "}
          <code className="text-xs font-mono">xs</code> để hiển thị thông tin chi tiết trong menu dropdown.
        </p>
        <DemoBlock>
          <ItemDropdown />
        </DemoBlock>
        <CodeBlock code={`<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Select <ChevronDownIcon /></Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48" align="end">
    <DropdownMenuGroup>
      {people.map((person) => (
        <DropdownMenuItem key={person.username}>
          <Item size="xs" className="w-full p-2">
            <ItemMedia>
              <Avatar className="size-[--spacing(6.5)]">
                <AvatarImage src={person.avatar} className="grayscale" />
                <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent className="gap-0">
              <ItemTitle>{person.username}</ItemTitle>
              <ItemDescription className="leading-none">{person.email}</ItemDescription>
            </ItemContent>
          </Item>
        </DropdownMenuItem>
      ))}
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`} />
      </ShowcaseSection>

      {/* ── 12. Full Demo ── */}
      <ShowcaseSection title="12. Demo tổng hợp (Tất cả thành phần)">
        <p className="text-sm text-muted-foreground">
          Ví dụ kết hợp tất cả các thành phần: <code className="text-xs font-mono">ItemGroup</code>, <code className="text-xs font-mono">Item</code>,{" "}
          <code className="text-xs font-mono">ItemHeader</code>, <code className="text-xs font-mono">ItemFooter</code>,{" "}
          <code className="text-xs font-mono">ItemSeparator</code>, <code className="text-xs font-mono">ItemMedia</code>,{" "}
          <code className="text-xs font-mono">ItemContent</code>, <code className="text-xs font-mono">ItemActions</code>.
        </p>
        <DemoBlock>
          <ItemFullDemo />
        </DemoBlock>
        <CodeBlock code={`<ItemGroup className="border rounded-xl ...">
  <ItemHeader>...</ItemHeader>
  
  <Item>
    <ItemMedia>...</ItemMedia>
    <ItemContent>
      <ItemTitle>...</ItemTitle>
      <ItemDescription>...</ItemDescription>
    </ItemContent>
    <ItemActions>...</ItemActions>
  </Item>
  
  <ItemSeparator />
  
  <Item>...</Item>
  
  <ItemFooter>...</ItemFooter>
</ItemGroup>`} />
      </ShowcaseSection>

      {/* ── 13. Props reference ── */}
      <ShowcaseSection title="13. Props reference — Item">
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "outline" | "muted"', default_: '"default"', description: "Kiểu hiển thị của item." },
          { prop: "size", type: '"default" | "sm" | "xs"', default_: '"default"', description: "Kích thước của item." },
          { prop: "asChild", type: "boolean", default_: "false", description: 'Khi true, render thành thẻ con (ví dụ <a>). Dùng với Slot.' },
          { prop: "className", type: "string", default_: "—", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      <ShowcaseSection title="Props reference — ItemMedia">
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "icon" | "image"', default_: '"default"', description: "Kiểu media: icon tự động set size SVG, image hiển thị thumbnail có overflow hidden." },
          { prop: "className", type: "string", default_: "—", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 14. Lưu ý ── */}
      <ShowcaseSection title="14. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            Dùng <code className="text-xs font-mono">Item</code> khi cần hiển thị nội dung (title, description, actions). Dùng{" "}
            <code className="text-xs font-mono">Field</code> khi cần form input (checkbox, radio, select...).
          </li>
          <li>
            <code className="text-xs font-mono">ItemGroup</code> tự động điều chỉnh <code className="text-xs font-mono">gap</code>{" "}
            theo <code className="text-xs font-mono">size</code> của item con thông qua{" "}
            <code className="text-xs font-mono">has-data-[size=sm]</code>.
          </li>
          <li>
            <code className="text-xs font-mono">ItemMedia variant="icon"</code> tự động set{" "}
            <code className="text-xs font-mono">size-4</code> cho icon SVG bên trong.
          </li>
          <li>
            <code className="text-xs font-mono">ItemMedia variant="image"</code> tự động điều chỉnh kích thước thumbnail{" "}
            (<code className="text-xs font-mono">size-10 → size-8 → size-6</code>) theo size của item cha.
          </li>
          <li>
            Khi dùng <code className="text-xs font-mono">asChild</code>, mọi trạng thái hover/focus sẽ được áp dụng lên thẻ con thay vì thẻ{" "}
            <code className="text-xs font-mono">div</code>.
          </li>
          <li>
            <code className="text-xs font-mono">ItemDescription</code> có sẵn <code className="text-xs font-mono">line-clamp-2</code>{" "}
            — dài hơn 2 dòng sẽ bị cắt ngắn.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
