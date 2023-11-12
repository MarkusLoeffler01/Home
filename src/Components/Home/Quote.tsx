import { Typography, Fade, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import "../../css/Quote.css";


function Quote() {

    const [checked, setChecked] = useState(false);

    const MainQuote = "\"Hello world?! Nah, let's change it! Come on, what are you waiting for?\"";
    const Author = "Markus Löffler";

    useEffect(() => {
        setTimeout(() => {
            setChecked(true);
        }, 1000)
    }, []);

    return (
        <div style={{
            fontFamily: "CubanoCustom"
        }}>
            <Fade in={checked} timeout={3000}>
                <Typography variant="h3" component="h2" fontFamily="CubanoCustom">
                    <div className="w-[500px]">{MainQuote}</div>
                    <div className="bg-gradient-to-r from-orange-600 to-yellow-600 inline-block text-transparent bg-clip-text">{Author}</div>
                </Typography>
            </Fade>
        </div>
    );
}

export default Quote;