import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})

export class AppPage {

  constructor() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isModalOpenn = false;

  setOpenn(isOpen: boolean) {
    this.isModalOpenn = isOpen;
  }

  isLoading = false;
  nomeUsuario: string = '';

  cadastroApp(dados: any) {
    this.isLoading = true;
    this.nomeUsuario = dados.nome;

    const infos = {
      email: dados.email,
      senha: dados.senha,
    }

    fetch('https://localhost/AcademiaAPP/clientes/insert/cadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infos),
    })
    .then((response) => response.json())
    .catch((_) => {
      console.log(_)
    })
    .finally(() => {
      this.isLoading = false;
    })
  }

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
    .catch((_) => {
      console.log(_)
    })
    .finally(() => {
      this.isLoading = false;
    })
  }
}