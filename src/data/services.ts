// src/data/services.ts

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  imageUrl: string; // Artık yerel yol olacak
  fullDescription: string;
  benefits?: string[];
  whoCanBenefit?: string[];
}

export const services: Service[] = [
  {
    slug: "bireysel-terapi",
    title: "Bireysel Terapi",
    shortDescription: "Kişisel gelişim, duygusal zorluklar ve yaşam değişiklikleri için birebir destek.",
    imageUrl: "/images/hizmet-bireysel.jpg", // public/images/hizmet-bireysel.jpg
    fullDescription: `
      <p class="mb-4">Bireysel terapi, kişinin kendi iç dünyasına odaklanarak yaşadığı zorlukları anlama, duygusal dengeyi sağlama ve kişisel gelişim yolculuğunda ilerlemesi için profesyonel destek aldığı bir süreçtir.</p>
      <p class="mb-4">Bu süreçte, bireylerin kaygı, depresyon, stres, travma, ilişki sorunları, öfke yönetimi, özgüven eksikliği gibi çeşitli konularda derinlemesine çalışılır. Terapi, kişiye özel bir yaklaşımla, güvenli ve yargılayıcı olmayan bir ortamda gerçekleşir.</p>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Bireysel Terapi Kimlere Yöneliktir?</h3>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">Depresyon, anksiyete, panik atak yaşayanlar.</li>
        <li class="mb-2">Stresle başa çıkmakta zorlananlar.</li>
        <li class="mb-2">İlişki problemleri veya iletişim güçlükleri yaşayanlar.</li>
        <li class="mb-2">Özgüven eksikliği, kendini ifade etme güçlüğü çekenler.</li>
        <li class="mb-2">Travma sonrası stres bozukluğu yaşayanlar.</li>
        <li class="mb-2">Yas süreci veya önemli yaşam değişiklikleriyle başa çıkmaya çalışanlar.</li>
        <li class="mb-2">Kişisel gelişim ve farkındalık arayışında olanlar.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Terapi Süreci Nasıl İşler?</h3>
      <p>Bireysel terapi süreci, kişinin ihtiyaçlarına ve hedeflerine göre şekillenir. Genellikle haftalık veya iki haftalık seanslar halinde yürütülür. İlk seanslarda tanışma, beklentilerin belirlenmesi ve terapinin çerçevesinin çizilmesi sağlanır. Daha sonraki seanslarda, belirlenen konular üzerinde derinlemesine çalışılır, yeni bakış açıları geliştirilir ve sorunlarla başa çıkma stratejileri öğrenilir.</p>
    `,
    benefits: [
      "Duygusal farkındalığı artırır",
      "Stres ve kaygı yönetimini sağlar",
      "Özgüveni ve benlik saygısını geliştirir",
      "İletişim becerilerini güçlendirir",
      "Geçmiş travmalarla yüzleşme ve iyileşme",
      "Daha anlamlı ilişkiler kurma",
      "Kişisel hedeflere ulaşma",
    ],
    whoCanBenefit: [
      "Depresyon, anksiyete, panik atak yaşayanlar",
      "Stresle başa çıkmakta zorlananlar",
      "İlişki problemleri veya iletişim güçlükleri yaşayanlar",
      "Özgüven eksikliği çekenler",
      "Travma sonrası stres bozukluğu yaşayanlar",
    ],
  },
  {
    slug: "cift-aile-terapisi",
    title: "Çift ve Aile Terapisi",
    shortDescription: "İlişki dinamiklerini anlama, iletişimi güçlendirme ve aile içi dengeyi sağlama.",
    imageUrl: "/images/hizmet-cift-aile.jpg", // public/images/hizmet-cift-aile.jpg
    fullDescription: `
      <p class="mb-4">Çift ve aile terapisi, ilişkilerdeki zorlukları ele alarak aile üyeleri veya partnerler arasındaki iletişimi, anlayışı ve bağı güçlendirmeyi hedefler. Bireylerin birbirleriyle olan etkileşimlerini anlamalarına ve daha sağlıklı yollar geliştirmelerine yardımcı olur.</p>
      <p class="mb-4">Bu terapi türü, evlilik sorunları, boşanma süreçleri, çocuk yetiştirme zorlukları, kuşak çatışmaları, yas ve kayıp gibi konularda destek sunar. Terapist, tüm tarafların bakış açılarını dinleyerek tarafsız bir rehberlik sağlar.</p>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Çift ve Aile Terapisi Kimlere Yöneliktir?</h3>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">Evlilik veya partner ilişkilerinde sorun yaşayan çiftler.</li>
        <li class="mb-2">Aile içi iletişim problemleri yaşayan aileler.</li>
        <li class="mb-2">Boşanma sürecinde olan veya boşanmış çiftler ve çocukları.</li>
        <li class="mb-2">Ebeveyn-çocuk ilişkilerinde zorluklar yaşayanlar.</li>
        <li class="mb-2">Kronik hastalıklar, bağımlılık veya kayıp gibi aile sistemini etkileyen durumlarla başa çıkanlar.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Terapi Süreci Nasıl İşler?</h3>
      <p>Çift ve aile terapisi, genellikle tüm ilgili aile üyelerinin katılımıyla gerçekleştirilir. Seanslarda, her bireyin duygularını ve düşüncelerini güvenli bir ortamda ifade etmesi teşvik edilir. İletişim kalıpları analiz edilir, çatışma çözme stratejileri öğretilir ve birbirlerine karşı empati geliştirmeleri desteklenir. Amaç, sağlıklı ve işlevsel aile/çift dinamikleri oluşturmaktır.</p>
    `,
    benefits: [
      "İletişim becerilerini geliştirir",
      "Çatışma çözme yeteneğini artırır",
      "Karşılıklı anlayış ve empatiyi güçlendirir",
      "Aile içi rolleri ve sınırları netleştirir",
      "İlişkiyi yeniden canlandırır veya sağlıklı bir şekilde sonlandırır",
      "Kriz durumlarında destek sağlar",
    ],
    whoCanBenefit: [
      "Evlilik veya partner ilişkilerinde sorun yaşayan çiftler",
      "Aile içi iletişim problemleri yaşayan aileler",
      "Boşanma sürecinde olan aileler",
      "Ebeveyn-çocuk ilişkilerinde zorluklar yaşayanlar",
    ],
  },
  {
    slug: "online-terapi",
    title: "Online Terapi",
    shortDescription: "Mekandan bağımsız, esnek ve erişilebilir psikolojik danışmanlık hizmeti.",
    imageUrl: "/images/hizmet-online.jpg", // public/images/hizmet-online.jpg
    fullDescription: `
      <p class="mb-4">Online terapi, internet üzerinden video konferans, telefon görüşmesi veya mesajlaşma yoluyla sağlanan psikolojik danışmanlık ve terapi hizmetidir. Coğrafi engelleri ortadan kaldırarak, kişilere evlerinin konforunda veya istedikleri her yerden profesyonel destek alma imkanı sunar.</p>
      <p class="mb-4">Bu yöntem, özellikle yoğun tempoda çalışanlar, fiziksel kısıtlamaları olanlar veya uzak bölgelerde yaşayanlar için ideal bir çözüm sunar. Online terapi seansları, yüz yüze terapilerdeki kadar gizli ve güvenlidir.</p>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Online Terapi Kimlere Yöneliktir?</h3>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">Yoğun iş temposu olan ve randevulara zaman ayırmakta zorlananlar.</li>
        <li class="mb-2">Fiziksel olarak terapi merkezine gitmekte zorlananlar.</li>
        <li class="mb-2">Bulunduğu bölgede uygun uzman bulamayanlar.</li>
        <li class="mb-2">Sık seyahat edenler.</li>
        <li class="mb-2">Yüz yüze terapiye başlamakta çekingenlik yaşayanlar.</li>
        <li class="mb-2">Gizlilik ve konfor arayanlar.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Terapi Süreci Nasıl İşler?</h3>
      <p>Online terapi seansları, belirlenen gün ve saatte güvenli bir video konferans platformu üzerinden gerçekleştirilir. Terapist ile danışan arasında, yüz yüze terapideki gibi doğrudan iletişim kurulur. Seans süreleri ve sıklığı, bireysel ihtiyaçlara göre belirlenir. Terapi süreci boyunca gizlilik ve veri güvenliği en üst düzeyde tutulur.</p>
    `,
    benefits: [
      "Mekan ve zaman esnekliği",
      "Erişim kolaylığı (coğrafi engelleri kaldırır)",
      "Konforlu ve güvenli bir ortamda terapi",
      "Yoğun tempoda çalışanlar için ideal",
      "Gizlilik ve anonimlik hissi",
    ],
    whoCanBenefit: [
      "Uzak bölgelerde yaşayanlar",
      "Fiziksel engelleri olanlar",
      "Yoğun tempoda çalışanlar",
      "Seyahat edenler",
      "Anonimlik isteyenler",
    ],
  },
  {
    slug: "kisisel-gelisim",
    title: "Kişisel Gelişim ve Farkındalık",
    shortDescription: "Potansiyelinizi keşfedin, güçlü yönlerinizi geliştirin ve daha tatmin edici bir yaşam inşa edin.",
    imageUrl: "/images/hizmet-kisisel-gelisim.jpg", // public/images/hizmet-kisisel-gelisim.jpg
    fullDescription: `
      <p class="mb-4">Kişisel gelişim ve farkındalık danışmanlığı, bireylerin potansiyellerini tam olarak ortaya çıkarmalarına, güçlü yönlerini keşfetmelerine ve daha bilinçli, tatmin edici bir yaşam sürmelerine yardımcı olan bir süreçtir.</p>
      <p class="mb-4">Bu alanda, yaşam hedefleri belirleme, motivasyon artırma, zaman yönetimi, karar alma becerileri, öz-şefkat geliştirme ve içsel huzuru bulma gibi konular üzerinde çalışılır. Kişisel gelişim, sürekli bir öğrenme ve büyüme yolculuğudur.</p>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Kişisel Gelişim Kimlere Yöneliktir?</h3>
      <ul class="list-disc list-inside mb-4">
        <li class="mb-2">Hayatında bir değişim arayanlar.</li>
        <li class="mb-2">Kendi potansiyelini keşfetmek isteyenler.</li>
        <li class="mb-2">Hedef belirleme ve motivasyon sorunları yaşayanlar.</li>
        <li class="mb-2">Öz-farkındalığını artırmak isteyenler.</li>
        <li class="mb-2">Daha tatmin edici ilişkiler kurmak isteyenler.</li>
        <li class="mb-2">Stres ve tükenmişlik hissiyle başa çıkmakta zorlananlar.</li>
      </ul>
      <h3 class="text-xl font-semibold mb-3 text-gray-800">Danışmanlık Süreci Nasıl İşler?</h3>
      <p>Kişisel gelişim ve farkındalık danışmanlığı, bireyin kendi değerlerini, inançlarını ve hedeflerini derinlemesine anlamasına yardımcı olur. Danışmanlık sürecinde, kişinin güçlü ve zayıf yönleri analiz edilir, potansiyel engeller belirlenir ve bu engellerin aşılması için stratejiler geliştirilir. Birey, kendi içsel kaynaklarını kullanarak daha bilinçli seçimler yapmayı ve yaşam kalitesini artırmayı öğrenir.</p>
    `,
    benefits: [
      "Potansiyeli keşfetme ve kullanma",
      "Yaşam hedefleri belirleme ve ulaşma",
      "Motivasyon ve öz-disiplini artırma",
      "Karar alma becerilerini geliştirme",
      "Öz-şefkat ve içsel huzur",
      "Stresle başa çıkma",
    ],
    whoCanBenefit: [
      "Hayatında değişim arayanlar",
      "Potansiyelini keşfetmek isteyenler",
      "Hedef belirlemede zorlananlar",
      "Öz-farkındalığını artırmak isteyenler",
    ],
  },
];
