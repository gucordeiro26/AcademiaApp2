import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage {
  // Conteudo Pagina
  isLoading: boolean = false;
  item_selecionado: string = 'inicio';
  
  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  trocouAba(event: any){
    // console.log(event.detail.value)
    this.item_selecionado = event.detail.value;
  }
    //Conteúdo Gerenciamento clientes

    clientes = [
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' },
      { nome: 'Caique', email: 'caique@gmail.com', telefone: '1599999999', dataNascimento: '01/01/2000' }
    ]

    isModalOpen = false;

    setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
    }

    item_selecionado_modal: string = 'perfil';
    
    trocouComponente(event: any){
      // console.log(event.detail.value)
      this.item_selecionado_modal = event.detail.value;
    }

  aluno = {
    nome: null,
    idade: null,
    ra: null,
    id: null
  }

  public file: any = {};

  criarConta(dados: any){
    this._authenticate.register(dados.email, dados.password)
  }

  realizarLogin(dados: any) {
    this._authenticate.login(dados.email, dados.password);
  }
  
  inserirAluno(dados: any){
    this.aluno.nome = dados.nome;
    // this.aluno.idade = 10;
    // this.aluno.ra = 321321;

    this._crudService.insert(this.aluno, 'clientes');
  }

  listarClientes(){
    this._crudService.fetchAll('clientes')
    .then( clientes => {
      this.clientes = clientes;
    })
  }


  removerAluno(aluno: any){
    console.log(aluno);
    this._crudService.remove(aluno.id, 'clientes')
  }

  consultarAluno(dados: any){
    console.log(dados);
    this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'clientes')
    .then( aluno => {
      console.log(aluno[0].id);
    })
  }

  atualizarDadosAluno(dados: any){
    if (this.aluno.id == null) {
      this._crudService.fetchByOperatorParam('nome', '==', dados.nome, 'clientes')
      .then( aluno => {
        this.aluno = aluno[0];
        console.log(this.aluno);
      })
    } else {
      this._crudService.update(this.aluno.id, dados, 'clientes');
    }
  }

  memorizarArquivo(event: any) {
    this.file = event.target.files[0];
  }

  fazerUpload() {
    if (!this.file.name) {
      this._message.show('Favor selecionar o arquivo a ser enviado', 5000);
      return;
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(this.storage, this.file.name);
      const uploadTask = uploadBytesResumable(storageRef, this.file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Envio pausado');
              break;
            case 'running':
              console.log('Carregando arquivo');
              this._message.show('Carregando arquivo, favor aguardar!', 2000);
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log('Não enviado! Usuário sem permissão');
              this._message.show('Não enviado! Usuário sem permissão!');
              break;
            case 'storage/canceled':
              // User canceled the upload
              console.log('Não enviado: upload cancelado');
              this._message.show('Erro: Upload cancelado!');
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              console.log('Não enviado. Ocorreu um erro desconhecido!');
              this._message.show('Oops! Ocorreu um erro desconhecido!');
              break;
          }

          console.log('Arquivo enviado');
          this._message.show('Arquivo enviado com sucesso!');
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Url do arquivo é ' + downloadURL)
          });
        }
      );
  }
}