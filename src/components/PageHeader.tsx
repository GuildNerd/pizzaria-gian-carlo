import { MenuCollapse } from './MenuCollapse'

export function PageHeader() {
    return(
        <div className="flex gap-4 items-center py-2 px-4 border-b-2 border-flag-red bg-flag-green">
            <img src="src\assets\icon_pizza.png" alt="Ícone de pizza" className="flex-none w-8 h-8"/>
            <h1 className='flex-1 text-white font-sans font-bold text-xl text-center'>Pizzaria Gian Carlo</h1>
            <div className='flex-none'>
                <MenuCollapse/>
            </div>
        </div>
    )
}