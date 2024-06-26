import { createContext, useState } from "react";
import { Color, Room, Style } from "../components/types";

interface FilterState {
    colors: Set<Color>,
    style: Style,
    rooms: Set<Room>,
}

export interface FiltersContext {
    filters: FilterState;
    toggleColor: (c: Color) => void;
    setStyle: (s: Style) => void;
    toggleRoom: (r: Room) => void;
}

const defaultState : FilterState = {
    colors: new Set([Color.WHITE]),
    style: Style.MODERN,
    rooms: new Set([Room.KITCHEN]),
};

export const FiltersContext = createContext<FiltersContext>({
    filters: defaultState,
    toggleRoom: () => {},
    setStyle: () => {},
    toggleColor: () => {},
});

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
    const [filters, setFilters] = useState(defaultState);

    const toggleColor = (color: Color) => {
        const currentFilters =  { ...filters };

         if (currentFilters.colors.has(color)){
            currentFilters.colors.delete(color);
        } else {
            currentFilters.colors.add(color);
        }

        setFilters(currentFilters);
    }

    const toggleRoom = (room: Room) => {
        const currentFilters =  { ...filters };

        if (filters.rooms.has(room)) {
            filters.rooms.delete(room);
        } else { 
            filters.rooms.add(room);
        }
        
        setFilters(currentFilters);
    }

    const setStyle = (style: Style) => {
        const currentFilters = { ...filters };
        currentFilters.style = style;

        setFilters(currentFilters);
    }


    return (
        <FiltersContext.Provider value={{
            filters,
            toggleRoom,
            toggleColor,
            setStyle
        }}>
            {children}
        </FiltersContext.Provider>
    );
}