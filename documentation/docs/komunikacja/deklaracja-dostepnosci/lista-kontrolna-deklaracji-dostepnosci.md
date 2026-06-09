---
id: lista-kontrolna-deklaracji-dostepnosci
title: Lista kontrolna deklaracji dostępności
sidebar_position: 10
sidebar_label: Lista kontrolna
description: Lista kontrolna treści, struktury, publikacji i dostępności deklaracji dostępności.
keywords: [lista kontrolna, deklaracja dostępności, HTML, identyfikatory, publikacja]
tags: [deklaracja dostępności, dostępność cyfrowa, lista kontrolna]
opracowanie: Damian Żłobicki
wspolpraca: Tomasz Szymczak
data_zgloszenia: 9 czerwca 2026 r.
ostatnia_aktualizacja: 9 czerwca 2026 r.
wersja_robocza: true
---

## 1. Sposób użycia

Wypełnij listę przed zatwierdzeniem i ponownie po publikacji. Zapisz osobę sprawdzającą, datę, adres i wersję deklaracji.

Lista wspiera kontrolę, ale nie zastępuje aktualnych warunków technicznych.

## 2. Zakres i język

- [ ] Deklaracja dotyczy jednej, jednoznacznie wskazanej strony albo aplikacji.
- [ ] Dla każdego systemu operacyjnego aplikacji istnieje odrębna deklaracja.
- [ ] Deklaracja jest w języku strony lub aplikacji.
- [ ] Nazwa, adres, wersja i system operacyjny są poprawne.
- [ ] Rozwiązanie i deklaracja są wpisane do rejestru.

## 3. Treści wymagane

- [ ] Tytuł „Deklaracja dostępności” jest obecny.
- [ ] Oświadczenie wstępne ma obowiązujące brzmienie.
- [ ] Podano datę publikacji strony lub wydania aplikacji.
- [ ] Podano datę ostatniej istotnej aktualizacji strony lub aplikacji.
- [ ] Podano stan dostępności cyfrowej w obowiązującym brzmieniu.
- [ ] Podano datę pierwszego sporządzenia deklaracji.
- [ ] Podano datę ostatniego przeglądu, jeżeli przegląd już przeprowadzono.
- [ ] Opisano podstawę oceny.
- [ ] Dodano wymagany link do raportu, streszczenia albo oświadczenia.
- [ ] Podano dane kontaktowe osoby lub komórki.
- [ ] Opisano składanie i obsługę żądań.
- [ ] Podano terminy 7 dni i maksymalnie 2 miesięcy.
- [ ] Opisano skargę i podano link do Rzecznika Praw Obywatelskich.
- [ ] Dodano sekcję „Pozostałe informacje”.
- [ ] Podano adres i dostępność architektoniczną siedziby głównej albo właściwy link.
- [ ] Opisano dostępność komunikacyjno-informacyjną albo podano właściwy link.
- [ ] Podano możliwość lub brak możliwości skorzystania z tłumacza języka migowego online.

## 4. Treści zależne od sytuacji

- [ ] Przy statusie częściowej zgodności lub niezgodności dodano „Niedostępne treści”.
- [ ] Niezgodności, treści nieobjęte przepisami i nadmierne koszty są rozdzielone.
- [ ] Każde wyłączenie ma konkretną podstawę prawną.
- [ ] Nadmierne koszty mają szczegółową ocenę albo link do niej.
- [ ] Opisano niestandardowe skróty klawiszowe, jeżeli występują.
- [ ] W deklaracji strony wymieniono aplikacje i ich deklaracje, jeżeli podmiot je posiada.
- [ ] Deklaracja aplikacji zawiera adres pobrania i instalacji.

## 5. Tytuły sekcji i obowiązujące brzmienia

- [ ] Zastosowano obowiązujące brzmienie oświadczenia wstępnego.
- [ ] Zastosowano obowiązujące brzmienie wybranego statusu zgodności.
- [ ] Zastosowano tytuł „Stan dostępności cyfrowej”.
- [ ] Zastosowano tytuł „Niedostępne treści”, jeżeli sekcja jest wymagana.
- [ ] Zastosowano właściwe tytuły „Niezgodność z załącznikiem”, „Treści nieobjęte przepisami” i „Nadmierne koszty”.
- [ ] Zastosowano tytuł „Przygotowanie deklaracji dostępności i jej aktualizacja”.
- [ ] Zastosowano tytuł „Udogodnienia, ograniczenia i inne informacje”, jeżeli dodano tę dobrowolną sekcję.
- [ ] Zastosowano tytuł „Skróty klawiszowe”, jeżeli sekcja jest wymagana.
- [ ] Zastosowano tytuł „Informacje zwrotne i dane kontaktowe”.
- [ ] Zastosowano tytuł „Obsługa wniosków i skarg związanych z dostępnością”.
- [ ] Zastosowano tytuł „Pozostałe informacje”.
- [ ] Zastosowano tytuł „Aplikacje mobilne”, jeżeli sekcja jest wymagana.
- [ ] Zastosowano tytuł „Dostępność architektoniczna”.
- [ ] Zastosowano tytuł „Dostępność komunikacyjno-informacyjna”.
- [ ] Nie zmieniono treści, które zgodnie z warunkami technicznymi należy odwzorować wiernie.

## 6. Opisy barier

- [ ] Wskazano element lub funkcję.
- [ ] Wskazano adres podstrony albo nazwę ekranu.
- [ ] Barierę opisano prostym, nietechnicznym językiem.
- [ ] Opisano wpływ na użytkownika.
- [ ] Podano działający alternatywny sposób dostępu.
- [ ] Informacja jest zgodna z raportem i stanem produkcyjnym.
- [ ] Bariera ma właściciela i termin w planie usuwania barier.

## 7. Daty

- [ ] Nie pomylono daty publikacji rozwiązania z datą deklaracji.
- [ ] Data ostatniej aktualizacji dotyczy istotnej zmiany strony lub aplikacji.
- [ ] Data sporządzenia deklaracji pozostała datą pierwszego sporządzenia.
- [ ] Data ostatniego przeglądu odpowiada rzeczywistemu przeglądowi.
- [ ] Daty mają element `time` oraz prawidłowy atrybut `datetime`.

## 8. Identyfikatory HTML

### Obowiązkowe

- [ ] `a11y-wstep`
- [ ] `a11y-podmiot`
- [ ] `a11y-zakres`
- [ ] `a11y-url`
- [ ] `a11y-data-publikacja`
- [ ] `a11y-data-aktualizacja`
- [ ] `a11y-status`
- [ ] `a11y-kontakt`
- [ ] `a11y-email`
- [ ] `a11y-telefon`
- [ ] `a11y-procedura`
- [ ] `a11y-data-sporzadzenie`
- [ ] `a11y-architektura`
- [ ] `a11y-komunikacja`

### Obowiązkowe zależnie od sytuacji

- [ ] `a11y-data-przeglad` - od pierwszego przeglądu.
- [ ] `a11y-ocena` - gdy zastosowano nadmierne koszty.
- [ ] `a11y-aplikacje` - gdy podmiot posiada aplikacje mobilne.
- [ ] `a11y-architektura-url` - gdy podano link do osobnego opisu.

### Kontrola identyfikatorów

- [ ] Każdy identyfikator występuje najwyżej raz.
- [ ] Identyfikatory nie zostały przetłumaczone.
- [ ] Identyfikator obejmuje właściwą treść.
- [ ] Nie ma dwóch deklaracji osadzonych na jednej stronie z powtarzającymi się identyfikatorami.

## 9. Struktura i dostępność

- [ ] Nagłówki tworzą logiczną hierarchię.
- [ ] Listy są oznaczone jako listy.
- [ ] Linki mają zrozumiałe nazwy.
- [ ] Adres e-mail używa linku `mailto:`.
- [ ] Numer telefonu może używać linku `tel:`.
- [ ] Skróty mają rozwinięcie.
- [ ] Deklaracja jest obsługiwana klawiaturą.
- [ ] Fokus jest widoczny.
- [ ] Treść pozostaje czytelna po powiększeniu.
- [ ] Deklaracja jest użyteczna z czytnikiem ekranu.
- [ ] Dokumenty i raporty dostępne z deklaracji są dostępne cyfrowo.

## 10. Publikacja

- [ ] Deklaracja strony jest opublikowana na tej stronie albo na innej odpowiedniej stronie.
- [ ] Jeżeli deklarację strony opublikowano na innej odpowiedniej stronie, link do niej jest dostępny podczas nawigacji po stronie, której dotyczy.
- [ ] Link jest dostępny podczas nawigacji po całej stronie.
- [ ] Deklaracja aplikacji jest opublikowana na stronie podmiotu albo dostępna wraz z innymi informacjami podczas pobierania aplikacji.
- [ ] Link do deklaracji jest dostępny w miejscu pobierania aplikacji.
- [ ] Deklaracja strony zawiera linki do deklaracji aplikacji.
- [ ] Link do deklaracji jest dostępny w aplikacji, jeżeli podmiot wdrożył zalecenie Sieci.
- [ ] Wszystkie linki działają na środowisku produkcyjnym.
- [ ] Przekierowania nie prowadzą do nieaktualnej wersji.

## 11. Zatwierdzenie i dowody

- [ ] Status ma pisemne uzasadnienie.
- [ ] Dowód dotyczy właściwej wersji.
- [ ] Wyłączenia i odstępstwa zostały zatwierdzone.
- [ ] Osoba zatwierdzająca otrzymała plan usuwania barier.
- [ ] Zapisano osobę i datę zatwierdzenia.
- [ ] Zapisano wynik kontroli produkcyjnej.

## 12. Wynik

Zapisz:

- wynik: przyjęta, przyjęta po poprawkach albo odrzucona,
- listę poprawek,
- właścicieli poprawek,
- terminy,
- datę ponownej kontroli.
