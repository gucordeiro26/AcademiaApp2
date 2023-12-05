import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-exercicios',
  templateUrl: './admin-exercicios.page.html',
  styleUrls: ['./admin-exercicios.page.scss'],
})
export class AdminExerciciosPage implements OnInit {

  constructor() {

    this.listarExerciciosAbdomen()
    this.listarExerciciosBiceps()
    this.listarExerciciosCardio()
    this.listarExerciciosCostas()
    this.listarExerciciosOmbros()
    this.listarExerciciosPeito()
    this.listarExerciciosPernas()
    this.listarExerciciosTriceps()
  }

  ngOnInit() {
  }

  isLoading: boolean = false;
  exerciciosAbdomen: any[] = [];
  exerciciosBiceps: any[] = [];
  exerciciosCardio: any[] = [];
  exerciciosCostas: any[] = [];
  exerciciosOmbros: any[] = [];
  exerciciosPeito: any[] = [];
  exerciciosPernas: any[] = [];
  exerciciosTriceps: any[] = [];

  inserirExercicio(dados: any) {
    console.log(dados)
    fetch('http://localhost/AcademiaAPP/exercicios/inserirExercicio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
      });
  }

  // Modais
  isModalPeito = false;
  setOpenPeito(isOpen: boolean) {
    this.isModalPeito = isOpen;
  }

  isModalCostas = false;
  setOpenCostas(isOpen: boolean) {
    this.isModalCostas = isOpen;
  }

  isModalBiceps = false;
  setOpenBiceps(isOpen: boolean) {
    this.isModalBiceps = isOpen;
  }

  isModalTriceps = false;
  setOpenTriceps(isOpen: boolean) {
    this.isModalTriceps = isOpen;
  }

  isModalOmbro = false;
  setOpenOmbro(isOpen: boolean) {
    this.isModalOmbro = isOpen;
  }

  isModalPerna = false;
  setOpenPerna(isOpen: boolean) {
    this.isModalPerna = isOpen;
  }

  isModalAbdomen = false;
  setOpenAbdomen(isOpen: boolean) {
    this.isModalAbdomen = isOpen;
  }

  isModalCardio = false;
  setOpenCardio(isOpen: boolean) {
    this.isModalCardio = isOpen;
  }


  // Funções
  listarExerciciosPeito() {
    this.isLoading = true;
    fetch('http://localhost/AcademiaAPP/exercicios/filtroPeito.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(response => {
      this.exerciciosPeito = response['exercicios'];
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(() => {})
  }

  listarExerciciosCostas() {
    this.isLoading = true;
    fetch('http://localhost/AcademiaAPP/exercicios/filtroCostas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => response.json())
    .then(response => {
      this.exerciciosCostas = response['exercicios'];
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(() => {})
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
        this.exerciciosBiceps = data['exercicios'];
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
        this.exerciciosTriceps = data['exercicios'];
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
        this.exerciciosOmbros = data['exercicios'];
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
        this.exerciciosPernas = data['exercicios'];
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
        this.exerciciosAbdomen = data['exercicios'];
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
        this.exerciciosCardio = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

}
