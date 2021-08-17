<template>
  <div>
    <WaslaNave />

    <div class="bg-gray mb-5 raduis2">
      <div
        class="d-flex flex-wrap m-0 mainColor py-5 px-2 justify-content-center"
      >
        <h5 class="fw-bold">الصفحة الرئيسية</h5>
        <span class="mx-2">></span>
        <h5 class="fw-bold">الخدمات الاستشارية</h5>
        <span class="mx-2 secondSign">></span>
        <h5 class="">{{ ServicesDetails.title }}</h5>
      </div>
    </div>
    <div class="container">
      <section class="d-flex flex-wrap">
        <div class="col-12 col-md-5 px-4">
          <div class="d-flex justify-content-center align-items-center my-3">
            <img :src="ServicesDetails.thumbnail" class="img" />
          </div>
        </div>
        <div class="col-12 col-md-6 px-4 my-3">
          <h4 class="fw-bold mb-3">وصف البرنامج</h4>
          <p class="SecGrayColor">{{ ServicesDetails.description }}</p>
        </div>
      </section>
      <section class="my-5 p-4 bg-white border shadow radius">
        <h4 class="fw-bold mb-3">محتويات الخدمة</h4>
        <p class="SecGrayColor">خطة استراتيجية اتصالية تشمل</p>
        <ul class="my-3">
          <li v-for="item in ServicesDetails.content" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </section>

      <div class="d-flex justify-content-center my-5">
        <button
          @click="isActive = flase"
          type="submit"
          class="mt-4 px-4 py-2 btn btn-primary bg-MainColor border border-danger"
        >
          اطلب الخدمة
        </button>
      </div>
      <div :class="{ active: isActive }" class="paclose">
        <div @click="isActive = true" class="close">x</div>
        <AskService />
      </div>
    </div>
    <CallUsParent />
    <Footer />
  </div>
</template>
<script>
import axios from "axios";

import AskService from "@/components/Global/AskService";
import WaslaNave from "@/components/Global/WaslaNave";

import CallUsParent from "@/components/Global/CallUsParent";

import Footer from "@/components/Global/Footer";
export default {
  name: "ServiceDetailsParent",
  components: {
    AskService,
    WaslaNave,
    CallUsParent,
    Footer
  },
  data() {
    return {
      isActive: true,
      ServicesDetails: []
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
          `https://adminpanel.wasla.net/api/services/${this.$route.params.slug}`
        );
        this.ServicesDetails = res.data;
        console.log(res.data);
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
.active {
  display: none;
}
button {
  border-radius: 20px;
}

.paclose {
  position: relative;
}
.close {
  position: fixed;
  width: 20px;
  height: 20px;
  top: 35px;
  right: 21%;
  z-index: 100;
  color: crimson;
  cursor: pointer;
}
@media (max-width: 767px) {
  .close {
    right: 15%;
  }
}
.radius {
  border-radius: 20px !important;
}
.raduis2 {
  border-radius: 0 0 90px 90px;
}
</style>
