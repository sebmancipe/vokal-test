import { ThemeProvider } from "@mui/material";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Showcase } from "./Showcase";
import { FiltersProvider } from "./Showcase/context/filters.context";
import theme from "../theme";

export const Main = () => {
    /**
     * Here should render:
     * 1. Header component
     * 2. Header page with filters
     * 3. Page content
     * 4. Footer
     * */
    return (
        <>
            <ThemeProvider theme={theme}>
                <Header/>
                <FiltersProvider>
                    <Showcase/>
                </FiltersProvider>
                <Footer/>
            </ThemeProvider>
        </>
    );
}