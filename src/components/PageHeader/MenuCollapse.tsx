import * as Collapsible from '@radix-ui/react-collapsible'
import { List } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

export function MenuCollapse() {
    function redirectToPage() {
        const navigate = useNavigate();
        navigate('./Home');
    }

    return(
        <Collapsible.Root>
            <Collapsible.CollapsibleTrigger>
                <List className='text-white'>
                </List>
            </Collapsible.CollapsibleTrigger>
            <Collapsible.CollapsibleContent>
                <div>
                    <ul className='z-20 absolute right-2 p-4 bg-flag-green text-white font-sans rounded-b-sm'>
                        <li><a onClick={redirectToPage}>Início</a></li>
                        <li><a>Cardápio</a></li>
                        <li><a>Eventos</a></li>
                        <li><a>Sobre</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </div>
            </Collapsible.CollapsibleContent>
        </Collapsible.Root>
    )
}