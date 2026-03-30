import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import {
  ShowcaseSection,
  DemoBlock,
  CodeBlock,
  PropsTable,
} from "@/app/design-system/_showcase"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function AvatarPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Avatar</h1>
        <p className="text-sm text-muted-foreground">
          Hiển thị ảnh đại diện của người dùng với fallback tự động, badge trạng thái, và hỗ trợ nhóm nhiều avatar.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AvatarImage</code> hiển thị ảnh;{" "}
          <code className="text-xs font-mono">AvatarFallback</code> tự động xuất hiện khi ảnh chưa tải xong hoặc lỗi.
        </p>
        <DemoBlock>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        `} />
      </ShowcaseSection>

      {/* ── 2. Sizes ── */}
      <ShowcaseSection title="2. Sizes">
        <p className="text-sm text-muted-foreground">
          Có 3 size: <code className="text-xs font-mono">sm</code> (24px),{" "}
          <code className="text-xs font-mono">default</code> (32px),{" "}
          <code className="text-xs font-mono">lg</code> (40px).
        </p>
        <DemoBlock>
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>LG</AvatarFallback>
            </Avatar>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Avatar size="sm">...</Avatar>
<Avatar size="default">...</Avatar>   {/* mặc định, có thể bỏ qua */}
<Avatar size="lg">...</Avatar>
        `} />
      </ShowcaseSection>

      {/* ── 3. Fallback only ── */}
      <ShowcaseSection title="3. Fallback">
        <p className="text-sm text-muted-foreground">
          Khi không có ảnh hoặc ảnh lỗi, <code className="text-xs font-mono">AvatarFallback</code> hiển thị chữ viết tắt.
          Text size tự thu nhỏ ở size <code className="text-xs font-mono">sm</code>.
        </p>
        <DemoBlock>
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar size="default">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar size="lg">
              <AvatarFallback>XY</AvatarFallback>
            </Avatar>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Avatar>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
        `} />
      </ShowcaseSection>

      {/* ── 4. AvatarBadge ── */}
      <ShowcaseSection title="4. AvatarBadge">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AvatarBadge</code> là dot trạng thái xuất hiện ở góc dưới phải.
          Kích thước badge tự scale theo size của Avatar. Ở size <code className="text-xs font-mono">sm</code>,
          icon bên trong badge bị ẩn.
        </p>
        <DemoBlock>
          <div className="flex items-center gap-4">
            <Avatar size="sm">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge />
            </Avatar>
            <Avatar size="default">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge />
            </Avatar>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              <AvatarBadge />
            </Avatar>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Avatar size="lg">
  <AvatarImage src="..." alt="..." />
  <AvatarFallback>CN</AvatarFallback>
  <AvatarBadge />          {/* dot trạng thái */}
</Avatar>
        `} />
      </ShowcaseSection>

      {/* ── 5. AvatarGroup ── */}
      <ShowcaseSection title="5. AvatarGroup">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">AvatarGroup</code> xếp chồng các avatar với khoảng cách âm.
          <code className="text-xs font-mono">AvatarGroupCount</code> hiển thị số lượng còn lại, tự scale
          kích thước theo size của các Avatar trong nhóm.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <AvatarGroup>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>XY</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+5</AvatarGroupCount>
            </AvatarGroup>
            <AvatarGroup>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarFallback>XY</AvatarFallback>
              </Avatar>
              <AvatarGroupCount>+5</AvatarGroupCount>
            </AvatarGroup>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<AvatarGroup>
  <Avatar>
    <AvatarImage src="..." alt="..." />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
  <AvatarGroupCount>+5</AvatarGroupCount>
</AvatarGroup>
        `} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;Avatar&gt;</h3>
            <PropsTable rows={[
              { prop: "size", type: '"default" | "sm" | "lg"', default_: '"default"', description: "Kích thước avatar: sm=24px, default=32px, lg=40px." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung cho wrapper." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AvatarImage&gt;</h3>
            <PropsTable rows={[
              { prop: "src", type: "string", description: "URL của ảnh đại diện." },
              { prop: "alt", type: "string", description: "Văn bản thay thế cho ảnh (bắt buộc về accessibility)." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AvatarFallback&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Nội dung hiển thị khi ảnh chưa tải hoặc lỗi — thường là 1–2 ký tự viết tắt." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AvatarBadge&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Tuỳ chọn: icon SVG bên trong badge (ẩn ở size sm)." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung — thường dùng để đổi màu nền (bg-green-500, bg-gray-400, v.v.)." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AvatarGroup&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: "Danh sách Avatar và AvatarGroupCount." },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;AvatarGroupCount&gt;</h3>
            <PropsTable rows={[
              { prop: "children", type: "ReactNode", description: 'Nội dung hiển thị — thường là chuỗi "+N".' },
              { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn cung cấp <code className="text-xs font-mono">AvatarFallback</code> kèm theo <code className="text-xs font-mono">AvatarImage</code> — đây là lưới an toàn khi ảnh tải thất bại.</li>
          <li>Thuộc tính <code className="text-xs font-mono">alt</code> trên <code className="text-xs font-mono">AvatarImage</code> là bắt buộc cho accessibility — dùng tên người dùng thực.</li>
          <li>Màu badge mặc định là <code className="text-xs font-mono">bg-primary</code>. Đổi màu trạng thái (online/offline/busy) bằng cách override <code className="text-xs font-mono">className</code> trên <code className="text-xs font-mono">AvatarBadge</code>.</li>
          <li>Trong <code className="text-xs font-mono">AvatarGroup</code>, tất cả <code className="text-xs font-mono">Avatar</code> nên cùng size để <code className="text-xs font-mono">AvatarGroupCount</code> scale đúng.</li>
          <li><code className="text-xs font-mono">AvatarGroup</code> sử dụng <code className="text-xs font-mono">-space-x-2</code> — nếu muốn khoảng cách khác, override bằng <code className="text-xs font-mono">className</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
