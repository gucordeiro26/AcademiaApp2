import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-inicio',
  templateUrl: './app-inicio.page.html',
  styleUrls: ['./app-inicio.page.scss'],
})
export class AppInicioPage implements OnInit {

  constructor(private router: Router, private dataService: DataService) {
    this.email = this.router.getCurrentNavigation()?.extras.state?.['data']
    console.log(this.email)

    this.getDataCliente();
  }

  email: string = ''
  clienteData: any[] = []

  ngOnInit() {
  }

  passarInformacao(dadosTreino: string) {
    this.dataService.setDadosTreino(dadosTreino);
    this.router.navigate(['/app-treino'])
  }

  getDataCliente(){
    const email = this.email

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
