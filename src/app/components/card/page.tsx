import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShowcaseSection, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const MoreHorizontalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-icon="inline-start">
    <path d="M20 6 9 17l-5-5" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function CardPage() {
  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Card</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần chứa nội dung linh hoạt, thường được dùng để nhóm các thông tin liên quan theo bố cục trực quan (như bài viết, thông báo, form đăng nhập, v.v.).
        </p>
      </div>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Một cấu trúc Card đầy đủ thường bao gồm <strong>Header</strong> (chứa Title và Description), <strong>Content</strong> (nội dung chính), và <strong>Footer</strong> (chứa các hành động hoặc trạng thái phụ).
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Dự án Alpha</CardTitle>
              <CardDescription>Cập nhật lần cuối 2 giờ trước</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Đang trong quá trình hoàn thiện giao diện người dùng. Tiến độ hiện tại đạt 80%.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="outline">Đang tiến hành</Badge>
              <Button size="sm">Xem chi tiết</Button>
            </CardFooter>
          </Card>
        </div>
        <CodeBlock code={`
<Card>
  <CardHeader>
    <CardTitle>Dự án Alpha</CardTitle>
    <CardDescription>Cập nhật lần cuối...</CardDescription>
  </CardHeader>

  <CardContent>
    <p>Nội dung chính của thẻ...</p>
  </CardContent>

  <CardFooter className="flex justify-between">
    <Badge>Trạng thái</Badge>
    <Button>Hành động</Button>
  </CardFooter>
</Card>
        `} />
      </ShowcaseSection>

      {/* ── 2. Card Size (sm) ── */}
      <ShowcaseSection title="2. Kích thước (size props)">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">size="sm"</code> để tạo ra một Card với padding và khoảng cách nhỏ hơn, rất hữu ích cho các UI compact.
        </p>
        <div className="grid sm:grid-cols-2 gap-4 items-start">
          <Card size="default">
            <CardHeader>
              <CardTitle>Card Mặc định</CardTitle>
              <CardDescription>Padding và gap lớn.</CardDescription>
            </CardHeader>
            <CardContent>Line height chuẩn.</CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle>Card Nhỏ gọn (sm)</CardTitle>
              <CardDescription>Tiết kiệm không gian hơn.</CardDescription>
            </CardHeader>
            <CardContent>Line height và font-size tối ưu hóa.</CardContent>
          </Card>
        </div>
        <CodeBlock code={`
<Card size="sm">
  <CardHeader>
    <CardTitle>...</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>
        `} />
      </ShowcaseSection>

      {/* ── 3. Với CardAction (Nút hành động ở góc phải Header) ── */}
      <ShowcaseSection title="3. Có CardAction trong Header">
        <p className="text-sm text-muted-foreground">
          Bạn có thể đặt <code className="text-xs font-mono">&lt;CardAction&gt;</code> bên trong <code className="text-xs font-mono">&lt;CardHeader&gt;</code>. Header sẽ tự động chia layout Grid (bằng container queries) sao cho phần Action luôn nằm ở góc trên bên phải, tách biệt với Title và Description, rất phù hợp cho menu dropdown hoặc nút điều khiển.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Thiết lập thông báo</CardTitle>
              <CardDescription>Quản lý cách nhận thông báo</CardDescription>
              <CardAction>
                <Button variant="ghost" size="icon" className="-mr-2 -mt-2">
                  <span className="sr-only">Menu</span>
                  <MoreHorizontalIcon />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Bật/tắt email notification...</p>
            </CardContent>
          </Card>
        </div>
        <CodeBlock code={`
<Card>
  <CardHeader>
    <CardTitle>Tiêu đề</CardTitle>
    <CardDescription>Mô tả bên dưới tiêu đề</CardDescription>

    {/* Sẽ tự động float sang bên phải nhờ grid */}
    <CardAction>
      <Button variant="ghost" size="icon">...</Button>
    </CardAction>
  </CardHeader>
</Card>
        `} />
      </ShowcaseSection>

      {/* ── 4. Card Cover Ảnh ── */}
      <ShowcaseSection title="4. Ảnh ở đầu thẻ (Cover Image)">
        <p className="text-sm text-muted-foreground">
          Card được tự động hóa quy tắc CSS: NẾU thẻ <code className="text-xs font-mono">&lt;img&gt;</code> là thẻ con đầu tiên trực tiếp, Card sẽ xóa khoảng trắng padding phía trên (pt-0) và tự động bo góc (border-radius) cho ảnh hợp lý với thẻ.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Card className="max-w-sm">
            <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=500&q=80" alt="Mountain" className="h-40 w-full object-cover" />
            <CardHeader>
              <CardTitle>Leo núi mùa hè</CardTitle>
              <CardDescription>Chuyến đi mạo hiểm nhưng rất đẹp</CardDescription>
            </CardHeader>
            <CardContent>
              Tiết kiệm 20% khi đặt trước cho nhóm 4 người trong tháng này.
            </CardContent>
          </Card>
        </div>
        <CodeBlock code={`
<Card>
  {/* Đặt ảnh trực tiếp là thẻ con đầu tiên của Card */}
  <img src="..." alt="..." className="w-full object-cover" />
  
  <CardHeader>
    <CardTitle>...</CardTitle>
  </CardHeader>
</Card>
        `} />
      </ShowcaseSection>

      {/* ── 5. Thành phần con (Subcomponents) ── */}
      <ShowcaseSection title="5. Thành phần cấu trúc chính">
        <PropsTable rows={[
          { prop: "<Card>", type: "ReactNode", description: "Bao ngoài toàn bộ. Hỗ trợ prop `size` ('default', 'sm')." },
          { prop: "<CardHeader>", type: "ReactNode", description: "Chứa Title, Description, và Action. Layout Grid thông minh." },
          { prop: "<CardTitle>", type: "ReactNode", description: "Dùng để hiện tiêu đề chính." },
          { prop: "<CardDescription>", type: "ReactNode", description: "Mô tả phụ cho title." },
          { prop: "<CardAction>", type: "ReactNode", description: "Chỉ nằm trong Header, dùng cho nút bấm / menu phụ ở góc phải." },
          { prop: "<CardContent>", type: "ReactNode", description: "Chứa nội dung thân bài chính, có padding mặc định." },
          { prop: "<CardFooter>", type: "ReactNode", description: "Nằm ở cuối, thường chứa nút hoặc trạng thái. Có viền ngăn cách (border-t) và nền đục (bg-muted/50)." },
        ]} />
      </ShowcaseSection>
    </div>
  )
}
