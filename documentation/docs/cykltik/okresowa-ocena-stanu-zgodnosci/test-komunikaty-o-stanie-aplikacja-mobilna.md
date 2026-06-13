---
id: test-komunikaty-o-stanie-aplikacja-mobilna
title: Komunikaty o stanie (aplikacja mobilna)
sidebar_label: Komunikaty o stanie (aplikacja mobilna)
sidebar_position: 103
description: Scenariusz testu sprawdzającego, czy komunikaty o stanie pojawiające się w aplikacji mobilnej są przekazywane użytkownikom, w tym użytkownikom technologii wspomagających, bez konieczności przenoszenia fokusu.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,komunikaty o stanie,aplikacja mobilna]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,komunikaty o stanie,aplikacja mobilna]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## Identyfikator testu

**testID-103**

## Nazwa testu

Komunikaty o stanie (aplikacja mobilna)

## Cel testu

Sprawdzenie, czy komunikaty o stanie pojawiające się w aplikacji mobilnej są przekazywane użytkownikom, w tym użytkownikom technologii wspomagających, bez konieczności przenoszenia fokusu oraz czy informują o zmianach mających znaczenie dla wykonania zadania.

## Powiązane wymagania

### WCAG 2.1 / 2.2

- 4.1.3 Komunikaty o stanie

### EN 301 549

- 11.4.1.3 Status Messages

---

## Dlaczego to jest ważne

Podczas korzystania z aplikacji mobilnej użytkownik otrzymuje wiele komunikatów informujących o zmianach stanu interfejsu.

Przykładowo:

- formularz został wysłany,
- wystąpił błąd,
- dane zostały zapisane,
- trwa pobieranie danych,
- zakończono operację,
- liczba wyników została zaktualizowana.

Użytkownicy widzący często zauważają takie komunikaty automatycznie.

Osoby korzystające z:

- TalkBack,
- VoiceOver,
- innych technologii wspomagających,

mogą nie otrzymać tych informacji, jeżeli komunikaty nie zostały prawidłowo udostępnione przez aplikację.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób niewidomych,
- osób słabowidzących,
- użytkowników czytników ekranu,
- osób z trudnościami poznawczymi,
- użytkowników korzystających z technologii wspomagających.

---

## Zakres stosowania

Test należy wykonywać dla:

- formularzy,
- wyszukiwarek,
- procesów logowania,
- procesów rejestracji,
- operacji zapisu danych,
- operacji usuwania danych,
- zakupów i płatności,
- aktualizacji treści bez przeładowania ekranu,
- wszystkich funkcji generujących komunikaty systemowe.

---

## Przykłady komunikatów objętych oceną

### Komunikaty sukcesu

- „Dane zostały zapisane”
- „Profil został zaktualizowany”

### Komunikaty błędów

- „Nieprawidłowe hasło”
- „Pole jest wymagane”

### Komunikaty informacyjne

- „Trwa pobieranie danych”
- „Brak wyników wyszukiwania”

### Komunikaty ostrzegawcze

- „Połączenie internetowe zostało utracone”
- „Sesja wygasa za 2 minuty”

---

## Narzędzia

### Android

- TalkBack

### iOS

- VoiceOver

---

## Metoda badania

### Krok 1. Uruchomienie czytnika ekranu

Włącz:

- TalkBack

lub

- VoiceOver.

### Krok 2. Wywołanie komunikatów

Wykonaj działania powodujące pojawienie się komunikatów o stanie.

Przykładowo:

- wysłanie formularza,
- zapisanie danych,
- błędne wypełnienie pola,
- wyszukiwanie informacji.

### Krok 3. Ocena odczytu komunikatu

Sprawdź, czy:

- komunikat jest odczytywany automatycznie,
- użytkownik nie musi szukać komunikatu ręcznie,
- komunikat jest zrozumiały.

### Krok 4. Ocena wpływu na fokus

Sprawdź, czy:

- komunikat jest przekazywany bez nieoczekiwanej zmiany fokusu,
- użytkownik nie traci miejsca pracy.

### Krok 5. Ocena wszystkich typów komunikatów

Sprawdź komunikaty:

- sukcesu,
- błędów,
- ostrzeżeń,
- informacji.

---

## Pytania kontrolne

1. Czy komunikat jest przekazywany użytkownikowi czytnika ekranu?
2. Czy komunikat jest odczytywany automatycznie?
3. Czy użytkownik nie musi samodzielnie wyszukiwać komunikatu?
4. Czy komunikat jest zrozumiały?
5. Czy komunikat pojawia się we właściwym momencie?
6. Czy odczyt komunikatu nie powoduje utraty orientacji w interfejsie?
7. Czy użytkownik rozumie skutek wykonanej operacji?

---

## Kryteria oceny

### Spełnia

Wszystkie istotne komunikaty o stanie są przekazywane użytkownikom technologii wspomagających w sposób automatyczny i zrozumiały.

### Częściowo spełnia

Większość komunikatów działa poprawnie, jednak część z nich nie jest przekazywana lub jest przekazywana nieprawidłowo.

### Nie spełnia

Istotne komunikaty o stanie nie są przekazywane użytkownikom technologii wspomagających.

### Nie dotyczy

W ocenianym zakresie nie występują komunikaty o stanie.

---

## Typowe niezgodności

- komunikat widoczny wyłącznie wizualnie,
- brak odczytu komunikatu przez TalkBack,
- brak odczytu komunikatu przez VoiceOver,
- komunikat pojawia się i znika przed odczytaniem,
- komunikat nie jest związany z wykonywaną operacją,
- użytkownik nie otrzymuje informacji o powodzeniu operacji,
- użytkownik nie otrzymuje informacji o błędach.

---

## Dobre praktyki

- wykorzystywanie natywnych mechanizmów dostępności systemu,
- automatyczne ogłaszanie zmian stanu,
- stosowanie krótkich i jednoznacznych komunikatów,
- przekazywanie informacji o sukcesie i błędach,
- testowanie komunikatów z TalkBack i VoiceOver.

---

## Klasyfikacja problemów

### Krytyczne

- użytkownik nie otrzymuje informacji o błędach uniemożliwiających wykonanie zadania,
- użytkownik nie wie, czy operacja zakończyła się sukcesem.

### Istotne

- brak odczytu ważnych komunikatów procesowych,
- brak informacji o zmianie stanu aplikacji.

### Umiarkowane

- komunikaty są przekazywane niekonsekwentnie lub częściowo.

### Drobne

- problemy redakcyjne lub pojedyncze nieczytelne komunikaty.

---

## Profil stosowania testu

| Profil                                       | Stosowanie              |
| -------------------------------------------- | ----------------------- |
| Okresowa ocena stanu zgodności — minimum     | Tak (aplikacje mobilne) |
| Okresowa ocena stanu zgodności — rozszerzona | Tak                     |
| Ocena przed odbiorem rozwiązania             | Tak                     |
| Audyt zgodności                              | Tak                     |
| ACR-MIN                                      | Tak                     |
| ACR-EXT                                      | Tak                     |
| ACR-AUDIT                                    | Tak                     |

---

## Powiązane testy

- Obsługa czytnikiem ekranu (aplikacja mobilna)
- Etykiety elementów (aplikacja mobilna)
- Kolejność fokusu (aplikacja mobilna)
- Identyfikacja błędów
- Sugestie korekty błędów
- Formularz elektroniczny
- Komunikaty o stanie (WWW)

---

## Uwagi

Test jest mobilnym odpowiednikiem testu „Komunikaty o stanie” stosowanego dla stron internetowych. W aplikacjach mobilnych ma szczególne znaczenie, ponieważ wiele operacji wykonywanych jest dynamicznie, bez przeładowania ekranu. Użytkownik korzystający z TalkBack lub VoiceOver powinien otrzymywać informacje o rezultatach swoich działań równie szybko i skutecznie jak użytkownik obserwujący ekran. W praktyce jest to jeden z najczęściej pomijanych obszarów podczas tworzenia aplikacji mobilnych, mimo że ma bezpośredni wpływ na możliwość samodzielnego wykonania zadania.
