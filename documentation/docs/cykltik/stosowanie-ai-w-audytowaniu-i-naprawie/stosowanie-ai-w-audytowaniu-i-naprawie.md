---
id: stosowanie-ai-w-audytowaniu-i-naprawie 
title: Zasady wykorzystania sztucznej inteligencji (AI) w procesach oceny dostępności cyfrowej oraz pracach naprawczych i doskonalących
description: Zalecenie określa ramowe cele oraz zasady bezpiecznego, świadomego i przejrzystego wykorzystywania sztucznej inteligencji jako narzędzia wspomagającego ocenę dostępności cyfrowej oraz prace naprawcze i doskonalące
sidebar_label: Zalecenie 
sidebar_position: 3 
keywords: [dostępność cyfrowa,cykl życia TIK, dostępność cyfrowa,deklaracja dostępności, monitoring dostępności, przegląd dostępności, przegląd diagnostyczny, audyt zgodności, ocena stanu zgodności] 
tags: [dostępność cyfrowa,cykl życia TIK, dostępność cyfrowa,deklaracja dostępności, monitoring dostępności, przegląd dostępności, przegląd diagnostyczny, audyt zgodności, ocena stanu zgodności] 
opracowanie: Maciej Budzisz, Cezary Tomczyk
wspolpraca: Stefan Wajda
data_zgloszenia: 22 maja 2026 r. 
ostatnia_aktualizacja: 15 września 2026 r. 
wersja_robocza: true
---

## 1. Cel zalecenia

Celem zalecenia jest ustanowienie zasad kontrolowanego wykorzystywania sztucznej inteligencji w procesach oceny, naprawy i doskonalenia dostępności cyfrowej, tak aby organizacja zachowywała kontrolę nad przebiegiem tych procesów oraz odpowiedzialność za ich wyniki.

Zalecenie obejmuje zastosowania diagnostyczne, dokumentacyjne, naprawcze i testowe, w tym wykorzystanie modeli językowych i wizyjnych, asystentów programistycznych, agentów AI oraz narzędzi uzyskujących dostęp do zewnętrznych funkcji i danych.

Na potrzeby niniejszego zalecenia przyjmuje się, że:

1. **ocena** oznacza proces sprawdzania zgodności strony internetowej, aplikacji mobilnej lub dokumentu z przyjętymi wymaganiami dostępności; określeń „ocena” i „ocena zgodności” używa się w dokumencie zamiennie;
2. **audyt (audyt zgodności)** oznacza jeden z rodzajów oceny, prowadzony według sformalizowanej metodyki, w pełnym zakresie wymagań i zakończony raportem stwierdzającym stan zgodności;
3. **badanie dostępności** oznacza czynności sprawdzające wykonywane w ramach oceny, w tym testy automatyczne, testy manualne oraz testy z technologiami asystującymi;
4. **samodzielna weryfikacja ekspercka** oznacza sprawdzenie wyniku działania systemu AI przez osobę oceniającą, przeprowadzone na materiale źródłowym i niezależnie od tego wyniku; nie wymaga ono udziału osoby innej niż korzystająca z systemu AI.

## 2. Zalecenie

Organizacja wykorzystuje AI w procesach zapewniania dostępności cyfrowej wyłącznie w sposób kontrolowany, zapewniając odpowiedni do ryzyka nadzór kompetentnej osoby, samodzielną weryfikację ekspercką wyników wpływających na rezultaty prac oraz udokumentowanie sposobu wykorzystania AI i jej wpływu na te rezultaty.

## 3. Rekomendacje

### 3.1. Celowość stosowania sztucznej inteligencji

Wykorzystanie technologii sztucznej inteligencji w procesach badania dostępności cyfrowej ma charakter dobrowolny i powinno wynikać wyłącznie z jasno określonych celów operacyjnych. AI może wspierać wybrane etapy oceny lub napraw, nie może jednak zastępować analizy eksperta. Automatyzacja jest uzasadniona jedynie wtedy, gdy wspiera analizę błędów, identyfikację powtarzalnych problemów lub wyciąganie wniosków potrzebnych do planowania napraw.

Niniejsze zalecenie nie wprowadza obowiązku stosowania AI, lecz określa zasady jej bezpiecznego wykorzystania w sytuacjach, gdy wykonawca decyduje się na automatyzację wybranych etapów oceny lub prac naprawczych.

Zastosowania AI w ocenie i naprawie dostępności dzielą się na:

1. diagnostyczne – analiza kodu, interfejsu lub dokumentów i wskazywanie potencjalnych problemów;
2. dokumentacyjne – grupowanie ustaleń, przygotowywanie zestawień oraz wspieranie redagowania raportu;
3. naprawcze – proponowanie, generowanie lub modyfikowanie kodu, treści i innych elementów rozwiązania;
4. testowe – przygotowywanie scenariuszy, generowanie testów, wykonywanie testów automatycznych i analizowanie ich wyników.

Dla każdego zastosowania należy oddzielnie określić wpływ na wynik, poziom ryzyka, sposób weryfikacji eksperckiej oraz wymagane testy manualne.

Automatyczne testy mogą wspierać wykrywanie regresji i weryfikowanie jednoznacznych właściwości technicznych. Nie zastępują jednak samodzielnej oceny eksperckiej ani testów manualnych wymaganych dla danego kryterium. Poprawka wygenerowana przez AI nie może zostać uznana za prawidłową wyłącznie na podstawie testu wygenerowanego lub wykonanego przez AI.

Wykorzystanie AI w ocenie albo naprawie dostępności obejmuje:

1. zakwalifikowanie zadania do odpowiedniej kategorii;
2. ocenę danych, uprawnień systemu i skutków możliwego błędu;
3. wybór modelu, narzędzi i zakresu ich działania;
4. określenie dopuszczalnego poziomu autonomii;
5. wykonanie analizy albo przygotowanie propozycji poprawki;
6. ocenę kompletności, spójności i wiarygodności wyniku;
7. samodzielną weryfikację ekspercką na podstawie materiału źródłowego;
8. przeprowadzenie testów manualnych i, jeżeli są wymagane, testów z technologiami asystującymi;
9. kontrolę regresji po wdrożeniu zmiany;
10. udokumentowanie wykorzystanego systemu, przebiegu weryfikacji i ostatecznego rezultatu.

Nie można pominąć samodzielnej weryfikacji eksperckiej ani wymaganych testów manualnych z tego powodu, że wynik AI został potwierdzony przez inne narzędzie automatyczne.

### 3.2. Podział zadań i zakres nadzoru

Zakres nadzoru należy określić przed rozpoczęciem danego zadania, z uwzględnieniem wpływu wyniku na ocenę dostępności lub sposób wykonania poprawki.

Zadania realizowane z wykorzystaniem AI dzielą się na:

1. zadania pomocnicze – obejmujące porządkowanie materiału, grupowanie podobnych problemów, przygotowywanie zestawień i inne czynności, których wynik nie przesądza o ocenie zgodności ani odbiorze poprawki;
2. zadania wymagające samodzielnej weryfikacji eksperckiej – obejmujące w szczególności wykrywanie i klasyfikowanie problemów, przypisywanie wymagań dostępności, formułowanie wniosków oraz proponowanie lub generowanie poprawek;
3. zadania, których nie można powierzyć AI jako samodzielnemu wykonawcy – obejmujące stwierdzenie zgodności albo niezgodności, zatwierdzenie wyniku badania oraz podjęcie decyzji o odbiorze wykonanej poprawki.

Wyniki wygenerowane przez system AI nie mogą stanowić samodzielnej podstawy ustaleń, oceny zgodności ani decyzji o odbiorze wykonanej poprawki. Każdy wynik wykorzystany w procesie oceny albo naprawy wymaga krytycznej weryfikacji, przeprowadzonej na materiale źródłowym i niezależnie od wskazania systemu AI, przez osobę posiadającą odpowiednie kompetencje.

### 3.3. Ocena ryzyka przed wykorzystaniem AI

Wykorzystanie AI musi być poprzedzone określeniem celu operacyjnego oraz oceną ryzyka. Ocena obejmuje:

1. wpływ wyniku AI na ocenę zgodności, treść raportu lub zakres naprawy;
2. możliwość potwierdzenia wyniku na materiale źródłowym, niezależnie od wskazania systemu AI;
3. konieczność wykonania testów manualnych i testów z technologiami asystującymi;
4. rodzaj, poufność i zakres przekazywanych danych;
5. poziom autonomii systemu oraz zakres jego uprawnień;
6. możliwość wystąpienia regresji;
7. skutki błędnego wyniku, błędnej poprawki albo nieuprawnionego działania systemu.

Zakres zabezpieczeń i weryfikacji należy dostosować do wyniku tej oceny.

### 3.4. Transparentność wykorzystania AI i prawo odbiorcy do informacji

Wykorzystanie AI wymaga zapewnienia transparentności w zakresie możliwym do udokumentowania przez wykonawcę. Dokumentacja obejmuje co najmniej cel wykorzystania AI, rodzaj powierzonych zadań, wpływ wyników AI na ocenę lub poprawkę, sposób ich samodzielnej weryfikacji eksperckiej oraz nazwę i wersję zastosowanego modelu lub usługi. Brak dostępu do wewnętrznych mechanizmów działania zamkniętego modelu nie zwalnia z obowiązku opisania sposobu jego wykorzystania i kontroli wyników.

Użycie AI uznaje się za wpływające na wynik prac, jeżeli rezultat działania systemu został wykorzystany do wskazania lub pominięcia problemu, przypisania wymagania albo poziomu zgodności, sformułowania wniosku, wygenerowania treści raportu, przygotowania poprawki lub opracowania testu stanowiącego podstawę odbioru zmiany. Takie użycie podlega dokumentowaniu i samodzielnej weryfikacji eksperckiej niezależnie od tego, czy zostało określone jako techniczne, pomocnicze lub redakcyjne.

Jeżeli wykorzystanie AI miało wpływ na zakres analizy, treść raportu, przygotowanie poprawki lub sposób jej weryfikacji, odbiorca powinien otrzymać informację o:

1. celu wykorzystania AI;
2. rodzaju zadań powierzonych systemowi;
3. zakresie wpływu wyników AI na wykonane prace;
4. sposobie przeprowadzenia weryfikacji eksperckiej;
5. zastosowanych testach manualnych;
6. nazwie i wersji wykorzystanego modelu lub usługi.

Przykład informacji w raporcie:

»W procesie oceny wykorzystano system AI do wstępnej analizy kodu i grupowania podobnych problemów. Wyniki zostały samodzielnie zweryfikowane przez eksperta na materiale źródłowym i nie stanowiły samodzielnej podstawy oceny zgodności.«

Użycie AI do generowania lub modyfikowania kodu, automatyzacji wdrożenia, tworzenia testów albo analizowania ich wyników podlega dokumentowaniu wewnętrznemu. Jeżeli rezultat takiego użycia wpłynął na zakres naprawy, działanie rozwiązania lub decyzję o odbiorze poprawki, informację o wykorzystaniu AI należy również przekazać odbiorcy. Zastosowania te nie mogą być automatycznie uznawane za czysto techniczne, ponieważ mogą bezpośrednio wpływać na dostępność.

Brak wymaganej informacji o istotnym wykorzystaniu AI należy traktować jako naruszenie zasad rzetelności i transparentności określonych w niniejszym zaleceniu.

### 3.5. Nadzór ekspercki i odpowiedzialność

Odpowiedzialność za ustalenia zawarte w raporcie, ocenę zgodności oraz decyzję o odbiorze wykonanej poprawki ponosi osoba lub osoby dokonujące ich merytorycznej akceptacji. Wykorzystanie systemu AI nie przenosi ani nie ogranicza tej odpowiedzialności.

Wyniki generowane przez systemy AI mogą zawierać błędy kontekstowe, nieścisłości lub halucynacje, dlatego nie mogą być traktowane jako samodzielne źródło prawdy.

Każdy wynik uzyskany z wykorzystaniem AI, w szczególności sugestie dotyczące klasyfikacji błędów, opisów alternatywnych czy propozycji napraw, musi zostać poddany krytycznej weryfikacji eksperckiej przed uwzględnieniem go w oficjalnej dokumentacji lub raporcie.

Weryfikacja powinna uwzględniać także ryzyko błędu automatyzacji (ang. automation bias), czyli skłonności osoby oceniającej do nadmiernego polegania na wyniku przedstawionym przez system AI. Zjawisko to zostało wskazane w art. 14 rozporządzenia (UE) 2024/1689 w odniesieniu do systemów wysokiego ryzyka. Niezależnie od tego, czy konkretne zastosowanie podlega tym przepisom, przeciwdziałanie nadmiernemu poleganiu na wyniku systemu należy traktować jako dobrą praktykę w procesach oceny i naprawy dostępności. Sprzyja temu przede wszystkim weryfikacja prowadzona na materiale źródłowym, a nie na opisie wygenerowanym przez system.

### 3.6. Bezpieczeństwo i ochrona zasobów informacyjnych

Z powodów bezpieczeństwa, ochrony prywatności oraz zachowania poufności zasobów informacyjnych korzystanie z zewnętrznych systemów sztucznej inteligencji, w szczególności modeli językowych przetwarzających dane poza organizacją, musi odbywać się w sposób kontrolowany.

Do zewnętrznych systemów AI nie należy przekazywać danych osobowych, informacji poufnych, danych uwierzytelniających ani innych chronionych zasobów, chyba że organizacja wcześniej zweryfikowała zgodność takiego przetwarzania z obowiązującymi przepisami, polityką bezpieczeństwa oraz warunkami korzystania z danego systemu.

W przypadku kodu źródłowego, konfiguracji, logów lub innych informacji dotyczących infrastruktury należy ocenić ryzyko ich ujawnienia oraz zasady przetwarzania tych danych przez dostawcę systemu.

Analizę taką należy przeprowadzić przed rozpoczęciem korzystania z danego systemu, a nie po wystąpieniu zdarzenia. Odpowiedzialność za właściwą klasyfikację danych, przeprowadzenie tej analizy oraz dobór bezpiecznych kanałów przetwarzania ponosi wykonawca oceny.

## 4. Kategorie narzędzi wspierających ocenę i naprawę

Na potrzeby niniejszego zalecenia należy odróżnić systemy AI od walidatorów regułowych i innych narzędzi automatycznych. Walidator regułowy wykonuje zdefiniowane testy i zwraca wyniki wynikające z określonych reguł. System AI generuje albo klasyfikuje wyniki na podstawie modelu, którego odpowiedzi mogą zależeć od kontekstu, konfiguracji i przekazanych instrukcji oraz mogą być niepełne, niepowtarzalne lub błędne. Zasady dotyczące AI stosuje się do funkcji, które rzeczywiście wykorzystują takie modele, a nie automatycznie do całego produktu, w którym funkcje te zostały umieszczone.

W procesie oceny i naprawy dostępności mogą być wykorzystywane:

1. walidatory regułowe – sprawdzające jednoznaczne właściwości techniczne na podstawie zdefiniowanych reguł;
2. modele językowe i wizyjne – wspierające analizę kodu, treści, dokumentów i interfejsów;
3. asystenci programistyczni – proponujący lub generujący zmiany w kodzie;
4. agenci AI – wykonujący wieloetapowe zadania z wykorzystaniem udostępnionych narzędzi;
5. narzędzia korzystające z MCP – uzyskujące dostęp do zewnętrznych funkcji i źródeł danych;
6. narzędzia generujące lub wykonujące testy.

Zakres weryfikacji należy określać na podstawie sposobu działania narzędzia, powierzonych mu zadań, dostępnych uprawnień i wpływu wyniku na ocenę lub poprawkę. Aktualne przykłady produktów mogą zostać umieszczone w osobnym, regularnie aktualizowanym załączniku.

## 5. Kontekst organizacyjny i umiejscowienie w cyklu życia

Niniejsze zalecenie odnosi się do etapu cyklu życia systemów i serwisów internetowych obejmującego ich bieżące utrzymanie, monitorowanie oraz systematyczną ewaluację dostępności. W tej fazie szczególnie istotne jest stosowanie przejrzystych zasad korzystania z narzędzi sztucznej inteligencji, tak aby wspierały one procesy diagnostyczne i analityczne bez wprowadzania niezamierzonych zmian w strukturze lub znaczeniu kodu.

Jasne reguły pracy z AI pozwalają zachować ciągłość kontroli jakości oraz spójność procesów utrzymaniowych, a jednocześnie zapewniają, że ostateczne decyzje dotyczące wdrażania zmian pozostają w gestii ekspertów odpowiedzialnych za utrzymanie systemu.

## 6. Porównanie podejścia narzędziowego i regułowego

W procesie oceny dostępności cyfrowej narzędzia automatyczne oraz rozwiązania oparte na sztucznej inteligencji pełnią odmienne funkcje i wymagają odmiennego podejścia metodologicznego. Poniższe zestawienie obrazuje kluczowe różnice między klasycznymi walidatorami regułowymi a narzędziami AI wykorzystywanymi jako wsparcie eksperckie.

### Charakter działania

Walidatory regułowe sprawdzają zgodność na podstawie z góry ustalonych reguł i list kontrolnych.

Narzędzia AI analizują kontekst, interpretują znaczenie elementów i potrafią wychwycić problemy, które nie wynikają bezpośrednio z prostych reguł.

### Poziom zobowiązania

Walidatory regułowe stanowią standardowy element procesu oceny i są powszechnie stosowane jako narzędzia bazowe.

Narzędzia AI są naturalnym uzupełnieniem warsztatu oceniającego, a zakres ich użycia zależy od celów operacyjnych, charakteru analizowanych treści oraz przyjętej metodologii.

### Wymóg jawności

W przypadku walidatorów regułowych wystarczające jest wskazanie użytego narzędzia w dokumentacji technicznej lub metodologicznej.

W przypadku narzędzi AI konieczne jest jednoznaczne poinformowanie odbiorcy raportu o zakresie ich użycia w elementach wpływających na wynik oceny.

## 7. Podstawy prawne, normy i materiały pomocnicze

### 7.1. Akty prawne

* rozporządzenie Parlamentu Europejskiego i Rady (UE) 2024/1689 z dnia 13 czerwca 2024 r. w sprawie ustanowienia zharmonizowanych przepisów dotyczących sztucznej inteligencji (akt w sprawie sztucznej inteligencji, AI Act);
* rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych (RODO) – jeżeli system AI przetwarza dane osobowe;
* ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych;
* dyrektywa Parlamentu Europejskiego i Rady (UE) 2016/2102 z dnia 26 października 2016 r. w sprawie dostępności stron internetowych i mobilnych aplikacji organów sektora publicznego;
* decyzja wykonawcza Komisji (UE) 2018/1524 z dnia 11 października 2018 r. ustanawiająca metodykę monitorowania oraz zasady przekazywania przez państwa członkowskie sprawozdań – w zakresie, w jakim zalecenie dotyczy metod oceny;
* w odpowiednim zakresie – dyrektywa Parlamentu Europejskiego i Rady (UE) 2019/882 (Europejski Akt o Dostępności) oraz ustawa z dnia 26 kwietnia 2024 r. o zapewnianiu spełniania wymagań dostępności niektórych produktów i usług przez podmioty gospodarcze.

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
