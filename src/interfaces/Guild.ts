export interface Guild {
    data: {
        success: boolean
        guild: GuildData
    }
}

export interface GuildData {
    _id: string
    name: string
    coins?: number
    coinsEver?: number
    created: number
    members: Member[]
    achievements?: GuildAchievements
    exp: number
    legacyRanking?: number
    name_lower?: string
    tagColor?: string
    description?: string
    ranks: Rank[]
    preferredGames?: string[]
    banner?: Banner
    chatMute?: number
    tag?: string
    publiclyListed?: boolean
    guildExpByGameType?: GuildExpByGameType
}

export interface Member {
    uuid: string
    rank: string
    joined: number
    questParticipation: number
    expHistory: ExpHistory
    mutedTill: number
}

export interface ExpHistory {
    [key: string]: number
}

export interface GuildAchievements {
    WINNERS?: number
    EXPERIENCE_KINGS?: number
    ONLINE_PLAYERS?: number
}

export interface Rank {
    name: string
    default: boolean
    tag: string
    created: number
    priority: number
}

export interface Banner {
    Base?: string
    Patterns?: Pattern[]
}

export interface Pattern {
    Pattern?: string
    Color?: any
}

export interface GuildExpByGameType {
    PAINTBALL?: number
    BUILD_BATTLE?: number
    SKYWARS?: number
    WOOL_GAMES?: number
    MCGO?: number
    GINGERBREAD?: number
    REPLAY?: number
    HOUSING?: number
    VAMPIREZ?: number
    PROTOTYPE?: number
    ARCADE?: number
    WALLS?: number
    UHC?: number
    WALLS3?: number
    SKYBLOCK?: number
    QUAKECRAFT?: number
    SURVIVAL_GAMES?: number
    SPEED_UHC?: number
    ARENA?: number
    DUELS?: number
    MURDER_MYSTERY?: number
    BEDWARS?: number
    SUPER_SMASH?: number
    PIT?: number
    SMP?: number
    BATTLEGROUND?: number
    LEGACY?: number
    TNTGAMES?: number
}
