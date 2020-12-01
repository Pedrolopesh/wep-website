<template>
  <div>

    <div class="video">                            
            <div class="container_video">
                <video autoplay muted loop id="videoHere" class="size_video">
                    <source src="../assets/dj.mp4" type="video/mp4">
                        <!-- <source src="../images/video.mp4" type="video/mp4"> -->
                </video>
                
            </div>
            <div class="content_text">
               <span v-html="svgs_icons.wep_logo"></span>
            </div>
        </div>

  </div>
</template>

<script>
import svgs_icons from '../assets/svgs';

  export default {
    name: 'HelloWorld',

    components:{
      
    },

    data: () => ({
      svgs_icons:svgs_icons
    }),
  }
</script>
<style lang="scss">
.video { 
    display: block;
    position: relative;
    
    
    .container_video{
        // height: 92.5vh;
        overflow: hidden;
        
        @media screen and (max-width:500px) {
            // height: 50vh;
            overflow: hidden;
        }
        
        
        
        .size_video{
            max-width: 100%;
            width: 100%;
            // min-height: 50vh;
            box-sizing: border-box;
            display: block;
            background-color: white;
            background-size: cover;
            overflow: hidden;
            margin-right: auto;
            margin-left: auto;

            @media screen and (max-width:500px) {
                min-height: 0vh;
                
            }
        }
    }
    
    .content_text{
        min-height: 100%;
        position: absolute;
        left: 0;
        box-sizing: border-box;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        color: #f1f1f1;
        max-width: 100%;
        width: 100%;
        padding: 20px;
        

        svg{
          margin-left: auto;
          margin-right: auto;
          margin-top: 100px;
          display: block;
          max-width: 30%;
          width: 100%;
       
        }
        
        
        @media screen and (max-width:500px) {
            padding: 5px;
        }
        
        
        
        .title_video{
            font-size: 60px;
            @media screen and (max-width:700px) {
                font-size: 20px;
            }
        }
        
        .content_video{
            font-size: 40px;
            
            
            @media screen and (max-width:700px) {
                font-size: 15px;
            }
        }
    }
    
}
</style>