/**
 * Create URL query string from given object
 * @param query Query object to extract parameters from
 * @returns Query string (without ? included)
 */
export const createQueryString = (query: Record<string, string | number | undefined>) => {
    const params = new URLSearchParams();
    Object.entries(query).forEach(([key, value]) => {
        if (value !== undefined) {
            params.set(key, `${value}`)
        }
    });

    return params.toString();
}