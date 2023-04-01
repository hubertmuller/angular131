import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tlumacz'
})
export class TlumaczPipe implements PipeTransform {

  //'komunikat.powitanie' | tlumacz : 'en'
  // variadic function:
  // transform ('komunikat.powitanie', 'en')
  // transform ('komunikat.powitanie', 'en', '1', '2')
  // zle: transform(...args: string[], value: string )
  // transform(value: string, ...args: string[]): unknown {
  // 'komunikat.powitanie' | tlumacz 
  // transform ('komunikat.powitanie', 'en')
  // 'komunikat.powitanie' | tlumacz : 'pl'
  // transform ('komunikat.powitanie', 'pl')

  private tlumaczenia = [
    {k: 'komunikat.powitanie', en: 'Welcome', pl: 'Witaj'},
    {k: 'komunikat.pozegnanie', en: 'Bye', pl: 'Zegnaj'}
  ];

  transform(value: string, jezyk: 'pl' | 'en' = 'en'): string {
    const znaleziony = this.tlumaczenia.find( (element) => { 
      if (element.k == value) {
        return true;
      } else {
        return false;
      }
    } )

    if (znaleziony == undefined) {
      return value;
      //return 'brak tlumaczenia'
    } else {
        return znaleziony[jezyk];
    }
  }

}
