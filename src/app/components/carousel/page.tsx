"use client"

import * as React from "react"
import { ShowcaseSection, CodeBlock, PropsTable } from "@/app/components/_showcase"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function CarouselPage() {
  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Carousel</h1>
        <p className="text-sm text-muted-foreground">
          Thành phần vuốt trượt (carousel) để hiển thị danh sách các mục, hỗ trợ di chuyển ngang và dọc. Xây dựng dựa trên embla-carousel.
        </p>
      </div>

      {/* ── 1. Cấu trúc cơ bản ── */}
      <ShowcaseSection title="1. Cấu trúc cơ bản">
        <div className="flex justify-center flex-col items-center">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-muted/20">
                            <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        <CodeBlock code={`<Carousel className="w-full max-w-xs">
  <CarouselContent>
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
           <Card>
             <CardContent className="flex aspect-square items-center justify-center p-6 bg-muted/20">
               <span className="text-4xl font-semibold">{index + 1}</span>
             </CardContent>
           </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`} />
      </ShowcaseSection>

      {/* ── 2. Kích thước phần tử ── */}
      <ShowcaseSection title="2. Kích thước phần tử (basis)">
         <p className="text-sm text-muted-foreground">
          Sử dụng `basis-*` trên <code className="text-xs font-mono">CarouselItem</code> để thay đổi số lượng mục hiển thị cùng lúc.
        </p>
        <div className="flex justify-center flex-col items-center">
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-muted/20">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        <CodeBlock code={`<Carousel className="w-full max-w-sm">
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      {/* Nội dung item */}
    </CarouselItem>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      {/* Nội dung item */}
    </CarouselItem>
    {/* ... */}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`} />
      </ShowcaseSection>

      {/* ── 3. Khoảng cách (Spacing) ── */}
      <ShowcaseSection title="3. Khoảng cách (Spacing)">
         <p className="text-sm text-muted-foreground">
          Sử dụng giá trị âm cho margin ở <code className="text-xs font-mono">CarouselContent</code> và padding/margin tương ứng ở <code className="text-xs font-mono">CarouselItem</code> để tạo khoảng cách. Mặc định là `-ml-4` và `pl-4`.
        </p>
        <div className="flex justify-center flex-col items-center">
            <Carousel className="w-full max-w-sm">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-muted/20">
                            <span className="text-2xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        <CodeBlock code={`<Carousel>
  {/* Đổi khoảng cách thành 1 (0.25rem) */}
  <CarouselContent className="-ml-1">
    <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/3">
      {/* Nội dung item */}
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`} />
      </ShowcaseSection>

     {/* ── 4. Chiều dọc (Vertical) ── */}
      <ShowcaseSection title="4. Chiều dọc (Vertical)">
         <p className="text-sm text-muted-foreground">
          Thêm thuộc tính <code className="text-xs font-mono">orientation="vertical"</code> để thay đổi hướng cuộn. Nút Previous/Next sẽ tự động xoay.
        </p>
        <div className="flex justify-center mb-12">
            <Carousel orientation="vertical" className="w-full max-w-xs">
              <CarouselContent className="-mt-1 h-[200px]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6 py-6 bg-muted/20">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        <CodeBlock code={`<Carousel orientation="vertical" className="w-full max-w-xs">
  <CarouselContent className="-mt-1 h-[200px]">
    <CarouselItem className="pt-1 md:basis-1/2">
      {/* Nội dung item */}
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`} />
      </ShowcaseSection>

      {/* ── 5. Căn giữa, Options và API ── */}
      <ShowcaseSection title="5. Options (Embla API)">
        <p className="text-sm text-muted-foreground">
          Truyền tùy chọn Embla thông qua prop <code className="text-xs font-mono">opts</code>. Ví dụ: <code className="text-xs font-mono">align: "start"</code> và <code className="text-xs font-mono">loop: true</code>.
        </p>
        <div className="flex justify-center flex-col items-center">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm"
            >
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6 bg-muted/20">
                            <span className="text-3xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        </div>
        <CodeBlock code={`<Carousel opts={{ align: "start", loop: true }}>
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      {/* Nội dung item */}
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`} />
      </ShowcaseSection>

      {/* ── 6. Cấu trúc Custom với Plugins ── */}
      <ShowcaseSection title="6. Autoplay Plugin (Giả mạo do demo)">
        <p className="text-sm text-muted-foreground">
          Bạn có thể tích hợp qua <code className="text-xs font-mono">plugins</code>. Lưu ý: Cần cài đặt <code className="text-xs font-mono">embla-carousel-autoplay</code>.
        </p>
        <CodeBlock code={`import Autoplay from "embla-carousel-autoplay"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {/* ... */}
      </CarouselContent>
    </Carousel>
  )
}`} />
      </ShowcaseSection>

      {/* ── 7. Props reference ── */}
      <ShowcaseSection title="7. Props reference">
        <PropsTable rows={[
          { prop: "opts", type: "CarouselOptions (Embla)", description: "Các tùy chọn cho thư viện embla-carousel." },
          { prop: "plugins", type: "CarouselPlugin", description: "Các plugin cho embla-carousel (ví dụ Autoplay)." },
          { prop: "orientation", type: '"horizontal" | "vertical"', default_: '"horizontal"', description: "Hướng cuộn của carousel." },
          { prop: "setApi", type: "(api: CarouselApi) => void", description: "Hàm callback để lấy instance API của embla, dùng để điều khiển carousel programmatically." },
        ]} />
      </ShowcaseSection>
    </div>
  )
}
