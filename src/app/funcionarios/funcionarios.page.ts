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
    fone: '',
    salario: '',
  };
  
  buscarDado: string = '';
  selectedFilter: string = 'name';



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
      this.funcionarios = response['funcionarios']
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

  enviarDados(evento: any){
    evento.preventDefault()
    this.isLoading = true

    fetch('http://localhost/empresa - php/funcionarios/funcionarioUpdate.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.formDados),
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
      this.listarFuncionarios(); // Atualiza a lista de funcionários após a atualização
      this.modalUpdate(false);
    })
  }

  // Inserir Funcionários
  isInserirOpen = false;

  setOpenInserir(isOpen: boolean) {
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
        this.setOpenInserir(false)
      })
    }

}
