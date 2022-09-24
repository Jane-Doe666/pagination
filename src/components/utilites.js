/* eslint-disable */

export function paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
};

export function renderPersonLetterEnd(qtyOfPerson, p1, p2) {
    const lastDigit = Number(qtyOfPerson.toString().slice(-1));
    const lastTwoDigit = Number(qtyOfPerson.toString().slice(-2));
    if ([2, 3, 4].includes(lastDigit)) {
        if ([12, 13, 14].includes(lastTwoDigit)) return p1;
        return p2;
    } else {
        return p1;
    }
};

const xplural = [1, 2, 4, 12, 112, 122, 1214, 138, 245, 446]
const x = 112
const y = [12, 13, 14]
const z = [2, 3, 4]

const res = xplural.map( (x1, y1) => {
        if (x1 % 100 === 12 || x1 % 100 === 13 || x1 % 100 === 14) return `${x1} человек`
        if (x1 % 10 === 2 || x1 % 10 === 3 || x1 % 10 === 4 || x1 > 1 && x1 < 5) return `${x1} человека`
        //if (x1 > 1 && x1 < 5) return `${x1} человека`
        return `${x1} человек`
    }
)

console.log(res)




