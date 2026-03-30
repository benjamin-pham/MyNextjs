"use client"

import React, { useState } from "react"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar"
import { ShowcaseSection, DemoBlock, CodeBlock, PropsTable } from "@/app/components/_showcase"
import {
  FilePlus2,
  FolderOpen,
  Save,
  SaveAll,
  Download,
  Upload,
  Trash2,
  Copy,
  Scissors,
  ClipboardPaste,
  Settings,
  LogOut,
  UserPlus,
} from "lucide-react"

/* ─── page ───────────────────────────────────────────────────────────────── */

export default function MenubarPage() {
  const [showStatusBar, setShowStatusBar] = useState(true)
  const [showActivityBar, setShowActivityBar] = useState(false)
  const [profile, setProfile] = useState("benoit")

  return (
    <div className="p-8 space-y-12 max-w-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Menubar</h1>
        <p className="text-sm text-muted-foreground">
          Thanh menu nằm ngang theo phong cách ứng dụng desktop — hỗ trợ sub-menu, checkbox, radio, shortcut và separator.
        </p>
      </div>

      {/* ── Import ── */}
      <ShowcaseSection title="Import">
        <CodeBlock alwaysOpen code={`import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar"`} />
      </ShowcaseSection>

      {/* ── Sử dụng ── */}
      <ShowcaseSection title="Sử dụng">
        <CodeBlock alwaysOpen code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Exit</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} />
      </ShowcaseSection>

      {/* ── 1. Cơ bản ── */}
      <ShowcaseSection title="1. Cơ bản — Item với Shortcut">
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  New Window <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Share <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Print <MenubarShortcut>⌘P</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>
        New Window <MenubarShortcut>⌘N</MenubarShortcut>
      </MenubarItem>
      <MenubarItem disabled>New Incognito Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>
        Share <MenubarShortcut>⌘S</MenubarShortcut>
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} />
      </ShowcaseSection>

      {/* ── 2. Sub-menu ── */}
      <ShowcaseSection title="2. Sub-menu lồng nhau">
        <p className="text-sm text-muted-foreground">
          Dùng <code className="text-xs font-mono">MenubarSub</code> + <code className="text-xs font-mono">MenubarSubTrigger</code> + <code className="text-xs font-mono">MenubarSubContent</code> để tạo menu con.
        </p>
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find...</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`<MenubarMenu>
  <MenubarTrigger>Edit</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
    <MenubarSeparator />
    <MenubarSub>
      <MenubarSubTrigger>Find</MenubarSubTrigger>
      <MenubarSubContent>
        <MenubarItem>Search the web</MenubarItem>
        <MenubarItem>Find...</MenubarItem>
      </MenubarSubContent>
    </MenubarSub>
  </MenubarContent>
</MenubarMenu>`} />
      </ShowcaseSection>

      {/* ── 3. Checkbox ── */}
      <ShowcaseSection title="3. CheckboxItem — toggle tuỳ chọn">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">MenubarCheckboxItem</code> hiển thị dấu tích khi được chọn — có thể điều khiển từ state ngoài.
        </p>
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarLabel>Appearance</MenubarLabel>
                <MenubarSeparator />
                <MenubarCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                >
                  Activity Bar
                </MenubarCheckboxItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`const [showStatusBar, setShowStatusBar] = useState(true)
const [showActivityBar, setShowActivityBar] = useState(false)

<MenubarMenu>
  <MenubarTrigger>View</MenubarTrigger>
  <MenubarContent>
    <MenubarLabel>Appearance</MenubarLabel>
    <MenubarSeparator />
    <MenubarCheckboxItem
      checked={showStatusBar}
      onCheckedChange={setShowStatusBar}
    >
      Status Bar
    </MenubarCheckboxItem>
    <MenubarCheckboxItem
      checked={showActivityBar}
      onCheckedChange={setShowActivityBar}
    >
      Activity Bar
    </MenubarCheckboxItem>
  </MenubarContent>
</MenubarMenu>`} />
      </ShowcaseSection>

      {/* ── 4. RadioGroup ── */}
      <ShowcaseSection title="4. RadioGroup — chọn một trong nhiều">
        <p className="text-sm text-muted-foreground">
          <code className="text-xs font-mono">MenubarRadioGroup</code> + <code className="text-xs font-mono">MenubarRadioItem</code> cho phép chọn duy nhất một giá trị trong nhóm.
        </p>
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarLabel>Switch Profile</MenubarLabel>
                <MenubarSeparator />
                <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit…</MenubarItem>
                <MenubarItem inset disabled>
                  Add Profile…
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`const [profile, setProfile] = useState("benoit")

<MenubarMenu>
  <MenubarTrigger>Profiles</MenubarTrigger>
  <MenubarContent>
    <MenubarLabel>Switch Profile</MenubarLabel>
    <MenubarSeparator />
    <MenubarRadioGroup value={profile} onValueChange={setProfile}>
      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
      <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
    </MenubarRadioGroup>
    <MenubarSeparator />
    <MenubarItem inset>Edit…</MenubarItem>
    <MenubarItem inset disabled>Add Profile…</MenubarItem>
  </MenubarContent>
</MenubarMenu>`} />
      </ShowcaseSection>

      {/* ── 5. Destructive ── */}
      <ShowcaseSection title="5. Variant destructive">
        <p className="text-sm text-muted-foreground">
          Thêm <code className="text-xs font-mono">variant="destructive"</code> vào <code className="text-xs font-mono">MenubarItem</code> để hiển thị màu đỏ cảnh báo.
        </p>
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Actions</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Export data</MenubarItem>
                <MenubarItem>Duplicate</MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">Delete account</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`<MenubarMenu>
  <MenubarTrigger>Actions</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>Export data</MenubarItem>
    <MenubarItem>Duplicate</MenubarItem>
    <MenubarSeparator />
    <MenubarItem variant="destructive">Delete account</MenubarItem>
  </MenubarContent>
</MenubarMenu>`} />
      </ShowcaseSection>

      {/* ── 6. Icon ── */}
      <ShowcaseSection title="6. Icon trong MenubarItem">
        <p className="text-sm text-muted-foreground">
          Đặt icon (ví dụ từ <code className="text-xs font-mono">lucide-react</code>) trực tiếp bên trong <code className="text-xs font-mono">MenubarItem</code> —
          component tự áp dụng <code className="text-xs font-mono">size-4</code> và căn hàng đúng gap.
        </p>
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <FilePlus2 /> New file
                  <MenubarShortcut>⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <FolderOpen /> Open…
                  <MenubarShortcut>⌘O</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Save /> Save
                  <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <SaveAll /> Save all
                  <MenubarShortcut>⇧⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  <Download /> Export…
                </MenubarItem>
                <MenubarItem>
                  <Upload /> Import…
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <Scissors /> Cut
                  <MenubarShortcut>⌘X</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <Copy /> Copy
                  <MenubarShortcut>⌘C</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  <ClipboardPaste /> Paste
                  <MenubarShortcut>⌘V</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Account</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  <UserPlus /> Add user
                </MenubarItem>
                <MenubarItem>
                  <Settings /> Settings
                  <MenubarShortcut>⌘,</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <Trash2 /> Delete account
                </MenubarItem>
                <MenubarItem variant="destructive">
                  <LogOut /> Log out
                  <MenubarShortcut>⇧⌘Q</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`import {
  FilePlus2, FolderOpen, Save, Download, Scissors, Copy, ClipboardPaste,
  Settings, LogOut, Trash2, UserPlus,
} from "lucide-react"

<MenubarMenu>
  <MenubarTrigger>File</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>
      <FilePlus2 /> New file
      <MenubarShortcut>⌘N</MenubarShortcut>
    </MenubarItem>
    <MenubarItem>
      <FolderOpen /> Open…
      <MenubarShortcut>⌘O</MenubarShortcut>
    </MenubarItem>
    <MenubarSeparator />
    <MenubarItem>
      <Save /> Save
      <MenubarShortcut>⌘S</MenubarShortcut>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>

<MenubarMenu>
  <MenubarTrigger>Account</MenubarTrigger>
  <MenubarContent>
    <MenubarItem><Settings /> Settings</MenubarItem>
    <MenubarSeparator />
    <MenubarItem variant="destructive">
      <Trash2 /> Delete account
    </MenubarItem>
    <MenubarItem variant="destructive">
      <LogOut /> Log out
      <MenubarShortcut>⇧⌘Q</MenubarShortcut>
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>`} />
      </ShowcaseSection>

      {/* ── 7. Ví dụ đầy đủ ── */}
      <ShowcaseSection title="7. Ví dụ đầy đủ — giả lập menubar ứng dụng">
        <DemoBlock>
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>File</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
                <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
                <MenubarItem disabled>New Incognito Window</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Share</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Email link</MenubarItem>
                    <MenubarItem>Messages</MenubarItem>
                    <MenubarItem>Notes</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Print <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Edit</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
                <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Find</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarItem>Search the web</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Find…</MenubarItem>
                    <MenubarItem>Find Next</MenubarItem>
                    <MenubarItem>Find Previous</MenubarItem>
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>Cut</MenubarItem>
                <MenubarItem>Copy</MenubarItem>
                <MenubarItem>Paste</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>View</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                  Always Show Bookmarks Bar
                </MenubarCheckboxItem>
                <MenubarCheckboxItem checked={showActivityBar} onCheckedChange={setShowActivityBar}>
                  Always Show Full URLs
                </MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarItem inset>Reload <MenubarShortcut>⌘R</MenubarShortcut></MenubarItem>
                <MenubarItem inset disabled>
                  Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Profiles</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup value={profile} onValueChange={setProfile}>
                  <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                  <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                  <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
                </MenubarRadioGroup>
                <MenubarSeparator />
                <MenubarItem inset>Edit…</MenubarItem>
                <MenubarItem inset disabled>Add Profile…</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </DemoBlock>
        <CodeBlock code={`<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
      <MenubarSub>
        <MenubarSubTrigger>Share</MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem>Email link</MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
      <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
    <MenubarContent>
      <MenubarCheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
        Always Show Bookmarks Bar
      </MenubarCheckboxItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`} />
      </ShowcaseSection>

      {/* ── 8. Props reference ── */}
      <ShowcaseSection title="8. Props reference">
        <p className="text-sm font-medium mb-2">Menubar (Root)</p>
        <PropsTable rows={[
          { prop: "value", type: "string", description: "Trigger đang mở (controlled)." },
          { prop: "onValueChange", type: "(value: string) => void", description: "Callback khi menu mở/đóng." },
          { prop: "defaultValue", type: "string", description: "Trigger mở mặc định (uncontrolled)." },
          { prop: "dir", type: '"ltr" | "rtl"', description: "Hướng đọc text." },
          { prop: "loop", type: "boolean", default_: "true", description: "Focus keyboard có lặp vòng hay không." },
        ]} />
        <p className="text-sm font-medium mt-6 mb-2">MenubarItem</p>
        <PropsTable rows={[
          { prop: "disabled", type: "boolean", default_: "false", description: "Vô hiệu hoá item, không thể focus hay click." },
          { prop: "inset", type: "boolean", description: "Thêm padding-left để căn với checkbox/radio item." },
          { prop: "variant", type: '"default" | "destructive"', default_: '"default"', description: "Kiểu hiển thị — destructive hiển thị màu đỏ cảnh báo." },
          { prop: "onSelect", type: "(event: Event) => void", description: "Callback khi item được chọn." },
          { prop: "asChild", type: "boolean", default_: "false", description: "Render thành thẻ con tùy chỉnh (Slot pattern)." },
        ]} />
        <p className="text-sm font-medium mt-6 mb-2">MenubarCheckboxItem</p>
        <PropsTable rows={[
          { prop: "checked", type: "boolean | 'indeterminate'", description: "Trạng thái checked (controlled)." },
          { prop: "onCheckedChange", type: "(checked: boolean) => void", description: "Callback khi checked thay đổi." },
          { prop: "disabled", type: "boolean", description: "Vô hiệu hoá item." },
        ]} />
        <p className="text-sm font-medium mt-6 mb-2">MenubarRadioGroup & MenubarRadioItem</p>
        <PropsTable rows={[
          { prop: "value (Group)", type: "string", description: "Giá trị đang chọn trong nhóm (controlled)." },
          { prop: "onValueChange (Group)", type: "(value: string) => void", description: "Callback khi chọn radio item mới." },
          { prop: "value (Item)", type: "string", description: "Giá trị định danh của radio item." },
          { prop: "disabled (Item)", type: "boolean", description: "Vô hiệu hoá item." },
        ]} />
        <p className="text-sm font-medium mt-6 mb-2">MenubarContent</p>
        <PropsTable rows={[
          { prop: "align", type: '"start" | "center" | "end"', default_: '"start"', description: "Căn chỉnh content theo trigger." },
          { prop: "alignOffset", type: "number", default_: "-4", description: "Khoảng lệch theo trục align." },
          { prop: "sideOffset", type: "number", default_: "8", description: "Khoảng cách giữa content và trigger." },
        ]} />
      </ShowcaseSection>

      {/* ── 9. Lưu ý ── */}
      <ShowcaseSection title="9. Lưu ý khi sử dụng">
        <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
          <li>Mỗi <code className="text-xs font-mono">MenubarMenu</code> phải bọc trong <code className="text-xs font-mono">Menubar</code> — không dùng độc lập.</li>
          <li>Dùng <code className="text-xs font-mono">MenubarShortcut</code> để hiển thị phím tắt — chỉ là UI, không tự đăng ký shortcut thực.</li>
          <li><code className="text-xs font-mono">inset</code> trên <code className="text-xs font-mono">MenubarItem</code> / <code className="text-xs font-mono">MenubarLabel</code> thêm padding-left để căn hàng với CheckboxItem/RadioItem.</li>
          <li><code className="text-xs font-mono">MenubarContent</code> tự render trong <code className="text-xs font-mono">MenubarPortal</code> — không cần thêm thủ công.</li>
          <li>Hỗ trợ điều hướng bàn phím đầy đủ: <kbd className="text-xs px-1 py-0.5 rounded border bg-muted">←</kbd> <kbd className="text-xs px-1 py-0.5 rounded border bg-muted">→</kbd> di chuyển giữa menu, <kbd className="text-xs px-1 py-0.5 rounded border bg-muted">↑</kbd> <kbd className="text-xs px-1 py-0.5 rounded border bg-muted">↓</kbd> di chuyển trong menu.</li>
        </ul>
      </ShowcaseSection>
    </div>
  )
}
