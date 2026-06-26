---
id: test-jezyk-strony
title: Karta testu — Język strony
sidebar_label: Język strony
sidebar_position: 21
description: Scenariusz testu sprawdzającego, czy główny język strony został określony programowo oraz czy odpowiada rzeczywistemu językowi głównej treści.
keywords: [tytuł strony, title, iframe, ramka, dostępność cyfrowa, WCAG]
tags: [test dostępności, tytuł strony, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-021**

---

## 2. Nazwa testu

**Język strony**

---

## 3. Profil stosowania testu

- profil minimalny: **tak**,
- profil rozszerzony: **tak**,
- profil pogłębiony: **tak**.

---

## 4. Opis testu

Test służy do sprawdzenia, czy główny język strony został określony programowo oraz czy odpowiada rzeczywistemu językowi głównej treści.

W ramach testu należy zweryfikować:

- obecność atrybutu `lang` w elemencie `<html>`,
- poprawność kodu języka,
- zgodność wartości atrybutu `lang` z językiem głównej treści strony,
- zgodność wartości atrybutów `lang` i `xml:lang`, jeśli oba występują.

Celem testu jest potwierdzenie, że technologie wspomagające mogą poprawnie rozpoznać język treści i zastosować właściwe reguły wymowy, interpretacji oraz prezentacji informacji.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **3.1.1 Język strony (A)**

### EN 301 549

- **9.3.1.1 Language of Page**
- **10.3.1.1 Language of Page**
- **11.3.1.1 Language of Page**
- **12.3.1.1 Language of Page**

### Techniki WCAG

- H57 – Użycie atrybutu `lang` w elemencie `html`

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich stron internetowych i aplikacji internetowych zawierających treści tekstowe lub tekst dostępny programowo.

Dotyczy między innymi:

- stron informacyjnych,
- formularzy,
- usług elektronicznych,
- stron z multimediami,
- stron zawierających wyłącznie treści dostępne programowo.

Jeżeli tekst nie jest widoczny bezpośrednio na stronie, język należy ustalić na podstawie:

- napisów rozszerzonych,
- transkrypcji materiałów audio,
- tekstów alternatywnych,
- komunikatów dostępnych wyłącznie dla technologii wspomagających.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której spełnione są wszystkie poniższe warunki:

- element `<html>` posiada atrybut `lang`,
- wartość atrybutu `lang` odpowiada głównemu językowi treści strony,
- kod języka jest poprawny i zgodny z rejestrem IANA,
- atrybut `xml:lang`, jeśli występuje, ma identyczną wartość jak `lang`.

---

## 8. Dlaczego to jest ważne

Poprawne określenie języka strony pozwala technologiom wspomagającym prawidłowo interpretować i prezentować treści.

Dzięki temu:

- czytniki ekranu stosują właściwe reguły wymowy,
- syntezatory mowy poprawnie odczytują tekst,
- programy brajlowskie prawidłowo przetwarzają znaki i skróty,
- narzędzia tłumaczące mogą automatycznie rozpoznawać język,
- oprogramowanie może dobierać odpowiednie słowniki, glify i zasady typograficzne.

Brak poprawnie określonego języka często powoduje, że treść staje się niezrozumiała dla użytkowników korzystających z technologii wspomagających.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących korzystających z technologii zamiany tekstu na mowę,
- osób z dysleksją i innymi trudnościami w czytaniu,
- osób z niepełnosprawnościami poznawczymi i językowymi,
- osób korzystających z napisów rozszerzonych,
- osób korzystających ze sterowania głosowego,
- osób korzystających z automatycznych narzędzi tłumaczeniowych.

---

## 10. Sposób testowania

### Krok 1

Otwórz kod strony.

### Krok 2

Odszukaj element `<html>`.

### Krok 3

Sprawdź, czy występuje atrybut `lang`.

### Krok 4

Sprawdź wartość atrybutu `lang`.

### Krok 5

Porównaj określony język z rzeczywistym językiem głównej treści strony.

### Krok 6

Jeżeli występuje atrybut `xml:lang`, sprawdź zgodność jego wartości z atrybutem `lang`.

### Krok 7

Zweryfikuj poprawność kodu języka zgodnie z rejestrem IANA.

**Uwaga:** Sama obecność atrybutu `xml:lang` nie jest wystarczająca do zaliczenia testu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie warunki są spełnione:

- istnieje atrybut `lang`,
- wskazuje właściwy język,
- zastosowano poprawny kod języka,
- wartości `lang` i `xml:lang` są zgodne.

### Wynik negatywny

Co najmniej jeden z warunków nie jest spełniony.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- brak atrybutu `lang`,
- zastosowanie niewłaściwego języka (np. `en` dla strony polskojęzycznej),
- zastosowanie niepoprawnego kodu języka,
- pozostawienie domyślnego języka po wdrożeniu szablonu,
- niezgodność wartości `lang` i `xml:lang`,
- oznaczenie języka strony wielojęzycznej niezgodnie z dominującą treścią.

---

## 13. Dobre praktyki

- Ustawianie atrybutu `lang` już na poziomie szablonu serwisu.
- Automatyczna kontrola poprawności języka podczas publikacji.
- Weryfikacja języka po migracji serwisu lub zmianie CMS.
- Stosowanie kodów zgodnych z rejestrem IANA.
- Uwzględnianie języka w testach odbiorczych.

---

## 14. Wynik testu

- Spełniony
- Niespełniony
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń audytora lub osoby przeprowadzającej ocenę.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Na stronie nie określono programowo głównego języka treści. Element `<html>` nie zawiera atrybutu `lang`, co uniemożliwia technologiom wspomagającym poprawne rozpoznanie języka strony i może prowadzić do nieprawidłowego odczytywania treści przez czytniki ekranu.

lub

> W atrybucie `lang` wskazano język „en”, podczas gdy główna treść strony została przygotowana w języku polskim.

---

## 17. Rekomendacje naprawcze

- Dodać atrybut `lang` do elementu `<html>`.
- Ustawić wartość odpowiadającą rzeczywistemu językowi głównej treści.
- Zweryfikować poprawność kodów językowych zgodnie z rejestrem IANA.
- Zapewnić zgodność atrybutów `lang` i `xml:lang`.
- Włączyć kontrolę języka do procedur publikacji i odbioru serwisów.

---

## 18. Powiązane testy

- Język fragmentów treści
- Tytuł strony
- Strona wielojęzyczna
- Poprawność struktury dokumentu
- Nazwa strony i identyfikacja celu
