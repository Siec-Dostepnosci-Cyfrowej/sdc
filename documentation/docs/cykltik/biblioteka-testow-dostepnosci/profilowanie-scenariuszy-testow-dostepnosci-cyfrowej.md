---
id: profilowanie-scenariuszy-testow-dostepnosci-cyfrowej
title: Profilowanie scenariuszy testów dostępności cyfrowej
description: Zasady przypisywania scenariuszom z Biblioteki testów dostępności cyfrowej najniższego profilu stosowania oraz zestawienie profili przypisanych scenariuszom.
sidebar_label: Profilowanie scenariuszy testów
sidebar_position: 3
tags: [dostępność cyfrowa, biblioteka testów, scenariusze testów, profile stosowania, Profil „Fundamenty”, profil „Rozszerzenie”, profil „Dopełnienie”]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 23 października 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Dokument określa zasady przypisywania scenariuszom z Biblioteki testów dostępności cyfrowej najniższego profilu stosowania oraz wskazuje profile przypisane poszczególnym scenariuszom.

Profilowanie porządkuje scenariusze według typowego poziomu zaawansowania ich stosowania i wspiera odnajdywanie oraz dobieranie testów odpowiednich do potrzeb konkretnego badania.

Profil stosowania jest właściwością scenariusza. Nie określa zakresu konkretnej oceny ani nie zastępuje doboru testów odpowiednio do jej celu i zakresu.

## 1. Najniższy profil stosowania

Każdemu scenariuszowi w Bibliotece przypisuje się **najniższy profil stosowania**, wskazujący typowy poziom zaawansowania badania, od którego scenariusz jest z zasady uwzględniany przy doborze testów.

Stosowane są trzy profile:

- **Fundamenty**;
- **Rozszerzenie**;
- **Dopełnienie**.

Przypisanie scenariusza do profilu „Fundamenty” oznacza, że scenariusz jest odpowiedni również do badań o podstawowym zakresie i niskim progu rozpoczęcia testowania.

Przypisanie scenariusza do profilu „Rozszerzenie” oznacza, że jego zastosowanie wiąże się z reguły z szerszym zakresem badania, większą złożonością testu, potrzebą wykorzystania dodatkowych narzędzi lub wyższymi wymaganiami dotyczącymi kompetencji osoby wykonującej test.

Przypisanie scenariusza do profilu „Dopełnienie” oznacza, że jego zastosowanie wiąże się z reguły ze szczegółowym, specjalistycznym lub eksperckim badaniem albo bardziej złożoną interpretacją uzyskanych informacji.

Najniższy profil stosowania nie określa znaczenia badanego zagadnienia dla dostępności ani poziomu wymagania dostępności powiązanego ze scenariuszem.

Profil nie określa również, w jakim badaniu scenariusz może zostać zastosowany. Scenariusz z profilem „Rozszerzenie” lub dopełnienia może zostać wykorzystany w każdym badaniu, jeżeli jest potrzebny do osiągnięcia jego celu.

## 2. Kryteria przypisywania profilu stosowania

Przy przypisywaniu scenariuszowi najniższego profilu stosowania uwzględnia się łącznie właściwości scenariusza i warunki jego typowego zastosowania, w szczególności:

- zakres i złożoność badania;
- wymagane kompetencje osoby wykonującej test;
- potrzebne narzędzia, technologie i środowisko badania;
- zakres potrzebnego przygotowania;
- złożoność wykonania procedury badawczej;
- złożoność ustalania i interpretowania wyniku;
- przedmiot testu;
- powiązania z wymaganiami dostępności;
- powiązania z innymi scenariuszami.

Profil nie jest przypisywany wyłącznie na podstawie poziomu wymagania dostępności powiązanego z testem, znaczenia badanego zagadnienia dla użytkownika ani rodzaju przedmiotu testu.

Przypisanie profilu służy praktycznemu uporządkowaniu Biblioteki i ułatwieniu doboru scenariuszy. Nie stanowi oceny ważności poszczególnych testów.

## 3. Profil Fundamenty

Do profilu „Fundamenty” przypisuje się scenariusze umożliwiające wykonanie podstawowych testów dostępności przy zachowaniu możliwie niskiego progu ich zastosowania.

Profil „Fundamenty” obejmuje przede wszystkim scenariusze, które:

- dotyczą podstawowych i często badanych cech dostępności;
- mogą być wykonywane według jednoznacznie opisanych procedur;
- nie wymagają rozbudowanego przygotowania badania;
- wykorzystują powszechnie dostępne narzędzia i technologie;
- nie wymagają złożonej interpretacji wyniku;
- mogą być wykonywane przez osoby posiadające podstawowe kwalifikacje do prowadzenia testów dostępności.

Profil „Fundamenty” powinien obejmować wystarczający zestaw scenariuszy pozwalających rozpocząć systematyczne wykonywanie użytecznych testów bez tworzenia nadmiernego progu kompetencyjnego, organizacyjnego lub technicznego.

Testom obiektów i procesów użytkownika z zasady nie przypisuje się profilu „Fundamenty”, ponieważ ich wykonanie wymaga zwykle zbadania większej liczby cech lub powiązania wyników kilku czynności badawczych.

Profil „Fundamenty” może jednak zostać przypisany testowi obiektu, jeżeli test dotyczy pojedynczego lub wąskiego zakresu podstawowych właściwości obiektu, jest prosty do wykonania i nie wymaga jego kompleksowego badania.

Na tej podstawie do profilu „Fundamenty” przypisany jest test **„Skan dokumentu”**.

## 4. Profil Rozszerzenie

Do profilu „Rozszerzenie” przypisuje się scenariusze, których wykonanie wymaga szerszego zakresu badania, większych kompetencji, dodatkowego przygotowania albo bardziej złożonego sposobu wykonania lub interpretowania wyniku niż w przypadku scenariuszy profilu „Fundamenty”.

profil „Rozszerzenie” obejmuje w szczególności:

- testy cech dostępności wymagające bardziej złożonego sposobu badania lub interpretacji;
- testy wymagające szerszego zakresu badania;
- testy wykorzystujące dodatkowe narzędzia lub technologie;
- testy obiektów;
- testy procesów użytkownika;
- testy wykorzystujące wyniki innych scenariuszy do zbadania dostępności określonego obiektu lub procesu.

Do profilu „Rozszerzenie” przypisuje się z zasady testy obiektów i procesów użytkownika, jeżeli ich wykonanie nie wymaga specjalistycznego lub pogłębionego badania eksperckiego.

## 5. Profil Dopełnienie

Do profilu „Dopełnienie” przypisuje się scenariusze wymagające szczegółowego, specjalistycznego lub eksperckiego badania.

profil „Dopełnienie” obejmuje w szczególności scenariusze:

- wymagające wysokiego poziomu kompetencji;
- wykorzystujące specjalistyczne metody, narzędzia lub technologie;
- wymagające rozbudowanego przygotowania badania;
- wymagające złożonej interpretacji wyników;
- dotyczące szczególnie złożonych cech, obiektów lub procesów użytkownika;
- wymagające powiązania i interpretacji wyników wielu czynności lub testów.

Do profilu „Dopełnienie” mogą być również przypisywane scenariusze dotyczące wymagań lub dobrych praktyk wykraczających poza podstawowy zakres zgodności, jeżeli ich sposób wykonania odpowiada charakterystyce tego profilu.

Przypisanie scenariusza do profilu „Dopełnienie” nie oznacza, że test ma mniejsze znaczenie dla dostępności albo że dotyczy mniej istotnego wymagania. Informuje o typowym poziomie zaawansowania jego stosowania.

## 6. Profil stosowania a dobór testów

Najniższy profil stosowania jest jedną z właściwości scenariusza wykorzystywanych przy wyszukiwaniu i dobieraniu testów.

Nie oznacza obowiązku wykonania wszystkich scenariuszy przypisanych do danego profilu ani ograniczenia możliwości zastosowania scenariusza do badań prowadzonych na określonym poziomie zaawansowania.

Scenariusze są dobierane odpowiednio do potrzeby informacyjnej, celu i zakresu badania, badanego rozwiązania, posiadanej wiedzy o jego stanie oraz informacji, które mają zostać uzyskane, uzupełnione, zaktualizowane lub zweryfikowane.

Przy doborze scenariuszy uwzględnia się odpowiednio:

- mające zastosowanie wymagania dostępności;
- zakres funkcjonalny;
- zakres strukturalny;
- zakres użytkowy;
- zakres środowisk użytkowania;
- wcześniejsze obserwacje i wyniki ocen;
- charakter i zakres zmian rozwiązania;
- rozpoznane problemy.

Test wykonuje się, jeżeli ma zastosowanie do badanego rozwiązania i jest potrzebny do osiągnięcia celu badania.

Scenariusz może zostać zastosowany niezależnie od przypisanego mu profilu, jeżeli wynika to z celu lub zakresu badania albo potrzeby uzyskania określonych informacji.

Profilowanie wspiera dobór testów, ale go nie zastępuje.

## 7. Zmiana najniższego profilu stosowania

Najniższy profil stosowania scenariusza może być zmieniany wraz ze zmianami scenariusza, rozwojem Biblioteki oraz doświadczeniami wynikającymi ze stosowania testów.

Potrzeba zmiany może wynikać w szczególności z:

- zmiany zakresu lub sposobu wykonania scenariusza;
- zmiany wymaganych kompetencji;
- zmiany potrzebnych narzędzi, technologii lub środowiska badania;
- uproszczenia albo zwiększenia złożoności procedury badawczej;
- zmiany sposobu ustalania lub interpretowania wyniku;
- doświadczeń ze stosowania testu;
- zmian innych scenariuszy i powiązań między nimi;
- rozwoju metod badania dostępności;
- potrzeby zachowania spójnych kryteriów klasyfikowania scenariuszy.

Zmiana najniższego profilu stosowania jest dokumentowana jako zmiana klasyfikacji scenariusza.

## 8. Zestawienie scenariuszy i najniższych profili stosowania

Poniższe zestawienie wskazuje najniższy profil stosowania przypisany scenariuszom Biblioteki testów dostępności cyfrowej.

Przypisania przedstawiają aktualną klasyfikację scenariuszy i mogą być zmieniane zgodnie z zasadami określonymi w tym dokumencie.

### 8.1. Testy cech dostępności i procedury badawcze

#### 8.1.1. Fundamenty

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-019 | Nagłówki | fundamenty |
| testID-020 | Tytuł strony | fundamenty |
| testID-021 | Język strony | fundamenty |
| testID-023 | Dostęp z klawiatury | fundamenty |
| testID-024 | Obsługa klawiaturą | fundamenty |
| testID-025 | Pułapka klawiaturowa | fundamenty |
| testID-026 | Kolejność fokusu | fundamenty |
| testID-027 | Widoczny fokus | fundamenty |
| testID-031 | Punkty orientacyjne | fundamenty |
| testID-032 | Wystarczający kontrast | fundamenty |
| testID-033 | Tekst alternatywny | fundamenty |
| testID-034 | Łącza pomijania | fundamenty |
| testID-035 | Cel łącza (w kontekście) | fundamenty |
| testID-039 | Widoczne etykiety lub instrukcje | fundamenty |
| testID-041 | Oznaczenie pól wymaganych | fundamenty |
| testID-042 | Format danych | fundamenty |
| testID-043 | Sugestie korekty błędów | fundamenty |
| testID-044 | Identyfikacja błędów | fundamenty |
| testID-047 | Odczyt struktury przez czytnik ekranu | fundamenty |
| testID-048 | Odczyt formularza przez czytnik ekranu | fundamenty |
| testID-069 | Komunikaty o stanie | fundamenty |
| testID-070 | Dostępna nazwa elementu interaktywnego | fundamenty |
| testID-071 | Dostępna nazwa w widocznej etykiecie | fundamenty |
| testID-098 | Kolejność fokusu (aplikacja mobilna) | fundamenty |
| testID-099 | Etykiety elementów (aplikacja mobilna) | fundamenty |
| testID-100 | Orientacja ekranu (aplikacja mobilna) | fundamenty |
| testID-101 | Skalowanie tekstu (aplikacja mobilna) | fundamenty |
| testID-102 | Ustawienia dostępności systemu (aplikacja mobilna) | fundamenty |
| testID-103 | Komunikaty o stanie (aplikacja mobilna) | fundamenty |
| testID-137 | Język rozwiązania (aplikacja mobilna) | fundamenty |
| testID-143 | Nazwa ekranu aplikacji | fundamenty |

#### 8.1.2. Rozszerzenie

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-022 | Język części strony | rozszerzenie |
| testID-029 | Zmiana po uzyskaniu fokusu | rozszerzenie |
| testID-030 | Zmiana po wprowadzeniu danych | rozszerzenie |
| testID-037 | Zmiana rozmiaru tekstu | rozszerzenie |
| testID-038 | Dopasowanie do szerokości ekranu | rozszerzenie |
| testID-040 | Opisowe etykiety | rozszerzenie |
| testID-045 | Zapobieganie błędom | rozszerzenie |
| testID-046 | Etykiety powiązane programowo | rozszerzenie |
| testID-049 | Transkrypcja dla wideo bez dźwięku | rozszerzenie |
| testID-050 | Transkrypcja dla nagrań audio | rozszerzenie |
| testID-051 | Napisy rozszerzone | rozszerzenie |
| testID-052 | Audiodeskrypcja | rozszerzenie |
| testID-053 | Alternatywa pełnotekstowa dla multimediów | rozszerzenie |
| testID-054 | Ruch, miganie i błyski | rozszerzenie |
| testID-072 | Obrazy tekstu | rozszerzenie |
| testID-073 | Spójna identyfikacja | rozszerzenie |
| testID-074 | Spójna nawigacja | rozszerzenie |
| testID-075 | Użycie koloru | rozszerzenie |
| testID-076 | Wiele sposobów | rozszerzenie |
| testID-077 | Treść spod kursora lub fokusu | rozszerzenie |
| testID-078 | Kontrola odtwarzania dźwięku | rozszerzenie |
| testID-079 | Regulacja czasu | rozszerzenie |
| testID-080 | Gesty wskaźnika | rozszerzenie |
| testID-081 | Rezygnacja ze wskazania | rozszerzenie |
| testID-082 | Aktywowanie ruchem | rozszerzenie |
| testID-083 | Odstępy w tekście | rozszerzenie |
| testID-084 | Napisy rozszerzone na żywo | rozszerzenie |
| testID-087 | Fokus niezakryty | rozszerzenie |
| testID-088 | Przeciąganie | rozszerzenie |
| testID-089 | Rozmiar celu (minimum) | rozszerzenie |
| testID-091 | Spójna pomoc | rozszerzenie |
| testID-092 | Ponowne wpisy | rozszerzenie |
| testID-093 | Dostępne uwierzytelnianie | rozszerzenie |
| testID-096 | Obsługa klawiaturą zewnętrzną | rozszerzenie |
| testID-097 | Gesty systemowe i niestandardowe | rozszerzenie |
| testID-136 | Jednoznakowe skróty klawiaturowe | rozszerzenie |

#### 8.1.3. Dopełnienie

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-028 | Wygląd fokusu | dopełnienie |
| testID-036 | Cel łącza (samodzielnie) | dopełnienie |
| testID-085 | Nietypowe słowa | dopełnienie |
| testID-086 | Skróty | dopełnienie |
| testID-090 | Rozmiar celu dotyku (ulepszone) | dopełnienie |
| testID-094 | Dostępne uwierzytelnianie (ulepszone) | dopełnienie |

### 8.2. Testy obiektów

#### 8.2.1. Profil „Fundamenty”

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-104 | Skan dokumentu | fundamenty |

#### 8.2.2. Rozszerzenie

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-055 | Modalne okno dialogowe | rozszerzenie |
| testID-056 | Zakładki | rozszerzenie |
| testID-057 | Lista kart | rozszerzenie |
| testID-058 | Karuzela | rozszerzenie |
| testID-059 | Akordeon | rozszerzenie |
| testID-060 | Dokument PDF | rozszerzenie |
| testID-061 | Dokument DOCX (ODT) | rozszerzenie |
| testID-062 | Tabela danych | rozszerzenie |
| testID-063 | Wykres | rozszerzenie |
| testID-065 | Odtwarzacz multimedialny | rozszerzenie |
| testID-066 | Menu nawigacyjne | rozszerzenie |
| testID-067 | Wyszukiwanie w witrynie | rozszerzenie |
| testID-068 | Galeria obrazów | rozszerzenie |
| testID-095 | Obsługa czytnikiem ekranu | rozszerzenie |
| testID-107 | Formularz PDF | rozszerzenie |
| testID-109 | Arkusz kalkulacyjny (CSV/XLSX) | rozszerzenie |
| testID-110 | Deklaracja dostępności | rozszerzenie |
| testID-111 | Deklaracja dostępności — zgodność z warunkami technicznymi MC | rozszerzenie |
| testID-112 | BIP — Informacja publiczna | rozszerzenie |
| testID-113 | Lista aktualności | rozszerzenie |
| testID-114 | Artykuł / komunikat / wpis | rozszerzenie |
| testID-115 | Katalog usług | rozszerzenie |
| testID-116 | Karta usługi | rozszerzenie |
| testID-120 | Formularz | rozszerzenie |
| testID-122 | Mapa dojazdu / Lokalizacja | rozszerzenie |
| testID-123 | Strona kontaktowa | rozszerzenie |
| testID-124 | Informacja o podmiocie w PJM | rozszerzenie |
| testID-125 | Informacja o podmiocie w ETR | rozszerzenie |
| testID-126 | Polityka prywatności | rozszerzenie |
| testID-127 | Strona główna | rozszerzenie |
| testID-129 | Strona wielojęzyczna | rozszerzenie |
| testID-130 | Komponent Kalendarz | rozszerzenie |
| testID-131 | Strona Wydarzenie | rozszerzenie |
| testID-132 | Selektor języka | rozszerzenie |
| testID-135 | Informacje o dostępności | rozszerzenie |
| testID-138 | Ekran główny aplikacji | rozszerzenie |
| testID-139 | Lista funkcji aplikacji | rozszerzenie |
| testID-140 | Widok szczegółów w aplikacji | rozszerzenie |
| testID-141 | Ustawienia aplikacji | rozszerzenie |
| testID-142 | Powiadomienia aplikacji | rozszerzenie |

#### 8.2.3. Dopełnienie

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-064 | Wizualizacja danych | dopełnienie |
| testID-108 | Dokument podpisany elektronicznie | dopełnienie |

### 8.3. Testy procesów użytkownika

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-117 | Złożenie wniosku | rozszerzenie |
| testID-118 | Rejestracja / Logowanie | rozszerzenie |
| testID-119 | Rezerwacja terminu | rozszerzenie |
| testID-121 | Zgłoszenie problemu dostępności | rozszerzenie |
| testID-128 | Pliki do pobrania | rozszerzenie |
| testID-133 | Usługa lub procedura w ETR | dopełnienie |
| testID-134 | Obsługa użytkownika w PJM | dopełnienie |