<template>
    <div>
        <div class="text_section margin_section p15">
            <h1 class="alg-txt-c mt-10">Um app de EVENTOS?</h1>
            <p class="alg-txt-c font-size-20 mt-3">Exatamente, um aplicativo de eventos com muitas possibilidades, além de saber o que ta rolando pela sua régião, é possível você criar seu próprio evento!</p>
        </div>


        <EventCard/>

        <span class="mb-10"></span>

    </div>
</template>
<script>
import EventCard from './cpmCard'
export default {
    components:{
        EventCard
    }
}
</script>
<style lang="scss">
    
</style>