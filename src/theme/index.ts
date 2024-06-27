import { createTheme } from "@mui/material";

export default createTheme({
    typography: {
        fontFamily: "'Inter'",
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                input: {
                    '&::placeholder': {
                        color: 'white',
                        opacity: 1,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none', // To avoid uppercase text
                    border: 'none',
                    padding: '0', // Remove padding to make it smaller
                    minWidth: 'auto', // Remove minimum width
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                select: {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 14px',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 14px',
                },
            },
        },
    }
});