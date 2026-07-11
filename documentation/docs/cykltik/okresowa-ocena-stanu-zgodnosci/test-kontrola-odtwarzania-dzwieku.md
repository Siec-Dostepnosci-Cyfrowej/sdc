---
id: test-kontrola-odtwarzania-dzwieku
title: Karta testu — Kontrola odtwarzania dźwięku
sidebar_label: Kontrola odtwarzania dźwięku
sidebar_position: 78
description: Scenariusz testu sprawdzającego, czy użytkownik może zatrzymać, wyciszyć lub regulować głośność dźwięku odtwarzanego automatycznie po załadowaniu strony lub ekranu.
keywords: [dźwięk, audio, autoodtwarzanie, regulacja głośności, WCAG 1.4.2, dostępność cyfrowa]
tags: [test dostępności, multimedia, audio, WCAG, okresowa ocena zgodności]
opracowanie: Sieć Dostępności Cyfrowej
data_zgloszenia: 13 czerwca 2026 r.
ostatnia_aktualizacja: 13 czerwca 2026 r.
wersja_robocza: true
---


## 1. Identyfikator testu

**testID-078**

---

## 2. Nazwa testu

**Kontrola odtwarzania dźwięku**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test sprawdza, czy użytkownik może zatrzymać, wyciszyć lub regulować głośność dźwięku odtwarzanego automatycznie po załadowaniu strony, aplikacji lub ekranu. Test dotyczy sytuacji, w których dźwięk odtwarzany jest dłużej niż 3 sekundy bez wcześniejszego działania użytkownika.

---

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- **1.4.2 Kontrola odtwarzania dźwięku (A)**

### Powiązane wymagania

- multimedia,
- odtwarzacze audio,
- komunikaty głosowe,
- materiały promocyjne i informacyjne.

---

## 6. Zastosowanie do treści

Test stosuje się do:

- stron internetowych,
- aplikacji internetowych,
- aplikacji mobilnych,
- odtwarzaczy audio,
- materiałów multimedialnych,
- komunikatów głosowych,
- ekranów startowych.

Test nie dotyczy dźwięków odtwarzanych wyłącznie po świadomym uruchomieniu przez użytkownika.

---

## 7. Oczekiwany wynik

Jeżeli dźwięk uruchamia się automatycznie i trwa dłużej niż 3 sekundy, użytkownik może:

- zatrzymać jego odtwarzanie,
- wyciszyć dźwięk,
- niezależnie regulować jego głośność.

---

## 8. Dlaczego to jest ważne

Automatycznie odtwarzany dźwięk może:

- zakłócać pracę czytników ekranu,
- utrudniać koncentrację,
- powodować dezorientację użytkownika,
- utrudniać korzystanie z urządzeń w miejscach publicznych.

Użytkownik powinien mieć możliwość natychmiastowego przejęcia kontroli nad odtwarzanym dźwiękiem.

---

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych korzystających z czytników ekranu,
- osób słabowidzących korzystających z technologii wspomagających,
- osób z nadwrażliwością sensoryczną,
- osób z trudnościami koncentracji,
- użytkowników urządzeń mobilnych.

---

## 10. Sposób testowania

### Krok 1. Identyfikacja automatycznie odtwarzanego dźwięku

Otwórz stronę, ekran lub aplikację.

Sprawdź, czy:

- dźwięk uruchamia się automatycznie,
- nie jest wymagane wcześniejsze działanie użytkownika.

---

### Krok 2. Czas trwania

Sprawdź, czy automatycznie odtwarzany dźwięk trwa:

- dłużej niż 3 sekundy.

Jeżeli trwa krócej, kryterium jest spełnione.

---

### Krok 3. Możliwość zatrzymania

Jeżeli dźwięk trwa dłużej niż 3 sekundy:

sprawdź, czy użytkownik może go zatrzymać.

---

### Krok 4. Możliwość wyciszenia

Sprawdź, czy użytkownik może wyciszyć dźwięk bez konieczności korzystania z ustawień systemu operacyjnego.

---

### Krok 5. Regulacja głośności

Sprawdź, czy użytkownik może regulować głośność odtwarzanego dźwięku niezależnie od ogólnej głośności urządzenia.

---

### Krok 6. Dostępność mechanizmów sterowania

Sprawdź, czy przyciski:

- odtwarzania,
- pauzy,
- zatrzymania,
- wyciszenia,
- regulacji głośności

są dostępne:

- z klawiatury,
- dla czytników ekranu,
- na urządzeniach mobilnych.

---

### Krok 7. Czytnik ekranu

Jeżeli to możliwe:

sprawdź, czy automatycznie odtwarzany dźwięk nie zakłóca działania czytnika ekranu i nie uniemożliwia korzystania z interfejsu.

---

## 11. Kryteria oceny wyniku

### Spełnione

Automatycznie odtwarzany dźwięk nie występuje lub użytkownik może go zatrzymać, wyciszyć albo regulować jego głośność.

### Częściowo spełnione

Mechanizmy kontroli istnieją, ale są trudne do odnalezienia lub obsługi.

### Niespełnione

Dźwięk odtwarza się automatycznie przez ponad 3 sekundy i użytkownik nie może go zatrzymać, wyciszyć ani regulować jego głośności.

---

## 12. Typowe niezgodności

- automatyczne uruchamianie materiałów audio,
- automatyczne odtwarzanie filmu z dźwiękiem,
- brak przycisku zatrzymania,
- brak przycisku wyciszenia,
- brak regulacji głośności,
- niedostępne elementy sterujące,
- odtwarzanie komunikatów głosowych bez możliwości ich zatrzymania.

---

## 13. Dobre praktyki

- nie uruchamiać dźwięku automatycznie,
- domyślnie wyłączać autoodtwarzanie,
- zapewnić łatwo dostępne przyciski sterowania,
- umożliwić wyciszenie jednym działaniem,
- zapewnić dostępność sterowania z klawiatury,
- umożliwić niezależną regulację głośności.

---

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis wyników testu.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Po otwarciu strony automatycznie uruchamiany jest dźwięk trwający dłużej niż 3 sekundy. Użytkownik nie ma możliwości jego natychmiastowego zatrzymania, wyciszenia lub regulacji głośności. Może to utrudniać korzystanie z serwisu, szczególnie osobom korzystającym z czytników ekranu lub technologii wspomagających.

---

## 17. Rekomendacje naprawcze

- wyłączyć automatyczne odtwarzanie dźwięku,
- zapewnić przyciski zatrzymania i wyciszenia,
- umożliwić niezależną regulację głośności,
- poprawić dostępność elementów sterujących,
- zweryfikować działanie z czytnikami ekranu.

---

## 18. Powiązane testy

- testID-049 Transkrypcja dla wideo bez dźwięku
- testID-050 Transkrypcja dla nagrań audio
- testID-051 Napisy rozszerzone
- testID-052 Audiodeskrypcja
- testID-053 Alternatywa pełnotekstowa dla multimediów
- testID-065 Odtwarzacz multimedialny
- testID-084 Napisy rozszerzone na żywo

---