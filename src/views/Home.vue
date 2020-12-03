<template>
  <div class="home">
    

    <CoverSection/>

    <!-- class="hiden-music" -->
      <div class="custom-music p15" v-bind="showMusic">
        <h2 class="alg-txt-c"> Colocamos uma música para melhorar suas experiência em nosso site, se quiser pode pausar 😎</h2>
          <audio class="ac d-block" controls autoplay>
              <source src="../assets/audio.mp3" type="audio/mpeg">
              <source src="../assets/audio.mp3" type="audio/ogg">
            </audio>
            <embed height="1" type="audio/midi" width="144" src="../assets/audio.mp3" volume="10" loop="true" autostart="true" />        
      </div>

    <ExplainSection/>
    <ExplainAppSection/>
    <LocalSection />
    <TecInfoSection/> 
    <TeamSection/>
    <FooterSection />


  </div>
</template>

<script>
// @ is an alias to /src
import CoverSection from '@/components/CoverSection.vue'
import ExplainSection from '@/components/ExplainSection.vue'
import ExplainAppSection from '@/components/ExplainAppSection.vue'
import TeamSection from '@/components/TeamSection.vue'
import LocalSection from '@/components/LocalSection.vue'
import TecInfoSection from '@/components/TecInfoSection.vue'
import FooterSection from '@/components/Footer.vue'

export default {
  
  name: 'Home',
  components: {
    CoverSection,
    ExplainSection,
    ExplainAppSection,
    LocalSection,
    TeamSection,
    TecInfoSection,
    FooterSection,
  },

  data:() => ({
    showMusic: false
  })
}
</script>
<style lang="scss">
.custom-music{
  margin-top: 50px;
  max-width: 100%;
  width: 100%;

  audio{
    margin-top: 20px;
  }
}
  .hiden-music{
    display: none;
  }
</style>