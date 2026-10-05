---
id: wykorzystywanie-narzedzi-automatycznych-do-obserwowania-i-oceniania-stanu-dostepnosci
title: Wykorzystywanie narzędzi automatycznych do obserwowania i oceniania stanu dostępności
description: Zasady wykorzystywania narzędzi automatycznych do pozyskiwania informacji o stanie dostępności, wspierania ocen oraz obserwowania zmian stanu rozwiązań cyfrowych.
sidebar_label: Narzędzia automatyczne
sidebar_position: 6
keywords: [narzędzia automatyczne, automatyczne testowanie, automatyczna analiza, skanowanie dostępności, obserwowanie dostępności, ocenianie dostępności]
tags: [narzędzia automatyczne, automatyczna analiza, obserwowanie dostępności, ocenianie dostępności]
opracowanie: Stefan Wajda
data_zgloszenia: 13 lipca 2026 r.
ostatnia_aktualizacja: 1 października 2026 r.
wersja_robocza: true
---

## 1. Cel dokumentu

Dokument określa zasady wykorzystywania narzędzi automatycznych do pozyskiwania informacji o stanie dostępności rozwiązań cyfrowych, wspierania ich oceniania oraz obserwowania zmian stanu.

Wyjaśnia możliwości i ograniczenia automatycznych analiz, sposoby określania ich zakresu oraz zasady interpretowania i wykorzystywania wyników.

Narzędzia automatyczne mogą zwiększać zdolność organizacji do systematycznego pozyskiwania informacji o dużej liczbie obiektów i częstego powtarzania analiz. Nie zastępują jednak metod wymagających oceny człowieka, testów funkcjonalnych ani badań z użytkownikami.

---

## 2. Rola narzędzi automatycznych

Narzędzia automatyczne są jednym ze źródeł informacji wykorzystywanych podczas obserwowania i oceniania stanu dostępności i zgodności.

Mogą służyć w szczególności do:

- wykrywania problemów możliwych do wiarygodnego rozpoznania automatycznego;
- wykrywania cech wymagających dalszej oceny;
- rozpoznawania skali i zakresu występowania problemów;
- identyfikowania problemów powtarzalnych i systemowych;
- wykrywania zmian stanu rozwiązania;
- wspierania wykonywania scenariuszy testów;
- wyboru obiektów i obszarów wymagających dalszej oceny;
- wspierania ocen planowych i doraźnych;
- sprawdzania rezultatów wykonanych działań;
- aktualizowania wiedzy o stanie rozwiązania.

Wynik wygenerowany przez narzędzie nie jest automatycznie równoznaczny z obserwacją, potwierdzonym problemem, wynikiem scenariusza testu ani oceną zgodności.

Znaczenie wyniku zależy od sposobu działania narzędzia, zastosowanej reguły, zakresu analizy oraz informacji potrzebnych do dokonania określonego ustalenia.

---

## 3. Zasady wykorzystywania narzędzi automatycznych

### 3.1. Automatyzowanie odpowiednich czynności

Narzędzia automatyczne wykorzystuje się przede wszystkim do czynności, które mogą wykonywać w sposób wiarygodny i efektywny.

Jeżeli określony problem lub cecha może być wiarygodnie wykrywana automatycznie, wykorzystanie odpowiedniego narzędzia może ograniczyć potrzebę ręcznego wykonywania powtarzalnych czynności i pozwolić przeznaczyć pracę osób oceniających na zagadnienia wymagające oceny człowieka.

Automatyczna analiza może być wykonywana przed rozpoczęciem szczegółowych testów manualnych albo równolegle z nimi, jeżeli pomaga:

- rozpoznać jednoznaczne problemy;
- wskazać obszary wymagające dalszej oceny;
- dobrać scenariusze testów;
- określić zakres dalszego oceniania;
- przygotować informacje potrzebne osobie wykonującej ocenę.

### 3.2. Uzupełnianie innych metod

Automatyczne analizy obejmują tylko te cechy rozwiązania, które mogą zostać rozpoznane za pomocą zastosowanych reguł.

Brak problemów wykrytych automatycznie nie oznacza, że rozwiązanie jest dostępne ani zgodne z wymaganiami.

Narzędzia automatyczne nie zastępują metod wymagających między innymi:

- oceny znaczenia treści;
- oceny poprawności rozwiązania w określonym kontekście;
- wykonania zadania lub procesu użytkownika;
- sprawdzenia obsługi za pomocą odpowiednich sposobów interakcji;
- oceny współpracy z technologiami wspomagającymi, jeżeli nie może zostać wykonana automatycznie;
- oceny eksperckiej;
- udziału użytkowników.

Automatyczne analizy i inne metody oceniania wzajemnie się uzupełniają.

### 3.3. Wykorzystywanie wyników zgodnie z ich znaczeniem

Wyniki wykorzystuje się wyłącznie w zakresie, w jakim zastosowana metoda dostarcza wystarczających podstaw do określonego ustalenia.

W zależności od rodzaju wyniku może być potrzebne:

- bezpośrednie stwierdzenie problemu;
- zinterpretowanie wyniku;
- zweryfikowanie go przez człowieka;
- połączenie z innymi informacjami;
- wykonanie dodatkowego testu;
- przeprowadzenie oceny doraźnej.

Wyników automatycznych nie uogólnia się poza zakres, którego rzeczywiście dotyczyła analiza.

---

## 4. Sposoby wykorzystywania automatycznych analiz

### 4.1. Automatyczne sprawdzanie

Automatyczne sprawdzanie polega na wykonaniu analizy określonego obiektu albo niewielkiego zakresu rozwiązania.

Może służyć w szczególności do:

- sprawdzenia strony, ekranu, dokumentu lub komponentu;
- wsparcia wykonywania scenariusza testu;
- rozpoznania problemu zgłoszonego przez użytkownika;
- sprawdzenia zmienionego obiektu;
- sprawdzenia rezultatu działania naprawczego.

### 4.2. Automatyczne skanowanie

Automatyczne skanowanie polega na analizowaniu większego zbioru obiektów.

Może służyć w szczególności do:

- rozpoznania zakresu występowania problemów;
- identyfikowania problemów powtarzalnych;
- wykrywania problemów wynikających ze wspólnych komponentów, szablonów lub sposobów tworzenia treści;
- wskazywania obszarów wymagających dalszej oceny;
- doboru obiektów do ocen planowych lub doraźnych;
- zwiększania zakresu strukturalnego rozpoznania stanu.

Duża liczba przeanalizowanych obiektów nie oznacza szerokiego rozpoznania stanu we wszystkich jego wymiarach.

### 4.3. Powtarzane analizy automatyczne

Automatyczne sprawdzanie lub skanowanie może być wykonywane wielokrotnie w celu obserwowania zmian stanu rozwiązania.

Powtarzane analizy mogą służyć do:

- wykrywania nowych problemów;
- wykrywania zmian wcześniej rozpoznanego stanu;
- sprawdzania, czy wcześniej wykryte problemy nadal występują;
- wykrywania ponownego wystąpienia problemów;
- obserwowania zmian wyników w czasie;
- aktualizowania wiedzy o stanie rozwiązania.

Wartość porównania kolejnych wyników zależy od ich porównywalności. Uwzględnia się między innymi zmiany zakresu analizy, zestawu reguł, wersji narzędzia, struktury rozwiązania oraz środowiska wykonywania analizy.

Granice między automatycznym sprawdzaniem, skanowaniem i powtarzanymi analizami nie muszą być ostre. To samo narzędzie może być wykorzystywane na kilka sposobów.

---

## 5. Sposoby wykonywania powtarzanych analiz

### 5.1. Analizowanie obiektów odnajdywanych przez narzędzie

Narzędzie może samodzielnie odnajdywać i analizować obiekty rozwiązania, na przykład przez przeglądanie stron lub innych dostępnych zasobów.

Takie rozwiązanie może umożliwiać:

- analizowanie dużej liczby obiektów;
- wykonywanie analiz według ustalonego harmonogramu;
- powtarzanie analiz w podobnych warunkach;
- porównywanie kolejnych wyników;
- wykrywanie problemów występujących w wielu obiektach.

Zakres analizy zależy od zdolności narzędzia do odnajdywania obiektów i osiągania odpowiednich stanów rozwiązania.

Poza analizą mogą pozostać między innymi:

- obiekty wymagające uwierzytelnienia;
- niektóre dynamiczne stany interfejsu;
- kolejne etapy procesów użytkownika;
- treści dostępne dopiero po wykonaniu określonych interakcji.

### 5.2. Analizowanie podczas rzeczywistego korzystania

Niektóre narzędzia mogą wykonywać automatyczne analizy podczas rzeczywistych odwiedzin i interakcji użytkowników z rozwiązaniem.

Analizy mogą wówczas obejmować:

- rzeczywiście odwiedzane obiekty;
- stany rozwiązania osiągane podczas korzystania;
- dynamicznie prezentowane treści;
- różne urządzenia, systemy, przeglądarki i inne środowiska użytkowania.

Ten sposób może dostarczać szczególnie przydatnych informacji o częściach rozwiązania rzeczywiście wykorzystywanych przez użytkowników.

Zakres analizy zależy jednak od rzeczywistego korzystania z rozwiązania. Obiekty rzadko wykorzystywane lub niewykorzystywane mogą pozostać poza obserwacją.

### 5.3. Łączenie sposobów pozyskiwania informacji

Organizacja może łączyć różne sposoby wykonywania analiz automatycznych.

Skanowanie może zapewniać szerokie i powtarzalne sprawdzanie ustalonego zakresu rozwiązania, natomiast analizy wykonywane podczas rzeczywistego korzystania mogą dostarczać informacji o osiąganych stanach rozwiązania i środowiskach użytkowania.

Informacje te mogą być uzupełniane wynikami ocen planowych i doraźnych, testów manualnych i funkcjonalnych, zgłoszeniami użytkowników oraz informacjami pochodzącymi z innych źródeł.

---

## 6. Ustalanie zakresu automatycznej analizy

Przed wykonaniem automatycznej analizy ustala się odpowiednio:

- jej cel;
- rozwiązanie i obiekty objęte analizą;
- oczekiwany rodzaj informacji;
- sposób wykorzystania wyników;
- potrzebę powtarzania analizy;
- sposób zachowania informacji potrzebnych do prawidłowej interpretacji wyników.

Zakres automatycznej analizy rozpatruje się w tych samych wymiarach, które służą określaniu zakresu innych ocen:

1. **zakres wymagań** — jakie wymagania lub ich części mogą być sprawdzane za pomocą zastosowanych reguł;
2. **zakres funkcjonalny** — jakie funkcje, procesy użytkownika i stany interfejsu zostały objęte analizą;
3. **zakres strukturalny** — jakie strony, ekrany, dokumenty, komponenty i inne obiekty zostały objęte analizą;
4. **zakres użytkowy** — w jakim stopniu analiza obejmuje funkcje, procesy i części rozwiązania istotne z punktu widzenia jego rzeczywistego użytkowania;
5. **zakres środowisk użytkowania** — w jakich urządzeniach, systemach, przeglądarkach, konfiguracjach i innych środowiskach wykonano analizę.

Automatyczna analiza może mieć bardzo szeroki zakres w jednym wymiarze i jednocześnie ograniczony zakres w innych.

Przeanalizowanie wszystkich albo większości stron rozwiązania może oznaczać szeroki zakres strukturalny, ale nie oznacza automatycznie szerokiego zakresu wymagań, funkcjonalnego, użytkowego ani środowisk użytkowania.

Zakres automatycznej analizy dokumentuje się w stopniu potrzebnym do prawidłowej interpretacji i wykorzystania jej wyników.

---

## 7. Interpretowanie wyników

### 7.1. Znaczenie wyniku

Wyniki automatycznych analiz interpretuje się odpowiednio do sposobu działania narzędzia, rodzaju zastosowanej reguły i celu analizy.

Wynik może w szczególności:

- dostarczać wystarczającej podstawy do stwierdzenia określonego problemu;
- wskazywać możliwość występowania problemu wymagającego weryfikacji;
- dostarczać informacji potrzebnej do wykonania scenariusza testu lub innej oceny;
- okazać się wynikiem błędnym albo nieprzydatnym do określonego celu.

Klasyfikacje i nazwy wyników stosowane przez konkretne narzędzia mogą mieć inne znaczenie niż klasyfikacje przyjęte przez organizację. Wynik interpretuje się na podstawie rzeczywistego sposobu działania zastosowanej reguły, a nie wyłącznie nazwy kategorii nadanej przez producenta narzędzia.

### 7.2. Grupowanie i analizowanie wyników

Każdego komunikatu wygenerowanego przez narzędzie nie traktuje się automatycznie jako odrębnego problemu, obserwacji lub niezgodności.

Wyniki analizuje się odpowiednio pod kątem:

- duplikatów;
- powtarzalnych wystąpień;
- wspólnych przyczyn;
- problemów wynikających z jednego komponentu lub szablonu;
- problemów wynikających ze sposobu tworzenia treści;
- zmian wcześniej rozpoznanego stanu.

Wiele wystąpień może wskazywać jeden wspólny problem wymagający zmiany komponentu, szablonu, sposobu tworzenia treści albo innego rozwiązania wspólnego.

Szczegółowe zasady przekształcania wyników w wiedzę o stanie określa załącznik **Przetwarzanie wyników obserwowania i oceniania stanu dostępności i zgodności**.

---

## 8. Wykorzystywanie wyników podczas oceniania

Automatyczne analizy mogą być wykorzystywane podczas ocen planowych i doraźnych.

Mogą służyć między innymi do:

- wykonywania lub wspierania scenariuszy testów;
- wskazywania scenariuszy wymagających wykonania;
- dostarczania materiałów stanowiących podstawę ustaleń;
- wybierania obiektów do dalszej oceny;
- rozszerzania zakresu strukturalnego oceny;
- identyfikowania obszarów wymagających dalszego rozpoznania;
- sprawdzania informacji uzyskanych z innych źródeł.

Automatyczne analizy mogą być wykorzystywane we wszystkich profilach ocen planowych.

W profilu wstępnym mogą wspierać pierwsze uporządkowane rozpoznanie stanu oraz wykrywanie podstawowych problemów możliwych do rozpoznania automatycznego.

W profilu rozszerzonym mogą wspierać zwiększanie zakresu rozpoznania, analizowanie większych zbiorów obiektów, rozpoznawanie problemów powtarzalnych oraz aktualizowanie wcześniejszej wiedzy.

W profilu pogłębionym mogą być stosowane specjalistyczne narzędzia i sposoby automatyzacji odpowiednie do zagadnienia wymagającego pogłębionego rozpoznania.

Wyniki automatycznych analiz przetwarza się i wykorzystuje do aktualizowania wiedzy o stanie na takich samych zasadach jak informacje pochodzące z innych źródeł. Nie przenosi się automatycznie wszystkich komunikatów narzędzia do dokumentacji wiedzy o stanie rozwiązania.

Pełne raporty lub zbiory wyników mogą być zachowywane jako materiały stanowiące podstawę dokonanych ustaleń.

---

## 9. Sprawdzanie rezultatów działań

Narzędzia automatyczne mogą wspierać sprawdzanie rezultatów działań dotyczących dostępności.

Ponowna analiza może służyć do:

- sprawdzenia, czy wcześniej wykryty problem nadal występuje;
- wyszukania innych wystąpień tego samego problemu;
- sprawdzenia skutków zmiany komponentu lub szablonu;
- wykrywania problemów powstałych wskutek zmiany;
- wykrywania ponownego wystąpienia wcześniej usuniętych problemów;
- aktualizowania wiedzy o stanie rozwiązania.

Brak ponownego wykrycia problemu nie zawsze stanowi wystarczającą podstawę do uznania działania za skuteczne.

Jeżeli charakter problemu tego wymaga, automatyczną analizę uzupełnia się odpowiednimi testami manualnymi, funkcjonalnymi lub innymi metodami.

---

## 10. Dokumentowanie, wymiana i wykorzystywanie wyników

### 10.1. Zachowywanie wyników

Narzędzia automatyczne mogą przechowywać wyniki kolejnych analiz, umożliwiać ich porównywanie, grupowanie i filtrowanie oraz przedstawiać informacje o zmianach w czasie.

Nie oznacza to, że system wykorzystywany do automatycznych analiz musi być miejscem utrzymywania całej wiedzy organizacji o stanie rozwiązania.

Organizacja ustala, które informacje pozostają w narzędziu, które są wykorzystywane do aktualizowania dokumentowanej wiedzy o stanie, a które wymagają przekazania do innych osób lub systemów.

### 10.2. Raportowanie, eksportowanie i integrowanie danych

Narzędzia mogą udostępniać wyniki w różny sposób:

- **raportowanie** umożliwia przedstawianie wyników w postaci przeznaczonej przede wszystkim do wykorzystania przez człowieka;
- **eksportowanie danych** umożliwia dalsze przetwarzanie wyników w ustrukturyzowanej postaci;
- **integracja systemów** umożliwia automatyczne przekazywanie lub synchronizowanie informacji między narzędziami i systemami.

Przy przekazywaniu wyników zachowuje się, odpowiednio do potrzeb, informacje pozwalające ustalić:

- czego dotyczy wynik;
- źródło informacji;
- czas wykonania analizy;
- zastosowane narzędzie i regułę;
- zakres analizy;
- kontekst i środowisko wykonania analizy;
- powiązanie z wcześniejszymi informacjami, jeżeli jest istotne.

Możliwość automatycznej integracji nie oznacza, że każdy wynik powinien być automatycznie przekształcany w obserwację, niezgodność lub problem wymagający działania.

### 10.3. Wskaźniki i trendy

Narzędzia mogą generować między innymi:

- wyniki punktowe;
- odsetki;
- liczby wykrytych problemów;
- liczby obiektów z problemami;
- trendy;
- porównania kolejnych wyników.

Wskaźniki mogą służyć do obserwowania zmian i porównywania wyników uzyskanych za pomocą tej samej lub porównywalnej metody.

Nie stanowią samodzielnej miary dostępności ani zgodności rozwiązania.

Na porównywalność wyników mogą wpływać w szczególności zmiany:

- zakresu analizy;
- zestawu reguł;
- wersji narzędzia;
- struktury rozwiązania;
- środowiska wykonywania analizy.

---

## 11. Dobór narzędzi i sposobu ich wykorzystania

Narzędzie dobiera się odpowiednio do informacji, które organizacja potrzebuje uzyskiwać, oraz sposobu ich późniejszego wykorzystania.

Przy ocenie przydatności narzędzia uwzględnia się odpowiednio:

- rodzaje i technologie obsługiwanych rozwiązań;
- zakres wykonywanych analiz;
- sposób pozyskiwania informacji;
- rodzaje reguł i wiarygodność generowanych wyników;
- możliwy zakres strukturalny i funkcjonalny analizy;
- możliwość wykonywania analiz w odpowiednich środowiskach;
- możliwość powtarzania analiz;
- możliwość porównywania wyników;
- sposób prezentowania i grupowania wyników;
- możliwość eksportowania danych;
- mechanizmy integracji z innymi narzędziami i systemami;
- zakres informacji zachowywanych wraz z wynikami;
- dostępność narzędzia dla osób, które mają się nim posługiwać.

Znaczenie poszczególnych cech zależy od zamierzonego sposobu wykorzystania narzędzia. Narzędzie przeznaczone do doraźnego sprawdzania pojedynczych obiektów nie musi zapewniać tych samych funkcji co rozwiązanie wykorzystywane do regularnego analizowania dużego zbioru zasobów.

---

## 12. Ograniczenia i najczęstsze błędy

Podczas wykorzystywania narzędzi automatycznych unika się w szczególności:

- utożsamiania braku wykrytych problemów z dostępnością rozwiązania;
- traktowania wyników automatycznych jako pełnej oceny zgodności;
- zastępowania metod wymagających oceny człowieka automatyczną analizą;
- bezkrytycznego przyjmowania komunikatów narzędzia;
- traktowania każdego komunikatu jako odrębnej niezgodności;
- nieuwzględniania problemów powtarzalnych i ich wspólnych przyczyn;
- wykonywania analiz bez określonego celu;
- gromadzenia wyników bez ich interpretowania i wykorzystywania;
- niewykorzystywania wyników do aktualizowania wiedzy i planowania dalszych ocen;
- nieustalania rzeczywistego zakresu wykonywanych analiz;
- utożsamiania liczby przeanalizowanych obiektów z zakresem oceny zgodności;
- porównywania wyników uzyskanych w nieporównywalnym zakresie lub warunkach;
- traktowania wyników punktowych jako miary dostępności rozwiązania;
- ograniczania oceniania do problemów możliwych do wykrycia automatycznie.

Największą wartość narzędzia automatyczne zapewniają wtedy, gdy ich wyniki są interpretowane z uwzględnieniem możliwości i ograniczeń zastosowanych metod, łączone z informacjami pochodzącymi z innych źródeł oraz wykorzystywane do aktualizowania wiedzy o stanie rozwiązania i podejmowania potrzebnych działań.