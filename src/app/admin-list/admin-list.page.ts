import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoading: boolean = false;

  guardarInfosUsuario: any = {
    codigo: '',
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    sexo: '',
    altura: '',
    peso: '',
    DataNasc: '',
    cpf: '',
    FK_Planos_codigo: '',
  };

  clientes: any[] = [];

  formDados: any = {
    codigo: '',
    email: '',
    nome: '',
    sobrenome: '',
    sexo: '',
    altura: '',
    peso: '',
    DataNasc: '',
    cpf: '',
    FK_Planos_codigo: '',
  }

  buscarTermo: string = '';
  filtroPesquisa: string = 'nome';

  listarClientes() {
    this.isLoading = true;
    // Configura o objeto de funcionário para enviar na solicitação POST
    let cliente = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/clientes/select/listarClientes.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente)
    })
      .then(response => response.json())
      .then(response => {
        this.clientes = response['clientes'];
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {
        this.isLoading = false;
      })
  }

  // Função para remover funcionários
  removerCliente(codigo: any) {
    this.isLoading = true;
    // Configura o objeto de funcionário para enviar na solicitação DELETE
    let cliente = { codigo: codigo };
    fetch('http://localhost/academiaApp/clientes/delete/excluirClientes.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {
        this.isLoading = false;
        this.listarClientes();
      })
  }

  isAtualizarOpen = false;

  // Função para abrir o modal de atualização
  modalUpdate(isOpen: boolean, codigo: any, email: string, nome: string, sobrenome: string, sexo: string, altura: string, peso: string, dataNasc: string, cpf: string, FK_Planos_codigo: string) {
    this.isAtualizarOpen = isOpen;
    // Armazena informações do funcionário para atualização
    this.guardarInfosUsuario.codigo = codigo;
    this.guardarInfosUsuario.email = email;
    this.guardarInfosUsuario.nome = nome;
    this.guardarInfosUsuario.sobrenome = sobrenome;
    this.guardarInfosUsuario.sexo = sexo;
    this.guardarInfosUsuario.altura = altura;
    this.guardarInfosUsuario.peso = peso;
    this.guardarInfosUsuario.dataNasc = dataNasc;
    this.guardarInfosUsuario.cpf = cpf;
    this.guardarInfosUsuario.FK_Planos_codigo = FK_Planos_codigo;
  }

  // Função para atualizar funcionários
  atualizarCliente(dados: any) {
    this.isLoading = true;
    // Configura o objeto de funcionário atualizado
    const clienteAtualizado = {
      codigo: this.guardarInfosUsuario.codigo,
      email: dados.email,
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      sexo: dados.sexo,
      altura: dados.altura,
      peso: dados.peso,
      dataNasc: dados.dataNasc,
      cpf: dados.cpf,
      FK_Planos_codigo: dados.FK_Planos_codigo,
    };

    // Envia a solicitação POST para atualizar o funcionário
    fetch('http://localhost/AcademiaAPP/clientes/update/atualizarCliente.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteAtualizado),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
        this.listarClientes();
        this.modalUpdate(false, '', '', '', '', '', '', '', '', '', '');
      })
  }

}
