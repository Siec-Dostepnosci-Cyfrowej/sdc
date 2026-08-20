---
id: lista-wymagan-atag-dla-cms
title: Lista wymagań ATAG dla systemu CMS
sidebar_position: 1
description: Praktyczna lista wymagań do wykorzystania w OPZ, SWZ, umowie, kryteriach oceny ofert i odbiorze systemu CMS.
keywords: [ATAG, CMS, OPZ, SWZ, dostępność cyfrowa, zamówienia publiczne, kryteria odbioru]
tags: [ATAG, CMS, OPZ, SWZ, zaopatrzenie, dostępność cyfrowa]
opracowanie: Damian Żłobicki
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Dokument zawiera praktyczną listę wymagań, które można wykorzystać przy zamawianiu systemu CMS. Lista może być użyta jako materiał pomocniczy do przygotowania opisu przedmiotu zamówienia, SWZ, umowy, kryteriów oceny ofert, scenariuszy odbioru albo audytu wdrożonego systemu.

Lista nie zastępuje pełnej analizy ATAG 2.0. Jej celem jest przełożenie wymagań ATAG na język zamówienia i codziennych scenariuszy pracy redaktora.

## 1. Zakres wymagań

Wymagania powinny obejmować cały proces tworzenia i publikowania treści w CMS, w szczególności:

- panel administracyjny,
- edytor treści,
- bibliotekę mediów,
- szablony stron,
- komponenty redakcyjne,
- formularze administracyjne,
- mechanizmy tworzenia formularzy publicznych,
- podgląd treści,
- proces zapisu, akceptacji i publikacji,
- mechanizmy importu, eksportu i migracji treści,
- dokumentację użytkownika,
- szkolenia dla redaktorów i administratorów.

## 2. Wymagania dotyczące dostępności panelu CMS

System CMS powinien umożliwiać redaktorom, administratorom i osobom zatwierdzającym treści korzystanie z panelu administracyjnego w sposób dostępny cyfrowo.

### Minimalne wymagania

1. Wszystkie kluczowe funkcje panelu są dostępne z klawiatury.
2. Fokus klawiatury jest widoczny i logiczny.
3. Panel nie zawiera pułapek klawiaturowych.
4. Kolejność nawigacji jest zgodna z układem i logiką interfejsu.
5. Elementy interaktywne mają poprawne nazwy dostępne.
6. Przyciski, linki, pola formularzy i kontrolki są rozpoznawalne dla technologii wspomagających.
7. Formularze administracyjne mają etykiety, instrukcje i komunikaty błędów.
8. Komunikaty statusu są przekazywane w sposób dostępny dla technologii wspomagających.
9. Panel zachowuje poprawną strukturę nagłówków i regionów.
10. Mechanizmy typu „przeciągnij i upuść” mają dostępną alternatywę.
11. Czas sesji redakcyjnej nie powoduje utraty niezapisanej pracy bez ostrzeżenia albo możliwości przedłużenia sesji.
12. Dokumentacja panelu opisuje funkcje dostępności.

### Dowody odbiorowe

Wykonawca powinien wykazać, że redaktor może bez użycia myszy:

- zalogować się do CMS,
- odnaleźć listę treści,
- utworzyć nową stronę,
- edytować istniejącą stronę,
- dodać obraz,
- uzupełnić tekst alternatywny,
- zapisać wersję roboczą,
- skorzystać z podglądu,
- opublikować treść,
- odczytać i naprawić komunikaty błędów.

## 3. Wymagania dotyczące edytora treści

Edytor treści powinien wspierać tworzenie poprawnych, semantycznych i dostępnych treści.

### Minimalne wymagania

1. Redaktor może tworzyć strukturę nagłówków bez ręcznego formatowania wizualnego.
2. Redaktor może tworzyć semantyczne listy, tabele, cytaty i linki.
3. Edytor nie generuje pustych nagłówków, pustych akapitów, nadmiarowych znaczników ani niepoprawnego HTML przy standardowym użyciu.
4. Redaktor może określić język treści albo fragmentu treści, jeżeli CMS obsługuje treści wielojęzyczne.
5. Redaktor może tworzyć zrozumiałe teksty linków.
6. Edytor powinien ostrzegać przed niejasnymi tekstami linków, jeżeli CMS posiada mechanizm walidacji treści.
7. Redaktor może sprawdzić strukturę strony przed publikacją.
8. Podgląd treści pokazuje treść w sposób możliwie zbliżony do wersji opublikowanej.
9. Widok podglądu nie ukrywa problemów, które wystąpią w opublikowanej treści.
10. Edytor umożliwia poprawę błędów bez konieczności ręcznej edycji kodu HTML, chyba że ręczna edycja kodu jest świadomie przewidzianym trybem zaawansowanym.

### Dowody odbiorowe

Wykonawca powinien pokazać utworzenie strony zawierającej:

- jeden nagłówek główny,
- logiczną strukturę nagłówków niższych poziomów,
- listę,
- link o zrozumiałej treści,
- tabelę z nagłówkami,
- obraz informacyjny z tekstem alternatywnym,
- obraz dekoracyjny oznaczony jako dekoracyjny,
- treść zapisaną, sprawdzoną, poprawioną i opublikowaną.

## 4. Wymagania dotyczące obrazów i mediów

CMS powinien wspierać poprawne zarządzanie alternatywami dla treści nietekstowych.

### Minimalne wymagania

1. Przy dodawaniu obrazu CMS umożliwia wpisanie tekstu alternatywnego.
2. CMS umożliwia oznaczenie obrazu jako dekoracyjnego.
3. CMS nie podstawia automatycznie nazwy pliku jako tekstu alternatywnego.
4. CMS ostrzega przed publikacją obrazu bez tekstu alternatywnego, jeżeli obraz nie został oznaczony jako dekoracyjny.
5. CMS pozwala edytować tekst alternatywny po dodaniu obrazu.
6. CMS zachowuje tekst alternatywny przy ponownym użyciu tego samego zasobu, ale pozwala go zmienić zależnie od kontekstu.
7. CMS umożliwia dodanie napisów, transkrypcji lub innych alternatyw dla multimediów, jeżeli obsługuje multimedia.
8. CMS nie usuwa informacji o dostępności podczas kompresji, optymalizacji, konwersji albo migracji zasobów.
9. CMS pozwala opisać zasady użycia multimediów w dokumentacji redakcyjnej.

### Dowody odbiorowe

Wykonawca powinien pokazać:

- dodanie obrazu informacyjnego z tekstem alternatywnym,
- dodanie obrazu dekoracyjnego bez tekstu alternatywnego, ale z poprawnym oznaczeniem dekoracyjności,
- próbę publikacji obrazu informacyjnego bez tekstu alternatywnego i reakcję CMS,
- edycję tekstu alternatywnego po publikacji,
- zachowanie informacji o dostępności po ponownym użyciu obrazu.

## 5. Wymagania dotyczące szablonów i komponentów

CMS powinien dostarczać dostępne szablony i komponenty, które nie generują barier dostępności.

### Minimalne wymagania

1. Wszystkie podstawowe szablony stron spełniają wymagania WCAG na poziomie przyjętym w zamówieniu.
2. Komponenty redakcyjne są dostępne z klawiatury.
3. Komponenty mają poprawne role, nazwy, stany i komunikaty.
4. Komponenty nie wymagają od redaktora ręcznego poprawiania kodu HTML w celu osiągnięcia dostępności.
5. CMS oznacza, które szablony i komponenty są dostępne, jeżeli zawiera również elementy eksperymentalne, niestandardowe albo wymagające dodatkowej konfiguracji.
6. Nowe komponenty tworzone w ramach zamówienia przechodzą testy dostępności przed odbiorem.
7. Wykonawca przekazuje dokumentację korzystania z komponentów zgodnie z zasadami dostępności.
8. Aktualizacja CMS, szablonu albo komponentu nie może obniżać dostępności bez wcześniejszej informacji i planu naprawczego.

### Dowody odbiorowe

Wykonawca powinien przekazać listę szablonów i komponentów wraz z informacją:

- do czego służy dany element,
- czy został przetestowany pod kątem dostępności,
- jakie ograniczenia są znane,
- jak redaktor powinien go używać,
- jakich konfiguracji należy unikać.

## 6. Wymagania dotyczące sprawdzania i naprawy błędów

CMS powinien pomagać redaktorom wykrywać i naprawiać podstawowe błędy dostępności przed publikacją.

### Minimalne wymagania

1. CMS sprawdza podstawowe problemy dostępności możliwe do wykrycia automatycznie.
2. CMS wskazuje miejsce wystąpienia problemu.
3. CMS wyjaśnia problem prostym językiem.
4. CMS podpowiada sposób naprawy.
5. CMS umożliwia ponowne sprawdzenie treści po poprawkach.
6. CMS generuje raport albo listę problemów dla redaktora.
7. CMS pozwala organizacji skonfigurować zasady publikacji treści z błędami krytycznymi.
8. CMS odróżnia błędy możliwe do automatycznego wykrycia od kwestii wymagających oceny człowieka, jeżeli taka funkcja jest dostępna.
9. Komunikaty o błędach są dostępne dla osób korzystających z technologii wspomagających.

### Przykładowe problemy, które CMS powinien wykrywać

CMS powinien wykrywać co najmniej:

- brak tekstu alternatywnego przy obrazie informacyjnym,
- pusty tekst alternatywny tam, gdzie obraz nie został oznaczony jako dekoracyjny,
- pusty nagłówek,
- zaburzoną strukturę nagłówków, jeżeli jest możliwa do wykrycia,
- link bez tekstu albo z niejasnym tekstem,
- tabelę bez nagłówków,
- brak tytułu strony,
- nieuzupełnione wymagane pola metadanych, jeżeli wpływają na dostępność albo identyfikację treści.

## 7. Wymagania dotyczące migracji, importu i eksportu treści

CMS powinien zachowywać informacje o dostępności podczas migracji, kopiowania, importu i eksportu treści.

### Minimalne wymagania

1. Kopiowanie treści wewnątrz CMS zachowuje strukturę nagłówków, list, tabel, linków i tekstów alternatywnych.
2. Import treści nie usuwa tekstów alternatywnych, podpisów, etykiet i struktury semantycznej, jeżeli dane wejściowe je zawierają.
3. Eksport treści zachowuje informacje o dostępności, jeżeli format wyjściowy na to pozwala.
4. Mechanizmy optymalizacji obrazów nie usuwają wymaganych informacji o dostępności.
5. Wykonawca opisuje ograniczenia migracji i wskazuje, które informacje mogą zostać utracone.
6. Po migracji wykonawca przeprowadza kontrolę próby treści pod kątem zachowania dostępności.
7. Migracja nie powinna zamieniać dostępnych treści tekstowych na obrazy tekstu.

### Dowody odbiorowe

Wykonawca powinien przekazać:

- opis procesu migracji,
- listę danych dotyczących dostępności, które są przenoszone,
- listę danych, które mogą zostać utracone,
- raport z kontroli próbki zmigrowanych treści,
- rekomendacje naprawcze dla treści, których nie da się przenieść automatycznie.

## 8. Wymagania dotyczące dokumentacji i szkoleń

Wykonawca powinien przekazać dokumentację i instrukcje, które wspierają dostępne tworzenie treści.

### Minimalne wymagania

1. Dokumentacja CMS jest dostępna cyfrowo.
2. Dokumentacja zawiera instrukcję tworzenia dostępnych treści w danym CMS.
3. Dokumentacja pokazuje poprawne przykłady: nagłówki, linki, obrazy, tabele, multimedia, formularze i komponenty.
4. Dokumentacja nie pokazuje praktyk niedostępnych jako wzorcowych.
5. Szkolenie dla redaktorów obejmuje funkcje CMS wspierające dostępność.
6. Wykonawca przekazuje krótką checklistę redaktora.
7. Wykonawca przekazuje checklistę administratora albo właściciela serwisu.
8. Wykonawca opisuje, jak zgłaszać i klasyfikować problemy dostępności CMS po wdrożeniu.

## 9. Dowody wymagane od wykonawcy

Wykonawca powinien przekazać co najmniej:

1. macierz zgodności z ATAG 2.0,
2. raport z testów dostępności panelu CMS,
3. raport z testów dostępności publicznej części serwisu,
4. listę znanych ograniczeń,
5. opis funkcji wspierających tworzenie dostępnych treści,
6. opis sposobu testowania edytora treści,
7. dokumentację dla redaktorów,
8. scenariusze testowe do odbioru,
9. rekomendacje dotyczące utrzymania dostępności po wdrożeniu,
10. opis odpowiedzialności za usuwanie błędów dostępności po odbiorze.

## 10. Przykładowe scenariusze odbioru

### Scenariusz 1. Praca redaktora bez myszy

Redaktor wykonuje z klawiatury następujące czynności:

1. loguje się do CMS,
2. przechodzi do listy treści,
3. tworzy nową stronę,
4. uzupełnia tytuł,
5. dodaje strukturę nagłówków,
6. dodaje obraz z tekstem alternatywnym,
7. zapisuje wersję roboczą,
8. otwiera podgląd,
9. publikuje treść.

Kryterium zaliczenia: zadanie można wykonać bez użycia myszy, bez pułapek klawiaturowych i bez utraty informacji o stanie interfejsu.

### Scenariusz 2. Dodanie obrazu informacyjnego

Redaktor dodaje obraz informacyjny do treści.

Kryterium zaliczenia: CMS umożliwia dodanie tekstu alternatywnego, zapisuje go, pokazuje w podglądzie albo w kodzie wynikowym i pozwala go później edytować.

### Scenariusz 3. Próba publikacji obrazu bez tekstu alternatywnego

Redaktor próbuje opublikować treść z obrazem informacyjnym bez tekstu alternatywnego.

Kryterium zaliczenia: CMS ostrzega redaktora, wskazuje problem i podpowiada sposób naprawy albo wymaga świadomego oznaczenia obrazu jako dekoracyjnego, jeżeli jest to właściwe.

### Scenariusz 4. Utworzenie tabeli

Redaktor tworzy tabelę z nagłówkami kolumn albo wierszy.

Kryterium zaliczenia: CMS pozwala oznaczyć nagłówki tabeli semantycznie i nie generuje tabeli opartej wyłącznie na formatowaniu wizualnym.

### Scenariusz 5. Sprawdzenie dostępności przed publikacją

Redaktor uruchamia mechanizm sprawdzania dostępności treści.

Kryterium zaliczenia: CMS pokazuje listę problemów, miejsce ich wystąpienia, opis problemu i wskazówki naprawy. Komunikaty są dostępne dla technologii wspomagających.

### Scenariusz 6. Użycie komponentu redakcyjnego

Redaktor dodaje komponent, na przykład akordeon, kartę informacyjną, karuzelę, alert albo blok promocyjny.

Kryterium zaliczenia: komponent działa z klawiatury, ma poprawne nazwy i stany, nie narusza kolejności fokusu i nie wymaga od redaktora ręcznego poprawiania kodu.

## 11. Przykładowy zapis do OPZ

System CMS musi być zaprojektowany i wdrożony z uwzględnieniem wytycznych ATAG 2.0. Wymaganie obejmuje dostępność interfejsu narzędzia dla redaktorów, administratorów i osób zatwierdzających treści oraz funkcje wspierające tworzenie, sprawdzanie i poprawianie dostępnych treści.

Wykonawca zobowiązany jest zapewnić dostępność panelu CMS, edytora treści, biblioteki mediów, szablonów, komponentów, mechanizmów podglądu, procesu publikacji i dokumentacji użytkownika. Wykonawca zobowiązany jest również przekazać macierz zgodności z ATAG 2.0, opis funkcji wspierających dostępność, listę znanych ograniczeń oraz scenariusze testowe umożliwiające odbiór dostępności CMS.

CMS musi umożliwiać redaktorom tworzenie dostępnych treści bez konieczności ręcznej edycji kodu HTML w podstawowych scenariuszach redakcyjnych. W szczególności CMS musi umożliwiać tworzenie poprawnej struktury nagłówków, linków, list, tabel, tekstów alternatywnych dla obrazów, oznaczanie grafik dekoracyjnych oraz sprawdzanie podstawowych błędów dostępności przed publikacją.

## 12. Przykładowy zapis do umowy

Wykonawca odpowiada za zapewnienie dostępności cyfrowej publicznej części serwisu oraz za dostępność panelu CMS i mechanizmów wspierających tworzenie dostępnych treści. Odpowiedzialność wykonawcy obejmuje w szczególności szablony, komponenty, edytor treści, formularze administracyjne, bibliotekę mediów, mechanizmy podglądu, proces publikacji, dokumentację i konfigurację systemu.

Wykonawca zobowiązuje się do usunięcia błędów dostępności stwierdzonych w trakcie odbioru, jeżeli wynikają one z projektu, konfiguracji, komponentów, szablonów, edytora, dokumentacji albo innych elementów CMS dostarczonych w ramach zamówienia.

Wykonawca zobowiązuje się nie obniżać poziomu dostępności CMS w ramach aktualizacji, poprawek serwisowych lub rozwoju systemu. W przypadku ryzyka obniżenia dostępności wykonawca zobowiązany jest poinformować zamawiającego, opisać wpływ zmiany i przedstawić plan naprawczy.

## 13. Przykładowy zapis do kryteriów oceny ofert

Zamawiający może przyznać dodatkowe punkty za rozwiązania, które wykraczają poza minimalne wymagania, w szczególności za:

1. wyższy poziom zgodności z ATAG 2.0,
2. wbudowany mechanizm sprawdzania dostępności treści,
3. dostępne szablony i komponenty potwierdzone testami,
4. wsparcie redaktora w naprawie błędów dostępności,
5. jakość dokumentacji i checklist dla redaktorów,
6. demonstrację dostępnego procesu redakcyjnego,
7. możliwość konfiguracji reguł publikacji treści z błędami krytycznymi,
8. zachowanie informacji o dostępności podczas migracji i ponownego użycia treści.

## 14. Przykładowa tabela zgodności z ATAG

| Obszar | Wymaganie | Status | Dowód | Ograniczenia | Działania naprawcze |
|---|---|---|---|---|---|
| Dostępność panelu | Kluczowe funkcje panelu są dostępne z klawiatury | spełnione / częściowo / niespełnione / nie dotyczy | opis, test, nagranie, raport | do uzupełnienia | do uzupełnienia |
| Edytor treści | Redaktor może tworzyć semantyczne nagłówki | spełnione / częściowo / niespełnione / nie dotyczy | opis, test, zrzut, kod wynikowy | do uzupełnienia | do uzupełnienia |
| Obrazy | CMS umożliwia dodanie tekstu alternatywnego | spełnione / częściowo / niespełnione / nie dotyczy | scenariusz testowy | do uzupełnienia | do uzupełnienia |
| Sprawdzanie błędów | CMS wskazuje podstawowe błędy dostępności | spełnione / częściowo / niespełnione / nie dotyczy | demonstracja, raport | do uzupełnienia | do uzupełnienia |
| Szablony | Szablony nie generują błędów dostępności | spełnione / częściowo / niespełnione / nie dotyczy | audyt, test komponentów | do uzupełnienia | do uzupełnienia |
| Dokumentacja | Dokumentacja opisuje tworzenie dostępnych treści | spełnione / częściowo / niespełnione / nie dotyczy | dokumentacja | do uzupełnienia | do uzupełnienia |

## 15. Lista minimalna do małego zamówienia

Jeżeli zamówienie jest niewielkie, zamawiający powinien zachować co najmniej następujące wymagania:

1. Panel CMS działa z klawiatury w podstawowych scenariuszach redakcyjnych.
2. Edytor pozwala tworzyć nagłówki, listy, linki, tabele i teksty alternatywne w sposób semantyczny.
3. CMS nie generuje niedostępnych szablonów ani komponentów przy standardowym użyciu.
4. CMS ostrzega przed brakiem tekstu alternatywnego dla obrazu informacyjnego.
5. Wykonawca przekazuje instrukcję tworzenia dostępnych treści w CMS.
6. Odbiór obejmuje co najmniej jeden scenariusz utworzenia, sprawdzenia i publikacji dostępnej strony.
7. Wykonawca przekazuje listę znanych ograniczeń dostępności CMS. 

## 16. Źródła i opracowania

1. [W3C WAI, *Authoring Tool Accessibility Guidelines (ATAG) 2.0*](https://www.w3.org/TR/ATAG20/), dostęp: 10 czerwca 2026 r.
2. [W3C WAI, *Omówienie Wytycznych dla dostępności narzędzi autorskich (ATAG)*](https://www.w3.org/WAI/standards-guidelines/atag/pl), dostęp: 10 czerwca 2026 r.
3. [W3C WAI, *ATAG w skrócie*](https://www.w3.org/WAI/standards-guidelines/atag/glance/pl), dostęp: 10 czerwca 2026 r.
4. [W3C WAI, *ATAG Conformance Evaluation Report Tool*](https://www.w3.org/WAI/atag/report-tool/), dostęp: 10 czerwca 2026 r.
