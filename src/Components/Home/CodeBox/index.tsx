import { useEffect, useRef, useState } from "react";
import useFetchFiles from "../../../Hooks/useFetchFiles";
import CodeBox, {Languages} from "./CodeBox";

function CodeBoxComponent({filePath, language, visible, delay} : {filePath: string[], language: Languages, visible: boolean, delay: number}) {
    const fileContents = useFetchFiles(filePath);
    
    
    // return <CodeBox lang="typescript" text="Hallo" />

    return <div className="flex-item">{
        Object.entries(fileContents).map(([_, content], index) => (
            <div key={index}>
                {
                    <CodeBox delay={delay} visible={visible} lang={language} text={content} />
                }
            </div>
        ))
    }</div>
}

export default CodeBoxComponent;