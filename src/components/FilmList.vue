<template>
  <div
    class="bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-no-repeat p-5 md:p-10 relative"
    style="
      background-image: url('https://wallpapers.com/images/featured/blade-runner-2049-ln4wirn5204bujot.jpg');
      height: 400px;
    "
  >
    <!-- Gradiente -->

    <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-50"></div>

    <h1 class="flex mb-6 md:mb-10 font-bold text-3xl md:text-5xl text-white lg:ml-[10%] z-10 relative max-sm:justify-center max-sm:mt-20 max-sm:text-4xl">
      Lista de Filmes
    </h1>

    <div class="flex max-sm:flex-col gap-2 justify-center items-center px-4 md:px-60 mt-6 md:mt-52 z-10 max-sm:mt-20">
      <input
        placeholder="Buscar por Filmes..."
        type="text"
        id="search"
        v-model="searchTerm"
        @input="handleSearchInput"
        class="rounded-lg w-full md:w-96 z-10 max-sm:w-full"
      />

      <input
        type="number"
        v-model="selectedYear"
        class="rounded-lg z-10 max-sm:w-full"
        placeholder="Buscar por ano..."
      />

      <button @click="searchByYear" class="rounded-lg px-4 py-2 z-10 bg-[#8DCEA3] font-semibold text-[#032541] max-sm:w-full">
        Pesquisar por Ano
      </button>

      <div v-if="showRentModal" class="overlay">
        <div class="modal">
          <h3 class="text-xl font-bold mb-4">{{ selectedMovie?.Title }}</h3>
          <p class="text-gray-600">{{ selectedMovie?.Type }}</p>
          <p class="text-gray-600 mb-2">{{ selectedMovie?.Year }}</p>
          <label for="returnDate" class="block text-sm font-medium text-gray-700">Data de Devolução:</label>
          <input
            v-model="returnDate"
            type="date"
            id="returnDate"
            name="returnDate"
            class="mt-1 p-2 border rounded-md w-full"
          />
          <button @click="rentMovie" class="mt-4 bg-[#032541] text-[#8DCEA3] px-5 py-2 rounded-lg font-bold w-full">
            Alugar
          </button>
          <button @click="closeRentModal" class="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg font-bold w-full">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center items-center">
    <div class="container bg-white rounded-lg p-2">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-between"
      >
        <div
          v-for="movie in movies"
          :key="movie.imdbID"
          class="border border-slate-300 p-4"
        >
          <img
            :src="movie.Poster"
            alt="Movie Poster"
            class="w-full xl:h-[380px] mb-2 rounded-lg"
          />
          <h3 class="text-md font-bold mb-2">{{ movie.Title }}</h3>
          <p class="text-gray-600">{{ movie.Type }}</p>
          <p class="text-gray-600 mb-2">{{ movie.Year }}</p>
          <button
            @click="openRentModal(movie)"
            :disabled="isMovieRented(movie)"
            class="bg-[#032541] text-[#8DCEA3] px-5 py-2 rounded-lg font-bold w-full"
          >
            {{ isMovieRented(movie) ? "Alugado" : "Alugar" }}
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-4">
        <button
          @click="prevPage"
          :disabled="page === 1"
          class="bg-[#032541] text-[#8DCEA3] px-5 py-2 rounded-lg font-bold"
        >
          Anterior
        </button>
        <span>Página {{ page }}</span>
        <button
          @click="nextPage"
          class="bg-[#032541] text-[#8DCEA3] px-5 py-2 rounded-lg font-bold"
        >
          Próxima
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { inject } from "vue";
import { ref, type Ref } from "vue";
import { onMounted } from "vue";

interface Movie {
  imdbID: string;
  Title: string;
  Year: number;
  Type: string;
  Poster: string;
  isRented: boolean;
  returnDate?: string;
}

const swal: any = inject("$swal");
const movies = ref<Movie[]>([]);
const rentedMovies = ref<Movie[]>([]);
const searchTerm = ref("");
const selectedYear = ref("");
const showRentModal: Ref<boolean> = ref(false);
const returnDate: Ref<string> = ref("");
let page = ref(1);
let selectedMovie: Movie | null = null;

const rentMovie = () => {
  if (selectedMovie && returnDate.value) {
    swal
      .fire({
        title: "Aluguel Confirmado!",
        icon: "success",
        confirmButtonText: "Ok",
        text: `Você alugou o filme ${selectedMovie?.Title} até ${returnDate.value}.`,
      })
      .then(() => {
        if (selectedMovie && returnDate.value) {
          selectedMovie.returnDate = returnDate.value;
          rentedMovies.value.push(selectedMovie);
          saveRentedMovies();
          closeRentModal();
          location.reload();
        }
      });
  }
};

// Função para carregar filmes alugados do localStorage
const loadRentedMovies = () => {
  const rentedMoviesData = localStorage.getItem("rentedMovies");
  if (rentedMoviesData) {
    rentedMovies.value = JSON.parse(rentedMoviesData);
  }
};

// Função para salvar filmes alugados no localStorage
const saveRentedMovies = () => {
  const rentedMoviesData = JSON.stringify(rentedMovies.value);
  localStorage.setItem("rentedMovies", rentedMoviesData);
};

// Abre o modal de locação para um filme específico.
const openRentModal = (movie: Movie) => {
  selectedMovie = movie;
  showRentModal.value = true;
};

// Fecha o modal de locação e limpa a data ao fechar o modal.
const closeRentModal = () => {
  showRentModal.value = false;
  returnDate.value = ""; // Limpar a data ao fechar o modal
};

const isMovieRented = (movie: Movie) => {
  return movie.isRented;
};

// Manipula a entrada de pesquisa de filmes.
const handleSearchInput = () => {
  if (searchTerm.value) {
    searchMovies();
  } else {
    page.value = 1;
    fetchMovies();
  }
};

const fetchMovies = async () => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: "b781127c",
        s: "popular",
        type: "movie",
        page: page.value,
        y: selectedYear.value,
      },
    });

    if (response.data.Response === "True") {
      // Inicializar a propriedade isRented para cada filme
      movies.value = (response.data.Search || []).filter((movie: Movie) => {
        movie.isRented = rentedMovies.value.some(
          (rentedMovie: Movie) => rentedMovie.imdbID === movie.imdbID
        );
        return movie.Type === "movie";
      }) as Movie[];
    } else {
      console.error("Erro ao buscar filmes:", response.data.Error);
    }
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
  }
};

// Busca filmes com base no ano selecionado.
const searchByYear = () => {
  page.value = 1;
  fetchMovies();
};

// Busca filmes com base nos termos de pesquisa e no ano selecionado.
const searchMovies = async () => {
  try {
    const response = await axios.get("https://www.omdbapi.com/", {
      params: {
        apikey: "b781127c",
        s: searchTerm.value,
        type: "movie",
        page: page.value,
        y: selectedYear.value,
      },
    });
    if (response.data.Response === "True") {
      // Filter out non-movie results
      movies.value = (response.data.Search || []).filter(
        (movie: Movie) => movie.Type === "movie"
      ) as Movie[];
    } else {
      console.error("Erro ao buscar filmes:", response.data.Error);
    }
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
  }
};

// Avança para a próxima página de resultados.
const nextPage = () => {
  page.value++;
  fetchMovies();
};

// Retrocede para a página anterior de resultados.
const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    fetchMovies();
  }
};

// Executa ações após a montagem do componente, como carregar filmes alugados e buscar filmes.
onMounted(() => {
  loadRentedMovies();
  fetchMovies();
});

</script>

<style>
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9); /* Ajuste a opacidade conforme necessário */
    z-index: 5; /* Certifique-se de que o overlay esteja abaixo do modal */
  }

.modal {
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
</style>
