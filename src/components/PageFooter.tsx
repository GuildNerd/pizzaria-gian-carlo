export function PageFooter() {
    return (
        <div className="bg-flag-red flex justify-around align-middle fixed bottom-0 w-full py-1">

            <div className="text-white text-sm flex flex-col justify-center">
                    <h5>Horário de funcionamento</h5>
                    <p>Seg a Sex - 18:00 às 23:00 | Sáb e Dom - 11:30 às 00:30</p>
            </div>
            <div className="text-white text-sm">
                <h5>Siga-nos nas redes sociais!</h5>
                <div className="flex flex-row gap-3 mt-2 justify-center">
                    <a href="https://www.svgrepo.com/svg/521711/instagram" title="instagram ícones" target="_blank">
                        <img src="../src/assets/instagram.svg" alt="Ícone do Instagram"  className="w-4 text-white"/>
                    </a>
                    <a href="https://www.svgrepo.com/svg/521923/whatsapp" title="whatsapp ícones" target="_blank">
                        <img src="../src/assets/whatsapp.svg" alt="Ícone do Whatsapp" className="w-4"/>
                    </a>
                </div>
            </div>
        </div>
    )
}