<template>
  <div class="container-fluid px-0">
    <article class="main-img" align-self="center">
      <section class="align-self-center">
        <h1>Stylish portolio</h1>
        <span>a vue bootstrap sampmle one </span>
        <button class="btn btn-xl btn-light">Find Out More</button>
      </section>
    </article>
    <article id="find-more" class="white-section">
      <section>
        <h3>This is stylish portolio and Also sample One</h3>
        <span
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis
          libero est. In hac habitasse platea dictumst. Sed eu mi nulla.</span
        >
        <button class="btn btn-xl btn-dark">What We Offer</button>
      </section>
    </article>

    <article id="offers" class="blue-section">
      <section>
        <h2>What it can be offer in here</h2>
        <div class="row">
          <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <div class="icon mx-auto">
              <!-- <i class="fas" :class="offer.icon"></i> -->
              <!-- <h4>{{ offer.title }}</h4> -->
              <!-- <span>{{ offer.desc }}</span> -->
              {{ test }}
            </div>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("firstModule", ["test"]),
  },
};
</script>

<style scoped>
article {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 0 10px;
}

.btn-xl {
  padding: 20px 35px;
  font-family: serif;
  font-size: 1.25rem;
}

.main-img,
.second-img {
  min-height: 100vh;
  background-size: cover !important;
  padding: 0 10px;
  text-align: center;
}

.main-img h1,
.second-img h1 {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 30px;
}

.main-img span,
.second-img span {
  display: block;
  padding-bottom: 30px;
  font-size: 1.6rem;
  font-weight: bold;
}

.main-img {
  background: url("../assets/bg-first.jpg") center center;
}

.second-img {
  background: url("../assets/bg-first.jpg") center center;
}

.white-section {
  padding: 120px 10px;
  background-color: #fff;
  text-align: center;
}

.white-section h3 {
  font-size: 2rem;
  font-weight: bold;
}

.white-section span {
  display: block;
  padding-bottom: 30px;
  font-size: 1.25rem;
}
</style>
