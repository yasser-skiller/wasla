<template>
  <div class="Footer">
    <div class="AbovePart">
      <div class="container">
        <div
          class="
            bg-MainColor
            p-4
            d-flex
            flex-column
            justify-content-center
            align-items-center
            FooterMidel
          "
        >
          <h2 class="text-white text-center">تواصل معنا لمعرفة المزيد</h2>
          <a target="_blank" :href="'https://api.whatsapp.com/send/?phone='+ socialData.whatsapp">
            <button
              type="button"
              class="btn btn-success text-success px-4 rounded bg-white mt-4"
            >
              <img src="./../../../assets/icon/whatsapp.svg" class="ml-2" />
              واتساب اب
            </button>
          </a>
        </div>
      </div>
    </div>

    <div class="bg-gray pt-5 border">
      <div class="container mt-5">
        <div
          class="
            mt-5
            d-flex
            flex-column
            justify-content-center
            align-items-center
          "
        >
          <div class="mt-5">
            <img src="./../../../assets/logo/logo.svg" />
          </div>

          <p class="col-8 text-center my-4">
            مؤسسة وصلة هي مؤسسة مجتمعية معتمدة في المملكة العربية السعودية برقم
            ( 020/000003 )، وبترخيص من الهيئة العامة للإعلام المرئي والمسموع
            برقم ( 57914 ) ، متخصصة في مجالات العلاقات العامة والاتصال
          </p>

          <div>
            <img src="./../../../assets/logo/Sec_logo.svg" class="Sec_logo" />
          </div>

          <ul class="d-flex flex-wrap justify-content-between mx-auto my-4">
            <div class="d-flex flex-wrap">
              <li class="mx-2">
                <a :href="'https://twitter.com/' + socialData.twitter" target="_blank" class="text-dark"
                  >{{socialData.twitter}}<img src="./../../../assets/icon/twitter.svg" class="m-1"
                /></a>
              </li>
              <li class="mx-2">
                <a target="_blank" :href="'https://api.whatsapp.com/send/?phone='+ socialData.whatsapp" class="text-dark">
                  {{socialData.whatsapp}}<img src="./../../../assets/icon/phone.svg" class="m-1"
                /></a>
              </li>
              <li class="mx-2">
                <a :href="'mailto:'+socialData.email" class="text-dark"
                  >{{socialData.email}}<img src="./../../../assets/icon/mail.svg" class="m-1"
                /></a>
              </li>
            </div>
          </ul>
          <hr />
          <p>جميع الحقوق محفوظة لمؤسسة وصلة&#169;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
import axios from "axios";


export default {
  name: "Footer",

  mounted() {
    this.fetchData();
  },
   data() {
    return {
      socialData: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const res = await axios.get(`${config.apiUrl}/settings`);
        this.socialData = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style  scoped>
input,
textarea {
  border-radius: 15px;
}
ul{
  list-style-type: none;
}
.Footer {
  position: relative;
  margin-top: 150px;
}
.AbovePart {
    position: absolute;
    bottom: 490px;
    width: 100%;
  }
  @media (max-width: 540px) {
    .AbovePart {
            bottom: 525px;
    }
    }
    @media (max-width: 440px) {
      .AbovePart {
              bottom: 660px;
      }
    }
.rounded {
  border-radius: 20px !important;
}

.FooterMidel {
  border-radius: 20px;
}
.Sec_logo {
  width: 90px;
}
hr {
  border: 1px solid #ebeef0;
  width: 100%;
}
</style>
