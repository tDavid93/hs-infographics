export type Tribe =
  | "mech"
  | "quilboar"
  | "undead"
  | "murloc"
  | "dragon"
  | "elemental"
  | "naga"
  | "pirate"
  | "beast"
  | "demon";

export type CardRef = {
  name: string;
  cardId: string;
  tier: number;
  type: string;
  attack: number;
  health: number;
  rules: string;
  note: string;
};

export type Comp = {
  tribe: Tribe;
  grade: "S" | "A" | "B" | "C";
  name: string;
  signal: string;
  why: string;
  cards: CardRef[];
  commit: string[];
  avoid: string[];
};

export type TimelineRow = {
  turn: string;
  offer: string;
  use: string;
};

export type InfoBlock = {
  title: string;
  body: string;
  points: string[];
};

export type BoardState = {
  title: string;
  stage: string;
  tribe: Tribe;
  board: string[];
  hand: string[];
  goal: string;
  next: string[];
};

export type BuildRoute = {
  title: string;
  tribe: Tribe;
  opener: string;
  midgame: string;
  late: string;
  pivots: string[];
};

export type ReferenceNote = {
  label: string;
  kind: string;
  summary: string;
  href: string;
};

export type CommunityPulse = {
  title: string;
  signal: string;
  confidence: "high" | "medium" | "low";
  takeaway: string;
  sources: string[];
};

export type ChangelogEntry = {
  date: string;
  title: string;
  summary: string;
  changes: string[];
};

export const updated = "2026-08-06";

export const sources = [
  {
    label: "Blizzard 36.2 patch jegyzetek",
    href: "https://hearthstone.blizzard.com/en-gb/news/24290432/362-patch-notes",
  },
  {
    label: "Blizzard Season 14 bejelentés",
    href: "https://playhearthstone.com/en-us/blog/24290433/",
  },
  {
    label: "HearthPwn 36.2 patch jegyzetek",
    href: "https://www.hearthpwn.com/news/12583-36-2-patch-notes-battlegrounds-season-14-in-game",
  },
  {
    label: "HSBG 36.2 vizuális adatbázis",
    href: "https://hsbg.cards/patch-notes/36.2",
  },
  {
    label: "HearthstoneJSON kép API",
    href: "https://hearthstonejson.com/docs/images.html",
  },
  {
    label: "r/BobsTavern korai beszélgetés",
    href: "https://www.reddit.com/r/BobsTavern/comments/1v8664a/announcing_battlegrounds_season_14_dark_gifts_of/",
  },
  {
    label: "r/BobsTavern friss feed",
    href: "https://www.reddit.com/r/BobsTavern/",
  },
  {
    label: "YouTube Season 14 guide keresés",
    href: "https://www.youtube.com/results?search_query=Hearthstone+Battlegrounds+Season+14+Dark+Gifts+guide",
  },
  {
    label: "dogdog Tasty Lobster Beast videó",
    href: "https://www.youtube.com/watch?v=wi_nvouGX0Y",
  },
  {
    label: "Sevel Dark Gifts videó",
    href: "https://www.youtube.com/watch?v=WiCIJmfi6IY",
  },
  {
    label: "Sevel Dragon build videó",
    href: "https://www.youtube.com/watch?v=dCwe93sXIiM",
  },
  {
    label: "Shadybunny Season 14 mechanika review",
    href: "https://www.youtube.com/watch?v=6IezL5pKS1I",
  },
  {
    label: "HSReplay Tasty Lobstah comp oldal",
    href: "https://hsreplay.net/battlegrounds/comps/87/beasts-tasty-lobstah",
  },
];

export const tribes: { key: Tribe | "all"; label: string }[] = [
  { key: "all", label: "Minden" },
  { key: "mech", label: "Mech" },
  { key: "quilboar", label: "Quilboar" },
  { key: "murloc", label: "Murloc" },
  { key: "undead", label: "Undead" },
  { key: "elemental", label: "Elemental" },
  { key: "naga", label: "Naga" },
  { key: "pirate", label: "Pirate" },
  { key: "beast", label: "Beast" },
  { key: "dragon", label: "Dragon" },
  { key: "demon", label: "Demon" },
];

export const comps: Comp[] = [
  {
    tribe: "mech",
    grade: "S",
    name: "Spell Magnetize Mech",
    signal: "Akkor a legjobb, ha a lobby olcsó célzott Tavern spelleket ad.",
    why: "A Glambot és a Spark Snapper a normál spell- vagy Mech-akciókat külön Magnetic testekké alakítja, majd a Utility Drone megsokszorozza a kör végi statokat.",
    cards: [
      { name: "Glambot", cardId: "BG36_853", tier: 5, type: "Mech", attack: 6, health: 6, rules: "Amikor spell-t használsz egy Mechen, <b>Magnetize</b> egy 6/6-os Satellite-et rá.", note: "A Mechre célzott spellből 6/6-os Satellite lesz." },
      { name: "Spark Snapper", cardId: "BG36_851", tier: 4, type: "Mech", attack: 3, health: 3, rules: "Amikor kijátszol egy Mechet, <b>Magnetize</b> egy 3/3-as Satellite-et rá, és ezt javítja.", note: "A Mech kijátszások Satellite-eket és további javulást adnak." },
      { name: "Drone Duplicator", cardId: "BG36_506", tier: 4, type: "Mech", attack: 4, health: 4, rules: "<b>Activate (1):</b> A következő <b>Magnetization</b> erre a lényre ebben a körben duplázódik.", note: "Az Activate megduplázza a következő Magnetizationt." },
      { name: "Utility Drone", cardId: "BG26_152", tier: 6, type: "Mech", attack: 4, health: 6, rules: "A köröd végén adj a lényeidnek +4/+4-et minden rajtuk lévő <b>Magnetization</b> után.", note: "Kör végi skálázás minden Magnetic stack után." },
    ],
    commit: ["Két valódi Magnetize payoff megvan Tavern 4-5 körül.", "Van spell-gazdaság vagy Gearfin-szerű spelltermelés.", "A board több testen is tudja szétosztani a Magnetic buffokat."],
    avoid: ["Minden Magneticet egyetlen lényre pakolni, amit könnyű kiszedni.", "Glambotot venni spellhozzáférés nélkül.", "Gazdaság nélkül a tökéletes T6-ot rollolni."],
  },
  {
    tribe: "quilboar",
    grade: "S",
    name: "Choose One Blood Gem",
    signal: "Akkor legerősebb, ha a Gem-minőséget már a Gem-spam előtt javítani tudod.",
    why: "A Trailblazer és a Choose One támogatás a célzott Gemeket széles board-skálázássá alakítja. A vonalnak továbbra is Gem-minőség kell; a nyers Gem-termelés önmagában kevés.",
    cards: [
      { name: "Thorned Trailblazer", cardId: "BG31_327", tier: 4, type: "Quilboar", attack: 4, health: 5, rules: "Körönként egy <b>Choose One</b> lap mindkét effektet megkapja. <i>(1 maradt!)</i>", note: "A Choose One lapok mindkét hatást megkaphatják." },
      { name: "Gem Rat", cardId: "BG31_326", tier: 3, type: "Quilboar", attack: 4, health: 4, rules: "A köröd végén kapsz egy Gem Dayt.", note: "Gem Day támogatás és folyamatos Gem-áramlás." },
      { name: "Turbo Hogrider", cardId: "BG31_323", tier: 6, type: "Quilboar", attack: 5, health: 7, rules: "Miután kijátszol egy <b>Choose One</b> lapot, ez kijátszik egy <b>Blood Gemet</b> az összes többi Quilboarodra.", note: "Choose One payoff, ami a célzott Gemet széles buffá alakítja." },
      { name: "Bramble Tunneler", cardId: "BG36_331", tier: 4, type: "Quilboar", attack: 3, health: 6, rules: "<b>Rally:</b> Kapsz egy véletlen <b>Choose One</b> lapot.", note: "Season 14 Quilboar setup darab." },
    ],
    commit: ["Gem-minőség motor plusz Trailblazer vagy Hogrider.", "Elég kézhely és arany a Gem support megvételére.", "Dark Gift vagy Trinket, ami jutalmazza a fő típusodat."],
    avoid: ["Ideiglenes Gemeket valódi skálázásnak számolni.", "Gyenge tempót tartani egyetlen pontos T6 reményében.", "Telepakolni a boardot supporttal carry nélkül."],
  },
  {
    tribe: "murloc",
    grade: "A",
    name: "Spell Handbuff Murloc",
    signal: "Akkor jó, ha olcsók a spellek és kontrollált a kézpozíció.",
    why: "A Twilight Tidehunter és a Shamanic Tidecaller ismételt spell-használatot jutalmaz; a Kelp Keeper és a Gearfin Battlecry- és spell-sebességet ad.",
    cards: [
      { name: "Twilight Tidehunter", cardId: "BG36_703", tier: 4, type: "Murloc", attack: 3, health: 6, rules: "Amikor spell-t használsz ezen, adj a kezedben lévő bal szélső lénynek +6/+6-ot.", note: "A spellek a kéz bal szélső célpontját buffolják." },
      { name: "Shamanic Tidecaller", cardId: "BG36_704", tier: 5, type: "Murloc", attack: 5, health: 7, rules: "Amikor spell-t használsz egy Murlocon, adj a kezedben és boardon lévő Murlocoknak +3/+3-at.", note: "A spellek a kézben és boardon lévő Murlocokat buffolják." },
      { name: "Kelp Keeper", cardId: "BG36_701", tier: 4, type: "Murloc", attack: 5, health: 5, rules: "<b>Activate (1):</b> Aktiváld egy baráti lény <b>Battlecry</b>-át.", note: "Az Activate újraindít egy baráti Battlecryt." },
      { name: "Gearfin", cardId: "BG36_764", tier: 4, type: "Mech/Murloc", attack: 6, health: 5, rules: "A köröd végén kapsz két 1 aranyas Tavern spellt.", note: "Kör végén két olcsó Tavern spellt ad." },
    ],
    commit: ["Megbízható spelltermelés.", "A carry helyesen parkol a kézben.", "Van Battlecry, amit érdemes Kelp Keeperrel ismételni."],
    avoid: ["Véletlenül elrontani a bal szélső kézcélpontot.", "Túl sok handbuff darab, kevés board-erő.", "Egy Tidehunterből spellek nélkül force-olni."],
  },
  {
    tribe: "undead",
    grade: "A",
    name: "Reborn Recruit Trigger",
    signal: "Akkor működik, ha a Reborn-akciók már combat előtt megtörténnek.",
    why: "A Dead Bellringer Recruit Phase Reborn triggereket ad, a Barrier Banshee túlélést csinál belőlük, a Snazzy Phantom pedig Attack statot tölt a jobb oldali carrybe.",
    cards: [
      { name: "Dead Bellringer", cardId: "BG36_511", tier: 4, type: "Undead", attack: 3, health: 6, rules: "<b>Activate (1):</b> Adj egy másik baráti Undeadnek <b>Reborn</b>-t. Ezután pusztítsd el, hogy ez +4/+4-et kapjon.", note: "Activate: Reborn, pusztítás, majd statnyereség." },
      { name: "Barrier Banshee", cardId: "BG36_514", tier: 5, type: "Undead", attack: 7, health: 7, rules: "Miután egy baráti lény <b>Reborn</b>-nal visszatér, ez <b>Divine Shield</b>-et és +7/+7-et kap.", note: "A Reborn triggerek Divine Shieldet és statot adnak." },
      { name: "Snazzy Phantom", cardId: "BG36_515", tier: 6, type: "Undead", attack: 6, health: 8, rules: "Miután egy baráti lény <b>Reborn</b>-nal visszatér, adj annak Attackjével egyenlő statot a jobb szélső Undeadednek.", note: "A Reborn triggerek Attack statot töltenek jobbra." },
    ],
    commit: ["Bellringer plusz legalább egy valódi payoff.", "Magas Attackú Reborn célpont vagy skálázódó célpont.", "Van hely a jobb szélső Undead pozicionálására."],
    avoid: ["Rossz lényt tenni a Phantom-vonal mellé.", "Sebzés helyett csak utility testeket venni.", "Azt hinni, hogy a combat Reborn önmagában elég."],
  },
  {
    tribe: "elemental",
    grade: "A",
    name: "Elemental Cycle Baller",
    signal: "Gazdaságot, board-helyet és ismételt Elemental play/sell köröket akar.",
    why: "Az Air Baller eladáskor azonnali széles statot ad, míg az Unbound Tempest és a Moat Custodian több körön át jutalmazza az Elemental kijátszásokat.",
    cards: [
      { name: "Air Baller", cardId: "BG36_181", tier: 5, type: "Elemental", attack: 7, health: 7, rules: "Amikor eladod ezt, adj a lényeidnek +2/+2-t. Javítsd a jövőbeli Ballereidet.", note: "Eladáskor +2/+2-t ad, és javítja a későbbi Ballereket." },
      { name: "Unbound Tempest", cardId: "BG36_352", tier: 6, type: "Elemental", attack: 3, health: 12, rules: "Miután kijátszol 3 Elementalt, megkapja a Tavern legmagasabb Healthű lényének statjait. <i>(3 maradt!)</i>", note: "Minden 3 Elemental után magas Healthű Tavern statot nyer." },
      { name: "Moat Custodian", cardId: "BG36_351", tier: 6, type: "Elemental", attack: 4, health: 10, rules: "<b>Rally:</b> Az Elementaljaid ebben a játékban extra +1/+2-t adnak.", note: "A Rally javítja az Elemental buffokat ebben a játékban." },
      { name: "Living Prison", cardId: "BG36_180", tier: 4, type: "Elemental", attack: 4, health: 5, rules: "<b>Activate (1):</b> Megkapja a következő ebben a körben vásárolt lényed statjait.", note: "Activate: megkapja a következő vásárlás statjait." },
    ],
    commit: ["Jó gazdaság és tiszta cycle kör.", "Baller vagy Tempest megvan a nagy költés előtt.", "Shop buff vagy Dark Gift nagyobbá teszi a vásárolt testeket."],
    avoid: ["Cycle-ölni aranymotor nélkül.", "Gyenge shopokat fagyasztani pusztán típusdarab miatt.", "Egy nagy Living Prison kört teljes compnak nézni."],
  },
  {
    tribe: "naga",
    grade: "B",
    name: "Spell Naga Board Buff",
    signal: "Spell-heavy lobbyban jó, de törékeny, ha a spellekért verseny van.",
    why: "A Cagey Conjurer spell triggereket hoz létre, a Torrential Ruiner pedig board statot fizet ezekért, de a compnak elég Naga sűrűség is kell.",
    cards: [
      { name: "Cagey Conjurer", cardId: "BG36_508", tier: 3, type: "Naga", attack: 6, health: 4, rules: "<b>Activate (1):</b> Elcastol egy véletlen Tavern spellt <i>(ha lehet, ezt célozza)</i>.", note: "Az Activate véletlen Tavern spellt castol." },
      { name: "Torrential Ruiner", cardId: "BG36_622", tier: 6, type: "Naga", attack: 3, health: 3, rules: "Amikor spell-t használsz egy Nagán, adj a lényeidnek +3/+3-at.", note: "A Nagára célzott spellek +3/+3-at adnak a boardnak." },
    ],
    commit: ["Több spell-on-minion trigger.", "Naga testek, amik tudnak célzott spellt fogadni.", "Másodlagos carry, ha a Ruiner későn jön."],
    avoid: ["Olyan random spelleket venni, amik nem célozzák a boardot.", "Gyenge Nagákat tartani csak típusszám miatt.", "Vesztes helyzetből Ruinerre rollolni."],
  },
  {
    tribe: "pirate",
    grade: "B",
    name: "Lockbox Golden Pirate",
    signal: "Akkor jó, ha Golden értéket tudsz bankolni anélkül, hogy a következő két fightot elbuknád.",
    why: "A Bilgewater Breakout, Locked-up Mutineer és Enterprising Escapee Lockboxokat gyárt; a Maritime Extortionist és Hooktusk a kinyílt Golden lényeket valódi skálázássá alakítja.",
    cards: [
      { name: "Bilgewater Breakout", cardId: "BG36_520", tier: 2, type: "Pirate", attack: 3, health: 2, rules: "<b>Battlecry:</b> Kapsz egy Lockboxot. Ha már van, 1 körrel hamarabb nyílik.", note: "Korai Lockbox hozzáférés és gyorsítás." },
      { name: "Locked-up Mutineer", cardId: "BG36_521", tier: 3, type: "Pirate", attack: 6, health: 3, rules: "<b>Deathrattle:</b> Kapsz egy Lockboxot. Ha már van, 1 körrel hamarabb nyílik.", note: "Tempo test, ami a Lockbox időzítést is gyorsítja." },
      { name: "Enterprising Escapee", cardId: "BG36_523", tier: 4, type: "Pirate", attack: 6, health: 6, rules: "Miután elköltesz 5 aranyat, kapsz egy Lockboxot. Ha már van, 1 körrel hamarabb nyílik. <i>(5 Gold maradt!)</i>", note: "A normál economy köröket késleltetett Golden értékké alakítja." },
      { name: "Maritime Extortionist", cardId: "BG36_524", tier: 4, type: "Pirate", attack: 8, health: 8, rules: "+8/+8-a van minden kijátszott Golden lényed után <i>(bárhol is van)</i>.", note: "Payoff test, amikor a Lockbox Golden lények elkezdenek kinyílni." },
      { name: "Hooktusk, Master Marauder", cardId: "BG36_344", tier: 6, type: "Pirate", attack: 4, health: 4, rules: "Miután <b>Discover</b>ölsz egy lapot, adj a többi Pirate-odnak +1/+1-et. <i>(A kijátszott Golden lények javítják!)</i>", note: "Késői Pirate scaling, ami jutalmazza a Golden-count tervet." },
    ],
    commit: ["Két Lockbox forrás megvan hard roll előtt.", "Van elég tempó kivárni a késleltetett Golden lényeket.", "Van Golden-count payoff: Maritime Extortionist, Hooktusk vagy erős Discover/Trinket érték."],
    avoid: ["A ki nem nyílt Lockboxot jelenlegi combat statnak számolni.", "Nyomás vagy triple line nélkül túl korán feltörni az értéket.", "Pirate-ot force-olni gyors, büntető lobbyban."],
  },
  {
    tribe: "beast",
    grade: "A",
    name: "Tasty Lobster Fishbait Beast",
    signal: "Az egyik legtisztább creator-backed új build, ha ismételni tudod a Lobster Deathrattle-t.",
    why: "A Tasty Lobster javítja a jövőbeli Lobstereket, a Lurking Lionfish és Snarky Shark pedig Recruit Phase támadásokat kényszerít Fishbaitbe. A Hoarding Hyena és Deathstrider adja azt a Rally/Deathrattle loopot, amitől a build nem csak tempo, hanem scaling.",
    cards: [
      { name: "Tasty Lobster", cardId: "BG36_202", tier: 3, type: "Beast", attack: 1, health: 1, rules: "<b>Taunt.</b> <b>Deathrattle:</b> Adj két baráti Beastnek +1/+1-et. Javítsd a jövőbeli Tasty Lobstereidet.", note: "A scaling Deathrattle célpont, amire a creator buildek épülnek." },
      { name: "Lurking Lionfish", cardId: "BG36_201", tier: 2, type: "Beast", attack: 3, health: 4, rules: "<b>Activate (2):</b> Válassz egy lapot a Tavernben. Cseréld Fishbaitre, hogy a bal szélső Beasted megtámadja.", note: "Kontrollált bal szélső Beast támadás Recruit Phase-ben." },
      { name: "Snarky Shark", cardId: "BG36_206", tier: 4, type: "Beast", attack: 4, health: 5, rules: "Amikor eladod ezt, <b>Refresh</b>eli a Tavernt egy Fishbaittel. A bal szélső Beasted megtámadja.", note: "Eladás triggerből újabb kontrollált Fishbait támadás." },
      { name: "Hoarding Hyena", cardId: "BG36_210", tier: 5, type: "Beast", attack: 5, health: 6, rules: "<b>Rally:</b> Megidéz egy Tasty Lobstert.", note: "Rallyból Lobstert ad shop slot költés nélkül." },
      { name: "Deathstrider", cardId: "BG36_208", tier: 6, type: "Beast", attack: 10, health: 11, rules: "Miután egy baráti <b>Rally</b> lény támad, aktiváld a bal szélső <b>Deathrattle</b>-ödet.", note: "A Rally támadásokat ismételt bal szélső Deathrattle értékké alakítja." },
    ],
    commit: ["A korai Lobsterek már javultak vagy könnyen újraidézhetők.", "A bal szélső Beast szándékosan van pozicionálva Lionfish/Shark előtt.", "A Deathstrider értelmes bal szélső Deathrattle-t talál el, nem random utility testet."],
    avoid: ["Fishbait támadásokat rossz Beasttel megindítani laza board sorrend miatt.", "Lobstert egyszeri Tauntnak kezelni ismételt Deathrattle engine helyett.", "Azt hinni, hogy Venomous vagy combat-only szöveg viszi a Recruit Phase támadásokat."],
  },
  {
    tribe: "dragon",
    grade: "B",
    name: "Rally Dragonbreath",
    signal: "Creator jelek alapján jobb, mint az első olvasat; de továbbra is Rally retrigger kell a hard force-hoz.",
    why: "A Bronze Timewalker és Sky-hatch Runaway Chromadrake értéket generál és ismétel; a Crimson Vindicator adja a késői Mighty Dragonbreath payoffot, a Runic Arcanist pedig extra spell/combat scaling szöget nyit.",
    cards: [
      { name: "Bronze Timewalker", cardId: "BG36_242", tier: 4, type: "Dragon", attack: 2, health: 9, rules: "<b>Rally:</b> Kapsz egy véletlen <b>Chromadrake</b>-et.", note: "Season 14 Dragon setup darab." },
      { name: "Sky-hatch Runaway", cardId: "BG36_243", tier: 4, type: "Dragon", attack: 4, health: 7, rules: "<b>Activate (1):</b> Aktiváld egy baráti lény <b>Rally</b>-ját.", note: "Season 14 Dragon payoff darab." },
      { name: "Runic Arcanist", cardId: "BG36_245", tier: 4, type: "Dragon", attack: 3, health: 5, rules: "<b>Start of Combat:</b> Elcastolja a Shiny Ringet.", note: "Késői Dragon spell/Rally támogatás." },
      { name: "Crimson Vindicator", cardId: "BG36_241", tier: 6, type: "Dragon", attack: 8, health: 9, rules: "<b>Divine Shield</b>. <b>Rally:</b> Elcastolja a Mighty Dragonbreathet.", note: "Valódi T6 payoff Dragon/Rally spell boardokhoz." },
      { name: "Warpwing", cardId: "BG24_004", tier: 6, type: "Dragon", attack: 12, health: 4, rules: "<b>Immune</b>, amíg támad.", note: "Immune támadó carry." },
    ],
    commit: ["Rally trigger plusz ismétlési mód.", "Dragonbreath vagy Divine Shield átfedés már jelen van.", "Valódi late carry: Crimson Vindicator, Warpwing vagy erősen buffolt Chromadrake lánc."],
    avoid: ["Minden Dragon openert compnak nevezni.", "Túl sok generátor, kevés combat stat.", "Nem felismerni, mikor kell Runawaynek Rallyt másolnia közepes testként állás helyett."],
  },
  {
    tribe: "demon",
    grade: "C",
    name: "Demon Shop Stat Pivot",
    signal: "Pivotként játszható, első hard commitként kevésbé bizonyított.",
    why: "A korai közösségi olvasat szerint a Demonöknek vagy kiugróan erős shop stat, vagy cross-tribe segítség kell. Be tudják fejezni a lobbyt, de a motor kevésbé automatikus.",
    cards: [
      { name: "Deft Deserter", cardId: "BG36_621", tier: 5, type: "Demon", attack: 8, health: 8, rules: "<b>Activate (1):</b> Adj minden Tavernben lévő lénynek +8/+8-at és <b>Taunt</b>-ot, <b>Divine Shield</b>-et vagy <b>Windfury</b>-t.", note: "Season 14 Demon setup darab." },
      { name: "Imp-lusionist", cardId: "BG36_731", tier: 5, type: "Demon", attack: 6, health: 3, rules: "<b>Deathrattle:</b> Kapsz 2 Methodical Madness másolatot.", note: "Season 14 Demon value darab." },
      { name: "Eredar Escapist", cardId: "BG36_733", tier: 6, type: "Demon", attack: 5, health: 5, rules: "Miután a hősöd 4 sebzést kap, kapsz egy véletlen statadó Tavern spellt. <i>(4 maradt!)</i>", note: "Season 14 Demon payoff darab." },
    ],
    commit: ["Nagy Tavern statok már online vannak.", "Van elég HP puffer tempó- vagy életköltséghez.", "Gift/Trinket a shopokat skálázássá alakítja."],
    avoid: ["Csak a tribe tag alapján commitolni.", "Életet fizetni stabilizáló stat nélkül.", "Figyelmen kívül hagyni a scam és Divine Shield techet."],
  },
];

export const mechanics = [
  { name: "Dark Gift", value: "3 játék közben", detail: "A 3. körtől 3 aranyért Discoverölsz egy lényt Dark Gifttel párosítva; az ajánlatok a körök múlásával javulnak." },
  { name: "Activate", value: "Recruit Phase költés", detail: "Kattints egy Activate lényre a warbandedben, és fizesd ki az aranyköltségét körönként egyszer." },
  { name: "Lockbox", value: "Pirate késleltetett érték", detail: "A Pirate-ok Golden lényeket találhatnak, amelyek később nyílnak ki, hacsak nem nyitod őket korán." },
  { name: "Fishbait", value: "Beast recruit támadás", detail: "A Beastek Recruit Phase-ben is támadhatnak, ezért másképp kell megtervezni a setup köröket." },
];

export const giftTimeline: TimelineRow[] = [
  { turn: "3", offer: "Csak Tier 2", use: "Stabilizálás vagy korai irányjel; ne dobd el érte az egész economy kört." },
  { turn: "4", offer: "Tier 2-3", use: "Jó időpont tempo Giftre, ha gyenge a board vagy rossz a shop." },
  { turn: "5", offer: "Tier 3", use: "Első komolyabb setup kör; engine darabot vagy economy hidat keress." },
  { turn: "6", offer: "Tier 3-4", use: "Pivot jel: ha a Gift összeér egy már meglévő párral vagy trinket-iránnyal, commitálható." },
  { turn: "7", offer: "Tier 4", use: "Sok comp itt találja meg az első valódi motorját. Board előtt ne greedelj túl." },
  { turn: "8", offer: "Tier 4-5", use: "Erős power spike ablak; a legtöbb lobbiban innen már top 4 stabilizációt vársz." },
  { turn: "9", offer: "Tier 4-6", use: "High-roll keresés T6 payoffra, de csak akkor, ha az életerőd engedi." },
  { turn: "10+", offer: "Tier 5-6", use: "Finisher vagy tech keresés; a gyenge scalinget ilyenkor már nem menti meg önmagában." },
];

export const playbook: InfoBlock[] = [
  {
    title: "Mikor nyomj Dark Giftet?",
    body: "A Gift nem ingyenes tempo: 3 aranyért miniont és hatást veszel, ezért mindig a köröd legjobb három aranyas play-ével hasonlítsd össze.",
    points: [
      "Korán akkor jó, ha megállítja a vérzést vagy irányt ad egy üres boardnak.",
      "Középen akkor jó, ha létező engine-hez ad payoffot, nem csak új ötletet nyit.",
      "Későn akkor jó, ha T5/T6 payoffot, scamet vagy célzott techet keresel.",
    ],
  },
  {
    title: "Commit szabály",
    body: "Egy tribe tag nem engine. Akkor állj rá egy vonalra, ha legalább két darab ugyanazt a loopot erősíti.",
    points: [
      "Mech: spell + Magnetic payoff + end-of-turn vagy duplication hatás.",
      "Quilboar: Gem-minőség + Gem felhasználás + Choose One/Rally payoff.",
      "Murloc/Undead: triggerforrás és payoff egyszerre kell, külön-külön kevés.",
    ],
  },
  {
    title: "Gold menedzsment",
    body: "Season 14-ben az Activate, a Gift és a Tavern upgrade ugyanabból az aranyból versenyez. A kör elején számolj, ne a végén.",
    points: [
      "Activate képességet még vásárlás előtt értékeld, mert boardhelyet és célpontot is igényelhet.",
      "Ha Giftet nyomsz, előtte tisztítsd a boardot, hogy a típus-alapú ajánlatok ne torzuljanak.",
      "Ne rollolj 0 goldig úgy, hogy a kulcs Activate vagy Tavern upgrade kimarad.",
    ],
  },
];

export const glossary: InfoBlock[] = [
  {
    title: "Activate",
    body: "Recruit Phase-ben kattintható képesség, aranyköltséggel. Minden Activate képesség körönként egyszer használható.",
    points: ["Tervezd a célpontot.", "Számold bele a gold curve-be.", "A képesség csak akkor számít, ha a lény a warbandedben van."],
  },
  {
    title: "Rally",
    body: "Recruit Phase fókuszú triggercsomag, amely több Season 14 tribe-nál engine-darabot vagy value-t ad.",
    points: ["Jó, ha ismételhető.", "Gyenge, ha csak egyszeri value.", "Keresd azokat a lapokat, amelyek Rallyt újraindítanak."],
  },
  {
    title: "Lockbox és Fishbait",
    body: "A Lockbox késleltetett Golden érték, a Fishbait pedig Recruit Phase támadásokat nyit. Mindkettő setupot kér, nem puszta statot.",
    points: ["Lockboxnál életerő kell a várakozáshoz.", "Fishbaitnél támadási sorrend és célpont számít.", "Ne áldozd fel a stabil boardot puszta upside-ért."],
  },
];

export const boardStates: BoardState[] = [
  {
    title: "Mech Magnetic motor",
    stage: "Tavern 4-5 board",
    tribe: "mech",
    board: ["Spark Snapper", "Drone Duplicator", "Glambot", "két külön Magnetic célpont", "tempo Divine Shield/taunt"],
    hand: ["olcsó célzott Tavern spell", "tartalék Mech vagy economy spell"],
    goal: "Ne egyetlen óriást építs. A cél több külön Magnetic stack, amelyet Utility Drone vagy duplication effekt később megsokszoroz.",
    next: ["Használj spelleket olyan Mechre, amely túléli a következő fightot.", "Drone Duplicatort csak értelmes Magnetization előtt aktiváld.", "T6-on Utility Drone vagy további Magnetic payoff felé keress."],
  },
  {
    title: "Quilboar Choose One setup",
    stage: "Tavern 4-6 board",
    tribe: "quilboar",
    board: ["Thorned Trailblazer", "Gem Rat", "Bramble Tunneler", "egy fő Blood Gem célpont", "két rugalmas tempo slot"],
    hand: ["Choose One lap", "Blood Gemek", "lehetséges Gem Day"],
    goal: "Előbb a Gem-minőséget és a Choose One engine-t rakd össze, utána töltsd szélesen a boardot.",
    next: ["Trailblazer mellett a legjobb Choose One lapot játszd el először.", "Turbo Hogrider után a célzott Gem már board-wide érték.", "Ne tarts túl sok gyenge supportot, ha nincs carry."],
  },
  {
    title: "Undead Reborn trigger board",
    stage: "Tavern 5-6 board",
    tribe: "undead",
    board: ["Dead Bellringer", "Barrier Banshee", "Snazzy Phantom", "magas Attackú Reborn célpont", "jobb szélső Undead carry"],
    hand: ["Reborn vagy stat spell", "scam/taunt tech"],
    goal: "Recruit Phase-ben indíts Reborn triggereket, hogy combat előtt megkapd a Divine Shieldet és a jobb oldali Attack statot.",
    next: ["Bellringer célpontja ne a fontos payoff legyen.", "Phantom miatt ellenőrizd a jobb szélső Undeadet.", "Ha nincs túlélés, előbb taunt/scam slotot vegyél."],
  },
  {
    title: "Murloc spell-handbuff board",
    stage: "Tavern 4-5 board",
    tribe: "murloc",
    board: ["Twilight Tidehunter", "Shamanic Tidecaller", "Kelp Keeper", "Gearfin", "egy stabil combat test"],
    hand: ["bal szélső carry célpont", "1 aranyas Tavern spellek", "Battlecry minion"],
    goal: "A kéz bal szélső célpontját kontrollálva alakítsd a spell-gazdaságot folyamatos kéz- és boardbuffá.",
    next: ["Minden spell előtt ellenőrizd a kéz sorrendjét.", "Kelp Keeperrel csak valódi Battlecry értéket ismételj.", "Ha nincs spellforrás, ne force-old Murlocra."],
  },
  {
    title: "Beast Lobster Deathrattle board",
    stage: "Tavern 4-6 board",
    tribe: "beast",
    board: ["Tasty Lobster", "Lurking Lionfish", "Snarky Shark", "Hoarding Hyena", "bal szélső Beast támadó célpont", "Deathstrider setup"],
    hand: ["extra Beast", "Reborn/Deathrattle support", "Fishbaitnek fenntartott shop slot"],
    goal: "Javított Lobster Deathrattle-öket ismételj kontrollált Recruit Phase támadásokkal, majd Deathstriderrel alakítsd a Rally támadásokat további bal szélső Deathrattle triggerekké.",
    next: ["Minden Lionfish vagy Shark trigger előtt ellenőrizd, hogy a bal szélső Beast a tervezett támadó.", "Deathstrider után a legjobb Deathrattle legyen bal szélen.", "Ha a Lobster lánc még nem elég nagy, vegyél tempót scaling helyett."],
  },
  {
    title: "Lockbox Pirate bank",
    stage: "Tavern 3-5 board",
    tribe: "pirate",
    board: ["Bilgewater Breakout", "Locked-up Mutineer", "Enterprising Escapee", "ideiglenes taunt/scam", "Maritime Extortionist watch slot"],
    hand: ["ki nem nyílt Lockbox", "Golden payoff jelölt", "Discover vagy Tavern spell support"],
    goal: "Golden lényeket bankolj halál nélkül, majd a Golden countot Maritime Extortionist statba vagy Hooktusk scalingbe fordítsd.",
    next: ["Számold, hány kör van még, mire a Lockbox tényleg számít.", "Ne adj el combat statot csak egy második késleltetett boxért.", "Amint a Golden lények kinyílnak, bankolásból azonnal válts harci erőre."],
  },
];

export const buildRoutes: BuildRoute[] = [
  {
    title: "Stabilizáló Gift útvonal",
    tribe: "mech",
    opener: "Korai tempó minionokkal és olcsó spellekkel tartsd az HP-t, majd Turn 4-6 között Giftből keress directiont.",
    midgame: "Ha Glambot/Spark Snapper/Drone Duplicator vonal jön, kezdd szétosztani a Magnetic stackeket több testre.",
    late: "Utility Drone, Divine Shield és scam tech zárja le a boardot. A túl nagy single carry sebezhető.",
    pivots: ["Gearfin Murloc spell-vonalba átvezethet.", "Gyenge Magnetic shop esetén maradj tempo + Gift discovery módban.", "Ha nincs célzott spell, ne commitolj Glambotra."],
  },
  {
    title: "Greedelt Tier 4-5 engine route",
    tribe: "quilboar",
    opener: "Ne csak Gemet gyűjts: Gem-minőség vagy Choose One setup nélkül a korai Gemek elfogynak.",
    midgame: "Trailblazer, Gem Rat és Bramble Tunneler együtt nyitják meg a valódi engine-t. Turbo Hogrider a payoff.",
    late: "Wide board Gem value, Divine Shield és tech slotok. A Gem motor mellé kell combat túlélés.",
    pivots: ["Ha csak Gem Rat van, játssz tempo irányt.", "Trailblazer után keress Choose One lapokat, ne random statot.", "Giftből tribe reward vagy T6 payoff az ideális."],
  },
  {
    title: "Trigger-first Undead route",
    tribe: "undead",
    opener: "Korán ne ragaszkodj Undeadhez, amíg nincs trigger és payoff együtt.",
    midgame: "Dead Bellringer adja a Recruit Phase triggert; Barrier Banshee és Snazzy Phantom fizet érte.",
    late: "A board akkor működik, ha combat előtt már statot és shieldet generált. A jobb szélső carry legyen szándékos.",
    pivots: ["Ha Bellringer nincs meg, ne tarts túl sok közepes Undeadet.", "Magas Attack célpont nélkül Phantom gyenge.", "Scam tech kell a nagy stat boardok ellen."],
  },
  {
    title: "Spell economy Murloc route",
    tribe: "murloc",
    opener: "Olcsó spellek és kézben tartott carry nélkül a Murloc engine nem indul.",
    midgame: "Twilight Tidehunter és Shamanic Tidecaller a spellhasználatot kéz- és boardbuffá alakítja.",
    late: "Kelp Keeper + Battlecry, Gearfin spelltermelés, majd scam/poison jellegű tech a nagy statok ellen.",
    pivots: ["Gearfin Mechhez is hidat ad.", "Ha kézpozíciót nem tudod tartani, válts board-scalingre.", "Spell nélküli Murloc shop csak tempo, nem comp."],
  },
  {
    title: "Tasty Lobster Beast route",
    tribe: "beast",
    opener: "Korai Tasty Lobstert akkor vegyél, ha közben tudod tartani az HP-t; az első példányok számítanak, mert javítják a jövőbeli Lobstereket.",
    midgame: "Lurking Lionfish és Snarky Shark a shop/Fishbait döntéseket ismételhető Recruit Phase támadássá alakítja. A bal szélső Beast pozíciója legyen szándékos.",
    late: "Hoarding Hyena Lobstert ad, Deathstrider ismétli a bal szélső Deathrattle-t, Cage Gnawer vagy combat tech pedig ölő nyomássá alakítja a láncot.",
    pivots: ["Ha a Lobsterek nem javultak, játssz Beast tempót Deathstrider force helyett.", "Treasure Parrot Beast/Pirate Golden-value hidat ad.", "Nagy cleave/scam ellen előbb a Deathrattle sorrendet védd, csak utána vegyél több scalinget."],
  },
  {
    title: "Lockbox Golden Pirate route",
    tribe: "pirate",
    opener: "Bilgewater Breakout vagy Mutineer tempo plusz jövőbeli érték; a ki nem nyílt Lockbox nem board strength.",
    midgame: "Enterprising Escapee jutalmazza a normál költési köröket. Maritime Extortionist az első valódi payoff, amikor a Golden lények kinyílnak.",
    late: "Hooktusk és Discover láncok a Golden-count scalinget boarddá alakítják, de az útvonalnak azonnali combat stat vagy scam slot is kell.",
    pivots: ["Ha gyors a lobby, korábban cashoutolj.", "Captain Cookie/Gearfin átvezethet Murloc spell economyba.", "Golden payoff nélkül hagyd abba a Pirate rollt, és játszd a legerősebb discovered testeket."],
  },
];

export const referenceNotes: ReferenceNote[] = [
  {
    label: "Blizzard 36.2 patch notes",
    kind: "Hivatalos kártyapool",
    summary: "Megerősíti a Season 14 alapjait: Dark Gifts, Activate, bővített Trinket pool, új hősök, Lockbox, Fishbait és a nagy Battlegrounds pool-frissítés.",
    href: "https://hearthstone.blizzard.com/en-gb/news/24290432/362-patch-notes",
  },
  {
    label: "Season 14 announcement",
    kind: "Hivatalos rendszerleírás",
    summary: "Leírja, hogy a Dark Gift gomb Turn 3-tól 3 aranyba kerül, körönként egyszer használható, összesen háromszor játék közben, és az ajánlatok erősödnek.",
    href: "https://playhearthstone.com/en-us/blog/24290433/",
  },
  {
    label: "HSBG 36.2 database",
    kind: "Vizuális card-pool referencia",
    summary: "A patch vizuális összesítése alapján a Season 14 nagy pool-csere: sok új, visszatérő, módosított és kivett Battlegrounds elem.",
    href: "https://hsbg.cards/patch-notes/36.2",
  },
  {
    label: "Community and creator videos",
    kind: "Korai meta olvasat",
    summary: "A közösségi és videós beszélgetések főleg a Dark Gift timingot, Mech Magnetic vonalat, Quilboar/Undead highrollokat és a nagy Gift-variance-t emelik ki. Ezt irányjelként, nem win-rate adatként kezeljük.",
    href: "https://www.youtube.com/results?search_query=Hearthstone+Battlegrounds+Season+14+Dark+Gifts+guide",
  },
  {
    label: "Tasty Lobster creator cluster",
    kind: "Videó + stat irányjel",
    summary: "A dogdog Beast videó és a HSReplay Tasty Lobstah comp oldala egyaránt arra mutat, hogy az ismételt Lobster Deathrattle valódi Season 14 route, nem csak Fishbait gimmick.",
    href: "https://www.youtube.com/watch?v=wi_nvouGX0Y",
  },
  {
    label: "Dragon és Mech creator check",
    kind: "Creator route validáció",
    summary: "Friss Sevel videók alapján a Mech továbbra is hiteles Magnetic engine, a Dragon pedig kapott egy új Rally/Dragonbreath vonalat, de mindkettő pontos engine-darabokat kér.",
    href: "https://www.youtube.com/watch?v=dCwe93sXIiM",
  },
];

export const communityPulse: CommunityPulse[] = [
  {
    title: "A Tasty Lobster Beast most már valódi route",
    signal: "Friss creator videók, a HSReplay Tasty Lobstah oldala és a HSBG card pool ugyanarra mutat: ismételt Lobster Deathrattle, Hoarding Hyena és Deathstrider.",
    confidence: "medium",
    takeaway: "A Beast Fishbait-jegyzetből A-tier route lett, de csak akkor ajánlott, ha ismételni tudod a Lobster triggereket és kontrollálod a bal szélső pozíciót.",
    sources: ["dogdog Tasty Lobster Beast videó", "HSReplay Tasty Lobstah comp oldal", "HSBG 36.2 vizuális adatbázis"],
  },
  {
    title: "Quilboar, Beast és Undead kapja a legtöbb hype-ot",
    signal: "A creator/video találatok és Reddit beszélgetések alapján a Beast Lobster, Quilboar és Undead a legláthatóbb high-ceiling csomag.",
    confidence: "medium",
    takeaway: "A Mech és Quilboar marad felül engine-tisztaság miatt, de a Beast teljesebb route-ot kapott, mert creator és comp-page jel is támogatja.",
    sources: ["YouTube Season 14 guide keresés", "r/BobsTavern friss feed"],
  },
  {
    title: "A Reddit feed inkább highrollokat mutat, nem stabil tierlistát",
    signal: "A friss r/BobsTavern feedben sok Final Board / Highlight poszt látszik: óriás minionok, Naga highlightok, trinket/bug beszélgetések és extrém boardok.",
    confidence: "high",
    takeaway: "A közösségi screenshotokból ne olvassunk win-rate adatot. Hasznosak board-state és ceiling példának, de nem elégségesek comp erősorrendhez.",
    sources: ["r/BobsTavern friss feed"],
  },
  {
    title: "Dark Gift variance és döntési idő központi téma",
    signal: "A hivatalos és közösségi források is a 3 aranyas, háromszor használható Gift döntést emelik ki; Redditen párhuzamosan megjelennek kliens/idő/animáció panaszok.",
    confidence: "high",
    takeaway: "A stratégia oldalon továbbra is a Gift előtti boardtisztítás, gold számolás és gyors döntéshozatal a legfontosabb általános tanács.",
    sources: ["Blizzard Season 14 bejelentés", "HearthPwn 36.2 patch jegyzetek", "r/BobsTavern friss feed"],
  },
  {
    title: "A Dragon játszhatóbb, mint az első pass mutatta",
    signal: "Egy friss Dragon fókuszú creator videó és a hivatalos card pool is támogatja a Rally retrigger + Mighty Dragonbreath vonalat.",
    confidence: "low",
    takeaway: "Dragon marad B-tier erősebb adat nélkül, de a route szövege már valódi Crimson Vindicator vonalként kezeli, nem generic Warpwing fallbackként.",
    sources: ["Sevel Dragon build videó", "HSBG 36.2 vizuális adatbázis"],
  },
  {
    title: "Naga és Demon inkább polarizált, mint stabil",
    signal: "A feedben Naga highlightok és Demon/Elemental balance jellegű beszélgetések is látszanak, de kevesebb stabil route bizonyíték van, mint Mech/Quilboar/Beast/Undead esetén.",
    confidence: "low",
    takeaway: "Naga és Demon maradjon alacsonyabb biztonságú ajánlás: jó highroll/pivot lehet, de ne legyen elsődleges force terv.",
    sources: ["r/BobsTavern friss feed"],
  },
];

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-08-06",
    title: "Mélyebb creator és card-pool pass",
    summary: "A guide frissült friss Season 14 videók, HSReplay Tasty Lobstah oldal, HSBG kártyaszövegek és aktuális közösségi feed alapján.",
    changes: [
      "A Beast Fishbait jegyzetből Tasty Lobster Deathrattle route lett Lionfish, Shark, Hyena és Deathstrider darabokkal.",
      "A Pirate két dual-type lap helyett valódi Lockbox Golden route-ot kapott.",
      "A Dragon tanács Crimson Vindicator és Rally/Dragonbreath pozicionálással frissült.",
      "Bekerült Beast és Pirate board state, valamint build route.",
    ],
  },
  {
    date: "2026-08-06",
    title: "Kompakt tavern strategy UI redesign",
    summary: "Az oldal kompaktabb, sötét strategy-desk megjelenést kapott kevesebb üres térrel, fix szélességű card specimenekkel és kék gradient nélkül.",
    changes: [
      "A túl nagy, üres hero és a világos papír gimmick kikerült.",
      "A kékes panel/hero gradient kikerült, a felület charcoal tavern tónusra váltott.",
      "A filter többé nem takarja ki a comp tartalmat scroll közben.",
      "A desktop comp kártyák fix szélességű gridbe rendeződnek, ezért az egykártyás compok sem nyúlnak szét.",
    ],
  },
  {
    date: "2026-08-06",
    title: "Changelog és közösségi frissítés",
    summary: "Az oldal kapott egy követhető változásnaplót, és frissült a Season 14 közösségi olvasata.",
    changes: [
      "Új Közösségi pulzus szekció a Reddit és creator jelek bizalmi szintjeivel.",
      "HearthPwn, r/BobsTavern friss feed és YouTube guide keresés bekerült a források közé.",
      "A közösségi jeleket különválasztottuk a hivatalos patchadatoktól és win-rate adatként nem kezeljük.",
    ],
  },
  {
    date: "2026-08-05",
    title: "Többoldalas Season 14 guide",
    summary: "Az eredeti infografika teljes segédoldallá bővült külön áttekintés, comp, stratégia és forrás oldalakkal.",
    changes: [
      "A guide több oldalra váltott HU és EN útvonalakkal.",
      "Bekerültek a board state-ek, build route-ok, stratégiai playbookok és referenciajegyzetek.",
      "A fő navigáció és nyelvváltó minden oldalon elérhető lett.",
    ],
  },
  {
    date: "2026-08-05",
    title: "Comp kártyák és szűrés",
    summary: "A comp nézet teljes Battlegrounds-kártya jellegű lapokat és többválasztós tribe szűrést kapott.",
    changes: [
      "A kártyaképek mellé bekerült a Tavern tier, típus, attack/health, szabályszöveg és meta jegyzet.",
      "A filter több tribe-ot tud egyszerre kijelölni.",
      "A kártyaképek HearthstoneJSON render/art URL-ekből töltődnek.",
    ],
  },
  {
    date: "2026-08-05",
    title: "Magyar és angol tartalom",
    summary: "A site külön magyar és angol oldalakkal, lokalizált navigációval és szövegekkel indult el.",
    changes: [
      "Magyar fordítás készült az alap útmutatóhoz.",
      "Angol route-ok és nyelvváltó kerültek a site-ra.",
      "Az overview oldal gyors meta snapshotot és főoldal linkeket kapott.",
    ],
  },
];
