import { defineStore, acceptHMRUpdate } from "pinia";
import { useStorage, useLocalStorage } from "@vueuse/core";
import axios from "axios";

export const useMovieStore = defineStore({
  id: "movie",

  state: () => ({
    movieLocation: useStorage("movieLocation", [
      {
        Title: "Making Comics the Marvel Way",
        Year: "2007",
        imdbID: "tt5462942",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: true,
      },
      {
        Title: "Marvel vs DC",
        Year: "2018",
        imdbID: "tt5619680",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: true,
        isLocation: false,
      },
      {
        Title: "Marvel TV's Exclusive in the House with Joe Quesada",
        Year: "2007",
        imdbID: "tt5688194",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Marvel Man",
        Year: "1964",
        imdbID: "tt4434030",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Iron Man: Shield - Protecting the Marvel Universe",
        Year: "2013",
        imdbID: "tt3387254",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
      },
      {
        Title: "The Badly Animated Marvel Christmas Carol",
        Year: "2014",
        imdbID: "tt3617078",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Marvel Tales to Astonish: Civil War",
        Year: "2014",
        imdbID: "tt3587710",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Ham and the Masked Marvel",
        Year: "1916",
        imdbID: "tt0311247",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Nadji the Hindoo Marvel",
        Year: "1903",
        imdbID: "tt0462444",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Max Marvel Show",
        Year: "1999",
        imdbID: "tt0810669",
        Type: "movie",
        Poster: "N/A",
        isDelivered: false,
        isLocation: false,
        client: "",
        dateDelivered: "",
        dateLocation: "",
      },
    ] as any[]),
    localStorageMoviesLocation: useLocalStorage("movieLocation", [
      {
        Title: "Making Comics the Marvel Way",
        Year: "2007",
        imdbID: "tt5462942",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: true,
      },
      {
        Title: "Marvel vs DC",
        Year: "2018",
        imdbID: "tt5619680",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: true,
        isLocation: false,
      },
      {
        Title: "Marvel TV's Exclusive in the House with Joe Quesada",
        Year: "2007",
        imdbID: "tt5688194",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Marvel Man",
        Year: "1964",
        imdbID: "tt4434030",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Iron Man: Shield - Protecting the Marvel Universe",
        Year: "2013",
        imdbID: "tt3387254",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
      },
      {
        Title: "The Badly Animated Marvel Christmas Carol",
        Year: "2014",
        imdbID: "tt3617078",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Marvel Tales to Astonish: Civil War",
        Year: "2014",
        imdbID: "tt3587710",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Ham and the Masked Marvel",
        Year: "1916",
        imdbID: "tt0311247",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Nadji the Hindoo Marvel",
        Year: "1903",
        imdbID: "tt0462444",
        Type: "movie",
        Poster: "N/A",
        client: "",
        dateDelivered: "",
        dateLocation: "",
        isDelivered: false,
        isLocation: false,
      },
      {
        Title: "Max Marvel Show",
        Year: "1999",
        imdbID: "tt0810669",
        Type: "movie",
        Poster: "N/A",
        isDelivered: false,
        isLocation: false,
        client: "",
        dateDelivered: "",
        dateLocation: "",
      },
    ] as any[]),
  }),

  actions: {
    async listMovies() {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=Marvel&apikey=bd21b62d&type=movie&page=10`
        );

        return response;
      } catch (error) {
        console.error(error);
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useMovieStore, import.meta.hot));
}
