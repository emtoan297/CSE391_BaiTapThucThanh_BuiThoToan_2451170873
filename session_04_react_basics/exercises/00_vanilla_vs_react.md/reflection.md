# Reflection: Vanilla JS vs React

**1. Ở Phần A (Vanilla JS), mỗi lần thay đổi dữ liệu bạn phải gọi bao nhiêu hàm?**
Bạn phải gọi 2 bước chính: Cập nhật dữ liệu vào mảng `todos` và sau đó phải gọi thủ công hàm `renderTodos()` để vẽ lại giao diện. Nếu quên gọi `renderTodos()`, giao diện sẽ không thay đổi dù dữ liệu đã cập nhật.

**2. Ở Phần B (React), khi `setTodos(...)` chạy, React tự động làm gì giúp bạn?**
React sẽ tự động nhận biết trạng thái (State) đã thay đổi, sau đó nó tự thực hiện việc tính toán và "vẽ" lại giao diện một cách tối ưu nhất mà không cần mình phải can thiệp trực tiếp vào DOM.

**3. Nếu Portfolio có 50 project, cách nào quản lý an toàn hơn?**
Dùng React an toàn hơn nhiều. Với 50 project, việc tự quản lý việc thêm/xóa/sửa từng thẻ HTML bằng JS thuần rất dễ gây lỗi "loạn" ID hoặc quên cập nhật giao diện ở một chỗ nào đó. React giúp code sạch sẽ và dễ bảo trì hơn theo hướng Component.

**4. Ứng dụng vào Portfolio thực tế:**
Mình có thể dùng `useState` để lưu danh sách các Project. Khi người dùng chọn lọc (Filter) theo Category (ví dụ: chỉ xem Web), mình chỉ cần dùng `.filter()` trên mảng dữ liệu, React sẽ tự động ẩn các project không liên quan. Việc render danh sách hàng loạt project bằng `.map()` cũng giúp code ngắn gọn hơn thay vì viết hàng chục thẻ HTML giống hệt nhau.
