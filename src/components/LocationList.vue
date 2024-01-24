<template>
  <div class="max-w-screen-xl mx-auto mt-10 h-[70vh]">
    <div v-if="rentedMovies.length === 0" class="flex justify-center items-center h-[70vh]">
      <p class="font-bold text-5xl max-sm:text-center max-sm:text-3xl">
        Nenhum filme foi alugado
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <div
        v-for="movie in rentedMovies"
        :key="movie.imdbID"
        class="bg-white rounded-lg overflow-hidden shadow-md"
      >
        <img
          v-if="movie.poster"
          :src="movie.poster"
          :alt="movie.Title"
          class="w-full h-40 object-cover object-center"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ movie.Title }}</h2>
          <p class="text-gray-600 mb-2">
            Data de Locação: {{ today.toDateString() }}
          </p>
          <p class="text-gray-600 mb-2">
            Data de Devolução: {{ movie.returnDate }}
          </p>
          <p class="text-gray-600 mb-2">Status: Alugado</p>
          <button
            @click="returnMovie(movie)"
            class="text-white bg-red-500 px-4 py-2 rounded-md"
          >
            Devolver Filme
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  poster?: string;
  isRented?: boolean;
  returnDate?: string;
}

const rentedMovies = ref<Movie[]>([]); // Adicionando o tipo Movie[] aqui
const today = new Date();

const returnMovie = (movie: Movie): void => {
  const index = rentedMovies.value.findIndex(
    (m: Movie) => m.imdbID === movie.imdbID
  );
  if (index !== -1) {
    rentedMovies.value.splice(index, 1);
    movie.isRented = false;
    saveRentedMovies();
  }
};

const saveRentedMovies = (): void => {
  const rentedMoviesData = JSON.stringify(rentedMovies.value);
  localStorage.setItem("rentedMovies", rentedMoviesData);
};

onMounted(() => {
  const rentedMoviesData = localStorage.getItem("rentedMovies");
  if (rentedMoviesData) {
    rentedMovies.value = JSON.parse(rentedMoviesData);
  }
});
</script>
