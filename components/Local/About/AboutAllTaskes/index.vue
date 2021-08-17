<template>
  <div >
    <div class="mt-4">
      <Title title="الأدوار" />
    </div>
    <div class="d-flex flex-wrap pb-4 justify-content-between">
      <div
        class="col-10  col-md-6 col-lg-3  mx-auto my-3"
        v-for="task in tasks"
        :key="task.id"
      >
        <div class="p-2">
          <div class="border bg-white  border-radius p-2">
            <img :src="task.img" />
            <h6 class="my-3 fw-bold">{{ task.title }}</h6>
            <ul>
              <li class="SecGrayColor MainFont my-2">{{ task.txt_one }}</li>
              <li v-if="task.txt_two" class="SecGrayColor MainFont">
                {{ task.txt_two }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Global/Title";
import axios from "axios";

export default {
  name: "AboutAllTaskes",
  components: {
    Title
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`Data.json`);
        this.tasks = res.data.AboutTaskes;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
<style scoped>
ul{
  padding: 0 18px 0 5px;
}
.border-radius {
  border-radius: 20px;
  min-height: 300px;
}
</style>
