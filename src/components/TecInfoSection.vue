<template>
    <div>
  
    <div class="mt-10">
        <div>
            <h1 class="font-size-40 alg-txt-c mt-4"> Tecnologias Utilizadas</h1>
        </div>
    </div>


    <v-divider class="container-custom ac"></v-divider>



    <div class="d-flex">
        <span v-html="svgs.java_logo" class="icon-size-100 d-block ac"></span>
        <span v-html="svgs.vuetify_logo" class="icon-size-100 d-block ac"></span>
        <span v-html="svgs.vuejs_logo" class="icon-size-100 d-block ac"></span>
        <span v-html="svgs.sass_logo" class="icon-size-100 d-block ac"></span>
        <span v-html="svgs.java_logo" class="icon-size-100 d-block ac"></span>
    </div>


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
    .icon-size-100{
        width: 100px;
    }
</style>