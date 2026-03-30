"use client"

import * as React from "react"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxCollection,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { GlobeIcon } from "lucide-react"
import { InputGroupAddon } from "@/components/ui/input-group"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

const FRAMEWORKS = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

const FRUITS = [
  { label: "Trái cây", children: ["Táo", "Chuối", "Cam", "Xoài", "Nho"] },
  { label: "Rau củ", children: ["Cà rốt", "Bông broccoli", "Khoai tây", "Hành tây", "Cà chua"] },
]

const countries = [
  { code: "ar", value: "argentina", label: "Argentina", continent: "South America" },
  { code: "au", value: "australia", label: "Australia", continent: "Oceania" },
  { code: "br", value: "brazil", label: "Brazil", continent: "South America" },
  { code: "ca", value: "canada", label: "Canada", continent: "North America" },
  { code: "cn", value: "china", label: "China", continent: "Asia" },
  { code: "eg", value: "egypt", label: "Egypt", continent: "Africa" },
  { code: "fr", value: "france", label: "France", continent: "Europe" },
  { code: "de", value: "germany", label: "Germany", continent: "Europe" },
  { code: "it", value: "italy", label: "Italy", continent: "Europe" },
  { code: "jp", value: "japan", label: "Japan", continent: "Asia" },
  { code: "ke", value: "kenya", label: "Kenya", continent: "Africa" },
  { code: "mx", value: "mexico", label: "Mexico", continent: "North America" },
  { code: "gb", value: "united-kingdom", label: "United Kingdom", continent: "Europe" },
  { code: "us", value: "united-states", label: "United States", continent: "North America" },
]

const timezones = [
  {
    value: "Americas",
    items: [
      "(GMT-5) New York",
      "(GMT-8) Los Angeles",
      "(GMT-6) Chicago",
      "(GMT-5) Toronto",
      "(GMT-8) Vancouver",
      "(GMT-3) São Paulo",
    ],
  },
  {
    value: "Europe",
    items: [
      "(GMT+0) London",
      "(GMT+1) Paris",
      "(GMT+1) Berlin",
      "(GMT+1) Rome",
      "(GMT+1) Madrid",
      "(GMT+1) Amsterdam",
    ],
  },
  {
    value: "Asia/Pacific",
    items: [
      "(GMT+9) Tokyo",
      "(GMT+8) Shanghai",
      "(GMT+8) Singapore",
      "(GMT+4) Dubai",
      "(GMT+11) Sydney",
      "(GMT+9) Seoul",
    ],
  },
]

export default function ComboboxPage() {
  const [value, setValue] = React.useState("")
  const [multiValue, setMultiValue] = React.useState<string[]>([])
  const [groupValue, setGroupValue] = React.useState("")
  const anchorRef = useComboboxAnchor()

  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Combobox</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần cho phép người dùng chọn một hoặc nhiều giá trị từ một danh sách có thể tìm kiếm.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  ComboboxCollection,
  useComboboxAnchor,
} from "@/components/ui/combobox"
import { Button } from "@/components/ui/button"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"]

export function ExampleCombobox() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder="Select a framework" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}`} />
      </ShowcaseSection>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">ComboboxInput</code> để hiển thị ô nhập và nút mở menu.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-2">
            <Label>Framework</Label>
            <Combobox value={value} onValueChange={(v) => setValue(v ?? "")}>
              <ComboboxInput placeholder="Tìm framework..." showTrigger />
              <ComboboxContent>
                <ComboboxList>
                  {FRAMEWORKS.map((f) => (
                    <ComboboxItem key={f.value} value={f.value}>
                      {f.label}
                    </ComboboxItem>
                  ))}
                  <ComboboxEmpty>Không tìm thấy kết quả.</ComboboxEmpty>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <p className="text-xs text-muted-foreground">Giá trị đã chọn: {value || "Chưa chọn"}</p>
          </div>
        </DemoBlock>
        <CodeBlock code={`const [value, setValue] = React.useState("")

<Combobox value={value} onValueChange={(v) => setValue(v ?? "")}>
  <ComboboxInput placeholder="Tìm framework..." showTrigger />
  <ComboboxContent>
    <ComboboxList>
      {FRAMEWORKS.map((f) => (
        <ComboboxItem key={f.value} value={f.value}>
          {f.label}
        </ComboboxItem>
      ))}
      <ComboboxEmpty>Không tìm thấy kết quả.</ComboboxEmpty>
    </ComboboxList>
  </ComboboxContent>
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 2. Với Clear Button ── */}
      <ShowcaseSection title="2. Với nút xóa (Clear)">
        <p className="text-sm text-muted-foreground">
          Sử dụng prop <code className="text-xs font-mono">showClear</code> trên <code className="text-xs font-mono">ComboboxInput</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox>
              <ComboboxInput placeholder="Nhập để tìm..." showClear />
              <ComboboxContent>
                <ComboboxList>
                  <ComboboxItem value="option-1">Option 1</ComboboxItem>
                  <ComboboxItem value="option-2">Option 2</ComboboxItem>
                  <ComboboxItem value="option-3">Option 3</ComboboxItem>
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<ComboboxInput placeholder="Nhập để tìm..." showClear />`} />
      </ShowcaseSection>

      {/* ── 3. Phân nhóm (Groups) ── */}
      <ShowcaseSection title="3. Phân nhóm">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">ComboboxGroup</code> và <code className="text-xs font-mono">ComboboxLabel</code> để tổ chức danh sách.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox value={groupValue} onValueChange={(v) => setGroupValue(v ?? "")}>
              <ComboboxInput placeholder="Chọn loại thực phẩm..." />
              <ComboboxContent>
                <ComboboxList>
                  {FRUITS.map((group, idx) => (
                    <React.Fragment key={group.label}>
                      {idx > 0 && <ComboboxSeparator />}
                      <ComboboxGroup>
                        <ComboboxLabel>{group.label}</ComboboxLabel>
                        {group.children.map((item) => (
                          <ComboboxItem key={item} value={item.toLowerCase()}>
                            {item}
                          </ComboboxItem>
                        ))}
                      </ComboboxGroup>
                    </React.Fragment>
                  ))}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<ComboboxContent>
  <ComboboxList>
    {GROUPS.map((group) => (
      <ComboboxGroup key={group.label}>
        <ComboboxLabel>{group.label}</ComboboxLabel>
        {group.items.map((item) => (
          <ComboboxItem key={item} value={item}>
            {item}
          </ComboboxItem>
        ))}
      </ComboboxGroup>
    ))}
  </ComboboxList>
</ComboboxContent>`} />
      </ShowcaseSection>

      {/* ── 4. Multi-select (Chips) ── */}
      <ShowcaseSection title="4. Chọn nhiều (Chips)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">ComboboxChips</code> và <code className="text-xs font-mono">ComboboxChipsInput</code> để hiển thị các giá trị đã chọn dưới dạng chip.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm space-y-4">
            <Combobox value={multiValue} onValueChange={setMultiValue} multiple>
              <ComboboxChips ref={anchorRef}>
                {multiValue.map((v) => (
                  <ComboboxChip key={v}>
                    {FRAMEWORKS.find((f) => f.value === v)?.label || v}
                  </ComboboxChip>
                ))}
                <ComboboxChipsInput placeholder={multiValue.length ? "" : "Chọn nhiều..."} />
              </ComboboxChips>
              <ComboboxContent anchor={anchorRef}>
                <ComboboxList>
                  {FRAMEWORKS.map((f) => (
                    <ComboboxItem key={f.value} value={f.value}>
                      {f.label}
                    </ComboboxItem>
                  ))}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
            <div className="flex flex-wrap gap-1">
               <span className="text-xs text-muted-foreground">Đã chọn: </span>
               {multiValue.map(v => (
                 <code key={v} className="text-xs bg-muted px-1 rounded">{v}</code>
               ))}
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`const [multiValue, setMultiValue] = React.useState<string[]>([])
const anchorRef = useComboboxAnchor()

<Combobox value={multiValue} onValueChange={setMultiValue} multiple>
  <ComboboxChips ref={anchorRef}>
    {multiValue.map((v) => (
      <ComboboxChip key={v}>
        {label}
      </ComboboxChip>
    ))}
    <ComboboxChipsInput placeholder="Chọn nhiều..." />
  </ComboboxChips>
  <ComboboxContent anchor={anchorRef}>
    <ComboboxList>
      {ITEMS.map((item) => (
        <ComboboxItem key={item.value} value={item.value}>
          {item.label}
        </ComboboxItem>
      ))}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 5. Với Item component (Custom Items) ── */}
      <ShowcaseSection title="5. Custom Items với Item component">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">Item</code> component bên trong <code className="text-xs font-mono">ComboboxItem</code> để hiển thị thông tin chi tiết hơn (như mô tả, icon).
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox
              items={countries}
              itemToStringValue={(country: (typeof countries)[number]) => country.label}
            >
              <ComboboxInput placeholder="Tìm quốc gia..." />
              <ComboboxContent>
                <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
                <ComboboxList>
                  {(country) => (
                    <ComboboxItem key={country.code} value={country}>
                      <Item size="xs" className="p-0">
                        <ItemContent>
                          <ItemTitle className="whitespace-nowrap font-medium">
                            {country.label}
                          </ItemTitle>
                          <ItemDescription>
                            {country.continent} ({country.code.toUpperCase()})
                          </ItemDescription>
                        </ItemContent>
                      </Item>
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Combobox 
  items={countries} 
  itemToStringValue={(c) => c.label}
>
  <ComboboxInput placeholder="Search countries..." />
  <ComboboxContent>
    <ComboboxList>
      {(country) => (
        <ComboboxItem key={country.code} value={country}>
          <Item size="xs" className="p-0">
            <ItemContent>
              <ItemTitle>{country.label}</ItemTitle>
              <ItemDescription>
                {country.continent} ({country.code})
              </ItemDescription>
            </ItemContent>
          </Item>
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 6. Trạng thái Vô hiệu hóa ── */}
      <ShowcaseSection title="6. Trạng thái vô hiệu hóa">
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox disabled>
              <ComboboxInput placeholder="Đã bị vô hiệu hóa" disabled />
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Combobox disabled>
  <ComboboxInput disabled />
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 7. Trạng thái Lỗi (Invalid) ── */}
      <ShowcaseSection title="7. Trạng thái lỗi (Invalid)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">aria-invalid="true"</code> trên <code className="text-xs font-mono">ComboboxInput</code> để hiển thị trạng thái lỗi với viền đỏ.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox items={FRAMEWORKS.map(f => f.label)}>
              <ComboboxInput placeholder="Chọn framework..." aria-invalid="true" />
              <ComboboxContent>
                <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Combobox items={frameworks}>
  <ComboboxInput aria-invalid="true" placeholder="Select..." />
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 8. Tự động làm nổi bật (Auto Highlight) ── */}
      <ShowcaseSection title="8. Tự động làm nổi bật (Auto Highlight)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">autoHighlight</code> để tự động chọn (highlight) mục đầu tiên khi menu mở hoặc khi kết quả tìm kiếm thay đổi.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox items={FRAMEWORKS.map(f => f.label)} autoHighlight>
              <ComboboxInput placeholder="Tìm framework..." />
              <ComboboxContent>
                <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item} value={item}>
                      {item}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Combobox items={frameworks} autoHighlight>
  <ComboboxInput placeholder="Select..." />
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 9. Dạng Popup (Input trong menu) ── */}
      <ShowcaseSection title="9. Dạng Popup (Input trong menu)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">ComboboxTrigger</code> với một button, và đặt <code className="text-xs font-mono">ComboboxInput</code> bên trong <code className="text-xs font-mono">ComboboxContent</code>.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox items={countries} defaultValue={countries[0]}>
              <ComboboxTrigger render={<Button variant="outline" className="w-64 justify-between font-normal"><ComboboxValue /></Button>} />
              <ComboboxContent>
                <ComboboxInput showTrigger={false} placeholder="Tìm kiếm..." />
                <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
                <ComboboxList>
                  {(item) => (
                    <ComboboxItem key={item.code} value={item}>
                      {item.label}
                    </ComboboxItem>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Combobox items={countries} defaultValue={countries[0]}>
  <ComboboxTrigger render={<Button variant="outline"><ComboboxValue /></Button>} />
  <ComboboxContent>
    <ComboboxInput showTrigger={false} placeholder="Search" />
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item.code} value={item}>
          {item.label}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 10. Với Input Group (Addons) ── */}
      <ShowcaseSection title="10. Với Input Group (Addons)">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">InputGroupAddon</code> bên trong <code className="text-xs font-mono">ComboboxInput</code> để thêm icon hoặc text prefix/suffix.
        </p>
        <DemoBlock>
          <div className="w-full max-w-sm">
            <Combobox items={timezones}>
              <ComboboxInput placeholder="Chọn múi giờ...">
                <InputGroupAddon>
                  <GlobeIcon className="size-4" />
                </InputGroupAddon>
              </ComboboxInput>
              <ComboboxContent alignOffset={-28} className="w-60">
                <ComboboxEmpty>Không tìm thấy.</ComboboxEmpty>
                <ComboboxList>
                  {(group) => (
                    <ComboboxGroup key={group.value} items={group.items}>
                      <ComboboxLabel>{group.value}</ComboboxLabel>
                      <ComboboxCollection>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {item}
                          </ComboboxItem>
                        )}
                      </ComboboxCollection>
                    </ComboboxGroup>
                  )}
                </ComboboxList>
              </ComboboxContent>
            </Combobox>
          </div>
        </DemoBlock>
        <CodeBlock code={`<Combobox items={timezones}>
  <ComboboxInput placeholder="Select a timezone">
    <InputGroupAddon>
      <GlobeIcon />
    </InputGroupAddon>
  </ComboboxInput>
  <ComboboxContent>
    <ComboboxList>
      {(group) => (
        <ComboboxGroup key={group.value} items={group.items}>
          <ComboboxLabel>{group.value}</ComboboxLabel>
          <ComboboxCollection>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxCollection>
        </ComboboxGroup>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`} />
      </ShowcaseSection>

      {/* ── 11. Props reference ── */}
      <ShowcaseSection title="11. Props reference">
        <PropsTable rows={[
          { prop: "value", type: "string | string[]", description: "Giá trị của combobox (đơn hoặc đa)." },
          { prop: "onValueChange", type: "function", description: "Callback khi giá trị thay đổi." },
          { prop: "multiple", type: "boolean", default_: "false", description: "Cho phép chọn nhiều giá trị." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hóa toàn bộ combobox." },
          { prop: "open", type: "boolean", description: "Trạng thái đóng/mở (controlled)." },
          { prop: "onOpenChange", type: "function", description: "Callback khi trạng thái đóng/mở thay đổi." },
          { prop: "autoHighlight", type: "boolean", default_: "false", description: "Tự động highlight mục đầu tiên khi menu mở hoặc tìm kiếm." },
          { prop: "items", type: "any[]", description: "Mảng các item dùng cho render prop pattern trên ComboboxList." },
          { prop: "itemToStringValue", type: "(item: any) => string", description: "Hàm chuyển đổi item thành chuỗi giá trị khi dùng mảng object." },
        ]} />
      </ShowcaseSection>

      {/* ── 12. Lưu ý ── */}
      <ShowcaseSection title="12. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Thành phần được xây dựng dựa trên <code className="text-xs font-mono">@base-ui/react</code> để tối ưu khả năng truy cập.</li>
          <li>Sử dụng <code className="text-xs font-mono">useComboboxAnchor</code> để tham chiếu <code className="text-xs font-mono">ComboboxChips</code> khi dùng chế độ multi-select, giúp menu căn chỉnh chính xác theo ô nhập.</li>
          <li><code className="text-xs font-mono">ComboboxEmpty</code> chỉ xuất hiện khi không có kết quả lọc nào phù hợp với nội dung tìm kiếm.</li>
          <li>Mặc định menu sẽ tự động lọc (filter) các <code className="text-xs font-mono">ComboboxItem</code> dựa trên label hoặc text content.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
