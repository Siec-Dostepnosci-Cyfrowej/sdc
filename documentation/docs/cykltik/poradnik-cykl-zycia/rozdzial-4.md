---
id: rozdzial-4
title: "Poradnik: Cykl życia technologii informacyjno-komunikacyjnej"
description: W fazie wdrażania i integracji produkt jest budowany lub programowany. Tworzy się kod i treści (w tym grafiki i dokumenty). Warto na bieżąco testować zgodność z zasadami dostępności cyfrowej.
sidebar_label: Cykl życia TIK. R. 4
sidebar_position: 4 
keywords: [
WCAG 2.1 AA, 
dostepnosc cyfrowa, 
cykl życia TIK
]
tags: [
WCAG 2.1 AA, 
dostepnosc cyfrowa, 
cykl życia TIK
]
data_zgloszenia: 10 lipca 2025 r.
ostatnia_aktualizacja: 30 października 2025 r.
opracowanie: Angelika Sosnowska
wersja_robocza: true
---

## Rozdział 4. Faza wdrażania i integracji

Faza wdrażania to moment, w którym produkt cyfrowy przestaje być wersją
testową, a staje się realnie użytkowanym narzędziem. To etap krytyczny z
punktu widzenia dostępności - nawet dobrze zaprojektowane rozwiązanie
może stać się niedostępne na skutek błędów konfiguracji, niewłaściwej
migracji treści, braku testów regresyjnych czy nieprzeszkolonych
redaktorów. Faza ta wymaga skrupulatnej kontroli, planowania oraz
gotowości na szybkie reagowanie w razie wykrycia problemów.

### 4.1 Przygotowanie środowiska wdrożeniowego

#### Dla stron internetowych

Konfiguracja serwera musi umożliwiać poprawne przetwarzanie treści
zgodnie z wymaganiami dostępności. W szczególności należy zapewnić:

- obsługę kodowania znaków UTF-8,
- prawidłowe definiowanie języka dokumentu (np. `<html lang="pl">`),
- możliwość renderowania semantycznego HTML, obsługę znaczników ARIA
  oraz CSS zapewniającego kontrast, skalowalność i elastyczny układ
  treści,
- poprawne mapowanie ról ARIA i zgodność z wymaganiami struktury
  logicznej treści.

W środowisku produkcyjnym należy zweryfikować, czy:

- wszystkie wersje językowe są prawidłowo dostępne i przełączalne,
- interfejs zachowuje responsywność na różnych urządzeniach i
  rozdzielczościach ekranu,
- tryby wysokiego kontrastu są w pełni funkcjonalne i nie zakłócają
  działania interaktywnych elementów strony.

#### Dla dokumentów elektronicznych

Dokumenty publikowane w środowisku produkcyjnym muszą spełniać wymagania
dostępności. Szczególnie ważne jest, aby:

- dokumenty były osadzane i udostępniane w sposób umożliwiający ich
  pobranie w wersjach dostępnych cyfrowo - np. pliki PDF muszą być
  odpowiednio przygotowane (tzw. „tagged PDF"),
- nie dochodziło do zamiany dostępnych wersji roboczych na pliki
  niedostępne, takie jak zeskanowane obrazy tekstu,
- struktura dokumentów uwzględniała logiczne i hierarchiczne nagłówki,
  uporządkowane listy oraz prawidłowo skonstruowane tabele danych,
- każda grafika zawierała alternatywny opis (atrybut alt),
- metadane dokumentów - takie jak tytuł, język i sposób formatowania -
  były prawidłowo zdefiniowane i zgodne z kontekstem publikacji,
- wykluczyć z publikacji treści w postaci obrazów (np. skany
  dokumentów), które są całkowicie niedostępne dla czytników ekranu i
  osób korzystających z technologii wspomagających.

#### Dla aplikacji mobilnych

Aplikacje mobilne udostępniane w sklepach Google Play i App Store i in.
muszą spełniać wymagania dostępności cyfrowej. W szczególności należy
zapewnić:

- pełną kompatybilność z technologiami asystującymi - m.in. TalkBack
  (dla Androida) i VoiceOver (dla iOS),
- obsługę systemowego skalowania tekstu oraz wsparcie dla
  wysokokontrastowych motywów,
- poprawne działanie interfejsu w różnych trybach orientacji ekranu i na
  różnych typach urządzeń - zarówno niskiej, jak i wysokiej
  rozdzielczości,
- testowanie aplikacji na realnych urządzeniach i emulatorach, z
  uwzględnieniem różnych wersji systemów operacyjnych i ustawień
  dostępności,
- mechanizmy aktualizacji aplikacji nie mogą wprowadzać regresji
  dostępności - np. należy unikać:
  - <em lang="en">splash screenów</em> bez możliwości ich pominięcia przez czytnik ekranu,
  - zmian interfejsu, które dezaktywują standardowe gesty
    dostępnościowe,
  - nieprawidłowego działania pól formularzy lub nawigacji po
    aktualizacji aplikacji.

### 4.2 Migracja treści i danych

Podczas migracji danych oraz treści do środowiska produkcyjnego należy
zachować wszystkie elementy istotne z punktu widzenia dostępności
cyfrowej. Błędy popełnione na tym etapie mogą skutkować całkowitą utratą
dostępności - mimo że projekt spełniał wymogi dostępności.

- **Treści tekstowe** muszą zachować swoją strukturę semantyczną, w tym:
  - hierarchiczne nagłówki (`<h1>`- `<h6>`),
  - uporządkowane listy (`<ul>`, `<ol>`),
  - logiczne i opisowe linki (np. „Pobierz raport PDF" zamiast „kliknij
    tutaj").
- **Dokumenty elektroniczne** (np. PDF, DOCX) nie mogą tracić oznaczeń
  struktury, nagłówków czy alternatywnych tekstów podczas konwersji lub
  przenoszenia. Należy:
  - stosować oznaczenia struktury (tagged PDF),
  - zachować tytuł dokumentu, język, metadane i właściwe formatowanie,
  - unikać utraty dostępności przez błędną konwersję w systemach CMS.
- **Grafiki i multimedia** muszą zachować:
  - alternatywne opisy (alt) dla obrazów,
  - podpisy i audiodeskrypcje dla materiałów wideo,
  - odpowiednią jakość - nie mogą być automatycznie przeskalowane lub
    zdegradowane przez system publikacyjny.
- **Treści dynamiczne** generowane przy użyciu technologii JavaScript
  (np. React, Angular, Vue) muszą być renderowane w sposób dostępny
  także po stronie klienta. Oznacza to konieczność:
  - stosowania ról ARIA (`role`, `aria-label`, `aria-live`),
  - zarządzania fokusem i informowaniem użytkownika o zmianach
    kontekstu,
  - unikania ukrytych elementów, które są niewidoczne lub niedostępne
    dla czytników ekranu,
  - zapewnienia pełnej obsługi z poziomu klawiatury.

### 4.3 Integracja z systemami zewnętrznymi

Rozwiązania cyfrowe bardzo często korzystają z usług lub komponentów
dostarczanych przez podmioty trzecie - takich jak widgety, biblioteki
SDK, usługi płatnicze czy komponenty osadzone (np. mapy, czaty). Każdy
taki element musi zostać zweryfikowany pod kątem dostępności, ponieważ
brak zgodności może zablokować części użytkowników korzystanie z całego
systemu.

- **Strony internetowe** często integrują komponenty zewnętrzne, takie
  jak: interaktywne mapy, chatboty, kalkulatory, galerie multimediów.
  - Należy je testować z użyciem klawiatury oraz technologii
    asystujących (np. czytników ekranu).
  - W przypadku braku zgodności z WCAG należy zapewnić alternatywny
    sposób dostępu - np. udostępnić dane mapy w postaci tabeli lub
    opisu tekstowego.

- **Aplikacje mobilne** korzystające z bibliotek SDK (np. do obsługi
  płatności, logowania, powiadomień) muszą zapewniać pełną obsługę z
  poziomu:
  - technologii wspomagających (TalkBack, VoiceOver),
  - gestów systemowych i nawigacji klawiaturowej (np. dla użytkowników z
    kontrolerami fizycznymi),
  - skalowania i kontrastu ustawianego systemowo.

- **Komunikaty systemowe i błędy**:
  - każda zintegrowana usługa powinna jasno komunikować błędy, statusy,
    wyniki operacji (np. zatwierdzenie płatności),
  - komunikaty te muszą być dostępne, zrozumiałe i prezentowane w sposób
    możliwy do odczytania przez technologie wspomagające,
  - należy unikać komunikatów prezentowanych jedynie wizualnie (np.
    kolorem lub animacją) bez odpowiednika tekstowego.

- **W przypadku niezgodności** z wymaganiami dostępności:
  - komponent powinien zostać zmodyfikowany, zastąpiony innym
    rozwiązaniem lub - jeśli to konieczne - uzupełniony o dostępny
    odpowiednik treści lub funkcji,
  - decyzja o pozostawieniu komponentu niedostępnego musi być
    uzasadniona (np. wynikiem analizy nadmiernych kosztów) i opisana w
    deklaracji dostępności.

### 4.4 Szkolenie i przygotowanie użytkowników

Utrzymanie dostępności cyfrowej po wdrożeniu wymaga odpowiednio
przeszkolonego zespołu - zarówno redaktorów treści, administratorów,
jak i użytkowników końcowych. Niewłaściwa edycja, brak wiedzy lub
zignorowanie zasad dostępności mogą w krótkim czasie zniweczyć
wcześniejsze wysiłki projektowe.

#### Redaktorzy treści powinni:

- stosować nagłówki zgodnie z hierarchią logiczną (`h1` - `h6`),
- dodawać alternatywne opisy do grafik (`alt`),
- unikać tekstów osadzonych w obrazach,
- wykorzystywać prosty i zrozumiały język zgodny z zasadami redakcyjnymi
  WCAG i ETR (Easy To Read).

#### Administratorzy i specjaliści techniczni powinni:

- umieć identyfikować i naprawiać najczęstsze błędy dostępności (np.
  brak fokusu, nieopisane formularze, nieczytelne kontrasty),
- znać podstawy semantyki HTML i ARIA (`aria-label`, `role`, `tabindex`) oraz
  ich wpływu na nawigację,
- przeprowadzać testy automatyczne i ręczne (np. axe, WAVE, testy
  klawiaturowe),
- aktywnie reagować na zgłoszenia użytkowników związane z barierami
  dostępności.

#### Użytkownicy końcowi (np. pracownicy instytucji korzystający z aplikacji lub systemów):

- muszą otrzymać instrukcje obsługi w różnych formatach - z napisami,
  wersją audio, kontrastową lub w języku migowym PJM (Polski Język
  Migowy),
- materiały powinny być przygotowane z uwzględnieniem różnych stylów
  uczenia się i poziomów sprawności (np. instrukcje wideo z napisami i
  audiodeskrypcją).

#### Materiały szkoleniowe same również muszą spełniać wymogi dostępności:

- prezentacje powinny mieć odpowiedni kontrast, czytelną czcionkę i
  logiczną strukturę,
- nagrania muszą zawierać napisy, a tam, gdzie to potrzebne - także
  tłumaczenie PJM lub audiodeskrypcję,
- dokumenty tekstowe powinny mieć poprawnie oznaczone nagłówki, tytuły,
  listy i opisy alternatywne,
- testowanie materiałów szkoleniowych powinno być integralnym elementem
  procesu dydaktycznego - z wykorzystaniem narzędzi do weryfikacji
  dostępności.

### 4.5 Weryfikacja dostępności po wdrożeniu

- Po zakończeniu etapu wdrażania należy przeprowadzić kompleksową
  weryfikację dostępności cyfrowej. Testy te stanowią integralny element
  końcowej kontroli jakości i powinny być realizowane w czterech
  uzupełniających się obszarach:
  - automatycznym,
  - ręcznym,
  - z użyciem technologii wspomagających
  - z udziałem użytkowników z niepełnosprawnościami.

Wyniki testów powinny zostać uwzględnione w dalszych poprawkach,
aktualizacjach i dokumentacji projektu (np. deklaracji dostępności).

### 4.6 Strategia reagowania na regresję dostępności

Dostępność cyfrowa nie jest cechą stałą - może zostać naruszona po
wdrożeniu na skutek aktualizacji systemu, wprowadzenia nowych treści,
zmian konfiguracji lub błędów po stronie integracji. Dlatego niezbędne
jest wdrożenie strategii ciągłego monitorowania oraz reagowania na
regresję dostępności - czyli sytuacje, w których wcześniej dostępne
funkcje stają się niedostępne dla użytkowników.

Omówiona wcześniej strategia projektowo-wdrożeniowa (etapy 1-5)
obowiązuje we wszystkich typach produktów cyfrowych, jednak występują
między nimi istotne różnice:

- **W dokumentach cyfrowych**:
  - regresje dostępności często wynikają z zastąpienia dostępnych wersji
    plików zeskanowanymi obrazami,
  - należy bezwzględnie zachowywać **wersje edytowalne** (np. DOCX,
    PPTX), aby umożliwić ponowną publikację zgodną z WCAG,
  - edycja dokumentów powinna odbywać się wyłącznie w formatach
    umożliwiających zachowanie struktury i znaczników dostępności.
- **W aplikacjach mobilnych**:
  - regresje najczęściej pojawiają się w wyniku **błędów w aktualizacjach** - 
    np. niedziałające przyciski, zmiana zachowania
    gestów, problemy z etykietami formularzy,
  - przed każdą publikacją nowej wersji należy przeprowadzić testy z
    wykorzystaniem emulatorów i rzeczywistych urządzeń z aktywnymi
    technologiami asystującymi.
- **W systemach wewnętrznych** (np. intranet, systemy urzędowe):
  - regresje mogą być trudniejsze do wykrycia, ponieważ nie są objęte
    publicznymi deklaracjami dostępności,
  - kluczowe jest zapewnienie **mechanizmu zbierania informacji zwrotnej** 
	od użytkowników wewnętrznych - np. prosty formularz
    zgłoszeń lub kontakt mailowy z koordynatorem dostępności.

#### Elementy skutecznego reagowania na problemy:

- **Zachowanie wersji źródłowych dokumentów**:
  - w formacie umożliwiającym ponowną edycję i korektę (np. DOCX, ODT),
  - regularne archiwizowanie dostępnych wersji dokumentów publicznych.
- **Każda zmiana wpływająca na dostępność powinna być odnotowana i  aktualizowana w deklaracji dostępności** 
  zgodnie z obowiązującym stanem technicznym rozwiązania.
- **Testowanie każdej aktualizacji funkcjonalności i treści**:
  - strony internetowe i aplikacje mobilne muszą być testowane przy
    każdej zmianie, nawet jeśli dotyczy ona jedynie treści redakcyjnej,
  - testy powinny uwzględniać wszystkie grupy użytkowników (klawiatura,
    czytnik ekranu, kontrast, skalowanie).
- **Kanały zgłaszania problemów z dostępnością**:
  - należy zapewnić widoczny i prosty sposób zgłaszania barier, np.
    poprzez adres e-mail, formularz online lub dedykowaną sekcję „Zgłoś
    problem z dostępnością",
  - formularz powinien być dostępny, prosty w obsłudze i dostosowany do
    różnych technologii wspomagających.

### 4.7 Lista kontrolna - Faza wdrażania i integracji

|Nr   | Kryterium kontrolne                           | Tak | Nie |   Uwagi     |
|-----|  -----------------------| ----| ----| ------|
|  1  | Czy serwer obsługuje poprawne kodowanie  i nagłówki językowe?  | | | |                                    
|  2  | Czy dokumenty są publikowane jako dostępne pliki (tagged PDF, DOCX z nagłówkami)?   | | | |
|  3  | Czy aplikacja wspiera technologie asystujące (TalkBack, VoiceOver)?  | | | |
|  4  | Czy teksty alternatywne dla grafik są zachowane po migracji?   | | | |
|  5  | Czy formularze zawierają etykiety (label for) i są obsługiwalne klawiaturą?   | | | |  
|  6  | Czy komponenty zewnętrzne są dostępne lub mają alternatywę?  | | | |     
|  7  | Czy zespół (redaktorzy, administratorzy, helpdesk) został  przeszkolony?  | | | |         
|  8  | Czy wykonano testy automatyczne i ręczne po wdrożeniu?  | | | |
|  9  | Czy funkcjonuje mechanizm zgłaszania problemów z dostępnością?   | | | |
| 10  | Czy istnieje procedura testowania zmian i reagowania na regresję?   | | | |
| 11  | Czy przeprowadzono testy dostępności na urządzeniach mobilnych z aktywnymi technologiami asystującymi?