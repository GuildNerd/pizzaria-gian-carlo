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
        <div className='flex flex-row items-center justify-between py-2 px-4 pr-6 border-b-[1px] border-white bg-flag-green'>
            <div className='flex gap-2'>
                <img src='src\assets\icon_pizza.png' alt='Ícone de pizza' className='w-8 h-8'/>
                <h1 className='text-white font-sans font-bold text-xl'>Pizzaria Gian Carlo</h1>
            </div>

            {
                pageWidth <= 768 ? 
                <div>
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