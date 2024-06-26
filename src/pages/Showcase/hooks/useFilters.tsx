import { useContext } from "react";
import { FiltersContext } from "../context/filters.context";

export const useFilters = (): FiltersContext => {
    const context = useContext(FiltersContext);

    if(!context) {
        throw new Error("Filters can not be loaded outside the Filters provider");
    }

    return context;
} 