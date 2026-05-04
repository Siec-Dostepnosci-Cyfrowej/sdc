---
id: systemowe-rozwiazywanie-problemow-dostepnosci-cyfrowej
title: Systemowe rozwiązywanie problemów dostępności cyfrowej
description: Uzasadnienie
sidebar_label: Rozwiązywanie problemów
sidebar_position: 0
keywords: [rozwiązanie systemowe, cykl życia TIK]
tags: [rozwiązanie systemowe, cykl życia TIK]
opracowanie: Cezary Tomczyk
data_zgloszenia: 30 marca 2026
data_aktualizacji: 30 marca 2026
wersja_robocza: true
---

## Cel zalecenia

Zapewnienie, że każda wykryta lub zgłoszona niezgodność z wymaganiami dostępności cyfrowej skutkuje jej terminową naprawą w ramach systemowego procesu zarządzania jakością.

Celem jest eliminacja "długu dostępności" poprzez integrację testów i napraw z cyklem życia produktów i usług cyfrowych - zarówno realizowanych wewnętrznie, jak i przez podmioty zewnętrzne.

## Zalecenie

Organizacja wdraża system zarządzania problemami dostępności cyfrowej, w którym każdy wykryty problem (niezgodność) jest traktowany na równi z błędem funkcjonalnym usługi. Podlega on obowiązkowej rejestracji, priorytetyzacji oraz naprawie w ramach standardowych procesów wytwarzania, utrzymania i rozwoju systemów informatycznych.

Organizacja zapewnia ciągłą zdolność realizacji procesu naprawczego poprzez utrzymywanie własnych zasobów technicznych lub precyzyjne zapisy w umowach z podmiotami zewnętrznymi, obejmujące obowiązek usuwania niezgodności w ramach ustalonego **SLA (ang. Service Level Agreement)**.

## Rekomendacje

### 1. Uruchamianie procesu naprawczego
**10. Nadzór kierownictwa**

Kierownictwo organizacji zapewnia nadzór nad funkcjonowaniem systemu zarządzania problemami dostępności poprzez:
- okresowe przeglądy danych o problemach i czasie ich naprawy,  
- podejmowanie decyzji dotyczących działań usprawniających.
Każdy problem dostępności:

- wykryta w wyniku monitoringu automatycznego, testów manualnych lub audytu,
- zgłoszona przez użytkownika (w trybie żądania zapewnienia dostępności lub opinii),
- zgłoszona przez pracownika organizacji,

skutkuje automatycznym uruchomieniem procesu naprawczego poprzez rejestrację zgłoszenia w rejestrze problemów (np. w systemie zgłoszeń lub innym narzędziu do planowania pracy).

### 2. Integracja z procesami IT

Organizacja zapewnia, że błędy dostępności:

- są rejestrowane w miejscu służącym do planowania i śledzenia pracy zespołu IT,
- są traktowane jak inne błędy systemu - nie tworzy się odrębnych "ścieżek dostępności",
- są uwzględniane w definicji „gotowości” (**ang. Definition of Done**) oraz w kryteriach odbioru prac.

### 3. Priorytety i czasy naprawy (SLA)

Podmiot stosuje następującą klasyfikację niezgodności:

| Priorytet | Opis | Przykład |
| :--- | :--- | :--- |
| **Krytyczny** | Uniemożliwia skorzystanie z usługi. | Brak obsługi klawiaturą, pułapka klawiaturowa, brak etykiet w formularzu logowania. |
| **Istotny** | Znacznie utrudnia korzystanie z usługi, ale istnieje alternatywna (trudniejsza) droga. | Błędy wpływające na nawigację, interakcję lub zrozumienie treści, zbędne komunikaty. |
| **Niski** | Błędy, które nie wpływają na możliwość skorzystania z usługi ani na zrozumienie treści. | Drobne błędy w kodzie niedostrzegalne dla użytkownika. |

Podmiot określa maksymalne czasy naprawy, uwzględniając wpływ na użytkownika końcowego, a nie wyłącznie złożoność techniczną naprawy.

### 4. Źródła identyfikacji problemów

Podmiot obejmuje procesem następujące źródła:

- monitoring automatyczny,
- testy manualne,
- przeglądy,
- zgłoszenia użytkowników,
- dane z deklaracji dostępności.  

Źródła te są traktowane łącznie jako jeden system informacji o stanie dostępności.

Wszystkie te dane muszą trafiać do jednego rejestru, co pozwala na identyfikację powtarzalnych błędów (np. systemowych błędów w szablonie strony).

### 5. Powiązanie z deklaracją dostępności

Problemy wskazane w deklaracji dostępności:

- Muszą posiadać przypisany plan naprawczy i konkretny termin usunięcia.
- **Aktualizacja:** Po naprawie błędu organizacja niezwłocznie aktualizuje treść deklaracji dostępności, aby odzwierciedlała ona stan faktyczny i postęp prac.

### 6. Weryfikacja zmian (zapobieganie wprowadzaniu nowych problemów)

Podmiot wymaga, aby każda zmiana systemu:

- obejmowała test dostępności,
- nie powodowała powstania nowych błędów dostępności w elementach, które działały poprawnie przed zmianą.

Weryfikacja jest proporcjonalna do zakresu zmiany, jednak obowiązkowa w przypadku zmian wpływających na funkcjonalności użytkowe.

### 7. Zamówienia publiczne

W relacjach z wykonawcami zewnętrznymi stosuje się pragmatyczne podejście do odbiorów:

- **Minimalny wymóg odbiorowy:** wykonawca dostarcza raport (próbkę) z testów automatycznych przeprowadzonych ogólnodostępnymi narzędziami. Potwierdza on brak podstawowych błędów w dostarczonym kodzie.
- **Odpowiedzialność:** wykonawca jest zobowiązany do usunięcia niezgodności wykrytych w okresie gwarancji, o ile wynikają one z błędów w kodzie źródłowym lub architekturze informacji dostarczonej przez Wykonawcę. Odpowiedzialność ta nie obejmuje niedostępności wynikającej z publikowania przez Zamawiającego treści (np. dokumentów biurowych, multimediów) bez zapewnienia ich dostępności przez redaktorów.
- **Nadzór nad terminowością:** Zamiast sztywnych kar za każdy błąd, stosuje się mechanizm zaostrzenia lub podjęcia dalszych kroków w przypadku braku reakcji wykonawcy na zgłoszenia błędów krytycznych w ustalonym czasie.

Wymagania dostępności oraz obowiązek usuwania błędów są elementem umowy, a nie wyłącznie opisu przedmiotu zamówienia.

### 8. Monitoring skuteczności

Podmiot mierzy skuteczność systemu poprzez:

- Analizę trendu liczby otwartych błędów krytycznych (czy dług dostępności maleje).
- Śledzenie czasu naprawy oraz powtarzalności incydentów.
- Wykorzystywanie danych do planowania budżetu na usprawnienia IT.

### 9. Zapewnienie zdolności naprawczej (kluczowy warunek skuteczności)

Podmiot publiczny zapewnia rzeczywistą, ciągłą zdolność do usuwania problemów dostępności poprzez:

- posiadanie własnych zasobów technicznych (osoby posiadające kompetencje do wprowadzania zmian w systemach informatycznych) lub
- zawarcie umów z podmiotami zewnętrznymi (np. utrzymanie, rozwój, serwis), obejmujących obowiązek realizacji napraw.

Umowy z wykonawcami w szczególności:

- obejmują naprawę błędów dostępności jako standardowy zakres usług,
- określają czasy reakcji i naprawy (SLA, ang. Service Level Agreement),
- przewidują odpowiedzialność za brak usunięcia błędów,
- umożliwiają zlecanie napraw niezależnie od cyklu dużych wdrożeń.

Brak zapewnienia zdolności naprawczej powoduje, że proces zarządzania dostępnością ma charakter pozorny, a organizacja nie jest w stanie realizować obowiązków wynikających z przepisów prawa.

### 10. Nadzór kierownictwa

Dostępność cyfrowa nie jest zadaniem wyłącznie dla koordynatora dostępności. Jest elementem zarządzania produktem, za który odpowiadają właściciele biznesowi systemów oraz działy IT.

Kierownictwo organizacji zapewnia nadzór nad funkcjonowaniem systemu zarządzania problemami dostępności poprzez:

- okresowe przeglądy danych o problemach i czasie ich naprawy,
- podejmowanie decyzji dotyczących działań usprawniających.

## Uzasadnienie

Dostępność cyfrowa jest elementem jakości usług publicznych. Niniejsze zalecenie wprowadza mechanizmy, które pozwalają na systematyczne usuwanie barier bez paraliżowania procesów wytwórczych IT. Poprzez skupienie się na testach automatycznych na etapie odbioru oraz elastycznym podejściu do terminów napraw, podmiot może skutecznie realizować obowiązki ustawowe w sposób zrównoważony i dopasowany do możliwości technicznych.

Dostępność cyfrowa jest procesem ciągłym, zależnym od zmian w systemach informatycznych, treściach i usługach publicznych. W wielu podmiotach publicznych wiedza o problemach dostępności (pochodząca z monitoringu, testów, audytów lub deklaracji dostępności) nie przekłada się jednak na systematyczne działania naprawcze. Problemy są identyfikowane i opisywane, lecz nie uruchamiają obowiązkowych procesów ich usuwania, co prowadzi do utrwalania niezgodności i narastania długu dostępnościowego.

Brak dostępności kluczowych funkcji (np. formularzy, logowania, procesów wnioskowych) lub treści (np. niedostępne dokumenty PDF) może uniemożliwiać korzystanie z usług publicznych, co oznacza zarówno ryzyko naruszenia prawa, jak i realne wykluczenie części użytkowników.

To zalecenie wprowadza mechanizm, w którym każde wykrycie lub zgłoszenie problemu stanowi jednoznaczny impuls do działania – uruchamiając proces naprawczy realizowany w ramach standardowych procesów wytwarzania i utrzymania systemów. Dzięki temu dostępność przestaje być wyłącznie przedmiotem diagnozy, a staje się elementem bieżącego zarządzania jakością usług cyfrowych.
- PN-EN 301 549 Wymagania dotyczące dostępności produktów i usług ICT 
## Podstawy prawne

- [Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych](https://isap.sejm.gov.pl/isap.nsf/DocDetails.xsp?id=WDU20190000848) (Dz.U. 2019 poz. 848 z późn. zm.).
- [Norma EN 301 549 (wersja w języku angielskim)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf) – Wymagania dotyczące dostępności produktów i usług ICT.

## Źródła

- [W3C Accessibility Guidelines Evaluation Methodology (WCAG-EM) 2.0](https://www.w3.org/TR/wcag-em-2/)

## Załączniki

1. [Organizacja i zadania zespołu odpowiedzialnego za naprawę problemów dostępności cyfrowej](organizacja-i-zadania-zespolu-naprawczego.md)
2. [Wzorcowe zapisy dotyczące w umowie serwisowej](zapisy-w-umowie-serwisowej.md)
3. [Zapisy dotyczące dostępności cyfrowej w umowie serwisowej (wariant dla małych jednostek)](zapisy-w-umowie-serwisowej-male-jst.md)
