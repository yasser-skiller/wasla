<template>
  <div class="Slider">
    <div class="slide">
      <img :src="Slider_imgs[Select]" />
    </div>
    <div class="paPatrent">
      <h4 @click="Next" class="fw-bold cursorPointer text-white">&#10094;</h4>
      <h4 @click="Pre" class="fw-bold cursorPointer text-white">&#10095;</h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Slider",

  mounted() {
    this.fetchData();
    this.RandomImg();
  },
  data() {
    return {
      Select: 0,
      Slider_imgs: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`https://adminpanel.wasla.net/api/slider`);
        this.Slider_imgs = res.data;
        this.Select = 0;
      } catch (error) {
        console.log(error);
      }
    },
    RandomImg() {
      setInterval(() => {
        this.Next;
      }, 900000);
    },
    Next() {
      if (this.Select + 1 === this.Slider_imgs.length) {
        this.Select = -1;
        this.Select++;
      } else {
        this.Select++;
      }
    },
    Pre() {
      if (this.Select + 1 === this.Slider_imgs.length) {
        this.Select--;
      }
      if (this.Select === 0) {
        null;
      } else {
        this.Select--;
      }
    }
  }
};
</script>

<style scoped>
.Slider {
  position: relative;
}
.Slider .paPatrent {
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: 50%;
  top: 50%;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
}
.Slider .paPatrent span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: gray;
  margin: 0 5px;
}
.slide {
  width: 100%;
  height: 450px;
}
@media (max-width: 767px) {
  .slide {
    height: 200px;
  }
}
.slide img {
  width: 100%;
  height: 100%;
}
</style>
