import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-app-perfil',
  templateUrl: './app-perfil.page.html',
  styleUrls: ['./app-perfil.page.scss'],
})


export class AppPerfilPage implements OnInit {

  dados = {
    email: null,
    id: null,
    token: null,
  };

  constructor(private router: Router, private dataService: DataService,) {
    // recebendo email do data service
    this.dadosEmail = this.dataService.getDadosEmail()
    console.log(this.dadosEmail);

    // recebendo id do data service
    this.dadosId = this.dataService.getDadosId()
    console.log(this.dadosId);

    // recebendo nome do plano do data service
    this.dadosNomePlano = this.dataService.getDadosNomePlano()
    console.log(this.dadosNomePlano)

    // if (!localStorage.getItem('dados')) {
    //   this.router.navigate(['/app']);
    // }

    this.listarClientes();



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
  dadosNomePlano: any;
  email: string = '';
  id: number;
  clienteData: any[] = [];
  clienteDataPlano: any[] = [];
  fotoPerfil: string;
  clientes: any[] = [];
  arquivoSelecionado: File;

  ngOnInit() {
  }

  onFileSelected(event: any) {
    const fileInput = event.target as HTMLInputElement;

    if (fileInput?.files?.length) {
      this.arquivoSelecionado = fileInput.files[0];
    }
  }

  inserirObjetivo(dados: any) {
    const infos = {
      objetivo: dados.objetivo,
      email: this.dadosEmail
    }

    fetch('http://localhost/AcademiaApp/clientes/insert/inserirObjetivo.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(infos),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => { this.listarClientes() })
  }

  isModalPerfilOpen = false;

  setPerfilOpen(isOpen: boolean) {
    this.isModalPerfilOpen = isOpen;
  }

  inserirFotoPerfil(event: any) {

    if (this.arquivoSelecionado) {
      const formData = new FormData();
      formData.append('imagem', this.arquivoSelecionado);
      console.log(formData)

      const infos = {
        codigo: this.dadosId,
        fotoPerfil: formData
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
          console.log(response)
          this.fotoPerfil = response['fotoPerfil'];
        })
        .catch((_) => {
          console.log(_)
        })
        .finally(() => {
          this.listarClientes()
        })
    }
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  listarClientes() {
    // Configura o objeto de funcionário para enviar na solicitação POST
    let cliente = { codigo: '123' };
    fetch('http://localhost/AcademiaApp/clientes/select/listarClientes.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente)
    })
      .then(response => response.json())
      .then(response => {
        this.clientes = response['clientes'];
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => { })
  }

  getDataCliente() {
    const email = this.dadosEmail

    fetch('http://localhost/AcademiaAPP/clientes/select/selectPorEmail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        this.clienteData = response['data']
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => { })

    fetch('http://localhost/AcademiaAPP/clientes/select/selectPlanos.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.dadosNomePlano),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        this.clienteDataPlano = response['data']
      })
      .catch((_) => {
        console.log(_)
      })
      .finally(() => { })
  }

}
