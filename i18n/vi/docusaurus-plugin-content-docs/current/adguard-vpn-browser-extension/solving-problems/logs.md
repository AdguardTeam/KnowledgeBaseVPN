---
title: Cách thu thập và gửi nhật ký
sidebar_position: 1
---

Có một số cách để thu thập nhật ký tiện ích mở rộng Trình duyệt AdGuard VPN, nhưng cho dù bạn chọn cách nào, dữ liệu giống nhau sẽ được thu thập. Trong tiện ích mở rộng, nhật ký không được chia thành tiêu chuẩn và gỡ lỗi. Và các tùy chọn khác nhau để thu thập nhật ký được cung cấp cho những trường hợp khi sự cố bạn gặp phải ngăn bạn sử dụng một hoặc một hướng dẫn khác.

## Thu thập và gửi nhật ký qua *Báo cáo lỗi*

1.  Mở tiện ích mở rộng Trình duyệt AdGuard VPN, nếu có thể, hãy lặp lại các hành động dẫn đến lỗi. Lưu ý thời gian chính xác khi lỗi này xảy ra.
2.  Mở *Cài đặt* bằng cách nhấp vào biểu tượng menu hamburger (☰) → *Hỗ trợ* → *Báo cáo lỗi*.
3.  Trong biểu mẫu đã mở, hãy để lại địa chỉ email được chèn tự động hoặc nhập địa chỉ email khác và mô tả lỗi tìm thấy, bao gồm cả thời gian xảy ra lỗi này. Nếu bạn không thể tái tạo sự cố, hãy chỉ định chính xác nhất có thể khi sự cố xảy ra lần cuối.
4.  Đảm bảo rằng có dấu kiểm bên cạnh *Bao gồm báo cáo chẩn đoán trong thư*, rồi nhấn vào *Trình*. Bằng cách này, bạn sẽ gửi nhật ký cùng với báo cáo lỗi.

## Thu thập và gửi nhật ký qua nút *Xuất nhật ký*

1.  Mở tiện ích mở rộng Trình duyệt AdGuard VPN, nếu có thể, hãy lặp lại các hành động dẫn đến lỗi. Lưu ý thời gian chính xác khi lỗi này xảy ra.
2.  Nhấp chuột phải vào biểu tượng tiện ích mở rộng AdGuard VPN Browser.
3.  Trong menu đã mở, nhấp vào *Nhật ký xuất khẩu*.
4.  Do đó, tệp nhật ký sẽ được lưu vào thiết bị của bạn trong `txt` định dạng.

Bây giờ bạn đã thu thập nhật ký, bạn cần bàn giao chúng cho nhóm phát triển của chúng tôi. Để làm điều này:

1.  Báo cáo lỗi trên GitHub. Bạn có thể tìm thấy hướng dẫn chi tiết về cách tạo sự cố trên GitHub trong bài viết này.
2.  Gửi kho lưu trữ có nhật ký và thời gian phát lại tới `devteam@adguard.com` và đính kèm liên kết đến vấn đề GitHub của bạn. Ngoài ra, bạn có thể thêm một kho lưu trữ với nhật ký và thời gian phát lại vào Google Drive và chia sẻ nó với `devteam@adguard.com` đính kèm liên kết Google Drive vào vấn đề của bạn trên GitHub.

## Thu thập và gửi nhật ký thông qua các công cụ của nhà phát triển trình duyệt

### Chrome

1.  Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
2.  Go to `chrome://extensions`
3.  Turn on *developer mode*

    ![The developer mode *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/dev_mode.png)

4.  Click `background.html`

    ![Background *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/backgroung.png)

5.  Open the *Console tab*

    ![The Console tab *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/console.png)

6.  Open the context menu and click *Save as…*

    ![Save as *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save.png)

Bây giờ bạn đã thu thập nhật ký, bạn cần bàn giao chúng cho nhóm phát triển của chúng tôi. Để làm điều này:

1.  Báo cáo lỗi trên GitHub. Bạn có thể tìm thấy hướng dẫn chi tiết về cách tạo sự cố trên GitHub trong bài viết này.
2.  Gửi kho lưu trữ có nhật ký và thời gian phát lại tới `devteam@adguard.com` và đính kèm liên kết đến vấn đề GitHub của bạn. Ngoài ra, bạn có thể thêm một kho lưu trữ với nhật ký và thời gian phát lại vào Google Drive và chia sẻ nó với `devteam@adguard.com` đính kèm liên kết Google Drive vào vấn đề của bạn trên GitHub.

### Firefox

1.  Open AdGuard VPN Browser extension, if possible, repeat the actions that led to the error. Note the exact time when this error occurred.
2.  Go to `about:addons`
3.  Click *Debug Add-ons*

    ![Debug Add-ons *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/add-ons.png)

4.  Click *Inspect*

    ![Inspect *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/inspect.png)

5.  Go to the *Console* tab

    ![Console *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/ff_console.png)

6.  Click *Save all Messages to file*

    ![Save *border](https://cdn.adguardvpn.com/content/kb/vpn/browser_extension/save-to-file.png)

Bây giờ bạn đã thu thập nhật ký, bạn cần bàn giao chúng cho nhóm phát triển của chúng tôi. Để làm điều này:

1.  Báo cáo lỗi trên GitHub. Bạn có thể tìm thấy hướng dẫn chi tiết về cách tạo sự cố trên GitHub trong bài viết này.
2.  Gửi kho lưu trữ có nhật ký và thời gian phát lại tới `devteam@adguard.com` và đính kèm liên kết đến vấn đề GitHub của bạn. Ngoài ra, bạn có thể thêm một kho lưu trữ với nhật ký và thời gian phát lại vào Google Drive và chia sẻ nó với `devteam@adguard.com` đính kèm liên kết Google Drive vào vấn đề của bạn trên GitHub.