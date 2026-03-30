export type ComponentItem = {
  name: string
  href: string
  description: string
}

export type Category = {
  name: string
  items: ComponentItem[]
}

export const components: ComponentItem[] = [
  { name: "Accordion", href: "/design-system/components/accordion", description: "A vertically stacked set of interactive headings that each contain a title, content snippet, and an icon indicating whether the content is expanded or collapsed." },
  { name: "Alert", href: "/design-system/components/alert", description: "Default & destructive variants, with icon support" },
  { name: "Alert Dialog", href: "/design-system/components/alert-dialog", description: "A modal dialog that interrupts the user with important content and expects a response." },
  { name: "Aspect Ratio", href: "/design-system/components/aspect-ratio", description: "Giữ tỷ lệ khung hình cho media & nội dung" },
  { name: "Avatar", href: "/design-system/components/avatar", description: "Hiển thị hình đại diện người dùng với nhiều tuỳ chọn cấu hình" },
  { name: "Badge", href: "/design-system/components/badge", description: "Hiển thị trạng thái, số lượng hoặc nhãn thông tin một cách nhỏ gọn" },
  { name: "Breadcrumb", href: "/design-system/components/breadcrumb", description: "Điều hướng phân cấp hiển thị vị trí hiện tại trong cấu trúc trang" },
  { name: "Button", href: "/design-system/components/button", description: "Các loại nút cơ bản với nhiều biến thể và trạng thái" },
  { name: "Button Group", href: "/design-system/components/button-group", description: "Nhóm các nút liên quan với nhau" },
  { name: "Calendar", href: "/design-system/components/calendar", description: "Chọn ngày hoặc phạm vi ngày với giao diện lịch" },
  { name: "Card", href: "/design-system/components/card", description: "Thẻ chứa nội dung với nhiều tùy chọn cấu hình" },
  { name: "Carousel", href: "/design-system/components/carousel", description: "Trình chiếu hình ảnh hoặc nội dung theo dạng xoay vòng" },
  { name: "Chart", href: "/design-system/components/chart", description: "Hiển thị dữ liệu dưới dạng biểu đồ" },
  { name: "Checkbox", href: "/design-system/components/checkbox", description: "Ô vuông đánh dấu cho phép chọn hoặc bỏ chọn một tùy chọn" },
  { name: "Collapsible", href: "/design-system/components/collapsible", description: "Thành phần cho phép người dùng mở rộng hoặc thu gọn một vùng nội dung." },
  { name: "Combobox", href: "/design-system/components/combobox", description: "Thành phần cho phép người dùng chọn một hoặc nhiều giá trị từ một danh sách có thể tìm kiếm." },
  { name: "Command", href: "/design-system/components/command", description: "Command palette giúp tìm kiếm và thực hiện các thao tác nhanh chóng" },
  { name: "Context Menu", href: "/design-system/components/context-menu", description: "Menu ngữ cảnh hiển thị khi nhấp chuột phải với các hành động phù hợp" },
  { name: "Dialog", href: "/design-system/components/dialog", description: "Cửa sổ modal xuất hiện phía trên trang, yêu cầu người dùng thực hiện hành động hoặc xem thông tin quan trọng" },
  { name: "Direction", href: "/design-system/components/direction", description: "Provider thiết lập hướng văn bản LTR/RTL cho toàn bộ cây component con, hỗ trợ ứng dụng đa ngôn ngữ" },
  { name: "Drawer", href: "/design-system/components/drawer", description: "Panel trượt ra từ cạnh màn hình, hỗ trợ 4 hướng và gesture kéo trên mobile" },
  { name: "Dropdown Menu", href: "/design-system/components/dropdown-menu", description: "Menu thả xuống hiển thị danh sách hành động hoặc tuỳ chọn khi nhấn vào trigger" },
  { name: "Empty", href: "/design-system/components/empty", description: "Trạng thái rỗng hiển thị khi không có dữ liệu — dùng trong bảng, danh sách hoặc kết quả tìm kiếm" },
  { name: "Field", href: "/design-system/components/field", description: "Bộ layout component cho form — nhãn, mô tả, thông báo lỗi và nhóm các trường liên quan" },
  { name: "Hover Card", href: "/design-system/components/hover-card", description: "Hiển thị nội dung bổ sung khi hover vào một phần tử — dùng để preview thông tin người dùng, link, repository" },
  { name: "Input", href: "/design-system/components/input", description: "Trường nhập liệu văn bản hỗ trợ tất cả type HTML chuẩn, trạng thái disabled/invalid và icon wrapper pattern" },
  { name: "Input Group", href: "/design-system/components/input-group", description: "Nhóm input kết hợp với addon, icon, button trong một border chung — URL prefix, tiền tệ, password toggle" },
  { name: "Input OTP", href: "/design-system/components/input-otp", description: "Ô nhập mã OTP hỗ trợ paste, điều hướng bàn phím, lọc ký tự theo pattern và callback khi nhập đủ" },
  { name: "Item", href: "/design-system/components/item", description: "Component đa năng hiển thị nội dung với media, tiêu đề, mô tả và hành động — dùng cho danh sách, cài đặt, thông báo" },
  { name: "Kbd", href: "/design-system/components/kbd", description: "Hiển thị phím bàn phím hoặc tổ hợp phím tắt — dùng trong tooltip, button, input và bảng chú thích phím tắt" },
  { name: "Label", href: "/design-system/components/label", description: "Nhãn có thể truy cập liên kết với các điều khiển form — hỗ trợ trạng thái disabled thông qua peer selector" },
  { name: "Menubar", href: "/design-system/components/menubar", description: "Thanh menu nằm ngang theo phong cách ứng dụng desktop — hỗ trợ sub-menu, checkbox, radio, shortcut và separator" },
  { name: "Native Select", href: "/design-system/components/native-select", description: "Thẻ <select> gốc của trình duyệt được tạo kiểu nhất quán với design system — nhẹ, không phụ thuộc Radix, phù hợp cho mobile." },
  { name: "Navigation Menu", href: "/design-system/components/navigation-menu", description: "Thành phần menu điều hướng chính của ứng dụng, hỗ trợ hiển thị danh sách, submenu với animation mượt mà." },
  { name: "Pagination", href: "/design-system/components/pagination", description: "Hệ thống điều hướng phân trang giúp người dùng di chuyển giữa các tập dữ liệu lớn." },
  { name: "Popover", href: "/design-system/components/popover", description: "Cửa sổ nội dung nổi bật xuất hiện khi nhấn vào trigger — hỗ trợ header, title, description và anchor." },
  { name: "Progress", href: "/design-system/components/progress", description: "Thanh hiển thị tiến độ hoàn thành của một tác vụ hoặc thời gian chờ." },
  { name: "Radio Group", href: "/design-system/components/radio-group", description: "Nhóm các nút chọn radio cho phép người dùng chọn một tùy chọn duy nhất từ một danh sách." },
  { name: "Resizable", href: "/design-system/components/resizable", description: "Các nhóm bảng có thể thay đổi kích thước và bố cục có hỗ trợ phím tắt." },
  { name: "Scroll Area", href: "/design-system/components/scroll-area", description: "Thành phần bao bọc vùng cuộn, cung cấp các thanh cuộn có thể tạo kiểu tùy chỉnh cho các trình duyệt khác nhau." },
  { name: "Select", href: "/design-system/components/select", description: "Thanh chọn cho phép người dùng chọn một giá trị từ danh sách các tùy chọn — dựa trên Radix UI Select." },
  { name: "Separator", href: "/design-system/components/separator", description: "Thanh chia tách nội dung hoặc các phần của ứng dụng — theo chiều ngang hoặc dọc." },
  { name: "Sheet", href: "/design-system/components/sheet", description: "Tấm panel trượt ra từ các cạnh của màn hình — trên, dưới, trái, hoặc phải." },
  { name: "Sidebar", href: "/design-system/components/sidebar", description: "Thanh menu bên điều hướng có thể thu gọn, hỗ trợ nhiều cấp độ và tùy chỉnh giao diện." },
  { name: "Skeleton", href: "/design-system/components/skeleton", description: "Hiển thị placeholder nội dung trong khi đang tải dữ liệu với hiệu ứng pulse." },
  { name: "Sonner", href: "/design-system/components/sonner", description: "Thành phần thông báo (toast) hiện đại, nhẹ và có thể tùy chỉnh cao." },
  { name: "Spinner", href: "/design-system/components/spinner", description: "Thành phần hiển thị trạng thái đang tải (loading) của hệ thống hoặc tác vụ." },
  { name: "Switch", href: "/design-system/components/switch", description: "Nút gạt cho phép người dùng chuyển đổi giữa hai trạng thái — bật hoặc tắt." },
  { name: "Table", href: "/design-system/components/table", description: "Thành phần bảng mạnh mẽ để hiển thị tập dữ liệu có cấu trúc." },
  { name: "Tabs", href: "/design-system/components/tabs", description: "Giao diện tab giúp phân loại và chuyển đổi nội dung trong cùng một không gian." },
  { name: "Textarea", href: "/design-system/components/textarea", description: "Trường nhập liệu văn bản nhiều dòng hỗ trợ tự động co giãn và trạng thái form." },
  { name: "Toggle", href: "/design-system/components/toggle", description: "Nút chuyển đổi trạng thái bật/tắt (on/off) thường dùng cho định dạng văn bản hoặc bộ lọc." },
  { name: "Toggle Group", href: "/design-system/components/toggle-group", description: "Nhóm các nút bật/tắt để chọn một hoặc nhiều tùy chọn, có hỗ trợ các dạng dính liền hoặc tách biệt." },
  { name: "Tooltip", href: "/design-system/components/tooltip", description: "Cửa sổ nội dung nhỏ xuất hiện khi người dùng di chuột qua (hover) hoặc tập trung (focus) vào một thành phần." },
  { name: "Typography", href: "/design-system/components/typography", description: "Tập hợp các kiểu chữ và định dạng văn bản chuẩn theo phong cách shadcn/ui." },
]

export const categories: Category[] = [
  {
    name: "Components",
    items: components,
  },
  {
    name: "Demo",
    items: [],
  },
]
