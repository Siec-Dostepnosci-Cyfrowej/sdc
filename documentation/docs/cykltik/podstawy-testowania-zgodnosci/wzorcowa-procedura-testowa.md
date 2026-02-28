---
id: wzorcowa-procedura-testowa
title:  Wzorcowa procedura testowa (KS 1.3.1 Informacje i relacje)
sidebar_label: Wzorcowa procedura testowa
sidebar_position: 5
description: Przykład procedury testowej  
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 27 lutego 2026 r.
ostatnia_aktualizacja: 27 lutego 2026 r.
wersja_robocza: true

---

**Załącznik C (przykład zastosowania Poziomu A)**


## C.1 Status i cel załącznika

Niniejszy załącznik stanowi normatywny przykład zastosowania rozdziału 7 („Procedury testowe”) w odniesieniu do kryterium sukcesu WCAG 2.x 1.3.1 „Informacje i relacje”, zmapowanego do odpowiednich punktów EN 301 549.

Celem załącznika jest:

* zaprezentowanie kompletnej procedury testowej w formacie obowiązującym w niniejszej Podstawie,
* zilustrowanie różnicy między Poziomem A (ocena rdzeniowa) a Poziomem B (ocena reprezentatywna),
* pokazanie relacji między wynikiem testu a wpisem do rejestru niezgodności.

---

## C.2 Kontekst normatywny

**EN 301 549 (moduł Web 9.x)** – wymagania odwołujące się do WCAG 2.x 1.3.1.

**WCAG 2.x – 1.3.1 Informacje i relacje**

Wymaganie: Informacje, struktura i relacje przekazywane wizualnie są możliwe do określenia programowo lub dostępne w tekście.

Typ produktu (przykład): Strona internetowa / aplikacja webowa.

---

## C.3 Procedura testowa

### 1. Identyfikator testu

PT-9.1.3.1-01

### 2. Nazwa testu

Programowa dostępność informacji i relacji strukturalnych.

### 3. Odniesienie normatywne

* EN 301 549: punkt odpowiadający WCAG 1.3.1 (moduł Web 9.x)
* WCAG 2.x: 1.3.1 Informacje i relacje

### 4. Zakres zastosowania

Test ma zastosowanie w przypadku występowania w produkcie:

* nagłówków,
* list,
* tabel danych,
* grup formularzy,
* etykiet pól,
* relacji wizualnych wynikających z układu (np. kolumny, sekcje),
* innych struktur przekazujących znaczenie poprzez układ lub wyróżnienie.

### 5. Poziom głębokości

* Poziom A – obowiązkowy w Profilu Fundamentów.
* Poziom B – obowiązkowy w ocenie reprezentatywnej.
* Poziom C – obowiązkowy w audycie pełnym.

### 6. Tryb zastosowania

* Profil 1 – Fundamenty (Poziom A)
* Profil 3 – Roczny (Poziom B)
* Profil 4 – Audyt pełny (Poziom C)

### 7. Kroki testowe

#### 7.1 Test manualny

1. Zidentyfikuj elementy, których znaczenie wynika z układu lub wyróżnienia (nagłówki, listy, sekcje, kolumny, tabele, grupy pól).
2. Sprawdź w kodzie źródłowym lub przy użyciu narzędzia inspekcyjnego, czy struktura jest odwzorowana semantycznie (np. elementy nagłówków, list, tabel, powiązania etykieta–pole).
3. Zweryfikuj, czy relacje wizualne (np. etykieta i pole formularza) są możliwe do określenia programowo.

#### 7.2 Test z technologią asystującą

1. Uruchom czytnik ekranu.
2. Nawiguj po strukturze nagłówków.
3. Sprawdź, czy lista jest odczytywana jako lista wraz z liczbą elementów.
4. Sprawdź, czy relacje etykieta–pole są poprawnie komunikowane.
5. Zweryfikuj logiczną kolejność odczytu treści.

#### 7.3 Weryfikacja wspomagana narzędziami (opcjonalnie)

* Użyj narzędzia do analizy dostępności w celu wykrycia brakujących struktur semantycznych.
* Zweryfikuj ręcznie poprawność wskazań.

### 8. Oczekiwany rezultat

Produkt spełnia wymaganie, jeżeli:

* wszystkie informacje i relacje przekazywane wizualnie są możliwe do określenia programowo,
* struktura treści jest poprawnie odwzorowana semantycznie,
* użytkownik technologii asystującej może zidentyfikować strukturę i relacje w sposób równoważny użytkownikowi widzącemu.

### 9. Kryteria oceny

**PASS** – brak utraconych relacji strukturalnych; struktura poprawnie komunikowana przez AT.

**FAIL** – co najmniej jedna istotna relacja wizualna nie jest możliwa do określenia programowo.

**N/A** – brak struktur przekazujących relacje (wymaga uzasadnienia).

**CANNOT TELL** – brak możliwości weryfikacji z powodu ograniczeń środowiska (wymaga uzasadnienia).

### 10. Wymagane dowody

* identyfikacja strony / widoku,
* opis testowanego elementu,
* fragment kodu lub opis struktury,
* zapis obserwacji z czytnika ekranu (opisowy lub w formie logu),
* wynik testu.

### 11. Klasyfikacja wagi (przykład)

* Krytyczna – brak struktury uniemożliwia nawigację (np. brak nagłówków w rozbudowanym dokumencie).
* Poważna – brak relacji etykieta–pole w formularzu kluczowym.
* Umiarkowana – niepełne oznaczenie listy.
* Niska – drobne niespójności strukturalne bez wpływu na wykonanie zadania.

### 12. Metadane

* Data testu
* Tester
* Środowisko (OS, przeglądarka, wersja AT)
* Poziom pewności oceny

---

## C.4 Różnica zastosowania w Poziomie A i B

### Poziom A

* Test obejmuje główny scenariusz i kluczowe struktury.
* Koncentracja na barierach systemowych.

### Poziom B

* Test obejmuje wszystkie typy widoków.
* Analiza wszystkich powtarzalnych komponentów.
* Rozszerzenie próbki w przypadku wykrycia problemów systemowych.

---

## C.5 Przykładowy wpis do rejestru niezgodności

Identyfikator: NZ-2025-001

Test: PT-9.1.3.1-01

Opis: Brak programowego powiązania etykiety z polem formularza „Adres e-mail”.

Wpływ: Użytkownik czytnika ekranu nie otrzymuje informacji o przeznaczeniu pola.

Waga: Poważna

Plan naprawczy: Dodanie powiązania etykieta–pole zgodnie z dokumentacją komponentu.

Status: W trakcie realizacji

---

## C.6 Pytania wspierające ocenę (nienormatywne)

Poniższe pytania mają charakter pomocniczy i wspierają identyfikację potencjalnych niezgodności. Odpowiedzi „nie” mogą wskazywać na konieczność pogłębionej analizy w ramach kryteriów PASS/FAIL określonych w pkt 9. Ostateczna ocena zgodności wynika wyłącznie z wymagań normatywnych.

### Struktura treści

* Czy elementy pełniące funkcję tytułów sekcji są programowo oznaczone jako nagłówki?
* Czy hierarchia nagłówków odzwierciedla logiczną strukturę treści?
* Czy wizualnie wyodrębnione sekcje treści są programowo zdefiniowane jako odrębne struktury (np. sekcje, regiony, grupy)?
* Czy listy przekazujące relacje typu: kolejność, grupowanie lub zestawienie elementów są programowo oznaczone jako listy właściwego typu?
* Czy cytaty oraz inne wyodrębnione fragmenty treści są programowo oznaczone zgodnie z ich rolą?

### Tabele danych

* Czy tabele danych posiadają programowo określone nagłówki kolumn i/lub wierszy?
* Czy relacje między komórkami danych a odpowiadającymi im nagłówkami są programowo określone?
* Czy złożone tabele (np. z wielopoziomowymi nagłówkami) posiadają jednoznacznie określone relacje strukturalne?

### Regiony i struktura strony

* Czy kluczowe obszary strony (np. nagłówek globalny, nawigacja, treść główna, treść uzupełniająca, stopka) są programowo zdefiniowane jako odrębne regiony umożliwiające ich identyfikację przez technologie asystujące?
* Czy użytkownik technologii asystującej może zidentyfikować i nawigować między głównymi obszarami strony?

### Formularze i dane wejściowe

* Czy każde pole formularza posiada programowo powiązaną etykietę?
* Czy logiczne grupy pól formularza są programowo określone (np. jako grupy pól)?
* Czy komunikaty o błędach i opisy pomocnicze są programowo powiązane z odpowiednimi polami?
* Czy relacje typu „nazwa–wartość” (np. etykieta i odpowiadająca jej informacja) są programowo określone?

### Relacje wynikające z prezentacji

* Czy informacje przekazywane wyłącznie poprzez położenie, kolejność, kolor, wyróżnienie wizualne lub wielkość tekstu są również możliwe do określenia programowo lub dostępne w tekście?
* Czy relacje kontrola–obszar sterowany (np. rozwijane sekcje, zakładki, elementy przełączane) są programowo określone?
* Czy zmiany stanu wpływające na strukturę lub relacje (np. rozwinięcie sekcji) są jednoznacznie komunikowane technologiom asystującym?

---


## C.7 Adaptacja procedury do modułów EN 301 549 (9/10/11)

Niniejsza procedura ma charakter transwersalny i znajduje zastosowanie w modułach EN 301 549 dotyczących:

* 9.x – treści internetowych (Web),
* 10.x – dokumentów elektronicznych,
* 11.x – oprogramowania (funkcjonalność otwarta i zamknięta).

Poniżej określono specyfikę stosowania procedury w zależności od typu produktu.

---

### C.7.1 Moduł Web (EN 9.x)

W przypadku stron internetowych i aplikacji webowych relacje strukturalne są najczęściej realizowane poprzez:

* semantyczne elementy HTML (np. nagłówki, listy, tabele),
* regiony i punkty orientacyjne (landmarki),
* powiązania etykieta–pole,
* właściwości i relacje ARIA,
* logiczną kolejność w drzewie DOM.

W ramach testu należy:

* zweryfikować strukturę w kodzie źródłowym lub narzędziu inspekcyjnym,
* przeanalizować drzewo dostępności,
* potwierdzić poprawność komunikacji relacji przy użyciu czytnika ekranu.

Relacje dynamiczne (np. zakładki, rozwijane sekcje, elementy przełączane) muszą być możliwe do określenia programowo i jednoznacznie komunikowane technologiom asystującym.

---

### C.7.2 Moduł Dokumenty (EN 10.x)

W przypadku dokumentów elektronicznych (np. PDF, dokumenty pakietów biurowych, e‑publikacje) relacje strukturalne realizowane są poprzez:

* style nagłówków i logiczną strukturę dokumentu,
* oznaczenia list i tabel,
* znaczniki strukturalne (np. w tagged PDF),
* powiązania nagłówków tabel z komórkami danych,
* logiczne drzewo struktury dokumentu.

W ramach testu należy:

* zweryfikować istnienie i poprawność struktury logicznej,
* przeanalizować panel tagów (w przypadku PDF),
* sprawdzić nawigację po nagłówkach i tabelach przy użyciu czytnika ekranu.

Brak logicznej struktury dokumentu (np. nagłówki zdefiniowane wyłącznie wizualnie) stanowi niezgodność.

---

### C.7.3 Oprogramowanie – funkcjonalność otwarta (EN 11.x, open functionality)

W oprogramowaniu współpracującym z technologiami asystującymi relacje strukturalne muszą być odwzorowane w systemowym drzewie dostępności (np. UI Automation, AX, AT-SPI).

Relacje mogą obejmować:

* nadrzędność i podrzędność elementów,
* logiczne grupy kontrolek,
* powiązania etykieta–kontrolka,
* relacje kontrola–obszar sterowany,
* role i właściwości komponentów interfejsu.

W ramach testu należy:

* przeanalizować drzewo dostępności przy użyciu narzędzia inspekcyjnego,
* zweryfikować komunikację struktury przy użyciu natywnego czytnika ekranu,
* ocenić, czy użytkownik może zidentyfikować strukturę interfejsu w sposób równoważny użytkownikowi widzącemu.

---

### C.7.4 Oprogramowanie – funkcjonalność zamknięta (EN 11.x, closed functionality)

W przypadku produktów o funkcjonalności zamkniętej (np. kioski samoobsługowe, urządzenia dedykowane) relacje strukturalne należy oceniać w kontekście dostępnego interfejsu użytkownika.

Ocena dotyczy w szczególności:

* jednoznaczności nagłówków ekranów,
* logicznego grupowania opcji i pól wyboru,
* czytelności relacji nazwa–wartość,
* spójności prezentacji relacji w całym interfejsie.

Jeżeli produkt nie udostępnia standardowego drzewa dostępności, weryfikacja może mieć charakter:

* funkcjonalny (test użytkowy),
* dokumentacyjny (analiza specyfikacji producenta),
* obserwacyjny (analiza zachowania interfejsu).

W każdym przypadku należy ustalić, czy relacje przekazywane wizualnie są jednoznacznie możliwe do zidentyfikowania przez użytkownika korzystającego z dostępnych mechanizmów interfejsu.

---

Koniec Załącznika C.