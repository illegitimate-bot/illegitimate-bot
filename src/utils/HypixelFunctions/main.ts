/*
    Code used from the slothpixel project https://github.com/slothpixel/core
*/
const BASE = 10000
const GROWTH = 2500
const HALF_GROWTH = 0.5 * GROWTH
const REVERSE_PQ_PREFIX = -(BASE - 0.5 * GROWTH) / GROWTH
const REVERSE_CONST = REVERSE_PQ_PREFIX * REVERSE_PQ_PREFIX
const GROWTHDIV2 = 2 / GROWTH

function getLevel(exp: number): number {
    if (exp <= 1) return 1

    return Math.floor(
        1 + REVERSE_PQ_PREFIX + Math.sqrt(REVERSE_CONST + GROWTHDIV2 * exp)
    )
}

function hypixelLevel(exp: number): number {
    return getLevel(exp) + getPercentageToNextLevel(exp)
}

function getTotalExpToLevel(level: number): number {
    const lv = Math.floor(level)
    const x0 = getTotalExpToFullLevel(lv)
    if (level === lv) return x0
    return (getTotalExpToFullLevel(lv + 1) - x0) * (level % 1) + x0
}

function getTotalExpToFullLevel(level: number): number {
    return (HALF_GROWTH * (level - 2) + BASE) * (level - 1)
}

function getPercentageToNextLevel(exp: number): number {
    const lv = getLevel(exp)
    const x0 = getTotalExpToLevel(lv)
    return (exp - x0) / (getTotalExpToLevel(lv + 1) - x0)
}

export { hypixelLevel }
