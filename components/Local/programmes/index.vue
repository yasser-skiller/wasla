<template>
  <div>
      <Title title="البرامج التأهيلية" />

    <div class="container">
      <section v-if="programmes.length === 0" class="text-center">
        <h4>...لا يوجد منشورات لعرضها</h4>
      </section>
      <section class="d-flex flex-wrap justify-content-start my-5">
        <div
          class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 px-4"
          v-for="pro in programmes"
          :key="pro.id"
        >
          <div class="shadow-sm card heigth">
            <img :src="pro.thumbnail" class="card-img-top mx-auto" alt="img" />
            <div class="card-body">
              <h5 class="card-title fw-bold">
                {{ pro.title }}
              </h5>
              <p class="card-text SecGrayColor">{{ pro.description }}</p>
              <nuxt-link :to="`/ProgrammeDetails/${pro.slug}`" class="mainColor cursorPointer">
                <p>أقرا المزيد</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>

import config from "@/config";
import axios from "axios";
import Title from "@/components/Global/Title";

export default {
  name: "AllProgrames",
  components:{
    Title
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      programmes: []
    };
  },

  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `${config.apiUrl}/programs`
        );
        this.programmes = res.data;
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
}
.heigth {
  min-height: 400px;
}
</style>
