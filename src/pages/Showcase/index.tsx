import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { Filters } from "./components/Filters";
import { useFilters } from "./hooks/useFilters";
import { ImageResource } from "../../services/images/types";
import { useEffect, useState } from "react";
import { ImagesService } from "../../services/images/images.service";

export const Showcase = () => {
    const { filters } = useFilters();
    const [ imagesList, setImagesList ] = useState<ImageResource[]>([]);

    useEffect(() => {
        const colors = Array.from(filters.colors);
        const rooms = Array.from(filters.rooms);
        const images = ImagesService.getImagesIn(colors, filters.style, rooms);
        setImagesList(images);
    }, [filters.colors, filters.rooms, filters.style]);


    return (
        <Box
            sx={{
                width: "100%"
            }}
        >
            <Box
                sx={{
                    margin: "auto",
                    width: "50%",
                    textAlign: "center",
                    padding: "70px"
                }}
            >
                <Typography variant="h2" fontWeight={"600"} fontSize={"40px"} lineHeight={"50px"}>INSPIRATION</Typography>
                <Typography variant="body1" fontSize={"18px"} fontWeight={"400"} sx={{
                    marginTop: "30px"
                }}>Work on Vokal inspiration</Typography>
            </Box>
            <Box><Filters/></Box>
            <Box>
                <Box>
                    {imagesList.length > 0 && <><Box>
                        <img
                            src={imagesList[0].src}
                            alt={imagesList[0].title}
                            loading="lazy"
                        />
                    </Box>
                    <ImageList sx={{ width: 305, height: 334 }} cols={2} rowHeight={164}>
                        {[2,3,4].map((i) => (
                            <ImageListItem key={i}>
                            <img
                                src={imagesList[i].src}
                                alt={imagesList[i].title}
                                loading="lazy"
                            />
                            </ImageListItem>
                        ))}
                    </ImageList></>}
                </Box>
                <Box>
                    {/**6 images with text in the middle one */}
                </Box>
                <Box>
                    {/**4 images in line*/}
                </Box>
                <Box>
                    {/**3 images 1 with text */}
                </Box>
            </Box>
        </Box>
    );
}