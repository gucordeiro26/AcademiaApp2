import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})

export class AppPage {

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService,
  ) {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isModalOpenn = false;

  setOpenn(isOpen: boolean) {
    this.isModalOpenn = isOpen;
  }

  loginCliente = {
    name: '',
    email: '',
    password: '',
  }

  loginClientes = [
    {
      name: this.loginCliente.name,
      email: this.loginCliente.email,
      password: this.loginCliente.password,
    }
  ]

  cadastrarConta(dados: any){
    this.loginCliente.name = dados.name;
    this.loginCliente.email = dados.email;
    this.loginCliente.password = dados.password;

    this._authenticate.register(this.loginCliente.email, this.loginCliente.password);
    this._crudService.insert(this.loginCliente, 'Cadastros no App');
  }

  realizarLogin(dados: any) {
    this._authenticate.login(dados.name, dados.email);
  }
}