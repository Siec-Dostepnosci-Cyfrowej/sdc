# Wytyczne: język prosty

Treść serwisu pisz prostym językiem. Ten plik zbiera podstawowe reguły
upraszczania — obowiązują przy pisaniu i redakcji każdego dokumentu
w `documentation/docs/` i `documentation/blog/`.

Prosty język nie jest ozdobą: to wymóg dostępności. Dokument zrozumiały
dla osoby bez wykształcenia specjalistycznego jest czytelny także dla
osób z niepełnosprawnościami poznawczymi i dla osób, które nie znają
języka technicznego (por. WCAG 2.1, KS 3.1.5 „Poziom umiejętności czytania" i KS 3.1.3
„Nietypowe słowa").

Ten plik doprecyzowuje to, co `CONTRIBUTING.md` nazywa „pisać zrozumiale".
Przy sprzeczności zasad pierwszeństwo ma ten plik.

## Reguły

1. **Jedno zdanie = jedna myśl.** Maksymalnie 20–25 słów. Dłuższe zdanie
   rozbij na dwa albo skróć.
2. **Jeden akapit = jedna myśl.** Akapit do 5 zdań. Jeśli nie umiesz
   streścić akapitu jednym zdaniem — jest za długi.
3. **Czasownik osobowy zamiast biernego i bezosobowego.**
   Dobrze: „Urząd publikuje dokument w BIP".
   Źle: „Dokument jest publikowany w BIP", „Należy opublikować dokument".
4. **Konkret zamiast ogólnika.** Zamiast „często", „w wielu przypadkach",
   „istotna część" podaj liczbę, termin albo przykład.
5. **Proste słowa zamiast trudnych.** Jeśli terminu technicznego lub
   prawnego nie da się uniknąć, wyjaśnij go przy pierwszym użyciu jednym
   zdaniem.
6. **Czasowniki zamiast rzeczowników od czasownika (nominalizacji).**
   Zamiast „wprowadzenie zmiany w systemie" pisz „zmienić system".
7. **Bez frazesów i wypełniaczy.** Usuń m.in.: „należy zauważyć, że",
   „warto podkreślić, że", „należy pamiętać, że", „w ramach", „w dobie
   cyfryzacji", „dynamiczny rozwój", „istotne jest".
8. **Bez metatekstu.** Nie komponuj tekstu na własne potrzeby: usuń
   „jak wcześniej wspomniano", „omówiono powyżej", „na końcu chcielibyśmy
   podsumować". Wiedza ma być w treści, nie w zapowiedziach treści.
9. **Struktura zamiast gęstych akapitów.** Nagłówki, listy punktowane
   i tabele ułatwiają skanowanie. Nie chowaj trzech zaleceń w jednym
   akapicie.
10. **Jeden termin = jedno znaczenie.** Trzymaj się spójnej terminologii
    w całym dokumencie; synonimy tylko wtedy, gdy naprawdę coś zmieniają.
    Nowe pojęcia trafiają do `documentation/slownik/slownik.json`.
11. **Neutralny ton.** Bez ocen, emocji, wykrzykników, wersalików
    i emotikonów; bez marketingu i wyolbrzymień („rewolucja", „przełom",
    „doskonale").
12. **Skróty rozwijaj przy pierwszym użyciu.** NPWIM → np. „Narzędzie
    Powszechnego Współdziałania i Infrastruktury Modernizacji" (zgodnie
    ze słownikiem); potem sam skrót.
13. **Bez podwójnych przeczących.** Zamiast „nie zapomnij nie zgłaszać"
    pisz jednoznacznie, np. „zgłaszaj zawsze".

## Przykład: przed i po

**Przed:**

> Należy zauważyć, że w dobie dynamicznego rozwoju cyfrowej
> transformacji sektora publicznego istotne jest podjęcie działań
> mających na celu zapewnienie dostępności cyfrowej, co niewątpliwie
> przełoży się na podniesienie jakości obsługi obywateli.

**Po:**

> Urząd powinien do końca 2026 r. sprawdzić, czy jego strona i formularze
> spełniają WCAG 2.1 na poziomie AA. To warunek obsługi obywateli
> z niepełnosprawnościami.

Co się zmieniło: jedno zdanie zamiast czterech, konkretny termin
i poziom zamiast ogólnika, brak frazesów, jasne „kto ma zrobić co".

## Lista kontrolna przed publikacją

- Czy każde zdanie ma najwyżej 25 słów?
- Czy usunięto wypełniacze i metatekst?
- Czy każde trudne słowo jest wyjaśnione przy pierwszym użyciu?
- Czy zamiast ogólnika stoi konkretna liczba, termin lub przykład?
- Czy czytelnik z każdego akapitu wie, co ma zrobić (jeśli akapit ma
  do czegoś wzywać)?
- Czy tekst brzmi tak samo po głośnym przeczytaniu — bez zdań,
  przez które trzeba się przedzierać dwukrotnie?
