---
id: klasyfikacja-zastosowan-ai-i-wymagany-poziom-kontroli
title: Klasyfikacja zastosowań AI i wymagany poziom kontroli
description: Klasyfikacja zastosowań sztucznej inteligencji według ich wpływu na ocenianie i rozwiązywanie problemów dostępności cyfrowej oraz odpowiadających im sposobów kontroli.
sidebar_label: Klasyfikacja zastosowań AI
sidebar_position: 2
keywords: [dostępność cyfrowa, sztuczna inteligencja, AI, klasyfikacja zastosowań, poziom kontroli, nadzór, weryfikacja]
tags: [dostępność cyfrowa, sztuczna inteligencja, klasyfikacja zastosowań, poziom kontroli]
wersja_robocza: true
---

## Cel dokumentu

Dokument wspiera klasyfikowanie zastosowań sztucznej inteligencji w ocenianiu i rozwiązywaniu problemów dostępności cyfrowej oraz dobieranie sposobu kontroli odpowiedniego do ich wpływu na rezultat prac.

Klasyfikacja ułatwia rozpoznanie, kiedy AI wykonuje jedynie czynność pomocniczą, kiedy jego wynik wymaga sprawdzenia przez kompetentną osobę, a kiedy system nie może samodzielnie przesądzać o wyniku lub decyzji.

Klasyfikacja nie zastępuje oceny ryzyka konkretnego zastosowania. Jeżeli rodzaj danych, zakres uprawnień, poziom autonomii, możliwe skutki błędu lub inne okoliczności powodują większe ryzyko, organizacja stosuje odpowiednio większy zakres kontroli niż wynikający z typowej klasyfikacji.

## 1. Podstawa klasyfikacji

Zastosowanie AI klasyfikuje się według wpływu wyniku lub działania systemu na rezultat prac.

Rozróżnia się trzy poziomy:

1. **poziom 1 – zastosowanie pomocnicze** – wynik AI wspiera wykonanie pracy, ale nie stanowi podstawy ustalenia dotyczącego dostępności ani nie powoduje samodzielnie zmiany rozwiązania;
2. **poziom 2 – zastosowanie wpływające na rezultat** – wynik AI jest wykorzystywany przy formułowaniu ustalenia, wyborze sposobu działania, przygotowaniu zmiany albo wykonaniu pracy i może wpłynąć na jej rezultat;
3. **poziom 3 – zastosowanie bezpośrednio wpływające na rezultat lub decyzję** – AI wykonuje działanie albo wytwarza wynik, który bez kontroli kompetentnej osoby mógłby bezpośrednio przesądzić o ustaleniu, decyzji lub zmianie rozwiązania.

Poziom określa się dla **konkretnego zastosowania AI**, a nie dla narzędzia, modelu lub usługi. Ten sam system może być wykorzystywany na różnych poziomach zależnie od powierzonego mu zadania i sposobu wykorzystania wyniku.

Poziomy nie określają jakości ani przydatności narzędzia. Wskazują typowy zakres kontroli potrzebny ze względu na wpływ jego zastosowania na rezultat prac.

## 2. Poziom 1 – zastosowania pomocnicze

### 2.1. Charakter zastosowania

AI wykonuje czynność wspierającą organizację pracy lub przetwarzanie materiału, a jego wynik:

- nie przesądza o występowaniu albo niewystępowaniu problemu dostępności;
- nie stanowi podstawy oceny spełnienia wymagania;
- nie przesądza o wyborze sposobu rozwiązania problemu;
- nie powoduje samodzielnie zmiany rozwiązania;
- może zostać łatwo sprawdzony podczas zwykłego wykonywania pracy.

Do tej grupy mogą należeć w szczególności:

- porządkowanie wcześniej zweryfikowanych ustaleń;
- grupowanie podobnych problemów;
- tworzenie pomocniczych zestawień;
- przekształcanie formatu informacji bez zmiany ich znaczenia;
- wyszukiwanie informacji w dostarczonym zbiorze materiałów;
- przygotowywanie roboczych podsumowań zweryfikowanych informacji;
- pomocnicze redagowanie tekstu, jeżeli nie zmienia merytorycznych ustaleń.

### 2.2. Wymagana kontrola

Organizacja sprawdza rezultat w zakresie odpowiednim do sposobu jego dalszego wykorzystania.

Nie jest wymagane odrębne sprawdzanie każdego elementu wyniku AI na materiale źródłowym, jeżeli rezultat ma charakter wyłącznie pomocniczy, a ewentualny błąd zostanie rozpoznany podczas zwykłego wykonywania lub sprawdzania pracy.

Zastosowanie pozostaje na poziomie 1 tylko wtedy, gdy wynik AI rzeczywiście nie wpływa na merytoryczne ustalenia lub zmianę rozwiązania.

Jeżeli wynik czynności pomocniczej zostanie wykorzystany do sformułowania ustalenia, podjęcia decyzji lub wykonania zmiany, jego wykorzystanie podlega zasadom właściwym dla poziomu 2 albo 3.

## 3. Poziom 2 – zastosowania wpływające na rezultat

### 3.1. Charakter zastosowania

AI dostarcza wyniku, który jest wykorzystywany podczas oceniania dostępności albo rozwiązywania problemu i może wpłynąć na rezultat pracy.

Do tej grupy mogą należeć w szczególności:

- wskazywanie potencjalnych problemów dostępności;
- klasyfikowanie rozpoznanych problemów;
- przypisywanie problemów do wymagań dostępności;
- interpretowanie wyników testów;
- analizowanie kodu, interfejsu, treści lub dokumentu pod kątem dostępności;
- proponowanie wniosków dotyczących dostępności;
- proponowanie sposobów rozwiązania problemu;
- przygotowywanie propozycji zmian kodu, treści lub konfiguracji;
- generowanie kodu albo treści przekazywanych następnie do przeglądu;
- przygotowywanie propozycji testów;
- analizowanie wyników testów;
- przygotowywanie części raportu zawierających merytoryczne ustalenia.

### 3.2. Wymagana kontrola

Wynik AI wykorzystywany w dalszych pracach jest sprawdzany przez osobę posiadającą kompetencje odpowiednie do zadania.

Sprawdzenie:

- odbywa się na podstawie materiału źródłowego;
- uwzględnia mające zastosowanie wymagania;
- wykorzystuje właściwą metodę badania lub oceny;
- nie ogranicza się do oceny wiarygodności samej odpowiedzi AI;
- nie jest zastępowane potwierdzeniem wyniku przez inny system AI.

Osoba sprawdzająca samodzielnie ustala, czy wynik jest prawidłowy i czy może zostać wykorzystany.

Jeżeli AI przygotowuje propozycję zmiany, sprawdzenie propozycji nie zastępuje późniejszej weryfikacji rezultatu po jej wykonaniu.

## 4. Poziom 3 – zastosowania bezpośrednio wpływające na rezultat lub decyzję

### 4.1. Charakter zastosowania

AI wykonuje działania albo wytwarza wyniki, które bez odpowiedniej kontroli mogłyby bezpośrednio zmienić rozwiązanie, przesądzić o wyniku oceny albo prowadzić do podjęcia decyzji.

Do tej grupy mogą należeć w szczególności zastosowania, w których AI:

- samodzielnie modyfikuje kod, treści, konfigurację lub inne elementy rozwiązania;
- wykonuje operacje w repozytorium, systemie zarządzania treścią albo innym środowisku pracy;
- uruchamia narzędzia i wykonuje kolejne działania na podstawie własnych wyników;
- wdraża albo publikuje przygotowane zmiany;
- wybiera problemy uznawane za wymagające albo niewymagające dalszego postępowania;
- wytwarza wynik wykorzystywany bezpośrednio do stwierdzenia zgodności lub niezgodności;
- wytwarza wynik wykorzystywany bezpośrednio do uznania problemu za rozwiązany;
- wytwarza wynik wykorzystywany bezpośrednio do odbioru wykonanej zmiany.

### 4.2. Wymagana kontrola

Organizacja zapewnia kontrolę człowieka nad działaniem systemu i jego rezultatem.

Odpowiednio do zastosowania obejmuje ona:

- ograniczenie danych, zasobów i uprawnień udostępnionych systemowi;
- określenie operacji, które AI może wykonywać samodzielnie;
- zatwierdzanie działań przed ich wykonaniem, jeżeli ich skutki mogą być istotne lub trudne do odwrócenia;
- rejestrowanie istotnych operacji wykonywanych przez system;
- sprawdzenie wykonanych zmian;
- zastosowanie właściwych testów po wykonaniu zmiany;
- sprawdzenie, czy działanie nie spowodowało regresji;
- zatwierdzenie wyniku albo rezultatu przez kompetentną osobę.

AI nie podejmuje samodzielnie ostatecznej decyzji o:

- stwierdzeniu zgodności albo niezgodności rozwiązania;
- zatwierdzeniu wyniku oceny;
- uznaniu problemu za skutecznie rozwiązany;
- odbiorze wykonanej zmiany,

jeżeli decyzja ta wymaga merytorycznej oceny dostępności.

Osoba podejmująca decyzję opiera ją na zweryfikowanych informacjach i wynikach właściwych badań, a nie wyłącznie na rezultacie działania AI.

## 5. Zmiana poziomu kontroli

Typowa klasyfikacja zastosowania wskazuje minimalny punkt odniesienia dla kontroli. Organizacja zwiększa jej zakres, jeżeli wymagają tego okoliczności konkretnego użycia.

Większa kontrola może być potrzebna w szczególności, gdy:

- skutki błędu mogą istotnie ograniczyć użytkownikowi dostęp do informacji, funkcji lub usługi;
- wynik jest trudny do niezależnego sprawdzenia;
- system działa na dużej liczbie elementów lub wprowadza zmiany masowo;
- zmiany są trudne do odwrócenia;
- AI otrzymuje szerokie uprawnienia;
- system może samodzielnie wykonywać kolejne działania;
- przetwarzane są informacje chronione;
- wynik wpływa na ważne ustalenia lub decyzje;
- wcześniejsze wykorzystanie systemu ujawniło problemy z wiarygodnością jego wyników.

Jeżeli okoliczności powodujące zwiększone ryzyko nie mogą zostać odpowiednio ograniczone przez kontrolę, organizacja zmniejsza zakres wykorzystania AI albo rezygnuje z jego zastosowania do danego zadania.

## 6. Klasyfikacja typowych zastosowań

| Zastosowanie AI | Typowy poziom | Minimalny sposób kontroli |
| --- | --- | --- |
| Porządkowanie wcześniej zweryfikowanych ustaleń | 1 | Sprawdzenie użyteczności i kompletności rezultatu |
| Grupowanie podobnych, wcześniej zweryfikowanych problemów | 1 | Kontrola poprawności grupowania w zakresie potrzebnym do dalszej pracy |
| Przygotowanie pomocniczego zestawienia | 1 | Przegląd rezultatu przed wykorzystaniem |
| Redagowanie tekstu bez zmiany merytorycznych ustaleń | 1 | Przegląd tekstu przed wykorzystaniem |
| Wskazywanie potencjalnych problemów dostępności | 2 | Samodzielne sprawdzenie wskazania na materiale źródłowym |
| Przypisywanie problemu do wymagania dostępności | 2 | Sprawdzenie problemu i mającego zastosowanie wymagania |
| Klasyfikowanie problemów | 2 | Merytoryczna weryfikacja klasyfikacji |
| Interpretowanie wyniku testu | 2 | Samodzielna interpretacja wyniku przez kompetentną osobę |
| Analizowanie kodu, interfejsu lub dokumentu pod kątem dostępności | 2 | Weryfikacja ustaleń właściwą metodą badania |
| Proponowanie sposobu rozwiązania problemu | 2 | Ocena propozycji przez osobę kompetentną do zaprojektowania lub wykonania zmiany |
| Generowanie propozycji kodu lub treści | 2 | Przegląd wygenerowanego materiału oraz późniejsza weryfikacja rezultatu po zastosowaniu |
| Przygotowanie propozycji testu | 2 | Sprawdzenie metody i przydatności testu przed wykorzystaniem |
| Analizowanie wyników testów | 2 | Niezależna interpretacja wyników przed sformułowaniem ustalenia |
| Przygotowanie merytorycznej części raportu | 2 | Sprawdzenie wszystkich ustaleń wykorzystanych w raporcie |
| Samodzielne modyfikowanie kodu lub treści | 3 | Ograniczenie uprawnień, kontrola zmian i właściwe testy rezultatu |
| Masowe wykonywanie zmian w rozwiązaniu | 3 | Kontrola zakresu operacji, możliwość wycofania zmian, sprawdzenie próbki lub całości odpowiednio do ryzyka oraz testy rezultatu |
| Wykonywanie operacji przez agenta AI w repozytorium lub systemie | 3 | Ograniczenie uprawnień, kontrola operacji, zatwierdzanie działań odpowiednio do ryzyka i sprawdzenie rezultatów |
| Automatyczne wdrażanie lub publikowanie zmian | 3 | Kontrola przed wdrożeniem lub publikacją oraz weryfikacja po wykonaniu |
| Wskazanie wykorzystywane do stwierdzenia zgodności albo niezgodności | 3 | Samodzielna ocena przez kompetentną osobę na podstawie właściwych dowodów |
| Wskazanie wykorzystywane do uznania problemu za rozwiązany | 3 | Właściwe testy rezultatu i decyzja kompetentnej osoby |
| Wskazanie wykorzystywane przy odbiorze zmiany | 3 | Niezależna od AI weryfikacja rezultatu i decyzja osoby odpowiedzialnej za odbiór |

Przypisanie w tabeli wskazuje typowy poziom zastosowania. Konkretne użycie może wymagać większego zakresu kontroli ze względu na warunki określone w **Ocenie ryzyka wykorzystania AI**.

## 7. Zastosowania obejmujące kilka poziomów

Jedno zadanie może obejmować kilka różnych zastosowań AI.

Przykładowo system może:

1. przeanalizować kod i wskazać potencjalny problem – **poziom 2**;
2. zaproponować poprawkę – **poziom 2**;
3. samodzielnie zmodyfikować kod – **poziom 3**;
4. uruchomić testy i zinterpretować ich wynik – odpowiednio **poziom 2 lub 3**, zależnie od sposobu wykorzystania wyniku.

Nie klasyfikuje się całego procesu wyłącznie według najwyższego występującego poziomu. Dla poszczególnych zastosowań ustala się właściwy sposób kontroli, a ich łączne oddziaływanie uwzględnia się podczas oceny ryzyka.

## 8. Zasady stosowania klasyfikacji

Przy klasyfikowaniu zastosowania AI przyjmuje się następujące zasady:

1. klasyfikuje się sposób wykorzystania AI, a nie produkt lub model;
2. poziom wynika przede wszystkim z wpływu wyniku lub działania AI na rezultat prac;
3. zastosowanie pomocnicze przestaje być zastosowaniem poziomu 1, jeżeli jego wynik zaczyna wpływać na merytoryczne ustalenia;
4. wynik poziomu 2 jest sprawdzany niezależnie od wskazania AI przed wykorzystaniem go w dalszych pracach;
5. zastosowanie poziomu 3 wymaga kontroli zarówno działania systemu, jak i jego rzeczywistego rezultatu;
6. sprawdzenie wyniku AI nie zastępuje weryfikacji rezultatu wykonanej zmiany;
7. większe ryzyko konkretnego zastosowania powoduje zwiększenie zakresu kontroli niezależnie od typowej klasyfikacji;
8. AI nie zastępuje oceny lub decyzji kompetentnej osoby tam, gdzie wymaga jej charakter wykonywanego zadania;
9. zastosowanie innego systemu AI do potwierdzenia wyniku nie zastępuje sprawdzenia na materiale źródłowym właściwą metodą;
10. ostateczny sposób kontroli ustala się z uwzględnieniem **Oceny ryzyka wykorzystania AI**.


<!--
Jedno rozstrzygnięcie uważam tu za szczególnie istotne: poziomy nie są poziomami „ryzyka AI”. Są poziomami wpływu konkretnego zastosowania na rezultat, z którymi wiążemy minimalny sposób kontroli. Dopiero załącznik Ocena ryzyka wykorzystania AI uwzględnia dodatkowo skutki błędu, dane, autonomię, uprawnienia i możliwość weryfikacji. Dzięki temu oba załączniki mają odrębne funkcje i nie dublują się.
-->
