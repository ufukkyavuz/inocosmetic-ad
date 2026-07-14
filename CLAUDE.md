# INO Cosmetic — Proje Rehberi

## Görsel Üretim Kuralları

- **Model:** Her zaman `nano_banana_pro` kullanılacak — başka model yasak
- **Gerçekçilik:** Her görsel ultra-photorealistic olmalı — fotoğraftan ayırt edilemez kalite, hipergerçekçi cilt dokusu, doğal ışık, lens/cam/yüzey şeffaflıkları fizik kurallarına uygun; prompt'a her zaman şu eklenir: *"ultra photorealistic, hyperrealistic, indistinguishable from a real photograph, 8K detail"*
- **Çözünürlük:** Her zaman `2k` — `"resolution": "2k"` parametresi açıkça yazılacak
- **Mod:** `unlimited`
- **Referans zorunlu:** Referanssız görsel üretmek yasak — kullanıcının verdiği her görsel önce analiz edilecek, ardından o görsel referans alınarak üretim yapılacak
- **Analiz önce:** Kullanıcı görsel paylaşırsa şunlar detaylı analiz edilecek, onay alındıktan sonra üretime geçilecek:
  - **Kamera açısı:** Hangi açıdan çekilmiş, lens mesafesi, alan derinliği
  - **Model duruşu:** Vücut pozisyonu, yüz açısı, el/kol konumu, ifade
  - **Ürün duruşu/yerleşimi:** Üründe tutuş, açı, kadrajdaki konumu
  - **Hissiyat & mood:** Işık karakteri, renk tonu, atmosfer, duygu
  - Bu 4 unsur prompt'a birebir yansıtılacak — referans görsel sadece "ilham" değil, teknik şablon olarak kullanılacak
- **Ürün yazıları:** Üretilen görsellerde ürün üzerindeki tüm yazılar (ürün adı, içerik, SPF değeri vb.) hatasız ve tam okunur olmalı — bulanık, bozuk veya eksik metin kabul edilmez; prompt'a her zaman şu eklenir: *"all product text must be perfectly legible, sharp, and accurate — no blurry or distorted letters"*
- **Ürün tasarımı:** Ürün görseli referans fotoğrafla birebir eşleşmeli — etiket, renk, form, logo ve yazı düzeni referanstan sapmamalı; prompt'a her zaman şu eklenir: *"The product design must exactly match the reference image provided — same label layout, colors, typography, and logo"*
- **Referans önce incelenir:** Prompt yazmadan önce referans/element görseli mutlaka açılıp gerçek malzeme/renk/form doğrulanır — varsayımla ("muhtemelen cam tüptür" gibi) prompt yazmak yasak, bu yanlış üretime yol açar.

## Higgsfield Elements (Cinema Studio) — Referans Yönetimi

- Proje: `ufo` (Cinema Studio, projectId: `fd22466c-94aa-4687-a02c-e10d377038a8`)
- Her ürün/varyant için ayrı bir Element tanımlanır (`@urun-adi` şeklinde prompt içinde çağrılır), tek bir Element içine birden fazla farklı görsel karıştırılmaz — karışırsa üretim tutarsız/yanlış çıkar.
- Element oluştururken kısa açıklama (description) alanı, ürünün gerçek görünümünü (malzeme, renk gradyanı, logo/yazı yerleşimi) özetlemeli.
- Element'in prompt'ta doğru şekilde referans alındığını (thumbnail'in genereation panelinde göründüğünü) her seferinde görsel olarak doğrula.

## Higgsfield Üretim İş Akışı — ZORUNLU TARAYICI

- **Üretim her zaman tarayıcı üzerinden yapılır** (`claude-in-chrome` / Browser pane → higgsfield.ai, Cinema Studio). Doğrudan `generate_image` API çağrısı **yasak** — API kredi düşürür ve `unlimited` parametresini desteklemez, tarayıcı ise kuyruğa girer ve kredi harcamaz.
- **Unlimited toggle her fresh sayfa yüklemesinde sıfırlanır** — sessiz şekilde OFF olabilir. Her üretimden önce: toggle'a tıkla → yeşil/ON olduğunu zoom-screenshot ile doğrula → Generate butonunun "UNLIMITED" yazdığını doğrula. Bu adımı atlama.
- **Referans ekleme:** Composer'daki "+" butonu → Uploads/Elements/Image Generations/Liked sekmeleri → thumbnail'e tıkla → prompt içinde `@Image N` olarak eklenir. Alternatif: bir asset'in detay panelini aç → sağdaki "Reference" butonuna tıkla → aktif composer'a eklenir.
- **Referans çıkarma:** Composer şeridindeki küçük thumbnail'in üzerine gel → beliren "×" işaretine tıkla.
- **Yerel dosya yükleme:** Sadece bu oturuma chat üzerinden paylaşılmış dosyalar `file_upload` ile yüklenebilir — Drive/Products klasöründeki veya scratchpad'deki dosyalar (chat'e ek olarak paylaşılmamışsa) kabul edilmez. `media_upload`/`media_confirm` API'siyle yüklenen görseller de tarayıcının Uploads sekmesinde görünmez — bu yüzden yeni bir referans görseli tarayıcıya sokmanın güvenilir yolu yok; böyle durumlarda ürün/sahne detaylarını prompt'a metin olarak daha ayrıntılı yazmak gerekir.
- **İndirme → Figma pipeline:** Üretilen görsel için detay panelinde "Download" → `~/Downloads/hf_{timestamp}_{uuid}.png` olarak iner → `mv` ile proje scratchpad'ine taşı (Downloads klasörünü kirletmemek için) → gerekirse Figma'ya `upload_assets` ile çek.
- **Prompt dengesi:** Ne aşırı kısa ne aşırı ayrıntılı — sadece ürün sadakati + fiziksel bağlantı noktası + kadraj + oran gibi çekirdek kısıtları yaz. Referansı "bozma" demek çoğu zaman yeterli; gereksiz uzun geometri anlatımı eklemek gereksiz (kullanıcı geri bildirimi: "çok basit, referansı bozma diyip geçecen").
- **Çoklu Chrome bağlantısı hatası** ("Multiple Chrome browsers are connected") çıkarsa `list_connected_browsers` ile güncel deviceId'i al, `select_browser` ile seç — hata mesajındaki eski deviceId'e güvenme.

## Ürün Aksesuar Fiziği — Catch Balm Anahtarlık/Charm Sahneleri

Çanta/anahtarlık temalı Catch Balm sahnelerinde (ör. çanta sapına asılı tüp+ayna charm) ürünün gerçek fiziksel bağlantı noktası şu şekildedir — bu noktayı yanlış kurmak tekrar tekrar aynı hataya yol açtı:

- **Tüpün TEK gerçek metal halkası, kapağın TERSİ olan uç (nozul/tip) tarafında kalıba dökülü şekilde bulunur** — kaburgalı/yivli vidalı kapak tarafında DEĞİL. Referans: `Products/Catch Balm/bare.png`, `bare kanca.png`.
- Asılı halde: **halka + ayna charm kümesi YUKARIDA** (çanta sapına bağlı), **kaburgalı kapak ise serbestçe AŞAĞIDA sarkar**, hiçbir yere bağlı değildir. Tersi (kapaktan bağlamak) fiziksel olarak yanlıştır ve kullanıcı tarafından defalarca reddedildi.
- Halka SADECE bir tane olmalı — hem çantaya hem charm'a aynı halka bağlanır; kapağa ikinci bir halka/zincir eklenmesi hatalıdır ("ekstra hardware yok" diye özellikle belirt).
- Çanta sapının gövdeye bağlantı noktası **yuvarlak metal halka/perçin** olmalı (dikişle/deriyle doğrudan değil) — gerçek tasarımcı çanta donanımına benzemeli.
- "Ürünün renginde çanta" istenirse: çantanın deri rengi, öne çıkan varyantın kendi tüp rengiyle (ör. Bare için toz pembe/nude) eşleşmeli — kahverengi/siyah gibi jenerik tonlar kullanılmamalı.
- Metin alanı kuralı (Zone Dağılımı, üst ~%40-45 temiz) bu sahnelerde de geçerli — geniş açı, çanta sapı + boş arka plan üstte, ürün altta.

## Reklam Konsept Kütüphanesi

### Güneş Gözlüğü Yansıması (Broad Spectrum için onaylı)
- **İlham:** Skol beer ad — ürün kadrajda değil, güneş gözlüğü yansımasında saklı
- **Kompozisyon:** Extreme close-up yüz, mirror-lens gözlük, yansımada eller SPF tüpü tutuyor, backdrop açık gökyüzü
- **Ton:** Sıcak yaz, güneşli, bakımlı cilt, lüks — beyaz zemin kuralı bu konseptte geçerli değil
- **Renk:** Warm skin tones + mavi gökyüzü yansıması kontrast

## Reklam Görseli Yapısı

**Canvas:** 1080 × 1920px (9:16 dikey / Story formatı)

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

---

## Ürün Kataloğu

> Kaynak: [inobeauty.com.tr](https://inobeauty.com.tr) (canlı site) + INO Kozmetik resmi claims dosyaları (proje kök dizininde `*Claims.docx`). Aşağıdaki fonksiyon/içerik açıklamaları bu kaynaklardan alınmıştır.

### CATCH BLOOM (Lip & Cheek Stick, SPF 30+)
Makyaj ve cilt bakımını bir arada sunan çok amaçlı stick. Tek adımda renk + bakım + SPF 30+ koruma. Dudak ve yanaklara doğal renk, yoğun nem ve ışıltı kazandırır. Saf hidrolize deniz kolajeni içerir — cilt elastikiyetini artırır, ince çizgi görünümünü azaltmaya destek olur. Parmak veya fırçayla uygulanır, kat kat sürülerek yoğunlaştırılabilir.

| Ürün | Boy | Gramaj | Dosya |
|---|---|---|---|
| Scarlet | **Pocket** (küçük boy) | 4.5g | `scarlet.png`, `scarlet realistic.jpg` |
| Hibiscus | **Pocket** (küçük boy) | 4.5g | `hibiscus.png`, `hibiscus tone.PNG` |
| Peony | **Normal/Full** (büyük boy, Pocket de mevcut) | 8.77g (Full) | `peony.png` |
| Daylily | **Normal/Full** (büyük boy, Pocket de mevcut) | 8.77g (Full) | `daylily.png`, `daylily realistic.jpg` |

> Pocket vs Normal: Kompozisyonda Scarlet/Hibiscus daha kısa, Peony/Daylily daha uzun gösterilmeli.

Çiçek görselleri: `scarlet flower.png`, `hibiscus flower.png`, `daylily flower.png`, `peony flower.png`

---

### CATCH GLOW (Multi-Use Beauty Booster Illuminating Cream, SPF 15+)
Işıltı ve bakımı birleştiren çok amaçlı krem — nemlendirici, makyaj bazı ve highlighter olarak kullanılabilir. Saf hidrolize deniz kolajeni ile 48 saate kadar nemlendirme, cilt bariyeri desteği ve ince çizgi azaltımı sağlar. Yüz, boyun ve vücutta kullanılabilir. Her biri **ayrı ürün** — farklı tüp etiketi, farklı krem rengi, farklı ürün adı.

| Ürün | Etiket | İçerik/His | Dosya |
|---|---|---|---|
| **Catch Glow Ruby Gold** | "CATCH GLOW / RUBY GOLD / Multi-Use Beauty Booster / Illuminating Cream / SPF 15+" | Altın-bronz yansımalı sıcak ışıltı | `ruby gold.png`, `catch glow realistic.jpg` |
| **Catch Glow Pink Quartz** | "CATCH GLOW / PINK QUARTZ / Multi-Use Beauty Booster / Illuminating Cream / SPF 15+" | Pembe-gümüş yansımalı glow | `pink quartz.png` |

---

### CATCH SCULPT (Bronzer & Contour Stick)
Doğal bronzlaşma ve kontürü tek üründe sunan çok amaçlı stick. (Önceki isimlendirme "Contour & Bronzer" yanlıştı — sitedeki resmi isim **Catch Sculpt**.)

| Ürün | Tip | Dosya |
|---|---|---|
| Sand | Bronzer Stick | `sand.png` |
| Dune | Contour Stick | `dune.png`, `dune realistic.jpg` |

---

### BROAD SPECTRUM SUNSCREEN (SPF 50+, PA++++)
Geniş spektrum SPF 50+ / PA++++ koruma + cilt bakımını bir arada sunar, UVA ve UVB'ye karşı korur. Beyaz iz bırakmaz, hızla emilir, makyaj bazı olarak kullanılabilir. Deniz kolajeni, siyah yulaf ekstresi, frenk üzümü çekirdeği yağı ve biberiye ekstresi ile nemlendirir, yatıştırır, antioksidan korur. 01/02/03 varyantları ton eşitleyici pigment içerir.

| Ürün | Dosya |
|---|---|
| 00 Clear | `broad.png` + `Broad/` klasörü |
| 01 Light | `Broad/` klasörü |
| 02 Medium | `Broad/` klasörü |
| 03 Tan | *(görsel henüz eklenmedi)* |

---

### BEAUTY SHOT (içecek supplement) — Pure Marine Collagen
Hidrolize balık kolajeni içeren, portakal-lime aromalı içilebilir güzellik takviyesi. İçerik: Elastin, Hyaluronik Asit, Vitamin C, Vitamin E, Çinko, Biotin, Selenyum. "Twist, sip, glow."

| Ürün | Dosya |
|---|---|
| Pure Marine Collagen | `Collagen Shot Dekupe.png` |

---

### CATCH BALM — henüz lanse edilmemiş, yakında çıkacak ürün
Bare / Haze / Bubble / Ice adlı 4 varyantı var (metalik sıkma tüp, gümüşten renkli tona geçen gradyan, `Products/Catch Balm/` klasöründe referans görseller mevcut). **Sitede yayında değil, resmi claims/içerik bilgisi yok — üretim promptlarında fonksiyon/vaat metni uydurulmayacak, sadece kullanıcıdan gelen bilgi kullanılacak.**

---

### SETLER
> Kaynak: canlı site (`inobeauty.com.tr`). Setlerdeki ürün varyantları (renk/ton) müşteri tarafından seçilebilir — set açıklamasında ayrıca belirtilmez.

| Set Adı | İçerik | Dosya |
|---|---|---|
| Color & Glow Set | 1 Catch Bloom + 1 Catch Glow + INO makyaj çantası | `Color & Glow Set.png` |
| Color & Shield Set | 1 Catch Bloom + 1 Broad Spectrum + INO makyaj çantası | `Color & Shield Set.png` |
| Your Everyday Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + INO makyaj çantası | `Your Everyday Set.png` |
| Ultimate Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + 1 Catch Sculpt + INO makyaj çantası | `Ultimate Set.png` |
| Full Glam Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + 2 Catch Sculpt + INO makyaj çantası | `Full Glam Set.png` |
| All-in-one Set | 3 Catch Bloom Pocket + 2 Catch Glow + 1 Broad Spectrum + 2 Catch Sculpt + INO makyaj çantası | `All-in-one Set.png` |

> ~~Glow & Shield Set~~ — sitede bu isimde bir ürün yok, önceki liste hatalıydı, kaldırıldı.
> `bloom_sculpt_broad_glow.png`, `bloom_glow.png`, `bloom_sculpt_broad_glow_beautyshot.png` gibi dosyalar resmi/isimli bir set ürününe karşılık gelmiyor, sadece görsel dosya adları.

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
