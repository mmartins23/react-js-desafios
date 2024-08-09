import { useState, useEffect } from "react";

const WindowWidthChecker = () => {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setwindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, [])
    return (
        <h3>Screen Witdh: {windowWidth}px</h3>
    )
}

export default WindowWidthChecker