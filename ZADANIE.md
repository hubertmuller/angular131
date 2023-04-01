

1. Stworz i wywolaj pipe tlumaczacy

'komunikat.powitanie' | tlumacz : 'en'

w transform:

tlumaczenia = [
    {k: 'komunikat.powitanie', en: 'Welcome', pl: 'Witaj'},
    {k: 'komunikat.pozegnanie', en: 'Bye', pl: 'Zegnaj'}
]

let el = tlumaczenia.find( (el) => {return el.k == value });
return el[args[0]];

2. Dodaj do serwisu logika metode tlumaczaca o podobnej jak pipe tlumacz funkcjonalnosci

tlumacz (klucz,jezyk)

uzyj poprzez komponentowa metode tlumacz z poziomu templatu

3. Utworz drugi serwis o dowolnej nazwie i wstrzyknij go do komponentu Naglowek, użyj jego metod z poziomu komponentu. Niech serwis posiada 2 metody.

