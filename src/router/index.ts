import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
import LocationList from "@/components/LocationList.vue";
import MovieList from "@/components/FilmList.vue";
import ClientList from "@/components/ClientList.vue";
import UserList from "@/components/UserList.vue";
import RegisterClient from "@/components/RegisterClient.vue";
import RegisterUser from "@/components/RegisterUser.vue";
import Login from "@/components/Login.vue";
import Home from "@/views/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/userList",
      name: "UserList",
      component: UserList,
    },
    {
      path: "/clientList",
      name: "ClientList",
      component: ClientList,
    },
    {
      path: "/movieList",
      name: "MovileList",
      component: MovieList,
    },
    {
      path: "/locationList",
      name: "LocationList",
      component: LocationList,
    },
    {
      path: "/registerUser",
      name: "RegisterUser",
      component: RegisterUser,
    },
    {
      path: "/registerClient",
      name: "RegisterClient",
      component: RegisterClient,
    }
  ],
});

export default router;