<template>
  <div class="container-fluid px-0 main-img">
    <div class="login-page wallpaper-login">

      <div class="container ">
        <div class="row">
          <b-alert show v-if="successAlert" variant="success" class="w-100">
            {{ errorMsg }}
            <button type="button" class="close" aria-label="Close" @click="successAlert=!successAlert">
              <span aria-hidden="true">&times;</span>
            </button>
          </b-alert>
        </div>
        <div class="row">
          <b-alert class="w-100 alert-dismissible" show v-if="failAlert" variant="danger">
            {{ errorMsg }}
            <button type="button" class="close" aria-label="Close" @click="failAlert=!failAlert">
              <span aria-hidden="true">&times;</span>
            </button>
          </b-alert>
        </div>


        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login">
              <h1>Sign In</h1>
              <input v-model="userInfoLogin.id" class="form-control mb-4" placeholder="Username" required>
              <b-input-group  class=" mb-4">
                <b-form-input v-if="showLoginPass" v-model="userInfoLogin.password" placeholder="Password" type="text"></b-form-input>
                <b-form-input v-else v-model="userInfoLogin.password" placeholder="Password" type="password"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-primary" @click="showLoginPass = !showLoginPass">
                    <b-icon icon="eye" font-scale="1"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <input v-model="userInfoLogin.actions.delay" type="number" class="form-control mb-4"
                     placeholder="delay time"
                     required>
              <input v-model="steps" class="form-control mb-1" placeholder="actions:" required>
              <small class="mb-4 text-left text-secondary">Separate each action by " , ". ex:2,3,5</small>
              <button class="btn btn-primary" @click="login">Log in</button>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div class="card login">
              <h1>Log out</h1>
              <input v-model="userInfoLogout.id" class="form-control mb-4" placeholder="Username" required>
              <b-input-group  class=" mb-4">
                <b-form-input v-if="showLogoutPass" v-model="userInfoLogout.password" placeholder="Password" type="text"></b-form-input>
                <b-form-input v-else v-model="userInfoLogout.password" placeholder="Password" type="password"></b-form-input>
                <b-input-group-append>
                  <b-button variant="outline-primary" @click="showLogoutPass = !showLogoutPass">
                    <b-icon icon="eye" font-scale="1"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
              <button class="btn btn-primary" @click="logout">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000";

export default {
  data: () => ({
    steps: "",
    successAlert: false,
    failAlert: false,
    errorMsg: "",
    successMsg: "Success Alert",
    userInfoLogin: {
      id: "",
      password: "",
      server: {
        ip: "",
        port: ""
      },
      actions: {
        delay: "",
        steps: []
      }
    },
    userInfoLogout: {
      id: "",
      password: "",
      server: {
        ip: "",
        port: ""
      }
    },
    showLoginPass: false,
    showLogoutPass:false
  }),
  computed: {},
  methods: {
    login() {
      if (!this.userInfoLogin.id || !this.userInfoLogin.password || !this.userInfoLogin.server.ip || !this.userInfoLogin.server.port) {
        this.successAlert = false;
        this.failAlert = true;
        this.errorMsg = `One of the inputs are empty`;
      } else {
        this.userInfoLogin.actions.steps = this.steps.split(",");
        return axios({
          method: "post",
          url: "/",
          changeOrigin: true,
          data: this.userInfoLogin
        }).then((response) => {
          if (response.data.category === "Fail") {
            this.successAlert = false;
            this.failAlert = true;
            this.errorMsg = response.data.message;
          } else if (response.data.category === "Success") {
            this.errorMsg = response.data.message;
            this.successAlert = true;
          }
        })
          .catch(() => {
            this.successAlert = false;
            this.failAlert = true;
            this.errorMsg = "server Error- Bad request";
          });
      }
    },
    logout() {
      if (!this.userInfoLogout.id || !this.userInfoLogout.password || !this.userInfoLogout.server.ip || !this.userInfoLogout.server.port) {
        this.successAlert = false;
        this.failAlert = true;
        this.errorMsg = `One of the inputs are empty`;
      } else {
        return axios({
          method: "post",
          url: "/logout",
          changeOrigin: true,
          data: this.userInfoLogout
        }).then((response) => {
          if (response.data.category === "Fail") {
            this.successAlert = false;
            this.failAlert = true;
            this.errorMsg = response.data.message;
          } else if (response.data.category === "Success") {
            this.errorMsg = response.data.message;
            this.successAlert = true;
          }

        })
          .catch(() => {
            this.successAlert = false;
            this.failAlert = true;
            this.errorMsg = "server Error - Bad request";
          });
      }
    },
    text(url) {
      return fetch(url).then(res => res.text());
    },
    getIP() {
      this.userInfoLogin.server.port = window.location.protocol + "//" + window.location.host;
      this.userInfoLogout.server.port = window.location.protocol + "//" + window.location.host;
      this.text("https://www.cloudflare.com/cdn-cgi/trace").then(data => {
        let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
        this.userInfoLogin.server.ip = data.match(ipRegex)[0];
        this.userInfoLogout.server.ip = data.match(ipRegex)[0];
      });
    }
  },
  created() {
    this.getIP();
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
