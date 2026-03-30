import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Search } from "lucide-react"


import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const InboxIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-10 text-muted-foreground">
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
)

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-10 text-muted-foreground">
    <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
  </svg>
)

const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-10 text-muted-foreground">
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
)

const FileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" />
  </svg>
)

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M5 12h14M12 5v14" />
  </svg>
)

const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-10 text-muted-foreground">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
  </svg>
)

const UploadIconSm = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" x2="12" y1="3" y2="15" />
  </svg>
)

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
)

/* ─── components ─────────────────────────────────────────────────────────── */

export function EmptyAvatar() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="default">
          <Avatar className="size-12">
            <AvatarImage
              src="https://github.com/shadcn.png"
              className="grayscale"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>User Offline</EmptyTitle>
        <EmptyDescription>
          This user is currently offline. You can leave a message to notify them
          or try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">Leave Message</Button>
      </EmptyContent>
    </Empty>
  )
}

export function EmptyAvatarGroup() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
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
        </EmptyMedia>
        <EmptyTitle>No Team Members</EmptyTitle>
        <EmptyDescription>
          Invite your team to collaborate on this project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button size="sm">
          <PlusIcon />
          Invite Members
        </Button>
      </EmptyContent>
    </Empty>
  )
}

export function EmptyInputGroup() {
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex flex-col items-center gap-4 w-full max-w-sm">
          <InputGroup className="w-full">
            <InputGroupInput placeholder="Try searching for pages..." />
            <InputGroupAddon>
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end" className="pr-1.5">
              <Kbd>/</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <EmptyDescription>
            Need help? <a href="#">Contact support</a>
          </EmptyDescription>
        </div>
      </EmptyContent>
    </Empty>
  )
}



/* ─── page ───────────────────────────────────────────────────────────────── */


export default function EmptyPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Empty</h1>
        <p className="text-sm text-muted-foreground">
          Trạng thái rỗng dùng để thông báo khi không có dữ liệu — thường xuất hiện trong bảng, danh sách, hoặc kết quả tìm kiếm trống.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Empty>
  <EmptyHeader>
    <EmptyMedia>...</EmptyMedia>
    <EmptyTitle>Tiêu đề</EmptyTitle>
    <EmptyDescription>Mô tả ngắn</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Hành động</Button>
  </EmptyContent>
</Empty>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia>
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>Không có dữ liệu</EmptyTitle>
              <EmptyDescription>Chưa có mục nào được thêm vào.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </DemoBlock>
        <CodeBlock code={`<Empty className="border">
  <EmptyHeader>
    <EmptyMedia>
      <InboxIcon />
    </EmptyMedia>
    <EmptyTitle>Không có dữ liệu</EmptyTitle>
    <EmptyDescription>Chưa có mục nào được thêm vào.</EmptyDescription>
  </EmptyHeader>
</Empty>`} />
      </ShowcaseSection>

      {/* ── 2. Với nút hành động ── */}
      <ShowcaseSection title="2. Với nút hành động">
        <DemoBlock>
          <Empty className="border">
            <EmptyHeader>
              <EmptyMedia>
                <FolderIcon />
              </EmptyMedia>
              <EmptyTitle>Thư mục trống</EmptyTitle>
              <EmptyDescription>Bắt đầu bằng cách tạo tệp hoặc tải lên từ máy tính của bạn.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm">
                <PlusIcon />
                Tạo tệp mới
              </Button>
              <Button size="sm" variant="outline">
                <UploadIconSm />
                Tải lên
              </Button>
            </EmptyContent>
          </Empty>
        </DemoBlock>
        <CodeBlock code={`<Empty className="border">
  <EmptyHeader>
    <EmptyMedia>
      <FolderIcon />
    </EmptyMedia>
    <EmptyTitle>Thư mục trống</EmptyTitle>
    <EmptyDescription>
      Bắt đầu bằng cách tạo tệp hoặc tải lên từ máy tính của bạn.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">
      <PlusIcon />
      Tạo tệp mới
    </Button>
    <Button size="sm" variant="outline">Tải lên</Button>
  </EmptyContent>
</Empty>`} />
      </ShowcaseSection>

      {/* ── 3. EmptyMedia variants ── */}
      <ShowcaseSection title="3. EmptyMedia variants">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">EmptyMedia</code> có 2 variant: <code className="text-xs font-mono">default</code> (nền trong suốt) và <code className="text-xs font-mono">icon</code> (nền muted, kích thước cố định 8×8, icon 4×4).
        </p>
        <DemoBlock className="gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-muted-foreground font-mono">variant="default"</span>
            <Empty className="border max-w-xs">
              <EmptyHeader>
                <EmptyMedia variant="default">
                  <InboxIcon />
                </EmptyMedia>
                <EmptyTitle>Default</EmptyTitle>
                <EmptyDescription>Icon lớn, nền trong suốt.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-muted-foreground font-mono">variant="icon"</span>
            <Empty className="border max-w-xs">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <FileIcon />
                </EmptyMedia>
                <EmptyTitle>Icon</EmptyTitle>
                <EmptyDescription>Icon nhỏ, nền muted, bo góc.</EmptyDescription>
              </EmptyHeader>
            </Empty>
          </div>
        </DemoBlock>
        <CodeBlock code={`{/* Icon lớn, nền trong suốt (mặc định) */}
<EmptyMedia variant="default">
  <LargeIcon />
</EmptyMedia>

{/* Icon nhỏ 4×4 trong khung 8×8 nền muted */}
<EmptyMedia variant="icon">
  <SmallIcon />
</EmptyMedia>`} />
      </ShowcaseSection>

      {/* ── 4. Ví dụ thực tế ── */}
      <ShowcaseSection title="4. Ví dụ thực tế">
        <p className="text-sm text-muted-foreground">
          Các trường hợp sử dụng phổ biến: kết quả tìm kiếm trống, bảng dữ liệu rỗng, upload file.
        </p>

        {/* Search empty */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tìm kiếm không có kết quả</p>
          <DemoBlock className="min-h-[200px]">
            <Empty className="border max-w-sm">
              <EmptyHeader>
                <EmptyMedia>
                  <SearchIcon />
                </EmptyMedia>
                <EmptyTitle>Không tìm thấy kết quả</EmptyTitle>
                <EmptyDescription>
                  Không có kết quả nào khớp với <strong>"shadcn ui"</strong>. Hãy thử từ khóa khác.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="outline" size="sm">
                  <FilterIcon />
                  Xóa bộ lọc
                </Button>
              </EmptyContent>
            </Empty>
          </DemoBlock>
        </div>

        {/* Upload empty */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Khu vực tải lên tệp</p>
          <DemoBlock className="min-h-[200px]">
            <Empty className="border border-dashed max-w-sm cursor-pointer hover:bg-muted/30 transition-colors">
              <EmptyHeader>
                <EmptyMedia>
                  <UploadIcon />
                </EmptyMedia>
                <EmptyTitle>Kéo & thả tệp vào đây</EmptyTitle>
                <EmptyDescription>
                  Hỗ trợ PNG, JPG, PDF tối đa 10 MB.{" "}
                  <a href="#">Chọn từ máy tính</a>
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          </DemoBlock>
        </div>
      </ShowcaseSection>

      {/* ── 5. Với Avatar ── */}
      <ShowcaseSection title="5. Với Avatar">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Avatar</code> bên trong <code className="text-xs font-mono">EmptyMedia</code> để hiển thị trạng thái rỗng liên quan đến người dùng hoặc hồ sơ.
        </p>
        <DemoBlock>
          <EmptyAvatar />
        </DemoBlock>
        <CodeBlock code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Empty className="border">
  <EmptyHeader>
    <EmptyMedia variant="default">
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" className="grayscale" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
    </EmptyMedia>
    <EmptyTitle>User Offline</EmptyTitle>
    <EmptyDescription>
      This user is currently offline. You can leave a message to notify them or try again later.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">Leave Message</Button>
  </EmptyContent>
</Empty>`} />
      </ShowcaseSection>

      {/* ── 6. Với Avatar Group ── */}
      <ShowcaseSection title="6. Với Avatar Group">
        <p className="text-sm text-muted-foreground">
          Hiển thị một nhóm <code className="text-xs font-mono">Avatar</code> để biểu thị danh sách thành viên hoặc đội ngũ đang trống.
        </p>
        <DemoBlock>
          <EmptyAvatarGroup />
        </DemoBlock>
        <CodeBlock code={`<Empty className="border">
  <EmptyHeader>
    <EmptyMedia>
      <div className="flex -space-x-2 *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </EmptyMedia>
    <EmptyTitle>No Team Members</EmptyTitle>
    <EmptyDescription>
      Invite your team to collaborate on this project.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button size="sm">
      <PlusIcon />
      Invite Members
    </Button>
  </EmptyContent>
</Empty>`} />
      </ShowcaseSection>

      {/* ── 7. Với Input Group ── */}
      <ShowcaseSection title="7. Với Input Group">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">InputGroup</code> để tạo trang 404 hoặc tìm kiếm không kết quả có tích hợp ô tìm kiếm.
        </p>
        <DemoBlock>
          <EmptyInputGroup />
        </DemoBlock>
        <CodeBlock code={`<Empty className="border">
  <EmptyHeader>
    <EmptyTitle>404 - Not Found</EmptyTitle>
    <EmptyDescription>
      The page you're looking for doesn't exist. Try searching for what you need below.
    </EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      <InputGroup className="w-full">
        <InputGroupInput placeholder="Try searching for pages..." />
        <InputGroupAddon>
          <Search className="size-4" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end" className="pr-1.5">
          <Kbd>/</Kbd>
        </InputGroupAddon>
      </InputGroup>
      <EmptyDescription>
        Need help? <a href="#">Contact support</a>
      </EmptyDescription>
    </div>
  </EmptyContent>
</Empty>`} />
      </ShowcaseSection>




      {/* ── 8. Không có border ── */}
      <ShowcaseSection title="8. Không có border (embedded)">



        <p className="text-sm text-muted-foreground">
          Mặc định <code className="text-xs font-mono">Empty</code> không có border — bạn tự thêm{" "}
          <code className="text-xs font-mono">className="border"</code> khi cần. Phù hợp để nhúng trực tiếp vào bên trong panel hoặc bảng.
        </p>
        <DemoBlock className="bg-muted/20">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <InboxIcon />
              </EmptyMedia>
              <EmptyTitle>Hộp thư trống</EmptyTitle>
              <EmptyDescription>Tất cả tin nhắn đã được xử lý.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </DemoBlock>
        <CodeBlock code={`{/* Không có border — nhúng trong table/panel */}
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon"><InboxIcon /></EmptyMedia>
    <EmptyTitle>Hộp thư trống</EmptyTitle>
    <EmptyDescription>Tất cả tin nhắn đã được xử lý.</EmptyDescription>
  </EmptyHeader>
</Empty>`} />
      </ShowcaseSection>

      {/* ── 9. Props reference ── */}
      <ShowcaseSection title="9. Props reference">



        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Empty</p>
        <PropsTable rows={[
          { prop: "className", type: "string", description: 'Thêm "border" để hiện viền nét đứt. Mặc định không có border.' },
          { prop: "...props", type: "React.ComponentProps<\"div\">", description: "Tất cả props của <div> đều được forward." },
        ]} />

        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 mt-4">EmptyMedia</p>
        <PropsTable rows={[
          { prop: "variant", type: '"default" | "icon"', default_: '"default"', description: 'default: nền trong suốt, icon lớn tự do. icon: khung 8×8 nền muted, icon cố định 4×4.' },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 mt-4">EmptyTitle / EmptyDescription / EmptyHeader / EmptyContent</p>
        <PropsTable rows={[
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
          { prop: "...props", type: "React.ComponentProps<\"div\">", description: "Tất cả props của <div> đều được forward." },
        ]} />
      </ShowcaseSection>

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">



        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li><code className="text-xs font-mono">Empty</code> mặc định không có border — thêm <code className="text-xs font-mono">className="border"</code> để hiện viền nét đứt.</li>
          <li>Dùng <code className="text-xs font-mono">EmptyHeader</code> để nhóm icon + tiêu đề + mô tả, <code className="text-xs font-mono">EmptyContent</code> cho các nút hành động bên dưới.</li>
          <li><code className="text-xs font-mono">EmptyMedia variant="icon"</code> phù hợp khi không có ảnh minh họa lớn — icon nhỏ gọn trong khung bo góc.</li>
          <li><code className="text-xs font-mono">EmptyDescription</code> tự động style thẻ <code className="text-xs font-mono">&lt;a&gt;</code> bên trong với underline và hover.</li>
          <li>Component sử dụng <code className="text-xs font-mono">text-balance</code> — văn bản ngắn nhiều dòng sẽ tự cân bằng độ rộng.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
