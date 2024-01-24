import { render, fireEvent, screen } from "@testing-library/vue";
import Home from "@/views/Home.vue";
//@ts-ignore
test("clica no card de Usuário e redirecionar para /userList", async () => {
  const { getByText } = render(Home);

  // Localizar o card de Usuário pelo texto e clicar nele
  await fireEvent.click(getByText("Usuário"));

  // Verificar se a rota foi alterada para /userList
  //@ts-ignore
  expect(location.pathname).toBe("/userList");
});
//@ts-ignore
test("clica no card de Clientes e redirecionar para /clientList", async () => {
  const { getByText } = render(Home);

  // Localizar o card de Clientes pelo texto e clicar nele
  await fireEvent.click(getByText("Clientes"));

  // Verificar se a rota foi alterada para /clientList

  //@ts-ignore
  expect(location.pathname).toBe("/clientList");
});
//@ts-ignore
test("clicando no card de Filmes e redirecionar para /filmList", async () => {
  const { getByText } = render(Home);

  // Localizar o card de Filmes pelo texto e clicar nele
  await fireEvent.click(getByText("Filmes"));

  // Verificar se a rota foi alterada para /filmList
  //@ts-ignore
  expect(location.pathname).toBe("/filmList");
});
//@ts-ignore
test("No card de Locação e redirecionar para /locationList", async () => {
  const { getByText } = render(Home);

  // Localizar o card de Locação pelo texto e clicar nele
  await fireEvent.click(getByText("Locação"));

  // Verificar se a rota foi alterada para /locationList
  //@ts-ignore
  expect(location.pathname).toBe("/locationList");
});
function expect(pathname: string) {
  throw new Error("Function not implemented.");
}
