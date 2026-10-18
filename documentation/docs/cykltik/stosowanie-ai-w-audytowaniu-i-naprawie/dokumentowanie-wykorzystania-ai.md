---
id: dokumentowanie-wykorzystania-ai
title: Dokumentowanie wykorzystania AI
description: Zasady dokumentowania istotnego wykorzystania sztucznej inteligencji w ocenianiu i rozwiązywaniu problemów dostępności cyfrowej oraz sposobu kontroli jej wyników i rezultatów działań.
sidebar_label: Dokumentowanie wykorzystania AI
sidebar_position: 3
keywords: [dostępność cyfrowa, sztuczna inteligencja, AI, dokumentowanie, wyniki AI, weryfikacja, odpowiedzialność]
tags: [dostępność cyfrowa, sztuczna inteligencja, dokumentowanie, weryfikacja]
opracowanie: Maciej Budzisz , Stefan Wajda
wersja_robocza: true
---

## Cel dokumentu

Dokument określa zasady dokumentowania wykorzystania sztucznej inteligencji w ocenianiu i rozwiązywaniu problemów dostępności cyfrowej.

Dokumentowanie służy zachowaniu informacji potrzebnych do ustalenia:

- w jakim celu i zakresie wykorzystano AI;
- jaki wpływ miało ono na sposób wykonania prac i ich rezultat;
- które wyniki AI zostały wykorzystane;
- w jaki sposób wyniki te sprawdzono;
- w jaki sposób zweryfikowano rezultaty działań wykonanych z wykorzystaniem AI;
- jakie istotne ograniczenia mogły mieć wpływ na rezultat;
- kto odpowiadał za sprawdzenie, zatwierdzenie lub odbiór rezultatu.

Dokumentowanie wykorzystania AI uzupełnia dokumentację procesu, w którym AI zostało zastosowane. Nie tworzy odrębnego systemu dokumentacji.

## 1. Kiedy dokumentuje się wykorzystanie AI

Organizacja dokumentuje wykorzystanie AI, jeżeli miało ono istotny wpływ na sposób wykonania prac, ich ustalenia albo rezultat.

Dokumentowania wymaga w szczególności wykorzystanie AI do:

- wskazywania, klasyfikowania lub interpretowania problemów dostępności;
- przypisywania ustaleń do wymagań dostępności;
- interpretowania wyników badań;
- formułowania wniosków dotyczących dostępności lub zgodności;
- proponowania sposobu rozwiązania problemu, jeżeli propozycja została wykorzystana;
- generowania albo modyfikowania kodu, treści, konfiguracji lub innych elementów rozwiązania;
- wykonywania działań bezpośrednio w rozwiązaniu, repozytorium lub innym środowisku;
- wykonywania lub interpretowania testów, których wyniki zostały wykorzystane do sformułowania ustaleń;
- przygotowywania merytorycznych części dokumentacji lub raportu, jeżeli treści wygenerowane przez AI zostały wykorzystane jako ustalenia;
- podejmowania innych działań, których wynik miał wpływ na ocenę dostępności, sposób rozwiązania problemu lub rezultat wykonanych prac.

Nie wymaga się odrębnego dokumentowania każdego pomocniczego wykorzystania AI, które nie miało istotnego wpływu na merytoryczne ustalenia, decyzje ani rezultat prac.

Do takich zastosowań może należeć na przykład pomocnicze redagowanie tekstu, zmiana jego formatu, porządkowanie wcześniej zweryfikowanych informacji albo przygotowanie roboczego zestawienia, jeżeli wynik AI został następnie sprawdzony w zwykłym toku pracy i nie stanowił samodzielnego źródła ustaleń.

## 2. Zakres dokumentowania

Zakres dokumentowania jest dostosowany do znaczenia zastosowania AI i jego wpływu na rezultat.

Dokumentacja obejmuje odpowiednio:

1. **cel wykorzystania AI** – do czego system został wykorzystany;
2. **zakres wykorzystania** – jakie zadania wykonywał i czego dotyczyło jego działanie;
3. **wykorzystane narzędzie** – system, usługę lub model w zakresie informacji dostępnych i istotnych dla interpretacji sposobu wykonania prac;
4. **wpływ na rezultat** – w jaki sposób wynik lub działanie AI zostało wykorzystane;
5. **istotne wyniki AI** – ustalenia, propozycje lub działania mające znaczenie dla rezultatu;
6. **sposób sprawdzenia wyników** – kto i w jaki sposób sprawdził wyniki mające wpływ na dalsze prace;
7. **sposób weryfikacji rezultatu** – jakie badania lub inne czynności wykonano w celu sprawdzenia rzeczywistego rezultatu działania;
8. **ograniczenia i odstępstwa** – istotne okoliczności mogące wpływać na wiarygodność wyniku albo zakres wykonanej kontroli;
9. **odpowiedzialność** – osoby lub role odpowiedzialne za sprawdzenie, zatwierdzenie albo odbiór rezultatu.

Nie wszystkie informacje wymagają dokumentowania w każdym przypadku. Zachowuje się te, które są potrzebne do odtworzenia sposobu wykonania prac, zrozumienia znaczenia wykorzystania AI oraz oceny wiarygodności rezultatu.

## 3. Dokumentowanie wykorzystanego narzędzia

Organizacja identyfikuje wykorzystane narzędzie, usługę lub model w takim zakresie, w jakim informacja ta jest dostępna i ma znaczenie dla interpretacji rezultatu.

Może obejmować odpowiednio:

- nazwę narzędzia lub usługi;
- dostawcę;
- oznaczenie modelu lub wersji, jeżeli jest dostępne;
- tryb lub istotną konfigurację działania;
- informację o wykorzystaniu dodatkowych źródeł danych, narzędzi lub funkcji;
- datę albo okres wykorzystania, jeżeli usługa może zmieniać się w czasie.

Organizacja nie jest zobowiązana do dokumentowania parametrów technicznych, których użytkownik usługi nie zna albo nie może wiarygodnie ustalić.

Samo wskazanie nazwy narzędzia lub modelu nie jest wystarczającą dokumentacją wykorzystania AI, jeżeli jego wynik miał istotny wpływ na rezultat prac. Istotniejsze jest określenie, **do czego AI zostało wykorzystane i jak skontrolowano jego wpływ na rezultat**.

## 4. Dokumentowanie wyników AI

Nie ma potrzeby zachowywania wszystkich odpowiedzi generowanych przez AI ani pełnej historii każdej interakcji.

Organizacja zachowuje wynik albo informację o wyniku AI, jeżeli jest to potrzebne do:

- zrozumienia podstaw ustalenia;
- odtworzenia sposobu wykonania pracy;
- wykazania, co zostało następnie sprawdzone;
- wyjaśnienia sposobu powstania zmiany;
- interpretacji dokumentacji lub wyniku oceny;
- ponownej weryfikacji rezultatu.

Jeżeli wynik AI został w całości sprawdzony i przekształcony w udokumentowane ustalenie, nie jest konieczne przechowywanie jego pierwotnej postaci, o ile nie jest ona potrzebna do odtworzenia sposobu wykonania prac.

W szczególności nie ustanawia się ogólnego obowiązku archiwizowania wszystkich promptów, odpowiedzi, wewnętrznych etapów działania systemu ani pełnych zapisów rozmów z AI.

Jeżeli treść polecenia, przekazany kontekst lub inne ustawienie miało istotne znaczenie dla sposobu uzyskania wyniku, organizacja zachowuje informację potrzebną do zrozumienia tego uwarunkowania.

## 5. Dokumentowanie sprawdzenia wyniku AI

Jeżeli wynik AI podlega sprawdzeniu, dokumentacja pozwala ustalić:

- jaki wynik lub rodzaj wyniku został sprawdzony;
- na jakiej podstawie przeprowadzono sprawdzenie;
- jaką metodę zastosowano;
- jaki był rezultat sprawdzenia;
- kto lub jaka rola odpowiadała za sprawdzenie.

Nie jest wymagane sporządzanie odrębnego protokołu sprawdzenia, jeżeli informacje te wynikają z dokumentacji właściwego procesu.

Przykładowo sprawdzenie może zostać udokumentowane bezpośrednio:

- w wyniku testu;
- w raporcie z oceny;
- w opisie problemu;
- w dokumentacji zmiany;
- w przeglądzie kodu;
- w systemie obsługi zgłoszeń;
- w dokumentacji odbioru.

Informacja o tym, że wynik „został zweryfikowany”, bez możliwości ustalenia podstawy i rezultatu sprawdzenia, może być niewystarczająca w przypadku wyników mających istotny wpływ na rezultat prac.

## 6. Dokumentowanie rezultatów działań wykonanych z wykorzystaniem AI

Jeżeli AI zostało wykorzystane do przygotowania lub wykonania zmiany, dokumentowanie wykorzystania AI nie zastępuje dokumentowania samego działania i jego rezultatu.

Dokumentacja pozwala odpowiednio ustalić:

- jaki problem miał zostać rozwiązany;
- w jaki sposób AI uczestniczyło w przygotowaniu lub wykonaniu zmiany;
- jaka zmiana została wykonana;
- w jaki sposób sprawdzono jej rezultat;
- czy problem został rozwiązany;
- czy sprawdzono możliwość wystąpienia regresji lub nowych problemów.

Wynik weryfikacji jest dokumentowany zgodnie z zasadami procesu rozwiązywania problemów i wykorzystywany do aktualizowania wiedzy o stanie dostępności rozwiązania.

Nie wystarcza udokumentowanie, że AI wygenerowało poprawkę albo że system AI uznał ją za prawidłową.

## 7. Dokumentowanie zastosowań powtarzalnych

Dla powtarzalnych zastosowań AI organizacja może udokumentować wspólne zasady jego wykorzystania zamiast powtarzać te same informacje przy każdym użyciu.

Dokumentacja takiego zastosowania może określać:

- rodzaj zadań, do których AI jest dopuszczone;
- wykorzystywane narzędzie lub usługę;
- dopuszczalny zakres danych;
- zakres uprawnień;
- sposób sprawdzania wyników;
- sposób weryfikowania rezultatów;
- ograniczenia wykorzystania;
- role odpowiedzialne za kontrolę.

W dokumentacji konkretnej pracy wystarczy wtedy wskazać zastosowanie AI oraz informacje specyficzne dla danego przypadku.

Jeżeli konkretne użycie wykracza poza wcześniej ustalone warunki, dokumentuje się je odpowiednio do rzeczywistego sposobu wykorzystania AI.

## 8. Dokumentowanie oceny ryzyka i przyjętego sposobu kontroli

Jeżeli zastosowanie wymagało **Oceny ryzyka wykorzystania AI**, jej wynik jest zachowywany albo możliwy do powiązania z dokumentacją prac.

Nie ma potrzeby przepisywania całej oceny ryzyka do dokumentacji każdego przypadku. Wystarczy możliwość ustalenia:

- na jakiej ocenie oparto sposób wykorzystania AI;
- jakie istotne warunki lub ograniczenia przyjęto;
- czy konkretne użycie mieściło się w tych warunkach;
- czy wystąpiły okoliczności wymagające dodatkowej kontroli.

Podobnie, jeżeli zastosowanie odpowiada sposobowi wykorzystania opisanemu w **Klasyfikacji zastosowań AI i wymaganym poziomie kontroli**, dokumentacja może odwoływać się do ustalonego sposobu kontroli zamiast każdorazowo go opisywać.

## 9. Powiązanie z dokumentacją właściwego procesu

Informacje o wykorzystaniu AI są dokumentowane przede wszystkim tam, gdzie dokumentowany jest proces, w którym AI zostało wykorzystane.

W zależności od sytuacji mogą być częścią:

- dokumentacji oceny dostępności;
- wyników testów;
- dokumentacji wiedzy o stanie dostępności;
- raportu z oceny;
- rejestru lub opisu problemu;
- dokumentacji wykonanej zmiany;
- przeglądu kodu;
- dokumentacji odbioru;
- innego narzędzia stosowanego w danym procesie.

Nie tworzy się odrębnego rejestru zastosowań AI, jeżeli istniejąca dokumentacja pozwala zachować potrzebne informacje i powiązać je z właściwymi wynikami, działaniami i decyzjami.

Dokumentacja wykorzystania AI powinna umożliwiać prześledzenie związku:

**zastosowanie AI → istotny wynik lub działanie → sposób kontroli → rezultat prac.**

## 10. Informowanie odbiorcy rezultatu

Jeżeli rezultat pracy jest przekazywany innemu podmiotowi, informacja o wykorzystaniu AI jest przekazywana wtedy, gdy ma znaczenie dla prawidłowego zrozumienia sposobu wykonania pracy, podstaw ustaleń lub wiarygodności rezultatu.

Informacja obejmuje odpowiednio:

- zakres, w jakim wykorzystano AI;
- rodzaj czynności wykonywanych przy jego użyciu;
- sposób sprawdzania wyników mających wpływ na rezultat;
- sposób weryfikowania wykonanych zmian;
- istotne ograniczenia, które odbiorca powinien uwzględnić.

Nie ma potrzeby informowania odbiorcy o każdym pomocniczym użyciu AI, które nie miało istotnego wpływu na rezultat.

Informacja o wykorzystaniu AI nie zastępuje przedstawienia podstaw ustaleń, wyników badań ani innych dowodów wymaganych dla danego rodzaju pracy.

## 11. Zakres dokumentowania a odpowiedzialność

Dokumentowanie wykorzystania AI wspiera możliwość odtworzenia sposobu wykonania prac i ustalenia odpowiedzialności, ale nie zmienia podziału odpowiedzialności obowiązującego w danym procesie.

Osoba wykonująca ocenę odpowiada za ustalenia, które zatwierdza, niezależnie od tego, czy AI uczestniczyło w ich przygotowaniu.

Osoba lub podmiot wykonujący zmianę odpowiada za jej prawidłowe wykonanie zgodnie z zasadami właściwymi dla wykonywanej pracy.

Osoba zatwierdzająca lub odbierająca rezultat odpowiada za decyzję podejmowaną na podstawie zweryfikowanych informacji.

Nie przypisuje się odpowiedzialności systemowi AI ani nie traktuje jego wyniku jako zastępującego ustalenie osoby odpowiedzialnej za rezultat.

## 12. Minimalny zapis wykorzystania AI

Jeżeli istotne wykorzystanie AI nie wymaga bardziej rozbudowanej dokumentacji, można zastosować zwięzły zapis obejmujący:

| Informacja | Zakres |
| --- | --- |
| **Zastosowanie AI** | Do czego wykorzystano AI i jakie zadanie wykonywało |
| **Narzędzie** | Wykorzystane narzędzie, usługa lub model w dostępnym i istotnym zakresie |
| **Wpływ na rezultat** | Jak wynik lub działanie AI zostało wykorzystane |
| **Sprawdzenie wyniku** | W jaki sposób i przez kogo sprawdzono istotne wyniki AI |
| **Weryfikacja rezultatu** | Jak sprawdzono rezultat wykonanej zmiany, jeżeli AI uczestniczyło w jej przygotowaniu lub wykonaniu |
| **Ograniczenia** | Istotne ograniczenia, odstępstwa lub okoliczności wpływające na wiarygodność rezultatu |
| **Odpowiedzialność** | Osoba lub rola zatwierdzająca ustalenie albo rezultat |

Taki zapis może stanowić część istniejącej dokumentacji i nie wymaga tworzenia odrębnego formularza.

## 13. Najważniejsze zasady

1. Dokumentuje się **istotne wykorzystanie AI**, a nie każdą interakcję z systemem.
2. Zakres dokumentowania odpowiada wpływowi AI na rezultat prac.
3. Dokumentacja wskazuje przede wszystkim **do czego użyto AI, jak wykorzystano jego wynik i jak go skontrolowano**.
4. Nie ustanawia się ogólnego obowiązku zachowywania wszystkich promptów i odpowiedzi AI.
5. Informacje techniczne o modelu dokumentuje się w zakresie dostępnym i istotnym.
6. Sprawdzenie wyniku AI i weryfikacja rezultatu wykonanej zmiany są dokumentowane jako odrębne czynności, jeżeli obie występują.
7. Dla powtarzalnych zastosowań można dokumentować wspólne warunki wykorzystania i kontroli.
8. Informacje o AI włącza się do dokumentacji właściwego procesu zamiast tworzyć równoległy system dokumentacji.
9. Odbiorcę informuje się o wykorzystaniu AI wtedy, gdy ma ono znaczenie dla interpretacji lub wiarygodności przekazywanego rezultatu.
10. Dokumentowanie AI nie zmienia odpowiedzialności osób i podmiotów za wykonane prace, ustalenia i decyzje.

<!--
Szczególnie ważne wydaje mi się tu rozstrzygnięcie z sekcji 9: nie tworzymy „rejestru użycia AI” jako kolejnego obowiązkowego zasobu organizacji. Informacja o AI ma podążać za rezultatem pracy — wynikiem testu, ustaleniem oceny, problemem, zmianą, odbiorem. Dzięki temu dokumentowanie służy kontroli i odtwarzalności, a nie samoistnej ewidencji używania technologii.

-->
