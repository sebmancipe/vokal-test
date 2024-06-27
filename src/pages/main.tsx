import { ThemeProvider } from "@mui/material";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Showcase } from "./Showcase";
import { FiltersProvider } from "./Showcase/context/filters.context";
import theme from "../theme";

export const Main = () => {
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