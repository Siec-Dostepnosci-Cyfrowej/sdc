---
id: test-odczyt-struktury-przez-czytnik-ekranu
title: Karta testu — Odczyt struktury przez czytnik ekranu
sidebar_label: Odczyt struktury przez czytnik ekranu
sidebar_position: 47
description: Scenariusz testu sprawdzającego, czy użytkownik czytnika ekranu może rozpoznać strukturę strony oraz korzystać z mechanizmów nawigacyjnych opartych na nagłówkach, punktach orientacyjnych i innych elementach strukturalnych.
keywords: [czytnik ekranu, struktura strony, nagłówki, punkty orientacyjne, NVDA, VoiceOver, dostępność cyfrowa]
tags: [test dostępności, technologie wspomagające, czytnik ekranu, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---


## 1. ID testu

**testID-047**

---

## 2. Nazwa testu

**Odczyt struktury przez czytnik ekranu**

---

## 3. Profil stosowania testu

| Profil          | Stosowanie |
| --------------- | ---------- |
| Podstawowy      | Tak        |
| Rozszerzony     | Tak        |
| Audyt zgodności | Tak        |

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik korzystający z czytnika ekranu może rozpoznać strukturę strony oraz poruszać się po niej przy użyciu mechanizmów nawigacyjnych udostępnianych przez technologię wspomagającą.

Jest to test syntetyczny, pozwalający ocenić praktyczne działanie wielu wymagań dostępności jednocześnie.

### Co oznacza „odczyt struktury strony”?

Użytkownicy czytników ekranu nie analizują strony w taki sam sposób jak użytkownicy widzący.

Zamiast obserwować układ wizualny, korzystają z informacji zapisanych w strukturze strony, takich jak:

- tytuł strony,
- nagłówki,
- punkty orientacyjne,
- listy,
- tabele,
- sekcje treści.

Czytnik ekranu umożliwia szybkie przemieszczanie się pomiędzy tymi elementami bez konieczności odczytywania całej strony.

### Co sprawdza ten test?

Test pozwala ocenić między innymi:

- obecność i jakość nagłówków,
- obecność punktów orientacyjnych,
- poprawność tytułu strony,
- poprawność języka strony,
- logiczną organizację treści,
- możliwość szybkiej nawigacji po stronie.

### Czego nie sprawdza ten test?

Test nie zastępuje szczegółowych testów:

- Nagłówki,
- Punkty orientacyjne,
- Tytuł strony,
- Język strony,
- Język części strony.

Jego celem jest ocena rzeczywistego doświadczenia użytkownika czytnika ekranu.

---

## 5. Mapowanie do standardów

### WCAG 2.1

Test wspiera ocenę zgodności między innymi z:

- **1.3.1 Informacje i relacje (A)**
- **2.4.1 Ominięcie bloków (A)**
- **2.4.2 Tytuł strony (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **3.1.1 Język strony (A)**
- **4.1.2 Nazwa, rola, wartość (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **9.2.4.1 Bypass Blocks**
- **9.2.4.2 Page Titled**
- **9.2.4.6 Headings and Labels**
- **9.3.1.1 Language of Page**
- **9.4.1.2 Name, Role, Value**

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron internetowych,
- Biuletynów Informacji Publicznej,
- aplikacji internetowych,
- portali usługowych,
- systemów informacyjnych,
- dokumentów HTML.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się serwis, dla którego użytkownik czytnika ekranu może:

- odczytać tytuł strony,
- odczytać nagłówki i korzystać z nich do nawigacji,
- odczytać punkty orientacyjne i korzystać z nich do nawigacji,
- rozpoznać główne obszary strony,
- zrozumieć strukturę treści bez konieczności odczytywania całej strony,
- sprawnie przechodzić do interesujących go sekcji.

---

## 8. Dlaczego to jest ważne

Użytkownicy niewidomi bardzo często budują obraz strony na podstawie jej struktury.

Jeżeli struktura strony nie została poprawnie zakodowana:

- trudno zorientować się w treści,
- trudno odnaleźć potrzebne informacje,
- korzystanie ze strony staje się czasochłonne i męczące,
- użytkownik może zrezygnować z korzystania z serwisu.

Dobrze przygotowana struktura umożliwia szybkie i efektywne korzystanie ze strony bez konieczności odczytywania całej zawartości.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób głuchoniewidomych korzystających z monitorów brajlowskich,
- osób słabowidzących korzystających z technologii wspomagających,
- osób korzystających z zaawansowanych funkcji nawigacyjnych czytników ekranu.

---

## 10. Sposób testowania

### Krok 1

Uruchom czytnik ekranu, np.:

- NVDA,
- VoiceOver,
- JAWS,
- TalkBack.

### Krok 2

Otwórz badaną stronę.

### Krok 3

Sprawdź, czy po załadowaniu strony czytnik odczytuje jej tytuł.

### Krok 4

Wyświetl listę nagłówków.

Oceń:

- czy nagłówki istnieją,
- czy tworzą logiczną strukturę,
- czy ich nazwy są zrozumiałe.

### Krok 5

Wyświetl listę punktów orientacyjnych.

Oceń:

- czy występują główne obszary strony,
- czy nazwy punktów orientacyjnych są zrozumiałe,
- czy umożliwiają orientację w strukturze strony.

### Krok 6

Przemieszczaj się po stronie wyłącznie za pomocą:

- nagłówków,
- punktów orientacyjnych.

### Krok 7

Oceń, czy możliwe jest:

- zrozumienie układu strony,
- odnalezienie głównej treści,
- odnalezienie nawigacji,
- odnalezienie wyszukiwarki,
- odnalezienie stopki.

### Krok 8

Oceń, czy użytkownik może skutecznie korzystać ze struktury strony bez konieczności odczytywania całej zawartości.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Czytnik ekranu umożliwia rozpoznanie struktury strony oraz sprawną nawigację pomiędzy jej głównymi elementami.

### Wynik częściowo pozytywny

Niektóre elementy struktury są dostępne, jednak występują problemy utrudniające orientację lub nawigację.

### Wynik negatywny

Struktura strony nie pozwala użytkownikowi czytnika ekranu zorientować się w organizacji treści lub skutecznie się po niej poruszać.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak nagłówków,
- nieprawidłowa hierarchia nagłówków,
- brak punktów orientacyjnych,
- wiele niezidentyfikowanych obszarów nawigacyjnych,
- nieopisane sekcje strony,
- nieczytelne nazwy nagłówków,
- nieczytelne nazwy punktów orientacyjnych,
- brak możliwości odnalezienia głównej treści,
- nieprawidłowy tytuł strony.

---

## 13. Dobre praktyki

- Stosowanie logicznej hierarchii nagłówków.
- Stosowanie punktów orientacyjnych dla głównych obszarów strony.
- Nadawanie opisowych nazw sekcjom.
- Zapewnienie unikalnych tytułów stron.
- Testowanie struktury strony z użyciem czytnika ekranu przed publikacją.

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

> Struktura strony nie jest poprawnie rozpoznawana przez czytnik ekranu. Użytkownicy technologii wspomagających mają trudności z orientacją w treści oraz odnalezieniem głównych obszarów strony.

lub

> Strona nie udostępnia poprawnej struktury nagłówków i punktów orientacyjnych, co utrudnia użytkownikom czytników ekranu nawigację i zrozumienie organizacji treści.

---

## 17. Rekomendacje naprawcze

- Uporządkować strukturę nagłówków.
- Wprowadzić brakujące punkty orientacyjne.
- Nadać opisowe nazwy sekcjom strony.
- Zweryfikować poprawność tytułów stron.
- Przeprowadzić testy z wykorzystaniem czytnika ekranu.
- Uwzględnić test struktury strony w procedurach odbioru i kontroli jakości.

---

## 18. Powiązane testy

- Tytuł strony
- Język strony
- Język części strony
- Nagłówki
- Punkty orientacyjne
- Łącza pomijania
- Odczyt formularza przez czytnik ekranu
- Dostęp z klawiatury

---
