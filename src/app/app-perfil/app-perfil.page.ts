import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-perfil',
  templateUrl: './app-perfil.page.html',
  styleUrls: ['./app-perfil.page.scss'],
})
export class AppPerfilPage implements OnInit {

  constructor(private router: Router) {

    this.email = this.router.getCurrentNavigation()?.extras.state?.['data']
    console.log(this.email)

    this.getDataCliente()
   }

   email: string = ''
   clienteData: any[] = []

  ngOnInit() {
  }
  
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
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

}
