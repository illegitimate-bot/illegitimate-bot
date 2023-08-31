/* ---------- bedwars level ---------- */
function getExpForLevel(level) {
    if (level == 0) return 0;

    var respectedLevel = getLevelRespectingPrestige(level);
    if (respectedLevel > EASY_LEVELS) {
        return 5000;
    }

    switch (respectedLevel) {
        case 1:
            return 500;
        case 2:
            return 1000;
        case 3:
            return 2000;
        case 4:
            return 3500;
    }
    return 5000;
}

function getLevelRespectingPrestige(level) {
    if (level > HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE) {
        return level - HIGHEST_PRESTIGE * LEVELS_PER_PRESTIGE;
    } else {
        return level % LEVELS_PER_PRESTIGE;
    }
}
const EASY_LEVELS = 4;
const EASY_LEVELS_XP = 7000;
const XP_PER_PRESTIGE = 96 * 5000 + EASY_LEVELS_XP;
const LEVELS_PER_PRESTIGE = 100;
const HIGHEST_PRESTIGE = 50;
function getLevelForExp(exp) {
    var prestiges = Math.floor(exp / XP_PER_PRESTIGE);
    var level = prestiges * LEVELS_PER_PRESTIGE;
    var expWithoutPrestiges = exp - prestiges * XP_PER_PRESTIGE;

    for (let i = 1; i <= EASY_LEVELS; ++i) {
        var expForEasyLevel = getExpForLevel(i);
        if (expWithoutPrestiges < expForEasyLevel) {
            break;
        }
        level++;
        expWithoutPrestiges -= expForEasyLevel;
    }
    return level + expWithoutPrestiges / 5000;
}
// hypixel
const BASE = 10000;
const GROWTH = 2500;

const HALF_GROWTH = 0.5 * GROWTH;

const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH;
const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX;
const GROWTH_DIVIDES_2 = 2 / GROWTH;

function getLevel(exp) {
    return exp <= 1 ? 1 : Math.floor(1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTH_DIVIDES_2 * exp));
}

function getExactLevel(exp) {
    return getLevel(exp) + getPercentageToNextLevel(exp);
}
function getExpFromLevelToNext(level) {
    return level < 1 ? BASE : GROWTH * (level - 1) + BASE;
}

function getTotalExpToLevel(level) {
    const lv = Math.floor(level);
    const x0 = getTotalExpToFullLevel(lv);
    if (level === lv) return x0;
    return (getTotalExpToFullLevel(lv + 1) - x0) * (level % 1) + x0;
}

function getTotalExpToFullLevel(level) {
    return (HALF_GROWTH * (level - 2) + BASE) * (level - 1);
}

function getPercentageToNextLevel(exp) {
    const lv = getLevel(exp);
    const x0 = getTotalExpToLevel(lv);
    return (exp - x0) / (getTotalExpToLevel(lv + 1) - x0);
}
/* ---------- skywars level ---------- */
function skywarsLevel(xp) {
    var xps = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000];
    let exactLevel = 0;
    if (xp >= 15000) {
        exactLevel = (xp - 15000) / 10000 + 12;
        return exactLevel;
    } else {
        for (i = 0; i < xps.length; i++) {
            if (xp < xps[i]) {
                exactLevel = i + (xp - xps[i - 1]) / (xps[i] - xps[i - 1]);
                return exactLevel;
            }
        }
    }
}

module.exports = {
    getExactLevel,
    skywarsLevel,
    getLevelForExp,
};
