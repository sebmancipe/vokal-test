import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { useFilters } from "./hooks/useFilters";
import { ImageResource } from "../../services/images/types";
import { useEffect, useState } from "react";
import { ImagesService } from "../../services/images/images.service";
import { Filters } from "./components/Filters";

export const Showcase = () => {
    const { filters } = useFilters();
    const [imagesList, setImagesList] = useState<ImageResource[]>([]);

    useEffect(() => {
        const colors = Array.from(filters.colors);
        const rooms = Array.from(filters.rooms);

        const images = ImagesService.getImagesIn(colors, filters.style, rooms);
        setImagesList(images);
    }, [filters]);



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
            <Box
                sx={{
                    mb: '50px',
                }}
            >
                <Filters />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                    m: '10px 20px 20px 20px',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                    }}
                >
                    {imagesList.length > 0 && <Box
                        sx={{
                            display: 'flex',
                            gap: '20px'
                        }}
                    >
                        <img
                            src={imagesList[0].src}
                            alt={imagesList[0].title}
                            loading="lazy"
                            width={'50%'}
                            height={630}
                        />
                        <ImageList sx={{ width: '50%', height: '100%' }} cols={2} >
                            {[3, 2, 1].map((i) => (
                                <ImageListItem key={i}>
                                    <img
                                        src={imagesList[i].src}
                                        alt={imagesList[i].title}
                                        loading="lazy"
                                        width={'auto'}
                                        height={'auto'}
                                        style={{
                                            display: 'block',
                                            maxWidth: 305,
                                            maxHeight: 334,
                                        }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                    }
                </Box>
                {imagesList.length > 0 && <Box
                    sx={{
                        width: '100%',
                        minHeight: 'auto',
                    }}
                >
                    <ImageList sx={{ width: '100%', height: '100%' }} cols={3}>
                        {[4, 5, 6, 7, 8, 9].map(i => (
                            <ImageListItem key={i}>
                                <img
                                    src={imagesList[i].src}
                                    alt={imagesList[i].title}
                                    loading="lazy"
                                    width={'auto'}
                                    height={'auto'}
                                    style={{
                                        display: 'block',
                                        maxWidth: 480,
                                        maxHeight: 493,
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>}
                {imagesList.length > 0 && <Box>
                    <ImageList sx={{ width: '100%', height: '333' }} cols={4} >
                        {[10, 11, 12, 13].map(i => (
                            <ImageListItem key={i}>
                                <img
                                    src={imagesList[i].src}
                                    alt={imagesList[i].title}
                                    loading="lazy"
                                    width={'auto'}
                                    height={'auto'}
                                    style={{
                                        display: 'block',
                                        maxWidth: 305,
                                        maxHeight: 333,
                                    }}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>}
                {imagesList.length > 0 && 
                <Box
                    display={'flex'}
                    gap={"20px"}
                >
                    <ImageList sx={{ width: '50%', height: '333' }} cols={2} rowHeight={333} variant="quilted">
                        {[14, 15, 16].map(i => (
                            <ImageListItem key={i}>
                                <img
                                    src={imagesList[i].src}
                                    alt={imagesList[i].title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <img
                            src={imagesList[0].src}
                            alt={imagesList[0].title}
                            loading="lazy"
                            width={'50%'}
                            height={716}
                        />
                </Box>}
            </Box>
        </Box>
    );
}