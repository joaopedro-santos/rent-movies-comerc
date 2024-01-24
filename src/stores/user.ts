import { defineStore, acceptHMRUpdate } from "pinia";
import { useStorage, useLocalStorage } from "@vueuse/core";

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    userData: useStorage("userData", [
    
    ] as any[]),
    userDataUpdatde: useStorage("userDataUpdatde", {}),
    isUpdateUser: useStorage("isUpdateUser", false),
    isLogged: useStorage("isLogged", false),
    localStorageUsers: useLocalStorage("userData", [] as any[]),
    userMock: [
      {
        id: 1,
        nome: "João Pedro Santos",
        documento: "12345",
        senha: "123",
        status: "ativo",
      },
      {
        id: 2,
        nome: "Leonardo Sani",
        documento: "12345",
        senha: "123",
        status: "desativado",
      },
    ],
  }),

  actions: {
    async logout() {
      this.isLogged = false;
    },

    async login(user: string, password: string) {
      let storedUser = JSON.parse(localStorage.getItem("userData") || "[]");
      let userFound = storedUser.find(function (u: any) {
        return u.nome === user && u.senha === password;
      });

      if (
        (userFound && userFound.status === "ativo") ||
        (user === "rent" && password === "movie")
      ) {
        this.isLogged = true;
        this.userData.push(...this.userMock);

        return true;
      } else {
        return false;
      }
    },

    async createUser(user: any) {
      this.userData.push(user);

      return true;
    },

    isUpdateUserSet(update: any) {
      this.isUpdateUser = update;
    },

    updateUserSet(user: any) {
      this.userDataUpdatde = user;
    },

    async updateUser(user: any) {
      const objectUpdate = this.userData.find((obj) => obj.id === user.id);

      if (objectUpdate) {
        objectUpdate.nome = user.nome;
        objectUpdate.documento = user.documento;
        objectUpdate.senha = user.senha;
        objectUpdate.status = user.status;
        this.localStorageUsers = this.userData;
        return true;
      } else {
        return false;
      }
    },
    
    async deleteUser(userId: number) {
      const index = this.userData.findIndex((user) => user.id === userId);

      if (index !== -1) {
        this.userData.splice(index, 1);

        this.localStorageUsers = this.userData;
        return true;
      } else {
        return false;
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
