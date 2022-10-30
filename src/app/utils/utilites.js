export function paginate (items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
};

export const renderPersonLetterEnd = (qtyOfPerson, end1, end2) =>
    [2, 3, 4].includes(qtyOfPerson % 10) &&
    ![12, 13, 14].includes(qtyOfPerson % 100)
        ? end2
        : end1;

export const findUserByInput = (users, input) => {
    const inpRegEx = new RegExp(input, "i");
    const filterBySearchLine = users.filter(item => item.name.match(inpRegEx));

    return input ? filterBySearchLine : "";
};
