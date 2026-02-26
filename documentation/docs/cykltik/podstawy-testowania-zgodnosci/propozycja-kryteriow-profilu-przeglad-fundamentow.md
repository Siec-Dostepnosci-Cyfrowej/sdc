---
id: propozycja-kryteriow-profilu-przeglad-fundamentow
title: Profil 1 — Przegląd Fundamentów  
sidebar_label: Profil 1 — Przegląd Fundamentów 
sidebar_position: 5
description: Szablon pojedynczej procedury testowej polskich podstaw metodyki testowania zgodności produktów cyfrowych z EN 301 549
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 26 lutego 2026 r.
ostatnia_aktualizacja: 26 lutego 2026 r.
wersja_robocza: true

---

**Propozycja zestawu kryteriów i uzasadnienie do „Podstawy testowania zgodności TIK z EN 301 549** 

---

## 1. Cel Profilu Fundamentów

Profil Fundamentów ma na celu ocenę, czy produkt cyfrowy posiada minimalną, strukturalną zdolność do osiągnięcia zgodności z EN 301 549 / WCAG 2.x.

Nie jest to pełny audyt.  
Nie jest to podstawa deklaracji zgodności.  

Jest to ocena:

> Czy użytkownik może rozpocząć i zrealizować podstawowe zadania bez systemowych barier dostępności?

Profil obejmuje wybrane kryteria, które:

- warunkują operowalność,
- determinują możliwość percepcji informacji,
- wpływają bezpośrednio na wykonalność zadania,
- generują największe ryzyko systemowych barier.

---

## 2. Proponowany zestaw kryteriów (18 SC)

### A. Percepcja i struktura informacji

#### 1. 1.1.1 Treść nietekstowa  
Bez alternatyw tekstowych podstawowe funkcje są niedostępne.

#### 2. 1.3.1 Informacje i relacje  
Brak struktury uniemożliwia orientację i nawigację.

#### 3. 1.3.2 Zrozumiała kolejność  
Brak logicznej sekwencji uniemożliwia wykonanie procesów.

#### 4. 1.4.3 Kontrast (minimum)  
Brak minimalnego kontrastu wyklucza część użytkowników.

#### 5. 1.4.10 Dopasowanie do ekranu  
Brak responsywności uniemożliwia korzystanie przy powiększeniu.

---

### B. Operowalność

#### 6. 2.1.1 Klawiatura  
Podstawowy warunek dostępności interaktywnej.

#### 7. 2.1.2 Bez pułapki na klawiaturę  
Zapobiega zablokowaniu użytkownika.

#### 8. 2.4.3 Kolejność fokusu  
Warunek logicznego przejścia przez proces.

#### 9. 2.4.7 Widoczny fokus  
Warunek orientacji w interfejsie.

#### 10. 2.4.6 Nagłówki i etykiety  
Warunek zrozumiałej struktury.

---

### C. Formularze i komunikaty

#### 11. 3.3.1 Identyfikacja błędu  
Bez tego użytkownik nie wie, co poprawić.

#### 12. 3.3.2 Etykiety lub instrukcje  
Brak instrukcji uniemożliwia poprawne wypełnienie.

#### 13. 3.3.3 Sugestie korekty błędów  
Warunek skutecznego zakończenia zadania.

#### 14. 4.1.3 Komunikaty o stanie  
Kluczowe dla użytkowników czytników ekranu.

---

### D. Nazwy, role, programowa dostępność

#### 15. 4.1.2 Nazwa, rola, wartość  
Warunek poprawnej interpretacji komponentów przez AT.

---

### E. Stabilność i przewidywalność

#### 16. 3.2.1 Po otrzymaniu fokusu  
Zapobiega niekontrolowanym zmianom kontekstu.

### 17. 3.2.2 Podczas wprowadzania danych  
Chroni użytkownika przed utratą kontroli.

---

### F. Treści migające i bezpieczeństwo

#### 18. 2.3.1 Trzy błyski lub poniżej progu  
Kryterium bezpieczeństwa (epilepsja fotogenna).

---

## 3. Dlaczego te kryteria?

### 3.1 Pokrywają rdzeń operowalności

Jeżeli te kryteria są niespełnione, produkt:

- nie daje się obsłużyć klawiaturą,
- nie daje się odczytać przez AT,
- nie pozwala ukończyć formularza,
- wprowadza użytkownika w dezorientację.

---

### 3.2 Pokrywają ~50–60% realnych barier systemowych

W praktyce audytowej najczęstsze bariery krytyczne dotyczą:

- struktury,
- formularzy,
- nazw i ról,
- kolejności,
- komunikatów o stanie.

---

### 3.3 Warunkują sens audytu pełnego

Jeżeli produkt nie spełnia fundamentów:

- audyt pełny nie ma sensu (wynik będzie masowo negatywny),
- wdrożenie powinno najpierw naprawić podstawy.

Profil Fundamentów pełni więc funkcję „testu dojrzałości strukturalnej”.

---

## 4. Minimalna próbka dla Profilu Fundamentów

- Strona startowa / ekran główny
- Główna usługa / proces
- Jeden pełny scenariusz zadaniowy
- Formularz z walidacją
- Strona z komunikatem błędu

---

## 5. Minimalne testy AT

Obowiązkowe:

- Pełne przejście głównego scenariusza z czytnikiem ekranu
- Pełna obsługa klawiaturą
- Weryfikacja komunikatów o stanie
- Weryfikacja kolejności fokusu i odczytu

---

## 6. Wynik Profilu Fundamentów

Wynik powinien zawierać:

- Informację, czy system posiada „zdolność strukturalną do zgodności”.
- Wykaz barier systemowych.
- Rekomendację:  
  - gotowy do audytu pełnego /  
  - wymaga napraw fundamentów przed dalszym testowaniem.

---

## 7. Status normatywny

Profil Fundamentów:

- Nie jest podstawą deklaracji zgodności.
- Nie jest podstawą certyfikacji.
- Stanowi narzędzie zarządcze i decyzyjne.
- Może być stosowany przed wdrożeniem lub przed zamówieniem audytu pełnego.

---

## 8. Podsumowanie

Profil Fundamentów:

- redukuje ryzyko kosztownych, nieefektywnych audytów pełnych,
- umożliwia szybkie wykrycie barier systemowych,
- wspiera racjonalne planowanie działań naprawczych,
- stanowi pomost między screeningiem a audytem pełnym,
- wzmacnia dojrzałość procesu testowania zgodności TIK.

Jest to poziom testowania, który bada nie wszystko — lecz to, bez czego nic nie działa.