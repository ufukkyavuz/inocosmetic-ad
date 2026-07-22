# INO Cosmetic — Proje Rehberi

## Görsel Üretim Kuralları

> **ÖNCE KURALLARI OKU:** Her üretimden ÖNCE bu kural listesi baştan gözden geçirilecek — özellikle **referans, marka paleti, ürün ölçeği ve kadraj** kuralları. Hiçbir görsel kuralları atlayarak üretilmez.

- **Model:** Her zaman `nano_banana_pro` kullanılacak — başka model yasak
- **Gerçekçilik:** Her görsel ultra-photorealistic olmalı — fotoğraftan ayırt edilemez kalite, hipergerçekçi cilt dokusu, doğal ışık, lens/cam/yüzey şeffaflıkları fizik kurallarına uygun; prompt'a her zaman şu eklenir: *"ultra photorealistic, hyperrealistic, indistinguishable from a real photograph, 8K detail"*
- **Stüdyo/render hissi yasak:** Beyaz zemin korunur ama görsel asla düz/steril bir 3D render veya vektör gibi durmamalı. Gerçek fotoğraf stüdyosunda çekilmiş izlenimi şart: ürünün altında yumuşak gerçekçi temas gölgesi olmalı — ürün "havada asılı" gibi gölgesiz durmamalı; hafif alan derinliği (makro lens hissi, kenarlarda hafif bokeh); gerçek fotoğraf grenine/dokusuna yakın yüzey — aşırı pürüzsüz, plastik/render parlaklığından kaçınılmalı; ışık tamamen düz/beyaz değil, hafif yönlü (key + fill softbox) ve ~5000K sıcaklığında olmalı. Prompt'a her zaman şu eklenir: *"shot on a real camera with a macro lens at f/4, soft directional studio lighting (key + fill softbox, ~5000K), a visible soft contact shadow beneath the product, subtle depth of field, realistic photographic grain — not a 3D render, not CGI, not a flat vector illustration, not an overexposed flat-white studio look"*
- **Çözünürlük:** Her zaman `2k` — `"resolution": "2k"` parametresi açıkça yazılacak
- **Mod:** `unlimited`
- **Referans zorunlu:** Referanssız görsel üretmek yasak — kullanıcının verdiği her görsel önce analiz edilecek, ardından o görsel **gerçek media/`media_id` olarak** üretime referans verilecek (sadece sözle tarif etmek YETMEZ). Chat'e eklenen yerel görseller `media_upload_widget` ile Higgsfield'a alınıp referans geçilecek; ürün için `broad.png` vb. raw URL → `media_import_url` ile alınır
- **Analiz önce:** Kullanıcı görsel paylaşırsa şunlar detaylı analiz edilecek, onay alındıktan sonra üretime geçilecek:
  - **Kamera açısı:** Hangi açıdan çekilmiş, lens mesafesi, alan derinliği
  - **Model duruşu:** Vücut pozisyonu, yüz açısı, el/kol konumu, ifade
  - **Ürün duruşu/yerleşimi:** Üründe tutuş, açı, kadrajdaki konumu
  - **Hissiyat & mood:** Işık karakteri, renk tonu, atmosfer, duygu
  - Bu 4 unsur prompt'a birebir yansıtılacak — referans görsel sadece "ilham" değil, teknik şablon olarak kullanılacak
- **Ürün yazıları:** Üretilen görsellerde ürün üzerindeki tüm yazılar (ürün adı, içerik, SPF değeri vb.) hatasız ve tam okunur olmalı — bulanık, bozuk veya eksik metin kabul edilmez; prompt'a her zaman şu eklenir: *"all product text must be perfectly legible, sharp, and accurate — no blurry or distorted letters"*
- **Ürün tasarımı:** Ürün görseli referans fotoğrafla birebir eşleşmeli — etiket, renk, form, logo ve yazı düzeni referanstan sapmamalı; prompt'a her zaman şu eklenir: *"The product design must exactly match the reference image provided — same label layout, colors, typography, and logo"*
- **Referans önce incelenir:** Prompt yazmadan önce referans/element görseli mutlaka açılıp gerçek malzeme/renk/form doğrulanır — varsayımla prompt yazmak yasak, bu yanlış üretime yol açar.
- **Ürün ölçeği:** Ürünler gerçek dünya oranında gösterilir. Broad Spectrum tüpünün boyu, **yüzle kıyaslandığında çeneden kaşa kadar** (~12cm / 50ml) olmalı — ne minik ne dev. Diğer ürünler bu tüpe göre orantılı ölçeklenir (katalogdaki gerçek boyutlar; Pocket allık kısa, Normal allık uzun vb.). **Devasa/oversized ürün ölçeği hiçbir zaman kullanılmaz.**
- **Marka paleti (siyah-beyaz):** Görsel **renkli foto** olur (doğal ten, doğal ortam) — ama **kırmızı/canlı renk kullanılmaz**; tekstil/prop/kıyafet siyah-beyaz tutulur (havlu beyaz + siyah çizgi, bikini siyah ipli/beyaz panel vb.). Fotoğraf **komple grayscale YAPILMAZ**, renkli kalır. Renk yalnızca özellikle istenirse kullanılır
- **Kadraj / modesty:** Fazla vücut/açıklık gösterilmez — sıkı, modest kadraj tercih edilir (baş-omuz gibi); dekolte/çıplaklık vurgusu yok

## Prompt Yapısı — Zorunlu 9 Maddelik Format

Her Higgsfield Composer prompt'u aşağıdaki 9 maddeyi bu sırayla içermeli (tek akan paragraf halinde yazılır, madde numaraları prompt içine yazılmaz — sadece planlama/dokümantasyon aşamasında bu başlıklarla ayrılır). Hiçbir madde atlanmaz:

1. **Genel format / estetik tanımı** — örn. "luxury, minimal, high-contrast Instagram Story ad product photography"
2. **Ana özne** — ürün/set/çanta/model; Element tag'iyle (`@urun-adi`) çağrılır, tasarım referanstan sapmaz
3. **Aksiyon/poz/yerleşim** — ürün/model nasıl duruyor, nasıl tutuluyor/yerleştiriliyor
4. **Ortam/zemin/arka plan** — varsayılan: beyaz radial gradyan (#ffffff merkez → #f5f5f5 kenar); onaylı istisna yoksa değiştirilmez
5. **Kadraj/kompozisyon** — 1080×1920 (9:16), üst %40 logo/yazı için boş, alt %60 ürün full-bleed
6. **Kamera** — açı, lens (örn. makro lens, f/4), alan derinliği
7. **Işık** — yönlü stüdyo ışığı (key + fill softbox), ~5000K sıcaklık
8. **Stil/kalite** — zorunlu ifadeler birebir eklenir: *"ultra photorealistic, hyperrealistic, indistinguishable from a real photograph, 8K detail"* + *"all product text must be perfectly legible, sharp, and accurate — no blurry or distorted letters"* + *"The product design must exactly match the reference image provided — same label layout, colors, typography, and logo"* + *"shot on a real camera with a macro lens at f/4, soft directional studio lighting (key + fill softbox, ~5000K), a visible soft contact shadow beneath the product, subtle depth of field, realistic photographic grain — not a 3D render, not CGI, not a flat vector illustration"*
9. **Negatifler** — *"not a 3D render, not CGI, not a flat vector illustration, not an overexposed flat-white studio look"*; ürün gölgesiz/havada asılı durmamalı; referans dışı ekstra aksesuar eklenmez

> **Prompt dengesi:** Ne aşırı kısa ne aşırı ayrıntılı — sadece ürün sadakati + fiziksel bağlantı noktası + kadraj + oran gibi çekirdek kısıtları yaz. Madde başına 1 cümleyi geçmemeye çalışılır.

## Higgsfield Elements (Cinema Studio) — Referans Yönetimi

- Proje: `ufo` (Cinema Studio, projectId: `fd22466c-94aa-4687-a02c-e10d377038a8`)
- Her ürün/varyant için ayrı bir Element tanımlanır (`@urun-adi` şeklinde prompt içinde çağrılır), tek bir Element içine birden fazla farklı görsel karıştırılmaz.
- **Element isimleri ürün kataloğundaki resmi set adlarından TAHMİN EDİLMEZ** — Cinema Studio panelindeki gerçek `@tag` her zaman doğrudan kontrol edilir. Resmi set adı ("Color & Glow Set") ile Element tag'i birebir örtüşmeyebilir.

### Doğrulanmış Element Envanteri (`show_reference_elements` API, 2026-07-16 — tam liste)

| Tag | Tip | İçerik |
|---|---|---|
| `@all-in-one-set` | Prop | All-in-one Set |
| `@ultimate-set` | Prop | Ultimate Set |
| `@color-glow-set` | Prop | Color & Glow Set |
| `@color-shield-set` | Prop | Color & Shield Set |
| `@full-glam-set` | Prop | Full Glam Set |
| `@your-everyday-set` | Prop | Your Everyday Set |
| `@bloom_glow` | Prop | Bloom + Glow kombinasyonu |
| `@bloom-sculpt-broad-glow` | Prop | Bloom+Sculpt+Broad+Glow |
| `@bloom-sculpt-broad-glow-beautyshot` | Prop | Bloom+Sculpt+Broad+Glow+Beauty Shot |
| `@glow-and-shield` | Prop | **Kullanılmaz** — sitede resmi ürün değil |
| `@hibiscus`, `@daylily`, `@peony`, `@scarlet` | Prop | Catch Bloom tekil tüpler |
| `@ruby-gold`, `@pink-quartz` | Prop | Catch Glow tekil tüpler |
| `@sand`, `@dune` | Prop | Catch Sculpt tekil stickler |
| `@bare`, `@haze`, `@bubble`, `@ice` | Prop | Catch Balm tekil tüpler |
| `@broad-spectrum-sunscreen` | Prop | Broad Spectrum tekil tüp |
| `@beauty-shot` | Prop | Beauty Shot (Pure Marine Collagen) |
| `@canvas-çanta` | Prop | INO logolu kanvas/bez çanta |
| `@termal-çanta` | Prop | Termal/soğutucu çanta |
| `@ayna` | Prop | Catch Balm anahtarlık ayna charm |
| `@all-products` | Prop | Tüm ürünler oran referansı |
| `@scarlet-flower` | Character | Scarlet çiçek görseli |

> Element doğrulama her zaman `show_reference_elements` API'siyle yapılır — resmi set adından tag türetmek veya ekran görüntüsünden "bu Element yok" sonucu çıkarmak yasak.

## Kampanya/Konsept Fikirlendirmede Gerçek Fotoğraf Referansı Zorunlu

Sadece ürün tasarımı referansı yetmez — bir konsept icat edilmeden önce (kamera açısı, ışık, kompozisyon, doku için) gerçek bir fotoğraf/stok görsel bulunup **indirilip gözle incelenmeli** (metin arama sonucu yetmez, görselin kendisi açılmalı). Analiz "Analiz önce" bölümündeki 4 unsuru kapsamalı. Konsept bu incelemeden SONRA yapılır — önce sahne icat edip sonra referans aranmaz. INO'nun sabit marka kuralları referanstan bağımsız korunur — referanstan sadece fotoğrafik gerçekçilik alınır, marka renk/zemin kuralları değil.

## Higgsfield Üretim İş Akışı — ZORUNLU TARAYICI

- **Üretim her zaman tarayıcı üzerinden yapılır** (`claude-in-chrome` / Browser pane → higgsfield.ai, Cinema Studio). Doğrudan `generate_image` API çağrısı **yasak** — API kredi düşürür ve `unlimited` parametresini desteklemez, tarayıcı ise kuyruğa girer ve kredi harcamaz.
- **Unlimited toggle her fresh sayfa yüklemesinde sıfırlanır** — sessiz şekilde OFF olabilir. Her üretimden önce: toggle'a tıkla → yeşil/ON olduğunu zoom-screenshot ile doğrula → Generate butonunun "UNLIMITED" yazdığını doğrula. Bu adımı atlama.
- **Referans ekleme:** Composer'daki "+" butonu → Uploads/Elements/Image Generations/Liked sekmeleri → thumbnail'e tıkla → prompt içinde `@Image N` olarak eklenir. Alternatif: asset detay paneli → sağdaki "Reference" butonu → aktif composer'a eklenir.
- **Referans çıkarma:** Composer şeridindeki küçük thumbnail'in üzerine gel → beliren "×" işaretine tıkla.
- **Yerel dosya yükleme:** Sadece bu oturuma chat üzerinden paylaşılmış dosyalar `file_upload` ile yüklenebilir — Drive/Products klasöründeki dosyalar (chat'e ek olarak paylaşılmamışsa) kabul edilmez.
- **İndirme → Figma pipeline:** Detay panelinde "Download" → `~/Downloads/hf_{timestamp}_{uuid}.png` → `mv` ile proje scratchpad'ine taşı → gerekirse Figma'ya `upload_assets` ile çek.
- **Çoklu Chrome bağlantısı hatası** çıkarsa `list_connected_browsers` ile güncel deviceId'i al, `select_browser` ile seç.

## Teknik Pipeline (Drive → GitHub raw URL)

Drive'dan ürün görseli yüklemek için (API yöntemi, browser mümkün değilse):
1. `mcp__Google_Drive__download_file_content` ile base64 indir → `/tmp/` dosyaya decode et
2. Görseli repo'ya push et → GitHub raw URL üret commit SHA ile:
   `https://raw.githubusercontent.com/ufukkyavuz/inocosmetic-ad/<commit-sha>/<dosya.png>`
   (`git rev-parse origin/<branch>` ile alınır; branch'li URL 404 verir çünkü branch adında `/` var)
3. `mcp__Higgsfield__media_import_url` ile o URL'den import et → `media_id` al
4. Bir önceki üretimin çıktısı tekrar referans gerekiyorsa `generate_image` içinde o işin **job_id**'si geçilebilir (yeniden upload gerekmez)

## Ürün Aksesuar Fiziği — Catch Balm Anahtarlık/Charm Sahneleri

Çanta/anahtarlık temalı Catch Balm sahnelerinde ürünün gerçek fiziksel bağlantı noktası:

- **Tüpün TEK gerçek metal halkası, kapağın TERSİ olan uç (nozul/tip) tarafındadır** — kaburgalı/yivli vidalı kapak tarafında DEĞİL. Referans: `Products/Catch Balm/bare.png`, `bare kanca.png`.
- Asılı halde: **halka + ayna charm kümesi YUKARIDA** (çanta sapına bağlı), **kaburgalı kapak AŞAĞIDA serbestçe sarkar** — kapaktan bağlamak fiziksel olarak yanlıştır.
- Halka SADECE bir tane olmalı — hem çantaya hem charm'a aynı halka bağlanır; kapağa ikinci halka/zincir eklenmesi hatalıdır.
- Çanta sapının gövdeye bağlantı noktası **yuvarlak metal halka/perçin** olmalı.
- "Ürünün renginde çanta" istenirse: çantanın deri rengi öne çıkan varyantın kendi tüp rengiyle eşleşmeli.
- Metin alanı kuralı (üst ~%40-45 temiz) bu sahnelerde de geçerli.

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
- Görsellerde **zemin ve arka plan her zaman beyaz** olmalı — ama bu beyaz, **düz dijital/render beyazı değil, gerçek fotoğraf stüdyosu backdrop kağıdı gibi** olmalı: hafif radial gradyan (#ffffff merkez → #f5f5f5 kenar) + ürünün altında yumuşak gerçekçi gölge + minimal doku/ışık kırılımı görünür olmalı
- Kum, taş, kumaş, ahşap gibi materyaller kullanılacaksa bunların **beyaz/nötr tonu** seçilmeli
- Genel estetik: **lüks, temiz, akılda kalıcı** — minimal ve yüksek kontrast, ama steril değil
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

> Kaynak: [inobeauty.com.tr](https://inobeauty.com.tr) (canlı site) + INO Kozmetik resmi claims dosyaları (proje kök dizininde `*Claims.docx`).

### CATCH BLOOM (Lip & Cheek Stick, SPF 30+)
Makyaj ve cilt bakımını bir arada sunan çok amaçlı stick. Tek adımda renk + bakım + SPF 30+ koruma. Dudak ve yanaklara doğal renk, yoğun nem ve ışıltı kazandırır. Saf hidrolize deniz kolajeni içerir. Parmak veya fırçayla uygulanır, kat kat sürülerek yoğunlaştırılabilir.

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
Işıltı ve bakımı birleştiren çok amaçlı krem — nemlendirici, makyaj bazı ve highlighter olarak kullanılabilir. Saf hidrolize deniz kolajeni ile 48 saate kadar nemlendirme sağlar. Yüz, boyun ve vücutta kullanılabilir. Her biri **ayrı ürün** — farklı tüp etiketi, farklı krem rengi, farklı ürün adı.

| Ürün | Etiket | İçerik/His | Dosya |
|---|---|---|---|
| **Catch Glow Ruby Gold** | "CATCH GLOW / RUBY GOLD / Multi-Use Beauty Booster / Illuminating Cream / SPF 15+" | Altın-bronz yansımalı sıcak ışıltı | `ruby gold.png`, `catch glow realistic.jpg` |
| **Catch Glow Pink Quartz** | "CATCH GLOW / PINK QUARTZ / Multi-Use Beauty Booster / Illuminating Cream / SPF 15+" | Pembe-gümüş yansımalı glow | `pink quartz.png` |

---

### CATCH SCULPT (Bronzer & Contour Stick)
Doğal bronzlaşma ve kontürü tek üründe sunan çok amaçlı stick.
> ⚠️ Önceki isimlendirme "Contour & Bronzer" yanlıştı — sitedeki resmi isim **Catch Sculpt**.

| Ürün | Tip | Dosya |
|---|---|---|
| Sand | Bronzer Stick | `sand.png` |
| Dune | Contour Stick | `dune.png`, `dune realistic.jpg` |

---

### BROAD SPECTRUM SUNSCREEN (SPF 50+, PA++++)
Geniş spektrum SPF 50+ / PA++++ koruma + cilt bakımı. Beyaz iz bırakmaz, hızla emilir, makyaj bazı olarak kullanılabilir. Deniz kolajeni, siyah yulaf ekstresi, frenk üzümü çekirdeği yağı ve biberiye ekstresi içerir. 01/02/03 varyantları ton eşitleyici pigment içerir.

| Ürün | Dosya |
|---|---|
| 00 Clear | `broad.png` + `Broad/` klasörü |
| 01 Light | `Broad/` klasörü |
| 02 Medium | `Broad/` klasörü |
| 03 Tan | *(görsel henüz eklenmedi)* |

---

### CATCH BALM — henüz lanse edilmemiş, yakında çıkacak ürün
Metalik sıkma tüp, gümüşten renkli tona geçen gradyan, `Products/Catch Balm/` klasöründe referans görseller mevcut. **Sitede yayında değil — üretim promptlarında fonksiyon/vaat metni uydurulmayacak, sadece kullanıcıdan gelen bilgi kullanılacak.**

| Varyant | Tag |
|---|---|
| Bare | `@bare` |
| Haze | `@haze` |
| Bubble | `@bubble` |
| Ice | `@ice` |

---

### BEAUTY SHOT (içecek supplement) — Pure Marine Collagen
Hidrolize balık kolajeni içeren, portakal-lime aromalı içilebilir güzellik takviyesi. İçerik: Elastin, Hyaluronik Asit, Vitamin C, Vitamin E, Çinko, Biotin, Selenyum. "Twist, sip, glow."

| Ürün | Dosya |
|---|---|
| Pure Marine Collagen | `Collagen Shot Dekupe.png` |

---

### SETLER
> Kaynak: canlı site (`inobeauty.com.tr`). Setlerdeki ürün varyantları (renk/ton) müşteri tarafından seçilebilir.

| Set Adı | İçerik | Dosya |
|---|---|---|
| Color & Glow Set | 1 Catch Bloom + 1 Catch Glow + INO makyaj çantası | `Color & Glow Set.png` |
| Color & Shield Set | 1 Catch Bloom + 1 Broad Spectrum + INO makyaj çantası | `Color & Shield Set.png` |
| Your Everyday Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + INO makyaj çantası | `Your Everyday Set.png` |
| Ultimate Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + 1 Catch Sculpt + INO makyaj çantası | `Ultimate Set.png` |
| Full Glam Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + 2 Catch Sculpt + INO makyaj çantası | `Full Glam Set.png` |
| All-in-one Set | 3 Catch Bloom Pocket + 2 Catch Glow + 1 Broad Spectrum + 2 Catch Sculpt + INO makyaj çantası | `All-in-one Set.png` |

> ~~Glow & Shield Set~~ — sitede bu isimde resmi ürün yok, listeden kaldırıldı.
> `bloom_sculpt_broad_glow.png`, `bloom_glow.png`, `bloom_sculpt_broad_glow_beautyshot.png` dosyaları resmi isimli bir sete karşılık gelmiyor, sadece görsel dosya adları.

---

### Diğer Varlıklar
| Dosya | Açıklama |
|---|---|
| `kese.png` | Siyah çanta/kese |
| `canvas çanta.png` | Bez canvas poşet — beyaz kanvas kumaş, üzerinde büyük siyah INO logosu baskılı, çıtçıt/snap button kapaklı; **zarf/clutch tipi düz yapı** — içi dolunca dahi şişmez, yüzeyde düz yatar, hacimli veya yapısal değil. Prompt'ta: *"flat envelope-style canvas pouch lying flat on the surface, white canvas with large black INO logo print and snap button closure — no volume, no puffing, not a structured bag"* |
| `all products.png` | Tüm ürünler oran referansı |
| `termal_canta.png` | Termal yaz çantası (set hediyesi) — doğal ten rengi kaba dokulu jüt/çuval kumaş, üst kenarda siyah fermuar, ön yüzün sağ alt köşesinde küçük siyah INO logosu baskılı; **düz dikdörtgen poşet yapısı** — yapısal değil, düz durur. Prompt'ta: *"flat rectangular jute burlap zipper pouch, natural tan coarse-woven jute texture, black zipper along top edge, small black INO logo on bottom right corner — no volume, no puffing, stands or lies flat"* |

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

Termal Yaz Çantası Hediye Klasörü (1Q9uc3DYJY2Pu-YJZzriZe2h0v7H1eAFP)
— Termal çanta referans görselleri + tamamlanmış set görselleri
```

## Figma Dosyası
- URL: https://www.figma.com/design/ej8JpbRaZU1qH7rdYxLvGP/INO--Visuals
- Referans node (lab ürün): 5764:3668
- Referans node (summer sale): 5677:9490
