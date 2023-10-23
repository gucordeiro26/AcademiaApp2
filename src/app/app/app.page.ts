import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})

export class AppPage {

  constructor() {}

  isModalOpen_Cadastro = false;

  setOpen_Cadastro(isOpen: boolean) {
    this.isModalOpen_Cadastro = isOpen;
  }

  isModalOpen_Login = false;

  setOpen_Login(isOpen: boolean) {
    this.isModalOpen_Login = isOpen;
  }

  isLoading = false;
  nomeUsuario: string = '';

  cadastroApp(dados: any) {
    this.isLoading = true;
    /* this.nomeUsuario = dados.nome;
    const infos = {
      email: dados.email,
      senha: dados.senha,
    } */

    fetch('https://localhost/AcademiaAPP/clientes/insert/cadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
    .then((response) => response.json())
    .catch((_) => {
      console.log(_)
    })
    .finally(() => {
      this.isLoading = false;
    })
  }

  router: Router;

  loginApp(dados: any) {
    this.isLoading = true;

    fetch('https://localhost/AcademiaAPP/clientes/insert/authcadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
    .then((response) => response.json())
    .then((response) => {
      if(response['router'] === 'true'){
        this.router.navigate(['/app-inicio'])
      }
    })
    .catch((_) => {
      console.log(_)
    })
    .finally(() => {
      
    })
  }
}