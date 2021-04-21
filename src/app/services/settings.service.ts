import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private elementTheme = document.querySelector('#theme');

  constructor() {
    this.setAndGetTheme();
  }

  private setAndGetTheme(): void {
    let theme = './assets/css/colors/default-dark.css';
    const themeSelected = localStorage.getItem('theme');
    if (themeSelected) {
      theme = themeSelected;
    }
    this.elementTheme.setAttribute('href', theme);
  }

  changeTheme(theme: string): void {
    const url = `./assets/css/colors/${theme}.css`;
    this.elementTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void {
    const links: NodeListOf<Element> = document.querySelectorAll('.selector');

    links.forEach((item) => {
      // Borrar clase working
      item.classList.remove('working');

      // Setear clase segun theme actual
      const btnTheme = item.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.elementTheme.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        item.classList.add('working');
      }
    });
  }
}
