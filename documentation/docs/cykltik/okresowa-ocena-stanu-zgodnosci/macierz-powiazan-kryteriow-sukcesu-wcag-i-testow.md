---
id: macierz-powiazan-kryteriow-sukcesu-wcag-i-testow
title: Macierz powiązań kryteriów sukcesu WCAG i testów
sidebar_label: WCAG → Testy
sidebar_position: 7
description: Zestawienie przedstawiające testy wykorzystywane do oceny poszczególnych kryteriów sukcesu WCAG 2.1 i WCAG 2.2.
keywords: [WCAG, kryteria sukcesu, testy dostępności, ACR, raport zgodności, macierz]
tags: [WCAG, kryteria sukcesu, testy dostępności, ACR, raport zgodności, macierz]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---


## Cel dokumentu

Macierz przedstawia zestaw testów wykorzystywanych do oceny poszczególnych kryteriów sukcesu WCAG.

Dokument pomaga:

- planować ocenę zgodności,
- identyfikować testy wymagane do oceny konkretnego kryterium,
- analizować stopień pokrycia WCAG przez bibliotekę testów.
- analizować kompletność programu oceny.

## 2. Zasady interpretacji

Wskazane testy nie zawsze stanowią jedyne źródło informacji o danym kryterium sukcesu.

1. Jeden test może być powiązany z wieloma kryteriami sukcesu.
2. Jedno kryterium sukcesu może być weryfikowane przez wiele testów.
3. Brak testu przypisanego do kryterium sukcesu oznacza konieczność opracowania nowego testu lub rozszerzenia istniejących procedur oceny.
4. Niektóre testy procesowe, organizacyjne lub komunikacyjne mogą nie być bezpośrednio mapowane do pojedynczego kryterium sukcesu WCAG.
5. Macierz ma charakter pomocniczy i nie zastępuje analizy zgodności z WCAG.
6. Macierz jest aktualizowana wraz z rozwojem biblioteki testów.

## 3. Wykorzystanie macierzy

Macierz może być wykorzystywana do:

- budowy raportów ACR-MIN,
- budowy raportów ACR-EXT,
- planowania zakresu okresowej oceny stanu zgodności,
- identyfikowania luk w ocenie,
- projektowania nowych kart testów,
- przygotowywania audytów zgodności.

---

## 4. Tabela powiązań

| Kryterium sukcesu WCAG                 | Powiązane testy                                |
| -------------------------------------- | ---------------------------------------------- |
| 1.1.1 Treść nietekstowa                | testID-033                                     |
| 1.3.1 Informacje i relacje             | testID-019, testID-031, testID-047, testID-062 |
| 1.4.2 Kontrola odtwarzania dźwięku     | testID-078                                     |
| 1.4.3 Kontrast (minimalny)             | testID-032                                     |
| 1.4.13 Treść spod kursora lub fokusu   | testID-077                                     |
| 2.1.1 Klawiatura                       | testID-023, testID-024                         |
| 2.1.4 Jednoznakowe skróty klawiaturowe | testID-136                                     |
| 2.2.1 Regulacja czasu                  | testID-079                                     |
| 2.4.5 Wiele sposobów                   | testID-076                                     |
| ...    

## 5. Powiązane dokumenty

- Procedura okresowej oceny stanu zgodności — scenariusz badania
- Profil minimum raportu zgodności (ACR-MIN)
- Raportowanie wyników okresowej oceny stanu zgodności
- Biblioteka testów Sieci Dostępności Cyfrowej

---