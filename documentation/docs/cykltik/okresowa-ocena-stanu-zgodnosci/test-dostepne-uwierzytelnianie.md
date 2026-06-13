---
id: test-dostepne-uwierzytelnianie
title: Dostępne uwierzytelnianie
sidebar_label: Dostępne uwierzytelnianie
sidebar_position: 93
description: Scenariusz testu sprawdzającego, czy proces uwierzytelniania nie wymaga od użytkownika wykonywania testów poznawczych, takich jak zapamiętywanie, odtwarzanie lub przepisywanie informacji, chyba że zapewniono alternatywny sposób uwierzytelnienia niewymagający takich działań.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-093**


## Nazwa testu

Dostępne uwierzytelnianie

## Cel testu

Sprawdzenie, czy proces uwierzytelniania nie wymaga od użytkownika wykonywania testów poznawczych, takich jak zapamiętywanie, odtwarzanie lub przepisywanie informacji, chyba że zapewniono alternatywny sposób uwierzytelnienia niewymagający takich działań.

## Powiązane wymagania

### WCAG 2.2

- 3.3.8 Dostępne uwierzytelnianie (Accessible Authentication (Minimum)) – poziom AA

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.3.8 Accessible Authentication (Minimum)
- 11.3.3.8 Accessible Authentication (Minimum)

---

## Dlaczego to jest ważne

Wiele mechanizmów logowania wymaga od użytkownika:

- zapamiętywania haseł,
- przepisywania kodów,
- rozwiązywania zagadek,
- rozpoznawania znaków na obrazach,
- wykonywania innych czynności poznawczych.

Takie wymagania mogą stanowić istotną barierę dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z dysleksją,
- osób z problemami pamięci,
- osób starszych,
- osób korzystających z technologii wspomagających.

Celem kryterium jest umożliwienie korzystania z bezpiecznych mechanizmów logowania bez konieczności wykonywania złożonych zadań poznawczych.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z dysleksją,
- osób z zaburzeniami pamięci,
- osób z trudnościami w uczeniu się,
- osób starszych,
- użytkowników technologii wspomagających.

---

## Zakres stosowania

Test należy wykonywać dla:

- formularzy logowania,
- procesów uwierzytelniania użytkownika,
- systemów administracyjnych,
- usług publicznych wymagających logowania,
- aplikacji mobilnych,
- procesów odzyskiwania dostępu do konta.

---

## Definicja testu poznawczego

Na potrzeby kryterium za test poznawczy uznaje się wymaganie od użytkownika:

- zapamiętania informacji,
- odtworzenia informacji z pamięci,
- przepisania informacji,
- rozwiązania zadania wymagającego percepcji lub rozumowania.

Przykłady:

- ręczne wpisanie hasła z pamięci,
- przepisanie kodu z obrazu,
- rozwiązanie CAPTCHA opartej na rozpoznawaniu znaków,
- odpowiedź na pytanie wymagające zapamiętanej wiedzy.

---

## Metoda badania

### Krok 1. Identyfikacja procesu logowania

Przejdź cały proces uwierzytelniania użytkownika.

### Krok 2. Identyfikacja wymagań poznawczych

Sprawdź, czy użytkownik musi:

- zapamiętać hasło,
- przepisać kod,
- rozpoznać znaki,
- rozwiązać zadanie poznawcze,
- odtworzyć informację z pamięci.

### Krok 3. Ocena dostępnych mechanizmów wsparcia

Sprawdź, czy użytkownik może skorzystać z:

- menedżera haseł,
- funkcji automatycznego uzupełniania,
- logowania biometrycznego,
- logowania jednokrotnego (SSO),
- linku logującego,
- innej alternatywy niewymagającej testu poznawczego.

### Krok 4. Ocena procesu odzyskiwania dostępu

Sprawdź, czy procedura odzyskiwania dostępu nie wprowadza dodatkowych barier poznawczych.

---

## Kryteria oceny

### Spełnia

Proces uwierzytelniania:

- nie wymaga wykonywania testów poznawczych

lub

- zapewnia alternatywny sposób uwierzytelnienia niewymagający takich działań.

Dodatkowo rozwiązanie nie blokuje korzystania z menedżerów haseł i funkcji automatycznego uzupełniania.

### Częściowo spełnia

Zapewniono część wymaganych mechanizmów ułatwiających uwierzytelnianie, jednak niektóre etapy nadal wymagają wykonywania testów poznawczych.

### Nie spełnia

Proces logowania wymaga wykonywania testów poznawczych i nie zapewnia dostępnej alternatywy.

### Nie dotyczy

Rozwiązanie nie wymaga uwierzytelniania użytkownika.

---

## Typowe niezgodności

- konieczność zapamiętania i ręcznego wpisania złożonego hasła bez możliwości użycia menedżera haseł,
- blokowanie funkcji wklejania hasła,
- blokowanie automatycznego uzupełniania pól logowania,
- CAPTCHA wymagająca odczytywania zniekształconego tekstu,
- pytania bezpieczeństwa wymagające odtworzenia informacji z pamięci,
- obowiązek przepisywania kodów wyświetlanych na ekranie.

---

## Dobre praktyki

- umożliwienie korzystania z menedżerów haseł,
- wspieranie autouzupełniania danych logowania,
- stosowanie logowania biometrycznego,
- stosowanie uwierzytelniania opartego na linkach jednorazowych,
- stosowanie rozwiązań zgodnych z nowoczesnymi standardami uwierzytelniania (np. passkeys),
- unikanie CAPTCHA wymagających rozpoznawania tekstu.

---

## Klasyfikacja problemów

### Krytyczne

- brak możliwości zalogowania się bez wykonania złożonego testu poznawczego.

### Istotne

- stosowanie mechanizmów uwierzytelniania wymagających pamiętania lub przepisywania informacji bez dostępnej alternatywy.

### Umiarkowane

- częściowe ograniczenia korzystania z menedżerów haseł lub autouzupełniania.

### Drobne

- lokalne problemy niewpływające znacząco na możliwość uwierzytelnienia.

---

## Profil stosowania testu

| Profil                                       | Stosowanie                                |
| -------------------------------------------- | ----------------------------------------- |
| Okresowa ocena stanu zgodności — minimum     | Tak (jeżeli rozwiązanie wymaga logowania) |
| Okresowa ocena stanu zgodności — rozszerzona | Tak                                       |
| Ocena przed odbiorem rozwiązania             | Tak                                       |
| Audyt zgodności                              | Tak                                       |
| ACR-MIN                                      | Tak                                       |
| ACR-EXT                                      | Tak                                       |
| ACR-AUDIT                                    | Tak                                       |

---

## Powiązane testy

- Formularz elektroniczny
- Widoczne etykiety lub instrukcje
- Identyfikacja błędów
- Sugestie korekty błędów
- Komunikaty o stanie
- Dostępna nazwa elementu interaktywnego
- Dostęp z klawiatury

---

## Uwagi

Kryterium 3.3.8 zostało wprowadzone w WCAG 2.2. Nie zakazuje stosowania haseł ani mechanizmów bezpieczeństwa. Wymaga natomiast, aby użytkownik nie był zmuszany do wykonywania testów poznawczych bez dostępnej alternatywy. Szczególnie istotne jest umożliwienie korzystania z menedżerów haseł, funkcji autouzupełniania oraz nowoczesnych metod uwierzytelniania, takich jak logowanie biometryczne czy passkeys. W praktyce wiele popularnych naruszeń wynika z blokowania funkcji wklejania hasła lub stosowania niedostępnych mechanizmów CAPTCHA.
