# design.md — Warungseni99 Design System

---

## 1. Design Direction

**Konsep:** Premium Bali Art Gallery — bukan toko online, bukan portofolio agency. Terasa seperti galeri seni serius yang juga punya jiwa lokal dan hangat.

**Kata kunci visual:** Artistik · Hangat · Elegan · Tenang · Berakar budaya Bali

---

## 2. Brand Personality

| Sifat | Manifestasi Visual |
|-------|--------------------|
| Artistik | Serif typeface, banyak whitespace, gambar warm-toned |
| Hangat | Palet coklat, krem, gold — bukan biru/abu dingin |
| Premium | Shadow halus, spacing lega, card bersih |
| Elegan | Tipografi kontras besar-kecil, detail gold tipis |
| Lokal Bali | Tone warna hangat tropis, nuansa studio/galeri tradisional |
| Personal | Hindari layout korporat dan grid terlalu kaku |

---

## 3. Visual Mood

- **Warna dominan:** Dark brown, warm cream, gold
- **Suasana:** Seperti galeri lukisan mewah di Ubud menjelang sore
- **Referensi visual:** High-end art gallery, Bali boutique hotel lobby, fine art studio
- **Yang HARUS dihindari:** Warna neon, layout e-commerce generik, font sans-serif dingin semua, terlalu banyak komponen ramai

---

## 4. Color System

```css
:root {
  /* Background */
  --cream: #F7F1E8;
  --cream-soft: #EFE3D2;
  --white-warm: #FFFDF8;

  /* Brand Dark */
  --dark-brown: #1E120A;
  --brown: #3A2416;
  --brown-light: #6B4F3A;

  /* Accent */
  --gold: #C8A35D;
  --gold-soft: #D9B86C;
  --terracotta: #B46A45;

  /* Text */
  --text-dark: #1E1E1E;
  --text-muted: #6F6258;
  --border-soft: #DED2C2;

  /* Status */
  --success: #4F7A52;       /* Available */
  --sold: #B94A48;          /* Sold */
  --custom-accent: #8C6D3F; /* Custom */
}
```

### Penggunaan Warna

| Konteks | Warna |
|---------|-------|
| Background halaman utama | `--cream` / `--white-warm` |
| Background section alt | `--dark-brown` / `--brown` |
| Heading utama | `--text-dark` atau `--white-warm` (dark BG) |
| Teks body | `--text-dark` |
| Teks sekunder | `--text-muted` |
| Aksen / highlight | `--gold` |
| Label section uppercase | `--gold` |
| Border card | `--border-soft` |
| CTA utama | `--brown` atau gradient gold |
| Badge Available | `--success` |
| Badge Sold | `--sold` |
| Badge Custom | `--custom-accent` |

---

## 5. Typography System

### Font Stack

```css
/* Heading — Serif elegan */
--font-heading: 'Cormorant Garamond', 'Playfair Display', 'Libre Baskerville', Georgia, serif;

/* Body — Bersih dan mudah dibaca */
--font-body: 'Inter', 'Lato', 'Manrope', system-ui, sans-serif;
```

Import Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Typography Scale

| Token | Size | Weight | Font | Penggunaan |
|-------|------|--------|------|------------|
| `--text-hero` | 52–64px | 700 | Heading | H1 Hero |
| `--text-h2` | 36–44px | 600 | Heading | Judul section |
| `--text-h3` | 22–26px | 600 | Heading | Judul card |
| `--text-label` | 11–12px | 600 | Body | Label uppercase section |
| `--text-body-lg` | 17–18px | 400 | Body | Subheadline hero, deskripsi section |
| `--text-body` | 15–16px | 400 | Body | Teks umum, card description |
| `--text-sm` | 13–14px | 400 | Body | Caption, metadata lukisan |
| `--text-price` | 18–20px | 600 | Body | Harga lukisan |

### Aturan Typography

- H1 di Hero: besar, serif, line-height 1.15
- H2 section: serif, letter-spacing sedikit negatif untuk kesan elegan
- Label section: UPPERCASE, `--gold`, letter-spacing 2–3px, font-size 11–12px, font-body
- Body text: Inter, line-height 1.65–1.75
- Harga: bold, `--text-dark`, tidak menggunakan serif
- Footer heading kolom: uppercase kecil, gold, body font

---

## 6. Spacing System

```css
:root {
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 40px;
  --space-2xl: 64px;
  --space-3xl: 96px;
  --space-section: 100px; /* padding atas-bawah tiap section */
}
```

**Section padding:** `padding: 100px 0` (desktop) → `72px 0` (tablet) → `56px 0` (mobile)

**Gutter grid:** 24px desktop, 16px mobile

---

## 7. Layout Grid

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
```

| Breakpoint | Kolom | Gutter |
|-----------|-------|--------|
| Desktop ≥1280px | 12 col | 24px |
| Tablet 768–1279px | 8 col | 20px |
| Mobile <768px | 4 col | 16px |

**Grid template umum:**
- Keunggulan: `repeat(4, 1fr)` → tablet: `repeat(2, 1fr)` → mobile: `1fr`
- Koleksi: `repeat(4, 1fr)` → tablet: `repeat(2, 1fr)` → mobile: `1fr`
- Footer: `5 kolom` → tablet: `2 kolom` → mobile: `1 kolom`

---

## 8. Component System

### Button

**Primary Button (Dark)**
```css
.btn-primary {
  background: var(--brown);        /* #3A2416 */
  color: var(--white-warm);
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  font-family: var(--font-body);
  border: none;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--brown-light);  /* #6B4F3A */
  transform: translateY(-1px);
}
```

**Gold Button (CTA Utama)**
```css
.btn-gold {
  background: linear-gradient(135deg, var(--gold-soft), var(--gold));
  color: var(--dark-brown);
  padding: 14px 28px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(200, 163, 93, 0.25);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-gold:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(200, 163, 93, 0.4);
}
```

**Outline Button**
```css
.btn-outline {
  background: transparent;
  border: 1.5px solid var(--gold);
  color: var(--gold);           /* di atas dark BG */
  padding: 13px 27px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease;
}
.btn-outline:hover {
  background: rgba(200, 163, 93, 0.12);
}
/* Varian di atas light BG — text dark brown */
.btn-outline.dark {
  color: var(--brown);
  border-color: var(--brown);
}
```

### Card

```css
.card {
  background: var(--white-warm);
  border: 1px solid var(--border-soft);
  border-radius: 16px;
  padding: 28px 24px;
  box-shadow: 0 2px 12px rgba(30, 18, 10, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(30, 18, 10, 0.12);
}
```

---

## 9. Navbar Design

```
[Logo / Brand Name]  [subtitle kecil]    [Home][Koleksi][...]    [Hubungi Kami ▶]
```

- **Height:** 72px desktop, 60px mobile
- **Position:** `position: sticky; top: 0; z-index: 100`
- **Background default:** `var(--dark-brown)` atau sedikit transparan saat di hero
- **Background saat scroll:** `rgba(30, 18, 10, 0.95)` + `backdrop-filter: blur(12px)`
- **Border bawah:** `1px solid rgba(200, 163, 93, 0.2)`
- **Logo:** font heading, warna `--white-warm`, ukuran 18–20px
- **Subtitle:** font body, warna gold soft, ukuran 10px, uppercase, letter-spacing
- **Menu link:** `--white-warm`, hover: `--gold`, transition 0.2s
- **CTA button navbar:** `btn-gold` ukuran compact (padding 10px 20px)

**Mobile Navbar:**
- Hamburger 3 garis (warna gold)
- Menu slide-down atau overlay dari kanan
- CTA WhatsApp tetap di pojok kanan atas

---

## 10. Hero Design

**Layout:** Split atau full-width dengan image background + overlay

```
┌──────────────────────────────────────────────┐
│  [Label kecil gold — uppercase]               │
│                                              │
│  H1 HEADLINE BESAR SERIF                    │
│  DUA–TIGA BARIS                             │
│                                              │
│  Subheadline body text, satu paragraf.       │
│                                              │
│  [CTA Gold] [CTA Outline]                   │
│                                              │
│  ● ● ● 2.000+ pelanggan puas  ★★★★★        │
└──────────────────────────────────────────────┘
```

- **Min-height:** `100vh` atau 680px
- **Background:** Gambar lukisan / galeri / villa interior Bali — warm tone
- **Overlay:** `linear-gradient(to right, rgba(30,18,10,0.85) 40%, rgba(30,18,10,0.2) 100%)`
- **Text:** semua `--white-warm`
- **Label:** `--gold`, font-size 11px, uppercase, letter-spacing 3px
- **H1:** `--font-heading`, 52–64px
- **Subheadline:** `--font-body`, 17px, `opacity: 0.85`
- **Social proof:** flex row, avatar lingkaran kecil 32px, teks 14px

---

## 11. Section Design Guidelines

Setiap section mengikuti pola berikut:

```
[Label kecil gold uppercase]  ← opsional
[H2 Judul Section]
[Subheadline / deskripsi]     ← opsional
[Konten utama: grid / flexbox]
[CTA]                         ← opsional
```

**Section background alternasi:**

| Section | Background |
|---------|-----------|
| Hero | dark image + overlay |
| Keunggulan | `--cream` |
| Koleksi | `--white-warm` |
| Custom Painting | `--dark-brown` atau `--brown` |
| Painting Class | `--cream-soft` |
| Tentang Kami | `--white-warm` |
| Untuk Siapa | `--cream` |
| Testimoni | `--dark-brown` |
| CTA Banner | dark image + overlay |
| FAQ | `--white-warm` |
| Footer | `--dark-brown` |

---

## 12. Collection Card Design

```
┌────────────────────────┐
│                        │
│    [IMAGE 4:3]         │  ← aspect-ratio: 4/3, object-fit: cover
│                        │
│    [Badge Status]      │  ← pojok kiri atas pada image (absolut)
│                        │
├────────────────────────┤
│  Nama Lukisan H3       │
│  Medium · Ukuran       │  ← text-muted, text-sm
│                        │
│  Rp4.500.000           │  ← text-price, bold
│                        │
│  [Tanya Karya Ini →]   │  ← btn-outline atau btn-primary kecil
└────────────────────────┘
```

**Badge status:**
```css
.badge-available { background: var(--success); color: white; }
.badge-sold { background: var(--sold); color: white; }
.badge-custom { background: var(--custom-accent); color: white; }
/* Style umum badge */
.badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

**Grid:** `repeat(4, 1fr)` → tablet: `repeat(2, 1fr)` → mobile: `1fr`

---

## 13. Custom Painting Section Design

**Layout:** 2 kolom — kiri teks + proses, kanan image

Background: `--dark-brown` → teks `--white-warm` dan `--cream`

**Proses 4 langkah:**
```
[01]        [02]           [03]             [04]
Konsultasi  Desain &      Proses            Pengiriman
Gratis      Konsep        Profesional       Aman
            Eksklusif     & Terpercaya      ke Seluruh Dunia
```

Step number: font serif besar, warna `--gold`, opacity rendah (sebagai dekoratif)  
Garis horizontal atau step indicator minimal menghubungkan tiap langkah  
**Mobile:** teks 1 kolom, image di atas

---

## 14. Painting Class Section Design

**Layout:** Full width, background `--cream-soft`

**Highlight 4 item:** icon + heading + teks, grid 2×2 di desktop, 2×2 tablet, 1 kolom mobile

**Pilihan kelas:** 4 tab atau 4 card horizontal kecil  
```
[Reguler]   [Private]   [Couple/Family]   [Event & Team Building]
```
Style: `--white-warm` card, border gold tipis, hover gold background ringan

---

## 15. Testimonial Design

**Background:** `--dark-brown`  
**Layout:** 3 card horizontal, atau carousel di mobile

```
┌──────────────────────────┐
│  ★★★★★                   │
│                          │
│  "Teks testimoni..."     │
│                          │
│  — Nama, Peran           │
└──────────────────────────┘
```

- Card background: `rgba(255,253,248,0.07)` atau `--brown`
- Border: `1px solid rgba(200,163,93,0.25)`
- Bintang: `--gold`
- Teks quote: `--cream`, font-style italic
- Nama: `--gold`
- Peran: `--text-muted` / cream 70%

---

## 16. CTA Banner Design

**Background:** Gambar studio gelap + overlay `rgba(30,18,10,0.78)`

**Layout:** Center-aligned

```
          ✦  (ornamen gold kecil)

    Pesan Lukisan atau Ikut
    Painting Class Sekarang!
            ^^^^^^^^^^^^^^
            (kata ini: warna --gold)

    Subheadline body text...

    [Chat via WhatsApp]   [Lihat Jadwal Kelas]
```

- H2: `--white-warm`, besar serif
- Ornamen atas: karakter unicode atau SVG kecil, warna `--gold`
- Dua button: gold + outline gold

---

## 17. FAQ Accordion Design

```css
.faq-item {
  border-bottom: 1px solid var(--border-soft);
  padding: 20px 0;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  color: var(--text-dark);
}
.faq-question:hover { color: var(--brown); }
.faq-icon {
  width: 20px; height: 20px;
  color: var(--gold);
  transition: transform 0.3s ease;
}
.faq-item.open .faq-icon { transform: rotate(45deg); }
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.3s ease;
  font-size: 15px;
  color: var(--text-muted);
  line-height: 1.7;
}
.faq-item.open .faq-answer {
  max-height: 200px;
  padding-top: 12px;
}
```

Ikon: tanda `+` berubah menjadi `×` saat open, atau rotasi 45deg

---

## 18. Footer Design

**Background:** `--dark-brown`  
**Teks default:** `--cream` / `--white-warm`  
**Heading kolom:** `--gold`, uppercase, letter-spacing 1.5px, font-body, 12px  
**Border top:** `1px solid rgba(200,163,93,0.2)`

**Layout 5 kolom (desktop):**
```
[Brand Info]  [Hubungi Kami]  [Jam Operasional]  [Jasa Pengiriman]  [Rekening Admin]
```

**Brand Info:**
- Nama brand heading besar (`--gold`)
- Subtitle uppercase kecil
- Deskripsi singkat cream
- Social icons: lingkaran 36px, border gold, icon warna cream, hover gold

**Jasa Pengiriman:**
- Grid 2×2 logo ekspedisi
- Logo bisa grayscale → filter: brightness(0) invert(1) untuk white version
- Teks "Pengiriman aman & terpercaya" di bawah

**Rekening Admin:**
```
┌────────────────────┐
│  🏦 BRI            │
│  0815-0101-9298-538│
│  a/n Muchamad Toha │
└────────────────────┘
```
- Card rekening: `background: rgba(255,253,248,0.07)`, border `rgba(200,163,93,0.2)`, radius 10px, padding 14px
- Nama bank: `--gold`, bold
- No rekening: monospace font, cream
- A/N: text-muted cream

**Copyright bar:**
```
border-top: 1px solid rgba(200,163,93,0.15)
padding: 20px 0
text-align: center
font-size: 13px
color: var(--text-muted) / cream 50%
```

---

## 19. Responsive Design Rules

### Desktop (≥1280px)
- Container max-width 1200px, center
- Hero H1 64px
- Section padding 100px vertikal
- Grid koleksi 4 kolom
- Footer 5 kolom

### Tablet (768–1279px)
- Container padding 24px horizontal
- Hero H1 44–48px
- Section padding 72px vertikal
- Grid koleksi & keunggulan 2 kolom
- Footer 2–3 kolom
- Navbar mulai semi-collapsed

### Mobile (<768px)
- Container padding 16px horizontal
- Hero H1 32–36px
- Section padding 56px vertikal
- Semua grid 1 kolom kecuali jasa pengiriman (2×2)
- CTA button full-width di hero
- Hamburger menu
- Footer 1 kolom, stack vertikal
- Rekening admin stack vertikal
- Font body minimum 14px
- Tidak ada horizontal overflow (`overflow-x: hidden` di body)

---

## 20. Animation Guidelines

**Prinsip:** Halus, tidak mengganggu. Animasi untuk enhancement, bukan atraksi.

| Interaksi | Efek |
|----------|------|
| Card hover | `translateY(-4px)` + shadow lebih dalam, `0.25s ease` |
| Button hover | `translateY(-1px)` atau shadow | 
| Scroll reveal | `opacity 0→1` + `translateY(20px→0)`, `0.5s ease`, threshold 20% |
| FAQ accordion | `max-height` transition `0.35s ease` |
| Navbar scroll | background transition `0.3s ease` |
| Badge | tidak ada animasi |

**Scroll reveal:** gunakan `IntersectionObserver` pada section utama dan card.  
**Jangan gunakan:** bounce, flip, zoom dramatis, animasi berulang (loop) yang tidak diperlukan.

---

## 21. Image Guidelines

**Format:** WebP dengan fallback JPG  
**Lazy loading:** `loading="lazy"` pada semua gambar kecuali hero  
**Hero image:** `loading="eager"` atau preload

**Konten gambar per section:**

| Section | Konten Gambar |
|---------|--------------|
| Hero | Interior villa/galeri Bali, lukisan besar di dinding |
| Koleksi | Foto lukisan dengan latar netral, lit baik |
| Custom Painting | Seniman melukis, detail kuas di kanvas |
| Painting Class | Peserta belajar melukis di studio |
| Tentang Kami | Foto studio / galeri / seniman |
| CTA Banner | Studio gelap, nuansa artistik |

**Tone gambar:**
- Warm: golden hour, studio dengan pencahayaan hangat
- Tidak terlalu terang/pastel
- Tidak corporate/cold/studio photo putih datar
- Selalu terasa artisanal, handmade, lokal Bali

**Overlay:**
- Gunakan overlay gelap hanya jika ada teks di atas gambar
- Hero overlay: `rgba(30,18,10,0.75)` sisi kiri
- CTA overlay: `rgba(30,18,10,0.78)` full

---

## 22. Accessibility Guidelines

- Semua `<img>` wajib punya `alt` yang deskriptif
- Tombol yang hanya punya icon wajib punya `aria-label`
- FAQ accordion: gunakan `button` HTML, `aria-expanded`, `aria-controls`
- Hamburger: `<button aria-label="Buka menu navigasi">`
- Link navigasi: `<a>` bukan `<div>` atau `<span>`
- Focus outline: jangan `outline: none` tanpa pengganti yang visible
- Kontras minimum 4.5:1 (body text) dan 3:1 (large text / UI components)
- Scroll behavior: `scroll-behavior: smooth` dengan `@media (prefers-reduced-motion: reduce)` fallback

---

## 23. UI Do and Don't

### ✅ DO
- Gunakan heading serif yang elegan dan besar untuk judul section
- Beri whitespace yang cukup — jangan takut halaman terasa "kosong"
- Gunakan warna gold hanya sebagai aksen, bukan dominan
- Card hover selalu ada (translateY + shadow)
- Label section selalu uppercase gold
- Gambar selalu warm tone dan relevan
- Button CTA utama selalu gold

### ❌ DON'T
- Jangan gunakan banyak warna berbeda dalam satu section
- Jangan gunakan font sans-serif saja untuk heading — harus serif
- Jangan buat card terlalu padat / padding terlalu kecil
- Jangan gunakan warna neon, biru dingin, atau hijau terang
- Jangan sembunyikan CTA WhatsApp
- Jangan buat layout yang membuat pengguna bingung navigasinya
- Jangan gunakan animasi berlebihan (tidak perlu parallax berat)
- Jangan gunakan gambar stock generic yang tidak relevan dengan seni/Bali

---

## 24. Final Design Checklist

**Sebelum handoff ke developer, pastikan:**

- [ ] Semua color token dipakai konsisten sesuai design.md ini
- [ ] Font heading serif dipakai di semua H1, H2, H3
- [ ] Label section uppercase + gold ada di tiap section yang relevan
- [ ] Card hover terimplementasi di semua card
- [ ] Badge status koleksi 3 warna berbeda (Available/Sold/Custom)
- [ ] Semua CTA mengarah ke WhatsApp dengan pesan preset
- [ ] Hero memiliki social proof (avatar + rating + jumlah pelanggan)
- [ ] Proses custom painting 4 langkah jelas terbaca
- [ ] FAQ accordion berfungsi expand/collapse
- [ ] Footer memuat 5 kolom lengkap
- [ ] Rekening admin 2 bank dalam card tersendiri
- [ ] Logo jasa pengiriman 4 item dalam grid 2×2
- [ ] Responsive sempurna di 3 breakpoint
- [ ] Tidak ada horizontal scroll di mobile
- [ ] Alt text pada semua gambar
- [ ] Lighthouse performance ≥ 85
