import Login from "./login";
import Cadastro from "./cadastro";
import Welcome from "./welcome";
import AvisoValidacao from "./avisoValidacao";

function PaginaLogin() {

  return (
    <div>

      <Login />

      <Cadastro />

      <Welcome />

      <AvisoValidacao />

    </div>
  );
}

export default PaginaLogin;
