export enum Color {
    BLUE = 'BLUE',
    BLACK = 'BLACK',
    WHITE = 'WHITE'
}

export enum Style {
    TRADITIONAL = 'TRADITIONAL',
    MODERN = 'MODERN',
}

export enum Room {
    KITCHEN = 'KITCHEN',
    LIVING_ROOM = 'LIVING_ROOM',
    OFFICE = 'OFFICE',
}

export type Filter = Color | Style | Room;