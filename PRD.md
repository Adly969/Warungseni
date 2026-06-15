# PRD.md — Warungseni99 Landing Page

---

## 1. Product Overview

**Nama Produk:** Warungseni99 Landing Page  
**Versi:** 1.0  
**Tipe:** Single-page landing page (SPA dengan anchor navigation)  
**Platform:** Web (Desktop, Tablet, Mobile)  
**Bahasa:** Indonesia (dengan beberapa elemen Inggris untuk estetika)

---

## 2. Background

Warungseni99 adalah brand seni berbasis di Bali yang bergerak di bidang:
- Penjualan lukisan original Bali
- Layanan custom painting
- Painting class / workshop melukis

Saat ini brand belum memiliki landing page yang merepresentasikan identitas premium dan galeri seni mereka secara digital. Website ini dibutuhkan sebagai wajah digital utama brand untuk menarik pembeli lukisan, peserta kelas, tamu villa/hotel, dan pelanggan internasional yang ingin merasakan seni Bali.

---

## 3. Goals

1. Memperkenalkan brand Warungseni99 secara profesional dan premium.
2. Menampilkan koleksi lukisan pilihan secara visual menarik.
3. Menjelaskan layanan custom painting dan painting class dengan jelas.
4. Membangun kepercayaan calon pembeli dan peserta kelas.
5. Mengarahkan semua konversi ke WhatsApp (tanpa sistem order/checkout).
6. Menampilkan informasi kontak, jam operasional, jasa pengiriman, dan rekening admin.
7. Website terasa seperti galeri seni Bali premium, bukan toko online biasa.

---

## 4. Non-Goals

Hal-hal berikut **tidak** termasuk dalam scope proyek ini:

- Login / Register / Membership
- Keranjang belanja (Cart) dan Checkout
- Sistem pembayaran otomatis
- Upload bukti pembayaran
- Database produk / CMS dinamis
- Dashboard admin
- Multi-page / routing kompleks
- Blog / artikel
- Booking engine
- SaaS / fitur langganan
- Marketplace

---

## 5. Target Users

### 5.1 Pembeli Lukisan Pribadi
- Ingin dekorasi rumah, ruang tamu, ruang keluarga, atau ruang kerja.
- Mencari lukisan indah dan bernilai seni.
- Tertarik pada nuansa Bali yang hangat dan artistik.

### 5.2 Pemilik Villa, Hotel, Restoran & Cafe
- Butuh lukisan untuk interior bertema Bali premium.
- Menginginkan karya yang meningkatkan nilai estetika properti.
- Pembelian dalam jumlah lebih dari satu potensial.

### 5.3 Interior Designer
- Butuh karya seni untuk proyek dekorasi klien.
- Memerlukan custom painting sesuai warna, ukuran, dan konsep ruangan.
- Menghargai profesionalisme dan kualitas konsisten.

### 5.4 Kolektor Seni
- Mencari karya original dan unik.
- Menghargai detail, medium, dan teknik.
- Tertarik pada provenance dan nilai karya.

### 5.5 Wisatawan di Bali
- Ingin membeli lukisan sebagai oleh-oleh seni.
- Tertarik ikut painting class sebagai aktivitas liburan.
- Mungkin tidak berbicara bahasa Indonesia.

### 5.6 Pemula yang Ingin Belajar Melukis
- Tidak punya pengalaman melukis sebelumnya.
- Mencari kelas santai, private, couple, family, atau event kreatif.
- Menginginkan suasana studio yang nyaman dan instruktur sabar.

---

## 6. User Problems

| User | Problem |
|------|---------|
| Pembeli lukisan | Tidak tahu di mana menemukan lukisan Bali berkualitas dan terpercaya secara online |
| Pemilik villa/hotel | Sulit menemukan vendor lukisan premium yang bisa custom dan dikirim |
| Interior designer | Tidak ada katalog yang bisa dilihat sebelum negosiasi |
| Wisatawan | Tidak tahu ada painting class yang ramah pemula di Bali |
| Pemula | Takut mencoba kelas karena tidak tahu apakah cocok untuk level mereka |

---

## 7. Value Proposition

> **Warungseni99 menghadirkan lukisan original Bali, custom painting, dan painting class dalam satu brand yang premium, hangat, dan terpercaya — langsung bisa dihubungi via WhatsApp.**

- Satu platform untuk melihat koleksi, memesan custom, dan daftar kelas
- Nuansa galeri seni Bali yang premium dan elegan
- Semua proses dimulai lewat percakapan (WhatsApp), bukan form kaku
- Konten bilingual potensial untuk menjangkau wisatawan asing

---

## 8. Scope

**Dalam Scope:**
- 1 halaman HTML dengan 12 section (anchor navigation)
- Responsive: Desktop, Tablet, Mobile
- WhatsApp CTA di seluruh halaman
- Placeholder image (diganti foto asli saat produksi)
- Data statis (hardcoded)

**Di Luar Scope:**
- CMS / backend
- Sistem database lukisan
- Booking engine terintegrasi
- Multi-bahasa otomatis (bisa ditambahkan di versi 2)

---

## 9. Information Architecture

```
Warungseni99 (Single Page)
│
├── Navbar (sticky)
│   ├── Logo + Subtitle
│   ├── Menu: Home | Koleksi | Tentang Kami | Custom Painting | Painting Class | Testimoni | Kontak
│   └── CTA: Hubungi Kami (WhatsApp)
│
├── Hero Section
├── Section: Keunggulan
├── Section: Koleksi Lukisan
├── Section: Custom Painting
├── Section: Painting Class
├── Section: Tentang Kami
├── Section: Untuk Siapa
├── Section: Testimoni
├── Section: CTA Besar
├── Section: FAQ (Accordion)
└── Footer
    ├── Brand Info + Social Media
    ├── Hubungi Kami
    ├── Jam Operasional
    ├── Jasa Pengiriman
    └── Nomor Rekening Admin
```

---

## 10. Landing Page Section Requirements

### 10.1 Navbar
- **Sticky** di semua breakpoint
- Logo kiri: nama **Warungseni99** + subtitle *Galeri Seni & Studio Lukisan Bali*
- Menu: Home · Koleksi · Tentang Kami · Custom Painting · Painting Class · Testimoni · Kontak
- CTA kanan: **Hubungi Kami** → WhatsApp
- Mobile: hamburger menu, CTA tetap terlihat
- Background: dark brown / semi-transparent saat scroll

### 10.2 Hero Section
- Label kecil: *SENI BALI OTENTIK, HADIR DI RUANG ANDA*
- H1: **Lukisan Original Bali untuk Ruang yang Lebih Bermakna**
- Subheadline: deskripsi brand singkat
- CTA 1: **Lihat Koleksi** (scroll ke section koleksi)
- CTA 2: **Konsultasi via WhatsApp**
- Social proof: avatar + **2.000+ pelanggan puas** + bintang 5
- Visual: gambar interior galeri / villa Bali

### 10.3 Keunggulan (4 Card)
1. Lukisan Original Bali
2. Custom Painting
3. Painting Class / Workshop
4. Kualitas & Garansi

### 10.4 Koleksi Lukisan (8 Card)
Setiap card memuat:
- Gambar lukisan
- Nama, medium, ukuran, harga
- Badge status: Available / Sold / Custom
- Button → WhatsApp

Data:
| No | Nama | Medium | Ukuran | Harga | Status |
|----|------|--------|--------|-------|--------|
| 1 | Kebersamaan | Oil on Canvas | 100×120 cm | Rp4.500.000 | Available |
| 2 | Tegalalang Morning | Oil on Canvas | 90×120 cm | Rp3.800.000 | Available |
| 3 | Harmoni Abstrak | Acrylic on Canvas | 100×100 cm | Rp4.000.000 | Available |
| 4 | Suasana Desa Ubud | Oil on Canvas | 100×140 cm | Rp5.300.000 | Sold |
| 5 | Lotus Serenity | Oil on Canvas | 80×100 cm | Rp3.500.000 | Available |
| 6 | Ocean Flow | Acrylic on Canvas | 120×150 cm | Rp4.200.000 | Available |
| 7 | Spirit of Bali | Oil on Canvas | 100×140 cm | Rp4.900.000 | Custom |
| 8 | Whisper Mind | Acrylic on Canvas | 100×140 cm | Rp4.600.000 | Custom |

### 10.5 Custom Painting
- Proses 4 langkah: Konsultasi → Desain & Konsep → Proses Profesional → Pengiriman Aman
- CTA: Konsultasi via WhatsApp + Lihat Contoh Karya Custom
- Visual: seniman melukis / detail kanvas

### 10.6 Painting Class
- 4 highlight: Kelas Pemula, Private/Grup Kecil, Peralatan Disediakan, Cocok Wisatawan & Lokal
- Pilihan kelas: Reguler, Private, Couple/Family, Event & Team Building
- CTA: Daftar Kelas + Tanya Jadwal → WhatsApp

### 10.7 Tentang Kami
- Narasi brand + 4 poin kepercayaan
- Visual: foto studio / seniman

### 10.8 Untuk Siapa (4 Card)
1. Rumah Pribadi
2. Villa & Hotel
3. Interior Designer
4. Pecinta Seni & Wisatawan

### 10.9 Testimoni (3 Card)
1. Made W. — Pemilik Villa Ubud
2. Sarah L. — Peserta Painting Class
3. Kevin H. — Interior Designer

### 10.10 CTA Besar
- Judul besar dengan aksen gold pada kata "Painting Class"
- Background: gambar studio dark + overlay coklat gelap
- 2 CTA button: Chat via WhatsApp + Lihat Jadwal Kelas

### 10.11 FAQ Accordion (4 item)
1. Apakah bisa custom lukisan?
2. Berapa lama proses pengerjaan?
3. Apakah pemula bisa ikut painting class?
4. Apakah pengiriman aman ke luar kota/negeri?

### 10.12 Footer (5 Kolom)
- Brand Info + Social Media
- Hubungi Kami (telp, email, alamat)
- Jam Operasional
- Jasa Pengiriman (logo JNE, J&T, POS, TIKI)
- Nomor Rekening Admin (BRI + Mandiri)

---

## 11. Functional Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| F01 | Navbar sticky dengan smooth scroll ke anchor | High |
| F02 | Hamburger menu mobile dengan toggle animasi | High |
| F03 | Semua CTA buka WhatsApp link baru dengan pesan preset | High |
| F04 | Badge status lukisan (Available / Sold / Custom) dengan warna berbeda | High |
| F05 | FAQ accordion expand/collapse per item | High |
| F06 | Hover effect pada card koleksi, keunggulan, dan untuk siapa | Medium |
| F07 | Scroll reveal animation ringan pada section | Medium |
| F08 | Social proof di hero (avatar + rating) | Medium |
| F09 | Tombol salin nomor rekening (opsional) | Low |
| F10 | Back-to-top button | Low |

---

## 12. Content Requirements

- Semua teks dalam Bahasa Indonesia (profesional)
- Harga menggunakan format Rupiah: `Rp4.500.000` (tanpa desimal)
- Nomor telepon: `+62 812-3456-7890`
- Email: `info@warungseni99.com`
- Alamat: `Jl. Raya Ubud No.99, Ubud, Gianyar, Bali 80571, Indonesia`
- Jam operasional: Senin–Jumat 09.00–17.00, Sabtu 09.00–18.00, Minggu 10.00–16.00, Libur Nasional: Tutup
- Rekening BRI: `0815-0101-9298-538` a/n Muchamad Toha Hasan
- Rekening Mandiri: `145-0014-2390-20` a/n Muchamad Toha Hasan

---

## 13. WhatsApp CTA Requirements

**Nomor WA:** `6281234567890` *(ganti dengan nomor asli saat produksi)*

Format URL: `https://wa.me/6281234567890?text=[pesan encoded]`

| Tombol | Pesan Default |
|--------|---------------|
| Hubungi Kami (Navbar) | Halo Warungseni99, saya ingin bertanya tentang layanan Anda. |
| Konsultasi via WhatsApp (Hero) | Halo Warungseni99, saya tertarik konsultasi tentang lukisan/painting class. |
| Tanya Karya Ini (Koleksi) | Halo Warungseni99, saya tertarik dengan lukisan [nama]. Bisa dibantu? |
| Konsultasi Custom Painting | Halo Warungseni99, saya ingin konsultasi custom painting. |
| Daftar Painting Class | Halo Warungseni99, saya ingin daftar painting class. |
| Tanya Jadwal Kelas | Halo Warungseni99, saya ingin tanya jadwal painting class. |
| Chat via WhatsApp (CTA) | Halo Warungseni99, saya ingin memesan lukisan / ikut painting class. |

---

## 14. SEO Requirements

**Meta Title:**  
`Warungseni99 | Galeri Seni, Lukisan Custom & Painting Class Bali`

**Meta Description:**  
`Warungseni99 menyediakan lukisan original Bali, custom painting, dan painting class untuk rumah, villa, hotel, restoran, kolektor, dan pecinta seni.`

**Keywords Utama:**
- lukisan Bali
- jual lukisan di Bali
- lukisan custom Bali
- painting class Bali
- workshop melukis Bali
- lukisan untuk villa
- lukisan untuk hotel
- seni lukis Bali
- original painting Bali
- Warungseni99

**Struktur Heading:**
- H1: hanya satu, di Hero section
- H2: setiap section utama
- H3: judul card (nama lukisan, nama highlight, dll)

**Technical SEO:**
- Meta tag lengkap di `<head>`
- Open Graph tags (untuk share media sosial)
- Canonical URL
- Sitemap.xml (jika multi-page di masa depan)
- Alt text pada semua gambar
- Structured data (LocalBusiness schema — opsional tapi direkomendasikan)

---

## 15. Responsive Requirements

| Breakpoint | Behavior |
|-----------|---------|
| Desktop (≥1280px) | Full layout, grid 4 kolom, max-width 1200px |
| Tablet (768–1279px) | Grid 2 kolom, navbar adaptif, footer 2 kolom |
| Mobile (<768px) | 1 kolom, hamburger menu, button vertikal, footer 1 kolom |

**Aturan mobile khusus:**
- Tidak ada horizontal scroll
- Font minimum 14px untuk body
- CTA button full width atau minimum 44px tap target
- Footer rekening admin stack vertikal
- Jasa pengiriman tetap 2×2 grid

---

## 16. Accessibility Requirements

- Semua gambar wajib punya `alt` attribute yang deskriptif
- Tombol dan link punya label yang jelas (bukan hanya "klik di sini")
- Kontras warna minimum WCAG AA (4.5:1 untuk teks normal)
- Fokus keyboard terlihat (outline visible)
- FAQ accordion menggunakan `aria-expanded` dan `aria-controls`
- Hamburger menu menggunakan `aria-label="Buka menu"`
- Heading hierarchy logis (H1 → H2 → H3)

---

## 17. Performance Requirements

| Metrik | Target |
|--------|--------|
| Lighthouse Performance Score | ≥ 85 |
| First Contentful Paint (FCP) | < 2 detik |
| Largest Contentful Paint (LCP) | < 3 detik |
| Total Blocking Time (TBT) | < 300ms |
| Cumulative Layout Shift (CLS) | < 0.1 |

**Optimasi:**
- Gambar menggunakan format WebP
- Lazy loading pada gambar koleksi
- Font Google Fonts di-preload
- CSS minimal, tidak ada framework berat yang tidak diperlukan
- Minify HTML/CSS/JS di produksi

---

## 18. Analytics Recommendation

Pasang Google Analytics 4 (GA4) dan pantau:
- Jumlah klik CTA WhatsApp per button
- Section yang paling sering dilihat (scroll depth)
- Bounce rate dan session duration
- Device breakdown (mobile vs desktop)
- Source traffic (Instagram, Google, direct)

Event tracking yang disarankan:
- `whatsapp_click` (tiap tombol WA berbeda)
- `gallery_view` (klik card lukisan)
- `faq_open` (accordion dibuka)

---

## 19. Acceptance Criteria

Landing page dianggap **selesai dan berhasil** jika:

- [ ] Pengunjung langsung paham Warungseni99 menjual lukisan, custom painting, dan kelas
- [ ] Tampilan terasa premium, elegan, dan bernuansa galeri seni Bali
- [ ] Semua tombol CTA berfungsi dan mengarah ke WhatsApp dengan pesan preset
- [ ] 8 card koleksi lukisan tampil rapi dengan status badge yang benar
- [ ] Proses custom painting terjelaskan dalam 4 langkah yang mudah dipahami
- [ ] Painting class tampil sebagai layanan tersendiri dengan pilihan kelas
- [ ] FAQ accordion buka/tutup dengan benar
- [ ] Footer memuat kontak, jam operasional, jasa pengiriman, dan rekening admin
- [ ] Tidak ada fitur cart, login, checkout, atau dashboard
- [ ] Responsive sempurna di mobile, tablet, dan desktop
- [ ] Tidak ada horizontal scroll di mobile
- [ ] Lighthouse score ≥ 85

---

## 20. Future Improvement Ideas

*(Tidak termasuk v1, bisa dipertimbangkan untuk v2)*

- Galeri foto full dengan lightbox
- Filter koleksi berdasarkan medium / harga / status
- Halaman detail per lukisan (multi-page)
- Kalender kelas online yang bisa dilihat publik
- Integrasi Instagram feed otomatis
- Multi-bahasa (ID + EN) untuk wisatawan asing
- Live chat widget (selain WhatsApp)
- Virtual tour studio
- Blog / jurnal seni
