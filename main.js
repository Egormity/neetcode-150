// ------------------------- # 7. 2025.05.07 - 1:08:36 | Leetcode 36 - Valid Sudoku - Medium ------------------------- //
// My solution
var isValidSudoku = function (board) {
    let result = true;
    for (const item of board) {
        const dic = {};
        item.forEach((el) => {
            if (el === ".") return;
            if (dic[el]) {
                result = false;
                dic[el] += 1;
            } else dic[el] = 1;
        });
    }

    //
    if (!result) return result;
    for (let i = 0; i < 3; i++) {
        const items = board.slice(3 * i, 3 * (i + 1));
        const rows = { 1: {}, 2: {}, 3: {} };
        items.forEach((el) =>
            el.forEach((char, i) => {
                if (char === ".") return;
                const row = rows[Math.ceil((i + 1) / 3) + ""];
                if (row[char]) {
                    result = false;
                    row[char] += 1;
                } else row[char] = 1;
            })
        );
    }
    if (!result) return result;

    //
    const items = board.slice(0);
    const cols = {};
    items.forEach((el) =>
        el.forEach((char, i) => {
            if (char === ".") return;
            if (!cols[i + ""]) cols[i + ""] = {};
            col = cols[i + ""];
            if (col[char]) {
                result = false;
                col[char] += 1;
            } else col[char] = 1;
        })
    );
    console.log(cols);
    return result;
};

// Optimal solution
