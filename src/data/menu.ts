export type Dish = { ar: string; fr: string; price: string };
export type MenuCategory = { name: string; dishes: Dish[] };

export const menu: MenuCategory[] = [
  {
    name: "Couscous tunisien",
    dishes: [
      { ar: "كسكسي دار عرس", fr: "Couscous Dar Baya", price: "31 DT" },
      { ar: "كسكسي بالقرنيط", fr: "Couscous au poulpe", price: "30 DT" },
    ],
  },
  {
    name: "Riz & Semoule",
    dishes: [
      { ar: "روز مفور بالكروفات رويال", fr: "Riz vapeur aux crevettes royales", price: "29 DT" },
      { ar: "نواصر بالعلوش", fr: "Nwasser à l'agneau", price: "26 DT" },
      { ar: "روز جربي بإسكالوب الدجاج", fr: "Riz djerbien à l'escalope de poulet", price: "18 DT" },
    ],
  },
  {
    name: "Pâtes",
    dishes: [
      { ar: "مقرونة فل بالكلب بحر", fr: "Macaroni aux fruits de mer", price: "28 DT" },
      {
        ar: "سباقتي أو فل بالكروفات رويال",
        fr: "Spaghetti ou vermicelle aux crevettes royales",
        price: "29 DT",
      },
      { ar: "سباقتي غلال البحر", fr: "Spaghetti aux fruits de mer", price: "30 DT" },
      { ar: "مقرونة بلومة بالدجاج", fr: "Macaroni Blouma au poulet", price: "18 DT" },
    ],
  },
  {
    name: "Plats mijotés",
    dishes: [
      { ar: "كمونية لحم + كبدة", fr: "Kammounia viande + foie", price: "30 DT" },
      { ar: "قلاية لحم + كبدة", fr: "Klaya viande + foie", price: "30 DT" },
      { ar: "ملوخية باللحم هبرة بقري", fr: "Mloukhia au bœuf haché", price: "28 DT" },
      { ar: "مرمز بالعلوش", fr: "Mermez à l'agneau", price: "28 DT" },
      { ar: "كوشة علوش", fr: "Koucha à l'agneau", price: "26 DT" },
      {
        ar: "مرقة جلبانة بالكلامار farci",
        fr: "Marka Jelbana aux calamars farcis",
        price: "26 DT",
      },
      { ar: "عجة مرقاز", fr: "Ojja au merguez", price: "15 DT" },
      { ar: "رأس مصلي علوش", fr: "Rass M'ssili à l'agneau", price: "20 DT" },
      {
        ar: "مرقة إمالح بالكعابر لحم مفروم",
        fr: "Marka Emthalh aux boulettes de viande hachée",
        price: "26 DT",
      },
    ],
  },
  {
    name: "Poissons et fruits de mer",
    dishes: [
      {
        ar: "كروفات رويال مشوية عالفحم",
        fr: "Crevettes royales grillées au charbon",
        price: "26 DT",
      },
      { ar: "وراطة مشوية عالفحم", fr: "Rouget grillé au charbon", price: "22 DT" },
      { ar: "قاروص مشوي عالفحم", fr: "Bar grillé au charbon", price: "23 DT" },
      { ar: "عجة غلال البحر", fr: "Ojja aux fruits de mer", price: "28 DT" },
      { ar: "تريليا مشوية عالفحم", fr: "Daurade grillée au charbon", price: "24 DT" },
      { ar: "سر مشوي عالفحم", fr: "Espadon grillé au charbon", price: "24 DT" },
      { ar: "حوت تن فرشك مشوي عالفحم", fr: "Thon frais grillé au charbon", price: "15 DT" },
    ],
  },
  {
    name: "Grillades tunisiennes",
    dishes: [
      {
        ar: "كتلات بقري مشوي عالفحم",
        fr: "Côtelettes de bœuf grillées au charbon",
        price: "26 DT",
      },
      { ar: "إسكالوب مشوي عالفحم", fr: "Escalope grillée au charbon", price: "16 DT" },
      { ar: "إسكالوب PANEE", fr: "Escalope panée", price: "17 DT" },
      { ar: "grillade mixte", fr: "Grillade mixte", price: "34 DT" },
    ],
  },
];

export const avis = [
  {
    name: "Cathy",
    note: 5,
    text: "Un accueil vraiment chaleureux et une cuisine tunisienne copieuse, excellente, à des prix très justes.",
  },
  {
    name: "Ventura",
    note: 5,
    text: "Cadre soigné et convivial, un couscous et un poisson remarquables, avec un service attentionné.",
  },
  {
    name: "Dounya",
    note: 5,
    text: "Le personnel prend le temps d'expliquer la carte, les plats sont généreusement épicés et le thé à la menthe est parfait.",
  },
  {
    name: "Meriem",
    note: 5,
    text: "Un couscous généreux et inoubliable, un service poli avec de petites attentions offertes.",
  },
  {
    name: "Ahlam",
    note: 4,
    text: "L'adresse à retenir à Sousse pour retrouver la vraie cuisine tunisienne, comme à la maison.",
  },
];

export const atouts = [
  "Plats halal",
  "Excellents desserts",
  "Terrasse",
  "Groupes bienvenus",
  "Réservations acceptées",
  "Parking gratuit",
];
