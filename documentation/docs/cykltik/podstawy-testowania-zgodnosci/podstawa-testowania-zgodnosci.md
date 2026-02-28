---
id: podstawa-testowania-zgodnosci
title:  Podstawa testowania zgodności TIK z EN 301 549
sidebar_label: Podstawa testowania zgodności
sidebar_position: 1
description: Projekt jednolitej, referencyjnej „Podstawy testowania zgodności” produktów i usług cyfrowych 
keywords: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
tags: [cykl życia TIK, dostępność cyfrowa, testowanie dostępności, przegląd dostępności, audyt dostępności, dezyderat]
opracowanie: Stefan Wajda 
data_zgloszenia: 26 lutego 2026 r.
ostatnia_aktualizacja: 27 lutego 2026 r.
wersja_robocza: true

---


**Wersja robocza 1.0 (scalona)**

---

## 1. Cel i zakres

### 1.1 Status dokumentu

Niniejszy dokument stanowi referencyjną „Podstawę testowania zgodności TIK z EN 301 549”.

Dokument ma charakter metodyczny i operacyjny. Nie zastępuje norm technicznych ani przepisów prawa. Określa jednolite zasady organizacji, przeprowadzania i dokumentowania ocen zgodności technologii informacyjno‑komunikacyjnych (TIK) z&nbsp;wymaganiami EN 301 549 oraz – w zakresie, w jakim norma się do nich odwołuje – z WCAG 2.x.

---

### 1.2 Cel dokumentu

Celem dokumentu jest:

1. Zapewnienie jednolitej, powtarzalnej i dowodowej metodyki testowania zgodności.
2. Umożliwienie porównywalności wyników ocen realizowanych przez różne podmioty.
3. Uporządkowanie relacji między monitoringiem, przeglądami okresowymi, audytami pełnymi i procesami certyfikacyjnymi.
4. Zapewnienie interoperacyjności danych o wynikach testów (w tym zgodności z modelem EARL).
5. Wzmocnienie systemowego podejścia do utrzymania dostępności w czasie.

---

### 1.3 Zakres przedmiotowy

Metodyka obejmuje ocenę zgodności następujących kategorii produktów i usług TIK:

* Strony internetowe i aplikacje webowe.
* Aplikacje mobilne.
* Dokumenty elektroniczne (w szczególności PDF, dokumenty pakietów biurowych, e-publikacje).
* Oprogramowanie (desktop, klient–serwer, kioski, systemy dedykowane).
* Usługi wsparcia i dokumentację użytkownika, jeżeli objęte są zakresem oceny zgodności.

Metodyka ma charakter modułowy (rozdział 8) i może być stosowana proporcjonalnie do rodzaju oraz złożoności produktu.

---

### 1.4 Słownik pojęć operacyjnych

Poniższe definicje mają charakter operacyjny na potrzeby stosowania niniejszej Podstawy.

#### Ocena zgodności

Zorganizowany proces weryfikacji spełnienia wymagań EN 301 549 w określonym zakresie i środowisku, realizowany na poziomie głębokości A/B/C.

#### Poziom głębokości (A/B/C)

Klasyfikacja zakresu i kompletności oceny:

* **Poziom A (ocena rdzeniowa)** – minimalny zestaw testów dotyczących fundamentów percepcji, operowalności i&nbsp;podstawowej programowej dostępności.
* **Poziom B (ocena reprezentatywna)** – pełne pokrycie reprezentatywnej próbki obejmującej wszystkie obszary funkcjonalne produktu.
* **Poziom C (ocena pełna)** – pełne pokrycie wszystkich wymagań normy oraz wszystkich procesów i ról użytkownika.

#### Profil testowania (Profil 0–4)

Tryb zastosowania oceny (scenariusz organizacyjny lub regulacyjny), określający cel i minimalny wymagany poziom głębokości.

#### Procedura testowa

Zdefiniowany, powtarzalny opis sposobu weryfikacji konkretnego wymagania normatywnego, zawierający kroki testowe, kryteria oceny i wymagane dowody.

#### Test (wykonanie testu)

Praktyczne wykonanie procedury testowej w odniesieniu do wskazanego zakresu (np. widoku, komponentu, procesu) w&nbsp;określonym środowisku.

#### Monitoring

Stały zestaw działań służących wykrywaniu regresji dostępności i generowaniu sygnałów do interwencji procesowej w&nbsp;UMPTZ (np. skanowanie, analiza zmian, analiza zgłoszeń użytkowników, obserwacja trendów).

#### Ocena okresowa (w tym ocena roczna)

Sformalizowane podsumowanie stanu zgodności w określonym czasie, realizowane na podstawie danych z monitoringu i&nbsp;rejestru, uzupełnione brakującymi testami do wymaganego poziomu (dla oceny rocznej – Poziom B).

#### Audyt pełny

Ocena zgodności realizowana na Poziomie C, obejmująca pełne pokrycie wymagań normy oraz procesów i ról użytkownika, z&nbsp;rozbudowaną dokumentacją dowodową.

#### Niezgodność

Stwierdzenie niespełnienia wymagania normatywnego w zakresie objętym testem (wynik FAIL), udokumentowane dowodami.

#### Rejestr niezgodności

Centralny, ciągły zbiór informacji o niezgodnościach, ich statusach, wadze, planach naprawczych i weryfikacji, stanowiący rdzeń danych systemu UMPTZ.

#### Regresja dostępności

Pogorszenie stanu zgodności wynikające ze zmiany produktu (kodu, konfiguracji, treści, komponentów lub procesu), powodujące powstanie nowych niezgodności lub ponowne pojawienie się niezgodności wcześniej usuniętych.

#### Dowód

Materiał umożliwiający niezależną weryfikację wyniku testu (np. opis kroku, zrzut ekranu, nagranie, log AT, identyfikacja wersji).

#### Technologia asystująca (AT)

Oprogramowanie lub funkcja systemowa wspierająca użytkownika w dostępie do treści i interfejsu (np. czytnik ekranu, powiększenie systemowe).

#### Reprezentatywność próbki

Właściwość próbki, polegająca na objęciu wszystkich obszarów funkcjonalnych i typów widoków/komponentów istotnych dla korzystania z produktu, w celu uzyskania wiarygodnej oceny Poziomu B.

---

### 1.5 Konwencje redakcyjne

1. Terminy **Poziom A/B/C** odnoszą się wyłącznie do głębokości oceny.
2. Terminy **Profil 0–4** odnoszą się wyłącznie do trybu zastosowania.
3. Określenie **test** oznacza wykonanie procedury testowej w danym zakresie; określenie **procedura testowa** oznacza opis metody.
4. Określenie **ocena roczna** oznacza ocenę okresową wymaganą do aktualizacji deklaracji, realizowaną co najmniej na Poziomie B.
5. Określenie **audyt pełny** oznacza ocenę na Poziomie C.

---

## 2. Zasady nadrzędne i model dowodowy

### 2.1 Zasady nadrzędne testowania

Proces testowania zgodności opiera się na następujących zasadach:

1. **Prymat wymagania normatywnego** – test weryfikuje spełnienie wymagania normy, a nie zastosowanie określonej techniki implementacyjnej.
2. **Dowodowość** – każdy wynik testu musi być poparty możliwymi do zweryfikowania dowodami.
3. **Powtarzalność** – test powinien być możliwy do odtworzenia przez innego testera w porównywalnym środowisku.
4. **Komplementarność metod** – testy manualne są obowiązkowe; testy z wykorzystaniem technologii asystujących (AT) stosuje się tam, gdzie wymaganie dotyczy interakcji programowej; narzędzia automatyczne mają charakter wspomagający.
5. **Proporcjonalność** – zakres i głębokość testów powinny być dostosowane do celu oceny (rozdział 5) oraz poziomu głębokości A/B/C (rozdział 3).

---

### 2.2 Model klasyfikacji wyników (EARL)

Wyniki testów klasyfikowane są zgodnie z modelem EARL (Evaluation and Report Language) opracowanym przez W3C.

Dopuszczalne wartości wyniku:

* **PASS (earl:passed)** – wymaganie zostało spełnione w zakresie objętym testem.
* **FAIL (earl:failed)** – wymaganie nie zostało spełnione w zakresie objętym testem.
* **N/A (earl:inapplicable)** – wymaganie nie ma zastosowania do badanego elementu, funkcjonalności lub produktu (wymagane uzasadnienie).
* **CANNOT TELL (earl:cannotTell)** – brak możliwości jednoznacznego rozstrzygnięcia na podstawie przeprowadzonych czynności testowych (wymagane uzasadnienie).

Każdy wynik musi być powiązany z:

* identyfikatorem testu,
* odniesieniem do odpowiedniego punktu EN 301 549 (oraz WCAG, jeżeli dotyczy),
* jednoznacznym określeniem zakresu (widok, komponent, proces),
* zestawem dowodów.

---

### 2.3 Klasyfikacja wagi niezgodności

Klasyfikacja wagi niezgodności (krytyczna, poważna, umiarkowana, niska) stanowi warstwę analityczną odrębną od oceny PASS/FAIL.

Waga niezgodności określa wpływ problemu na wykonalność zadania przez użytkownika i powinna być uzasadniona opisem scenariusza oraz grup użytkowników dotkniętych barierą.

---

## 3. Uniwersalny Model Procesu Testowania Zgodności (UMPTZ)

### 3.1 Założenie modelu

UMPTZ opiera się na założeniu, że dostępność jest cechą dynamiczną produktu cyfrowego, wymagającą stałego monitorowania i reakcji na zmiany.

Monitoring stanowi oś systemu zgodności, a oceny okresowe są elementem wtórnym i raportowym.

Model ma charakter pętli:

Monitoring – Analiza sygnału – Test (A/B/C) – Rejestr – Naprawa – Retest – powrót do monitoringu

---

### 3.2 Monitoring jako warstwa stała

Monitoring obejmuje w szczególności:

* cykliczne skanowanie automatyczne,
* analizę zmian produktowych i wdrożeń,
* analizę zgłoszeń użytkowników,
* obserwację trendów i powtarzalnych źródeł błędów.

Monitoring pełni funkcję detekcyjną, prewencyjną i diagnostyczną.

---

### 3.3 Poziomy głębokości oceny

#### Poziom A – Ocena rdzeniowa

Obejmuje weryfikację fundamentów operowalności, percepcji i podstawowej programowej dostępności. Stosowana w&nbsp;profilach Przegląd wstępny i Fundamenty zgodności.

#### Poziom B – Ocena reprezentatywna

Obejmuje pełne pokrycie reprezentatywnej próbki wszystkich obszarów funkcjonalnych produktu. Stanowi minimalny poziom wymagany dla oceny rocznej.

#### Poziom C – Ocena pełna

Obejmuje pełne pokrycie wszystkich wymagań normy oraz wszystkich procesów i ról użytkownika. Stosowana w audytach pełnych i procesach certyfikacyjnych.

---

### 3.4 Ocena roczna w modelu UMPTZ

Ocena roczna:

* wykorzystuje dane zgromadzone w procesie monitoringu,
* uzupełnia ewentualne braki do poziomu B,
* formalizuje aktualny stan zgodności w deklaracji dostępności.

Ocena roczna nie zastępuje monitoringu i nie stanowi jedynego mechanizmu utrzymania zgodności.

---

## 4. Rejestr niezgodności jako rdzeń systemu danych

### 4.1 Rola rejestru

Rejestr niezgodności stanowi centralne źródło informacji o stanie zgodności produktu.

Rejestr jest dokumentem ciągłym, aktualizowanym w wyniku działań monitoringu oraz ocen A/B/C.

---

### 4.2 Minimalna struktura rejestru

Rejestr powinien zawierać co najmniej:

* identyfikator niezgodności,
* odniesienie do EN 301 549 (oraz WCAG, jeżeli dotyczy),
* lokalizację problemu (widok, komponent, proces),
* opis wpływu na użytkownika,
* kategorię wagi,
* datę wykrycia,
* plan działań naprawczych,
* status realizacji,
* datę weryfikacji naprawy.

---

### 4.3 Relacja rejestru do deklaracji dostępności

Deklaracja dostępności powinna odwoływać się do aktualnego stanu rejestru, wskazując zakres przeprowadzonej oceny oraz najistotniejsze niezgodności.

Rejestr stanowi podstawę planowania działań naprawczych, raportowania postępów oraz analiz trendów.

---

## 5. Profile testowania jako scenariusze zastosowania

### 5.1 Charakter profili

Profile testowania określają tryb zastosowania oceny zgodności w określonym kontekście organizacyjnym lub regulacyjnym.

Profile nie definiują samodzielnie głębokości testu. Głębokość testu określana jest przez poziomy A/B/C opisane w&nbsp;rozdziale&nbsp;3.

Każdy profil musi jednoznacznie wskazywać:

* cel oceny,
* minimalny wymagany poziom głębokości (A/B/C),
* zakres próbki,
* możliwość wykorzystania wyniku do celów deklaracyjnych lub certyfikacyjnych.

---

### 5.2 Profil 0 – Przegląd wstępny

#### Cel

Wstępna identyfikacja barier krytycznych przed publikacją produktu, wdrożeniem nowej wersji lub podjęciem decyzji o&nbsp;dalszej ocenie.

#### Minimalna głębokość

Poziom A (ograniczony zakres).

#### Charakterystyka

* Ograniczona próbka.
* Koncentracja na barierach uniemożliwiających wykonanie podstawowych zadań.
* Brak pełnego pokrycia wymagań normy.

#### Status regulacyjny

Nie stanowi podstawy deklaracji dostępności ani certyfikacji.

---

### 5.3 Profil 1 – Fundamenty zgodności

#### Cel

Ocena strukturalnej zdolności produktu do osiągnięcia zgodności.

#### Minimalna głębokość

Poziom A.

#### Charakterystyka

* Weryfikacja kluczowych kryteriów rdzeniowych.
* Test głównego scenariusza zadaniowego.
* Test obsługi klawiaturą.
* Test z wykorzystaniem technologii asystujących w zakresie podstawowej interakcji.

#### Status regulacyjny

Nie stanowi podstawy deklaracji dostępności.
Stanowi podstawę decyzji o gotowości do oceny reprezentatywnej (Poziom B).

---

### 5.4 Profil 2 – Przegląd cząstkowy

#### Cel

Ocena wybranego modułu, komponentu, procesu lub obszaru funkcjonalnego.

#### Minimalna głębokość

Poziom A lub B w obrębie badanego zakresu.

#### Charakterystyka

* Pełne pokrycie wymagań w obrębie zdefiniowanego zakresu.
* Uwzględnienie wszystkich stanów (błąd, sukces, komunikaty).
* Możliwość agregacji wyników w czasie.

#### Status regulacyjny

Może stanowić element oceny rocznej po agregacji do poziomu B obejmującego wszystkie obszary funkcjonalne.

---

### 5.5 Profil 3 – Przegląd roczny

#### Cel

Realizacja obowiązku okresowej weryfikacji dostępności i aktualizacji deklaracji.

#### Minimalna głębokość

Poziom B (ocena reprezentatywna).

#### Charakterystyka

* Reprezentatywna próbka obejmująca wszystkie obszary funkcjonalne produktu.
* Weryfikacja zmian wprowadzonych od poprzedniej oceny.
* Wykorzystanie danych zgromadzonych w rejestrze niezgodności i monitoringu.

#### Status regulacyjny

Może stanowić podstawę deklaracji dostępności.
Nie stanowi podstawy trwałej certyfikacji.

---

### 5.6 Profil 4 – Audyt pełny

#### Cel

Kompleksowa ocena zgodności produktu z EN 301 549.

#### Minimalna głębokość

Poziom C (ocena pełna).

#### Charakterystyka

* Pełne pokrycie wszystkich wymagań normy.
* Pełna reprezentatywna próbka wszystkich procesów i ról użytkownika.
* Rozbudowana dokumentacja dowodowa.

#### Status regulacyjny

Może stanowić podstawę deklaracji dostępności.
Może stanowić podstawę certyfikacji wyłącznie w odniesieniu do produktów stabilnych (np. wersjonowanego oprogramowania), z wyłączeniem dynamicznych serwisów o ciągłej zmianie treści.

---

## 6. Zasady doboru próbki i środowisko testowe

### 6.1 Zasady ogólne doboru próbki

Dobór próbki ma zapewnić wiarygodną ocenę zgodności w odniesieniu do rzeczywistego sposobu korzystania z produktu.

Próbka powinna:

1. Obejmować wszystkie kluczowe obszary funkcjonalne produktu.
2. Uwzględniać różne typy treści i komponentów interfejsu.
3. Odzwierciedlać rzeczywiste scenariusze użytkownika.
4. Być proporcjonalna do wielkości i złożoności systemu.

Dobór próbki musi być udokumentowany w planie testów.

---

### 6.2 Reprezentatywność próbki (Poziom B)

W przypadku oceny reprezentatywnej (Poziom B) próbka powinna obejmować co najmniej:

* stronę startową / ekran główny,
* wszystkie typy podstron / widoków o odmiennym układzie,
* kluczowe procesy wieloetapowe,
* formularze (w tym walidację i komunikaty błędów),
* komponenty dynamiczne (modale, rozwijane sekcje, komunikaty o stanie),
* elementy generowane dynamicznie,
* przypadki błędu i sytuacje graniczne.

Jeżeli system posiada wiele instancji tego samego komponentu o identycznej strukturze, dopuszcza się badanie reprezentatywnej liczby instancji, pod warunkiem uzasadnienia.

---

### 6.3 Pełne pokrycie (Poziom C)

W przypadku oceny pełnej (Poziom C) próbka obejmuje:

* wszystkie unikalne typy widoków,
* wszystkie procesy użytkownika,
* wszystkie role użytkownika,
* wszystkie komponenty interaktywne,
* wszystkie warianty stanów systemu.

Poziom C wymaga pełnej identyfikacji zakresu produktu przed rozpoczęciem testów.

---

### 6.4 Rozszerzanie próbki

Jeżeli w trakcie testów wykryte zostaną niezgodności o charakterze systemowym (np. powtarzalne błędy komponentu bazowego), próbka powinna zostać rozszerzona w celu określenia skali problemu.

Rozszerzenie próbki powinno być udokumentowane wraz z uzasadnieniem.

---

### 6.5 Minimalne środowisko testowe

Środowisko testowe powinno zapewniać powtarzalność i porównywalność wyników.

Minimalne wymagania obejmują:

* aktualne stabilne wersje głównych przeglądarek internetowych,
* aktualną wersję systemu operacyjnego właściwego dla danej platformy,
* co najmniej jedną technologię asystującą (czytnik ekranu) dla każdej testowanej platformy,
* testy obsługi klawiaturą,
* testy przy powiększeniu (minimum 200% oraz – jeżeli dotyczy – 400%),
* testy w trybie zmiany orientacji (jeżeli dotyczy),
* weryfikację komunikatów o stanie przy użyciu AT.

Konfiguracja środowiska testowego (OS, przeglądarka, wersja AT, ustawienia) musi być udokumentowana.

---

### 6.6 Narzędzia automatyczne

Narzędzia automatyczne:

* mogą wspierać identyfikację potencjalnych niezgodności,
* nie zastępują testów manualnych,
* nie stanowią samodzielnej podstawy oceny zgodności.

Brak błędów wykrytych przez narzędzie automatyczne nie oznacza zgodności produktu.

---

## 7. Procedury testowe (format atomu metodyki)

### 7.1 Rola procedury testowej

Procedura testowa stanowi podstawową jednostkę ("atom") metodyki testowania zgodności.

Każde wymaganie normatywne objęte Podstawą testowania powinno posiadać co najmniej jedną zdefiniowaną procedurę testową.

Procedura testowa musi być:

* jednoznacznie zidentyfikowana,
* powiązana z wymaganiem EN 301 549 (oraz WCAG, jeżeli dotyczy),
* możliwa do powtórzenia,
* oparta na kryteriach efektu, a nie na wskazaniu konkretnej techniki implementacyjnej.

---

### 7.2 Struktura obowiązkowa procedury testowej

Każda procedura testowa musi zawierać następujące elementy:

1. **Identyfikator testu** – unikalny kod umożliwiający jednoznaczne odwołanie się do testu.
2. **Nazwa testu** – zwięzły opis weryfikowanego efektu.
3. **Odniesienie normatywne** – punkt EN 301 549 oraz odpowiadające kryterium sukcesu WCAG (jeżeli dotyczy).
4. **Zakres zastosowania** – określenie, kiedy test ma zastosowanie.
5. **Poziom głębokości (A/B/C)** – wskazanie, w jakim poziomie oceny test jest obowiązkowy.
6. **Tryb zastosowania (profil)** – wskazanie, w jakich profilach test jest wykonywany.
7. **Kroki testowe** – opis czynności testera.
8. **Oczekiwany rezultat** – precyzyjny opis stanu zgodnego.
9. **Kryteria oceny (PASS/FAIL/N/A/CANNOT TELL)**.
10. **Wymagane dowody** – minimalny zakres dokumentacji.
11. **Zasady klasyfikacji wagi (jeżeli FAIL)**.
12. **Metadane wykonania testu** – środowisko, data, tester.

---

### 7.3 Kroki testowe

Kroki testowe powinny być podzielone na:

* test manualny,
* test z wykorzystaniem technologii asystujących (jeżeli wymagany),
* weryfikację wspomaganą narzędziami (opcjonalnie).

Opis kroków powinien być wystarczająco precyzyjny, aby umożliwić ich odtworzenie przez innego testera.

---

### 7.4 Oczekiwany rezultat

Oczekiwany rezultat powinien być sformułowany w języku efektu dostępnościowego, a nie w języku implementacyjnym.

Przykładowo:

* zamiast: „element posiada atrybut aria-label”,
* należy wskazać: „użytkownik technologii asystującej otrzymuje jednoznaczną nazwę elementu pozwalającą zrozumieć jego funkcję”.

---

### 7.5 Kryteria oceny

Procedura musi precyzyjnie określać:

* kiedy wynik uznaje się za PASS,
* kiedy wynik uznaje się za FAIL,
* w jakich warunkach dopuszczalne jest N/A,
* w jakich sytuacjach możliwe jest CANNOT TELL.

W przypadku N/A oraz CANNOT TELL wymagane jest uzasadnienie.

---

### 7.6 Wymagane dowody

Minimalny zestaw dowodów obejmuje:

* identyfikację miejsca testu (URL, ekran, plik, wersja),
* opis wykonanego kroku,
* wynik testu,
* zrzut ekranu, nagranie lub log technologii asystującej (jeżeli dotyczy).

Dowody powinny umożliwiać niezależną weryfikację wyniku.

---

### 7.7 Relacja procedury do rejestru niezgodności

W przypadku wyniku FAIL:

* do rejestru niezgodności wprowadza się odwołanie do identyfikatora testu,
* opisuje się wpływ na użytkownika,
* przypisuje kategorię wagi,
* określa plan działań naprawczych.

Identyfikator testu stanowi łącznik między procedurą testową a rejestrem.

---

### 7.8 Poziom pewności oceny

W uzasadnionych przypadkach tester może określić poziom pewności oceny (wysoki / średni / niski), w szczególności gdy:

* dostęp do środowiska był ograniczony,
* wynik zależy od konfiguracji użytkownika,
* wymagane były dodatkowe dane.

Informacja o poziomie pewności nie zastępuje klasyfikacji PASS/FAIL, lecz stanowi metadane pomocnicze.

---

## 8. Moduły normatywne

### 8.1 Zasada modułowości

Podstawa testowania zgodności TIK ma strukturę modułową.

Moduły normatywne grupują procedury testowe według zakresu normy EN 301 549 oraz typu produktu. Każdy moduł:

* zawiera zestaw procedur testowych powiązanych z określonym rozdziałem EN 301 549,
* definiuje zakres stosowania dla danego typu produktu,
* wskazuje, które procedury są obowiązkowe w poziomach A/B/C.

Modułowość umożliwia:

* aktualizację wybranych obszarów bez zmiany całego dokumentu,
* dostosowanie zakresu testów do rodzaju produktu,
* zachowanie spójności metodyki przy zmianach normy EN 301 549.

---

### 8.2 Moduł Web (EN 9.x)

Moduł Web obejmuje wymagania EN 301 549 odnoszące się do treści i usług internetowych.

Zakres obejmuje w szczególności:

* wymagania odpowiadające kryteriom sukcesu WCAG 2.x,
* wymagania dotyczące interfejsów użytkownika w środowisku przeglądarkowym,
* wymagania dotyczące dynamicznych komponentów i komunikatów o stanie.

Moduł Web jest stosowany do:

* stron internetowych,
* aplikacji webowych,
* systemów dostępnych przez przeglądarkę internetową.

---

### 8.3 Moduł Dokumenty (EN 10.x)

Moduł Dokumenty obejmuje wymagania dotyczące dokumentów elektronicznych.

Zakres obejmuje w szczególności:

* strukturę logiczną dokumentu,
* alternatywy tekstowe dla treści nietekstowych,
* kolejność odczytu,
* dostępność formularzy w dokumentach,
* właściwości metadanych i oznaczeń semantycznych.

Moduł ten stosuje się do:

* plików PDF,
* dokumentów pakietów biurowych,
* publikacji elektronicznych.

---

### 8.4 Moduł Oprogramowanie (EN 11.x)

Moduł Oprogramowanie obejmuje wymagania odnoszące się do oprogramowania niebędącego stroną internetową.

Zakres obejmuje w szczególności:

* dostępność interfejsu użytkownika aplikacji desktopowych,
* dostępność aplikacji mobilnych (w zakresie nieobjętym modułem Web),
* obsługę klawiatury i alternatywnych metod wejścia,
* współpracę z technologiami asystującymi na poziomie systemowym.

Moduł ten stosuje się do:

* aplikacji desktopowych,
* aplikacji mobilnych,
* oprogramowania specjalistycznego i dedykowanego.

---

### 8.5 Wymagania EN wykraczające poza WCAG

EN 301 549 zawiera wymagania wykraczające poza zakres WCAG 2.x.

Dla tych wymagań opracowywane są odrębne procedury testowe, które:

* wskazują specyficzny zakres zastosowania,
* definiują metody weryfikacji adekwatne do charakteru wymagania,
* określają poziom głębokości (A/B/C), w którym są obowiązkowe.

---

### 8.6 Mapowanie normatywne i identyfikacja testów

Każda procedura testowa w modułach normatywnych musi zawierać:

* odniesienie do punktu EN 301 549,
* odniesienie do kryterium sukcesu WCAG (jeżeli dotyczy),
* identyfikator testu zgodny z jednolitą konwencją nazewnictwa,
* wskazanie poziomu głębokości (A/B/C), w którym test jest wymagany.

Spójne mapowanie normatywne zapewnia:

* przejrzystość relacji między wymaganiem a procedurą,
* możliwość agregacji wyników,
* interoperacyjność danych raportowych.

---

### 8.7 Aktualizacja modułów

W przypadku zmian normy EN 301 549 lub WCAG, aktualizacji podlegają wyłącznie te moduły, których zmiana dotyczy.

Każda aktualizacja modułu powinna być:

* jednoznacznie wersjonowana,
* opisana w rejestrze zmian,
* powiązana z datą wejścia w życie.

Zachowanie modułowej struktury umożliwia stabilność systemu przy jednoczesnej elastyczności aktualizacyjnej.

---
