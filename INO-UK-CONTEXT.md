# INO UK — Proje Bağlamı

> Bu dosya, TR pazarı için geçerli `CLAUDE.md` kurallarına **ek** olarak INO'nun İngiltere (UK) pazarına özel bağlamını taşır. UK içerikli her iş bu dosyayla birlikte okunmalı — TR ve UK kataloğu/Figma dosyası birbirinden farklıdır.

## Ürün Kataloğu Farkı (ÇOK ÖNEMLİ)

[inobeauty.co.uk](https://inobeauty.co.uk) resmi sitesine göre UK'de satılan ürünler:

| Ürün Grubu | UK'de mevcut varyantlar |
|---|---|
| **Catch Bloom** (Lip & Cheek Stick) | Scarlet, Peony, Daylily, Hibiscus |
| **Catch Glow** (Multi-Use Beauty Booster Illuminating Cream) | Pink Quartz, Ruby Gold |
| **Catch Sculpt** (Bronzer) | Sand (Dune referans görseli Figma'da mevcut ama sitede sadece Sand teyitli) |

**UK'de YOK:** Broad Spectrum Sunscreen, Beauty Shot (Collagen Shot). Bu ikisi TR kataloğunda var ama UK üretimlerine dahil edilmeyecek.

## Figma Dosyası — INO--Visuals-UK

- URL: `https://www.figma.com/design/nbp4bieDXNKtHLEgzZZtqQ/INO--Visuals-UK`
- fileKey: `nbp4bieDXNKtHLEgzZZtqQ`
- TR'nin ana Figma dosyasından (`ej8JpbRaZU1qH7rdYxLvGP`, INO--Visuals) **tamamen ayrı**.
- Sayfalar ay adıyla anılır: `TEMMUZ - 2026`, `HAZİRAN-2026`, `MAYIS - 2026`, `NİSAN - 2026`, `MART - 2026`, `OCAK - 2026`, `Website Görseller + Banner`, `ARCHIVE`.

### Frame Adlandırma / Boyut Kalıbı

`{konsept adı} {format} {WxH}` — ör. `summer sale now on 40% 1080x1920`. Her konsept 3 sosyal boyutta üretilir: **1080x1920** (perf/story), **1080x1080**, **1080x1350** (feed/post).

**Frame'ler ALT ALTA dizilir** — aynı x koordinatında, artan y ile:
- 1920'lik frame → y=0
- 1080'lik frame → y=2254 (1920 + 334px boşluk)
- 1350'lik frame → y=3668 (2254 + 1080 + 334px boşluk)

Bu 334px boşluk kalıbını yeni konseptler eklerken de kullan. Yan yana (farklı x'te) dizmek YANLIŞ.

### Web Banner Boyutu

`Website Görseller + Banner` sayfasında bulunan gerçek kalıp:
- **"Web Banner"**: 3100×1200 (büyük yatay, varsayılan "banner" isteğinde bu kullanılır) veya 640×640 (kare)
- **"Web"**: 1536×672

### Platform Bazlı İçerik Kuralı

1080x1080 ve 1080x1920 indirim/kampanya yazısı taşıyabilir; ama **1080x1350 "profilde/feed'de organik paylaşım" için ayrılmışsa indirim yazısı VE logo konulmaz** — sadece ürün (+ varsa typewriter etiketleri) kalır. Bu kural bir slayt bazlı istekten geldi — her 1350 formatı için genel olup olmadığını teyit et.

## Font Kısıtı (Figma Plugin API / MCP sandbox)

**Avenir Next** bu ortamda (`use_figma` / `loadFontAsync`) YÜKLENEMİYOR — `listAvailableFontsAsync()` sonucunda yok. Eski frame'ler bu fontu insan tarafından yerel Figma'da oluşturduğu için görüntüler, ama API üzerinden yeni metin oluşturulurken kullanılamaz.

- **Başlık/alt yazı ikamesi:** Inter (Black Italic / Semi Bold Italic)
- **Typewriter tarzı ürün etiketleri:** Courier Prime (Regular)

## Kampanya Brief Kaynakları (Google Slides)

UK Temmuz 2026 "%30 indirim" kampanyası için iki Slides dosyası kullanılıyor, her slaytta bir marka referans görseli + Türkçe üretim açıklaması var:

1. **"30%off_July"** — `https://docs.google.com/presentation/d/1GCHyV1DpmMhRM-EvVjl_Yuc8yDJb0chC1NtLcUjFfxA` (9 slayt). Referans markalar: MERIT, rhode, ILIA (x3), mascara stat-claim örneği. **Slide 1 tamamlandı** (bulanık deniz arka planı + 1 Bloom + 1 Glow + 1 Sculpt + typewriter etiketler, → TEMMUZ-2026 sayfası).
2. **"Content"** — `https://docs.google.com/presentation/d/1X1WRWgABRaUeQLvdfc74MD6W0aCtbR78-j_2RQ_rpRA` (9 slayt). Referans stiller: Pinterest yaz/plaj sahneleri, "CASA MARGUO" tabela konsepti (→ INO yazısıyla), REFY (ürün dizilimi + deniz manzarası), ILIA ("powder that makes your skin better" → Catch Bloom versiyonu), MERIT tinted sunscreen (claim listesi → Catch Bloom/Catch Glow versiyonu), Glossier Cloud Paint (yoğun allık yakın çekim → "meet catch bloom, a super-balm" versiyonu). **Henüz işlenmedi.**

## Üretim/Tasarım Kuralları (UK'ye özel, TR kurallarına ek)

- Set/dizilim görsellerinde ürün karışıklığını önlemek için **varsayılan olarak her üründen sadece 1 tane** kullan (1 Bloom + 1 Glow + 1 Sculpt) — kullanıcı özellikle "hepsini kullan" demediği sürece.
- Kullanıcının Figma'ya önceden yerleştirdiği referans ürün kırpmaları (TEMMUZ-2026 sayfasında negatif y koordinatlarında: dune, sand, daylily, hibiscus, peony, scarlet, pink quartz, ruby gold) **gerçek UK ambalaj görselleri ve doğru birbirine oranları** — yeni üretimlerde ürün kullanmadan önce bunları `download_assets` ile çekip referans al, TR Products klasöründeki eşdeğerlerini varsayılan olarak kullanma.
- Higgsfield promptlarında 3+ ürün birlikte referans verilince model tasarımı/etiketi sıkça bozuyor — üretim sonrası ürün etiketinin/logosunun gerçek tasarımla eşleştiğini kontrol et, uydurma/generic yazı çıkarsa yeniden dene.
