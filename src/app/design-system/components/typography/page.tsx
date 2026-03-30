import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyList,
  TypographyInlineCode,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
  TypographyTable,
} from "@/components/ui/typography"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/design-system/_showcase"

export default function TypographyPage() {
  return (
    <div className="p-8 space-y-12 max-w-4xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Typography</h1>
        <p className="text-sm text-muted-foreground">
          Các kiểu chữ và định dạng văn bản chuẩn được sử dụng để xây dựng nội dung nhất quán.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import { 
  TypographyH1, 
  TypographyH2, 
  TypographyP, 
  // ... 
} from "@/components/ui/typography"`} />
      </ShowcaseSection>

      {/* ── 1. Tiêu đề (Headings) ── */}
      <ShowcaseSection title="1. Tiêu đề (Headings)">
        <p className="text-sm text-muted-foreground mb-4">
          Cung cấp các cấp độ tiêu đề từ H1 đến H4 với kiểu dáng chuẩn của shadcn/ui.
        </p>
        <DemoBlock>
          <div className="space-y-6">
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">H1 / Heading 1</TypographySmall>
              <TypographyH1>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">H2 / Heading 2</TypographySmall>
              <TypographyH2>The People of the Kingdom</TypographyH2>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">H3 / Heading 3</TypographySmall>
              <TypographyH3>The Joke Tax</TypographyH3>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">H4 / Heading 4</TypographySmall>
              <TypographyH4>People stopped laughing.</TypographyH4>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<TypographyH1>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
<TypographyH2>The People of the Kingdom</TypographyH2>
<TypographyH3>The Joke Tax</TypographyH3>
<TypographyH4>People stopped laughing.</TypographyH4>
        `} />
      </ShowcaseSection>

      {/* ── 2. Văn bản (Text) ── */}
      <ShowcaseSection title="2. Văn bản (Text)">
        <p className="text-sm text-muted-foreground mb-4">
          Các kiểu văn bản nội dung, đoạn văn và chú thích.
        </p>
        <DemoBlock>
          <div className="space-y-6">
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">P / Paragraph</TypographySmall>
              <TypographyP>
                The King, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.
              </TypographyP>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">Lead</TypographySmall>
              <TypographyLead>
                A modal dialog that interrupts the user with important content and expects a response.
              </TypographyLead>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">Large</TypographySmall>
              <TypographyLarge>Are you absolutely sure?</TypographyLarge>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">Small</TypographySmall>
              <TypographySmall>Email address</TypographySmall>
            </div>
            <div>
              <TypographySmall className="text-muted-foreground mb-2 block font-mono">Muted</TypographySmall>
              <TypographyMuted>Enter your email address.</TypographyMuted>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<TypographyP>The King, seeing how much happier his subjects were...</TypographyP>
<TypographyLead>A modal dialog that interrupts the user...</TypographyLead>
<TypographyLarge>Are you absolutely sure?</TypographyLarge>
<TypographySmall>Email address</TypographySmall>
<TypographyMuted>Enter your email address.</TypographyMuted>
        `} />
      </ShowcaseSection>

      {/* ── 3. Các thành phần khác ── */}
      <ShowcaseSection title="3. Các thành phần khác">
        <DemoBlock>
          <div className="space-y-8">
            <div>
              <TypographySmall className="text-muted-foreground mb-4 block font-mono">Blockquote</TypographySmall>
              <TypographyBlockquote>
                "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
              </TypographyBlockquote>
            </div>

            <div>
              <TypographySmall className="text-muted-foreground mb-4 block font-mono">List</TypographySmall>
              <TypographyList>
                <li>1st level of jokes: 5 gold coins</li>
                <li>2nd level of jokes: 10 gold coins</li>
                <li>3rd level of jokes: 20 gold coins</li>
              </TypographyList>
            </div>

            <div>
              <TypographySmall className="text-muted-foreground mb-4 block font-mono">Inline Code</TypographySmall>
              <p className="text-sm">
                Bạn có thể cài đặt package bằng lệnh <TypographyInlineCode>npm install shadcn-ui</TypographyInlineCode>.
              </p>
            </div>

            <div>
              <TypographySmall className="text-muted-foreground mb-4 block font-mono">Table</TypographySmall>
              <TypographyTable>
                <thead>
                  <tr className="m-0 border-t p-0 even:bg-muted font-bold">
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right font-bold">
                      King's Treasury
                    </th>
                    <th className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right font-bold">
                      People's Happiness
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Empty
                    </td>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Overflowing
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Modest
                    </td>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Satisfied
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Rich
                    </td>
                    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                      Miserable
                    </td>
                  </tr>
                </tbody>
              </TypographyTable>
            </div>
          </div>
        </DemoBlock>
        <CodeBlock code={`
<TypographyBlockquote>
  "After all," he said, "everyone enjoys a good joke..."
</TypographyBlockquote>

<TypographyList>
  <li>Item 1</li>
  <li>Item 2</li>
</TypographyList>

<TypographyInlineCode>npm install shadcn-ui</TypographyInlineCode>

<TypographyTable>
  <thead>
    <tr>
      <th className="border px-4 py-2 font-bold text-left">Header 1</th>
      <th className="border px-4 py-2 font-bold text-left">Header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2 text-left">Cell 1</td>
      <td className="border px-4 py-2 text-left">Cell 2</td>
    </tr>
  </tbody>
</TypographyTable>
        `} />
      </ShowcaseSection>

      {/* ── 4. Ví dụ tổng hợp ── */}
      <ShowcaseSection title="4. Ví dụ tổng hợp">
        <DemoBlock>
          <div className="max-w-prose">
            <TypographyH2>The Joke Tax Chronicles</TypographyH2>
            <TypographyLead>
              Once upon a time, in a far-off land, there was a very funny king who decided to tax jokes.
            </TypographyLead>
            <TypographyP>
              He thought it would be a great way to raise money for the royal treasury. After all, everyone enjoys a good joke, so it's only fair that they should pay for the privilege.
            </TypographyP>
            <TypographyBlockquote>
              "Laughter is the best medicine, and medicine isn't free!"
            </TypographyBlockquote>
            <TypographyH3>The Impact on the People</TypographyH3>
            <TypographyP>
              However, the people didn't find it funny at all. In fact, many of them stopped laughing altogether to avoid paying the tax.
            </TypographyP>
            <TypographyList>
              <li>Comedians went out of business.</li>
              <li>Joke books were burned in public squares.</li>
              <li>Even tickling was banned in certain provinces.</li>
            </TypographyList>
            <TypographyP>
              The country became a very dull place indeed. As shown in the data below:
            </TypographyP>
            <TypographyTable>
              <thead>
                <tr className="m-0 border-t p-0 even:bg-muted font-bold">
                  <th className="border px-4 py-2 text-left font-bold">Year</th>
                  <th className="border px-4 py-2 text-left font-bold">Laughter Index</th>
                </tr>
              </thead>
              <tbody>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2">Pre-Tax</td>
                  <td className="border px-4 py-2">100 (Max)</td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2">Year 1</td>
                  <td className="border px-4 py-2">45</td>
                </tr>
                <tr className="m-0 border-t p-0 even:bg-muted">
                  <td className="border px-4 py-2">Year 2</td>
                  <td className="border px-4 py-2">0.5</td>
                </tr>
              </tbody>
            </TypographyTable>
            <TypographySmall className="italic">Note: Data collected by the Royal Statistical Department.</TypographySmall>
          </div>
        </DemoBlock>
      </ShowcaseSection>

      {/* ── Props reference ── */}
      <ShowcaseSection title="5. Props reference">
        <p className="text-sm text-muted-foreground mb-4">
          Tất cả các component typography đều nhận các prop chuẩn của thẻ HTML tương ứng và hỗ trợ <TypographyInlineCode>className</TypographyInlineCode> để ghi đè style.
        </p>
        <PropsTable rows={[
          { prop: "children", type: "ReactNode", description: "Nội dung văn bản hiển thị." },
          { prop: "className", type: "string", description: "Class Tailwind bổ sung để tùy chỉnh style." },
          { prop: "...props", type: "HTMLAttributes", description: "Các thuộc tính HTML chuẩn khác (id, style, data-*, ...)." },
        ]} />
      </ShowcaseSection>
    </div>
  )
}
