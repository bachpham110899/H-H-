document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    // Hàm để ẩn tất cả nội dung tab và bỏ trạng thái active của nút
    function hideAllTabs() {
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
    }

    // Lặp qua từng nút tab và thêm sự kiện click
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Lấy ID của tab nội dung tương ứng từ thuộc tính data-tab
            const targetTabId = this.dataset.tab; // 'this' ở đây là tab-button được click

            // Ẩn tất cả các tab và bỏ trạng thái active
            hideAllTabs();

            // Hiển thị nội dung của tab được chọn
            const targetTabContent = document.getElementById(targetTabId);
            if (targetTabContent) {
                targetTabContent.classList.add('active');
            }

            // Đặt trạng thái active cho nút tab vừa được click
            this.classList.add('active');
        });
    });

    // Kích hoạt tab đầu tiên khi trang tải xong (tùy chọn)
    // if (tabButtons.length > 0) {
    //     tabButtons[0].click(); // Simulate a click on the first button
    // }
});// JavaScript Document