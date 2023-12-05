import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.page.html',
  styleUrls: ['./app-inicio.page.scss'],
})
export class AppInicioPage implements OnInit {

  dados = {
    email: null,
    id: null,
    token: null,
  };

  dadosEmail: any;
  dadosId: any;
  fotoPerfil: any;
  clienteData: any[] = [];
  fichaDeTreino: any[] = [];

  constructor(private router: Router, private dataService: DataService) {
    this.dadosEmail = this.dataService.getDadosEmail();
    console.log(this.dadosEmail);
    this.dadosId = this.dataService.getDadosId();
    console.log(this.dadosId);

    this.listarFichaDeTreino();

    const tmp_dados = localStorage.getItem('dados');

    if (tmp_dados !== null) {
      this.dados = JSON.parse(tmp_dados);
      console.log(this.dados);
    } else {
      this.router.navigate(['/app']);
    }

    this.getDataCliente();
  }

  ngOnInit() {
  }

  passarInformacao(dadosTreino: string) {
    this.dataService.setDadosTreino(dadosTreino);
    this.router.navigate(['/app-treino-exe']);
  }

  inserirFotoPerfil(dados: any) {
    const infos = {
      codigo: this.dadosId,
      fotoPerfil: dados
    };

    fetch('http://localhost/AcademiaAPP/clientes/insert/inserirFotoPerfil.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infos),
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      this.fotoPerfil = response['fotoPerfil'];
    })
    .catch((error) => {
      console.log(error);
    });
  }

  listarFichaDeTreino() {
    const codigo = { codigo: this.dadosId };
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

      // Aqui você pode chamar a função para agrupar por categoria
      this.agruparPorCategoria(this.fichaDeTreino);
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

    console.log(exerciciosAgrupados);
  }

  getDataCliente() {
    const email = this.dadosEmail;

    fetch('http://localhost/AcademiaAPP/clientes/select/selectPorEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      this.clienteData = response['data'];
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
