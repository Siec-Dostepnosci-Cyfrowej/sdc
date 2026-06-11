---
id: test-dostepna-nazwa-elementu-interaktywnego
title: Karta testu — Dostępna nazwa elementu interaktywnego
sidebar_label: Dostępna nazwa elementu interaktywnego
sidebar_position: 70
description: Scenariusz testu sprawdzającego, czy elementy interaktywne mają dostępną nazwę umożliwiającą rozpoznanie ich funkcji przez technologie wspomagające.
keywords: [dostępna nazwa, element interaktywny, przycisk, łącze, aria-label, WCAG, dostępność cyfrowa]
tags: [test dostępności, elementy interaktywne, dostępna nazwa, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## 1. ID testu

**testID-070**

---

## 2. Nazwa testu

**Dostępna nazwa elementu interaktywnego**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Tak |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy każdy element interaktywny ma dostępną nazwę, która pozwala użytkownikowi technologii wspomagających rozpoznać jego funkcję.

### Co oznacza „dostępna nazwa”?

Dostępna nazwa to nazwa elementu przekazywana technologiom wspomagającym, takim jak czytniki ekranu.

Dzięki niej użytkownik wie, czym jest element i do czego służy.

Przykłady dostępnych nazw:

- „Szukaj”,
- „Zamknij okno”,
- „Otwórz menu”,
- „Następny slajd”,
- „Pobierz formularz zgłoszeniowy”,
- „Przejdź do deklaracji dostępności”.

### Jakie elementy obejmuje test?

Test dotyczy przede wszystkim:

- łączy,
- przycisków,
- pól formularza,
- przełączników,
- ikon pełniących funkcję interaktywną,
- elementów sterujących karuzelą,
- elementów sterujących odtwarzaczem,
- kontrolek w modalach, akordeonach i zakładkach.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **4.1.2 Nazwa, rola, wartość (A)**

### Powiązane wymagania

- **1.1.1 Treści nietekstowe (A)**
- **2.4.4 Cel łącza (w kontekście) (A)**
- **2.4.6 Nagłówki i etykiety (AA)**
- **3.3.2 Etykiety lub instrukcje (A)**

### EN 301 549

- **9.4.1.2 Name, Role, Value**
- **9.1.1.1 Non-text Content**
- **9.2.4.4 Link Purpose (In Context)**
- **9.2.4.6 Headings and Labels**
- **9.3.3.2 Labels or Instructions**

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich elementów interaktywnych, w szczególności do:

- przycisków ikonowych,
- łączy graficznych,
- przycisków „hamburger”,
- przycisków „zamknij”,
- kontrolek „następny” i „poprzedni”,
- przycisków odtwarzania multimediów,
- przycisków rozwijania sekcji,
- pól formularzy,
- elementów niestandardowych tworzonych w JavaScript.

### Wyjątki

Test nie dotyczy elementów nieinteraktywnych, które nie pełnią funkcji sterującej ani nawigacyjnej.

---

## 7. Oczekiwany wynik

Za zgodny uznaje się element interaktywny, dla którego:

- istnieje dostępna nazwa,
- dostępna nazwa opisuje funkcję elementu,
- dostępna nazwa pozwala odróżnić element od innych elementów,
- dostępna nazwa jest przekazywana technologiom wspomagającym,
- element ma poprawnie określoną rolę i stan, jeżeli jest to wymagane.

---

## 8. Dlaczego to jest ważne

Użytkownik czytnika ekranu nie zawsze widzi ikonę, położenie ani kontekst wizualny elementu.

Jeżeli element nie ma dostępnej nazwy, czytnik ekranu może odczytać go jako:

- „przycisk”,
- „łącze”,
- „grafika”,
- „nieopisany przycisk”.

W takiej sytuacji użytkownik nie wie, co się stanie po aktywowaniu elementu.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób niewidomych korzystających z czytników ekranu,
- osób korzystających z monitorów brajlowskich,
- osób słabowidzących korzystających z technologii wspomagających,
- osób korzystających z rozpoznawania mowy,
- osób korzystających wyłącznie z klawiatury.

---

## 10. Sposób testowania

### Krok 1

Odszukaj elementy interaktywne na stronie.

Uwzględnij:

- łącza,
- przyciski,
- pola formularzy,
- kontrolki komponentów,
- ikony interaktywne.

### Krok 2

Zwróć szczególną uwagę na elementy ikonowe lub graficzne.

Przykłady:

- lupa,
- kosz,
- hamburger,
- X,
- strzałka,
- ikona odtwarzania.

### Krok 3

Uruchom czytnik ekranu albo narzędzie pokazujące dostępną nazwę.

Można użyć np.:

- czytnika ekranu,
- Accessibility Insights,
- WAVE,
- axe DevTools,
- narzędzi deweloperskich przeglądarki.

### Krok 4

Sprawdź, jak element jest odczytywany.

### Krok 5

Oceń, czy dostępna nazwa odpowiada funkcji elementu.

### Krok 6

Sprawdź, czy nazwa pozwala odróżnić podobne elementy.

Nieprawidłowe przykłady:

- kilka przycisków o nazwie „więcej”,
- kilka łączy o nazwie „czytaj”,
- kilka przycisków o nazwie „ikona”.

### Krok 7

Jeżeli element zmienia stan, sprawdź, czy stan jest przekazywany technologiom wspomagającym.

Przykłady:

- rozwinięte / zwinięte,
- zaznaczone / niezaznaczone,
- włączone / wyłączone.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie elementy interaktywne mają dostępne nazwy opisujące ich funkcję.

### Wynik częściowo pozytywny

Większość elementów ma dostępne nazwy, ale występują pojedyncze elementy nieopisane lub opisane nieprecyzyjnie.

### Wynik negatywny

Istotne elementy interaktywne nie mają dostępnych nazw albo ich nazwy nie pozwalają rozpoznać funkcji.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- przycisk ikonowy bez nazwy,
- łącze graficzne bez tekstu alternatywnego,
- przycisk „X” bez nazwy „Zamknij”,
- przycisk „hamburger” bez nazwy „Menu”,
- kilka łączy o tej samej nazwie „więcej”,
- przyciski „poprzedni” i „następny” bez wskazania, czego dotyczą,
- element niestandardowy bez roli i nazwy,
- dostępna nazwa techniczna, np. „button-1” lub „icon-search”.

---

## 13. Dobre praktyki

- Stosowanie widocznego tekstu jako podstawowej nazwy elementu.
- Nadawanie przyciskom ikonowym jednoznacznych nazw.
- Unikanie ogólnych nazw typu „kliknij”, „więcej”, „dalej”.
- Zapewnianie nazw zależnych od kontekstu, np. „Usuń załącznik: oferta.pdf”.
- Testowanie dostępnych nazw przy użyciu czytnika ekranu.
- Zachowanie spójnych nazw dla tych samych funkcji w całym serwisie.

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

> Część elementów interaktywnych nie posiada dostępnych nazw. Użytkownicy technologii wspomagających nie mogą rozpoznać funkcji tych elementów ani przewidzieć skutku ich aktywowania.

lub

> Przyciski ikonowe w serwisie nie mają nazw dostępnych programowo. Czytnik ekranu odczytuje je wyłącznie jako „przycisk”, bez informacji o ich przeznaczeniu.

---

## 17. Rekomendacje naprawcze

- Dodać dostępne nazwy do wszystkich elementów interaktywnych.
- Poprawić nazwy przycisków ikonowych.
- Uzupełnić tekst alternatywny obrazów pełniących funkcję łączy lub przycisków.
- Zastąpić ogólne nazwy łączy nazwami opisującymi cel działania.
- Sprawdzić dostępne nazwy przy użyciu narzędzi automatycznych i czytnika ekranu.
- Uwzględnić kontrolę dostępnych nazw w procedurze odbioru komponentów interfejsu.

---

## 18. Powiązane testy

- Dostępna nazwa w widocznej etykiecie
- Cel łącza (w kontekście)
- Cel łącza (samodzielnie)
- Tekst alternatywny
- Etykiety powiązane programowo
- Odczyt formularza przez czytnik ekranu
- Menu nawigacyjne
- Modalne okno dialogowe
- Karuzela
- Odtwarzacz multimedialny
---