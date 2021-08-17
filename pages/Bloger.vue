<template>
  <div>
        <WaslaNave />
        <Blogers/>
        <CallUsParent />
        <Footer />

  </div>
</template>

<script>


import WaslaNave from '@/components/Global/WaslaNave';
import Blogers from '@/components/Local/Blogers';
import CallUsParent from '@/components/Global/CallUsParent';
import Footer from '@/components/Global/Footer';

export default {
  name: "AllProgrames",
  components: {
    WaslaNave,
    Blogers,
    CallUsParent,
    Footer
  },

};
</script>


