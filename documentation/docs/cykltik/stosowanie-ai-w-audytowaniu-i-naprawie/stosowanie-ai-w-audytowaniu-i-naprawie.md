---
id: stosowanie-ai-w-audytowaniu-i-naprawie 
title: Zasady wykorzystania sztucznej inteligencji AI w procesach oceniania dostępności cyfrowej oraz pracach naprawczych i doskonalących
description: Zalecenie określa ramowe celele oraz zasady bezpiecznego, świadomego i przejrzystego wykorzystywania sztucznej inteligencji jako narzędzia wspomagającego ocenianie dostępności cyfrowej oraz prace naprawcze i doskonalące
sidebar_label: Zalecenie 
sidebar_position: 3 
keywords: [dostępność cyfrowa,cykl życia TIK, dostępność cyfrowa,deklaracja dostępności, monitoring dostępności, przegląd dostępności, przegląd diagnostyczny, audyt zgodności, ocena stanu zgodności] 
tags: [dostępność cyfrowa,cykl życia TIK, dostępność cyfrowa,deklaracja dostępności, monitoring dostępności, przegląd dostępności, przegląd diagnostyczny, audyt zgodności, ocena stanu zgodności] 
opracowanie: Maciej Budzisz , Cezary Tomczyk , Stefan Wajda
data_zgloszenia: 22 maja 2026 r. 
ostatnia_aktualizacja: 03 sierpnia 2026 r. 
wersja_robocza: true
---

## 1. Cel zalecenia

Zalecenie określa zasady wykorzystywania systemów sztucznej inteligencji podczas oceny, naprawy i doskonalenia dostępności cyfrowej. Obejmuje zastosowania diagnostyczne, dokumentacyjne, naprawcze i testowe, w tym wykorzystanie modeli językowych i wizyjnych, asystentów programistycznych, agentów AI oraz narzędzi uzyskujących dostęp do zewnętrznych funkcji i danych.

## 2. Zalecenie

Korzystanie ze sztucznej inteligencji (ang. Artificial Intelligence) podczas oceny zgodności ma charakter opcjonalny i nie może zastępować analizy eksperta. AI może wspierać wybrane etapy oceny lub napraw, jednak odpowiedzialność za ostateczną ocenę zgodności zawsze spoczywa na człowieku.

Na potrzeby zalecenia należy odróżnić systemy AI od walidatorów regułowych i innych narzędzi automatycznych. Walidator regułowy wykonuje zdefiniowane testy i zwraca wyniki wynikające z określonych reguł. System AI generuje albo klasyfikuje wyniki na podstawie modelu, którego odpowiedzi mogą zależeć od kontekstu, konfiguracji i przekazanych instrukcji oraz mogą być niepełne, niepowtarzalne lub błędne. Zasady dotyczące AI stosuje się do funkcji, które rzeczywiście wykorzystują takie modele, a nie automatycznie do całego produktu, w którym funkcje te zostały umieszczone.

Zakres nadzoru należy określić przed rozpoczęciem danego zadania, z uwzględnieniem wpływu wyniku na ocenę dostępności lub sposób wykonania poprawki.

Zadania realizowane z wykorzystaniem AI dzielą się na:

1. zadania pomocnicze – obejmujące porządkowanie materiału, grupowanie podobnych problemów, przygotowywanie zestawień i inne czynności, których wynik nie przesądza o ocenie zgodności ani odbiorze poprawki;
2. zadania wymagające niezależnej weryfikacji eksperckiej – obejmujące w szczególności wykrywanie i klasyfikowanie problemów, przypisywanie wymagań dostępności, formułowanie wniosków oraz proponowanie lub generowanie poprawek;
3. zadania, których nie można powierzyć AI jako samodzielnemu wykonawcy – obejmujące stwierdzenie zgodności albo niezgodności, zatwierdzenie wyniku badania oraz podjęcie decyzji o odbiorze wykonanej poprawki.

Wyniki wygenerowane przez system AI nie mogą stanowić samodzielnej podstawy ustaleń, oceny zgodności ani decyzji o odbiorze wykonanej poprawki. Każdy wynik wykorzystany w procesie oceny albo naprawy wymaga niezależnej i krytycznej weryfikacji przez osobę posiadającą odpowiednie kompetencje.

Wykorzystanie AI musi być poprzedzone określeniem celu operacyjnego oraz oceną ryzyka. Ocena obejmuje:

1. wpływ wyniku AI na ocenę zgodności, treść raportu lub zakres naprawy;
2. możliwość niezależnego potwierdzenia wyniku;
3. konieczność wykonania testów manualnych i testów z technologiami asystującymi;
4. rodzaj, poufność i zakres przekazywanych danych;
5. poziom autonomii systemu oraz zakres jego uprawnień;
6. możliwość wystąpienia regresji;
7. skutki błędnego wyniku, błędnej poprawki albo nieuprawnionego działania systemu.

Zakres zabezpieczeń i weryfikacji należy dostosować do wyniku tej oceny.

Wykorzystanie AI wymaga zapewnienia transparentności w zakresie możliwym do udokumentowania przez wykonawcę. Dokumentacja obejmuje co najmniej cel wykorzystania AI, rodzaj powierzonych zadań, wpływ wyników AI na ocenę lub poprawkę, sposób ich niezależnej weryfikacji oraz nazwę i wersję zastosowanego modelu lub usługi. Brak dostępu do wewnętrznych mechanizmów działania zamkniętego modelu nie zwalnia z obowiązku opisania sposobu jego wykorzystania i kontroli wyników.

Użycie AI uznaje się za wpływające na wynik prac, jeżeli rezultat działania systemu został wykorzystany do wskazania lub pominięcia problemu, przypisania wymagania albo poziomu zgodności, sformułowania wniosku, wygenerowania treści raportu, przygotowania poprawki lub opracowania testu stanowiącego podstawę odbioru zmiany. Takie użycie podlega dokumentowaniu i niezależnej weryfikacji niezależnie od tego, czy zostało określone jako techniczne, pomocnicze lub redakcyjne.

Dokument nie wprowadza obowiązku stosowania AI, lecz określa zasady jej bezpiecznego wykorzystania w sytuacjach, gdy wykonawca decyduje się na automatyzację wybranych etapów oceny lub prac naprawczych.

## 3. Rekomendacje

### 3.1. Celowość stosowania sztucznej inteligencji

Wykorzystanie technologii sztucznej inteligencji w procesach badania dostępności cyfrowej ma charakter dobrowolny i powinno wynikać wyłącznie z jasno określonych celów operacyjnych. Automatyzacja jest uzasadniona jedynie wtedy, gdy wspiera analizę błędów, identyfikację powtarzalnych problemów lub wyciąganie wniosków potrzebnych do planowania napraw.

AI może wspierać ocenę poprzez masową analizę kodu, generowanie wstępnych propozycji naprawczych, wspomaganie implementacji poprawek oraz automatyzację tworzenia testów.

W sytuacjach, w których wprowadzone zmiany są objęte automatycznymi testami potwierdzającymi ich poprawne działanie, część procesu może być realizowana z mniejszym udziałem człowieka. Automatyczne testy ograniczają konieczność ręcznej weryfikacji poszczególnych poprawek, o ile ich wyniki są jednoznaczne, powtarzalne i zgodne z oczekiwanym efektem naprawy, natomiast ostateczna ocena zawsze należy do eksperta.

AI nie może zastępować człowieka w ocenie zgodności z normami dostępności. Wykonawca dokumentuje zarówno cel wdrożenia AI, jak i zakres jej wpływu na proces badawczy.

### 3.2. Transparentność wykorzystania AI i prawo odbiorcy do informacji

Jeżeli wykorzystanie AI miało wpływ na zakres analizy, treść raportu, przygotowanie poprawki lub sposób jej weryfikacji, odbiorca powinien otrzymać informację o:

1. celu wykorzystania AI;
2. rodzaju zadań powierzonych systemowi;
3. zakresie wpływu wyników AI na wykonane prace;
4. sposobie przeprowadzenia niezależnej weryfikacji;
5. zastosowanych testach manualnych;
6. nazwie i wersji wykorzystanego modelu lub usługi.

Przykład informacji w raporcie:

»W procesie oceny wykorzystano system AI do wstępnej analizy kodu i grupowania podobnych problemów. Wyniki zostały niezależnie zweryfikowane przez eksperta i nie stanowiły samodzielnej podstawy oceny zgodności.«

Użycie AI do generowania lub modyfikowania kodu, automatyzacji wdrożenia, tworzenia testów albo analizowania ich wyników podlega dokumentowaniu wewnętrznemu. Jeżeli rezultat takiego użycia wpłynął na zakres naprawy, działanie rozwiązania lub decyzję o odbiorze poprawki, informację o wykorzystaniu AI należy również przekazać odbiorcy. Zastosowania te nie mogą być automatycznie uznawane za czysto techniczne, ponieważ mogą bezpośrednio wpływać na dostępność.

Brak wymaganej informacji o istotnym wykorzystaniu AI należy traktować jako naruszenie zasad rzetelności i transparentności określonych w niniejszym zaleceniu.

### 3.3. Nadzór ekspercki i odpowiedzialność

Pełną odpowiedzialność za treść raportu oraz ostateczną ocenę zgodności ponosi oceniający. Wyniki generowane przez systemy AI mogą zawierać błędy kontekstowe, nieścisłości lub halucynacje, dlatego nie mogą być traktowane jako samodzielne źródło prawdy.

Każdy wynik uzyskany z wykorzystaniem AI, w szczególności sugestie dotyczące klasyfikacji błędów, opisów alternatywnych czy propozycji napraw, musi zostać poddany krytycznej weryfikacji eksperckiej przed uwzględnieniem go w oficjalnej dokumentacji lub raporcie.

### 3.4. Bezpieczeństwo i ochrona zasobów informacyjnych

Z powodów bezpieczeństwa, ochrony prywatności oraz zachowania poufności zasobów informacyjnych korzystanie z zewnętrznych systemów sztucznej inteligencji, w szczególności modeli językowych przetwarzających dane poza organizacją, musi odbywać się w sposób kontrolowany.

Do takich systemów nie należy przekazywać żadnych zasobów, które mogą ujawniać dane wrażliwe, dane osobowe, klucze autoryzacyjne, poufne elementy infrastruktury teleinformatycznej ani inne informacje nieprzeznaczone do udostępniania poza podmiotem publicznym.

W praktyce oznacza to, że kod źródłowy, konfiguracje, logi oraz treści mogące zawierać dane użytkowników lub informacje o systemach wewnętrznych mogą być analizowane wyłącznie w środowiskach pozostających pod pełną kontrolą organizacji. Odpowiedzialność za właściwą klasyfikację danych oraz dobór bezpiecznych kanałów przetwarzania ponosi wykonawca audytu/oceny.

## 4. Kategorie narzędzi wspierających ocenę i naprawę

W procesie oceny i naprawy dostępności mogą być wykorzystywane:

1. walidatory regułowe – sprawdzające jednoznaczne właściwości techniczne na podstawie zdefiniowanych reguł;
2. modele językowe i wizyjne – wspierające analizę kodu, treści, dokumentów i interfejsów;
3. asystenci programistyczni – proponujący lub generujący zmiany w kodzie;
4. agenci AI – wykonujący wieloetapowe zadania z wykorzystaniem udostępnionych narzędzi;
5. narzędzia korzystające z MCP – uzyskujące dostęp do zewnętrznych funkcji i źródeł danych;
6. narzędzia generujące lub wykonujące testy.

Zakres weryfikacji należy określać na podstawie sposobu działania narzędzia, powierzonych mu zadań, dostępnych uprawnień i wpływu wyniku na ocenę lub poprawkę. Aktualne przykłady produktów mogą zostać umieszczone w osobnym, regularnie aktualizowanym załączniku.

### 5. Kontekst organizacyjny i umiejscowienie w cyklu życia

Niniejsze zalecenie odnosi się do etapu cyklu życia systemów i serwisów internetowych obejmującego ich bieżące utrzymanie, monitorowanie oraz systematyczną ewaluację dostępności. W tej fazie szczególnie istotne jest stosowanie przejrzystych zasad korzystania z narzędzi sztucznej inteligencji, tak aby wspierały one procesy diagnostyczne i analityczne bez wprowadzania niezamierzonych zmian w strukturze lub znaczeniu kodu.

Jasne reguły pracy z AI pozwalają zachować ciągłość kontroli jakości oraz spójność procesów utrzymaniowych, a jednocześnie zapewniają, że ostateczne decyzje dotyczące wdrażania zmian pozostają w gestii ekspertów odpowiedzialnych za utrzymanie systemu.

### 6. Porównanie podejścia narzędziowego i regułowego

W procesie oceny dostępności cyfrowej narzędzia automatyczne oraz rozwiązania oparte na sztucznej inteligencji pełnią odmienne funkcje i wymagają odmiennego podejścia metodologicznego. Poniższe zestawienie obrazuje kluczowe różnice między klasycznymi walidatorami regułowymi a narzędziami AI wykorzystywanymi jako wsparcie eksperckie.

#### Charakter działania

Walidatory regułowe sprawdzają zgodność na podstawie z góry ustalonych reguł i list kontrolnych.

Narzędzia AI analizują kontekst, interpretują znaczenie elementów i potrafią wychwycić problemy, które nie wynikają bezpośrednio z prostych reguł.

#### Poziom zobowiązania

Walidatory regułowe stanowią standardowy element procesu oceny i są powszechnie stosowane jako narzędzia bazowe.

Narzędzia AI są naturalnym uzupełnieniem warsztatu oceniającego, a zakres ich użycia zależy od celów operacyjnych, charakteru analizowanych treści oraz przyjętej metodologii.

#### Wymóg jawności

W przypadku walidatorów regułowych wystarczające jest wskazanie użytego narzędzia w dokumentacji technicznej lub metodologicznej.

W przypadku narzędzi AI konieczne jest jednoznaczne poinformowanie odbiorcy raportu o zakresie ich użycia w elementach wpływających na wynik oceny.

## 7. Podstawy prawne, normy i materiały pomocnicze

### 7.1. Akty prawne

* Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2024/1689 z dnia 13 czerwca 2024 r. w sprawie ustanowienia zharmonizowanych przepisów dotyczących sztucznej inteligencji.
* Przepisy dotyczące ochrony danych osobowych – jeżeli system AI przetwarza dane osobowe.
* Przepisy dotyczące dostępności cyfrowej właściwe dla ocenianego rozwiązania.

### 7.2. Normy i standardy techniczne

* WCAG;
* EN 301 549;
* dokumenty W3C dotyczące metod oceny dostępności.

### 7.3. Materiały pomocnicze

* dokumentacja wykorzystywanych walidatorów;
* dokumentacja modeli, agentów i narzędzi AI;
* dokumentacja używanych technologii asystujących;
* opisy procedur testów manualnych.

Nie każdy przypadek wykorzystania AI podczas oceny lub naprawy dostępności podlega takim samym obowiązkom wynikającym z rozporządzenia 2024/1689. Zasady określone w niniejszym zaleceniu stanowią standard postępowania Sieci Dostępności Cyfrowej i mogą wykraczać poza obowiązki mające bezpośrednie zastosowanie do danego systemu lub sposobu jego wykorzystania.
