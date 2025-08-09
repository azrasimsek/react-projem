# Alışveriş Listesi Uygulaması

React ve Vite kullanılarak geliştirilmiş basit bir alışveriş listesi uygulaması.

## Özellikler

- Listeye yeni ürün ekleme
- Ürünleri silme 
- Ürünleri tamamlandı/tamamlanmadı olarak işaretleme
- Ürünleri filtreleme:
  - Tümünü göster
  - Tamamlananları göster
  - Tamamlanmayanları göster
- Tüm listeyi temizleme

## Kullanılan Teknolojiler

- React 19
- Vite 6
- Bootstrap 5
- Bootstrap Icons

## Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme modunda çalıştırın:
```bash
npm run dev
```

4. Projeyi build alın:
```bash
npm run build
```

## Proje Yapısı

```
src/
  ├── components/         # React bileşenleri
  │   ├── AddItemForm    # Yeni ürün ekleme formu
  │   ├── FilterButtons  # Filtreleme butonları
  │   ├── Header        # Sayfa başlığı
  │   ├── Item          # Tekil ürün komponenti
  │   ├── ListItems     # Ürün listesi
  │   └── NoItem        # Boş liste durumu
  ├── App.jsx           # Ana uygulama bileşeni
  └── main.jsx          # Uygulama giriş noktası
```
