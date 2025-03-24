# Fracdigi - 診所智慧營運行銷方案網站

專為診所設計的一站式數位行銷方案，從品牌曝光到名單轉換，助您業績倍增！

## 技術堆疊

- [Next.js](https://nextjs.org/) - React 框架
- [TypeScript](https://www.typescriptlang.org/) - 靜態型別檢查
- [React-Bootstrap](https://react-bootstrap.github.io/) - UI 元件庫
- [Font Awesome](https://fontawesome.com/) - 圖示庫

## 功能特色

- 響應式設計，適配各種裝置尺寸
- SEO 優化，包含適當的 meta 標籤
- 動畫效果，提升用戶體驗
- 可訪問性設計，符合 WCAG 標準
- 靜態網站生成，可部署到任何靜態網站主機

## 頁面構成

- 首頁 (/) - 主要業務介紹與服務預覽
- 關於我們 (/about) - 公司介紹與團隊成員
- 服務方案 (/services) - 詳細服務內容與價格
- 聯繫我們 (/contact) - 聯繫方式與聯絡表單
- 404 頁面 - 自定義錯誤頁面

## 開始使用

```bash
# 安裝相依套件
npm install

# 開發模式
npm run dev

# 生成靜態網站
npm run build

# 匯出靜態檔案
npm run export
```

## 目錄結構

- `/pages` - 網站頁面
- `/components` - React 組件與布局
- `/styles` - 全局 CSS 樣式
- `/public` - 靜態資源（圖片、字型、sitemap 等）
  - `/public/images` - 圖片資源
- `/types` - TypeScript 型別定義

## 客製化

- 全局樣式：修改 `/styles/globals.css` 中的 CSS 變數可變更主題色彩
- 網站內容：每個頁面在 `/pages` 目錄下進行編輯
- 組件結構：共享組件在 `/components` 目錄中
- SEO 設定：透過 `SEO` 組件在每個頁面中設定

## 部署

建置後的靜態檔案可以部署到任何靜態網站主機，如 Vercel、Netlify、GitHub Pages 等。
