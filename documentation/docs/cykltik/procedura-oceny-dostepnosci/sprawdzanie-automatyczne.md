---
id: sprawdzanie-automatyczne
title: Instrukcja, cz. 1. Sprawdzenia automatyczne w przeglądzie diagnostycznym
description: Określa sposób wykonania sprawdzeń automatycznych w przeglądzie diagnostycznym dostępności witryny
sidebar_label: Sprawdzenia automatyczne
sidebar_position: 6
keywords: [cykl życia TIK, dostępność cyfrowa, przegląd diagnostyczny, testy automatyczne]
tags: [cykl życia TIK, dostępność cyfrowa, przegląd dostępności]
opracowanie: Stefan Wajda 
data_zgloszenia: 14 kwietnia 2026 r.
ostatnia_aktualizacja: 15 kwietnia 2026 r.
wersja_robocza: true
---

## 1. Cel sprawdzeń automatycznych

Sprawdzenia automatyczne stanowią pierwszy etap przeglądu diagnostycznego i służą szybkiemu rozpoznaniu powtarzalnych problemów dostępności oraz wskazaniu obszarów wymagających dalszej analizy manualnej.

---

## 2. Zakres zastosowania

Sprawdzenia automatyczne stosuje się do:

- identyfikacji najczęstszych błędów dostępności,
- rozpoznania problemów powtarzalnych,
- wstępnej oceny skali problemów w obrębie witryny.

Sprawdzenia automatyczne nie stanowią pełnej oceny dostępności.

---

## 3. Sposób wykonania

### 3.1. Dobór narzędzi

Sprawdzenia wykonuje się przy użyciu jednego lub kilku narzędzi automatycznych.

Dopuszcza się stosowanie różnych narzędzi, w szczególności:

- skanerów wielu stron (analiza zbiorcza),
- narzędzi przeglądarkowych (analiza pojedynczych stron).

Dobór narzędzi nie ma charakteru rozstrzygającego.

---
### 3.2. Przykładowe narzędzia

#### Skanery wielu stron

- [Oobee (narzędzie GovTech Singapore)](https://github.com/GovTechSG/oobee-desktop/releases)  
- [Evaluatory](https://darekkay.com/evaluatory/) 

#### Narzędzia przeglądarkowe i dodatki

- [SiteLint](https://chromewebstore.google.com/detail/sitelint-web-audit-tools/cgohmmflfahecpnbkpelccmhjmaobnfp) - narzędzie w języku polskim, ze wsparciem AI dla przeglądarek Chromium)  
- [HTML_CodeSniffer](https://irtdpl.pl/html_codesniffer/) (skryptozakładka, dostępna w języku polskim)  
- [IBM Equal Access Accessibility Checker dla Chrome](https://chromewebstore.google.com/detail/ibm-equal-access-accessib/lkcagbfjnkomcinoddgooolagloogehp), [IBM Equal Access Accessibility Checker dla Firefox](https://addons.mozilla.org/en-US/firefox/addon/accessibility-checker/)
- [AInspector](https://opena11y.github.io/ainspector/) - dla przeglądarek Chrome, Firefox, Edge, Opera 
- [WAVE](https://wave.webaim.org/extension/) - dla przeglądarek Chrome, Firefox, Edge
- [ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/) - dla przeglądarek Chrome, Firefox
- Lighthouse - narzędzie wbudowane w przeglądarkę Chrome, komunmikaty w języku polskim  

Dobór narzędzi nie ma charakteru rozstrzygającego — różne narzędzia mogą wskazywać różne problemy.

---

### 3.3. Analiza zbiorcza (opcjonalna)

W przypadku większych serwisów zaleca się wykonanie analizy zbiorczej przy użyciu skanerów wielu stron.

Analiza ta służy:

- identyfikacji problemów powtarzalnych,
- określeniu skali ich występowania,
- wstępnemu rozpoznaniu problemów systemowych.

---

### 3.4. Analiza szczegółowa

Dla wybranych podstron objętych przeglądem należy przeprowadzić analizę przy użyciu narzędzi przeglądarkowych.

Analiza ta służy:

- weryfikacji konkretnych problemów,
- analizie struktury dokumentu i elementów interfejsu,
- przygotowaniu do sprawdzeń manualnych.

---

## 4. Zakres sprawdzeń

W trakcie sprawdzeń automatycznych należy w szczególności zidentyfikować problemy dotyczące:

### 4.1. Alternatyw tekstowych
- brak tekstów alternatywnych,
- nieadekwatne opisy.

### 4.2. Kontrastu
- niewystarczający kontrast tekstu i elementów interfejsu.

### 4.3. Struktury dokumentu
- brak lub nieprawidłowa struktura nagłówków.

### 4.4. Formularzy
- brak etykiet,
- brak powiązań etykiet z polami.

### 4.5. Elementów interaktywnych
- brak nazw dostępnych,
- nieczytelne elementy sterujące.

### 4.6. Linków i przycisków
- niejednoznaczne opisy,
- powtarzalne etykiety.

---

## 5. Dokumentowanie wyników

Nie jest wymagane zapisywanie wszystkich wykrytych błędów.

Należy:

- wskazać najważniejsze typy problemów,
- określić ich powtarzalność,
- podać reprezentatywne przykłady.

---

## 6. Interpretacja wyników

Wyniki sprawdzeń automatycznych:

- mają charakter sygnału, a nie pełnej oceny dostępności,
- wymagają weryfikacji w ramach sprawdzeń manualnych,
- nie obejmują wielu istotnych aspektów dostępności, w szczególności związanych z użytecznością i zrozumiałością.

---

## 7. Wymagania w przypadku realizacji usługi

W przypadku zlecania przeglądu diagnostycznego jako usługi eksperckiej należy oczekiwać:

- przedstawienia zestawienia typowych problemów wykrytych automatycznie,
- wskazania ich powtarzalności,
- powiązania wyników automatycznych z dalszą analizą manualną i funkcjonalną.

Nie należy wymagać pełnych raportów zgodności generowanych przez narzędzia automatyczne ani traktować ich jako końcowego wyniku oceny dostępności.

---

## 8. Uwagi praktyczne

- wyniki różnych narzędzi mogą się różnić,
- kluczowe jest rozpoznanie problemów systemowych,
- sprawdzenia automatyczne stanowią etap wstępny przeglądu diagnostycznego.
