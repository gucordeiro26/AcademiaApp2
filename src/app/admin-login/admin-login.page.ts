import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {

  constructor(private toastController: ToastController, private router: Router,) { }

  serverMessage: string = '';
  toastService: any;

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500, // duração em milissegundos
      position: 'bottom', // posição do toast ('top', 'bottom', 'middle')
      color: 'dark', // cor do toast
    });
    toast.present();
  }

  loginAdmin(dados: any) {

    let serverMessage = '';
    
    fetch('http://localhost/AcademiaApp/admin/insert/authAdmin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        if (response['router'] === true) {
          setTimeout(() => {
            this.router.navigate(['admin']);
          }, 500);
        }

        serverMessage = response['mensagem'];

        if (response['mensagem']) {
          this.presentToast(response['mensagem']);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.serverMessage = serverMessage;
      })
  }

}
