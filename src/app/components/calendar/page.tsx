"use client"

import React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import type { DateRange } from "react-day-picker"
import { ShowcaseSection, CodeBlock, PropsTable } from "@/app/components/_showcase"

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

const presets: { label: string; days: number }[] = [
  { label: "Hôm nay", days: 0 },
  { label: "Ngày mai", days: 1 },
  { label: "3 ngày tới", days: 3 },
  { label: "1 tuần tới", days: 7 },
  { label: "2 tuần tới", days: 14 },
]

function addDays(date: Date, days: number): Date {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

function PresetsDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div className="flex gap-4 flex-wrap">
      <div className="flex flex-col gap-1.5">
        {presets.map(({ label, days }) => (
          <Button
            key={label}
            variant={
              date?.toDateString() === addDays(new Date(), days).toDateString()
                ? "default"
                : "outline"
            }
            size="sm"
            onClick={() => setDate(addDays(new Date(), days))}
          >
            {label}
          </Button>
        ))}
      </div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    </div>
  )
}

function DateTimeDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [startTime, setStartTime] = React.useState("09:00")
  const [endTime, setEndTime] = React.useState("10:00")
  return (
    <div className="flex flex-col gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
      <div className="flex items-center gap-3 text-sm">
        <label className="w-16 text-muted-foreground">Bắt đầu</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="rounded-md border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
        <label className="w-16 text-muted-foreground">Kết thúc</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="rounded-md border bg-background px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>
  )
}

const bookedDates = [
  addDays(new Date(), 2),
  addDays(new Date(), 5),
  addDays(new Date(), 8),
  addDays(new Date(), 12),
]

function BookedDatesDemo() {
  const [date, setDate] = React.useState<Date | undefined>()
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={bookedDates}
      className="rounded-lg border"
    />
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
        <BasicDemo />
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
        <RangeDemo />
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
        <RangeTwoMonthsDemo />
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
        <DropdownDemo />
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
          Kết hợp với các nút nhanh để chọn ngày phổ biến mà không cần bấm vào lịch.
        </p>
        <PresetsDemo />
        <CodeBlock code={`
const presets = [
  { label: "Hôm nay", days: 0 },
  { label: "Ngày mai", days: 1 },
  { label: "1 tuần tới", days: 7 },
]

<div className="flex gap-4">
  <div className="flex flex-col gap-1.5">
    {presets.map(({ label, days }) => (
      <Button
        key={label}
        variant={isSelected ? "default" : "outline"}
        size="sm"
        onClick={() => setDate(addDays(new Date(), days))}
      >
        {label}
      </Button>
    ))}
  </div>
  <Calendar mode="single" selected={date} onSelect={setDate} />
</div>
        `} />
      </ShowcaseSection>

      {/* ── 6. Date + time picker ── */}
      <ShowcaseSection title="6. Chọn ngày và giờ">
        <p className="text-sm text-muted-foreground">
          Kết hợp Calendar với input <code className="text-xs font-mono">type="time"</code> để chọn cả ngày lẫn giờ.
        </p>
        <DateTimeDemo />
        <CodeBlock code={`
<Calendar mode="single" selected={date} onSelect={setDate} />

<div className="flex items-center gap-3">
  <label>Bắt đầu</label>
  <input type="time" value={startTime} onChange={...} />
  <label>Kết thúc</label>
  <input type="time" value={endTime} onChange={...} />
</div>
        `} />
      </ShowcaseSection>

      {/* ── 7. Ngày bị vô hiệu ── */}
      <ShowcaseSection title="7. Ngày không thể chọn">
        <p className="text-sm text-muted-foreground">
          Dùng prop <code className="text-xs font-mono">disabled</code> để vô hiệu hóa các ngày cụ thể (ví dụ: ngày đã đặt).
        </p>
        <BookedDatesDemo />
        <CodeBlock code={`
const bookedDates = [
  addDays(new Date(), 2),
  addDays(new Date(), 5),
]

<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  disabled={bookedDates}
/>
        `} />
      </ShowcaseSection>

      {/* ── 8. Số tuần ── */}
      <ShowcaseSection title="8. Hiển thị số tuần">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">showWeekNumber</code> để hiển thị số tuần ISO bên trái.
        </p>
        <WeekNumbersDemo />
        <CodeBlock code={`
<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  showWeekNumber
/>
        `} />
      </ShowcaseSection>

      {/* ── 9. Props reference ── */}
      <ShowcaseSection title="9. Props reference">
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

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">
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
