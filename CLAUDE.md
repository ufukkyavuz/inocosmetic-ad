# INO Cosmetic — Proje Rehberi

## Görsel Üretim Kuralları

- **Model:** Her zaman `nano_banana_pro` kullanılacak — başka model yasak
- **Gerçekçilik:** Her görsel ultra-photorealistic olmalı — fotoğraftan ayırt edilemez kalite, hipergerçekçi cilt dokusu, doğal ışık, lens/cam/yüzey şeffaflıkları fizik kurallarına uygun; prompt'a her zaman şu eklenir: *"ultra photorealistic, hyperrealistic, indistinguishable from a real photograph, 8K detail"*
- **Çözünürlük:** Her zaman `2k` — `"resolution": "2k"` parametresi açıkça yazılacak
- **Mod:** `unlimited`
- **Otonom konsept üretimi (2026-09-27 kararı — eski "referans zorunlu" kuralının yerine geçer):** Kullanıcı artık her seferinde Pinterest linki veya örnek görsel vermek istemiyor — "e önce üzümlerin vsnin ne alakası var" ve "bu işi otomatikleştirmemiz lazım... yaratıcılık kısmında da... araştırma yapıp farklı farklı konseptlerde ama asla premium algıyı bozmadan görseller yapabilmelisin" dedi. Tam akış ve kontrol listesi **[PERFORMANCE-CREATIVE-WORKFLOW.md](PERFORMANCE-CREATIVE-WORKFLOW.md)** dosyasında — her üretim isteğinde önce o dosya okunur. Kullanıcı kendisi bir görsel/link paylaşırsa aşağıdaki analiz adımı yine uygulanır; paylaşmazsa asistan kendi araştırmasından ve bu projedeki kurallardan konsept üretir, "referans yok" diye durmaz.
- **Analiz önce (kullanıcı bir görsel/referans paylaştığında):** şunlar detaylı analiz edilecek, onay alındıktan sonra üretime geçilecek:
  - **Kamera açısı:** Hangi açıdan çekilmiş, lens mesafesi, alan derinliği
  - **Model duruşu:** Vücut pozisyonu, yüz açısı, el/kol konumu, ifade
  - **Ürün duruşu/yerleşimi:** Üründe tutuş, açı, kadrajdaki konumu
  - **Hissiyat & mood:** Işık karakteri, renk tonu, atmosfer, duygu
  - Bu 4 unsur prompt'a birebir yansıtılacak — referans görsel sadece "ilham" değil, teknik şablon olarak kullanılacak
- **Ürün yazıları:** Üretilen görsellerde ürün üzerindeki tüm yazılar (ürün adı, içerik, SPF değeri vb.) hatasız ve tam okunur olmalı — bulanık, bozuk veya eksik metin kabul edilmez; prompt'a her zaman şu eklenir: *"all product text must be perfectly legible, sharp, and accurate — no blurry or distorted letters"*
- **Ürün tasarımı:** Ürün görseli referans fotoğrafla birebir eşleşmeli — etiket, renk, form, logo ve yazı düzeni referanstan sapmamalı. Bu cümle **yalnızca `@element` YOKKEN** (sadece görsel referans varken) eklenir: *"The product design must exactly match the reference image provided — same label layout, colors, typography, and logo"*
- **`@element` kullanıldığında ürünü ASLA tarif etme (ZORUNLU):** Prompt'ta bir `@element` mention'ı varken ürünün paketini / etiketini / yazılarını / renklerini / kapağını / formunu / varyant adlarını / SPF-içerik metnini **tek tek yazma**. Tarif ettikçe model referanstan sapıp farklı bir ürün, bozuk yazı ya da yanlış kapak üretiyor (bu defalarca yaşandı — kullanıcı geri bildirimi: "ürünü anlatınca farklı ürün gibi çıkıyo"). Bir `@element` varken ürün hakkında yazılabilecek TEK şeyler:
  1. *"match the @element reference exactly — do not redraw, recolour or restyle the product, its cap, label, text or logo"*
  2. *"all label text stays crisp, legible and accurate, true to the element"*
  3. Gerekiyorsa sadece **boyut/ölçek** (cm + oran + "kararsızsan küçük") ve **sahnedeki konum/duruş/tutuş** — bunlar ürün tarifi sayılmaz.
  Renk paletinde (`Dominant colours`) ürünün rengini tek tek sayma; "plus the product's own colours from the element" demek yeterli.
- **Referans önce incelenir:** Prompt yazmadan önce referans/element görseli mutlaka açılıp gerçek malzeme/renk/form doğrulanır — varsayımla ("muhtemelen cam tüptür" gibi) prompt yazmak yasak, bu yanlış üretime yol açar.
- **Telif — referanstaki model birebir kopyalanmaz (ZORUNLU, her üretimde geçerli):** Referans görseldeki **kompozisyon, kamera açısı, poz, ışık, renk grade'i birebir korunur**; ama **modelin kimliği/yüzü birebir üretilmez**. Prompt'a her zaman şu eklenir: *"Do NOT reproduce the face or identity of the person in the reference image — this must be a clearly different individual. Keep the pose, framing, lighting and styling identical, but give her a distinctly different face: different facial structure, different nose and jawline shape, different eye shape and color, different lip shape, different hairline and hair texture. She must not be recognizable as the same person as in the reference."* Etnik köken/kıyafet gibi ek değişiklik istenirse bunlar ayrıca yazılır — **varsayılan olarak model siyahi veya Asyalı olmayacak.** Bu, referans görseldeki modelin kendisi siyahi veya Asyalı olsa bile geçerli: o durumda da kimlik zaten değiştiği için, çıktıdaki yeni model bu iki etnik kökenin dışında (nötr/Kafkas/Akdenizli editoryal görünüm) üretilir. Siyahi veya Asyalı bir model özellikle isteniyorsa bu ayrıca ve açıkça belirtilmeli.
- **Varsayılan ürün seçimi — her sahnede 5 ürün ailesinden biri:** Aksi özellikle belirtilmedikçe (tek ürün istenen bir sahne dışında), her yeni konsept sahnesinde INO'nun 5 ana ürün ailesinin (Catch Bloom, Catch Balm, Catch Glow, Broad Spectrum Sunscreen, Catch Sculpt) her birinden bir tane bulunacak şekilde kurulur — sadece 2-3 ürünle sınırlı kalıp diğerlerini sessizce düşürme (bu daha önce sık tekrarlanan bir hataydı).
- **Etnik köken belirtmemek yetmiyor — açıkça yaz:** "young adult woman" gibi etnik köken belirtmeden bırakmak modelin (nano_banana_pro) yine de Asyalı/farklı bir etnik kökene kayması ile sonuçlanabiliyor (muhtemelen ürün Element referanslarındaki fotoğraflardan sızma). Bu yüzden her promptta modelin etnik kökenini **açıkça "Caucasian" yazarak** belirt, "etnik köken belirtmemeyi" varsayılan güvenli seçenek sanma.

## Higgsfield Elements (Cinema Studio) — Referans Yönetimi

- Proje: `ufo` (Cinema Studio, projectId: `fd22466c-94aa-4687-a02c-e10d377038a8`)
- Her ürün/varyant için ayrı bir Element tanımlanır (`@urun-adi` şeklinde prompt içinde çağrılır), tek bir Element içine birden fazla farklı görsel karıştırılmaz — karışırsa üretim tutarsız/yanlış çıkar.
- Element oluştururken kısa açıklama (description) alanı, ürünün gerçek görünümünü (malzeme, renk gradyanı, logo/yazı yerleşimi) özetlemeli.
- Element'in prompt'ta doğru şekilde referans alındığını (thumbnail'in genereation panelinde göründüğünü) her seferinde görsel olarak doğrula.

## Higgsfield Üretim İş Akışı — ZORUNLU TARAYICI

- **Üretim her zaman tarayıcı üzerinden yapılır** (`claude-in-chrome` / Browser pane → higgsfield.ai, Cinema Studio). Doğrudan `generate_image` API çağrısı **yasak** — API kredi düşürür ve `unlimited` parametresini desteklemez, tarayıcı ise kuyruğa girer ve kredi harcamaz.
- **Referans ekleme — sadece prompt metnine `@elementadı` yaz.** Composer'da "+"/"@" butonuyla tek tek arayıp thumbnail'e tıklayıp "Use" ile ekleme akışı **kullanılmayacak** — bu yavaş ve gereksiz, kullanıcı defalarca bunu durdurdu. Higgsfield, prompt içine yazılan `@bare`, `@peony` gibi mention'ları kendi kendine tanıyıp bağlıyor. Prompt'u yazarken tüm ürün referanslarını `@` ile doğrudan metne göm, composer'a yapıştır, bitir.
  - İstisna: bir mention'ın isim çakışması yüzünden (ör. `@scarlet` / `@scarlet-flower`) yanlış/referanssız çıktı verdiği somut olarak gözlemlenirse, sadece o tekil ürün için manuel seçime dönülebilir — bunu bütün ürünler için varsayılan yönteme çevirme.
- **Hız kuralları — bunlar zorunlu, atlanmaz:**
  - Gereksiz ekran görüntüsü alma — prompt'u yazdıktan/yapıştırdıktan sonra tekrar analiz etme, "doğru mu" diye kontrol etme.
  - Akış sadece şu: prompt alanına tıkla → hazırlanmış prompt'u yapıştır → Generate'e bas.
  - Model, oran, çözünürlük veya diğer composer ayarlarını değiştirme (zaten nano_banana_pro / 2K / Unlimited olarak ayarlı kalmalı).
  - Generate'e bastıktan sonra sonucu bekleme, kontrol etme, ekran görüntüsü alıp analiz etme — üretilen görseli değerlendirme.
  - Generate'e bastıktan hemen sonra görevi tamamlanmış say.
  - Bir adım gerçekten başarısız olmadıkça (ör. prompt yanlış yere yazıldıysa) hiçbir adımı tekrarlama.
- **Yerel dosya yükleme:** Sadece bu oturuma chat üzerinden paylaşılmış dosyalar `file_upload` ile yüklenebilir — Drive/Products klasöründeki veya scratchpad'deki dosyalar (chat'e ek olarak paylaşılmamışsa) kabul edilmez. `media_upload`/`media_confirm` API'siyle yüklenen görseller de tarayıcının Uploads sekmesinde görünmez — bu yüzden yeni bir referans görseli tarayıcıya sokmanın güvenilir yolu yok; böyle durumlarda ürün/sahne detaylarını prompt'a metin olarak daha ayrıntılı yazmak gerekir.
- **İndirme → Figma pipeline:** Üretilen görsel için detay panelinde "Download" → `~/Downloads/hf_{timestamp}_{uuid}.png` olarak iner → `mv` ile proje scratchpad'ine taşı (Downloads klasörünü kirletmemek için) → gerekirse Figma'ya `upload_assets` ile çek.
- **Prompt dengesi:** Ne aşırı kısa ne aşırı ayrıntılı — sadece ürün sadakati + fiziksel bağlantı noktası + kadraj + oran gibi çekirdek kısıtları yaz. Referansı "bozma" demek çoğu zaman yeterli; gereksiz uzun geometri anlatımı eklemek gereksiz (kullanıcı geri bildirimi: "çok basit, referansı bozma diyip geçecen").
- **Görsel referans + element birlikte kullanılırken ürünü uzun uzun tarif etme:** Bir referans fotoğraf zaten ekliyken (composer'a görsel eklenmişken) ürünün paketini/logosunu/yazısını satırlarca tarif etmek modelin kafasını karıştırıyor — "@element referansına birebir uy" demek yeterli, ambalaj detaylarını tek tek yazma. Uzun ürün tarifi, prompt'un asıl değiştirilmesi istenen kısmının (ör. modelin kimliği/etnik köken) gücünü de sulandırıyor.
- **Model değişikliği "neredeyse aynı" çıkarsa daha güçlü yaz:** Sadece "Latina görünümlü" gibi tek sıfat eklemek yetersiz kalabilir, referanstaki kişiye çok yakın çıkabilir. Yüz farkını somut ve çoklu özellikle belirt (cilt tonu, yüz hatları, saç dokusu/rengi gibi birden fazla nokta) ve bunu prompt'un başlarına, kısa/net şekilde yaz — uzun ürün tarifinin arasına gömme.
- **"Fuller/rounder face" ifadesi modeli şişman/tombul çiziyor:** Yüzü referanstan farklılaştırmak için "rounder fuller face shape" gibi ifadeler kullanma — model bunu kilolu/tombul olarak yorumluyor. Bunun yerine "beautiful, slim, attractive editorial model" gibi çekicilik/incelik vurgusu ekle, yüz farkını "high cheekbones", saç dokusu/rengi, cilt tonu gibi kiloyla ilgisi olmayan özelliklerle ver.
- **Çoklu Chrome bağlantısı hatası** ("Multiple Chrome browsers are connected") çıkarsa `list_connected_browsers` ile güncel deviceId'i al, `select_browser` ile seç — hata mesajındaki eski deviceId'e güvenme. Aynı Higgsfield hesabı/proje ("ufo") her bağlı tarayıcıda görünmeyebilir — proje listede yoksa diğer bağlı tarayıcıyı dene.

## Ürün Aksesuar Fiziği — Catch Balm (dik durma + charm)

**Dik durma fiziği:** Catch Balm tüpü bir yüzeyin (masa, raf, zemin) üstünde **kendi başına dik/dikey DURAMAZ** — nozul/kapak ucu bu ağırlığı taşıyacak formda değil. Yüzey üstü sahnelerde tüp **daima yan yatar**; ancak bir yere **yaslanırsa / saplanırsa / elde tutulursa** dik olabilir. "Elde asla dik tutulmaz" diye bir kural YOK. Yasak olan tek şey: desteksiz bir yüzeyde dikine durması.

> **Promptta zorunlu:** bu kuralı "element zaten öyle" diye atlama — kompozit set elementlerinde bile (ör. `@your-everyday-essentials`) taşınmıyor, model tüpü dikine kaldırıyor. Her promptta hem pozitif hem negatif yaz: *"@haze lies flat, never upright"* + negatifte *"no upright @haze"*. Sebebini (kapak formu vs.) **yazma** — o, ürün tarifi sayılır ve ürünü bozar.

**Charm/halka:** Zorunlu değil, yasak da değil — sahneye göre karar verilir. Çanta/anahtarlık sahnesi olmasa bile, uygun düştüğünde tüpün nozul ucundaki halkaya küçük bir ayna charm eklenebilir. Sadece **set/dizilim (birden çok ürün yan yana) görsellerinde** eklenmez, orada tüp sade kalır. `@haze`/`@bare` referansındaki charm'ı otomatik her sahneye taşıma — bilinçli seç.

Çanta/anahtarlık temalı Catch Balm sahnelerinde (ör. çanta sapına asılı tüp+ayna charm) ürünün gerçek fiziksel bağlantı noktası şu şekildedir — bu noktayı yanlış kurmak tekrar tekrar aynı hataya yol açtı:

- **Tüpün TEK gerçek metal halkası, kapağın TERSİ olan uç (nozul/tip) tarafında kalıba dökülü şekilde bulunur** — kaburgalı/yivli vidalı kapak tarafında DEĞİL. Referans: `Products/Catch Balm/bare.png`, `bare kanca.png`.
- Asılı halde: **halka + ayna charm kümesi YUKARIDA** (çanta sapına bağlı), **kaburgalı kapak ise serbestçe AŞAĞIDA sarkar**, hiçbir yere bağlı değildir. Tersi (kapaktan bağlamak) fiziksel olarak yanlıştır ve kullanıcı tarafından defalarca reddedildi.
- Halka SADECE bir tane olmalı — hem çantaya hem charm'a aynı halka bağlanır; kapağa ikinci bir halka/zincir eklenmesi hatalıdır ("ekstra hardware yok" diye özellikle belirt).
- Çanta sapının gövdeye bağlantı noktası **yuvarlak metal halka/perçin** olmalı (dikişle/deriyle doğrudan değil) — gerçek tasarımcı çanta donanımına benzemeli.
- "Ürünün renginde çanta" istenirse: çantanın deri rengi, öne çıkan varyantın kendi tüp rengiyle (ör. Bare için toz pembe/nude) eşleşmeli — kahverengi/siyah gibi jenerik tonlar kullanılmamalı.
- Metin alanı kuralı (Zone Dağılımı, üst ~%40-45 temiz) bu sahnelerde de geçerli — geniş açı, çanta sapı + boş arka plan üstte, ürün altta.

## Prompt Yazım Disiplini — tekrar tekrar düşülen 5 tuzak (2026-09-23)

**1. Ürün tarifi hep ÖLÇÜ ve FİZİK cümlelerinin içine gizleniyor.** Ana paragrafta "ürünü tarif etme" kuralına uyup, sonra ölçü satırında "the two white **tubes**", "the Pocket-size **stick**", "the canvas **pouch**", "the metallic **tube**" yazmak = kuralı çiğnemek. Ürün bozuk çıkmasının bire bir sebebi bu. Yasaklı olanlar orada da geçerli:
- tarif eden **isimler**: tube, stick, pouch, bottle, jar
- **malzeme/renk**: canvas, metallic, white, silver, glass, matte
- **parça adları**: cap, nozzle, lid, applicator, flap
- bir duruşun **sebebini açıklamak**: "it can't stand because its cap end can't carry the weight"

Doğrusu — ölçü sadece element adı + rakam, fizik sadece duruş:
> `@broad-spectrum-sunscreen is 12cm tall. @cosmos is only 4cm tall - about one third the height of @broad-spectrum-sunscreen.`
> `@haze lies flat, never upright.`
> Negatifte de aynı: "no upright @haze" — "no standing balm tube balanced on its cap" DEĞİL.

**2. Ürünleri bilerek bulanıklaştırma.** "Ürün öne çıkmasın" istendiğinde ürünü odak dışına atmak yanlış — kullanıcı bulanık ürün istemiyor. Doğru çözüm: ürün **küçük, kenarda, alçakta ve ortalanmamış** olsun ama **net** kalsın. Prompt'a: *"every product is completely sharp and fully in focus with clearly readable labels... never blurred, never soft, never out of focus. Use enough depth of field to hold both the person and the products sharp; only the far background falls soft."* Diyaframı f/2 değil **f/8** yaz. Negatif: *no blurred products, no soft or out-of-focus products, no bokeh over the products, no unreadable labels*.

**3. Kompozit set elementi yerine içindekileri tek tek etiketle.** `@your-everyday-essentials` gibi birleşik element yerine `@canvas-canta` + `@broad-spectrum-sunscreen` + `@ruby-gold` + `@cosmos` + `@haze` yazmak belirgin şekilde daha iyi sonuç veriyor (kullanıcı onayladı). Dizilim koreografisini de uzun uzun yazma — "each appearing exactly once" + "match every element exactly" + `@haze` yatık kuralı yeterli.

**4. Lifestyle = premium, dağınık değil.** "Reklam gibi durmasın, hayatın içinden olsun" istendiğinde candid/dağınık tarafa kaçmak yanlış — buruşuk çarşaf, kırışık mendil, dar karanlık oda "fukara evi" gibi duruyor. Doğrusu: **ferah, aydınlık, tertemiz lüks daire** (honed beyaz taş, açık meşe, ince keten, tavana kadar pencere, geniş boşluk), bakımlı model, düzenli yerleşim — sadece ürünler kadrajın kahramanı olmasın. Negatif: *no clutter, no mess, no worn or shabby interior, no cramped dark room, no cheap fittings, no visible cables*.

**5. Palet: sarı/turuncu yok.** Sıcak ton isteniyorsa bile **beyaza çok yakın krem/ivory/bone/greige**'de kal. Negatif: *no orange, no yellow, no gold, no amber, no rust, no terracotta, no warm colour cast*. Sonbahar gibi temalarda mevsim hissi **formda ve dokuda** verilir (kuru/ağartılmış yaprak, örgü, bukle, kağıt-kesim), renkte değil.

**Ayrıca — insan olan her promptta kendi model elementlerimiz kullanılır:** `@sadie @lena @romy @juliette @noa @roni @hailey @yuna @mira @cho`. Jenerik model tarif etme. Model satırı kısa: *"The model is @lena - true to the element, do not restyle her face."* Varsayılan nötr/Kafkas görünüm için `@cho` (Doğu Asyalı) ve `@mira` (Filipinli) özellikle istenmedikçe seçilmez.

**Prompt metni saf ASCII olmalı.** Panoya kopyalanan metindeki Türkçe/aksanlı karakterler (ç, ı, é) yapıştırma sırasında bozuluyor ("açık" → "a√ßƒ±k", "bouclé" → "boucl√©"). Prompt yazarken aksanları sadeleştir; `-açık` gibi element adlarını yapıştıramıyorsan o kelimeyi silip `@bare-a` yazıp açılan listeden seç.

## Prompt uzunluğu — KISA ŞABLON (A/B testiyle doğrulandı, 2026-09-28)

Aynı 5 elementli set karesi: ~2000 karakterlik uzun prompt 3 denemede de ürünleri uydurma markalarla yeniden çizdi ("IMAGE", "iNO", "INQ"); ~800 karakterlik kısa prompt ilk denemede tüm ürünleri doğru verdi. Uzun prompt + negatif listeleri + yabancı nesne kıyasları (ruj, chapstick, el kremi, highlighter) element bağını koparıyor. Kural:
- Prompt **~700-1100 karakter**. Her element en fazla 2 kez geçer (yerleşim + boyut).
- Ürün cümlesi tek: *"each exactly as its element shows it - same form, colours and printed words."*
- Boyut sadece **cm + sahnedeki diğer element/çanta/el oranı**. Ruj, chapstick, kalem gibi başka nesne adı YAZMA.
- Uzun "Negative:" listesi YOK. Sadece zorunlu balm kuralı: *"@haze lies flat, never upright"*.
- Kadraj/kopya alanı ve konsept/mekân cümlesi kısa ama net kalır (çok kısa prompt'ta ürün büyüyüp kadrajdan taşıyor).
- Açık sorun: Bloom metinle hâlâ büyük çıkıyor (12cm tüpün %33'ü yerine %70'e kadar). Çözülene kadar Bloom'u 12cm tüplerin hemen yanına dikine koymaktan kaçın ya da QA'da ölç, gerekirse post'ta küçült.

## Higgsfield Composer — sessiz hata (ÇOK ÖNEMLİ)

**Generate'e bastıktan sonra composer kapanıyor.** Kapalıyken yapılan `cmd+a → delete → cmd+v` **sessizce boşa düşüyor**, eski metin kutuda kalıyor ve bir sonraki Generate **aynı eski prompt'u tekrar gönderiyor**. Bu yüzden "düzelttim" denen promptlar Higgsfield'a hiç ulaşmadan saatlerce aynı hatalı görseller üretildi.

Zorunlu akış — her prompt için:
1. Composer kapalıysa önce alttaki şeride tıklayıp **aç**.
2. Metin alanına tıkla → `cmd+a` → `Delete` → kısa bekle → `cmd+v`.
3. **Yapıştığını gözle doğrula**: metin alanının ilk satırını oku, yeni prompt'un ilk cümlesi göründü mü? Görünmediyse Generate'e BASMA, 1-2'yi tekrarla.
4. `Unlimited` anahtarının **yeşil/açık** olduğunu doğrula — sayfa yenilenince veya bir süre sonra kendiliğinden kapanıyor, kapalıyken kredi harcıyor.
5. Generate'e bas, "Queued / Generation started" göründüğünü doğrula.

Unlimited modda aynı anda **tek üretim** işleniyor, gerisi kuyruğa giriyor — bu normal.

## Canvas Çanta (`@canvas-canta`) — element adı ve şekil fiziği

- **Element mention'ı `@canvas-canta` yazılır, `@canvas-çanta` DEĞİL** — Elements panelinde görünen ad cedilla'lı ("canvas-çanta") olsa da, gerçek bağlanabilir mention slug'ı ASCII'dir (`ç` harfi mention parser'ında kopuyor, chip resolve olmuyor). Herhangi bir element adında Türkçe özel karakter (ç, ğ, ı, ö, ş, ü) görürsen aynı ihtimali düşün, Elements panelinden ara/doğrula.
- **Gerçek boyutu yaklaşık 26 cm genişlik × 15 cm yükseklik** (kullanıcı, 2026-09-28; bkz. Ürün Boyutları tablosu) — hem top-view hem normal açıda küçük çıkma eğiliminde, somut cm + diğer ürünlere oranla mutlaka yaz.
- **İnce, düz, mektup gibi bir zarf** — kalınlığı 1-2 cm'yi geçmez. Çanta hafif çapraz (15-20°) çevrildiğinde kameraya dönen ince yan kesit de aynı ince kalınlıkta düz bir şerit kalmalı; **açı yüzünden şişkin/dolgun bir gusset'e dönüşmemeli**. Bu, kullanıcının defalarca reddettiği bir hata ("kenarları bozuyorsun") — prompt'a şunu ekle: *"the bag is very thin overall, like a flat slab or a tablet sleeve, no more than 1-2cm deep front to back; when turned, the narrow side edge stays a thin, flat, straight strip the same thin depth as the rest of the bag - it does not thicken, bulge, puff out or round off into a gusset just because it is seen at an angle."* Negatif: *"no thick or bulging side edge, no gusset, no puffy or rounded bag, no flared or wide-bottomed bag"*.
- Kapağa (flap) hiçbir şey eklenmesin — sadece yan kenarlar/kalınlık düzeltilir, kapak referanstaki gibi kalır.

## Website İndirim Görselleri (Tekli Ürün %20 / Set %35)

Figma dosyasında "İndirimli Fiyatlar" sayfası (`node-id=6162-3853`) altında, her ürün/set için **iki ayrı tasarım** üretilir — birbirine karıştırılmaz:
1. **Sade (fiyatsız):** "`[ÜRÜN ADI]` / `%X İNDİRİMLİ`" — sadece logo + ürün adı + indirim yüzdesi, fiyat rakamı yok.
2. **Çizikli Fiyat:** "`[ÜRÜN ADI]` / `%X İNDİRİM FIRSATI`" + altında iki sütun: sol "ESKİ FİYAT" (üstü çizili), sağ "İNDİRİMLİ FİYAT" (kalın). Yeni fiyat = eski fiyat × (1 − X/100).

Kural: **tekli ürünler %20, setler %35** indirim kategorisinde. Her ikisi de aynı temel şablonu (arka plan fotoğraf + üstte logo + PATENTLİ TEKNOLOJİ rozeti + varsa ingredient promo-badge'ler) kullanır, tek fark başlık metni ve fiyat satırının var/yok olması. Var olan bir `%30 eski-yeni fiyat` frame'i klonlayıp metni değiştirmek (fotoğraf ve yerleşim aynı kalır) en hızlı yol — dosyada zaten birçok ürün için böyle bir "%30" şablon frame'i var, sıfırdan kurmaya gerek yok.

**Güncel fiyatlar (inobeauty.com.tr, 2026-09-28 — eski → indirimli):** tekli ürünler %20, setler %35.
- Catch Bloom Pocket (tüm 5 renk) 1190 → 952₺ · Catch Bloom Full (Daylily, Peony) 1890 → 1512₺
- Lip Treatment Balm (Bare/Haze/Bubble/Ice) 1130 → 904₺
- Catch Glow (Pink Quartz, Ruby Gold) 2090 → 1672₺
- Broad Spectrum SPF 50+ (00/01/02/03) 2390 → 1912₺
- Catch Sculpt (Sand, Dune) 2190 → 1752₺
- Beauty Shot (14 × 40ml) 2990 → 2093₺ (%30)
- INO Iconic Bag 1390₺ (4200₺ üstü alışverişte hediye) · INO Mirror Charm 399₺ (stokta yok, "çok yakında")
- Set fiyatları için aşağıdaki SETLER tablosu. Fiyat eksikse siteye bak, kullanıcıya sorma.

**Figma font kısıtı:** Gerçek "Avenir Next" fontu plugin API (use_figma) ortamında yüklenemiyor ("font ailesi yok" hatası) — sadece ücretsiz metrik-uyumlu klonu **"Avenir Next W1G"** yükleniyor. Metin düzenlerken bu fontu kullan (kullanıcı onayladı), stil adları aynı ("Heavy", "Heavy Italic", "Bold", "Medium") ama "Demi Bold" yerine sadece "Demi" var.

**Kamera/ışık şablonu (bag+ürün(ler) website packshot'ları için, bu oturumda kilitlendi):** Bkz. yukarıdaki Canvas Çanta + genel boyut kuralları. Kamera 20-25° hafif üst açı (ne göz hizası ne top-down), 135mm lens f/8 (perspektif distorsiyonu yok), zemin+arkaplan tek düz #ffffff (gradyan/yatay çizgi yok, sadece yumuşak temas gölgesi), tek büyük softbox ön-soldan ~45°, "Portra-like" film greni.

## Reklam Konsept Kütüphanesi

### Güneş Gözlüğü Yansıması (Broad Spectrum için onaylı)
- **İlham:** Skol beer ad — ürün kadrajda değil, güneş gözlüğü yansımasında saklı
- **Kompozisyon:** Extreme close-up yüz, mirror-lens gözlük, yansımada eller SPF tüpü tutuyor, backdrop açık gökyüzü
- **Ton:** Sıcak yaz, güneşli, bakımlı cilt, lüks — beyaz zemin kuralı bu konseptte geçerli değil
- **Renk:** Warm skin tones + mavi gökyüzü yansıması kontrast

### Catch Bloom Cosmos — model yüz/duruş serisi (Eylül 2026)
Ürün henüz elde yok; şimdilik **model karakter elementleri** ile yüz/duruş/makyaj serisi üretiliyor. Her prompt'ta zorunlu etiketler: `@model` + `@cosmos-yanak` (yanak rengi/duruşu) + `@cosmos-dudak` (dudak rengi/finiş). Ürün görünüyorsa `@cosmos` (Pocket boy, 4 cm). Makyajı **tarif etme**, "match the @cosmos-yanak / @cosmos-dudak element exactly" de. Yanak: elmacık kemiğine değil **apple of the cheek**'e, yuvarlak-kontrollü, kenarsız solan; kulağa/şakağa/göz altına/buruna taşma yok. Detay: [[project-catch-bloom-cosmos]].

**15-şotluk şablon (model başına), hepsi dikey 9:16 / 2K / Nano Banana Pro / Unlimited, beyaz-açık gri seamless, üstte kopya boşluğu, gardırop: beyaz crop top + gerekiyorsa siyah pantolon + mürdüm topuklu:**
1. Pozlu yakın çekim, ürünle — `@cosmos` ucu yanağın elmasında, oyuncu yan bakış.
2. Pozlu yakın, ürünsüz — editoryal ¾ dönüş, omuz üstünden lense bakış, çene yukarı, boyun uzun, bir el karşı omuzda (eski "çeneyi ele yaslama" pozu KULLANMA).
3. Worm's-eye alçak açı, ürünle — enerjik mid-movement (gülerek kafa sallama, omuz düşük, kol savruk).
4. Kuşbakışı — kamera tam kafanın üstünde, kız **ayakta** kafasını tamamen geriye atıp yukarı lense bakıyor (yatma yok).
5. Tam karşıdan, simetrik, ürünsüz.
6. Rembrandt yan ışık, 85mm f/1.8 sığ alan derinliği, ürün çenede (fon beyaz kalır, siyah backdrop yok).
7. Jaluzi/dappled gölge — yüzde çizgili ışık, ¾ dönük, göz aşağıda, ürünsüz.
8. Ürünü **lense doğru uzatıyor** — parmak ucuyla tutuş (thumb + 2 parmak, YUMRUK DEĞİL), ürün önde küçük kahraman, yüz arkada net.
9. Clamshell güzellik makrosu (kaş–çene), camsı `@cosmos-dudak` dudak, ikiz catchlight, ürünsüz. NOT: "lower half of face" / aşırı dudak makrosu NSFW filtresine takılıyor — omuz-üstü çerçeve tercih et.
10. Rim/arkadan sıcak ışık + hafif pus + saç hareket bulanıklığı, ürün yanakta.
11–15. **Fisheye seti** — bkz. aşağıdaki fisheye kuralı.

### Fisheye / balık gözü kuralı (kenarlarda siyahlık YASAK)
nano_banana fisheye'de otomatik **koyu dairesel porthole vinyet** ekleme eğiliminde. Karşı ifade (kısmen çalışıyor): *"Ultra-wide diagonal full-frame fisheye look (like a 14mm rectilinear-corrected fisheye / GoPro wide shot): strong barrel distortion, lines bowed into curves, bulging wrap-around perspective — BUT a normal rectangle that fills the entire 9:16 frame, image into all four corners, corners bright and part of the scene. NOT a circular fisheye."* + negatif: *"no black corners, no dark corners, no circular vignette, no round image, no circular fisheye, no porthole crop, no letterboxing, no heavy corner darkening"*. Sonuç değişken — bir kısmı temiz açık köşe, bir kısmı hâlâ porthole; açık köşeliler kabul.

### Ürün lense doğru uzatılırken — tutuş + boyut
- **Tutuş:** başparmak + iki parmak ucu, gevşek/açık parmaklar. **Yumruk / avuçla kavrama YASAK** (model "yumruk" deyince elini yumuyor).
- **Boyut:** lense yakınken metinle bile ruj ölçüsüne kayıyor. Çalışan ifade: fingertip-pinch + *"it does not reach past her fingertips, no thicker than a finger, at most 1/8 of the frame"* (2026-09-28: ruj/lipstick kelimesi ve negatif listesi kaldırıldı — ürünü ruja çeviriyordu). Yine büyük çıkarsa → post-crop.

### Model karakter elementleri (Higgsfield ufo projesi)
Tekrar kullanılabilir **Character** elementleri, prompt'ta `@isim` ile çağrılır. Model satırını KISA tut: *"The model is @isim - true to the element, do not restyle her face; <sadece saç, tek cümle>."* Yüz/göz/cilt/kaş/çil dökümü yapma — element zaten sabitliyor, döküm yüzü bozuyor.
- `@sadie` — Celtic, uzun dalgalı bakır-kızıl saç, çok açık porselen ten + yoğun çil, açık mavi-gri göz.
- `@mira` — Filipina/GD-Asya, uzun düz siyah saç, bal-tan ten, sol elmacıkta ben.
- `@romy` — K-Avrupa, koyu sarı ıslak-görünüm sıkı düşük at kuyruğu, çok açık dewy ten + açık kahve çil, uykulu mavi-gri göz. Referans = direct-flash polaroid.
- `@lena` — İskandinav, soğuk kül sarısı düz çene hizası bob, açık dewy ten + hafif çil, yeşil-ela göz.
- `@yuna` — uzun düz orta ayrık siyah saç, açık tan ten, büyük kahve badem göz + belirgin çift kapak. **Akdenizli/Latina/Eurasian okunur — Asyalı DEĞİL, monolid yok.**
- `@noa` — Eurasian, uzun koyu saç ıslak/geriye taralı ayrık nemli tutamlar, altın-zeytin tan ten + çil, ela-yeşil göz.
- `@juliette` — Fransız, orta kahve + güneş sarısı balyaj, omuz hizası dağınık hacimli, açık soğuk ten + birkaç çil, parlak mavi göz, burun köprüsünde hafif çıkıntı.
- `@cho` — Doğu Asyalı, düz siyah omuz hizası lob, açık-orta sıcak ten, koyu kahve göz. (Bilerek Asyalı olan yüz — @yuna'nın Asyalı okunmaması için ayrıldı.)
- `@roni` — koyu sarı/açık kahve saç geriye taralı (alçak), bal-tan glowy dewy ten, önden.
- `@hailey` — daha önceki Cosmos yüz serisi modeli (Kafkas editoryal).
Detay: [[project-model-character-elements]]. Kural [[feedback-model-ethnicity-default]] geçerli ama kullanıcının seçtiği karakter elementi bunu ezer.

### Kamera açıları / kadraj / ışık / yaratıcı çekim sözlüğü
Tam liste: [[reference-shot-lighting-vocabulary]]. Özet:
- **Kadraj:** extreme close-up/macro · close-up · medium close-up · medium · cowboy · wide · extreme wide.
- **Kamera yüksekliği:** eye-level · **hero angle** (~15° üstten, INO packshot standardı) · 45°/three-quarter · high angle · **bird's-eye/top-down 90°** · low angle · **worm's-eye** · dutch/canted (INO kaçınır).
- **Yaratıcı teknikler:** foreground occlusion (lense yakın obje = dev soft blob) · forced perspective · prism/glass sphere (gökkuşağı yansıma) · tilt-shift/miniature · anamorphic (yatay flare, oval bokeh) · reflection hero (ürün sadece ayna/gözlük/su/camda) · slow-shutter motion blur · splash/pour freeze · levitation · frame-within-frame · negative-space maximisation · surreal scale (guerrilla dev ürün) · rule-breaking crop · colour-block/split background · texture bed (kum/jel/ipek/buz).
- **Stüdyo ışık paternleri:** butterfly/paramount (yüksek+ön, Hollywood beauty) · loop (en evrensel yumuşak) · **Rembrandt** (45° yan+yüksek, gölge yanakta ışık üçgeni) · split (90° yan) · broad/short · **clamshell** (üst softbox + alt reflektör, beauty close-up default) · rim/backlight/kicker · **high-key** (parlak dolu, beyaz fon, INO default) · low-key · **gobo/dappled** (jaluzi/yaprak gölgesi) · dual-tone/coloured gel · caustics.
- **AI-gerçekçilik:** salt "photorealistic/hyperrealistic" zayıf ve waxy. Bunun yerine: kamera+lens+diyafram adı ver ("shot on full-frame, 85mm, f/1.8"); ışığı açıkça adlandır; kusur iste (gözenek, peach fuzz, uçuşan teller, hafif asimetri, sensor grain, hafif vignette); negatif-yönlendir ("no illustration, no CGI, no 3D render, no over-sharpening, no plastic skin, no HDR glow"); dizginli renk ("muted brick red", "vivid/bright/neon" değil); film grain / "Portra-like colour" > "8K ultra-detailed".

### Onaylı Cosmos konsept kütüphanesi (model rotasyonlu)
Hepsi `@model` + `@cosmos-yanak` + `@cosmos-dudak` (+ `@cosmos`) ile, omuz-üstü/temiz çerçeve:
- Ayna yansıması hero (el aynası, Cosmos yüz camda net, gerçek yüz arkada soft).
- **İki modelli arkadaş anı** — biri diğerine `@cosmos` sürüyor; **iki `@isim` elementini birlikte bağla**, iyi çalışıyor.
- Golden-hour pencere ışığı (tül perde, tek yan raking ışık).
- Taze/nemli — ciltte küçük su damlaları, cam boncuk gibi.
- Temiz yan profil + parlak rim ışık (ürünsüz, ön yüz asla tam kararmaz).
- Colour-block bölünmüş fon (beyaz | pudra #efd2cd sert dikey ek).
- Omuz üstünden aynaya bakış.
- Tek ince prizma/gökkuşağı ışık şeridi bir elmacık boyunca (tüm yüze değil).
- Candid "adını duymuş gibi" kafa dönüşü (poz değil, doğal).
- Arkadan saç halesi + yumuşak ön dolgu.
- Yüksek-key beyaz flood — Cosmos yanak/dudak tek doygun renk.
- Beauty-ad hero layout — model kadrajda alçak, ürün yüzün yanında dik, üstte büyük kopya boşluğu.
- **NSFW filtresi:** aşırı dudak makrosu ("lower half of face", "dab onto lower lip") + crop top defalarca takıldı (kredi iade, üretim gitti) — omuz-üstü/ön çerçeve kal.

## Reklam Görseli Yapısı

**Canvas:** 1080 × 1920px (9:16 dikey / Story formatı)

### Zone Dağılımı
- **Üst %40 (0–768px):** Logo + yazı alanı — ürün fotoğrafı GİRMEZ, temiz tutulur
- **Alt %60 (768–1920px):** Ürün fotoğrafı (full-bleed, canvas'tan taşabilir)
- **Yaratıcı/mood konsept promptlarında (lab çekimi, lifestyle, makro, doku yatağı vb.) bu üst boşluk kuralı unutulmaya müsait** — prompt kompozisyona odaklanınca kopya boşluğu atlanabiliyor (bir Broad Spectrum havlu-makro promptunda kullanıcı bunu fark edip düzeltti). Bu yüzden artık sadece standart packshot değil, **her görsel promptuna** açıkça bir copy-space/headroom cümlesi eklenecek.

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

### Zemin / Arka Plan Kuralı (güncellendi 2026-09-28)
- **Düz beyaz stüdyo fonu (boş seamless) YALNIZCA kullanıcı istediğinde** — ör. website packshot'ı. Kullanıcı: "ben istemedikçe dümdüz beyaz arkaplanda görsel yapma, bi konsepti olsun, referansları incele".
- Her performans görselinin bir **konsepti ve gerçek bir mekânı/yüzeyi** olur (taş, keten, banyo, teras, masa, el, yüz, doku yatağı...). Konsept, gerçekten incelenmiş bir referans görselden gelir (bkz. PERFORMANCE-CREATIVE-WORKFLOW.md adım 2).
- Palet açık ve premium kalır: beyaz/krem/taş/açık meşe **malzeme olarak** kullanılır, boşluk olarak değil. Sarı/turuncu yok.
- Genel estetik: **lüks, temiz, akılda kalıcı**. Renkli veya koyu zemin yalnızca özellikle istendiğinde.

### Ürün Boyutları — TEK KAYNAK (2026-09-28, tüm eski yüzde/cm notlarının yerine geçer)

Boyut, bu projede en sık bozulan şey. Aşağıdaki tablo tek doğru kaynak; başka dosyada farklı bir sayı görürsen o eskidir (eski %35 / %70 / 5cm değerleri ve canvas çanta için 32×18 YANLIŞTI).

**Karar (kullanıcı, 2026-09-28): görsellerde TÜM Catch Bloom'lar Pocket boy, 4 cm** — Hibiscus, Scarlet, Cosmos, Daylily, Peony hepsi. Full boy (6 cm) Bloom artık çizdirilmez; karışıklığı kaldırıyor ve daha doğru sonuç veriyor. 6 cm yalnızca Catch Sculpt (Sand, Dune).

| Ürün | Gerçek boy | 12cm'e oran | Yüz landmark'ı (bilerek küçük) | El landmark'ı | Kadraj üst sınırı | Tanıdık nesne (KULLANMA, 2026-09-28) |
|---|---|---|---|---|---|---|
| Broad Spectrum, Catch Glow (Ruby Gold, Pink Quartz) | **12 cm** | %100 | çene → burun dibi | avuç boyundan kısa | ≤ 1/6 | — |
| Catch Balm / Lip Treatment Balm (Bare, Haze, Bubble, Ice) | **9 cm** | **%75** | çene → burun ucu | parmak dibinden parmak ucuna, avuçtan kısa | ≤ 1/7 | — |
| Catch Sculpt (Sand, Dune) | **6 cm** | **%50** | çene → burun alt çizgisi | serçe parmağından uzun değil | ≤ 1/9 | — |
| TÜM Catch Bloom'lar — Hibiscus, Scarlet, Cosmos, Daylily, Peony (hepsi Pocket) | **4 cm** | **%33** | çene → üst dudaktan kısa | serçe parmağın SADECE üst boğumu | ≤ 1/10 | — |
| Ayna charm (`@ayna`) | **5,5 cm çap** | 12 cm'in %46'sı, balm'ın %61'i; Bloom (4 cm) charm çapının ~3/4'ü | — | avuç içinde küçük bir disk | — | — |

**Çantalar (yaklaşık, kullanıcı 2026-09-28):**

| Çanta | Genişlik × yükseklik | 12 cm tüp | 9 cm balm | 4 cm Bloom | 5,5 cm ayna |
|---|---|---|---|---|---|
| Canvas çanta (`@canvas-canta`, set çantası) | **26 × 15 cm**, 1-2 cm kalın zarf | genişliğin %46'sı, yüksekliğin %80'i | genişliğin %35'i, yüksekliğin %60'ı | genişliğin %15'i | genişliğin %21'i |
| Siyah kese (büzgülü, `kese.png`) | **20 × 18 cm** | genişliğin %60'ı, yüksekliğin %67'si | genişliğin %45'i, yüksekliğin %50'si | genişliğin %20'si | genişliğin %28'i |
| Refy çanta (`@refy-canta`, çıtçıtlı) | **32 × 18 cm** (değişmedi) | genişliğin %38'i | genişliğin %28'i | genişliğin %12'si | genişliğin %17'si |


**Her promptta, sahnedeki HER ürün için:** (a) cm, (b) sahnedeki başka bir elemente/çantaya/ele oran. Yabancı nesne kıyası (ruj, chapstick vb.) yazılmaz (2026-09-28 A/B sonucu). Her Bloom için 4cm + oran cümlesi istenmeden yazılır.

Kopyala-yapıştır İngilizce bloklar (2026-09-28 revize — başka nesne adı yok, sadece cm + sahnedeki oran; element adını değiştir):
- 12cm: *"@x is 12cm tall."*
- 9cm balm: *"@x is 9cm long, three quarters of a 12cm product; @x lies flat, never upright."* (elde: *"shorter than her palm"*)
- 6cm (sadece Sculpt): *"@x is 6cm tall, half of a 12cm product."*
- 4cm (her Bloom): *"@x is 4cm tall, one third of @y"* (@y = sahnedeki 12cm ürün) — sahnede 12cm ürün yoksa *"less than half of @balm"* ya da yüzde: *"no taller than the top segment of her pinky finger"*.
- Canvas: *"@canvas-canta is 26cm wide and 15cm tall, only 1-2cm deep."*
- Siyah kese: *"the pouch is about 20cm wide and 18cm tall."*
- Ayna: *"@ayna is 5.5cm across, a little more than half the length of @bare."*

> Eski bloklardaki "smaller than a standard lipstick / chapstick / travel-size hand cream / highlighter pen" kıyasları KALDIRILDI: A/B testinde uzun prompt + yabancı nesne adları ürünleri bozuyordu (bkz. "Prompt uzunluğu — KISA ŞABLON").

**KOMPOZİT SET ELEMENTLERİ ÖLÇEKSİZ (ölçüldü 2026-09-28):** `@your-everyday-set`, `@your-everyday-essentials(-hibiscus-bare)` ve `@lip-quartet` referans görselleri gerçek oranda değil — Bloom 12cm tüpün %45'i (gerçek %33), çanta Glow'un 1,45 katı genişlikte (gerçek 26/12 = 2,17), Lip Quartet'te balm çanta genişliğinin %46'sı (gerçek 9/26 = %35). Model bu oranları kopyalıyor, metindeki cm'yi eziyor. Bu yüzden:
1. Ölçek önemliyse kompozit yerine içindekileri tek tek etiketle (`@canvas-canta` + `@pink-quartz` + `@bare` + `@hibiscus` ...) ve tablodaki oranları yaz (bkz. Prompt Yazım Disiplini #3).
2. Kompozit kullanmak zorundaysan promptta açıkça yaz: *"the element image is a product lineup, not to scale - use these real sizes instead:"* + tüm ürünlerin 3 katmanlı bloğu.
3. Tek balm'ı ayrıca kendi elementiyle bağlamak (`@bare`) rengini de düzeltiyor — kompozitin içindeki balm şeftali/bronza kayıyor.

**Bilinen zorluklar:**
- Ağız açıkken (gülerken): *"use her closed-mouth facial proportions as the size reference for the product - do not enlarge it because her jaw is open."*
- Lense doğru uzatılan / elde tutulan ürün metinle bile ruj boyuna kayıyor: parmak ucu tutuşu + *"it does not reach past her fingertips, no thicker than a finger, at most 1/8 of the frame"* (ruj kıyası yazma). Yine büyük çıkarsa post-crop/küçültme.
- QA'da boyutu da ölç: sahnedeki ürünlerin piksel boylarını birbirine böl, tablodaki orana (%33 / %50 / %75) ±%10 içinde değilse kusurlu say.

---

## Ürün Kataloğu

> Kaynak: [inobeauty.com.tr](https://inobeauty.com.tr) (canlı site) + INO Kozmetik resmi claims dosyaları (proje kök dizininde `*Claims.docx`). Aşağıdaki fonksiyon/içerik açıklamaları bu kaynaklardan alınmıştır.

### CATCH BLOOM (Lip & Cheek Stick, SPF 30+)
Makyaj ve cilt bakımını bir arada sunan çok amaçlı stick. Tek adımda renk + bakım + SPF 30+ koruma. Dudak ve yanaklara doğal renk, yoğun nem ve ışıltı kazandırır. Saf hidrolize deniz kolajeni içerir — cilt elastikiyetini artırır, ince çizgi görünümünü azaltmaya destek olur. Parmak veya fırçayla uygulanır, kat kat sürülerek yoğunlaştırılabilir.

| Ürün | Boy | Gramaj | Dosya |
|---|---|---|---|
| Scarlet | **Pocket** (küçük boy) | 4.5g | `scarlet.png`, `scarlet realistic.jpg` |
| Hibiscus | **Pocket** (küçük boy) | 4.5g | `hibiscus.png`, `hibiscus tone.PNG` |
| Peony | Normal/Full ve Pocket mevcut — **görsellerde Pocket 4 cm** | 8.77g (Full) | `peony.png` |
| Daylily | Normal/Full ve Pocket mevcut — **görsellerde Pocket 4 cm** | 8.77g (Full) | `daylily.png`, `daylily realistic.jpg` |

> 2026-09-28 kararı: görsellerde tüm Bloom'lar aynı Pocket boyda (4 cm) gösterilir; Peony/Daylily artık daha uzun çizilmez.

Çiçek görselleri: `scarlet flower.png`, `hibiscus flower.png`, `daylily flower.png`, `peony flower.png`

**Catch Bloom COSMOS** — yeni shade (Eylül 2026). Referans: `Products/cosmos.png`. Renk: **derin, mat şarap / oxblood berry** — parlak pembe DEĞİL, gül-pembe DEĞİL. Dudakta (`@cosmos-dudak`) parlak koyu berry/oxblood; yanakta (`@cosmos-yanak`) sheer, yumuşak dusty rosy-berry. **Pocket boy 4 cm** (Scarlet/Hibiscus gibi — 5cm DEĞİL). Higgsfield elementleri: `@cosmos` (ürün), `@cosmos-dudak`, `@cosmos-yanak`. Ürün henüz lansmanda değil — prompt'ta ambalaj/etiket metni uydurulmaz, "match the @cosmos element exactly" yeterli. Detaylı kullanım + şot şablonları: yukarıdaki **Catch Bloom Cosmos — model yüz/duruş serisi** bölümü.

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
| 00 Clear, 01 Light, 02 Medium, 03 Tan | `broad.png` + `Products/Broad/` (farklı açılar) |

> Dört tonun ambalajı aynı (kullanıcı, 2026-09-28) — tona özel görsel/element gerekmez; hangi ton olursa olsun aynı Broad referansı kullanılır.

---

### BEAUTY SHOT (içecek supplement) — Pure Marine Collagen
Hidrolize balık kolajeni içeren, portakal-lime aromalı içilebilir güzellik takviyesi. İçerik: Elastin, Hyaluronik Asit, Vitamin C, Vitamin E, Çinko, Biotin, Selenyum. "Twist, sip, glow."

| Ürün | Dosya |
|---|---|
| Pure Marine Collagen | `Collagen Shot Dekupe.png` |

---

### CATCH BALM / LIP TREATMENT BALM — sitede yayında (2026-09-27 kontrol)
Bare / Haze / Bubble / Ice adlı 4 varyantı var (metalik sıkma tüp, gümüşten renkli tona geçen gradyan, `Products/Catch Balm/` klasöründe referans görseller mevcut). Sitedeki adı **Lip Treatment Balm**; 4'lü set **Lip Quartet**. Sitede yazan claim'ler (sadece bunlar kullanılır, fazlası uydurulmaz): *"Volufiline & Deniz Kolajeni, Peptit Kompleksi"*, *"Yoğun ve uzun süreli nemlendirme"*, *"Cam gibi parlak ve pürüzsüz bitiş"*, *"Gözle görülür dolgunluk etkisi"*. 15ml, kapaklı haliyle **tüp uzunluğu 9 cm** (kullanıcı onaylı — el ile tutulan/yakın çekim sahnelerinde bu değeri prompt'a somut olarak yaz, aksi halde ürün büyük çıkıyor).

**Fiyatlar (inobeauty.com.tr, 2026-09-27):** tekli balm eski 1130₺ → lansman 904₺ (%20). Lip Quartet eski 4520₺ → 2938₺ (%35). Fiyat/ürün bilgisi eksikse önce siteye bak, kullanıcıya sorma.

---

### SETLER
> Kaynak: canlı site (`inobeauty.com.tr`). Setlerdeki ürün varyantları (renk/ton) müşteri tarafından seçilebilir — set açıklamasında ayrıca belirtilmez.

| Set Adı | İçerik | Fiyat (eski → indirimli) | Dosya |
|---|---|---|---|
| Lip Combo | 1 Lip Treatment Balm + 1 Catch Bloom Pocket + INO makyaj çantası (canvas) | 2320 → 1508₺ | `Setler/Lip Combo.png` |
| Color & Glow Set | 1 Catch Bloom + 1 Catch Glow + INO makyaj çantası | 3280 → 2132₺ | `Setler/Color & Glow Set.png` |
| Color & Shield Set | 1 Catch Bloom + 1 Broad Spectrum + INO makyaj çantası | 3580 → 2327₺ | `Setler/Color & Shield Set.png` |
| Glow & Shield Set | 1 Catch Glow + 1 Broad Spectrum + INO makyaj çantası | 4480 → 2912₺ | `Setler/Glow & Shield Set.png` |
| Your Everyday Essentials | 1 Lip Treatment Balm + 1 Catch Bloom Pocket + 1 Catch Glow + INO makyaj çantası | 4410 → 2867₺ | `Setler/Your Everyday Essentials hibiscus bare.png` |
| Lip Quartet | 4 Lip Treatment Balm (Bare, Haze, Bubble, Ice) + çanta | 4520 → 2938₺ | `Setler/Lip Quartet.png` |
| Sun & Color Set | 1 Catch Bloom Pocket + 1 Broad Spectrum + 1 Lip Treatment Balm (site: çanta yok; görselde canvas çanta var) | 4710 → 3062₺ | `Setler/Sun & Color Set.png` |
| Your Everyday Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + INO makyaj çantası | 5670 → 3686₺ | `Setler/Your Everyday Set.png` |
| Your Everyday Rituals Set | 1 Catch Bloom Pocket + 1 Lip Treatment Balm + 1 Catch Glow + 1 Broad Spectrum + INO Iconic Bag (`@refy-canta`) | 6800 → 4420₺ | `Setler/Your Everyday Rituals Set.png` |
| Ultimate Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + 1 Catch Sculpt + INO makyaj çantası | 7860 → 5109₺ | `Setler/Ultimate Set.png` |
| Full Glam Set | 1 Catch Bloom + 1 Catch Glow + 1 Broad Spectrum + 2 Catch Sculpt + INO makyaj çantası | 10050 → 6533₺ | `Setler/Full Glam Set.png` |
| All-in-one Set | 3 Catch Bloom Pocket + 2 Catch Glow + 1 Broad Spectrum + 2 Catch Sculpt + INO makyaj çantası | 14520 → 9438₺ | `Setler/All-in-one Set.png` |

> Glow & Shield Set 2026-09-28 itibarıyla sitede VAR (önceki "yok" notu eskidi). Setlerin tamamı %35 indirimde.
> `Setler/` içindeki `bloom_sculpt_broad_glow.png`, `bloom_glow.png`, `bloom_sculpt_broad_glow_beautyshot.png` gibi dosyalar resmi/isimli bir set ürününe karşılık gelmiyor, sadece görsel dosya adları.

---

### Diğer Varlıklar
| Dosya | Açıklama |
|---|---|
| `kese.png` | Siyah büzgülü kese — yaklaşık **20 × 18 cm** |
| `canvas çanta.png` | Canvas çanta (`@canvas-canta`) — yaklaşık **26 × 15 cm**, 1-2 cm kalın |
| `Setler/all products.png` | Tüm ürünler lineup görseli (ölçekli DEĞİL) |
| `refy-canta/` (8 görsel) | INO Iconic Bag = `@refy-canta` — beyaz, körüklü, 2 çıtçıtlı |
| `termal çanta.png`, `termal çanta 1 .png` | Termal çanta |
| `Catch Balm/2.jpg` | INO Mirror Charm (`@ayna`) — 5,5 cm çap, vegan elma derisi, mıknatıslı kapak, karabina halka; sitede 399₺ |

> **INO Iconic Bag = `@refy-canta` (sitede, 2026-09-28):** 28 × 17 × 14,5 cm, su itici UV kaplı kumaş, 2 çıtçıt, iç fermuarlı cep; 1390₺ ya da 4200₺ üstü hediye. `@refy-canta` bu çanta (Rituals set görseliyle doğrulandı) — sitedeki ölçü aşağıdaki 32 × 18 notuyla çelişiyor, kullanıcı onaylayınca tek değere indirilecek.

> **`@refy-canta` (Higgsfield prop, INO makyaj çantası referansı):** gerçek boyutu **32 cm genişlik × 18 cm yükseklik** — hem top-view hem normal açıda küçük çıkma eğiliminde, prompt'a bu somut ölçü mutlaka yazılmalı, diğer ürünlerin boyutu buna oranla verilmeli (yüzde kıyası tek başına yetersiz kaldı).

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
