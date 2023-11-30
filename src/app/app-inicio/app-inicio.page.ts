import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import * as internal from 'stream';

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
  }

  constructor(private router: Router, private dataService: DataService) {
    this.dadosEmail = this.dataService.getDadosEmail()
    console.log(this.dadosEmail);
    this.dadosId = this.dataService.getDadosId()
    console.log(this.dadosId);

    this.listarFichaDeTreino();

    // if (!localStorage.getItem('dados')) {
    //   this.router.navigate(['/app']);
    // }

    const tmp_dados = localStorage.getItem('dados');

    if (tmp_dados !== null) {
      this.dados = JSON.parse(tmp_dados);
      console.log(this.dados);
    } else {
      this.router.navigate(['/app'])
    }

    this.getDataCliente();
  }

  dadosEmail: any;
  dadosId: any;
  email: string = '';
  fotoPerfil: any;
  clienteData: any[] = [];
  fichaDeTreino: any[] = [];

  ngOnInit() {
  }

  passarInformacao(dadosTreino: string) {
    this.dataService.setDadosTreino(dadosTreino);
    this.router.navigate(['/app-treino'])
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
      .then((response)=>{
        console.log(response)
        this.fotoPerfil = response['fotoPerfil'];
      })
      .catch((_)=>{
        console.log(_)
      })
      .finally(()=>{})
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

  getDataCliente(){
    const email = this.dadosEmail

    fetch('http://localhost/AcademiaAPP/clientes/select/selectPorEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((response)=>{
        console.log(response)
        this.clienteData = response['data']
      })
      .catch((_)=>{
        console.log(_)
      })
      .finally(()=>{})
  }
  


//     localStorage.setItem('session', JSON.stringy(sessao));
//     JSON.parse(localStorage.getItem('session')); 

}
