# INO Cosmetic — Proje Rehberi

## Görsel Üretim Kuralları

> **ÖNCE KURALLARI OKU:** Her `generate_image` çağrısından ÖNCE bu kural listesi baştan gözden geçirilecek — özellikle **referans, marka paleti, ürün ölçeği ve kadraj** kuralları. Hiçbir görsel kuralları atlayarak üretilmez.

- **Model:** Her zaman `nano_banana_pro` kullanılacak — başka model yasak
- **Gerçekçilik:** Her görsel ultra-photorealistic olmalı — fotoğraftan ayırt edilemez kalite, hipergerçekçi cilt dokusu, doğal ışık, lens/cam/yüzey şeffaflıkları fizik kurallarına uygun; prompt'a her zaman şu eklenir: *"ultra photorealistic, hyperrealistic, indistinguishable from a real photograph, 8K detail"*
- **Çözünürlük:** Her zaman `2k` — `"resolution": "2k"` parametresi açıkça yazılacak
- **Mod:** `unlimited`
- **Referans zorunlu:** Referanssız görsel üretmek yasak — kullanıcının verdiği her görsel önce analiz edilecek, ardından o görsel **gerçek media/`media_id` olarak** üretime referans verilecek (sadece sözle tarif etmek YETMEZ). Chat'e eklenen yerel görseller `media_upload_widget` ile Higgsfield'a alınıp `generate_image`'a referans geçilecek; ürün için `broad.png` vb. raw URL → `media_import_url` ile alınır
- **Analiz önce:** Kullanıcı görsel paylaşırsa şunlar detaylı analiz edilecek, onay alındıktan sonra üretime geçilecek:
  - **Kamera açısı:** Hangi açıdan çekilmiş, lens mesafesi, alan derinliği
  - **Model duruşu:** Vücut pozisyonu, yüz açısı, el/kol konumu, ifade
  - **Ürün duruşu/yerleşimi:** Üründe tutuş, açı, kadrajdaki konumu
  - **Hissiyat & mood:** Işık karakteri, renk tonu, atmosfer, duygu
  - Bu 4 unsur prompt'a birebir yansıtılacak — referans görsel sadece "ilham" değil, teknik şablon olarak kullanılacak
- **Ürün yazıları:** Üretilen görsellerde ürün üzerindeki tüm yazılar (ürün adı, içerik, SPF değeri vb.) hatasız ve tam okunur olmalı — bulanık, bozuk veya eksik metin kabul edilmez; prompt'a her zaman şu eklenir: *"all product text must be perfectly legible, sharp, and accurate — no blurry or distorted letters"*
- **Ürün tasarımı:** Ürün görseli referans fotoğrafla birebir eşleşmeli — etiket, renk, form, logo ve yazı düzeni referanstan sapmamalı; prompt'a her zaman şu eklenir: *"The product design must exactly match the reference image provided — same label layout, colors, typography, and logo"*
- **Ürün ölçeği:** Ürünler gerçek dünya oranında gösterilir. Broad Spectrum tüpünün boyu, **yüzle kıyaslandığında çeneden kaşa kadar** (~12cm / 50ml) olmalı — ne minik ne dev. Diğer ürünler bu tüpe göre orantılı ölçeklenir (katalogdaki gerçek boyutlar; Pocket allık kısa, Normal allık uzun vb.)
- **Marka paleti (siyah-beyaz):** Görsel **renkli foto** olur (doğal ten, doğal ortam) — ama **kırmızı/canlı renk kullanılmaz**; tekstil/prop/kıyafet siyah-beyaz tutulur (havlu beyaz + siyah çizgi, bikini siyah ipli/beyaz panel vb.). Fotoğraf **komple grayscale YAPILMAZ**, renkli kalır. Renk yalnızca özellikle istenirse kullanılır
- **Kadraj / modesty:** Fazla vücut/açıklık gösterilmez — sıkı, modest kadraj tercih edilir (baş-omuz gibi); dekolte/çıplaklık vurgusu yok

## Teknik Pipeline (Drive → Higgsfield)

Drive'dan ürün görseli yüklemek için:
1. `mcp__Google_Drive__download_file_content` ile base64 indir → `/tmp/` dosyaya decode et
2. `mcp__Higgsfield__media_upload` ile presigned URL al
3. Görseli repo'ya push et → GitHub raw URL üret:
   `https://raw.githubusercontent.com/ufukkyavuz/inocosmetic-ad/claude/youthful-shannon-jop96g/<dosya.png>`
4. `mcp__Higgsfield__media_import_url` ile o URL'den import et → `media_id` al
5. `generate_image` çağrısında `media_id` kullan

> Not: Bash ortamında `upload.higgsfield.ai` doğrudan erişilemiyor; GitHub raw URL yöntemi kullanılacak.
> **Önemli:** Branch adında `/` (slash) olduğu için branch'li raw URL 404 verir → raw URL'de **tam commit SHA** kullanılacak:
> `https://raw.githubusercontent.com/ufukkyavuz/inocosmetic-ad/<commit-sha>/<dosya.png>` (`git rev-parse origin/<branch>` ile alınır).
> Bir önceki üretimin çıktısı tekrar referans gerekiyorsa `generate_image` içinde `media` değeri olarak o işin **job_id**'si de geçilebilir (yeniden upload gerekmez).

## Reklam Konsept Kütüphanesi

### Güneş Gözlüğü Yansıması (Broad Spectrum için onaylı)
- **İlham:** Skol beer ad — ürün kadrajda değil, güneş gözlüğü yansımasında saklı
- **Kompozisyon:** Extreme close-up yüz, hafif eğik (dutch-angle), kafa geriye atılmış **kahkaha/gülüş** (dişler görünür), gözlük camı yansımasında el SPF tüpü tutuyor
- **Gözlük (onaylı tip):** Slim **dikdörtgen rimless** (çerçevesiz) — ince altın metal köprü + köşe vidaları, **tortoise/leopar saplar**, **mavi degrade cam**; cam yansıması gerçekçi optik (kavisli cam distorsiyonu, doğru yansıtıcılık), yansımadaki ürün yazısı düz/okunur (mirror-flip yok)
- **Model & cilt:** Çilsiz, pürüzsüz ama **hiper-gerçekçi cilt** (gözenek, ince tüy, doğal nem, gülerken ince çizgi); modaya uygun, bakımlı
- **Arka plan (onaylı):** **Gökyüzü** — mavi yaz göğü + yumuşak bulut; üst üçte bir **bol boşluk** bırakılır (logo + metin için). Bu konseptte beyaz zemin kuralı geçerli değil
- **Ton:** Sıcak yaz, güneşli, lüks — Warm skin tones + mavi gök kontrastı
- **Metin:** Gökyüzü zemininde logo + yazılar **beyaz (#ffffff)**

### Poolside Sunbathing (Broad Spectrum için, lansman)
- **İlham:** Alleyoop poolside ad — havuz kenarında güneşlenen model, ürün havluda
- **Kompozisyon:** Tepeden (high-angle) **sıkı baş-omuz** kadrajı — model çizgili havluda uzanmış, gözler kapalı, dingin gülüş, bir kol başının üstünde; Broad Spectrum tüpü havluda yüzün yanında
- **Modesty:** Fazla vücut gösterilmez — sadece yüz, saç, omuz, havlu (torso/dekolte yok)
- **Palet:** Renkli foto (bronz ten + yeşil-mavi havuz) ama **siyah-beyaz tekstil** — havlu beyaz + ince siyah çizgi, **siyah ipli/biyeli beyaz bikini**; kırmızı yok, grayscale değil
- **Ürün ölçeği:** Tüp boyu = çene-kaş mesafesi
- **Boşluk:** Üst (havuz suyu/havlu) metin+logo için boş bırakılır

## Reklam Görseli Yapısı

**Canvas:** 1080 × 1920px (9:16 dikey / Story) — ayrıca **1080 × 1080px (1:1 kare)** varyantı çıkarılır
> Kare için görsel **kırpılmaz**: mevcut görsel referans verilip `nano_banana_pro` (1:1, 2k, unlimited) ile **sağa-sola genişletilir** (outpaint), öyle yerleştirilir.

### Zone Dağılımı
- **Üst %40 (0–768px):** Logo + yazı alanı — ürün fotoğrafı GİRMEZ, temiz tutulur
- **Alt %60 (768–1920px):** Ürün fotoğrafı (full-bleed, canvas'tan taşabilir)

### Logo
- Konum: center-x, top ~228px
- Boyut: 225px × 90px (SVG vektör)
- Her görselde sabittir

### Metin Sistemi
- **1. satır:** Sola yaslı, küçük, Avenir Next Medium
- **2. satır:** Sağa yaslı, büyük, Avenir Next Heavy Italic veya Bold Italic
- Okuma yönü: Sol-üst → Sağ-orta → Sol-alt (Z-pattern)
- Font size hiyerarşisi: Ana mesaj büyük (70–80px+), destekleyici küçük (35–47px)
- Letter-spacing: Geniş (2.9px – 19px arası)
- Yazı rengi: Koyu görsellerde #ffffff, açık görsellerde #323232

### Sabit Tasarım Kuralları
- Arka plan: Radial gradient — merkez #ffffff → kenar #f5f5f5
- Font ailesi: Avenir Next (Medium, Bold Italic, Heavy Italic)
- Tüm öğeler yatayda center veya asimetrik (sol/sağ) hizalı
- Badge/rozet varsa: Sağ kenara, fotoğrafın üst köşesine, hafif döndürülmüş (+15°)

### Zemin / Arka Plan Kuralı (aksi belirtilmedikçe)
- Görsellerde **zemin ve arka plan her zaman beyaz** olmalı
- Kum, taş, kumaş, ahşap gibi materyaller kullanılacaksa bunların **beyaz/nötr tonu** seçilmeli
- Genel estetik: **lüks, temiz, akılda kalıcı** — minimal ve yüksek kontrast
- Renkli veya koyu zemin yalnızca özellikle istendiğinde kullanılır

### Figma'ya Yerleştirme (`INO Visuals` dosyası)
- **Görsel ayrı katman:** Üretilen görsel frame'e **gömülmez** (frame fill yapılmaz) — frame içinde **ayrı bir rectangle katmanına** image-fill olarak konur; serbestçe taşınıp ölçeklenebilir
- **Adlandırma:** `konu_model varsa model_ürün/set adı` formatı (ör. `gunesgozlugu_broadspectrum`); frame'lere boyut son eki: `_1080x1920`, `_1080x1080`
- **Logo:** Dosyadaki mevcut INO logosu (vector node `5677:9493`, 225×90) klonlanır — açık zeminde #323232, koyu/gökyüzü zemininde #ffffff
- **Font:** Marka fontu **Avenir Next** (Medium / Heavy Italic). Plugin runtime'ı Avenir Next'i yükleyemezse en yakın eş **Inter** (Medium / Black Italic) ile kurulur, sonra elde Avenir Next'e çevrilir
- **Görsel yükleme:** `upload_assets` ile hedef katmanın `nodeId`'sine FILL olarak basılır; katman adını korumak için **raw bytes** (multipart değil) POST edilir
- Figma host'u (`www.figma.com`) curl allowlist'inde değil → screenshot doğrulaması `get_screenshot` + `enableBase64Response:true` ile yapılır

---

## Ürün Kataloğu

### CATCH BLOOM (allık / ruj çubuğu)
| Ürün | Boy | Gramaj | Dosya |
|---|---|---|---|
| Scarlet | **Pocket** (küçük boy) | 4.5g | `scarlet.png`, `scarlet realistic.jpg` |
| Hibiscus | **Pocket** (küçük boy) | 4.5g | `hibiscus.png`, `hibiscus tone.PNG` |
| Peony | **Normal** (büyük boy) | 8.77g | `peony.png` |
| Daylily | **Normal** (büyük boy) | 8.77g | `daylily.png`, `daylily realistic.jpg` |

> Pocket vs Normal: Kompozisyonda Scarlet/Hibiscus daha kısa, Peony/Daylily daha uzun gösterilmeli.

Çiçek görselleri: `scarlet flower.png`, `hibiscus flower.png`, `daylily flower.png`, `peony flower.png`

---

### CATCH GLOW (aydınlatıcı nemlendirici krem)
Her biri **ayrı ürün** — farklı tüp etiketi, farklı krem rengi, farklı ürün adı.

| Ürün | Etiket | Dosya |
|---|---|---|
| **Catch Glow Ruby Gold** | "CATCH GLOW / RUBY GOLD / Multi-Use Beauty Booster / Illuminating Cream / SPF 15+" | `ruby gold.png`, `catch glow realistic.jpg` |
| **Catch Glow Pink Quartz** | "CATCH GLOW / PINK QUARTZ / Multi-Use Beauty Booster / Illuminating Cream / SPF 15+" | `pink quartz.png` |

---

### CONTOUR & BRONZER (stick)
| Ürün | Dosya |
|---|---|
| Dune | `dune.png`, `dune realistic.jpg` |
| Sand | `sand.png` |

---

### BROAD SPECTRUM SUNSCREEN (SPF 50+)
Tüp formu aynı kategoride, ton numaraları farklı.

| Ürün | Dosya |
|---|---|
| 00 Clean | `broad.png` + `Broad/` klasörü |
| 01 Light | `Broad/` klasörü |
| 02 Medium | `Broad/` klasörü |

---

### BEAUTY SHOT (içecek supplement)
| Ürün | Dosya |
|---|---|
| Pure Marine Collagen | `Collagen Shot Dekupe.png` |

---

### SETLER
| Set Adı | Dosya |
|---|---|
| Full Glam Set | `Full Glam Set.png` |
| Ultimate Set | `Ultimate Set.png` |
| All-in-one Set | `All-in-one Set.png` |
| Glow & Shield Set | `Glow & Shield Set.png` |
| Color & Glow Set | `Color & Glow Set.png` |
| Color & Shield Set | `Color & Shield Set.png` |
| Your Everyday Set | `Your Everyday Set.png` |
| Bloom + Sculpt + Broad + Glow | `bloom_sculpt_broad_glow.png` |
| Bloom + Glow | `bloom_glow.png` |
| Bloom + Sculpt + Broad + Glow + Beauty Shot | `bloom_sculpt_broad_glow_beautyshot.png` |

---

### Diğer Varlıklar
| Dosya | Açıklama |
|---|---|
| `kese.png` | Siyah çanta/kese |
| `canvas çanta.png` | Bez çanta |
| `all products.png` | Tüm ürünler oran referansı |

---

## Google Drive Klasör Yapısı

```
Ana Klasör (16e9UkJRf7KCiGw0Vs7QcACjeKv2qKNZY)
├── 01 SOSYAL MEDYA
│   ├── 2026/
│   │   ├── 06 HAZİRAN → FEED 2
│   │   ├── 04 NİSAN
│   │   ├── 03 MART
│   │   ├── 02 ŞUBAT
│   │   └── 01 OCAK
│   └── INO SIK SORULAN SORULAR (doc)
├── 02 PRODUCTION
│   ├── ÜRÜN ÇEKİMİ
│   ├── INO BEAUTY-AI
│   ├── Beymen & TY Görsel Seçkisi
│   ├── OUTDOOR TEKNE ÇEKİMİ
│   ├── STÜDYO NİSAN ÇEKİMİ
│   └── Lifestyle-iphone
├── 07 DİJİTAL ÜRÜN KATALOĞU
└── 08 DİJİTAL İŞLER
    ├── REKLAM
    ├── MAILING TASARIMLARI
    └── reels

Products Klasörü (1k8UEup-_bzVWusNpCAsfipHUqf2x7Byz)
— Tüm ürün PNG/JPG görselleri burada
```

## Figma Dosyası
- URL: https://www.figma.com/design/ej8JpbRaZU1qH7rdYxLvGP/INO--Visuals
- Referans node (lab ürün): 5764:3668
- Referans node (summer sale): 5677:9490
