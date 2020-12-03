<template>
    <div>
  
    <div class="mt-10">
        <div>
            <h1 class="font-size-40 alg-txt-c mt-17"> Tecnologias Utilizadas</h1>
        </div>
    </div>


    <v-divider class="container-custom ac"></v-divider>



    <div class="d-flex brake-small">
        <span v-html="svgs.java_logo" class="icon-size-100 d-block ac mt-10"></span>
        <span v-html="svgs.vuetify_logo" class="vuetify-logo-size d-block ac"></span>
        <span v-html="svgs.vuejs_logo" class="vue-logo-size d-block ac"></span>
        <img src="../assets/vueLeaflet.png" alt="vue leaflet" class="vueleaflet-logo-size d-block ac">
        <span v-html="svgs.node_logo" class="node-logo-size d-block ac"></span>
        <span v-html="svgs.cloudinary_logo" class="cloudinary-logo-size d-block ac"></span>
        <span v-html="svgs.sass_logo" class="sass-logo-size d-block ac"></span>
    </div>

    <v-divider class="container-custom ac"></v-divider>

    </div>
</template>

<script>
import svgs from '../assets/svgs'

export default {
    data:() => ({
        svgs: svgs
    })
}
</script>

<style lang="scss">
.vuetify-logo-size{
    svg{
        min-height: 100%;
        max-width: 100%;
        width: 100px !important;
    }
}

.vue-logo-size{
    svg{
        margin-top: 100px;
        max-width: 100%;
        width: 100px !important;
    }
}

.vueleaflet-logo-size{
    margin-top: 100px;
    height: 10%;
    max-width: 10%;
    width: 100%;
}

.node-logo-size{
    svg{
        // margin-top: 100px;
        max-width: 100%;
        width: 100px !important;
    }    
}

.sass-logo-size{
    svg{
        margin-top: 100px;
        max-width: 100%;
        width: 100px !important;
    }    
}


.cloudinary-logo-size{
    svg{
        margin-top: 100px;
        max-width: 100%;
        width: 230px !important;
    }    
}
</style>