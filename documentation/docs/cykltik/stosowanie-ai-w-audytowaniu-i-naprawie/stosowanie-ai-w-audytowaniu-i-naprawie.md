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
Celem niniejszego zalecenia jest określenie ramowych celów oraz zasad bezpiecznego, świadomego i przejrzystego wykorzystywania sztucznej inteligencji jako narzędzia wspomagającego audytowanie i naprawę dostępności cyfrowej. Zalecenie ma na celu wsparcie organizacji w optymalizacji procesów kontrolnych przy jednoczesnym zachowaniu najwyższych standardów rzetelności, ochrony danych oraz pełnej jawności procedur badawczych wobec odbiorców końcowych.

## 2. Zalecenie
Zaleca się, aby podmioty publiczne oraz podmioty realizujące audyty na ich zlecenie traktowały technologie sztucznej inteligencji (AI) wyłącznie jako dobrowolne narzędzie wspomagające pracę eksperta. Wykorzystanie systemów AI w procesie badania dostępności powinno opierać się na jasnym zdefiniowaniu celów operacyjnych oraz wdrożeniu zasad bezpiecznego stosowania, ze szczególnym uwzględnieniem prawa odbiorcy raportu do pełnej informacji o metodologii badawczej. Dokument ten nie wprowadza twardego obowiązku technologicznego, lecz normuje procesy w obszarach, w których wykonawcy decydują się na automatyzację.

## 3. Rekomendacje

### 3.1. Rezygnacja z obligatoryjności na rzecz podejścia celowego

Wykorzystanie AI w badaniu dostępności cyfrowej nie stanowi obowiązku prawnego ani proceduralnego. Decyzja o wdrożeniu narzędzi algorytmicznych powinna być każdorazowo motywowana konkretnymi celami operacyjnymi, takimi jak skrócenie czasu analizy masowej kodu, automatyzacja powtarzalnych testów składniowych czy generowanie wstępnych propozycji naprawczych, które zawsze podlegają suwerennej ocenie człowieka.

### 3.2. Wymóg pełnej transparentności i jawności (Prawo odbiorcy do informacji)

Podmiot wykonujący audyt z wykorzystaniem narzędzi sztucznej inteligencji ma obowiązek zapewnić pełną jawność tego faktu. Odbiorca raportu z audytu musi posiadać jednoznaczną świadomość oraz zostać wprost poinformowany, które elementy analizy, weryfikacji kodu lub generowania opisów alternatywnych były realizowane bądź wspomagane przez systemy AI. Brak takiej informacji narusza standardy rzetelności i transparentności procedur publicznych.

### 3.3. Nadzór ekspercki i odpowiedzialność (Human-in-the-loop)

Ponieważ AI funkcjonuje wyłącznie jako narzędzie pomocnicze, pełną odpowiedzialność za treść raportu oraz ostateczną ocenę zgodności z wytycznymi WCAG ponosi audytor będący człowiekiem. Narzędzia AI mogą generować błędy kontekstowe oraz halucynacje, stąd każda sugestia wyprodukowana przez model musi zostać poddana krytycznej weryfikacji eksperckiej przed wpisaniem jej do oficjalnej dokumentacji.

### 3.4. Bezpieczeństwo i ochrona zasobów informacyjnych

W procesie interakcji z zewnętrznymi modelami językowymi należy bezwzględnie przestrzegać zasad ochrony danych. Zabrania się wprowadzania do publicznych systemów AI kodów źródłowych zawierających dane wrażliwe, dane osobowe, klucze autoryzacyjne lub niepubliczne informacje o infrastrukturze teleinformatycznej podmiotów publicznych.

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
