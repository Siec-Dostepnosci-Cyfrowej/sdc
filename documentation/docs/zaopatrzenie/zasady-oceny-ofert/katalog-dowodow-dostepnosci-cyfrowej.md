---
id: katalog-dowodów-dostępności-cyfrowej
title: Katalog dowodów dostępności cyfrowej
sidebar_position: 4
sidebar_label: Katalog dowodów
description: Katalog dokumentów, raportów i innych dowodów potwierdzających spełnienie wymagań dostępności cyfrowej
keywords: [zamówienia publiczne,zaopatrzenie,wymagania w ofertach,dowody zgodności]
tags: [zamówienia publiczne,zaopatrzenie,wymagania w ofertach,dowody zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 24 czerwca 2026 r.
ostatnia_aktualizacja: 8 sierpnia 2026 r.
wersja_robocza: true
---

## Cel dokumentu

Ocena dostępności cyfrowej rozwiązania wymaga nie tylko informacji o stopniu spełnienia wymagań dostępności, lecz również możliwości zweryfikowania, na jakiej podstawie informacje te zostały sformułowane.

Podstawową dokumentację dostępności rozwiązania stanowi **Raport stopnia zgodności rozwiązania z wymaganiami dostępności cyfrowej**. Raport przedstawia wiedzę o stanie dostępności rozwiązania potrzebną do jego odbioru, utrzymania i dalszego rozwoju.

Twierdzenia i oceny przedstawione w raporcie powinny być uzasadnione wynikami działań wykonywanych podczas projektowania, wytwarzania i kontroli jakości rozwiązania. Wykonawca powinien dysponować dokumentacją tych działań i być przygotowany do przedstawienia jej w zakresie potrzebnym do zweryfikowania informacji zawartych w raporcie.

Niniejszy katalog przedstawia typowe rodzaje takich dowodów oraz wskazuje:

- czego mogą dowodzić;
- jakich informacji należy od nich oczekiwać;
- jakie mają ograniczenia;
- w jaki sposób można wykorzystać je podczas oceny oferty, realizacji zamówienia i odbioru rozwiązania.

Dowód powinien umożliwiać ustalenie co najmniej:

1. **co zbadano** – rozwiązanie, jego wersję, element, komponent, funkcjonalność, proces lub inny zakres badania;
2. **jak zbadano** – zastosowaną metodę, narzędzia, środowisko i sposób przeprowadzenia badania;
3. **co zaobserwowano** – wynik badania pozwalający zweryfikować ocenę lub twierdzenie dotyczące dostępności rozwiązania.

Wiarygodność dowodu zależy przede wszystkim od zależy przede wszystkim od zakresu informacji, jakości zastosowanej metody oraz możliwości zweryfikowania lub powtórzenia badania.

---

## 1. Raport stopnia zgodności rozwiązania

### Rola raportu

**Raport stopnia zgodności rozwiązania z wymaganiami dostępności cyfrowej** jest podstawowym dokumentem przekazywanym organizacji.

Raport nie jest raportem z audytu ani zbiorem wyników testów. Stanowi uporządkowany opis stanu dostępności rozwiązania i przedstawia w szczególności:

- mające zastosowanie wymagania dostępności;
- opis stanu rozwiązania istotnego dla danego wymagania;
- ocenę stopnia spełnienia wymagania;
- wpływ stwierdzonych ograniczeń na użytkowników;
- wskazanie materiałów stanowiących podstawę przedstawionej oceny;
- informacje dotyczące znanych ograniczeń i dalszego rozwoju rozwiązania.

Raport może być tworzony i uzupełniany od pierwszych etapów projektowania rozwiązania. Wraz z postępem prac powinien być uzupełniany o kolejne informacje wynikające z projektowania, implementacji, testów i kontroli jakości.

Raport nie zastępuje dowodów. Wykonawca powinien być przygotowany do uzasadnienia informacji przedstawionych w raporcie przez wskazanie i, w razie potrzeby, udostępnienie odpowiedniej dokumentacji badań.

---

## 2. Typowe dowody

### Raport z testów automatycznych

#### Czego może dowodzić

Wyników automatycznej weryfikacji tych właściwości rozwiązania, które mogą być oceniane przy użyciu zastosowanego narzędzia i jego reguł testowych.

#### Minimalny zakres informacji

Raport powinien umożliwiać ustalenie:

- jaka wersja rozwiązania została zbadana;
- jakie strony, ekrany, dokumenty, komponenty lub inne obiekty objęto badaniem;
- jakie narzędzie i jego wersję zastosowano;
- kiedy przeprowadzono badanie;
- jakie reguły lub kryteria objęto badaniem;
- jakie wyniki uzyskano;
- czy wyniki zostały zweryfikowane przez osobę posiadającą odpowiednie kompetencje.

#### Przykładowe narzędzia

- axe;
- WAVE;
- ARC Toolkit;
- Siteimprove;
- IBM Equal Access Accessibility Checker;
- Accessibility Insights;
- Oobee;
- inne narzędzia o porównywalnym przeznaczeniu.

#### Ograniczenia

Testy automatyczne obejmują jedynie część wymagań dostępności i nie pozwalają samodzielnie potwierdzić zgodności rozwiązania z WCAG, EN 301 549 ani innym pełnym zbiorem wymagań.

Wynik wygenerowany przez narzędzie bez analizy człowieka może zawierać fałszywe alarmy albo wymagać dodatkowej interpretacji. Z tego względu znacznie większą wartość mają raporty, których wyniki zostały zweryfikowane i zinterpretowane przez osobę posiadającą odpowiednie kompetencje.

---

### Raport z testów manualnych

#### Czego może dowodzić

Spełnienia lub niespełnienia wymagań, których ocena wymaga wykonania określonych czynności przez testera i nie może zostać wiarygodnie przeprowadzona wyłącznie automatycznie.

#### Minimalny zakres informacji

Raport powinien umożliwiać ustalenie:

- jaka wersja rozwiązania została zbadana;
- jaki zakres rozwiązania objęto badaniem;
- jakie wymagania lub scenariusze podlegały testowaniu;
- w jaki sposób przeprowadzono poszczególne testy;
- w jakim środowisku przeprowadzono badanie;
- jakie obserwacje uzyskano;
- kto i kiedy przeprowadził badanie.

Opis testu powinien być na tyle precyzyjny, aby możliwe było jego powtórzenie.

#### Ograniczenia

Wartość raportu zależy od zakresu badania, jakości zastosowanej metody oraz kompetencji osoby przeprowadzającej testy.

---

### Raport z testów z wykorzystaniem technologii wspomagających

#### Czego może dowodzić

Sposobu współpracy rozwiązania z określonymi technologiami wspomagającymi oraz możliwości wykonania z ich użyciem wskazanych czynności lub procesów.

#### Minimalny zakres informacji

Raport powinien wskazywać:

- badaną wersję rozwiązania;
- zakres i scenariusze badania;
- zastosowaną technologię wspomagającą i jej wersję;
- system operacyjny, przeglądarkę lub inne istotne elementy środowiska;
- sposób wykonania testów;
- uzyskane obserwacje.

#### Przykłady

- testy z czytnikiem ekranu;
- testy z oprogramowaniem powiększającym;
- testy sterowania głosem;
- testy z innymi technologiami wspomagającymi mającymi zastosowanie do rozwiązania.

#### Ograniczenia

Badanie potwierdza zachowanie rozwiązania w określonym środowisku i przy wykorzystaniu wskazanych technologii. Nie należy automatycznie uogólniać jego wyników na wszystkie technologie wspomagające i wszystkie środowiska użytkowania.

---

### Raport z badań z udziałem osób z niepełnosprawnościami

#### Czego może dowodzić

Problemów lub właściwości rozwiązania ujawniających się podczas rzeczywistego wykonywania zadań przez użytkowników z określonymi potrzebami i sposobami korzystania z technologii.

#### Minimalny zakres informacji

Raport powinien umożliwiać ustalenie:

- jaki zakres rozwiązania podlegał badaniu;
- jakie zadania lub procesy wykonywali uczestnicy;
- jaka była charakterystyka uczestników istotna dla celu badania;
- jakie technologie i sposoby obsługi stosowano;
- jakie obserwacje uzyskano;
- jakie problemy lub ograniczenia stwierdzono.

#### Ograniczenia

Badanie z udziałem użytkowników nie zastępuje systematycznej oceny zgodności z wymaganiami technicznymi. Jego wyniki dotyczą badanych użytkowników, scenariuszy i środowisk.

---

### Raport z testów komponentu wielokrotnego użytku

#### Czego może dowodzić

Spełnienia określonych wymagań dostępności przez komponent wykorzystywany wielokrotnie w rozwiązaniu.

Może dotyczyć na przykład:

- menu;
- okna modalnego;
- selektora daty;
- karuzeli;
- akordeonu;
- elementu formularza;
- komponentu tabeli;
- innego powtarzalnego elementu interfejsu.

#### Minimalny zakres informacji

Raport powinien umożliwiać ustalenie:

- jednoznacznej nazwy i wersji komponentu;
- wariantów komponentu objętych badaniem;
- wymagań podlegających weryfikacji;
- zastosowanych metod i środowiska badania;
- wyników testów klawiatury;
- wyników testów z technologiami wspomagającymi, jeżeli mają zastosowanie;
- wyników inspekcji kodu, jeżeli ma zastosowanie;
- uzyskanych obserwacji;
- ograniczeń zakresu badania.

#### Ograniczenia

Wyniki badania mogą być odnoszone do kolejnych zastosowań komponentu tylko wtedy, gdy wykorzystano przebadaną wersję komponentu i nie zmieniono jej ani sposobu zastosowania w sposób mogący wpływać na dostępność.

---

### Raport z inspekcji kodu

#### Czego może dowodzić

Poprawności implementacji właściwości dostępności, których ocena wymaga analizy kodu lub struktury technicznej rozwiązania.

#### Minimalny zakres informacji

Raport powinien wskazywać:

- badaną wersję rozwiązania lub komponentu;
- zakres analizowanego kodu;
- wymagania stanowiące podstawę inspekcji;
- zastosowaną metodę;
- stwierdzone właściwości lub problemy;
- obserwacje będące podstawą wniosków.

#### Ograniczenia

Poprawność kodu nie oznacza automatycznie poprawności działania rozwiązania dla użytkownika. Inspekcja kodu powinna być w odpowiednich przypadkach uzupełniana testami działania rozwiązania.

---

### Raport z przeglądu projektu

#### Czego może dowodzić

Że projekt rozwiązania lub jego elementu został zweryfikowany pod kątem wymagań dostępności oraz – jeżeli ma to zastosowanie – zgodności z przyjętym wzorcem projektowym.

#### Minimalny zakres informacji

Raport powinien wskazywać:

- element lub funkcjonalność podlegającą przeglądowi;
- wersję projektu;
- wymagania lub wzorzec projektowy stanowiący podstawę oceny;
- zakres przeprowadzonego przeglądu;
- stwierdzone obserwacje;
- wymagane korekty, jeżeli zostały zidentyfikowane.

#### Ograniczenia

Przegląd projektu potwierdza zgodność projektu z ocenianymi wymaganiami dostępności, a nie poprawność późniejszej implementacji. Spełnienie wymagań przez gotowe rozwiązanie powinno zostać potwierdzone odpowiednimi testami.

---

### Raport z ponownego badania po usunięciu niezgodności

#### Czego może dowodzić

Że wcześniej stwierdzona niezgodność została usunięta oraz że poprawka przyniosła oczekiwany rezultat.

#### Minimalny zakres informacji

Raport powinien wskazywać:

- jednoznaczne odniesienie do wcześniej stwierdzonej niezgodności;
- wersję rozwiązania po wprowadzeniu poprawki;
- zastosowaną metodę ponownego badania;
- zakres badania;
- uzyskane obserwacje;
- informację o ewentualnych skutkach ubocznych poprawki, jeżeli były badane.

---

## 3. Dokumenty przedstawiające ocenę, ale niestanowiące samodzielnego dowodu badania

### VPAT® i Accessibility Conformance Report (ACR)

VPAT® jest ustandaryzowanym formularzem służącym do przedstawiania informacji o stopniu zgodności produktu z wymaganiami dostępności. ACR jest raportem sporządzonym z wykorzystaniem tego formularza.

Dokumenty te mogą dostarczać wartościowej wiedzy o deklarowanym stopniu zgodności produktu, zwłaszcza jeżeli zawierają szczegółowe opisy sposobu realizacji wymagań i znanych ograniczeń.

Zakres informacji zawartych w VPAT lub ACR zależy od sposobu ich opracowania. Dokumenty te nie muszą zawierać informacji pozwalających odtworzyć przebieg przeprowadzonych badań ani zweryfikować podstaw każdej przedstawionej oceny.

Z tego względu VPAT® lub ACR należy traktować przede wszystkim jako dokument przedstawiający ocenę producenta lub dostawcy.

Wiarygodność informacji zawartych w takim dokumencie zależy między innymi od:

- rzetelności i odpowiedzialności podmiotu, który go sporządził;
- szczegółowości przedstawionych informacji;
- aktualności dokumentu;
- jednoznacznego powiązania z określoną wersją produktu;
- możliwości przedstawienia materiałów stanowiących podstawę zawartych w nim ocen.

VPAT® lub ACR może być bardzo wartościowym źródłem informacji podczas oceny gotowego produktu, nie powinien jednak zastępować materiałów pozwalających zweryfikować konkretne twierdzenia, jeżeli taka weryfikacja jest potrzebna.

---

### Oświadczenie wykonawcy

Oświadczenie wykonawcy może potwierdzać zobowiązanie, deklarację albo przyjęcie odpowiedzialności za określone właściwości rozwiązania.

Oświadczenie nie dokumentuje jednak badania i samo w sobie nie stanowi podstawy do zweryfikowania, czy deklarowane wymaganie zostało rzeczywiście spełnione.

Jeżeli oświadczenie dotyczy stanu dostępności rozwiązania, wykonawca powinien być przygotowany do przedstawienia dowodów uzasadniających zawartw w oświadczeniu twierdzenia.

---

## 4. Raport audytu zgodności

Raport audytu zgodności może wyjątkowo stanowić materiał dowodowy. Zasady stosowania audytu określa zalecenie **Odbiór rozwiązań cyfrowych pod kątem dostępności cyfrowej**.

### Minimalny zakres informacji

Aby raport mógł stanowić wiarygodny materiał dowodowy, powinien umożliwiać ustalenie:

- przedmiotu i zakresu badania;
- wersji rozwiązania;
- wymagań objętych oceną;
- metod zastosowanych podczas badania;
- środowiska badawczego i użytych narzędzi;
- **reprezentatywnej próby stron, ekranów, procesów użytkownika lub innych elementów rozwiązania objętych badaniem oraz zasad jej doboru;**
- uzyskanych obserwacji;
- sposobu powiązania obserwacji z przedstawionymi ocenami.

### Ograniczenia

Raport z audytu przedstawia wyniki badania przeprowadzonego dla określonej próby rozwiązania i nie zastępuje dokumentacji dostępności rozwiązania ani dokumentacji działań prowadzonych podczas projektowania, wytwarzania i kontroli jakości.

## 5. Wykorzystanie dowodów w procesie realizacji i odbioru

Nie należy oczekiwać, że wykonawca będzie przekazywał zamawiającemu całość dokumentacji badań powstającej podczas realizacji zamówienia.

Wykonawca powinien jednak prowadzić projektowanie, wytwarzanie i kontrolę jakości w sposób umożliwiający:

- rzetelne określenie stanu dostępności rozwiązania;
- aktualizowanie raportu stopnia zgodności;
- wskazanie podstaw przedstawionych w nim ocen;
- przedstawienie odpowiednich dowodów, gdy zamawiający chce zweryfikować określone twierdzenie.

Dokumentowanie działań weryfikacyjnych jest elementem procesu zapewniania dostępności rozwiązania, a nie czynnością wykonywaną wyłącznie na potrzeby odbioru.

Weryfikacja może mieć charakter wyrywkowy. Zamawiający może na przykład:

- poprosić o dokumentację testów dotyczącą losowo wybranego wymagania;
- powtórzyć wskazany test;
- poprosić o demonstrację sposobu spełnienia wymagania;
- porównać informację zawartą w raporcie z dokumentacją badania;
- zweryfikować dokumentację testów komponentu wielokrotnego użytku.

Brak możliwości przedstawienia materiału uzasadniającego istotne twierdzenie zawarte w raporcie powinien być traktowany jako okoliczność podważająca wiarygodność tego twierdzenia.

---

## 6. Dobór dowodów

Nie istnieje jeden zestaw dowodów odpowiedni dla wszystkich rozwiązań i wszystkich wymagań.

Rodzaj dowodu powinien wynikać przede wszystkim z:

- charakteru ocenianego wymagania;
- rodzaju rozwiązania;
- właściwości ocenianego elementu lub procesu;
- etapu cyklu życia rozwiązania;
- metody umożliwiającej wiarygodną ocenę danego wymagania.

W wielu przypadkach jedna ocena może wymagać wykorzystania kilku metod. Na przykład dostępność komponentu interaktywnego może wymagać łącznie:

- inspekcji kodu;
- testu klawiatury;
- testu z czytnikiem ekranu;
- sprawdzenia zachowania komponentu w różnych stanach.

Nie należy natomiast zwiększać liczby materiałów dla samego zwiększenia „siły dowodowej”. Znaczenie ma to, czy zastosowane badania rzeczywiście pozwalają zweryfikować spełnienie danego wymagania.

---

## 7. Najważniejsza zasada

Dowód powinien umożliwiać zweryfikowanie umożliwiać zweryfikowanie, że rozwiązanie jest takie, jak przedstawiono je w dokumentacji dostępności.

Powinien zatem dokumentować rzeczywiście przeprowadzone badanie w sposób pozwalający ustalić: **co zbadano, jak zbadano i co zaobserwowano.**

Jeżeli tych informacji brakuje, materiał może stanowić deklarację, informację pomocniczą lub opis rozwiązania, ale nie pozwala samodzielnie zweryfikować twierdzenia dotyczącego jego dostępności.




