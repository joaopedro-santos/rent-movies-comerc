<template>
  <div
    class="image flex justify-center items-center sm:h-[77vh]"
  >
    <div class="container max-w-screen-xl mx-auto">
      <div class="grid lg:grid-cols-4 md:grid-cols-1 gap-4">
        <Card
          :title-card="'Usuário'"
          :icon-card="'fa-solid fa-user'"
          @click-card="router.push({ path: '/userList' })"
        />
        <Card
          :title-card="'Clientes'"
          :icon-card="'fa-solid fa-users'"
          @click-card="router.push({ path: '/clientList' })"
        />
        <Card
          :title-card="'Filmes'"
          :icon-card="'fa-solid fa-clapperboard'"
          @click-card="router.push({ path: '/movieList' })"
        />
        <Card
          :title-card="'Locação'"
          :icon-card="'fa-solid fa-video'"
          @click-card="router.push({ path: '/locationList' })"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.image {
  /* position: relative; */
  overflow: hidden;
}

.image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: 
    url("../assets/img/9560432.jpg");
  background-size: cover;
  background-position: center;
  z-index: -1;
  animation: slide 10s infinite linear;
}
</style>

<script lang="ts" setup>
import Card from "@/components/Card.vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>
