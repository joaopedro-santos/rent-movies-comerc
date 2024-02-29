<template>
  <div
    class="bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-no-repeat p-5 md:p-10 relative -z-10 -mt-[85px]"
    style="
      background-image: url('https://images8.alphacoders.com/132/1323294.jpeg');
      height: 500px;
    "
  >
    <div class="max-w-screen-xl mx-auto">
      <h1
        class="flex mb-10 mt-20 md:mb-10 font-bold text-3xl md:text-5xl text-white z-10 relative max-sm:justify-center max-sm:mt-20 max-sm:text-4xl"
      >
        Lista de Clientes
      </h1>
    </div>
  </div>

  <div class="max-w-screen-xl mx-auto mt-5">
    <div class="flex max-sm:flex-col max-sm:px-2 gap-4 mb-2 lg:mr-[10%]">
      <input
        v-model="searchName"
        placeholder="Buscar por nome..."
        class="p-2 border rounded-md"
      />
      <input
        v-model="searchDocument"
        placeholder="Buscar por documento..."
        class="p-2 border rounded-md"
      />
      <select v-model="filterStatus" class="p-2 border rounded-md">
        <option value="all">Todos</option>
        <option value="ativo">Ativos</option>
        <option value="inativo">Inativos</option>
      </select>
    </div>
    <div class="flex justify-center items-center">
      <div class="container bg-white rounded-lg p-2">
        <ag-grid-vue
          class="ag-theme-quartz"
          :rowData="filteredData"
          :columnDefs="colDefs"
          checkboxSelection="false"
          rowSelection="single"
          style="height: 40rem; width: auto"
          @cellClicked="cellWasClicked"
        >
        </ag-grid-vue>
        <div class="container flex justify-end mt-1 mb-1">
          <button
            :disabled="disableButton"
            class="p-3 bg-red-500 rounded-lg text-white m-1 max-sm:w-full"
            @click="deleteClient"
          >
            <i class="fa-solid fa-trash"></i> Excluir
          </button>
          <button
            :disabled="disableButton"
            class="p-3 bg-blue-500 rounded-lg text-white m-1 max-sm:w-full"
            @click="update"
          >
            <i class="fa-solid fa-pen"></i> Editar
          </button>
          <button
            class="p-3 bg-green-400 rounded-lg text-white m-1 max-sm:w-full"
            @click="addNew"
          >
            <i class="fa-solid fa-user-plus"></i> Novo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridVue } from "ag-grid-vue3"; // Vue Grid Logic
import { inject, ref } from "vue";
import { useRouter } from "vue-router";
import { useClientStore } from "@/stores/client";
import { computed } from "vue";

const swal: any = inject("$swal");
const client = useClientStore();
const router = useRouter();
const disableButton = ref(true);
const idClient = ref(0);
const searchName = ref("");
const searchDocument = ref("");
const filterStatus = ref("all");

const filteredData = computed(() => {
  return rowData.value.filter((item) => {
    const nameMatch = item.nome
      .toLowerCase()
      .includes(searchName.value.toLowerCase());
    const documentMatch = item.cpf.includes(searchDocument.value);
    const statusMatch =
      filterStatus.value === "all" || item.status === filterStatus.value;

    return nameMatch && documentMatch && statusMatch;
  });
});

const rowData = ref([
  {
    id: 0,
    nome: "João Pedro",
    sobreNome: "Santos",
    cpf: "1121123123",
    email: "joaopedro@email.com",
    celular: "11 1313123",
    cep: "03314000",
    logradouro: "Rua Vilela",
    bairro: "Tatuapé",
    cidade: "São Paulo",
    uf: "SP",
    status: "ativo",
  },
]);

rowData.value = client.clientData;

const colDefs = ref([
  { field: "id", sortable: true, filter: false },
  { field: "nome", sortable: true, filter: false },
  { field: "sobreNome", sortable: true, filter: false },
  { field: "cpf", sortable: true, filter: false },
  { field: "email", sortable: true, filter: false },
  { field: "celular", sortable: true, filter: false },
  { field: "cep", sortable: true, filter: false },
  { field: "logradouro", sortable: true, filter: false },
  { field: "bairro", sortable: true, filter: false },
  { field: "cidade", sortable: true, filter: false },
  { field: "uf", sortable: true, filter: false },
  { field: "status", sortable: true, filter: false },
]);

const cellWasClicked = (event: any) => {
  idClient.value = event.data.id;
  disableButton.value = false;
  client.updateClientSet(event.data);
};

const addNew = () => {
  client.isUpdateClientSet(false);
  router.push({ path: "/registerClient" });
};

const update = () => {
  client.isUpdateClientSet(true);
  router.push({ path: "/registerClient" });
};

const deleteClient = () => {
  swal
    .fire({
      title: "Atenção!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim",
      cancelButtonText: "cancelar",
      text: "Tem certeza que deseja excluir esse cliente?",
    })
    .then((result: any) => {
      if (result.isConfirmed) {
        client.deleteClient(idClient.value).then((res) => {
          if (res) {
            swal
              .fire({
                title: "Tudo Certo!",
                icon: "success",
                confirmButtonText: "Ok",
                text: "Cliente excluido com sucesso!",
              })
              .then((result: any) => {
                window.location.reload();
              });
          }
        });
      }
    });
};
</script>