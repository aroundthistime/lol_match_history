import { ImageDto } from "./common";

export interface ItemsDto {
    [key: string]: ItemDto;
}

export interface ItemDto {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string;
    image: ImageDto;
    gold: any;
    tags: string[];
    maps: any;
    stats: any;
}