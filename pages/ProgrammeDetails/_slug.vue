<template>
  <div>
    <WaslaNave />

    <div class="bg-gray mb-5 raduis">
      <div
        class="d-flex flex-wrap m-0 mainColor py-5 px-2 justify-content-center"
      >
        <h5 class="fw-bold">الصفحة الرئيسية</h5>
        <span class="mx-2">></span>
        <h5 class="fw-bold">البرامج التأهيلية</h5>
        <span class="mx-2 secondSign">></span>
        <h5 class="">{{ programmes_Details.title }}</h5>
      </div>
    </div>
    <div class="container">
      <section class="d-flex flex-wrap">
        <div class="col-12 col-md-6 px-4">
          <div class="d-flex justify-content-center align-items-center">
            <img :src="programmes_Details.thumbnail" class="img" />
          </div>
        </div>
        <div class="col-12 col-md-6 px-4">
          <h4 class="fw-bold mb-3">وصف البرنامج</h4>
          <p>{{ programmes_Details.description }}</p>
          <ul class="SecGrayColor">
            <li v-for="ele in programmes_Details.programmEle" :key="ele.id">
              {{ ele }}
            </li>
          </ul>
        </div>
      </section>
      <section class="my-5">
        <div class="text-center">
          <h4 class="fw-bold">محتوي البرنامج</h4>
          <p>{{ programmes_Details.content }}</p>
        </div>
        <section class="d-flex flex-wrap justify-content-start my-5 child">
          <div
            class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 px-4"
            v-for="info in programmes_Details_units"
            :key="info.id"
          >
            <div class="shadow-sm border text-right py-3 ">
              <h6 class="SecGrayColor text-center">{{ info.unit_number }}</h6>
              <p class="mainColor text-center">{{ info.unit_title }}</p>
              <ul
                class="SecGrayColor text-right disc"
                v-html="info.unit_content"
              ></ul>
            </div>
          </div>
        </section>
        <div class="px-4">
          <p class="font-weight-bold">
            مدة البرنامج :
            <span class="mainColor"
              ><span class="fw-bold">{{ programmes_Details.duration }}</span>
            </span>
          </p>
        </div>
      </section>
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
  name: "ProgrammeDetailsParent",
  components: {
    WaslaNave,
    CallUsParent,
    Footer
  },
  data() {
    return {
      programmes_Details: [],
      programmes_Details_units: []
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
          `${config.apiUrl}/programs/${this.$route.params.slug}`
        );
        console.log("Asdad",res)
        this.programmes_Details = res.data;
        this.programmes_Details_units = JSON.parse(res.data.units);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
.img {
  width: 350px;
  height: 250px;
  border-radius: 15px;
}
.active {
  display: none;
}
.raduis {
  border-radius: 0 0 90px 90px;
}
.child ul {
  min-height: 180px;
  list-style-type: disc;
}
</style>
