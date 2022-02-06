import React, {Component} from 'react'
import Main from "../template/main/Main";
import "./Home.css"
import Hamburguer from "../../assets/images/hamburger.jpg"
import Batata from "../../assets/images/batata-frita.jpg"
import Tapioca from "../../assets/images/tapioca-2.jpg"
import Pizza from "../../assets/images/pizza.jpg"
import Acai from "../../assets/images/acai.jpg"

const headerProps = {
    icon: 'home',
    title: 'Pagina Inicial',
    subtitle: 'Últimos '
}

export default class Home extends Component{

    renderHead(){
        return(    
        <div>
            <div className="display-4">Seja bem vindo(a) ao <br /> <strong>Restaurante Novo</strong></div>
            <hr/>
            <p className="mb-0">Veja as novidades:</p>
            <hr/>
        </div>
        )
    }

    renderAds(){
        return(
            <div id='bloco-img' >
                <div id='bloco-2x2'>
                    <div id='content-1x1'>
                        <img src={Hamburguer} alt="hamburger" />
                        
                        <div id='texto'>
                            <h3>
                                Saboroso Hamburger!!
                            </h3>
                            <br />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis at eligendi fugiat! Facilis ad nulla suscipit fugit quae aspernatur commodi provident. Itaque quaerat eligendi velit pariatur ducimus expedita hic libero!</p>
                        </div>

                    </div>
                    <div id='content-1x1'>
                        <img src={Batata} alt="batata frita" />
                        <div id='texto'>
                            <h3>
                                Muitas Batatas Fritas!!
                            </h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos, fugit nemo culpa esse quidem eaque consectetur cumque unde debitis facere pariatur aut quis rem laudantium ex obcaecati, voluptates tempora!</p>
                        </div>
                        
                    </div>
                    <div id='content-1x1'>
                        <img src={Tapioca} alt="tapioca" />
                        <div id='texto'>
                            <h3>
                                Deliciosa Tapioca ❤
                            </h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore ipsa corporis sit, id est natus, nam, maxime aspernatur deleniti facilis magni iure voluptas repudiandae assumenda modi? At, mollitia ad?</p>
                        </div>

                    </div>
                    <div id='content-1x1'>
                        <img src={Pizza} alt="Pizza" />
                        <div id='texto'>
                            <h3>
                                Vários sabores de Pizzas!!
                            </h3>
                            <br />
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis at eligendi fugiat! Facilis ad nulla suscipit fugit quae aspernatur commodi provident. Itaque quaerat eligendi velit pariatur ducimus expedita hic libero!</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <Main {...headerProps}>
                {this.renderHead()}
                {this.renderAds()}
            </Main>
        )
    }
}

    