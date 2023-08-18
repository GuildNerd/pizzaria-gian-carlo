import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export function Sales() {
    return(
        <>
            <h2 className="my-2 text-center text-white font-sans">Promoções do dia</h2>
            <Carousel controls={true} keyboard={true} interval={5000} pause={'hover'} className="w-full h-[50vh]" >
                <Carousel.Item>
                    <div className="flex justify-center">
                        <img src="https://via.placeholder.com/150" alt="" className="w-auto h-[50vh]" />
                        <p>Teste</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="flex justify-center">
                        <img src="src\assets\promo2.jpg" alt="" className="w-auto h-[50vh]" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </> 
    )
}