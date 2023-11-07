import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})

export class AppPage {
  toastService: any;

  constructor(
    private router: Router,
    private toastController: ToastController,
  ) { }

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
    this.nomeUsuario = dados.nome;
    const infos = {
      email: dados.email,
      senha: dados.senha,
    }

    fetch('http://localhost/AcademiaAPP/clientes/insert/cadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infos),
    })
      .then((response) => response.json())
      .then(response => {
        // if (response['mensagem'] === 'alerta') {
        //   this.toastService.toast('Já existe uma senha relacionada a esse email!', 3000, 'bottom', 'success');
        // }
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => {
        this.isLoading = false;
        this.setOpen_Cadastro(false);
      })
  }

  login(dados: any) {
    this.isLoading = true;

    fetch('http://localhost/AcademiaAPP/clientes/insert/authcadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)

        if (response['router'] === true) {
          this.setOpen_Login(false);
          setTimeout(() => {
            this.router.navigate(['app-inicio']);
          }, 500);
        }
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => {

      })
  }


}