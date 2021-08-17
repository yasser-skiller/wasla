<template>
  <div>
        <WaslaNave />
        <Services/>
        <CallUsParent />
        <Footer />

  </div>
</template>

<script>


import WaslaNave from '@/components/Global/WaslaNave';
import Services from '@/components/Local/Services';
import CallUsParent from '@/components/Global/CallUsParent';
import Footer from '@/components/Global/Footer';

export default {
  name: "AllProgrames",
  components: {
    WaslaNave,
    Services,
    CallUsParent,
    Footer
  },

};
</script>

