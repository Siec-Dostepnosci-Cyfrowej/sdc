---
id: rejestr-niedostepnych-tresci-i-funkcjonalnosci
title: Rejestr niedostępnych treści i funkcjonalności
description: Wzór rejestru służącego do ewidencjonowania znanych przypadków niedostępności cyfrowej oraz sposobów zapewnienia użytkownikom dostępu do informacji i usług.
sidebar_label: Rejestr niedostępności
sidebar_position: 3
keywords: [dostęp alternatywny,niedostępne treści,niedostępne usługi,dostępność cyfrowa,deklaracja dostępności,nieproporcjonalne obciążenie,]
tags: [dostęp alternatywny,niedostępne treści,niedostępne usługi,dostępność cyfrowa,deklaracja dostępności,nieproporcjonalne obciążenie,]
opracowanie: Stefan Wajda 
data_zgloszenia: 6 czerwca 2026 r.
ostatnia_aktualizacja: 6 czerwca 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Rejestr służy do ewidencjonowania znanych organizacji przypadków niedostępności treści, dokumentów, funkcjonalności i usług cyfrowych.

Celem prowadzenia rejestru jest:

- zapewnienie użytkownikom dostępu do informacji i usług,
- planowanie działań naprawczych,
- monitorowanie realizacji działań,
- dokumentowanie sposobu postępowania,
- wspieranie aktualizacji deklaracji dostępności.

Rejestr obejmuje wyłącznie przypadki niedostępności znane organizacji.

## Zasady prowadzenia rejestru

Rejestr powinien obejmować:

- niedostępności wykryte podczas monitoringu,
- wyniki audytów,
- wyniki testów,
- zgłoszenia użytkowników,
- zgłoszenia pracowników,
- przypadki zidentyfikowane podczas publikacji treści.

Każda pozycja rejestru powinna być utrzymywana do czasu:

- usunięcia problemu,
- wycofania treści lub usługi,
- stwierdzenia, że problem nie podlega wymaganiom ustawy.

## Zakres informacji

### Informacje identyfikacyjne

| Pole                 | Opis                                                              |
| -------------------- | ----------------------------------------------------------------- |
| Identyfikator        | Numer wpisu                                                       |
| Data wpisu           | Data rejestracji                                                  |
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
| Priorytet        | Krytyczny / Istotny / Niski                                             |
| Plan naprawczy   | Tak / Nie                                                               |
| Termin usunięcia | Data planowanego usunięcia                                              |

---

### Zapewnienie dostępu

| Pole                                | Opis                                                             |
| ----------------------------------- | ---------------------------------------------------------------- |
| Sposób zapewnienia dostępu          | Opis zastosowanego rozwiązania                                   |
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

Organizacja powinna okresowo analizować strukturę wpisów w rejestrze.

Duży udział wpisów oznaczonych jako **Naprawa**, **Dostępna wersja**, **Równoważna forma** świadczy o aktywnym zapewnianiu dostępu użytkownikom.

Duży udział wpisów oznaczonych jako **Dostęp na żądanie** może wskazywać, że organizacja przenosi ciężar uzyskania dostępu na użytkowników zamiast zapewniać go z własnej inicjatywy.

Organizacja dąży do ograniczania liczby przypadków oznaczonych jako „Dostęp na żądanie” poprzez naprawę problemów, udostępnianie istniejących dostępnych wersji lub przygotowywanie równoważnych dostępnych form informacji i usług.

---

### Weryfikacja

| Pole                       | Opis                                     |
| -------------------------- | ---------------------------------------- |
| Data ostatniej weryfikacji | Data przeglądu wpisu                     |
| Wynik weryfikacji          | Aktualne informacje                      |
| Decyzja                    | Kontynuacja / Naprawa / Zamknięcie wpisu |

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
| Poziom rozwiązania         | Dostępna wersja                  |
| Informacja w deklaracji    | Tak                              |
| Status                     | W trakcie realizacji             |

## Powiązanie z innymi procesami

Rejestr powinien być wykorzystywany podczas:

- aktualizacji deklaracji dostępności,
- przeglądów kierownictwa,
- monitoringu dostępności,
- planowania działań naprawczych,
- przygotowywania raportów dotyczących dostępności.

## Dobra praktyka

Rejestr nie powinien być traktowany wyłącznie jako wykaz problemów.

Każdy wpis powinien wskazywać:

- czy użytkownik ma zapewniony dostęp do informacji lub usługi,
- w jaki sposób ten dostęp jest zapewniony,
- kiedy organizacja planuje usunięcie problemu.

Brak informacji o sposobie zapewnienia dostępu powinien być traktowany jako sygnał wymagający podjęcia działań organizacyjnych.





