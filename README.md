# AI Antibiotic Synergy Prediction System – CRAB

Ứng dụng web dự đoán chỉ số FIC (Fractional Inhibitory Concentration) cho phối hợp kháng sinh trên *Acinetobacter baumannii* kháng carbapenem (CRAB):

- **2 thuốc:** Meropenem + Colistin
- **3 thuốc:** Meropenem + Colistin + Ampicillin/Sulbactam

> ⚠️ Kết quả chỉ mang tính tham khảo in vitro, không thay thế đánh giá lâm sàng của bác sĩ chuyên khoa.

## Chạy trên máy

Yêu cầu: [Node.js](https://nodejs.org) 18 trở lên.

```bash
npm install
npm run dev
```

Mở địa chỉ hiển thị trong terminal (thường là http://localhost:5173).

## Build bản production

```bash
npm run build
```

Kết quả nằm trong thư mục `dist/`.

## Đưa lên GitHub & GitHub Pages

1. Tạo repository mới trên GitHub, giải nén file zip và đẩy toàn bộ nội dung lên nhánh `main`:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<tên-tài-khoản>/<tên-repo>.git
   git push -u origin main
   ```
2. Vào **Settings → Pages**, mục **Source** chọn **GitHub Actions**.
3. Workflow `.github/workflows/deploy.yml` sẽ tự build và xuất bản. Trang web có tại
   `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

## Cấu trúc

```
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   └── App.jsx        # Toàn bộ giao diện và mô hình dự đoán
└── .github/workflows/deploy.yml
```

## Tài liệu tham khảo

- Lam Kien Thanh et al. (2025), Van Lang University – mô hình FIC meropenem-colistin.
- Huynh Minh Tuan et al. (2025), University of Medicine and Pharmacy at Ho Chi Minh City – mô hình phối hợp 3 kháng sinh.

## Liên hệ

Lam Kien Thanh – Van Lang University – thanh.lk@vlu.edu.vn
