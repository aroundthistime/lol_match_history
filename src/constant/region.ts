export const REGIONS = ['KR', 'JP', 'NA'] as const;

export const DEFAULT_REGION = REGIONS[0];

export type Region = typeof REGIONS[number];

/**
 * Key: region
 * Value: Host to send API requests for the region
 */
export const API_HOST_PER_REGIONS = {
    KR: 'kr.api.riotgames.com',
    JP: 'jp1.api.riotgames.com',
    NA: 'na1.api.riotgames.com'
} as const satisfies Record<Region, string>;