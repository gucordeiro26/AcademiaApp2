import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {

  constructor(private toastController: ToastController, private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.formLogin.valid) {
      this.loginAdmin(this.formLogin.value);
    }
  }

  serverMessage: string = '';
  toastService: any;

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500, // duração em milissegundos
      position: 'bottom', // posição do toast ('top', 'bottom', 'middle')
      color: 'medium', // cor do toast
    });
    toast.present();
  }

  formLogin: FormGroup;
  id: number;
  dados = {
    id: null,
  }

  passarDadosId(){
    this.dataService.setAdminId(this.id)
  }

  loginAdmin(dados: any) {

    let serverMessage = '';
    
    fetch('http://localhost/academiaapp/admin/insert/authAdmin.php', {
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
            this.router.navigate(['./admin']);
            this.id = response['codigo'];
            localStorage.setItem('dados', JSON.stringify(this.dados));
            this.passarDadosId();
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
        this.formLogin.reset();
        this.serverMessage = serverMessage;
      })
  }

}
