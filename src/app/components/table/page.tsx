import { MoreHorizontal as MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function TablePage() {
  return (
    <div className="p-8 space-y-12 max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Table</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần bảng mạnh mẽ để hiển thị tập dữ liệu có cấu trúc.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Header</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>Cell Content</TableCell>
    </TableRow>
  </TableBody>
</Table>`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Một bảng tiêu chuẩn với đầy đủ các thành phần: Table, Header, Body, Row, Head, và Cell.
        </p>
        <DemoBlock>
          <Table>
            <TableCaption>Danh sách các hóa đơn gần đây của bạn.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DemoBlock>
        <CodeBlock code={`
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.invoice}>
        <TableCell className="font-medium">{invoice.invoice}</TableCell>
        <TableCell>{invoice.paymentStatus}</TableCell>
        <TableCell>{invoice.paymentMethod}</TableCell>
        <TableCell className="text-right">{invoice.totalAmount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
        `} />
      </ShowcaseSection>

      {/* ── 2. Chân bảng (Footer) ── */}
      <ShowcaseSection title="2. Chân bảng (Footer)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">TableFooter</code> để hiển thị các hàng tổng kết ở cuối bảng.
        </p>
        <DemoBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên mặt hàng</TableHead>
                <TableHead className="text-right">Số lượng</TableHead>
                <TableHead className="text-right">Đơn giá</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>MacBook Pro M3</TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="text-right">$1,999.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Magic Mouse</TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="text-right">$79.00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2}>Tổng cộng</TableCell>
                <TableCell className="text-right">$2,078.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </DemoBlock>
        <CodeBlock code={`
<TableFooter>
  <TableRow>
    <TableCell colSpan={2}>Tổng cộng</TableCell>
    <TableCell className="text-right">$2,078.00</TableCell>
  </TableRow>
</TableFooter>
        `} />
      </ShowcaseSection>


      {/* ── 3. Căn chỉnh & Tùy biến ── */}
      <ShowcaseSection title="3. Căn chỉnh & Tùy biến">
        <p className="text-sm text-muted-foreground">
          Sử dụng Tailwind CSS để căn chỉnh nội dung hoặc tạo hiệu ứng dòng kẻ sọc.
        </p>
        <DemoBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Mặt hàng (Căn trái)</TableHead>
                <TableHead className="text-center">Số lượng (Căn giữa)</TableHead>
                <TableHead className="text-right">Giá (Căn phải)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="[&_tr:nth-child(even)]:bg-muted/50">
              <TableRow>
                <TableCell>Sản phẩm A</TableCell>
                <TableCell className="text-center">10</TableCell>
                <TableCell className="text-right">$100.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sản phẩm B</TableCell>
                <TableCell className="text-center">5</TableCell>
                <TableCell className="text-right">$50.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sản phẩm C</TableCell>
                <TableCell className="text-center">2</TableCell>
                <TableCell className="text-right">$20.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DemoBlock>
        <CodeBlock code={`
{/* Striped rows */}
<TableBody className="[&_tr:nth-child(even)]:bg-muted/50"> ... </TableBody>

{/* Text alignment */}
<TableCell className="text-left"> ... </TableCell>
<TableCell className="text-center"> ... </TableCell>
<TableCell className="text-right"> ... </TableCell>
        `} />
      </ShowcaseSection>

      {/* ── 4. Hành động (Actions) ── */}
      <ShowcaseSection title="4. Hành động (Actions)">
        <p className="text-sm text-muted-foreground">
          Kết hợp với <code className="text-xs font-mono">DropdownMenu</code> để thêm các thao tác điều khiển cho từng hàng trong bảng.
        </p>
        <DemoBlock>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { name: "Wireless Mouse", price: "$29.99" },
                { name: "Mechanical Keyboard", price: "$129.99" },
                { name: "USB-C Hub", price: "$49.99" },
              ].map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="size-8">
                          <MoreHorizontalIcon />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DemoBlock>
        <CodeBlock code={`
import { MoreHorizontalIcon } from "lucide-react"

<TableCell className="text-right">
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon">
        <MoreHorizontalIcon />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Duplicate</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</TableCell>
        `} />
      </ShowcaseSection>

      {/* ── 5. Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;Table&gt;</h3>
            <PropsTable rows={[
              { prop: "className", type: "string", description: "Class Tailwind cho thẻ table." },
              { prop: "children", type: "ReactNode", description: "Nội dung bảng (TableHeader, TableBody, v.v.)." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;TableHeader&gt;, &lt;TableBody&gt;, &lt;TableFooter&gt;</h3>
            <PropsTable rows={[
              { prop: "className", type: "string", description: "Class Tailwind cho các phân đoạn bảng (thead, tbody, tfoot)." },
              { prop: "children", type: "ReactNode", description: "Các hàng của bảng (TableRow)." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;TableRow&gt;</h3>
            <PropsTable rows={[
              { prop: "className", type: "string", description: "Class Tailwind cho dòng (tr). Mặc định có hiệu ứng hover." },
              { prop: "children", type: "ReactNode", description: "Các ô của bảng (TableHead, TableCell)." },
            ]} />
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold font-mono">&lt;TableHead&gt;, &lt;TableCell&gt;</h3>
            <PropsTable rows={[
              { prop: "className", type: "string", description: "Class Tailwind cho ô (th, td). Dùng để căn lề hoặc set width." },
              { prop: "children", type: "ReactNode", description: "Nội dung ô." },
            ]} />
          </div>
        </div>
      </ShowcaseSection>

      {/* ── 6. Lưu ý ── */}
      <ShowcaseSection title="6. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Thành phần <code className="text-xs font-mono">Table</code> sử dụng <code className="text-xs font-mono">caption-bottom</code> cho tiêu đề bảng theo mặc định.</li>
          <li>Wrapper <code className="text-xs font-mono">overflow-x-auto</code> (trong thẻ div của Table) đảm bảo bảng không bị tràn layout khi có quá nhiều cột.</li>
          <li>Để có các bảng dữ liệu nâng cao (Sorting, Filtering, Pagination), hãy sử dụng <b>TanStack Table</b> kết hợp với các component này.</li>
          <li>Sử dụng <code className="text-xs font-mono">whitespace-nowrap</code> nếu bạn muốn ngăn việc ngắt dòng tự động trong các ô dữ liệu quan trọng.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
