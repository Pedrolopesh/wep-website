<template>
    <div>
        <div class="d-flex brake-small row-custom mt-17 ac">
    
        <div class="one-half-column">
            <h1 class="title-left mt-7 ml-7">Wep.</h1>
            <p class="ml-7">Um aplicativo para compartilhar com amigos e com geral sobre novos eventos, festas, festiváis e muito mais, além de saber o que acontece por ai, você mesmo pode criar seu evento e compartilhar com seus amigos e chamar o pessoa para curtir também, baixe o app e acompanhe todas as novidades dos eventos festas e baladas </p>
            <a href="https://wepapp.netlify.app/#/Home" target="_blank" class="link"><button class="ml-7 party-button">party!</button></a>
        </div>

        <div class="one-half-column">
            <div class="myImage ac">
                <img src="../assets/MKT.jpg" class="size_myImage">
            </div>
        </div>
       
        </div>

        <div class="container-custom-section ac mt-12">
            
            <div class="column mt-10 mb-10 p40">
                <div>
                    <div class="row">
                        
                        <span class="icons-title" v-html="svgs.rocket_icon"></span>
                        <h1 class="title d-inline-block ml-7 mb-3">missão</h1>
                    </div>
                    <p>Nossa missão é deixar as pessoas em contato mais próximo com os os eventos e festas que acontecem nas próximidades e juntarr os amigos para festejar junto!   </p>
                </div>
            </div>
        
            <div class="column mt-10 mb-10 p40">
                <div>

                    <div class="row">
                        <span class="icons-title" v-html="svgs.eye_icon"></span>
                        <h1 class="title d-inline-block ml-7 mb-3">visão</h1>
                    </div>
                        <p>Apróximar as pessoas de seus eventos favoritos, e de seus amigos de maneira fácil, e fazer isso em tempo real</p>
                </div>
            </div>
            
            <div class="column mt-10 mb-10 p40">
                <div>

                    <div class="row">
                        <span class="icons-title" v-html="svgs.hands_heart_icon"></span>
                        <h1 class="title d-inline-block ml-7 mb-3">Valor</h1>
                    </div>
                    <p>wep é o sistema perfeito para saber o melhor lugar para festejar com amigos e compartilhar as experiências incriveis do evento.</p>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import svgs from '../assets/svgs'
export default {
    data:() => ({
        svgs:svgs,

    })
}
</script>
<style lang="scss">
    .row-custom{
        content: "";
        display: table;
        clear: both; 
        max-width: 100%;
        width: 90%;
    }

    .one-half-column { 
            width: 48%; 
    
        @media screen and (max-width:700px) {
            max-width: 100%;
            width: 100%; 
        }
    }

    .container-custom-section{
        max-width: 100%;
        width: 85%;
        display: flex;


        @media screen and (max-width:700px) {
            flex-direction: column !important;
        }
    }

    .party-button{
        padding: 10px;
        display: block;
        color: white;
        border: none;
        border-radius: 10px;
        background-image: linear-gradient(to right, #fc6262 , #ffb451);

        &:hover{
            color: white
        }
    }

    .myImage{
        box-sizing: border-box;
        padding: 20px;
        margin-right: 30px;
        max-width: 350px;
        width: 100%;
        
        .size_myImage{
            display: block;
            margin-left: auto;
            margin-right: auto;
            max-width: 350px;
            width: 100%;

            @media screen and (max-width:700px) {
                max-width: 400px;
            }

        }
    }


    .icons-title{
        display: inline-block;
        width: 70px;
        color: #ff706f;

        @media screen and (max-width:700px) {
            width: 40px;
        }
    }

    .column,
    .columns {
    width: 100%;
    float: left;
    box-sizing: border-box; 
    }
</style>