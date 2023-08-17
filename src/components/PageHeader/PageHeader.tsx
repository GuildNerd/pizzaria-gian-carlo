import { MenuCollapse } from './MenuCollapse'
import { useState, useEffect } from "react"
import { NavBar } from './NavBar';

export function PageHeader() {
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeW = () => setPageWidth(window.innerWidth);
    
        window.addEventListener("resize", resizeW); // Update the width on resize
    
        return () => window.removeEventListener("resize", resizeW);
    });

    return(
        <div className="flex gap-4 items-center py-2 px-4 pr-6 border-b-2 border-flag-red bg-flag-green">
            <img src="src\assets\icon_pizza.png" alt="Ícone de pizza" className="flex-none w-8 h-8"/>
            <h1 className='flex-1 text-white font-sans font-bold text-xl text-center'>Pizzaria Gian Carlo</h1>

            {
                pageWidth <= 768 ? 
                <div className='flex-none'>
                    <MenuCollapse/>
                </div>
                :
                <div>
                    <NavBar/>
                </div>
            }
        </div>
    )
}