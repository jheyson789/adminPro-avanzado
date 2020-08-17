import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy{

  public intervalSubs: Subscription;

  constructor() {
    

    // this.retornaObservable().pipe(
    //   retry(1)
    // ).subscribe(
    //   valor => console.log('valor: ', valor),
    //   error => console.warn('error == ', error),
    //   () => console.info('Obs terminado')
    // )
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(200)
                      .pipe(
                        // take(10),
                        map( valor => valor + 1 ),
                        filter( valor => (valor % 2 === 0)? true: false )
                      )
  }

  retornaObservable(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
      const interval = setInterval( () => {
        i++;
        observer.next(i);
        if(i===4){
          clearInterval(interval);
          observer.complete();
        }
        if(i===2){
          observer.error('I llego al numero 2');
        }
      },1000)
    });
  }

}
