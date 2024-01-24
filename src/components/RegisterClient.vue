<template>
  <div class="flex justify-center items-center mt-40">
    <div class="container bg-white rounded-lg p-10">
      <form>
        <div v-if="step === 1">
          <h2 class="text-lg font-semibold mb-4 col-span-12">
            Informações Pessoais
          </h2>
          <div class="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1 gap-2">
            <div class="mb-4">
              <InputText
                :label-name="'Nome'"
                :iput-name="'Nome'"
                v-model:model-value="clientData.nome"
              />
            </div>

            <div class="mb-4">
              <InputText
                :label-name="'Sobrenome'"
                :iput-name="'SobreNome'"
                v-model:model-value="clientData.sobreNome"
              />
            </div>
            <div class="mb-4">
              <InputText
                :label-name="'Cpf'"
                :iput-name="'Cpf'"
                v-model:model-value="clientData.cpf"
              />
            </div>
          </div>
        </div>

        <div v-if="step === 2">
          <h2 class="text-lg font-semibold mb-4">Contatos</h2>
          <div class="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
            <div class="mb-4">
              <InputEmail
                :label-name="'E-mail'"
                :iput-name="'Email'"
                v-model:model-value="clientData.email"
              />
            </div>
            <div class="mb-4">
              <InputText
                :label-name="'Celular'"
                :iput-name="'Celular'"
                v-model:model-value="clientData.celular"
              />
            </div>
          </div>
        </div>

        <div v-if="step === 3">
          <h2 class="text-lg font-semibold mb-4">Endereço</h2>
          <div class="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 gap-2">
            <div class="mb-4">
              <InputText
                :label-name="'Cep'"
                :iput-name="'Cep'"
                v-model:model-value="clientData.cep"
                @blur-event="searchCep"
              />
            </div>
            <div class="mb-4">
              <InputText
                :label-name="'Logradouro'"
                :iput-name="'Logradouro'"
                v-model:model-value="clientData.logradouro"
              />
            </div>
            <div class="mb-4">
              <InputText
                :label-name="'Bairro'"
                :iput-name="'Bairro'"
                v-model:model-value="clientData.bairro"
              />
            </div>
            <div class="mb-4">
              <InputText
                :label-name="'Cidade'"
                :iput-name="'Cidade'"
                v-model:model-value="clientData.cidade"
              />
            </div>
            <div class="mb-4">
              <div class="mb-4">
                <SelectComponent
                  :title="'Uf'"
                  v-model:model-value="clientData.uf"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between mt-8">
          <button
            v-if="step > 1"
            @click.prevent="previousStep"
            class="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Anterior
          </button>
          <button
            v-if="step < 3 && validarEtapaAtual"
            @click.prevent="nextStep"
            class="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Próximo
          </button>
          <button
            @click="submitForm"
            v-if="step === 3 && validarEtapaAtual && isUpdateClient === false"
            type="button"
            class="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Enviar
          </button>
          <button
            v-if="step === 3 && validarEtapaAtual && isUpdateClient === true"
            @click="update"
            type="button"
            class="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Editar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, ref } from "vue";
import InputText from "@/components/InputText.vue";
import InputEmail from "@/components/InputEmail.vue";
import SelectComponent from "@/components/SelectComponent.vue";
import { useClientStore } from "@/stores/client";
import router from "@/router";
const client = useClientStore();
const swal: any = inject("$swal");
const step = ref(1);
const isUpdateClient = ref(false);

const clientData = ref({
  id: Math.random(),
  nome: "",
  sobreNome: "",
  cpf: "",
  email: "",
  celular: "",
  cep: "",
  logradouro: "",
  bairro: "",
  cidade: "",
  uf: "",
});

onMounted(() => {
  isUpdateClient.value = JSON.parse(
    localStorage.getItem("isUpdateClient") || "{}"
  );
  if (isUpdateClient.value) {
    clientData.value = JSON.parse(
      localStorage.getItem("clientDataUpdatde") || "{}"
    );
  }
});

const validarEtapaAtual = computed(() => {
  if (step.value === 1) {
    return (
      clientData.value.nome !== "" &&
      clientData.value.sobreNome !== "" &&
      clientData.value.cpf !== ""
    );
  } else if (step.value === 2) {
    return clientData.value.email !== "" && clientData.value.celular !== "";
  } else if (step.value === 3) {
    return (
      clientData.value.cep !== "" &&
      clientData.value.logradouro !== "" &&
      clientData.value.bairro !== "" &&
      clientData.value.cidade !== "" &&
      clientData.value.uf !== ""
    );
  } else {
    return true;
  }
});

const submitForm = () => {
  client.createClient(clientData.value).then((res) => {
    if (res) {
      swal
        .fire({
          title: "Tudo Certo!",
          icon: "success",
          text: "Cadastro realizado com sucesso!",
        })
        .then((result: any) => {
          clearForm();
        });
    }
  });
};

const update = () => {
  client.updateClient(clientData.value).then((res) => {
    if (res) {
      swal
        .fire({
          title: "Tudo Certo!",
          icon: "success",
          text: "Dados alterados com sucesso!",
        })
        .then((result: any) => {
          router.push({ path: "/clientList" });
        });
    }
  });
};

const searchCep = () => {
  client.searchCep(clientData.value.cep).then((res) => {
    clientData.value.bairro = res?.data.bairro;
    clientData.value.cidade = res?.data.localidade;
    clientData.value.logradouro = res?.data.logradouro;
    clientData.value.uf = res?.data.uf;
  });
};

const nextStep = () => {
  if (validarEtapaAtual) {
    step.value++;
  }
};

const previousStep = () => {
  step.value--;
};
const clearForm = () => {
  window.location.reload();
};
</script>
