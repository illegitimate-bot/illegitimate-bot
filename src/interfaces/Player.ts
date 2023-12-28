export interface Player {
  data: {
    success: boolean
    player: PlayerData
  }
}

export interface PlayerData {
  _id: string
  uuid: string
  firstLogin: number
  playername: string
  displayname: string
  achievementsOneTime: string[]
  network_update_book: string
  stats: Stats
  networkExp: number
  challenges: Challenges2
  achievements: Achievements
  achievementTracking: string[]
  karma: number
  petConsumables: PetConsumables
  vanityMeta: VanityMeta
  housingMeta: HousingMeta
  lastAdsenseGenerateTime: number
  achievementPoints: number
  achievementSync: AchievementSync
  tourney: Tourney2
  parkourCheckpointBests: ParkourCheckpointBests
  parkourCompletions: ParkourCompletions
  newPackageRank: string
  levelUp_VIP: number
  eugene: Eugene
  lastClaimedReward: number
  rewardHighScore: number
  rewardScore: number
  rewardStreak: number
  totalDailyRewards: number
  totalRewards: number
  achievementRewardsNew: AchievementRewardsNew
  channel: string
  levelUp_MVP_PLUS: number
  spec_first_person: boolean
  spec_auto_teleport: boolean
  quests: Quests
  monthlyPackageRank: string
  mostRecentMonthlyPackageRank: string
  adsense_tokens: number
  "dmcrates-10-2019": Dmcrates102019
  questSettings: QuestSettings
  monthlycrates: Monthlycrates
  monthlyRankColor: string
  halloween2019Cooldowns: Halloween2019Cooldowns
  completed_christmas_quests_2019: number
  christmas2019Cooldowns: Christmas2019Cooldowns
  adventRewards2019: AdventRewards2019
  main2017Tutorial: boolean
  gifts_grinch: number
  completed_christmas_quests_2020: number
  userLanguage: string
  easter2020Cooldowns2: Easter2020Cooldowns2
  rankPlusColor: string
  socialMedia: SocialMedia
  achievementTotem: AchievementTotem
  claimed_potato_talisman: number
  summer2020Cooldowns: Summer2020Cooldowns
  skyblock_free_cookie: number
  halloween2020Cooldowns: Halloween2020Cooldowns
  claimed_century_cake: number
  christmas2020Cooldowns2: Christmas2020Cooldowns2
  adventRewards2020: AdventRewards2020
  xmas2020_DUELS_3: boolean
  xmas2020_MAIN_LOBBY_1: boolean
  xmas2020_BEDWARS_2: boolean
  xmas2020_SKYWARS_1: boolean
  xmas2020_UHC_3: boolean
  xmas2020_SKYWARS_3: boolean
  completed_christmas_quests_2021: number
  xmas2020_HOUSING_1: boolean
  xmas2020_DUELS_1: boolean
  xmas2020_SKYWARS_2: boolean
  giftingMeta: GiftingMeta
  tiered_achievement_menu_sort: string
  easter2021Cooldowns2: Easter2021Cooldowns2
  petStats: PetStats
  claimed_year143_cake: number
  summer2021Cooldowns: Summer2021Cooldowns
  halloween2021Cooldowns: Halloween2021Cooldowns
  seasonal: Seasonal
  completed_christmas_quests_2022: number
  claimed_century_cake200: number
  disabledProjectileTrails: boolean
  leveling: Leveling
  completed_christmas_quests_2023: number
  fortuneBuff: number
  vanityFavorites: string
  Rowtwo: string[]
  Rowone: string[]
  Columnone: string[]
  Columnfive: string[]
  Rowthree: string[]
  Diagonaltwo: string[]
  Columnthree: string[]
  Columnfour: string[]
  Rowfive: string[]
  Rowfour: string[]
  Diagonalone: string[]
  Columntwo: string[]
  blackOut: string[]
  petJourneyTimestamp: number
  battlePassGlowStatus: boolean
  currentClickEffect: string
  currentGadget: string
}

export interface Stats {
  MurderMystery: MurderMystery
  SuperSmash: SuperSmash
  TNTGames: Tntgames
  Arcade: Arcade
  Walls3: Walls3
  Battleground: Battleground
  Bedwars: Bedwars
  TrueCombat: TrueCombat
  SkyClash: SkyClash
  UHC: Uhc
  MCGO: Mcgo
  HungerGames: HungerGames
  SpeedUHC: SpeedUhc
  SkyWars: SkyWars
  GingerBread: GingerBread
  VampireZ: VampireZ
  Quake: Quake
  Paintball: Paintball
  BuildBattle: BuildBattle
  Legacy: Legacy
  SkyBlock: SkyBlock
  Pit: Pit
  Duels: Duels
  Walls: Walls
  Arena: Arena
  Housing: Housing
  MainLobby: MainLobby
  WoolGames: WoolGames
}

export interface MurderMystery {
  games_MURDER_ASSASSINS: number
  games_towerfall_MURDER_ASSASSINS: number
  wins: number
  coins_pickedup_towerfall_MURDER_ASSASSINS: number
  coins_pickedup_towerfall: number
  knife_kills_towerfall: number
  games_towerfall: number
  kills_towerfall: number
  coins: number
  knife_kills: number
  knife_kills_towerfall_MURDER_ASSASSINS: number
  wins_towerfall_MURDER_ASSASSINS: number
  games: number
  kills: number
  knife_kills_MURDER_ASSASSINS: number
  coins_pickedup_MURDER_ASSASSINS: number
  coins_pickedup: number
  wins_towerfall: number
  wins_MURDER_ASSASSINS: number
  kills_MURDER_ASSASSINS: number
  kills_towerfall_MURDER_ASSASSINS: number
  games_hollywood_MURDER_ASSASSINS: number
  deaths: number
  deaths_MURDER_ASSASSINS: number
  deaths_hollywood: number
  games_hollywood: number
  deaths_hollywood_MURDER_ASSASSINS: number
  quickest_showdown_win_time_seconds_MURDER_SHOWDOWN: number
  quickest_showdown_win_time_seconds_transport: number
  quickest_showdown_win_time_seconds: number
  quickest_showdown_win_time_seconds_transport_MURDER_SHOWDOWN: number
  wins_transport: number
  wins_transport_MURDER_SHOWDOWN: number
  deaths_transport_MURDER_SHOWDOWN: number
  kills_MURDER_SHOWDOWN: number
  coins_pickedup_transport: number
  bow_kills: number
  games_transport_MURDER_SHOWDOWN: number
  bow_kills_transport: number
  games_MURDER_SHOWDOWN: number
  wins_MURDER_SHOWDOWN: number
  coins_pickedup_transport_MURDER_SHOWDOWN: number
  deaths_MURDER_SHOWDOWN: number
  kills_transport_MURDER_SHOWDOWN: number
  deaths_transport: number
  games_transport: number
  coins_pickedup_MURDER_SHOWDOWN: number
  bow_kills_transport_MURDER_SHOWDOWN: number
  bow_kills_MURDER_SHOWDOWN: number
  kills_transport: number
  thrown_knife_kills_towerfall_MURDER_ASSASSINS: number
  deaths_towerfall_MURDER_ASSASSINS: number
  thrown_knife_kills: number
  thrown_knife_kills_MURDER_ASSASSINS: number
  deaths_towerfall: number
  thrown_knife_kills_towerfall: number
  kills_mountain: number
  kills_mountain_MURDER_ASSASSINS: number
  games_mountain_MURDER_ASSASSINS: number
  games_mountain: number
  deaths_mountain: number
  coins_pickedup_mountain_MURDER_ASSASSINS: number
  deaths_mountain_MURDER_ASSASSINS: number
  coins_pickedup_mountain: number
  knife_kills_mountain_MURDER_ASSASSINS: number
  knife_kills_mountain: number
  deaths_ancient_tomb_MURDER_ASSASSINS: number
  games_ancient_tomb: number
  games_ancient_tomb_MURDER_ASSASSINS: number
  knife_kills_ancient_tomb: number
  knife_kills_ancient_tomb_MURDER_ASSASSINS: number
  deaths_ancient_tomb: number
  kills_ancient_tomb: number
  kills_ancient_tomb_MURDER_ASSASSINS: number
  coins_pickedup_ancient_tomb_MURDER_ASSASSINS: number
  coins_pickedup_ancient_tomb: number
  knife_kills_hollywood: number
  kills_hollywood: number
  coins_pickedup_hollywood_MURDER_ASSASSINS: number
  coins_pickedup_hollywood: number
  knife_kills_hollywood_MURDER_ASSASSINS: number
  kills_hollywood_MURDER_ASSASSINS: number
  granted_chests: number
  mm_chests: number
  murdermystery_books: string[]
  detective_chance: number
  murderer_chance: number
  coins_pickedup_MURDER_CLASSIC: number
  "wins_widow's_den_MURDER_CLASSIC": number
  "wins_widow's_den": number
  "coins_pickedup_widow's_den": number
  "games_widow's_den_MURDER_CLASSIC": number
  games_MURDER_CLASSIC: number
  "coins_pickedup_widow's_den_MURDER_CLASSIC": number
  wins_MURDER_CLASSIC: number
  "games_widow's_den": number
  deaths_gold_rush: number
  games_gold_rush_MURDER_ASSASSINS: number
  coins_pickedup_gold_rush_MURDER_ASSASSINS: number
  deaths_gold_rush_MURDER_ASSASSINS: number
  coins_pickedup_gold_rush: number
  games_gold_rush: number
  deaths_darkfall_MURDER_ASSASSINS: number
  coins_pickedup_darkfall_MURDER_ASSASSINS: number
  games_darkfall: number
  games_darkfall_MURDER_ASSASSINS: number
  deaths_darkfall: number
  coins_pickedup_darkfall: number
  coins_pickedup_archives: number
  wins_archives_MURDER_CLASSIC: number
  games_archives_MURDER_CLASSIC: number
  coins_pickedup_archives_MURDER_CLASSIC: number
  games_archives: number
  wins_archives: number
  deaths_library_MURDER_CLASSIC: number
  games_library_MURDER_CLASSIC: number
  deaths_library: number
  coins_pickedup_library: number
  coins_pickedup_library_MURDER_CLASSIC: number
  games_library: number
  deaths_MURDER_CLASSIC: number
  deaths_easter_world_MURDER_CLASSIC: number
  deaths_easter_world: number
  games_easter_world_MURDER_CLASSIC: number
  games_easter_world: number
  wins_san_peratico: number
  coins_pickedup_san_peratico: number
  bow_kills_san_peratico_MURDER_CLASSIC: number
  games_san_peratico_MURDER_CLASSIC: number
  kills_san_peratico: number
  bow_kills_MURDER_CLASSIC: number
  kills_MURDER_CLASSIC: number
  bow_kills_san_peratico: number
  games_san_peratico: number
  deaths_san_peratico_MURDER_CLASSIC: number
  wins_san_peratico_MURDER_CLASSIC: number
  coins_pickedup_san_peratico_MURDER_CLASSIC: number
  kills_san_peratico_MURDER_CLASSIC: number
  deaths_san_peratico: number
  bow_kills_library_MURDER_CLASSIC: number
  kills_library_MURDER_CLASSIC: number
  wins_library: number
  was_hero_library_MURDER_CLASSIC: number
  bow_kills_library: number
  was_hero: number
  was_hero_MURDER_CLASSIC: number
  was_hero_library: number
  wins_library_MURDER_CLASSIC: number
  kills_library: number
  games_library_MURDER_DOUBLE_UP: number
  wins_library_MURDER_DOUBLE_UP: number
  games_MURDER_DOUBLE_UP: number
  coins_pickedup_MURDER_DOUBLE_UP: number
  coins_pickedup_library_MURDER_DOUBLE_UP: number
  wins_MURDER_DOUBLE_UP: number
  kills_easter_world_MURDER_DOUBLE_UP: number
  bow_kills_easter_world_MURDER_DOUBLE_UP: number
  games_easter_world_MURDER_DOUBLE_UP: number
  coins_pickedup_easter_world: number
  knife_kills_easter_world_MURDER_DOUBLE_UP: number
  knife_kills_MURDER_DOUBLE_UP: number
  kills_MURDER_DOUBLE_UP: number
  coins_pickedup_easter_world_MURDER_DOUBLE_UP: number
  kills_as_murderer_easter_world: number
  kills_as_murderer: number
  kills_as_murderer_MURDER_DOUBLE_UP: number
  kills_easter_world: number
  kills_as_murderer_easter_world_MURDER_DOUBLE_UP: number
  knife_kills_easter_world: number
  bow_kills_MURDER_DOUBLE_UP: number
  bow_kills_easter_world: number
  games_transport_MURDER_DOUBLE_UP: number
  deaths_transport_MURDER_DOUBLE_UP: number
  coins_pickedup_transport_MURDER_DOUBLE_UP: number
  deaths_MURDER_DOUBLE_UP: number
  wins_transport_MURDER_DOUBLE_UP: number
  coins_pickedup_gold_rush_MURDER_CLASSIC: number
  deaths_gold_rush_MURDER_CLASSIC: number
  games_gold_rush_MURDER_CLASSIC: number
  wins_gold_rush: number
  wins_gold_rush_MURDER_CLASSIC: number
  bow_kills_headquarters: number
  bow_kills_headquarters_MURDER_CLASSIC: number
  coins_pickedup_headquarters: number
  coins_pickedup_headquarters_MURDER_CLASSIC: number
  detective_wins: number
  detective_wins_MURDER_CLASSIC: number
  detective_wins_headquarters: number
  detective_wins_headquarters_MURDER_CLASSIC: number
  games_headquarters: number
  games_headquarters_MURDER_CLASSIC: number
  kills_headquarters: number
  kills_headquarters_MURDER_CLASSIC: number
  quickest_detective_win_time_seconds: number
  quickest_detective_win_time_seconds_MURDER_CLASSIC: number
  quickest_detective_win_time_seconds_headquarters: number
  quickest_detective_win_time_seconds_headquarters_MURDER_CLASSIC: number
  was_hero_headquarters: number
  was_hero_headquarters_MURDER_CLASSIC: number
  wins_headquarters: number
  wins_headquarters_MURDER_CLASSIC: number
  bow_kills_gold_rush: number
  bow_kills_gold_rush_MURDER_CLASSIC: number
  detective_wins_gold_rush: number
  detective_wins_gold_rush_MURDER_CLASSIC: number
  kills_gold_rush: number
  kills_gold_rush_MURDER_CLASSIC: number
  was_hero_gold_rush: number
  was_hero_gold_rush_MURDER_CLASSIC: number
  coins_pickedup_library_MURDER_ASSASSINS: number
  deaths_library_MURDER_ASSASSINS: number
  games_library_MURDER_ASSASSINS: number
  coins_pickedup_towerfall_MURDER_DOUBLE_UP: number
  deaths_towerfall_MURDER_DOUBLE_UP: number
  games_towerfall_MURDER_DOUBLE_UP: number
  wins_towerfall_MURDER_DOUBLE_UP: number
  coins_pickedup_ancient_tomb_MURDER_DOUBLE_UP: number
  games_ancient_tomb_MURDER_DOUBLE_UP: number
  kills_ancient_tomb_MURDER_DOUBLE_UP: number
  kills_as_murderer_ancient_tomb: number
  kills_as_murderer_ancient_tomb_MURDER_DOUBLE_UP: number
  knife_kills_ancient_tomb_MURDER_DOUBLE_UP: number
  coins_pickedup_san_peratico_v2: number
  coins_pickedup_san_peratico_v2_MURDER_CLASSIC: number
  deaths_san_peratico_v2: number
  deaths_san_peratico_v2_MURDER_CLASSIC: number
  games_san_peratico_v2: number
  games_san_peratico_v2_MURDER_CLASSIC: number
  wins_san_peratico_v2: number
  wins_san_peratico_v2_MURDER_CLASSIC: number
  coins_pickedup_transport_MURDER_CLASSIC: number
  deaths_transport_MURDER_CLASSIC: number
  games_transport_MURDER_CLASSIC: number
  wins_transport_MURDER_CLASSIC: number
  coins_pickedup_ancient_tomb_MURDER_CLASSIC: number
  games_ancient_tomb_MURDER_CLASSIC: number
  wins_ancient_tomb: number
  wins_ancient_tomb_MURDER_CLASSIC: number
  coins_pickedup_hypixel_world: number
  coins_pickedup_hypixel_world_MURDER_CLASSIC: number
  games_hypixel_world: number
  games_hypixel_world_MURDER_CLASSIC: number
  wins_hypixel_world: number
  wins_hypixel_world_MURDER_CLASSIC: number
  deaths_headquarters: number
  deaths_headquarters_MURDER_CLASSIC: number
  coins_pickedup_darkfall_MURDER_CLASSIC: number
  games_darkfall_MURDER_CLASSIC: number
  wins_darkfall: number
  wins_darkfall_MURDER_CLASSIC: number
  kills_as_murderer_MURDER_CLASSIC: number
  kills_as_murderer_san_peratico_v2: number
  kills_as_murderer_san_peratico_v2_MURDER_CLASSIC: number
  kills_san_peratico_v2: number
  kills_san_peratico_v2_MURDER_CLASSIC: number
  knife_kills_MURDER_CLASSIC: number
  knife_kills_san_peratico_v2: number
  knife_kills_san_peratico_v2_MURDER_CLASSIC: number
  thrown_knife_kills_MURDER_CLASSIC: number
  thrown_knife_kills_san_peratico_v2: number
  thrown_knife_kills_san_peratico_v2_MURDER_CLASSIC: number
  packages: string[]
  coins_pickedup_cruise_ship: number
  coins_pickedup_cruise_ship_MURDER_CLASSIC: number
  games_cruise_ship: number
  games_cruise_ship_MURDER_CLASSIC: number
  wins_cruise_ship: number
  wins_cruise_ship_MURDER_CLASSIC: number
  games_skyway_pier: number
  games_skyway_pier_MURDER_CLASSIC: number
  wins_skyway_pier: number
  wins_skyway_pier_MURDER_CLASSIC: number
  coins_pickedup_towerfall_MURDER_CLASSIC: number
  games_towerfall_MURDER_CLASSIC: number
  wins_towerfall_MURDER_CLASSIC: number
  deaths_cruise_ship: number
  deaths_cruise_ship_MURDER_CLASSIC: number
  kills_as_murderer_towerfall: number
  kills_as_murderer_towerfall_MURDER_CLASSIC: number
  kills_towerfall_MURDER_CLASSIC: number
  knife_kills_towerfall_MURDER_CLASSIC: number
  coins_pickedup_archives_top_floor: number
  coins_pickedup_archives_top_floor_MURDER_CLASSIC: number
  deaths_archives_top_floor: number
  deaths_archives_top_floor_MURDER_CLASSIC: number
  games_archives_top_floor: number
  games_archives_top_floor_MURDER_CLASSIC: number
  wins_archives_top_floor: number
  wins_archives_top_floor_MURDER_CLASSIC: number
  coins_pickedup_aquarium: number
  coins_pickedup_aquarium_MURDER_CLASSIC: number
  games_aquarium: number
  games_aquarium_MURDER_CLASSIC: number
  wins_aquarium: number
  wins_aquarium_MURDER_CLASSIC: number
  coins_pickedup_hypixel_world_MURDER_ASSASSINS: number
  deaths_hypixel_world: number
  deaths_hypixel_world_MURDER_ASSASSINS: number
  games_hypixel_world_MURDER_ASSASSINS: number
  kills_hypixel_world: number
  kills_hypixel_world_MURDER_ASSASSINS: number
  knife_kills_hypixel_world: number
  knife_kills_hypixel_world_MURDER_ASSASSINS: number
  thrown_knife_kills_hypixel_world: number
  thrown_knife_kills_hypixel_world_MURDER_ASSASSINS: number
  wins_hypixel_world_MURDER_ASSASSINS: number
  coins_pickedup_aquarium_MURDER_ASSASSINS: number
  deaths_aquarium: number
  deaths_aquarium_MURDER_ASSASSINS: number
  games_aquarium_MURDER_ASSASSINS: number
  kills_aquarium: number
  kills_aquarium_MURDER_ASSASSINS: number
  knife_kills_aquarium: number
  knife_kills_aquarium_MURDER_ASSASSINS: number
  active_knife_skin: string
  "coins_pickedup_widow's_den_MURDER_ASSASSINS": number
  "deaths_widow's_den": number
  "deaths_widow's_den_MURDER_ASSASSINS": number
  "games_widow's_den_MURDER_ASSASSINS": number
  "kills_widow's_den": number
  "kills_widow's_den_MURDER_ASSASSINS": number
  "knife_kills_widow's_den": number
  "knife_kills_widow's_den_MURDER_ASSASSINS": number
  coins_pickedup_headquarters_MURDER_ASSASSINS: number
  deaths_headquarters_MURDER_ASSASSINS: number
  games_headquarters_MURDER_ASSASSINS: number
  kills_headquarters_MURDER_ASSASSINS: number
  knife_kills_headquarters: number
  knife_kills_headquarters_MURDER_ASSASSINS: number
  deaths_san_peratico_v2_MURDER_ASSASSINS: number
  games_san_peratico_v2_MURDER_ASSASSINS: number
  kills_san_peratico_v2_MURDER_ASSASSINS: number
  knife_kills_san_peratico_v2_MURDER_ASSASSINS: number
  coins_pickedup_hollywood_MURDER_DOUBLE_UP: number
  detective_wins_MURDER_DOUBLE_UP: number
  detective_wins_hollywood: number
  detective_wins_hollywood_MURDER_DOUBLE_UP: number
  games_hollywood_MURDER_DOUBLE_UP: number
  quickest_detective_win_time_seconds_MURDER_DOUBLE_UP: number
  quickest_detective_win_time_seconds_hollywood: number
  quickest_detective_win_time_seconds_hollywood_MURDER_DOUBLE_UP: number
  wins_hollywood: number
  wins_hollywood_MURDER_DOUBLE_UP: number
  coins_pickedup_archives_top_floor_MURDER_DOUBLE_UP: number
  games_archives_top_floor_MURDER_DOUBLE_UP: number
  wins_archives_top_floor_MURDER_DOUBLE_UP: number
  deaths_archives_top_floor_MURDER_DOUBLE_UP: number
  detective_wins_archives_top_floor: number
  detective_wins_archives_top_floor_MURDER_DOUBLE_UP: number
  "coins_pickedup_widow's_den_MURDER_DOUBLE_UP": number
  "deaths_widow's_den_MURDER_DOUBLE_UP": number
  "games_widow's_den_MURDER_DOUBLE_UP": number
  "wins_widow's_den_MURDER_DOUBLE_UP": number
  coins_pickedup_snowfall: number
  coins_pickedup_snowfall_MURDER_DOUBLE_UP: number
  deaths_snowfall: number
  deaths_snowfall_MURDER_DOUBLE_UP: number
  games_snowfall: number
  games_snowfall_MURDER_DOUBLE_UP: number
  detective_wins_transport: number
  detective_wins_transport_MURDER_DOUBLE_UP: number
  deaths_ancient_tomb_MURDER_DOUBLE_UP: number
  wins_ancient_tomb_MURDER_DOUBLE_UP: number
  thrown_knife_kills_MURDER_DOUBLE_UP: number
  thrown_knife_kills_easter_world: number
  thrown_knife_kills_easter_world_MURDER_DOUBLE_UP: number
  coins_pickedup_cruise_ship_MURDER_DOUBLE_UP: number
  deaths_cruise_ship_MURDER_DOUBLE_UP: number
  games_cruise_ship_MURDER_DOUBLE_UP: number
  wins_cruise_ship_MURDER_DOUBLE_UP: number
  coins_pickedup_gold_rush_MURDER_DOUBLE_UP: number
  deaths_gold_rush_MURDER_DOUBLE_UP: number
  games_gold_rush_MURDER_DOUBLE_UP: number
  wins_gold_rush_MURDER_DOUBLE_UP: number
  coins_pickedup_mountain_MURDER_DOUBLE_UP: number
  games_mountain_MURDER_DOUBLE_UP: number
  kills_as_murderer_mountain: number
  kills_as_murderer_mountain_MURDER_DOUBLE_UP: number
  kills_mountain_MURDER_DOUBLE_UP: number
  knife_kills_mountain_MURDER_DOUBLE_UP: number
  coins_pickedup_headquarters_MURDER_DOUBLE_UP: number
  deaths_headquarters_MURDER_DOUBLE_UP: number
  games_headquarters_MURDER_DOUBLE_UP: number
  kills_as_murderer_gold_rush: number
  kills_as_murderer_gold_rush_MURDER_DOUBLE_UP: number
  kills_gold_rush_MURDER_DOUBLE_UP: number
  knife_kills_gold_rush: number
  knife_kills_gold_rush_MURDER_DOUBLE_UP: number
  wins_headquarters_MURDER_DOUBLE_UP: number
  deaths_skyway_pier: number
  deaths_skyway_pier_MURDER_CLASSIC: number
  deaths_hollywood_MURDER_DOUBLE_UP: number
  wins_snowfall: number
  wins_snowfall_MURDER_DOUBLE_UP: number
  bow_kills_ancient_tomb: number
  bow_kills_ancient_tomb_MURDER_CLASSIC: number
  kills_ancient_tomb_MURDER_CLASSIC: number
  was_hero_ancient_tomb: number
  was_hero_ancient_tomb_MURDER_CLASSIC: number
  coins_pickedup_san_peratico_v2_MURDER_DOUBLE_UP: number
  games_san_peratico_v2_MURDER_DOUBLE_UP: number
  wins_san_peratico_v2_MURDER_DOUBLE_UP: number
  deaths_san_peratico_v2_MURDER_DOUBLE_UP: number
  kills_as_murderer_transport: number
  kills_as_murderer_transport_MURDER_DOUBLE_UP: number
  kills_transport_MURDER_DOUBLE_UP: number
  knife_kills_transport: number
  knife_kills_transport_MURDER_DOUBLE_UP: number
  thrown_knife_kills_transport: number
  thrown_knife_kills_transport_MURDER_DOUBLE_UP: number
  deaths_easter_world_MURDER_DOUBLE_UP: number
  kills_as_murderer_cruise_ship: number
  kills_as_murderer_cruise_ship_MURDER_DOUBLE_UP: number
  kills_cruise_ship: number
  kills_cruise_ship_MURDER_DOUBLE_UP: number
  knife_kills_cruise_ship: number
  knife_kills_cruise_ship_MURDER_DOUBLE_UP: number
  coins_pickedup_archives_MURDER_DOUBLE_UP: number
  deaths_archives: number
  deaths_archives_MURDER_DOUBLE_UP: number
  games_archives_MURDER_DOUBLE_UP: number
  wins_archives_MURDER_DOUBLE_UP: number
  coins_pickedup_MURDER_INFECTION: number
  coins_pickedup_transport_MURDER_INFECTION: number
  games_MURDER_INFECTION: number
  games_transport_MURDER_INFECTION: number
  longest_time_as_survivor_seconds: number
  longest_time_as_survivor_seconds_MURDER_INFECTION: number
  longest_time_as_survivor_seconds_transport: number
  longest_time_as_survivor_seconds_transport_MURDER_INFECTION: number
  survivor_wins: number
  survivor_wins_MURDER_INFECTION: number
  survivor_wins_transport: number
  survivor_wins_transport_MURDER_INFECTION: number
  total_time_survived_seconds: number
  total_time_survived_seconds_MURDER_INFECTION: number
  total_time_survived_seconds_transport: number
  total_time_survived_seconds_transport_MURDER_INFECTION: number
  wins_MURDER_INFECTION: number
  wins_transport_MURDER_INFECTION: number
  coins_pickedup_san_peratico_v2_MURDER_INFECTION: number
  deaths_MURDER_INFECTION: number
  deaths_san_peratico_v2_MURDER_INFECTION: number
  games_san_peratico_v2_MURDER_INFECTION: number
  longest_time_as_survivor_seconds_san_peratico_v2: number
  longest_time_as_survivor_seconds_san_peratico_v2_MURDER_INFECTION: number
  total_time_survived_seconds_san_peratico_v2: number
  total_time_survived_seconds_san_peratico_v2_MURDER_INFECTION: number
  deaths_snowfall_MURDER_ASSASSINS: number
  games_snowfall_MURDER_ASSASSINS: number
  coins_pickedup_transport_MURDER_ASSASSINS: number
  deaths_transport_MURDER_ASSASSINS: number
  games_transport_MURDER_ASSASSINS: number
  deaths_library_MURDER_DOUBLE_UP: number
  coins_pickedup_darkfall_MURDER_DOUBLE_UP: number
  games_darkfall_MURDER_DOUBLE_UP: number
  wins_darkfall_MURDER_DOUBLE_UP: number
  "detective_wins_widow's_den": number
  "detective_wins_widow's_den_MURDER_DOUBLE_UP": number
  "kills_as_murderer_widow's_den": number
  "kills_as_murderer_widow's_den_MURDER_DOUBLE_UP": number
  "kills_widow's_den_MURDER_DOUBLE_UP": number
  "knife_kills_widow's_den_MURDER_DOUBLE_UP": number
  murderer_wins: number
  murderer_wins_MURDER_DOUBLE_UP: number
  "murderer_wins_widow's_den": number
  "murderer_wins_widow's_den_MURDER_DOUBLE_UP": number
  quickest_murderer_win_time_seconds: number
  quickest_murderer_win_time_seconds_MURDER_DOUBLE_UP: number
  "quickest_murderer_win_time_seconds_widow's_den": number
  "quickest_murderer_win_time_seconds_widow's_den_MURDER_DOUBLE_UP": number
  "thrown_knife_kills_widow's_den": number
  "thrown_knife_kills_widow's_den_MURDER_DOUBLE_UP": number
  bow_kills_transport_MURDER_DOUBLE_UP: number
  deaths_darkfall_MURDER_DOUBLE_UP: number
  bow_kills_headquarters_MURDER_DOUBLE_UP: number
  kills_headquarters_MURDER_DOUBLE_UP: number
  coins_pickedup_archives_MURDER_ASSASSINS: number
  deaths_archives_MURDER_ASSASSINS: number
  games_archives_MURDER_ASSASSINS: number
  bow_kills_MURDER_ASSASSINS: number
  bow_kills_hollywood: number
  bow_kills_hollywood_MURDER_ASSASSINS: number
  wins_hollywood_MURDER_ASSASSINS: number
  thrown_knife_kills_hollywood: number
  thrown_knife_kills_hollywood_MURDER_ASSASSINS: number
  coins_pickedup_snowfall_MURDER_CLASSIC: number
  games_snowfall_MURDER_CLASSIC: number
  wins_snowfall_MURDER_CLASSIC: number
  wins_easter_world: number
  wins_easter_world_MURDER_DOUBLE_UP: number
  kills_as_murderer_headquarters: number
  kills_as_murderer_headquarters_MURDER_DOUBLE_UP: number
  knife_kills_headquarters_MURDER_DOUBLE_UP: number
  thrown_knife_kills_headquarters: number
  thrown_knife_kills_headquarters_MURDER_DOUBLE_UP: number
  deaths_mountain_MURDER_CLASSIC: number
  games_mountain_MURDER_CLASSIC: number
  wins_mountain: number
  wins_mountain_MURDER_CLASSIC: number
  deaths_aquarium_MURDER_DOUBLE_UP: number
  games_aquarium_MURDER_DOUBLE_UP: number
  wins_aquarium_MURDER_DOUBLE_UP: number
  detective_wins_snowfall: number
  detective_wins_snowfall_MURDER_DOUBLE_UP: number
  was_hero_MURDER_DOUBLE_UP: number
  was_hero_snowfall: number
  was_hero_snowfall_MURDER_DOUBLE_UP: number
  murderer_wins_mountain: number
  murderer_wins_mountain_MURDER_DOUBLE_UP: number
  wins_mountain_MURDER_DOUBLE_UP: number
  coins_pickedup_ancient_tomb_MURDER_INFECTION: number
  games_ancient_tomb_MURDER_INFECTION: number
  longest_time_as_survivor_seconds_ancient_tomb: number
  longest_time_as_survivor_seconds_ancient_tomb_MURDER_INFECTION: number
  survivor_wins_ancient_tomb: number
  survivor_wins_ancient_tomb_MURDER_INFECTION: number
  total_time_survived_seconds_ancient_tomb: number
  total_time_survived_seconds_ancient_tomb_MURDER_INFECTION: number
  wins_ancient_tomb_MURDER_INFECTION: number
  coins_pickedup_towerfall_MURDER_INFECTION: number
  games_towerfall_MURDER_INFECTION: number
  longest_time_as_survivor_seconds_towerfall: number
  longest_time_as_survivor_seconds_towerfall_MURDER_INFECTION: number
  survivor_wins_towerfall: number
  survivor_wins_towerfall_MURDER_INFECTION: number
  total_time_survived_seconds_towerfall: number
  total_time_survived_seconds_towerfall_MURDER_INFECTION: number
  wins_towerfall_MURDER_INFECTION: number
  bow_kills_MURDER_INFECTION: number
  bow_kills_archives: number
  bow_kills_archives_MURDER_INFECTION: number
  coins_pickedup_archives_MURDER_INFECTION: number
  games_archives_MURDER_INFECTION: number
  kills_MURDER_INFECTION: number
  kills_archives: number
  kills_archives_MURDER_INFECTION: number
  kills_as_survivor: number
  kills_as_survivor_MURDER_INFECTION: number
  kills_as_survivor_archives: number
  kills_as_survivor_archives_MURDER_INFECTION: number
  survivor_wins_archives: number
  survivor_wins_archives_MURDER_INFECTION: number
  total_time_survived_seconds_archives: number
  total_time_survived_seconds_archives_MURDER_INFECTION: number
  wins_archives_MURDER_INFECTION: number
  coins_pickedup_headquarters_MURDER_INFECTION: number
  games_headquarters_MURDER_INFECTION: number
  longest_time_as_survivor_seconds_headquarters: number
  longest_time_as_survivor_seconds_headquarters_MURDER_INFECTION: number
  survivor_wins_headquarters: number
  survivor_wins_headquarters_MURDER_INFECTION: number
  total_time_survived_seconds_headquarters: number
  total_time_survived_seconds_headquarters_MURDER_INFECTION: number
  wins_headquarters_MURDER_INFECTION: number
  kills_archives_MURDER_ASSASSINS: number
  knife_kills_archives: number
  knife_kills_archives_MURDER_ASSASSINS: number
  wins_archives_MURDER_ASSASSINS: number
  kills_transport_MURDER_ASSASSINS: number
  thrown_knife_kills_transport_MURDER_ASSASSINS: number
  thrown_knife_kills_aquarium: number
  thrown_knife_kills_aquarium_MURDER_ASSASSINS: number
  coins_pickedup_skyway_pier: number
  coins_pickedup_skyway_pier_MURDER_ASSASSINS: number
  games_skyway_pier_MURDER_ASSASSINS: number
  kills_skyway_pier: number
  kills_skyway_pier_MURDER_ASSASSINS: number
  knife_kills_skyway_pier: number
  knife_kills_skyway_pier_MURDER_ASSASSINS: number
  wins_skyway_pier_MURDER_ASSASSINS: number
  bow_kills_aquarium: number
  bow_kills_aquarium_MURDER_DOUBLE_UP: number
  coins_pickedup_aquarium_MURDER_DOUBLE_UP: number
  kills_aquarium_MURDER_DOUBLE_UP: number
  was_hero_aquarium: number
  was_hero_aquarium_MURDER_DOUBLE_UP: number
  coins_pickedup_skyway_pier_MURDER_DOUBLE_UP: number
  games_skyway_pier_MURDER_DOUBLE_UP: number
  deaths_skyway_pier_MURDER_DOUBLE_UP: number
  wins_skyway_pier_MURDER_DOUBLE_UP: number
  MurderMystery_openedCommons: number
  MurderMystery_openedChests: number
  chest_history_new: string[]
  MurderMystery_openedRares: number
  active_last_words: string
  active_kill_note: string
  active_projectile_trail: string
  active_victory_dance: string
  MurderMystery_openedEpics: number
  kills_gold_rush_MURDER_ASSASSINS: number
  knife_kills_gold_rush_MURDER_ASSASSINS: number
  bow_kills_gold_rush_MURDER_DOUBLE_UP: number
  bow_kills_ancient_tomb_MURDER_DOUBLE_UP: number
  detective_wins_ancient_tomb: number
  detective_wins_ancient_tomb_MURDER_DOUBLE_UP: number
  quickest_detective_win_time_seconds_ancient_tomb: number
  quickest_detective_win_time_seconds_ancient_tomb_MURDER_DOUBLE_UP: number
  was_hero_ancient_tomb_MURDER_DOUBLE_UP: number
  active_gesture: string
  MurderMystery_openedLegendaries: number
  murderer_wins_headquarters: number
  murderer_wins_headquarters_MURDER_DOUBLE_UP: number
  bow_kills_mountain: number
  bow_kills_mountain_MURDER_INFECTION: number
  coins_pickedup_mountain_MURDER_INFECTION: number
  games_mountain_MURDER_INFECTION: number
  kills_as_survivor_mountain: number
  kills_as_survivor_mountain_MURDER_INFECTION: number
  kills_mountain_MURDER_INFECTION: number
  survivor_wins_mountain: number
  survivor_wins_mountain_MURDER_INFECTION: number
  total_time_survived_seconds_mountain: number
  total_time_survived_seconds_mountain_MURDER_INFECTION: number
  wins_mountain_MURDER_INFECTION: number
  games_snowfall_MURDER_INFECTION: number
  last_one_alive: number
  last_one_alive_MURDER_INFECTION: number
  last_one_alive_snowfall: number
  last_one_alive_snowfall_MURDER_INFECTION: number
  survivor_wins_snowfall: number
  survivor_wins_snowfall_MURDER_INFECTION: number
  total_time_survived_seconds_snowfall: number
  total_time_survived_seconds_snowfall_MURDER_INFECTION: number
  wins_snowfall_MURDER_INFECTION: number
  games_gold_rush_MURDER_INFECTION: number
  kills_as_survivor_gold_rush: number
  kills_as_survivor_gold_rush_MURDER_INFECTION: number
  longest_time_as_survivor_seconds_gold_rush: number
  longest_time_as_survivor_seconds_gold_rush_MURDER_INFECTION: number
  survivor_wins_gold_rush: number
  survivor_wins_gold_rush_MURDER_INFECTION: number
  total_time_survived_seconds_gold_rush: number
  total_time_survived_seconds_gold_rush_MURDER_INFECTION: number
  wins_gold_rush_MURDER_INFECTION: number
  kills_library_MURDER_ASSASSINS: number
  knife_kills_library: number
  knife_kills_library_MURDER_ASSASSINS: number
  wins_library_MURDER_ASSASSINS: number
  coins_pickedup_san_peratico_v2_MURDER_ASSASSINS: number
  deaths_easter_world_MURDER_ASSASSINS: number
  games_easter_world_MURDER_ASSASSINS: number
  coins_pickedup_snowfall_MURDER_ASSASSINS: number
  kills_snowfall: number
  kills_snowfall_MURDER_ASSASSINS: number
  knife_kills_snowfall: number
  knife_kills_snowfall_MURDER_ASSASSINS: number
  wins_snowfall_MURDER_ASSASSINS: number
  coins_pickedup_cruise_ship_MURDER_ASSASSINS: number
  deaths_cruise_ship_MURDER_ASSASSINS: number
  games_cruise_ship_MURDER_ASSASSINS: number
  kills_cruise_ship_MURDER_ASSASSINS: number
  knife_kills_cruise_ship_MURDER_ASSASSINS: number
  bow_kills_towerfall: number
  bow_kills_towerfall_MURDER_ASSASSINS: number
  bow_kills_san_peratico_v2: number
  bow_kills_san_peratico_v2_MURDER_INFECTION: number
  kills_as_infected: number
  kills_as_infected_MURDER_INFECTION: number
  kills_as_infected_san_peratico_v2: number
  kills_as_infected_san_peratico_v2_MURDER_INFECTION: number
  kills_as_survivor_san_peratico_v2: number
  kills_as_survivor_san_peratico_v2_MURDER_INFECTION: number
  kills_san_peratico_v2_MURDER_INFECTION: number
  coins_pickedup_archives_top_floor_MURDER_INFECTION: number
  games_archives_top_floor_MURDER_INFECTION: number
  kills_as_infected_archives_top_floor: number
  kills_as_infected_archives_top_floor_MURDER_INFECTION: number
  total_time_survived_seconds_archives_top_floor: number
  total_time_survived_seconds_archives_top_floor_MURDER_INFECTION: number
  survivor_wins_archives_top_floor: number
  survivor_wins_archives_top_floor_MURDER_INFECTION: number
  wins_archives_top_floor_MURDER_INFECTION: number
  coins_pickedup_hypixel_world_MURDER_INFECTION: number
  games_hypixel_world_MURDER_INFECTION: number
  survivor_wins_hypixel_world: number
  survivor_wins_hypixel_world_MURDER_INFECTION: number
  total_time_survived_seconds_hypixel_world: number
  total_time_survived_seconds_hypixel_world_MURDER_INFECTION: number
  wins_hypixel_world_MURDER_INFECTION: number
  deaths_skyway_pier_MURDER_ASSASSINS: number
  deaths_archives_top_floor_MURDER_ASSASSINS: number
  games_archives_top_floor_MURDER_ASSASSINS: number
  bow_kills_headquarters_MURDER_ASSASSINS: number
  thrown_knife_kills_headquarters_MURDER_ASSASSINS: number
  wins_headquarters_MURDER_ASSASSINS: number
  kills_as_survivor_transport: number
  kills_as_survivor_transport_MURDER_INFECTION: number
  kills_darkfall: number
  kills_darkfall_MURDER_ASSASSINS: number
  knife_kills_darkfall: number
  knife_kills_darkfall_MURDER_ASSASSINS: number
  wins_darkfall_MURDER_ASSASSINS: number
  coins_pickedup_library_MURDER_INFECTION: number
  games_library_MURDER_INFECTION: number
  kills_as_survivor_library: number
  kills_as_survivor_library_MURDER_INFECTION: number
  survivor_wins_library: number
  survivor_wins_library_MURDER_INFECTION: number
  total_time_survived_seconds_library: number
  total_time_survived_seconds_library_MURDER_INFECTION: number
  wins_library_MURDER_INFECTION: number
  deaths_archives_MURDER_INFECTION: number
  kills_as_infected_archives: number
  kills_as_infected_archives_MURDER_INFECTION: number
  coins_pickedup_archives_top_floor_MURDER_ASSASSINS: number
  kills_archives_top_floor: number
  kills_archives_top_floor_MURDER_ASSASSINS: number
  knife_kills_archives_top_floor: number
  knife_kills_archives_top_floor_MURDER_ASSASSINS: number
  wins_archives_top_floor_MURDER_ASSASSINS: number
  knife_kills_transport_MURDER_ASSASSINS: number
  coins_pickedup_gold_rush_MURDER_INFECTION: number
  coins_pickedup_cruise_ship_MURDER_INFECTION: number
  games_cruise_ship_MURDER_INFECTION: number
  total_time_survived_seconds_cruise_ship: number
  total_time_survived_seconds_cruise_ship_MURDER_INFECTION: number
  coins_pickedup_hollywood_MURDER_INFECTION: number
  games_hollywood_MURDER_INFECTION: number
  survivor_wins_hollywood: number
  survivor_wins_hollywood_MURDER_INFECTION: number
  total_time_survived_seconds_hollywood: number
  total_time_survived_seconds_hollywood_MURDER_INFECTION: number
  wins_hollywood_MURDER_INFECTION: number
  "games_widow's_den_MURDER_INFECTION": number
  "survivor_wins_widow's_den": number
  "survivor_wins_widow's_den_MURDER_INFECTION": number
  "total_time_survived_seconds_widow's_den": number
  "total_time_survived_seconds_widow's_den_MURDER_INFECTION": number
  "wins_widow's_den_MURDER_INFECTION": number
  deaths_cruise_ship_MURDER_INFECTION: number
  kills_as_infected_cruise_ship: number
  kills_as_infected_cruise_ship_MURDER_INFECTION: number
  "bow_kills_widow's_den": number
  "bow_kills_widow's_den_MURDER_INFECTION": number
  "kills_as_survivor_widow's_den": number
  "kills_as_survivor_widow's_den_MURDER_INFECTION": number
  "kills_widow's_den_MURDER_INFECTION": number
  bow_kills_mountain_MURDER_CLASSIC: number
  coins_pickedup_mountain_MURDER_CLASSIC: number
  detective_wins_mountain: number
  detective_wins_mountain_MURDER_CLASSIC: number
  kills_mountain_MURDER_CLASSIC: number
  was_hero_mountain: number
  was_hero_mountain_MURDER_CLASSIC: number
  survivor_wins_san_peratico_v2: number
  survivor_wins_san_peratico_v2_MURDER_INFECTION: number
  wins_san_peratico_v2_MURDER_INFECTION: number
  kills_as_survivor_ancient_tomb: number
  kills_as_survivor_ancient_tomb_MURDER_INFECTION: number
  coins_pickedup_skyway_pier_MURDER_INFECTION: number
  games_skyway_pier_MURDER_INFECTION: number
  survivor_wins_skyway_pier: number
  survivor_wins_skyway_pier_MURDER_INFECTION: number
  total_time_survived_seconds_skyway_pier: number
  total_time_survived_seconds_skyway_pier_MURDER_INFECTION: number
  wins_skyway_pier_MURDER_INFECTION: number
  kills_as_infected_ancient_tomb: number
  kills_as_infected_ancient_tomb_MURDER_INFECTION: number
  bow_kills_towerfall_MURDER_INFECTION: number
  deaths_towerfall_MURDER_INFECTION: number
  kills_as_survivor_towerfall: number
  kills_as_survivor_towerfall_MURDER_INFECTION: number
  kills_towerfall_MURDER_INFECTION: number
  last_one_alive_towerfall: number
  last_one_alive_towerfall_MURDER_INFECTION: number
  kills_as_survivor_hollywood: number
  kills_as_survivor_hollywood_MURDER_INFECTION: number
  kills_as_murderer_library: number
  kills_as_murderer_library_MURDER_DOUBLE_UP: number
  kills_library_MURDER_DOUBLE_UP: number
  knife_kills_library_MURDER_DOUBLE_UP: number
  murderer_wins_library: number
  murderer_wins_library_MURDER_DOUBLE_UP: number
  quickest_murderer_win_time_seconds_library: number
  quickest_murderer_win_time_seconds_library_MURDER_DOUBLE_UP: number
  coins_pickedup_spooky_mansion: number
  coins_pickedup_spooky_mansion_MURDER_CLASSIC: number
  deaths_spooky_mansion: number
  deaths_spooky_mansion_MURDER_CLASSIC: number
  games_spooky_mansion: number
  games_spooky_mansion_MURDER_CLASSIC: number
  wins_spooky_mansion: number
  wins_spooky_mansion_MURDER_CLASSIC: number
  coins_pickedup_hollywood_MURDER_CLASSIC: number
  games_hollywood_MURDER_CLASSIC: number
  wins_hollywood_MURDER_CLASSIC: number
  coins_pickedup_snowglobe: number
  coins_pickedup_snowglobe_MURDER_DOUBLE_UP: number
  games_snowglobe: number
  games_snowglobe_MURDER_DOUBLE_UP: number
  wins_snowglobe: number
  wins_snowglobe_MURDER_DOUBLE_UP: number
  coins_pickedup_spooky_mansion_MURDER_DOUBLE_UP: number
  games_spooky_mansion_MURDER_DOUBLE_UP: number
  kills_as_murderer_spooky_mansion: number
  kills_as_murderer_spooky_mansion_MURDER_DOUBLE_UP: number
  kills_spooky_mansion: number
  kills_spooky_mansion_MURDER_DOUBLE_UP: number
  knife_kills_spooky_mansion: number
  knife_kills_spooky_mansion_MURDER_DOUBLE_UP: number
  murderer_wins_spooky_mansion: number
  murderer_wins_spooky_mansion_MURDER_DOUBLE_UP: number
  wins_spooky_mansion_MURDER_DOUBLE_UP: number
  coins_pickedup_spooky_mansion_MURDER_ASSASSINS: number
  deaths_spooky_mansion_MURDER_ASSASSINS: number
  games_spooky_mansion_MURDER_ASSASSINS: number
  kills_as_murderer_hollywood: number
  kills_as_murderer_hollywood_MURDER_CLASSIC: number
  deaths_hollywood_MURDER_CLASSIC: number
  murderer_wins_ancient_tomb: number
  murderer_wins_ancient_tomb_MURDER_DOUBLE_UP: number
  quickest_murderer_win_time_seconds_ancient_tomb: number
  quickest_murderer_win_time_seconds_ancient_tomb_MURDER_DOUBLE_UP: number
  bow_kills_hollywood_MURDER_INFECTION: number
  kills_hollywood_MURDER_INFECTION: number
  was_hero_transport: number
  was_hero_transport_MURDER_DOUBLE_UP: number
  detective_wins_gold_rush_MURDER_DOUBLE_UP: number
  deaths_mountain_MURDER_DOUBLE_UP: number
  games_hypixel_world_MURDER_DOUBLE_UP: number
  coins_pickedup_hypixel_world_MURDER_DOUBLE_UP: number
  kills_as_murderer_hypixel_world: number
  kills_as_murderer_hypixel_world_MURDER_DOUBLE_UP: number
  kills_hypixel_world_MURDER_DOUBLE_UP: number
  knife_kills_hypixel_world_MURDER_DOUBLE_UP: number
  detective_wins_hypixel_world: number
  detective_wins_hypixel_world_MURDER_CLASSIC: number
  deaths_ancient_tomb_MURDER_CLASSIC: number
  bow_kills_towerfall_MURDER_CLASSIC: number
  detective_wins_towerfall: number
  detective_wins_towerfall_MURDER_CLASSIC: number
  was_hero_towerfall: number
  was_hero_towerfall_MURDER_CLASSIC: number
  coins_pickedup_villa: number
  coins_pickedup_villa_MURDER_DOUBLE_UP: number
  games_villa: number
  games_villa_MURDER_DOUBLE_UP: number
  wins_villa: number
  wins_villa_MURDER_DOUBLE_UP: number
  detective_wins_mountain_MURDER_DOUBLE_UP: number
  was_hero_mountain_MURDER_DOUBLE_UP: number
  deaths_villa: number
  deaths_villa_MURDER_DOUBLE_UP: number
  mm_christmas_chests: number
  deaths_spooky_mansion_MURDER_DOUBLE_UP: number
  deaths_darkfall_MURDER_CLASSIC: number
  coins_pickedup_villa_MURDER_CLASSIC: number
  deaths_villa_MURDER_CLASSIC: number
  games_villa_MURDER_CLASSIC: number
  suicides: number
  suicides_MURDER_DOUBLE_UP: number
  suicides_cruise_ship: number
  suicides_cruise_ship_MURDER_DOUBLE_UP: number
  murderer_wins_MURDER_CLASSIC: number
  murderer_wins_towerfall: number
  murderer_wins_towerfall_MURDER_CLASSIC: number
  coins_pickedup_subway: number
  coins_pickedup_subway_MURDER_CLASSIC: number
  games_subway: number
  games_subway_MURDER_CLASSIC: number
  wins_subway: number
  wins_subway_MURDER_CLASSIC: number
  deaths_subway: number
  deaths_subway_MURDER_CLASSIC: number
  coins_pickedup_skyway_pier_MURDER_CLASSIC: number
  kills_as_murderer_skyway_pier: number
  kills_as_murderer_skyway_pier_MURDER_CLASSIC: number
  kills_skyway_pier_MURDER_CLASSIC: number
  knife_kills_skyway_pier_MURDER_CLASSIC: number
  thrown_knife_kills_skyway_pier: number
  thrown_knife_kills_skyway_pier_MURDER_CLASSIC: number
  coins_pickedup_subway_MURDER_DOUBLE_UP: number
  games_subway_MURDER_DOUBLE_UP: number
  bow_kills_spooky_mansion: number
  bow_kills_spooky_mansion_MURDER_DOUBLE_UP: number
  was_hero_spooky_mansion: number
  was_hero_spooky_mansion_MURDER_DOUBLE_UP: number
  kills_as_murderer_hollywood_MURDER_DOUBLE_UP: number
  kills_hollywood_MURDER_DOUBLE_UP: number
  knife_kills_hollywood_MURDER_DOUBLE_UP: number
  deaths_aquarium_MURDER_CLASSIC: number
  kills_hollywood_MURDER_CLASSIC: number
  knife_kills_hollywood_MURDER_CLASSIC: number
  thrown_knife_kills_hollywood_MURDER_CLASSIC: number
  alpha_chance: number
  kills_as_survivor_skyway_pier: number
  kills_as_survivor_skyway_pier_MURDER_INFECTION: number
  deaths_snowglobe: number
  deaths_snowglobe_MURDER_CLASSIC: number
  games_snowglobe_MURDER_CLASSIC: number
  kills_as_infected_gold_rush: number
  kills_as_infected_gold_rush_MURDER_INFECTION: number
  coins_pickedup_darkfall_MURDER_INFECTION: number
  games_darkfall_MURDER_INFECTION: number
  total_time_survived_seconds_darkfall: number
  total_time_survived_seconds_darkfall_MURDER_INFECTION: number
  wins_darkfall_MURDER_INFECTION: number
}

export interface SuperSmash {
  lastLevel_THE_BULK: number
  active_class: string
  ONE_V_JUAN_firstGame: number
  ONE_V_JUAN_gamesDay: number
  smasher: number
  one_v_one_losses_normal: number
  coins: number
  friend_losses: number
  games_weekly_a: number
  friend_wins: number
  class_stats: ClassStats
  games_monthly_b: number
  kills_monthly_b: number
  smasher_normal: number
  one_v_one_losses: number
  losses_normal: number
  kills: number
  friend_wins_normal: number
  wins: number
  one_v_one_wins: number
  assists: number
  kills_weekly_a: number
  damage_dealt: number
  assists_normal: number
  losses_weekly_a: number
  losses_monthly_b: number
  losses: number
  smashed_normal: number
  quits: number
  wins_normal: number
  deaths_normal: number
  games_normal: number
  one_v_one_wins_normal: number
  smashed: number
  kills_normal: number
  deaths: number
  wins_weekly_a: number
  games: number
  damage_dealt_normal: number
  friend_losses_normal: number
  wins_monthly_b: number
  xp_THE_BULK: number
  win_streak: number
  deaths_2v2: number
  wins_2v2: number
  kills_2v2: number
  games_2v2: number
  smashed_2v2: number
  damage_dealt_2v2: number
  xp_GENERAL_CLUCK: number
  lastLevel_GENERAL_CLUCK: number
  losses_2v2: number
  smasher_2v2: number
  xp_CAKE_MONSTER: number
  lastLevel_CAKE_MONSTER: number
  xp_BOTMUN: number
  lastLevel_BOTMUN: number
  smashLevel: number
  smash_level_total: number
  damage_dealt_teams: number
  kills_teams: number
  smasher_teams: number
  deaths_teams: number
  games_teams: number
  wins_teams: number
  games_weekly_b: number
  kills_weekly_b: number
  losses_weekly_b: number
  wins_weekly_b: number
  classes: Classes
  lastLevel_MARAUDER: number
  xp_MARAUDER: number
  smash_play_streak: number
  lastLevel_SANIC: number
  xp_SANIC: number
  xp_PUG: number
  lastLevel_PUG: number
  xp_FROSTY: number
  lastLevel_FROSTY: number
  xp_SKULLFIRE: number
  lastLevel_SKULLFIRE: number
  xp_GOKU: number
  lastLevel_GOKU: number
  xp_SPODERMAN: number
  lastLevel_SPODERMAN: number
  xp_TINMAN: number
  lastLevel_TINMAN: number
}

export interface ClassStats {
  THE_BULK: TheBulk
  GENERAL_CLUCK: GeneralCluck
  CAKE_MONSTER: CakeMonster
  BOTMUN: Botmun
  MARAUDER: Marauder
  SANIC: Sanic
  PUG: Pug
  FROSTY: Frosty
  SKULLFIRE: Skullfire
  GOKU: Goku
  SPODERMAN: Spoderman
  TINMAN: Tinman
}

export interface TheBulk {
  monster_charge: MonsterCharge
  games: number
  melee: Melee
  damage_dealt_normal: number
  boulder: Boulder
  monster_mash: MonsterMash
  one_v_one_losses: number
  damage_dealt: number
  one_v_one_losses_normal: number
  games_normal: number
  kills: number
  smashed: number
  web_shot: WebShot
  kills_2v2: number
  games_2v2: number
  damage_dealt_2v2: number
  deaths_2v2: number
  smashed_2v2: number
  losses_2v2: number
  losses: number
  deaths: number
  one_v_one_wins_normal: number
  one_v_one_wins: number
  seismic_slam: SeismicSlam
  smasher_2v2: number
  smasher: number
  frostbolt: Frostbolt
  homing_missiles: HomingMissiles
  win_streak: number
  wins: number
  batarang: Batarang
  wins_2v2: number
  win_streak_2v2: number
  wins_teams: number
  smasher_teams: number
  damage_dealt_teams: number
  deaths_teams: number
  games_teams: number
  win_streak_teams: number
  kills_teams: number
  desert_eagle: DesertEagle
  throw_cake: ThrowCake
  botmubile: Botmubile
  smashed_normal: number
  smasher_normal: number
  laser_cannon: LaserCannon
}

export interface MonsterCharge {
  damage_dealt: number
  damage_dealt_normal: number
  damage_dealt_2v2: number
  smasher_2v2: number
  kills_2v2: number
  smasher: number
  kills: number
  damage_dealt_teams: number
}

export interface Melee {
  damage_dealt: number
  damage_dealt_normal: number
  damage_dealt_2v2: number
  kills: number
  smasher_2v2: number
  smasher: number
  kills_2v2: number
  damage_dealt_teams: number
  kills_teams: number
  smasher_teams: number
  smashed_2v2: number
  smashed: number
  smasher_normal: number
}

export interface Boulder {
  damage_dealt: number
  damage_dealt_normal: number
  damage_dealt_2v2: number
  kills_2v2: number
  kills: number
  kills_teams: number
  damage_dealt_teams: number
  smasher_teams: number
  smasher: number
  smasher_normal: number
}

export interface MonsterMash {
  damage_dealt: number
  damage_dealt_normal: number
  damage_dealt_2v2: number
  kills_2v2: number
  smasher: number
  kills: number
  smasher_2v2: number
  damage_dealt_teams: number
}

export interface WebShot {
  smashed_2v2: number
  smashed: number
}

export interface SeismicSlam {
  damage_dealt: number
  kills_2v2: number
  kills: number
  damage_dealt_2v2: number
  kills_teams: number
  damage_dealt_teams: number
  damage_dealt_normal: number
  smasher_2v2: number
  smasher: number
}

export interface Frostbolt {
  smashed_2v2: number
  smashed: number
}

export interface HomingMissiles {
  smashed_2v2: number
  smashed: number
}

export interface Batarang {
  smashed_2v2: number
  smashed: number
  smashed_normal: number
}

export interface DesertEagle {
  smashed: number
  smashed_2v2: number
}

export interface ThrowCake {
  smashed: number
  smashed_2v2: number
}

export interface Botmubile {
  smashed: number
  smashed_2v2: number
}

export interface LaserCannon {
  smashed_2v2: number
  smashed: number
}

export interface GeneralCluck {
  smashed_2v2: number
  damage_dealt_2v2: number
  bazooka: Bazooka
  deaths_2v2: number
  egg_bazooka: EggBazooka
  games_2v2: number
  reinforcements: Reinforcements
  games: number
  deaths: number
  smashed: number
  laser_cannon: LaserCannon2
  wins_2v2: number
  win_streak: number
  damage_dealt: number
  wins: number
  melee: Melee2
  kills_2v2: number
  kills: number
  win_streak_2v2: number
  games_normal: number
  damage_dealt_normal: number
  one_v_one_losses: number
  one_v_one_losses_normal: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
  losses_2v2: number
  losses: number
  shield_bash: ShieldBash
  damage_dealt_teams: number
  win_streak_teams: number
  wins_teams: number
  deaths_teams: number
  games_teams: number
  kills_teams: number
  smasher_teams: number
  smasher_2v2: number
  cake_storm: CakeStorm
  throw_cake: ThrowCake2
  botmubile: Botmubile2
  batarang: Batarang2
  ki_blast: KiBlast
  homing_missiles: HomingMissiles2
  desert_eagle: DesertEagle2
  one_v_one_wins_normal: number
  one_v_one_wins: number
  notched_bow: NotchedBow
  grappling_hook: GrapplingHook
  spider_kick: SpiderKick
  charged_beam: ChargedBeam
  swing_pin: SwingPin
}

export interface Bazooka {
  damage_dealt: number
  damage_dealt_2v2: number
  damage_dealt_normal: number
  smasher_normal: number
  smasher: number
  kills: number
  damage_dealt_teams: number
  kills_teams: number
  kills_2v2: number
  smasher_2v2: number
  smashed: number
  smashed_normal: number
  smashed_2v2: number
}

export interface EggBazooka {
  damage_dealt: number
  damage_dealt_2v2: number
  damage_dealt_normal: number
  damage_dealt_teams: number
  kills_2v2: number
  smasher_2v2: number
  smasher: number
  kills: number
  smashed: number
  smashed_normal: number
}

export interface Reinforcements {
  damage_dealt: number
  damage_dealt_2v2: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
  smasher_teams: number
  damage_dealt_teams: number
  kills: number
  kills_teams: number
  smasher_2v2: number
  kills_2v2: number
}

export interface LaserCannon2 {
  smashed_2v2: number
  smashed: number
}

export interface Melee2 {
  damage_dealt_2v2: number
  kills: number
  damage_dealt: number
  kills_2v2: number
  damage_dealt_normal: number
  smashed_normal: number
  smashed: number
  damage_dealt_teams: number
  smashed_2v2: number
  smasher: number
  smasher_2v2: number
  smasher_normal: number
}

export interface ShieldBash {
  smashed: number
  smashed_normal: number
}

export interface CakeStorm {
  smashed: number
  smashed_2v2: number
}

export interface ThrowCake2 {
  smashed_2v2: number
  smashed: number
}

export interface Botmubile2 {
  smashed_2v2: number
  smashed: number
}

export interface Batarang2 {
  smashed: number
  smashed_2v2: number
}

export interface KiBlast {
  smashed_2v2: number
  smashed: number
}

export interface HomingMissiles2 {
  smashed: number
  smashed_2v2: number
}

export interface DesertEagle2 {
  smashed_2v2: number
  smashed: number
}

export interface NotchedBow {
  smashed: number
  smashed_2v2: number
}

export interface GrapplingHook {
  smashed: number
  smashed_normal: number
}

export interface SpiderKick {
  smashed: number
  smashed_2v2: number
}

export interface ChargedBeam {
  smashed_2v2: number
  smashed: number
}

export interface SwingPin {
  smashed: number
  smashed_normal: number
}

export interface CakeMonster {
  smasher_2v2: number
  win_streak: number
  swing_pin: SwingPin2
  throw_cake: ThrowCake3
  melee: Melee3
  smasher: number
  cake_storm: CakeStorm2
  deaths_2v2: number
  damage_dealt_2v2: number
  deaths: number
  games_2v2: number
  win_streak_2v2: number
  wins_2v2: number
  damage_dealt: number
  kills: number
  games: number
  wins: number
  kills_2v2: number
  smashed_2v2: number
  smashed: number
  losses_2v2: number
  losses: number
  damage_dealt_normal: number
  one_v_one_wins: number
  games_normal: number
  one_v_one_wins_normal: number
  defecake: Defecake
  smashed_normal: number
  void_slash: VoidSlash
  one_v_one_losses_normal: number
  one_v_one_losses: number
  force_pull: ForcePull
  force_lightning: ForceLightning
  smasher_normal: number
  charged_beam: ChargedBeam2
  batarang: Batarang3
  grappling_hook: GrapplingHook2
  desert_eagle: DesertEagle3
}

export interface SwingPin2 {
  damage_dealt: number
  kills: number
  smasher: number
  damage_dealt_2v2: number
  kills_2v2: number
  smasher_2v2: number
  damage_dealt_normal: number
  smashed: number
  smashed_normal: number
  smasher_normal: number
}

export interface ThrowCake3 {
  kills_2v2: number
  damage_dealt: number
  damage_dealt_2v2: number
  smasher: number
  smasher_2v2: number
  kills: number
  damage_dealt_normal: number
  smasher_normal: number
}

export interface Melee3 {
  smasher_2v2: number
  smasher: number
  damage_dealt_2v2: number
  kills: number
  kills_2v2: number
  damage_dealt: number
  damage_dealt_normal: number
  smashed_2v2: number
  smashed: number
  smasher_normal: number
  smashed_normal: number
}

export interface CakeStorm2 {
  kills_2v2: number
  kills: number
  damage_dealt: number
  damage_dealt_2v2: number
  damage_dealt_normal: number
  smasher_normal: number
  smasher: number
}

export interface Defecake {
  damage_dealt: number
  damage_dealt_normal: number
  damage_dealt_2v2: number
}

export interface VoidSlash {
  smashed: number
  smashed_2v2: number
}

export interface ForcePull {
  smashed: number
  smashed_2v2: number
}

export interface ForceLightning {
  smashed: number
  smashed_2v2: number
}

export interface ChargedBeam2 {
  smashed: number
  smashed_2v2: number
}

export interface Batarang3 {
  smashed: number
  smashed_normal: number
}

export interface GrapplingHook2 {
  smashed: number
  smashed_normal: number
}

export interface DesertEagle3 {
  smashed: number
  smashed_2v2: number
}

export interface Botmun {
  melee: Melee4
  deaths: number
  damage_dealt_2v2: number
  games: number
  boulder: Boulder2
  batarang: Batarang4
  deaths_2v2: number
  damage_dealt: number
  smashed: number
  grappling_hook: GrapplingHook3
  losses_2v2: number
  losses: number
  games_2v2: number
  smashed_2v2: number
  botmubile: Botmubile3
  one_v_one_wins_normal: number
  one_v_one_wins: number
  games_normal: number
  damage_dealt_normal: number
  charged_beam: ChargedBeam3
  kills: number
  kills_2v2: number
  one_v_one_losses: number
  smasher: number
  smasher_normal: number
  one_v_one_losses_normal: number
  smashed_normal: number
}

export interface Melee4 {
  damage_dealt_2v2: number
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface Boulder2 {
  smashed_2v2: number
  smashed: number
}

export interface Batarang4 {
  damage_dealt: number
  damage_dealt_2v2: number
  damage_dealt_normal: number
  kills: number
  kills_2v2: number
  smasher_normal: number
  smasher: number
  smashed: number
  smashed_normal: number
}

export interface GrapplingHook3 {
  damage_dealt_2v2: number
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Botmubile3 {
  damage_dealt_normal: number
  damage_dealt: number
  damage_dealt_2v2: number
}

export interface ChargedBeam3 {
  smashed: number
  smashed_2v2: number
}

export interface Marauder {
  games: number
  games_normal: number
  one_v_one_wins: number
  one_v_one_wins_normal: number
  batarang: Batarang5
  botmubile: Botmubile4
  damage_dealt: number
  damage_dealt_normal: number
  force_lightning: ForceLightning2
  force_pull: ForcePull2
  melee: Melee5
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
  ki_blast: KiBlast2
  one_v_one_losses: number
  one_v_one_losses_normal: number
  damage_dealt_2v2: number
  deaths: number
  deaths_2v2: number
  games_2v2: number
  kills: number
  kills_2v2: number
  losses: number
  losses_2v2: number
  smashed_2v2: number
  smasher_2v2: number
  throw_cake: ThrowCake4
  laser_cannon: LaserCannon3
  monster_mash: MonsterMash2
  spider_kick: SpiderKick2
  boulder: Boulder3
  deaths_normal: number
  flaming_desert_eagle: FlamingDesertEagle
  kills_normal: number
  win_streak: number
  win_streak_normal: number
  wins: number
  wins_normal: number
  desert_eagle: DesertEagle4
  losses_normal: number
  frostbolt: Frostbolt2
  charged_beam: ChargedBeam4
  grappling_hook: GrapplingHook4
}

export interface Batarang5 {
  smashed: number
  smashed_normal: number
}

export interface Botmubile4 {
  smashed: number
  smashed_normal: number
}

export interface ForceLightning2 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
  damage_dealt_2v2: number
  kills: number
  kills_normal: number
}

export interface ForcePull2 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
  damage_dealt_2v2: number
  kills: number
  kills_2v2: number
  smasher_2v2: number
  kills_normal: number
}

export interface Melee5 {
  damage_dealt: number
  damage_dealt_normal: number
  smashed: number
  smashed_normal: number
  damage_dealt_2v2: number
  kills: number
  kills_2v2: number
  smasher: number
  smasher_normal: number
  kills_normal: number
}

export interface KiBlast2 {
  smashed: number
  smashed_normal: number
}

export interface ThrowCake4 {
  smashed: number
  smashed_2v2: number
  smashed_normal: number
}

export interface LaserCannon3 {
  smashed: number
  smashed_normal: number
}

export interface MonsterMash2 {
  smashed: number
  smashed_normal: number
}

export interface SpiderKick2 {
  smashed: number
  smashed_normal: number
}

export interface Boulder3 {
  smashed: number
  smashed_normal: number
}

export interface FlamingDesertEagle {
  smashed: number
  smashed_normal: number
}

export interface DesertEagle4 {
  smashed: number
  smashed_normal: number
}

export interface Frostbolt2 {
  smashed: number
  smashed_normal: number
}

export interface ChargedBeam4 {
  smashed: number
  smashed_normal: number
}

export interface GrapplingHook4 {
  smashed: number
  smashed_normal: number
}

export interface Sanic {
  boom: Boom
  damage_dealt: number
  damage_dealt_normal: number
  dash: Dash
  games: number
  games_normal: number
  melee: Melee6
  monster_mash: MonsterMash3
  one_v_one_wins: number
  one_v_one_wins_normal: number
  onion_cannon: OnionCannon
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
  boulder: Boulder4
  bazooka: Bazooka2
  reinforcements: Reinforcements2
  one_v_one_losses: number
  one_v_one_losses_normal: number
}

export interface Boom {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Dash {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface Melee6 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
  smashed: number
  smashed_normal: number
}

export interface MonsterMash3 {
  smashed: number
  smashed_normal: number
}

export interface OnionCannon {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Boulder4 {
  smashed: number
  smashed_normal: number
}

export interface Bazooka2 {
  smashed: number
  smashed_normal: number
}

export interface Reinforcements2 {
  smashed: number
  smashed_normal: number
}

export interface Pug {
  bite: Bite
  damage_dealt: number
  damage_dealt_normal: number
  games: number
  games_normal: number
  melee: Melee7
  one_v_one_wins: number
  one_v_one_wins_normal: number
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
  supersonic_bark: SupersonicBark
  werepug: Werepug
}

export interface Bite {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Melee7 {
  damage_dealt: number
  damage_dealt_normal: number
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
}

export interface SupersonicBark {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Werepug {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Frosty {
  bazooka: Bazooka3
  damage_dealt: number
  damage_dealt_normal: number
  freezing_breath: FreezingBreath
  frostbolt: Frostbolt3
  games: number
  games_normal: number
  melee: Melee8
  one_v_one_wins: number
  one_v_one_wins_normal: number
  smashed: number
  smashed_normal: number
}

export interface Bazooka3 {
  smashed: number
  smashed_normal: number
}

export interface FreezingBreath {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Frostbolt3 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Melee8 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Skullfire {
  damage_dealt: number
  damage_dealt_normal: number
  desert_eagle: DesertEagle5
  flaming_desert_eagle: FlamingDesertEagle2
  games: number
  games_normal: number
  grenade: Grenade
  melee: Melee9
  one_v_one_losses: number
  one_v_one_losses_normal: number
  reinforcements: Reinforcements3
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
}

export interface DesertEagle5 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface FlamingDesertEagle2 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Grenade {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Melee9 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Reinforcements3 {
  smashed: number
  smashed_normal: number
}

export interface Goku {
  bazooka: Bazooka4
  damage_dealt: number
  damage_dealt_normal: number
  games: number
  games_normal: number
  kame_beam: KameBeam
  ki_blast: KiBlast3
  melee: Melee10
  one_v_one_losses: number
  one_v_one_losses_normal: number
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
  one_v_one_wins: number
  one_v_one_wins_normal: number
  reinforcements: Reinforcements4
}

export interface Bazooka4 {
  smashed: number
  smashed_normal: number
}

export interface KameBeam {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface KiBlast3 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface Melee10 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface Reinforcements4 {
  smashed: number
  smashed_normal: number
}

export interface Spoderman {
  bazooka: Bazooka5
  damage_dealt: number
  damage_dealt_normal: number
  games: number
  games_normal: number
  melee: Melee11
  one_v_one_wins: number
  one_v_one_wins_normal: number
  smashed: number
  smashed_normal: number
  spider_kick: SpiderKick3
  spooder_buddies: SpooderBuddies
  wall_climber: WallClimber
  web_shot: WebShot2
  smasher: number
  smasher_normal: number
}

export interface Bazooka5 {
  smashed: number
  smashed_normal: number
}

export interface Melee11 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface SpiderKick3 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface SpooderBuddies {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface WallClimber {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface WebShot2 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Tinman {
  bazooka: Bazooka6
  damage_dealt: number
  damage_dealt_normal: number
  games: number
  games_normal: number
  homing_missiles: HomingMissiles3
  laser_cannon: LaserCannon4
  melee: Melee12
  one_v_one_wins: number
  one_v_one_wins_normal: number
  reinforcements: Reinforcements5
  rocket_punch: RocketPunch
  smashed: number
  smashed_normal: number
  smasher: number
  smasher_normal: number
}

export interface Bazooka6 {
  smashed: number
  smashed_normal: number
}

export interface HomingMissiles3 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface LaserCannon4 {
  damage_dealt: number
  damage_dealt_normal: number
  smasher: number
  smasher_normal: number
}

export interface Melee12 {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Reinforcements5 {
  smashed: number
  smashed_normal: number
}

export interface RocketPunch {
  damage_dealt: number
  damage_dealt_normal: number
}

export interface Classes {
  MARAUDER: boolean
  SANIC: boolean
  PUG: boolean
  FROSTY: boolean
  SKULLFIRE: boolean
  GOKU: boolean
  SPODERMAN: boolean
  TINMAN: boolean
}

export interface Tntgames {
  wins: number
  new_spleef_double_jumps: number
  new_icewizard_regen: number
  new_tntrun_double_jumps: number
  packages: string[]
  new_tntag_speedy: number
  new_bloodwizard_regen: number
  new_kineticwizard_regen: number
  new_spleef_tripleshot: number
  new_spleef_repulsor: number
  new_pvprun_double_jumps: number
  new_firewizard_explode: number
  new_kineticwizard_explode: number
  new_firewizard_regen: number
  new_bloodwizard_explode: number
  new_icewizard_explode: number
  new_witherwizard_regen: number
  new_witherwizard_explode: number
  run_potions_splashed_on_players: number
  record_tntrun: number
  coins: number
  deaths_tntrun: number
  wizards_selected_class: string
  deaths_bowspleef: number
  tags_bowspleef: number
  wins_tntrun: number
  new_tntrun_slowness_potions: number
  new_tntrun_speed_potions: number
  deaths_pvprun: number
  record_pvprun: number
  kills_tntag: number
  points_capture: number
  kinetic_healing_capture: number
  air_time_capture: number
  tag_speeditup: number
  tag_slowitdown: number
  tag_blastprotection: number
  privategames: Privategames
  new_stormwizard_explode: number
  new_stormwizard_regen: number
  flags: Flags
  new_icewizard_damage_taken: number
  new_stormwizard_damage_taken: number
  new_icewizard_deaths: number
  new_stormwizard_healing: number
  assists_capture: number
  new_icewizard_healing: number
  new_stormwizard_deaths: number
  new_icewizard_assists: number
  deaths_capture: number
  kills_pvprun: number
  wins_pvprun: number
  wins_bowspleef: number
  lastTourneyAd: number
  deaths_tourney_tnt_run_0: number
  wins_tourney_tnt_run_0: number
  new_spleef_arrowrain: number
  new_spleef_exlosive_dash: number
  new_pvprun_notoriety: number
  new_pvprun_regeneration: number
  new_pvprun_fortitude: number
  new_toxicwizard_explode: number
  new_ancientwizard_regen: number
  new_ancientwizard_explode: number
  kills_capture: number
  new_ancientwizard_healing: number
  new_icewizard_kills: number
  new_stormwizard_assists: number
  new_firewizard_assists: number
  new_ancientwizard_damage_taken: number
  new_hydrowizard_regen: number
  new_hydrowizard_explode: number
  new_hydrowizard_deaths: number
  wins_capture: number
  new_hydrowizard_damage_taken: number
  new_hydrowizard_assists: number
  new_hydrowizard_healing: number
  deaths_tntag: number
  wins_tntag: number
}

export interface Privategames {
  maxed_perks: boolean
  tnt_run_snowballs: boolean
  speed: string
  low_gravity: boolean
  tnt_tag_no_powerups: boolean
  tnt_tag_deathmatch: boolean
  bow_spleef_heavy_arrows: boolean
  bow_spleef_quintuple: boolean
  bowspleef_dj_multiplier: string
  pvp_run_sword_type: string
  pvp_run_armor_type: string
  pvp_run_knockback: boolean
}

export interface Flags {
  enable_explosive_dash: boolean
  give_dj_feather: boolean
  show_tip_holograms: boolean
  show_tntrun_actionbar_info: boolean
  show_tnttag_actionbar_info: boolean
  show_wizards_actionbar_info: boolean
}

export interface Arcade {
  best_round_zombies: number
  headshots_zombies: number
  coins: number
  deaths_zombies: number
  times_knocked_down_zombies: number
  bullets_shot_zombies: number
  zombie_kills_zombies: number
  bullets_hit_zombies: number
  monthly_coins_b: number
  weekly_coins_a: number
  wins_farm_hunt: number
  miniwalls_activeKit: string
  arrows_hit_mini_walls: number
  kills_mini_walls: number
  deaths_mini_walls: number
  arrows_shot_mini_walls: number
  poop_collected: number
  weekly_coins_b: number
  fastest_time_10_zombies: number
  magma_cube_zombie_kills_zombies: number
  deaths_zombies_deadend: number
  blaze_zombie_kills_zombies: number
  basic_zombie_kills_zombies: number
  windows_repaired_zombies_deadend: number
  tnt_baby_zombie_kills_zombies: number
  zombie_kills_zombies_deadend: number
  magma_zombie_kills_zombies: number
  total_rounds_survived_zombies_deadend: number
  fire_zombie_kills_zombies: number
  doors_opened_zombies: number
  windows_repaired_zombies: number
  total_rounds_survived_zombies: number
  wolf_zombie_kills_zombies: number
  empowered_zombie_kills_zombies: number
  pig_zombie_zombie_kills_zombies: number
  doors_opened_zombies_deadend: number
  times_knocked_down_zombies_deadend: number
  headshots_dayone: number
  kills_dayone: number
  windows_repaired_zombies_alienarcadium: number
  total_rounds_survived_zombies_alienarcadium: number
  zombie_kills_zombies_alienarcadium: number
  deaths_zombies_alienarcadium: number
  best_round_zombies_deadend_normal: number
  best_round_zombies_deadend: number
  total_rounds_survived_zombies_deadend_normal: number
  zombie_kills_zombies_deadend_normal: number
  windows_repaired_zombies_deadend_normal: number
  times_knocked_down_zombies_deadend_normal: number
  deaths_zombies_deadend_normal: number
  fastest_time_10_zombies_deadend_normal: number
  players_revived_zombies_deadend_normal: number
  doors_opened_zombies_deadend_normal: number
  players_revived_zombies: number
  players_revived_zombies_deadend: number
  time_stamp: number
  stamp_level: number
  monthly_coins_a: number
  rounds_simon_says: number
  powerkicks_soccer: number
  kicks_soccer: number
  bounty_kills_oneinthequiver: number
  deaths_oneinthequiver: number
  kills_oneinthequiver: number
  hitw_record_q: number
  rounds_hole_in_the_wall: number
  wins_party: number
  goals_soccer: number
  kills_dragonwars2: number
  best_round_zombies_alienarcadium: number
  best_round_zombies_alienarcadium_normal: number
  blob_zombie_kills_zombies: number
  clown_zombie_kills_zombies: number
  deaths_zombies_alienarcadium_normal: number
  fastest_time_10_zombies_alienarcadium_normal: number
  players_revived_zombies_alienarcadium: number
  players_revived_zombies_alienarcadium_normal: number
  rainbow_zombie_kills_zombies: number
  sentinel_zombie_kills_zombies: number
  skeleton_zombie_kills_zombies: number
  space_blaster_zombie_kills_zombies: number
  space_grunt_zombie_kills_zombies: number
  times_knocked_down_zombies_alienarcadium: number
  times_knocked_down_zombies_alienarcadium_normal: number
  total_rounds_survived_zombies_alienarcadium_normal: number
  windows_repaired_zombies_alienarcadium_normal: number
  worm_small_zombie_kills_zombies: number
  worm_zombie_kills_zombies: number
  zombie_kills_zombies_alienarcadium_normal: number
  fastest_time_20_zombies: number
  fastest_time_20_zombies_deadend_normal: number
  silverfish_zombie_kills_zombies: number
  skelefish_zombie_kills_zombies: number
  eggs_found_easter_simulator: number
  melee_weapon: string
  packages: string[]
  tnt_zombie_kills_zombies: number
  ender_zombie_kills_zombies: number
  endermite_zombie_kills_zombies: number
  guardian_zombie_kills_zombies: number
  bounty_head: string
  max_wave: number
  wins_easter_simulator: number
  doors_opened_zombies_alienarcadium: number
  doors_opened_zombies_alienarcadium_normal: number
  hitw_record_f: number
  wither_damage_mini_walls: number
  final_kills_mini_walls: number
  best_round_zombies_deadend_rip: number
  deaths_zombies_deadend_rip: number
  total_rounds_survived_zombies_deadend_rip: number
  windows_repaired_zombies_deadend_rip: number
  zombie_kills_zombies_deadend_rip: number
  deaths_throw_out: number
  kills_throw_out: number
  items_found_scuba_simulator: number
  total_points_scuba_simulator: number
  fastest_time_30_zombies: number
  fastest_time_30_zombies_deadend_normal: number
  wins_zombies: number
  wins_zombies_deadend: number
  wins_zombies_deadend_normal: number
  wins_soccer: number
  candy_found_halloween_simulator: number
  gifts_grinch_simulator_v2: number
  lastTourneyAd: number
  wins_oneinthequiver: number
  wins_dayone: number
  best_round_zombies_deadend_hard: number
  deaths_zombies_deadend_hard: number
  times_knocked_down_zombies_deadend_hard: number
  total_rounds_survived_zombies_deadend_hard: number
  windows_repaired_zombies_deadend_hard: number
  zombie_kills_zombies_deadend_hard: number
  inferno_zombie_kills_zombies: number
  chgluglu_zombie_kills_zombies: number
  fastest_time_20_zombies_alienarcadium_normal: number
  ghast_zombie_kills_zombies: number
  giant_zombie_kills_zombies: number
  iron_golem_zombie_kills_zombies: number
  mega_blob_zombie_kills_zombies: number
  mega_magma_zombie_kills_zombies: number
  best_round_zombies_badblood: number
  best_round_zombies_badblood_normal: number
  cave_spider_zombie_kills_zombies: number
  deaths_zombies_badblood: number
  deaths_zombies_badblood_normal: number
  doors_opened_zombies_badblood: number
  doors_opened_zombies_badblood_normal: number
  fastest_time_10_zombies_badblood_normal: number
  king_slime_zombie_kills_zombies: number
  slime_zombie_kills_zombies: number
  slime_zombie_zombie_kills_zombies: number
  times_knocked_down_zombies_badblood: number
  times_knocked_down_zombies_badblood_normal: number
  total_rounds_survived_zombies_badblood: number
  total_rounds_survived_zombies_badblood_normal: number
  werewolf_zombie_kills_zombies: number
  windows_repaired_zombies_badblood: number
  windows_repaired_zombies_badblood_normal: number
  witch_zombie_kills_zombies: number
  wither_skeleton_zombie_kills_zombies: number
  wither_zombie_zombie_kills_zombies: number
  zombie_kills_zombies_badblood: number
  zombie_kills_zombies_badblood_normal: number
  party_pooper_seeker_wins_hide_and_seek: number
  seeker_wins_hide_and_seek: number
  showinfobook: boolean
  family_twin_red_zombie_kills_zombies: number
  players_revived_zombies_badblood: number
  players_revived_zombies_badblood_normal: number
  wolf_pet_zombie_kills_zombies: number
  round_wins_santa_says: number
  top_score_santa_says: number
  wins_simon_says: number
  anvil_spleef_best_time_party: number
  anvil_spleef_round_wins_party: number
  bombardment_best_time_party: number
  fire_leapers_round_wins_party: number
  high_ground_best_score_party: number
  high_ground_total_score_party: number
  lab_escape_best_time_party: number
  round_wins_party: number
  rpg_16_kills_best_score_party: number
  rpg_16_kills_party: number
  total_stars_party: number
  workshop_round_wins_party: number
  animal_slaughter_best_score_party: number
  animal_slaughter_kills_party: number
  jungle_jump_best_time_party: number
  jungle_jump_round_wins_party: number
  animal_wins_farm_hunt: number
  dangerous_taunts_used_farm_hunt: number
  firework_taunts_used_farm_hunt: number
  risky_taunts_used_farm_hunt: number
  safe_taunts_used_farm_hunt: number
  taunts_used_farm_hunt: number
  animal_slaughter_round_wins_party: number
  dive_best_score_party: number
  dive_total_score_party: number
  mini_walls_inventory_layout: MiniWallsInventoryLayout
  arrows_shot_tourney_mini_walls_0: number
  deaths_tourney_mini_walls_0: number
  kills_tourney_mini_walls_0: number
  wither_damage_tourney_mini_walls_0: number
  arrows_hit_tourney_mini_walls_0: number
  final_kills_tourney_mini_walls_0: number
  wins_tourney_mini_walls_0: number
  wither_kills_tourney_mini_walls_0: number
  pixel_party: PixelParty
  hunter_kills_farm_hunt: number
  hunter_wins_farm_hunt: number
  kills_farm_hunt: number
  poop_collected_farm_hunt: number
  pixel_party_music_volume: number
  bow_kills_farm_hunt: number
  hunter_bow_kills_farm_hunt: number
  hunters_bow_kills_farm_hunt: number
  bow_kills_oneinthequiver: number
  sword_kills_oneinthequiver: number
  round_wins_simon_says: number
  top_score_simon_says: number
  blocks_destroyed_ender: number
  powerup_activations_ender: number
  tripleshot_powerup_activations_ender: number
  hider_wins_hide_and_seek: number
  party_pooper_hider_wins_hide_and_seek: number
  bigshot_powerup_activations_ender: number
  leaderboardSettings: LeaderboardSettings
  chicken_rings_best_time_party: number
  jigsaw_rush_best_time_party: number
  rpg_16_round_wins_party: number
  shooting_range_round_wins_party: number
  woolhunt_assists: number
  woolhunt_deaths: number
  woolhunt_deaths_to_woolholder: number
  woolhunt_deaths_with_wool: number
  woolhunt_experienced_losses: number
  woolhunt_experienced_wins: number
  woolhunt_fastest_win: number
  woolhunt_fastest_wool_capture: number
  woolhunt_gold_earned: number
  woolhunt_gold_spent: number
  woolhunt_kills: number
  woolhunt_kills_on_woolholder: number
  woolhunt_kills_with_wool: number
  woolhunt_longest_game: number
  woolhunt_most_gold_earned: number
  woolhunt_most_kills_and_assists: number
  woolhunt_participated_losses: number
  woolhunt_participated_wins: number
  woolhunt_wools_captured: number
  woolhunt_wools_stolen: number
  dropper: Dropper
  gifts_grinch_simulator_v2_tourney_grinch_simulator_1: number
  losses_grinch_simulator_v2_tourney_grinch_simulator_1: number
}

export interface MiniWallsInventoryLayout {
  "0": number
  "1": number
  "2": number
  "5": number
  "6": number
  "7": number
  "8": number
}

export interface PixelParty {
  games_played: number
  games_played_normal: number
  highest_round: number
  rounds_completed: number
  rounds_completed_normal: number
  games_played_hyper: number
  power_ups_collected: number
  power_ups_collected_hyper: number
  rounds_completed_hyper: number
}

export interface LeaderboardSettings {
  resetType: string
  mode: string
}

export interface Dropper {
  games_played: number
  map_stats: MapStats
  maps_completed: number
  fails: number
}

export interface MapStats {
  bbq: Bbq
  castle: Castle
  city: City
  floatingislands: Floatingislands
  time: Time
  toilet: Toilet
}

export interface Bbq {
  best_time: number
}

export interface Castle {
  best_time: number
}

export interface City {
  best_time: number
}

export interface Floatingislands {
  best_time: number
}

export interface Time {
  best_time: number
}

export interface Toilet {
  best_time: number
}

export interface Walls3 {
  packages: string[]
  herobrine_a_total_kills_standard: number
  herobrine_assists: number
  herobrine_a_activations_standard: number
  defender_assists_standard: number
  herobrine_potions_drunk_standard: number
  herobrine_blocks_broken_standard: number
  herobrine_meters_fallen_standard: number
  herobrine_games_played: number
  herobrine_iron_ore_broken: number
  total_deaths: number
  herobrine_potions_drunk: number
  herobrine_blocks_broken: number
  losses_standard: number
  herobrine_final_deaths_standard: number
  total_kills: number
  activations_standard: number
  treasures_found: number
  herobrine_deaths: number
  wood_chopped: number
  herobrine_deaths_standard: number
  bread_crafted_standard: number
  herobrine_blocks_placed: number
  time_played: number
  herobrine_blocks_placed_preparation: number
  herobrine_food_eaten: number
  wood_chopped_standard: number
  herobrine_losses_standard: number
  herobrine_a_total_kills: number
  herobrine_defender_assists: number
  assists: number
  food_eaten_standard: number
  final_deaths: number
  games_played: number
  blocks_placed_standard: number
  herobrine_total_deaths: number
  blocks_placed_preparation: number
  herobrine_final_deaths: number
  blocks_placed_preparation_standard: number
  herobrine_blocks_placed_standard: number
  herobrine_activations: number
  total_kills_standard: number
  time_played_standard: number
  deaths: number
  herobrine_a_assists: number
  herobrine_wood_chopped: number
  herobrine_treasures_found_standard: number
  herobrine_iron_ore_broken_standard: number
  iron_ore_broken_standard: number
  treasures_found_standard: number
  food_eaten: number
  herobrine_defender_assists_standard: number
  herobrine_bread_crafted: number
  blocks_broken_standard: number
  potions_drunk_standard: number
  herobrine_meters_walked_speed: number
  losses: number
  meters_walked_speed_standard: number
  herobrine_wood_chopped_standard: number
  herobrine_a_assists_standard: number
  herobrine_meters_walked: number
  final_deaths_standard: number
  herobrine_treasures_found: number
  herobrine_blocks_placed_preparation_standard: number
  herobrine_time_played: number
  meters_walked: number
  herobrine_activations_standard: number
  meters_fallen_standard: number
  bread_crafted: number
  herobrine_meters_walked_speed_standard: number
  potions_drunk: number
  blocks_broken: number
  activations: number
  assists_standard: number
  blocks_placed: number
  herobrine_total_deaths_standard: number
  meters_walked_speed: number
  iron_ore_broken: number
  steaks_eaten: number
  herobrine_food_eaten_standard: number
  herobrine_losses: number
  deaths_standard: number
  herobrine_bread_crafted_standard: number
  total_deaths_standard: number
  herobrine_total_kills_standard: number
  steaks_eaten_standard: number
  herobrine_games_played_standard: number
  herobrine_meters_fallen: number
  herobrine_meters_walked_standard: number
  defender_assists: number
  meters_fallen: number
  coins: number
  herobrine_assists_standard: number
  herobrine_time_played_standard: number
  meters_walked_standard: number
  games_played_standard: number
  herobrine_steaks_eaten: number
  herobrine_a_activations: number
  herobrine_total_kills: number
  herobrine_steaks_eaten_standard: number
  chosen_class: string
  zombie_blocks_broken: number
  energy_syphoned_standard: number
  zombie_meters_fallen: number
  zombie_wither_damage: number
  zombie_meters_fallen_standard: number
  zombie_final_deaths: number
  zombie_blocks_broken_standard: number
  zombie_deaths_standard: number
  zombie_arrows_fired_standard: number
  zombie_blocks_placed: number
  zombie_time_played_standard: number
  zombie_time_played: number
  zombie_energy_syphoned: number
  self_healed: number
  zombie_iron_ore_broken: number
  arrows_fired_standard: number
  zombie_losses: number
  zombie_potions_drunk: number
  zombie_games_played: number
  zombie_activations_standard: number
  zombie_meters_walked: number
  zombie_meters_walked_standard: number
  wither_damage_standard: number
  zombie_treasures_found_standard: number
  energy_syphoned: number
  zombie_blocks_placed_preparation_standard: number
  zombie_arrows_fired: number
  zombie_meters_walked_speed: number
  zombie_activations: number
  zombie_self_healed: number
  zombie_losses_standard: number
  zombie_wood_chopped: number
  zombie_meters_walked_speed_standard: number
  zombie_a_amount_healed: number
  zombie_total_deaths_standard: number
  self_healed_standard: number
  zombie_a_self_healed_standard: number
  zombie_amount_healed_standard: number
  zombie_wood_chopped_standard: number
  zombie_treasures_found: number
  zombie_blocks_placed_standard: number
  zombie_total_deaths: number
  zombie_energy_syphoned_standard: number
  zombie_wither_damage_standard: number
  zombie_total_kills_standard: number
  zombie_assists_standard: number
  arrows_fired: number
  zombie_iron_ore_broken_standard: number
  amount_healed: number
  zombie_a_amount_healed_standard: number
  zombie_games_played_standard: number
  wither_damage: number
  zombie_final_deaths_standard: number
  amount_healed_standard: number
  zombie_a_self_healed: number
  zombie_a_activations_standard: number
  zombie_potions_drunk_standard: number
  zombie_self_healed_standard: number
  zombie_a_activations: number
  zombie_deaths: number
  zombie_blocks_placed_preparation: number
  zombie_amount_healed: number
  zombie_assists: number
  zombie_total_kills: number
  enderman_games_played: number
  final_deaths_face_off: number
  kills_face_off: number
  arrows_hit_face_off: number
  food_eaten_face_off: number
  enderman_arrows_hit: number
  enderman_iron_ore_broken: number
  enderman_kills_melee_behind_face_off: number
  blocks_broken_face_off: number
  games_played_face_off: number
  steaks_eaten_face_off: number
  enderman_meters_walked_face_off: number
  enderman_meters_walked_speed_face_off: number
  enderman_defender_assists_face_off: number
  enderman_wood_chopped_face_off: number
  enderman_potions_drunk: number
  enderman_food_eaten: number
  blocks_placed_face_off: number
  kills_melee_face_off: number
  enderman_final_deaths: number
  enderman_steaks_eaten_face_off: number
  enderman_blocks_broken: number
  kills_melee_behind_face_off: number
  meters_walked_speed_face_off: number
  wood_chopped_face_off: number
  enderman_meters_fallen_face_off: number
  enderman_iron_ore_broken_face_off: number
  treasures_found_face_off: number
  enderman_food_eaten_face_off: number
  enderman_wood_chopped: number
  enderman_total_deaths: number
  enderman_arrows_fired: number
  meters_fallen_face_off: number
  enderman_meters_fallen: number
  enderman_time_played: number
  enderman_kills_melee: number
  enderman_kills_face_off: number
  defender_kills_face_off: number
  enderman_blocks_placed_face_off: number
  assists_face_off: number
  enderman_assists_face_off: number
  enderman_blocks_placed_preparation_face_off: number
  defender_assists_face_off: number
  losses_face_off: number
  enderman_potions_drunk_face_off: number
  time_played_face_off: number
  enderman_total_kills_face_off: number
  enderman_games_played_face_off: number
  enderman_steaks_eaten: number
  enderman_defender_kills: number
  blocks_placed_preparation_face_off: number
  enderman_kills_melee_face_off: number
  enderman_final_deaths_face_off: number
  kills_melee: number
  total_kills_face_off: number
  defender_kills: number
  enderman_meters_walked_speed: number
  enderman_time_played_face_off: number
  enderman_treasures_found: number
  kills_melee_behind: number
  enderman_meters_walked: number
  enderman_losses: number
  enderman_blocks_placed: number
  enderman_blocks_broken_face_off: number
  enderman_assists: number
  kills: number
  meters_walked_face_off: number
  arrows_fired_face_off: number
  enderman_kills_melee_behind: number
  enderman_deaths: number
  enderman_total_deaths_face_off: number
  enderman_arrows_hit_face_off: number
  enderman_kills: number
  enderman_total_kills: number
  enderman_arrows_fired_face_off: number
  enderman_treasures_found_face_off: number
  enderman_defender_kills_face_off: number
  enderman_defender_assists: number
  iron_ore_broken_face_off: number
  arrows_hit: number
  total_deaths_face_off: number
  enderman_deaths_face_off: number
  potions_drunk_face_off: number
  enderman_blocks_placed_preparation: number
  deaths_face_off: number
  enderman_losses_face_off: number
  classes: Classes2
  shark_activations: number
  shark_activations_standard: number
  shark_assists: number
  shark_assists_standard: number
  shark_b_activations: number
  shark_b_activations_standard: number
  shark_blocks_broken: number
  shark_blocks_broken_standard: number
  shark_blocks_placed: number
  shark_blocks_placed_preparation: number
  shark_blocks_placed_preparation_standard: number
  shark_blocks_placed_standard: number
  shark_bread_crafted: number
  shark_bread_crafted_standard: number
  shark_deaths: number
  shark_deaths_standard: number
  shark_final_deaths: number
  shark_final_deaths_standard: number
  shark_g_activations: number
  shark_g_activations_standard: number
  shark_games_played: number
  shark_games_played_standard: number
  shark_iron_ore_broken: number
  shark_iron_ore_broken_standard: number
  shark_losses: number
  shark_losses_standard: number
  shark_meters_fallen: number
  shark_meters_fallen_standard: number
  shark_meters_walked: number
  shark_meters_walked_standard: number
  shark_time_played: number
  shark_time_played_standard: number
  shark_total_deaths: number
  shark_total_deaths_standard: number
  shark_total_kills: number
  shark_total_kills_standard: number
  shark_treasures_found: number
  shark_treasures_found_standard: number
  shark_wood_chopped: number
  shark_wood_chopped_standard: number
  bucket_barriers_broken: number
  bucket_barriers_broken_standard: number
  cow_a_activations: number
  cow_a_activations_standard: number
  cow_activations: number
  cow_activations_standard: number
  cow_amount_healed: number
  cow_amount_healed_standard: number
  cow_b_activations: number
  cow_b_activations_standard: number
  cow_b_amount_healed: number
  cow_b_amount_healed_standard: number
  cow_b_self_healed: number
  cow_b_self_healed_standard: number
  cow_blocks_broken: number
  cow_blocks_broken_standard: number
  cow_blocks_placed: number
  cow_blocks_placed_preparation: number
  cow_blocks_placed_preparation_standard: number
  cow_blocks_placed_standard: number
  cow_bucket_barriers_broken: number
  cow_bucket_barriers_broken_standard: number
  cow_deaths: number
  cow_deaths_standard: number
  cow_final_deaths: number
  cow_final_deaths_standard: number
  cow_g_activations: number
  cow_g_activations_standard: number
  cow_games_played: number
  cow_games_played_standard: number
  cow_iron_ore_broken: number
  cow_iron_ore_broken_standard: number
  cow_losses: number
  cow_losses_standard: number
  cow_meters_fallen: number
  cow_meters_fallen_standard: number
  cow_meters_walked: number
  cow_meters_walked_standard: number
  cow_self_healed: number
  cow_self_healed_standard: number
  cow_time_played: number
  cow_time_played_standard: number
  cow_total_deaths: number
  cow_total_deaths_standard: number
  cow_treasures_found: number
  cow_treasures_found_standard: number
  cow_wood_chopped: number
  cow_wood_chopped_standard: number
  enderman_new_d: number
  endermanInventory: EndermanInventory
  new_echest: number
  enderman_new_g: number
  enderman_new_c: number
  enderman_new_b: number
  enderman_new_a: number
  bread_eaten: number
  bread_eaten_standard: number
  cow_assists: number
  cow_assists_standard: number
  cow_bread_eaten: number
  cow_bread_eaten_standard: number
  cow_c_activations: number
  cow_c_activations_standard: number
  cow_defender_kills: number
  cow_defender_kills_standard: number
  cow_food_eaten: number
  cow_food_eaten_standard: number
  cow_kills: number
  cow_kills_melee: number
  cow_kills_melee_standard: number
  cow_kills_standard: number
  cow_potions_drunk: number
  cow_potions_drunk_standard: number
  cow_steaks_eaten: number
  cow_steaks_eaten_standard: number
  cow_total_kills: number
  cow_total_kills_standard: number
  cow_wither_damage: number
  cow_wither_damage_standard: number
  defender_kills_standard: number
  kills_melee_standard: number
  kills_standard: number
  mythic_favor: number
  exchange_favor_bought: number
  chosen_skin_Spider: string
  spider_new_d: number
  snowman_g_infused: number
  snowman_c_infused: number
  snowman_a_infused: number
  activations_deathmatch: number
  activations_deathmatch_standard: number
  apples_eaten: number
  apples_eaten_standard: number
  blizzard_seconds_slow: number
  blizzard_seconds_slow_standard: number
  damage_dealt: number
  damage_dealt_standard: number
  enemies_hit: number
  enemies_hit_standard: number
  final_assists: number
  final_assists_melee: number
  final_assists_melee_standard: number
  final_assists_standard: number
  golden_apples_eaten: number
  golden_apples_eaten_standard: number
  kills_melee_behind_standard: number
  snowman_a_activations: number
  snowman_a_activations_deathmatch: number
  snowman_a_activations_deathmatch_standard: number
  snowman_a_activations_standard: number
  snowman_a_damage_dealt: number
  snowman_a_damage_dealt_standard: number
  snowman_a_defender_kills: number
  snowman_a_defender_kills_standard: number
  snowman_a_enemies_hit: number
  snowman_a_enemies_hit_standard: number
  snowman_a_kills: number
  snowman_a_kills_melee: number
  snowman_a_kills_melee_behind: number
  snowman_a_kills_melee_behind_standard: number
  snowman_a_kills_melee_standard: number
  snowman_a_kills_standard: number
  snowman_a_total_kills: number
  snowman_a_total_kills_standard: number
  snowman_activations: number
  snowman_activations_deathmatch: number
  snowman_activations_deathmatch_standard: number
  snowman_activations_standard: number
  snowman_apples_eaten: number
  snowman_apples_eaten_standard: number
  snowman_assists: number
  snowman_assists_standard: number
  snowman_b_activations: number
  snowman_b_activations_deathmatch: number
  snowman_b_activations_deathmatch_standard: number
  snowman_b_activations_standard: number
  snowman_blizzard_seconds_slow: number
  snowman_blizzard_seconds_slow_standard: number
  snowman_blocks_broken: number
  snowman_blocks_broken_standard: number
  snowman_blocks_placed: number
  snowman_blocks_placed_preparation: number
  snowman_blocks_placed_preparation_standard: number
  snowman_blocks_placed_standard: number
  snowman_c_activations: number
  snowman_c_activations_standard: number
  snowman_damage_dealt: number
  snowman_damage_dealt_standard: number
  snowman_deaths: number
  snowman_deaths_standard: number
  snowman_defender_kills: number
  snowman_defender_kills_standard: number
  snowman_enemies_hit: number
  snowman_enemies_hit_standard: number
  snowman_final_assists: number
  snowman_final_assists_melee: number
  snowman_final_assists_melee_standard: number
  snowman_final_assists_standard: number
  snowman_final_deaths: number
  snowman_final_deaths_standard: number
  snowman_food_eaten: number
  snowman_food_eaten_standard: number
  snowman_g_activations: number
  snowman_g_activations_standard: number
  snowman_games_played: number
  snowman_games_played_standard: number
  snowman_golden_apples_eaten: number
  snowman_golden_apples_eaten_standard: number
  snowman_iron_ore_broken: number
  snowman_iron_ore_broken_standard: number
  snowman_kills: number
  snowman_kills_melee: number
  snowman_kills_melee_behind: number
  snowman_kills_melee_behind_standard: number
  snowman_kills_melee_standard: number
  snowman_kills_standard: number
  snowman_losses: number
  snowman_losses_standard: number
  snowman_meters_fallen: number
  snowman_meters_fallen_standard: number
  snowman_meters_walked: number
  snowman_meters_walked_standard: number
  snowman_potions_drunk: number
  snowman_potions_drunk_standard: number
  snowman_snowmen_built: number
  snowman_snowmen_built_standard: number
  snowman_steaks_eaten: number
  snowman_steaks_eaten_standard: number
  snowman_time_played: number
  snowman_time_played_standard: number
  snowman_total_deaths: number
  snowman_total_deaths_standard: number
  snowman_total_final_kills: number
  snowman_total_final_kills_standard: number
  snowman_total_kills: number
  snowman_total_kills_standard: number
  snowman_treasures_found: number
  snowman_treasures_found_standard: number
  snowman_wither_damage: number
  snowman_wither_damage_standard: number
  snowman_wood_chopped: number
  snowman_wood_chopped_standard: number
  snowmen_built: number
  snowmen_built_standard: number
  total_final_kills: number
  total_final_kills_standard: number
}

export interface Classes2 {
  herobrine: Herobrine
  zombie: Zombie
  enderman: Enderman
  skeleton: Skeleton
  spider: Spider
  snowman: Snowman
}

export interface Herobrine {
  skill_level_d: number
  skill_level_dChecked5: boolean
  unlocked: boolean
  checked4: boolean
  skill_level_aChecked5: boolean
  skill_level_a: number
}

export interface Zombie {
  skill_level_d: number
  skill_level_dChecked5: boolean
  checked4: boolean
  unlocked: boolean
  skill_level_aChecked5: boolean
  skill_level_a: number
}

export interface Enderman {
  skill_level_d: number
  skill_level_dChecked5: boolean
  unlocked: boolean
  checked4: boolean
  skill_level_a: number
  skill_level_aChecked5: boolean
  skill_level_cChecked5: boolean
  skill_level_c: number
  skill_level_gChecked5: boolean
  skill_level_g: number
  skill_level_b: number
  skill_level_bChecked5: boolean
  enderchest_rows: number
}

export interface Skeleton {
  skill_level_dChecked5: boolean
  skill_level_d: number
  checked4: boolean
  unlocked: boolean
  skill_level_a: number
  skill_level_aChecked5: boolean
}

export interface Spider {
  unlocked: boolean
  skill_level_d: number
}

export interface Snowman {
  unlocked: boolean
  skill_level_g: number
  skill_level_c: number
  skill_level_a: number
}

export interface EndermanInventory {
  "0": string
  "1": string
  "2": string
  "3": string
  "5": string
  "6": string
  "7": string
  "8": string
}

export interface Battleground {
  warrior_spec: string
  packages: string[]
  shaman_spec: string
  selected_mount: string
  mage_spec: string
  paladin_spec: string
  chosen_class: string
  hotkeymode: boolean
  assists: number
  coins: number
  damage: number
  damage_earthwarden: number
  damage_prevented: number
  damage_prevented_earthwarden: number
  damage_prevented_shaman: number
  damage_shaman: number
  damage_taken: number
  deaths: number
  earthwarden_plays: number
  flag_conquer_team: number
  heal: number
  heal_earthwarden: number
  heal_shaman: number
  kills: number
  kills_capturetheflag: number
  play_streak: number
  powerups_collected: number
  shaman_plays: number
  broken_inventory: number
  afk_warned: number
  damage_prevented_thunderlord: number
  damage_thunderlord: number
  penalty: number
  thunderlord_plays: number
  win_streak: number
  wins: number
  wins_shaman: number
  wins_thunderlord: number
  mage_health: number
  mage_energy: number
  mage_cooldown: number
  mage_critchance: number
  mage_critmultiplier: number
  mage_skill1: number
  mage_skill2: number
  mage_skill3: number
  mage_skill4: number
  mage_skill5: number
  heal_thunderlord: number
  aquamancer_plays: number
  damage_aquamancer: number
  damage_mage: number
  damage_prevented_aquamancer: number
  damage_prevented_mage: number
  heal_aquamancer: number
  heal_mage: number
  mage_plays: number
  energyPowerups: boolean
  simplifiedresourcepack: boolean
  cryomancer_plays: number
  damage_cryomancer: number
  damage_prevented_cryomancer: number
  flag_conquer_self: number
  heal_cryomancer: number
}

export interface Bedwars {
  Experience: number
  first_join_7: boolean
  bedwars_boxes: number
  games_played_bedwars_1: number
  gold_resources_collected_bedwars: number
  void_deaths_bedwars: number
  four_four__items_purchased_bedwars: number
  void_kills_bedwars: number
  diamond_resources_collected_bedwars: number
  deaths_bedwars: number
  resources_collected_bedwars: number
  "four_four_permanent _items_purchased_bedwars": number
  four_four_void_kills_bedwars: number
  four_four_kills_bedwars: number
  coins: number
  games_played_bedwars: number
  "permanent _items_purchased_bedwars": number
  entity_attack_final_kills_bedwars: number
  four_four_deaths_bedwars: number
  four_four_gold_resources_collected_bedwars: number
  four_four_diamond_resources_collected_bedwars: number
  four_four_entity_attack_deaths_bedwars: number
  four_four_losses_bedwars: number
  four_four_iron_resources_collected_bedwars: number
  kills_bedwars: number
  entity_attack_kills_bedwars: number
  four_four_games_played_bedwars: number
  four_four_entity_attack_final_kills_bedwars: number
  entity_attack_deaths_bedwars: number
  losses_bedwars: number
  items_purchased_bedwars: number
  final_kills_bedwars: number
  four_four_resources_collected_bedwars: number
  four_four_void_deaths_bedwars: number
  four_four_items_purchased_bedwars: number
  iron_resources_collected_bedwars: number
  _items_purchased_bedwars: number
  four_four_entity_attack_kills_bedwars: number
  four_four_final_kills_bedwars: number
  emerald_resources_collected_bedwars: number
  four_four_beds_lost_bedwars: number
  beds_lost_bedwars: number
  four_four_wins_bedwars: number
  wins_bedwars: number
  four_four_emerald_resources_collected_bedwars: number
  final_deaths_bedwars: number
  four_three_void_kills_bedwars: number
  four_three_entity_attack_kills_bedwars: number
  entity_attack_final_deaths_bedwars: number
  four_three_iron_resources_collected_bedwars: number
  four_three_entity_attack_final_deaths_bedwars: number
  four_three_games_played_bedwars: number
  four_three__items_purchased_bedwars: number
  four_three_emerald_resources_collected_bedwars: number
  entity_explosion_deaths_bedwars: number
  four_three_entity_attack_deaths_bedwars: number
  four_three_beds_lost_bedwars: number
  four_three_gold_resources_collected_bedwars: number
  "four_three_permanent _items_purchased_bedwars": number
  four_three_deaths_bedwars: number
  four_three_losses_bedwars: number
  four_three_entity_explosion_deaths_bedwars: number
  four_three_diamond_resources_collected_bedwars: number
  four_three_items_purchased_bedwars: number
  four_three_kills_bedwars: number
  four_three_final_deaths_bedwars: number
  four_three_resources_collected_bedwars: number
  four_three_void_deaths_bedwars: number
  four_three_wins_bedwars: number
  four_three_beds_broken_bedwars: number
  four_three_entity_attack_final_kills_bedwars: number
  four_three_final_kills_bedwars: number
  beds_broken_bedwars: number
  favorite_slots: string
  eight_two_emerald_resources_collected_bedwars: number
  "eight_two_permanent _items_purchased_bedwars": number
  eight_two_resources_collected_bedwars: number
  eight_two_diamond_resources_collected_bedwars: number
  eight_two_wins_bedwars: number
  eight_two_kills_bedwars: number
  eight_two_entity_attack_final_kills_bedwars: number
  eight_two_iron_resources_collected_bedwars: number
  eight_two_void_kills_bedwars: number
  eight_two__items_purchased_bedwars: number
  eight_two_games_played_bedwars: number
  eight_two_items_purchased_bedwars: number
  eight_two_gold_resources_collected_bedwars: number
  eight_two_final_kills_bedwars: number
  four_three_void_final_kills_bedwars: number
  void_final_kills_bedwars: number
  eight_two_void_deaths_bedwars: number
  eight_two_beds_broken_bedwars: number
  eight_two_entity_attack_kills_bedwars: number
  eight_two_deaths_bedwars: number
  eight_two_entity_attack_deaths_bedwars: number
  eight_two_void_final_kills_bedwars: number
  eight_two_losses_bedwars: number
  fall_deaths_bedwars: number
  eight_two_fall_deaths_bedwars: number
  eight_two_final_deaths_bedwars: number
  eight_two_entity_attack_final_deaths_bedwars: number
  packages: string[]
  eight_two_beds_lost_bedwars: number
  eight_two_void_final_deaths_bedwars: number
  void_final_deaths_bedwars: number
  Bedwars_openedRares: number
  Bedwars_openedChests: number
  chest_history_new: string[]
  Bedwars_openedCommons: number
  Bedwars_openedEpics: number
  activeKillMessages: string
  four_three_void_final_deaths_bedwars: number
  four_three_fall_deaths_bedwars: number
  lastHytaleAd: number
  fall_kills_bedwars: number
  four_four_beds_broken_bedwars: number
  four_four_fall_deaths_bedwars: number
  four_four_fall_kills_bedwars: number
  four_four_void_final_kills_bedwars: number
  fire_tick_final_kills_bedwars: number
  four_four_entity_attack_final_deaths_bedwars: number
  four_four_final_deaths_bedwars: number
  four_four_fire_tick_final_kills_bedwars: number
  four_three_projectile_deaths_bedwars: number
  projectile_deaths_bedwars: number
  activeKillEffect: string
  activeProjectileTrail: string
  activeDeathCry: string
  eight_two_rush__items_purchased_bedwars: number
  eight_two_rush_beds_lost_bedwars: number
  eight_two_rush_deaths_bedwars: number
  eight_two_rush_emerald_resources_collected_bedwars: number
  eight_two_rush_entity_attack_deaths_bedwars: number
  eight_two_rush_entity_attack_kills_bedwars: number
  eight_two_rush_final_deaths_bedwars: number
  eight_two_rush_games_played_bedwars: number
  eight_two_rush_gold_resources_collected_bedwars: number
  eight_two_rush_iron_resources_collected_bedwars: number
  eight_two_rush_items_purchased_bedwars: number
  eight_two_rush_kills_bedwars: number
  eight_two_rush_losses_bedwars: number
  "eight_two_rush_permanent _items_purchased_bedwars": number
  eight_two_rush_resources_collected_bedwars: number
  eight_two_rush_void_deaths_bedwars: number
  eight_two_rush_void_final_deaths_bedwars: number
  eight_two_rush_void_kills_bedwars: number
  fire_tick_kills_bedwars: number
  four_four_fire_tick_kills_bedwars: number
  activeNPCSkin: string
  activeSprays: string
  entity_explosion_kills_bedwars: number
  four_three_entity_explosion_kills_bedwars: number
  four_three_fall_kills_bedwars: number
  eight_one__items_purchased_bedwars: number
  eight_one_beds_lost_bedwars: number
  eight_one_deaths_bedwars: number
  eight_one_entity_attack_final_deaths_bedwars: number
  eight_one_final_deaths_bedwars: number
  eight_one_games_played_bedwars: number
  eight_one_gold_resources_collected_bedwars: number
  eight_one_iron_resources_collected_bedwars: number
  eight_one_items_purchased_bedwars: number
  eight_one_kills_bedwars: number
  eight_one_losses_bedwars: number
  "eight_one_permanent _items_purchased_bedwars": number
  eight_one_resources_collected_bedwars: number
  eight_one_void_deaths_bedwars: number
  eight_one_void_kills_bedwars: number
  entity_explosion_final_deaths_bedwars: number
  four_four_entity_explosion_final_deaths_bedwars: number
  four_four_void_final_deaths_bedwars: number
  four_four_entity_explosion_deaths_bedwars: number
  fall_final_kills_bedwars: number
  four_three_fall_final_kills_bedwars: number
  activeVictoryDance: string
  activeIslandTopper: string
  Bedwars_openedLegendaries: number
  eight_two_rush_entity_attack_final_deaths_bedwars: number
  eight_two_rush_beds_broken_bedwars: number
  eight_two_rush_diamond_resources_collected_bedwars: number
  eight_two_rush_entity_attack_final_kills_bedwars: number
  eight_two_rush_final_kills_bedwars: number
  eight_two_rush_wins_bedwars: number
  activeGlyph: string
  eight_two_rush_fire_tick_kills_bedwars: number
  four_four_rush__items_purchased_bedwars: number
  four_four_rush_beds_lost_bedwars: number
  four_four_rush_deaths_bedwars: number
  four_four_rush_emerald_resources_collected_bedwars: number
  four_four_rush_entity_attack_deaths_bedwars: number
  four_four_rush_entity_attack_final_deaths_bedwars: number
  four_four_rush_entity_attack_final_kills_bedwars: number
  four_four_rush_entity_attack_kills_bedwars: number
  four_four_rush_final_deaths_bedwars: number
  four_four_rush_final_kills_bedwars: number
  four_four_rush_games_played_bedwars: number
  four_four_rush_gold_resources_collected_bedwars: number
  four_four_rush_iron_resources_collected_bedwars: number
  four_four_rush_items_purchased_bedwars: number
  four_four_rush_kills_bedwars: number
  four_four_rush_losses_bedwars: number
  four_four_rush_resources_collected_bedwars: number
  four_four_rush_void_deaths_bedwars: number
  four_four_rush_void_final_kills_bedwars: number
  eight_two_rush_fall_kills_bedwars: number
  four_four_rush_diamond_resources_collected_bedwars: number
  four_four_rush_void_kills_bedwars: number
  four_four_rush_fall_kills_bedwars: number
  "four_four_rush_permanent _items_purchased_bedwars": number
  four_four_rush_void_final_deaths_bedwars: number
  four_four_rush_beds_broken_bedwars: number
  four_four_rush_fall_deaths_bedwars: number
  four_four_rush_wins_bedwars: number
  eight_two_rush_void_final_kills_bedwars: number
  eight_one_diamond_resources_collected_bedwars: number
  eight_one_entity_attack_deaths_bedwars: number
  eight_one_entity_attack_kills_bedwars: number
  eight_one_void_final_deaths_bedwars: number
  eight_two_fall_kills_bedwars: number
  four_three_projectile_kills_bedwars: number
  projectile_kills_bedwars: number
  activeBedDestroy: string
  eight_one_beds_broken_bedwars: number
  eight_one_emerald_resources_collected_bedwars: number
  eight_one_fall_kills_bedwars: number
  eight_two_rush_fall_final_kills_bedwars: number
  fall_final_deaths_bedwars: number
  four_three_fall_final_deaths_bedwars: number
  eight_two_entity_explosion_deaths_bedwars: number
  eight_two_entity_explosion_kills_bedwars: number
  favourites_2: string
  privategames: Privategames2
  eight_two_fall_final_deaths_bedwars: number
  eight_two_fall_final_kills_bedwars: number
  bedwars_halloween_boxes: number
  bedwars_christmas_boxes: number
  free_event_key_bedwars_christmas_boxes_2019: boolean
  tourney_bedwars_two_four_0__items_purchased_bedwars: number
  tourney_bedwars_two_four_0_deaths_bedwars: number
  tourney_bedwars_two_four_0_entity_attack_kills_bedwars: number
  tourney_bedwars_two_four_0_games_played_bedwars: number
  tourney_bedwars_two_four_0_gold_resources_collected_bedwars: number
  tourney_bedwars_two_four_0_iron_resources_collected_bedwars: number
  tourney_bedwars_two_four_0_items_purchased_bedwars: number
  tourney_bedwars_two_four_0_kills_bedwars: number
  tourney_bedwars_two_four_0_losses_bedwars: number
  "tourney_bedwars_two_four_0_permanent _items_purchased_bedwars": number
  tourney_bedwars_two_four_0_resources_collected_bedwars: number
  tourney_bedwars_two_four_0_void_deaths_bedwars: number
  tourney_bedwars_two_four_0_void_kills_bedwars: number
  tourney_bedwars_two_four_0_emerald_resources_collected_bedwars: number
  tourney_bedwars_two_four_0_entity_attack_deaths_bedwars: number
  tourney_bedwars_two_four_0_fall_deaths_bedwars: number
  tourney_bedwars_two_four_0_wins_bedwars: number
  tourney_bedwars_two_four_0_beds_lost_bedwars: number
  tourney_bedwars_two_four_0_diamond_resources_collected_bedwars: number
  tourney_bedwars_two_four_0_final_deaths_bedwars: number
  tourney_bedwars_two_four_0_void_final_deaths_bedwars: number
  tourney_bedwars_two_four_0_entity_attack_final_deaths_bedwars: number
  tourney_bedwars_two_four_0_entity_attack_final_kills_bedwars: number
  tourney_bedwars_two_four_0_final_kills_bedwars: number
  tourney_bedwars_two_four_0_void_final_kills_bedwars: number
  tourney_bedwars_two_four_0_beds_broken_bedwars: number
  tourney_bedwars_two_four_0_fall_kills_bedwars: number
  eight_two_entity_explosion_final_deaths_bedwars: number
  two_four__items_purchased_bedwars: number
  two_four_deaths_bedwars: number
  two_four_emerald_resources_collected_bedwars: number
  two_four_entity_attack_deaths_bedwars: number
  two_four_entity_attack_kills_bedwars: number
  two_four_games_played_bedwars: number
  two_four_gold_resources_collected_bedwars: number
  two_four_iron_resources_collected_bedwars: number
  two_four_items_purchased_bedwars: number
  two_four_kills_bedwars: number
  "two_four_permanent _items_purchased_bedwars": number
  two_four_resources_collected_bedwars: number
  two_four_void_deaths_bedwars: number
  two_four_void_kills_bedwars: number
  two_four_wins_bedwars: number
  two_four_beds_lost_bedwars: number
  two_four_entity_attack_final_deaths_bedwars: number
  two_four_fall_kills_bedwars: number
  two_four_final_deaths_bedwars: number
  two_four_losses_bedwars: number
  two_four_diamond_resources_collected_bedwars: number
  two_four_entity_attack_final_kills_bedwars: number
  two_four_final_kills_bedwars: number
  eight_one_entity_attack_final_kills_bedwars: number
  eight_one_final_kills_bedwars: number
  eight_one_wins_bedwars: number
  activeWoodType: string
  eight_one_void_final_kills_bedwars: number
  understands_resource_bank: boolean
  understands_streaks: boolean
  castle__items_purchased_bedwars: number
  castle_beds_lost_bedwars: number
  castle_deaths_bedwars: number
  castle_diamond_resources_collected_bedwars: number
  castle_emerald_resources_collected_bedwars: number
  castle_fall_deaths_bedwars: number
  castle_games_played_bedwars: number
  castle_gold_resources_collected_bedwars: number
  castle_iron_resources_collected_bedwars: number
  castle_items_purchased_bedwars: number
  castle_losses_bedwars: number
  "castle_permanent _items_purchased_bedwars": number
  castle_resources_collected_bedwars: number
  castle_void_deaths_bedwars: number
  eight_two_magic_deaths_bedwars: number
  magic_deaths_bedwars: number
  eight_one_magic_deaths_bedwars: number
  eight_one_magic_kills_bedwars: number
  magic_kills_bedwars: number
  eight_one_fall_deaths_bedwars: number
  eight_two_magic_final_kills_bedwars: number
  magic_final_kills_bedwars: number
  eight_two_fire_tick_deaths_bedwars: number
  fire_tick_deaths_bedwars: number
  eight_two_magic_final_deaths_bedwars: number
  magic_final_deaths_bedwars: number
  four_three_magic_deaths_bedwars: number
  four_four_magic_deaths_bedwars: number
  selected_ultimate: string
  eight_two_ultimate__items_purchased_bedwars: number
  eight_two_ultimate_beds_broken_bedwars: number
  eight_two_ultimate_beds_lost_bedwars: number
  eight_two_ultimate_deaths_bedwars: number
  eight_two_ultimate_diamond_resources_collected_bedwars: number
  eight_two_ultimate_entity_attack_final_deaths_bedwars: number
  eight_two_ultimate_entity_attack_final_kills_bedwars: number
  eight_two_ultimate_entity_attack_kills_bedwars: number
  eight_two_ultimate_final_deaths_bedwars: number
  eight_two_ultimate_final_kills_bedwars: number
  eight_two_ultimate_games_played_bedwars: number
  eight_two_ultimate_gold_resources_collected_bedwars: number
  eight_two_ultimate_iron_resources_collected_bedwars: number
  eight_two_ultimate_items_purchased_bedwars: number
  eight_two_ultimate_kills_bedwars: number
  eight_two_ultimate_losses_bedwars: number
  "eight_two_ultimate_permanent _items_purchased_bedwars": number
  eight_two_ultimate_resources_collected_bedwars: number
  eight_two_ultimate_void_deaths_bedwars: number
  eight_two_ultimate_void_kills_bedwars: number
  eight_two_ultimate_entity_attack_deaths_bedwars: number
  four_four_magic_kills_bedwars: number
  four_four_ultimate__items_purchased_bedwars: number
  four_four_ultimate_beds_lost_bedwars: number
  four_four_ultimate_deaths_bedwars: number
  four_four_ultimate_entity_attack_deaths_bedwars: number
  four_four_ultimate_final_deaths_bedwars: number
  four_four_ultimate_games_played_bedwars: number
  four_four_ultimate_gold_resources_collected_bedwars: number
  four_four_ultimate_iron_resources_collected_bedwars: number
  four_four_ultimate_items_purchased_bedwars: number
  four_four_ultimate_kills_bedwars: number
  four_four_ultimate_losses_bedwars: number
  "four_four_ultimate_permanent _items_purchased_bedwars": number
  four_four_ultimate_resources_collected_bedwars: number
  four_four_ultimate_void_deaths_bedwars: number
  four_four_ultimate_void_final_deaths_bedwars: number
  four_four_ultimate_void_kills_bedwars: number
  four_four_fall_final_kills_bedwars: number
  four_four_entity_explosion_kills_bedwars: number
  eight_two_projectile_deaths_bedwars: number
  bedwars_easter_boxes: number
  eight_one_entity_explosion_deaths_bedwars: number
  four_four_projectile_final_kills_bedwars: number
  projectile_final_kills_bedwars: number
  four_four_fall_final_deaths_bedwars: number
  four_three_magic_final_deaths_bedwars: number
  four_four_magic_final_deaths_bedwars: number
  four_four_magic_final_kills_bedwars: number
  four_three_magic_final_kills_bedwars: number
  free_event_key_bedwars_easter_boxes_2020: boolean
  four_four_voidless__items_purchased_bedwars: number
  four_four_voidless_beds_lost_bedwars: number
  four_four_voidless_deaths_bedwars: number
  four_four_voidless_entity_attack_deaths_bedwars: number
  four_four_voidless_entity_attack_kills_bedwars: number
  four_four_voidless_fall_final_deaths_bedwars: number
  four_four_voidless_final_deaths_bedwars: number
  four_four_voidless_games_played_bedwars: number
  four_four_voidless_gold_resources_collected_bedwars: number
  four_four_voidless_iron_resources_collected_bedwars: number
  four_four_voidless_items_purchased_bedwars: number
  four_four_voidless_kills_bedwars: number
  four_four_voidless_losses_bedwars: number
  "four_four_voidless_permanent _items_purchased_bedwars": number
  four_four_voidless_resources_collected_bedwars: number
  four_four_voidless_void_deaths_bedwars: number
  four_four_voidless_entity_attack_final_deaths_bedwars: number
  four_four_fire_tick_deaths_bedwars: number
  two_four_magic_deaths_bedwars: number
  two_four_beds_broken_bedwars: number
  two_four_fall_final_kills_bedwars: number
  four_four_armed__items_purchased_bedwars: number
  four_four_armed_beds_lost_bedwars: number
  four_four_armed_deaths_bedwars: number
  four_four_armed_diamond_resources_collected_bedwars: number
  four_four_armed_entity_attack_final_deaths_bedwars: number
  four_four_armed_final_deaths_bedwars: number
  four_four_armed_games_played_bedwars: number
  four_four_armed_gold_resources_collected_bedwars: number
  four_four_armed_iron_resources_collected_bedwars: number
  four_four_armed_items_purchased_bedwars: number
  four_four_armed_kills_bedwars: number
  four_four_armed_losses_bedwars: number
  four_four_armed_projectile_deaths_bedwars: number
  four_four_armed_projectile_kills_bedwars: number
  four_four_armed_resources_collected_bedwars: number
  entity_explosion_final_kills_bedwars: number
  four_four_entity_explosion_final_kills_bedwars: number
  two_four_void_final_kills_bedwars: number
  eight_two_magic_kills_bedwars: number
  four_four_projectile_deaths_bedwars: number
  four_four_ultimate_diamond_resources_collected_bedwars: number
  four_four_ultimate_emerald_resources_collected_bedwars: number
  four_four_ultimate_final_kills_bedwars: number
  four_four_ultimate_void_final_kills_bedwars: number
  four_four_ultimate_wins_bedwars: number
  four_four_ultimate_magic_final_deaths_bedwars: number
  four_four_ultimate_beds_broken_bedwars: number
  four_four_ultimate_entity_attack_final_deaths_bedwars: number
  four_four_ultimate_entity_attack_kills_bedwars: number
  four_four_ultimate_entity_attack_final_kills_bedwars: number
  four_four_ultimate_magic_final_kills_bedwars: number
  eight_two_ultimate_entity_explosion_kills_bedwars: number
  four_four_ultimate_magic_deaths_bedwars: number
  two_four_fall_deaths_bedwars: number
  two_four_fall_final_deaths_bedwars: number
  castle_entity_attack_kills_bedwars: number
  castle_kills_bedwars: number
  castle_magic_deaths_bedwars: number
  castle_void_kills_bedwars: number
  castle_wins_bedwars: number
  castle_entity_attack_deaths_bedwars: number
  castle_fall_kills_bedwars: number
  eight_one_fall_final_kills_bedwars: number
  two_four_void_final_deaths_bedwars: number
  eight_two_voidless__items_purchased_bedwars: number
  eight_two_voidless_beds_lost_bedwars: number
  eight_two_voidless_deaths_bedwars: number
  eight_two_voidless_entity_attack_deaths_bedwars: number
  eight_two_voidless_entity_attack_final_kills_bedwars: number
  eight_two_voidless_entity_attack_kills_bedwars: number
  eight_two_voidless_fall_deaths_bedwars: number
  eight_two_voidless_fall_final_deaths_bedwars: number
  eight_two_voidless_fall_kills_bedwars: number
  eight_two_voidless_final_deaths_bedwars: number
  eight_two_voidless_final_kills_bedwars: number
  eight_two_voidless_games_played_bedwars: number
  eight_two_voidless_gold_resources_collected_bedwars: number
  eight_two_voidless_iron_resources_collected_bedwars: number
  eight_two_voidless_items_purchased_bedwars: number
  eight_two_voidless_kills_bedwars: number
  eight_two_voidless_losses_bedwars: number
  "eight_two_voidless_permanent _items_purchased_bedwars": number
  eight_two_voidless_resources_collected_bedwars: number
  two_four_projectile_deaths_bedwars: number
  eight_one_magic_final_kills_bedwars: number
  tourney_bedwars4s_1__items_purchased_bedwars: number
  tourney_bedwars4s_1_beds_lost_bedwars: number
  tourney_bedwars4s_1_deaths_bedwars: number
  tourney_bedwars4s_1_diamond_resources_collected_bedwars: number
  tourney_bedwars4s_1_emerald_resources_collected_bedwars: number
  tourney_bedwars4s_1_entity_attack_deaths_bedwars: number
  tourney_bedwars4s_1_entity_attack_final_deaths_bedwars: number
  tourney_bedwars4s_1_entity_attack_kills_bedwars: number
  tourney_bedwars4s_1_fall_deaths_bedwars: number
  tourney_bedwars4s_1_fall_kills_bedwars: number
  tourney_bedwars4s_1_final_deaths_bedwars: number
  tourney_bedwars4s_1_games_played_bedwars: number
  tourney_bedwars4s_1_gold_resources_collected_bedwars: number
  tourney_bedwars4s_1_iron_resources_collected_bedwars: number
  tourney_bedwars4s_1_items_purchased_bedwars: number
  tourney_bedwars4s_1_kills_bedwars: number
  tourney_bedwars4s_1_losses_bedwars: number
  tourney_bedwars4s_1_magic_deaths_bedwars: number
  "tourney_bedwars4s_1_permanent _items_purchased_bedwars": number
  tourney_bedwars4s_1_resources_collected_bedwars: number
  tourney_bedwars4s_1_void_deaths_bedwars: number
  tourney_bedwars4s_1_void_kills_bedwars: number
  tourney_bedwars4s_1_beds_broken_bedwars: number
  tourney_bedwars4s_1_entity_attack_final_kills_bedwars: number
  tourney_bedwars4s_1_final_kills_bedwars: number
  tourney_bedwars4s_1_void_final_deaths_bedwars: number
  tourney_bedwars4s_1_void_final_kills_bedwars: number
  tourney_bedwars4s_1_wins_bedwars: number
  tourney_bedwars4s_1_fall_final_kills_bedwars: number
  tourney_bedwars4s_1_fall_final_deaths_bedwars: number
  tourney_bedwars4s_1_projectile_deaths_bedwars: number
  tourney_bedwars4s_1_entity_explosion_final_kills_bedwars: number
  tourney_bedwars4s_1_entity_explosion_final_deaths_bedwars: number
  tourney_bedwars4s_1_magic_final_deaths_bedwars: number
  eight_two_ultimate_void_final_kills_bedwars: number
  four_four_ultimate_entity_explosion_deaths_bedwars: number
  eight_two_ultimate_wins_bedwars: number
  eight_one_fall_final_deaths_bedwars: number
  four_four_voidless_entity_attack_final_kills_bedwars: number
  four_four_voidless_fall_kills_bedwars: number
  four_four_voidless_final_kills_bedwars: number
  four_four_voidless_fall_final_kills_bedwars: number
  four_four_voidless_magic_deaths_bedwars: number
  four_four_voidless_beds_broken_bedwars: number
  four_four_voidless_diamond_resources_collected_bedwars: number
  four_four_voidless_emerald_resources_collected_bedwars: number
  four_four_voidless_wins_bedwars: number
  eight_two_voidless_entity_attack_final_deaths_bedwars: number
  two_four_magic_kills_bedwars: number
  eight_two_entity_explosion_final_kills_bedwars: number
  eight_two_armed__items_purchased_bedwars: number
  eight_two_armed_beds_lost_bedwars: number
  eight_two_armed_deaths_bedwars: number
  eight_two_armed_fall_final_deaths_bedwars: number
  eight_two_armed_final_deaths_bedwars: number
  eight_two_armed_games_played_bedwars: number
  eight_two_armed_gold_resources_collected_bedwars: number
  eight_two_armed_iron_resources_collected_bedwars: number
  eight_two_armed_items_purchased_bedwars: number
  eight_two_armed_kills_bedwars: number
  eight_two_armed_losses_bedwars: number
  eight_two_armed_projectile_deaths_bedwars: number
  eight_two_armed_projectile_kills_bedwars: number
  eight_two_armed_resources_collected_bedwars: number
  eight_two_armed_projectile_final_deaths_bedwars: number
  four_four_armed_void_deaths_bedwars: number
  four_four_armed_wins_bedwars: number
  four_four_armed_magic_deaths_bedwars: number
  eight_two_permanent_items_purchased_bedwars: number
  permanent_items_purchased_bedwars: number
  eight_two_lucky__items_purchased_bedwars: number
  eight_two_lucky_beds_broken_bedwars: number
  eight_two_lucky_beds_lost_bedwars: number
  eight_two_lucky_deaths_bedwars: number
  eight_two_lucky_diamond_resources_collected_bedwars: number
  eight_two_lucky_entity_attack_deaths_bedwars: number
  eight_two_lucky_entity_attack_final_kills_bedwars: number
  eight_two_lucky_entity_attack_kills_bedwars: number
  eight_two_lucky_final_deaths_bedwars: number
  eight_two_lucky_final_kills_bedwars: number
  eight_two_lucky_games_played_bedwars: number
  eight_two_lucky_gold_resources_collected_bedwars: number
  eight_two_lucky_iron_resources_collected_bedwars: number
  eight_two_lucky_items_purchased_bedwars: number
  eight_two_lucky_kills_bedwars: number
  eight_two_lucky_losses_bedwars: number
  eight_two_lucky_magic_final_deaths_bedwars: number
  eight_two_lucky_permanent_items_purchased_bedwars: number
  eight_two_lucky_resources_collected_bedwars: number
  eight_two_lucky_bed_resources_collected_bedwars: number
  eight_two_lucky_emerald_resources_collected_bedwars: number
  eight_two_lucky_magic_deaths_bedwars: number
  eight_two_lucky_void_deaths_bedwars: number
  eight_two_lucky_wins_bedwars: number
  eight_two_lucky_void_kills_bedwars: number
  eight_two_lucky_fall_deaths_bedwars: number
  eight_two_lucky_entity_attack_final_deaths_bedwars: number
  eight_two_lucky_entity_explosion_final_kills_bedwars: number
  eight_two_lucky_magic_kills_bedwars: number
  eight_two_lucky_void_final_kills_bedwars: number
  four_three_permanent_items_purchased_bedwars: number
  four_four_permanent_items_purchased_bedwars: number
  eight_two_ultimate_emerald_resources_collected_bedwars: number
  eight_two_ultimate_permanent_items_purchased_bedwars: number
  eight_two_ultimate_void_final_deaths_bedwars: number
  two_four_permanent_items_purchased_bedwars: number
  two_four_magic_final_kills_bedwars: number
  castle_final_deaths_bedwars: number
  castle_permanent_items_purchased_bedwars: number
  castle_void_final_deaths_bedwars: number
  four_three_magic_kills_bedwars: number
  eight_two_fire_final_deaths_bedwars: number
  fire_final_deaths_bedwars: number
  eight_one_permanent_items_purchased_bedwars: number
  shop_sort: string
  shop_sort_enable_owned_first: boolean
  two_four_magic_final_deaths_bedwars: number
  eight_two_fire_tick_final_deaths_bedwars: number
  fire_tick_final_deaths_bedwars: number
  four_four_armed_entity_attack_kills_bedwars: number
  four_four_armed_void_final_deaths_bedwars: number
  four_three_entity_explosion_final_deaths_bedwars: number
  four_four_lucky__items_purchased_bedwars: number
  four_four_lucky_deaths_bedwars: number
  four_four_lucky_emerald_resources_collected_bedwars: number
  four_four_lucky_entity_attack_deaths_bedwars: number
  four_four_lucky_entity_attack_kills_bedwars: number
  four_four_lucky_fall_kills_bedwars: number
  four_four_lucky_final_kills_bedwars: number
  four_four_lucky_games_played_bedwars: number
  four_four_lucky_gold_resources_collected_bedwars: number
  four_four_lucky_iron_resources_collected_bedwars: number
  four_four_lucky_items_purchased_bedwars: number
  four_four_lucky_kills_bedwars: number
  four_four_lucky_permanent_items_purchased_bedwars: number
  four_four_lucky_resources_collected_bedwars: number
  four_four_lucky_void_deaths_bedwars: number
  four_four_lucky_void_final_kills_bedwars: number
  four_four_lucky_void_kills_bedwars: number
  four_four_lucky_wins_bedwars: number
  eight_two_lucky_lava_deaths_bedwars: number
  eight_two_lucky_fire_tick_final_deaths_bedwars: number
  eight_one_entity_explosion_final_deaths_bedwars: number
  eight_two_rush_permanent_items_purchased_bedwars: number
  four_four_rush_magic_final_deaths_bedwars: number
  eight_one_magic_final_deaths_bedwars: number
  castle_beds_broken_bedwars: number
  castle_entity_attack_final_deaths_bedwars: number
  eight_two_voidless_beds_broken_bedwars: number
  eight_two_voidless_emerald_resources_collected_bedwars: number
  eight_two_voidless_permanent_items_purchased_bedwars: number
  eight_two_voidless_magic_deaths_bedwars: number
  eight_two_voidless_diamond_resources_collected_bedwars: number
  eight_two_voidless_wins_bedwars: number
  four_four_armed_emerald_resources_collected_bedwars: number
  four_four_armed_entity_attack_deaths_bedwars: number
  four_four_armed_entity_attack_final_kills_bedwars: number
  four_four_armed_final_kills_bedwars: number
  four_four_armed_magic_final_kills_bedwars: number
  four_four_armed_permanent_items_purchased_bedwars: number
  four_four_fire_tick_final_deaths_bedwars: number
  free_event_key_bedwars_halloween_boxes_2020: boolean
  four_three_entity_explosion_final_kills_bedwars: number
  four_four_voidless_permanent_items_purchased_bedwars: number
  four_four_voidless_magic_final_deaths_bedwars: number
  eight_two_voidless_fall_final_kills_bedwars: number
  four_four_voidless_entity_explosion_final_kills_bedwars: number
  four_four_voidless_void_final_kills_bedwars: number
  four_four_armed_projectile_final_deaths_bedwars: number
  four_four_lucky_beds_broken_bedwars: number
  four_four_lucky_entity_attack_final_kills_bedwars: number
  four_four_lucky_magic_deaths_bedwars: number
  free_event_key_bedwars_christmas_boxes_2020: boolean
  two_four_fire_tick_deaths_bedwars: number
  eight_two_rush_fall_deaths_bedwars: number
  four_four_ultimate_permanent_items_purchased_bedwars: number
  eight_two_armed_beds_broken_bedwars: number
  eight_two_armed_diamond_resources_collected_bedwars: number
  eight_two_armed_entity_attack_final_kills_bedwars: number
  eight_two_armed_final_kills_bedwars: number
  eight_two_armed_permanent_items_purchased_bedwars: number
  eight_two_armed_void_deaths_bedwars: number
  eight_two_armed_void_kills_bedwars: number
  four_three_fire_tick_deaths_bedwars: number
  eight_one_fire_tick_deaths_bedwars: number
  two_four_fire_tick_final_deaths_bedwars: number
  practice: Practice
  fire_final_kills_bedwars: number
  four_four_fire_final_kills_bedwars: number
  eight_two_armed_emerald_resources_collected_bedwars: number
  eight_two_armed_entity_attack_deaths_bedwars: number
  eight_two_armed_entity_explosion_kills_bedwars: number
  eight_two_armed_magic_deaths_bedwars: number
  eight_two_lucky_void_final_deaths_bedwars: number
  eight_two_rush_magic_final_deaths_bedwars: number
  eight_two_rush_magic_final_kills_bedwars: number
  eight_two_rush_magic_kills_bedwars: number
  eight_two_fire_final_kills_bedwars: number
  four_four_voidless_fall_deaths_bedwars: number
  four_four_voidless_magic_final_kills_bedwars: number
  eight_two_projectile_final_deaths_bedwars: number
  projectile_final_deaths_bedwars: number
  eight_two_fire_tick_kills_bedwars: number
  four_four_armed_beds_broken_bedwars: number
  four_four_armed_projectile_final_kills_bedwars: number
  four_four_armed_fall_deaths_bedwars: number
  four_four_armed_void_final_kills_bedwars: number
  four_four_armed_void_kills_bedwars: number
  four_four_lucky_diamond_resources_collected_bedwars: number
  four_four_lucky_entity_explosion_deaths_bedwars: number
  eight_two_fire_tick_final_kills_bedwars: number
  two_four_fire_final_kills_bedwars: number
  four_four_voidless_void_kills_bedwars: number
  eight_two_armed_projectile_final_kills_bedwars: number
  eight_two_armed_void_final_kills_bedwars: number
  eight_two_armed_wins_bedwars: number
  eight_two_armed_entity_attack_kills_bedwars: number
  eight_two_armed_void_final_deaths_bedwars: number
  four_four_lucky_beds_lost_bedwars: number
  four_four_lucky_fall_deaths_bedwars: number
  four_four_lucky_final_deaths_bedwars: number
  four_four_lucky_fire_tick_kills_bedwars: number
  four_four_lucky_losses_bedwars: number
  four_four_lucky_void_final_deaths_bedwars: number
  four_four_suffocation_deaths_bedwars: number
  suffocation_deaths_bedwars: number
  four_four_rush_permanent_items_purchased_bedwars: number
  four_four_rush_magic_final_kills_bedwars: number
  eight_two_ultimate_magic_kills_bedwars: number
  eight_two_ultimate_magic_deaths_bedwars: number
  eight_two_ultimate_magic_final_kills_bedwars: number
  castle_entity_attack_final_kills_bedwars: number
  castle_final_kills_bedwars: number
  castle_void_final_kills_bedwars: number
  eight_two_suffocation_deaths_bedwars: number
  eight_two_projectile_final_kills_bedwars: number
  four_four_projectile_kills_bedwars: number
  eight_two_voidless_magic_final_kills_bedwars: number
  four_four_voidless_entity_explosion_final_deaths_bedwars: number
  four_four_voidless_entity_explosion_kills_bedwars: number
  eight_two_fire_deaths_bedwars: number
  fire_deaths_bedwars: number
  four_four_lucky_fall_final_kills_bedwars: number
  four_four_lucky_magic_final_kills_bedwars: number
  four_four_rush_magic_deaths_bedwars: number
  castle_magic_kills_bedwars: number
  castle_projectile_deaths_bedwars: number
  castle_entity_explosion_final_kills_bedwars: number
  castle_fall_final_deaths_bedwars: number
  castle_projectile_final_deaths_bedwars: number
  castle_entity_explosion_final_deaths_bedwars: number
  castle_magic_final_kills_bedwars: number
  eight_two_armed_fall_deaths_bedwars: number
  eight_two_armed_entity_attack_final_deaths_bedwars: number
  eight_two_armed_fire_tick_kills_bedwars: number
  four_four_lucky_entity_attack_final_deaths_bedwars: number
  four_four_lucky_projectile_deaths_bedwars: number
  eight_two_lucky_fall_final_kills_bedwars: number
  eight_two_lucky_magic_final_kills_bedwars: number
  four_four_rush_fall_final_kills_bedwars: number
  four_four_rush_fall_final_deaths_bedwars: number
  castle_entity_explosion_deaths_bedwars: number
  castle_fall_final_kills_bedwars: number
  four_four_voidless_entity_explosion_deaths_bedwars: number
  eight_two_armed_fall_kills_bedwars: number
  four_four_armed_fall_final_deaths_bedwars: number
  four_four_armed_fall_final_kills_bedwars: number
  eight_two_fire_kills_bedwars: number
  fire_kills_bedwars: number
  eight_two_underworld__items_purchased_bedwars: number
  eight_two_underworld_beds_broken_bedwars: number
  eight_two_underworld_beds_lost_bedwars: number
  eight_two_underworld_deaths_bedwars: number
  eight_two_underworld_entity_attack_deaths_bedwars: number
  eight_two_underworld_entity_attack_final_kills_bedwars: number
  eight_two_underworld_entity_attack_kills_bedwars: number
  eight_two_underworld_fall_deaths_bedwars: number
  eight_two_underworld_final_deaths_bedwars: number
  eight_two_underworld_final_kills_bedwars: number
  eight_two_underworld_games_played_bedwars: number
  eight_two_underworld_gold_resources_collected_bedwars: number
  eight_two_underworld_iron_resources_collected_bedwars: number
  eight_two_underworld_items_purchased_bedwars: number
  eight_two_underworld_kills_bedwars: number
  eight_two_underworld_losses_bedwars: number
  eight_two_underworld_permanent_items_purchased_bedwars: number
  eight_two_underworld_resources_collected_bedwars: number
  eight_two_underworld_void_final_deaths_bedwars: number
  eight_two_underworld_void_kills_bedwars: number
  four_four_underworld__items_purchased_bedwars: number
  four_four_underworld_beds_broken_bedwars: number
  four_four_underworld_deaths_bedwars: number
  four_four_underworld_entity_attack_deaths_bedwars: number
  four_four_underworld_entity_attack_final_kills_bedwars: number
  four_four_underworld_fall_deaths_bedwars: number
  four_four_underworld_final_kills_bedwars: number
  four_four_underworld_games_played_bedwars: number
  four_four_underworld_gold_resources_collected_bedwars: number
  four_four_underworld_iron_resources_collected_bedwars: number
  four_four_underworld_items_purchased_bedwars: number
  four_four_underworld_resources_collected_bedwars: number
  four_four_underworld_void_deaths_bedwars: number
  four_four_underworld_wins_bedwars: number
  four_four_underworld_emerald_resources_collected_bedwars: number
  four_four_underworld_entity_attack_kills_bedwars: number
  four_four_underworld_fall_kills_bedwars: number
  four_four_underworld_kills_bedwars: number
  four_four_underworld_void_final_kills_bedwars: number
  four_four_underworld_void_kills_bedwars: number
  four_four_underworld_magic_final_kills_bedwars: number
  four_four_underworld_permanent_items_purchased_bedwars: number
  four_four_underworld_beds_lost_bedwars: number
  four_four_underworld_final_deaths_bedwars: number
  four_four_underworld_losses_bedwars: number
  four_four_underworld_projectile_kills_bedwars: number
  four_four_underworld_void_final_deaths_bedwars: number
  eight_two_underworld_diamond_resources_collected_bedwars: number
  eight_two_underworld_entity_attack_final_deaths_bedwars: number
  eight_two_underworld_void_deaths_bedwars: number
  eight_two_underworld_void_final_kills_bedwars: number
  eight_two_underworld_fall_final_kills_bedwars: number
  eight_two_underworld_wins_bedwars: number
  eight_two_underworld_emerald_resources_collected_bedwars: number
  eight_two_underworld_magic_kills_bedwars: number
  selected_challenge_type: string
  total_challenges_completed: number
  bw_challenge_no_team_upgrades: number
  bw_unique_challenges_completed: number
  four_four_underworld_diamond_resources_collected_bedwars: number
  four_four_underworld_entity_attack_final_deaths_bedwars: number
  eight_two_projectile_kills_bedwars: number
  bw_challenge_slow_generator: number
  bw_challenge_assassin: number
  bw_challenge_no_utilities: number
  bw_challenge_selfish: number
  bw_challenge_woodworker: number
  bw_challenge_invisible_shop: number
  challenges: Challenges
  eight_two_lucky_fall_kills_bedwars: number
  four_four_ultimate_entity_explosion_final_deaths_bedwars: number
  four_four_armed_entity_explosion_final_deaths_bedwars: number
  four_four_armed_entity_explosion_deaths_bedwars: number
  four_four_armed_fall_kills_bedwars: number
  four_four_lucky_fire_tick_final_kills_bedwars: number
  four_four_lucky_magic_kills_bedwars: number
  four_four_lucky_projectile_final_kills_bedwars: number
  eight_two_swap__items_purchased_bedwars: number
  eight_two_swap_beds_broken_bedwars: number
  eight_two_swap_beds_lost_bedwars: number
  eight_two_swap_deaths_bedwars: number
  eight_two_swap_diamond_resources_collected_bedwars: number
  eight_two_swap_emerald_resources_collected_bedwars: number
  eight_two_swap_entity_attack_deaths_bedwars: number
  eight_two_swap_final_kills_bedwars: number
  eight_two_swap_games_played_bedwars: number
  eight_two_swap_gold_resources_collected_bedwars: number
  eight_two_swap_iron_resources_collected_bedwars: number
  eight_two_swap_items_purchased_bedwars: number
  eight_two_swap_magic_final_kills_bedwars: number
  eight_two_swap_permanent_items_purchased_bedwars: number
  eight_two_swap_resources_collected_bedwars: number
  eight_two_swap_void_deaths_bedwars: number
  eight_two_swap_void_final_kills_bedwars: number
  eight_two_swap_wins_bedwars: number
  eight_two_swap_entity_attack_final_deaths_bedwars: number
  eight_two_swap_entity_attack_final_kills_bedwars: number
  eight_two_swap_final_deaths_bedwars: number
  eight_two_swap_losses_bedwars: number
  eight_two_swap_kills_bedwars: number
  eight_two_swap_void_kills_bedwars: number
  eight_two_swap_entity_attack_kills_bedwars: number
  eight_two_swap_void_final_deaths_bedwars: number
  eight_two_suffocation_final_kills_bedwars: number
  suffocation_final_kills_bedwars: number
  eight_two_lucky_fire_tick_deaths_bedwars: number
  four_four_swap__items_purchased_bedwars: number
  four_four_swap_beds_broken_bedwars: number
  four_four_swap_beds_lost_bedwars: number
  four_four_swap_deaths_bedwars: number
  four_four_swap_entity_attack_deaths_bedwars: number
  four_four_swap_entity_attack_final_kills_bedwars: number
  four_four_swap_fall_deaths_bedwars: number
  four_four_swap_fall_final_kills_bedwars: number
  four_four_swap_fall_kills_bedwars: number
  four_four_swap_final_kills_bedwars: number
  four_four_swap_games_played_bedwars: number
  four_four_swap_gold_resources_collected_bedwars: number
  four_four_swap_iron_resources_collected_bedwars: number
  four_four_swap_items_purchased_bedwars: number
  four_four_swap_kills_bedwars: number
  four_four_swap_permanent_items_purchased_bedwars: number
  four_four_swap_resources_collected_bedwars: number
  four_four_swap_void_deaths_bedwars: number
  four_four_swap_void_final_kills_bedwars: number
  four_four_swap_void_kills_bedwars: number
  four_four_swap_wins_bedwars: number
  four_four_swap_final_deaths_bedwars: number
  four_four_swap_losses_bedwars: number
  four_four_swap_magic_final_deaths_bedwars: number
  four_four_swap_emerald_resources_collected_bedwars: number
  four_four_swap_entity_attack_kills_bedwars: number
  four_four_swap_diamond_resources_collected_bedwars: number
  four_four_swap_entity_attack_final_deaths_bedwars: number
  four_four_underworld_magic_kills_bedwars: number
  four_four_underworld_fall_final_kills_bedwars: number
  two_four_entity_explosion_final_kills_bedwars: number
  eight_two_underworld_fall_kills_bedwars: number
  eight_two_underworld_magic_final_kills_bedwars: number
  eight_two_underworld_entity_explosion_deaths_bedwars: number
  eight_two_underworld_magic_final_deaths_bedwars: number
  four_four_lucky_magic_final_deaths_bedwars: number
  four_four_lucky_bed_resources_collected_bedwars: number
  four_four_lucky_entity_explosion_final_kills_bedwars: number
  eight_two_swap_fall_deaths_bedwars: number
  eight_two_swap_fall_kills_bedwars: number
  eight_two_swap_projectile_final_deaths_bedwars: number
  four_four_swap_void_final_deaths_bedwars: number
  four_four_rush_magic_kills_bedwars: number
  leaderboardSettings: LeaderboardSettings2
  castle_fire_tick_deaths_bedwars: number
  drowning_final_kills_bedwars: number
  eight_two_drowning_final_kills_bedwars: number
  bw_challenge_reset_armor: number
  four_four_lucky_fire_deaths_bedwars: number
  four_four_lucky_fire_tick_final_deaths_bedwars: number
  four_four_lucky_fire_tick_deaths_bedwars: number
  four_four_swap_fall_final_deaths_bedwars: number
  castle_magic_final_deaths_bedwars: number
  eight_two_armed_magic_final_kills_bedwars: number
  eight_two_armed_fall_final_kills_bedwars: number
  eight_two_armed_entity_explosion_final_kills_bedwars: number
  four_four_armed_magic_final_deaths_bedwars: number
  four_four_swap_magic_kills_bedwars: number
  four_four_swap_magic_final_kills_bedwars: number
  four_three_fire_tick_final_kills_bedwars: number
  four_four_rush_projectile_final_kills_bedwars: number
  four_four_fire_final_deaths_bedwars: number
  four_four_armed_fire_tick_deaths_bedwars: number
  eight_two_lucky_fire_deaths_bedwars: number
  bw_challenge_collector: number
  eight_two_lucky_fire_tick_final_kills_bedwars: number
  eight_two_lucky_entity_explosion_deaths_bedwars: number
  four_four_suffocation_final_deaths_bedwars: number
  suffocation_final_deaths_bedwars: number
  four_four_ultimate_fire_tick_kills_bedwars: number
  four_four_armed_magic_kills_bedwars: number
  eight_two_armed_fire_tick_deaths_bedwars: number
  four_four_armed_entity_explosion_final_kills_bedwars: number
  four_four_armed_fire_tick_kills_bedwars: number
  four_four_swap_fire_tick_final_kills_bedwars: number
  four_four_swap_fire_tick_deaths_bedwars: number
  eight_two_rush_entity_explosion_final_kills_bedwars: number
  eight_two_rush_magic_deaths_bedwars: number
  four_four_ultimate_fire_deaths_bedwars: number
  four_four_voidless_projectile_kills_bedwars: number
  four_four_voidless_fire_tick_final_kills_bedwars: number
  four_three_fire_tick_kills_bedwars: number
  four_four_voidless_projectile_final_kills_bedwars: number
  four_four_lucky_entity_explosion_kills_bedwars: number
  four_four_underworld_entity_explosion_final_kills_bedwars: number
  four_four_underworld_magic_deaths_bedwars: number
  four_four_swap_magic_deaths_bedwars: number
  lastTourneyAd: number
  tourney_bedwars_eight_two_1__items_purchased_bedwars: number
  tourney_bedwars_eight_two_1_beds_broken_bedwars: number
  tourney_bedwars_eight_two_1_deaths_bedwars: number
  tourney_bedwars_eight_two_1_diamond_resources_collected_bedwars: number
  tourney_bedwars_eight_two_1_entity_attack_deaths_bedwars: number
  tourney_bedwars_eight_two_1_entity_attack_final_kills_bedwars: number
  tourney_bedwars_eight_two_1_entity_attack_kills_bedwars: number
  tourney_bedwars_eight_two_1_fall_deaths_bedwars: number
  tourney_bedwars_eight_two_1_final_kills_bedwars: number
  tourney_bedwars_eight_two_1_games_played_bedwars: number
  tourney_bedwars_eight_two_1_gold_resources_collected_bedwars: number
  tourney_bedwars_eight_two_1_iron_resources_collected_bedwars: number
  tourney_bedwars_eight_two_1_items_purchased_bedwars: number
  tourney_bedwars_eight_two_1_kills_bedwars: number
  tourney_bedwars_eight_two_1_permanent_items_purchased_bedwars: number
  tourney_bedwars_eight_two_1_resources_collected_bedwars: number
  tourney_bedwars_eight_two_1_void_deaths_bedwars: number
  tourney_bedwars_eight_two_1_void_final_kills_bedwars: number
  tourney_bedwars_eight_two_1_wins_bedwars: number
  tourney_bedwars_eight_two_1_emerald_resources_collected_bedwars: number
  tourney_bedwars_eight_two_1_void_kills_bedwars: number
  tourney_bedwars_eight_two_1_beds_lost_bedwars: number
  tourney_bedwars_eight_two_1_entity_attack_final_deaths_bedwars: number
  tourney_bedwars_eight_two_1_final_deaths_bedwars: number
  tourney_bedwars_eight_two_1_losses_bedwars: number
  tourney_bedwars_eight_two_1_fall_kills_bedwars: number
  tourney_bedwars_eight_two_1_void_final_deaths_bedwars: number
  tourney_bedwars_eight_two_1_entity_explosion_final_deaths_bedwars: number
  tourney_bedwars_eight_two_1_entity_explosion_final_kills_bedwars: number
  tourney_bedwars_eight_two_1_fall_final_deaths_bedwars: number
  tourney_bedwars_eight_two_1_fall_final_kills_bedwars: number
  tourney_bedwars_eight_two_1_entity_explosion_kills_bedwars: number
  slumber: Slumber
  four_four_rush_projectile_final_deaths_bedwars: number
}

export interface Privategames2 {
  speed: string
  respawn_time: string
  one_hit_one_kill: boolean
  bed_instabreak: boolean
  max_team_upgrades: boolean
  low_gravity: boolean
  no_diamonds: boolean
  no_emeralds: boolean
  event_time: string
  disable_block_protection: boolean
  health_buff: string
}

export interface Practice {
  selected: string
  bridging: Bridging
  mlg: Mlg
  records: Records
  pearl_clutching: PearlClutching
  fireball_jumping: FireballJumping
}

export interface Bridging {
  blocks_placed: number
  failed_attempts: number
  successful_attempts: number
}

export interface Mlg {
  failed_attempts: number
  successful_attempts: number
}

export interface Records {
  "bridging_distance_30:elevation_NONE:angle_STRAIGHT:": number
  "bridging_distance_30:elevation_NONE:angle_DIAGONAL:": number
  "bridging_distance_50:elevation_NONE:angle_DIAGONAL:": number
  "bridging_distance_30:elevation_SLIGHT:angle_STRAIGHT:": number
  "bridging_distance_50:elevation_STAIRCASE:angle_DIAGONAL:": number
  "bridging_distance_100:elevation_STAIRCASE:angle_DIAGONAL:": number
  "bridging_distance_30:elevation_STAIRCASE:angle_STRAIGHT:": number
}

export interface PearlClutching {
  failed_attempts: number
  successful_attempts: number
}

export interface FireballJumping {
  successful_attempts: number
  blocks_placed: number
  failed_attempts: number
}

export interface Challenges {
  bw_challenge_collector_best_time: number
  bw_challenge_no_sprint_best_time: number
  bw_challenge_cant_touch_this_best_time: number
  bw_challenge_no_shift_best_time: number
  bw_challenge_reset_armor_best_time: number
  bw_challenge_no_utilities_best_time: number
  bw_challenge_no_team_upgrades_best_time: number
  bw_challenge_slow_generator_best_time: number
  bw_challenge_selfish_best_time: number
}

export interface LeaderboardSettings2 {
  mode: string
  resetType: string
}

export interface Slumber {
  quest: Quest
  fredgie: Fredgie
  bag_type: string
  tickets: number
  total_tickets_earned: number
  tickets_given_doorman: number
  tickets_requirement_met: boolean
  phase: Phase
  room: Room
  boon_multiplier: number
  phasethree: Phasethree
  minion: Minion
  sandman: Sandman
}

export interface Quest {
  started: Started
  lastStarted: LastStarted
  npc: Npc
  objective: Objective
  completed: Completed
  lastCompleted: LastCompleted
  item: Item
  gambler_george: GamblerGeorge
}

export interface Started {
  npc_reception_start: boolean
  npc_lady_saichi: boolean
  npc_general_daku: boolean
  npc_john_pireso: boolean
  phase_two_asc: boolean
  phase_three_asc: boolean
  npc_laundry: boolean
  npc_blacksmith_apprentice: boolean
  npc_blacksmith: boolean
  npc_king_flut: boolean
  npc_hammer: boolean
  npc_oasis: boolean
  npc_hermes: boolean
  npc_skyblock_player: boolean
  npc_jimmy_bimmy: boolean
  npc_executives: boolean
  npc_bucky: boolean
  npc_don_espresso: boolean
  npc_hammer_part_two: boolean
  npc_gambler_george: boolean
  npc_quiz_show_host: boolean
  npc_the_ratman: boolean
  npc_arcade_player: boolean
  npc_jeremy_jagger: boolean
  npc_jets_mcturbo: boolean
  npc_peter: boolean
  npc_wally: boolean
  npc_bill_starr: boolean
  npc_inspector: boolean
  npc_spaceman: boolean
  npc_laundry_gal: boolean
  npc_combat_artist_sally: boolean
  staff_wallet_upgrade: boolean
  npc_master_meyer: boolean
  npc_lester_brody: boolean
  npc_gizzy_moonpowder: boolean
  phase_four_ascension_q1: boolean
  phase_four_ascension_q2: boolean
  phase_four_ascension_q3: boolean
  phase_four_ascension_q4: boolean
  phase_four_ascension_q5: boolean
  phase_four_ascension_wallet_q: boolean
  npc_electrician_russel: boolean
  npc_meet_the_sandman: boolean
}

export interface LastStarted {
  npc_reception_start: number
  npc_lady_saichi: number
  npc_general_daku: number
  npc_john_pireso: number
  phase_two_asc: number
  phase_three_asc: number
  npc_laundry: number
  npc_blacksmith_apprentice: number
  npc_blacksmith: number
  npc_king_flut: number
  npc_hammer: number
  npc_oasis: number
  npc_hermes: number
  npc_skyblock_player: number
  npc_jimmy_bimmy: number
  npc_executives: number
  npc_bucky: number
  npc_don_espresso: number
  npc_hammer_part_two: number
  npc_gambler_george: number
  npc_quiz_show_host: number
  npc_the_ratman: number
  npc_arcade_player: number
  npc_jeremy_jagger: number
  npc_jets_mcturbo: number
  npc_peter: number
  npc_wally: number
  npc_bill_starr: number
  npc_inspector: number
  npc_spaceman: number
  npc_laundry_gal: number
  npc_combat_artist_sally: number
  staff_wallet_upgrade: number
  npc_master_meyer: number
  npc_lester_brody: number
  npc_gizzy_moonpowder: number
  phase_four_ascension_q1: number
  phase_four_ascension_q2: number
  phase_four_ascension_q3: number
  phase_four_ascension_q4: number
  phase_four_ascension_q5: number
  phase_four_ascension_wallet_q: number
  npc_electrician_russel: number
  npc_meet_the_sandman: number
}

export interface Npc {
  talk: Talk
}

export interface Talk {
  DoorManNpc: boolean
  HostessKatrinaNpc: boolean
  HotelReceptionistNpc: boolean
  TicketMachineNpc: boolean
  LadySaichiNpc: boolean
  GeneralDakuNpc: boolean
  JohnIndigosNpc: boolean
  FredericFerntonNpc: boolean
  JohnIndigosPhaseTwoNpc: boolean
  LaundryGuyNpc: boolean
  BlackSmithRobertoNpc: boolean
  BlackSmithNpc: boolean
  KingFlutNpc: boolean
  HammerNpc: boolean
  OasisSpiritNpc: boolean
  HermesNpc: boolean
  SkyBlockPlayerNpc: boolean
  JimmyNpc: boolean
  BimmyNpc: boolean
  CEONpc: boolean
  ChefGarryJamseyNpc: boolean
  ChefBuckyNpc: boolean
  DonEspressoNpc: boolean
  HammerPartTwoNpc: boolean
  GamblerGeorgeNpc: boolean
  QuizShowHostNpc: boolean
  RatmanNpc: boolean
  ArcadePlayerNpc: boolean
  JeremyJaggerNpc: boolean
  JetsMcTurboNpc: boolean
  PeterNpc: boolean
  WallyNpc: boolean
  BillStarrNpc: boolean
  InspectorMyaSterlingNpc: boolean
  SpaceManNpc: boolean
  LaundryGalNpc: boolean
  CombatArtistSallyNpc: boolean
  MasterMeyerNpc: boolean
  LesterBrodyNpc: boolean
  GizzyMoonpowderNpc: boolean
  SlumberVillagerNpc: boolean
  JohnIndigosPhaseThreeNpc: boolean
  ElectricianRusselNpc: boolean
  SandmanNpc: boolean
}

export interface Objective {
  receptionist_introduction: boolean
  lady_saichi_mattress: boolean
  general_daku_tea: boolean
  john_pireso_map: boolean
  phase_two_recp: boolean
  blacksmith_apprentice_iron: boolean
  blacksmith_apprentice_coins: boolean
  hammer_coins: boolean
  blacksmith_mold: boolean
  blacksmith_apprentice_iron_repeat: boolean
  laundry_manager_sheets: boolean
  blacksmith_golden_ticket: boolean
  blacksmith_apprentice_coins_repeat: boolean
  king_flut_pillow: boolean
  blacksmith_iron_bars: boolean
  oasis_souls: boolean
  blacksmith_water: boolean
  king_flut_amulet: boolean
  blacksmith_amulet: boolean
  phase_three_recp: boolean
  hermes_mystery_boxes: boolean
  chess_wool_cables: boolean
  chess_tickets: boolean
  chess_tokens_of_ferocity: boolean
  skyblock_player_leaves: boolean
  bucky_sky_tea_leaves: boolean
  bucky_fragments: boolean
  bucky_fragments_repeat: boolean
  executives_meeting_numbers: boolean
  don_espresso_gold: boolean
  arcade_quarters: boolean
  arcade_quarters_repeat: boolean
  jagger_iron: boolean
  ratman_bedsheets: boolean
  ratman_iron_bars: boolean
  ratman_pillow: boolean
  gambler_george_win: boolean
  hammer_part_two_silver_blade: boolean
  jets_iron_bars: boolean
  jagger_diamond: boolean
  jagger_emerald: boolean
  ratman_spark_plug: boolean
  jagger_wool: boolean
  jagger_gold: boolean
  jets_emeralds: boolean
  peter_escape: boolean
  jets_cables: boolean
  jets_nether_stars: boolean
  inspector_gloves: boolean
  bill_starr_blitz: boolean
  inspector_clue_weapon: boolean
  inspector_air_freshener: boolean
  spaceman_nether_stars: boolean
  wally_nether_stars: boolean
  laundry_gal_pillows: boolean
  combat_artist_sally: boolean
  combat_artist_sally_repeat: boolean
  inspector_work_boots: boolean
  master_meyer: boolean
  wally_bed_sheets: boolean
  gizzy_moonpowder: boolean
  lester_brody: boolean
  phase_four_ascension_o1: boolean
  phase_four_ascension_o2: boolean
  phase_four_ascension_o3: boolean
  inspector_photo: boolean
  phase_four_ascension_o4: boolean
  phase_four_ascension_o5: boolean
  electrician_russel: boolean
  electrician_russel_repeat: boolean
  gizzy_moonpowder_repeat: boolean
  master_meyer_repeat: boolean
  meet_the_sandman: boolean
}

export interface Completed {
  npc_reception_start: boolean
  npc_lady_saichi: boolean
  npc_general_daku: boolean
  npc_john_pireso: boolean
  phase_two_asc: boolean
  npc_blacksmith_apprentice: boolean
  npc_hammer: boolean
  npc_laundry: boolean
  npc_oasis: boolean
  npc_king_flut: boolean
  npc_blacksmith: boolean
  phase_three_asc: boolean
  npc_hermes: boolean
  npc_jimmy_bimmy: boolean
  npc_skyblock_player: boolean
  npc_bucky: boolean
  npc_executives: boolean
  npc_quiz_show_host: boolean
  npc_don_espresso: boolean
  npc_arcade_player: boolean
  npc_hammer_part_two: boolean
  npc_gambler_george: boolean
  npc_the_ratman: boolean
  npc_jeremy_jagger: boolean
  npc_peter: boolean
  npc_jets_mcturbo: boolean
  npc_bill_starr: boolean
  npc_spaceman: boolean
  npc_laundry_gal: boolean
  npc_combat_artist_sally: boolean
  npc_master_meyer: boolean
  npc_wally: boolean
  staff_wallet_upgrade: boolean
  npc_gizzy_moonpowder: boolean
  npc_lester_brody: boolean
  phase_four_ascension_q1: boolean
  phase_four_ascension_q2: boolean
  phase_four_ascension_q3: boolean
  npc_inspector: boolean
  phase_four_ascension_q4: boolean
  phase_four_ascension_q5: boolean
  phase_four_ascension_wallet_q: boolean
  npc_electrician_russel: boolean
  npc_meet_the_sandman: boolean
}

export interface LastCompleted {
  npc_reception_start: number
  npc_lady_saichi: number
  npc_general_daku: number
  npc_john_pireso: number
  phase_two_asc: number
  npc_blacksmith_apprentice: number
  npc_hammer: number
  npc_laundry: number
  npc_oasis: number
  npc_king_flut: number
  npc_blacksmith: number
  phase_three_asc: number
  npc_hermes: number
  npc_jimmy_bimmy: number
  npc_skyblock_player: number
  npc_bucky: number
  npc_executives: number
  npc_quiz_show_host: number
  npc_don_espresso: number
  npc_arcade_player: number
  npc_hammer_part_two: number
  npc_gambler_george: number
  npc_the_ratman: number
  npc_jeremy_jagger: number
  npc_peter: number
  npc_jets_mcturbo: number
  npc_bill_starr: number
  npc_spaceman: number
  npc_laundry_gal: number
  npc_combat_artist_sally: number
  npc_master_meyer: number
  npc_wally: number
  staff_wallet_upgrade: number
  npc_gizzy_moonpowder: number
  npc_lester_brody: number
  phase_four_ascension_q1: number
  phase_four_ascension_q2: number
  phase_four_ascension_q3: number
  npc_inspector: number
  phase_four_ascension_q4: number
  phase_four_ascension_q5: number
  phase_four_ascension_wallet_q: number
  npc_electrician_russel: number
  npc_meet_the_sandman: number
}

export interface Item {
  slumber_item_bed_sheets: number
  slumber_item_perfume: number
  slumber_item_ender_dust: number
  slumber_item_indigos_map: number
  slumber_item_imperial_leather: number
  slumber_item_trusty_rope: number
  slumber_item_iron_nugget: number
  slumber_item_silver_coins: number
  slumber_item_weapon_mold: number
  slumber_item_soul: number
  slumber_item_comfy_pillow: number
  slumber_item_golden_ticket: number
  slumber_item_timeworn_mystery_box: number
  slumber_item_oasis_water: number
  slumber_item_missing_amulet: number
  slumber_item_amulet: number
  slumber_item_enchanted_hammer: number
  slumber_item_token_of_ferocity: number
  slumber_item_cable: number
  slumber_item_proof_of_success: number
  slumber_item_silver_blade_replay: number
  slumber_item_gold_bar: number
  slumber_item_dwarven_mithril: number
  slumber_item_ratman_mask: number
  slumber_item_emerald_shard: number
  slumber_item_diamond_fragment: number
  slumber_item_nether_star: number
  slumber_item_spark_plug: number
  slumber_item_unused_bomb_materials: number
  slumber_item_limbo_dust: number
  slumber_item_blitz_star: number
  slumber_item_gloves: number
  slumber_item_discarded_kart_wheel: number
  slumber_item_faded_blitz_star: number
  slumber_item_murder_weapon: number
  slumber_item_air_freshener: number
  slumber_item_moon_stone_nugget: number
  slumber_item_boots: number
  slumber_item_block_of_mega_walls_obsidian: number
  slumber_item_glowing_sand_paper: number
  slumber_item_victim_photo: number
  slumber_item_cleaned_up_murder_knife: number
}

export interface GamblerGeorge {
  bet_amount: number
  gamble_games_won: number
  won_last_game: boolean
  should_reward: boolean
}

export interface Fredgie {
  should_update_index: boolean
  dialogue_index: number
}

export interface Phase {
  current: number
}

export interface Room {
  room_1: boolean
  room_2: boolean
  room_3: boolean
  room_4: boolean
  room_5: boolean
  room_6: boolean
  room_7: boolean
  room_8: boolean
  room_12: boolean
  room_11: boolean
  room_10: boolean
  room_9: boolean
  owners_office: boolean
}

export interface Phasethree {
  completed_quests: number
}

export interface Minion {
  ender_dust: number
  ender_dust_collected: number
  games: number
  tickets: number
  tickets_collected: number
}

export interface Sandman {
  ticket_multiplier: number
  exp_multiplier: number
}

export interface TrueCombat {
  packages: string[]
  win_streak: number
  games: number
  items_enchanted: number
  crazywalls_deaths_team_chaos: number
  deaths: number
  coins: number
  losses: number
  crazywalls_games_team_chaos: number
  crazywalls_losses_team_chaos: number
  survived_players: number
  kills_weekly_b: number
  arrows_shot: number
  kills: number
  crazywalls_kills_weekly_b_team_chaos: number
  crazywalls_kills_monthly_b_team_chaos: number
  crazywalls_kills_team_chaos: number
  arrows_hit: number
  kills_monthly_b: number
  live_combat: boolean
  crazywalls_losses_solo_chaos: number
  crazywalls_games_solo_chaos: number
  crazywalls_deaths_solo_chaos: number
}

export interface SkyClash {
  card_packs: number
}

export interface Uhc {
  clearup_achievement: boolean
  coins: number
  saved_stats: boolean
  equippedKit: string
  deaths_solo: number
  deaths: number
  kit_ARCHERY_TOOLS: number
  kit_WORKING_TOOLS: number
  kit_LUNCH_BOX: number
  packages: string[]
  perk_armorsmith_line_a: number
  perk_armorsmith_line_b: number
  perk_armorsmith_line_c: number
  kills: number
  score: number
  perk_weaponsmith_line_a: number
  perk_weaponsmith_line_b: number
  perk_weaponsmith_line_c: number
  perk_apprentice_line_a: number
  perk_apprentice_line_c: number
  perk_apprentice_line_b: number
  perk_alchemy_line_a: number
  ultimates_crafted: number
  extra_ultimates_crafted: number
  uhc_parkour_1: boolean
}

export interface Mcgo {
  game_wins_deathmatch: number
  packages: string[]
  kills_deathmatch: number
  grenadeKills: number
  bombs_planted: number
  pocket_change: number
  game_wins: number
  bombs_defused: number
  kills: number
  grenade_kills: number
  headshot_kills: number
  deaths_deathmatch: number
  coins: number
  shots_fired: number
  cop_kills_deathmatch: number
  game_wins_temple: number
  round_wins: number
  lastTourneyAd: number
  deaths: number
  bombs_planted_tourney_mcgo_defusal_0: number
  criminal_kills_tourney_mcgo_defusal_0: number
  deaths_tourney_mcgo_defusal_0: number
  game_plays_tourney_mcgo_defusal_0: number
  headshot_kills_tourney_mcgo_defusal_0: number
  kills_tourney_mcgo_defusal_0: number
  round_wins_tourney_mcgo_defusal_0: number
  shots_fired_tourney_mcgo_defusal_0: number
  cop_kills_tourney_mcgo_defusal_0: number
  game_wins_tourney_mcgo_defusal_0: number
  selectedSmgDev: string
  selectedShotgunDev: string
  selectedKnifeDev: string
  selectedOcelotChestplateDev: string
  selectedOcelotHelmetDev: string
  selectedCreeperChestplateDev: string
  selectedCreeperHelmetDev: string
  body_armor_cost: number
  bounty_hunter: number
  strength_training: number
  game_plays_deathmatch: number
  game_wins_sandstorm: number
  rifle_cost_reduction: number
  cop_kills: number
  criminal_kills: number
  game_plays: number
  "game_wins_melon factory": number
  shoutTotal: number
  scopedRifleHeadshots: number
  carbineHeadshots: number
  carbineKills: number
  bullpupKills: number
  rifleHeadshots: number
  shotgunKills: number
  autoShotgunHeadshots: number
  rifleKills: number
  handgunKills: number
  handgunHeadshots: number
  autoShotgunKills: number
  sniperKills: number
  scopedRifleKills: number
  bullpupHeadshots: number
  shotgunHeadshots: number
  sniperHeadshots: number
  assists: number
  criminal_kills_deathmatch: number
  game_wins_atomic: number
  assists_deathmatch: number
  game_wins_alleyway: number
  game_wins_carrier: number
  magnumKills: number
  game_wins_junction: number
  pistolKills: number
  pistolHeadshots: number
  game_wins_bazaar: number
  smgHeadshots: number
  magnumHeadshots: number
  smgKills: number
  game_wins_reserve: number
  game_wins_derailed: number
  game_wins_overgrown: number
  shotgun_damage_increase: number
  shotgun_cost_reduction: number
  shotgun_reload_speed_reduction: number
  shotgun_recoil_reduction: number
  kills_gungame: number
  game_wins_gungame: number
  deaths_gungame: number
  assists_gungame: number
  care_packages_collected_gungame: number
  cop_kills_gungame: number
  game_plays_gungame: number
}

export interface HungerGames {
  packages: string[]
  wins_teams_normal: number
  wins_backup: number
  wins_solo_normal: number
  wins: number
  autoarmor: boolean
  chests_opened: number
  chests_opened_armorer: number
  coins: number
  damage: number
  damage_armorer: number
  damage_taken: number
  damage_taken_armorer: number
  deaths: number
  exp_armorer: number
  games_played: number
  games_played_armorer: number
  kills: number
  kills_armorer: number
  kills_teams_normal: number
  potions_drunk: number
  potions_drunk_armorer: number
  time_played: number
  time_played_armorer: number
  damage_taken_scout: number
  games_played_scout: number
  potions_thrown: number
  potions_thrown_scout: number
  time_played_scout: number
  arrows_hit: number
  arrows_hit_speleologist: number
  blitz_uses: number
  chests_opened_speleologist: number
  damage_taken_speleologist: number
  games_played_speleologist: number
  potions_drunk_speleologist: number
  potions_thrown_speleologist: number
  time_played_speleologist: number
  arrows_fired: number
  arrows_fired_warrior: number
  chests_opened_warrior: number
  damage_taken_warrior: number
  damage_warrior: number
  exp_warrior: number
  games_played_warrior: number
  kills_random: number
  kills_solo_normal: number
  kills_warrior: number
  potions_drunk_warrior: number
  potions_thrown_warrior: number
  time_played_warrior: number
  chests_opened_knight: number
  damage_knight: number
  damage_taken_knight: number
  games_played_knight: number
  time_played_knight: number
  arrows_fired_archer: number
  chests_opened_archer: number
  damage_archer: number
  damage_taken_archer: number
  games_played_archer: number
  time_played_archer: number
  potions_drunk_knight: number
  potions_drunk_archer: number
  damage_speleologist: number
  arrows_hit_meatmaster: number
  chests_opened_meatmaster: number
  damage_meatmaster: number
  damage_taken_meatmaster: number
  exp_meatmaster: number
  games_played_meatmaster: number
  kills_meatmaster: number
  potions_drunk_meatmaster: number
  time_played_meatmaster: number
  mobs_spawned: number
  mobs_spawned_speleologist: number
  arrows_hit_knight: number
  exp_knight: number
  kills_knight: number
  knight: number
  arrows_fired_knight: number
  chests_opened_hunter: number
  damage_hunter: number
  damage_taken_hunter: number
  games_played_hunter: number
  time_played_hunter: number
  exp_hunter: number
  arrows_fired_hunter: number
  potions_drunk_hunter: number
  potions_thrown_hunter: number
  chests_opened_fisherman: number
  damage_taken_fisherman: number
  games_played_fisherman: number
  potions_drunk_fisherman: number
  time_played_fisherman: number
  arrows_fired_scout: number
  arrows_hit_scout: number
  chests_opened_scout: number
  damage_scout: number
  exp_scout: number
  potions_drunk_scout: number
  scout: number
  damage_fisherman: number
  potions_thrown_knight: number
  arrows_fired_fisherman: number
  arrows_hit_fisherman: number
  potions_thrown_fisherman: number
  exp_fisherman: number
  kills_scout: number
  chests_opened_reaper: number
  damage_reaper: number
  damage_taken_reaper: number
  exp_reaper: number
  games_played_reaper: number
  time_played_reaper: number
  rogue: number
  chests_opened_rogue: number
  damage_rogue: number
  damage_taken_rogue: number
  fall_damage_rogue: number
  games_played_rogue: number
  potions_thrown_rogue: number
  time_played_rogue: number
  fisherman: number
  arrows_hit_rogue: number
  exp_rogue: number
  kills_rogue: number
  potions_drunk_rogue: number
  arrows_fired_phoenix: number
  chests_opened_phoenix: number
  damage_phoenix: number
  damage_taken_phoenix: number
  games_played_phoenix: number
  time_played_phoenix: number
  "arrows_fired_hype train": number
  "arrows_hit_hype train": number
  "chests_opened_hype train": number
  "damage_hype train": number
  "damage_taken_hype train": number
  "exp_hype train": number
  "games_played_hype train": number
  "kills_hype train": number
  "potions_drunk_hype train": number
  "rails_placed_hype train": number
  "time_played_hype train": number
  archer: number
  exp_archer: number
  potions_thrown_archer: number
  kills_fisherman: number
  kills_archer: number
  arrows_hit_archer: number
  lastTourneyAd: number
  prefers_full_kits_menu: boolean
  tourney_blitz_duo_1_chests_opened: number
  tourney_blitz_duo_1_chests_opened_fisherman: number
  tourney_blitz_duo_1_damage: number
  tourney_blitz_duo_1_damage_fisherman: number
  tourney_blitz_duo_1_damage_taken: number
  tourney_blitz_duo_1_damage_taken_fisherman: number
  tourney_blitz_duo_1_deaths: number
  tourney_blitz_duo_1_exp_fisherman: number
  tourney_blitz_duo_1_games_played: number
  tourney_blitz_duo_1_games_played_fisherman: number
  tourney_blitz_duo_1_potions_drunk: number
  tourney_blitz_duo_1_potions_drunk_fisherman: number
  tourney_blitz_duo_1_potions_thrown: number
  tourney_blitz_duo_1_potions_thrown_fisherman: number
  tourney_blitz_duo_1_time_played: number
  tourney_blitz_duo_1_time_played_fisherman: number
  tourney_blitz_duo_1_arrows_fired: number
  tourney_blitz_duo_1_arrows_fired_knight: number
  tourney_blitz_duo_1_chests_opened_knight: number
  tourney_blitz_duo_1_damage_knight: number
  tourney_blitz_duo_1_damage_taken_knight: number
  tourney_blitz_duo_1_exp_knight: number
  tourney_blitz_duo_1_games_played_knight: number
  tourney_blitz_duo_1_kills: number
  tourney_blitz_duo_1_kills_knight: number
  tourney_blitz_duo_1_kills_teams_normal: number
  tourney_blitz_duo_1_potions_drunk_knight: number
  tourney_blitz_duo_1_potions_thrown_knight: number
  tourney_blitz_duo_1_time_played_knight: number
  tourney_blitz_duo_1_arrows_fired_fisherman: number
  tourney_blitz_duo_1_kills_fisherman: number
  tourney_blitz_duo_1_chests_opened_diver: number
  tourney_blitz_duo_1_damage_diver: number
  tourney_blitz_duo_1_damage_taken_diver: number
  tourney_blitz_duo_1_exp_diver: number
  tourney_blitz_duo_1_games_played_diver: number
  tourney_blitz_duo_1_kills_diver: number
  tourney_blitz_duo_1_potions_drunk_diver: number
  tourney_blitz_duo_1_potions_thrown_diver: number
  tourney_blitz_duo_1_time_played_diver: number
  tourney_blitz_duo_1_wins_teams: number
  tourney_blitz_duo_1_wins_teams_diver: number
  tourney_blitz_duo_1_wins_teams_normal: number
  tourney_blitz_duo_1_arrows_fired_diver: number
  tourney_blitz_duo_1_arrows_hit: number
  tourney_blitz_duo_1_arrows_hit_diver: number
  tourney_blitz_duo_1_arrows_fired_reaper: number
  tourney_blitz_duo_1_chests_opened_reaper: number
  tourney_blitz_duo_1_damage_reaper: number
  tourney_blitz_duo_1_damage_taken_reaper: number
  tourney_blitz_duo_1_exp_reaper: number
  tourney_blitz_duo_1_games_played_reaper: number
  tourney_blitz_duo_1_kills_reaper: number
  tourney_blitz_duo_1_potions_drunk_reaper: number
  tourney_blitz_duo_1_potions_thrown_reaper: number
  tourney_blitz_duo_1_time_played_reaper: number
  tourney_blitz_duo_1_arrows_hit_reaper: number
  tourney_blitz_duo_1_wins_teams_reaper: number
  tourney_blitz_duo_1_mobs_spawned: number
  tourney_blitz_duo_1_mobs_spawned_reaper: number
  tourney_blitz_duo_1_wins_teams_knight: number
  reaper: number
  arrows_hit_reaper: number
  kills_reaper: number
  potions_thrown_reaper: number
  potions_drunk_reaper: number
  arrows_fired_reaper: number
  inGamePresentsCap_2020_26: number
  inGamePresentsCap_2021_1: number
  inGamePresentsCap_2021_2: number
  inGamePresentsCap_2021_6: number
  inGamePresentsCap_2021_7: number
  mobs_spawned_fisherman: number
  mobs_spawned_reaper: number
  tourney_blitz_duo_2_chests_opened: number
  tourney_blitz_duo_2_chests_opened_warrior: number
  tourney_blitz_duo_2_damage: number
  tourney_blitz_duo_2_damage_taken: number
  tourney_blitz_duo_2_damage_taken_warrior: number
  tourney_blitz_duo_2_damage_warrior: number
  tourney_blitz_duo_2_deaths: number
  tourney_blitz_duo_2_exp_warrior: number
  tourney_blitz_duo_2_games_played: number
  tourney_blitz_duo_2_games_played_warrior: number
  tourney_blitz_duo_2_potions_thrown: number
  tourney_blitz_duo_2_potions_thrown_warrior: number
  tourney_blitz_duo_2_time_played: number
  tourney_blitz_duo_2_time_played_warrior: number
  tourney_blitz_duo_2_chests_opened_reaper: number
  tourney_blitz_duo_2_damage_reaper: number
  tourney_blitz_duo_2_damage_taken_reaper: number
  tourney_blitz_duo_2_exp_reaper: number
  tourney_blitz_duo_2_games_played_reaper: number
  tourney_blitz_duo_2_kills: number
  tourney_blitz_duo_2_kills_reaper: number
  tourney_blitz_duo_2_kills_teams_normal: number
  tourney_blitz_duo_2_potions_drunk: number
  tourney_blitz_duo_2_potions_drunk_reaper: number
  tourney_blitz_duo_2_potions_thrown_reaper: number
  tourney_blitz_duo_2_time_played_reaper: number
  tourney_blitz_duo_2_arrows_hit: number
  tourney_blitz_duo_2_arrows_hit_reaper: number
  tourney_blitz_duo_2_blitz_uses: number
  tourney_blitz_duo_2_chests_opened_diver: number
  tourney_blitz_duo_2_damage_diver: number
  tourney_blitz_duo_2_damage_taken_diver: number
  tourney_blitz_duo_2_games_played_diver: number
  tourney_blitz_duo_2_potions_drunk_diver: number
  tourney_blitz_duo_2_time_played_diver: number
  tourney_blitz_duo_2_arrows_hit_astronaut: number
  tourney_blitz_duo_2_chests_opened_astronaut: number
  tourney_blitz_duo_2_damage_astronaut: number
  tourney_blitz_duo_2_damage_taken_astronaut: number
  tourney_blitz_duo_2_exp_astronaut: number
  tourney_blitz_duo_2_fall_damage_astronaut: number
  tourney_blitz_duo_2_games_played_astronaut: number
  tourney_blitz_duo_2_potions_drunk_astronaut: number
  tourney_blitz_duo_2_time_played_astronaut: number
  tourney_blitz_duo_2_chests_opened_slimeyslime: number
  tourney_blitz_duo_2_damage_slimeyslime: number
  tourney_blitz_duo_2_damage_taken_slimeyslime: number
  tourney_blitz_duo_2_exp_slimeyslime: number
  tourney_blitz_duo_2_games_played_slimeyslime: number
  tourney_blitz_duo_2_kills_slimeyslime: number
  tourney_blitz_duo_2_mobs_spawned: number
  tourney_blitz_duo_2_mobs_spawned_slimeyslime: number
  tourney_blitz_duo_2_potions_drunk_slimeyslime: number
  tourney_blitz_duo_2_potions_thrown_slimeyslime: number
  tourney_blitz_duo_2_time_played_slimeyslime: number
  tourney_blitz_duo_2_wins_teams: number
  tourney_blitz_duo_2_wins_teams_normal: number
  tourney_blitz_duo_2_wins_teams_slimeyslime: number
  tourney_blitz_duo_2_arrows_fired: number
  tourney_blitz_duo_2_arrows_fired_golem: number
  tourney_blitz_duo_2_arrows_hit_golem: number
  tourney_blitz_duo_2_chests_opened_golem: number
  tourney_blitz_duo_2_damage_golem: number
  tourney_blitz_duo_2_damage_taken_golem: number
  tourney_blitz_duo_2_exp_golem: number
  tourney_blitz_duo_2_games_played_golem: number
  tourney_blitz_duo_2_kills_golem: number
  tourney_blitz_duo_2_potions_drunk_golem: number
  tourney_blitz_duo_2_potions_thrown_golem: number
  tourney_blitz_duo_2_time_played_golem: number
  tourney_blitz_duo_2_wins_teams_golem: number
  tourney_blitz_duo_2_arrows_fired_slimeyslime: number
  tourney_blitz_duo_2_arrows_fired_creepertamer: number
  tourney_blitz_duo_2_arrows_hit_creepertamer: number
  tourney_blitz_duo_2_chests_opened_creepertamer: number
  tourney_blitz_duo_2_damage_creepertamer: number
  tourney_blitz_duo_2_damage_taken_creepertamer: number
  tourney_blitz_duo_2_exp_creepertamer: number
  tourney_blitz_duo_2_games_played_creepertamer: number
  tourney_blitz_duo_2_mobs_spawned_creepertamer: number
  tourney_blitz_duo_2_potions_drunk_creepertamer: number
  tourney_blitz_duo_2_potions_thrown_creepertamer: number
  tourney_blitz_duo_2_time_played_creepertamer: number
  tourney_blitz_duo_2_tnt_placed_creepertamer: number
  tourney_blitz_duo_2_kills_creepertamer: number
  tourney_blitz_duo_2_wins_teams_creepertamer: number
  tourney_blitz_duo_2_chests_opened_armorer: number
  tourney_blitz_duo_2_damage_armorer: number
  tourney_blitz_duo_2_damage_taken_armorer: number
  tourney_blitz_duo_2_exp_armorer: number
  tourney_blitz_duo_2_games_played_armorer: number
  tourney_blitz_duo_2_potions_drunk_armorer: number
  tourney_blitz_duo_2_time_played_armorer: number
  tourney_blitz_duo_2_arrows_fired_armorer: number
  tourney_blitz_duo_2_arrows_hit_armorer: number
  tourney_blitz_duo_2_potions_thrown_armorer: number
}

export interface SpeedUhc {
  firstJoinLobbyInt: number
  activeKit_NORMAL: string
  killstreak: number
  win_streak: number
  survived_players_normal: number
  deaths_team: number
  deaths: number
  deaths_kit_basic_normal_default: number
  coins: number
  deaths_mastery_wild_specialist: number
  losses: number
  losses_mastery_wild_specialist: number
  blocks_broken: number
  losses_kit_basic_normal_default: number
  survived_players_kit_basic_normal_default: number
  deaths_normal: number
  deaths_team_normal: number
  losses_team: number
  losses_normal: number
  survived_players: number
  losses_team_normal: number
  blocks_placed: number
  quits: number
  survived_players_team: number
  score: number
  movedOver: boolean
  activeMasterPerk: string
  deaths_solo: number
  deaths_solo_normal: number
  losses_solo: number
  losses_solo_normal: number
  survived_players_solo: number
  games: number
  games_kit_basic_normal_default: number
  games_normal: number
  games_team: number
  kills: number
  kills_kit_basic_normal_default: number
  kills_mastery_wild_specialist: number
  kills_monthly_a: number
  kills_normal: number
  kills_team: number
  kills_team_normal: number
  kills_weekly_b: number
  killstreak_kit_basic_normal_default: number
  killstreak_normal: number
  killstreak_team: number
  score_kit_basic_normal_default: number
  score_normal: number
  score_team: number
  wins: number
  wins_kit_basic_normal_default: number
  wins_mastery_wild_specialist: number
  wins_normal: number
  wins_team: number
  wins_team_normal: number
  highestKillstreak: number
  arrows_hit: number
  arrows_shot: number
  items_enchanted: number
  assists: number
  assists_kit_basic_normal_default: number
  assists_normal: number
  assists_team: number
  kills_solo: number
  kills_solo_normal: number
  score_solo: number
  packages: string[]
  deaths_kit_basic_normal_archer: number
  losses_kit_basic_normal_archer: number
  survived_players_kit_basic_normal_archer: number
  kills_monthly_b: number
  kills_weekly_a: number
  games_solo: number
  killstreak_solo: number
  wins_solo: number
  wins_solo_normal: number
  normal_low_gravity: number
  kills_kit_basic_normal_archer: number
  score_kit_basic_normal_archer: number
  assists_kit_basic_normal_healer: number
  games_kit_basic_normal_healer: number
  kills_kit_basic_normal_healer: number
  killstreak_kit_basic_normal_healer: number
  score_kit_basic_normal_healer: number
  survived_players_kit_basic_normal_healer: number
  wins_kit_basic_normal_healer: number
  deaths_kit_basic_normal_healer: number
  losses_kit_basic_normal_healer: number
  normal_arrow_recovery: number
  mastery_guardian: number
  deaths_mastery_guardian: number
  losses_mastery_guardian: number
  kills_mastery_guardian: number
  wins_mastery_guardian: number
  active_cage: string
  deaths_kit_basic_normal_scout: number
  games_kit_basic_normal_scout: number
  kills_kit_basic_normal_scout: number
  losses_kit_basic_normal_scout: number
  score_kit_basic_normal_scout: number
  survived_players_kit_basic_normal_scout: number
  iron_chestplate_drop: number
  normal_vitamins: number
  normal_telekinesis: number
  normal_nourishment: number
  games_kit_basic_normal_fisherman: number
  kills_kit_basic_normal_fisherman: number
  killstreak_kit_basic_normal_fisherman: number
  score_kit_basic_normal_fisherman: number
  survived_players_kit_basic_normal_fisherman: number
  wins_kit_basic_normal_fisherman: number
  normal_swimming_champion: number
  normal_cold_blood: number
  deaths_kit_basic_normal_fisherman: number
  losses_kit_basic_normal_fisherman: number
  games_kit_basic_normal_archer: number
  assists_kit_basic_normal_fisherman: number
  iron_leggings_drop: number
  iron_helmet_drop: number
  iron_boots_drop: number
  diamond_sword_drop: number
  diamond_pickaxe_drop: number
  fishing_rod_drop: number
  normal_tenacity: number
  normal_expert_miner: number
  assists_solo: number
}

export interface SkyWars {
  souls: number
  skywars_chests: number
  packages: string[]
  levelFormatted: string
  lucky_explained_last: number
  lucky_explained: number
  activeKit_TEAMS_random: boolean
  activeKit_TEAMS: string
  luckyBlockResourcePackEnabled: boolean
  games_played_skywars: number
  skywars_experience: number
  arrows_hit_lab: number
  arrows_hit_lab_kit_mining_team_default: number
  arrows_hit_lab_team: number
  arrows_shot_lab: number
  arrows_shot_lab_kit_mining_team_default: number
  arrows_shot_lab_team: number
  blocks_broken_lab: number
  blocks_placed_lab: number
  chests_opened_lab: number
  chests_opened_lab_kit_mining_team_default: number
  chests_opened_lab_team: number
  coins: number
  coins_gained_lab: number
  games_lab: number
  games_lab_kit_mining_team_default: number
  games_lab_team: number
  kills_lab: number
  kills_lab_kit_mining_team_default: number
  kills_lab_team: number
  kills_monthly_b: number
  kills_weekly_b: number
  lastMode: string
  longest_bow_kill_lab: number
  longest_bow_kill_lab_kit_mining_team_default: number
  longest_bow_kill_lab_team: number
  longest_bow_shot_lab: number
  longest_bow_shot_lab_kit_mining_team_default: number
  longest_bow_shot_lab_team: number
  losses_lab: number
  losses_lab_kit_mining_team_default: number
  losses_lab_team: number
  melee_kills_lab: number
  melee_kills_lab_kit_mining_team_default: number
  melee_kills_lab_team: number
  most_kills_game_lab: number
  most_kills_game_lab_kit_mining_team_default: number
  most_kills_game_lab_team: number
  souls_gathered_lab: number
  survived_players_lab: number
  survived_players_lab_kit_mining_team_default: number
  survived_players_lab_team: number
  time_played_lab: number
  time_played_lab_kit_mining_team_default: number
  time_played_lab_team: number
  win_streak_lab: number
  deaths_lab: number
  deaths_lab_kit_mining_team_default: number
  deaths_lab_team: number
  assists_lab: number
  assists_lab_kit_mining_team_default: number
  assists_lab_team: number
  egg_thrown_lab: number
  quits_lab: number
  void_kills_lab: number
  void_kills_lab_kit_mining_team_default: number
  void_kills_lab_team: number
  enderpearls_thrown_lab: number
  activeKit_MEGA_random: boolean
  activeKit_MEGA: string
  arrows_hit: number
  arrows_hit_kit_mega_mega_default: number
  arrows_hit_mega_doubles: number
  arrows_shot: number
  arrows_shot_kit_mega_mega_default: number
  arrows_shot_mega_doubles: number
  blocks_broken: number
  chests_opened: number
  chests_opened_kit_mega_mega_default: number
  chests_opened_mega_doubles: number
  deaths: number
  deaths_kit_mega_mega_default: number
  deaths_mega_doubles: number
  deaths_mega_doubles_normal: number
  longest_bow_shot: number
  longest_bow_shot_kit_mega_mega_default: number
  longest_bow_shot_mega_doubles: number
  losses: number
  losses_kit_mega_mega_default: number
  losses_mega_doubles: number
  losses_mega_doubles_normal: number
  quits: number
  survived_players: number
  survived_players_kit_mega_mega_default: number
  survived_players_mega_doubles: number
  time_played: number
  time_played_kit_mega_mega_default: number
  time_played_mega_doubles: number
  win_streak: number
  chests_opened_lab_solo: number
  deaths_lab_solo: number
  losses_lab_solo: number
  survived_players_lab_solo: number
  time_played_lab_solo: number
  arrows_hit_lab_solo: number
  arrows_shot_lab_solo: number
  fastest_win_lab: number
  fastest_win_lab_kit_mining_team_default: number
  fastest_win_lab_solo: number
  games_lab_solo: number
  kills_lab_solo: number
  killstreak_lab: number
  killstreak_lab_kit_mining_team_default: number
  killstreak_lab_solo: number
  lab_win_lucky_blocks_lab: number
  lab_win_lucky_blocks_lab_kit_mining_team_default: number
  lab_win_lucky_blocks_lab_solo: number
  longest_bow_shot_lab_solo: number
  most_kills_game_lab_solo: number
  void_kills_lab_solo: number
  wins_lab: number
  wins_lab_kit_mining_team_default: number
  wins_lab_solo: number
  tnt_madness_explained_last: number
  tnt_madness_explained: number
  blocks_placed: number
  chests_opened_kit_mining_team_default: number
  chests_opened_team: number
  deaths_kit_mining_team_default: number
  deaths_team: number
  deaths_team_insane: number
  losses_kit_mining_team_default: number
  losses_team: number
  losses_team_insane: number
  survived_players_kit_mining_team_default: number
  survived_players_team: number
  time_played_kit_mining_team_default: number
  time_played_team: number
  fastest_win_lab_team: number
  kills_monthly_a: number
  killstreak_lab_team: number
  lab_win_lucky_blocks_lab_team: number
  wins_lab_team: number
  longest_bow_kill_lab_solo: number
  melee_kills_lab_solo: number
  chests_opened_kit_basic_solo_default: number
  chests_opened_solo: number
  deaths_kit_basic_solo_default: number
  deaths_solo: number
  deaths_solo_normal: number
  egg_thrown: number
  losses_kit_basic_solo_default: number
  losses_solo: number
  losses_solo_normal: number
  survived_players_kit_basic_solo_default: number
  survived_players_solo: number
  time_played_kit_basic_solo_default: number
  time_played_solo: number
  deaths_team_normal: number
  losses_team_normal: number
  team_bridger: number
  soul_well: number
  usedSoulWell: boolean
  challenge_attempts: number
  challenge_attempts_1: number
  challenge_attempts_1_kit_basic_solo_default: number
  challenge_attempts_1_solo: number
  challenge_attempts_kit_basic_solo_default: number
  challenge_attempts_rookie: number
  challenge_attempts_rookie_kit_basic_solo_default: number
  challenge_attempts_rookie_solo: number
  challenge_attempts_solo: number
  arrows_hit_kit_basic_solo_default: number
  arrows_hit_solo: number
  arrows_shot_kit_basic_solo_default: number
  arrows_shot_solo: number
  longest_bow_shot_kit_basic_solo_default: number
  longest_bow_shot_solo: number
  challenge_attempts_8: number
  challenge_attempts_8_kit_basic_solo_default: number
  challenge_attempts_8_solo: number
  challenge_attempts_archer: number
  challenge_attempts_archer_kit_basic_solo_default: number
  challenge_attempts_archer_solo: number
  challenge_attempts_half_health: number
  challenge_attempts_half_health_kit_basic_solo_default: number
  challenge_attempts_half_health_solo: number
  challenge_attempts_no_block: number
  challenge_attempts_no_block_kit_basic_solo_default: number
  challenge_attempts_no_block_solo: number
  challenge_attempts_no_chest: number
  challenge_attempts_no_chest_kit_basic_solo_default: number
  challenge_attempts_no_chest_solo: number
  challenge_attempts_paper: number
  challenge_attempts_paper_kit_basic_solo_default: number
  challenge_attempts_paper_solo: number
  challenge_attempts_uhc: number
  challenge_attempts_uhc_kit_basic_solo_default: number
  challenge_attempts_uhc_solo: number
  challenge_attempts_ultimate_warrior: number
  challenge_attempts_ultimate_warrior_kit_basic_solo_default: number
  challenge_attempts_ultimate_warrior_solo: number
  assists_lab_solo: number
  kills_weekly_a: number
  fastest_win: number
  fastest_win_kit_basic_solo_default: number
  fastest_win_team: number
  games: number
  games_kit_basic_solo_default: number
  games_team: number
  kills: number
  kills_kit_basic_solo_default: number
  kills_team: number
  kills_team_normal: number
  killstreak: number
  killstreak_kit_basic_solo_default: number
  killstreak_team: number
  longest_bow_kill: number
  longest_bow_kill_kit_basic_solo_default: number
  longest_bow_kill_team: number
  melee_kills: number
  melee_kills_kit_basic_solo_default: number
  melee_kills_team: number
  most_kills_game: number
  most_kills_game_kit_basic_solo_default: number
  most_kills_game_team: number
  wins: number
  wins_kit_basic_solo_default: number
  wins_team: number
  wins_team_normal: number
  arrows_hit_kit_mining_team_default: number
  arrows_hit_team: number
  arrows_shot_kit_mining_team_default: number
  arrows_shot_team: number
  bow_kills: number
  bow_kills_kit_mining_team_default: number
  bow_kills_team: number
  kills_kit_mining_team_default: number
  kills_team_insane: number
  longest_bow_kill_kit_mining_team_default: number
  longest_bow_shot_kit_mining_team_default: number
  longest_bow_shot_team: number
  most_kills_game_kit_mining_team_default: number
  assists: number
  assists_kit_mining_team_default: number
  assists_team: number
  void_kills: number
  void_kills_kit_basic_solo_default: number
  void_kills_team: number
  deaths_solo_insane: number
  kills_solo: number
  kills_solo_insane: number
  losses_solo_insane: number
  void_kills_kit_mining_team_default: number
  void_kills_solo: number
  games_kit_mining_team_default: number
  games_solo: number
  melee_kills_kit_mining_team_default: number
  melee_kills_solo: number
  fastest_win_kit_mining_team_default: number
  fastest_win_solo: number
  killstreak_kit_mining_team_default: number
  killstreak_solo: number
  most_kills_game_solo: number
  wins_kit_mining_team_default: number
  wins_solo: number
  wins_solo_insane: number
  arrows_shot_kit_attacking_team_hunter: number
  chests_opened_kit_attacking_team_hunter: number
  deaths_kit_attacking_team_hunter: number
  losses_kit_attacking_team_hunter: number
  survived_players_kit_attacking_team_hunter: number
  time_played_kit_attacking_team_hunter: number
  arrows_hit_kit_attacking_team_hunter: number
  longest_bow_shot_kit_attacking_team_hunter: number
  items_enchanted: number
  kills_kit_attacking_team_hunter: number
  longest_bow_kill_kit_attacking_team_hunter: number
  longest_bow_kill_solo: number
  melee_kills_kit_attacking_team_hunter: number
  most_kills_game_kit_attacking_team_hunter: number
  void_kills_kit_attacking_team_hunter: number
  bow_kills_kit_attacking_team_hunter: number
  bow_kills_solo: number
  assists_kit_attacking_team_hunter: number
  enderpearls_thrown: number
  fastest_win_kit_attacking_team_hunter: number
  games_kit_attacking_team_hunter: number
  killstreak_kit_attacking_team_hunter: number
  wins_kit_attacking_team_hunter: number
  wins_team_insane: number
  chests_opened_kit_attacking_team_enderman: number
  deaths_kit_attacking_team_enderman: number
  losses_kit_attacking_team_enderman: number
  survived_players_kit_attacking_team_enderman: number
  time_played_kit_attacking_team_enderman: number
  kills_kit_attacking_team_enderman: number
  longest_bow_kill_kit_attacking_team_enderman: number
  melee_kills_kit_attacking_team_enderman: number
  most_kills_game_kit_attacking_team_enderman: number
  games_kit_attacking_team_enderman: number
  void_kills_kit_attacking_team_enderman: number
  arrows_shot_kit_attacking_team_enderman: number
  heads: number
  heads_kit_attacking_team_enderman: number
  heads_succulent: number
  heads_succulent_kit_attacking_team_enderman: number
  heads_succulent_team: number
  heads_team: number
  head_collection: HeadCollection
  arrows_hit_kit_attacking_team_enderman: number
  longest_bow_shot_kit_attacking_team_enderman: number
  heads_eww: number
  heads_eww_kit_attacking_team_enderman: number
  heads_eww_team: number
  heads_yucky: number
  heads_yucky_kit_attacking_team_enderman: number
  heads_yucky_team: number
  chests_opened_kit_attacking_team_jester: number
  deaths_kit_attacking_team_jester: number
  losses_kit_attacking_team_jester: number
  survived_players_kit_attacking_team_jester: number
  time_played_kit_attacking_team_jester: number
  arrows_hit_kit_attacking_team_jester: number
  arrows_shot_kit_attacking_team_jester: number
  games_kit_attacking_team_jester: number
  kills_kit_attacking_team_jester: number
  longest_bow_kill_kit_attacking_team_jester: number
  longest_bow_shot_kit_attacking_team_jester: number
  melee_kills_kit_attacking_team_jester: number
  most_kills_game_kit_attacking_team_jester: number
  assists_kit_attacking_team_enderman: number
  slime_explained_last: number
  slime_explained: number
  rush_explained_last: number
  rush_explained: number
  chests_opened_lab_kit_attacking_team_enderman: number
  deaths_lab_kit_attacking_team_enderman: number
  kills_lab_kit_attacking_team_enderman: number
  losses_lab_kit_attacking_team_enderman: number
  melee_kills_lab_kit_attacking_team_enderman: number
  survived_players_lab_kit_attacking_team_enderman: number
  time_played_lab_kit_attacking_team_enderman: number
  fastest_win_kit_attacking_team_enderman: number
  killstreak_kit_attacking_team_enderman: number
  wins_kit_attacking_team_enderman: number
  assists_solo: number
  challenge_attempts_1_kit_attacking_team_enderman: number
  challenge_attempts_kit_attacking_team_enderman: number
  challenge_attempts_paper_kit_attacking_team_enderman: number
  challenge_attempts_ultimate_warrior_kit_attacking_team_enderman: number
  shop_sort: string
  assists_kit_attacking_team_jester: number
  team_lucky_charm: number
  bow_kills_kit_attacking_team_enderman: number
  team_ender_mastery: number
  team_nourishment: number
  xezbeth_luck: number
  chests_opened_kit_ranked_ranked_default: number
  chests_opened_ranked: number
  deaths_kit_ranked_ranked_default: number
  deaths_ranked: number
  deaths_ranked_normal: number
  losses_kit_ranked_ranked_default: number
  losses_ranked: number
  losses_ranked_normal: number
  survived_players_kit_ranked_ranked_default: number
  survived_players_ranked: number
  time_played_kit_ranked_ranked_default: number
  time_played_ranked: number
  heads_divine: number
  heads_divine_kit_attacking_team_enderman: number
  heads_divine_solo: number
  heads_solo: number
  void_kills_kit_attacking_team_jester: number
  bow_kills_kit_attacking_team_jester: number
  privategames: Privategames3
  activeKit_SOLO_random: boolean
  activeKit_SOLO: string
  team_resistance_boost: number
  mega_mining_expertise: number
  team_fat: number
  soul_well_rares: number
  solo_mining_expertise: number
  team_necromancer: number
  soul_well_legendaries: number
  team_black_magic: number
  mega_bridger: number
  team_marksmanship: number
  mega_nourishment: number
  solo_ender_mastery: number
  team_knowledge: number
  solo_marksmanship: number
  team_speed_boost: number
  solo_lucky_charm: number
  mega_instant_smelting: number
  solo_knowledge: number
  team_robbery: number
  mega_environmental_expert: number
  solo_robbery: number
  team_savior: number
  chests_opened_kit_attacking_team_engineer: number
  deaths_kit_attacking_team_engineer: number
  games_kit_attacking_team_engineer: number
  kills_kit_attacking_team_engineer: number
  losses_kit_attacking_team_engineer: number
  most_kills_game_kit_attacking_team_engineer: number
  survived_players_kit_attacking_team_engineer: number
  time_played_kit_attacking_team_engineer: number
  void_kills_kit_attacking_team_engineer: number
  chests_opened_kit_supporting_team_ecologist: number
  deaths_kit_supporting_team_ecologist: number
  kills_kit_supporting_team_ecologist: number
  losses_kit_supporting_team_ecologist: number
  most_kills_game_kit_supporting_team_ecologist: number
  survived_players_kit_supporting_team_ecologist: number
  time_played_kit_supporting_team_ecologist: number
  void_kills_kit_supporting_team_ecologist: number
  refill_chest_destroy: number
  arrows_shot_kit_attacking_team_scout: number
  assists_kit_attacking_team_scout: number
  chests_opened_kit_attacking_team_scout: number
  deaths_kit_attacking_team_scout: number
  losses_kit_attacking_team_scout: number
  survived_players_kit_attacking_team_scout: number
  time_played_kit_attacking_team_scout: number
  games_kit_attacking_team_scout: number
  kills_kit_attacking_team_scout: number
  most_kills_game_kit_attacking_team_scout: number
  void_kills_kit_attacking_team_scout: number
  chests_opened_kit_basic_solo_frog: number
  deaths_kit_basic_solo_frog: number
  losses_kit_basic_solo_frog: number
  survived_players_kit_basic_solo_frog: number
  time_played_kit_basic_solo_frog: number
  kills_kit_basic_solo_frog: number
  most_kills_game_kit_basic_solo_frog: number
  void_kills_kit_basic_solo_frog: number
  assists_kit_basic_solo_frog: number
  longest_bow_kill_kit_basic_solo_frog: number
  melee_kills_kit_basic_solo_frog: number
  games_kit_basic_solo_frog: number
  arrows_hit_kit_enderchest_solo_enderchest: number
  arrows_shot_kit_enderchest_solo_enderchest: number
  assists_kit_enderchest_solo_enderchest: number
  chests_opened_kit_enderchest_solo_enderchest: number
  fastest_win_kit_enderchest_solo_enderchest: number
  games_kit_enderchest_solo_enderchest: number
  heads_decent: number
  heads_decent_kit_enderchest_solo_enderchest: number
  heads_decent_team: number
  heads_eww_kit_enderchest_solo_enderchest: number
  heads_heavenly: number
  heads_heavenly_kit_enderchest_solo_enderchest: number
  heads_heavenly_team: number
  heads_kit_enderchest_solo_enderchest: number
  kills_kit_enderchest_solo_enderchest: number
  killstreak_kit_enderchest_solo_enderchest: number
  longest_bow_kill_kit_enderchest_solo_enderchest: number
  longest_bow_shot_kit_enderchest_solo_enderchest: number
  melee_kills_kit_enderchest_solo_enderchest: number
  most_kills_game_kit_enderchest_solo_enderchest: number
  survived_players_kit_enderchest_solo_enderchest: number
  time_played_kit_enderchest_solo_enderchest: number
  wins_kit_enderchest_solo_enderchest: number
  mega_rusher: number
  assists_kit_supporting_team_zookeeper: number
  chests_opened_kit_supporting_team_zookeeper: number
  deaths_kit_supporting_team_zookeeper: number
  games_kit_supporting_team_zookeeper: number
  losses_kit_supporting_team_zookeeper: number
  survived_players_kit_supporting_team_zookeeper: number
  time_played_kit_supporting_team_zookeeper: number
  deaths_kit_enderchest_solo_enderchest: number
  losses_kit_enderchest_solo_enderchest: number
  fastest_win_kit_basic_solo_frog: number
  wins_kit_basic_solo_frog: number
  chests_opened_kit_basic_solo_healer: number
  deaths_kit_basic_solo_healer: number
  kills_kit_basic_solo_healer: number
  longest_bow_kill_kit_basic_solo_healer: number
  losses_kit_basic_solo_healer: number
  melee_kills_kit_basic_solo_healer: number
  survived_players_kit_basic_solo_healer: number
  time_played_kit_basic_solo_healer: number
  arrows_hit_kit_basic_solo_healer: number
  arrows_shot_kit_basic_solo_healer: number
  assists_kit_basic_solo_healer: number
  fastest_win_kit_basic_solo_healer: number
  games_kit_basic_solo_healer: number
  killstreak_kit_basic_solo_healer: number
  longest_bow_shot_kit_basic_solo_healer: number
  most_kills_game_kit_basic_solo_healer: number
  void_kills_kit_basic_solo_healer: number
  wins_kit_basic_solo_healer: number
  heads_eww_kit_basic_solo_frog: number
  heads_kit_basic_solo_frog: number
  cosmetic_tokens: number
  chests_opened_kit_basic_solo_rookie: number
  deaths_kit_basic_solo_rookie: number
  kills_kit_basic_solo_rookie: number
  longest_bow_kill_kit_basic_solo_rookie: number
  losses_kit_basic_solo_rookie: number
  melee_kills_kit_basic_solo_rookie: number
  most_kills_game_kit_basic_solo_rookie: number
  survived_players_kit_basic_solo_rookie: number
  time_played_kit_basic_solo_rookie: number
  chests_opened_kit_advanced_solo_armorer: number
  deaths_kit_advanced_solo_armorer: number
  kills_kit_advanced_solo_armorer: number
  kills_solo_normal: number
  longest_bow_kill_kit_advanced_solo_armorer: number
  losses_kit_advanced_solo_armorer: number
  melee_kills_kit_advanced_solo_armorer: number
  most_kills_game_kit_advanced_solo_armorer: number
  survived_players_kit_advanced_solo_armorer: number
  time_played_kit_advanced_solo_armorer: number
  assists_kit_advanced_solo_armorer: number
  solo_instant_smelting: number
  heads_kit_attacking_team_hunter: number
  heads_meh: number
  heads_meh_kit_attacking_team_hunter: number
  heads_meh_team: number
  arrows_shot_kit_supporting_team_zookeeper: number
  activeKit_RANKED_random: boolean
  activeKit_RANKED: string
  chests_opened_kit_ranked_ranked_champion: number
  deaths_kit_ranked_ranked_champion: number
  losses_kit_ranked_ranked_champion: number
  survived_players_kit_ranked_ranked_champion: number
  time_played_kit_ranked_ranked_champion: number
  heads_decent_kit_attacking_team_enderman: number
  chests_opened_kit_defending_team_batguy: number
  deaths_kit_defending_team_batguy: number
  losses_kit_defending_team_batguy: number
  survived_players_kit_defending_team_batguy: number
  time_played_kit_defending_team_batguy: number
  arrows_hit_kit_basic_solo_frog: number
  arrows_shot_kit_basic_solo_frog: number
  longest_bow_shot_kit_basic_solo_frog: number
  chests_opened_kit_basic_solo_scout: number
  deaths_kit_basic_solo_scout: number
  losses_kit_basic_solo_scout: number
  survived_players_kit_basic_solo_scout: number
  time_played_kit_basic_solo_scout: number
  arrows_hit_kit_advanced_solo_hunter: number
  arrows_shot_kit_advanced_solo_hunter: number
  chests_opened_kit_advanced_solo_hunter: number
  deaths_kit_advanced_solo_hunter: number
  kills_kit_advanced_solo_hunter: number
  longest_bow_kill_kit_advanced_solo_hunter: number
  longest_bow_shot_kit_advanced_solo_hunter: number
  losses_kit_advanced_solo_hunter: number
  melee_kills_kit_advanced_solo_hunter: number
  most_kills_game_kit_advanced_solo_hunter: number
  survived_players_kit_advanced_solo_hunter: number
  time_played_kit_advanced_solo_hunter: number
  void_kills_kit_advanced_solo_armorer: number
  SkyWars_openedRares: number
  SkyWars_openedChests: number
  SkyWars_openedCommons: number
  skywars_chest_history: string[]
  active_cage: string
  active_killmessages: string
  active_deathcry: string
  active_balloon: string
  active_killeffect: string
  active_sprays: string
  bow_kills_kit_advanced_solo_hunter: number
  games_kit_advanced_solo_hunter: number
  killstreak_kit_basic_solo_frog: number
  wins_solo_normal: number
  chests_opened_kit_attacking_team_fisherman: number
  deaths_kit_attacking_team_fisherman: number
  losses_kit_attacking_team_fisherman: number
  survived_players_kit_attacking_team_fisherman: number
  time_played_kit_attacking_team_fisherman: number
  "solo_annoy-o-mite": number
  heads_meh_kit_basic_solo_frog: number
  heads_meh_solo: number
  arrows_hit_kit_attacking_team_fisherman: number
  arrows_shot_kit_attacking_team_fisherman: number
  games_kit_attacking_team_fisherman: number
  kills_kit_attacking_team_fisherman: number
  longest_bow_shot_kit_attacking_team_fisherman: number
  most_kills_game_kit_attacking_team_fisherman: number
  void_kills_kit_attacking_team_fisherman: number
  longest_bow_kill_kit_attacking_team_fisherman: number
  melee_kills_kit_attacking_team_fisherman: number
  arrows_hit_kit_attacking_team_knight: number
  arrows_shot_kit_attacking_team_knight: number
  assists_kit_attacking_team_knight: number
  chests_opened_kit_attacking_team_knight: number
  deaths_kit_attacking_team_knight: number
  longest_bow_shot_kit_attacking_team_knight: number
  losses_kit_attacking_team_knight: number
  survived_players_kit_attacking_team_knight: number
  time_played_kit_attacking_team_knight: number
  arrows_shot_lab_kit_attacking_team_fisherman: number
  chests_opened_lab_kit_attacking_team_fisherman: number
  deaths_lab_kit_attacking_team_fisherman: number
  losses_lab_kit_attacking_team_fisherman: number
  survived_players_lab_kit_attacking_team_fisherman: number
  time_played_lab_kit_attacking_team_fisherman: number
  arrows_hit_lab_kit_supporting_team_ecologist: number
  arrows_shot_lab_kit_supporting_team_ecologist: number
  chests_opened_lab_kit_supporting_team_ecologist: number
  deaths_lab_kit_supporting_team_ecologist: number
  kills_lab_kit_supporting_team_ecologist: number
  longest_bow_kill_lab_kit_supporting_team_ecologist: number
  longest_bow_shot_lab_kit_supporting_team_ecologist: number
  losses_lab_kit_supporting_team_ecologist: number
  melee_kills_lab_kit_supporting_team_ecologist: number
  survived_players_lab_kit_supporting_team_ecologist: number
  time_played_lab_kit_supporting_team_ecologist: number
  arrows_hit_tourney: number
  arrows_hit_tourney_kit_attacking_team_jester: number
  arrows_hit_tourney_teams_tourney: number
  arrows_shot_tourney: number
  arrows_shot_tourney_kit_attacking_team_jester: number
  arrows_shot_tourney_teams_tourney: number
  blocks_placed_tourney: number
  chests_opened_tourney: number
  chests_opened_tourney_kit_attacking_team_jester: number
  chests_opened_tourney_teams_tourney: number
  coins_gained_tourney: number
  deaths_tourney: number
  deaths_tourney_kit_attacking_team_jester: number
  deaths_tourney_teams_tourney: number
  games_tourney: number
  games_tourney_kit_attacking_team_jester: number
  games_tourney_teams_tourney: number
  losses_tourney: number
  losses_tourney_kit_attacking_team_jester: number
  losses_tourney_teams_tourney: number
  survived_players_tourney: number
  survived_players_tourney_kit_attacking_team_jester: number
  survived_players_tourney_teams_tourney: number
  time_played_tourney: number
  time_played_tourney_kit_attacking_team_jester: number
  time_played_tourney_teams_tourney: number
  tourney_sw_insane_doubles_0_arrows_hit: number
  tourney_sw_insane_doubles_0_arrows_shot: number
  tourney_sw_insane_doubles_0_blocks_placed: number
  tourney_sw_insane_doubles_0_chests_opened: number
  tourney_sw_insane_doubles_0_coins: number
  tourney_sw_insane_doubles_0_coins_gained: number
  tourney_sw_insane_doubles_0_deaths: number
  tourney_sw_insane_doubles_0_games: number
  tourney_sw_insane_doubles_0_losses: number
  tourney_sw_insane_doubles_0_survived_players: number
  tourney_sw_insane_doubles_0_time_played: number
  tourney_sw_insane_doubles_0_win_streak: number
  win_streak_tourney: number
  chests_opened_tourney_kit_attacking_team_fisherman: number
  deaths_tourney_kit_attacking_team_fisherman: number
  losses_tourney_kit_attacking_team_fisherman: number
  quits_tourney: number
  survived_players_tourney_kit_attacking_team_fisherman: number
  time_played_tourney_kit_attacking_team_fisherman: number
  tourney_sw_insane_doubles_0_quits: number
  chests_opened_tourney_kit_supporting_team_rookie: number
  deaths_tourney_kit_supporting_team_rookie: number
  kills_tourney: number
  kills_tourney_kit_supporting_team_rookie: number
  kills_tourney_teams_tourney: number
  longest_bow_kill_tourney: number
  longest_bow_kill_tourney_kit_supporting_team_rookie: number
  longest_bow_kill_tourney_teams_tourney: number
  losses_tourney_kit_supporting_team_rookie: number
  melee_kills_tourney: number
  melee_kills_tourney_kit_supporting_team_rookie: number
  melee_kills_tourney_teams_tourney: number
  most_kills_game_tourney: number
  most_kills_game_tourney_kit_supporting_team_rookie: number
  most_kills_game_tourney_teams_tourney: number
  survived_players_tourney_kit_supporting_team_rookie: number
  time_played_tourney_kit_supporting_team_rookie: number
  tourney_sw_insane_doubles_0_kills: number
  tourney_sw_insane_doubles_0_longest_bow_kill: number
  tourney_sw_insane_doubles_0_melee_kills: number
  tourney_sw_insane_doubles_0_most_kills_game: number
  arrows_hit_kit_advanced_solo_armorer: number
  arrows_shot_kit_advanced_solo_armorer: number
  longest_bow_shot_kit_advanced_solo_armorer: number
  chests_opened_kit_advanced_solo_enchanter: number
  deaths_kit_advanced_solo_enchanter: number
  kills_kit_advanced_solo_enchanter: number
  losses_kit_advanced_solo_enchanter: number
  melee_kills_kit_advanced_solo_enchanter: number
  survived_players_kit_advanced_solo_enchanter: number
  time_played_kit_advanced_solo_enchanter: number
  chests_opened_kit_enderchest_team_enderchest: number
  deaths_kit_enderchest_team_enderchest: number
  losses_kit_enderchest_team_enderchest: number
  survived_players_kit_enderchest_team_enderchest: number
  time_played_kit_enderchest_team_enderchest: number
  arrows_hit_kit_defending_team_farmer: number
  arrows_shot_kit_defending_team_farmer: number
  chests_opened_kit_defending_team_farmer: number
  deaths_kit_defending_team_farmer: number
  kills_kit_defending_team_farmer: number
  longest_bow_kill_kit_defending_team_farmer: number
  longest_bow_shot_kit_defending_team_farmer: number
  losses_kit_defending_team_farmer: number
  melee_kills_kit_defending_team_farmer: number
  most_kills_game_kit_defending_team_farmer: number
  survived_players_kit_defending_team_farmer: number
  time_played_kit_defending_team_farmer: number
  kills_kit_enderchest_team_enderchest: number
  longest_bow_kill_kit_enderchest_team_enderchest: number
  melee_kills_kit_enderchest_team_enderchest: number
  most_kills_game_kit_enderchest_team_enderchest: number
  assists_kit_defending_team_farmer: number
  void_kills_kit_defending_team_farmer: number
  arrows_hit_kit_enderchest_team_enderchest: number
  arrows_shot_kit_enderchest_team_enderchest: number
  longest_bow_shot_kit_enderchest_team_enderchest: number
  void_kills_kit_enderchest_team_enderchest: number
  bow_kills_kit_attacking_team_fisherman: number
  souls_gathered: number
  assists_kit_attacking_team_fisherman: number
  chests_opened_kit_defending_team_disco: number
  deaths_kit_defending_team_disco: number
  losses_kit_defending_team_disco: number
  survived_players_kit_defending_team_disco: number
  time_played_kit_defending_team_disco: number
  games_kit_defending_team_disco: number
  arrows_shot_kit_defending_team_disco: number
  assists_kit_defending_team_disco: number
  fastest_win_kit_attacking_team_fisherman: number
  killstreak_kit_attacking_team_fisherman: number
  wins_kit_attacking_team_fisherman: number
  games_kit_enderchest_team_enderchest: number
  kills_kit_attacking_team_knight: number
  longest_bow_kill_kit_attacking_team_knight: number
  melee_kills_kit_attacking_team_knight: number
  most_kills_game_kit_attacking_team_knight: number
  void_kills_kit_attacking_team_knight: number
  void_kills_kit_enderchest_solo_enderchest: number
  bow_kills_kit_enderchest_solo_enderchest: number
  team_juggernaut: number
  team_mining_expertise: number
  team_instant_smelting: number
  fastest_win_kit_attacking_team_knight: number
  games_kit_attacking_team_knight: number
  heads_decent_kit_attacking_team_knight: number
  heads_eww_kit_attacking_team_knight: number
  heads_kit_attacking_team_knight: number
  heads_succulent_kit_attacking_team_knight: number
  heads_yucky_kit_attacking_team_knight: number
  killstreak_kit_attacking_team_knight: number
  wins_kit_attacking_team_knight: number
  assists_kit_basic_solo_scout: number
  games_kit_basic_solo_scout: number
  kills_kit_basic_solo_scout: number
  longest_bow_kill_kit_basic_solo_scout: number
  melee_kills_kit_basic_solo_scout: number
  most_kills_game_kit_basic_solo_scout: number
  fastest_win_kit_basic_solo_scout: number
  wins_kit_basic_solo_scout: number
  killstreak_kit_basic_solo_scout: number
  void_kills_kit_basic_solo_scout: number
  solo_bridger: number
  arrows_shot_kit_basic_solo_scout: number
  bow_kills_kit_attacking_team_knight: number
  heads_decent_kit_attacking_team_fisherman: number
  heads_eww_kit_attacking_team_fisherman: number
  heads_kit_attacking_team_fisherman: number
  heads_succulent_kit_attacking_team_fisherman: number
  chests_opened_kit_basic_solo_energix: number
  deaths_kit_basic_solo_energix: number
  losses_kit_basic_solo_energix: number
  survived_players_kit_basic_solo_energix: number
  time_played_kit_basic_solo_energix: number
  kills_kit_basic_solo_energix: number
  most_kills_game_kit_basic_solo_energix: number
  void_kills_kit_basic_solo_energix: number
  heads_meh_kit_attacking_team_fisherman: number
  heads_yucky_kit_attacking_team_fisherman: number
  kills_lab_kit_attacking_team_fisherman: number
  void_kills_lab_kit_attacking_team_fisherman: number
  team_arrow_recovery: number
  team_blazing_arrows: number
  kills_kit_defending_team_disco: number
  most_kills_game_kit_defending_team_disco: number
  void_kills_kit_defending_team_disco: number
  SkyWars_openedEpics: number
  active_victorydance: string
  active_projectiletrail: string
  SkyWars_openedLegendaries: number
  chests_opened_kit_defending_team_frog: number
  deaths_kit_defending_team_frog: number
  losses_kit_defending_team_frog: number
  survived_players_kit_defending_team_frog: number
  time_played_kit_defending_team_frog: number
  arrows_hit_kit_attacking_team_scout: number
  longest_bow_shot_kit_attacking_team_scout: number
  games_kit_advanced_solo_armorer: number
  fastest_win_kit_advanced_solo_armorer: number
  killstreak_kit_advanced_solo_armorer: number
  wins_kit_advanced_solo_armorer: number
  chests_opened_lab_kit_supporting_team_armorsmith: number
  deaths_lab_kit_supporting_team_armorsmith: number
  losses_lab_kit_supporting_team_armorsmith: number
  survived_players_lab_kit_supporting_team_armorsmith: number
  time_played_lab_kit_supporting_team_armorsmith: number
  longest_bow_kill_kit_attacking_team_scout: number
  melee_kills_kit_attacking_team_scout: number
  kills_kit_defending_team_frog: number
  longest_bow_kill_kit_defending_team_frog: number
  melee_kills_kit_defending_team_frog: number
  most_kills_game_kit_defending_team_frog: number
  void_kills_kit_defending_team_frog: number
  arrows_shot_kit_defending_team_frog: number
  arrows_shot_lab_kit_defending_team_frog: number
  chests_opened_lab_kit_defending_team_frog: number
  deaths_lab_kit_defending_team_frog: number
  games_lab_kit_defending_team_frog: number
  losses_lab_kit_defending_team_frog: number
  survived_players_lab_kit_defending_team_frog: number
  time_played_lab_kit_defending_team_frog: number
  assists_kit_defending_team_frog: number
  arrows_hit_kit_defending_team_frog: number
  longest_bow_shot_kit_defending_team_frog: number
  fastest_win_kit_defending_team_frog: number
  games_kit_defending_team_frog: number
  killstreak_kit_defending_team_frog: number
  wins_kit_defending_team_frog: number
  bow_kills_kit_defending_team_frog: number
  heads_eww_kit_defending_team_frog: number
  heads_kit_defending_team_frog: number
  heads_yucky_kit_defending_team_frog: number
  hunters_vs_beasts_explained_last: number
  hunters_vs_beasts_explained: number
  chests_opened_kit_ranked_ranked_armorer: number
  deaths_kit_ranked_ranked_armorer: number
  games_kit_ranked_ranked_armorer: number
  games_ranked: number
  losses_kit_ranked_ranked_armorer: number
  survived_players_kit_ranked_ranked_armorer: number
  time_played_kit_ranked_ranked_armorer: number
  fastest_win_kit_ranked_ranked_armorer: number
  fastest_win_ranked: number
  kills_kit_ranked_ranked_armorer: number
  kills_ranked: number
  kills_ranked_normal: number
  killstreak_kit_ranked_ranked_armorer: number
  killstreak_ranked: number
  longest_bow_kill_kit_ranked_ranked_armorer: number
  longest_bow_kill_ranked: number
  melee_kills_kit_ranked_ranked_armorer: number
  melee_kills_ranked: number
  most_kills_game_kit_ranked_ranked_armorer: number
  most_kills_game_ranked: number
  wins_kit_ranked_ranked_armorer: number
  wins_ranked: number
  wins_ranked_normal: number
  arrows_hit_kit_ranked_ranked_armorer: number
  arrows_hit_ranked: number
  arrows_shot_kit_ranked_ranked_armorer: number
  arrows_shot_ranked: number
  longest_bow_shot_kit_ranked_ranked_armorer: number
  longest_bow_shot_ranked: number
  void_kills_kit_ranked_ranked_armorer: number
  void_kills_ranked: number
  kills_lab_kit_defending_team_frog: number
  void_kills_lab_kit_defending_team_frog: number
  mob_kills_lab: number
  mob_kills_lab_kit_defending_team_frog: number
  mob_kills_lab_solo: number
  games_lab_kit_attacking_team_enderman: number
  arrows_hit_lab_kit_attacking_team_enderman: number
  arrows_shot_lab_kit_attacking_team_enderman: number
  void_kills_lab_kit_attacking_team_enderman: number
  assists_kit_ranked_ranked_armorer: number
  assists_ranked: number
  bow_kills_kit_ranked_ranked_armorer: number
  bow_kills_ranked: number
  heads_eww_solo: number
  heads_salty: number
  heads_salty_kit_defending_team_frog: number
  heads_salty_solo: number
  heads_yucky_solo: number
  team_bulldozer: number
  team_frost: number
  chests_opened_lab_kit_enderchest_team_enderchest: number
  deaths_lab_kit_enderchest_team_enderchest: number
  losses_lab_kit_enderchest_team_enderchest: number
  survived_players_lab_kit_enderchest_team_enderchest: number
  time_played_lab_kit_enderchest_team_enderchest: number
  kills_lab_kit_enderchest_team_enderchest: number
  void_kills_lab_kit_enderchest_team_enderchest: number
  fastest_win_lab_kit_enderchest_team_enderchest: number
  games_lab_kit_enderchest_team_enderchest: number
  killstreak_lab_kit_enderchest_team_enderchest: number
  lab_win_tnt_madness_lab: number
  lab_win_tnt_madness_lab_kit_enderchest_team_enderchest: number
  lab_win_tnt_madness_lab_solo: number
  longest_bow_kill_lab_kit_enderchest_team_enderchest: number
  melee_kills_lab_kit_enderchest_team_enderchest: number
  wins_lab_kit_enderchest_team_enderchest: number
  most_kills_game_lab_kit_enderchest_team_enderchest: number
  arrows_hit_lab_kit_enderchest_team_enderchest: number
  arrows_shot_lab_kit_enderchest_team_enderchest: number
  heads_divine_kit_advanced_solo_armorer: number
  heads_divine_team: number
  heads_kit_advanced_solo_armorer: number
  assists_lab_kit_attacking_team_enderman: number
  longest_bow_kill_kit_supporting_team_ecologist: number
  melee_kills_kit_supporting_team_ecologist: number
  heads_meh_kit_attacking_team_enderman: number
  heads_salty_kit_attacking_team_enderman: number
  heads_salty_team: number
  heads_tasty: number
  heads_tasty_kit_attacking_team_enderman: number
  heads_tasty_team: number
  fall_kills: number
  fall_kills_kit_defending_team_frog: number
  fall_kills_solo: number
  arrows_hit_kit_supporting_team_ecologist: number
  arrows_shot_kit_supporting_team_ecologist: number
  fastest_win_kit_supporting_team_ecologist: number
  games_kit_supporting_team_ecologist: number
  killstreak_kit_supporting_team_ecologist: number
  longest_bow_shot_kit_supporting_team_ecologist: number
  mob_kills: number
  mob_kills_kit_supporting_team_ecologist: number
  mob_kills_solo: number
  wins_kit_supporting_team_ecologist: number
  arrows_shot_kit_advanced_solo_slime: number
  chests_opened_kit_advanced_solo_slime: number
  deaths_kit_advanced_solo_slime: number
  losses_kit_advanced_solo_slime: number
  survived_players_kit_advanced_solo_slime: number
  time_played_kit_advanced_solo_slime: number
  toggle_team_arrow_recovery: boolean
  chests_opened_kit_advanced_solo_salmon: number
  deaths_kit_advanced_solo_salmon: number
  games_kit_advanced_solo_salmon: number
  losses_kit_advanced_solo_salmon: number
  survived_players_kit_advanced_solo_salmon: number
  time_played_kit_advanced_solo_salmon: number
  arrows_hit_kit_defending_team_armorer: number
  arrows_shot_kit_defending_team_armorer: number
  chests_opened_kit_defending_team_armorer: number
  deaths_kit_defending_team_armorer: number
  kills_kit_defending_team_armorer: number
  longest_bow_kill_kit_defending_team_armorer: number
  longest_bow_shot_kit_defending_team_armorer: number
  losses_kit_defending_team_armorer: number
  melee_kills_kit_defending_team_armorer: number
  most_kills_game_kit_defending_team_armorer: number
  survived_players_kit_defending_team_armorer: number
  time_played_kit_defending_team_armorer: number
  games_kit_defending_team_armorer: number
  assists_kit_defending_team_armorer: number
  melee_kills_lab_kit_defending_team_frog: number
  games_lab_kit_supporting_team_ecologist: number
  chests_opened_lab_kit_attacking_team_jester: number
  deaths_lab_kit_attacking_team_jester: number
  games_lab_kit_attacking_team_jester: number
  losses_lab_kit_attacking_team_jester: number
  survived_players_lab_kit_attacking_team_jester: number
  time_played_lab_kit_attacking_team_jester: number
  void_kills_kit_defending_team_armorer: number
  arrows_shot_lab_kit_defending_team_armorer: number
  chests_opened_lab_kit_defending_team_armorer: number
  deaths_lab_kit_defending_team_armorer: number
  losses_lab_kit_defending_team_armorer: number
  survived_players_lab_kit_defending_team_armorer: number
  time_played_lab_kit_defending_team_armorer: number
  kills_lab_kit_defending_team_armorer: number
  melee_kills_lab_kit_defending_team_armorer: number
  void_kills_lab_kit_defending_team_armorer: number
  bow_kills_kit_defending_team_armorer: number
  fastest_win_kit_defending_team_armorer: number
  killstreak_kit_defending_team_armorer: number
  wins_kit_defending_team_armorer: number
  toggle_team_blazing_arrows: boolean
  solo_black_magic: number
  "team_annoy-o-mite": number
  refill_chest_destroy_lab: number
  arrows_hit_lab_kit_defending_team_armorer: number
  games_lab_kit_defending_team_armorer: number
  assists_lab_kit_defending_team_armorer: number
  killstreak_lab_kit_defending_team_armorer: number
  lab_win_rush_lab: number
  lab_win_rush_lab_kit_defending_team_armorer: number
  lab_win_rush_lab_solo: number
  wins_lab_kit_defending_team_armorer: number
  heads_kit_defending_team_armorer: number
  heads_yucky_kit_defending_team_armorer: number
  assists_kit_supporting_team_ecologist: number
  heads_tasty_kit_defending_team_armorer: number
  heads_kit_supporting_team_ecologist: number
  heads_salty_kit_supporting_team_ecologist: number
  heads_meh_kit_defending_team_armorer: number
  heads_salty_kit_defending_team_armorer: number
  killstreak_lab_kit_attacking_team_enderman: number
  lab_win_lucky_blocks_lab_kit_attacking_team_enderman: number
  wins_lab_kit_attacking_team_enderman: number
  mega_juggernaut: number
  games_kit_basic_solo_energix: number
  longest_bow_kill_kit_basic_solo_energix: number
  melee_kills_kit_basic_solo_energix: number
  fastest_win_kit_basic_solo_energix: number
  heads_heavenly_kit_basic_solo_energix: number
  heads_heavenly_solo: number
  heads_kit_basic_solo_energix: number
  heads_salty_kit_basic_solo_energix: number
  killstreak_kit_basic_solo_energix: number
  wins_kit_basic_solo_energix: number
  arrows_shot_kit_basic_solo_energix: number
  arrows_hit_kit_basic_solo_energix: number
  longest_bow_shot_kit_basic_solo_energix: number
  fall_kills_kit_defending_team_armorer: number
  assists_kit_basic_solo_energix: number
  fall_kills_kit_basic_solo_scout: number
  fall_kills_team: number
  arrows_hit_kit_supporting_team_warlock: number
  arrows_shot_kit_supporting_team_warlock: number
  assists_kit_supporting_team_warlock: number
  chests_opened_kit_supporting_team_warlock: number
  fastest_win_kit_supporting_team_warlock: number
  games_kit_supporting_team_warlock: number
  kills_kit_supporting_team_warlock: number
  killstreak_kit_supporting_team_warlock: number
  longest_bow_kill_kit_supporting_team_warlock: number
  longest_bow_shot_kit_supporting_team_warlock: number
  melee_kills_kit_supporting_team_warlock: number
  most_kills_game_kit_supporting_team_warlock: number
  survived_players_kit_supporting_team_warlock: number
  time_played_kit_supporting_team_warlock: number
  void_kills_kit_supporting_team_warlock: number
  wins_kit_supporting_team_warlock: number
  fall_kills_kit_basic_solo_energix: number
  fall_kills_kit_enderchest_solo_enderchest: number
  heads_decent_kit_defending_team_armorer: number
  heads_decent_solo: number
  heads_meh_kit_defending_team_frog: number
  heads_heavenly_kit_defending_team_frog: number
  inGamePresentsCap_2020_5: number
  skywars_christmas_boxes: number
  inGamePresentsCap_2020_18: number
  chests_opened_kit_attacking_team_grenade: number
  deaths_kit_attacking_team_grenade: number
  kills_kit_attacking_team_grenade: number
  losses_kit_attacking_team_grenade: number
  most_kills_game_kit_attacking_team_grenade: number
  survived_players_kit_attacking_team_grenade: number
  time_played_kit_attacking_team_grenade: number
  void_kills_kit_attacking_team_grenade: number
  arrows_shot_kit_attacking_team_grenade: number
  fastest_win_kit_attacking_team_grenade: number
  games_kit_attacking_team_grenade: number
  killstreak_kit_attacking_team_grenade: number
  longest_bow_kill_kit_attacking_team_grenade: number
  melee_kills_kit_attacking_team_grenade: number
  wins_kit_attacking_team_grenade: number
  fall_kills_kit_attacking_team_grenade: number
  heads_salty_kit_attacking_team_fisherman: number
  team_environmental_expert: number
  inGamePresentsCap_2020_20: number
  free_event_key_skywars_christmas_boxes_2020_2: boolean
  mob_kills_kit_defending_team_armorer: number
  mob_kills_team: number
  inGamePresentsCap_2020_22: number
  games_kit_advanced_solo_slime: number
  kills_kit_advanced_solo_slime: number
  longest_bow_kill_kit_advanced_solo_slime: number
  melee_kills_kit_advanced_solo_slime: number
  most_kills_game_kit_advanced_solo_slime: number
  void_kills_kit_advanced_solo_slime: number
  heads_tasty_solo: number
  inGamePresentsCap_2020_29: number
  inGamePresentsCap_2020_30: number
  mob_kills_kit_enderchest_solo_enderchest: number
  inGamePresentsCap_2020_31: number
  heads_eww_kit_defending_team_armorer: number
  fall_kills_kit_ranked_ranked_armorer: number
  fall_kills_ranked: number
  inGamePresentsCap_2021_2: number
  inGamePresentsCap_2021_3: number
  heads_meh_kit_supporting_team_ecologist: number
  inGamePresentsCap_2021_4: number
  fall_kills_kit_supporting_team_ecologist: number
  heads_eww_kit_supporting_team_ecologist: number
  heads_yucky_kit_supporting_team_ecologist: number
  inGamePresentsCap_2021_5: number
  inGamePresentsCap_2021_7: number
  inGamePresentsCap_2021_8: number
  arrows_hit_mega: number
  arrows_shot_mega: number
  chests_opened_mega: number
  deaths_mega: number
  deaths_mega_normal: number
  kills_kit_mega_mega_default: number
  kills_mega: number
  kills_mega_normal: number
  longest_bow_kill_kit_mega_mega_default: number
  longest_bow_kill_mega: number
  longest_bow_shot_mega: number
  losses_mega: number
  losses_mega_normal: number
  melee_kills_kit_mega_mega_default: number
  melee_kills_mega: number
  most_kills_game_kit_mega_mega_default: number
  most_kills_game_mega: number
  survived_players_mega: number
  time_played_mega: number
  inGamePresentsCap_2021_10: number
  inGamePresentsCap_2021_12: number
  inGamePresentsCap_2021_14: number
  challenge_attempts_1_kit_defending_team_armorer: number
  challenge_attempts_kit_defending_team_armorer: number
  challenge_attempts_paper_kit_defending_team_armorer: number
  challenge_attempts_uhc_kit_defending_team_armorer: number
  challenge_attempts_3: number
  challenge_attempts_3_kit_defending_team_armorer: number
  challenge_attempts_3_solo: number
  challenge_attempts_no_block_kit_defending_team_armorer: number
  challenge_attempts_rookie_kit_defending_team_armorer: number
  challenge_attempts_2: number
  challenge_attempts_2_kit_defending_team_armorer: number
  challenge_attempts_2_solo: number
  challenge_attempts_ultimate_warrior_kit_defending_team_armorer: number
  SkyWars_skywars_rating_12_20_position: number
  SkyWars_skywars_rating_12_20_rating: number
  mega_ender_mastery: number
  mega_lucky_charm: number
  chests_opened_kit_basic_solo_ecologist: number
  deaths_kit_basic_solo_ecologist: number
  kills_kit_basic_solo_ecologist: number
  longest_bow_kill_kit_basic_solo_ecologist: number
  losses_kit_basic_solo_ecologist: number
  melee_kills_kit_basic_solo_ecologist: number
  most_kills_game_kit_basic_solo_ecologist: number
  survived_players_kit_basic_solo_ecologist: number
  time_played_kit_basic_solo_ecologist: number
  void_kills_kit_basic_solo_ecologist: number
  heads_succulent_kit_defending_team_armorer: number
  heads_succulent_solo: number
  arrows_hit_kit_mining_team_cannoneer: number
  arrows_shot_kit_mining_team_cannoneer: number
  chests_opened_kit_mining_team_cannoneer: number
  deaths_kit_mining_team_cannoneer: number
  longest_bow_shot_kit_mining_team_cannoneer: number
  losses_kit_mining_team_cannoneer: number
  survived_players_kit_mining_team_cannoneer: number
  time_played_kit_mining_team_cannoneer: number
  kills_kit_mining_team_cannoneer: number
  melee_kills_kit_mining_team_cannoneer: number
  chests_opened_kit_supporting_team_armorsmith: number
  deaths_kit_supporting_team_armorsmith: number
  games_kit_supporting_team_armorsmith: number
  losses_kit_supporting_team_armorsmith: number
  survived_players_kit_supporting_team_armorsmith: number
  time_played_kit_supporting_team_armorsmith: number
  free_event_key_skywars_easter_boxes_2021_2: boolean
  skywars_easter_boxes: number
  heads_divine_kit_attacking_team_knight: number
  heads_salty_kit_attacking_team_knight: number
  heads_tasty_kit_attacking_team_knight: number
  bow_kills_kit_supporting_team_ecologist: number
  heads_heavenly_kit_defending_team_armorer: number
  heads_divine_kit_defending_team_armorer: number
  fall_kills_kit_advanced_solo_armorer: number
  chests_opened_kit_attacking_team_energix: number
  deaths_kit_attacking_team_energix: number
  games_kit_attacking_team_energix: number
  kills_kit_attacking_team_energix: number
  longest_bow_kill_kit_attacking_team_energix: number
  losses_kit_attacking_team_energix: number
  melee_kills_kit_attacking_team_energix: number
  most_kills_game_kit_attacking_team_energix: number
  survived_players_kit_attacking_team_energix: number
  time_played_kit_attacking_team_energix: number
  longest_bow_kill_kit_mining_team_cannoneer: number
  most_kills_game_kit_mining_team_cannoneer: number
  lastTourneyAd: number
  arrows_hit_tourney_kit_defending_team_armorer: number
  arrows_shot_tourney_kit_defending_team_armorer: number
  assists_tourney: number
  assists_tourney_kit_defending_team_armorer: number
  assists_tourney_teams_tourney: number
  chests_opened_tourney_kit_defending_team_armorer: number
  deaths_tourney_kit_defending_team_armorer: number
  kills_tourney_kit_defending_team_armorer: number
  losses_tourney_kit_defending_team_armorer: number
  melee_kills_tourney_kit_defending_team_armorer: number
  survived_players_tourney_kit_defending_team_armorer: number
  time_played_tourney_kit_defending_team_armorer: number
  tourney_sw_insane_doubles_1_arrows_hit: number
  tourney_sw_insane_doubles_1_arrows_shot: number
  tourney_sw_insane_doubles_1_assists: number
  tourney_sw_insane_doubles_1_blocks_placed: number
  tourney_sw_insane_doubles_1_chests_opened: number
  tourney_sw_insane_doubles_1_coins: number
  tourney_sw_insane_doubles_1_coins_gained: number
  tourney_sw_insane_doubles_1_deaths: number
  tourney_sw_insane_doubles_1_kills: number
  tourney_sw_insane_doubles_1_losses: number
  tourney_sw_insane_doubles_1_melee_kills: number
  tourney_sw_insane_doubles_1_quits: number
  tourney_sw_insane_doubles_1_survived_players: number
  tourney_sw_insane_doubles_1_time_played: number
  tourney_sw_insane_doubles_1_void_kills: number
  tourney_sw_insane_doubles_1_win_streak: number
  void_kills_tourney: number
  void_kills_tourney_kit_defending_team_armorer: number
  void_kills_tourney_teams_tourney: number
  blocks_broken_tourney: number
  tourney_sw_insane_doubles_1_blocks_broken: number
  egg_thrown_tourney: number
  tourney_sw_insane_doubles_1_egg_thrown: number
  enderpearls_thrown_tourney: number
  tourney_sw_insane_doubles_1_enderpearls_thrown: number
  games_tourney_kit_defending_team_armorer: number
  tourney_sw_insane_doubles_1_games: number
  items_enchanted_tourney: number
  killstreak_tourney: number
  killstreak_tourney_kit_defending_team_armorer: number
  killstreak_tourney_teams_tourney: number
  tourney_sw_insane_doubles_1_items_enchanted: number
  tourney_sw_insane_doubles_1_killstreak: number
  tourney_sw_insane_doubles_1_wins: number
  wins_tourney: number
  wins_tourney_kit_defending_team_armorer: number
  wins_tourney_teams_tourney: number
  mobs_killed: number
  mobs_killed_kit_advanced_solo_armorer: number
  mobs_killed_team: number
  mobs_killed_kit_defending_team_armorer: number
  selected_prestige_icon: string
  "chests_opened_kit_mythical_nether-lord": number
  "deaths_kit_mythical_nether-lord": number
  "losses_kit_mythical_nether-lord": number
  "survived_players_kit_mythical_nether-lord": number
  "time_played_kit_mythical_nether-lord": number
  assists_kit_mythical_thundermeister: number
  chests_opened_kit_mythical_thundermeister: number
  deaths_kit_mythical_thundermeister: number
  fastest_win_kit_mythical_thundermeister: number
  games_kit_mythical_thundermeister: number
  survived_players_kit_mythical_thundermeister: number
  time_played_kit_mythical_thundermeister: number
  wins_kit_mythical_thundermeister: number
  "arrows_hit_kit_mythical_nether-lord": number
  "arrows_shot_kit_mythical_nether-lord": number
  "assists_kit_mythical_nether-lord": number
  "fastest_win_kit_mythical_nether-lord": number
  "games_kit_mythical_nether-lord": number
  "kills_kit_mythical_nether-lord": number
  "killstreak_kit_mythical_nether-lord": number
  "longest_bow_kill_kit_mythical_nether-lord": number
  "longest_bow_shot_kit_mythical_nether-lord": number
  "melee_kills_kit_mythical_nether-lord": number
  "most_kills_game_kit_mythical_nether-lord": number
  "void_kills_kit_mythical_nether-lord": number
  "wins_kit_mythical_nether-lord": number
  arrows_hit_kit_mythical_thundermeister: number
  arrows_shot_kit_mythical_thundermeister: number
  kills_kit_mythical_thundermeister: number
  killstreak_kit_mythical_thundermeister: number
  longest_bow_kill_kit_mythical_thundermeister: number
  longest_bow_shot_kit_mythical_thundermeister: number
  melee_kills_kit_mythical_thundermeister: number
  most_kills_game_kit_mythical_thundermeister: number
  void_kills_kit_mythical_thundermeister: number
  losses_kit_mythical_thundermeister: number
  mobs_killed_kit_mythical_thundermeister: number
  heads_kit_mythical_thundermeister: number
  heads_yucky_kit_mythical_thundermeister: number
  perkslot: Perkslot
  toggle_ranked_blazing_arrows: boolean
  toggle_ranked_mining_expertise: boolean
  toggle_ranked_rusher: boolean
  toggle_ranked_last_stand: boolean
  toggle_ranked_juggernaut: boolean
  toggle_mega_notoriety: boolean
  toggle_mega_mining_expertise: boolean
  toggle_mega_nourishment: boolean
  toggle_mega_tank: boolean
  toggle_mega_marksmanship: boolean
  toggle_mega_environmental_expert: boolean
  toggle_mega_black_magic: boolean
  toggle_mega_lucky_charm: boolean
  toggle_mega_juggernaut: boolean
  toggle_mega_blazing_arrows: boolean
  toggle_mega_rusher: boolean
  toggle_team_juggernaut: boolean
  toggle_mega_bridger: boolean
  toggle_team_mining_expertise: boolean
  toggle_ranked_environmental_expert: boolean
  toggle_team_resistance_boost: boolean
  toggle_team_knowledge: boolean
  toggle_team_fat: boolean
  toggle_ranked_arrow_recovery: boolean
  toggle_ranked_healer_perk: boolean
  toggle_ranked_bridger: boolean
  toggle_team_nourishment: boolean
  toggle_mega_necromancer: boolean
  toggle_team_bridger: boolean
  toggle_team_environmental_expert: boolean
  toggle_team_necromancer: boolean
  toggle_mega_arrow_recovery: boolean
  toggle_team_marksmanship: boolean
  toggle_ranked_magician_perk: boolean
  toggle_ranked_tough_skin: boolean
  toggle_team_black_magic: boolean
  toggle_team_lucky_charm: boolean
  toggle_team_frost: boolean
  toggle_solo_blazing_arrows: boolean
  toggle_solo_necromancer: boolean
  toggle_solo_bridger: boolean
  solo_bulldozer: number
  toggle_team_savior: boolean
  toggle_solo_bulldozer: boolean
  toggle_solo_juggernaut: boolean
  toggle_solo_marksmanship: boolean
  toggle_team_bulldozer: boolean
  toggle_solo_speed_boost: boolean
  solo_juggernaut: number
  toggle_solo_mining_expertise: boolean
  "toggle_solo_annoy-o-mite": boolean
  toggle_solo_revenge: boolean
  solo_savior: number
  toggle_solo_savior: boolean
  solo_fat: number
  toggle_solo_fat: boolean
  toggle_solo_black_magic: boolean
  toggle_solo_robbery: boolean
  toggle_solo_lucky_charm: boolean
  toggle_solo_frost: boolean
  toggle_solo_barbarian: boolean
  solo_resistance_boost: number
  toggle_solo_environmental_expert: boolean
  toggle_ranked_bowman_perk: boolean
  toggle_ranked_athlete_perk: boolean
  toggle_ranked_scout_perk: boolean
  toggle_ranked_blacksmith_perk: boolean
  toggle_ranked_pyromancer_perk: boolean
  toggle_ranked_hound_perk: boolean
  toggle_team_speed_boost: boolean
  toggle_ranked_paladin_perk: boolean
  toggle_team_robbery: boolean
  toggle_team_diamondpiercer: boolean
  toggle_ranked_champion_perk: boolean
  toggle_ranked_armorer_perk: boolean
  toggle_solo_arrow_recovery: boolean
  toggle_solo_nourishment: boolean
  toggle_solo_resistance_boost: boolean
  toggle_team_barbarian: boolean
  toggle_solo_knowledge: boolean
  "toggle_team_annoy-o-mite": boolean
  bow_kills_kit_advanced_solo_armorer: number
  heads_eww_kit_advanced_solo_armorer: number
  heads_salty_kit_basic_solo_frog: number
  heads_salty_kit_advanced_solo_armorer: number
  heads_yucky_kit_advanced_solo_armorer: number
  mobs_killed_solo: number
  levelFormattedWithBrackets: string
  challenge_attempts_1_kit_defending_team_frog: number
  challenge_attempts_kit_defending_team_frog: number
  challenge_attempts_uhc_kit_defending_team_frog: number
  challenge_wins: number
  challenge_wins_1: number
  challenge_wins_1_kit_defending_team_frog: number
  challenge_wins_1_solo: number
  challenge_wins_kit_defending_team_frog: number
  challenge_wins_solo: number
  challenge_wins_uhc: number
  challenge_wins_uhc_kit_defending_team_frog: number
  challenge_wins_uhc_solo: number
  heads_succulent_kit_enderchest_solo_enderchest: number
  mobs_killed_kit_basic_solo_frog: number
  heads_heavenly_kit_basic_solo_frog: number
}

export interface HeadCollection {
  recent: Recent[]
  prestigious: Prestigiou[]
}

export interface Recent {
  uuid: string
  timestamp: number
  mode: string
  sacrifice: string
}

export interface Prestigiou {
  uuid: string
  timestamp: number
  mode: string
  sacrifice: string
}

export interface Privategames3 {
  one_hit_one_kill: boolean
  enable_teleport_mayhem: boolean
  health_buff: string
  chest_swords: string
  chest_armour: string
  no_kits: boolean
  enable_max_kits_and_perks: boolean
  dragons: string
  enable_legacy_items: boolean
  chest_bows: string
  enable_night_time: boolean
}

export interface Perkslot {
  normal: Normal
  insane: Insane
}

export interface Normal {
  "4": string
  "5": string
  "1": string
  "2": string
  "3": string
  "6": string
}

export interface Insane {
  "4": string
  "1": string
  "2": string
  "5": string
  "6": string
  "3": string
}

export interface GingerBread {
  packages: string[]
  frame_active: string
  shoes_active: string
  pants_active: string
  helmet_active: string
  jacket_active: string
  booster_active: string
  skin_active: string
  engine_active: string
  horn: string
  box_pickups: number
  box_pickups_canyon: number
  box_pickups_monthly_a: number
  box_pickups_weekly_b: number
  canyon_plays: number
  coins_picked_up: number
  laps_completed: number
  coins: number
  lastTourneyAd: number
  tourney_gingerbread_solo_0_banana_hits_received: number
  tourney_gingerbread_solo_0_banana_hits_sent: number
  tourney_gingerbread_solo_0_box_pickups: number
  tourney_gingerbread_solo_0_box_pickups_monthly_a: number
  tourney_gingerbread_solo_0_box_pickups_retro: number
  tourney_gingerbread_solo_0_box_pickups_weekly_a: number
  tourney_gingerbread_solo_0_coins_picked_up: number
  tourney_gingerbread_solo_0_laps_completed: number
  tourney_gingerbread_solo_0_retro_plays: number
  tourney_gingerbread_solo_0_box_pickups_hypixelgp: number
  tourney_gingerbread_solo_0_gold_trophy: number
  tourney_gingerbread_solo_0_gold_trophy_hypixelgp: number
  tourney_gingerbread_solo_0_gold_trophy_monthly_a: number
  tourney_gingerbread_solo_0_gold_trophy_weekly_a: number
  tourney_gingerbread_solo_0_hypixelgp_plays: number
  tourney_gingerbread_solo_0_wins: number
  box_pickups_retro: number
  retro_plays: number
  banana_hits_received: number
  banana_hits_sent: number
  box_pickups_weekly_a: number
}

export interface VampireZ {
  updated_stats: boolean
  human_deaths: number
  most_vampire_kills_new: number
  coins: number
  human_kills: number
  monthly_vampire_wins_b: number
  vampire_deaths: number
  vampire_wins: number
  weekly_vampire_wins_b: number
  blood_drinker: number
  final_breath: number
  hellborn: number
  vampiric_scream: number
  zombie_kills: number
  vampire_kills: number
  human_wins: number
  monthly_human_wins_a: number
  weekly_human_wins_b: number
  gold_bought: number
}

export interface Quake {
  packages: string[]
  enable_sound: boolean
  alternative_gun_cooldown_indicator: boolean
  compass_selected: boolean
  showDashCooldown: boolean
  "messageOthers' Kills/deaths": boolean
  "messageYour Deaths": boolean
  instantRespawn: boolean
  coins: number
  kills_dm_teams: number
  kills_dm: number
  kills: number
  kills_teams: number
  kills_timeattack: number
  kills_solo_tourney: number
  showKillPrefix: boolean
  "messageMulti-kills": boolean
  messageKillstreaks: boolean
  "messagePowerup Collections": boolean
  highest_killstreak: number
  "messageYour Kills": boolean
  messageCoin: boolean
  distance_travelled_teams: number
  kills_since_update_feb_2017_teams: number
  shots_fired_teams: number
  deaths_teams: number
  wins_teams: number
  headshots_teams: number
  distance_travelled: number
  shots_fired: number
  deaths: number
  lastTourneyAd: number
  kills_since_update_feb_2017: number
  headshots: number
  kills_tourney_unknown: number
  wins: number
  dash_cooldown: string
  barrel: string
  killstreaks: number
}

export interface Paintball {
  packages: string[]
  favorite_slots: string
  coins: number
  deaths: number
  kills: number
  shots_fired: number
  wins: number
  showKillPrefix: boolean
  killstreaks: number
}

export interface BuildBattle {
  games_played: number
  monthly_coins_b: number
  coins: number
  weekly_coins_b: number
  votes_Arm: number
  solo_most_points: number
  score: number
  total_votes: number
  weekly_coins_a: number
  buildbattle_loadout: string[]
  music: boolean
  monthly_coins_a: number
  packages: string[]
  super_votes: number
  correct_guesses: number
  teams_most_points: number
  wins: number
  wins_guess_the_build: number
  selected_backdrop: string
  wins_teams_normal: number
}

export interface Legacy {
  next_tokens_seconds: number
  tokens: number
  total_tokens: number
  walls_tokens: number
  paintball_tokens: number
  gingerbread_tokens: number
  vampirez_tokens: number
  quakecraft_tokens: number
  arena_tokens: number
}

export interface SkyBlock {
  profiles: Profiles
}

export interface Profiles {
  de73dcef26da47f5be5cb8f96d57adba: De73dcef26da47f5be5cb8f96d57adba
  d760183feec0411caac61c8695fb51cd: D760183feec0411caac61c8695fb51cd
  "1e0b1e0c58ad4b66b69ec1bb62042e52": N1e0b1e0c58ad4b66b69ec1bb62042e52
  "6449bc4e306944b9a3491db68a8ff6c7": N6449bc4e306944b9a3491db68a8ff6c7
}

export interface De73dcef26da47f5be5cb8f96d57adba {
  profile_id: string
  cute_name: string
}

export interface D760183feec0411caac61c8695fb51cd {
  profile_id: string
  cute_name: string
}

export interface N1e0b1e0c58ad4b66b69ec1bb62042e52 {
  profile_id: string
  cute_name: string
}

export interface N6449bc4e306944b9a3491db68a8ff6c7 {
  profile_id: string
  cute_name: string
}

export interface Pit {
  profile: Profile
  pit_stats_ptl: PitStatsPtl
  stats_move_1: number
}

export interface Profile {
  moved_achievements_1: boolean
  outgoing_offers: any[]
  moved_achievements_2: boolean
  items_last_buy: ItemsLastBuy
  contract_choices: any
  last_save: number
  king_quest: KingQuest
  last_passive_xp: number
  genesis_points: number
  trade_timestamps: number[]
  spire_stash_inv: SpireStashInv
  cheap_milk: boolean
  zero_point_three_gold_transfer: boolean
  death_recaps: DeathRecaps
  inv_enderchest: InvEnderchest
  spire_stash_armor: SpireStashArmor
  genesis_spawn_in_base: boolean
  cash: number
  last_midfight_disconnect: number
  leaderboard_stats: LeaderboardStats
  selected_perk_2: string
  inv_armor: InvArmor
  selected_perk_1: string
  selected_perk_0: string
  last_contract: number
  item_stash: ItemStash
  gold_transactions: GoldTransaction[]
  selected_killstreak_1: string
  genesis_allegiance_time: number
  login_messages: any[]
  hotbar_favorites: number[]
  genesis_allegiance: string
  inv_contents: InvContents
  xp: number
  ended_contracts: EndedContract[]
  bounties: any[]
  unlocks: Unlock[]
  cash_during_prestige_0: number
}

export interface ItemsLastBuy {
  obsidian: number
  diamond_chestplate: number
  diamond_boots: number
  diamond_sword: number
}

export interface KingQuest {
  kills: number
}

export interface SpireStashInv {
  type: number
  data: number[]
}

export interface DeathRecaps {
  type: number
  data: number[]
}

export interface InvEnderchest {
  type: number
  data: number[]
}

export interface SpireStashArmor {
  type: number
  data: number[]
}

export interface LeaderboardStats {
  Pit_rage_pit_damage_2019_summer: number
  Pit_kotl_gold_2021_spring: number
  Pit_blockhead_blocks_2021_spring: number
  Pit_cake_eaten_2021_spring: number
  Pit_tdm_blue_kills_2021_spring: number
  Pit_raffle_tickets_2021_spring: number
  Pit_kotl_gold_2020_spring: number
  Pit_kotl_time_2020_spring: number
  Pit_kotl_time_2021_spring: number
}

export interface InvArmor {
  type: number
  data: number[]
}

export interface ItemStash {
  type: number
  data: number[]
}

export interface GoldTransaction {
  amount: number
  timestamp: number
}

export interface InvContents {
  type: number
  data: number[]
}

export interface EndedContract {
  difficulty: string
  gold_reward: number
  requirements: Requirements
  progress: Progress
  chunk_of_viles_reward: number
  completion_date: number
  remaining_ticks: number
  key: string
}

export interface Requirements {
  kills: number
}

export interface Progress {
  kills: number
}

export interface Unlock {
  tier: number
  acquireDate: number
  key: string
}

export interface PitStatsPtl {
  arrows_fired: number
  assists: number
  cash_earned: number
  damage_dealt: number
  damage_received: number
  deaths: number
  joins: number
  jumped_into_pit: number
  kills: number
  left_clicks: number
  melee_damage_dealt: number
  melee_damage_received: number
  sword_hits: number
  arrow_hits: number
  bow_damage_dealt: number
  bow_damage_received: number
  launched_by_launchers: number
  max_streak: number
  wheat_farmed: number
  gapple_eaten: number
  playtime_minutes: number
  diamond_items_purchased: number
  ghead_eaten: number
  lava_bucket_emptied: number
  chat_messages: number
  fishing_rod_launched: number
  enderchest_opened: number
  ingots_cash: number
  ingots_picked_up: number
  fished_anything: number
  contracts_started: number
  blocks_broken: number
  blocks_placed: number
  contracts_completed: number
  enchanted_tier1: number
  enchanted_tier2: number
  enchanted_tier3: number
  launched_by_angel_spawn: number
  launched_by_demon_spawn: number
  rage_pants_crafted: number
  soups_drank: number
  lucky_diamond_pieces: number
  vampire_healed_hp: number
  obsidian_broken: number
}

export interface Duels {
  show_lb_option: string
  games_played_duels: number
  chat_enabled: string
  leaderboardPage_win_streak: number
  maps_won_on: string[]
  all_modes_rookie_title_prestige: number
  uhc_rookie_title_prestige: number
  no_debuff_rookie_title_prestige: number
  op_rookie_title_prestige: number
  combo_rookie_title_prestige: number
  mega_walls_rookie_title_prestige: number
  blitz_rookie_title_prestige: number
  classic_rookie_title_prestige: number
  tnt_games_rookie_title_prestige: number
  bow_rookie_title_prestige: number
  sumo_rookie_title_prestige: number
  skywars_rookie_title_prestige: number
  bridge_rookie_title_prestige: number
  bow_hits: number
  bow_shots: number
  coins: number
  damage_dealt: number
  deaths: number
  golden_apples_eaten: number
  health_regenerated: number
  losses: number
  melee_hits: number
  melee_swings: number
  rounds_played: number
  uhc_four_bow_hits: number
  uhc_four_bow_shots: number
  uhc_four_damage_dealt: number
  uhc_four_deaths: number
  uhc_four_golden_apples_eaten: number
  uhc_four_health_regenerated: number
  uhc_four_losses: number
  uhc_four_melee_hits: number
  uhc_four_melee_swings: number
  uhc_four_rounds_played: number
  selected_2_new: string
  selected_1_new: string
  duels_chests: number
  bowspleef_duel_bow_shots: number
  bowspleef_duel_rounds_played: number
  bowspleef_duel_wins: number
  wins: number
  bowspleef_duel_deaths: number
  bowspleef_duel_losses: number
  blitz_duels_kit: string
  blitz_duel_blocks_placed: number
  blitz_duel_damage_dealt: number
  blitz_duel_health_regenerated: number
  blitz_duel_kills: number
  blitz_duel_kit_wins: number
  blitz_duel_knight_kit_wins: number
  blitz_duel_melee_hits: number
  blitz_duel_melee_swings: number
  blitz_duel_rounds_played: number
  blitz_duel_wins: number
  blocks_placed: number
  kills: number
  kit_wins: number
  knight_kit_wins: number
  archer_kit_wins: number
  blitz_duel_archer_kit_wins: number
  blitz_duel_bow_hits: number
  blitz_duel_bow_shots: number
  blitz_duel_deaths: number
  blitz_duel_losses: number
  blitz_duel_ranger_kit_wins: number
  ranger_kit_wins: number
  "blitz_duel_shadow knight_kit_wins": number
  "shadow knight_kit_wins": number
  blitz_duel_pigman_kit_wins: number
  pigman_kit_wins: number
  blitz_duel_diver_kit_wins: number
  diver_kit_wins: number
  blitz_duel_florist_kit_wins: number
  florist_kit_wins: number
  blitz_duel_fisherman_kit_wins: number
  fisherman_kit_wins: number
  blitz_duel_snowman_kit_wins: number
  snowman_kit_wins: number
  blitz_duel_paladin_kit_wins: number
  paladin_kit_wins: number
  astronaut_kit_wins: number
  blitz_duel_astronaut_kit_wins: number
  blitz_duel_jockey_kit_wins: number
  jockey_kit_wins: number
  sw_duels_kit_new3: string
  champion_kit_wins: number
  sw_duel_blocks_placed: number
  sw_duel_champion_kit_wins: number
  sw_duel_damage_dealt: number
  sw_duel_health_regenerated: number
  sw_duel_kills: number
  sw_duel_kit_wins: number
  sw_duel_melee_hits: number
  sw_duel_melee_swings: number
  sw_duel_rounds_played: number
  sw_duel_wins: number
  sw_duel_deaths: number
  sw_duel_losses: number
  sw_duel_paladin_kit_wins: number
  bowman_kit_wins: number
  sw_duel_bowman_kit_wins: number
  armorer_kit_wins: number
  sw_duel_armorer_kit_wins: number
  scout_kit_wins: number
  sw_duel_scout_kit_wins: number
  hound_kit_wins: number
  sw_duel_hound_kit_wins: number
  sw_doubles_blocks_placed: number
  sw_doubles_damage_dealt: number
  sw_doubles_deaths: number
  sw_doubles_health_regenerated: number
  sw_doubles_losses: number
  sw_doubles_melee_hits: number
  sw_doubles_melee_swings: number
  sw_doubles_rounds_played: number
  sw_doubles_bow_hits: number
  sw_doubles_bow_shots: number
  sw_doubles_kills: number
  sw_doubles_kit_wins: number
  sw_doubles_scout_kit_wins: number
  sw_doubles_wins: number
  sw_duel_bow_hits: number
  sw_duel_bow_shots: number
  duels_recently_played2: string
  bridgeMapWins: string[]
  bridge_deaths: number
  bridge_duel_blocks_placed: number
  bridge_duel_bow_hits: number
  bridge_duel_bow_shots: number
  bridge_duel_bridge_deaths: number
  bridge_duel_bridge_kills: number
  bridge_duel_damage_dealt: number
  bridge_duel_health_regenerated: number
  bridge_duel_losses: number
  bridge_duel_melee_hits: number
  bridge_duel_melee_swings: number
  bridge_duel_rounds_played: number
  bridge_kills: number
  bridge_duel_goals: number
  goals: number
  bridge_doubles_blocks_placed: number
  bridge_doubles_bow_hits: number
  bridge_doubles_bow_shots: number
  bridge_doubles_bridge_deaths: number
  bridge_doubles_bridge_kills: number
  bridge_doubles_damage_dealt: number
  bridge_doubles_health_regenerated: number
  bridge_doubles_losses: number
  bridge_doubles_melee_hits: number
  bridge_doubles_melee_swings: number
  bridge_doubles_rounds_played: number
  healer_kit_wins: number
  sw_doubles_healer_kit_wins: number
  athlete_kit_wins: number
  sw_duel_athlete_kit_wins: number
  enderman_kit_wins: number
  sw_duel_enderman_kit_wins: number
  sw_doubles_enderman_kit_wins: number
  blitz_duel_necromancer_kit_wins: number
  necromancer_kit_wins: number
  blitz_duel_golem_kit_wins: number
  golem_kit_wins: number
  combo_duel_deaths: number
  combo_duel_golden_apples_eaten: number
  combo_duel_health_regenerated: number
  combo_duel_losses: number
  combo_duel_melee_hits: number
  combo_duel_melee_swings: number
  combo_duel_rounds_played: number
  op_duel_deaths: number
  op_duel_health_regenerated: number
  op_duel_losses: number
  op_duel_melee_hits: number
  op_duel_melee_swings: number
  op_duel_rounds_played: number
  op_doubles_damage_dealt: number
  op_doubles_health_regenerated: number
  op_doubles_melee_hits: number
  op_doubles_melee_swings: number
  op_doubles_rounds_played: number
  op_doubles_wins: number
  op_doubles_kills: number
  op_doubles_deaths: number
  op_doubles_losses: number
  uhc_duel_blocks_placed: number
  uhc_duel_bow_hits: number
  uhc_duel_bow_shots: number
  uhc_duel_damage_dealt: number
  uhc_duel_deaths: number
  uhc_duel_golden_apples_eaten: number
  uhc_duel_health_regenerated: number
  uhc_duel_losses: number
  uhc_duel_melee_hits: number
  uhc_duel_melee_swings: number
  uhc_duel_rounds_played: number
  sumo_duel_deaths: number
  sumo_duel_losses: number
  sumo_duel_melee_hits: number
  sumo_duel_melee_swings: number
  sumo_duel_rounds_played: number
  classic_duel_bow_hits: number
  classic_duel_bow_shots: number
  classic_duel_damage_dealt: number
  classic_duel_health_regenerated: number
  classic_duel_melee_hits: number
  classic_duel_melee_swings: number
  classic_duel_rounds_played: number
  op_duel_damage_dealt: number
  enderchest_kit_wins: number
  sw_doubles_enderchest_kit_wins: number
  sw_doubles_armorer_kit_wins: number
  sw_doubles_champion_kit_wins: number
  pyro_kit_wins: number
  sw_doubles_pyro_kit_wins: number
  sw_doubles_bowman_kit_wins: number
  bow_duel_bow_shots: number
  bow_duel_health_regenerated: number
  bow_duel_rounds_played: number
  bow_duel_bow_hits: number
  bow_duel_damage_dealt: number
  bow_duel_deaths: number
  bow_duel_losses: number
  classic_duel_deaths: number
  classic_duel_losses: number
  classic_duel_kills: number
  classic_duel_wins: number
  op_duel_kills: number
  op_duel_wins: number
  energix_kit_wins: number
  sw_duel_energix_kit_wins: number
  pyromancer_kit_wins: number
  sw_duel_pyromancer_kit_wins: number
  sw_doubles_pyromancer_kit_wins: number
  skywars_iron_title_prestige: number
  uhc_meetup_bow_shots: number
  uhc_meetup_damage_dealt: number
  uhc_meetup_deaths: number
  uhc_meetup_health_regenerated: number
  uhc_meetup_losses: number
  uhc_meetup_melee_hits: number
  uhc_meetup_melee_swings: number
  uhc_meetup_rounds_played: number
  bridge_doubles_goals: number
  bridge_doubles_wins: number
  bridge_duel_wins: number
  all_modes_iron_title_prestige: number
  sumo_duel_kills: number
  sumo_duel_wins: number
  ranked_streak_ranked_1: number
  ranked_loss_streak_ranked_1: number
  Duels_new_ranked__9_2019_ranked_1_bestStars: number
  Duels_new_ranked__9_2019_ranked_1_bestElo: number
  Duels_new_ranked__9_2019_overallBestStars: number
  Duels_new_ranked__9_2019_ranked_1_maxStars: boolean
  heal_pots_used: number
  ranked_1_damage_dealt: number
  ranked_1_deaths: number
  ranked_1_heal_pots_used: number
  ranked_1_health_regenerated: number
  ranked_1_losses: number
  ranked_1_melee_hits: number
  ranked_1_melee_swings: number
  ranked_1_rounds_played: number
  bridge_four_blocks_placed: number
  bridge_four_bow_hits: number
  bridge_four_bow_shots: number
  bridge_four_bridge_deaths: number
  bridge_four_bridge_kills: number
  bridge_four_damage_dealt: number
  bridge_four_goals: number
  bridge_four_health_regenerated: number
  bridge_four_losses: number
  bridge_four_melee_hits: number
  bridge_four_melee_swings: number
  bridge_four_rounds_played: number
  sw_doubles_troll_kit_wins: number
  troll_kit_wins: number
  uhc_doubles_bow_hits: number
  uhc_doubles_bow_shots: number
  uhc_doubles_damage_dealt: number
  uhc_doubles_deaths: number
  uhc_doubles_golden_apples_eaten: number
  uhc_doubles_health_regenerated: number
  uhc_doubles_losses: number
  uhc_doubles_melee_hits: number
  uhc_doubles_melee_swings: number
  uhc_doubles_rounds_played: number
  uhc_doubles_blocks_placed: number
  uhc_doubles_kills: number
  uhc_doubles_wins: number
  potion_duel_damage_dealt: number
  potion_duel_heal_pots_used: number
  potion_duel_health_regenerated: number
  potion_duel_melee_hits: number
  potion_duel_melee_swings: number
  potion_duel_rounds_played: number
  mw_duels_class: string
  mw_duel_damage_dealt: number
  mw_duel_health_regenerated: number
  mw_duel_melee_hits: number
  mw_duel_melee_swings: number
  mw_duel_rounds_played: number
  packages: string[]
  Duels_openedChests: number
  duels_chest_history: string[]
  Duels_openedCommons: number
  Duels_openedRares: number
  Duels_openedEpics: number
  active_auras: string
  active_emblem: string
  layout_sw_duel_kit_ranked_ranked_armorer: LayoutSwDuelKitRankedRankedArmorer
  uhc_four_blocks_placed: number
  uhc_four_wins: number
  rookie_kit_wins: number
  sw_doubles_rookie_kit_wins: number
  sw_doubles_athlete_kit_wins: number
  mw_doubles_bow_shots: number
  mw_doubles_damage_dealt: number
  mw_doubles_health_regenerated: number
  mw_doubles_melee_hits: number
  mw_doubles_melee_swings: number
  mw_doubles_rounds_played: number
  mw_doubles_bow_hits: number
  mw_doubles_blocks_placed: number
  cannoneer_kit_wins: number
  sw_duel_cannoneer_kit_wins: number
  uhc_meetup_bow_hits: number
  bridge_duel: boolean
  active_cage: string
  layout_sw_duel_kit_attacking_team_enderman: LayoutSwDuelKitAttackingTeamEnderman
  guardian_kit_wins: number
  sw_doubles_guardian_kit_wins: number
  uhc_duel_kills: number
  uhc_duel_wins: number
  mw_duel_blocks_placed: number
  mw_duel_bow_shots: number
  uhc_meetup_blocks_placed: number
  bow_duel_kills: number
  bow_duel_wins: number
  bridge_3v3v3v3_blocks_placed: number
  bridge_3v3v3v3_bridge_deaths: number
  bridge_3v3v3v3_bridge_kills: number
  bridge_3v3v3v3_damage_dealt: number
  bridge_3v3v3v3_health_regenerated: number
  bridge_3v3v3v3_losses: number
  bridge_3v3v3v3_melee_hits: number
  bridge_3v3v3v3_melee_swings: number
  bridge_3v3v3v3_rounds_played: number
  layout_uhc_duel_layout: LayoutUhcDuelLayout
  leaderboardPage_goals: number
  leaderboardPage_wins: number
  sw_doubles_golem_kit_wins: number
  uhc_four_kills: number
  bridge_2v2v2v2_blocks_placed: number
  bridge_2v2v2v2_bow_hits: number
  bridge_2v2v2v2_bow_shots: number
  bridge_2v2v2v2_bridge_deaths: number
  bridge_2v2v2v2_damage_dealt: number
  bridge_2v2v2v2_health_regenerated: number
  bridge_2v2v2v2_losses: number
  bridge_2v2v2v2_melee_hits: number
  bridge_2v2v2v2_melee_swings: number
  bridge_2v2v2v2_rounds_played: number
  bridge_four_wins: number
  sw_doubles_fisherman_kit_wins: number
  mw_duel_bow_hits: number
  frog_kit_wins: number
  sw_doubles_frog_kit_wins: number
  active_victory_dance: string
  skywars_gold_title_prestige: number
  potion_duel_kills: number
  potion_duel_wins: number
  ecologist_kit_wins: number
  sw_duel_ecologist_kit_wins: number
  bridge_2v2v2v2_bridge_kills: number
  bridge_2v2v2v2_goals: number
  sw_duel: boolean
  sw_doubles_energix_kit_wins: number
  all_modes_gold_title_prestige: number
  duels_showqueuebook: boolean
  uhc_iron_title_prestige: number
  active_goal: string
  bridge_iron_title_prestige: number
  Duels_openedLegendaries: number
  active_projectile_trail: string
  op_duel: boolean
  op_doubles: boolean
  mw_doubles: boolean
  layout_bow_duel_layout: LayoutBowDuelLayout
  layout_mw_duel_herobrine: LayoutMwDuelHerobrine
  rematch_option_1: string
  kit_menu_option: string
  pingPreference: number
  combo_duel: boolean
  potion_duel: boolean
  mw_duel: boolean
  bridge_gold_title_prestige: number
  uhc_gold_title_prestige: number
  all_modes_diamond_title_prestige: number
  status_field: string
  bridge_diamond_title_prestige: number
  blitz_duel: boolean
  sw_doubles: boolean
  classic_duel: boolean
  challenges_enabled: boolean
  bridge_3v3v3v3_bow_shots: number
  bridge_3v3v3v3_wins: number
  bridge_3v3v3v3_bow_hits: number
  bridge_3v3v3v3_goals: number
  bridge_master_title_prestige: number
  active_killmessages: string
  all_modes_master_title_prestige: number
  bow_duel: boolean
  uhc_duel: boolean
  uhc_doubles: boolean
  layout_bridge_duel_layout: LayoutBridgeDuelLayout
  uhc_meetup_kills: number
  sumo_iron_title_prestige: number
  uhc_diamond_title_prestige: number
  active_weaponpacks: string
  potion_duel_deaths: number
  potion_duel_losses: number
  combo_duel_kills: number
  combo_duel_wins: number
  bridge_legend_title_prestige: number
  show_map_detail: string
  moved_to_redis: boolean
  parkour_rookie_title_prestige: number
  boxing_rookie_title_prestige: number
  moved_to_redis2: boolean
  parkour_eight_deaths: number
  parkour_eight_losses: number
  parkour_eight_rounds_played: number
  moved_to_redis3: boolean
  boxing_duel_kills: number
  boxing_duel_melee_hits: number
  boxing_duel_melee_swings: number
  boxing_duel_rounds_played: number
  boxing_duel_wins: number
  boxing_duel_losses: number
  moved_to_redis_2: boolean
  bridge_duel_golden_apples_eaten: number
  bridge_threes_blocks_placed: number
  bridge_threes_bow_shots: number
  bridge_threes_bridge_deaths: number
  bridge_threes_damage_dealt: number
  bridge_threes_goals: number
  bridge_threes_golden_apples_eaten: number
  bridge_threes_melee_hits: number
  bridge_threes_melee_swings: number
  bridge_threes_rounds_played: number
  bridge_threes_wins: number
  bridge_threes_bow_hits: number
  bridge_threes_bridge_kills: number
  bridge_threes_losses: number
  bridge_doubles_golden_apples_eaten: number
  moved_to_redis_3: boolean
  bridge_four_golden_apples_eaten: number
  active_kill_effect: string
  active_cosmetictitle: string
  progress_mode: string
  equipped_prefix_color: string
  toggle_proj_trail: string
  all_modes_legend_title_prestige: number
  parkour_eight_wins: number
  leaderboardSettings: LeaderboardSettings3
  mw_duel_golem_kit_wins: number
  mw_duel_kills: number
  mw_duel_kit_wins: number
  mw_duel_wins: number
  moleman_kit_wins: number
  mw_duel_moleman_kit_wins: number
  layout_op_duel_layout: LayoutOpDuelLayout
  privategames: Privategames4
}

export interface LayoutSwDuelKitRankedRankedArmorer {
  "0": string
  "1": string
  "3": string
  "4": string
  "5": string
  "6": string
  "9": string
}

export interface LayoutSwDuelKitAttackingTeamEnderman {
  "0": string
  "1": string
  "2": string
}

export interface LayoutUhcDuelLayout {
  "33": string
  "34": string
  "27": string
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
  "8": string
  "9": string
}

export interface LayoutBowDuelLayout {
  "0": string
  "1": string
  "9": string
}

export interface LayoutMwDuelHerobrine {
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
  "8": string
}

export interface LayoutBridgeDuelLayout {
  "0": string
  "1": string
  "2": string
  "4": string
  "6": string
  "7": string
  "8": string
  "32": string
}

export interface LeaderboardSettings3 {
  resetType: string
  mode: string
}

export interface LayoutOpDuelLayout {
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
  "8": string
  "9": string
}

export interface Privategames4 {
  duels_world_border: boolean
  duels_round_time: string
  duels_more_goals: string
  duels_only_tnt: boolean
  duels_enable_op: boolean
  duels_god_apple: string
  duels_change_weapon: string
}

export interface Walls {
  kills: number
  monthly_assists_b: number
  assists: number
  coins: number
  weekly_assists_a: number
  losses: number
  monthly_kills_b: number
  weekly_kills_a: number
  deaths: number
  monthly_assists_a: number
  wins: number
  weekly_wins_a: number
  monthly_wins_b: number
  monthly_wins_a: number
  weekly_wins_b: number
  weekly_kills_b: number
  monthly_kills_a: number
  packages: string[]
  hunter: number
  sage: number
  lazyman: number
  smart_boy: number
  fisherman: number
  ecologist: number
  ready: number
  snack_lover: number
  blacksmith_starter: number
  boss_guardian: number
  expert_miner: number
  weekly_assists_b: number
}

export interface Arena {
  win_streaks_2v2: number
  deaths_2v2: number
  coins: number
  losses_2v2: number
  damage_2v2: number
  healed_2v2: number
  games_2v2: number
  keys: number
  utility: string
  win_streaks_1v1: number
  deaths_1v1: number
  damage_1v1: number
  games_1v1: number
  losses_1v1: number
  healed_1v1: number
  offensive: string
}

export interface Housing {
  packages: string[]
  "layout_items_cfff6441-d2ec-4bfd-9a6d-8066aa291bde": LayoutItemsCfff6441D2ec4bfd9a6d8066aa291bde
  "layout_items_a18cdc18-a293-4ee8-ab16-358fb64e996d": LayoutItemsA18cdc18A2934ee8Ab16358fb64e996d
}

export interface LayoutItemsCfff6441D2ec4bfd9a6d8066aa291bde {
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
}

export interface LayoutItemsA18cdc18A2934ee8Ab16358fb64e996d {
  "22": string
  "0": string
  "1": string
  "24": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "8": string
}

export interface MainLobby {
  questNPCTutorials: QuestNpctutorials
  fishing: Fishing
  discoveredZones: DiscoveredZones
  packages: string[]
}

export interface QuestNpctutorials {
  dockmaster: boolean
  summer_guide_2022: boolean
  zone_labyrinth: boolean
  zone_mines: boolean
  achievement_guide: boolean
  zone_spawn: boolean
  zone_fishing_hut: boolean
  easter_guide_2023: boolean
  lava_fisherman: boolean
  summer_guide_2023: boolean
}

export interface Fishing {
  special_fish: SpecialFish
  stats: Stats2
  orbs: Orbs
  fireproofing: Fireproofing
}

export interface SpecialFish {
  hot_potato: boolean
  egg_the_fish: boolean
}

export interface Stats2 {
  permanent: Permanent
  "2023": N2023
}

export interface Permanent {
  water: Water
  individual: Individual
}

export interface Water {
  fish: number
  junk: number
  treasure: number
}

export interface Individual {
  junk: Junk
  fish: Fish
  treasure: Treasure
}

export interface Junk {
  stick: number
  broken_fishing_rod: number
  tripwire_hook: number
  lily_pad: number
  leather: number
  ink_sac: number
  rotten_flesh: number
  string: number
  water_bottle: number
  bone: number
  soggy_paper: number
  leather_boots: number
}

export interface Fish {
  clownfish: number
  salmon: number
  cod: number
  pufferfish: number
}

export interface Treasure {
  emerald: number
  saddle: number
  diamond: number
  enchanted_bow: number
  diamond_sword: number
  compass: number
  name_tag: number
}

export interface N2023 {
  easter: Easter
}

export interface Easter {
  water: Water2
}

export interface Water2 {
  junk: number
  fish: number
  treasure: number
}

export interface Orbs {
  nyx: number
  helios: number
  aphrodite: number
  selene: number
  zeus: number
}

export interface Fireproofing {
  scales: number
  flame: number
}

export interface DiscoveredZones {
  labyrinth: boolean
  mines: boolean
  fishing_hut: boolean
}

export interface WoolGames {
  progression: Progression
  wool_wars: WoolWars
  coins: number
  packages: string[]
  privategames: Privategames5
  preround_bow: string
  lastTourneyAd: number
}

export interface Progression {
  available_layers: number
  experience: number
}

export interface WoolWars {
  selected_class: string
  stats: Stats3
  layouts: Layouts
}

export interface Stats3 {
  assists: number
  blocks_broken: number
  classes: Classes3
  deaths: number
  games_played: number
  kills: number
  powerups_gotten: number
  wool_placed: number
  wins: number
  tourney: Tourney
}

export interface Classes3 {
  assault: Assault
  engineer: Engineer
  golem: Golem
  tank: Tank
  swordsman: Swordsman
  archer: Archer
}

export interface Assault {
  assists: number
  blocks_broken: number
  deaths: number
  kills: number
  powerups_gotten: number
  wool_placed: number
}

export interface Engineer {
  deaths: number
  blocks_broken: number
  kills: number
  powerups_gotten: number
  wool_placed: number
  assists: number
}

export interface Golem {
  deaths: number
  powerups_gotten: number
  blocks_broken: number
  wool_placed: number
  assists: number
  kills: number
}

export interface Tank {
  assists: number
  blocks_broken: number
  kills: number
  powerups_gotten: number
  wool_placed: number
  deaths: number
}

export interface Swordsman {
  blocks_broken: number
  wool_placed: number
  assists: number
  deaths: number
  kills: number
}

export interface Archer {
  assists: number
  blocks_broken: number
  deaths: number
  powerups_gotten: number
  kills: number
  wool_placed: number
}

export interface Tourney {
  wool_wars_0: WoolWars0
}

export interface WoolWars0 {
  assists: number
  deaths: number
  games_played: number
  powerups_gotten: number
  wins: number
  blocks_broken: number
  kills: number
  wool_placed: number
}

export interface Layouts {
  tank: Tank2
  swordsman: Swordsman2
  engineer: Engineer2
  assault: Assault2
  archer: Archer2
}

export interface Tank2 {
  "0": string
  "1": string
  "2": string
  "5": string
  "8": string
}

export interface Swordsman2 {
  "0": string
  "1": string
  "2": string
  "5": string
  "7": string
  "8": string
}

export interface Engineer2 {
  "0": string
  "1": string
  "2": string
  "3": string
  "5": string
  "6": string
  "7": string
  "8": string
}

export interface Assault2 {
  "0": string
  "1": string
  "2": string
  "3": string
  "5": string
  "6": string
  "7": string
  "8": string
}

export interface Archer2 {
  "0": string
  "1": string
  "2": string
  "5": string
  "6": string
  "7": string
  "8": string
}

export interface Privategames5 {
  no_powerups: boolean
  block_place: boolean
  no_class: boolean
  rainbow_wool: boolean
}

export interface Challenges2 {
  all_time: AllTime
  day_c: DayC
  day_d: DayD
  day_f: DayF
  day_g: DayG
  day_h: DayH
  day_i: DayI
}

export interface AllTime {
  SUPER_SMASH__leaderboard_challenge: number
  BEDWARS__support: number
  ARCADE__farm_hunt_challenge: number
  SUPER_SMASH__flawless_challenge: number
  SUPER_SMASH__smash_challenge: number
  BEDWARS__offensive: number
  ARCADE__zombies_challenge: number
  ARCADE__blocking_dead_challenge: number
  MURDER_MYSTERY__hero: number
  UHC__perfect_start_challenge: number
  UHC__threat_challenge: number
  WALLS__looting_challenge: number
  SURVIVAL_GAMES__star_challenge: number
  DUELS__feed_the_void_challenge: number
  DUELS__teams_challenge: number
  SKYWARS__feeding_the_void_challenge: number
  GINGERBREAD__coin_challenge: number
  DUELS__target_practice_challenge: number
  SPEED_UHC__wizard_challenge: number
  SKYWARS__enderman_challenge: number
  TNTGAMES__tnt_tag_challenge: number
  ARCADE__party_games_challenge: number
  SURVIVAL_GAMES__resistance_challenge: number
  MURDER_MYSTERY__murder_spree: number
  ARCADE__dragon_wars_challenge: number
  MURDER_MYSTERY__serial_killer: number
  SKYWARS__rush_challenge: number
  MCGO__knife_challenge: number
  BEDWARS__defensive: number
  SPEED_UHC__alchemist_challenge: number
  ARCADE__creeper_attack_challenge: number
  WALLS__powerhouse_challenge: number
  VAMPIREZ__last_stand_challenge: number
  MURDER_MYSTERY__sherlock: number
  VAMPIREZ__gold_challenge: number
  BUILD_BATTLE__top_3_challenge: number
  "QUAKECRAFT__don't_blink_challenge": number
  ARCADE__hole_in_the_wall_challenge: number
  ARCADE__mini_walls_challenge: number
  GINGERBREAD__banana_challenge: number
  GINGERBREAD__leaderboard_challenge: number
  ARCADE__football_challenge: number
  TNTGAMES__pvp_run_challenge: number
  SPEED_UHC__nether_challenge: number
  TNTGAMES__tnt_run_challenge: number
  TNTGAMES__bow_spleef_challenge: number
  ARENA__where_is_it_challenge: number
  BUILD_BATTLE__guesser_challenge: number
  MCGO__grenade_challenge: number
  PAINTBALL__killing_spree_challenge: number
  WOOL_GAMES__flawless_challenge: number
  BATTLEGROUND__capture_challenge: number
  WOOL_GAMES__builder_challenge: number
  WOOL_GAMES__merciless_killer_challenge: number
}

export interface DayC {
  BEDWARS__support: number
  BEDWARS__offensive: number
}

export interface DayD {
  BEDWARS__offensive: number
}

export interface DayF {
  BEDWARS__offensive: number
  BEDWARS__support: number
}

export interface DayG {
  BEDWARS__support: number
  BEDWARS__offensive: number
}

export interface DayH {
  DUELS__feed_the_void_challenge: number
  DUELS__teams_challenge: number
}

export interface DayI {
  BEDWARS__offensive: number
}

export interface Achievements {
  general_challenger: number
  supersmash_hero_slayer: number
  supersmash_smash_winner: number
  general_wins: number
  arcade_zombies_round_progression: number
  arcade_arcade_banker: number
  walls3_jack_of_all_trades: number
  walls3_coins: number
  general_coins: number
  bedwars_level: number
  bedwars_bedwars_killer: number
  bedwars_collectors_edition: number
  bedwars_wins: number
  walls3_rusher: number
  arcade_arcade_winner: number
  arcade_farmhunt_dominator: number
  bedwars_beds: number
  supersmash_smash_champion: number
  skyclash_cards_unlocked: number
  walls3_guardian: number
  walls3_kills: number
  halloween2017_pumpkinator: number
  arcade_zombie_killer: number
  skywars_cages: number
  copsandcrims_cac_banker: number
  copsandcrims_headshot_kills: number
  copsandcrims_serial_killer: number
  bedwars_loot_box: number
  buildbattle_build_battle_voter: number
  buildbattle_build_battle_points: number
  buildbattle_build_battle_score: number
  murdermystery_hoarder: number
  murdermystery_wins_as_survivor: number
  tntgames_tnt_banker: number
  tntgames_tnt_triathlon: number
  truecombat_feels_lucky: number
  truecombat_team_killer: number
  christmas2017_no_christmas: number
  christmas2017_santa_says_rounds: number
  murdermystery_kills_as_murderer: number
  uhc_bounty: number
  arena_climb_the_ranks: number
  skyblock_treasury: number
  skyblock_minion_lover: number
  skyblock_harvester: number
  skyblock_gatherer: number
  skyblock_excavator: number
  skyblock_combat: number
  skyblock_augmentation: number
  copsandcrims_hero_terrorist: number
  duels_duels_traveller: number
  blitz_looter: number
  blitz_coins: number
  blitz_fighting_expert: number
  blitz_kills: number
  blitz_kit_expert: number
  blitz_kit_experience_collector: number
  skyblock_concoctor: number
  arcade_zombies_nice_shot: number
  walls_coins: number
  walls_kills: number
  supersmash_handyman: number
  duels_duels_win_streak: number
  duels_duels_winner: number
  blitz_treasure_seeker: number
  arcade_bounty_hunter: number
  duels_bridge_duels_wins: number
  duels_bridge_wins: number
  duels_unique_map_wins: number
  duels_goals: number
  skywars_kills_team: number
  paintball_coins: number
  paintball_kills: number
  duels_bridge_doubles_wins: number
  skywars_kills_solo: number
  skywars_wins_lab: number
  warlords_assist: number
  warlords_coins: number
  warlords_kills: number
  duels_duels_division: number
  skyblock_angler: number
  tntgames_tnt_run_wins: number
  gingerbread_mystery: number
  gingerbread_racer: number
  gingerbread_banker: number
  skywars_wins_team: number
  speeduhc_hunter: number
  speeduhc_promotion: number
  speeduhc_uhc_master: number
  tntgames_block_runner: number
  skywars_wins_solo: number
  skywars_kits_team: number
  general_quest_master: number
  duels_bridge_win_streak: number
  skywars_heads: number
  duels_bridge_teams_wins: number
  tntgames_clinic: number
  arcade_football_pro: number
  blitz_mob_master: number
  vampirez_coins: number
  vampirez_kill_survivors: number
  skywars_kits_solo: number
  vampirez_zombie_killer: number
  buildbattle_guess_the_build_guesses: number
  copsandcrims_bomb_specialist: number
  christmas2017_present_collector: number
  christmas2017_advent_2019: number
  skyblock_unique_gifts: number
  vampirez_kill_vampires: number
  arcade_zombies_high_round: number
  quake_coins: number
  quake_kills: number
  quake_headshots: number
  quake_wins: number
  easter_egg_finder: number
  easter_throw_eggs: number
  arcade_team_work: number
  vampirez_survivor_wins: number
  murdermystery_wins_as_murderer: number
  easter_master_tracker: number
  pit_gold: number
  pit_kills: number
  walls_wins: number
  blitz_kit_collector: number
  skyblock_domesticator: number
  skyblock_slayer: number
  summer_shopaholic: number
  summer_treasure_hoarder: number
  blitz_ranged_combat: number
  tntgames_pvp_run_killer: number
  uhc_hunter: number
  uhc_moving_up: number
  skywars_you_re_a_star: number
  skyblock_treasure_hunter: number
  skyblock_dungeoneer: number
  gingerbread_winner: number
  arcade_ctw_slayer: number
  arcade_ctw_oh_sheep: number
  halloween2017_candy_hoarder: number
  blitz_wins_teams: number
  christmas2017_advent_2020: number
  speeduhc_collector: number
  paintball_wins: number
  uhc_ultimatum: number
  skywars_kills_mega: number
  pit_events: number
  duels_bridge_four_teams_wins: number
  skyblock_hard_working_miner: number
  skyblock_goblin_killer: number
  tntgames_pvp_run_wins: number
  tntgames_bow_spleef_wins: number
  tntgames_tnt_wizards_kills: number
  tntgames_tnt_wizards_caps: number
  murdermystery_brainiac: number
  murdermystery_countermeasures: number
  murdermystery_hitman: number
  murdermystery_survival_skills: number
  arcade_hide_and_seek_hider_kills: number
  bedwars_bedwars_challenger: number
  duels_duels_mastery: number
  christmas2017_advent_2021: number
  arcade_dw_slayer: number
  arcade_throw_out_kills: number
  arcade_party_super_star: number
  general_trashiest_diver: number
  general_master_lure: number
  arena_powerup: number
  woolgames_wool_contest: number
  woolgames_wool_kills: number
  arcade_miniwalls_winner: number
  christmas2017_advent_2022: number
  arcade_pixel_party_color_coordinated: number
  skyblock_people_pleaser: number
  skyblock_curator: number
  skyblock_sb_levels: number
  paintball_kill_streaks: number
  general_luckiest_of_the_sea: number
  woolgames_wool_wins: number
  tntgames_wizards_wins: number
  copsandcrims_grenade_kills: number
  arcade_dw_dragonborn: number
  walls_diamond_miner: number
  buildbattle_guess_the_build_winner: number
  skywars_new_day_new_challenge: number
  warlords_mage_level: number
  arcade_ender_spleef_powerups: number
  arcade_ender_spleef_block_stealer: number
  arcade_hide_and_seek_master_hider: number
  quake_weapon_arsenal: number
  quake_killing_sprees: number
  warlords_ctf_objective: number
  skyblock_divans_treasures: number
  skyblock_crystal_nucleus: number
  woolgames_mountain_of_wool: number
  tntgames_tnt_tag_wins: number
  arcade_pixel_party_powered_up: number
  christmas2017_advent_2023: number
  bedwars_slumber_ticket_master: number
}

export interface PetConsumables {
  MUSHROOM_SOUP: number
  FEATHER: number
  HAY_BLOCK: number
  ROTTEN_FLESH: number
  SLIME_BALL: number
  RAW_FISH: number
  CAKE: number
  RED_ROSE: number
  WATER_BUCKET: number
  WOOD_SWORD: number
  MILK_BUCKET: number
  LAVA_BUCKET: number
  BONE: number
  MAGMA_CREAM: number
  CARROT_ITEM: number
  LEASH: number
  APPLE: number
  BAKED_POTATO: number
  COOKED_BEEF: number
  STICK: number
  GOLD_RECORD: number
  BREAD: number
  PUMPKIN_PIE: number
  COOKIE: number
  WHEAT: number
  PORK: number
  MELON: number
}

export interface VanityMeta {
  packages: string[]
}

export interface HousingMeta {
  allowedBlocks: string[]
  firstHouseJoinMs: number
  tutorialStep: string
  packages: string[]
  given_cookies_105016: string[]
  given_cookies_105032: string[]
  plotSize: string
  given_cookies_105056: string[]
  playerSettings: PlayerSettings
  given_cookies_105057: string[]
  given_cookies_105058: string[]
  given_cookies_105060: string[]
  given_cookies_105061: string[]
  given_cookies_105062: string[]
  given_cookies_105063: string[]
  given_cookies_105065: string[]
  given_cookies_105066: string[]
  given_cookies_105067: string[]
  selectedChannels_v3: string[]
  given_cookies_105077: string[]
  given_cookies_105079: string[]
  given_cookies_105081: string[]
  given_cookies_105082: string[]
  given_cookies_105084: string[]
  given_cookies_105086: string[]
  given_cookies_105093: string[]
  given_cookies_105099: string[]
  given_cookies_105105: string[]
  given_cookies_105118: string[]
  playlist: string
  given_cookies_105126: string[]
  given_cookies_105128: string[]
  given_cookies_105131: string[]
  given_cookies_105169: string[]
  given_cookies_105200: string[]
  given_cookies_105202: string[]
  given_cookies_105206: string[]
  given_cookies_105223: string[]
  given_cookies_105232: string[]
}

export interface PlayerSettings {
  VISIBILITY: string
  BORDER: string
}

export interface AchievementSync {
  quake_tiered: number
}

export interface Tourney2 {
  first_join_lobby: number
  mcgo_defusal_0: McgoDefusal0
  total_tributes: number
  bedwars_two_four_0: BedwarsTwoFour0
  sw_insane_doubles_0: SwInsaneDoubles0
  bedwars4s_1: Bedwars4s1
  shop_sort: string
  gingerbread_solo_0: GingerbreadSolo0
  blitz_duo_1: BlitzDuo1
  tnt_run_0: TntRun0
  sw_insane_doubles_1: SwInsaneDoubles1
  mini_walls_0: MiniWalls0
  blitz_duo_2: BlitzDuo2
  wool_wars_0: WoolWars02
  bedwars_eight_two_1: BedwarsEightTwo1
  grinch_simulator_1: GrinchSimulator1
}

export interface McgoDefusal0 {
  seenRPbook: boolean
  playtime: number
  first_win: number
  tributes_earned: number
}

export interface BedwarsTwoFour0 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
}

export interface SwInsaneDoubles0 {
  games_played: number
  playtime: number
  tributes_earned: number
}

export interface Bedwars4s1 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
}

export interface GingerbreadSolo0 {
  seenRPbook: boolean
  games_played: number
  playtime: number
  first_win: number
  tributes_earned: number
}

export interface BlitzDuo1 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
}

export interface TntRun0 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
}

export interface SwInsaneDoubles1 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
}

export interface MiniWalls0 {
  games_played: number
  playtime: number
  first_win: number
  tributes_earned: number
}

export interface BlitzDuo2 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
}

export interface WoolWars02 {
  games_played: number
  playtime: number
  first_win: number
  tributes_earned: number
}

export interface BedwarsEightTwo1 {
  games_played: number
  playtime: number
  tributes_earned: number
  first_win: number
  claimed_ranking_reward: number
}

export interface GrinchSimulator1 {
  games_played: number
  playtime: number
  tributes_earned: number
}

export interface ParkourCheckpointBests {
  Bedwars: Bedwars2
  Duels: Duels2
  ArcadeGames: ArcadeGames
  MurderMystery: MurderMystery2
  Prototype: Prototype
  Housing: Housing2
  SkywarsAug2017: SkywarsAug2017
}

export interface Bedwars2 {
  "0": number
  "1": number
  "2": number
  "3": number
}

export interface Duels2 {
  "0": number
  "1": number
  "2": number
  "3": number
}

export interface ArcadeGames {
  "0": number
  "1": number
  "2": number
  "3": number
}

export interface MurderMystery2 {
  "0": number
  "1": number
  "2": number
}

export interface Prototype {
  "0": number
  "1": number
}

export interface Housing2 {
  "0": number
  "1": number
  "2": number
}

export interface SkywarsAug2017 {
  "0": number
  "1": number
  "2": number
  "3": number
}

export interface ParkourCompletions {
  Bedwars: Bedwar[]
  Duels: Duel[]
  SkywarsAug2017: SkywarsAug20172[]
}

export interface Bedwar {
  timeStart: number
  timeTook: number
}

export interface Duel {
  timeStart: number
  timeTook: number
}

export interface SkywarsAug20172 {
  timeStart: number
  timeTook: number
}

export interface Eugene {
  dailyTwoKExp: number
}

export interface AchievementRewardsNew {
  for_points_1000: number
  for_points_1400: number
  for_points_200: number
  for_points_600: number
  for_points_300: number
  for_points_400: number
  for_points_500: number
  for_points_700: number
  for_points_800: number
  for_points_900: number
  for_points_1100: number
  for_points_1200: number
  for_points_1300: number
  for_points_1500: number
  for_points_4200: number
  for_points_4100: number
  for_points_4000: number
  for_points_3900: number
  for_points_3800: number
  for_points_3700: number
  for_points_3600: number
  for_points_3500: number
  for_points_3300: number
  for_points_3200: number
  for_points_3400: number
  for_points_4500: number
  for_points_4300: number
  for_points_4400: number
  for_points_4600: number
  for_points_4700: number
  for_points_4900: number
  for_points_5000: number
  for_points_4800: number
  for_points_5100: number
  for_points_5200: number
  for_points_5300: number
  for_points_5400: number
  for_points_5500: number
  for_points_5600: number
  for_points_3000: number
  for_points_3100: number
  for_points_2900: number
  for_points_2800: number
  for_points_2700: number
  for_points_2600: number
  for_points_2500: number
  for_points_2300: number
  for_points_2200: number
  for_points_2400: number
  for_points_2100: number
  for_points_2000: number
  for_points_1900: number
  for_points_1700: number
  for_points_1800: number
  for_points_1600: number
  for_points_5700: number
  for_points_5800: number
  for_points_5900: number
  for_points_6000: number
  for_points_6100: number
  for_points_6200: number
  for_points_6300: number
  for_points_6400: number
  for_points_6500: number
  for_points_6600: number
  for_points_6700: number
  for_points_6800: number
  for_points_6900: number
  for_points_7000: number
  for_points_7100: number
  for_points_7200: number
  for_points_7300: number
  for_points_7400: number
  for_points_7500: number
  for_points_7600: number
  for_points_7700: number
  for_points_7800: number
  for_points_7900: number
  for_points_8000: number
  for_points_8100: number
  for_points_8200: number
  for_points_8300: number
  for_points_8400: number
  for_points_8500: number
  for_points_8600: number
  for_points_8700: number
  for_points_8800: number
  for_points_8900: number
  for_points_9000: number
}

export interface Quests {
  duels_player: DuelsPlayer
  duels_killer: DuelsKiller
  skywars_arcade_win: SkywarsArcadeWin
  prototype_pit_daily_kills: PrototypePitDailyKills
  skywars_team_kills: SkywarsTeamKills
  skywars_solo_kills: SkywarsSoloKills
  duels_weekly_kills: DuelsWeeklyKills
  duels_winner: DuelsWinner
  duels_weekly_wins: DuelsWeeklyWins
  bedwars_weekly_bed_elims: BedwarsWeeklyBedElims
  bedwars_daily_nightmares: BedwarsDailyNightmares
  bedwars_weekly_pumpkinator: BedwarsWeeklyPumpkinator
  skywars_halloween_harvest_2019: SkywarsHalloweenHarvest2019
  skywars_daily_tokens: SkywarsDailyTokens
  skywars_weekly_free_loot_chest: SkywarsWeeklyFreeLootChest
  skywars_corrupt_win: SkywarsCorruptWin
  skywars_weekly_kills: SkywarsWeeklyKills
  skywars_team_win: SkywarsTeamWin
  skywars_solo_win: SkywarsSoloWin
  skywars_weekly_arcade_win_all: SkywarsWeeklyArcadeWinAll
  bedwars_daily_one_more: BedwarsDailyOneMore
  bedwars_weekly_dream_win: BedwarsWeeklyDreamWin
  bedwars_daily_win: BedwarsDailyWin
  walls_daily_kill: WallsDailyKill
  walls_daily_win: WallsDailyWin
  walls_weekly: WallsWeekly
  walls_daily_play: WallsDailyPlay
  quake_daily_win: QuakeDailyWin
  quake_daily_kill: QuakeDailyKill
  paintball_expert: PaintballExpert
  arena_daily_wins: ArenaDailyWins
  arena_weekly_play: ArenaWeeklyPlay
  paintball_killer: PaintballKiller
  quake_weekly_play: QuakeWeeklyPlay
  vampirez_daily_human_kill: VampirezDailyHumanKill
  paintballer: Paintballer
  vampirez_daily_play: VampirezDailyPlay
  quake_daily_play: QuakeDailyPlay
  vampirez_weekly_kill: VampirezWeeklyKill
  vampirez_weekly_win: VampirezWeeklyWin
  vampirez_daily_kill: VampirezDailyKill
  arena_daily_kills: ArenaDailyKills
  gingerbread_bling_bling: GingerbreadBlingBling
  gingerbread_mastery: GingerbreadMastery
  arena_daily_play: ArenaDailyPlay
  gingerbread_maps: GingerbreadMaps
  gingerbread_racer: GingerbreadRacer
  vampirez_daily_win: VampirezDailyWin
  vampirez_weekly_human_kill: VampirezWeeklyHumanKill
  prototype_pit_daily_contract: PrototypePitDailyContract
  prototype_pit_weekly_gold: PrototypePitWeeklyGold
  arcade_gamer: ArcadeGamer
  arcade_winner: ArcadeWinner
  arcade_specialist: ArcadeSpecialist
  tnt_wizards_daily: TntWizardsDaily
  tnt_wizards_weekly: TntWizardsWeekly
  tnt_tnttag_weekly: TntTnttagWeekly
  tnt_weekly_play: TntWeeklyPlay
  tnt_bowspleef_daily: TntBowspleefDaily
  tnt_pvprun_daily: TntPvprunDaily
  tnt_bowspleef_weekly: TntBowspleefWeekly
  tnt_pvprun_weekly: TntPvprunWeekly
  tnt_daily_win: TntDailyWin
  tnt_tnttag_daily: TntTnttagDaily
  tnt_tntrun_weekly: TntTntrunWeekly
  tnt_tntrun_daily: TntTntrunDaily
  cvc_kill_daily_normal: CvcKillDailyNormal
  cvc_kill_weekly: CvcKillWeekly
  cvc_win_daily_deathmatch: CvcWinDailyDeathmatch
  cvc_win_daily_normal: CvcWinDailyNormal
  cvc_kill: CvcKill
  blitz_weekly_master: BlitzWeeklyMaster
  blitz_game_of_the_day: BlitzGameOfTheDay
  blitz_loot_chest_weekly: BlitzLootChestWeekly
  blitz_win: BlitzWin
  blitz_loot_chest_daily: BlitzLootChestDaily
  blitz_kills: BlitzKills
  bedwars_daily_gifts: BedwarsDailyGifts
  mm_daily_win: MmDailyWin
  mm_daily_power_play: MmDailyPowerPlay
  mm_weekly_wins: MmWeeklyWins
  mm_daily_target_kill: MmDailyTargetKill
  mm_weekly_murderer_kills: MmWeeklyMurdererKills
  mm_special_weekly_santa: MmSpecialWeeklySanta
  solo_brawler: SoloBrawler
  uhc_team: UhcTeam
  uhc_weekly: UhcWeekly
  team_brawler: TeamBrawler
  uhc_weekly_special_cookie: UhcWeeklySpecialCookie
  uhc_solo: UhcSolo
  uhc_madness: UhcMadness
  uhc_dm: UhcDm
  skywars_special_north_pole: SkywarsSpecialNorthPole
  tnt_weekly_special: TntWeeklySpecial
  supersmash_solo_win: SupersmashSoloWin
  supersmash_team_win: SupersmashTeamWin
  supersmash_team_kills: SupersmashTeamKills
  supersmash_solo_kills: SupersmashSoloKills
  supersmash_weekly_kills: SupersmashWeeklyKills
  warlords_objectives: WarlordsObjectives
  warlords_all_star: WarlordsAllStar
  warlords_tdm: WarlordsTdm
  warlords_dedication: WarlordsDedication
  warlords_victorious: WarlordsVictorious
  warlords_domination: WarlordsDomination
  warlords_ctf: WarlordsCtf
  build_battle_player: BuildBattlePlayer
  build_battle_weekly: BuildBattleWeekly
  build_battle_winner: BuildBattleWinner
  mega_walls_weekly: MegaWallsWeekly
  mega_walls_play: MegaWallsPlay
  mega_walls_faithful: MegaWallsFaithful
  mega_walls_kill: MegaWallsKill
  mega_walls_win: MegaWallsWin
  mm_special_weekly_killer_instinct_2020: MmSpecialWeeklyKillerInstinct2020
  skywars_halloween_harvest_2020: SkywarsHalloweenHarvest2020
  blitz_special_daily_north_pole: BlitzSpecialDailyNorthPole
  build_battle_christmas: BuildBattleChristmas
  build_battle_christmas_weekly: BuildBattleChristmasWeekly
  mm_daily_infector: MmDailyInfector
  mm_special_weekly_killer_instinct_2021: MmSpecialWeeklyKillerInstinct2021
  build_battle_halloween: BuildBattleHalloween
  skywars_halloween_harvest_2021: SkywarsHalloweenHarvest2021
  bedwars_weekly_challenges: BedwarsWeeklyChallenges
  wool_wars_daily_play: WoolWarsDailyPlay
  wool_wars_daily_wins: WoolWarsDailyWins
  wool_wars_daily_kills: WoolWarsDailyKills
  wool_weekly_play: WoolWeeklyPlay
  wool_wars_weekly_shears: WoolWarsWeeklyShears
  skywars_halloween_harvest_2022: SkywarsHalloweenHarvest2022
  pit_daily_contract: PitDailyContract
  pit_weekly_gold: PitWeeklyGold
  pit_daily_kills: PitDailyKills
  bedwars_daily_bed_breaker: BedwarsDailyBedBreaker
  bedwars_weekly_challenges_win: BedwarsWeeklyChallengesWin
  bedwars_daily_final_killer: BedwarsDailyFinalKiller
  bedwars_weekly_final_killer: BedwarsWeeklyFinalKiller
  skywars_halloween_harvest_2023: SkywarsHalloweenHarvest2023
  mm_special_weekly_killer_instinct_2023: MmSpecialWeeklyKillerInstinct2023
}

export interface DuelsPlayer {
  completions: Completion[]
  active: Active
}

export interface Completion {
  time: number
}

export interface Active {
  objectives: Objectives
  started: number
}

export interface Objectives {}

export interface DuelsKiller {
  completions: Completion2[]
  active: Active2
}

export interface Completion2 {
  time: number
}

export interface Active2 {
  objectives: Objectives2
  started: number
}

export interface Objectives2 {}

export interface SkywarsArcadeWin {
  completions: Completion3[]
  active: Active3
}

export interface Completion3 {
  time: number
}

export interface Active3 {
  objectives: Objectives3
  started: number
}

export interface Objectives3 {}

export interface PrototypePitDailyKills {
  completions: Completion4[]
  active: Active4
}

export interface Completion4 {
  time: number
}

export interface Active4 {
  objectives: Objectives4
  started: number
}

export interface Objectives4 {
  kill: number
}

export interface SkywarsTeamKills {
  completions: Completion5[]
  active: Active5
}

export interface Completion5 {
  time: number
}

export interface Active5 {
  objectives: Objectives5
  started: number
}

export interface Objectives5 {
  skywars_team_kills: number
}

export interface SkywarsSoloKills {
  completions: Completion6[]
  active: Active6
}

export interface Completion6 {
  time: number
}

export interface Active6 {
  objectives: Objectives6
  started: number
}

export interface Objectives6 {
  skywars_solo_kills: number
}

export interface DuelsWeeklyKills {
  completions: Completion7[]
}

export interface Completion7 {
  time: number
}

export interface DuelsWinner {
  completions: Completion8[]
  active: Active7
}

export interface Completion8 {
  time: number
}

export interface Active7 {
  objectives: Objectives7
  started: number
}

export interface Objectives7 {}

export interface DuelsWeeklyWins {
  completions: Completion9[]
}

export interface Completion9 {
  time: number
}

export interface BedwarsWeeklyBedElims {
  completions: Completion10[]
}

export interface Completion10 {
  time: number
}

export interface BedwarsDailyNightmares {
  completions: Completion11[]
}

export interface Completion11 {
  time: number
}

export interface BedwarsWeeklyPumpkinator {
  completions: Completion12[]
}

export interface Completion12 {
  time: number
}

export interface SkywarsHalloweenHarvest2019 {
  active: Active8
}

export interface Active8 {
  objectives: Objectives8
  started: number
}

export interface Objectives8 {
  skywars_halloween_kills: number
}

export interface SkywarsDailyTokens {
  completions: Completion13[]
  active: Active9
}

export interface Completion13 {
  time: number
}

export interface Active9 {
  objectives: Objectives9
  started: number
}

export interface Objectives9 {}

export interface SkywarsWeeklyFreeLootChest {
  completions: Completion14[]
  active: Active10
}

export interface Completion14 {
  time: number
}

export interface Active10 {
  objectives: Objectives10
  started: number
}

export interface Objectives10 {
  skywars_free_loot_chest_win: number
}

export interface SkywarsCorruptWin {
  completions: Completion15[]
  active: Active11
}

export interface Completion15 {
  time: number
}

export interface Active11 {
  objectives: Objectives11
  started: number
}

export interface Objectives11 {}

export interface SkywarsWeeklyKills {
  completions: Completion16[]
  active: Active12
}

export interface Completion16 {
  time: number
}

export interface Active12 {
  objectives: Objectives12
  started: number
}

export interface Objectives12 {
  skywars_weekly_kills: number
}

export interface SkywarsTeamWin {
  completions: Completion17[]
  active: Active13
}

export interface Completion17 {
  time: number
}

export interface Active13 {
  objectives: Objectives13
  started: number
}

export interface Objectives13 {}

export interface SkywarsSoloWin {
  completions: Completion18[]
  active: Active14
}

export interface Completion18 {
  time: number
}

export interface Active14 {
  objectives: Objectives14
  started: number
}

export interface Objectives14 {}

export interface SkywarsWeeklyArcadeWinAll {
  active: Active15
}

export interface Active15 {
  objectives: Objectives15
  started: number
}

export interface Objectives15 {
  skywars_arcade_weekly_win: number
}

export interface BedwarsDailyOneMore {
  completions: Completion19[]
}

export interface Completion19 {
  time: number
}

export interface BedwarsWeeklyDreamWin {
  completions: Completion20[]
}

export interface Completion20 {
  time: number
}

export interface BedwarsDailyWin {
  completions: Completion21[]
}

export interface Completion21 {
  time: number
}

export interface WallsDailyKill {
  active: Active16
}

export interface Active16 {
  objectives: Objectives16
  started: number
}

export interface Objectives16 {
  walls_daily_kill: number
}

export interface WallsDailyWin {
  completions: Completion22[]
  active: Active17
}

export interface Completion22 {
  time: number
}

export interface Active17 {
  objectives: Objectives17
  started: number
}

export interface Objectives17 {}

export interface WallsWeekly {
  active: Active18
}

export interface Active18 {
  objectives: Objectives18
  started: number
}

export interface Objectives18 {
  walls_weekly_play: number
  walls_weekly_kills: number
}

export interface WallsDailyPlay {
  completions: Completion23[]
  active: Active19
}

export interface Completion23 {
  time: number
}

export interface Active19 {
  objectives: Objectives19
  started: number
}

export interface Objectives19 {}

export interface QuakeDailyWin {
  completions: Completion24[]
  active: Active20
}

export interface Completion24 {
  time: number
}

export interface Active20 {
  objectives: Objectives20
  started: number
}

export interface Objectives20 {}

export interface QuakeDailyKill {
  completions: Completion25[]
  active: Active21
}

export interface Completion25 {
  time: number
}

export interface Active21 {
  objectives: Objectives21
  started: number
}

export interface Objectives21 {}

export interface PaintballExpert {
  active: Active22
}

export interface Active22 {
  objectives: Objectives22
  started: number
}

export interface Objectives22 {
  kill: number
  play: number
}

export interface ArenaDailyWins {
  active: Active23
}

export interface Active23 {
  objectives: Objectives23
  started: number
}

export interface Objectives23 {}

export interface ArenaWeeklyPlay {
  active: Active24
}

export interface Active24 {
  objectives: Objectives24
  started: number
}

export interface Objectives24 {
  arena_weekly_play: number
}

export interface PaintballKiller {
  active: Active25
}

export interface Active25 {
  objectives: Objectives25
  started: number
}

export interface Objectives25 {
  kill: number
}

export interface QuakeWeeklyPlay {
  active: Active26
}

export interface Active26 {
  objectives: Objectives26
  started: number
}

export interface Objectives26 {
  quake_weekly_play: number
  quake_weekly_streak: number
}

export interface VampirezDailyHumanKill {
  active: Active27
}

export interface Active27 {
  objectives: Objectives27
  started: number
}

export interface Objectives27 {
  vampirez_daily_kill_human: number
}

export interface Paintballer {
  completions: Completion26[]
  active: Active28
}

export interface Completion26 {
  time: number
}

export interface Active28 {
  objectives: Objectives28
  started: number
}

export interface Objectives28 {}

export interface VampirezDailyPlay {
  completions: Completion27[]
}

export interface Completion27 {
  time: number
}

export interface QuakeDailyPlay {
  completions: Completion28[]
  active: Active29
}

export interface Completion28 {
  time: number
}

export interface Active29 {
  objectives: Objectives29
  started: number
}

export interface Objectives29 {
  quake_daily_play: number
}

export interface VampirezWeeklyKill {
  active: Active30
}

export interface Active30 {
  objectives: Objectives30
  started: number
}

export interface Objectives30 {
  vampirez_weekly_kill_vampire: number
  vampirez_weekly_kill_zombie: number
}

export interface VampirezWeeklyWin {
  active: Active31
}

export interface Active31 {
  objectives: Objectives31
  started: number
}

export interface Objectives31 {
  vampirez_weekly_win_survivor: number
}

export interface VampirezDailyKill {
  completions: Completion29[]
  active: Active32
}

export interface Completion29 {
  time: number
}

export interface Active32 {
  objectives: Objectives32
  started: number
}

export interface Objectives32 {
  vampirez_daily_kill_vampire: number
  vampirez_daily_kill_zombie: number
}

export interface ArenaDailyKills {
  active: Active33
}

export interface Active33 {
  objectives: Objectives33
  started: number
}

export interface Objectives33 {}

export interface GingerbreadBlingBling {
  completions: Completion30[]
  active: Active34
}

export interface Completion30 {
  time: number
}

export interface Active34 {
  objectives: Objectives34
  started: number
}

export interface Objectives34 {}

export interface GingerbreadMastery {
  active: Active35
}

export interface Active35 {
  objectives: Objectives35
  started: number
}

export interface Objectives35 {
  gingerbread_races_completed: number
}

export interface ArenaDailyPlay {
  completions: Completion31[]
  active: Active36
}

export interface Completion31 {
  time: number
}

export interface Active36 {
  objectives: Objectives36
  started: number
}

export interface Objectives36 {
  arena_daily_play: number
}

export interface GingerbreadMaps {
  active: Active37
}

export interface Active37 {
  objectives: Objectives37
  started: number
}

export interface Objectives37 {
  gingerbread_races_completed: number
}

export interface GingerbreadRacer {
  completions: Completion32[]
  active: Active38
}

export interface Completion32 {
  time: number
}

export interface Active38 {
  objectives: Objectives38
  started: number
}

export interface Objectives38 {
  gingerbread_laps_completed: number
}

export interface VampirezDailyWin {
  completions: Completion33[]
  active: Active39
}

export interface Completion33 {
  time: number
}

export interface Active39 {
  objectives: Objectives39
  started: number
}

export interface Objectives39 {}

export interface VampirezWeeklyHumanKill {
  active: Active40
}

export interface Active40 {
  objectives: Objectives40
  started: number
}

export interface Objectives40 {
  vampirez_weekly_kill_survivor: number
}

export interface PrototypePitDailyContract {
  active: Active41
}

export interface Active41 {
  objectives: Objectives41
  started: number
}

export interface Objectives41 {}

export interface PrototypePitWeeklyGold {
  completions: Completion34[]
  active: Active42
}

export interface Completion34 {
  time: number
}

export interface Active42 {
  objectives: Objectives42
  started: number
}

export interface Objectives42 {
  prototype_pit_weekly_gold: number
}

export interface ArcadeGamer {
  completions: Completion35[]
}

export interface Completion35 {
  time: number
}

export interface ArcadeWinner {
  completions: Completion36[]
  active: Active43
}

export interface Completion36 {
  time: number
}

export interface Active43 {
  objectives: Objectives43
  started: number
}

export interface Objectives43 {}

export interface ArcadeSpecialist {
  completions: Completion37[]
  active: Active44
}

export interface Completion37 {
  time: number
}

export interface Active44 {
  objectives: Objectives44
  started: number
}

export interface Objectives44 {
  play: number
}

export interface TntWizardsDaily {
  active: Active45
}

export interface Active45 {
  objectives: Objectives45
  started: number
}

export interface Objectives45 {
  tnt_wizards_daily_kills: number
}

export interface TntWizardsWeekly {
  active: Active46
}

export interface Active46 {
  objectives: Objectives46
  started: number
}

export interface Objectives46 {
  tnt_wizards_weekly_kills: number
}

export interface TntTnttagWeekly {
  completions: Completion38[]
  active: Active47
}

export interface Completion38 {
  time: number
}

export interface Active47 {
  objectives: Objectives47
  started: number
}

export interface Objectives47 {
  tnt_tnttag_weekly: number
}

export interface TntWeeklyPlay {
  completions: Completion39[]
  active: Active48
}

export interface Completion39 {
  time: number
}

export interface Active48 {
  objectives: Objectives48
  started: number
}

export interface Objectives48 {
  tnt_weekly_play: number
}

export interface TntBowspleefDaily {
  completions: Completion40[]
  active: Active49
}

export interface Completion40 {
  time: number
}

export interface Active49 {
  objectives: Objectives49
  started: number
}

export interface Objectives49 {}

export interface TntPvprunDaily {
  completions: Completion41[]
  active: Active50
}

export interface Completion41 {
  time: number
}

export interface Active50 {
  objectives: Objectives50
  started: number
}

export interface Objectives50 {
  tnt_pvprun_daily: number
}

export interface TntBowspleefWeekly {
  completions: Completion42[]
  active: Active51
}

export interface Completion42 {
  time: number
}

export interface Active51 {
  objectives: Objectives51
  started: number
}

export interface Objectives51 {}

export interface TntPvprunWeekly {
  completions: Completion43[]
  active: Active52
}

export interface Completion43 {
  time: number
}

export interface Active52 {
  objectives: Objectives52
  started: number
}

export interface Objectives52 {
  tnt_pvprun_weekly: number
}

export interface TntDailyWin {
  completions: Completion44[]
  active: Active53
}

export interface Completion44 {
  time: number
}

export interface Active53 {
  objectives: Objectives53
  started: number
}

export interface Objectives53 {}

export interface TntTnttagDaily {
  completions: Completion45[]
  active: Active54
}

export interface Completion45 {
  time: number
}

export interface Active54 {
  objectives: Objectives54
  started: number
}

export interface Objectives54 {}

export interface TntTntrunWeekly {
  completions: Completion46[]
  active: Active55
}

export interface Completion46 {
  time: number
}

export interface Active55 {
  objectives: Objectives55
  started: number
}

export interface Objectives55 {}

export interface TntTntrunDaily {
  completions: Completion47[]
  active: Active56
}

export interface Completion47 {
  time: number
}

export interface Active56 {
  objectives: Objectives56
  started: number
}

export interface Objectives56 {}

export interface CvcKillDailyNormal {
  completions: Completion48[]
  active: Active57
}

export interface Completion48 {
  time: number
}

export interface Active57 {
  objectives: Objectives57
  started: number
}

export interface Objectives57 {}

export interface CvcKillWeekly {
  active: Active58
}

export interface Active58 {
  objectives: Objectives58
  started: number
}

export interface Objectives58 {
  cvc_play_weekly: number
  cvc_play_weekly_2: number
}

export interface CvcWinDailyDeathmatch {
  active: Active59
}

export interface Active59 {
  objectives: Objectives59
  started: number
}

export interface Objectives59 {}

export interface CvcWinDailyNormal {
  completions: Completion49[]
  active: Active60
}

export interface Completion49 {
  time: number
}

export interface Active60 {
  objectives: Objectives60
  started: number
}

export interface Objectives60 {}

export interface CvcKill {
  active: Active61
}

export interface Active61 {
  objectives: Objectives61
  started: number
}

export interface Objectives61 {
  cvc_kill_daily_deathmatch: number
}

export interface BlitzWeeklyMaster {
  completions: Completion50[]
  active: Active62
}

export interface Completion50 {
  time: number
}

export interface Active62 {
  objectives: Objectives62
  started: number
}

export interface Objectives62 {
  killblitz10: number
  blitz_games_played: number
}

export interface BlitzGameOfTheDay {
  completions: Completion51[]
  active: Active63
}

export interface Completion51 {
  time: number
}

export interface Active63 {
  objectives: Objectives63
  started: number
}

export interface Objectives63 {}

export interface BlitzLootChestWeekly {
  completions: Completion52[]
  active: Active64
}

export interface Completion52 {
  time: number
}

export interface Active64 {
  objectives: Objectives64
  started: number
}

export interface Objectives64 {
  lootchestblitz: number
  dealdamageblitz: number
}

export interface BlitzWin {
  completions: Completion53[]
  active: Active65
}

export interface Completion53 {
  time: number
}

export interface Active65 {
  objectives: Objectives65
  started: number
}

export interface Objectives65 {}

export interface BlitzLootChestDaily {
  completions: Completion54[]
  active: Active66
}

export interface Completion54 {
  time: number
}

export interface Active66 {
  objectives: Objectives66
  started: number
}

export interface Objectives66 {
  lootchestblitz: number
}

export interface BlitzKills {
  completions: Completion55[]
  active: Active67
}

export interface Completion55 {
  time: number
}

export interface Active67 {
  objectives: Objectives67
  started: number
}

export interface Objectives67 {
  killblitz10: number
}

export interface BedwarsDailyGifts {
  completions: Completion56[]
  active: Active68
}

export interface Completion56 {
  time: number
}

export interface Active68 {
  objectives: Objectives68
  started: number
}

export interface Objectives68 {
  bedwars_daily_special_christmas_gifts: number
}

export interface MmDailyWin {
  completions: Completion57[]
  active: Active69
}

export interface Completion57 {
  time: number
}

export interface Active69 {
  objectives: Objectives69
  started: number
}

export interface Objectives69 {}

export interface MmDailyPowerPlay {
  completions: Completion58[]
  active: Active70
}

export interface Completion58 {
  time: number
}

export interface Active70 {
  objectives: Objectives70
  started: number
}

export interface Objectives70 {}

export interface MmWeeklyWins {
  completions: Completion59[]
  active: Active71
}

export interface Completion59 {
  time: number
}

export interface Active71 {
  objectives: Objectives71
  started: number
}

export interface Objectives71 {}

export interface MmDailyTargetKill {
  completions: Completion60[]
  active: Active72
}

export interface Completion60 {
  time: number
}

export interface Active72 {
  objectives: Objectives72
  started: number
}

export interface Objectives72 {}

export interface MmWeeklyMurdererKills {
  completions: Completion61[]
  active: Active73
}

export interface Completion61 {
  time: number
}

export interface Active73 {
  objectives: Objectives73
  started: number
}

export interface Objectives73 {
  mm_weekly_kills_as_murderer: number
}

export interface MmSpecialWeeklySanta {
  active: Active74
}

export interface Active74 {
  objectives: Objectives74
  started: number
}

export interface Objectives74 {
  mm_special_weekly_santa: number
}

export interface SoloBrawler {
  completions: Completion62[]
  active: Active75
}

export interface Completion62 {
  time: number
}

export interface Active75 {
  objectives: Objectives75
  started: number
}

export interface Objectives75 {}

export interface UhcTeam {
  completions: Completion63[]
  active: Active76
}

export interface Completion63 {
  time: number
}

export interface Active76 {
  objectives: Objectives76
  started: number
}

export interface Objectives76 {}

export interface UhcWeekly {
  active: Active77
}

export interface Active77 {
  objectives: Objectives77
  started: number
}

export interface Objectives77 {
  uhc_kills: number
}

export interface TeamBrawler {
  completions: Completion64[]
  active: Active78
}

export interface Completion64 {
  time: number
}

export interface Active78 {
  objectives: Objectives78
  started: number
}

export interface Objectives78 {}

export interface UhcWeeklySpecialCookie {
  active: Active79
}

export interface Active79 {
  objectives: Objectives79
  started: number
}

export interface Objectives79 {}

export interface UhcSolo {
  active: Active80
}

export interface Active80 {
  objectives: Objectives80
  started: number
}

export interface Objectives80 {}

export interface UhcMadness {
  completions: Completion65[]
  active: Active81
}

export interface Completion65 {
  time: number
}

export interface Active81 {
  objectives: Objectives81
  started: number
}

export interface Objectives81 {
  kill: number
}

export interface UhcDm {
  active: Active82
}

export interface Active82 {
  objectives: Objectives82
  started: number
}

export interface Objectives82 {
  uhc_kills: number
}

export interface SkywarsSpecialNorthPole {
  completions: Completion66[]
  active: Active83
}

export interface Completion66 {
  time: number
}

export interface Active83 {
  objectives: Objectives83
  started: number
}

export interface Objectives83 {}

export interface TntWeeklySpecial {
  active: Active84
}

export interface Active84 {
  objectives: Objectives84
  started: number
}

export interface Objectives84 {}

export interface SupersmashSoloWin {
  completions: Completion67[]
  active: Active85
}

export interface Completion67 {
  time: number
}

export interface Active85 {
  objectives: Objectives85
  started: number
}

export interface Objectives85 {}

export interface SupersmashTeamWin {
  active: Active86
}

export interface Active86 {
  objectives: Objectives86
  started: number
}

export interface Objectives86 {}

export interface SupersmashTeamKills {
  active: Active87
}

export interface Active87 {
  objectives: Objectives87
  started: number
}

export interface Objectives87 {}

export interface SupersmashSoloKills {
  completions: Completion68[]
  active: Active88
}

export interface Completion68 {
  time: number
}

export interface Active88 {
  objectives: Objectives88
  started: number
}

export interface Objectives88 {}

export interface SupersmashWeeklyKills {
  active: Active89
}

export interface Active89 {
  objectives: Objectives89
  started: number
}

export interface Objectives89 {
  supersmash_weekly_kills: number
}

export interface WarlordsObjectives {
  completions: Completion69[]
}

export interface Completion69 {
  time: number
}

export interface WarlordsAllStar {
  active: Active90
}

export interface Active90 {
  objectives: Objectives90
  started: number
}

export interface Objectives90 {
  warlords_weekly_heal: number
  warlords_weekly_damage: number
}

export interface WarlordsTdm {
  active: Active91
}

export interface Active91 {
  objectives: Objectives91
  started: number
}

export interface Objectives91 {}

export interface WarlordsDedication {
  active: Active92
}

export interface Active92 {
  objectives: Objectives92
  started: number
}

export interface Objectives92 {}

export interface WarlordsVictorious {
  active: Active93
}

export interface Active93 {
  objectives: Objectives93
  started: number
}

export interface Objectives93 {}

export interface WarlordsDomination {
  active: Active94
}

export interface Active94 {
  objectives: Objectives94
  started: number
}

export interface Objectives94 {}

export interface WarlordsCtf {
  active: Active95
}

export interface Active95 {
  objectives: Objectives95
  started: number
}

export interface Objectives95 {}

export interface BuildBattlePlayer {
  completions: Completion70[]
  active: Active96
}

export interface Completion70 {
  time: number
}

export interface Active96 {
  objectives: Objectives96
  started: number
}

export interface Objectives96 {
  play: number
}

export interface BuildBattleWeekly {
  completions: Completion71[]
  active: Active97
}

export interface Completion71 {
  time: number
}

export interface Active97 {
  objectives: Objectives97
  started: number
}

export interface Objectives97 {
  play: number
}

export interface BuildBattleWinner {
  completions: Completion72[]
  active: Active98
}

export interface Completion72 {
  time: number
}

export interface Active98 {
  objectives: Objectives98
  started: number
}

export interface Objectives98 {}

export interface MegaWallsWeekly {
  active: Active99
}

export interface Active99 {
  objectives: Objectives99
  started: number
}

export interface Objectives99 {
  mega_walls_kill_weekly: number
  mega_walls_play_weekly: number
}

export interface MegaWallsPlay {
  completions: Completion73[]
  active: Active100
}

export interface Completion73 {
  time: number
}

export interface Active100 {
  objectives: Objectives100
  started: number
}

export interface Objectives100 {}

export interface MegaWallsFaithful {
  active: Active101
}

export interface Active101 {
  objectives: Objectives101
  started: number
}

export interface Objectives101 {
  mega_walls_faithful_play: number
}

export interface MegaWallsKill {
  active: Active102
}

export interface Active102 {
  objectives: Objectives102
  started: number
}

export interface Objectives102 {
  mega_walls_kill_daily: number
}

export interface MegaWallsWin {
  active: Active103
}

export interface Active103 {
  objectives: Objectives103
  started: number
}

export interface Objectives103 {}

export interface MmSpecialWeeklyKillerInstinct2020 {
  active: Active104
}

export interface Active104 {
  objectives: Objectives104
  started: number
}

export interface Objectives104 {}

export interface SkywarsHalloweenHarvest2020 {
  active: Active105
}

export interface Active105 {
  objectives: Objectives105
  started: number
}

export interface Objectives105 {
  skywars_halloween_kills: number
}

export interface BlitzSpecialDailyNorthPole {
  completions: Completion74[]
  active: Active106
}

export interface Completion74 {
  time: number
}

export interface Active106 {
  objectives: Objectives106
  started: number
}

export interface Objectives106 {}

export interface BuildBattleChristmas {
  active: Active107
}

export interface Active107 {
  objectives: Objectives107
  started: number
}

export interface Objectives107 {}

export interface BuildBattleChristmasWeekly {
  active: Active108
}

export interface Active108 {
  objectives: Objectives108
  started: number
}

export interface Objectives108 {}

export interface MmDailyInfector {
  active: Active109
}

export interface Active109 {
  objectives: Objectives109
  started: number
}

export interface Objectives109 {
  mm_infection_kills: number
}

export interface MmSpecialWeeklyKillerInstinct2021 {
  active: Active110
}

export interface Active110 {
  objectives: Objectives110
  started: number
}

export interface Objectives110 {}

export interface BuildBattleHalloween {
  active: Active111
}

export interface Active111 {
  objectives: Objectives111
  started: number
}

export interface Objectives111 {}

export interface SkywarsHalloweenHarvest2021 {
  active: Active112
}

export interface Active112 {
  objectives: Objectives112
  started: number
}

export interface Objectives112 {
  skywars_halloween_kills: number
}

export interface BedwarsWeeklyChallenges {
  completions: Completion75[]
}

export interface Completion75 {
  time: number
}

export interface WoolWarsDailyPlay {
  completions: Completion76[]
  active: Active113
}

export interface Completion76 {
  time: number
}

export interface Active113 {
  objectives: Objectives113
  started: number
}

export interface Objectives113 {}

export interface WoolWarsDailyWins {
  completions: Completion77[]
  active: Active114
}

export interface Completion77 {
  time: number
}

export interface Active114 {
  objectives: Objectives114
  started: number
}

export interface Objectives114 {
  win: number
}

export interface WoolWarsDailyKills {
  completions: Completion78[]
  active: Active115
}

export interface Completion78 {
  time: number
}

export interface Active115 {
  objectives: Objectives115
  started: number
}

export interface Objectives115 {
  kill: number
}

export interface WoolWeeklyPlay {
  active: Active116
}

export interface Active116 {
  objectives: Objectives116
  started: number
}

export interface Objectives116 {
  kill: number
  win: number
}

export interface WoolWarsWeeklyShears {
  active: Active117
}

export interface Active117 {
  objectives: Objectives117
  started: number
}

export interface Objectives117 {
  wool_weekly_shears: number
}

export interface SkywarsHalloweenHarvest2022 {
  active: Active118
}

export interface Active118 {
  objectives: Objectives118
  started: number
}

export interface Objectives118 {
  skywars_halloween_kills: number
}

export interface PitDailyContract {
  active: Active119
}

export interface Active119 {
  objectives: Objectives119
  started: number
}

export interface Objectives119 {}

export interface PitWeeklyGold {
  active: Active120
}

export interface Active120 {
  objectives: Objectives120
  started: number
}

export interface Objectives120 {
  pit_weekly_gold: number
}

export interface PitDailyKills {
  active: Active121
}

export interface Active121 {
  objectives: Objectives121
  started: number
}

export interface Objectives121 {
  kill: number
}

export interface BedwarsDailyBedBreaker {
  completions: Completion79[]
}

export interface Completion79 {
  time: number
}

export interface BedwarsWeeklyChallengesWin {
  completions: Completion80[]
  active: Active122
}

export interface Completion80 {
  time: number
}

export interface Active122 {
  objectives: Objectives122
  started: number
}

export interface Objectives122 {}

export interface BedwarsDailyFinalKiller {
  completions: Completion81[]
}

export interface Completion81 {
  time: number
}

export interface BedwarsWeeklyFinalKiller {
  completions: Completion82[]
}

export interface Completion82 {
  time: number
}

export interface SkywarsHalloweenHarvest2023 {
  active: Active123
}

export interface Active123 {
  objectives: Objectives123
  started: number
}

export interface Objectives123 {}

export interface MmSpecialWeeklyKillerInstinct2023 {
  active: Active124
}

export interface Active124 {
  objectives: Objectives124
  started: number
}

export interface Objectives124 {}

export interface Dmcrates102019 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface QuestSettings {
  autoActivate: boolean
}

export interface Monthlycrates {
  "10-2019": N102019
  "8-2019": N82019
  "9-2019": N92019
  "11-2019": N112019
  "12-2019": N122019
  "3-2020": N32020
  "4-2020": N42020
  "8-2020": N82020
  "9-2020": N92020
  "10-2020": N102020
  "12-2020": N122020
  "1-2021": N12021
  "2-2021": N22021
  "3-2021": N32021
  "4-2021": N42021
  "5-2021": N52021
  "6-2021": N62021
  "7-2021": N72021
  "8-2021": N82021
  "9-2021": N92021
  "10-2021": N102021
  "11-2021": N112021
  "12-2021": N122021
  "1-2022": N12022
  "2-2022": N22022
  "3-2022": N32022
  "4-2022": N42022
  "5-2022": N52022
  "6-2022": N62022
  "7-2022": N72022
  "8-2022": N82022
  "9-2022": N92022
  "10-2022": N102022
  "11-2022": N112022
  "12-2022": N122022
  "1-2023": N12023
  "2-2023": N22023
  "3-2023": N32023
  "4-2023": N42023
  "5-2023": N52023
  "6-2023": N62023
  "7-2023": N72023
  "8-2023": N82023
  "9-2023": N92023
  "10-2023": N102023
  "11-2023": N112023
  "12-2023": N122023
}

export interface N102019 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N82019 {
  VIP: boolean
  REGULAR: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N92019 {
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
  REGULAR: boolean
}

export interface N112019 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N122019 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N32020 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N42020 {
  VIP_PLUS: boolean
  MVP_PLUS: boolean
  MVP: boolean
  REGULAR: boolean
  VIP: boolean
}

export interface N82020 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N92020 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N102020 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N122020 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N12021 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N22021 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N32021 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N42021 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  VIP_PLUS: boolean
  MVP_PLUS: boolean
}

export interface N52021 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
}

export interface N62021 {
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N72021 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
}

export interface N82021 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP_PLUS: boolean
  MVP: boolean
}

export interface N92021 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP: boolean
  REGULAR: boolean
  VIP_PLUS: boolean
}

export interface N102021 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N112021 {
  REGULAR: boolean
  VIP: boolean
}

export interface N122021 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N12022 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
}

export interface N22022 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N32022 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  VIP_PLUS: boolean
  MVP_PLUS: boolean
}

export interface N42022 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N52022 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N62022 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N72022 {
  MVP_PLUS: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
  MVP: boolean
}

export interface N82022 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N92022 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N102022 {
  REGULAR: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
  VIP: boolean
}

export interface N112022 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N122022 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N12023 {
  REGULAR: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP: boolean
}

export interface N22023 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  VIP: boolean
  REGULAR: boolean
}

export interface N32023 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N42023 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
}

export interface N52023 {
  REGULAR: boolean
  VIP_PLUS: boolean
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
}

export interface N62023 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP: boolean
  REGULAR: boolean
  VIP_PLUS: boolean
}

export interface N72023 {
  REGULAR: boolean
  VIP: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP_PLUS: boolean
}

export interface N82023 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP_PLUS: boolean
  MVP: boolean
}

export interface N92023 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  REGULAR: boolean
  VIP: boolean
}

export interface N102023 {
  REGULAR: boolean
  VIP: boolean
  VIP_PLUS: boolean
  MVP_PLUS: boolean
  MVP: boolean
}

export interface N112023 {
  REGULAR: boolean
  VIP_PLUS: boolean
  MVP: boolean
  MVP_PLUS: boolean
  VIP: boolean
}

export interface N122023 {
  MVP_PLUS: boolean
  MVP: boolean
  VIP_PLUS: boolean
  NORMAL: boolean
  VIP: boolean
}

export interface Halloween2019Cooldowns {
  VIP3: boolean
  VIP2: boolean
  VIP1: boolean
  VIP0: boolean
  MVP3: boolean
  MVP2: boolean
  MVP1: boolean
  MVP0: boolean
  VIP_PLUS3: boolean
  VIP_PLUS2: boolean
  VIP_PLUS1: boolean
  VIP_PLUS0: boolean
  NORMAL0: boolean
  NORMAL1: boolean
  NORMAL3: boolean
  MVP_PLUS0: boolean
  MVP_PLUS1: boolean
  MVP_PLUS2: boolean
  MVP_PLUS3: boolean
  NORMAL2: boolean
}

export interface Christmas2019Cooldowns {
  VIP_PLUS0: boolean
  NORMAL0: boolean
  VIP0: boolean
  NORMAL1: boolean
  MVP_PLUS0: boolean
  VIP1: boolean
  MVP1: boolean
  MVP0: boolean
  VIP_PLUS1: boolean
  MVP_PLUS1: boolean
}

export interface AdventRewards2019 {
  day1: number
  day2: number
  day7: number
  day8: number
  day13: number
}

export interface Easter2020Cooldowns2 {
  VIP0: boolean
  MVP0: boolean
  VIP_PLUS0: boolean
  NORMAL0: boolean
  SUPERSTAR0: boolean
  MVP_PLUS0: boolean
  NORMAL1: boolean
  VIP1: boolean
  SUPERSTAR1: boolean
  MVP_PLUS1: boolean
  NORMAL2: boolean
  VIP_PLUS1: boolean
  VIP_PLUS2: boolean
  MVP1: boolean
  VIP2: boolean
}

export interface SocialMedia {
  prompt: boolean
  TWITCH: string
  links: Links
}

export interface Links {
  DISCORD: string
}

export interface AchievementTotem {
  canCustomize: boolean
  allowed_max_height: number
  unlockedParts: string[]
  selectedParts: SelectedParts
  unlockedColors: string[]
  selectedColors: SelectedColors
}

export interface SelectedParts {
  slot_0: string
  slot_1: string
  slot_2: string
}

export interface SelectedColors {
  slotcolor_0: string
}

export interface Summer2020Cooldowns {
  MVP_PLUS3: boolean
  MVP_PLUS2: boolean
  MVP_PLUS1: boolean
  MVP_PLUS0: boolean
  SUPERSTAR0: boolean
  SUPERSTAR1: boolean
  VIP3: boolean
  VIP2: boolean
  VIP0: boolean
  SUPERSTAR2: boolean
  SUPERSTAR3: boolean
  VIP1: boolean
  MVP3: boolean
  MVP2: boolean
  MVP1: boolean
  MVP0: boolean
  VIP_PLUS3: boolean
  VIP_PLUS2: boolean
  VIP_PLUS1: boolean
  VIP_PLUS0: boolean
  NORMAL0: boolean
  NORMAL1: boolean
  NORMAL2: boolean
  NORMAL3: boolean
}

export interface Halloween2020Cooldowns {
  VIP0: boolean
  MVP0: boolean
  VIP_PLUS0: boolean
  NORMAL0: boolean
  MVP_PLUS0: boolean
  NORMAL1: boolean
  SUPERSTAR0: boolean
  VIP1: boolean
  VIP_PLUS1: boolean
  MVP1: boolean
  NORMAL2: boolean
  MVP_PLUS1: boolean
  SUPERSTAR1: boolean
  VIP2: boolean
  VIP_PLUS2: boolean
  MVP_PLUS2: boolean
  NORMAL3: boolean
  SUPERSTAR2: boolean
  VIP3: boolean
  MVP2: boolean
  VIP_PLUS3: boolean
}

export interface Christmas2020Cooldowns2 {
  NORMAL0: boolean
  NORMAL1: boolean
  VIP_PLUS0: boolean
  VIP0: boolean
  MVP0: boolean
  SUPERSTAR0: boolean
  VIP1: boolean
  MVP1: boolean
  VIP_PLUS1: boolean
  NORMAL2: boolean
  MVP_PLUS1: boolean
  MVP_PLUS0: boolean
  SUPERSTAR1: boolean
  SUPERSTAR2: boolean
  VIP2: boolean
  MVP2: boolean
  VIP_PLUS2: boolean
  NORMAL3: boolean
  MVP_PLUS2: boolean
  VIP3: boolean
  MVP_PLUS3: boolean
  SUPERSTAR3: boolean
}

export interface AdventRewards2020 {
  day2: number
  day1: number
  day17: number
  day18: number
}

export interface GiftingMeta {
  ranksGiven: number
  bundlesReceived: number
  realBundlesReceived: number
  rankgiftingmilestones: string[]
  bundlesGiven: number
  giftsGiven: number
  realBundlesGiven: number
  milestones: string[]
}

export interface Easter2021Cooldowns2 {
  VIP3: boolean
  VIP2: boolean
  VIP1: boolean
  VIP0: boolean
  MVP3: boolean
  MVP2: boolean
  MVP1: boolean
  MVP0: boolean
  VIP_PLUS2: boolean
  VIP_PLUS1: boolean
  VIP_PLUS0: boolean
  NORMAL0: boolean
  NORMAL1: boolean
  NORMAL3: boolean
  MVP_PLUS1: boolean
  MVP_PLUS2: boolean
  MVP_PLUS0: boolean
  NORMAL2: boolean
  VIP_PLUS3: boolean
  MVP_PLUS3: boolean
}

export interface PetStats {
  CAT_BLACK: CatBlack
  CAT_RED: CatRed
  WOLF: Wolf
  CAT_SIAMESE: CatSiamese
  CHICKEN_BABY: ChickenBaby
  BAT: Bat
  MOOSHROOM_BABY: MooshroomBaby
  MAGMA_CUBE_BIG: MagmaCubeBig
  CLONE: Clone
}

export interface CatBlack {
  HUNGER: Hunger
}

export interface Hunger {
  timestamp: number
  value: number
}

export interface CatRed {
  HUNGER: Hunger2
}

export interface Hunger2 {
  timestamp: number
  value: number
}

export interface Wolf {
  HUNGER: Hunger3
}

export interface Hunger3 {
  timestamp: number
  value: number
}

export interface CatSiamese {
  HUNGER: Hunger4
}

export interface Hunger4 {
  timestamp: number
  value: number
}

export interface ChickenBaby {
  HUNGER: Hunger5
}

export interface Hunger5 {
  timestamp: number
  value: number
}

export interface Bat {
  EXERCISE: Exercise
  THIRST: Thirst
  HUNGER: Hunger6
  experience: number
}

export interface Exercise {
  timestamp: number
  value: number
}

export interface Thirst {
  timestamp: number
  value: number
}

export interface Hunger6 {
  timestamp: number
  value: number
}

export interface MooshroomBaby {
  EXERCISE: Exercise2
  THIRST: Thirst2
  HUNGER: Hunger7
  experience: number
}

export interface Exercise2 {
  timestamp: number
  value: number
}

export interface Thirst2 {
  timestamp: number
  value: number
}

export interface Hunger7 {
  timestamp: number
  value: number
}

export interface MagmaCubeBig {
  THIRST: Thirst3
  HUNGER: Hunger8
  EXERCISE: Exercise3
}

export interface Thirst3 {
  timestamp: number
  value: number
}

export interface Hunger8 {
  timestamp: number
  value: number
}

export interface Exercise3 {
  timestamp: number
  value: number
}

export interface Clone {
  THIRST: Thirst4
  EXERCISE: Exercise4
  HUNGER: Hunger9
  experience: number
  name: string
}

export interface Thirst4 {
  timestamp: number
  value: number
}

export interface Exercise4 {
  timestamp: number
  value: number
}

export interface Hunger9 {
  timestamp: number
  value: number
}

export interface Summer2021Cooldowns {
  VIP0: boolean
  VIP_PLUS0: boolean
  NORMAL0: boolean
  MVP0: boolean
  MVP_PLUS0: boolean
  SUPERSTAR0: boolean
  NORMAL1: boolean
  SUPERSTAR1: boolean
  MVP_PLUS1: boolean
  NORMAL2: boolean
  VIP1: boolean
  VIP2: boolean
  MVP1: boolean
  VIP_PLUS1: boolean
  VIP_PLUS2: boolean
  MVP2: boolean
  MVP_PLUS2: boolean
  SUPERSTAR2: boolean
  NORMAL3: boolean
  VIP3: boolean
  VIP_PLUS3: boolean
  MVP_PLUS3: boolean
  MVP3: boolean
  SUPERSTAR3: boolean
}

export interface Halloween2021Cooldowns {
  NORMAL0: boolean
  VIP0: boolean
  MVP0: boolean
  NORMAL1: boolean
  MVP_PLUS0: boolean
  VIP_PLUS0: boolean
  MVP_PLUS1: boolean
  NORMAL2: boolean
  VIP_PLUS1: boolean
  MVP1: boolean
  VIP1: boolean
  VIP2: boolean
  VIP3: boolean
  MVP_PLUS3: boolean
  NORMAL3: boolean
  VIP_PLUS2: boolean
  VIP_PLUS3: boolean
  MVP3: boolean
  MVP2: boolean
  MVP_PLUS2: boolean
}

export interface Seasonal {
  christmas: Christmas
  easter: Easter2
  summer: Summer
  silver: number
  halloween: Halloween
  anniversary: Anniversary
}

export interface Christmas {
  "2021": N2021
  "2022": N2022
  "2023": N20232
}

export interface N2021 {
  adventRewards: AdventRewards
  presents: Presents
}

export interface AdventRewards {
  day6: number
  day7: number
  day9: number
  day17: number
}

export interface Presents {
  BEDWARS_1: boolean
  MAIN_LOBBY_1: boolean
  PROTOTYPE_1: boolean
  DUELS_1: boolean
  BEDWARS_4: boolean
  HOUSING_1: boolean
}

export interface N2022 {
  adventRewards: AdventRewards2
  levelling: Levelling
  presents: Presents2
}

export interface AdventRewards2 {
  day1: number
  day2: number
  day3: number
  day4: number
  day5: number
  day7: number
  day8: number
  day9: number
  day11: number
  day18: number
  day19: number
  day20: number
  day23: number
  day24: number
  day25: number
}

export interface Levelling {
  experience: number
}

export interface Presents2 {
  BEDWARS_1: boolean
  PROTOTYPE_1: boolean
  BEDWARS_2: boolean
  MAIN_LOBBY_1: boolean
}

export interface N20232 {
  levelling: Levelling2
  adventRewards: AdventRewards3
  presents: Presents3
  bingo: Bingo
}

export interface Levelling2 {
  experience: number
}

export interface AdventRewards3 {
  day6: number
  day7: number
  day8: number
  day9: number
  day10: number
  day1: number
  day2: number
  day15: number
  day16: number
  day17: number
  day18: number
  day19: number
  day20: number
  day21: number
  day22: number
  day23: number
  day24: number
}

export interface Presents3 {
  BEDWARS_1: boolean
  BEDWARS_2: boolean
  DUELS_1: boolean
  PROTOTYPE_1: boolean
}

export interface Bingo {
  easy: Easy
}

export interface Easy {
  objectives: Objectives125
}

export interface Objectives125 {
  Duelsvictor: number
  Bedwarsdiamond: number
  Arcadegrinchrookie: number
  Pitmmrobinhood: number
}

export interface Easter2 {
  "2022": N20222
  "2023": N20233
}

export interface N20222 {
  duelsWinsAchievement: number
}

export interface N20233 {
  levelling: Levelling3
  bedWarsWinsAchievement: number
  duelsWinsAchievement: number
  "mainlobby_egghunt_-59_94_-5": boolean
  "mainlobby_egghunt_-372_50_10": boolean
  "mainlobby_egghunt_327_43_-137": boolean
  mainlobby_egghunt_374_60_0: boolean
  mainlobby_egghunt_384_56_149: boolean
  mainlobby_egghunt_375_92_139: boolean
  mainlobby_egghunt_133_53_354: boolean
  mainlobby_egghunt_137_49_347: boolean
  mainlobby_egghunt_4_52_364: boolean
  "mainlobby_egghunt_-18_57_402": boolean
  "mainlobby_egghunt_-206_52_345": boolean
  "mainlobby_egghunt_-370_65_228": boolean
  "mainlobby_egghunt_-22_85_-59": boolean
  "mainlobby_egghunt_68_54_-399": boolean
  "mainlobby_egghunt_-20_51_-436": boolean
  "mainlobby_egghunt_0_58_-500": boolean
  "mainlobby_egghunt_-14_57_-518": boolean
  "mainlobby_egghunt_70_54_-565": boolean
  "mainlobby_egghunt_115_26_-509": boolean
  "mainlobby_egghunt_96_25_-579": boolean
  "mainlobby_egghunt_29_67_-27": boolean
  "mainlobby_egghunt_128_72_-134": boolean
  mainlobby_egghunt_100_75_6: boolean
  "mainlobby_egghunt_59_105_-137": boolean
  "mainlobby_egghunt_-55_87_56": boolean
  "mainlobby_egghunt_-108_78_86": boolean
  "mainlobby_egghunt_-77_56_191": boolean
  mainlobby_egghunt_33_54_254: boolean
  "mainlobby_egghunt_-145_73_-137": boolean
  "mainlobby_egghunt_-87_81_-62": boolean
  mainlobby_egghunt_reward: boolean
}

export interface Levelling3 {
  experience: number
}

export interface Summer {
  "2022": N20223
  "2023": N20234
}

export interface N20223 {
  levelling: Levelling4
}

export interface Levelling4 {
  experience: number
}

export interface N20234 {
  levelling: Levelling5
}

export interface Levelling5 {
  experience: number
}

export interface Halloween {
  "2022": N20224
  "2023": N20235
}

export interface N20224 {
  levelling: Levelling6
}

export interface Levelling6 {
  experience: number
}

export interface N20235 {
  levelling: Levelling7
  bingo: Bingo2
  candyhunt: Candyhunt
}

export interface Levelling7 {
  experience: number
}

export interface Bingo2 {
  easy: Easy2
}

export interface Easy2 {
  objectives: Objectives126
}

export interface Objectives126 {
  Bedwarsdiamond: number
  Bedwarsshopoftraps: number
  Duelsvictor: number
  Arcadedance: number
  Arcadequiteahandful: number
  Pitmmrobinhood: number
  Blitzcountingdown: number
  Tnttagplayer: number
  Paintballpoultryghiest: number
  Bbthething: number
  Skywarstrickortriumph: number
  Smashnowheretohide: number
  Woolpoweredup: number
  Murderhauntedmansion: number
  Vampzvampirekill: number
  Megawallswitheringheights: number
}

export interface Candyhunt {
  baskets: number[]
}

export interface Anniversary {
  " 2023": N20236
  mapQuest: MapQuest
}

export interface N20236 {
  bingo: Bingo3
}

export interface Bingo3 {
  easy: Easy3
  medium: Medium
  hard: Hard
}

export interface Easy3 {
  objectives: Objectives127
}

export interface Objectives127 {
  Bedwarsdiamond: number
  Tntrunsurviveminute: number
  Murderbowgold: number
  Wwplacewool: number
  Pitkill: number
  Cvcthrowprojectile: number
  Vampzvampirekill: number
  Tnttagplayer: number
  Skywarsvoidkill: number
  Quakedash: number
  Pixelpartysurvive: number
  Arcadehiderdamage: number
  Arcadeblockingdeadkills: number
  Pbpowerup: number
  Bbguess: number
  Arcadezombiesdoor: number
  Maincatchfish: number
  Tkrcollectbox: number
  Wallswoodpickaxe: number
  Blitzchests: number
  Arenaultimate: number
  Wizardscapture: number
  Arcadekillcreeper: number
  Megawallsdefense: number
  Smashthrowoff: number
}

export interface Medium {
  objectives: Objectives128
}

export interface Objectives128 {
  Bedwarsemerald: number
  Smashnemesis: number
  Arcadehitwperfect: number
  Blitzshutdown: number
  Maincatchtreasure: number
  Pvprunkill: number
  Quakeheadshot: number
  Skywarsdiamondarmor: number
  Vampzsurvivorkill: number
  Arcadetwowithers: number
  Pitpickupgold: number
  Duelsparkour3rd: number
  Bowspleefsurvivetwo: number
  Arcadesupplychests: number
  Arcademegapunch: number
  Warlordsdamageflag: number
  Cvcclosecall: number
  Pbtntrain: number
  Murderkillmurderer: number
  Tkrbanana: number
  Arcadetop3round: number
  Arenabuffs: number
  Wwflawless: number
  Arcadedragonkill: number
  Megawallsfinaltwo: number
}

export interface Hard {
  objectives: Objectives129
}

export interface Objectives129 {
  Wwnoenemywool: number
  Wallsdiamond: number
  Arcadewoolcarrier: number
  Bbfastguess: number
  Skywarschallenge: number
  Arcadehypixelsays: number
  Bbtop3: number
  Smashtwolives: number
  Arcadezombies25: number
  Murderstreak: number
  Bedwarsemeraldhoarder: number
  Bedwarsflawless: number
  Arcadedontmove: number
  Quake5streak: number
  Warlordscapture: number
}

export interface MapQuest {
  currentPiece: number
  foundAllPieces: boolean
  spokenToSimon: boolean
}

export interface Leveling {
  claimedRewards: number[]
}