import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";

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
                        height: "50px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "black",
                        textAlign: "center",
                    }}
                >
                    <Typography>
                        Looking for design input? Get advice from Vokal curators.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "50px",
                        borderStyle: "solid",
                        borderWidth: "1px",
                        borderColor: "black",
                        textAlign: "center"
                    }}
                >
                    <Typography>
                        Are you an interior designer? Learn about collaborating with Threshold.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ bgcolor: '#212121', color: 'white', py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" gutterBottom>
                        Vokal test Vokal test
                        </Typography>
                        <Typography variant="body1" paragraph>
                        Subscribe to the newsletter to be the first to hear about Vokal brand updates and news.
                        </Typography>
                        <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <TextField
                            variant="outlined"
                            placeholder="Enter your email"
                            InputProps={{
                            sx: { bgcolor: 'white', color: 'black' }
                            }}
                            fullWidth
                            margin="dense"
                        />
                        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            SIGN UP
                        </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                        Shop
                        </Typography>
                        <Link href="#" color="inherit" underline="none">
                        Collections
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                        Accessories
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                        Inspiration
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                        Discover
                        </Typography>
                        <Link href="#" color="inherit" underline="none">
                        How it works
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                        Design advice
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                        Stories
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Typography variant="h6" gutterBottom>
                        Contact
                        </Typography>
                        <Link href="#" color="inherit" underline="none">
                        FAQ
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                        Affiliate Program
                        </Link>
                        <br />
                        <Link href="#" color="inherit" underline="none">
                        Trade Program
                        </Link>
                    </Grid>
                    </Grid>
            </Container>
            </Box>
        </Box>
    );
}