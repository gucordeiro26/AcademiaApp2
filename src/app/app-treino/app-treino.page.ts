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
  itensOriginais: any[] = [];

  constructor(private dataService: DataService, private toastController: ToastController) {
    this.dadosEmail = this.dataService.getDadosEmail();
    this.dadosTreino = this.dataService.getDadosTreino();
    this.dadosId = this.dataService.getDadosId(); 
    
    this.listarFichaDeTreino();
    this.itensOriginais = this.fichaDeTreino
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
      dadosId: this.dadosId
    };
  
    // Envia a solicitação POST para realizar a pesquisa
    fetch('http://localhost/academiaapp/filtros/filtroFicha.php', {
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
        this.fichaDeTreino = response['exercicios'];
        console.log(response);
      })
      .catch((error) => {
        console.error('Erro na busca de exercicios:', error);
      })
      .finally(() => {
      });
  }

  listarFichaDeTreino() {

    const info = {
      codigo: this.dadosId
    }

    fetch('http://localhost/AcademiaAPP/fichaDeTreino/selectFichaAll.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((response) => response.json())
      .then((response)=>{
        console.log(response)
        this.fichaDeTreino = response['fichaDeTreino'];
        console.log(this.fichaDeTreino)
      })
      .catch((_)=>{
        console.log(_)
      })
      .finally(()=>{})
  }

  exercicioMatchesSearch(exercicio: any): boolean {
    if (!this.buscarTermo) {
      // Se não houver termo de busca, exibir todos os exercícios
      return true;
    }
  
    // Lógica de comparação com base no termo de busca
    const termoLowerCase = this.buscarTermo.toLowerCase();
    return (
      exercicio.nome.toLowerCase().includes(termoLowerCase)
      // Adicione outras condições de pesquisa conforme necessário
    )
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
}
