import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-adcionar',
  templateUrl: './admin-adcionar.page.html',
  styleUrls: ['./admin-adcionar.page.scss'],
})
export class AdminAdcionarPage {

  formInserir: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastController: ToastController, private router: Router,) {
    this.formInserir = this.formBuilder.group({
      codigo: '',
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]],
      sobrenome: ['', Validators.maxLength(50)],
      sexo: ['', Validators.required],
      altura: ['', [Validators.required, Validators.min(0)]],
      peso: ['', [Validators.required, Validators.max(500)]],
      DataNasc: ['', Validators.required], // Adicione um validador de data conforme necessário
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      FK_Planos_codigo: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formInserir.valid) {
      this.inserirClientes(this.formInserir.value);
    }
  }

  serverMessage: string = '';

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 5000, // duração em milissegundos
      position: 'bottom', // posição do toast ('top', 'bottom', 'middle')
      color: 'dark', // cor do toast
    });
    toast.present();
  }

  // Funções

  // Função para inserir clientes
  inserirClientes(dados: any) {
    console.log(dados);

    let serverMessage = '';
  
    fetch('http://localhost/AcademiaAPP/clientes/insert/inserirClientes.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        serverMessage = response['mensagem'];

        if (response['mensagem']) {
          this.presentToast(response['mensagem']);
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.formInserir.reset();
        this.serverMessage = serverMessage;
      });
  }
}