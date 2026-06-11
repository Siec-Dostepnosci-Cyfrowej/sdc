---

id: test-zmiana-po-wprowadzeniu-danych
title: Karta testu — Zmiana po wprowadzeniu danych
sidebar_label: Zmiana po wprowadzeniu danych
sidebar_position: 30
description: Scenariusz testu sprawdzającego, czy wprowadzenie lub zmiana danych w formularzu nie powoduje nieoczekiwanej zmiany kontekstu.
keywords: [on input, zmiana po wprowadzeniu danych, formularz, zmiana kontekstu, WCAG]
tags: [test dostępności, formularze, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
--------------------

## 1. ID testu

**testID-030**

---

## 2. Nazwa testu

**Zmiana po wprowadzeniu danych**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie |
| --------------- | ---------- |
| Podstawowy      | Tak        |
| Rozszerzony     | Tak        |
| Audyt zgodności | Tak        |

---

## 4. Opis testu

Test służy do sprawdzenia, czy zmiana wartości pola formularza lub innego elementu interaktywnego nie powoduje nieoczekiwanej zmiany kontekstu.

### Co oznacza „wprowadzenie danych”?

Wprowadzeniem danych jest między innymi:

- wpisanie tekstu,
- wybranie opcji z listy,
- zaznaczenie pola wyboru,
- wybranie przycisku radiowego,
- ustawienie przełącznika,
- wskazanie daty,
- zmiana wartości pola formularza.

### Co oznacza „zmiana kontekstu”?

Zmiana kontekstu to istotna zmiana sposobu działania strony lub sposobu prezentacji informacji.

Przykładami zmiany kontekstu są:

- przejście do nowej strony,
- otwarcie nowego okna lub nowej karty,
- pojawienie się nowego okna dialogowego,
- automatyczne wysłanie formularza,
- znacząca zmiana zawartości strony.

### Kiedy zmiana jest dopuszczalna?

Zmiana kontekstu jest dopuszczalna, jeżeli:

- użytkownik został wcześniej poinformowany o jej wystąpieniu,
- albo użytkownik świadomie uruchamia działanie (np. przyciskiem „Zastosuj”, „Szukaj”, „Dalej”, „Wyślij”).

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **3.2.2 Podczas wprowadzania danych (A)**

### EN 301 549

- **9.3.2.2 On Input**
- **10.3.2.2 On Input**
- **11.3.2.2 On Input**

### Techniki WCAG

- G80
- G13
- SCR19

---

## 6. Zastosowanie do treści

Test stosuje się do:

- formularzy,
- wyszukiwarek,
- filtrów wyników,
- list rozwijanych,
- przycisków radiowych,
- pól wyboru,
- konfiguratorów usług,
- kalkulatorów,
- kreatorów i procesów wieloetapowych.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz lub komponent, dla którego zmiana wartości pola nie powoduje nieoczekiwanej zmiany kontekstu.

Jeżeli zmiana kontekstu następuje automatycznie, użytkownik został wcześniej poinformowany o takim zachowaniu.

---

## 8. Dlaczego to jest ważne

Użytkownik powinien mieć możliwość spokojnego wprowadzania danych i podejmowania świadomych decyzji.

Jeżeli już samo wybranie opcji powoduje:

- przejście do nowej strony,
- wysłanie formularza,
- zmianę widoku,

użytkownik może:

- utracić orientację,
- stracić wprowadzone dane,
- przypadkowo uruchomić niepożądane działanie,
- mieć trudności z poprawieniem błędów.

Przewidywalność działania formularzy jest szczególnie ważna dla osób korzystających z technologii wspomagających.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami koncentracji uwagi,
- osób starszych,
- osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wszystkie formularze i elementy umożliwiające wybór lub wprowadzanie danych.

### Krok 2

Zmieniaj wartości pól:

- wpisuj tekst,
- wybieraj opcje,
- zaznaczaj pola wyboru,
- wybieraj przyciski radiowe.

### Krok 3

Po każdej zmianie obserwuj zachowanie strony.

### Krok 4

Sprawdź, czy bez dodatkowego działania użytkownika następuje:

- przejście do nowej strony,
- przeładowanie strony,
- otwarcie nowego okna,
- automatyczne wysłanie formularza,
- znacząca zmiana zawartości.

### Krok 5

Jeżeli taka zmiana następuje, sprawdź, czy użytkownik został wcześniej poinformowany o tym zachowaniu.

### Krok 6

Sprawdź szczególnie:

- listy rozwijane,
- filtry wyszukiwania,
- konfiguratory,
- formularze wieloetapowe,
- wyszukiwarki.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Zmiana wartości pola nie powoduje nieoczekiwanej zmiany kontekstu.

### Wynik częściowo pozytywny

Występują pojedyncze przypadki zmian kontekstu, jednak użytkownik został o nich poinformowany lub nie utrudniają one realizacji głównych zadań.

### Wynik negatywny

Zmiana wartości pola powoduje nieoczekiwaną zmianę kontekstu bez uprzedniego poinformowania użytkownika.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- automatyczne przejście do nowej strony po wyborze opcji z listy,
- automatyczne wysłanie formularza po zaznaczeniu pola,
- automatyczne uruchomienie wyszukiwania bez informacji dla użytkownika,
- otwieranie nowych okien po zmianie wartości pola,
- automatyczne przełączanie etapów formularza.

---

## 13. Dobre praktyki

- Stosowanie przycisków „Zastosuj”, „Szukaj”, „Dalej”, „Wyślij”.
- Informowanie użytkownika o automatycznych zmianach.
- Zapewnienie możliwości sprawdzenia danych przed ich wysłaniem.
- Zachowanie przewidywalnego działania formularzy.

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

> Wybór opcji z listy rozwijanej powoduje automatyczne przejście do nowej strony bez wcześniejszego poinformowania użytkownika. Zachowanie to stanowi nieoczekiwaną zmianę kontekstu.

lub

> Po zaznaczeniu pola wyboru formularz zostaje automatycznie wysłany. Użytkownik nie ma możliwości sprawdzenia ani poprawienia wprowadzonych danych przed wykonaniem działania.

---

## 17. Rekomendacje naprawcze

- Usunąć automatyczne zmiany kontekstu wywoływane samą zmianą wartości pola.
- Wprowadzić przycisk potwierdzający wykonanie działania.
- Informować użytkownika o skutkach wyboru opcji.
- Umożliwić użytkownikowi świadome zatwierdzenie zmian przed ich zastosowaniem.
- Zweryfikować formularze pod kątem zgodności z WCAG 3.2.2.

---

## 18. Powiązane testy

- Zmiana po uzyskaniu fokusu
- Dostęp z klawiatury
- Pułapka klawiaturowa
- Kolejność fokusu
- Formularze
- Etykiety formularzy
- Komunikaty o błędach
