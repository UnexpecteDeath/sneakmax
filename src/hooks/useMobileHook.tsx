import { useEffect, useState } from "react"


export const useMobile = () => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 868);

    useEffect(()=> {
        function handleResize() {
            setIsMobile(window.innerWidth <= 868)
        }
        window.addEventListener('resize', handleResize)

        return () => { window.removeEventListener('resize', handleResize) }
    }, [])

    return isMobile;
}