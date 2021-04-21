import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menuSimulate: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Inicio', url: '' },
        { title: 'Barras progreso', url: 'progress' },
        { title: 'Graficas', url: 'graphics' },
      ],
    },
  ];

  constructor() {}
}
