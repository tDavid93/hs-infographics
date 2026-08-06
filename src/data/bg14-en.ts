import type { BoardState, BuildRoute, CardRef, ChangelogEntry, CommunityPulse, Comp, InfoBlock, ReferenceNote, TimelineRow, Tribe } from "./bg14";

export const updated = "2026-08-06";

export const sources = [
  { label: "Blizzard 36.2 patch notes", href: "https://hearthstone.blizzard.com/en-gb/news/24290432/362-patch-notes" },
  { label: "Blizzard Season 14 announcement", href: "https://playhearthstone.com/en-us/blog/24290433/" },
  { label: "HearthPwn 36.2 patch notes", href: "https://www.hearthpwn.com/news/12583-36-2-patch-notes-battlegrounds-season-14-in-game" },
  { label: "HSBG 36.2 visual database", href: "https://hsbg.cards/patch-notes/36.2" },
  { label: "HearthstoneJSON image API", href: "https://hearthstonejson.com/docs/images.html" },
  { label: "r/BobsTavern early discussion", href: "https://www.reddit.com/r/BobsTavern/comments/1v8664a/announcing_battlegrounds_season_14_dark_gifts_of/" },
  { label: "r/BobsTavern live feed", href: "https://www.reddit.com/r/BobsTavern/" },
  { label: "YouTube Season 14 guide search", href: "https://www.youtube.com/results?search_query=Hearthstone+Battlegrounds+Season+14+Dark+Gifts+guide" },
];

export const tribes: { key: Tribe | "all"; label: string }[] = [
  { key: "all", label: "All" },
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

const cards = {
  glambot: { name: "Glambot", cardId: "BG36_853", tier: 5, type: "Mech", attack: 6, health: 6, rules: "Whenever you cast a spell on a Mech, <b>Magnetize</b> a 6/6 Satellite to it.", note: "A spell on a Mech creates a 6/6 Satellite." },
  sparkSnapper: { name: "Spark Snapper", cardId: "BG36_851", tier: 4, type: "Mech", attack: 3, health: 3, rules: "Whenever you play a Mech, <b>Magnetize</b> a 3/3 Satellite to it and improve this.", note: "Mech plays create Satellites and improve future ones." },
  droneDuplicator: { name: "Drone Duplicator", cardId: "BG36_506", tier: 4, type: "Mech", attack: 4, health: 4, rules: "<b>Activate (1):</b> The next <b>Magnetization</b> to this minion this turn is doubled.", note: "Activate doubles the next Magnetization." },
  utilityDrone: { name: "Utility Drone", cardId: "BG26_152", tier: 6, type: "Mech", attack: 4, health: 6, rules: "At the end of your turn, give your minions +4/+4 for each <b>Magnetization</b> they have.", note: "End-of-turn scaling for every Magnetic stack." },
  thornedTrailblazer: { name: "Thorned Trailblazer", cardId: "BG31_327", tier: 4, type: "Quilboar", attack: 4, health: 5, rules: "One <b>Choose One</b> card each turn has both effects combined. <i>(1 left!)</i>", note: "Choose One cards can get both effects." },
  gemRat: { name: "Gem Rat", cardId: "BG31_326", tier: 3, type: "Quilboar", attack: 4, health: 4, rules: "At the end of your turn, get a Gem Day.", note: "Gem Day support and steady Gem flow." },
  turboHogrider: { name: "Turbo Hogrider", cardId: "BG31_323", tier: 6, type: "Quilboar", attack: 5, health: 7, rules: "After you play a <b>Choose One</b> card, this plays a <b>Blood Gem</b> on all your other Quilboar.", note: "Turns targeted Gem value into wide board scaling." },
  brambleTunneler: { name: "Bramble Tunneler", cardId: "BG36_331", tier: 4, type: "Quilboar", attack: 3, health: 6, rules: "<b>Rally:</b> Get a random <b>Choose One</b> card.", note: "Season 14 Quilboar setup piece." },
  twilightTidehunter: { name: "Twilight Tidehunter", cardId: "BG36_703", tier: 4, type: "Murloc", attack: 3, health: 6, rules: "Whenever you cast a spell on this, give the left-most minion in your hand +6/+6.", note: "Spells buff the left-most hand target." },
  shamanicTidecaller: { name: "Shamanic Tidecaller", cardId: "BG36_704", tier: 5, type: "Murloc", attack: 5, health: 7, rules: "Whenever you cast a spell on a Murloc, give Murlocs in your hand and board +3/+3.", note: "Spells buff Murlocs in hand and on board." },
  kelpKeeper: { name: "Kelp Keeper", cardId: "BG36_701", tier: 4, type: "Murloc", attack: 5, health: 5, rules: "<b>Activate (1):</b> Trigger a friendly minion's <b>Battlecry</b>.", note: "Activate repeats a friendly Battlecry." },
  gearfin: { name: "Gearfin", cardId: "BG36_764", tier: 4, type: "Mech/Murloc", attack: 6, health: 5, rules: "At the end of your turn, get two 1-Cost Tavern spells.", note: "Generates two cheap Tavern spells each turn." },
  deadBellringer: { name: "Dead Bellringer", cardId: "BG36_511", tier: 4, type: "Undead", attack: 3, health: 6, rules: "<b>Activate (1):</b> Give a different friendly Undead <b>Reborn</b>. Then destroy it to gain +4/+4.", note: "Recruit-phase Reborn trigger plus permanent stats." },
  barrierBanshee: { name: "Barrier Banshee", cardId: "BG36_514", tier: 5, type: "Undead", attack: 7, health: 7, rules: "After a friendly minion is <b>Reborn</b>, gain <b>Divine Shield</b> and +7/+7.", note: "Reborn triggers create survivability and stats." },
  snazzyPhantom: { name: "Snazzy Phantom", cardId: "BG36_515", tier: 6, type: "Undead", attack: 6, health: 8, rules: "After a friendly minion is <b>Reborn</b>, give stats equal to its Attack to your right-most Undead.", note: "Feeds Attack stats into the right-most Undead." },
  airBaller: { name: "Air Baller", cardId: "BG36_181", tier: 5, type: "Elemental", attack: 7, health: 7, rules: "When you sell this, give your minions +2/+2. Improve your future Ballers.", note: "Sell for wide stats and stronger future Ballers." },
  unboundTempest: { name: "Unbound Tempest", cardId: "BG36_352", tier: 6, type: "Elemental", attack: 3, health: 12, rules: "After you play 3 Elementals, gain the stats of the highest-Health minion in the Tavern. <i>(3 left!)</i>", note: "Every 3 Elementals converts Tavern Health into scaling." },
  moatCustodian: { name: "Moat Custodian", cardId: "BG36_351", tier: 6, type: "Elemental", attack: 4, health: 10, rules: "<b>Rally:</b> Your Elementals give an extra +1/+2 this game.", note: "Rally improves Elemental buffs for the rest of the game." },
  livingPrison: { name: "Living Prison", cardId: "BG36_180", tier: 4, type: "Elemental", attack: 4, health: 5, rules: "<b>Activate (1):</b> Gain the stats of the next minion you buy this turn.", note: "Activate copies the next buy's stats." },
  cageyConjurer: { name: "Cagey Conjurer", cardId: "BG36_508", tier: 3, type: "Naga", attack: 6, health: 4, rules: "<b>Activate (1):</b> Cast a random Tavern spell <i>(targets this if possible)</i>.", note: "Activate casts a random Tavern spell." },
  torrentialRuiner: { name: "Torrential Ruiner", cardId: "BG36_622", tier: 6, type: "Naga", attack: 3, health: 3, rules: "Whenever you cast a spell on a Naga, give your minions +3/+3.", note: "Naga-targeted spells become board-wide stats." },
  treasureParrot: { name: "Treasure Parrot", cardId: "BG36_763", tier: 3, type: "Beast/Pirate", attack: 5, health: 5, rules: "Once this deals 40 damage, get a Golden Touch. <i>(40 left!)</i>", note: "Damage quest that pays out with Golden Touch." },
  captainCookie: { name: "Captain Cookie", cardId: "BG36_760", tier: 4, type: "Murloc/Pirate", attack: 5, health: 3, rules: "<b>Deathrattle:</b> Get a Chef's Choice.", note: "Deathrattle value through Chef's Choice." },
  bronzeTimewalker: { name: "Bronze Timewalker", cardId: "BG36_242", tier: 4, type: "Dragon", attack: 2, health: 9, rules: "<b>Rally:</b> Get a random <b>Chromadrake</b>.", note: "Season 14 Dragon setup piece." },
  skyHatchRunaway: { name: "Sky-hatch Runaway", cardId: "BG36_243", tier: 4, type: "Dragon", attack: 4, health: 7, rules: "<b>Activate (1):</b> Trigger a friendly minion's <b>Rally</b>.", note: "Season 14 Dragon payoff piece." },
  runicArcanist: { name: "Runic Arcanist", cardId: "BG36_245", tier: 4, type: "Dragon", attack: 3, health: 5, rules: "<b>Start of Combat:</b> Cast Shiny Ring.", note: "Late Dragon spell/Rally support." },
  warpwing: { name: "Warpwing", cardId: "BG24_004", tier: 6, type: "Dragon", attack: 12, health: 4, rules: "<b>Immune</b> while attacking.", note: "Immune attacking carry." },
  deftDeserter: { name: "Deft Deserter", cardId: "BG36_621", tier: 5, type: "Demon", attack: 8, health: 8, rules: "<b>Activate (1):</b> Give all minions in the Tavern +8/+8 and <b>Taunt</b>, <b>Divine Shield</b>, or <b>Windfury</b>.", note: "Season 14 Demon setup piece." },
  impLusionist: { name: "Imp-lusionist", cardId: "BG36_731", tier: 5, type: "Demon", attack: 6, health: 3, rules: "<b>Deathrattle:</b> Get 2 copies of Methodical Madness.", note: "Season 14 Demon value piece." },
  eredarEscapist: { name: "Eredar Escapist", cardId: "BG36_733", tier: 6, type: "Demon", attack: 5, health: 5, rules: "After your hero takes 4 damage, get a random Tavern spell that gives stats. <i>(4 left!)</i>", note: "Season 14 Demon payoff piece." },
} satisfies Record<string, CardRef>;

export const comps: Comp[] = [
  {
    tribe: "mech",
    grade: "S",
    name: "Spell Magnetize Mech",
    signal: "Best when the lobby gives cheap targeted Tavern spells.",
    why: "Glambot and Spark Snapper turn normal spell or Mech actions into separate Magnetic bodies, then Utility Drone multiplies the end-of-turn stats.",
    cards: [cards.glambot, cards.sparkSnapper, cards.droneDuplicator, cards.utilityDrone],
    commit: ["Two real Magnetize payoffs by Tavern 4-5.", "Spell economy or Gearfin-style spell generation.", "A board that can split Magnetic buffs across several bodies."],
    avoid: ["Stacking every Magnetic on one minion into hard removal.", "Taking Glambot without spell access.", "Skipping economy for a perfect T6 search."],
  },
  {
    tribe: "quilboar",
    grade: "S",
    name: "Choose One Blood Gems",
    signal: "Strongest when you can improve Gem quality before spamming Gems.",
    why: "Trailblazer and Choose One support turn targeted Gems into wide scaling. The line still needs Gem quality; raw Gem generation is not enough.",
    cards: [cards.thornedTrailblazer, cards.gemRat, cards.turboHogrider, cards.brambleTunneler],
    commit: ["Gem quality engine plus Trailblazer or Hogrider.", "Enough hand space and gold to buy Gem support.", "Dark Gift or Trinket that rewards your main type."],
    avoid: ["Counting temporary Gems as scaling.", "Holding weak tempo while waiting for one exact T6.", "Overfilling the board with support and no carry."],
  },
  {
    tribe: "murloc",
    grade: "A",
    name: "Spell Handbuff Murloc",
    signal: "Best when spells are cheap and hand position is controlled.",
    why: "Twilight Tidehunter and Shamanic Tidecaller reward repeated spell casts; Kelp Keeper and Gearfin add Battlecry and spell velocity.",
    cards: [cards.twilightTidehunter, cards.shamanicTidecaller, cards.kelpKeeper, cards.gearfin],
    commit: ["Reliable spell generation.", "A carry parked correctly in hand.", "Battlecries worth repeating with Kelp Keeper."],
    avoid: ["Accidentally changing the left-most hand target.", "Too many handbuff pieces and no board strength.", "Forcing from one Tidehunter without spells."],
  },
  {
    tribe: "undead",
    grade: "A",
    name: "Reborn Recruit Triggers",
    signal: "Works when Reborn actions happen before combat, not only during combat.",
    why: "Dead Bellringer gives Recruit Phase Reborn triggers, Barrier Banshee turns them into survivability, and Snazzy Phantom converts Attack into a right-side carry.",
    cards: [cards.deadBellringer, cards.barrierBanshee, cards.snazzyPhantom],
    commit: ["Bellringer plus at least one real payoff.", "A high-Attack Reborn target or scaling target.", "Room to manage right-most Undead positioning."],
    avoid: ["Putting the wrong minion beside Phantom lines.", "Buying utility bodies instead of damage.", "Assuming combat Reborn alone is enough."],
  },
  {
    tribe: "elemental",
    grade: "A",
    name: "Elemental Cycle Baller",
    signal: "Wants economy, board space, and repeated Elemental play/sell turns.",
    why: "Air Baller gives immediate wide stats on sale, while Unbound Tempest and Moat Custodian reward repeated Elemental play patterns over multiple turns.",
    cards: [cards.airBaller, cards.unboundTempest, cards.moatCustodian, cards.livingPrison],
    commit: ["Good economy and a clear cycle turn.", "Baller or Tempest before spending heavily.", "Shop buffs or Dark Gifts that make bought bodies larger."],
    avoid: ["Cycling with no gold engine.", "Freezing weak shops just for type count.", "Mistaking one big Living Prison turn for a full comp."],
  },
  {
    tribe: "naga",
    grade: "B",
    name: "Spell Naga Board Buff",
    signal: "Good in spell-heavy lobbies, fragile if spells are contested.",
    why: "Cagey Conjurer creates spell triggers and Torrential Ruiner pays those triggers off with board stats, but the comp still needs enough Naga density.",
    cards: [cards.cageyConjurer, cards.torrentialRuiner],
    commit: ["Multiple spell-on-minion triggers.", "Naga bodies that can receive targeted spells.", "A secondary carry in case Ruiner arrives late."],
    avoid: ["Buying random spells that cannot target your board.", "Keeping weak Naga only for type count.", "Rolling for Ruiner from a losing position."],
  },
  {
    tribe: "pirate",
    grade: "B",
    name: "Lockbox Tempo Pirate",
    signal: "Plays for delayed Golden payoff and tempo management.",
    why: "Season 14 Pirates can uncover Lockboxes that unlock later unless you break them open early; dual-type pieces add flexible value.",
    cards: [cards.treasureParrot, cards.captainCookie],
    commit: ["Early tempo that lets Lockboxes mature.", "A lobby where delayed Golden value is not punished.", "Dual-type synergies from Murloc or Beast shops."],
    avoid: ["Breaking delayed value too early without pressure.", "Treating Lockbox value as immediate stats.", "Ignoring combat strength while waiting."],
  },
  {
    tribe: "beast",
    grade: "B",
    name: "Fishbait Recruit Attacks",
    signal: "High upside when Recruit Phase attacks are controllable.",
    why: "Fishbait lets Beasts attack in the Recruit Phase, creating unusual pre-combat rewards and making Venomous wording matter only once combat begins.",
    cards: [{ ...cards.treasureParrot, note: "A Beast/Pirate bridge into Golden value." }],
    commit: ["Fishbait access plus strong attack target.", "Deathrattle or on-damage rewards.", "Enough health to spend turns assembling setup."],
    avoid: ["Uncontrolled attack order.", "Assuming Venomous works outside combat.", "Overcommitting before payoff is visible."],
  },
  {
    tribe: "dragon",
    grade: "B",
    name: "Rally Dragonbreath",
    signal: "Stable if you hit Rally payoffs; less explosive than Mech or Quilboar.",
    why: "Season 14 Dragon support leans into Rally, Dragon generation, and Divine Shield overlap. Warpwing remains a credible combat carry.",
    cards: [cards.bronzeTimewalker, cards.skyHatchRunaway, cards.runicArcanist, cards.warpwing],
    commit: ["Multiple Rally triggers or Dragon spell value.", "A protected carry with Divine Shield support.", "Trinket or Gift that rewards Dragons directly."],
    avoid: ["Forcing from one early Dragon.", "Too many generators and no combat stats.", "Missing board order for left/right effects."],
  },
  {
    tribe: "demon",
    grade: "C",
    name: "Demon Shop Stat Pivot",
    signal: "Playable as a pivot, less proven as the first hard commit.",
    why: "The early community read is that Demons need either unusually strong shop stats or cross-tribe help. They can finish lobbies, but the engine is less automatic.",
    cards: [cards.deftDeserter, cards.impLusionist, cards.eredarEscapist],
    commit: ["Large Tavern stats already online.", "Health buffer to spend HP or tempo.", "Gift/Trinket that turns shops into scaling."],
    avoid: ["Committing from tribe tag alone.", "Paying life with no stabilizing stats.", "Ignoring scam and Divine Shield tech."],
  },
];

export const mechanics = [
  { name: "Dark Gift", value: "3 per game", detail: "Starting Turn 3, spend 3 Gold to Discover a minion paired with a Dark Gift; offers improve as turns pass." },
  { name: "Activate", value: "Recruit-phase spend", detail: "Click an Activate minion in your warband and pay its Gold cost once per turn." },
  { name: "Lockbox", value: "Pirate delayed value", detail: "Pirates can find Golden minions that unlock later unless opened early." },
  { name: "Fishbait", value: "Beast recruit attacks", detail: "Beasts can attack during Recruit Phase, changing how setup turns are planned." },
];

export const giftTimeline: TimelineRow[] = [
  { turn: "3", offer: "Tier 2 only", use: "Stabilize or take an early direction; do not sacrifice your whole economy turn for it." },
  { turn: "4", offer: "Tier 2-3", use: "Good tempo window if your board is weak or the shop is poor." },
  { turn: "5", offer: "Tier 3", use: "First real setup point; look for an engine piece or economy bridge." },
  { turn: "6", offer: "Tier 3-4", use: "Pivot signal: commit if the Gift connects with an existing pair or Trinket direction." },
  { turn: "7", offer: "Tier 4", use: "Many comps find their first real engine here. Do not greed past board strength." },
  { turn: "8", offer: "Tier 4-5", use: "Strong power-spike window; most lobbies expect top-four stabilization from here." },
  { turn: "9", offer: "Tier 4-6", use: "High-roll search for T6 payoff, but only if your health allows it." },
  { turn: "10+", offer: "Tier 5-6", use: "Finisher or tech search; it usually will not rescue weak scaling by itself." },
];

export const playbook: InfoBlock[] = [
  {
    title: "When To Press Dark Gift",
    body: "A Gift is not free tempo: you are spending 3 Gold for a minion plus an effect, so compare it to your best normal 3-Gold play.",
    points: [
      "Early Gifts are good when they stop bleeding or give direction to an empty board.",
      "Midgame Gifts are good when they add payoff to an engine you already have, not just a new idea.",
      "Late Gifts are good when you are searching for a T5/T6 payoff, scam, or specific tech.",
    ],
  },
  {
    title: "Commit Rule",
    body: "A tribe tag is not an engine. Commit when at least two pieces reinforce the same repeatable loop.",
    points: [
      "Mech: spell access plus Magnetic payoff plus end-of-turn or duplication value.",
      "Quilboar: Gem quality plus Gem usage plus Choose One/Rally payoff.",
      "Murloc/Undead: trigger source and payoff need to be present together.",
    ],
  },
  {
    title: "Gold Management",
    body: "In Season 14, Activate, Gift, and Tavern upgrade all compete for the same Gold. Count at the start of the turn.",
    points: [
      "Evaluate Activate before buying because it can need board space and a target.",
      "Before pressing Gift, clean up your board so type-based offers are not distorted.",
      "Do not roll down to 0 if it skips a key Activate or Tavern upgrade.",
    ],
  },
];

export const glossary: InfoBlock[] = [
  {
    title: "Activate",
    body: "A Recruit Phase ability with a Gold cost. Each Activate ability can be used once per turn.",
    points: ["Plan the target.", "Count it into your gold curve.", "The minion must be in your warband for the ability to matter."],
  },
  {
    title: "Rally",
    body: "A Recruit Phase trigger package that gives engine pieces or value across several Season 14 tribes.",
    points: ["Strong when repeatable.", "Weak when it is only one-time value.", "Look for cards that retrigger Rally."],
  },
  {
    title: "Lockbox and Fishbait",
    body: "Lockbox is delayed Golden value; Fishbait enables Recruit Phase attacks. Both need setup, not just stats.",
    points: ["Lockbox needs health to wait.", "Fishbait cares about attack order and target quality.", "Do not trade away a stable board for pure upside."],
  },
];

export const boardStates: BoardState[] = [
  {
    title: "Mech Magnetic Engine",
    stage: "Tavern 4-5 board",
    tribe: "mech",
    board: ["Spark Snapper", "Drone Duplicator", "Glambot", "two separate Magnetic targets", "tempo Divine Shield/taunt"],
    hand: ["cheap targeted Tavern spell", "spare Mech or economy spell"],
    goal: "Do not build one giant minion. The goal is multiple Magnetic stacks across bodies, later multiplied by Utility Drone or duplication effects.",
    next: ["Cast spells on Mechs that can survive the next fight.", "Activate Drone Duplicator only before meaningful Magnetization.", "On T6, look for Utility Drone or another Magnetic payoff."],
  },
  {
    title: "Quilboar Choose One Setup",
    stage: "Tavern 4-6 board",
    tribe: "quilboar",
    board: ["Thorned Trailblazer", "Gem Rat", "Bramble Tunneler", "main Blood Gem target", "two flexible tempo slots"],
    hand: ["Choose One card", "Blood Gems", "possible Gem Day"],
    goal: "Build Gem quality and the Choose One engine first, then convert the board into wide stats.",
    next: ["With Trailblazer, play the best Choose One card first.", "After Turbo Hogrider, targeted Gems become board-wide value.", "Do not keep too many weak support bodies without a carry."],
  },
  {
    title: "Undead Reborn Trigger Board",
    stage: "Tavern 5-6 board",
    tribe: "undead",
    board: ["Dead Bellringer", "Barrier Banshee", "Snazzy Phantom", "high-Attack Reborn target", "right-most Undead carry"],
    hand: ["Reborn or stat spell", "scam/taunt tech"],
    goal: "Trigger Reborn during Recruit Phase so Divine Shield and right-side Attack stats happen before combat.",
    next: ["Do not use Bellringer on the payoff you need to keep.", "Check the right-most Undead because of Phantom.", "If you lack survivability, buy taunt/scam before more scaling."],
  },
  {
    title: "Murloc Spell-Handbuff Board",
    stage: "Tavern 4-5 board",
    tribe: "murloc",
    board: ["Twilight Tidehunter", "Shamanic Tidecaller", "Kelp Keeper", "Gearfin", "stable combat body"],
    hand: ["left-most carry target", "1-Cost Tavern spells", "Battlecry minion"],
    goal: "Control the left-most hand target and convert spell economy into repeated hand and board buffs.",
    next: ["Check hand order before every spell.", "Repeat only real Battlecry value with Kelp Keeper.", "Without spell generation, do not force Murlocs."],
  },
];

export const buildRoutes: BuildRoute[] = [
  {
    title: "Stabilizing Gift Route",
    tribe: "mech",
    opener: "Hold health with early tempo minions and cheap spells, then use a Turn 4-6 Gift to find direction.",
    midgame: "If Glambot, Spark Snapper, or Drone Duplicator appears, start spreading Magnetic stacks across multiple bodies.",
    late: "Utility Drone, Divine Shield, and scam tech finish the board. One oversized carry is vulnerable.",
    pivots: ["Gearfin can bridge into Murloc spell lines.", "If Magnetic shops are weak, stay in tempo plus Gift discovery mode.", "Without targeted spells, do not commit to Glambot."],
  },
  {
    title: "Greeded Tier 4-5 Engine Route",
    tribe: "quilboar",
    opener: "Do not just collect Gems: without Gem quality or Choose One setup, early Gems run out of impact.",
    midgame: "Trailblazer, Gem Rat, and Bramble Tunneler open the real engine. Turbo Hogrider is the payoff.",
    late: "Wide Blood Gem value plus Divine Shield and tech slots. The Gem engine still needs combat survivability.",
    pivots: ["If you only have Gem Rat, play tempo.", "After Trailblazer, look for Choose One cards rather than random stats.", "Gift wants tribe reward or T6 payoff."],
  },
  {
    title: "Trigger-First Undead Route",
    tribe: "undead",
    opener: "Do not cling to Undead early unless you have both a trigger source and payoff.",
    midgame: "Dead Bellringer provides the Recruit Phase trigger; Barrier Banshee and Snazzy Phantom pay it off.",
    late: "The board works when it has already made stats and shields before combat. The right-most carry must be intentional.",
    pivots: ["Without Bellringer, do not keep too many medium Undead.", "Phantom is weak without a high-Attack target.", "Scam tech is needed against huge stat boards."],
  },
  {
    title: "Spell Economy Murloc Route",
    tribe: "murloc",
    opener: "The Murloc engine needs cheap spells and a carry held in hand.",
    midgame: "Twilight Tidehunter and Shamanic Tidecaller convert spell usage into hand and board buffs.",
    late: "Kelp Keeper plus Battlecry value, Gearfin spell generation, then scam/poison-style tech against large stats.",
    pivots: ["Gearfin also bridges into Mechs.", "If hand positioning is unstable, pivot to board scaling.", "A spell-less Murloc shop is tempo, not a comp."],
  },
];

export const referenceNotes: ReferenceNote[] = [
  {
    label: "Blizzard 36.2 patch notes",
    kind: "Official card-pool baseline",
    summary: "Confirms Season 14's core additions: Dark Gifts, Activate, expanded Trinket pool, new heroes, Lockbox, Fishbait, and the large Battlegrounds pool refresh.",
    href: "https://hearthstone.blizzard.com/en-gb/news/24290432/362-patch-notes",
  },
  {
    label: "Season 14 announcement",
    kind: "Official system explanation",
    summary: "Explains that the Dark Gift button starts on Turn 3, costs 3 Gold, can be used once per turn and three times per game, and improves as turns pass.",
    href: "https://playhearthstone.com/en-us/blog/24290433/",
  },
  {
    label: "HSBG 36.2 database",
    kind: "Visual card-pool reference",
    summary: "The visual patch database shows major Season 14 pool churn with many new, returning, changed, and removed Battlegrounds cards.",
    href: "https://hsbg.cards/patch-notes/36.2",
  },
  {
    label: "Community and creator videos",
    kind: "Early meta read",
    summary: "Community/video discussion is currently focused on Dark Gift timing, Mech Magnetic lines, Quilboar/Undead highrolls, and high Gift variance. Treat it as directional, not as win-rate data.",
    href: "https://www.youtube.com/results?search_query=Hearthstone+Battlegrounds+Season+14+Dark+Gifts+guide",
  },
];

export const communityPulse: CommunityPulse[] = [
  {
    title: "Quilboar and Undead are getting the loudest hype",
    signal: "Creator/video search results include separate Quilboar and Undead strategy videos with highroll-heavy framing, while Reddit also has active Undead balance discussion.",
    confidence: "medium",
    takeaway: "The site keeps the S/A ordering, but Quilboar and Undead routes now call out ceiling more clearly instead of treating them only as stable comps.",
    sources: ["YouTube Season 14 guide search", "r/BobsTavern live feed"],
  },
  {
    title: "The Reddit feed is better for highroll examples than tier lists",
    signal: "The current r/BobsTavern feed shows many Final Board / Highlight posts: huge minions, Naga highlights, trinket/bug discussion, and extreme boards.",
    confidence: "high",
    takeaway: "Community screenshots should not be read as win-rate evidence. They are useful for board-state and ceiling examples, not for ranking comps by themselves.",
    sources: ["r/BobsTavern live feed"],
  },
  {
    title: "Dark Gift variance and turn timer pressure are central topics",
    signal: "Official and community sources both emphasize the 3-Gold, three-use Gift decision; Reddit also shows parallel complaints about client time and animation pressure.",
    confidence: "high",
    takeaway: "The strategy page should keep prioritizing board cleanup before Gift, gold counting, and fast decision-making as the main general advice.",
    sources: ["Blizzard Season 14 announcement", "HearthPwn 36.2 patch notes", "r/BobsTavern live feed"],
  },
  {
    title: "Naga and Demon look more polarized than stable",
    signal: "The feed contains Naga highlights and Demon/Elemental balance chatter, but less evidence of reliable routes than Mech, Quilboar, or Undead.",
    confidence: "low",
    takeaway: "Naga and Demon stay lower-confidence recommendations: playable highrolls or pivots, not primary force plans.",
    sources: ["r/BobsTavern live feed"],
  },
];

export const changelog: ChangelogEntry[] = [
  {
    date: "2026-08-06",
    title: "Changelog and community refresh",
    summary: "The site now has a trackable changelog, and the Season 14 community read has been refreshed.",
    changes: [
      "Added a Community Pulse section with confidence levels for Reddit and creator signals.",
      "Added HearthPwn, the live r/BobsTavern feed, and YouTube guide search to the source list.",
      "Separated community signals from official patch data and avoided treating them as win-rate evidence.",
    ],
  },
  {
    date: "2026-08-05",
    title: "Multipage Season 14 guide",
    summary: "The original infographic expanded into a full helper site with separate overview, comps, strategy, and references pages.",
    changes: [
      "Split the guide into multiple HU and EN routes.",
      "Added board states, build routes, strategy playbooks, and analyzed references.",
      "Made the main navigation and language switch available across the site.",
    ],
  },
  {
    date: "2026-08-05",
    title: "Comp cards and filtering",
    summary: "The comps view gained full Battlegrounds-style card panels and multi-select tribe filtering.",
    changes: [
      "Added Tavern tier, type, attack/health, rules text, and meta notes beside card art.",
      "Allowed multiple tribe filters to be selected at once.",
      "Loaded card art through HearthstoneJSON render/art URLs.",
    ],
  },
  {
    date: "2026-08-05",
    title: "Hungarian and English content",
    summary: "The site launched with separate Hungarian and English pages, localized navigation, and localized guide copy.",
    changes: [
      "Added the Hungarian translation for the core guide.",
      "Added English routes and the language switcher.",
      "Added a quick meta snapshot and main page links to the overview.",
    ],
  },
];
