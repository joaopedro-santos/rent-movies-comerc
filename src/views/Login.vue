<template>
  <section class="flex justify-center items-center h-screen">
    <div class="w-96 m-5 rounded-2xl shadow-xl p-10 bg-white">
      <figure class="flex justify-center">
        <i class="fa-solid fa-g text-6xl text-cyan-500"></i>
      </figure>
      <form class="mt-16">
        <InputText
          :label-name="'Usuário'"
          :iput-name="'userName'"
          v-model:model-value="userName"
        />
        <InputPassword
          :label-name="'Senha'"
          iput-name="'password'"
          v-model:model-value="password"
        />
        <button
          @click="submitLogin"
          class="bg-blue-500 text-white px-4 py-2 rounded-md w-full mt-6"
        >
          Entrar
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import InputPassword from "@/components/InputPassword.vue";
import { useRouter } from "vue-router";
import { inject, ref } from "vue";
import { useUserStore } from "@/stores/user";

const user = useUserStore();
const swal: any = inject("$swal");
const userName = ref("");
const password = ref("");
const router = useRouter();

const submitLogin = async () => {
  try {
    if (userName.value === "" || password.value === "") {
      swal.fire({
        title: "Erro!",
        icon: "error",
        text: "Por favor, informe Usuário e Senha!",
      });
    } else {
      const res = await user.login(userName.value, password.value);

      if (res === false) {
        swal.fire({
          title: "Algo deu errado!",
          icon: "error",
          text: "Usuário não encontrado!",
        });
      } else {
        //@ts-ignore
        client.clientData.push(...client.clientMock);
        await router.push({ path: "/home" });
      }
    }
  } catch (error) {
    console.error("Erro durante o login:", error);
    location.reload();
  }
};
</script>
