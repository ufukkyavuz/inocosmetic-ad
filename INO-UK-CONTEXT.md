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

**"Avenir Next"** bu ortamda (`use_figma` / `loadFontAsync`) YÜKLENEMİYOR — `listAvailableFontsAsync()` sonucunda yok. Eski frame'ler bu fontu insan tarafından yerel Figma'da oluşturduğu için görüntüler, ama API üzerinden yeni metin oluşturulurken kullanılamaz.

**AMA "Avenir Next W1G" API'de MEVCUT ve yüklenebiliyor** — pratikte aynı tipografi. Yeni metinlerde varsayılan olarak bunu kullan, Inter'e düşme:
- Stiller: `Bold`, `Demi`, `Medium`, `Regular`, `Light`, `Heavy` (+ Italic varyantları). Dikkat: `Demi Bold` DEĞİL, sadece `Demi`.
- **Başlık:** Avenir Next W1G Bold · **Gövde:** Medium · **İmza/atıf:** Demi veya Regular
- Inter yalnızca W1G'nin de yetmediği durumlarda ikame edilir.
- **Typewriter tarzı ürün etiketleri:** Courier Prime (Regular)

## Kampanya Brief Kaynakları (Google Slides)

UK Temmuz 2026 "%30 indirim" kampanyası için iki Slides dosyası kullanılıyor, her slaytta bir marka referans görseli + Türkçe üretim açıklaması var:

1. **"30%off_July"** — `https://docs.google.com/presentation/d/1GCHyV1DpmMhRM-EvVjl_Yuc8yDJb0chC1NtLcUjFfxA` (9 slayt). Referans markalar: MERIT, rhode, ILIA (x3), mascara stat-claim örneği. **Slide 1 tamamlandı** (bulanık deniz arka planı + 1 Bloom + 1 Glow + 1 Sculpt + typewriter etiketler, → TEMMUZ-2026 sayfası).
2. **"Content"** — `https://docs.google.com/presentation/d/1X1WRWgABRaUeQLvdfc74MD6W0aCtbR78-j_2RQ_rpRA` (**17 slayt** — müşteri zaman zaman sonuna yeni slayt ekliyor, her seferinde slayt sayısını tekrar kontrol et). Referans stiller: Pinterest yaz/plaj sahneleri, "CASA MARGUO" tabela konsepti (→ INO yazısıyla), REFY (ürün dizilimi + deniz manzarası), ILIA ("powder that makes your skin better" → Catch Bloom versiyonu), MERIT tinted sunscreen (claim listesi → Catch Bloom/Catch Glow versiyonu), Glossier Cloud Paint (yoğun allık yakın çekim → "meet catch bloom, a super-balm" versiyonu).

### Slaytların Figma karşılığı (Content deck)

- **Slayt 15** → `catch glow toast perf. N` seti (AĞUSTOS-2026, x=33012/34528/36044): sol yarım model fotoğrafı + logo, sağ yarım başlık & yorum, dikişin üstünde ürün dekupesi. 10 konsept × 3 boyut.
- **Slayt 17** ("yandaki formatın aynısı sadece yazılar daha belirgin olursa müthiş olur") → **`{bloom|glow|sculpt} review - {isim}` seti**, aynı split format, yazılar büyütülmüş: başlık 54→64 (Demi Bold→**Bold**), yorum 40→44 Medium, altına `— İsim` atıf satırı. 15 konsept (5 Bloom, 5 Glow, 5 Sculpt — hepsi 50+/olgun cilt temalı yorumlar) × 3 boyut = 45 frame.
  - Konumlar: 1080x1920 → x=53000, 1080x1350 → x=54516, 1080x1080 → x=56032; satırlar y = sıra × 2254 (sıra: Bloom Sarah T. → Joanne W. → Helen R. → Claire M. → Nicola P., Glow Victoria S. → Amanda H. → Louise B. → Rachel C. → Michelle D., Sculpt Catherine L. → Emma K. → Samantha G. → Lisa F. → Jane N.).
  - Boyut bazlı tipografi: 1920 → 64/44/34, 1350 → 56/38/30, 1080 → 50/32/28 (başlık/yorum/atıf), metin kolonu 432px, sol pay 60px.
  - Ürün dekupesi x=506'da (dikişi 34px aşar), alt paydan 60px yukarıda biter; yükseklik sınırı 1920→620, 1350→470, 1080→350.
- Aynı sayfada x=48169–51549 arasında **daha eski, farklı formatta** (beyaz zemin + ürün + yıldızlı yorum) 15 adet `... review - isim 1080x1080` frame'i var — slayt 17'nin ilk denemesi. Silinmedi; slaytta istenen format yeni settir. Bu setteki isimsiz sculpt frame'i "Jane N." olarak tamamlandı.

**Sculpt frame'lerinin özel düzeni:** Sculpt yorumlarında sol panelde **TR dosyasındaki gerçek Catch Sculpt çekimleri** kullanılıyor (aşağıdaki "Dosyalar arası görsel taşıma"ya bak). Bu fotoğraflar beyaz/aydınlık olduğu için iki sapma var:
- **Logo beyaz değil koyu (#323232) ve sol ALT köşede** (y = frame yüksekliği − logo − 100) — üstte modelin yüzüne/saçına denk gelip okunmuyordu.
- **Ürün dekupesi sadece fotoğrafta ürün görünmüyorsa** konuyor. Fotoğrafta ürün varsa (elde tutulan / uygulama çekimi) dekupe kaldırılıp metin bloğu dikeyde ortalanıyor (`panel.primaryAxisAlignItems = 'CENTER'`). Şu an sadece Emma K. (dune kontur çizgileri, üründe yok) dekupe taşıyor.

**Dikkat — sağ panel auto-layout:** `catch glow toast` şablonundaki sağ panel **VERTICAL auto-layout** (paddingTop 183, itemSpacing 32). Metin düğümlerine `y` atamak İŞE YARAMAZ, sessizce yok sayılır — dikey konum `primaryAxisAlignItems` / padding / itemSpacing ile ayarlanır.

**Açık iş / dikkat:**
- Slayt 17 yorumları 50+/olgun cilt odaklı ama dosyadaki tüm model fotoğrafları genç modeller — ideali Higgsfield'de olgun ciltli model görselleri üretip sol paneldeki fotoğrafları değiştirmek.

## Dosyalar Arası Görsel Taşıma (TR → UK)

**`imageHash` iki dosya arasında doğrudan çalışıyor.** TR dosyasındaki bir görselin fill'indeki `imageHash`'i alıp UK dosyasında bir rect'in `fills`'ine yazmak yeterli — görsel sorunsuz render oluyor. Yeniden yükleme, export/import gerekmiyor.

- `download_assets` / `upload_assets` yolu bu ortamda **kullanılamıyor**: agent proxy `www.figma.com`'a CONNECT'i 403 ile kesiyor, dolayısıyla ne export indirilebiliyor ne de upload URL'ine byte POST'lanabiliyor. Hash kopyalama tek pratik yöntem.
- Bir görselin üst üste iki IMAGE fill'i olabiliyor (gizli orijinal + görünür rötuşlu) — **`visible: true` olan hash'i** al.

**Catch Sculpt gerçek çekim görselleri** — TR dosyası (`ej8JpbRaZU1qH7rdYxLvGP`), `ARALIK- cont` sayfası, "CATCH SCULPT / SHAPE YOUR GLOW" postları:

| Çekim | imageHash (görünür fill) | İçerik |
|---|---|---|
| INO_2025_04_25_01_1377 | `29f5c080fcc021d4585635a7045f64b74f05d5fa` | Model elinde iki stick, yüz yakın plan (SAND) |
| INO_2025_04_25_01_0680 | `745ea4c3b70131472156ca23352cb8ee9b13932c` | Model stick'i yanağına uyguluyor, kontur çizgileri (SAND) |
| INO_2025_04_25_03_1104 | `7400eb25aabb789614f3c2ab0b76c1e19e5f07af` | Kızıl saçlı model, dune kontur çizgileri (DUNE) |

## Üretim/Tasarım Kuralları (UK'ye özel, TR kurallarına ek)

- Set/dizilim görsellerinde ürün karışıklığını önlemek için **varsayılan olarak her üründen sadece 1 tane** kullan (1 Bloom + 1 Glow + 1 Sculpt) — kullanıcı özellikle "hepsini kullan" demediği sürece.
- Kullanıcının Figma'ya önceden yerleştirdiği referans ürün kırpmaları (TEMMUZ-2026 sayfasında negatif y koordinatlarında: dune, sand, daylily, hibiscus, peony, scarlet, pink quartz, ruby gold) **gerçek UK ambalaj görselleri ve doğru birbirine oranları** — yeni üretimlerde ürün kullanmadan önce bunları `download_assets` ile çekip referans al, TR Products klasöründeki eşdeğerlerini varsayılan olarak kullanma.
- Higgsfield promptlarında 3+ ürün birlikte referans verilince model tasarımı/etiketi sıkça bozuyor — üretim sonrası ürün etiketinin/logosunun gerçek tasarımla eşleştiğini kontrol et, uydurma/generic yazı çıkarsa yeniden dene.
