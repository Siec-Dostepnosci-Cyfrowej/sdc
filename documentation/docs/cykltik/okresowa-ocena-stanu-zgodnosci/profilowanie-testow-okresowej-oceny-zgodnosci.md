---
id: profilowanie-testow-okresowej-oceny-zgodnosci
title: Profilowanie testów okresowej oceny zgodności
sidebar_label: Profilowanie testów
sidebar_position: 5
description: Zestawienie testów przypisanych do profili ACR-MIN, ACR-EXT i ACR-AUDIT wykorzystywanych podczas okresowej oceny zgodności.
keywords: [testy dostępności, profil testów, ACR-MIN, ACR-EXT, ACR-AUDIT, ocena zgodności]
tags: [testy, ocena zgodności, WCAG]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Dokument przedstawia przyporządkowanie testów do profili stosowanych podczas okresowej oceny zgodności:

- **ACR-MIN** — profil minimalny,
- **ACR-EXT** — profil rozszerzony,
- **ACR-AUDIT** — profil pogłębiony.

Każdy kolejny profil obejmuje testy przypisane do profili niższych.

:::note Uwaga

Skrócone nazwy testów stosowane będą tymczasowodo zakończenia przeglądu wszytskich kart testów

:::

---

## 1. Profil minimalny (ACR-MIN)

### Charakterystyka

Profil minimalny przeznaczony jest do:

- samooceny organizacji,
- okresowej kontroli zgodności,
- monitorowania podstawowych wymagań dostępności cyfrowej,
- oceny wykonywanej przez pracowników organizacji.

Profil obejmuje podstawowe testy pozwalające wykryć najczęściej występujące problemy dostępności.


### Zakres testów

| ID testu   | Nazwa testu                        |
| ---------- | ---------------------------------- |
| procID-001 | Automatyczne wykrywanie błędów dostępności |
| testID-019 | Nagłówki                           |
| testID-020 | Tytuł strony                       |
| testID-021 | Język strony                       |
| testID-022 | Język części strony |
| testID-023 | Dostęp z klawiatury                |
| testID-025 | Pułapka klawiaturowa |
| testID-026 | Kolejność fokusu |
| testID-027 | Widoczność fokusu                  |
| testID-031 | Punkty orientacyjne |
| testID-032 | Wystarczający kontrast             |
| testID-033 | Tekst alternatywny                 |
| testID-034 | Łącza pomijania |
| testID-039 | Widoczne etykiety lub instrukcje   |
| testID-041 | Oznaczenie pól wymaganych |
| testID-042 | Format danych |
| testID-044 | Identyfikacja błędów               |
| testID-045 | Sugestie korekty błędów |
| testID-047 | Odczyt struktury przez czytnik ekranu |
| testID-048 | Odczyt formularza przez czytnik ekranu |
| testID-049 | Transkrypcja dla wideo bez dźwięku |
| testID-050 | Transkrypcja dla nagrań audio      |
| testID-060 | Dokument PDF                       |
| testID-069 | Komunikaty o stanie |
| testID-070 | Dostępna nazwa elementu interaktywnego |
| testID-071 | Dostępna nazwa w widocznej etykiecie |
| testID-076 | Wiele sposobów                     |
| testID-078 | Kontrola odtwarzania dźwięku       |
| ...        |                                    |

---

## 2. Profil rozszerzony (ACR-EXT)

### Charakterystyka

Profil rozszerzony przeznaczony jest do:

- okresowej oceny zgodności,
- monitoringu dostępności,
- oceny wykonywanej przez osoby posiadające wiedzę z zakresu dostępności cyfrowej,
- oceny procesów użytkownika i usług cyfrowych.

Profil obejmuje **wszystkie testy profilu minimalnego** oraz **dodatkowe testy profilu rozszerzonego**, w tym:


- testy komponentów,
- testy stron i sekcji serwisu,
- testy procesów użytkownika,
- testy aplikacji mobilnych,
- testy komunikacji dostępnej.

### Dodatkowe testy profilu rozszerzonego

| ID         | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-035 | Cel łącza (w kontekście) |
| testID-037 | Zmiana rozmiaru tekstu |
| testID-038 | Dopasowanie do szerokości ekranu |
| testID-040 | Opisowe etykiety |
| testID-046 | Etykiety powiązane programowo |
| testID-045 | Zapobieganie błędom |
| testID-047 | Odczyt struktury przez czytnik ekranu |
| testID-049 | Transkrypcja dla wideo bez dźwięku |
| testID-050 | Transkrypcja dla nagrań audio |
| testID-051 | Napisy rozszerzone |
| testID-052 | Audiodeskrypcja |
| testID-053 | Alternatywa pełnotekstowa dla multimediów |
| testID-054 | Ruch, miganie i błyski                |
| testID-055 | Modalne okno dialogowe |
| testID-056 | Zakładki |
| testID-059 | Akordeon |
| testID-058 | Karuzela |
| testID-060 | Dokument PDF |
| testID-061 | Dokument DOCX / ODT |
| testID-062 | Tabela |
| testID-063 | Wykres |
| testID-064 | Wizualizacja danych |
| testID-065 | Odtwarzacz multimedialny              |
| testID-066 | Menu nawigacyjne |
| testID-067 | Wyszukiwanie w witrynie |
| testID-068 | Galeria obrazów |
| testID-069 | Komunikaty o stanie |
| testID-070 | Dostępna nazwa elementu interaktywnego |
| testID-071 | Dostępna nazwa w widocznej etykiecie |
| testID-072 | Obrazy tekstu |
| testID-073 | Spójność identyfikacji |
| testID-074 | Spójność nawigacji |
| testID-075 | Użycie koloru |
| testID-077 | Treść spod kursora lub fokusu         |
| testID-079 | Regulacja czasu                       |
| testID-087 | Fokus niezakryty                      |
| testID-095 | Obsługa czytnikiem ekranu             |
| testID-112 | BIP — karta informacji publicznej     |
| testID-115 | Katalog usług                         |
| testID-117 | Złożenie wniosku                      |
| testID-121 | Zgłoszenie problemu dostępności       |
| testID-130 | Komponent Kalendarz                   |
| testID-133 | Usługa lub procedura w ETR            |
| testID-134 | Obsługa użytkownika w PJM             |
| testID-135 | Informacje o dostępności              |
| ...        |                                       |

---

## 3. Profil pogłębiony (ACR-AUDIT)

### Charakterystyka

Profil pogłębiony przeznaczony jest do:

- audytów eksperckich,
- ocen przed wdrożeniem systemu,
- analiz aplikacji specjalistycznych,
- pogłębionych ocen dostępności cyfrowej.

Profil obejmuje:

- wszystkie testy profilu minimalnego,
- wszystkie testy profilu rozszerzonego,
- testy specjalistyczne wymagające zaawansowanej wiedzy eksperckiej.

### Dodatkowe testy profilu pogłębionego

| ID         | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-088 | Przeciąganie                          |
| testID-089 | Rozmiar celu (minimum)                |
| testID-090 | Rozmiar celu dotykowego (ulepszone)   |
| testID-093 | Dostępne uwierzytelnianie             |
| testID-094 | Dostępne uwierzytelnianie (ulepszone) |
| testID-096 | Obsługa klawiaturą zewnętrzną         |
| testID-097 | Gesty systemowe i niestandardowe      |
| testID-136 | Jednoznakowe skróty klawiaturowe      |
| ...        |                                       |

---

## Zasady stosowania profili

### Profil minimalny

Stosowany w przypadku:

- samooceny,
- bieżącej kontroli zgodności,
- okresowej oceny wykonywanej własnymi siłami.

### Profil rozszerzony

Stosowany w przypadku:

- okresowej oceny zgodności,
- monitoringu dostępności,
- oceny procesów użytkownika,
- oceny stron i usług cyfrowych.

### Profil poglębiony

Stosowany w przypadku:

- audytów eksperckich,
- ocen przedwdrożeniowych,
- ocen systemów o podwyższonym stopniu złożoności,
- analiz wymagających specjalistycznych kompetencji.

---

## Uwagi

1. Przypisanie testu do profilu oznacza minimalny poziom stosowania testu.
2. Test przypisany do profilu ACR-MIN może być również wykorzystywany w profilach ACR-EXT i ACR-AUDIT.
3. Test przypisany do profilu ACR-EXT może być również wykorzystywany w profilu ACR-AUDIT.
4. Profil ACR-AUDIT obejmuje wszystkie testy biblioteki.
5. Organizacja może rozszerzać zakres oceny o dodatkowe testy odpowiednie do charakteru ocenianego produktu cyfrowego lub usługi.
