---
id: ewidencja-przypadkow-niedostepnosci
title: Ewidencja przypadków niedostępności
description: Wskazówki dotyczące ewidencjonowania znanych przypadków niedostępności cyfrowej oraz dokumentowania sposobu zapewnienia użytkownikom dostępu do informacji i usług.
sidebar_label: Ewidencja przypadków niedostępności
sidebar_position: 3
keywords: [zapewnienie dostępu,niedostępność,dostępność cyfrowa,deklaracja dostępności,nieproporcjonalne obciążenie,]
tags: [zapewnienie dostępu,niedostępność,dostępność cyfrowa,deklaracja dostępności,nieproporcjonalne obciążenie,]
opracowanie: Stefan Wajda 
data_zgloszenia: 6 czerwca 2026 r.
ostatnia_aktualizacja: 4 lipca 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Celem dokumentu jest określenie minimalnego zakresu informacji, jakie organizacja powinna gromadzić o znanych przypadkach niedostępności treści, dokumentów, funkcjonalności i usług cyfrowych oraz o sposobie zapewnienia użytkownikom dostępu do informacji i usług.

Ewidencja służy zapewnieniu użytkownikom dostępu do informacji i usług, planowaniu działań naprawczych, monitorowaniu realizacji tych działań oraz wspieraniu aktualizacji deklaracji dostępności.

Dokument nie określa sposobu prowadzenia ewidencji ani nie wymaga tworzenia odrębnego rejestru.

## Zasady prowadzenia ewidencji

Organizacja może prowadzić ewidencję przypadków niedostępności w dowolnym narzędziu wykorzystywanym do zarządzania:

- zadaniami,
- zgłoszeniami,
- incydentami,
- problemami dostępności,
- zmianami,
- utrzymaniem usług,
- innymi procesami organizacyjnymi.

Nie jest konieczne tworzenie odrębnego rejestru, jeżeli wymagane informacje są gromadzone w istniejących narzędziach.

Ewidencja powinna obejmować co najmniej przypadki niedostępności:

- wykryte podczas monitoringu,
- ujawnione w audytach lub testach,
- zgłoszone przez użytkowników,
- zgłoszone przez pracowników,
- stwierdzone podczas publikacji treści,
- zidentyfikowane podczas utrzymania lub rozwoju usług cyfrowych.

Każdy przypadek powinien pozostawać w ewidencji do czasu:

- usunięcia problemu,
- wycofania treści lub usługi,
- ustania obowiązku zapewnienia dostępności lub dostępu wynikającego z przepisów prawa.


## Zakres informacji

### Informacje identyfikacyjne

| Pole                 | Opis                                                              |
| -------------------- | ----------------------------------------------------------------- |
| Unikalny identyfikator przypadku | Numer przypadku                                       |
| Data obserwacji      | Data zgłoszenia lub wykrycia przypadku                            |
| Źródło informacji    | Audyt, monitoring, zgłoszenie użytkownika, testy, publikacja itp. |
| Osoba odpowiedzialna | Osoba lub komórka organizacyjna                                   |
| Status               | Otwarte, w trakcie realizacji, usunięte, wycofane                 |

---

### Opis problemu

| Pole                 | Opis                                                 |
| -------------------- | ---------------------------------------------------- |
| Rodzaj zasobu        | Strona, dokument, formularz, usługa, multimedia itp. |
| Lokalizacja          | Adres URL lub identyfikator zasobu                   |
| Opis niedostępności  | Krótki opis problemu                                 |
| Data stwierdzenia    | Data wykrycia                                        |
| Wpływ na użytkownika | Opis skutków dla użytkownika                         |

---

### Klasyfikacja

| Pole             | Opis                                                                    |
| ---------------- | ----------------------------------------------------------------------- |
| Kategoria        | Wyłączenie ustawowe / Nieproporcjonalne obciążenie / Zwykła niezgodność |
| Źródło obowiązku | Ustawa / Polityka organizacji / Inne wymagania                          |
| Priorytet        | Krytyczny / Istotny / Niski                                             |
| Plan naprawczy   | Tak / Nie                                                               |
| Termin usunięcia | Data planowanego usunięcia                                              |

---

### Zapewnienie dostępu

| Pole                                | Opis                                                             |
| ----------------------------------- | ---------------------------------------------------------------- |
| Sposób zapewnienia dostępu          | Opis zastosowanego rozwiązania                                   |
| Data zapewnienia dostępu            | Data udostępnienia rozwiązania użytkownikom                      |
| **Poziom rozwiązania**              | Naprawa / Dostępna wersja / Równoważna forma / Dostęp na żądanie |
| Data wdrożenia rozwiązania          | Data uruchomienia rozwiązania                                    |
| Komunikat dla użytkownika           | Link lub opis komunikatu                                         |
| Informacja w deklaracji dostępności | Tak / Nie                                                        |



#### Opis pola „Poziom rozwiązania”

| Poziom                | Opis                                                                                          |
| --------------------- | --------------------------------------------------------------------------------------------- |
| **Naprawa**           | Problem został usunięty, a treść lub usługa spełnia wymagania dostępności cyfrowej.           |
| **Dostępna wersja**   | Organizacja udostępnia istniejącą dostępną wersję tej samej informacji lub usługi.            |
| **Równoważna forma**  | Organizacja przygotowała alternatywną dostępną formę informacji lub sposób realizacji usługi. |
| **Dostęp na żądanie** | Użytkownik uzyskuje dostęp po zgłoszeniu potrzeby lub problemu.                               |

#### Wykorzystanie pola „Poziom rozwiązania”

Organizacja powinna okresowo analizować strukturę wpisów w ewidencji.

Duży udział wpisów oznaczonych jako **Naprawa**, **Dostępna wersja**, **Równoważna forma** świadczy o aktywnym zapewnianiu dostępu użytkownikom.

Duży udział wpisów oznaczonych jako **Dostęp na żądanie** może wskazywać, że organizacja przenosi ciężar uzyskania dostępu na użytkowników zamiast zapewniać go z własnej inicjatywy.

Organizacja dąży do ograniczania liczby przypadków oznaczonych jako „Dostęp na żądanie” poprzez naprawę problemów, udostępnianie istniejących dostępnych wersji lub przygotowywanie równoważnych dostępnych form informacji i usług.

---

### Weryfikacja

| Pole                       | Opis                                     |
| -------------------------- | ---------------------------------------- |
| Data ostatniej weryfikacji | Data przeglądu                           |
| Wynik weryfikacji          | Aktualne informacje                      |
| Decyzja                    | Kontynuacja / Naprawa / Zamknięcie wpisu |
| Termin następnej weryfikacji | Data kolejnego przeglądu               |

## Przykład wpisu

| Pole                       | Wartość                          |
| -------------------------- | -------------------------------- |
| Identyfikator              | DOC-2026-014                     |
| Rodzaj zasobu              | Dokument PDF                     |
| Lokalizacja                | /uchwala-12-2026.pdf             |
| Opis niedostępności        | Brak struktury dokumentu         |
| Kategoria                  | Zwykła niezgodność               |
| Priorytet                  | Istotny                          |
| Termin usunięcia           | 2026-09-30                       |
| Sposób zapewnienia dostępu | Publikacja dostępnej wersji HTML |
| Data zapewnienia dostępu   | 2026-10-07                       | 
| Komunikat dla użytkownika  | Link lub opis                    |
| Poziom rozwiązania         | Dostępna wersja                  |
| Informacja w deklaracji    | Tak                              |
| Status                     | W trakcie realizacji             |

## Powiązanie z innymi procesami

Informacje przedstawione w dokumencie mogą być prowadzone w ramach:

- systemu zgłoszeń dostępności,
- systemu zarządzania zadaniami,
- systemu obsługi incydentów,
- systemu zarządzania zmianą,
- systemu zarządzania treścią (CMS),
- rejestru błędów,
- narzędzi do zarządzania projektami,
- innych rozwiązań stosowanych przez organizację.

Istotne jest zapewnienie kompletności informacji o każdym znanym przypadku niedostępności, a nie wykorzystanie określonego narzędzia lub sposobu ich ewidencjonowania.

## Dobra praktyka

Ewidencja przypadków niedostępności nie powinna być traktowana wyłącznie jako wykaz problemów technicznych.

Każdy odnotowany przypadek powinien wskazywać:

- czy użytkownik ma zapewniony dostęp do informacji lub usługi,
- w jaki sposób dostęp został zapewniony,
- kto odpowiada za rozwiązanie problemu,
- kiedy planowane jest usunięcie problemu lub ponowna ocena przyjętego rozwiązania.

Celem ewidencji nie jest dokumentowanie samego faktu występowania niedostępności, lecz zapewnienie, aby każdy znany przypadek niedostępności miał przypisaną osobę odpowiedzialną, sposób zapewnienia użytkownikom dostępu oraz plan dalszego postępowania.


