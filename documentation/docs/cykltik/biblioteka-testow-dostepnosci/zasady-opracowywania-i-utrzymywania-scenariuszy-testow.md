---
id: zasady-opracowywania-i-utrzymywania-scenariuszy-testow
title: Zasady opracowywania i utrzymywania scenariuszy testów
description: Zasady tworzenia, opisywania, klasyfikowania, weryfikowania, aktualizowania i wycofywania scenariuszy testów dostępności cyfrowej.
sidebar_label: Opracowywanie i utrzymywanie testów
sidebar_position: 2
keywords: [dostępność cyfrowa, biblioteka testów, scenariusze testów, opracowywanie testów, utrzymywanie testów]
tags: [dostępność cyfrowa, biblioteka testów, scenariusze testów, opracowywanie testów, utrzymywanie testów]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 11 czerwca 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Dokument określa zasady opracowywania, opisywania, klasyfikowania, weryfikowania, publikowania, aktualizowania i wycofywania scenariuszy z Biblioteki testów dostępności cyfrowej.

Stosowanie wspólnych zasad służy utrzymywaniu jakości i spójności Biblioteki oraz umożliwia jej systematyczne rozwijanie wraz ze zmianami wymagań dostępności, technologii i potrzeb badawczych.

Zasady mogą być również wykorzystywane przez organizacje opracowujące i utrzymujące własne scenariusze testów.

Dokument nie określa zasad doboru i wykonywania scenariuszy ani dokumentowania i wykorzystywania wyników testów.

## 1. Zasada ogólna

Biblioteka testów dostępności cyfrowej jest wspólnym, rozwijanym zbiorem udokumentowanych scenariuszy testów służącym standaryzacji metodyki badania dostępności i zgodności rozwiązań cyfrowych.

Każdy scenariusz jest identyfikowalnym i wersjonowanym elementem Biblioteki.

Scenariusze są opracowywane i utrzymywane w sposób zapewniający:

- jednoznaczne określenie celu, przedmiotu i zakresu testu;
- możliwość prawidłowego i powtarzalnego wykonania testu;
- możliwość ustalenia i udokumentowania wyniku;
- prawidłowe określenie powiązań z wymaganiami dostępności i innymi scenariuszami;
- spójność struktury i klasyfikacji Biblioteki;
- możliwość aktualizowania i rozwijania scenariuszy;
- zachowanie historii istotnych zmian.

## 2. Rozpoznanie potrzeby i określenie celu testu

Nowy scenariusz jest opracowywany, jeżeli Biblioteka nie zawiera testu umożliwiającego uzyskanie potrzebnych informacji albo istniejące scenariusze nie realizują tej potrzeby w wystarczający sposób.

Potrzeba opracowania lub zmiany scenariusza może wynikać w szczególności z:

- potrzeby zbadania nieuwzględnionej dotychczas cechy dostępności, obiektu lub procesu użytkownika;
- zmiany wymagań dostępności lub dokumentów normatywnych;
- rozwoju technologii lub sposobów korzystania z rozwiązań cyfrowych;
- doświadczeń wynikających ze stosowania istniejących scenariuszy;
- potrzeby zastosowania innej lub dokładniejszej metody badania;
- rozpoznania luk lub niespójności Biblioteki.

Przed rozpoczęciem opracowywania nowego scenariusza sprawdza się, czy potrzebę można zaspokoić przez zastosowanie lub zmianę istniejącego testu.

Przed opracowaniem scenariusza określa się:

- potrzebę informacyjną, której ma odpowiadać test;
- cel testu;
- przedmiot testu;
- zakres badania;
- informacje, które mają zostać uzyskane;
- sytuacje, w których test może być stosowany;
- wymagania dostępności powiązane z testem;
- istniejące scenariusze dotyczące tego samego lub powiązanego przedmiotu i zakresu badania.

Przedmiotem testu może być w szczególności:

- **cecha dostępności** – gdy test służy zbadaniu określonej cechy lub grupy powiązanych cech występujących w rozwiązaniu cyfrowym albo jego częściach;
- **obiekt** – gdy test służy zbadaniu jednej lub wielu cech istotnych dla dostępności określonego rodzaju rozwiązania, widoku, komponentu, elementu, treści lub dokumentu;
- **proces użytkownika** – gdy test służy zbadaniu jednej lub wielu cech dostępności ujawniających się podczas wykonywania sekwencji czynności prowadzących do określonego celu.

Każdy scenariusz powinien mieć jednoznacznie określony cel, przedmiot i zakres badania.

Zakres scenariusza powinien wynikać z celu testu i informacji, które mają zostać uzyskane. Nie powinien być rozszerzany wyłącznie po to, aby test obejmował większą liczbę wymagań dostępności.

Jeżeli badanie obiektu lub procesu użytkownika wymaga zweryfikowania występowania lub poprawności określonej cechy dostępności, stosuje się odpowiedni scenariusz testu cechy, jeżeli jest dostępny w Bibliotece.

Scenariusz testu obiektu lub procesu użytkownika nie powinien powtarzać procedur badawczych opisanych w scenariuszach testów cech. Powinien wskazywać odpowiednie testy cech oraz określać sposób wykorzystania ich wyników do zbadania dostępności obiektu lub procesu.

## 3. Konstrukcja scenariusza

Scenariusze są opracowywane według wspólnej struktury przyjętej dla Biblioteki.

Opis scenariusza powinien umożliwiać osobie posiadającej wymagane kompetencje:

1. ustalenie, czego dotyczy test i kiedy ma zastosowanie;
2. przygotowanie potrzebnego środowiska, narzędzi i danych;
3. przeprowadzenie czynności badawczych;
4. ustalenie i udokumentowanie wyniku;
5. prawidłową interpretację uzyskanych informacji.

Scenariusz zawiera, odpowiednio do charakteru testu, co najmniej:

- identyfikator i nazwę testu;
- cel, przedmiot i zakres testu;
- warunki stosowania;
- powiązane wymagania dostępności i scenariusze;
- wymagane narzędzia, technologie lub środowisko;
- wymagane przygotowanie;
- sposób wykonania testu;
- oczekiwany rezultat;
- zasady ustalania i dokumentowania wyniku;
- ograniczenia i uwagi dotyczące interpretacji;
- informacje potrzebne do klasyfikacji i utrzymywania scenariusza.

Procedura testowa jest opisywana w sposób jednoznaczny, zwięzły i możliwy do zastosowania w praktyce.

Opis powinien określać czynności potrzebne do wykonania testu, ich kolejność, jeżeli ma znaczenie dla wyniku, oraz sposób postępowania, gdy test nie ma zastosowania albo nie można ustalić wyniku.

Poziom szczegółowości scenariusza powinien odpowiadać złożoności testu oraz kompetencjom wymaganym od osoby go wykonującej.

## 4. Ustalanie wyników i powiązania z wymaganiami

Scenariusz określa sposób ustalania i dokumentowania wyniku testu.

Kategorie wyników są stosowane spójnie w całej Bibliotece i umożliwiają odpowiednio rozróżnienie:

- wyniku potwierdzającego spełnienie warunku określonego w scenariuszu;
- wyniku wskazującego na niespełnienie tego warunku;
- sytuacji, w której test nie ma zastosowania;
- sytuacji, w której nie można ustalić wyniku;
- potrzeby przeprowadzenia dalszego badania, jeżeli przewiduje ją charakter testu.

Jeżeli wynik wymaga interpretacji lub oceny eksperckiej, scenariusz wskazuje kryteria i informacje, które należy uwzględnić.

Scenariusz wskazuje wymagania dostępności, dla których wynik testu może dostarczać istotnych informacji.

Powiązanie testu z wymaganiem nie oznacza automatycznie, że wykonanie jednego testu wystarcza do oceny spełnienia wymagania ani że wynik testu jest równoznaczny z oceną zgodności.

Jedno wymaganie może być powiązane z kilkoma scenariuszami, a jeden scenariusz może dostarczać informacji istotnych dla kilku wymagań.

Powiązania są określane i aktualizowane w sposób wspierający dobór testów oraz prawidłowe wykorzystywanie ich wyników.

## 5. Klasyfikacja, identyfikacja i wersjonowanie

Scenariusze są klasyfikowane w sposób ułatwiający ich odnajdywanie, dobieranie, stosowanie i utrzymywanie.

Klasyfikacja może uwzględniać w szczególności:

- przedmiot testu;
- powiązane wymagania dostępności;
- strategie korzystania z rozwiązania;
- rodzaj lub metodę testu;
- wymagane narzędzia i kompetencje;
- zastosowanie w profilach ocen;
- inne właściwości istotne dla wykorzystania Biblioteki.

Jeden scenariusz może należeć do kilku kategorii. Kategorie powinny służyć rzeczywistym potrzebom związanym z wyszukiwaniem, grupowaniem, dobieraniem, stosowaniem lub utrzymywaniem scenariuszy.

Każdy scenariusz posiada trwały identyfikator umożliwiający jego jednoznaczne wskazanie niezależnie od zmian nazwy, klasyfikacji lub wersji. Identyfikator raz nadany nie jest ponownie wykorzystywany dla innego scenariusza.

Scenariusz posiada informacje umożliwiające ustalenie jego aktualnej wersji oraz historii istotnych zmian.

Zmiana wersji jest dokumentowana, jeżeli wpływa w szczególności na cel, przedmiot lub zakres testu, warunki stosowania, sposób wykonania, ustalanie lub interpretowanie wyniku albo powiązania z wymaganiami dostępności i innymi scenariuszami.

Drobne poprawki redakcyjne i techniczne mogą być dokumentowane w sposób uproszczony.

## 6. Weryfikacja i próbne wykonanie

Nowy lub istotnie zmieniony scenariusz jest weryfikowany przed włączeniem do Biblioteki albo opublikowaniem nowej wersji.

Weryfikacja służy ustaleniu, czy scenariusz:

- ma jasno określony cel, przedmiot i zakres;
- odpowiada rzeczywistej potrzebie badawczej;
- jest zgodny ze strukturą i zasadami Biblioteki;
- może zostać wykonany zgodnie z opisanym sposobem postępowania;
- pozwala uzyskać informacje odpowiadające celowi testu;
- określa sposób ustalania, dokumentowania i interpretowania wyniku;
- ma właściwie określone powiązania i klasyfikację;
- nie powiela bez uzasadnienia istniejących scenariuszy.

Zakres i sposób weryfikacji są dostosowywane do charakteru i złożoności testu.

Jeżeli jest to potrzebne do oceny jakości scenariusza, jest on wykonywany próbnie.

Próbne wykonanie może służyć w szczególności sprawdzeniu jednoznaczności instrukcji, kompletności czynności badawczych, możliwości wykonania testu i ustalenia wyniku oraz problemów związanych z dokumentowaniem lub interpretowaniem uzyskanych informacji.

W przypadku testów wymagających istotnej oceny eksperckiej można porównać sposób wykonania i wyniki uzyskane przez różne osoby.

Stwierdzone problemy są usuwane przed zatwierdzeniem scenariusza albo dokumentowane jako znane ograniczenia, jeżeli nie uniemożliwiają jego prawidłowego stosowania.

## 7. Zatwierdzenie i publikacja

Do Biblioteki włączane są scenariusze, które przeszły odpowiednią weryfikację.

Przed publikacją ustala się co najmniej identyfikator i wersję scenariusza, jego klasyfikację, powiązania z wymaganiami dostępności i innymi scenariuszami oraz status.

Scenariusz może posiadać w szczególności status:

- projektowany;
- weryfikowany;
- obowiązujący;
- zastąpiony;
- wycofany.

Do bieżącego stosowania przeznaczone są scenariusze posiadające status obowiązujący.

Biblioteka umożliwia jednoznaczne odróżnienie scenariuszy przeznaczonych do bieżącego stosowania od projektów oraz scenariuszy zastąpionych i wycofanych.

## 8. Przegląd, aktualizacja i informacje zwrotne

Scenariusze są przeglądane i aktualizowane odpowiednio do zmian mogących wpływać na ich poprawność, aktualność lub przydatność.

Potrzeba przeglądu lub zmiany scenariusza może wynikać w szczególności ze:

- zmiany wymagań dostępności lub dokumentów normatywnych;
- zmiany technologii;
- rozwoju metod badania dostępności;
- doświadczeń i informacji zwrotnych ze stosowania scenariusza;
- stwierdzonych błędów, niejednoznaczności lub braków;
- trudności w ustalaniu lub interpretowaniu wyników;
- zmian innych scenariuszy lub struktury Biblioteki.

Osoby korzystające z Biblioteki powinny mieć możliwość zgłaszania problemów związanych ze stosowaniem scenariuszy, propozycji ich ulepszenia oraz potrzeb opracowania nowych testów.

Zgłoszenia są analizowane i mogą prowadzić do poprawienia, aktualizacji, zastąpienia lub wycofania scenariusza albo opracowania nowego testu.

Jeżeli zmiana scenariusza prowadzi do powstania testu o innym celu lub przedmiocie, opracowuje się nowy scenariusz, a dotychczasowy odpowiednio zastępuje lub wycofuje.

## 9. Zastępowanie, wycofywanie i utrzymywanie spójności Biblioteki

Scenariusz może zostać zastąpiony albo wycofany, jeżeli utracił aktualność, nie odpowiada obowiązującym wymaganiom lub technologiom, zawiera istotne błędy, został zastąpiony przez lepszy scenariusz albo jego dalsze utrzymywanie nie jest uzasadnione.

Scenariusz zastąpiony lub wycofany nie jest przeznaczony do bieżącego stosowania.

Informacje o nim są zachowywane w zakresie potrzebnym do odtworzenia historii Biblioteki, ustalenia scenariusza i jego wersji zastosowanej we wcześniejszych badaniach oraz prawidłowego interpretowania ich wyników.

Jeżeli scenariusz został zastąpiony, wskazuje się scenariusz lub scenariusze przeznaczone do stosowania w jego miejsce, jeżeli jest to możliwe.

Rozwijanie Biblioteki nie powinno prowadzić wyłącznie do zwiększania liczby scenariuszy. Podczas jej utrzymywania analizuje się w szczególności:

- kompletność zakresu badanych cech, obiektów i procesów użytkownika;
- występowanie luk wymagających opracowania nowych testów;
- nieuzasadnione nakładanie się zakresów scenariuszy;
- spójność sposobu opisywania procedur i wyników;
- poprawność klasyfikacji i powiązań;
- aktualność scenariuszy;
- możliwość odnajdywania i dobierania testów do określonych potrzeb.

W razie potrzeby scenariusze mogą być zmieniane, zastępowane, wycofywane lub porządkowane w zestawy, jeżeli poprawia to użyteczność i spójność Biblioteki.

Celem rozwijania i utrzymywania Biblioteki jest zapewnienie wspólnego, użytecznego i wiarygodnego instrumentarium służącego standaryzacji metodyki badania dostępności i zgodności, a nie zgromadzenie możliwie największej liczby testów.

