import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})

export class AppPage {

  serverMessage: string = '';
  toastService: any;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000, // duração em milissegundos
      position: 'bottom', // posição do toast ('top', 'bottom', 'middle')
      color: 'medium', // cor do toast
    });
    toast.present();
  }

  isModalOpen_Cadastro = false;

  setOpen_Cadastro(isOpen: boolean) {
    this.isModalOpen_Cadastro = isOpen;
  }

  isModalOpen_Login = false;

  setOpen_Login(isOpen: boolean) {
    this.isModalOpen_Login = isOpen;
  }
  nomeUsuario: string = '';

  cadastroApp(dados: any) {
    this.nomeUsuario = dados.nome;
    const infos = {
      email: dados.email,
      senha: dados.senha,
    }

    let serverMessage = '';

    fetch('http://localhost/AcademiaAPP/clientes/insert/cadastro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infos),
    })
      .then((response) => response.json())
      .then(response => {
        serverMessage = response['mensagem'];
        if (response['mensagem']) {
          this.presentToast(response['mensagem']);
        }
        // if (response['mensagem'] === 'alerta') {
        //   this.toastService.toast('Já existe uma senha relacionada a esse email!', 3000, 'bottom', 'success');
        // }
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => {
        this.serverMessage = serverMessage;
        this.setOpen_Cadastro(false);
      })
  }

  login(dados: any) {

    let serverMessage = ''; 

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

        if (response['mensagem']) {
          this.presentToast(response['mensagem']);
        }
      })
      .then((dadosCliente) => {
        
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => {
        this.serverMessage = serverMessage;
      })
  }


}