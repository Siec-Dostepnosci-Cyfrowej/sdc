---
id: test-rejestracja-logowanie
title: Scenariusz testu - Rejestracja / Logowanie
sidebar_label: Rejestracja / Logowanie
sidebar_position: 118
description: Scenariusz testu sprawdzającego, czy użytkownik może samodzielnie zarejestrować konto, zalogować się, odzyskać dostęp do konta oraz korzystać z mechanizmów uwierzytelniania bez barier dostępności.
keywords: [ocena zgodności,proces,profil rozszerzony,rejestracja, logowanie]
tags: [ocena zgodności,proces,profil rozszerzony,rejestracja, logowanie]
opracowanie: Stefan Wajda
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-118**

---

## 2. Nazwa testu

**Rejestracja / Logowanie**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może samodzielnie:

- utworzyć konto,
- zalogować się do systemu,
- odzyskać dostęp do konta,
- korzystać z mechanizmów uwierzytelniania,
- poprawiać błędy formularzy,
- przejść proces weryfikacji i potwierdzenia tożsamości.

Test obejmuje cały proces uwierzytelniania, a nie wyłącznie pojedynczy formularz logowania. Opracowano go na podstawie wymagań dla stron rejestracji i logowania. 

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.1 Informacje i relacje
- 1.3.5 Określenie celu danych wejściowych
- 2.1.1 Klawiatura
- 2.2.1 Regulacja czasu
- 2.4.3 Kolejność fokusu
- 2.4.6 Nagłówki i etykiety
- 3.2.2 Zmiana podczas wprowadzania danych
- 3.3.1 Identyfikacja błędów
- 3.3.2 Etykiety i instrukcje
- 3.3.3 Sugestie korekty błędów
- 3.3.7 Ponowne wpisy
- 3.3.8 Dostępne uwierzytelnianie (minimum)
- 3.3.9 Dostępne uwierzytelnianie (ulepszone)
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

- formularzy logowania,
- formularzy rejestracji kont,
- formularzy odzyskiwania hasła,
- ekranów weryfikacji adresu e-mail,
- ekranów weryfikacji numeru telefonu,
- mechanizmów dwuskładnikowego uwierzytelniania (2FA),
- usług wymagających założenia konta użytkownika.

---

## 7. Oczekiwany wynik

Użytkownik może samodzielnie:

- utworzyć konto,
- zalogować się,
- odzyskać hasło,
- przejść proces weryfikacji,
- korzystać z uwierzytelniania wieloskładnikowego,
- poprawić błędy formularza,
- ukończyć proces bez pomocy osób trzecich.

---

## 8. Dlaczego to jest ważne

Logowanie i rejestracja stanowią punkt wejścia do usług cyfrowych.

Jeżeli proces uwierzytelniania jest niedostępny, użytkownik nie może korzystać z usługi niezależnie od dostępności pozostałych części systemu. Problemy w tym obszarze należą do najczęstszych przyczyn wykluczenia użytkowników z usług elektronicznych. 

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących,
- osób korzystających wyłącznie z klawiatury,
- osób z ograniczoną sprawnością rąk,
- osób korzystających z technologii wspomagających,
- osób z niepełnosprawnością poznawczą,
- użytkowników urządzeń mobilnych,
- użytkowników menedżerów haseł.

---

## 10. Sposób testowania

### Krok 1. Rozpoczęcie procesu

Sprawdź, czy użytkownik może odnaleźć:

- formularz logowania,
- formularz rejestracji,
- funkcję odzyskiwania hasła.

### Krok 2. Struktura i orientacja

Sprawdź, czy:

- strona posiada jednoznaczny nagłówek,
- cel strony jest zrozumiały,
- kolejność elementów jest logiczna,
- fokus porusza się przewidywalnie.

### Krok 3. Formularz logowania

Sprawdź, czy:

- pola posiadają etykiety,
- pola obowiązkowe są oznaczone,
- formularz jest obsługiwany klawiaturą,
- możliwe jest korzystanie z czytnika ekranu.

### Krok 4. Formularz rejestracji

Sprawdź, czy:

- wymagania dotyczące danych są jasne,
- formularz nie wymaga zbędnych informacji,
- instrukcje są dostępne przed wypełnieniem pól.

### Krok 5. Hasła

Sprawdź, czy:

- wymagania hasła są opisane,
- można wkleić hasło,
- działa menedżer haseł,
- funkcja „Pokaż hasło” jest dostępna.

### Krok 6. Walidacja błędów

Celowo wprowadź błędne dane.

Sprawdź, czy:

- błędy są identyfikowane,
- użytkownik otrzymuje wskazówki naprawcze,
- komunikaty są odczytywane przez technologie wspomagające.

### Krok 7. Odzyskiwanie dostępu

Sprawdź, czy:

- dostępna jest procedura odzyskiwania hasła,
- komunikaty są zrozumiałe,
- użytkownik otrzymuje potwierdzenie wykonania operacji.

### Krok 8. Uwierzytelnianie wieloskładnikowe

Jeżeli jest stosowane:

- sprawdź dostępność pól kodów,
- sprawdź instrukcje,
- sprawdź obsługę klawiaturą i czytnikiem ekranu.

### Krok 9. Komunikaty i potwierdzenia

Sprawdź, czy:

- użytkownik otrzymuje informacje o wyniku operacji,
- komunikaty są dostępne dla technologii wspomagających,
- nie występują nieoczekiwane zmiany kontekstu.

---

## 11. Kryteria oceny wyniku

### Spełnione

Użytkownik może samodzielnie przejść wszystkie etapy rejestracji, logowania i odzyskiwania dostępu.

### Częściowo spełnione

Proces jest możliwy do wykonania, ale występują istotne utrudnienia.

### Niespełnione

Co najmniej jeden etap procesu uniemożliwia skuteczne uwierzytelnienie.

---

## 12. Typowe niezgodności

- placeholder zamiast etykiety,
- brak powiązania komunikatu błędu z polem,
- niewidoczny fokus,
- brak obsługi klawiaturą,
- blokowanie wklejania haseł,
- brak obsługi menedżerów haseł,
- nieopisany przycisk „Pokaż hasło”,
- nieczytelne wymagania dotyczące hasła,
- niedostępna procedura odzyskiwania hasła,
- niedostępny mechanizm 2FA,
- komunikaty błędów nieodczytywane przez czytnik ekranu. 

---

## 13. Dobre praktyki

- stosowanie poprawnych etykiet formularzy,
- wykorzystanie atrybutów autocomplete,
- wspieranie menedżerów haseł,
- możliwość pokazania hasła,
- podsumowanie błędów formularza,
- dostępne komunikaty o stanie,
- ograniczanie liczby wymaganych danych,
- jasne instrukcje dla użytkownika. 

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

> Formularz logowania nie zapewnia poprawnej identyfikacji błędów. Komunikaty o błędach nie są powiązane z odpowiednimi polami formularza i nie są odczytywane przez technologie wspomagające. Problem utrudnia lub uniemożliwia zalogowanie się osobom korzystającym z czytników ekranu.

---

## 17. Rekomendacje naprawcze

- zapewnić poprawne etykiety formularzy,
- powiązać komunikaty błędów z polami,
- umożliwić korzystanie z menedżerów haseł,
- nie blokować wklejania haseł,
- zapewnić dostępność funkcji odzyskiwania hasła,
- zapewnić dostępne uwierzytelnianie wieloskładnikowe,
- zapewnić obsługę wszystkich elementów klawiaturą,
- udostępniać czytelne instrukcje i komunikaty.

---

## 18. Powiązane testy

- testID-117 Złożenie wniosku
- testID-037 Formularz elektroniczny
- testID-026 Identyfikacja błędów
- testID-027 Sugestie korekty błędów
- testID-040 Komunikaty o stanie
- testID-101 Ponowne wpisy
- testID-102 Dostępne uwierzytelnianie
- testID-103 Dostępne uwierzytelnianie (ulepszone)
- testID-035 Dostęp z klawiatury
- testID-036 Kolejność fokusu

---