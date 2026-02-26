---
id: uniwersalny-model-procesu-testowania
title: Uniwersalny Model Procesu Testowania Zgodności TIK (UMPTZ)  
sidebar_label: Uniwersalny model testowania zgodności
sidebar_position: 7
description: Szablon pojedynczej procedury testowej polskich podstaw metodyki testowania zgodności produktów cyfrowych z EN 301 549
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 26 lutego 2026 r.
ostatnia_aktualizacja: 26 lutego 2026 r.
wersja_robocza: true

---

**Koncepcja referencyjna dla oceny zgodności technologii informacyjno-komunikacyjnych z EN 301 549**

---

## 1. Cel modelu

Uniwersalny Model Procesu Testowania Zgodności TIK (UMPTZ) stanowi horyzontalne, sektorowo neutralne ramy prowadzenia oceny zgodności produktów cyfrowych z EN 301 549.

Model:

- ma zastosowanie do wszystkich podmiotów (publicznych i prywatnych),
- obejmuje wszystkie typy produktów cyfrowych,
- jest niezależny od konkretnego obowiązku regulacyjnego,
- może być stosowany w kontekście ustawy o dostępności cyfrowej, EAA, zamówień publicznych, certyfikacji, odbiorów systemów i kontroli jakości.

UMPTZ nie zastępuje normy EN 301 549 — operacjonalizuje jej wymagania w postaci procesu testowania i utrzymania zgodności.

---

## 2. Zakres zastosowania

Model obejmuje w szczególności:

- strony internetowe i aplikacje webowe,
- aplikacje mobilne,
- oprogramowanie desktopowe i systemowe,
- systemy wbudowane i urządzenia interaktywne,
- dokumenty elektroniczne,
- produkty wersjonowane i stabilne,
- produkty dynamiczne i stale rozwijane.

Model ma zastosowanie do:

- właścicieli produktów cyfrowych,
- producentów oprogramowania,
- dostawców usług SaaS,
- instytucji publicznych,
- podmiotów objętych Europejskim Aktem o Dostępności.

---

## 3. Zasady nadrzędne

1. Testowanie zgodności jest procesem ciągłym, a nie jednorazowym wydarzeniem.  
2. Każda ocena zgodności musi być obronna dowodowo i powtarzalna.  
3. Zakres testowania powinien być proporcjonalny do celu oceny.  
4. Każdy podmiot powinien posiadać proces utrzymania zgodności.  
5. Wynik testowania powinien prowadzić do działań naprawczych.

---

## 4. Poziomy oceny zgodności

UMPTZ definiuje trzy poziomy głębokości oceny produktu cyfrowego.

---

### 4.1 Poziom A — Ocena rdzeniowa (Core Accessibility Assessment)

#### Cel
Weryfikacja fundamentów dostępności produktu.

#### Zakres
- Wybrane kluczowe wymagania EN/WCAG.
- Test głównego scenariusza użytkownika.
- Test obsługi klawiaturą.
- Test z technologią asystującą.

#### Charakter
Szybka ocena zdolności strukturalnej produktu do spełnienia wymagań.

---

### 4.2 Poziom B — Ocena reprezentatywna (Representative Conformance Assessment)

#### Cel
Ocena zgodności w reprezentatywnej próbce produktu.

#### Zakres
- Reprezentatywny dobór widoków, funkcjonalności i stanów.
- Testy manualne.
- Testy z technologiami asystującymi.
- Dokumentacja dowodowa.

#### Charakter
Podstawowy poziom formalnej oceny zgodności.

---

### 4.3 Poziom C — Ocena pełna (Comprehensive Conformance Assessment)

#### Cel
Kompleksowa ocena zgodności produktu z EN 301 549.

#### Zakres
- Pełne pokrycie wymagań.
- Pełna reprezentatywna próbka.
- Testy scenariuszowe wszystkich głównych procesów.
- Rozbudowana dokumentacja dowodowa.

#### Charakter
Poziom stosowany przy certyfikacji, odbiorach systemów, sporach lub potwierdzaniu pełnej zgodności.

---

## 5. Cykl utrzymania zgodności

Niezależnie od poziomu oceny, każdy podmiot powinien realizować cykl:

### 5.1 Plan
- Identyfikacja zakresu produktu i zmian.
- Określenie poziomu oceny.
- Zaplanowanie testów.

### 5.2 Test
- Wykonanie testów zgodnie z wybranym poziomem.
- Dokumentowanie dowodów.

### 5.3 Rejestr
- Aktualizacja rejestru niezgodności.
- Klasyfikacja wagi problemów.
- Oznaczenie statusów.

### 5.4 Naprawa
- Opracowanie planu działań.
- Wyznaczenie odpowiedzialności i terminów.

### 5.5 Retest (Weryfikacja)
- Sprawdzenie skuteczności napraw.
- Aktualizacja rejestru.

### 5.6 Utrzymanie
- Monitorowanie zmian.
- Ocena wpływu nowych funkcjonalności na dostępność.
- Zaplanowanie kolejnej oceny.

---

## 6. Rejestr niezgodności

Każdy podmiot powinien prowadzić rejestr zawierający:

- identyfikator niezgodności,
- odniesienie do EN 301 549,
- lokalizację problemu,
- kategorię wagi,
- datę wykrycia,
- plan naprawczy,
- status,
- datę weryfikacji.

Rejestr stanowi podstawę kontroli jakości i zarządzania dostępnością.

---

## 7. Produkty stabilne a produkty dynamiczne

### 7.1 Produkty stabilne (wersjonowane)

- Mogą być przedmiotem pełnej oceny zgodności.
- Mogą być objęte certyfikacją, o ile nie ulegają niekontrolowanym zmianom.

### 7.2 Produkty dynamiczne

- Wymagają modelu ciągłej oceny.
- Ocena dotyczy stanu produktu w określonym momencie.
- Certyfikacja trwała nie ma zastosowania.

---

## 8. Zastosowania regulacyjne

UMPTZ może być stosowany jako podstawa:

- deklaracji dostępności,
- oświadczeń zgodności w kontekście EAA,
- przygotowania dokumentów VPAT/ACR,
- zamówień publicznych,
- odbiorów systemów,
- wewnętrznego systemu zapewniania jakości,
- procesów certyfikacyjnych (dla produktów stabilnych).

Model pozostaje neutralny wobec konkretnego reżimu prawnego.

---

## 9. Podsumowanie

Uniwersalny Model Procesu Testowania Zgodności TIK:

- oddziela poziom głębokości badania od celu regulacyjnego,
- zapewnia proporcjonalność podejścia,
- wzmacnia procesowe zarządzanie dostępnością,
- umożliwia stosowanie w administracji i sektorze prywatnym,
- stanowi fundament do opracowania szczegółowych procedur testowych.

UMPTZ buduje spójny, dojrzały system oceny zgodności produktów cyfrowych w Polsce.