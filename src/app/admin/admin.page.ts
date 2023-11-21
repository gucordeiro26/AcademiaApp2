import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-admin',
  templateUrl: 'admin.page.html',
  styleUrls: ['admin.page.scss'],
})
export class AdminPage {
  @ViewChild("grafico", { static: true }) elemento!: ElementRef;
  @ViewChild("grafico2", { static: true }) elemento2!: ElementRef;
  @ViewChild("grafico3", { static: true }) elemento3!: ElementRef;

  constructor(private formBuilder: FormBuilder) {
    this.listarClientes();
    this.listarExercicios();
    this.formInserir = this.formBuilder.group({
      codigo: '',
      email: '',
      senha: '',
      nome: '',
      sobrenome: '',
      sexo: '',
      altura: '',
      peso: '',
      DataNasc: '',
      cpf: '',
      FK_Planos_codigo: '',
    });
  }

  ionViewDidEnter() {
    new Chart(this.elemento.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Maça", "Banana", "Uva", "Manga", "Kiwi", "Goiaba"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55,],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
    })

    new Chart(this.elemento2.nativeElement, {
      type: 'doughnut',
      data: {
        // labels: ["Maça", "Banana", "Uva", "Manga", "Kiwi", "Goiaba"],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55,],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
      },
    })
  }

  // Conteudo Pagina
  isLoading: boolean = false;
  conteudo: string = 'home';
  iconActive: string = 'home-outline';

  mudarConteudo(nvConteudo: string, nvIcon: string) {
    this.conteudo = nvConteudo;
    this.iconActive = nvIcon;
  }

  // Modais
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

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

  guardarInfosUsuario: any = {
    codigo: '',
    email: '',
    senha: '',
    nome: '',
    sobrenome: '',
    sexo: '',
    altura: '',
    peso: '',
    DataNasc: '',
    cpf: '',
    FK_Planos_codigo: '',
  };

  clientes: any[] = [];

  formDados: any = {
    codigo: '',
    email: '',
    nome: '',
    sobrenome: '',
    sexo: '',
    altura: '',
    peso: '',
    DataNasc: '',
    cpf: '',
    FK_Planos_codigo: '',
  }

  exercicios: any[] = [];

  buscarTermo: string = '';
  filtroPesquisa: string = 'nome';
  formInserir: FormGroup;

  // Função para listar todos os funcionários
  listarClientes() {
    this.isLoading = true;
    // Configura o objeto de funcionário para enviar na solicitação POST
    let cliente = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/clientes/select/listarClientes.php', {
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
      .finally(() => {
        this.isLoading = false;
      })
  }

  // Função para remover funcionários
  removerCliente(codigo: any) {
    this.isLoading = true;
    // Configura o objeto de funcionário para enviar na solicitação DELETE
    let cliente = { codigo: codigo };
    fetch('http://localhost/academiaApp/clientes/delete/excluirClientes.php', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {
        this.isLoading = false;
        this.listarClientes();
      })
  }

  isAtualizarOpen = false;

  // Função para abrir o modal de atualização
  modalUpdate(isOpen: boolean, codigo: any, email: string, nome: string, sobrenome: string, sexo: string, altura: string, peso: string, dataNasc: string, cpf: string, FK_Planos_codigo: string) {
    this.isAtualizarOpen = isOpen;
    // Armazena informações do funcionário para atualização
    this.guardarInfosUsuario.codigo = codigo;
    this.guardarInfosUsuario.email = email;
    this.guardarInfosUsuario.nome = nome;
    this.guardarInfosUsuario.sobrenome = sobrenome;
    this.guardarInfosUsuario.sexo = sexo;
    this.guardarInfosUsuario.altura = altura;
    this.guardarInfosUsuario.peso = peso;
    this.guardarInfosUsuario.dataNasc = dataNasc;
    this.guardarInfosUsuario.cpf = cpf;
    this.guardarInfosUsuario.FK_Planos_codigo = FK_Planos_codigo;
  }

  // Função para atualizar funcionários
  atualizarCliente(dados: any) {
    this.isLoading = true;
    // Configura o objeto de funcionário atualizado
    const clienteAtualizado = {
      codigo: this.guardarInfosUsuario.codigo,
      email: dados.email,
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      sexo: dados.sexo,
      altura: dados.altura,
      peso: dados.peso,
      dataNasc: dados.dataNasc,
      cpf: dados.cpf,
      FK_Planos_codigo: dados.FK_Planos_codigo,
    };

    // Envia a solicitação POST para atualizar o funcionário
    fetch('http://localhost/AcademiaAPP/clientes/update/atualizarCliente.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteAtualizado),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        this.isLoading = false;
        this.listarClientes();
        this.modalUpdate(false, '', '', '', '', '', '', '', '', '', '');
      })
  }

  // Função para inserir funcionários
  inserirClientes(dados: any) {
    this.isLoading = true;
    console.log(dados);

    // Envia a solicitação POST para inserir um novo funcionário
    fetch('http://localhost/AcademiaAPP/clientes/insert/inserirClientes.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'applicattion/json',
      },
      body: JSON.stringify(dados),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        this.isLoading = false;
        this.listarClientes();
      })
  }

  // Função para filtrar funcionários com base na pesquisa
  filtrarPorSearchBar() {
    this.isLoading = true;

    const pesquisar = {
      buscarTermo: this.buscarTermo,
      filtroPesquisa: this.filtroPesquisa,
    };

    // Envia a solicitação POST para realizar a pesquisa
    fetch('http://localhost/AcademiaAPP/clientes/filtro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pesquisar),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.clientes = data.clientes;
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  // Listar Exercícios da Ficha de treino
  listarExercicios() {
    this.isLoading = true;
    // Configura o objeto de exercicios para enviar na solicitação POST
    let exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/todosExercicios.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios)
    })
      .then(response => response.json())
      .then(response => {
        this.exercicios = response['exercicios'];
      })
      .catch(erro => {
        console.log(erro);
      })
      .finally(() => {
        this.isLoading = false;
      })
  }

  listarExerciciosPeito() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroPeito.php', {
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
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  listarExerciciosCostas() {
    this.isLoading = true;
    const exercicios = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroCostas.php', {
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
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
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
        this.exercicios = data['exercicios'];
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
        this.exercicios = data['exercicios'];
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
        this.exercicios = data['exercicios'];
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
        this.exercicios = data['exercicios'];
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
        this.exercicios = data['exercicios'];
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
        this.exercicios = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}