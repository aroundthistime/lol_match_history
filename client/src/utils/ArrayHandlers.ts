export const getLastItemsFromLast = (array: any[], count: number): any[] => {
    const n = count > array.length ? array.length : count;
    return array.slice(array.length - n, array.length);
}