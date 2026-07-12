---
id: test-formularz
title: Scenariusz testu - Formularz
sidebar_label: Formularz
sidebar_position: 120
description: Scenariusz testu sprawdzającego, czy formularz umożliwia użytkownikowi samodzielne wprowadzenie danych, poprawienie błędów oraz skuteczne wykonanie zadania niezależnie od sposobu korzystania z technologii. 
keywords: [ocena zgodności,obiekt,profil rozszerzony,formularz]
tags: [ocena zgodności,obiekt,profil rozszerzony,formularz]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-120**

---

## 2. Nazwa testu

**Formularz**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy formularz umożliwia użytkownikowi:

- zrozumienie celu formularza,
- rozpoznanie wymaganych danych,
- wprowadzenie danych,
- poprawienie błędów,
- wysłanie formularza,
- otrzymanie potwierdzenia wykonania operacji.

Test obejmuje zarówno formularze kontaktowe, jak i formularze służące do realizacji usług cyfrowych. Szczególną uwagę zwraca na etykiety pól, instrukcje, komunikaty błędów, obsługę klawiaturą oraz dostępność procesu wysyłania formularza. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.3.5 Określenie celu danych wejściowych
- 1.4.1 Użycie koloru
- 2.1.1 Klawiatura
- 2.1.2 Bez pułapki klawiaturowej
- 2.4.3 Kolejność fokusu
- 2.4.7 Widoczny fokus
- 2.5.3 Etykieta w nazwie
- 3.2.2 Zmiana podczas wprowadzania danych
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety i instrukcje
- 3.3.3 Sugestie korekty błędów
- 4.1.2 Nazwa, rola, wartość
- 4.1.3 Komunikaty o stanie

### EN 301 549

- 9.1
- 9.2
- 9.3
- 9.4

---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy kontaktowych,
- formularzy zgłoszeniowych,
- formularzy wniosków,
- formularzy zapisów i rejestracji,
- formularzy ankietowych,
- formularzy wieloetapowych,
- formularzy wykorzystywanych w usługach cyfrowych. 

---

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- odnaleźć formularz,
- zrozumieć wymagane dane,
- wypełnić pola,
- poprawić błędy,
- wysłać formularz,
- otrzymać potwierdzenie wykonania operacji.

---

## 8. Dlaczego to jest ważne

Formularze należą do najważniejszych elementów usług cyfrowych administracji publicznej.

Błędy w etykietach, instrukcjach, walidacji lub komunikatach mogą uniemożliwić wykonanie zadania i skutecznie zablokować dostęp do usługi. Formularze są jednocześnie jednym z najczęstszych źródeł problemów dostępności. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z ograniczoną sprawnością rąk,
- osób z niepełnosprawnością poznawczą,
- osób korzystających z technologii wspomagających,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1. Struktura formularza

Sprawdź, czy:

- formularz posiada jednoznaczny tytuł,
- użytkownik rozumie cel formularza,
- instrukcje są dostępne przed rozpoczęciem wypełniania. 

### Krok 2. Etykiety pól

Sprawdź, czy:

- każde pole posiada widoczną etykietę,
- etykieta jest powiązana z polem,
- placeholder nie jest jedynym opisem pola. 

### Krok 3. Pola wymagane

Sprawdź, czy:

- pola obowiązkowe są oznaczone,
- informacja o obowiązkowości jest przekazana tekstowo,
- użytkownik rozumie, które pola musi wypełnić. 

### Krok 4. Obsługa klawiaturą

Sprawdź, czy:

- wszystkie pola są osiągalne klawiszem Tab,
- kolejność fokusu jest logiczna,
- nie występują pułapki klawiaturowe,
- fokus jest widoczny. 

### Krok 5. Grupy pól

Jeżeli formularz zawiera grupy opcji:

- sprawdź zastosowanie grupowania,
- sprawdź, czy użytkownik rozumie znaczenie grupy,
- sprawdź odczyt przez czytnik ekranu. 

### Krok 6. Walidacja błędów

Celowo wprowadź błędne dane.

Sprawdź, czy:

- błędy są identyfikowane,
- wskazywane jest pole powodujące błąd,
- użytkownik otrzymuje wskazówki naprawcze,
- błędy nie są oznaczane wyłącznie kolorem. 

### Krok 7. Wysłanie formularza

Sprawdź, czy:

- formularz można wysłać,
- użytkownik otrzymuje informację o wyniku operacji,
- komunikat sukcesu jest dostępny dla technologii wspomagających. 

### Krok 8. Zabezpieczenia antyspamowe

Jeżeli zastosowano mechanizm antyspamowy:

- sprawdź, czy nie tworzy bariery dostępności,
- sprawdź, czy istnieje dostępna alternatywa. 

---

## 11. Kryteria oceny wyniku

### Spełnione

Formularz umożliwia samodzielne wykonanie zadania bez istotnych barier.

### Częściowo spełnione

Formularz zawiera problemy utrudniające wykonanie zadania, ale użytkownik może je ukończyć.

### Niespełnione

Co najmniej jedna bariera uniemożliwia skuteczne wypełnienie lub wysłanie formularza.

---

## 12. Typowe niezgodności

- brak etykiet pól,
- placeholder jako jedyny opis pola,
- brak oznaczenia pól wymaganych,
- błędy oznaczone wyłącznie kolorem,
- brak powiązania komunikatu błędu z polem,
- niewidoczny fokus,
- pułapka klawiaturowa,
- brak dostępnego komunikatu sukcesu,
- CAPTCHA bez dostępnej alternatywy. 

---

## 13. Dobre praktyki

- stosowanie widocznych etykiet,
- przekazywanie wymagań dotyczących formatu danych przed wprowadzeniem danych,
- prezentowanie błędów zarówno przy polu, jak i w podsumowaniu,
- stosowanie dostępnych komunikatów o stanie,
- grupowanie powiązanych pól,
- wspieranie użytkowników technologii wspomagających,
- umożliwienie poprawiania błędów bez utraty danych. 

---

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis wyników testu.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Formularz nie zapewnia prawidłowej identyfikacji błędów. Komunikaty błędów są oznaczane wyłącznie kolorem i nie są jednoznacznie powiązane z odpowiednimi polami formularza. Problem utrudnia poprawianie błędów osobom korzystającym z czytników ekranu oraz osobom z zaburzeniami rozpoznawania barw.

---

## 17. Rekomendacje naprawcze

- zapewnić etykiety wszystkich pól,
- nie wykorzystywać placeholderów jako jedynego opisu,
- oznaczać pola wymagane w sposób tekstowy,
- powiązać komunikaty błędów z polami,
- zapewnić obsługę klawiaturą,
- zapewnić dostępne komunikaty o stanie,
- stosować dostępne mechanizmy antyspamowe,
- przeprowadzić ponowną weryfikację formularza po wdrożeniu zmian.

---

## 18. Powiązane testy

- testID-037 Formularz elektroniczny
- testID-026 Identyfikacja błędów
- testID-027 Sugestie korekty błędów
- testID-040 Komunikaty o stanie
- testID-035 Dostęp z klawiatury
- testID-036 Kolejność fokusu
- testID-102 Dostępne uwierzytelnianie
- testID-117 Złożenie wniosku
- testID-118 Rejestracja / Logowanie

---