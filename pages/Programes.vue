<template>
  <div>
        <WaslaNave />
        <Programmes/>
        <CallUsParent />
        <Footer />

  </div>
</template>

<script>


import WaslaNave from '@/components/Global/WaslaNave';
import Programmes from '@/components/Local/programmes';
import CallUsParent from '@/components/Global/CallUsParent';
import Footer from '@/components/Global/Footer';

export default {
  name: "AllProgrames",
  components: {
    WaslaNave,
    Programmes,
    CallUsParent,
    Footer
  },

};
</script>


