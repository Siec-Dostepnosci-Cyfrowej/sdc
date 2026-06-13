---
id: test-ustawienia-dostepnosci-systemu-aplikacja-mobilna
title: Ustawienia dostępności systemu (aplikacja mobilna)
sidebar_label: Ustawienia dostępności systemu (aplikacja mobilna)
sidebar_position: 102
description: Scenariusz testu sprawdzającego, czy aplikacja mobilna prawidłowo współpracuje z ustawieniami dostępności systemu operacyjnego oraz czy respektuje preferencje użytkownika wpływające na sposób prezentacji i obsługi interfejsu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,ustawienia dostępności systemu,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,ustawienia dostępności systemu,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## Identyfikator testu

**testID-102**


## Nazwa testu

Ustawienia dostępności systemu (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy aplikacja mobilna prawidłowo współpracuje z ustawieniami dostępności systemu operacyjnego oraz czy respektuje preferencje użytkownika wpływające na sposób prezentacji i obsługi interfejsu.

## Powiązane wymagania

### WCAG 2.1 / 2.2

Test wspiera ocenę wielu kryteriów sukcesu, w szczególności:

- 1.3.4 Orientacja
- 1.4.3 Kontrast
- 1.4.4 Zmiana rozmiaru tekstu
- 1.4.10 Dopasowanie do szerokości ekranu
- 2.2.2 Wstrzymywanie, zatrzymywanie, ukrywanie
- 2.3.3 Animacje wywołane interakcją
- 2.5.4 Aktywowanie ruchem
- 4.1.2 Nazwa, rola, wartość

### EN 301 549

W szczególności wymagania dotyczące:

- współpracy z usługami dostępności,
- współpracy z ustawieniami systemowymi,
- obsługi technologii wspomagających.

---

## Dlaczego to jest ważne

Systemy Android i iOS oferują wiele funkcji dostępności umożliwiających dostosowanie urządzenia do potrzeb użytkownika.

Przykładowo użytkownik może:

- zwiększyć rozmiar tekstu,
- pogrubić tekst,
- zwiększyć kontrast,
- ograniczyć animacje,
- korzystać z czytnika ekranu,
- korzystać z przełączników,
- zmienić sposób obsługi dotyku.

Jeżeli aplikacja ignoruje te ustawienia, użytkownik może utracić część funkcjonalności lub mieć trudności z korzystaniem z rozwiązania.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób niewidomych,
- osób słabowidzących,
- osób z niepełnosprawnościami ruchowymi,
- osób z nadwrażliwością na ruch i animacje,
- osób starszych,
- użytkowników technologii wspomagających.

---

## Zakres stosowania

Test należy wykonywać dla:

- aplikacji Android,
- aplikacji iOS,
- głównych ekranów aplikacji,
- formularzy,
- procesów użytkownika,
- komponentów niestandardowych,
- ekranów zawierających animacje i multimedia.

---

## Zakres oceny

### Android

W zależności od wersji systemu:

- rozmiar tekstu,
- wielkość wyświetlania,
- TalkBack,
- przełączniki dostępności,
- wysoki kontrast tekstu,
- usuwanie animacji,
- korekcja kolorów,
- odwracanie kolorów.

### iOS

W zależności od wersji systemu:

- Dynamic Type,
- większe rozmiary dostępności,
- VoiceOver,
- Switch Control,
- Bold Text,
- Increase Contrast,
- Reduce Motion,
- Reduce Transparency,
- Zoom.

---

## Metoda badania

### Krok 1. Ocena podstawowa

Uruchom aplikację przy domyślnych ustawieniach systemu.

### Krok 2. Zmiana ustawień dostępności

Włącz kolejno wybrane ustawienia dostępności systemu.

### Krok 3. Ocena reakcji aplikacji

Po każdej zmianie sprawdź:

- czy aplikacja nadal działa poprawnie,
- czy treść pozostaje czytelna,
- czy funkcje pozostają dostępne.

### Krok 4. Ocena kluczowych procesów

Przeprowadź najważniejsze procesy użytkownika przy aktywnych ustawieniach dostępności.

### Krok 5. Ocena komponentów niestandardowych

Sprawdź, czy niestandardowe elementy interfejsu prawidłowo reagują na ustawienia systemowe.

---

## Pytania kontrolne

### Tekst

1. Czy aplikacja respektuje systemowy rozmiar tekstu?
2. Czy aplikacja poprawnie reaguje na pogrubienie tekstu?

### Ruch i animacje

3. Czy aplikacja respektuje ustawienie ograniczania animacji?
4. Czy wyłączenie animacji nie powoduje utraty funkcjonalności?

### Technologie wspomagające

5. Czy aplikacja współpracuje z czytnikiem ekranu?
6. Czy aplikacja współpracuje z przełącznikami dostępności?

### Kontrast i prezentacja

7. Czy aplikacja pozostaje czytelna przy zwiększonym kontraście?
8. Czy zmiana ustawień prezentacji nie powoduje błędów interfejsu?

---

## Kryteria oceny

### Spełnia

Aplikacja prawidłowo współpracuje z ustawieniami dostępności systemu i nie utrudnia korzystania z funkcji dostępności urządzenia.

### Częściowo spełnia

Większość ustawień działa poprawnie, jednak występują lokalne problemy lub ograniczenia.

### Nie spełnia

Aplikacja ignoruje istotne ustawienia dostępności lub ich wykorzystanie powoduje utratę funkcjonalności.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna funkcjonuje w środowisku systemowym wyposażonym w funkcje dostępności.

---

## Typowe niezgodności

- ignorowanie systemowego rozmiaru tekstu,
- nieprawidłowe działanie po włączeniu pogrubienia tekstu,
- brak współpracy z VoiceOver lub TalkBack,
- błędy interfejsu po zwiększeniu kontrastu,
- animacje pozostające aktywne mimo ustawienia „Ogranicz ruch”,
- komponenty niestandardowe nieobsługujące technologii wspomagających,
- utrata funkcjonalności po zmianie ustawień dostępności.

---

## Dobre praktyki

- korzystanie z natywnych komponentów systemowych,
- testowanie aplikacji z wykorzystaniem funkcji dostępności systemu,
- respektowanie ustawień użytkownika,
- ograniczanie własnych mechanizmów zastępujących funkcje systemowe,
- regularne testowanie nowych wersji aplikacji i systemów operacyjnych.

---

## Klasyfikacja problemów

### Krytyczne

- aplikacja nie współpracuje z podstawowymi technologiami wspomagającymi,
- korzystanie z funkcji dostępności uniemożliwia wykonanie kluczowego zadania.

### Istotne

- ignorowanie ustawień mających znaczący wpływ na możliwość korzystania z aplikacji.

### Umiarkowane

- częściowa niezgodność z wybranymi ustawieniami dostępności.

### Drobne

- lokalne błędy niewpływające znacząco na realizację zadań.

---

## Profil stosowania testu

| Profil                                       | Stosowanie  |
| -------------------------------------------- | ----------- |
| Okresowa ocena stanu zgodności — minimum     | Nie         |
| Okresowa ocena stanu zgodności — rozszerzona | Tak         |
| Ocena przed odbiorem rozwiązania             | Tak         |
| Audyt zgodności                              | Tak         |
| ACR-MIN                                      | Opcjonalnie |
| ACR-EXT                                      | Tak         |
| ACR-AUDIT                                    | Tak         |

---

## Powiązane testy

- Skalowanie tekstu (aplikacja mobilna)
- Obsługa czytnikiem ekranu (aplikacja mobilna)
- Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- Gesty systemowe i niestandardowe (aplikacja mobilna)
- Orientacja ekranu (aplikacja mobilna)
- Aktywowanie ruchem
- Ruch i błyski
- Dopasowanie do szerokości ekranu

---

## Uwagi

Test ma charakter przekrojowy i nie zastępuje szczegółowych testów dotyczących poszczególnych wymagań WCAG. Jego celem jest ocena rzeczywistej współpracy aplikacji z mechanizmami dostępności oferowanymi przez system operacyjny. W praktyce jest to jeden z najskuteczniejszych testów wykrywających problemy, które nie są widoczne podczas standardowej oceny interfejsu. Szczególnie wartościowe jest wykonywanie tego testu po aktualizacjach aplikacji oraz po zmianach wersji systemów Android i iOS.

### Minimalny zakres testu

Jeżeli pełna ocena wszystkich ustawień nie jest możliwa, zaleca się sprawdzenie co najmniej:

- systemowego zwiększenia rozmiaru tekstu,
- TalkBack lub VoiceOver,
- ograniczenia animacji,
- jednej technologii alternatywnego sterowania (jeżeli jest dostępna).

Pozwala to wykryć większość najczęściej występujących problemów dostępności aplikacji mobilnych.
