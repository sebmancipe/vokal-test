import { Color, Room, Style } from "../../pages/Showcase/components/types";

export interface ImageResource { 
    src: string;
    title: string;
}

export type ImagesRepository = {
    [key in Color]: Record<Style, Record<Room, ImageResource[]>>;
};