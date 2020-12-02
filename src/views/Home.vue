<template>
  <div class="home">
    
    <!-- <div v-bind="showMusic">
        <audio controls autoplay>
            <source src="../assets/audio.mp3" type="audio/mpeg">
            <source src="../assets/audio.mp3" type="audio/ogg">
          </audio>
                <embed height="1" type="audio/midi" width="144" src="../assets/audio.mp3" volume="60" loop="true" autostart="true" />        
    </div> -->

    <CoverSection/>
    <ExplainSection/>
    <ExplainAppSection/>
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
import TecInfoSection from '@/components/TecInfoSection.vue'
import FooterSection from '@/components/Footer.vue'

export default {
  
  name: 'Home',
  components: {
    CoverSection,
    ExplainSection,
    ExplainAppSection,
    TeamSection,
    TecInfoSection,
    FooterSection,
  },

  data:() => ({
    showMusic: false
  })
}
</script>
