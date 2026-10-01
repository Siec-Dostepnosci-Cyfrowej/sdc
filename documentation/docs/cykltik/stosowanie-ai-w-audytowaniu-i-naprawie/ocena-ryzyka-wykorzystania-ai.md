---
id: ocena-ryzyka-wykorzystania-ai
title: Ocena ryzyka wykorzystania AI
description: Sposób oceny ryzyka związanego z wykorzystaniem sztucznej inteligencji w ocenianiu i rozwiązywaniu problemów dostępności cyfrowej oraz ustalania odpowiedniego sposobu kontroli.
sidebar_label: Ocena ryzyka AI
sidebar_position: 1
keywords: [dostępność cyfrowa, sztuczna inteligencja, AI, ocena ryzyka, nadzór, weryfikacja]
tags: [dostępność cyfrowa, sztuczna inteligencja, ocena ryzyka, nadzór, weryfikacja]
wersja_robocza: true
---

## Cel dokumentu

Dokument wspiera ocenę ryzyka związanego z wykorzystaniem sztucznej inteligencji w ocenianiu i rozwiązywaniu problemów dostępności cyfrowej oraz ustalenie sposobu kontroli odpowiedniego do tego ryzyka.

Ocena służy ustaleniu:

- do czego i w jaki sposób AI może zostać wykorzystane;
- jaki wpływ jego działanie może mieć na wynik oceny albo rezultat działania;
- jakie skutki może spowodować błędny, niepełny lub nieodpowiednio wykorzystany wynik;
- jakie dane i uprawnienia mogą zostać udostępnione systemowi;
- w jaki sposób wyniki AI i rezultaty wykonanych z jego wykorzystaniem działań będą sprawdzane.

Ocena nie służy klasyfikowaniu systemu AI na podstawie rozporządzenia (UE) 2024/1689 ani nie zastępuje wymaganych przez organizację ocen dotyczących bezpieczeństwa informacji, ochrony danych osobowych lub dopuszczalności korzystania z określonych usług.

## 1. Kiedy przeprowadza się ocenę

Ryzyko ocenia się przed zastosowaniem AI do zadania, jeżeli jego wynik może mieć znaczenie dla oceny dostępności, sposobu rozwiązania problemu albo rezultatu wykonywanych prac.

Nie jest potrzebna odrębna ocena każdego powtarzalnego użycia tego samego narzędzia w takich samych warunkach. Organizacja może określić sposób dopuszczalnego wykorzystania AI dla powtarzalnego rodzaju zadań i stosować wcześniej dokonaną ocenę, jeżeli nie zmieniły się istotne warunki wykorzystania.

Ocena jest ponawiana albo aktualizowana, jeżeli zmieniają się w szczególności:

- cel lub rodzaj zadania;
- sposób wykorzystania AI;
- rodzaj albo zakres przetwarzanych informacji;
- uprawnienia systemu;
- poziom jego samodzielności;
- wykorzystywane narzędzie lub usługa w sposób mogący wpływać na ryzyko;
- możliwe skutki błędu;
- sposób sprawdzania wyników lub rezultatów działań.

## 2. Określenie zastosowania AI

Ocena dotyczy konkretnego sposobu wykorzystania AI, a nie wyłącznie narzędzia lub modelu.

Przed oceną ryzyka ustala się:

1. **cel wykorzystania** – po co AI ma zostać użyte;
2. **zadanie** – jakie czynności ma wykonywać;
3. **przedmiot działania** – jakie informacje, elementy rozwiązania lub wyniki ma analizować albo modyfikować;
4. **oczekiwany wynik** – jaki rezultat ma wytworzyć;
5. **sposób wykorzystania wyniku** – do czego rezultat AI będzie następnie używany;
6. **zakres samodzielności** – czy AI jedynie przedstawia propozycję, czy również wykonuje działania;
7. **dane i zasoby** – do jakich informacji i zasobów system uzyska dostęp;
8. **uprawnienia** – jakie operacje może wykonywać.

Ta sama usługa AI może wymagać różnego sposobu kontroli w zależności od powierzonego jej zadania. Grupowanie wcześniej zweryfikowanych wyników, wskazywanie potencjalnych problemów dostępności i samodzielne modyfikowanie kodu stanowią różne zastosowania i są oceniane odpowiednio do ich wpływu i możliwych skutków.

## 3. Ocena wpływu na rezultat prac

Organizacja ustala, w jakim stopniu wynik AI może wpływać na rezultat wykonywanych prac.

### 3.1. Niewielki wpływ

Wynik AI wspiera wykonanie czynności pomocniczej i nie stanowi podstawy ustalenia dotyczącego dostępności ani wykonania zmiany w rozwiązaniu.

Może to dotyczyć na przykład porządkowania wcześniej zweryfikowanych informacji lub przygotowywania pomocniczego zestawienia.

### 3.2. Istotny wpływ

Wynik AI jest wykorzystywany przy formułowaniu ustalenia, wyborze sposobu działania albo przygotowaniu zmiany i jego błąd może wpłynąć na rezultat prac.

Może to dotyczyć w szczególności:

- wskazywania potencjalnych problemów;
- klasyfikowania problemów;
- przypisywania wymagań dostępności;
- interpretowania wyników badań;
- proponowania sposobów rozwiązania problemu;
- generowania lub modyfikowania treści albo kodu.

### 3.3. Bezpośredni wpływ

AI wykonuje działanie albo wytwarza wynik, który bez odpowiedniej kontroli mógłby bezpośrednio przesądzić o ustaleniu lub spowodować zmianę rozwiązania.

Dotyczy to w szczególności zastosowań, w których system:

- samodzielnie modyfikuje kod, treść, konfigurację lub inne elementy rozwiązania;
- wykonuje operacje w środowisku produkcyjnym;
- automatycznie podejmuje dalsze działania na podstawie własnego wyniku;
- wytwarza wynik wykorzystywany bezpośrednio do stwierdzenia zgodności, uznania problemu za rozwiązany albo odbioru zmiany.

Bezpośredni wpływ nie oznacza dopuszczalności pozostawienia decyzji systemowi AI. Ustalenia i decyzje wymagające kompetentnej oceny osoby pozostają pod kontrolą człowieka.

## 4. Ocena możliwości sprawdzenia wyniku

Organizacja ustala, czy wynik AI można sprawdzić niezależnie od wskazania systemu.

Uwzględnia w szczególności:

- dostęp do materiału źródłowego;
- możliwość zastosowania właściwych wymagań i metod badania;
- możliwość powtórzenia potrzebnych czynności;
- dostępność informacji pozwalających zweryfikować twierdzenia systemu;
- kompetencje osoby dokonującej sprawdzenia;
- możliwość wykonania właściwych testów rezultatu działania.

Jeżeli wynik mający istotny lub bezpośredni wpływ na rezultat prac nie może zostać wiarygodnie sprawdzony, nie wykorzystuje się go jako podstawy ustalenia, decyzji ani działania.

Możliwość potwierdzenia odpowiedzi przez inny system AI nie zastępuje możliwości sprawdzenia jej na podstawie materiału źródłowego i właściwej metody.

## 5. Ocena skutków błędu

Organizacja rozpatruje, co może się wydarzyć, jeżeli wynik AI będzie błędny, niepełny albo niewłaściwie zinterpretowany.

Uwzględnia odpowiednio możliwość:

- niewykrycia istniejącego problemu dostępności;
- błędnego stwierdzenia problemu;
- nieprawidłowego przypisania wymagania;
- błędnej oceny stanu dostępności lub zgodności;
- wyboru niewłaściwego sposobu rozwiązania problemu;
- wprowadzenia nieskutecznej poprawki;
- spowodowania nowego problemu lub regresji;
- utraty albo zmiany treści, funkcji lub znaczenia informacji;
- podjęcia błędnej decyzji na podstawie wyniku AI;
- ograniczenia użytkownikowi dostępu do informacji, funkcji lub usługi.

Znaczenie skutku ocenia się przede wszystkim z punktu widzenia wpływu na dostępność rozwiązania i możliwość korzystania z niego przez użytkowników.

## 6. Ocena danych i zasobów

Organizacja ustala, jakie informacje i zasoby muszą zostać udostępnione systemowi AI oraz czy takie wykorzystanie jest dopuszczalne.

Uwzględnia odpowiednio:

- występowanie danych osobowych;
- informacje poufne lub objęte ograniczeniami dostępu;
- kod źródłowy;
- dokumentację techniczną;
- logi i informacje o infrastrukturze;
- dane uwierzytelniające;
- informacje użytkowników;
- dokumenty i inne materiały mogące zawierać informacje chronione.

Zakres przekazywanych informacji ogranicza się do potrzeb wykonywanego zadania.

W przypadku korzystania z zewnętrznej usługi uwzględnia się również dostępne informacje o sposobie przetwarzania i przechowywania danych, ich wykorzystywaniu do rozwijania lub trenowania modeli oraz warunkach korzystania z usługi.

Jeżeli organizacja nie może dopuścić przetwarzania potrzebnych informacji przez dany system, wybiera inny sposób wykonania zadania.

## 7. Ocena autonomii i uprawnień

Ryzyko wzrasta, jeżeli system AI nie tylko przygotowuje wynik do oceny przez człowieka, ale może również samodzielnie wykonywać działania.

Organizacja ustala:

- do jakich systemów i zasobów AI uzyskuje dostęp;
- jakie dane może odczytywać;
- jakie dane lub elementy rozwiązania może tworzyć, zmieniać albo usuwać;
- czy może uruchamiać inne narzędzia i funkcje;
- czy może podejmować kolejne działania bez zatwierdzenia;
- czy skutki wykonanych operacji można sprawdzić i odwrócić.

System otrzymuje wyłącznie uprawnienia potrzebne do wykonania określonego zadania.

Im większa samodzielność systemu i możliwy zakres skutków jego działania, tym większa jest potrzeba ograniczenia uprawnień, zatwierdzania działań przed ich wykonaniem oraz kontroli ich rezultatów.

## 8. Ustalenie sposobu kontroli

Na podstawie rozpoznanego ryzyka organizacja ustala sposób wykorzystania AI i wymagany poziom kontroli.

Kontrola może obejmować odpowiednio:

- sprawdzenie wyniku przez kompetentną osobę;
- sprawdzenie wyniku na materiale źródłowym;
- wykonanie właściwego testu niezależnie od AI;
- zastosowanie testów manualnych;
- zastosowanie technologii wspomagających;
- przegląd wygenerowanej treści lub kodu;
- zatwierdzenie działania przed jego wykonaniem;
- ograniczenie dostępu systemu do danych lub zasobów;
- ograniczenie albo wyłączenie samodzielnego wykonywania operacji;
- wykonanie zmiany najpierw w środowisku testowym;
- sprawdzenie skuteczności działania po wdrożeniu;
- sprawdzenie, czy zmiana nie spowodowała regresji.

Sposób kontroli odpowiada charakterowi ryzyka. Nie zastępuje się właściwego sposobu sprawdzenia dodatkową automatyzacją, jeżeli badana właściwość lub rezultat wymaga oceny człowieka, testu manualnego albo badania z wykorzystaniem technologii wspomagającej.

## 9. Wynik oceny

Wynikiem oceny jest ustalenie:

1. czy planowane wykorzystanie AI jest dopuszczalne;
2. w jakim zakresie AI może zostać wykorzystane;
3. jakie dane i zasoby mogą zostać udostępnione;
4. jaki poziom samodzielności i jakie uprawnienia może otrzymać system;
5. które wyniki wymagają sprawdzenia;
6. w jaki sposób wyniki będą sprawdzane;
7. w jaki sposób zostanie zweryfikowany rezultat działania;
8. jakie informacje o wykorzystaniu AI wymagają udokumentowania.

Ocena może prowadzić do:

- dopuszczenia zastosowania w planowanym zakresie;
- dopuszczenia zastosowania po wprowadzeniu dodatkowych zabezpieczeń lub ograniczeń;
- ograniczenia zastosowania AI do czynności pomocniczych;
- zastosowania innego narzędzia lub sposobu wykonania zadania;
- rezygnacji z wykorzystania AI do danego zadania.

Ocena ryzyka nie służy do uzyskania abstrakcyjnego wyniku liczbowego. Jej celem jest rozpoznanie konkretnych zagrożeń i ustalenie sposobu działania zapewniającego kontrolę nad wykorzystaniem AI i jego rezultatami.

## 10. Dokumentowanie oceny

Zakres dokumentowania oceny dostosowuje się do znaczenia zastosowania i możliwych skutków błędu.

Dla powtarzalnych zastosowań organizacja może udokumentować ocenę dla określonego rodzaju zadań, narzędzia i warunków jego wykorzystania, zamiast sporządzać ją ponownie dla każdego przypadku.

Dokumentacja pozwala ustalić co najmniej:

- czego dotyczyło oceniane zastosowanie;
- jaki wpływ na rezultat może mieć AI;
- jakie najważniejsze ryzyka rozpoznano;
- jakie ograniczenia i zabezpieczenia przyjęto;
- w jaki sposób wyniki AI i rezultaty działań mają być sprawdzane;
- czy i pod jakimi warunkami zastosowanie zostało dopuszczone.

Ocena jest zachowywana w sposób umożliwiający jej wykorzystanie i aktualizację przy kolejnych podobnych zastosowaniach.



<!--
Celowo nie wprowadzałem macierzy „prawdopodobieństwo × skutek” ani punktowej klasyfikacji ryzyka. Dla tego zalecenia byłaby to moim zdaniem nadmierna formalizacja. Kluczowe jest nie nadanie zastosowaniu etykiety „niskie/średnie/wysokie ryzyko”, lecz przejście od konkretnego zastosowania przez jego wpływ, skutki błędu, dane i autonomię do konkretnych warunków dopuszczenia i sposobu kontroli. To odpowiada zasadzie przyjętej w zaleceniu: kontrola ma być odpowiednia do rzeczywistego ryzyka, a nie do formalnie wyliczonego wyniku.
-->
