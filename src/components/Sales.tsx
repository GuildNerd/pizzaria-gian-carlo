import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export function Sales() {
    return(
        <>
            <h2 className="my-2 text-center text-white font-sans">Promoções do dia</h2>
            <Carousel controls={false} keyboard={true} interval={5000} pause={'hover'} className="w-full h-[50vh] items-center justify-center" >
                <Carousel.Item>
                    <div>
                        <img src="https://via.placeholder.com/150" alt="" className="w-auto h-[50vh]" />
                        <p>Teste</p>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div>
                        <img src="src\assets\promo2.jpg" alt="" className="w-auto h-auto" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}