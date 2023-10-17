import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage {
  // Conteudo Pagina
  isLoading: boolean = false;
  item_selecionado: string = 'inicio';
  
  constructor() { }

  trocouAba(event: any){
    // console.log(event.detail.value)
    this.item_selecionado = event.detail.value;
  }

    isModalOpen = false;

    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }

    item_selecionado_modal: string = 'perfil';
    
    trocouComponente(event: any){
      // console.log(event.detail.value)
      this.item_selecionado_modal = event.detail.value;
    }

    inserirCliente(dados: any){

    }

  
}