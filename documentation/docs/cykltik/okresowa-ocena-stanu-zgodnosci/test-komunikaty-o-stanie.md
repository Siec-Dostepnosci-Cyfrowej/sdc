---
id: test-komunikaty-o-stanie
title: Karta testu — Komunikaty o stanie
sidebar_label: Komunikaty o stanie
sidebar_position: 69
description: Scenariusz testu sprawdzającego, czy użytkownik jest informowany o zmianach stanu systemu, wynikach działań, błędach i komunikatach zwrotnych bez konieczności aktywnego wyszukiwania tych informacji.
keywords: [komunikaty o stanie, powiadomienia, alerty, komunikaty błędów, status, dostępność cyfrowa]
tags: [komunikaty o stanie, powiadomienia, alerty, komunikaty błędów, status, dostępność cyfrowa]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-069**

---

## 2. Nazwa testu

**Komunikaty o stanie**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Tak |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik otrzymuje informacje o zmianach stanu systemu bez konieczności aktywnego wyszukiwania tych informacji.

### Co oznacza „komunikat o stanie”?

Komunikat o stanie to informacja zwrotna przekazywana użytkownikowi w odpowiedzi na wykonane działanie lub zmianę stanu systemu.

Przykłady:

- „Formularz został wysłany.”
- „Dokument został zapisany.”
- „Wystąpił błąd.”
- „Dodano element do koszyka.”
- „Załadowano wyniki wyszukiwania.”
- „Nie znaleziono wyników.”
- „Trwa przetwarzanie danych.”
- „Pobieranie zakończone.”

### Co sprawdza test?

Test ocenia, czy użytkownik:

- otrzymuje informację o rezultacie swoich działań,
- jest informowany o błędach,
- otrzymuje komunikaty o sukcesie,
- jest informowany o postępie operacji,
- otrzymuje te informacje również przy użyciu technologii wspomagających.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **3.3.1 Identyfikacja błędów (A)**
- **3.3.3 Sugestie korekty błędów (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**
- **4.1.3 Komunikaty o stanie (AA)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.3.3.1 Error Identification**
- **9.3.3.3 Error Suggestion**
- **9.4.1.2 Name, Role, Value**
- **9.4.1.3 Status Messages**

---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy,
- wyszukiwarek,
- aplikacji internetowych,
- systemów transakcyjnych,
- paneli użytkownika,
- systemów rezerwacyjnych,
- koszyków zakupowych,
- systemów obsługi spraw,
- komponentów AJAX i SPA,
- interaktywnych usług cyfrowych.

### Wyjątki

Nie dotyczy stron zawierających wyłącznie statyczne treści i nieprzekazujących użytkownikowi żadnych komunikatów zwrotnych.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się system lub komponent, dla którego:

- użytkownik jest informowany o rezultacie wykonanej operacji,
- komunikaty błędów są przekazywane użytkownikowi,
- komunikaty sukcesu są przekazywane użytkownikowi,
- komunikaty o stanie są dostępne dla technologii wspomagających,
- użytkownik nie musi przenosić fokusu ani wyszukiwać komunikatu, aby został on przekazany,
- komunikaty są zrozumiałe i jednoznaczne.

---

## 8. Dlaczego to jest ważne

Użytkownik powinien wiedzieć, czy jego działanie zakończyło się powodzeniem.

Jeżeli komunikaty o stanie nie są przekazywane poprawnie:

- użytkownik może nie wiedzieć, czy formularz został wysłany,
- może wielokrotnie wykonywać tę samą operację,
- może nie wiedzieć o wystąpieniu błędu,
- może utracić orientację w działaniu systemu.

Problemy te szczególnie dotykają użytkowników technologii wspomagających.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- osób korzystających wyłącznie z klawiatury,
- wszystkich użytkowników korzystających z usług elektronicznych.

---

## 10. Sposób testowania

### Krok 1

Odszukaj funkcję lub proces generujący komunikaty zwrotne.

### Krok 2

Wykonaj działanie powodujące wyświetlenie komunikatu sukcesu.

Przykłady:

- wysłanie formularza,
- zapisanie danych,
- wykonanie wyszukiwania.

### Krok 3

Sprawdź, czy użytkownik otrzymuje jednoznaczną informację o rezultacie operacji.

### Krok 4

Wywołaj sytuację błędną.

Przykłady:

- pozostaw wymagane pole puste,
- wprowadź błędne dane.

### Krok 5

Sprawdź, czy użytkownik otrzymuje komunikat błędu.

### Krok 6

Uruchom czytnik ekranu.

### Krok 7

Powtórz działania z kroków 2–5.

### Krok 8

Sprawdź, czy komunikaty są automatycznie przekazywane przez czytnik ekranu.

### Krok 9

Sprawdź, czy użytkownik nie musi:

- przemieszczać fokusu,
- odszukiwać komunikatu ręcznie,
- przeładowywać strony,

aby dowiedzieć się o zmianie stanu.

### Krok 10

Jeżeli występują komunikaty postępu lub ładowania danych, sprawdź, czy są przekazywane użytkownikowi.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie istotne komunikaty o stanie są przekazywane użytkownikowi oraz technologiom wspomagającym.

### Wynik częściowo pozytywny

Większość komunikatów jest dostępna, jednak część z nich nie jest poprawnie komunikowana.

### Wynik negatywny

Użytkownik nie otrzymuje informacji o zmianach stanu lub komunikaty nie są dostępne dla technologii wspomagających.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- komunikat pojawia się wyłącznie wizualnie,
- komunikat nie jest odczytywany przez czytnik ekranu,
- komunikat znika zbyt szybko,
- komunikat jest przekazywany wyłącznie kolorem,
- brak informacji o powodzeniu operacji,
- brak informacji o błędzie,
- brak informacji o postępie operacji,
- komunikat pojawia się poza obszarem aktualnie obserwowanym przez użytkownika.

---

## 13. Dobre praktyki

- Stosowanie mechanizmów komunikatów o stanie zgodnych z ARIA.
- Informowanie zarówno o sukcesie, jak i o błędach.
- Formułowanie komunikatów prostym językiem.
- Wskazywanie sposobu rozwiązania problemu.
- Testowanie komunikatów z czytnikami ekranu.
- Zapewnienie odpowiedniego kontrastu i widoczności komunikatów.

---

## 14. Wynik testu

- Zgodne
- Częściowo zgodne
- Niezgodne
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Komunikaty o stanie nie są przekazywane technologiom wspomagającym. Użytkownicy korzystający z czytników ekranu nie otrzymują informacji o rezultatach wykonywanych operacji.

lub

> Komunikaty błędów i sukcesu są prezentowane wyłącznie wizualnie, bez zapewnienia równoważnego dostępu użytkownikom technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- Zapewnić programowe przekazywanie komunikatów o stanie.
- Zweryfikować działanie komunikatów z czytnikami ekranu.
- Zapewnić komunikaty dla wszystkich istotnych operacji.
- Uzupełnić komunikaty błędów o informacje umożliwiające rozwiązanie problemu.
- Nie opierać komunikatów wyłącznie na kolorze.
- Zapewnić odpowiednią widoczność i czytelność komunikatów.

---

## 18. Powiązane testy

- Identyfikacja błędów
- Sugestie korekty błędów
- Zapobieganie błędom
- Oznaczenie pól wymaganych
- Format danych
- Odczyt formularza przez czytnik ekranu
- Modalne okno dialogowe
- Wyszukiwanie w witrynie
---