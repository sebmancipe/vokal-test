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
    resetFilters: () => void;
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
    resetFilters: () => {},
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

        if(!currentFilters.colors.size){
            currentFilters.colors.add(Color.WHITE);
        }

        setFilters(currentFilters);
    }

    const toggleRoom = (room: Room) => {
        const currentFilters =  { ...filters };

        if (currentFilters.rooms.has(room)) {
            currentFilters.rooms.delete(room);
        } else { 
            currentFilters.rooms.add(room);
        }

        if(!currentFilters.rooms.size){
            currentFilters.rooms.add(Room.KITCHEN);
        }
        
        setFilters(currentFilters);
    }

    const setStyle = (style: Style) => {
        const currentFilters = { ...filters };
        currentFilters.style = style;

        setFilters(currentFilters);
    }

    const resetFilters = () => {
        setFilters({
            colors: new Set([Color.WHITE]),
            rooms: new Set([Room.KITCHEN]),
            style: Style.MODERN,
        });
    }


    return (
        <FiltersContext.Provider value={{
            filters,
            toggleRoom,
            toggleColor,
            setStyle,
            resetFilters
        }}>
            {children}
        </FiltersContext.Provider>
    );
}