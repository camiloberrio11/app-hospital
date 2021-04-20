import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: [],
})
export class IncrementComponent {
  @Input() progreso = 40;
  @Input() btnClassCSS = 'btn btn-primary';
  @Output() changeValor: EventEmitter<number> = new EventEmitter();

  cambiarValor(valor: number): void {
    if (this.progreso >= 100 && valor >= 0) {
      this.progreso = 100;
      this.changeValor.emit(this.progreso);
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      this.changeValor.emit(this.progreso);
      return;
    }

    this.progreso = this.progreso + valor;
    this.changeValor.emit(this.progreso);
  }
}
