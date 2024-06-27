import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ColorFilter } from "./ColorFilter";
import { useFilters } from "../../hooks/useFilters";
import { Color, Filter, Room } from "../types";
import { StyleFilter } from "./StyleFilter";
import { RoomFilter } from "./RoomFilter";
import { Close } from "../../../../components/Footer/components/Close";

export const Filters = () => {
    const { filters, resetFilters, toggleColor, toggleRoom } = useFilters();
    const [currentFilters, setCurrentFilters] = useState<Filter[]>([]);

    useEffect(() => {
        const colors = Array.from(filters.colors);
        const rooms = Array.from(filters.rooms);

        setCurrentFilters([...colors, filters.style, ...rooms]);
    }, [filters]);

    const removeFilter = (_, filter: string) => {
        if(isColorFilter(filter)) {
            toggleColor(filter as Color);
        }

        if(isRoomFilter(filter)) {
            toggleRoom(filter as Room);
        }
    }

    const isColorFilter = (filter: string): boolean => {
        return filter in Color;
    }

    const isRoomFilter = (filter: string): boolean => {
        return filter in Room;
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
                <ColorFilter/>
                <StyleFilter/>
                <RoomFilter/>
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
                {currentFilters.map((filter, i) => (
                    <Box
                        key={i}
                        sx={{
                            borderWidth: '1px',
                            borderColor: 'black',
                            borderStyle: 'solid',
                            padding: '10px 10px 10px 10px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px',
                            minWidth: '125px'
                        }}
                    >
                        <Typography>{filter}</Typography>
                        <IconButton onClick={(e) => removeFilter(e, filter)}><Close/></IconButton>
                    </Box>
                ))}
                <Button 
                        variant="text" 
                        sx={{  
                            color: '#212121',
                            fontSize: '12px',
                            backgroundColor: 'transparent',
                            textAlign: 'left',
                            justifyContent: 'left',
                            mt: '1px',
                            minWidth: '150px',
                            pl: '5px',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                            },
                            '&:click': {
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                            }
                        }
                        }
                        endIcon={<Close/>}
                        onClick={resetFilters}
                        >
                            <Typography>Clear all filters</Typography>
                </Button>
            </Box>
        </Box>
    );
}