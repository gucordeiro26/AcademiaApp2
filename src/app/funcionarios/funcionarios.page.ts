import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.page.html',
  styleUrls: ['./funcionarios.page.scss'],
})
export class FuncionariosPage {

  constructor(){
    this.getFuncionarios();
  }

  forms: any = {
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
  };

  isModalOpenUpdate = false;

  setOpenToUpdate(isOpen: boolean) {
    this.isModalOpenUpdate = isOpen;
  }

  isLoading: boolean = false;

  funcionarios: any = [];

  itemSelecionado: string = 'listarTodos';

  trocarAba(event: any){
    this.itemSelecionado = event.detail.value;
  }

  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/empresa - php/funcionarios/listarTodos.php')
    .then(res => res.json())
    .then(res => {
      this.funcionarios = res['funcionarios'];
      console.log(this.funcionarios);
    })
    .catch(_ => { console.log(_); })
    .finally(() => {
      this.isLoading = false;
      console.log("Processo finalizado!");
    })
  }

  removerFuncionario(CodFun: any){
    this.isLoading = true;
    fetch('http://localhost/empresa - php/funcionarios/remover.php', {
      method: "POST",
      headers: {
        'Content-Type': 'appLocation/json',
      },
      body: JSON.stringify({ CodFun: CodFun })
    })
    .then(res => res.json())
    .then(res => { console.log(res); })
    .catch(_ => { console.log(_); })
    .finally(() => {
      this.getFuncionarios();
      this.isLoading = false;
      console.log("Processo finalizado!");
    })
  }

  atualizarFuncionario(event: any){
    this.isLoading = true;
    event.preventDefault();
    fetch('http://localhost/empresa%20-%20php/funcionarios/atualizar.php', {
      method: "POST",
      headers: {
        'Content-Type': 'appLocation/json',
      },
      body: JSON.stringify( this.forms ),
    })
    .then(res => res.json())
    .then(res => { console.log(res); })
    .catch(_ => { console.log(_); })
    .finally(() => {
      this.getFuncionarios();
      this.isLoading = false;
      console.log("Processo finalizado!");
    })
  }

}
