import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.page.html',
  styleUrls: ['./admin-list.page.scss'],
})
export class AdminListPage {

  constructor() {
    this.listarClientes();
    this.listarExerciciosPeito();
    this.listarExerciciosAbdomen();
    this.listarExerciciosCardio();
    this.listarExerciciosCostas();
    this.listarExerciciosPernas();
    this.listarExerciciosBiceps();
    this.listarExerciciosTriceps();
    this.listarExerciciosOmbros();
  }

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
  exercicios: any[] = [];
  exercicios2: any[] = [];
  exercicios3: any[] = [];
  exercicios4: any[] = [];
  exercicios5: any[] = [];
  exercicios6: any[] = [];
  exercicios7: any[] = [];
  exercicios8: any[] = [];

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
      .finally(() => {})
  }

  // Função para remover funcionários
  removerCliente(codigo: any) {
    
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
        this.listarClientes();
      })
  }

  isAddFichaOpen = false;

  // Função para abrir o modal de adicionar a ficha de treino
  modalAddFicha(isOpen: boolean) {
    this.isAddFichaOpen = isOpen;
  }

  isAtualizarOpen = false;

  // Função para abrir o modal de atualização
  modalUpdate(isOpen: boolean, codigo: any, email: string, nome: string, sobrenome: string, sexo: string, altura: string, peso: string, DataNasc: string, cpf: string, FK_Planos_codigo: string) {
    this.isAtualizarOpen = isOpen;

    // Armazena informações do funcionário para atualização
    this.guardarInfosUsuario.codigo = codigo;
    this.guardarInfosUsuario.email = email;
    this.guardarInfosUsuario.nome = nome;
    this.guardarInfosUsuario.sobrenome = sobrenome;
    this.guardarInfosUsuario.sexo = sexo;
    this.guardarInfosUsuario.altura = altura;
    this.guardarInfosUsuario.peso = peso;
    this.guardarInfosUsuario.DataNasc = DataNasc;
    this.guardarInfosUsuario.cpf = cpf;
    this.guardarInfosUsuario.FK_Planos_codigo = FK_Planos_codigo;
  }

  // Função para atualizar cliente
  atualizarCliente(dados: any) {
    
    const clienteAtualizado = {
      codigo: this.guardarInfosUsuario.codigo,
      email: dados.email,
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      sexo: dados.sexo,
      altura: dados.altura,
      peso: dados.peso,
      DataNasc: dados.DataNasc,
      cpf: dados.cpf,
      FK_Planos_codigo: dados.FK_Planos_codigo,
    };

    // Envia a solicitação POST para atualizar o funcionário
    fetch('http://localhost/AcademiaApp/clientes/update/atualizarCliente.php', {
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
        this.listarClientes();
        this.modalUpdate(false, '', '', '', '', '', '', '', '', '', '');
      })
  }

  // Funções
  listarExerciciosPeito() {
    
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
        
      });
  }

  listarExerciciosCostas() {
    
    const exercicios2 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroCostas.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios2),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios2 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });
  }

  listarExerciciosBiceps() {
    
    const exercicios3 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroBiceps.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios3),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios3 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });
  }

  listarExerciciosTriceps() {
    
    const exercicios4 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroTriceps.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios4),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios4 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });
  }

  listarExerciciosOmbros() {
    
    const exercicios5 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroOmbro.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios5),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios5 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });
  }

  listarExerciciosPernas() {
    
    const exercicios6 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroPerna.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios6),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios6 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });
  }
  listarExerciciosAbdomen() {
    
    const exercicios7 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroAbdomen.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios7),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios7 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });
  }

  listarExerciciosCardio() {
    
    const exercicios8 = { codigo: '123' };
    fetch('http://localhost/AcademiaAPP/exercicios/filtroCardio.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(exercicios8),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na solicitação HTTP: ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.exercicios8 = data['exercicios'];
      })
      .catch((error) => {
        console.error('Erro na busca de funcionários:', error);
      })
      .finally(() => {
        
      });

  }
}
