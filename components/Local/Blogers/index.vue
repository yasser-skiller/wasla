<template>
  <div>
      <Title title=" المدونة" />

    <div class="container">
      <section v-if="Bloger.length === 0" class="text-center">
        <h4>...لا يوجد منشورات لعرضها</h4>
      </section>
      <section class="d-flex flex-wrap justify-content-start my-5">
        <div
          class="col-12 col-sm-8 col-md-6 col-lg-4 mx-auto my-3 px-4"
          v-for="blog in Bloger"
          :key="blog.id"
        >
          <div class="shadow-sm card heigth">
            <img :src="blog.thumbnail" class="card-img-top mx-auto" alt="img" />
            <div class="card-body">
              <h5 class="card-title fw-bold">
                {{ blog.title }}
              </h5>
              <p class="card-text SecGrayColor">{{ blog.description }}</p>
              <nuxt-link :to="`/BlogerDetails/${blog.slug}`" class="mainColor cursorPointer">
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
  name: "Blogers",
  components:{
    Title
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Bloger: []
    };
  },

  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `${config.apiUrl}/posts`
        );
        this.Bloger = res.data;
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
