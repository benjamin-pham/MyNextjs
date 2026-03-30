"use client"

import React from "react"
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { ClockIcon } from "lucide-react"
import { addDays } from "date-fns"
import type { DateRange } from "react-day-picker"
import { es } from "react-day-picker/locale"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/design-system/_showcase"

/* ─── demos ───────────────────────────────────────────────────────────────── */

function BasicDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}

function RangeDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>()
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      className="rounded-lg border"
    />
  )
}

function RangeTwoMonthsDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>()
  return (
    <Calendar
      mode="range"
      selected={range}
      onSelect={setRange}
      numberOfMonths={2}
      className="rounded-lg border"
    />
  )
}

function DropdownDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      captionLayout="dropdown"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}

function PresetsDemo() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )
  const [currentMonth, setCurrentMonth] = React.useState<Date>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  )

  return (
    <Card className="mx-auto w-fit max-w-[320px]" size="sm">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          fixedWeeks
          className="p-0 [--cell-size:--spacing(10)]"
        />
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 border-t pt-3">
        {[
          { label: "Today", value: 0 },
          { label: "Tomorrow", value: 1 },
          { label: "In 3 days", value: 3 },
          { label: "In a week", value: 7 },
          { label: "In 2 weeks", value: 14 },
        ].map((preset) => (
          <Button
            key={preset.value}
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() => {
              const newDate = addDays(new Date(), preset.value)
              setDate(newDate)
              setCurrentMonth(
                new Date(newDate.getFullYear(), newDate.getMonth(), 1)
              )
            }}
          >
            {preset.label}
          </Button>
        ))}
      </CardFooter>
    </Card>
  )
}

function DateTimeDemo() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <Card size="sm" className="mx-auto w-fit">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="border-t bg-card/50">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="time-from" className="text-[10px] uppercase tracking-wider text-muted-foreground">Bắt đầu</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-from"
                type="time"
                step="1"
                defaultValue="10:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <ClockIcon className="size-3.5 text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field>
            <FieldLabel htmlFor="time-to" className="text-[10px] uppercase tracking-wider text-muted-foreground">Kết thúc</FieldLabel>
            <InputGroup>
              <InputGroupInput
                id="time-to"
                type="time"
                step="1"
                defaultValue="12:30:00"
                className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
              />
              <InputGroupAddon>
                <ClockIcon className="size-3.5 text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}

function BookedDatesDemo() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), 1, 3)
  )
  const bookedDates = Array.from(
    { length: 15 },
    (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
  )

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="single"
          defaultMonth={date}
          selected={date}
          onSelect={setDate}
          disabled={bookedDates}
          modifiers={{
            booked: bookedDates,
          }}
          modifiersClassNames={{
            booked: "[&>button]:line-through opacity-100",
          }}
          className="rounded-lg border-0"
        />
      </CardContent>
    </Card>
  )
}

function CustomDaysDemo() {
  const [range, setRange] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 11, 8),
    to: addDays(new Date(new Date().getFullYear(), 11, 8), 10),
  })

  return (
    <Card className="mx-auto w-fit p-0">
      <CardContent className="p-0">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
          numberOfMonths={1}
          captionLayout="dropdown"
          className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
          formatters={{
            formatMonthDropdown: (date) => {
              return date.toLocaleString("default", { month: "long" })
            },
          }}
          components={{
            DayButton: ({ children, modifiers, day, ...props }) => {
              const isWeekend =
                day.date.getDay() === 0 || day.date.getDay() === 6

              return (
                <CalendarDayButton day={day} modifiers={modifiers} {...props}>
                  {children}
                  {!modifiers.outside && (
                    <span className="text-[10px] opacity-70">
                      {isWeekend ? "$120" : "$100"}
                    </span>
                  )}
                </CalendarDayButton>
              )
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

function WeekNumbersDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      showWeekNumber
      className="rounded-lg border"
    />
  )
}

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function CalendarPage() {
  return (
    <div className="p-8 space-y-12 max-w-2xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần lịch cho phép chọn ngày đơn, khoảng ngày, và tích hợp điều hướng linh hoạt — dựa trên <code className="text-xs font-mono">react-day-picker</code>.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock
          alwaysOpen
          code={`import { Calendar } from "@/components/ui/calendar"`}
        />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock
          alwaysOpen
          code={`
const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)
          `}
        />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản">
        <p className="text-sm text-muted-foreground">
          Chế độ <code className="text-xs font-mono">mode="single"</code> cho phép chọn một ngày.
        </p>
        <DemoBlock>
          <BasicDemo />
        </DemoBlock>
        <CodeBlock code={`
const [date, setDate] = React.useState<Date | undefined>(new Date())

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border"
/>
        `} />
      </ShowcaseSection>

      {/* ── 2. Chọn khoảng ngày ── */}
      <ShowcaseSection title="2. Chọn khoảng ngày">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">mode="range"</code> để chọn khoảng từ ngày đến ngày.
        </p>
        <DemoBlock>
          <RangeDemo />
        </DemoBlock>
        <CodeBlock code={`
const [range, setRange] = React.useState<DateRange | undefined>()

<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  className="rounded-lg border"
/>
        `} />
      </ShowcaseSection>

      {/* ── 3. Range hai tháng ── */}
      <ShowcaseSection title="3. Khoảng ngày — hai tháng">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">numberOfMonths={"{2}"}</code> để hiển thị hai tháng cạnh nhau.
        </p>
        <DemoBlock>
          <RangeTwoMonthsDemo />
        </DemoBlock>
        <CodeBlock code={`
<Calendar
  mode="range"
  selected={range}
  onSelect={setRange}
  numberOfMonths={2}
  className="rounded-lg border"
/>
        `} />
      </ShowcaseSection>

      {/* ── 4. Điều hướng dropdown ── */}
      <ShowcaseSection title="4. Điều hướng dropdown">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">captionLayout="dropdown"</code> để hiện dropdown chọn tháng và năm.
        </p>
        <DemoBlock>
          <DropdownDemo />
        </DemoBlock>
        <CodeBlock code={`
<Calendar
  mode="single"
  captionLayout="dropdown"
  selected={date}
  onSelect={setDate}
  className="rounded-lg border"
/>
        `} />
      </ShowcaseSection>

      {/* ── 5. Preset buttons ── */}
      <ShowcaseSection title="5. Nút preset">
        <p className="text-sm text-muted-foreground">
          Sử dụng <code className="text-xs font-mono">CardFooter</code> để hiển thị các nút chọn nhanh và đồng bộ <code className="text-xs font-mono">month</code> để lịch luôn hiển thị ngày được chọn.
        </p>
        <DemoBlock>
          <PresetsDemo />
        </DemoBlock>
        <CodeBlock code={`
<Card size="sm">
  <CardContent className="p-0">
    <Calendar 
      mode="single" 
      selected={date} 
      month={currentMonth} 
      onMonthChange={setCurrentMonth} 
    />
  </CardContent>
  <CardFooter className="flex flex-wrap gap-2">
    <Button onClick={() => setDate(today)}>Today</Button>
  </CardFooter>
</Card>
        `} />
      </ShowcaseSection>

      {/* ── 6. Date + time picker ── */}
      <ShowcaseSection title="6. Chọn ngày và giờ">
        <p className="text-sm text-muted-foreground">
          Kết hợp Calendar với các component Form để chọn cả ngày lẫn giờ.
        </p>
        <DemoBlock>
          <DateTimeDemo />
        </DemoBlock>
        <CodeBlock code={`
<Card className="w-fit">
  <CardContent className="p-0">
    <Calendar mode="single" selected={date} onSelect={setDate} className="p-0" />
  </CardContent>
  <CardFooter className="border-t bg-card/50">
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="time-from">Bắt đầu</FieldLabel>
        <InputGroup>
          <InputGroupInput type="time" defaultValue="10:30" />
          <InputGroupAddon><ClockIcon /></InputGroupAddon>
        </InputGroup>
      </Field>
      {/* ... */}
    </FieldGroup>
  </CardFooter>
</Card>
        `} />
      </ShowcaseSection>

      {/* ── 7. Ngày bị vô hiệu ── */}
      <ShowcaseSection title="7. Ngày không thể chọn">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">disabled</code> để vô hiệu hóa các ngày cụ thể (ví dụ: ngày đã đặt).
        </p>
        <DemoBlock>
          <BookedDatesDemo />
        </DemoBlock>
        <CodeBlock code={`
const [date, setDate] = React.useState<Date | undefined>(
  new Date(new Date().getFullYear(), 1, 3)
)
const bookedDates = Array.from(
  { length: 15 },
  (_, i) => new Date(new Date().getFullYear(), 1, 12 + i)
)

<Calendar
  mode="single"
  defaultMonth={date}
  selected={date}
  onSelect={setDate}
  disabled={bookedDates}
  modifiers={{
    booked: bookedDates,
  }}
  modifiersClassNames={{
    booked: "[&>button]:line-through opacity-100",
  }}
/>
        `} />
      </ShowcaseSection>

      {/* ── 8. Số tuần ── */}
      <ShowcaseSection title="8. Hiển thị số tuần">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">showWeekNumber</code> để hiển thị số tuần ISO bên trái.
        </p>
        <DemoBlock>
          <WeekNumbersDemo />
        </DemoBlock>
        <CodeBlock code={`
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  showWeekNumber
/>
        `} />
      </ShowcaseSection>

      {/* ── 9. Tùy chỉnh kích thước và nội dung ô ── */}
      <ShowcaseSection title="9. Tùy chỉnh ô và nội dung">
        <p className="text-sm text-muted-foreground">
          Sử dụng CSS variables (<code className="text-xs font-mono">--cell-size</code>) để thay đổi kích thước và prop <code className="text-xs font-mono">components</code> để tùy chỉnh nội dung bên trong mỗi ngày.
        </p>
        <DemoBlock>
          <CustomDaysDemo />
        </DemoBlock>
        <CodeBlock code={`
import { Calendar, CalendarDayButton } from "@/components/ui/calendar"

<Calendar
  mode="range"
  className="[--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
  components={{
    DayButton: ({ children, modifiers, day, ...props }) => {
      const isWeekend = day.date.getDay() === 0 || day.date.getDay() === 6
      
      return (
        <CalendarDayButton day={day} modifiers={modifiers} {...props}>
          {children}
          {!modifiers.outside && (
            <span className="text-[10px] opacity-70">
              {isWeekend ? "$120" : "$100"}
            </span>
          )}
        </CalendarDayButton>
      )
    },
  }}
/>
        `} />
      </ShowcaseSection>

      {/* ── 10. Props reference ── */}
      <ShowcaseSection title="10. Props reference">
        <PropsTable rows={[
          { prop: "mode", type: '"single" | "range" | "multiple"', default_: '"single"', description: "Chế độ chọn ngày." },
          { prop: "selected", type: "Date | DateRange | Date[]", description: "Giá trị ngày đang được chọn." },
          { prop: "onSelect", type: "function", description: "Callback khi người dùng chọn ngày." },
          { prop: "captionLayout", type: '"label" | "dropdown"', default_: '"label"', description: "Kiểu hiển thị tiêu đề tháng/năm." },
          { prop: "numberOfMonths", type: "number", default_: "1", description: "Số tháng hiển thị đồng thời." },
          { prop: "disabled", type: "Date[] | Matcher", description: "Các ngày bị vô hiệu hóa." },
          { prop: "showOutsideDays", type: "boolean", default_: "true", description: "Hiển thị ngày của tháng kề." },
          { prop: "showWeekNumber", type: "boolean", description: "Hiển thị số tuần ISO." },
          { prop: "buttonVariant", type: "ButtonVariant", default_: '"ghost"', description: "Variant của nút điều hướng tháng." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung." },
        ]} />
      </ShowcaseSection>

      {/* ── 11. Lưu ý ── */}
      <ShowcaseSection title="11. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Component này là <code className="text-xs font-mono">"use client"</code> — không dùng trong Server Component trực tiếp.</li>
          <li>State <code className="text-xs font-mono">selected</code> phải được quản lý bên ngoài — Calendar không tự lưu trạng thái.</li>
          <li>Với <code className="text-xs font-mono">mode="range"</code>, <code className="text-xs font-mono">selected</code> có kiểu <code className="text-xs font-mono">DateRange</code> gồm <code className="text-xs font-mono">{"{ from, to }"}</code>.</li>
          <li><code className="text-xs font-mono">captionLayout="dropdown"</code> yêu cầu thêm <code className="text-xs font-mono">fromYear</code> / <code className="text-xs font-mono">toYear</code> để giới hạn phạm vi dropdown.</li>
          <li>Có thể truyền <code className="text-xs font-mono">classNames</code> để ghi đè từng phần tử bên trong lịch.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
