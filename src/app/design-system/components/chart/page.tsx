"use client"

import * as React from "react"
import { Bar, BarChart, Line, LineChart, Area, AreaChart, Pie, PieChart, CartesianGrid, XAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { ShowcaseSection, CodeBlock, PropsTable, DemoBlock } from "@/app/design-system/_showcase"

const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb", // Có thể dùng hsl(var(--chart-1)) nếu cấu hình trong global CSS
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa", // Có thể dùng hsl(var(--chart-2))
  },
} satisfies ChartConfig

const pieData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const pieConfig = {
  chrome: { label: "Chrome", color: "#3b82f6" },
  safari: { label: "Safari", color: "#14b8a6" },
  firefox: { label: "Firefox", color: "#f97316" },
  edge: { label: "Edge", color: "#2dd4bf" },
  other: { label: "Other", color: "#64748b" },
} satisfies ChartConfig

export default function ChartPage() {
  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold">Chart</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Hệ thống biểu đồ hiển thị trực quan dữ liệu lớn với nhiều định dạng tùy chỉnh.
          </p>
        </div>

        <div className="flex items-start gap-3 rounded-lg border border-blue-200 bg-blue-50/50 p-4 text-sm text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/20 dark:text-blue-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <div className="space-y-1.5 leading-relaxed">
            <p className="font-semibold">Sử dụng thư viện Recharts</p>
            <p className="text-blue-800/90 dark:text-blue-300/90">
              Các component ở trang này hoạt động như một wrapper để cung cấp theme và token màu sắc nhất quán. Phần cốt lõi tạo nên biểu đồ vẫn sử dụng nguyên gốc các thành phần (như <code className="font-mono text-xs font-semibold">BarChart</code>, <code className="font-mono text-xs font-semibold">Line</code>, <code className="font-mono text-xs font-semibold">XAxis</code>...) từ thư viện <a href="https://recharts.org" target="_blank" rel="noreferrer" className="font-bold underline underline-offset-2 hover:text-blue-700 dark:hover:text-blue-200 transition-colors">Recharts</a>. Bạn có thể sử dụng toàn bộ API của Recharts mà không bị giới hạn!
            </p>
          </div>
        </div>
      </div>

      {/* ── 1. Bar Chart ── */}
      <ShowcaseSection title="1. Bar Chart">
        <p className="text-sm text-muted-foreground mb-4">
          Biểu đồ cột cơ bản hiển thị so sánh dữ liệu qua các tiêu chí.
        </p>
        <DemoBlock>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </DemoBlock>
        <CodeBlock code={`import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <BarChart accessibilityLayer data={chartData}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
    <ChartTooltip content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
    <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
  </BarChart>
</ChartContainer>`} />
      </ShowcaseSection>

      {/* ── 2. Line Chart ── */}
      <ShowcaseSection title="2. Line Chart">
        <p className="text-sm text-muted-foreground mb-4">
          Biểu đồ đường thích hợp để hiển thị xu hướng dữ liệu theo thời gian.
        </p>
        <DemoBlock>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line
                dataKey="desktop"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </DemoBlock>
        <CodeBlock code={`import { Line, LineChart, CartesianGrid, XAxis } from "recharts"

<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <LineChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Line dataKey="desktop" type="monotone" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
    <Line dataKey="mobile" type="monotone" stroke="var(--color-mobile)" strokeWidth={2} dot={false} />
  </LineChart>
</ChartContainer>`} />
      </ShowcaseSection>

      {/* ── 3. Area Chart ── */}
      <ShowcaseSection title="3. Area Chart">
        <p className="text-sm text-muted-foreground mb-4">
          Biểu đồ miền giúp trực quan hóa cả xu hướng và tỷ trọng cộng dồn của dữ liệu.
        </p>
        <DemoBlock>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <AreaChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Area
                dataKey="mobile"
                type="natural"
                fill="var(--color-mobile)"
                fillOpacity={0.4}
                stroke="var(--color-mobile)"
                stackId="a"
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
                stackId="a"
              />
            </AreaChart>
          </ChartContainer>
        </DemoBlock>
        <CodeBlock code={`import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

<ChartContainer config={chartConfig} className="min-h-[200px] w-full">
  <AreaChart accessibilityLayer data={chartData} margin={{ left: 12, right: 12 }}>
    <CartesianGrid vertical={false} />
    <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
    <ChartLegend content={<ChartLegendContent />} />
    <Area dataKey="mobile" type="natural" fill="var(--color-mobile)" fillOpacity={0.4} stroke="var(--color-mobile)" stackId="a" />
    <Area dataKey="desktop" type="natural" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" stackId="a" />
  </AreaChart>
</ChartContainer>`} />
      </ShowcaseSection>

      {/* ── 4. Pie Chart ── */}
      <ShowcaseSection title="4. Pie Chart (Donut)">
        <p className="text-sm text-muted-foreground mb-4">
          Biểu đồ vành khuyên (donut) hiển thị tỷ trọng của từng thành phần so với tổng thể.
        </p>
        <DemoBlock>
          <div className="flex justify-center w-full">
            <ChartContainer config={pieConfig} className="min-h-[250px] w-[250px] relative">
              <PieChart>
                <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={pieData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                  paddingAngle={2}
                />
              </PieChart>
            </ChartContainer>
          </div>
        </DemoBlock>
        <CodeBlock code={`import { Pie, PieChart } from "recharts"

const pieData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  // ...
]

const pieConfig = {
  chrome: { label: "Chrome", color: "#3b82f6" },
  // ...
} satisfies ChartConfig

<ChartContainer config={pieConfig} className="min-h-[250px] w-[250px]">
  <PieChart>
    <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
    <Pie
      data={pieData}
      dataKey="visitors"
      nameKey="browser"
      innerRadius={60}
      strokeWidth={5}
      paddingAngle={2}
    />
  </PieChart>
</ChartContainer>`} />
      </ShowcaseSection>

      {/* ── 5. Grid (CartesianGrid) ── */}
      <ShowcaseSection title="5. Tùy chỉnh Grid (CartesianGrid)">
        <p className="text-sm text-muted-foreground mb-4">
          <code className="text-xs font-mono">CartesianGrid</code> giúp người dùng dễ dàng căn chỉnh và so sánh các mốc dữ liệu. Dưới đây là các ví dụ sử dụng lưới dọc, lưới ngang, toàn bộ lưới và lưới đứt nét.
        </p>

        <DemoBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Lưới ngang (Horizontal) */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Chỉ lưới ngang (Mặc định)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Lưới dọc (Vertical) */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Chỉ lưới dọc</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid horizontal={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Cả ngang và dọc */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Lưới toàn bộ (Kẻ ô)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <Area dataKey="desktop" type="monotone" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" />
                </AreaChart>
              </ChartContainer>
            </div>

            {/* Lưới nét đứt */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Lưới đứt nét</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid strokeDasharray="4 4" vertical={false} />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <Line dataKey="desktop" type="linear" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </DemoBlock>

        <CodeBlock code={`<CartesianGrid vertical={false} /> {/* Chỉ lưới ngang (thường dùng) */}

<CartesianGrid horizontal={false} /> {/* Chỉ lưới dọc */}

<CartesianGrid /> {/* Lưới toàn bộ */}

<CartesianGrid strokeDasharray="3 3" /> {/* Lưới đứt nét */}`} />
      </ShowcaseSection>

      {/* ── 6. Tùy chỉnh Trục (XAxis) ── */}
      <ShowcaseSection title="6. Tùy chỉnh Trục (XAxis)">
        <p className="text-sm text-muted-foreground mb-4">
          <code className="text-xs font-mono">XAxis</code> được dùng để hiển thị các mốc dữ liệu bên dưới biểu đồ. Việc ẩn đi các đường trục (axis line) hay vạch ngang (tick line) giúp biểu đồ trở nên "clean" và hiện đại hơn.
        </p>

        <DemoBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Axis mặc định */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Mặc định (Có đường trục & tick)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12, bottom: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={true} tickLine={true} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Axis rút gọn */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Rút gọn (Ẩn đường trục & tick)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12, bottom: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={12} tickFormatter={(value) => value.slice(0, 3)} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </DemoBlock>

        <CodeBlock code={`<XAxis dataKey="month" /> {/* Mặc định */}

<XAxis 
  dataKey="month" 
  axisLine={false}      {/* Ẩn đường trục ngang nối các mốc */}
  tickLine={false}      {/* Ẩn gạch nhỏ (tick line) nhô lên trên trục */}
  tickMargin={12}       {/* Cách khoảng với biểu đồ bên trên */}
  tickFormatter={(value) => value.slice(0, 3)}  {/* Format lại label */}
/>`} />
      </ShowcaseSection>

      {/* ── 7. Tùy chỉnh Tooltip ── */}
      <ShowcaseSection title="7. Tùy chỉnh Tooltip (ChartTooltip)">
        <p className="text-sm text-muted-foreground mb-4">
          <code className="text-xs font-mono">ChartTooltipContent</code> cung cấp nhiều định dạng cho phần indicator (dấu hiệu nhận biết) và nhãn hiển thị (label). Nhờ vậy tooltip có thể trông liền mạch hơn với style của biểu đồ. Hãy di chuột vào các biểu đồ dưới đây để xem sự khác biệt.
        </p>

        <DemoBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Default (Dot) */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">1. Indicator dạng chấm (Mặc định)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12, bottom: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Line Indicator */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">2. Indicator đường mảnh</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12, bottom: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Dashed Indicator */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">3. Indicator viền nét đứt</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <AreaChart data={chartData} margin={{ left: 12, right: 12, bottom: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                  <Area dataKey="desktop" type="monotone" fill="var(--color-desktop)" fillOpacity={0.4} stroke="var(--color-desktop)" />
                </AreaChart>
              </ChartContainer>
            </div>

            {/* Hide Label */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">4. Ẩn tiêu đề nhãn (Hide Label)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <LineChart data={chartData} margin={{ left: 12, right: 12, bottom: 4 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Line dataKey="desktop" type="linear" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
                </LineChart>
              </ChartContainer>
            </div>
          </div>
        </DemoBlock>

        <CodeBlock code={`<ChartTooltip content={<ChartTooltipContent indicator="dot" />} />      {/* Chấm tròn (Mặc định) */}

<ChartTooltip content={<ChartTooltipContent indicator="line" />} />     {/* Dạng kẻ vạch */}

<ChartTooltip content={<ChartTooltipContent indicator="dashed" />} />   {/* Dạng viền nét đứt */}

<ChartTooltip content={<ChartTooltipContent hideLabel />} />            {/* Ẩn text nhãn lớn đi kèm */}
`} />
      </ShowcaseSection>

      {/* ── 8. Tùy chỉnh Legend ── */}
      <ShowcaseSection title="8. Tùy chỉnh Chú giải (ChartLegend)">
        <p className="text-sm text-muted-foreground mb-4">
          <code className="text-xs font-mono">ChartLegend</code> định nghĩa phần chỉ dẫn chú thích màu đại diện cho dữ liệu. Bạn có thể chừa vị trí lên trên hoặc ẩn đi các khối icon kế bên title.
        </p>

        <DemoBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Default */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Mặc định (Dưới cùng, có Icon)</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>

            {/* Top & No Icon */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Nằm trên (Top) & Ẩn Icon</h3>
              <ChartContainer config={chartConfig} className="h-[150px] w-full">
                <BarChart data={chartData} margin={{ top: 12, left: 12, right: 12 }}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
                  <ChartLegend verticalAlign="top" content={<ChartLegendContent hideIcon />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </div>
        </DemoBlock>

        <CodeBlock code={`<ChartLegend content={<ChartLegendContent />} />      {/* Nằm dưới biểu đồ, có icon màu */}

<ChartLegend 
  verticalAlign="top"                                 {/* Đẩy chú giải lên góc phía trên */}
  content={<ChartLegendContent hideIcon={true} />}    {/* Ẩn dấu marker tròn hiển thị */}
/>`} />
      </ShowcaseSection>

      {/* ── 9. Props reference ── */}
      <ShowcaseSection title="9. Props reference">
        <PropsTable rows={[
          { prop: "config", type: "ChartConfig", description: "Cấu hình màu sắc, icon, và nhãn cho từng dataKey." },
          { prop: "children", type: "ReactNode", description: "Thành phần biểu đồ của Recharts (ví dụ: BarChart, LineChart)." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung cho container wrapper." },
        ]} />
      </ShowcaseSection>

      {/* ── 10. Lưu ý ── */}
      <ShowcaseSection title="10. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Luôn wrap biểu đồ Recharts bên trong <code className="text-xs font-mono">&lt;ChartContainer&gt;</code> để được cung cấp theme màu sắc qua biến CSS.</li>
          <li>Sử dụng <code className="text-xs font-mono">fill="var(--color-[key])"</code> (như <code className="text-xs font-mono">var(--color-desktop)</code>) để áp dụng màu cấu hình cho biểu đồ.</li>
          <li>Biến <code className="text-xs font-mono">chartConfig</code> cho phép thiết lập màu riêng biệt theo chủ đề sáng/tối hoặc hex trực tiếp.</li>
          <li>Sử dụng các component của Recharts không bị ràng buộc trừ những custom wrapper như <code className="text-xs font-mono">&lt;ChartTooltip&gt;</code> hay <code className="text-xs font-mono">&lt;ChartLegend&gt;</code>.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
