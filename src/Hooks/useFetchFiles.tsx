import { useState, useEffect } from "react";


interface FileContents {
    [key: string]: string;
}

const useFetchFiles = (filePaths: string[]) => {
    const [fileContents, setFileContents] = useState<FileContents>({});

    useEffect(() => {
        // Eine Hilfsfunktion, um die Fetch-Logik für einen einzelnen Pfad zu kapseln
        const fetchFile = async (path: string) => {
            try {
                const response = await fetch(path);
                const text = await response.text();
                return { path, text };
            } catch (err) {
                console.error(`Error while loading code snippet ${path}`, err);
                return { path, text: '' }; // Rückgabe eines leeren Textes im Fehlerfall
            }
        };

        // Verwenden von Promise.all, um alle Fetch-Anfragen parallel auszuführen
        Promise.all(filePaths.map(path => fetchFile(path)))
            .then(results => {
                // Aktualisieren des State nach Abschluss aller Anfragen
                const newFileContents = results.reduce((contents, { path, text }) => {
                    (contents as any)[path] = text;
                    return contents;
                }, {});
                setFileContents(newFileContents);
            });

    }, [filePaths]); // Abhängigkeiten: filePaths

    return fileContents;
};


export default useFetchFiles;