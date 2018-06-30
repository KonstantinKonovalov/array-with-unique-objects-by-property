export const filterUnique = (array, property) => {
    return array.reduce((acc, currentItem) => (
        acc.some(value => value[property] === currentItem[property]) ? acc : [...acc, currentItem]
    ));
};
