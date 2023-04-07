---
title: Features overview
sidebar_position: 1
---

Tiện ích mở rộng Trình duyệt AdGuard VPN có sẵn cho Chrome, Firefox, Opera và Edge. Giao diện người dùng và chức năng không khác nhau giữa các trình duyệt, vì vậy tổng quan bên dưới sẽ phù hợp với các tiện ích mở rộng AdGuard VPN cho tất cả các trình duyệt.

> Lưu ý rằng bạn chỉ có thể sử dụng tiện ích mở rộng AdGuard VPN Browser khi đăng nhập. Đăng nhập bằng tài khoản AdGuard của bạn hoặc qua Google, Facebook hoặc Apple. Trong trường hợp sau, hãy đảm bảo rằng tài khoản của bạn được liên kết với cùng một địa chỉ email với tài khoản AdGuard của bạn. Nếu bạn có [Đăng ký AdGuard VPN](/general/subscription.md), nó sẽ được kích hoạt tự động trong tiện ích mở rộng Trình duyệt AdGuard VPN. Bạn chưa có tài khoản AdGuard? [Tạo tài khoản ở đây](https://auth.adguard.com/registration.html).

Để quản lý tiện ích mở rộng Trình duyệt AdGuard VPN của bạn:

* Nhấp vào biểu tượng của nó trên bảng điều khiển của trình duyệt, nhấp vào biểu tượng menu bánh hamburger và chọn *Cài đặt*,
* Hoặc đi đến *Quản lý tiện ích mở rộng* Trong trình duyệt của bạn, hãy nhấp vào *Chi tiết* dưới *AdGuard VPN* và quản lý cài đặt của nó từ đó.

Sau khi hoàn tất, bạn sẽ thấy một số tab ở bên trái:

## Cài đặt

Một vài cài đặt quan trọng được tập hợp bên trong tab này. Tại đây, bạn có thể chọn máy chủ DNS để sử dụng, thêm hoặc xóa biểu tượng AdGuard VPN khỏi menu ngữ cảnh của trình duyệt, chặn WebRTC, thay đổi chủ đề của tiện ích mở rộng và cho phép AdGuard thu thập báo cáo sự cố ẩn danh và dữ liệu kỹ thuật.

### Chọn máy chủ DNS

Theo mặc định, biểu tượng [máy chủ DNS hệ thống](https://adguard-dns.io/kb/general/dns-filtering/#what-is-dns) do ISP của bạn cung cấp được chọn, nhưng nó có thể ảnh hưởng đến quyền riêng tư của bạn. Với tiện ích mở rộng Trình duyệt AdGuard VPN, bạn có thể chọn máy chủ DNS cung cấp tốc độ và bảo mật tốt hơn, thậm chí chặn quảng cáo hoặc các miền nguy hiểm tiềm tàng. Mô tả ngắn gọn dưới tên của máy chủ DNS sẽ giúp bạn điều hướng và đưa ra quyết định của mình.

Tìm hiểu thêm về [máy chủ DNS từ các nhà cung cấp khác nhau](https://adguard-dns.io/kb/general/dns-providers/).

## Danh sách loại trừ

Tab tiếp theo chứa một trong những tính năng đặc biệt chính của AdGuard VPN – hai chế độ với danh sách loại trừ riêng biệt.

Trong **Chế độ chung**, AdGuard VPN theo mặc định hoạt động trên tất cả các trang web, ngoại trừ các trang web bạn đã thêm vào danh sách loại trừ. Trong **Chế độ chọn lọc**, ngược lại, AdGuard VPN theo mặc định không hoạt động ở bất cứ đâu. Bạn có thể thêm bất kỳ trang web nào mà bạn muốn nó hoạt động vào danh sách loại trừ, tách biệt với trang web bạn đã thấy trong **Chế độ chung**.

Khi thêm trang web vào danh sách loại trừ, bạn có thể nhập trang web theo cách thủ công hoặc chọn **Từ danh sách** sự quyết định. Trong trường hợp sau, bạn sẽ thấy tám danh mục (ví dụ: *Mua sắm*, *Sứ giả*, v.v.), mỗi dịch vụ đề xuất một số dịch vụ phổ biến. Bạn có thể loại trừ bất kỳ dịch vụ nào trong số đó chỉ bằng một cú nhấp chuột và hành động này sẽ thêm vào loại trừ tất cả các miền có liên quan đến dịch vụ cụ thể đó.

### Import and export

Bạn không chỉ có thể thêm và xóa các trang web, bạn còn có thể chuyển danh sách loại trừ sẵn sàng sang các thiết bị khác có cài đặt AdGuard VPN. Để xuất danh sách loại trừ, hãy làm theo hướng dẫn 4 bước bên dưới:

1. Mở tiện ích mở rộng Trình duyệt AdGuard VPN từ nơi bạn muốn xuất danh sách loại trừ của mình. Tìm phần thích hợp và nhấp vào nút "Xuất". The `exclusions.zip` archive will be downloaded.
2. Có hai tệp `.txt` bên trong kho lưu trữ, một tệp cho mỗi danh sách Chung và Chọn lọc. Thêm nhiều loại trừ cho chúng, xóa các loại trừ hiện có, đổi tên tệp hoặc chỉ để nguyên kho lưu trữ.
3. When transferring between different devices, send the `.zip` file to the device for import.
4. Open AdGuard VPN on that device. Find the appropriate section, click the "Import" button and select the archive. Done!

## Account

The third tab of AdGuard VPN Browser extension is utterly minimalistic, containing only the email address you used to sign into your account and two buttons, *Manage* and *Sign out*. Clicking the *Manage* button takes you to your personal AdGuard account, where you can see all your current licenses and subscriptions, as well as devices connected to them.

## Support

You can find answers to common questions in the FAQ section, or leave feedback: report a bug if something isn't working as it should, suggest adding a new feature, or discuss AdGuard on any of the many social media platforms.

## About

Another minor tab, where you can check the extension's version, visit the official website, and view the EULA or Privacy policy.
