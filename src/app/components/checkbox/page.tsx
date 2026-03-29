import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@/components/ui/field"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/components/_showcase"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CheckboxPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Checkbox</h1>
        <p className="text-sm text-muted-foreground">
          Ô vuông đánh dấu cho phép người dùng bật/tắt (check/uncheck) một mục nhận sự lựa chọn.
        </p>
      </div>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <DemoBlock>
          <Field orientation="horizontal">
            <Checkbox id="terms" />
            <FieldLabel htmlFor="terms">Chấp nhận các điều khoản và hệ thống dịch vụ</FieldLabel>
          </Field>
        </DemoBlock>
        <CodeBlock code={`
<Field orientation="horizontal">
  <Checkbox id="terms" />
  <FieldLabel htmlFor="terms">
    Chấp nhận các điều khoản
  </FieldLabel>
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 2. Các trạng thái ── */}
      <ShowcaseSection title="2. Các trạng thái">
        <DemoBlock>
          <div className="flex flex-col gap-4 w-full justify-start items-start">
            <Field orientation="horizontal">
              <Checkbox id="checked" defaultChecked />
              <FieldLabel htmlFor="checked">Mặc định đã chọn (defaultChecked)</FieldLabel>
            </Field>
            
            <Field orientation="horizontal" data-disabled>
              <Checkbox id="disabled" disabled />
              <FieldLabel htmlFor="disabled">Vô hiệu hoá (disabled)</FieldLabel>
            </Field>
            
            <Field orientation="horizontal" data-disabled>
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <FieldLabel htmlFor="disabled-checked">Vô hiệu hoá, đã chọn</FieldLabel>
            </Field>
            
            <Field orientation="horizontal" data-invalid>
              <Checkbox id="invalid" aria-invalid="true" />
              <FieldLabel htmlFor="invalid" className="text-destructive">Trạng thái lỗi (aria-invalid)</FieldLabel>
            </Field>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Field orientation="horizontal">
  <Checkbox defaultChecked />
  <FieldLabel>Mặc định đã chọn</FieldLabel>
</Field>

<Field orientation="horizontal" data-disabled>
  <Checkbox disabled />
  <FieldLabel>Vô hiệu hoá</FieldLabel>
</Field>

<Field orientation="horizontal" data-invalid>
  <Checkbox aria-invalid="true" />
  <FieldLabel className="text-destructive">Lỗi</FieldLabel>
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 3. Ví dụ với văn bản mô tả (Description) ── */}
      <ShowcaseSection title="3. Có kèm văn bản mô tả">
        <DemoBlock>
          <Field orientation="horizontal">
            <Checkbox id="terms1" />
            <FieldContent>
              <FieldTitle>
                <FieldLabel htmlFor="terms1">Đồng ý nhận nội dung quảng cáo</FieldLabel>
              </FieldTitle>
              <FieldDescription>
                Bạn hiểu và đồng ý cho phép nhận các email sự kiện và bản tin hàng tuần của chúng tôi.
              </FieldDescription>
            </FieldContent>
          </Field>
        </DemoBlock>
        <CodeBlock code={`
<Field orientation="horizontal">
  <Checkbox id="terms1" />
  <FieldContent>
    <FieldTitle>
      <FieldLabel htmlFor="terms1">Đồng ý</FieldLabel>
    </FieldTitle>
    <FieldDescription>
      Bằng việc chọn vào ô này, bạn đồng ý với các điều khoản.
    </FieldDescription>
  </FieldContent>
</Field>
        `} />
      </ShowcaseSection>

      {/* ── 4. Nhóm Checkbox (Group) ── */}
      <ShowcaseSection title="4. Nhóm Checkbox (Group)">
        <DemoBlock>
          <FieldSet>
            <div>
              <FieldLegend>Tính năng liên lạc</FieldLegend>
              <FieldDescription>
                Hãy chọn các phương thức bổ sung để chúng tôi có thể liên hệ với bạn trong những tình huống khẩn cấp.
              </FieldDescription>
            </div>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox id="group-email" defaultChecked />
                <FieldLabel htmlFor="group-email">Nhận thông báo qua Email</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="group-sms" />
                <FieldLabel htmlFor="group-sms">Nhận thông báo qua SMS (Tốn phí nội hạt)</FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <Checkbox id="group-push" defaultChecked />
                <FieldLabel htmlFor="group-push">Hiển thị cảnh báo đẩy (Push Notification)</FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
        </DemoBlock>
        <CodeBlock code={`
<FieldSet>
  <div>
    <FieldLegend>Tính năng liên lạc</FieldLegend>
    <FieldDescription>
      Hãy chọn các phương thức bổ sung để chúng tôi liên hệ.
    </FieldDescription>
  </div>
  <FieldGroup>
    <Field orientation="horizontal">
      <Checkbox id="email" defaultChecked />
      <FieldLabel htmlFor="email">Nhận thông báo qua Email</FieldLabel>
    </Field>
    <Field orientation="horizontal">
      <Checkbox id="sms" />
      <FieldLabel htmlFor="sms">Nhận thông báo qua SMS</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
        `} />
      </ShowcaseSection>

      {/* ── 5. Trong Bảng (Table) ── */}
      <ShowcaseSection title="5. Trong Bảng (Table)">
        <p className="text-sm text-muted-foreground mb-4">
          Ứng dụng phổ biến của Checkbox là chọn nhiều hàng (rows) trong danh sách dữ liệu.
        </p>
        <DemoBlock>
          <div className="rounded-md border w-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px] text-center">
                    <Checkbox aria-label="Chọn tất cả" />
                  </TableHead>
                  <TableHead>Mã đơn hàng</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead className="text-right">Tổng tiền</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-center">
                    <Checkbox aria-label="Chọn hàng 1" />
                  </TableCell>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Đã trả</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    <Checkbox aria-label="Chọn hàng 2" />
                  </TableCell>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Chờ xử lý</TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-center">
                    <Checkbox aria-label="Chọn hàng 3" />
                  </TableCell>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Chưa thanh toán</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[50px]">
        <Checkbox aria-label="Chọn tất cả" />
      </TableHead>
      <TableHead>Mã đơn hàng</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>
        <Checkbox aria-label="Chọn hàng" />
      </TableCell>
      <TableCell className="font-medium">INV001</TableCell>
    </TableRow>
  </TableBody>
</Table>
        `} />
      </ShowcaseSection>

      {/* ── 6. Props reference ── */}
      <ShowcaseSection title="6. Props reference">
        <PropsTable rows={[
          { prop: "checked", type: "boolean | 'indeterminate'", description: "Trạng thái được kiểm soát (controlled state) của checkbox." },
          { prop: "defaultChecked", type: "boolean | 'indeterminate'", description: "Trạng thái lựa chọn mặc định ban đầu khi không dùng controlled." },
          { prop: "onCheckedChange", type: "(checked: boolean | 'indeterminate') => void", description: "Hàm callback kích hoạt khi trạng thái đánh dấu thay đổi." },
          { prop: "disabled", type: "boolean", default_: "false", description: "Ngăn chặn tương tác của người dùng, làm mờ component." },
          { prop: "required", type: "boolean", default_: "false", description: "Yêu cầu người dùng bắt buộc chọn để thao tác với form." },
          { prop: "aria-invalid", type: '"true" | boolean', description: "Hiển thị trạng thái lỗi với viền màu đỏ cho checkbox." },
        ]} />
      </ShowcaseSection>
    </div>
  )
}
