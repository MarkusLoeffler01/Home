import Highlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Box, Typography } from "@mui/material";
import "../../../css/Quote.css";

import useTypewriter from "../../../Hooks/useTypewriter";
import { useState } from "react";

function CodeBox({text, lang, visible, delay}: {text: string, lang: Languages, visible: boolean, delay: number}) {

    const [displayDelay, setDisplayDelay] = useState(false);
    // We need to check bot visible and displayDelay, so they don't trigger unneccesarily and create bugs
    if(visible && !displayDelay) setTimeout(() => {
        setDisplayDelay(true);
    }, delay);
    else if(!visible && displayDelay) {
        setDisplayDelay(false);
    } 

    return <Box sx={{
        minWidth: "1000px",
        minHeight: "600px",
        border: "2px solid grey",
        borderRadius: "20px",
        padding: "10px"
    }} className="rounded-full">
        <Typography component="h1" fontFamily="CubanoCustom" variant="h3"><div className="bg-gradient-to-r from-blue-800 to-blue-600 text-transparent inline-block bg-clip-text">TypeScript</div></Typography>
        {visible && displayDelay && <CodeBoxText lang={lang} text={text} /> }
    </Box>
    
}


function CodeBoxText({text, lang}: {text: string, lang: Languages}) {

    const displayedCode = useTypewriter(text, 5);

    return <Highlighter style={a11yDark} showInlineLineNumbers={true} showLineNumbers customStyle={{
        fontSize: 13
    }} language={lang}>
        {displayedCode}
    </Highlighter>

}

export default CodeBox;

export type Languages = "typescript" | "bash";