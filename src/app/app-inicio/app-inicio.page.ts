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
    token: null,
  }

  constructor(private router: Router, private dataService: DataService) {
    this.dadosEmail = this.dataService.getDadosEmail()
    console.log(this.dadosEmail);

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
  email: string = ''
  clienteData: any[] = []

  ngOnInit() {
  }

  passarInformacao(dadosTreino: string) {
    this.dataService.setDadosTreino(dadosTreino);
    this.router.navigate(['/app-treino'])
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
