---
id: test-dostepne-uwierzytelnianie-ulepszone
title: Dostępne uwierzytelnianie (ulepszone)
sidebar_label: Dostępne uwierzytelnianie (ulepszone)
sidebar_position: 94
description: Scenariusz testu sprawdzającego, czy proces uwierzytelniania nie wymaga od użytkownika wykonywania testów poznawczych oraz nie wymaga odtwarzania informacji z pamięci, chyba że użytkownik korzysta z menedżera haseł, funkcji autouzupełniania lub innego mechanizmu wspomagającego.
keywords: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
tags: [dostępność cyfrowa,test dostępności,okresowa ocena zgodności,dostępne uwierzytelnianie]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---



## Identyfikator testu

**testID-094**

## Nazwa testu

Dostępne uwierzytelnianie (ulepszone)

## Cel testu

Sprawdzenie, czy proces uwierzytelniania nie wymaga od użytkownika wykonywania testów poznawczych oraz nie wymaga odtwarzania informacji z pamięci, chyba że użytkownik korzysta z menedżera haseł, funkcji autouzupełniania lub innego mechanizmu wspomagającego.

## Powiązane wymagania

### WCAG 2.2

- 3.3.9 Dostępne uwierzytelnianie (ulepszone) (Accessible Authentication (Enhanced)) – poziom AAA

### EN 301 549

Po publikacji aktualizacji normy uwzględniającej WCAG 2.2:

- 9.3.3.9 Accessible Authentication (Enhanced)
- 11.3.3.9 Accessible Authentication (Enhanced)

---

## Dlaczego to jest ważne

Wymóg zapamiętywania i odtwarzania informacji stanowi istotną barierę dla wielu użytkowników.

Dotyczy to w szczególności:

- osób z niepełnosprawnościami poznawczymi,
- osób z zaburzeniami pamięci,
- osób z dysleksją,
- osób starszych,
- osób korzystających z wielu różnych systemów.

Nawet jeśli użytkownik może korzystać z menedżera haseł, konieczność samodzielnego odtworzenia informacji z pamięci w niektórych sytuacjach nadal może stanowić istotną przeszkodę.

Kryterium 3.3.9 rozszerza wymagania kryterium 3.3.8 i promuje rozwiązania niewymagające pamiętania informacji przez użytkownika.

---

## Kogo dotyczy

Test jest szczególnie istotny dla:

- osób z niepełnosprawnościami poznawczymi,
- osób z trudnościami w uczeniu się,
- osób z dysleksją,
- osób z zaburzeniami pamięci,
- osób starszych,
- użytkowników technologii wspomagających.

---

## Zakres stosowania

Test należy wykonywać dla:

- formularzy logowania,
- usług publicznych wymagających uwierzytelnienia,
- aplikacji webowych,
- aplikacji mobilnych,
- systemów administracyjnych,
- procesów odzyskiwania dostępu do konta.

---

## Różnica między kryteriami 3.3.8 i 3.3.9

### Kryterium 3.3.8 (AA)

Dopuszcza konieczność odtwarzania informacji z pamięci, jeżeli użytkownik może korzystać z mechanizmów wspomagających, takich jak:

- menedżery haseł,
- autouzupełnianie,
- wklejanie danych.

### Kryterium 3.3.9 (AAA)

Wymaga, aby proces uwierzytelniania nie wymagał od użytkownika wykonywania zadań opartych na pamięci, nawet jeśli dostępne są mechanizmy wspomagające.

---

## Metoda badania

### Krok 1. Identyfikacja procesu uwierzytelniania

Przejdź przez cały proces:

- logowania,
- odzyskiwania dostępu,
- potwierdzania tożsamości.

### Krok 2. Identyfikacja wymagań poznawczych

Sprawdź, czy użytkownik musi:

- przypomnieć sobie hasło,
- przypomnieć sobie odpowiedzi na pytania bezpieczeństwa,
- odtworzyć informacje z pamięci,
- rozpoznać wzorzec lub sekwencję,
- rozwiązać zadanie poznawcze.

### Krok 3. Ocena alternatywnych metod

Sprawdź, czy dostępne są metody niewymagające pamięci, np.:

- passkeys,
- logowanie biometryczne,
- logowanie przy użyciu urządzenia zaufanego,
- jednorazowy link logujący,
- uwierzytelnianie oparte na kluczu sprzętowym.

### Krok 4. Ocena procesu odzyskiwania dostępu

Sprawdź, czy odzyskiwanie dostępu również nie wymaga odtwarzania informacji z pamięci.

---

## Kryteria oceny

### Spełnia

Proces uwierzytelniania nie wymaga od użytkownika:

- odtwarzania informacji z pamięci,
- przypominania sobie odpowiedzi,
- wykonywania testów poznawczych.

Użytkownik może uwierzytelnić się przy użyciu metod niewymagających pamięci.

### Częściowo spełnia

Dostępne są metody spełniające wymaganie, jednak część procesów nadal wymaga odtwarzania informacji z pamięci.

### Nie spełnia

Podstawowy proces uwierzytelniania wymaga od użytkownika odtwarzania informacji z pamięci.

### Nie dotyczy

Rozwiązanie nie wymaga uwierzytelniania użytkownika.

---

## Typowe niezgodności

- logowanie wyłącznie przy użyciu hasła pamiętanego przez użytkownika,
- pytania bezpieczeństwa wymagające przypomnienia sobie informacji,
- odzyskiwanie konta wymagające podania zapamiętanych odpowiedzi,
- systemy wykorzystujące tajne pytania lub frazy bezpieczeństwa,
- obowiązek pamiętania wielu niezależnych identyfikatorów.

---

## Dobre praktyki

- logowanie biometryczne,
- passkeys (kryptograficzny klucz, który ma na celu zastępować hasła),
- uwierzytelnianie FIDO2/WebAuthn,
- jednorazowe linki logujące,
- klucze sprzętowe,
- logowanie za pomocą urządzeń zaufanych,
- uwierzytelnianie federacyjne (SSO).

---

## Klasyfikacja problemów

### Istotne

- podstawowy proces logowania oparty wyłącznie na pamięci użytkownika.

### Umiarkowane

- część funkcji uwierzytelniania wymaga odtwarzania informacji z pamięci.

### Drobne

- pojedyncze dodatkowe kroki wymagające zapamiętania informacji, przy dostępnych alternatywach.

---

## Profil stosowania testu

| Profil                                       | Stosowanie  |
| -------------------------------------------- | ----------- |
| Okresowa ocena stanu zgodności — minimum     | Nie         |
| Okresowa ocena stanu zgodności — rozszerzona | Opcjonalnie |
| Ocena przed odbiorem rozwiązania             | Tak         |
| Audyt zgodności                              | Tak         |
| ACR-MIN                                      | Nie         |
| ACR-EXT                                      | Opcjonalnie |
| ACR-AUDIT                                    | Tak         |

---

## Powiązane testy

- Dostępne uwierzytelnianie (3.3.8)
- Formularz elektroniczny
- Identyfikacja błędów
- Sugestie korekty błędów
- Komunikaty o stanie

---

## Uwagi

Kryterium 3.3.9 jest rozszerzeniem kryterium 3.3.8 i należy do poziomu AAA. W praktyce oznacza przejście od modelu „użytkownik może skorzystać z pomocy przy odtwarzaniu informacji” do modelu „użytkownik nie musi niczego odtwarzać z pamięci”. Najłatwiejszym sposobem spełnienia tego kryterium jest zastosowanie nowoczesnych metod uwierzytelniania, takich jak passkeys, logowanie biometryczne lub klucze bezpieczeństwa. Kryterium ma szczególne znaczenie w usługach publicznych, bankowości elektronicznej oraz systemach wykorzystywanych regularnie przez szerokie grupy użytkowników.
