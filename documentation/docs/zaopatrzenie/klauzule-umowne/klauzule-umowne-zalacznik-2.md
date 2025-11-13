---
id: klauzule-umowne-zalacznik-2
title: Klauzule dotyczące zapewnienia, utrzymania i monitorowania dostępności cyfrowej
sidebar_position: 1
sidebar_label: Klauzule w umowach
description: Wzorcowe klauzule umowne w umowach dotyczących produktów cyfrowych 
keywords: [zamówienia publiczne, zaopatrzenie, klauzule umowne]
tags: [zamówienia publiczne, zaopatrzenie, klauzule umowne]
opracowanie: Tomasz Bartel, Stefan Wajda
data_zgloszenia: 12 października 2025 r.
data_aktualizacji:  10 listopada 2025 r.
wersja_robocza: true
---

## § 1. Gwarancja usunięcia problemów ukrytych

1. Wykonawca udziela gwarancji, że produkt cyfrowy (oprogramowanie, strona internetowa, aplikacja mobilna lub inny produkt objęty umową) spełnia wymagania dostępności cyfrowej określone w umowie i normie PN-EN 301 549 w chwili przedłożenia go do odbioru.    
2. Wykonawca ponosi odpowiedzialność za problemy ukryte w zakresie dostępności cyfrowej, które nie zostały ujawnione podczas odbioru, a zostaną wykryte w okresie obowiązywania gwarancji lub wsparcia technicznego.  
3. W przypadku wykrycia takich problemów Wykonawca zobowiązuje się do:  
   - niezwłocznego podjęcia działań naprawczych,  
   - usunięcia niezgodności w terminie uzgodnionym z Zamawiającym, nie dłuższym niż 30 dni kalendarzowych od dnia zgłoszenia,  
   - przekazania zaktualizowanej wersji produktu oraz dokumentacji potwierdzającej przywrócenie zgodności z wymaganiami dostępności.  
4. Wykonawca nie może powoływać się na brak wcześniejszego wykrycia problemu jako na przesłankę zwolnienia z odpowiedzialności.  
5. Zamawiający ma prawo zlecić niezależne testy weryfikujące usunięcie niezgodności. W przypadku stwierdzenia, że problem nie został usunięty, Wykonawca pokrywa koszty ponownego badania.

---

## § 2. Utrzymanie zgodności dostępności po aktualizacjach

1. Wykonawca zobowiązuje się do utrzymania zgodności produktu cyfrowego z wymaganiami dostępności cyfrowej w przypadku wszelkich aktualizacji, modernizacji lub zmian środowiska uruchomieniowego, w tym:  
   - aktualizacji wersji oprogramowania, bibliotek, komponentów lub wtyczek,  
   - zmian konfiguracji serwerów, systemów operacyjnych lub przeglądarek,  
   - migracji na inne środowisko sprzętowe lub chmurowe.  
2. Każda aktualizacja produktu musi być poprzedzona wewnętrzną weryfikacją wpływu na dostępność oraz – w razie potrzeby – testami zgodności z normą PN-EN 301 549 i wybranym poziomem WCAG.  
3. Wykonawca zobowiązuje się przekazać Zamawiającemu:  
   - raport z weryfikacji dostępności po aktualizacji,  
   - opis wprowadzonych zmian wraz z oceną ich wpływu na dostępność,  
   - zaktualizowaną wersję raportu VPAT/ACR (w formacie DOCX/ODT + HTML + JSON-LD/EARL).  
4. Jeżeli w wyniku aktualizacji zostaną wprowadzone zmiany powodujące pogorszenie dostępności, Wykonawca zobowiązuje się do ich nieodpłatnego usunięcia w terminie uzgodnionym z Zamawiającym.  
5. W przypadku braku zapewnienia zgodności po aktualizacji Zamawiający może:  
   - wstrzymać odbiór aktualizacji,  
   - żądać przywrócenia poprzedniej wersji produktu,  
   - naliczyć kary umowne zgodnie z postanowieniami umowy.

---

## § 3. Usuwanie problemów dostępności w ramach usługi serwisowania

1. W ramach usługi serwisowania i utrzymania oprogramowania Wykonawca zobowiązuje się do bieżącego monitorowania i usuwania problemów w zakresie dostępności cyfrowej, w tym powstałych w wyniku:  
   - wprowadzania nowych funkcjonalności,  
   - zmian w interfejsie użytkownika lub strukturze treści,  
   - aktualizacji komponentów, bibliotek lub środowiska uruchomieniowego.  
2. Wszelkie zmiany i rozszerzenia oprogramowania muszą być projektowane i wdrażane z zachowaniem zasad **accessibility by design**, zgodnie z wymaganiami normy PN-EN 301 549 oraz odpowiednimi poziomami WCAG 2.1 lub nowszego.  
3. W przypadku, gdy w wyniku zmian lub rozszerzeń zostaną zidentyfikowane problemy z dostępnością, Wykonawca zobowiązuje się do:  
   - niezwłocznego usunięcia problemu,  
   - przeprowadzenia ponownej weryfikacji zgodności po naprawie,  
   - przekazania Zamawiającemu raportu potwierdzającego przywrócenie zgodności z wymaganiami dostępności.  
4. Naprawy wynikające bezpośrednio z działań serwisowych (np. aktualizacji, rozbudowy funkcjonalnej, modyfikacji interfejsu) nie mogą być traktowane jako usługi dodatkowe i są wykonywane w ramach umowy serwisowej.  
5. W przypadku problemów wynikających z przyczyn niezależnych od Wykonawcy (np. aktualizacji zewnętrznych bibliotek, zmian standardów przeglądarek) zakres i koszt ewentualnych prac naprawczych są uzgadniane indywidualnie z Zamawiającym.

---

## § 4. Monitoring zgodności z wymaganiami dostępności cyfrowej  
*(wariant A – monitoring automatyczny)*

1. Wykonawca zobowiązuje się do realizacji usługi monitorowania zgodności produktu cyfrowego z wymaganiami dostępności cyfrowej przy użyciu automatycznych narzędzi audytowych, w szczególności takich jak:  
   - SiteLint,  
   - SortSite,  
   - Pa11y,  
   - lub inne równoważne narzędzia umożliwiające testy zgodności z WCAG 2.1 (AA) i normą PN-EN 301 549.  
2. Monitoring obejmuje co najmniej:  
   - analizę kodu HTML, struktury nagłówków i alternatywnych opisów,  
   - sprawdzenie kontrastu kolorów, dostępności formularzy i linków,  
   - weryfikację dostępności na urządzeniach mobilnych,  
   - raportowanie wyników w formatach umożliwiających dalsze przetwarzanie (HTML, CSV, JSON-LD, EARL).  
3. Wykonawca zobowiązuje się do:  
   - uruchamiania automatycznych testów nie rzadziej niż raz w miesiącu,  
   - przekazywania Zamawiającemu raportu zbiorczego w terminie 7 dni od zakończenia cyklu testowego,  
   - wskazania wykrytych niezgodności oraz rekomendacji działań naprawczych.  
4. Raporty z monitoringu muszą być sporządzone w formie dostępnych dokumentów (HTML + JSON-LD + ewentualnie PDF/UA) i zawierać:  
   - identyfikator wersji oprogramowania,  
   - datę badania,  
   - opis metodyki i narzędzi,  
   - wskaźnik procentowy zgodności oraz listę błędów.  
5. Wykonawca zobowiązuje się prowadzić rejestr wszystkich raportów z monitoringu i udostępniać go Zamawiającemu przez cały okres obowiązywania umowy.

---

## § 4a. Coroczny przegląd zgodności i aktualizacja deklaracji dostępności  
*(wariant B – monitoring okresowy / roczny)*

1. Wykonawca zobowiązuje się do współpracy z Zamawiającym w zakresie corocznego przeglądu zgodności strony internetowej lub aplikacji z wymaganiami dostępności cyfrowej, wykonywanego w szczególności w związku z aktualizacją Deklaracji dostępności.  
2. Przegląd obejmuje:  
   - analizę zmian w treści i strukturze serwisu,  
   - ponowną weryfikację kryteriów WCAG 2.1 (AA),  
   - kontrolę dostępności elementów dynamicznych i multimediów,  
   - ocenę poprawności dotychczasowej Deklaracji dostępności.  
3. Wykonawca przekazuje Zamawiającemu raport z przeglądu, obejmujący:  
   - streszczenie wyników testów automatycznych i manualnych,  
   - listę wykrytych problemów, ich klasyfikację i rekomendacje,  
   - zaktualizowaną wersję Deklaracji dostępności (w formacie HTML, zgodnie z wymogami określonymi w dokumencie Warunki techniczne publikacji i struktura deklaracji dostępności),  
   - dane w formacie JSON-LD lub EARL.  
4. Prace naprawcze wynikające z raportu mogą być zlecane odrębnie, po uzgodnieniu kosztów i harmonogramu.  
5. W przypadku zidentyfikowania poważnych naruszeń zasad dostępności Wykonawca zobowiązuje się przedstawić plan naprawczy z terminami realizacji.

---

## § 4b. Monitoring łączony  
*(wariant C – ciągły + okresowy)*

1. Usługa monitorowania dostępności obejmuje:  
   - **ciągły monitoring automatyczny**, realizowany przy użyciu narzędzi audytowych (SiteLint, SortSite, Pa11y lub równoważnych), oraz  
   - **coroczny przegląd ekspercki**, powiązany z aktualizacją Deklaracji dostępności.  
2. Wyniki monitoringu automatycznego i rocznego są prezentowane w raportach w formatach HTML, CSV, JSON-LD i EARL, z uwzględnieniem rekomendacji działań naprawczych.  
3. Prace naprawcze wynikające z monitoringu są realizowane w ramach umowy serwisowej lub na podstawie odrębnego zlecenia, zgodnie z ustaleniami stron.  
4. Wykonawca prowadzi rejestr raportów z monitoringu i przeglądów oraz udostępnia go Zamawiającemu na żądanie.

---

## § 5. Postanowienia końcowe

1. Niespełnienie wymagań dostępności cyfrowej stanowi nienależyte wykonanie umowy i może skutkować odmową odbioru produktu lub naliczeniem kar umownych.  
2. Wykonawca jest zobowiązany do usunięcia stwierdzonych niezgodności w terminie uzgodnionym z Zamawiającym.  
3. Zamawiający zastrzega sobie prawo do weryfikacji dostępności cyfrowej produktu przez niezależnych ekspertów lub organizacje specjalistyczne.  
4. Wszystkie raporty, dokumenty i dane przekazywane w ramach monitoringu lub serwisowania muszą być sporządzane w formatach zapewniających ich dostępność cyfrową (PDF/UA, HTML, DOCX, JSON-LD lub EARL).
