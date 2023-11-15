/*
    Code used from the slothpixel project https://github.com/slothpixel/core
*/
function getLevel(exp) {
    const EXP_NEEDED = [
        100000,
        150000,
        250000,
        500000,
        750000,
        1000000,
        1250000,
        1500000,
        2000000,
        2500000,
        2500000,
        2500000,
        2500000,
        2500000,
        3000000,
    ];

    let level = 0;

    // Increments by one from zero to the level cap
    for (let i = 0; i <= 1000; i += 1) {
        // need is the required exp to get to the next level
        let need = 0;
        if (i >= EXP_NEEDED.length) {
            need = EXP_NEEDED[EXP_NEEDED.length - 1];
        } else { need = EXP_NEEDED[i]; }

        // If the required exp to get to the next level isn't met returns
        // the current level plus progress towards the next (unused exp/need)
        // Otherwise increments the level and substracts the used exp from exp var
        if ((exp - need) < 0) {
            return Math.round((level + (exp / need)) * 100) / 100;
        }
        level += 1;
        exp -= need;
    }

    // Returns the level cap - currently 1000
    // If changed here, also change in for loop above
    return 1000;
}

module.exports = { getLevel }
