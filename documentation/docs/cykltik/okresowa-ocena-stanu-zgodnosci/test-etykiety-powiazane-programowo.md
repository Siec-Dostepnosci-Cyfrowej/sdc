---
id: test-etykiety-powiazane-programowo
title: Karta testu — Etykiety powiązane programowo
sidebar_label: Etykiety powiązane programowo
sidebar_position: 46
description: Scenariusz testu sprawdzającego, czy etykiety, instrukcje i opisy formularzy są programowo powiązane z polami formularza oraz mogą zostać poprawnie odczytane przez technologie wspomagające.
keywords: [etykiety formularzy, aria-label, aria-labelledby, aria-describedby, formularze, dostępna nazwa, dostępny opis, WCAG]
tags: [test dostępności, formularze, WCAG, technologie wspomagające, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-046**

---

## 2. Nazwa testu

**Etykiety powiązane programowo**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Nie |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy etykiety, instrukcje i opisy pól formularzy są programowo powiązane z elementami, których dotyczą. 

### Co oznacza „etykieta elementu”?

Etykieta elementu to nazwa lub opis pozwalający użytkownikowi zrozumieć:

- czym jest dany element,
- do czego służy,
- jakie działanie zostanie wykonane po jego aktywowaniu.

Etykieta może być:

- widocznym tekstem,
- nazwą dostępną odczytywaną przez czytnik ekranu,
- połączeniem obu tych form.

Przykładowo:

- przycisk „Wyślij” posiada etykietę „Wyślij”,
- ikona kosza może posiadać etykietę „Usuń”,
- pole formularza może posiadać etykietę „Adres e-mail”.

### Co oznacza „powiązanie programowe”?

Powiązanie programowe to relacja zapisana w kodzie strony, dzięki której technologie wspomagające mogą ustalić:

- nazwę pola,
- jego przeznaczenie,
- wymagania dotyczące danych,
- instrukcje niezbędne do jego poprawnego wypełnienia.

### Dlaczego jest to ważne?

Użytkownik widzący może często domyślić się znaczenia pola na podstawie jego położenia na ekranie.

Technologie wspomagające nie analizują układu wizualnego strony. Korzystają wyłącznie z informacji zapisanych w kodzie.

Jeżeli etykieta lub instrukcja nie jest programowo powiązana z polem formularza, użytkownik technologii wspomagających może nie otrzymać informacji niezbędnych do poprawnego wypełnienia formularza. 

### Co oznaczają pojęcia „dostępna nazwa” i „dostępny opis”?

Dostępna nazwa (*Accessible Name*) to nazwa pola formularza przekazywana technologiom wspomagającym.

Dostępny opis (*Accessible Description*) to dodatkowe informacje, instrukcje lub wskazówki przekazywane użytkownikowi.

Kombinacja dostępnej nazwy, dostępnego opisu oraz innych powiązań programowych powinna przekazywać wszystkie informacje niezbędne do poprawnego korzystania z formularza. 

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **1.3.1 Informacje i relacje (A)**

### Powiązane wymagania

W zależności od sposobu implementacji test może również wspierać ocenę:

- **4.1.2 Nazwa, rola, wartość (A)**
- **3.3.2 Etykiety lub instrukcje (A)**

### EN 301 549

- **9.1.3.1 Info and Relationships**
- **10.1.3.1 Info and Relationships**
- **11.1.3.1 Info and Relationships**

### Techniki WCAG

#### Techniki wystarczające

- H44
- H65
- H71
- H85
- ARIA16
- ARIA17

#### Techniki wspierające

- ARIA1
- ARIA2
- G162

#### Typowe błędy

- F82


---

## 6. Zastosowanie do treści

Test stosuje się do:

- pól tekstowych,
- pól hasła,
- pól wyszukiwania,
- pól liczbowych,
- list rozwijanych,
- pól wyboru,
- przycisków opcji,
- grup pól formularza,
- przycisków zarządzających formularzem,
- niestandardowych kontrolek formularzy.

### Wyjątki

Testu nie stosuje się do:

- wyłączonych pól formularza,
- stron nieposiadających formularzy.

W takich przypadkach wynik oznacza się jako:

**Nie dotyczy (ND).** 

---

## 7. Oczekiwany wynik

Za zgodny uznaje się formularz, dla którego:

- etykiety są programowo powiązane z odpowiednimi polami,
- instrukcje są programowo powiązane z odpowiednimi polami,
- grupy pól posiadają programowe powiązanie z ich opisem,
- użytkownik technologii wspomagających otrzymuje wszystkie informacje niezbędne do poprawnego wypełnienia formularza,
- dostępna nazwa i dostępny opis przekazują przeznaczenie pola oraz wymagane instrukcje.

---

## 8. Dlaczego to jest ważne

Brak powiązań programowych powoduje, że:

- czytnik ekranu nie odczytuje etykiety pola,
- użytkownik nie wie, jakie dane należy podać,
- instrukcje formatowania nie są przekazywane,
- wzrasta liczba błędów podczas wypełniania formularza.

Problem może występować nawet wtedy, gdy formularz wygląda poprawnie wizualnie. 

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających z monitorów brajlowskich,
- osób słabowidzących korzystających z technologii wspomagających,
- osób korzystających wyłącznie z klawiatury,
- osób z niepełnosprawnościami poznawczymi korzystających z dodatkowych narzędzi wspomagających.

---

## 10. Sposób testowania

### Krok 1

Odszukaj wszystkie aktywne pola formularzy.

### Krok 2

Zidentyfikuj:

- etykiety pól,
- instrukcje,
- opisy formatów danych,
- informacje o polach wymaganych,
- opisy grup pól.

### Krok 3

Uruchom narzędzie wspomagające analizę dostępności, np.:

- ANDI,
- Accessibility Insights,
- Axe DevTools,
- czytnik ekranu (NVDA, JAWS, VoiceOver).

### Krok 4

Sprawdź dla każdego pola formularza:

- dostępną nazwę,
- dostępny opis,
- informacje o wymaganych polach,
- instrukcje formatowania.

### Krok 5

Zweryfikuj, czy zastosowano prawidłowe mechanizmy powiązań, np.:

- element `label`,
- atrybut `for`,
- `aria-label`,
- `aria-labelledby`,
- `aria-describedby`,
- `fieldset` i `legend`.

### Krok 6

Sprawdź grupy:

- pól wyboru,
- przycisków opcji,
- wieloczęściowych pól danych.

### Krok 7

Sprawdź formularze dynamiczne oraz pola pojawiające się po wykonaniu akcji użytkownika.

### Krok 8

Oceń, czy użytkownik technologii wspomagających otrzymuje wszystkie informacje dostępne użytkownikowi widzącemu.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie etykiety, instrukcje i opisy są programowo powiązane z odpowiednimi polami formularza.

### Wynik częściowo pozytywny

Większość pól jest prawidłowo opisana, jednak występują pojedyncze braki lub niepełne powiązania.

### Wynik negatywny

Użytkownik technologii wspomagających nie otrzymuje części lub całości informacji niezbędnych do poprawnego wypełnienia formularza.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- etykieta widoczna na ekranie nie jest powiązana z polem formularza,
- brak elementu `label`,
- nieprawidłowe użycie atrybutu `for`,
- instrukcje formatowania niepowiązane z polem,
- brak `fieldset` i `legend` dla grup pól,
- brak informacji o polach wymaganych w dostępnej nazwie lub opisie,
- wieloczęściowe pola (np. numer telefonu) bez odpowiednich powiązań programowych,
- niestandardowe komponenty formularzy bez dostępnej nazwy.

---

## 13. Dobre praktyki

- Stosowanie elementu `label` jako rozwiązania podstawowego.
- Stosowanie `fieldset` i `legend` dla grup pól.
- Wykorzystywanie `aria-describedby` dla instrukcji i opisów formatów danych.
- Regularne testowanie formularzy z użyciem czytników ekranu.
- Weryfikowanie dostępnej nazwy i dostępnego opisu wszystkich kontrolek formularzy.

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

> Etykiety oraz instrukcje formularza nie są programowo powiązane z polami, których dotyczą. W rezultacie użytkownicy technologii wspomagających nie otrzymują wszystkich informacji niezbędnych do poprawnego wypełnienia formularza.

lub

> Część pól formularza posiada widoczne etykiety, jednak nie są one powiązane programowo z odpowiednimi kontrolkami. Czytniki ekranu nie przekazują użytkownikom pełnych informacji o przeznaczeniu pól.

---

## 17. Rekomendacje naprawcze

- Powiązać wszystkie etykiety z polami formularza za pomocą odpowiednich mechanizmów HTML lub ARIA.
- Powiązać instrukcje i opisy formatowania z odpowiednimi polami.
- Zastosować `fieldset` i `legend` dla grup kontrolek.
- Zweryfikować dostępne nazwy i opisy wszystkich elementów formularza.
- Przeprowadzić testy formularzy z użyciem czytników ekranu.
- Uwzględnić w procesie odbioru formularzy kontrolę powiązań programowych.

---

## 18. Powiązane testy

- Widoczne etykiety lub instrukcje
- Opisowe etykiety
- Oznaczenie pól wymaganych
- Format danych
- Określenie celu pól formularza
- Identyfikacja błędów
- Sugestie korekty błędów
- Zapobieganie błędom
- Struktura treści
- Tabele danych
---