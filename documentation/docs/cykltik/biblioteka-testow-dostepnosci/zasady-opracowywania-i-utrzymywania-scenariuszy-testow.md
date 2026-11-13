---
id: zasady-opracowywania-i-utrzymywania-scenariuszy-testow
title: Zasady opracowywania i utrzymywania scenariuszy testów
description: Zasady tworzenia, opisywania, klasyfikowania, weryfikowania, publikowania, aktualizowania i wycofywania scenariuszy z Biblioteki testów dostępności cyfrowej.
sidebar_label: Opracowywanie i utrzymywanie testów
sidebar_position: 2
tags: [dostępność cyfrowa, biblioteka testów, scenariusze testów, opracowywanie testów, utrzymywanie testów]
opracowanie: Stefan Wajda
data_zgloszenia: 11 czerwca 2026 r.
ostatnia_aktualizacja: 23 października 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Dokument określa zasady opracowywania, opisywania, klasyfikowania, weryfikowania, publikowania, aktualizowania i wycofywania scenariuszy z Biblioteki testów dostępności cyfrowej Sieci dostępności cyfrowej.

Stosowanie wspólnych zasad służy utrzymywaniu jakości, spójności i użyteczności Biblioteki oraz umożliwia jej systematyczne rozwijanie wraz ze zmianami wymagań dostępności, technologii, metod badania i rozpoznanych potrzeb.

Dokument nie określa zasad doboru i wykonywania scenariuszy w konkretnych badaniach ani dokumentowania i wykorzystywania uzyskanych ustaleń.

## 1. Zasada ogólna

Biblioteka testów dostępności cyfrowej jest wspólnym instrumentarium udostępnianym i utrzymywanym przez Sieć Dostępności Cyfrowej jako narzędzie wspierające organizacje w obserwowaniu, badaniu i ocenianiu dostępności rozwiązań cyfrowych. Scenariusze pomagają rozpoznawać i diagnozować problemy dostępności oraz ustalać zgodność z wymaganiami. Biblioteka nie stanowi obowiązującej metodyki badania i oceniania dostępności ani nie narzuca organizacjom określonego sposobu prowadzenia badań.

Każdy scenariusz jest identyfikowalnym i wersjonowanym elementem Biblioteki.

Scenariusze są opracowywane i utrzymywane w sposób zapewniający:

- jednoznaczne określenie celu, przedmiotu i zakresu testu;
- możliwość prawidłowego i powtarzalnego wykonania testu;
- możliwość uzyskiwania, interpretowania i dokumentowania ustaleń dotyczących konkretnych obiektów, w tym wykrytych problemów dostępności;
- możliwość odrębnego formułowania ustaleń dotyczących powiązanych wymagań dostępności;
- prawidłowe określenie powiązań z wymaganiami dostępności i innymi scenariuszami;
- spójność struktury i klasyfikacji Biblioteki;
- możliwość aktualizowania i rozwijania scenariuszy;
- zachowanie historii istotnych zmian.

## 2. Rozpoznanie potrzeby i określenie celu testu

Nowy scenariusz jest opracowywany, jeżeli Biblioteka nie zawiera testu umożliwiającego uzyskanie potrzebnych informacji albo istniejące scenariusze nie odpowiadają tej potrzebie w wystarczającym stopniu.

Potrzeba opracowania lub zmiany scenariusza może wynikać w szczególności z:

- potrzeby zbadania nieuwzględnionej dotychczas cechy dostępności, obiektu lub procesu użytkownika;
- potrzeby wykrywania, diagnozowania lub sprawdzania usunięcia określonych problemów dostępności;
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
- wymagania dostępności powiązane z testem, jeżeli mają zastosowanie;
- istniejące scenariusze dotyczące tego samego lub powiązanego przedmiotu i zakresu badania.

Przedmiotem testu może być w szczególności:

- **cecha dostępności** – gdy test służy zbadaniu określonej cechy lub grupy powiązanych cech występujących w rozwiązaniu cyfrowym albo jego częściach;
- **obiekt** – gdy test służy zbadaniu jednej lub wielu cech istotnych dla dostępności określonego rodzaju rozwiązania, widoku, komponentu, elementu, treści lub dokumentu;
- **proces użytkownika** – gdy test służy zbadaniu jednej lub wielu cech dostępności ujawniających się podczas wykonywania sekwencji czynności prowadzących do określonego celu.

Każdy scenariusz ma jednoznacznie określony cel, przedmiot i zakres badania.

Zakres scenariusza wynika z celu testu i informacji, które mają zostać uzyskane. Nie jest rozszerzany wyłącznie po to, aby test obejmował większą liczbę wymagań dostępności.

Scenariusz testu obiektu lub procesu użytkownika może odwoływać się do scenariuszy testów cech, jeżeli do jego wykonania potrzebne jest zweryfikowanie tych cech.

Jeżeli odpowiednia procedura badawcza została opisana w scenariuszu testu cechy, scenariusz obiektu lub procesu może wskazywać ten test oraz określać sposób wykorzystania uzyskanych ustaleń, zamiast ponownie opisywać tę samą procedurę.

## 3. Konstrukcja scenariusza

Scenariusze są opracowywane według wspólnej struktury przyjętej dla Biblioteki.

Opis scenariusza umożliwia osobie posiadającej wymagane kompetencje:

1. ustalenie, czego dotyczy test i kiedy ma zastosowanie;
2. przygotowanie potrzebnego środowiska, narzędzi i danych;
3. przeprowadzenie czynności badawczych;
4. rozpoznanie i opisanie problemów dostępności oraz innych istotnych obserwacji;
5. ustalenie, które obserwacje wskazują na niespełnienie określonych wymagań, jeżeli ma to zastosowanie;
6. udokumentowanie i prawidłową interpretację ustaleń.

Scenariusz zawiera, odpowiednio do charakteru testu, co najmniej:

- identyfikator i nazwę testu;
- cel, przedmiot i zakres testu;
- warunki stosowania;
- powiązane wymagania dostępności i scenariusze;
- wymagane narzędzia, technologie lub środowisko;
- wymagane przygotowanie;
- sposób wykonania testu;
- właściwości i zachowania, które należy sprawdzić, oraz wskazówki interpretowania obserwacji;
- przykłady problemów dostępności i wskazówki ich rozpoznawania;
- zasady dokumentowania ustaleń i dowodów;
- warunki formułowania ustaleń dotyczących zgodności z wymaganiami, jeżeli mają zastosowanie;
- ograniczenia i uwagi dotyczące interpretacji;
- informacje potrzebne do klasyfikacji i utrzymywania scenariusza.

Procedura testowa jest opisywana w sposób jednoznaczny, zwięzły i możliwy do zastosowania w praktyce.

Opis określa czynności potrzebne do wykonania testu, ich kolejność, jeżeli ma znaczenie dla obserwacji, oraz sposób postępowania, gdy test nie ma zastosowania albo zgromadzone informacje nie pozwalają na sformułowanie uzasadnionych ustaleń.

Poziom szczegółowości scenariusza odpowiada złożoności testu oraz kompetencjom wymaganym od osoby go wykonującej.

## 4. Ustalenia z badań i powiązania z wymaganiami

Scenariusz określa, jakie obserwacje należy poczynić i jak je interpretować, aby rozpoznawać właściwości badanych obiektów, wykrywać problemy dostępności oraz – jeżeli ma to zastosowanie – formułować ustalenia dotyczące zgodności z wymaganiami.

Scenariusz pomaga odróżniać:

- obserwacje potwierdzające określone właściwości dostępności;
- obserwacje wskazujące na problem dostępności, wraz z jego lokalizacją, okolicznościami i możliwymi konsekwencjami;
- ustalenia wskazujące na niespełnienie określonego wymagania;
- ustalenia potwierdzające spełnienie wymagania w zbadanym zakresie;
- sytuacje, w których badanie nie ma zastosowania lub nie dostarcza wystarczających podstaw do rozstrzygnięcia.

Rozpoznanie i udokumentowanie problemu dostępności nie wymaga wykazania niezgodności z normą. Scenariusz nie powinien pomijać rzeczywistych problemów tylko dlatego, że nie można ich jednoznacznie powiązać z wymaganiem normatywnym.

Scenariusz wskazuje powiązane wymagania dostępności i wyjaśnia, które obserwacje mogą stanowić podstawę ustaleń dotyczących każdego z nich. Jeżeli obejmuje kilka wymagań, umożliwia formułowanie odrębnych ustaleń dla poszczególnych wymagań, w zakresie uzasadnionym przeprowadzonym badaniem.

Powiązanie testu z wymaganiem nie oznacza, że wykonanie jednego testu wystarcza do oceny spełnienia tego wymagania w całym rozwiązaniu. Jedno wymaganie może być powiązane z kilkoma scenariuszami, a jeden scenariusz może dostarczać informacji dotyczących kilku wymagań.

Wykonanie scenariusza nie wymaga formułowania jednej zbiorczej oceny testu jako spełnionego albo niespełnionego. Scenariusz określa natomiast sposób dokumentowania istotnych ustaleń, podstaw ich sformułowania, ograniczeń badania i potrzeby dalszych czynności.

Powiązania z wymaganiami są określane i aktualizowane w sposób wspierający dobór scenariuszy i prawidłowe wykorzystywanie ustaleń.

## 5. Klasyfikacja, identyfikacja i wersjonowanie

Scenariusze są klasyfikowane w sposób ułatwiający ich odnajdywanie, dobieranie, stosowanie i utrzymywanie.

Klasyfikacja może uwzględniać w szczególności:

- przedmiot testu;
- powiązane wymagania dostępności;
- strategie korzystania z rozwiązania;
- rodzaj lub metodę testu;
- wymagane narzędzia i kompetencje;
- najniższy profil stosowania scenariusza;
- inne właściwości istotne dla wykorzystania Biblioteki.

Jeden scenariusz może należeć do kilku kategorii. Kategorie służą rzeczywistym potrzebom związanym z wyszukiwaniem, grupowaniem, dobieraniem, stosowaniem lub utrzymywaniem scenariuszy.

Najniższy profil stosowania scenariusza wspiera jego odnajdywanie i dobór. Nie określa zakresu konkretnego badania ani obowiązku wykonania testu. Profile stosowania są opisane w odrębnym dokumencie Biblioteki.

Każdy scenariusz posiada trwały identyfikator umożliwiający jego jednoznaczne wskazanie niezależnie od zmian nazwy, klasyfikacji lub wersji. Identyfikator raz nadany nie jest ponownie wykorzystywany dla innego scenariusza.

Scenariusz posiada informacje umożliwiające ustalenie jego aktualnej wersji oraz historii istotnych zmian.

Zmiana wersji jest dokumentowana, jeżeli wpływa w szczególności na cel, przedmiot lub zakres testu, warunki stosowania, sposób wykonania, uzyskiwanie lub interpretowanie ustaleń albo powiązania z wymaganiami dostępności i innymi scenariuszami.

Drobne poprawki redakcyjne i techniczne mogą być dokumentowane w sposób uproszczony.

## 6. Weryfikacja i próbne wykonanie

Nowy lub istotnie zmieniony scenariusz jest weryfikowany przed włączeniem do Biblioteki albo opublikowaniem nowej wersji.

Weryfikacja służy ustaleniu, czy scenariusz:

- ma jasno określony cel, przedmiot i zakres;
- odpowiada rzeczywistej potrzebie badawczej;
- jest zgodny ze strukturą i zasadami Biblioteki;
- może zostać wykonany zgodnie z opisanym sposobem postępowania;
- pozwala uzyskać informacje odpowiadające celowi testu;
- pomaga rozpoznawać i diagnozować problemy dostępności oraz dokumentować istotne obserwacje;
- określa sposób uzyskiwania, dokumentowania i interpretowania ustaleń, także w odniesieniu do wymagań normatywnych;
- ma właściwie określone powiązania i klasyfikację;
- nie powiela bez uzasadnienia istniejących scenariuszy.

Zakres i sposób weryfikacji są dostosowywane do charakteru i złożoności testu.

Jeżeli jest to potrzebne do oceny jakości scenariusza, jest on wykonywany próbnie.

Próbne wykonanie może służyć w szczególności sprawdzeniu jednoznaczności instrukcji, kompletności czynności badawczych, możliwości rozpoznawania problemów i formułowania uzasadnionych ustaleń oraz trudności związanych z ich dokumentowaniem lub interpretowaniem.

W przypadku testów wymagających istotnej oceny eksperckiej można porównać sposób wykonania, poczynione obserwacje i ustalenia sformułowane przez różne osoby.

Stwierdzone problemy są usuwane przed zatwierdzeniem scenariusza albo dokumentowane jako znane ograniczenia, jeżeli nie uniemożliwiają jego prawidłowego stosowania.

## 7. Zatwierdzenie i publikacja

Do Biblioteki włączane są scenariusze, które przeszły odpowiednią weryfikację.

Przed publikacją ustala się co najmniej identyfikator i wersję scenariusza, jego klasyfikację, powiązania z wymaganiami dostępności i innymi scenariuszami oraz status.

Scenariusz może posiadać w szczególności status:

- projektowany;
- weryfikowany;
- opublikowany;
- zastąpiony;
- wycofany.

Do bieżącego stosowania przeznaczone są scenariusze posiadające status **opublikowany**.

Biblioteka umożliwia jednoznaczne odróżnienie scenariuszy przeznaczonych do bieżącego stosowania od projektów oraz scenariuszy zastąpionych i wycofanych.

## 8. Przegląd, aktualizacja i informacje zwrotne

Scenariusze są przeglądane i aktualizowane odpowiednio do zmian mogących wpływać na ich poprawność, aktualność lub przydatność.

Potrzeba przeglądu lub zmiany scenariusza może wynikać w szczególności ze:

- zmiany wymagań dostępności lub dokumentów normatywnych;
- zmiany technologii;
- rozwoju metod badania dostępności;
- doświadczeń i informacji zwrotnych ze stosowania scenariusza;
- stwierdzonych błędów, niejednoznaczności lub braków;
- trudności w wykrywaniu, dokumentowaniu lub interpretowaniu problemów i innych ustaleń;
- zmian innych scenariuszy lub struktury Biblioteki.

Sieć Dostępności Cyfrowej zapewnia osobom i organizacjom korzystającym z Biblioteki możliwość zgłaszania problemów związanych ze stosowaniem scenariuszy, propozycji zmian oraz potrzeb opracowania nowych testów.

Zgłoszenia są analizowane i wykorzystywane do rozpoznawania potrzeby poprawienia, aktualizacji, zastąpienia lub wycofania scenariusza albo opracowania nowego testu.

Jeżeli zmiana scenariusza prowadzi do powstania testu o innym celu lub przedmiocie, opracowuje się nowy scenariusz, a dotychczasowy odpowiednio zastępuje lub wycofuje.

## 9. Zastępowanie, wycofywanie i utrzymywanie spójności Biblioteki

Scenariusz może zostać zastąpiony albo wycofany, jeżeli utracił aktualność, nie odpowiada obowiązującym wymaganiom lub technologiom, zawiera istotne błędy, został zastąpiony przez lepszy scenariusz albo jego dalsze utrzymywanie nie jest uzasadnione.

Scenariusz zastąpiony lub wycofany nie jest przeznaczony do bieżącego stosowania.

Informacje o nim są zachowywane w zakresie potrzebnym do odtworzenia historii Biblioteki, ustalenia scenariusza i jego wersji zastosowanej we wcześniejszych badaniach oraz prawidłowego interpretowania uzyskanych ustaleń.

Jeżeli scenariusz został zastąpiony, wskazuje się scenariusz lub scenariusze przeznaczone do stosowania w jego miejsce, jeżeli jest to możliwe.

Rozwijanie Biblioteki służy utrzymywaniu jej kompletności, jakości, spójności i użyteczności, a nie zwiększaniu liczby scenariuszy. Podczas jej utrzymywania analizuje się w szczególności:

- kompletność zakresu badanych cech, obiektów i procesów użytkownika;
- występowanie luk wymagających opracowania nowych testów;
- nieuzasadnione nakładanie się zakresów scenariuszy;
- spójność sposobu opisywania procedur i interpretowania ustaleń;
- poprawność klasyfikacji i powiązań;
- aktualność scenariuszy;
- możliwość odnajdywania i dobierania testów do określonych potrzeb.

W razie potrzeby scenariusze mogą być zmieniane, zastępowane, wycofywane lub porządkowane w zestawy, jeżeli poprawia to użyteczność i spójność Biblioteki.

Celem rozwijania i utrzymywania Biblioteki jest zapewnienie wspólnego, użytecznego i wiarygodnego instrumentarium badawczego, umożliwiającego spójne i powtarzalne wykonywanie testów dostępności cyfrowej oraz wspólne wykorzystywanie i rozwijanie sprawdzonych scenariuszy testów.