import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-app-treino-exe',
  templateUrl: './app-treino-exe.page.html',
  styleUrls: ['./app-treino-exe.page.scss'],
})
export class AppTreinoExePage {

  dadosTreino: any = null;
  dadosEmail: any;
  exercicios: any[] = [];
  fichaDeTreino: any[] = [];
  dadosId: any;
  serverMessage: string = '';
  exerciciosAgrupados: any[] = [];
  buscarTermo: string = '';

  constructor(private dataService: DataService, private toastController: ToastController) {
    this.dadosEmail = this.dataService.getDadosEmail();
    this.dadosTreino = this.dataService.getDadosTreino();
    this.dadosId = this.dataService.getDadosId();

    this.listarFichaDeTreino();


    this.dadosTreino === 'Peito' ? this.listarExerciciosPeito() :
      this.dadosTreino === 'Costas' ? this.listarExerciciosCostas() :
        this.dadosTreino === 'Biceps' ? this.listarExerciciosBiceps() :
          this.dadosTreino === 'Triceps' ? this.listarExerciciosTriceps() :
            this.dadosTreino === 'Pernas' ? this.listarExerciciosPernas() :
              this.dadosTreino === 'Ombro' ? this.listarExerciciosOmbros() :
                this.dadosTreino === 'Abdomen' ? this.listarExerciciosAbdomen() : this.listarExerciciosCardio()
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
    const codigo = { 
      categoria: this.dadosTreino,
      codigo: this.dadosId 
    };
    console.log(codigo);

    fetch('http://localhost/AcademiaAPP/fichaDeTreino/selectFicha.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(codigo),
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      this.fichaDeTreino = response['fichaDeTreino'];
      console.log(this.fichaDeTreino)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  // Função para agrupar por categoria
  agruparPorCategoria(fichaDeTreino: any[]) {
    const exerciciosAgrupados = fichaDeTreino.reduce((acc: any, exercicio: any) => {
      const categoria = exercicio.categoria;

      if (!acc[categoria]) {
        acc[categoria] = [];
      }

      acc[categoria].push(exercicio);
      return acc;
    }, {});
    this.exerciciosAgrupados = exerciciosAgrupados;
    console.log(exerciciosAgrupados);
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

  listarExerciciosPeito() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroPeito.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosCostas() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroCostas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosBiceps() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroBiceps.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosTriceps() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroTriceps.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosOmbros() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroOmbro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosPernas() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroPerna.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosAbdomen() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroAbdomen.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosCardio() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroCardio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

}
