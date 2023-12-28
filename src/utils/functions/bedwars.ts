/*
    Code used from the slothpixel project https://github.com/slothpixel/core
*/
function getExpForLevel(level: number): number {
    if (level == 0) return 0

    const respectedLevel = getLevelRespectingPrestige(level)
    if (respectedLevel > EASY_LEVELS) {
        return 5000
    }

    switch (respectedLevel) {
    case 1:
        return 500
    case 2:
        return 1000
    case 3:
        return 2000
    case 4:
        return 3500
    }
    return 5000
}

function getLevelRespectingPrestige(level: number): number {
    if (level > HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE) {
        return level - HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE
    }
    else {
        return level % LEVELS_PER_PRESTIGE
    }
}

const EASY_LEVELS = 4
const EASY_LEVELS_XP = 7000
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP
const LEVELS_PER_PRESTIGE = 100
const HIGHEST_PRESTIGE = 50
function bedwarsLevel(exp: number): number {
    const prestiges = Math.floor(exp / XP_PER_PRESTIGE)
    let level = prestiges * LEVELS_PER_PRESTIGE
    let expWithoutPrestiges = exp - (prestiges * XP_PER_PRESTIGE)

    for (let i = 1; i <= EASY_LEVELS; ++i) {
        const expForEasyLevel = getExpForLevel(i)
        if (expWithoutPrestiges < expForEasyLevel) {
            break
        }
        level++
        expWithoutPrestiges -= expForEasyLevel
    }
    return level + expWithoutPrestiges / 5000
}

export { bedwarsLevel }