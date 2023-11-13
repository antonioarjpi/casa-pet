import TOP from '../../assets/top.jpg'
import GATO_1 from '../../assets/gato01.jpg'
import GATO_2 from '../../assets/gato02.jpg';
import GATO_3 from '../../assets/gato04.jpg';
import CACHORRO_1 from '../../assets/cao01.jpg';
import CACHORRO_2 from '../../assets/cao02.jpg';
import CACHORRO_3 from '../../assets/cao03.jpg';
import CACHORRO_4 from '../../assets/cao04.jpg';
import CardItem from '../../components/card-item/card-item';
import QuemSomos from '../quem-somos/quem-somos';


function Home() {

    return (
        <>
            <div id="imagem_top">
                <img id="imgtopsite" src={TOP} alt="pets" />
            </div>
            <div id="quadros">
                <div id="frame">
                    <CardItem image src={GATO_1} alt="GATO_01" />
                   
                    <CardItem
                        id="div-quadro-02"
                        pid="quadro02"
                        icon="bi bi-calendar-date"
                        label="Desde 2019" />
                    
                    <CardItem image src={CACHORRO_1} alt="GATO_01" />
                   
                    <CardItem
                        id="div-quadro-03"
                        pid="quadro04"
                        icon="bi bi-calendar-date"
                        label="+ de 320 Animais alimentados todos os dias" />
                   
                    <CardItem image src={GATO_3} alt="GATO_01" />
                    <CardItem image src={CACHORRO_3} alt="CAO3_01" />
                    <CardItem image src={CACHORRO_4} alt="CAO3_01" />
                   
                    <CardItem
                        id="div-quadro-04"
                        pid="quadro08"
                        icon="bi bi-calendar-date"
                        label="200 Animais abrigados" />
                    
                    <CardItem image src={CACHORRO_2} alt="GATO_01" />
                    <CardItem image src={GATO_2} alt="GATO_01" />
                </div>
            </div>
            <QuemSomos />
        </>
    )
}
export default Home;