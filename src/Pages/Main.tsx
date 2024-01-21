import React, { useEffect, useState } from "react";
import Quote from "../Components/Home/Quote";
import { AfterChangeProps, FullPage, Slide } from "react-full-page";
import CodeBoxComponent from "../Components/Home/CodeBox";

function Main() {

    const [scroll, setScroll] = useState({from: -1, to: -1, initiator: "" as "beforeChange" | "afterChange"});

    const [codeBoxVisible, setCodeBoxVisible] = useState(false);

    useEffect(() => {
        // This if ensures, that the CodeBox is visible until the screen is finished scrolling away
        if(scroll.from === 1 && scroll.to === 0 && scroll.initiator === "beforeChange") setCodeBoxVisible(true);
        else setCodeBoxVisible(false);
        if(scroll.from === 0 && scroll.to === 1) setCodeBoxVisible(true);
        // handleScroll()
    }, [scroll])

    return <FullPage beforeChange={(x) => setScroll({...x, initiator: "beforeChange"})} afterChange={(x) => setScroll({...x, initiator: "afterChange"})} >
        <Slide>
            <Quote />
        </Slide>
        <Slide>
            <div className="flex-container">
                <CodeBoxComponent delay={1000} filePath={["/TypeScript/Example01.ts"]} language="typescript" visible={codeBoxVisible} />
            </div>
        </Slide>
    </FullPage>
}




export default Main;