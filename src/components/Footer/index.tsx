import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import { ExternalRedirect } from "./components/ExternalRedirect";

export const Footer = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: "center",
                    mt: 4,
                  }}
            >
                <Box
                    sx={{
                        width: "100%",
                        minHeight: '140px',
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "black",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography fontWeight={600} whiteSpace={"pre"} fontSize={"16px"}>
                        {`Looking for design input? `}
                    </Typography>
                    <Typography fontSize={"16px"} whiteSpace={"pre"}>
                        {`Get advice from Vokal curators. `}
                    </Typography>
                    <ExternalRedirect/>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        minHeight: '140px',
                        borderStyle: "solid",
                        borderWidth: "1px 1px 1px 0px",
                        borderColor: "black",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                     <Typography fontWeight={600} whiteSpace={"pre"} fontSize={"16px"}>
                        {`Are you an interior designer? `}
                    </Typography>
                    <Typography fontSize={"16px"} whiteSpace={"pre"}>
                        {`Learn about collaborating with Threshold. `}
                    </Typography>
                    <ExternalRedirect/>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#212121', color: 'white', py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                    <Grid item md={6}>
                        <Typography variant="h6" gutterBottom fontWeight={500} fontSize={22}>
                        Vokal test Vokal test
                        </Typography>
                        <Typography variant="body1" paragraph fontWeight={400} fontSize={16}>
                        Subscribe to the newsletter to be the first to hear about Vokal brand updates and news.
                        </Typography>
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            sx={{
                                borderWidth: '0',
                                borderBottomColor: 'white', 
                                borderBottomWidth: '1px',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'transparent', 
                                        borderBottomColor: 'white', 
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'transparent', 
                                        borderBottomColor: 'white', 
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'transparent', 
                                        borderBottomColor: 'white',
                                    },
                                },
                            }}
                            InputProps={{
                                sx: { bgcolor: '#212121', color: 'white', paddingLeft: '0' }
                            }}
                            fullWidth
                            margin="dense"
                        />
                        <Button variant="outlined" color="primary"  sx={{ 
                            mt: 2,  
                            color: 'white',
                            fontSize: '12px',
                            backgroundColor: 'transparent',
                            textAlign: 'left',
                            justifyContent: 'left',
                            marginTop: '1px',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                borderWidth: 0,
                            }}}
                        >
                            SIGN UP
                        </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                        Shop
                        </Typography>
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Collections
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Accessories
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Inspiration
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                        Discover
                        </Typography>
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        How it works
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Design advice
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Stories
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                        Contact
                        </Typography>
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        FAQ
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Affiliate Program
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none" fontFamily={"Inter"}>
                        Trade Program
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </Box>
    );
}