//centraliza a decisão de qual rota será exibida baseado se o usuário está autenticado ou não.

import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
