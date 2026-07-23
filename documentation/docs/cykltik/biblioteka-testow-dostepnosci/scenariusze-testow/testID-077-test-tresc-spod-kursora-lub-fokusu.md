---
id: test-tresc-spod-kursora-lub-fokusu
title: Scenariusz testu - Treść spod kursora lub fokusu
sidebar_label: Treść spod kursora lub fokusu
sidebar_position: 77
description: Scenariusz testu sprawdzającego, czy dodatkowa treść pojawiająca się po najechaniu kursorem lub uzyskaniu fokusu jest dostępna, możliwa do odczytania i nie znika niespodziewanie podczas korzystania z interfejsu.
keywords: [ocena zgodności,strona internetowa,cecha dostępności,profil rozszerzony,treść spod kursora lub fokusu,kryterium sukcesu]
tags: [ocena zgodności,strona internetowa,cecha dostępności,profil rozszerzony,treść spod kursora lub fokusu,kryterium sukcesu]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---

# Treść spod kursora lub fokusu

## 1. Identyfikator testu

**testID-077**

---

## 2. Nazwa testu

**Treść spod kursora lub fokusu**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

---

## 4. Opis testu

Test sprawdza, czy dodatkowa treść wyświetlana po najechaniu kursorem lub uzyskaniu fokusu (np. podpowiedzi, komunikaty pomocy, menu rozwijane, opisy ikon) pozostaje dostępna dla użytkownika, nie znika niespodziewanie i może być odczytana bez utraty fokusu lub pozycji kursora.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- **1.4.13 Treść spod kursora lub fokusu (AA)**

### Powiązane wymagania

- dostępność interakcji,
- obsługa klawiaturą,
- komunikaty pomocy,
- projektowanie interfejsów użytkownika.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- podpowiedzi (tooltipów),
- komunikatów pomocy,
- rozwijanych menu,
- list podpowiedzi,
- opisów ikon,
- okien kontekstowych,
- dodatkowych informacji pojawiających się po wskazaniu elementu.

---

## 7. Oczekiwany wynik

Użytkownik może:

- wyświetlić dodatkową treść,
- odczytać ją w całości,
- przenieść wskaźnik do wyświetlonej treści, jeśli jest to potrzebne,
- zamknąć treść bez zmiany położenia fokusu lub kursora.

Treść nie znika samoczynnie przed zakończeniem interakcji użytkownika.

---

## 8. Dlaczego to jest ważne

Wiele interfejsów prezentuje dodatkowe informacje dopiero po najechaniu kursorem lub uzyskaniu fokusu.

Jeżeli takie informacje znikają zbyt szybko lub nie można do nich przejść klawiaturą, użytkownicy mogą utracić dostęp do istotnych instrukcji, komunikatów lub funkcji.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób słabowidzących korzystających z powiększenia ekranu,
- osób korzystających wyłącznie z klawiatury,
- osób z ograniczoną sprawnością ruchową,
- użytkowników czytników ekranu,
- osób z niepełnosprawnościami poznawczymi.

---

## 10. Sposób testowania

### Krok 1. Identyfikacja treści

Znajdź elementy powodujące wyświetlenie dodatkowej treści po:

- najechaniu kursorem,
- uzyskaniu fokusu klawiaturą.

Przykłady:

- ikony pomocy,
- przyciski z opisami,
- pola formularzy z podpowiedziami,
- rozwijane menu.

---

### Krok 2. Wyświetlenie treści

Sprawdź, czy dodatkowa treść pojawia się:

- po najechaniu kursorem,
- po uzyskaniu fokusu klawiaturą.

---

### Krok 3. Możliwość odczytania

Sprawdź, czy użytkownik ma wystarczająco dużo czasu na zapoznanie się z treścią.

Treść nie powinna znikać automatycznie po krótkim czasie.

---

### Krok 4. Możliwość przejścia do treści

Jeżeli wyświetlona treść zawiera:

- odnośniki,
- przyciski,
- elementy interaktywne,

sprawdź, czy użytkownik może przejść do nich kursorem lub klawiaturą bez zamknięcia treści.

---

### Krok 5. Zamknięcie treści

Sprawdź, czy użytkownik może zamknąć wyświetloną treść bez:

- przesuwania kursora,
- utraty fokusu,
- wykonywania dodatkowych działań.

W szczególności sprawdź działanie klawisza Esc.

---

### Krok 6. Zachowanie fokusu

Sprawdź, czy wyświetlenie dodatkowej treści:

- nie powoduje utraty fokusu,
- nie zmienia nieoczekiwanie kontekstu użytkownika.

---

### Krok 7. Widok mobilny

Jeżeli komponent jest dostępny na urządzeniach mobilnych:

sprawdź, czy dodatkowe treści można wyświetlić i zamknąć również przy użyciu ekranu dotykowego.

---

## 11. Kryteria oceny wyniku

### Spełnione

Dodatkowa treść jest dostępna, możliwa do odczytania i nie znika niespodziewanie podczas korzystania z interfejsu.

### Częściowo spełnione

Treść jest dostępna, ale występują ograniczenia utrudniające korzystanie.

### Niespełnione

Treść znika samoczynnie, nie jest dostępna z klawiatury lub nie można jej odczytać w sposób komfortowy.

---

## 12. Typowe niezgodności

- podpowiedź wyświetlana wyłącznie po najechaniu kursorem,
- brak wyświetlania po uzyskaniu fokusu,
- automatyczne znikanie komunikatu,
- brak możliwości przejścia do treści kursorem,
- brak możliwości zamknięcia klawiszem Esc,
- utrata fokusu po wyświetleniu treści,
- zasłanianie ważnych elementów interfejsu.

---

## 13. Dobre praktyki

- udostępnianie treści zarówno dla kursora, jak i fokusu,
- umożliwienie zamknięcia klawiszem Esc,
- pozostawianie treści widocznej do czasu zakończenia interakcji,
- zapewnienie odpowiedniego kontrastu i czytelności,
- unikanie automatycznego ukrywania treści.

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

> Dodatkowe informacje wyświetlane po najechaniu kursorem nie są dostępne po uzyskaniu fokusu klawiaturą lub znikają przed zakończeniem interakcji użytkownika. Może to utrudniać korzystanie z funkcji serwisu osobom korzystającym z klawiatury, technologii wspomagających oraz użytkownikom wymagającym więcej czasu na zapoznanie się z treścią.

---

## 17. Rekomendacje naprawcze

- udostępnić treść również po uzyskaniu fokusu,
- umożliwić zamknięcie klawiszem Esc,
- wyeliminować automatyczne ukrywanie treści,
- umożliwić przejście do wyświetlonych elementów interaktywnych,
- poprawić obsługę klawiaturą.

---

## 18. Powiązane testy

- testID-023 Dostęp z klawiatury
- testID-024 Obsługa klawiaturą
- testID-026 Kolejność fokusu
- testID-027 Widoczność fokusu
- testID-069 Komunikaty o stanie
- testID-055 Modalne okno dialogowe
- testID-059 Akordeon
- testID-132 Selektor języka

---