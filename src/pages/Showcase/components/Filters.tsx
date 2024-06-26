import { Box, Button, Divider, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Color, Filter, Room, Style } from "./types";
import { useFilters } from "../hooks/useFilters";
import { useEffect, useState } from "react";

export const Filters = () => {
    const { filters, setStyle, toggleColor, toggleRoom } = useFilters();
    const [currentFilters, setCurrentFilters] = useState<Filter[]>([]);

    useEffect(() => {
        const colors = Array.from(filters.colors);
        const rooms = Array.from(filters.rooms);

        setCurrentFilters([...colors, filters.style, ...rooms]);
    }, [filters]);

    const onColorChange = (e: SelectChangeEvent) => {
        toggleColor(e.target.value as Color);
    }

    const onStyleChange = (e: SelectChangeEvent) => {
        setStyle(e.target.value as Style);
    }

    const onRoomChange = (e: SelectChangeEvent) => {
        toggleRoom(e.target.value as Room);
    }

    return (
        <Box>
            <Box
                sx={{
                    width: "45%",
                    marginLeft: "20px",
                    marginRight: "20px",
                    display: "flex",
                    gap: "30px",
                }}
            >
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Color</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Color.WHITE}
                        label="Color"
                        onChange={onColorChange}
                    >
                        <MenuItem value={Color.BLUE}>Blue</MenuItem>
                        <MenuItem value={Color.WHITE}>White</MenuItem>
                        <MenuItem value={Color.BLACK}>Black</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Style</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Style"
                        onChange={onStyleChange}
                    >
                        <MenuItem value={Style.TRADITIONAL}>Traditional</MenuItem>
                        <MenuItem value={Style.MODERN}>Modern</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Room</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Room"
                        onChange={onRoomChange}
                    >
                        <MenuItem value={Room.KITCHEN}>Kitchen</MenuItem>
                        <MenuItem value={Room.LIVING_ROOM}>Living Room</MenuItem>
                        <MenuItem value={Room.OFFICE}>Office</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Divider sx={{
                marginTop: "20px",
                marginBottom: "20px",
                borderColor: "black",
                borderBottomWidth: "1px"
            }}/>
            <Box
                sx={{
                    display: "flex",
                    gap: "12px",
                    width: "45%",
                    marginLeft: "20px",
                    marginRight: "20px",

                }}
            >
                {currentFilters.map(filter => (<Box>{filter}</Box>))}
                <Button>
                    <Typography>Clear all filters</Typography>
                </Button>
            </Box>
        </Box>
    );
}