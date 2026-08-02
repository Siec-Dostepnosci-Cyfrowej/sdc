---
id: stosowanie-ai-w-audytowaniu-i-naprawie 
title: Zasady wykorzystania sztucznej inteligencji AI w procesach audytowania i napraw dostępności cyfrowej 
description: Zalecenie określa ramowe celele oraz zasady bezpiecznego, świadomego i przejrzystego wykorzystywania sztucznej inteligencji jako narzędzia wspomagającego audytowanie i naprawę dostępności cyfrowej 
sidebar_label: Zalecenie 
sidebar_position: 3 
keywords: [dostępność cyfrowa,cykl życia TIK, dostępność cyfrowa,deklaracja dostępności, monitoring dostępności, przegląd dostępności, przegląd diagnostyczny, audyt zgodności, ocena stanu zgodności] 
tags: [dostępność cyfrowa,cykl życia TIK, dostępność cyfrowa,deklaracja dostępności, monitoring dostępności, przegląd dostępności, przegląd diagnostyczny, audyt zgodności, ocena stanu zgodności] 
opracowanie: Maciej Budzisz 
data_zgloszenia: 22 maja 2026 r. 
ostatnia_aktualizacja: 22 maja 2026 r. 
wersja_robocza: true
---


## 1. Cel zalecenia
Celem niniejszego zalecenia jest określenie zasad bezpiecznego, kontrolowanego i przejrzystego wykorzystania sztucznej inteligencji w procesach audytowania oraz napraw dostępności cyfrowej. Zalecenie definiuje zakres dopuszczalnego użycia AI, minimalne standardy jakości i bezpieczeństwa, a także zasady odpowiedzialności człowieka za ostateczne decyzje dotyczące zgodności. Dokument ma wspierać organizacje w zwiększaniu efektywności procesów kontrolnych przy jednoczesnym zapewnieniu pełnej jawności metod badawczych, ochrony danych oraz rzetelności wyników prezentowanych odbiorcom końcowym.

## 2. Zalecenie
Korzystanie ze sztucznej inteligencji (ang. Artificial Intelligence) podczas oceny zgodności ma charakter opcjonalny i nie może zastępować analizy eksperta. AI może wspierać wybrane etapy audytu lub napraw, jednak odpowiedzialność za ostateczną ocenę zgodności zawsze spoczywa na człowieku.

Wykorzystanie AI musi być poprzedzone określeniem celów operacyjnych oraz wdrożeniem zasad bezpiecznego stosowania, obejmujących m.in. jawność metod badawczych, dokumentowanie wpływu AI na wynik audytu oraz zatwierdzanie wszystkich automatycznych analiz przez eksperta.

Odbiorca raportu ma prawo do jednoznacznej informacji o zakresie użycia AI w tych elementach, które wpływają na treść raportu lub ocenę zgodności, w szczególności w obszarach automatycznej analizy, klasyfikacji błędów czy generowania treści. Jawność nie obejmuje technicznych zastosowań AI, które nie wpływają na wynik audytu ani nie wiążą się z ryzykiem przetwarzania danych użytkowników.

Dokument nie wprowadza obowiązku stosowania AI, lecz określa zasady jej bezpiecznego wykorzystania w sytuacjach, gdy wykonawca decyduje się na automatyzację wybranych etapów audytu lub napraw.

## 3. Rekomendacje

### 3.1. Rezygnacja z obligatoryjności na rzecz podejścia celowego

Wykorzystanie technologii sztucznej inteligencji w procesach badania dostępności cyfrowej ma charakter dobrowolny i powinno wynikać wyłącznie z jasno określonych celów operacyjnych. Automatyzacja jest uzasadniona jedynie wtedy, gdy wspiera analizę błędów, identyfikację powtarzalnych problemów lub wyciąganie wniosków potrzebnych do planowania napraw.

AI może wspierać audyt poprzez masową analizę kodu, generowanie wstępnych propozycji naprawczych, wspomaganie implementacji poprawek oraz automatyzację tworzenia testów.

W sytuacjach, w których wprowadzone zmiany są objęte automatycznymi testami potwierdzającymi ich poprawne działanie, część procesu może być realizowana z mniejszym udziałem człowieka. Automatyczne testy ograniczają konieczność ręcznej weryfikacji poszczególnych poprawek, o ile ich wyniki są jednoznaczne, powtarzalne i zgodne z oczekiwanym efektem naprawy, natomiast ostateczna ocena zawsze należy do eksperta.

AI nie może zastępować człowieka w ocenie zgodności z normami dostępności. Wykonawca dokumentuje zarówno cel wdrożenia AI, jak i zakres jej wpływu na proces badawczy.

### 3.2. Wymóg pełnej transparentności i jawności (Prawo odbiorcy do informacji)

Podmiot wykonujący audyt z wykorzystaniem narzędzi sztucznej inteligencji ma obowiązek zapewnić pełną jawność tego faktu. Odbiorca raportu z audytu musi posiadać jednoznaczną świadomość oraz zostać wprost poinformowany, które elementy analizy, weryfikacji kodu lub generowania opisów alternatywnych były realizowane bądź wspomagane przez systemy AI. Brak takiej informacji narusza standardy rzetelności i transparentności procedur publicznych.

### 3.3. Nadzór ekspercki i odpowiedzialność

Pełną odpowiedzialność za treść raportu oraz ostateczną ocenę zgodności z normami dostępności ponosi audytor będący człowiekiem. Wyniki generowane przez systemy AI mogą zawierać błędy kontekstowe, nieścisłości lub halucynacje, dlatego nie mogą być traktowane jako samodzielne źródło prawdy.

Każdy wynik uzyskany z wykorzystaniem AI, w szczególności sugestie dotyczące klasyfikacji błędów, opisów alternatywnych czy propozycji napraw, musi zostać poddany krytycznej weryfikacji eksperckiej przed uwzględnieniem go w oficjalnej dokumentacji lub raporcie.

### 3.4. Bezpieczeństwo i ochrona zasobów informacyjnych

Z powodów bezpieczeństwa, ochrony prywatności oraz zachowania poufności zasobów informacyjnych korzystanie z zewnętrznych systemów sztucznej inteligencji, w szczególności modeli językowych przetwarzających dane poza organizacją, musi odbywać się w sposób kontrolowany.

Do takich systemów nie należy przekazywać żadnych zasobów, które mogą ujawniać dane wrażliwe, dane osobowe, klucze autoryzacyjne, poufne elementy infrastruktury teleinformatycznej ani inne informacje nieprzeznaczone do udostępniania poza podmiotem publicznym.

W praktyce oznacza to, że kod źródłowy, konfiguracje, logi oraz treści mogące zawierać dane użytkowników lub informacje o systemach wewnętrznych mogą być analizowane wyłącznie w środowiskach pozostających pod pełną kontrolą organizacji. Odpowiedzialność za właściwą klasyfikację danych oraz dobór bezpiecznych kanałów przetwarzania ponosi wykonawca audytu.

### 4. Przykładowe narzędzia AI wspierające audyt

Zastrzeżenie: Poniższa lista ma charakter wyłącznie poglądowy i edukacyjny. Wskazane narzędzia są jedynie przykładami dostępnych na rynku rozwiązań wspomagających proces badania dostępności. Nie stanowią one oficjalnie preferowanych, rekomendowanych ani certyfikowanych przez Sieć Dostępności Cyfrowej technologii. Wybór odpowiedniego narzędzia leży w gestii audytora.

- SiteLint – potężne, dostępne również w języku polskim narzędzie przeglądarkowe. Posiada zintegrowane wsparcie sztucznej inteligencji, która potrafi nie tylko zidentyfikować błędy, ale również objaśnić je prostym językiem, przygotować odpowiednie prompty do dalszej analizy czy wygenerować propozycje poprawionego kodu HTML.
- Rozwiązania rodziny axe (np. axe-linter / axe Developer Hub) – uznane w branży automatyczne walidatory kodu, które coraz częściej integrują asystentów AI do analizy kontekstowej i podpowiadania propozycji naprawy (remediation) złożonych problemów ze zgodnością z WAI-ARIA.
- Ogólne modele językowe i wizyjne (np. ChatGPT, Claude) – interfejsy czatowe modeli LLM/VLM, które przy zastosowaniu odpowiednich technik inżynierii zapytań (promptingu) mogą być traktowane jako asystenci do ręcznej analizy semantyki kodu HTML, struktury nagłówków czy wsparcia w generowaniu obiektywnych tekstów alternatywnych do zrzutów ekranu i grafik.

### 5. Kontekst organizacyjny i umiejscowienie w cyklu życia

Niniejsze zalecenie odnosi się bezpośrednio do etapu cyklu życia systemów i serwisów internetowych, obejmującego fazę ich bieżącego utrzymania, cyklicznego monitoringu oraz systematycznej ewaluacji dostępności. Wdrożenie przejrzystych zasad korzystania z AI pozwala na zachowanie ciągłości kontroli i wysokiej jakości kodu bez ryzyka wprowadzenia automatycznych błędów semantycznych do działających systemów publicznych.

### 6. Porównanie podejścia narzędziowego i regułowego

Właściwe usytuowanie AI jako narzędzia pomocniczego w procesie kontrolnym obrazuje poniższe zestawienie:
Kryterium	Automatyczne walidatory regułowe	Narzędzia AI (Wspomagające)
Charakter działania	Sztywna weryfikacja zero-jedynkowa składni.	Elastyczna analiza kontekstowa i semantyczna.
Poziom zobowiązania	Standard rynkowy i techniczny.	Opcjonalne wsparcie, zależne od celów audytu.
Wymóg jawności	Wskazanie nazwy programu w raporcie.	Obligatorna informacja dla odbiorcy o użyciu AI.

### 7. Podstawy prawne i rekomendowane źródła

- Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
- Rozporządzenie Parlamentu Europejskiego i Rady (UE) – Akt w sprawie sztucznej inteligencji (AI Act).
- Raport ekspercki: „Analiza możliwości wykorzystania sztucznej inteligencji w obszarze badania dostępności cyfrowej" (SAGES, IPI PAN, 2025).
