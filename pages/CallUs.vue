<template>
  <div>
    <WaslaNave />
    <Programmes />
    <CallUsParent />
    <Footer />
  </div>
</template>

<script>
import WaslaNave from "@/components/Global/WaslaNave";
import CallUsParent from "@/components/Global/CallUsParent";
import Footer from "@/components/Global/Footer";

export default {
  name: "CallUs",
  components: {
    WaslaNave,
    CallUsParent,
    Footer
  }
};
</script>
