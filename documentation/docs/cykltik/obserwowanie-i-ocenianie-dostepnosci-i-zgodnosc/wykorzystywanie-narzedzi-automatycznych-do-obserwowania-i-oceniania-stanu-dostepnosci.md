---
id: wykorzystywanie-narzedzi-automatycznych-do-obserwowania-i-oceniania-stanu-dostepnosci
title: Wykorzystywanie narzędzi automatycznych do obserwowania i oceniania stanu dostępności
description: Zasady wykorzystywania automatycznych analiz i systemów monitorujących do wykrywania problemów, wspierania oceniania oraz podejmowania i weryfikowania działań służących zapewnianiu i doskonaleniu dostępności cyfrowej.
sidebar_label: Narzędzia automatyczne
sidebar_position: 6
keywords: [narzędzia automatyczne,automatyczne testowanie,automatyczna analiza,monitorowanie dostępności,skanowanie dostępności,systemy monitorujące,rejestr stanu dostepności i zgodności,]
tags: [narzędzia automatyczne,automatyczna analiza,monitorowanie dostępności,ocenianie dostępności,rejestr stanu dostepności i zgodności,]
opracowanie: Stefan Wajda
data_zgloszenia: 13 lipca 2026 r.
ostatnia_aktualizacja: 13 lipca 2026 r.
wersja_robocza: true

---

# 1. Cel dokumentu

Dokument określa zasady wykorzystywania narzędzi automatycznych do wykrywania problemów i zmian stanu rozwiązań cyfrowych, wspierania ich oceniania oraz dostarczania informacji potrzebnych do podejmowania, realizowania i weryfikowania decyzji służących zapewnianiu i doskonaleniu dostępności.

Celem automatycznych analiz nie jest samo wykrywanie, liczenie ani raportowanie problemów. Wyniki analiz powinny dostarczać podstaw do ustalenia, co należy naprawić, zmienić, zmodernizować lub poddać dalszej ocenie.

Narzędzia automatyczne mogą zwiększać zdolność organizacji do systematycznego pozyskiwania informacji o stanie rozwiązań cyfrowych. Informacje te powinny być interpretowane, weryfikowane, łączone z informacjami pochodzącymi z innych źródeł i wykorzystywane do:

- rozpoznawania problemów dostępności;
- oceniania stanu dostępności i zgodności;
- podejmowania decyzji;
- planowania i realizowania działań;
- weryfikowania skuteczności działań;
- aktualizowania wiedzy o stanie rozwiązania.

Narzędzia automatyczne nie zastępują testów manualnych i funkcjonalnych, ocen eksperckich ani badań z użytkownikami.

---

# 2. Zasady wykorzystywania narzędzi automatycznych

## 2.1. Ukierunkowanie na poprawę dostępności

Automatyczne analizy wykonuje się w celu dostarczenia informacji potrzebnych do zapewniania i doskonalenia dostępności rozwiązania.

Wyniki powinny, na tyle, na ile pozwala zastosowana metoda, umożliwiać ustalenie:

- jaki problem występuje;
- gdzie i w jakim zakresie występuje;
- czy jest problemem jednostkowym, powtarzalnym lub systemowym;
- czy wymaga dalszej oceny;
- jakie działanie może być potrzebne;
- w jaki sposób można zweryfikować skuteczność działania.

Raportowanie problemów, utrzymywanie informacji o stanie rozwiązania oraz prowadzenie rejestrów służą podejmowaniu i realizowaniu decyzji, a nie stanowią samodzielnego celu.

## 2.2. Pierwszeństwo automatycznego sprawdzania

Problemy możliwe do wiarygodnego i efektywnego wykrycia automatycznego powinny być identyfikowane za pomocą narzędzi automatycznych, zamiast angażowania pracy eksperckiej do ich ręcznego wyszukiwania.

Jeżeli badane rozwiązanie i cel oceny pozwalają na zastosowanie narzędzi automatycznych, analizę automatyczną przeprowadza się przed rozpoczęciem szczegółowych testów manualnych albo na początku oceny.

Wyniki automatycznej analizy mogą służyć do:

- usunięcia jednoznacznie rozpoznanych problemów;
- rozpoznania problemów powtarzalnych i systemowych;
- wskazania obszarów wymagających dalszej oceny;
- doboru scenariuszy testów;
- określenia zakresu dalszych badań;
- efektywnego wykorzystania pracy osób wykonujących testy manualne i funkcjonalne.

## 2.3. Uzupełnianie metod oceniania

Automatyczne analizy obejmują wyłącznie problemy możliwe do rozpoznania za pomocą zastosowanych reguł.

Brak problemów wykrytych automatycznie nie oznacza, że rozwiązanie jest dostępne ani zgodne z wymaganiami.

Automatycznych analiz nie stosuje się jako zamiennika:

- testów manualnych;
- testów funkcjonalnych;
- testów z technologiami wspomagającymi;
- ocen eksperckich;
- badań z użytkownikami.

Automatyczne analizowanie oraz inne metody oceniania powinny wzajemnie się uzupełniać.

## 2.4. Wykorzystywanie wyników do działania

Wartość automatycznej analizy zależy nie tylko od liczby i trafności wykrywanych problemów, lecz także od możliwości wykorzystania wyników do podejmowania decyzji i realizowania działań.

Wyniki powinny być przedstawiane i porządkowane w sposób umożliwiający ich wykorzystanie przez osoby odpowiedzialne za:

- zarządzanie rozwiązaniem;
- jego utrzymanie i rozwój;
- tworzenie i publikowanie treści;
- zapewnianie jakości;
- zapewnianie dostępności;
- podejmowanie decyzji zarządczych.

---

# 3. Rola automatyzacji w obserwowaniu i ocenianiu stanu dostępności

Narzędzia automatyczne są jednym ze źródeł informacji wykorzystywanych w procesie:

> obserwowanie → ocenianie → decyzja → działanie → weryfikacja → aktualizacja wiedzy.

Automatyczne analizy mogą:

- ujawniać nowe problemy;
- wykrywać zmiany stanu rozwiązania;
- dostarczać informacji potrzebnych do wykonania scenariuszy testów;
- wskazywać potrzebę przeprowadzenia oceny doraźnej;
- wspierać planowanie ocen;
- dostarczać informacji do podejmowania decyzji;
- wspierać weryfikowanie skuteczności działań;
- wykrywać ponowne wystąpienie wcześniej usuniętych problemów.

Wynik wygenerowany przez narzędzie nie powinien być automatycznie utożsamiany z:

- obserwacją zarejestrowaną w rejestrze stanu zgodności i dostępności;
- potwierdzoną niezgodnością;
- wynikiem scenariusza testu;
- oceną zgodności rozwiązania.

W zależności od rodzaju wyniku i zastosowanej metody potrzebne może być jego zinterpretowanie, zweryfikowanie, połączenie z innymi informacjami albo wykonanie dodatkowych testów.

---

# 4. Sposoby wykorzystywania narzędzi automatycznych

## 4.1. Automatyczne sprawdzanie

Automatyczne sprawdzanie polega na jednorazowym lub doraźnym wykonaniu analizy określonej strony, ekranu, dokumentu, komponentu lub innego obiektu.

Może służyć w szczególności do:

- wstępnego rozpoznania stanu rozwiązania;
- wsparcia wykonywania oceny;
- zbadania problemu zgłoszonego przez użytkownika;
- sprawdzenia zmienionego obiektu;
- sprawdzenia poprawności wykonanej naprawy.

## 4.2. Automatyczne skanowanie

Automatyczne skanowanie polega na analizowaniu większego zbioru obiektów.

Może służyć w szczególności do:

- rozpoznania skali występowania problemów;
- identyfikowania problemów powtarzalnych;
- wykrywania problemów systemowych;
- ustalania obszarów podwyższonego ryzyka;
- wyboru obiektów wymagających dalszej oceny;
- rozpoznawania stanu dużych rozwiązań cyfrowych.

## 4.3. Automatyczne monitorowanie

Automatyczne monitorowanie polega na powtarzaniu analiz rozwiązania oraz utrzymywaniu i porównywaniu wyników w czasie.

Może służyć w szczególności do:

- ciągłego obserwowania stanu rozwiązania;
- wykrywania nowych problemów;
- wykrywania zmian stanu;
- obserwowania trendów;
- śledzenia skuteczności działań naprawczych;
- wykrywania regresji;
- utrzymywania historii wyników.

Granice między automatycznym sprawdzaniem, skanowaniem i monitorowaniem nie zawsze są ostre. Jedno narzędzie może wspierać kilka sposobów wykorzystywania automatyzacji.

---

# 5. Sposoby automatycznego monitorowania

## 5.1. Monitorowanie przez automatyczne skanowanie

System monitorujący może samodzielnie odwiedzać i analizować obiekty rozwiązania cyfrowego.

Systemy oparte na automatycznym skanowaniu mogą:

- analizować dużą liczbę stron;
- wykonywać analizy według ustalonego harmonogramu;
- powtarzać analizy w podobnych warunkach;
- porównywać kolejne wyniki;
- wykrywać problemy występujące w wielu obiektach.

Zakres obserwacji zależy jednak od zdolności systemu do odnajdywania obiektów i osiągania stanów rozwiązania.

System może nie obejmować między innymi:

- obiektów wymagających uwierzytelnienia;
- niektórych dynamicznych stanów interfejsu;
- kolejnych etapów procesów użytkownika;
- treści dostępnych dopiero po wykonaniu określonych interakcji.

## 5.2. Monitorowanie podczas rzeczywistego korzystania

Niektóre systemy wykonują automatyczne analizy podczas rzeczywistych odwiedzin i interakcji użytkowników z rozwiązaniem.

Analizy mogą wówczas obejmować:

- rzeczywiście odwiedzane obiekty;
- stany rozwiązania osiągane podczas korzystania;
- dynamicznie prezentowane treści;
- różne urządzenia, systemy, przeglądarki i inne środowiska użytkowania.

Ten sposób monitorowania może dostarczać informacji o problemach występujących w rzeczywiście wykorzystywanych częściach rozwiązania i konkretnych środowiskach użytkowników.

Zakres obserwacji zależy jednak od sposobu korzystania z rozwiązania. Obiekty rzadko odwiedzane lub nieodwiedzane mogą pozostać poza analizą.

## 5.3. Łączenie sposobów monitorowania

Organizacja może łączyć różne sposoby automatycznego monitorowania.

Automatyczne skanowanie może zapewniać systematyczne sprawdzanie ustalonego zakresu rozwiązania, natomiast analizy wykonywane podczas rzeczywistego korzystania mogą dostarczać informacji o osiąganych stanach rozwiązania i środowiskach użytkowania.

Oba sposoby monitorowania mogą być uzupełniane przez:

- oceny planowe;
- oceny doraźne;
- testy manualne i funkcjonalne;
- zgłoszenia użytkowników;
- wyniki odbiorów;
- informacje o zmianach;
- inne źródła obserwacji.

---

# 6. Ustalanie zakresu automatycznych analiz

Przed rozpoczęciem automatycznej analizy organizacja powinna ustalić:

- jej cel;
- rozwiązanie i obiekty objęte analizą;
- oczekiwany rodzaj informacji;
- sposób wykorzystania wyników;
- potrzebę powtarzania analizy;
- sposób dokumentowania i utrzymywania wyników.

Przy interpretowaniu zakresu automatycznej analizy należy uwzględniać różne rodzaje pokrycia rozwiązania.

## 6.1. Pokrycie strukturalne

Określa, jakie strony, ekrany, dokumenty, komponenty i inne obiekty zostały objęte analizą.

## 6.2. Pokrycie funkcjonalne

Określa, jakie funkcje, procesy użytkownika i stany interfejsu zostały osiągnięte podczas analizy.

## 6.3. Pokrycie użytkowe

Określa, jakie rzeczywiście wykorzystywane części rozwiązania zostały objęte obserwacją.

## 6.4. Pokrycie środowisk użytkowania

Określa, w jakich urządzeniach, systemach, przeglądarkach, konfiguracjach i innych środowiskach wykonano analizy.

## 6.5. Pokrycie wymagań

Określa, jakie wymagania dostępności mogą być sprawdzane za pomocą zastosowanych reguł automatycznych.

Duży zakres automatycznego skanowania nie oznacza dużego zakresu oceny zgodności.

Informacja, że narzędzie przeanalizowało wszystkie lub większość stron rozwiązania, nie oznacza, że oceniono wszystkie istotne funkcje, stany interfejsu, środowiska użytkowania ani wymagania dostępności.

---

# 7. Interpretowanie i porządkowanie wyników

## 7.1. Analizowanie wyników

Wyniki automatycznych analiz powinny być interpretowane odpowiednio do sposobu działania narzędzia, rodzaju zastosowanej reguły oraz celu analizy.

Organizacja powinna rozróżniać:

### Problem potwierdzony

Wynik dostarcza wystarczających podstaw do stwierdzenia występowania problemu.

### Potencjalny problem wymagający weryfikacji

Narzędzie wykryło cechę wskazującą na możliwość występowania problemu, ale jego potwierdzenie wymaga oceny człowieka.

### Informację wspierającą ocenę

Wynik nie przesądza o występowaniu problemu, ale dostarcza informacji przydatnej podczas wykonywania scenariusza testu lub innej analizy.

### Wynik błędny lub nieprzydatny

Wynik jest fałszywym alarmem, wynika z ograniczeń narzędzia albo nie ma znaczenia dla celu prowadzonej analizy.

Klasyfikacje i nazwy wyników stosowane przez konkretne narzędzia mogą różnić się od klasyfikacji przyjętej przez organizację.

## 7.2. Agregowanie wyników

Organizacja nie powinna automatycznie traktować każdego komunikatu narzędzia jako odrębnej obserwacji lub niezgodności.

Wyniki należy analizować pod kątem:

- duplikatów;
- powtarzalnych wystąpień;
- wspólnych przyczyn;
- problemów dotyczących jednego komponentu lub szablonu;
- problemów systemowych;
- zmian stanu wcześniej rozpoznanych problemów.

Setki wystąpień tego samego problemu mogą wymagać naprawienia jednego wspólnego komponentu, zmiany szablonu albo poprawienia procesu tworzenia i publikowania treści.

Dlatego wyniki powinny być przekształcane w informacje umożliwiające podjęcie właściwego działania:

> surowe wyniki → grupowanie → analiza → weryfikacja → ustalenie problemu → decyzja → działanie.

---

# 8. Wykorzystywanie wyników do oceniania i aktualizowania wiedzy

Wyniki automatycznych analiz mogą wspierać ocenianie stanu dostępności i zgodności.

Mogą służyć do:

- wykonywania scenariuszy testów;
- wskazywania scenariuszy wymagających wykonania;
- dostarczania części materiałów dowodowych;
- wybierania obiektów do dalszej oceny;
- rozszerzania badanej próbki;
- identyfikowania obszarów podwyższonego ryzyka;
- podejmowania ocen doraźnych;
- planowania kolejnych ocen.

Automatyczne analizy mogą być wykorzystywane we wszystkich profilach ocen.

W profilu wstępnym mogą służyć przede wszystkim do szybkiego rozpoznania problemów i obszarów ryzyka.

W profilu rozszerzonym mogą wspierać analizowanie większej próbki, rozpoznawanie problemów powtarzalnych i systemowych oraz planowanie dalszego rozszerzania zakresu oceny.

W profilu pogłębionym mogą być wykorzystywane specjalistyczne narzędzia, zaawansowane sposoby automatyzacji oraz wyniki wymagające wiedzy eksperckiej.

Wyniki automatycznych analiz mogą być wykorzystywane do aktualizowania rejestru stanu zgodności i dostępności (RSZiD).

Do RSZiD nie powinny być automatycznie przenoszone wszystkie komunikaty generowane przez narzędzie.

Rejestrowane mogą być w szczególności:

- potwierdzone problemy;
- istotne obserwacje wymagające dalszej oceny;
- problemy powtarzalne;
- problemy systemowe;
- zmiany stanu wymagające decyzji lub działania.

Pełne raporty i zbiory wyników mogą być przechowywane jako materiały dowodowe.

---

# 9. Wykorzystywanie wyników do podejmowania decyzji i działań

Wyniki automatycznych analiz powinny dostarczać podstaw do podejmowania decyzji służących zapewnianiu i doskonaleniu dostępności rozwiązania.

W zależności od charakteru i znaczenia ustaleń organizacja może zdecydować o:

- naprawieniu pojedynczego problemu;
- usunięciu wszystkich rozpoznanych wystąpień problemu;
- naprawieniu wspólnego komponentu lub szablonu;
- zmianie sposobu tworzenia albo publikowania treści;
- zmianie procesu utrzymania lub rozwoju rozwiązania;
- wykonaniu dodatkowych testów;
- przeprowadzeniu oceny doraźnej;
- zaangażowaniu specjalistów lub wykonawcy;
- modernizacji części rozwiązania;
- przebudowie rozwiązania;
- uwzględnieniu problemu w planie dalszego doskonalenia dostępności.

Wykrycie problemu nie przesądza o sposobie działania.

Przy podejmowaniu decyzji należy uwzględniać również inne dostępne informacje, w szczególności:

- wpływ problemu na użytkowników;
- znaczenie obiektu lub procesu;
- skalę i powtarzalność problemu;
- wspólną przyczynę wielu wystąpień;
- ryzyko wystąpienia problemu w innych obiektach;
- możliwość i koszt naprawy;
- planowane zmiany i modernizacje rozwiązania.

Wyniki powinny być przedstawiane i utrzymywane w sposób umożliwiający ich wykorzystanie przez osoby podejmujące decyzje oraz osoby odpowiedzialne za wykonanie działań.

---

# 10. Weryfikowanie skuteczności działań

Narzędzia automatyczne mogą wspierać sprawdzanie skuteczności wykonanych działań.

Ponowna analiza może służyć do:

- sprawdzenia, czy wcześniej wykryty problem nadal występuje;
- wyszukania innych wystąpień tego samego problemu;
- sprawdzenia skutków zmiany komponentu lub szablonu;
- wykrywania nowych problemów powstałych wskutek zmiany;
- wykrywania regresji;
- obserwowania zmian wyników w czasie.

Brak ponownego wykrycia problemu nie zawsze stanowi wystarczające potwierdzenie skuteczności działania.

Jeżeli charakter problemu tego wymaga, weryfikację należy uzupełnić odpowiednimi testami manualnymi, funkcjonalnymi lub innymi metodami oceny.

Wyniki weryfikacji powinny być wykorzystywane do:

- potwierdzenia skuteczności działania;
- ponownego otwarcia problemu;
- podjęcia dodatkowych działań;
- aktualizacji wiedzy o stanie rozwiązania.

---

# 11. Utrzymywanie, wymiana i integrowanie informacji

## 11.1. Systemy monitorujące jako źródło informacji

Systemy automatycznego monitorowania mogą:

- utrzymywać historię wyników;
- wykrywać nowe problemy;
- śledzić zmiany stanu;
- grupować wystąpienia;
- przypisywać statusy;
- wspierać zarządzanie działaniami;
- dostarczać wskaźników i trendów.

Dzięki tym właściwościom mogą pełnić funkcję technicznego komponentu rejestru stanu zgodności i dostępności.

System monitorujący nie staje się jednak automatycznie pełnym RSZiD.

Wiedza o stanie rozwiązania może pochodzić również z:

- testów manualnych i funkcjonalnych;
- ocen eksperckich;
- zgłoszeń użytkowników;
- badań z użytkownikami;
- odbiorów;
- informacji o zmianach;
- decyzji;
- działań;
- materiałów dowodowych.

Organizacja powinna ustalić, w jaki sposób informacje pochodzące z systemów monitorujących są łączone z informacjami z innych źródeł i wykorzystywane w procesie podejmowania decyzji.

## 11.2. Raportowanie, eksportowanie i integrowanie danych

Narzędzia mogą udostępniać wyniki na różne sposoby.

**Raportowanie** polega na przedstawianiu wyników w postaci przeznaczonej przede wszystkim do odczytania przez człowieka.

**Eksportowanie danych** polega na udostępnianiu wyników w ustrukturyzowanej postaci umożliwiającej ich dalsze przetwarzanie.

**Integracja systemów** umożliwia automatyczne przekazywanie, importowanie lub synchronizowanie informacji.

Możliwość wymiany danych pozwala wykorzystywać wyniki analiz poza systemem, który je wygenerował.

Wyniki mogą być:

- filtrowane;
- agregowane;
- porównywane;
- łączone z wynikami innych narzędzi;
- wiązane z obiektami rozwiązania;
- wykorzystywane do aktualizowania RSZiD;
- przekazywane do systemów zarządzania zadaniami i działaniami.

Przy wymianie danych należy, na tyle, na ile jest to możliwe, zachowywać informacje pozwalające ustalić:

- przedmiot wyniku;
- źródło;
- czas wykonania analizy;
- zastosowane narzędzie i regułę;
- kontekst i środowisko analizy;
- powiązanie wyniku z wcześniejszymi informacjami o stanie rozwiązania.

## 11.3. Wykorzystywanie wskaźników i trendów

Systemy monitorujące mogą generować:

- wyniki punktowe;
- odsetki;
- liczby wykrytych problemów;
- liczby obiektów z problemami;
- trendy;
- porównania.

Wskaźniki te mogą służyć do obserwowania zmian i porównywania wyników uzyskanych przy zastosowaniu tej samej metody.

Nie powinny być traktowane jako samodzielna miara dostępności lub zgodności rozwiązania.

Na porównywalność wyników mogą wpływać zmiany:

- zakresu analizy;
- zestawu reguł;
- wersji narzędzia;
- struktury rozwiązania;
- sposobu korzystania z rozwiązania;
- środowisk wykonywania analiz.

---

# 12. Dobór i rozwijanie sposobu wykorzystania narzędzi

Organizacja powinna dobierać narzędzia i sposoby ich wykorzystywania odpowiednio do decyzji i działań, które chce wspierać za pomocą automatyzacji.

Przed wyborem narzędzia należy ustalić:

- jakie informacje są potrzebne;
- jakie rozwiązania i obiekty powinny być analizowane;
- jakie problemy organizacja chce wykrywać;
- jak często potrzebne są analizy;
- czy potrzebne jest utrzymywanie historii wyników;
- czy potrzebne jest obserwowanie rzeczywistego korzystania i środowisk użytkowników;
- w jaki sposób wyniki będą wykorzystywane podczas oceniania;
- w jaki sposób wyniki będą przekazywane osobom odpowiedzialnym za decyzje i działania;
- czy dane powinny być wymieniane z innymi systemami.

Przy ocenie przydatności narzędzia należy uwzględniać w szczególności:

- zakres wykonywanych analiz;
- obsługiwane rodzaje rozwiązań i technologii;
- sposób pozyskiwania informacji;
- możliwy zakres pokrycia rozwiązania;
- możliwość wykonywania analiz w różnych środowiskach;
- możliwość powtarzania analiz;
- utrzymywanie historii wyników;
- grupowanie problemów;
- wspieranie zarządzania działaniami;
- możliwość eksportowania danych;
- dostępność API i innych mechanizmów integracji;
- zakres metadanych przekazywanych wraz z wynikami;
- możliwość współpracy z RSZiD i innymi systemami organizacji;
- dostępność narzędzia dla osób, które mają się nim posługiwać.

Systemy automatycznego monitorowania mogą być rozwijane od narzędzi wykrywających problemy w kierunku platform wspierających zarządzanie stanem dostępności.

Mogą być wzbogacane o funkcje:

- gromadzenia wyników z różnych źródeł;
- dokumentowania obserwacji;
- przechowywania wyników testów manualnych;
- wiązania informacji z materiałami dowodowymi;
- oceniania wpływu problemów;
- dokumentowania decyzji;
- planowania i śledzenia działań;
- przypisywania odpowiedzialności;
- weryfikowania skuteczności działań.

Systemy takie mogą ewoluować w kierunku monitorów dostępności cyfrowej.

Możliwy jest również odwrotny kierunek rozwoju: monitor dostępności cyfrowej może integrować się z zewnętrznymi narzędziami automatycznymi albo zostać wyposażony we własne funkcje automatycznej analizy.

Niezależnie od zastosowanego rozwiązania technicznego celem jest stworzenie mechanizmu, który wspiera organizację w:

> wykrywaniu problemów i zmian → ocenianiu ich znaczenia → podejmowaniu decyzji → realizowaniu działań → weryfikowaniu rezultatów → doskonaleniu dostępności rozwiązania.

---

# 13. Ograniczenia i najczęstsze błędy

Automatyczne analizy mają ograniczony zakres i wymagają świadomego wykorzystywania.

Należy unikać w szczególności:

- utożsamiania braku wykrytych problemów z dostępnością rozwiązania;
- traktowania wyników automatycznych jako pełnej oceny zgodności;
- zastępowania testów manualnych i funkcjonalnych automatyczną analizą;
- bezkrytycznego przyjmowania komunikatów narzędzia;
- rejestrowania każdego komunikatu jako odrębnej niezgodności;
- braku agregowania problemów powtarzalnych i systemowych;
- wykonywania analiz bez określonego celu;
- gromadzenia raportów bez podejmowania decyzji i działań;
- niewykorzystywania wyników do planowania dalszych ocen;
- nieustalania faktycznego zakresu monitorowania;
- utożsamiania liczby przeanalizowanych obiektów z zakresem oceny zgodności;
- porównywania wyników uzyskanych różnymi metodami lub w nieporównywalnych warunkach;
- traktowania wyników punktowych jako miary dostępności rozwiązania;
- angażowania pracy eksperckiej do ręcznego wyszukiwania problemów, które mogą być efektywnie wykrywane automatycznie;
- ograniczania oceniania do problemów możliwych do wykrycia automatycznie;
- pozostawiania wyników w systemie monitorującym bez powiązania ich z procesem oceniania, podejmowania decyzji i realizowania działań.

Największą wartość narzędzia automatyczne zapewniają wtedy, gdy są częścią trwałego procesu, w którym informacje o problemach i zmianach stanu rozwiązania są wykorzystywane do podejmowania działań, sprawdzania ich skuteczności i systematycznego doskonalenia dostępności.
