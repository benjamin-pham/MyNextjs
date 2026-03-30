import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"

/* ─── icons ──────────────────────────────────────────────────────────────── */

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="size-4">
    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect width="20" height="14" x="2" y="6" rx="2" />
  </svg>
)

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function SelectPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Select</h1>
        <p className="text-sm text-muted-foreground">
          Thanh chọn cho phép người dùng chọn một giá trị duy nhất từ một danh sách các tùy chọn.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <DemoBlock>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>
        <CodeBlock code={`
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
        `} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <DemoBlock>
          <Select defaultValue="apple">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chọn một loại quả" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Táo</SelectItem>
              <SelectItem value="banana">Chuối</SelectItem>
              <SelectItem value="blueberry">Việt quất</SelectItem>
              <SelectItem value="grapes">Nho</SelectItem>
              <SelectItem value="pineapple">Dứa</SelectItem>
            </SelectContent>
          </Select>
        </DemoBlock>
        <CodeBlock code={`
<Select defaultValue="apple">
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Chọn một loại quả" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Táo</SelectItem>
    <SelectItem value="banana">Chuối</SelectItem>
    <SelectItem value="blueberry">Việt quất</SelectItem>
    <SelectItem value="grapes">Nho</SelectItem>
    <SelectItem value="pineapple">Dứa</SelectItem>
  </SelectContent>
</Select>
        `} />
      </ShowcaseSection>

      {/* ── 2. Kích thước (Sizes) ── */}
      <ShowcaseSection title="2. Kích thước">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">size="sm"</code> trên <code className="text-xs font-mono">SelectTrigger</code> cho các layout chật hẹp.
        </p>
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <Select defaultValue="default">
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Size (h-8)</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="small">
              <SelectTrigger size="sm" className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small Size (h-7)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<SelectTrigger size="default">...</SelectTrigger>
<SelectTrigger size="sm">...</SelectTrigger>
        `} />
      </ShowcaseSection>

      {/* ── 3. Nhóm và Nhãn ── */}
      <ShowcaseSection title="3. Nhóm và Nhãn">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">SelectGroup</code> và <code className="text-xs font-mono">SelectLabel</code> để phân loại các tùy chọn.
        </p>
        <DemoBlock>
          <Select>
            <SelectTrigger className="w-[240px]">
              <SelectValue placeholder="Chọn múi giờ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Bắc Mỹ</SelectLabel>
                <SelectItem value="est">Giờ miền Đông (EST)</SelectItem>
                <SelectItem value="cst">Giờ miền Trung (CST)</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Châu Âu</SelectLabel>
                <SelectItem value="gmt">Giờ Greenwich (GMT)</SelectItem>
                <SelectItem value="cet">Giờ Trung Âu (CET)</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>
        <CodeBlock code={`
<SelectContent>
  <SelectGroup>
    <SelectLabel>Nhóm 1</SelectLabel>
    <SelectItem value="1">Lựa chọn 1</SelectItem>
  </SelectGroup>
  <SelectGroup>
    <SelectLabel>Nhóm 2</SelectLabel>
    <SelectItem value="2">Lựa chọn 2</SelectItem>
  </SelectGroup>
</SelectContent>
        `} />
      </ShowcaseSection>

      {/* ── 4. Đường kẻ phân cách ── */}
      <ShowcaseSection title="4. Đường kẻ phân cách">
        <DemoBlock>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Hành động" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="edit">Chỉnh sửa</SelectItem>
              <SelectItem value="duplicate">Tạo bản sao</SelectItem>
              <SelectSeparator />
              <SelectItem value="delete" className="text-destructive focus:bg-destructive/10 focus:text-destructive">Xóa</SelectItem>
            </SelectContent>
          </Select>
        </DemoBlock>
        <CodeBlock code={`
<SelectContent>
  <SelectItem value="edit">Chỉnh sửa</SelectItem>
  <SelectSeparator />
  <SelectItem value="delete">Xóa</SelectItem>
</SelectContent>
        `} />
      </ShowcaseSection>

      {/* ── 5. Trạng thái Vô hiệu & Lỗi ── */}
      <ShowcaseSection title="5. Trạng thái Vô hiệu & Lỗi">
        <DemoBlock>
          <div className="flex flex-col gap-4">
            <Select disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Vô hiệu hóa" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Lựa chọn</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger aria-invalid="true" className="w-[180px]">
                <SelectValue placeholder="Trạng thái lỗi" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Lựa chọn</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Select disabled>...</Select>
<SelectTrigger aria-invalid="true">...</SelectTrigger>
        `} />
      </ShowcaseSection>

      {/* ── 6. Vị trí nội dung ── */}
      <ShowcaseSection title="6. Vị trí nội dung">
        <p className="text-sm text-muted-foreground">
          Mặc định là <code className="text-xs font-mono">item-aligned</code>. 
          Sử dụng <code className="text-xs font-mono">position="popper"</code> để Select bung ra như menu thông thường.
        </p>
        <DemoBlock>
          <div className="flex gap-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Item Aligned" />
              </SelectTrigger>
              <SelectContent position="item-aligned">
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Popper Style" />
              </SelectTrigger>
              <SelectContent position="popper" sideOffset={4}>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<SelectContent position="popper" sideOffset={4}>...</SelectContent>
        `} />
      </ShowcaseSection>

      {/* ── 7. Cuộn trang ── */}
      <ShowcaseSection title="Cuộn trang (Scrollable)">
        <p className="text-sm text-muted-foreground">
          Thanh chọn với nhiều lựa chọn vượt quá chiều cao cho phép sẽ tự động hiển thị thanh cuộn và nút điều hướng.
        </p>
        <DemoBlock>
          <Select>
            <SelectTrigger className="w-full max-w-64">
              <SelectValue placeholder="Chọn múi giờ" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Bắc Mỹ</SelectLabel>
                <SelectItem value="est">Eastern Standard Time</SelectItem>
                <SelectItem value="cst">Central Standard Time</SelectItem>
                <SelectItem value="mst">Mountain Standard Time</SelectItem>
                <SelectItem value="pst">Pacific Standard Time</SelectItem>
                <SelectItem value="akst">Alaska Standard Time</SelectItem>
                <SelectItem value="hst">Hawaii Standard Time</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Châu Âu & Châu Phi</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time</SelectItem>
                <SelectItem value="cet">Central European Time</SelectItem>
                <SelectItem value="eet">Eastern European Time</SelectItem>
                <SelectItem value="west">Western European Summer Time</SelectItem>
                <SelectItem value="cat">Central Africa Time</SelectItem>
                <SelectItem value="eat">East Africa Time</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Châu Á</SelectLabel>
                <SelectItem value="msk">Moscow Time</SelectItem>
                <SelectItem value="ist">India Standard Time</SelectItem>
                <SelectItem value="cst_china">China Standard Time</SelectItem>
                <SelectItem value="jst">Japan Standard Time</SelectItem>
                <SelectItem value="kst">Korea Standard Time</SelectItem>
                <SelectItem value="ist_indonesia">
                  Indonesia Central Standard Time
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Úc & Thái Bình Dương</SelectLabel>
                <SelectItem value="awst">Australian Western Standard Time</SelectItem>
                <SelectItem value="acst">Australian Central Standard Time</SelectItem>
                <SelectItem value="aest">Australian Eastern Standard Time</SelectItem>
                <SelectItem value="nzst">New Zealand Standard Time</SelectItem>
                <SelectItem value="fjt">Fiji Time</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Nam Mỹ</SelectLabel>
                <SelectItem value="art">Argentina Time</SelectItem>
                <SelectItem value="bot">Bolivia Time</SelectItem>
                <SelectItem value="brt">Brasilia Time</SelectItem>
                <SelectItem value="clt">Chile Standard Time</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoBlock>
        <CodeBlock code={`
<Select>
  <SelectTrigger className="w-full max-w-64">
    <SelectValue placeholder="Select a timezone" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>North America</SelectLabel>
      <SelectItem value="est">Eastern Standard Time</SelectItem>
      {/* ... items */}
    </SelectGroup>
    {/* ... other groups */}
  </SelectContent>
</Select>
        `} />
      </ShowcaseSection>

      {/* ── 8. Ví dụ thực tế ── */}
      <ShowcaseSection title="8. Ví dụ thực tế">
        <DemoBlock>
          <div className="flex items-center gap-3 w-fit p-3 border rounded-lg bg-card">
            <div className="p-2 bg-accent rounded-md">
              <MailIcon />
            </div>
            <div className="flex-1 min-w-[200px]">
              <div className="text-sm font-medium">Hành động Email</div>
              <div className="text-xs text-muted-foreground">Chọn cách xử lý thư</div>
            </div>
            <Select defaultValue="archive">
              <SelectTrigger size="sm" className="w-[100px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent position="popper" align="end">
                <SelectItem value="archive">Lưu trữ</SelectItem>
                <SelectItem value="spam">Spam</SelectItem>
                <SelectItem value="trash">Xóa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </DemoBlock>
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <h3 className="text-sm font-medium mb-3">Select Trigger</h3>
        <PropsTable rows={[
          { prop: "size", type: '"sm" | "default"', default_: '"default"', description: "Kích thước của trigger." },
          { prop: "aria-invalid", type: "boolean", description: "Hiển thị trạng thái lỗi." },
        ]} />
        <div className="h-6" />
        <h3 className="text-sm font-medium mb-3">Select Content</h3>
        <PropsTable rows={[
          { prop: "position", type: '"item-aligned" | "popper"', default_: '"item-aligned"', description: "Quy tắc định vị nội dung." },
          { prop: "side", type: '"top" | "right" | "bottom" | "left"', default_: '"bottom"', description: "Hướng bung ra khi ở chế độ popper." },
          { prop: "sideOffset", type: "number", default_: "0", description: "Khoảng cách với trigger (popper mode)." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Dùng <code className="text-xs font-mono">SelectValue</code> làm placeholder để hiển thị nhãn của item đang chọn.</li>
          <li>Kích thước <code className="text-xs font-mono">sm</code> sẽ giảm chiều cao xuống 28px (h-7).</li>
          <li>Chế độ <code className="text-xs font-mono">popper</code> phù hợp cho các form dài hoặc khi trigger nằm sát cạnh màn hình.</li>
          <li>Để căn chỉnh item với icon, hãy dùng Flexbox bên trong <code className="text-xs font-mono">SelectItem</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
