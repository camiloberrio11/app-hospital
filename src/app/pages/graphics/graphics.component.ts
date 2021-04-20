import { Component } from '@angular/core';
@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styles: [],
})
export class GraphicsComponent {
  // Grafica 1
  public labels1: string[] = ['Hospitales', 'Clinicas', 'EPS'];
  public data1: number[][] = [[1, 4, 95]];

  // Grafica 2
  public labels2: string[] = ['Medicos', 'Enfermeros', 'Otros'];
  public data2: number[][] = [[75, 5, 22]];

  // Grafica 3
  public labels3: string[] = [
    'Pacientes criticos bajos',
    'Pacientes criticos medios',
    'Pacientes criticos altos',
  ];
  public data3: number[][] = [[587, 752, 2]];

  // Grafica 4
  public labels4: string[] = ['Gripe', 'Tos', 'Malestar general'];
  public data4: number[][] = [[71, 11, 2]];
}
