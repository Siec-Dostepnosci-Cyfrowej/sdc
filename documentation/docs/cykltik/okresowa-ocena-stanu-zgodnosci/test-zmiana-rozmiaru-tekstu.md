---
id: test-zmiana-rozmiaru-tekstu
title: Karta testu — Zmiana rozmiaru tekstu
sidebar_label: Zmiana rozmiaru tekstu
sidebar_position: 37
description: Scenariusz testu sprawdzającego, czy tekst można powiększyć do 200% bez utraty treści lub funkcjonalności.
keywords: [zmiana rozmiaru tekstu, powiększanie tekstu, zoom tekstu, WCAG, dostępność cyfrowa]
tags: [test dostępności, tekst, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-037**

---

## 2. Nazwa testu

**Zmiana rozmiaru tekstu**

---

## 3. Profil stosowania testu

| Profil | Stosowanie |
|----------|----------|
| Podstawowy | Tak |
| Rozszerzony | Tak |
| Audyt zgodności | Tak |

---

## 4. Opis testu

Test służy do sprawdzenia, czy użytkownik może powiększyć tekst co najmniej do 200% bez utraty treści lub funkcjonalności strony. Test weryfikuje, czy po powiększeniu tekst pozostaje czytelny, a wszystkie elementy strony nadal działają poprawnie.

### Co oznacza „zmiana rozmiaru tekstu”?

Zmiana rozmiaru tekstu polega na zwiększeniu wielkości tekstu za pomocą mechanizmów dostępnych w przeglądarce internetowej, bez używania specjalistycznych technologii wspomagających.

Użytkownik powinien mieć możliwość powiększenia tekstu co najmniej dwukrotnie (do 200%), zachowując możliwość korzystania z treści i funkcji strony.

### Jakie problemy mogą wystąpić?

Po powiększeniu tekstu mogą pojawić się między innymi:

- obcięte fragmenty tekstu,
- nakładanie się tekstów,
- znikające etykiety formularzy,
- ukryte przyciski,
- trudności z odczytaniem treści,
- konieczność przewijania strony w poziomie.

---

## 5. Mapowanie do standardów

### WCAG 2.1

- **1.4.4 Zmiana rozmiaru tekstu (AA)**

### EN 301 549

- **9.1.4.4 Resize Text**
- **10.1.4.4 Resize Text**
- **11.1.4.4 Resize Text**

### Treść wymagania

> Oprócz napisów rozszerzonych oraz obrazów tekstu, rozmiar tekstu może zostać powiększony do 200% bez użycia technologii wspomagających oraz bez utraty treści lub funkcjonalności.

### Techniki WCAG

- G142
- C28
- C12

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich treści tekstowych publikowanych na stronie, z wyjątkiem:

- obrazów tekstu,
- napisów rozszerzonych w materiałach wideo.

W szczególności dotyczy:

- treści artykułów,
- aktualności,
- komunikatów,
- formularzy,
- menu,
- tabel,
- nagłówków,
- etykiet pól formularzy,
- przycisków zawierających tekst.

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której:

- cały tekst można powiększyć co najmniej do 200%,
- powiększona treść pozostaje widoczna,
- treść nie jest obcinana ani zasłaniana,
- elementy tekstowe nie nakładają się na siebie,
- nagłówki, etykiety i wskazówki pozostają powiązane z odpowiednią treścią,
- elementy interaktywne pozostają widoczne i możliwe do użycia,
- nie dochodzi do utraty treści ani funkcjonalności.

---

## 8. Dlaczego to jest ważne

Niektóre osoby muszą powiększać tekst, aby móc go przeczytać. Inne korzystają z niestandardowych ustawień wyświetlania, takich jak:

- większy rozmiar czcionki,
- większe odstępy między wierszami,
- większe odstępy między znakami,
- własne kroje pisma.

Jeżeli strona nie pozwala na skuteczne powiększenie tekstu lub po powiększeniu staje się nieczytelna, część użytkowników może utracić dostęp do informacji i usług. 

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

- osób słabowidzących,
- osób korzystających z powiększalników ekranu,
- osób starszych,
- osób korzystających z urządzeń mobilnych,
- osób z trudnościami w czytaniu drobnego tekstu,
- osób dostosowujących wygląd stron do własnych potrzeb.

---

## 10. Sposób testowania

### Krok 1

Otwórz stronę w przeglądarce internetowej.

### Krok 2

Powiększ tekst do około 200%.

Najwygodniej wykonać test w przeglądarce Firefox, korzystając z funkcji **Widok → Powiększaj tylko tekst**. 

Możesz użyć skrótów klawiaturowych:

#### Windows

- `Ctrl` + `+`

#### macOS

- `⌘` + `+`

Zwykle 4–6 naciśnięć klawisza powoduje powiększenie tekstu do około 200%. 

### Krok 3

Sprawdź:

- czy tekst można powiększyć do 200%,
- czy cała treść pozostaje widoczna,
- czy tekst nie jest obcinany,
- czy elementy nie nakładają się na siebie,
- czy etykiety formularzy pozostają powiązane z polami,
- czy przyciski i formularze nadal działają poprawnie.

### Krok 4

Przejrzyj najważniejsze podstrony serwisu:

- stronę główną,
- artykuły,
- formularze,
- wyszukiwarkę,
- strony usług.

### Krok 5

Udokumentuj wszystkie przypadki utraty czytelności lub funkcjonalności.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Po powiększeniu tekstu do 200%:

- treść pozostaje czytelna,
- nie występuje utrata informacji,
- elementy nie nachodzą na siebie,
- funkcjonalność strony pozostaje zachowana.

### Wynik częściowo pozytywny

Po powiększeniu tekstu:

- występują pojedyncze problemy z układem strony,
- niektóre kontrolki formularzy są trudniejsze w użyciu,
- część treści wymaga dodatkowego przewijania.

Problemy nie uniemożliwiają jednak realizacji głównych zadań użytkownika.

### Wynik negatywny

Po powiększeniu tekstu do 200%:

- fragmenty treści znikają,
- tekst jest obcinany,
- elementy nakładają się na siebie,
- użytkownik traci dostęp do informacji lub funkcji strony.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

- obcinanie tekstu w przyciskach,
- obcinanie tekstu w formularzach,
- nakładanie się tekstów,
- znikające etykiety formularzy,
- ukryte przyciski lub elementy menu,
- sztywno zdefiniowane wysokości kontenerów,
- stosowanie jednostek uniemożliwiających poprawne skalowanie tekstu,
- utrata części treści po powiększeniu.

---

## 13. Dobre praktyki

- Stosowanie elastycznych układów strony.
- Unikanie sztywnych wysokości elementów zawierających tekst.
- Testowanie wszystkich nowych szablonów przy powiększeniu 200%.
- Stosowanie względnych jednostek wielkości tekstu.
- Uwzględnianie potrzeb użytkowników słabowidzących podczas projektowania interfejsu.

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

> Po powiększeniu tekstu do 200% część treści jest obcinana lub nakłada się na inne elementy strony. Powoduje to utratę czytelności i utrudnia korzystanie z serwisu osobom słabowidzącym.

lub

> Po zwiększeniu rozmiaru tekstu etykiety formularza przestają być widoczne, a część przycisków zostaje zasłonięta przez inne elementy interfejsu.

---

## 17. Rekomendacje naprawcze

- Usunąć sztywne ograniczenia wysokości elementów zawierających tekst.
- Zapewnić prawidłowe skalowanie tekstu do co najmniej 200%.
- Zweryfikować działanie formularzy po powiększeniu tekstu.
- Przebudować układ strony w miejscach, gdzie tekst nachodzi na inne elementy.
- Wprowadzić test powiększenia tekstu do procedury odbioru i publikacji serwisu.

---

## 18. Powiązane testy

- Wystarczający kontrast
- Reflow (dopasowanie do szerokości ekranu)
- Odstępy w tekście
- Obrazy tekstu
- Widoczny fokus
- Formularze
- Responsywność interfejsu
---