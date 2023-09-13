import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  isModalOpenn = false;

  setOpenn(isOpen: boolean) {
    this.isModalOpenn = isOpen;
  }
}
