---
id: dokumentowanie-oceny-dostepnosci-deklaracja
title: Dokumentowanie oceny dostępności na potrzeby deklaracji
sidebar_position: 5
sidebar_label: Dokumentowanie oceny
description: Zasady dokumentowania metod, zakresu i wyników oceny stanowiącej podstawę deklaracji dostępności.
keywords: [deklaracja dostępności, ocena dostępności, audyt, dowody, dokumentacja]
tags: [deklaracja dostępności, dostępność cyfrowa, ocena dostępności]
opracowanie: Tomasz Szymczak
wspolpraca: Damian Żłobicki
data_zgloszenia: 9 czerwca 2026 r.
ostatnia_aktualizacja: 9 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel dokumentu

Dokument określa minimalny standard oceny i dowodów potrzebnych do przygotowania, zatwierdzenia lub aktualizacji deklaracji dostępności.

## 2. Zasady oceny

Ocena powinna być:

- adekwatna do skali, złożoności i ryzyka,
- możliwa do odtworzenia,
- oparta na wymaganiach załącznika do ustawy,
- przeprowadzona na właściwej wersji rozwiązania,
- reprezentatywna dla treści, szablonów i zadań użytkownika,
- udokumentowana wraz z ograniczeniami,
- zakończona decyzją o statusie i wpływie na deklarację.

Test automatyczny nie jest samodzielnie wystarczającą oceną wszystkich wymagań.

## 3. Metody

W zależności od rozwiązania połącz:

- testy automatyczne,
- eksperckie testy manualne,
- testy obsługi klawiaturą,
- testy z technologiami asystującymi,
- przegląd semantyki, kodu i komponentów,
- ocenę treści, dokumentów i multimediów,
- testy kluczowych procesów i formularzy,
- analizę zgłoszeń i danych obsługi użytkowników,
- testy z udziałem osób z niepełnosprawnościami.

Testy z użytkownikami dostarczają ważnych informacji o użyteczności. Nie zastępują systematycznej oceny zgodności i nie są obowiązkowe przy każdym przeglądzie.

## 4. Dobór próby

Udokumentuj:

- wszystkie typy szablonów i ekranów,
- kluczowe zadania i usługi,
- strony o dużym ruchu,
- formularze, logowanie, płatności i wyszukiwanie,
- treści związane z bezpieczeństwem i sytuacjami kryzysowymi,
- reprezentatywne dokumenty i multimedia,
- nowe i zmienione komponenty,
- elementy wskazane w zgłoszeniach,
- uzasadnienie pominięcia obszarów.

Próba powinna pozwalać ocenić wspólne komponenty i rzeczywistą możliwość wykonania najważniejszych zadań.

## 5. Minimalny opis oceny

Zapisz:

- nazwę i identyfikator rozwiązania,
- adres, wersję, system operacyjny i język,
- datę i cel oceny,
- zakres i próbę,
- środowiska testowe,
- przeglądarki, urządzenia i technologie asystujące,
- narzędzia wraz z wersjami,
- wymagania stanowiące podstawę oceny,
- osoby wykonujące i sprawdzające ocenę,
- ograniczenia oraz elementy nieobjęte badaniem,
- podsumowanie wyników,
- decyzję o statusie zgodności,
- wpływ wyników na treść deklaracji,
- powiązanie z planem usuwania barier.

## 6. Minimalny opis problemu

Każdy problem powinien mieć:

- unikalny identyfikator,
- wymaganie, którego dotyczy,
- adres strony, nazwę ekranu lub komponent,
- wersję i środowisko,
- kroki pozwalające odtworzyć problem,
- wynik oczekiwany i rzeczywisty,
- wpływ na użytkownika,
- dowód, na przykład fragment kodu, zrzut lub opis zachowania czytnika,
- ocenę ważności i priorytet,
- proponowane rozwiązanie,
- właściciela i termin,
- status naprawy,
- datę i wynik retestu.

Nie publikuj dowodów zawierających dane osobowe, tajemnice prawnie chronione lub informacje zwiększające ryzyko bezpieczeństwa.

## 7. Podstawa sporządzenia deklaracji

Warunki techniczne wymagają podania podstawy oceny i właściwego dowodu:

### 7.1. Samoocena

Podaj zastosowane metody oraz link do raportu z samooceny.

### 7.2. Ocena zewnętrzna

Podaj nazwę podmiotu zewnętrznego oraz link do raportu lub streszczenia raportu z audytu.

### 7.3. Oświadczenie wykonawcy

Podaj nazwę wykonawcy oraz link do oświadczenia. Sieć zaleca niezależną weryfikację oświadczenia przed ustaleniem statusu, zwłaszcza dla rozwiązań wysokiego ryzyka.

### 7.4. Inny równorzędny sposób

Wyjaśnij metodę i opublikuj dowód, który umożliwia ocenę wiarygodności ustalenia.

Pełny raport z audytu zewnętrznego nie zawsze musi być publiczny. Publiczny raport, streszczenie lub oświadczenie musi jednak spełniać aktualne warunki techniczne i być dostępne cyfrowo.

## 8. Decyzja o statusie

Decyzja powinna zawierać:

- wybrany status,
- uzasadnienie względem kryteriów warunków technicznych,
- wpływ błędów na istotne treści i usługi,
- informację, czy spełniono większość wymagań,
- listę przesłanek, które mogłyby wymagać statusu „niezgodna”,
- osobę przygotowującą i zatwierdzającą decyzję.

Nie ustalaj statusu wyłącznie na podstawie liczby błędów lub średniego wyniku narzędzia.

## 9. Ocena po zmianie

Po zmianie:

1. wskaż elementy bezpośrednio zmienione,
2. wskaż komponenty i procesy zależne,
3. przetestuj zmianę,
4. wykonaj test regresji,
5. oceń wpływ na status i deklarację,
6. wpisz decyzję do karty zmiany,
7. zaktualizuj plan usuwania barier.

Pełna ponowna ocena jest wymagana wtedy, gdy ocena ograniczona nie zapewnia wystarczającej pewności.

## 10. Cztery daty

Dokumentacja powinna rozdzielać:

- publikację strony lub wydanie aplikacji,
- ostatnią istotną aktualizację strony lub aplikacji,
- pierwsze sporządzenie deklaracji,
- ostatni przegląd deklaracji.

Każda zmiana daty powinna mieć zapisane źródło i osobę potwierdzającą.

## 11. Przechowywanie i ochrona danych

Określ:

- miejsce przechowywania,
- osoby uprawnione,
- zasady wersjonowania,
- okres retencji,
- sposób usuwania danych osobowych,
- sposób oddzielenia dokumentacji publicznej od wewnętrznej,
- zasady bezpiecznego publikowania raportów.

Zachowaj co najmniej materiały potrzebne do odtworzenia podstaw aktualnej deklaracji i historii decyzji. Okres retencji dostosuj do zasad kancelaryjnych, archiwalnych, odpowiedzialności i ochrony danych obowiązujących w podmiocie.

## 12. Kryteria jakości dowodu

Dowód jest wystarczający, gdy:

- dotyczy właściwej wersji rozwiązania,
- obejmuje kluczowe funkcje i szablony,
- pozwala odtworzyć ustalenia,
- ujawnia ograniczenia,
- pozwala uzasadnić status,
- jest aktualny,
- jest dostępny cyfrowo, jeżeli jest publikowany,
- nie narusza ochrony danych ani bezpieczeństwa.

## 13. Dokumenty powiązane

- [Procedura tworzenia i publikacji deklaracji](./procedura-tworzenia-i-publikacji-deklaracji.md)
- [Procedura przeglądu i aktualizacji](./procedura-przegladu-i-aktualizacji-deklaracji.md)
- [Karta przeglądu i decyzji po zmianie](./karta-przegladu-i-decyzji-po-zmianie.md)
- [Plan usuwania barier](./plan-usuwania-barier.md)
