import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  intervalSubs: Subscription;

  constructor() {
    // Subscribe to retornaObservable
    // this.retornaObservable().subscribe(
    //   (valor) => console.log('valor subs:', valor),
    //   (err) => console.log(err),
    //   () => console.log('termine')
    // );

    // Subscribe to retornaObservableInterval
    // this.retornaObservableInterval().subscribe((inter) => console.log(inter));

    // SUbscribe to retornaObservableIntervalFilter
    this.intervalSubs = this.retornaObservableIntervalFilter().subscribe(
      console.log
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaObservable(): Observable<number> {
    const obs$ = new Observable<number>((observer) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        // Kill observer
        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }
      }, 1000);
    });

    return obs$;
  }

  retornaObservableInterval(): Observable<number> {
    // take = Cuantas emisiones del observale se necesitan
    // map = Recibir y convertir informacion
    return interval(1000).pipe(
      take(4),
      map((valor) => valor + 1)
    );
  }

  retornaObservableIntervalFilter(): Observable<number> {
    // take = Cuantas emisiones del observale se necesitan
    // map = Recibir y convertir informacion
    return interval(500).pipe(
      take(10),
      map((valor) => valor + 1),
      filter((valor) => (valor % 2 === 0 ? true : false))
    );
  }
}
