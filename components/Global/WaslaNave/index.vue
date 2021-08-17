<template>
  <div class="mb-4">
    <nav class="navbar navbar-expand-lg navbar-light col-11 mx-auto">
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex flex-column w-100 mx-auto">
          <ul
            class="col-11 d-flex flex-wrap justify-content-between mx-auto mb-0"
          >
            <div class="d-flex flex-wrap">
              <li class="mx-2">
                <a
                  target="_blank"
                  :href="'tel:' + socialData.whatsapp"
                  class="text-dark"
                  ><img src="./../../../assets/icon/phone.svg" class="m-1" />{{
                    socialData.whatsapp
                  }}</a
                >
              </li>
              <li class="mx-2">
                <a :href="'mailto:' + socialData.email" class="text-dark"
                  ><img src="./../../../assets/icon/mail.svg" class="m-1" />{{
                    socialData.email
                  }}</a
                >
              </li>
            </div>
            <div>
              <li class="mx-2">
                <a
                  :href="'https://twitter.com/' + socialData.twitter"
                  target="_blank"
                  class="text-dark"
                  ><img
                    src="./../../../assets/icon/twitter.svg"
                    class="m-1"
                  />{{ socialData.twitter }}</a
                >
              </li>
            </div>
          </ul>

          <ul class="col-11 mx-auto Parent_logo mb-0">
            <hr />
            <nuxt-link to="/">
              <img src="./../../../assets/logo/logo.svg" class="logo" />
            </nuxt-link>
            <hr />
          </ul>

          <ul class="navbar-nav col-11 mx-auto HraderFont">
            <div class="d-flex">
              <nuxt-link to="/" tag="li" class="nav-item" exact
                ><a class="nav-link">الرئيسية</a></nuxt-link
              >
              <nuxt-link to="/about" tag="li" class="nav-item"
                ><a class="nav-link">عن وصلة</a></nuxt-link
              >
              <nuxt-link to="/Programes" tag="li" class="nav-item"
                ><a class="nav-link">البرامج التأهلية</a></nuxt-link
              >
            </div>
            <div class="d-flex flex-wrap">
              <nuxt-link to="/Service" tag="li" class="nav-item"
                ><a class="nav-link">الخدمات الاستشارية</a></nuxt-link
              >
              <nuxt-link to="/Bloger" tag="li" class="nav-item"
                ><a class="nav-link">مدونة وصلة</a></nuxt-link
              >
              <nuxt-link to="/CallUs" tag="li" class="nav-item"
                ><a class="nav-link">اتصل بنا</a></nuxt-link
              >
            </div>
          </ul>
        </div>
      </div>

      <a class="navbar-brand" href="#">
        <img src="./../../../assets/logo/Sec_logo.svg" class="Sec_logo" />
      </a>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "WaslaNave",
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      socialData: []
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(
          `https://adminpanel.wasla.net/api/settings`
        );
        this.socialData = res.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
.navbar-nav {
  display: flex;
  justify-content: space-between;
}
.navbar-nav div {
  justify-content: space-between;
}
.HraderFont {
  font-size: 18px;
}
.Parent_logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.Parent_logo .logo {
  width: 120px;
}
.Parent_logo hr {
  width: calc(50% - 90px);
  border: 1px solid var(--GrayColor);
}
.Sec_logo {
  width: 80px;
}

.nuxt-link-active a,
.fas {
  color: var(--mainColor) !important;
}
.nav-link {
  font-weight: 700;
}
</style>
