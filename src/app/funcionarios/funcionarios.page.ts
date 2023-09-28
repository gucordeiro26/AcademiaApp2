import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage {

  constructor() {
    this.listarFuncionarios()
  }

  isLoading: boolean = false;

  funcionarios: any = [];

  formDados: any = {
    codigo: '',
    nome: '',
    sobrenome: '',
    cargo: '',
    dataNasc: '',
    endereco: '',
    cidade: '',
    cep: '',
    pais: '',
    telefone: '',
    salario: '',
  }

  buscarTermo: string = '';
  filtroPesquisa: string = 'nome';

  // Função de Listar Todos Funcionários
  listarFuncionarios(){
    this.isLoading = true;
    let funcionario = { CodFun: '123' };
    fetch('http://localhost/empresa - php/funcionarios/funcionariosSelect.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario)
    })
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response['funcionarios'];
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

  // Remover Funionários
  removerFuncionario(CodFun: any){
    this.isLoading = true;
    let funcionario = { CodFun: CodFun };
    fetch('http://localhost/empresa - php/funcionarios/funcionarioDelete.php',
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(funcionario)
    }
		)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
      console.log('excluiu');
      this.listarFuncionarios();
    })
  }

  // Atualizar Funcionários
  isAtualizarOpen = false;

  modalUpdate(isOpen: boolean) {
    this.isAtualizarOpen = isOpen;
  }

  atualizarFuncionario(evento: any){
    evento.preventDefault();
    this.isLoading = true;

    fetch('http://localhost/empresa - php/funcionarios/funcionarioUpdate.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.formDados),
    })
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response.funcionarios;
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      this.isLoading = false;
      this.listarFuncionarios();
      this.modalUpdate(false);
    })
  }

  // Inserir Funcionários
  isInserirOpen = false;

  modalInserir(isOpen: boolean) {
    this.isInserirOpen = isOpen;
  }

  inserirFuncionario(dados: any){
      this.isLoading = true
      fetch('http://localhost/empresa - php/funcionarios/funcionarioInsert.php',{
        method: 'POST',
        headers: {
          'Content-Type': 'applicattion/json',
        },
        body: JSON.stringify(dados),
      })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.listarFuncionarios();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(()=>{
        this.isLoading = false;
        this.modalInserir(false)
      })
    }

    filtrarPorSearchBar(){
      const pesquisar = {
        buscarTermo: this.buscarTermo,
        filtroPesquisa: this.filtroPesquisa,
      };
      fetch('http://localhost/empresa - php/funcionarios/filtroPesquisa.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pesquisar),
    })
    .then((response) => response.json())
    .then((data) => {
      this.funcionarios = data['funcionarios'];
    })
    .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
    });

    }

}
