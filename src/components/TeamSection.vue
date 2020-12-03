<template>
    <div>
        <h1 class="mt-17 mb-9 alg-txt-c">Time de desenvolvimento</h1>
        <v-divider class="container-custom ac"></v-divider>
        <div class="container-custom ac mt-3 brake-small">

                <div class="d-block ac" v-for="(item, i) in itens" :key="i">
                    <div class="myImage">
                            <h1 class="fst">{{ item.title }}</h1>
                            <img :src="item.sourceImg" class="size_myImage">
                            <p class="alg-txt-c font-size-20 mt-2">{{ item.description }}</p>
                        </div>
                </div>
        </div>
        <v-divider class="container-custom ac"></v-divider>
    </div>
</template>

<script>
export default {
    data:() => ({
        itens:[
            {title:'Pedro Lopes', description:'CEO - Founder', sourceImg:'./pedro.jpeg', },
            {title:'Marco Antônio', description:'COO - Founder', sourceImg:'./marco.jpeg', },
            {title:'Liam Cabral', description:'Partner founder', sourceImg:'./Liam.jpg', }
        ]
    })
}
</script>

<style lang="scss">
    .container-custom{
        max-width: 100%;
        width: 85%;
        display: flex;
    }
</style>