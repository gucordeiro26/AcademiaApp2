import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {

  constructor() { }

  isLoading = false;

  loginAdmin(dados: any) {
    this.isLoading = true;
    
    fetch('http://localhost/AcademiaAPP/admin/insert/authAdmin.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      })
  }

}
