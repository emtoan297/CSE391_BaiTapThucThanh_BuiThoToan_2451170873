# Component Tree - Shop Dashboard

Dưới đây là sơ đồ phân cấp các Component cho trang Shop Dashboard:

```text
App (Root)
├── Navbar (Trình điều hướng trên cùng)
│   └── UserProfile (Hiển thị tên người dùng)
├── Main (Khu vực nội dung chính - Flex/Grid layout)
│   ├── Sidebar (Thanh bên trái)
│   │   └── CategoryFilter (Danh sách lọc sản phẩm)
│   └── Content (Khu vực bên phải)
│       ├── ContentHeader (Tiêu đề và bộ lọc nhanh)
│       └── ProductList (Danh sách sản phẩm)
│           └── ProductCard (Từng thẻ sản phẩm đơn lẻ)
└── Footer (Thông tin bản quyền)
```

**Nguyên lý Composition:**
- **App** đóng vai trò là "Container" quản lý State chung (ví dụ: danh mục đang chọn).
- Dữ liệu được truyền từ **App** xuống các component con thông qua **Props**.
- **ProductList** không trực tiếp render HTML cho sản phẩm mà nó "lắp ghép" nhiều **ProductCard** lại với nhau bằng vòng lặp `.map()`.