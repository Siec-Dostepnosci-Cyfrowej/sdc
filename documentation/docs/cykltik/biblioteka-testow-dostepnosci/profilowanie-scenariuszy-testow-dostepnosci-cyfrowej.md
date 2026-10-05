---
id: profilowanie-scenariuszy-testow-dostepnosci-cyfrowej
title: Profilowanie scenariuszy testów dostępności cyfrowej
description: Zasady przypisywania scenariuszom z Biblioteki testów dostępności cyfrowej najniższego profilu stosowania oraz zestawienie profili przypisanych scenariuszom.
sidebar_label: Profilowanie scenariuszy testów
sidebar_position: 3
keywords: [dostępność cyfrowa, biblioteka testów, scenariusze testów, profile stosowania, profil wstępny, profil rozszerzony, profil pogłębiony]
tags: [dostępność cyfrowa, biblioteka testów, scenariusze testów, profile stosowania, profil wstępny, profil rozszerzony, profil pogłębiony]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 1 października 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Dokument określa zasady przypisywania scenariuszom z Biblioteki testów dostępności cyfrowej najniższego profilu stosowania oraz wskazuje profile przypisane poszczególnym scenariuszom.

Profilowanie porządkuje scenariusze według typowego poziomu zaawansowania ich stosowania i wspiera odnajdywanie oraz dobieranie testów odpowiednich do potrzeb konkretnego badania.

Profil stosowania jest właściwością scenariusza. Nie określa zakresu konkretnej oceny ani nie zastępuje doboru testów odpowiednio do jej celu i zakresu.

## 1. Najniższy profil stosowania

Każdemu scenariuszowi w Bibliotece przypisuje się **najniższy profil stosowania**, wskazujący typowy poziom zaawansowania badania, od którego scenariusz jest z zasady uwzględniany przy doborze testów.

Stosowane są trzy profile:

- **wstępny**;
- **rozszerzony**;
- **pogłębiony**.

Przypisanie scenariusza do profilu wstępnego oznacza, że scenariusz jest odpowiedni również do badań o podstawowym zakresie i niskim progu rozpoczęcia testowania.

Przypisanie scenariusza do profilu rozszerzonego oznacza, że jego zastosowanie wiąże się z reguły z szerszym zakresem badania, większą złożonością testu, potrzebą wykorzystania dodatkowych narzędzi lub wyższymi wymaganiami dotyczącymi kompetencji osoby wykonującej test.

Przypisanie scenariusza do profilu pogłębionego oznacza, że jego zastosowanie wiąże się z reguły ze szczegółowym, specjalistycznym lub eksperckim badaniem albo bardziej złożoną interpretacją uzyskanych informacji.

Najniższy profil stosowania nie określa znaczenia badanego zagadnienia dla dostępności ani poziomu wymagania dostępności powiązanego ze scenariuszem.

Profil nie określa również, w jakim badaniu scenariusz może zostać zastosowany. Scenariusz z profilem rozszerzonym lub pogłębionym może zostać wykorzystany w każdym badaniu, jeżeli jest potrzebny do osiągnięcia jego celu.

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

## 3. Profil wstępny

Do profilu wstępnego przypisuje się scenariusze umożliwiające wykonanie podstawowych testów dostępności przy zachowaniu możliwie niskiego progu ich zastosowania.

Profil wstępny obejmuje przede wszystkim scenariusze, które:

- dotyczą podstawowych i często badanych cech dostępności;
- mogą być wykonywane według jednoznacznie opisanych procedur;
- nie wymagają rozbudowanego przygotowania badania;
- wykorzystują powszechnie dostępne narzędzia i technologie;
- nie wymagają złożonej interpretacji wyniku;
- mogą być wykonywane przez osoby posiadające podstawowe kwalifikacje do prowadzenia testów dostępności.

Profil wstępny powinien obejmować wystarczający zestaw scenariuszy pozwalających rozpocząć systematyczne wykonywanie użytecznych testów bez tworzenia nadmiernego progu kompetencyjnego, organizacyjnego lub technicznego.

Testom obiektów i procesów użytkownika z zasady nie przypisuje się profilu wstępnego, ponieważ ich wykonanie wymaga zwykle zbadania większej liczby cech lub powiązania wyników kilku czynności badawczych.

Profil wstępny może jednak zostać przypisany testowi obiektu, jeżeli test dotyczy pojedynczego lub wąskiego zakresu podstawowych właściwości obiektu, jest prosty do wykonania i nie wymaga jego kompleksowego badania.

Na tej podstawie do profilu wstępnego przypisany jest test **„Skan dokumentu”**.

## 4. Profil rozszerzony

Do profilu rozszerzonego przypisuje się scenariusze, których wykonanie wymaga szerszego zakresu badania, większych kompetencji, dodatkowego przygotowania albo bardziej złożonego sposobu wykonania lub interpretowania wyniku niż w przypadku scenariuszy profilu wstępnego.

Profil rozszerzony obejmuje w szczególności:

- testy cech dostępności wymagające bardziej złożonego sposobu badania lub interpretacji;
- testy wymagające szerszego zakresu badania;
- testy wykorzystujące dodatkowe narzędzia lub technologie;
- testy obiektów;
- testy procesów użytkownika;
- testy wykorzystujące wyniki innych scenariuszy do zbadania dostępności określonego obiektu lub procesu.

Do profilu rozszerzonego przypisuje się z zasady testy obiektów i procesów użytkownika, jeżeli ich wykonanie nie wymaga specjalistycznego lub pogłębionego badania eksperckiego.

## 5. Profil pogłębiony

Do profilu pogłębionego przypisuje się scenariusze wymagające szczegółowego, specjalistycznego lub eksperckiego badania.

Profil pogłębiony obejmuje w szczególności scenariusze:

- wymagające wysokiego poziomu kompetencji;
- wykorzystujące specjalistyczne metody, narzędzia lub technologie;
- wymagające rozbudowanego przygotowania badania;
- wymagające złożonej interpretacji wyników;
- dotyczące szczególnie złożonych cech, obiektów lub procesów użytkownika;
- wymagające powiązania i interpretacji wyników wielu czynności lub testów.

Do profilu pogłębionego mogą być również przypisywane scenariusze dotyczące wymagań lub dobrych praktyk wykraczających poza podstawowy zakres zgodności, jeżeli ich sposób wykonania odpowiada charakterystyce tego profilu.

Przypisanie scenariusza do profilu pogłębionego nie oznacza, że test ma mniejsze znaczenie dla dostępności albo że dotyczy mniej istotnego wymagania. Informuje o typowym poziomie zaawansowania jego stosowania.

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

#### 8.1.1. Profil wstępny

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-019 | Nagłówki | wstępny |
| testID-020 | Tytuł strony | wstępny |
| testID-021 | Język strony | wstępny |
| testID-023 | Dostęp z klawiatury | wstępny |
| testID-024 | Obsługa klawiaturą | wstępny |
| testID-025 | Pułapka klawiaturowa | wstępny |
| testID-026 | Kolejność fokusu | wstępny |
| testID-027 | Widoczny fokus | wstępny |
| testID-031 | Punkty orientacyjne | wstępny |
| testID-032 | Wystarczający kontrast | wstępny |
| testID-033 | Tekst alternatywny | wstępny |
| testID-034 | Łącza pomijania | wstępny |
| testID-035 | Cel łącza (w kontekście) | wstępny |
| testID-039 | Widoczne etykiety lub instrukcje | wstępny |
| testID-041 | Oznaczenie pól wymaganych | wstępny |
| testID-042 | Format danych | wstępny |
| testID-043 | Sugestie korekty błędów | wstępny |
| testID-044 | Identyfikacja błędów | wstępny |
| testID-047 | Odczyt struktury przez czytnik ekranu | wstępny |
| testID-048 | Odczyt formularza przez czytnik ekranu | wstępny |
| testID-069 | Komunikaty o stanie | wstępny |
| testID-070 | Dostępna nazwa elementu interaktywnego | wstępny |
| testID-071 | Dostępna nazwa w widocznej etykiecie | wstępny |
| testID-098 | Kolejność fokusu (aplikacja mobilna) | wstępny |
| testID-099 | Etykiety elementów (aplikacja mobilna) | wstępny |
| testID-100 | Orientacja ekranu (aplikacja mobilna) | wstępny |
| testID-101 | Skalowanie tekstu (aplikacja mobilna) | wstępny |
| testID-102 | Ustawienia dostępności systemu (aplikacja mobilna) | wstępny |
| testID-103 | Komunikaty o stanie (aplikacja mobilna) | wstępny |
| testID-137 | Język rozwiązania (aplikacja mobilna) | wstępny |
| testID-143 | Nazwa ekranu aplikacji | wstępny |

#### 8.1.2. Profil rozszerzony

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-022 | Język części strony | rozszerzony |
| testID-029 | Zmiana po uzyskaniu fokusu | rozszerzony |
| testID-030 | Zmiana po wprowadzeniu danych | rozszerzony |
| testID-037 | Zmiana rozmiaru tekstu | rozszerzony |
| testID-038 | Dopasowanie do szerokości ekranu | rozszerzony |
| testID-040 | Opisowe etykiety | rozszerzony |
| testID-045 | Zapobieganie błędom | rozszerzony |
| testID-046 | Etykiety powiązane programowo | rozszerzony |
| testID-049 | Transkrypcja dla wideo bez dźwięku | rozszerzony |
| testID-050 | Transkrypcja dla nagrań audio | rozszerzony |
| testID-051 | Napisy rozszerzone | rozszerzony |
| testID-052 | Audiodeskrypcja | rozszerzony |
| testID-053 | Alternatywa pełnotekstowa dla multimediów | rozszerzony |
| testID-054 | Ruch, miganie i błyski | rozszerzony |
| testID-072 | Obrazy tekstu | rozszerzony |
| testID-073 | Spójna identyfikacja | rozszerzony |
| testID-074 | Spójna nawigacja | rozszerzony |
| testID-075 | Użycie koloru | rozszerzony |
| testID-076 | Wiele sposobów | rozszerzony |
| testID-077 | Treść spod kursora lub fokusu | rozszerzony |
| testID-078 | Kontrola odtwarzania dźwięku | rozszerzony |
| testID-079 | Regulacja czasu | rozszerzony |
| testID-080 | Gesty wskaźnika | rozszerzony |
| testID-081 | Rezygnacja ze wskazania | rozszerzony |
| testID-082 | Aktywowanie ruchem | rozszerzony |
| testID-083 | Odstępy w tekście | rozszerzony |
| testID-084 | Napisy rozszerzone na żywo | rozszerzony |
| testID-087 | Fokus niezakryty | rozszerzony |
| testID-088 | Przeciąganie | rozszerzony |
| testID-089 | Rozmiar celu (minimum) | rozszerzony |
| testID-091 | Spójna pomoc | rozszerzony |
| testID-092 | Ponowne wpisy | rozszerzony |
| testID-093 | Dostępne uwierzytelnianie | rozszerzony |
| testID-096 | Obsługa klawiaturą zewnętrzną | rozszerzony |
| testID-097 | Gesty systemowe i niestandardowe | rozszerzony |
| testID-136 | Jednoznakowe skróty klawiaturowe | rozszerzony |

#### 8.1.3. Profil pogłębiony

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-028 | Wygląd fokusu | pogłębiony |
| testID-036 | Cel łącza (samodzielnie) | pogłębiony |
| testID-085 | Nietypowe słowa | pogłębiony |
| testID-086 | Skróty | pogłębiony |
| testID-090 | Rozmiar celu dotyku (ulepszone) | pogłębiony |
| testID-094 | Dostępne uwierzytelnianie (ulepszone) | pogłębiony |

### 8.2. Testy obiektów

#### 8.2.1. Profil wstępny

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-104 | Skan dokumentu | wstępny |

#### 8.2.2. Profil rozszerzony

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-055 | Modalne okno dialogowe | rozszerzony |
| testID-056 | Zakładki | rozszerzony |
| testID-057 | Lista kart | rozszerzony |
| testID-058 | Karuzela | rozszerzony |
| testID-059 | Akordeon | rozszerzony |
| testID-060 | Dokument PDF | rozszerzony |
| testID-061 | Dokument DOCX (ODT) | rozszerzony |
| testID-062 | Tabela danych | rozszerzony |
| testID-063 | Wykres | rozszerzony |
| testID-065 | Odtwarzacz multimedialny | rozszerzony |
| testID-066 | Menu nawigacyjne | rozszerzony |
| testID-067 | Wyszukiwanie w witrynie | rozszerzony |
| testID-068 | Galeria obrazów | rozszerzony |
| testID-095 | Obsługa czytnikiem ekranu | rozszerzony |
| testID-107 | Formularz PDF | rozszerzony |
| testID-109 | Arkusz kalkulacyjny (CSV/XLSX) | rozszerzony |
| testID-110 | Deklaracja dostępności | rozszerzony |
| testID-111 | Deklaracja dostępności — zgodność z warunkami technicznymi MC | rozszerzony |
| testID-112 | BIP — Informacja publiczna | rozszerzony |
| testID-113 | Lista aktualności | rozszerzony |
| testID-114 | Artykuł / komunikat / wpis | rozszerzony |
| testID-115 | Katalog usług | rozszerzony |
| testID-116 | Karta usługi | rozszerzony |
| testID-120 | Formularz | rozszerzony |
| testID-122 | Mapa dojazdu / Lokalizacja | rozszerzony |
| testID-123 | Strona kontaktowa | rozszerzony |
| testID-124 | Informacja o podmiocie w PJM | rozszerzony |
| testID-125 | Informacja o podmiocie w ETR | rozszerzony |
| testID-126 | Polityka prywatności | rozszerzony |
| testID-127 | Strona główna | rozszerzony |
| testID-129 | Strona wielojęzyczna | rozszerzony |
| testID-130 | Komponent Kalendarz | rozszerzony |
| testID-131 | Strona Wydarzenie | rozszerzony |
| testID-132 | Selektor języka | rozszerzony |
| testID-135 | Informacje o dostępności | rozszerzony |
| testID-138 | Ekran główny aplikacji | rozszerzony |
| testID-139 | Lista funkcji aplikacji | rozszerzony |
| testID-140 | Widok szczegółów w aplikacji | rozszerzony |
| testID-141 | Ustawienia aplikacji | rozszerzony |
| testID-142 | Powiadomienia aplikacji | rozszerzony |

#### 8.2.3. Profil pogłębiony

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-064 | Wizualizacja danych | pogłębiony |
| testID-108 | Dokument podpisany elektronicznie | pogłębiony |

### 8.3. Testy procesów użytkownika

| ID testu | Nazwa testu | Najniższy profil stosowania |
| --- | --- | --- |
| testID-117 | Złożenie wniosku | rozszerzony |
| testID-118 | Rejestracja / Logowanie | rozszerzony |
| testID-119 | Rezerwacja terminu | rozszerzony |
| testID-121 | Zgłoszenie problemu dostępności | rozszerzony |
| testID-128 | Pliki do pobrania | rozszerzony |
| testID-133 | Usługa lub procedura w ETR | pogłębiony |
| testID-134 | Obsługa użytkownika w PJM | pogłębiony |