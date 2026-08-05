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

export const updated = "2026-08-05";

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
    name: "Lockbox Tempo Pirate",
    signal: "Késleltetett Golden payoffra és tempómenedzsmentre játszik.",
    why: "A Season 14 Pirate-ok Lockboxokat találhatnak, amelyek később nyílnak, hacsak nem töröd fel őket korán; a dual-type darabok, mint a Treasure Parrot és Captain Cookie, rugalmas értéket adnak.",
    cards: [
      { name: "Treasure Parrot", cardId: "BG36_763", tier: 3, type: "Beast/Pirate", attack: 5, health: 5, rules: "Miután ez 40 sebzést kioszt, kapsz egy Golden Touchot. <i>(40 maradt!)</i>", note: "Sebzésquest, ami Golden Touch jutalmat ad." },
      { name: "Captain Cookie", cardId: "BG36_760", tier: 4, type: "Murloc/Pirate", attack: 5, health: 3, rules: "<b>Deathrattle:</b> Kapsz egy Chef's Choice-ot.", note: "Deathrattle: Chef's Choice érték." },
    ],
    commit: ["Korai tempó, ami hagyja beérni a Lockboxokat.", "A lobby nem bünteti túl a késleltetett Golden értéket.", "Dual-type szinergiák Murloc vagy Beast shopokból."],
    avoid: ["Túl korán feltörni a késleltetett értéket nyomás nélkül.", "A Lockbox értéket azonnali statként kezelni.", "Várakozás közben elhanyagolni a harci erőt."],
  },
  {
    tribe: "beast",
    grade: "B",
    name: "Fishbait Recruit Támadás",
    signal: "Nagy upside, ha kontrollálni tudod a Recruit Phase támadásokat.",
    why: "A Fishbait lehetővé teszi, hogy Beastek Recruit Phase-ben támadjanak, ami szokatlan combat előtti jutalmakat nyit, és a Venomous szöveg csak combatban számít.",
    cards: [
      { name: "Treasure Parrot", cardId: "BG36_763", tier: 3, type: "Beast/Pirate", attack: 5, health: 5, rules: "Miután ez 40 sebzést kioszt, kapsz egy Golden Touchot. <i>(40 maradt!)</i>", note: "Beast/Pirate híd Golden értékhez." },
    ],
    commit: ["Fishbait hozzáférés plusz erős támadó célpont.", "Deathrattle vagy sebzés-alapú jutalmak.", "Elég életerő a setup körök túlélésére."],
    avoid: ["Kontrollálatlan támadási sorrend.", "Azt feltételezni, hogy a Venomous combaton kívül is működik.", "Payoff előtt túl erősen commitolni."],
  },
  {
    tribe: "dragon",
    grade: "B",
    name: "Rally Dragonbreath",
    signal: "Stabil, ha megjönnek a Rally payoffok; kevésbé robbanékony, mint a Mech vagy Quilboar.",
    why: "A Season 14 Dragon támogatás Rallyra, Dragon-generálásra és Divine Shield átfedésre épít. A Warpwing továbbra is hiteles combat carry.",
    cards: [
      { name: "Bronze Timewalker", cardId: "BG36_242", tier: 4, type: "Dragon", attack: 2, health: 9, rules: "<b>Rally:</b> Kapsz egy véletlen <b>Chromadrake</b>-et.", note: "Season 14 Dragon setup darab." },
      { name: "Sky-hatch Runaway", cardId: "BG36_243", tier: 4, type: "Dragon", attack: 4, health: 7, rules: "<b>Activate (1):</b> Aktiváld egy baráti lény <b>Rally</b>-ját.", note: "Season 14 Dragon payoff darab." },
      { name: "Runic Arcanist", cardId: "BG36_245", tier: 4, type: "Dragon", attack: 3, health: 5, rules: "<b>Start of Combat:</b> Elcastolja a Shiny Ringet.", note: "Késői Dragon spell/Rally támogatás." },
      { name: "Warpwing", cardId: "BG24_004", tier: 6, type: "Dragon", attack: 12, health: 4, rules: "<b>Immune</b>, amíg támad.", note: "Immune támadó carry." },
    ],
    commit: ["Több Rally trigger vagy Dragon spell érték.", "Védett carry Divine Shield támogatással.", "Trinket vagy Gift közvetlen Dragon jutalommal."],
    avoid: ["Egy korai Dragonből force-olni.", "Túl sok generátor, kevés combat stat.", "Elrontani a bal/jobb oldali board pozíciókat."],
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
