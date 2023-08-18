import { Sales } from './Sales'

export function Home() {
    return (
        <div className='flex flex-col justify-center w-full mb-12'>
            <Sales/>
            <div className='w-[95%] my-4 p-3 rounded-md bg-white flex flex-col self-center'>
                <h3 className='self-center text-lg text'>História da pizza</h3>
                <p>
                    "A história da pizza começou aproximadamente no século VI a.C., quando povos do Mediterrâneo, como egípcios e gregos, inventaram a receita de uma espécie de pão árabe com uma massa plana, bem fina e em formato de disco.
                    O alimento tinha como ingredientes água e farinha de trigo.
                
                    
                    Acredita-se que, com o tempo, o referido pão foi adaptado por povos de outras culturas, como fenícios e romanos. 
                    Esses povos passaram a temperá-lo, cobrindo-o com óleos, ervas e verduras.
                
                    
                    O pão que, no futuro, seria chamado de pizza somente chegou à Itália no século XVIII, mais especificamente à província de Nápoles, 
                    situada na região da Campânia, no sul do país. Inicialmente, o pão com cobertura era vendido na rua e conhecido como “prato dos pobres”, por ser barato.
                
                    
                    Com o tempo, os italianos aprimoraram a receita, colocando coberturas ou recheios mais variados em cima da massa. 
                    Os primeiros sabores de pizzas da Itália foram mastunicola, que tinha manjericão, banha, queijo e pimenta, e cecinielli, com pedaços de peixe."<br />
                    
                    Fonte: <a href="https://brasilescola.uol.com.br/curiosidades/historia-da-pizza.htm" target='_blank'>Brasil Escola</a>
                </p>
            </div>
        </div>
    )
}