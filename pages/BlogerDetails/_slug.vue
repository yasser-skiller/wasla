<template>
  <div>
    <WaslaNave />
    <div class="bg-gray mb-5 raduis">
      <div
        class="d-flex flex-wrap m-0 mainColor py-5 px-2 justify-content-center"
      >
        <h5 class="fw-bold">الصفحة الرئيسية</h5>
        <span class="mx-2">></span>
        <h5 class="fw-bold">مدونة وصلة</h5>
        <span class="mx-2 secondSign">></span>
        <h5 class="">{{ Blogers_Details.title }}</h5>
      </div>
    </div>
    <div class="container">
      <div class="col-12">
        <img :src="Blogers_Details.thumbnail" class="img" />
      </div>
      <div class="my-5">
        <h5 class="fw-bold">{{ Blogers_Details.title }}</h5>
        <p class="SecGrayColor my-3" v-html="Blogers_Details.description"></p>
      </div>
    </div>
    <CallUsParent />
    <Footer />
  </div>
</template>
<script>
import config from "@/config";
import axios from "axios";
import WaslaNave from "@/components/Global/WaslaNave";

import CallUsParent from "@/components/Global/CallUsParent";

import Footer from "@/components/Global/Footer";
export default {
  name: "BlogersDetailsParent",
  components: {
    WaslaNave,
    CallUsParent,
    Footer
  },
  data() {
    return {
      Blogers_Details: []
    };
  },
  mounted() {
    document.documentElement.scrollTop = 0;
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `${config.apiUrl}posts/${this.$route.params.slug}`
        );
        this.Blogers_Details = res.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
.img {
  width: 100%;
  height: 300px;
  border-radius: 25px;
}
.raduis {
  border-radius: 0 0 90px 90px;
}
</style>
