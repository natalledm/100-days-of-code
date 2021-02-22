import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 123789456781);
const cliente = new Cliente("Lais", 789123451, "456");
diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123")
const diretorestaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteestaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretorestaLogado, gerenteestaLogado, clienteEstaLogado);