import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage {
  
  constructor() {
    this.listarClientes()
  }

  // Conteudo Pagina
  isLoading: boolean = false;
  conteudo: string = 'home';
  iconActive: string = 'gere-outline';

  mudarConteudo(nvConteudo: string, nvIcon: string){
    this.conteudo = nvConteudo;
    this.iconActive = nvIcon;
  }

  guardarInfosUsuario: any = {
    codigo: '',
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    dataNasc: '',
    cpf: '',
    descricao: '',
    fotoPerfil: '',
    FK_Planos_codigo: '',
  };

  clientes: any[] = [];

  formDados: any = {
    codigo: '',
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    dataNasc: '',
    cpf: '',
    descricao: '',
    fotoPerfil: '',
    FK_Planos_codigo: '',
  }

  buscarTermo: string = '';
  filtroPesquisa: string = 'nome';

  // Função para listar todos os funcionários
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
    fetch('http://localhost/AcademiaAPP/clientes/select/listarClientes.php', {
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
        console.log('excluiu');
        this.listarClientes();
      })
  }

  isAtualizarOpen = false;

  // Função para abrir o modal de atualização
  modalUpdate(isOpen: boolean, codigo: any, email: string, nome: string, sobrenome: string, dataNasc: string, cpf: string, descricao: string, FK_Planos_codigo: string) {
    this.isAtualizarOpen = isOpen;
    // Armazena informações do funcionário para atualização
    this.guardarInfosUsuario.codigo = codigo;
    this.guardarInfosUsuario.email = email;
    this.guardarInfosUsuario.nome = nome;
    this.guardarInfosUsuario.sobrenome = sobrenome;
    this.guardarInfosUsuario.dataNasc = dataNasc;
    this.guardarInfosUsuario.cpf = cpf;
    this.guardarInfosUsuario.descricao = descricao;
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
      dataNasc: dados.dataNasc,
      cpf: dados.cpf,
      descricao: dados.descricao,
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
        this.modalUpdate(false, '', '', '', '', '', '', '', '');
      })
  }

  isInserirOpen = false;

  // Função para abrir o modal de inserção
  modalInserir(isOpen: boolean) {
    this.isInserirOpen = isOpen;
  }

  // Função para inserir funcionários
  inserirClientes(dados: any) {
    this.isLoading = true;
    // Envia a solicitação POST para inserir um novo funcionário
    fetch('http://localhost/AcademiaAPP/clientes/insert/inserirClientes.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicattion/json', // Corrigir para 'application/json'
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.listarClientes();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
        this.modalInserir(false);
      })
  }

  // Função para filtrar funcionários com base na pesquisa
  filtrarPorSearchBar() {
    this.isLoading = true;

    const pesquisar = {
      buscarTermo: this.buscarTermo,
      filtroPesquisa: this.filtroPesquisa,
    };

    // Envia a solicitação POST para realizar a pesquisa
    fetch('http://localhost/AcademiaAPP/clientes/filtro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pesquisar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.clientes = data.clientes;
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}