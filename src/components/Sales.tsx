import { Carousel } from 'react-responsive-carousel'

export function Sales() {
    return(
        <>
            <h2 className="my-2 text-center text-white font-sans">Promoções do dia</h2>
            <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={6000}>
                <div>
                    <img src="src\assets\promo1.png" alt="" />
                </div>
                <div>
                    <img src="src\assets\promo2.jpg" alt="" />
                </div>
            </Carousel>
        </>
    )
}