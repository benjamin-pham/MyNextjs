import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ShowcaseSection, CodeBlock, PropsTable } from "@/app/components/_showcase"

export default function BreadcrumbShowcasePage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Breadcrumb</h1>
        <p className="text-sm text-muted-foreground">
          Điều hướng phân cấp giúp người dùng biết vị trí hiện tại trong ứng dụng và quay lại các cấp trước.
        </p>
      </div>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Gồm <code className="text-xs font-mono">Breadcrumb</code> →{" "}
          <code className="text-xs font-mono">BreadcrumbList</code> →{" "}
          <code className="text-xs font-mono">BreadcrumbItem</code> xen kẽ với{" "}
          <code className="text-xs font-mono">BreadcrumbSeparator</code>. Mục cuối dùng{" "}
          <code className="text-xs font-mono">BreadcrumbPage</code> thay vì{" "}
          <code className="text-xs font-mono">BreadcrumbLink</code>.
        </p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CodeBlock code={`
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
        `} />
      </ShowcaseSection>

      {/* ── 2. Với Next.js Link ── */}
      <ShowcaseSection title="2. Với Next.js Link">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">asChild</code> trên{" "}
          <code className="text-xs font-mono">BreadcrumbLink</code> để render thành{" "}
          <code className="text-xs font-mono">&lt;Link&gt;</code> của Next.js, giữ nguyên client-side navigation.
        </p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/components">Components</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CodeBlock code={`
<BreadcrumbLink asChild>
  <Link href="/">Home</Link>
</BreadcrumbLink>
        `} />
      </ShowcaseSection>

      {/* ── 3. Với ellipsis ── */}
      <ShowcaseSection title="3. Với ellipsis (rút gọn)">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">BreadcrumbEllipsis</code> để ẩn bớt các cấp trung gian khi đường dẫn quá dài.
        </p>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CodeBlock code={`
<BreadcrumbItem>
  <BreadcrumbEllipsis />
</BreadcrumbItem>
        `} />
      </ShowcaseSection>

      {/* ── 4. Custom separator ── */}
      <ShowcaseSection title="4. Custom separator">
        <p className="text-sm text-muted-foreground">
          Truyền nội dung vào <code className="text-xs font-mono">BreadcrumbSeparator</code> để thay ký tự phân cách mặc định (chevron).
        </p>
        <div className="space-y-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>·</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>·</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <CodeBlock code={`
<BreadcrumbSeparator>/</BreadcrumbSeparator>
<BreadcrumbSeparator>·</BreadcrumbSeparator>
        `} />
      </ShowcaseSection>

      {/* ── 5. Nhiều cấp ── */}
      <ShowcaseSection title="5. Nhiều cấp phân cấp">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/settings">Settings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard/settings/profile">Profile</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Edit</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CodeBlock code={`
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbLink href="/dashboard/settings">Settings</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Edit</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
        `} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <PropsTable rows={[
          { prop: "BreadcrumbLink › asChild", type: "boolean", default_: "false", description: "Render thành thẻ con (vd: <Link>) thay vì <a>. Dùng với Slot." },
          { prop: "BreadcrumbLink › href", type: "string", description: "URL điều hướng khi không dùng asChild." },
          { prop: "BreadcrumbSeparator › children", type: "ReactNode", description: "Ký tự/icon phân cách. Mặc định là ChevronRight." },
          { prop: "BreadcrumbPage", type: "—", description: "Mục cuối (trang hiện tại). Có aria-current=\"page\" và aria-disabled=\"true\"." },
          { prop: "BreadcrumbEllipsis", type: "—", description: "Icon '...' để rút gọn các cấp trung gian." },
        ]} />
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>
            <code className="text-xs font-mono">BreadcrumbSeparator</code> phải đặt trực tiếp trong{" "}
            <code className="text-xs font-mono">BreadcrumbList</code> (là <code className="text-xs font-mono">&lt;li&gt;</code>), không đặt bên trong <code className="text-xs font-mono">BreadcrumbItem</code>.
          </li>
          <li>
            Mục cuối luôn dùng <code className="text-xs font-mono">BreadcrumbPage</code> — component này tự thêm{" "}
            <code className="text-xs font-mono">aria-current="page"</code> cho screen reader.
          </li>
          <li>
            Dùng <code className="text-xs font-mono">asChild</code> trên <code className="text-xs font-mono">BreadcrumbLink</code> khi cần Next.js{" "}
            <code className="text-xs font-mono">&lt;Link&gt;</code> để có prefetch và client-side routing.
          </li>
          <li>
            <code className="text-xs font-mono">BreadcrumbEllipsis</code> chỉ là icon tĩnh — nếu muốn expand/collapse cần tự thêm state.
          </li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
