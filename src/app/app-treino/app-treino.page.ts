import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-treino',
  templateUrl: './app-treino.page.html',
  styleUrls: ['./app-treino.page.scss'],
})
export class AppTreinoPage {
  dadosTreino: any = null;
  dadosEmail: any;
  exercicios: any[] = [];
  fichaDeTreino: any[] = [];
  dadosId: any;
  serverMessage: string = '';
  buscarTermo: string = '';

  constructor(private dataService: DataService, private toastController: ToastController) {
    this.dadosEmail = this.dataService.getDadosEmail();
    this.dadosTreino = this.dataService.getDadosTreino();
    this.dadosId = this.dataService.getDadosId();

    this.listarFichaDeTreino();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500, // duração em milissegundos
      position: 'bottom', // posição do toast ('top', 'bottom', 'middle')
      color: 'medium', // cor do toast
    });
    toast.present();
  }

  // Função para filtrar funcionários com base na pesquisa
  filtrarPorSearchBar() {

    const pesquisar = {
      buscarTermo: this.buscarTermo,
    };

    // Envia a solicitação POST para realizar a pesquisa
    fetch('http://localhost/academiaapp/filtros/filtroClientes.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pesquisar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((response) => {
        this.exercicios = response['exercicios'];
        console.log(response)
      })
      .catch((error) => {
        console.error('Erro na busca de exercicios:', error);
      })
      .finally(() => { });
  }

  listarFichaDeTreino() {

    const codigo = this.dadosId;
    console.log(codigo);

    fetch('http://localhost/AcademiaAPP/fichaDeTreino/selectFicha.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(codigo),
    })
      .then((response) => response.json())
      .then((response)=>{
        console.log(response)
        this.fichaDeTreino = response['fichaDeTreino'];
      })
      .catch((_)=>{
        console.log(_)
      })
      .finally(()=>{})
  }

  removerExerFicha(codigo: any) {
    
    let serverMessage = '';
    let codigoExer = { codigo: codigo };
    fetch('http://localhost/academiaApp/fichaDeTreino/deleteFicha.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(codigoExer)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);

        if (response['mensagem']) {
          this.presentToast(response['mensagem']);
        }
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {
        this.listarFichaDeTreino();
        this.serverMessage = serverMessage;
      })
  }

  //Funcoes back
  isLoading: boolean = false;
  
  listarExercicios() {
    this.isLoading = true;
    // Configura o objeto de exercicios para enviar na solicitação POST
    let exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/todosExercicios.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios)
    })
      .then(response => response.json())
      .then(response => {
        this.exercicios = response['exercicios'];
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
}
