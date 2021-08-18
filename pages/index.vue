<template>
  <div>

    <WaslaNave />
    <Slider/>
    <div class="bg-gray">
      <AboutSec />
      <AboutAllTaskes/>
    </div>
    <Programmes />
    <Services />
    <Blogers/>
    <CallUsParent/>
    <Footer />
  </div>
</template>

<script>
import WaslaNave from '@/components/Global/WaslaNave';
import Slider from '@/components/Local/Slider';
import AboutSec from'@/components/Local/About/AboutSec';
import AboutAllTaskes from'@/components/Local/About/AboutAllTaskes';
import Programmes from '@/components/Local/programmes';
import Services from '@/components/Local/Services';
import Blogers from '@/components/Local/Blogers';
import CallUsParent from '@/components/Global/CallUsParent';
import Footer from '@/components/Global/Footer';
export default {
  components:{
    WaslaNave,
    Slider,
    AboutSec,
    AboutAllTaskes,
    Programmes,
    Services,
    Blogers,
    CallUsParent,
    Footer,
  },
}
</script>
