---
id: test-odczyt-formularza-przez-czytnik-ekranu
title: Scenariusz testu - Odczyt formularza przez czytnik ekranu
sidebar_label: Odczyt formularza przez czytnik ekranu
sidebar_position: 48
description: Scenariusz testu sprawdzającego, czy użytkownik czytnika ekranu otrzymuje wszystkie informacje niezbędne do poprawnego wypełnienia formularza.
keywords: [ocena zgodności,strona internetowa,cecha dostępności,profil wstępny,odczyt formularza przez czytnik ekranu,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,cecha dostępności,profil wstępny,odczyt formularza przez czytnik ekranu,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-048**

---

## 2. Nazwa testu

**Odczyt formularza przez czytnik ekranu**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik korzystający z czytnika ekranu otrzymuje wszystkie informacje niezbędne do poprawnego wypełnienia formularza.

Jest to test syntetyczny, pozwalający ocenić praktyczne działanie wielu wymagań dostępności związanych z formularzami.

### Co oznacza „odczyt formularza”?

Odczyt formularza polega na przekazywaniu użytkownikowi przez czytnik ekranu informacji niezbędnych do korzystania z formularza.

W szczególności użytkownik powinien otrzymywać informacje o:

- nazwie pola,
- rodzaju pola,
- obowiązkowości pola,
- instrukcjach dotyczących wprowadzania danych,
- grupach pól formularza,
- błędach i komunikatach walidacyjnych.

### Co sprawdza ten test?

Test pozwala ocenić między innymi:

- programowe powiązanie etykiet z polami,
- dostępne nazwy pól,
- dostępne opisy pól,
- oznaczenia pól wymaganych,
- instrukcje dotyczące formatu danych,
- grupowanie pól formularza,
- identyfikację błędów,
- sugestie korekty błędów.

### Czego nie sprawdza ten test?

Test nie zastępuje szczegółowych testów:

- Widoczne etykiety lub instrukcje,
- Opisowe etykiety,
- Oznaczenie pól wymaganych,
- Format danych,
- Etykiety powiązane programowo,
- Identyfikacja błędów,
- Sugestie korekty błędów.

Jego celem jest ocena rzeczywistego doświadczenia użytkownika technologii wspomagającej.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **3.3.1 Identyfikacja błędów (A)**
- **3.3.2 Etykiety lub instrukcje (A)**
- **3.3.3 Sugestie korekty błędów (AA)**
- **3.3.4 Zapobieganie błędom (AA)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.3.3.1 Error Identification**
- **9.3.3.2 Labels or Instructions**
- **9.3.3.3 Error Suggestion**
- **9.3.3.4 Error Prevention**
- **9.4.1.2 Name, Role, Value**

---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy kontaktowych,
- formularzy wyszukiwania,
- formularzy logowania,
- formularzy rejestracyjnych,
- formularzy usług publicznych,
- formularzy zgłoszeniowych,
- formularzy zakupowych,
- formularzy rekrutacyjnych,
- formularzy transakcyjnych.

### Wyjątki

Jeżeli na stronie nie występują formularze, wynik oznacza się jako:

**Nie dotyczy (ND).**

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego użytkownik czytnika ekranu otrzymuje wszystkie informacje niezbędne do jego poprawnego wypełnienia, w szczególności:

- nazwę pola,
- informację o rodzaju pola,
- informację o obowiązkowości pola,
- instrukcje dotyczące danych,
- informacje o grupach pól,
- komunikaty błędów,
- wskazówki umożliwiające poprawienie błędów.

Użytkownik może samodzielnie zrozumieć formularz i ukończyć zadanie.

---

## 8. Dlaczego to jest ważne

Formularz może wyglądać poprawnie wizualnie, a jednocześnie być niezrozumiały dla użytkownika czytnika ekranu.

Brak dostępu do etykiet, instrukcji lub komunikatów powoduje, że użytkownik:

- nie wie, jakie dane należy podać,
- popełnia więcej błędów,
- nie może ukończyć formularza,
- może zrezygnować z korzystania z usługi.

Test pozwala ocenić rzeczywistą użyteczność formularza dla osób korzystających z technologii wspomagających.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób głuchoniewidomych korzystających z monitorów brajlowskich,
- osób słabowidzących korzystających z technologii wspomagających,
- osób korzystających z nawigacji klawiaturowej wspieranej przez czytnik ekranu.

---

## 10. Sposób testowania

### Krok 1

Uruchom czytnik ekranu, np.:

- NVDA,
- VoiceOver,
- JAWS,
- TalkBack.

### Krok 2

Otwórz formularz.

### Krok 3

Przemieszczaj się pomiędzy polami formularza wyłącznie za pomocą klawiatury.

### Krok 4

Dla każdego pola sprawdź, czy czytnik odczytuje:

- nazwę pola,
- typ pola,
- informację o obowiązkowości,
- instrukcje dotyczące danych.

### Krok 5

Sprawdź grupy pól formularza.

Oceń, czy czytnik odczytuje:

- nazwę grupy,
- dostępne odpowiedzi,
- dodatkowe instrukcje.

### Krok 6

Wypełnij formularz poprawnymi danymi.

### Krok 7

Wypełnij formularz błędnymi danymi.

Przykładowo:

- pozostaw wymagane pole puste,
- wpisz nieprawidłowy adres e-mail,
- wpisz błędny format daty.

### Krok 8

Sprawdź, czy czytnik odczytuje:

- komunikaty błędów,
- informacje o błędnych polach,
- wskazówki dotyczące poprawienia błędów.

### Krok 9

Spróbuj ukończyć formularz wyłącznie przy użyciu czytnika ekranu.

### Krok 10

Oceń, czy wszystkie informacje potrzebne do wykonania zadania zostały przekazane użytkownikowi.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Czytnik ekranu przekazuje wszystkie informacje niezbędne do poprawnego wypełnienia formularza i ukończenia zadania.

### Wynik częściowo pozytywny

Większość informacji jest dostępna, jednak występują pojedyncze problemy utrudniające korzystanie z formularza.

### Wynik negatywny

Brakuje istotnych informacji niezbędnych do zrozumienia formularza lub ukończenia procesu.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak odczytu etykiety pola,
- brak odczytu informacji o obowiązkowości pola,
- brak odczytu instrukcji formatowania danych,
- brak odczytu grup pól wyboru,
- brak odczytu komunikatów błędów,
- brak odczytu sugestii korekty błędów,
- nieczytelne lub niezrozumiałe komunikaty odczytywane przez czytnik,
- utrata informacji dostępnych użytkownikom widzącym.

---

## 13. Dobre praktyki

- Testowanie formularzy przy użyciu czytnika ekranu przed publikacją.
- Stosowanie poprawnych powiązań programowych.
- Zapewnienie dostępnych nazw i opisów wszystkich pól.
- Zapewnienie odczytu informacji o obowiązkowości pól.
- Zapewnienie odczytu komunikatów błędów i instrukcji.
- Przeprowadzanie testów z udziałem użytkowników technologii wspomagających.

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

> Formularz nie przekazuje użytkownikom czytników ekranu wszystkich informacji niezbędnych do jego poprawnego wypełnienia. Część etykiet, instrukcji lub komunikatów błędów nie jest odczytywana przez technologię wspomagającą.

lub

> Czytnik ekranu nie odczytuje części informacji dostępnych użytkownikom widzącym, co utrudnia lub uniemożliwia samodzielne ukończenie formularza.

---

## 17. Rekomendacje naprawcze

- Zapewnić programowe powiązanie etykiet z polami formularza.
- Zapewnić odczyt instrukcji i opisów przez technologie wspomagające.
- Zapewnić odczyt informacji o obowiązkowości pól.
- Powiązać komunikaty błędów z odpowiednimi polami.
- Zweryfikować formularz przy użyciu czytnika ekranu.
- Uwzględnić test formularzy z wykorzystaniem technologii wspomagających w procedurach odbioru i kontroli jakości.

---

## 18. Powiązane testy

- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Oznaczenie pól wymaganych
- Format danych
- Etykiety powiązane programowo
- Identyfikacja błędów
- Sugestie korekty błędów
- Zapobieganie błędom
- Odczyt struktury przez czytnik ekranu
- Dostęp z klawiatury

---
