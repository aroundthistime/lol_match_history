export const roundTo2Decimal = (number: number): number => {
    let temp = number * 100;
    temp = Math.round(temp);
    return temp / 100;
}