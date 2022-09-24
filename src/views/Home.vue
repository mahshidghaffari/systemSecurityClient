<template>
  <div class="container-fluid px-0 main-img">
    <div class="login-page wallpaper-login">
      <div class="container ">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login">
              <h1>Sign In</h1>
              <form class="form-group">
                <input v-model="userInfo.username"  class="form-control mb-4" placeholder="Username" required>
                <input v-model="userInfo.password" class="form-control mb-4" placeholder="Password" required>
                <input v-model="userInfo.delay" type="number" class="form-control mb-4" placeholder="delay time" required>
                <input v-model="steps" class="form-control mb-4" placeholder="actions" required>
                <v-btn type="submit" class="btn btn-primary" @click="login">submit</v-btn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import { mapState, mapActions } from "vuex";


export default {
  data: () => ({
    userInfo: {
      username: '',
      password: '',
      delay: null,
      actions:[]
    },
    username: null,
    password: null,
    steps: ""

  }),
  computed: {
    ...mapState("firstModule", ["offers"])
  },
  methods: {
    ...mapActions({
      getInitial: "firstModule/" + ["getInitial"]
    }),

    splitor(str) {
      return str.split(",");
    },
    login() {
      console.log();
      this.userInfo.actions = this.splitor(this.steps);
      // this.postLogin(this.userInfo);
      this.getInitial()
    }
  }
};
</script>

<style scoped>
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.login-page {
  align-items: center;
  display: flex;
  height: 100vh;
}

.wallpaper-login {
  background: url("../assets/main-bg.jpg");
  no-repeat: center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}

h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}

</style>
