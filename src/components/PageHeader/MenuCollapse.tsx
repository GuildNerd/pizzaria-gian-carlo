import * as Collapsible from '@radix-ui/react-collapsible'
import { List } from 'phosphor-react'

export function MenuCollapse() {
    // function navigateHome() {
    //     const navigate = useNavigate();
    //     navigate('./Home');
    // }
    // function navigatePizzaMenu() {
    //     const navigate = useNavigate();
    //     navigate('./PizzaMenu/Menu');
    // }

    return(
        <Collapsible.Root>
            <Collapsible.CollapsibleTrigger>
                <List className='text-white'>
                </List>
            </Collapsible.CollapsibleTrigger>
            <Collapsible.CollapsibleContent>
                <div>
                    <ul className='z-20 absolute right-2 p-4 bg-flag-green text-white font-sans rounded-b-sm'>
                        {/* <li onClick={navigateHome}><a>Início</a></li>
                        <li onClick={navigatePizzaMenu}><a>Cardápio</a></li> */}
                        <li><a>Eventos</a></li>
                        <li><a>Sobre</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </div>
            </Collapsible.CollapsibleContent>
        </Collapsible.Root>
    )
}