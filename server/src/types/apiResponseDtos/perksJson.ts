export interface PerkStyleDto {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: PerkSlotDto[];
}

export interface PerkSlotDto {
    runes: RuneDto[]
}

interface RuneDto {
    id: number;
    key: string;
    icon: string;
    name: string;
    shortDesc: string;
    longDesc: string;
}