"use client"

import * as React from "react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function PaginationPage() {
  return (
    <div className="p-8 space-y-12 max-w-4xl pb-20">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
        <p className="text-base text-muted-foreground">
          Hệ thống điều hướng phân trang giúp người dùng di chuyển giữa các tập dữ liệu lớn bằng cách chia nhỏ thành các trang.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Một thanh phân trang tiêu chuẩn bao gồm nút Previous, các trang số, dấu ba chấm (ellipsis) và nút Next.
        </p>
        <DemoBlock>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </DemoBlock>
        <CodeBlock code={`<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`} />
      </ShowcaseSection>

      {/* ── 2. Trạng thái Active ── */}
      <ShowcaseSection title="2. Trạng thái Active">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">isActive</code> trên <code className="text-xs font-mono">PaginationLink</code> để đánh dấu trang hiện tại.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              </PaginationContent>
            </Pagination>
            <Pagination>
              <PaginationContent>
                <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </DemoBlock>
        <CodeBlock code={`<PaginationLink href="#" isActive>1</PaginationLink>`} />
      </ShowcaseSection>

      {/* ── 3. Tùy biến Text ── */}
      <ShowcaseSection title="3. Tùy biến Text (Localization)">
        <p className="text-sm text-muted-foreground">
          Các nút điều hướng có thể thay đổi nhãn hiển thị thông qua prop <code className="text-xs font-mono">text</code>.
        </p>
        <DemoBlock>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" text="Trước" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" text="Tiếp theo" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </DemoBlock>
        <CodeBlock code={`<PaginationPrevious href="#" text="Trước" />
<PaginationNext href="#" text="Tiếp theo" />`} />
      </ShowcaseSection>

      {/* ── 4. Kích thước ── */}
      <ShowcaseSection title="4. Kích thước & Icons">
        <p className="text-sm text-muted-foreground">
          Mặc định các số trang có size <code className="text-xs font-mono">icon</code> (hình vuông), trong khi Previous/Next có size <code className="text-xs font-mono">default</code>.
        </p>
        <DemoBlock>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" size="sm">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" size="sm" isActive>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </DemoBlock>
        <CodeBlock code={`<PaginationLink href="#" size="sm">1</PaginationLink>`} />
      </ShowcaseSection>

      {/* ── 5. Icons Only ── */}
      <ShowcaseSection title="5. Icons Only (Data Table style)">
        <p className="text-sm text-muted-foreground">
          Chỉ sử dụng nút Previous và Next mà không có số trang. Kết hợp với <code className="text-xs font-mono">Select</code> để tạo thanh điều hướng thường thấy trong các bảng dữ liệu.
        </p>
        <DemoBlock>
          <div className="flex items-center justify-between gap-4 w-full">
            <Field orientation="horizontal" className="w-fit">
              <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
              <Select defaultValue="25">
                <SelectTrigger className="w-20" id="select-rows-per-page">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent align="start">
                  <SelectGroup>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Pagination className="mx-0 w-auto">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" text="" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" text="" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </DemoBlock>
        <CodeBlock code={`<div className="flex items-center justify-between gap-4">
  <Field orientation="horizontal" className="w-fit">
    <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
    <Select defaultValue="25">
      <SelectTrigger className="w-20" id="select-rows-per-page">
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="start">
        <SelectGroup>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="25">25</SelectItem>
          <SelectItem value="50">50</SelectItem>
          <SelectItem value="100">100</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Field>
  <Pagination className="mx-0 w-auto">
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious href="#" text="" />
      </PaginationItem>
      <PaginationItem>
        <PaginationNext href="#" text="" />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
</div>`} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <p className="mt-4 text-sm font-medium">PaginationLink</p>
        <PropsTable rows={[
          { prop: "isActive", type: "boolean", default_: "false", description: "Trạng thái trang hiện tại." },
          { prop: "size", type: '"default" | "sm" | "lg" | "icon"', default_: '"icon"', description: "Kích thước của link." },
          { prop: "href", type: "string", description: "Đường dẫn liên kết." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />

        <p className="mt-8 text-sm font-medium">PaginationPrevious / PaginationNext</p>
        <PropsTable rows={[
          { prop: "text", type: "string", default_: '"Previous" / "Next"', description: "Nhãn hiển thị bên cạnh icon." },
          { prop: "href", type: "string", description: "Đường dẫn liên kết." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 7. Lưu ý ── */}
      <ShowcaseSection title="7. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Thành phần <code className="text-xs font-mono">Pagination</code> bọc ngoài thẻ <code className="text-xs font-mono">&lt;nav&gt;</code> với aria-label phù hợp cho accessibility.</li>
          <li><code className="text-xs font-mono">PaginationLink</code> mặc định sử dụng thẻ <code className="text-xs font-mono">&lt;a&gt;</code> bên trong <code className="text-xs font-mono">Button</code>.</li>
          <li>Trên mobile, nhãn "Previous" và "Next" tự động ẩn đi (<code className="text-xs font-mono">hidden sm:block</code>) để tiết kiệm không gian, chỉ để lại icon.</li>
          <li>Dùng <code className="text-xs font-mono">PaginationEllipsis</code> để biểu thị còn nhiều trang nhưng không được liệt kê hết.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
