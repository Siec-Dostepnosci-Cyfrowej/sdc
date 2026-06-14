---
id: test-zmiana-po-uzyskaniu-fokusu
title: Karta testu — Zmiana po uzyskaniu fokusu
sidebar_label: Zmiana po uzyskaniu fokusu
sidebar_position: 29
description: Scenariusz testu sprawdzającego, czy samo uzyskanie fokusu przez element nie powoduje nieoczekiwanej zmiany kontekstu.
keywords: [zmiana po uzyskaniu fokusu, on focus, fokus, zmiana kontekstu, WCAG]
tags: [test dostępności, fokus, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
--------------------

## 1. Identyfikator testu

**testID-029**

---

## 2. Nazwa testu

**Zmiana po uzyskaniu fokusu**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy samo przejście fokusu do elementu nie powoduje nieoczekiwanej zmiany działania strony.

### Co oznacza pojęcie „fokus”?

Fokus oznacza element strony, który jest aktualnie aktywny i gotowy do odbierania poleceń z klawiatury.

Podczas nawigacji klawiszem Tab fokus przemieszcza się pomiędzy kolejnymi elementami interaktywnymi.

### Co oznacza pojęcie „zmiana kontekstu”?

Zmiana kontekstu to istotna zmiana sposobu działania strony lub sposobu prezentacji informacji.

Przykładami zmiany kontekstu są:

* przejście do nowej strony,
* otwarcie nowego okna lub nowej karty,
* automatyczne przesunięcie fokusu do innego miejsca,
* pojawienie się nowego okna dialogowego,
* znacząca zmiana zawartości strony.

### Na czym polega problem?

Użytkownik przemieszczający fokus oczekuje, że będzie jedynie przechodził pomiędzy elementami.

Jeżeli samo uzyskanie fokusu powoduje wykonanie działania, użytkownik może stracić orientację lub przypadkowo uruchomić funkcję, której nie zamierzał użyć.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **3.2.1 Po otrzymaniu fokusu (A)**

### EN 301 549

* **9.3.2.1 On Focus**
* **10.3.2.1 On Focus**
* **11.3.2.1 On Focus**

### Techniki WCAG

* G107
* SCR19

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów mogących otrzymać fokus, w szczególności:

* łączy,
* przycisków,
* pól formularzy,
* list rozwijanych,
* menu,
* kart i zakładek,
* komponentów JavaScript,
* wyszukiwarek,
* filtrów,
* elementów osadzonych.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której uzyskanie fokusu przez element nie powoduje zmiany kontekstu.

Zmiana kontekstu może nastąpić dopiero po świadomym działaniu użytkownika, takim jak:

* naciśnięcie klawisza Enter,
* naciśnięcie klawisza Spacja,
* wybór opcji,
* aktywowanie przycisku.

---

## 8. Dlaczego to jest ważne

Podczas nawigacji klawiaturą użytkownik często przechodzi przez wiele elementów zanim wybierze właściwy.

Jeżeli samo uzyskanie fokusu uruchamia działanie:

* użytkownik może przypadkowo opuścić stronę,
* może utracić wprowadzone dane,
* może stracić orientację w strukturze strony,
* korzystanie z serwisu staje się nieprzewidywalne.

Przewidywalność działania jest szczególnie ważna dla osób korzystających z technologii wspomagających.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób korzystających wyłącznie z klawiatury,
* osób z niepełnosprawnościami poznawczymi,
* osób z trudnościami koncentracji uwagi,
* osób korzystających z technologii wspomagających.

---

## 10. Sposób testowania

### Krok 1

Odłóż mysz i korzystaj wyłącznie z klawiatury.

### Krok 2

Przemieszczaj fokus po stronie za pomocą klawisza Tab.

### Krok 3

Nie naciskaj Enter ani Spacji.

### Krok 4

Obserwuj zachowanie strony podczas przechodzenia do kolejnych elementów.

### Krok 5

Sprawdź, czy samo uzyskanie fokusu powoduje:

* przejście do nowej strony,
* otwarcie nowego okna,
* otwarcie nowego dialogu,
* zmianę zawartości strony,
* uruchomienie wyszukiwania,
* wysłanie formularza,
* zmianę aktywnej sekcji.

### Krok 6

Sprawdź szczególnie:

* listy rozwijane,
* filtry wyszukiwania,
* menu,
* formularze,
* komponenty tworzone przy użyciu JavaScript.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Uzyskanie fokusu nie powoduje zmiany kontekstu.

### Wynik częściowo pozytywny

Występują pojedyncze przypadki nieoczekiwanej zmiany kontekstu, które nie wpływają istotnie na realizację głównych zadań użytkownika.

### Wynik negatywny

Samo uzyskanie fokusu powoduje zmianę kontekstu lub uruchomienie działania bez świadomej decyzji użytkownika.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* automatyczne przejście do nowej strony po wejściu do pola listy rozwijanej,
* automatyczne uruchomienie wyszukiwania po uzyskaniu fokusu,
* otwieranie okna dialogowego po przejściu fokusu,
* automatyczna zmiana aktywnej zakładki,
* automatyczne rozwijanie lub zwijanie sekcji powodujące utratę orientacji,
* przekierowanie użytkownika bez jego działania.

---

## 13. Dobre praktyki

* Wymaganie świadomego działania użytkownika przed wykonaniem akcji.
* Stosowanie przycisków „Zastosuj”, „Szukaj”, „Przejdź”.
* Zachowanie przewidywalnego działania wszystkich elementów interaktywnych.
* Testowanie serwisu wyłącznie przy użyciu klawiatury.

---

## 14. Wynik testu

* Zgodne
* Częściowo zgodne
* Niezgodne
* Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Uzyskanie fokusu przez element listy rozwijanej powoduje automatyczne przejście do nowej strony. Użytkownik nie ma możliwości zapoznania się z opcjami ani świadomego wyboru momentu wykonania działania.

lub

> Po przejściu fokusu do elementu menu następuje automatyczne otwarcie okna dialogowego, co powoduje nieoczekiwaną zmianę kontekstu.

---

## 17. Rekomendacje naprawcze

* Usunąć działania uruchamiane automatycznie po uzyskaniu fokusu.
* Wymagać świadomej aktywacji elementu przez użytkownika.
* Zastąpić automatyczne przekierowania przyciskiem lub innym mechanizmem aktywacji.
* Przetestować wszystkie komponenty formularzy i JavaScript pod kątem zgodności z WCAG 3.2.1.

---

## 18. Powiązane testy

* Dostęp z klawiatury
* Pułapka klawiaturowa
* Kolejność fokusu
* Widoczny fokus
* Zmiana po wprowadzeniu danych
* Formularze
* Menu nawigacyjne
