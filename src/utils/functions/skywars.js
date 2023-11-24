/*
    Code used from the slothpixel project https://github.com/slothpixel/core
*/
function skywarsLevel(xp) {
    const xps = [0, 20, 70, 150, 250, 500, 1000, 2000, 3500, 6000, 10000, 15000]
    let exactLevel = 0
    if (xp >= 15000) {
        exactLevel = (xp - 15000) / 10000 + 12
        return exactLevel
    } else {
        for (let i = 0; i < xps.length; i++) {
            if (xp < xps[i]) {
                exactLevel = i + (xp - xps[i - 1]) / (xps[i] - xps[i - 1])
                return exactLevel
            }
        }
    }
}

module.exports = { skywarsLevel }
