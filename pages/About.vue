<template>
  <div>
    <WaslaNave />
    <div class="bg-gray">
      <AboutSec />
      <AboutAllTaskes/>
    </div>
    <CallUsParent />
    <Footer />
  </div>
</template>
<script>
import AboutAllTaskes from "@/components/Local/About/AboutAllTaskes";
import AboutSce from "@/components/Local/About/AboutSec";
import WaslaNave from "@/components/Global/WaslaNave";

import CallUsParent from "@/components/Global/CallUsParent";

import Footer from "@/components/Global/Footer";

export default {
  name: "About",
  components: {
    WaslaNave,
    AboutSce,
    AboutAllTaskes,
    CallUsParent,
    Footer
  }
};
</script>
