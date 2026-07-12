---
id: test-kolejnosc-fokusu-aplikacja-mobilna
title: Kolejność fokusu (aplikacja mobilna)
sidebar_label: Kolejność fokusu (aplikacja mobilna)
sidebar_position: 98
description: Scenariusz testu sprawdzającego, czy podczas nawigacji przy użyciu technologii wspomagających, klawiatury zewnętrznej lub funkcji dostępności systemu mobilnego fokus przemieszcza się w logicznej i przewidywalnej kolejności.
keywords: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil rozszerzony,kolejność fokusu,kryterium sukcesu]
tags: [ocena zgodności,aplikacja mobilna,cecha dostępności,profil rozszerzony,kolejność fokusu,kryterium sukcesu]
opracowanie: Stefan Wajda
data_zgloszenia: 12 czerwca 2026 r.
ostatnia_aktualizacja: 12 czerwca 2026 r.
wersja_robocza: true
---

## 1. Identyfikator testu

**testID-098**

## 2. Nazwa testu

**Kolejność fokusu (aplikacja mobilna)**

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil rozszerzony**

## 4. Opis testu

Test sprawdza, czy podczas nawigacji przy użyciu technologii wspomagających, klawiatury zewnętrznej lub funkcji dostępności systemu mobilnego fokus przemieszcza się w logicznej i przewidywalnej kolejności, zgodnej ze strukturą interfejsu oraz przebiegiem zadania użytkownika.

### Co oznacza „fokus”?

Fokus to element interfejsu, który jest aktualnie wybrany przez użytkownika i gotowy do interakcji.

W aplikacjach mobilnych fokus może być przemieszczany między innymi przy użyciu:

- TalkBack,
- VoiceOver,
- klawiatury zewnętrznej,
- przełączników,
- innych technologii wspomagających.

Element posiadający fokus jest odczytywany przez czytnik ekranu lub może zostać aktywowany przez użytkownika.

### Co oznacza „kolejność fokusu”?

Kolejność fokusu określa, w jakiej kolejności użytkownik przechodzi pomiędzy elementami interfejsu.

Prawidłowa kolejność:

- odpowiada strukturze ekranu,
- jest zgodna z logiką wykonywanego zadania,
- pozwala zrozumieć relacje pomiędzy elementami,
- nie powoduje utraty orientacji.

## 5. Mapowanie do standardów

### WCAG 2.1 / 2.2

- 1.3.2 Znacząca kolejność,
- 2.4.3 Kolejność fokusu,
- 2.4.11 Fokus niezakryty (minimum),
- 4.1.2 Nazwa, rola, wartość.

### EN 301 549

- 11.2.4.3 Focus Order,
- 11.2.4.11 Focus Not Obscured (Minimum),
- 11.5.2.9 Hierarchical Relationships,
- 11.4.1.2 Name, Role, Value.

## 6. Zastosowanie do treści

Test stosuje się do:

- aplikacji Android,
- aplikacji iOS,
- ekranów głównych,
- formularzy,
- menu,
- okien dialogowych,
- list wyników,
- ekranów ustawień,
- procesów wieloetapowych,
- komponentów niestandardowych.

## 7. Oczekiwany wynik

Fokus przemieszcza się w logicznej i przewidywalnej kolejności.

Użytkownik może:

- zrozumieć strukturę ekranu,
- przewidzieć kolejny element,
- zachować orientację podczas wykonywania zadania,
- skutecznie przejść przez cały proces.

## 8. Dlaczego to jest ważne

Użytkownicy korzystający z:

- TalkBack,
- VoiceOver,
- klawiatury zewnętrznej,
- przełączników,
- sterowania głosowego,

poznają aplikację w kolejności wyznaczonej przez fokus.

Jeżeli kolejność fokusu jest nieprawidłowa, użytkownik może:

- tracić orientację,
- pomijać ważne informacje,
- błędnie rozumieć strukturę interfejsu,
- mieć trudności z wykonaniem zadania.

Problem szczególnie silnie wpływa na osoby niewidome, które nie mogą wykorzystać wizualnego układu ekranu do zrozumienia organizacji treści.

## 9. Kogo to dotyczy

Szczególnie:

- osób niewidomych,
- osób słabowidzących korzystających z czytników ekranu,
- użytkowników monitorów brajlowskich,
- osób korzystających z klawiatur zewnętrznych,
- użytkowników przełączników,
- osób korzystających z technologii wspomagających.

## 10. Sposób testowania

### Krok 1. Uruchomienie technologii wspomagającej

Włącz:

- TalkBack (Android)

lub

- VoiceOver (iOS).

Opcjonalnie podłącz klawiaturę zewnętrzną.

### Krok 2. Nawigacja po ekranie

Przemieszczaj fokus pomiędzy elementami przy użyciu standardowych gestów czytnika ekranu lub klawisza Tab.

### Krok 3. Ocena logiczności kolejności

Sprawdź, czy kolejność fokusu odpowiada:

- kolejności wizualnej,
- kolejności odczytu treści,
- logice wykonywanego zadania.

### Krok 4. Ocena grup elementów

Sprawdź, czy fokus prawidłowo przechodzi przez:

- grupy pól formularzy,
- elementy menu,
- listy wyników,
- zakładki,
- przyciski sterujące.

### Krok 5. Ocena zmian ekranów

Sprawdź, czy po:

- otwarciu nowego ekranu,
- otwarciu okna dialogowego,
- zamknięciu okna dialogowego,
- przejściu do kolejnego kroku procesu,

fokus trafia do logicznego miejsca.

### Krok 6. Wykonanie zadania

Przeprowadź wybrane procesy użytkownika i oceń, czy można je wykonać bez utraty orientacji.

## 11. Kryteria oceny wyniku

### Spełnione

Fokus przemieszcza się w logicznej i przewidywalnej kolejności zgodnej ze strukturą interfejsu i przebiegiem zadania użytkownika.

### Częściowo spełnione

Występują pojedyncze problemy z kolejnością fokusu, które utrudniają korzystanie z aplikacji, ale nie uniemożliwiają wykonania zadania.

### Niespełnione

Kolejność fokusu jest nielogiczna lub chaotyczna i utrudnia albo uniemożliwia korzystanie z aplikacji.

### Nie dotyczy

Nie stosuje się.

Każda aplikacja mobilna posiada kolejność fokusu i może zostać oceniona.

## 12. Typowe niezgodności

- fokus przeskakuje pomiędzy odległymi elementami,
- kolejność odczytu nie odpowiada kolejności wizualnej,
- przyciski odczytywane przed treścią, której dotyczą,
- pola formularza odczytywane w niewłaściwej kolejności,
- fokus przechodzi do ukrytych elementów,
- po zamknięciu okna dialogowego fokus trafia w losowe miejsce,
- po zmianie ekranu fokus ustawiany jest na nieistotnym elemencie.

## 13. Dobre praktyki

- stosowanie natywnych komponentów systemowych,
- zachowanie zgodności kolejności logicznej i wizualnej,
- grupowanie powiązanych elementów,
- testowanie aplikacji z TalkBack i VoiceOver,
- kontrolowanie miejsca ustawienia fokusu po zmianach stanu interfejsu,
- testowanie rzeczywistych procesów użytkownika.

## 14. Wynik testu

- Spełnione
- Częściowo spełnione
- Niespełnione
- Nie dotyczy

## 15. Ustalenia

Miejsce na opis wyników testu, ocenę kolejności fokusu oraz wskazanie stwierdzonych problemów.

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> W aplikacji występują problemy z kolejnością fokusu podczas korzystania z technologii wspomagających. Fokus przemieszcza się w sposób niezgodny ze strukturą interfejsu lub przebiegiem zadania użytkownika, co może powodować utratę orientacji i utrudniać korzystanie z aplikacji osobom niewidomym oraz użytkownikom technologii wspomagających.

## 17. Rekomendacje naprawcze

- uporządkować kolejność fokusu zgodnie ze strukturą interfejsu,
- zapewnić zgodność kolejności logicznej i wizualnej,
- poprawić obsługę okien dialogowych oraz zmian ekranów,
- grupować powiązane elementy,
- testować aplikację z TalkBack i VoiceOver,
- przeprowadzić testy z użytkownikami technologii wspomagających.

## 18. Powiązane testy

- testID-095 Obsługa czytnikiem ekranu (aplikacja mobilna)
- testID-096 Obsługa klawiaturą zewnętrzną (aplikacja mobilna)
- testID-087 Fokus niezakryty
- testID-027 Widoczność fokusu
- testID-026 Kolejność fokusu
- testID-069 Komunikaty o stanie
- testID-070 Dostępna nazwa elementu interaktywnego
- testID-120 Formularz
