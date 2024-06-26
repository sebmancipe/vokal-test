import { Box, Divider, Typography } from "@mui/material";

export const Header = () => {
    return (
        <>
        <Box sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around"
        }}>
            <Box
                sx={{
                    
                }}
            >
                <Typography fontWeight={600} fontSize={32}>
                    VOKAL TEST
                </Typography>
                <Divider sx={{
                    borderBottomWidth: "3px",
                    borderColor: "black"
                }}/>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "13px"
                }}
            >
                <Typography>
                    How it works
                </Typography>
                <Typography>
                    Collections
                </Typography>
                <Typography>
                    Accessories
                </Typography>
                <Typography>
                    Inspiration
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    gap: "13px"
                }}
            >
                <Typography>
                    Account
                </Typography>
                <Typography>
                    Cart
                </Typography>
            </Box>
        </Box>
        <Divider sx={{
                    marginTop: "5px",
                    borderBottomWidth: "1px",
                    borderColor: "black"
                }}/>
        </>
        
    );
}