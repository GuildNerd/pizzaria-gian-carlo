import * as Collapsible from '@radix-ui/react-collapsible'
import { List } from 'phosphor-react'

export function MenuCollapse() {
    return(
        <Collapsible.Root>
            <Collapsible.CollapsibleTrigger>
                <List className='text-white'>
                </List>
            </Collapsible.CollapsibleTrigger>
            <Collapsible.CollapsibleContent>
                <ul className='z-20 absolute right-2 p-4 bg-flag-green text-white font-sans rounded-b-sm'>
                    <li><p>Teste</p></li>
                    <li><p>Teste 2</p></li>
                    <li><p>Teste 3</p></li>
                </ul>
            </Collapsible.CollapsibleContent>
        </Collapsible.Root>
    )
}