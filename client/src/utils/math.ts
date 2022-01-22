export const roundTo2Decimal = (number: number): number => {
    let temp = number * 100;
    temp = Math.round(temp);
    return temp / 100;
}

export const getMaxOfArray = (array: number[]): number => {
    return array.reduce(function (a, b) {
        return Math.max(a, b);
    })
}