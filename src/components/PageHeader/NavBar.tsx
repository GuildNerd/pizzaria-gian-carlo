export function NavBar() {
    return (
        <div className='flex items-center text-white'>
            <ul className='flex flex-row justify-around gap-4'>
                <li><a>Início</a></li>
                <li><a>Cardápio</a></li>
                <li><a>Eventos</a></li>
                <li><a>Sobre</a></li>
                <li><a>Contato</a></li>
            </ul>
        </div>
    )
}