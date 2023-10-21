import { Component } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})

export class AppPage {

  constructor() {}

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isModalOpenn = false;

  setOpenn(isOpen: boolean) {
    this.isModalOpenn = isOpen;
  }
}