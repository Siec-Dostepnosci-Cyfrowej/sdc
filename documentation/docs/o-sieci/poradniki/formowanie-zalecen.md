---
id: formowanie-zalecen
title: Formowanie zaleceń
description: Definiuje i opisuje strukturę zalecenia jako jednego z podstawowych dokumentów Sieci 
sidebar_label: Formowanie zaleceń
sidebar_position: 6

opracowanie: Stefan Wajda
data_zgloszenia: 28 lipca 2025 r.
ostatnia_aktualizacja: 24 września 2025 r.
wersja_robocza: true
---


## Zalecenie jako dokument Sieci 

Jednym z trzech głównych zadań Sieci jest „wypracowanie zaleceń i rekomendacji wdrażania dostępności cyfrowej, które określą sposób wdrażania dostępności cyfrowej w podmiotach publicznych”. Według wniosku projektowego ma to być być 

> dokument, który określi, jak wdrażać dostępność cyfrową w podmiotach publicznych oraz wskaże ramy działalności instytucji odpowiedzialnej za nadzór nad dostępnością cyfrową w Polsce. Dokument będzie też uwzględniać podstawy prawne dostępności cyfrowej i, jeśli zostaną zidentyfikowane, potrzeby zmian.

Celem tego opracowania jest określenie spójnych zasad i struktury formowania przez uczestników Sieci projektów zaleceń, które instytucja odpowiedzialna za nadzór nad dostępnością cyfrową w Polsce skieruje do podmiotów publicznych.  

## Robocza definicja zalecenia

W oparciu o efekty dotychczasowej pracy Sieci i przedstawione wcześniej propozycje można przyjąć następującą **roboczą** definicję terminu **zalecenie**:

:::info Definicja terminu

**zalecenie**: wystąpienie o charakterze służbowym adresowane do organizacji, podstawowa forma dokumentu Sieci. 

Zalecenie opisuje zwięźle zamierzony stan lub rezultat dotyczący dojrzałości organizacji do zapewniania dostępności cyfrowej oraz wskazuje, co jest konieczne lub korzystne, aby organizacja skutecznie realizowała cel polityki zapewniania dostępności cyfrowej, którego dotyczy zalecenie. Zalecenie proponuje wdrożenie w organizacji pewnego planu działania – polityki, procedury, reguły (przepisu wewnętrznego) – który prowadzi do osiągnięcia i utrzymania przez organizację zdolności efektywnego wypełniania jej misji i celów strategicznych w zakresie dostępności cyfrowej. 

Zalecenie nie ma mocy wiążącej -- jest wskazówką, sugestią, instrukcją, proponowanym podejściem do zarządzania konkretnym aspektem zapewniania dostępności cyfrowej.

:::

Ta definicja może być  modyfikowana, rozszerzana, zawężona, uściślona. Nie jest to ostateczna wersja definicji.

## Struktura zalecenia

Podstawową strukturę zalecenia tworzą poniższe części:

- metryczka (metadane)
- zalecenie
- rekomendacje
- uzasadnienie
- podstawa prawa
- źródła i opracowania
- historia wersji

### Metryczka (metadane)

**Metryczka** zawiera zestaw podstawowych danych o dokumencie (metadanych), wykorzystywanych do jego identyfikacji i lokalizacji w repozytorium dokumentów Sieci i w przygotowaniu dokumentu do publikacji elektronicznej.

Wsystkie metadane umieszczamy w przeznaczonej do tego celu części dokumentu, która w przypadku formatu *Markdown* nazywa się **Front Matter**. Aby dane były poprawnie interpretowane, ich format jest ściśle ustalony. Każda informacja składa się z pary elementów: nazwy i treści: `nazwa-danej: treść danej`. Nazwę danej od treści danej oddzielamy po dwukropku pojedynczą spacją. Znak dwukropka i znaki cala są znakami kluczowymi. Gdy musimy ich użyć w treści danej, całą treść danych należy ująć w znaki cala, a znaki cala (cudzysłowu) wewnątrz treści poprzedzić tzw. znakiem ucieczki, którym jest w *markdown* znaku lewego ukośnika: `\`, na przykład: `nazwa danej: "treść danej, w której mamy \"cytowny tytuł\"."` 

Poniżej znajduje się zestawienie metadanych ze zwięzłym opisem ich roli:

```md
---
id: identyfikator-dokumentu # dokładnie taki sam, jak nazwa pliku z dokumentem, bez rozszerzenia. Powinien nazywać temat zalecenia
title: Tytuł dokumentu. Staraj się ująć tytuł w kilku słowach. 
description: Zwięzły opis - streszczenie dokumentu dla wyszukiwarek (do 150 znaków)
sidebar_label: Etykieta wyświetlana w bocznym menu - skrócony tytuł (kilka słów)
sidebar_position: 1  # określa pozycję w grupie dokumentów, gdy w kategorii umieszczonych jest więcej niż jeden dokument
keywords: [fraza 1, fraza 2, fraza 3] # słowa kluczowe dla wyszukiwarek, umieszczane w nagłówku dokumentu HTML. Wszystkie ujmujemy w nawiasy kwadratowe i oddzielamy przecinkami.   
tags: [fraza 1, fraza 2, fraza 3] # tagi, służą do dodatkowego kategoryzowania dokumentów. Powtarzamy tutaj słowa kluczowe   
opracowanie: Imię i Nazwisko, Imię i Nazwisko...
wspolpraca: Imię i Nazwisko, Imie i Nazwisko... # Podajemy imiona i nazwiska osób, które szczególnie przyczyniły się do opracowania zalecenia swoimi uwagami, komentarzami, propozycjami poprawek
data_zgloszenia: 28 lipca 2025 r. # zachowaj format, jak w przykładzie
ostatnia_aktualizacja: 24 września 2025 r. # zachowaj format, jak w przykładzie
wersja_robocza: true  # informacja dla systemu, by wyświetlił ostrzeżenie, że dokument jest projektem
---
```

### Oznaczanie części dokumentu

- **Tytuł dokumentu**: będzie generowany automatycznie z tytułu umieszczonego w metadanych. System oznaczy go jako nagłówek 1 stopnia.
- **Główne części**: oznaczamy znakiem nagłówka 2 stopnia, np. `## Zalecenie`, `## Rekomendacje`
- **Części głównych sekcji** oznaczamy znakami nagłówków niższego rzędu (każdy dodatkowy znak krzyżyka oznacza niższy poziom)

## Główne części dokumentu

### Zalecenie
Zalecenia są adresowane do organizacji. Najogólniej, definiują środki, które według formułującego zalecenie, służą osiągnięciu pożądanego stanu rzeczy – projektowanego w związku z nowymi celami lub obowiązkami organizacji albo, w przypadku zaleceń formułowanych np. w wyniku kontroli - służącego naprawie lub poprawie istniejącego stanu rzeczy.

**Treść zalecenia** powinna przedstawiać zwięźle i jednoznacznie, jakie konkretne działanie jest zalecane, może wskazywać zarónmo cel, jak i rezultat zalecanego działania (często cel i rezultat są tożsame). 


**Treść zalecenia** staramy się ująć **w jednym zdaniu oznajmującym**. 

Treść zalecenia może być wyrażona więcej niż jednym zdaniem, gdy konieczne jest sprecyzowanie zakresu organizacji, których zalecenie dotyczy.

Ponieważ zalecenia Sieci nie mają mocy wiążącej:

> nie należy używać sformułowań wyrażających nakazowy lub zakazowy charakter ani struktur czy wyrażeń zbliżonych do tych stosowanych w aktach o charakterze wiążącym
>
> -- Wspólny przewodnik praktyczny Parlamentu Europejskiej, Rady i Komisji przeznaczony dla osób redagujących akty prawne Unii Europejskiej, Unia Europejska 2015, pkt. 2.3.3, s. 12.

Sekcję z treścią zalecenia tytułujemy słowem Zalecenie i oznaczamy, jako nagłówek 2. stopnia (`## Zalecenie`).

#### Przedmiot zaleceń

Przyjęta na początku tego opracowania definicja precyzuje, co może być przedmiotem zalecenia (co może być zalecane).
Może to być opracowanie lub uzupełnienie i wdrożenie:

- **polityki**, czyli trwale obowiązującego (ciągłego) planu dostarczającego generalnych wytycznych dotyczących działania w określonej sferze,
- **procedury**, czyli trwale obowiązującego (ciągłego) planu, który określa, w jaki sposób mają być wykonywane powtarzające się zadania, wyszczególniającego te zadania, konieczne kroki i porządek, którego należy się trzymać,
- **reguły i przepisy**, czyli trwale obowiązujące (ciągłe) plany, które w sposób najbardziej konkretny określają konieczny, wymagany przebieg działania,
- **planu operacyjnego**, czyli jednorazowego planu, który może być powtarzany (po wprowadzeniu zmian dotyczących terminów, odpowiedzialnych osób, zakresu) określającego szczegółowo, jak osiągnąć krótkoterminowe cele organizacji poprzez rozpisanie konkretnych zadań, harmonogramów, przypisanie odpowiedzialności i alokację zasobów (ludzkich, technicznych).


#### Adresaci zaleceń

Zalecenia są formą wystąpienia służbowego. Zalecenia opracowane przez Sieć będą kierowane głównie do podmiotów publicznych, które mają prawny obowiązek zapewniania dostępności swoich rozwiązań cyfrowych. Ale mogą być także kierowane np. do ministra cyfryzacji. Generalnie, zalecenia są adresowane do organizacji i kadry zarządzającej.

#### Stosowanie prostego języka

Podczas spotkań Sieci kilkukrotnie formułowano dość oczywisty postulat stosowania w dokumentach Sieci prostego języka. Oczywisty, bo zalecenia, podobnie jak wszystkie akty prawne w Unii Europejskiej, a więc i w Polsce, muszą być:

- jasne, zrozumiałe i jednoznaczne,
- proste i zwięzłe, bez niepotrzebnych elementów,
- precyzyjne, niepozostawiające u odbiorcy wątpliwości (Wspólny przewodnik praktyczny Parlamentu Europejskiego, Rady i Komisji przeznaczony dla osób redagujących akty prawne Unii Europejskiej, Unia Europejska 2015, pkt 1.1, s. 10;).

Zasady prostego języka są zbieżne, ale nie są tożsame z tymi dyrektywami. Prosty język **stosuje się najszerzej** w tekstach **przeznaczonych dla ogółu społeczeństwa**. Zalecenia są dokumentami kierowanymi głównie do kadry zarządzającej podmiotów publicznych, a nie do ogółu społeczeństwa.

Pogodzenie wymogów prostoty i precyzji może być czasem trudne. Prosty język wśród podstawowych zasad zakłada dostosowanie wypowiedzi do potrzeb i kompetencji językowych odbiorcy:

> Konstruuj więc tekst z myślą o odbiorcy, ze świadomością jego potrzeb i kompetencji językowych. Jeżeli piszesz wytyczne dla inspektorów budowlanych, język techniczny będzie jak najbardziej na miejscu. Prostota Twojego pisma będzie się wyrażać przede wszystkim w sposobie uporządkowania informacji. 
>
> -- Komunikacja pisemna. Rekomendacje. Kancelaria Prezesa Rady Ministrów. Warszawa 2017, s. 10;.

Prostotę osiąga się często kosztem precyzji i odwrotnie. Wszędzie, gdzie to jest możliwe, staramy się stosować zasady prostego języka tak, aby nie utracić precyzji, nie zubażać przekazu, nie zniekształcać znaczenia. Ale tam, gdzie jest to konieczne, korzystamy z odpowiedniej, precyzyjnej terminologii oraz bardziej złożonej składni.

W niektórych sugestiach próbuje się zastąpić jedną z istotnych wskazówek prostego języka, by w miarę możliwości unikać form bezosobowych i starać się kierować tekst do jednej osoby, nawet jeśli dokument odnosi się do dużej grupy osób, **nakazem kierowania tekstu** bezpośrednio do odbiorcy **za pomocą form 2. osoby liczby pojedynczej w trybie rozkazującym** („Zrób…”, „Rozważ”, „Zapewnij”) 

Jest to niewątpliwie bardzo dobra forma komunikowania się z odbiorcami poradników, instrukcji, wskazówek, także forma przyjęta już dość powszechnie w Polsce komunikowaniu się w Internecie oraz w kontaktach z konkretnymi osobami.

Zalecenia i rekomendacje projektowane w Sieci odnoszą się i będą kierowane do organizacji, czasem mogą odnosić się do kierownika czy kierownictwa organizacji, rzadziej do określonych służb w organizacji. Używanie w tym kontekście form 2. osoby liczby pojedynczej i trybu rozkazującego nie jest właściwe i może być odbierane jako niestosowne.

Zgłoszono również **zastrzeżenie do używania czasowników modalnych**, szczególnie czasownika „powinien”, który może powodować, że tekst jest nieprecyzyjny, niejednoznaczny.

Aby uniknąć niejednoznaczności, a także zważywszy na to, że zalecenia nie mają mocy wiążącej, staramy się **unikać zdań o charakterze nakazowym, dyrektywnym**. Twórcy zaleceń mają do dyspozycji wiele czasowników, którymi można wyrazić treść zalecenia czy rekomendacji w przyjazny nienakazowy sposób, takich jak: „zalecamy…”, „radzimy…”, „polecamy…”, „proponujemy…”, „zachęcamy…”, „popieramy…”, „sugerujemy…” i innych.

Podobny efekt można uzyskać także innym zabiegiem stylistycznym, formułując treść zaleceń zdaniami oznajmującymi w czasie teraźniejszym, np. „Organizacje ustanawiają…”, „Organizacje regulują…”, „Organizacje wdrażają…”, „Kierownictwo organizacji wprowadza…”, „Kierownictwo organizacji określa…” i podobne.

Takie konstrukcje pozwalają także unikać stosowania form bezosobowych.

#### Cechy dobrego zalecenia

Zalecenia określają pewne cele do określenia. Podobnie jak jakość i użyteczność celów, tak jakość i użyteczność zaleceń można ocenić, posługując się poniższymi kryteriami opartymi na takich metodach jak SMART czy SMARTER:

- **sprecyzowane** (konkretne, od ang. **S**pecific): każde zalecenie powinno dotyczyć tylko jednego konkretnego zagadnienia; może być uszczegółowione rekomendacjami konkretnych działań, ale powinny one być jasno określone,
- **mierzalne (od ang. M**easurable**): organizacja powinna być w stanie jednoznacznie ocenić, czy zalecenie zostało wdrożone i w jakim stopniu,**
- **wykonalne** (od ang. **A**chievable): stan określony w zaleceniu powinien być osiągalny,
- **zorientowane na wynik** (od ang. **_R_**esult oriented): sugerowane działanie powinno prowadzić do osiągnięcia konkretnego rezultatu lub stanu rzeczy; inne ujęcie: istotne (od ang. Relevant) – zalecenie powinno być ważne i zgodne z naszymi priorytetami
- **ograniczone czasowo** (od ang. **T**ime-based): zalecenie powinno mieć określony czas lub moment, w jakim ma być wykonane,
- **oceniane** (od ang. **E**valuate): postępy w realizacji zalecenia powinny być regularnie ocenianie i dostosowywane do zmieniających się okoliczności,
- **korygowane** (od ang. **R**eviewed): poddawane okresowym przeglądom i, jeśli konieczne, dostosowywane do nowych celów lub priorytetów,
- **dobrze uzasadnione** (od ang. **A**rgued): zalecenia powinny być uzasadnione przyczynami aktualnego stanu zapewniania dostępności i dowodami skuteczności sugerowanych działań.

### Rekomendacje

#### Treść rekomendacji
Słowa „zalecenie” i „rekomendacja” w języku polskim to wyrazy bliskoznaczne. Ale:

- **zalecenie** jest pojęciem bardziej ogólnym, służącym do przekazania informacji o tym, co należy zrobić,
- **rekomendacja** jest pojęciem bardziej szczegółowym, służącym do wskazania najlepszego lub proponowanego sposobu, zwrócenia uwagi na istotne aspekty działania lub walory polecanego sposobu czy polecanego (rekomendowanego) wykonawcy, pracownika, lekarza, itp.

Tę różnicę znaczeniową wykorzystujemy w formowaniu naszych projektów zaleceń i rekomendacji. 

Opierając się na tych konotacjach (skojarzenia, wyobrażenia i uczucia, jakie słowo wywołuje u użytkowników języka) przyjęliśmy, że **rekomendacje** w dokumentach Sieci będą **częścią zaleceń**, która opisuje szczegółowiej, **jak optymalnie zrealizować zalecenie lub jego część**. W Słowniku pojęć zdefiniowaliśmy rekomendację następująco:

:::info Definicja terminu

**rekomendacja**: sugestia, propozycja zastosowania określonego sposobu działania lub uwzględnienia albo rozważenia określonych aspektów działania, opisujące szczegółowiej, w jaki sposób optymalnie można dane zalecenie lub jego część zrealizować. Może wskazywać na polecane sprawdzone rozwiązanie, dobrą praktykę lub kilka dobrych praktyk jako sposoby skutecznego wdrożenia zalecenia.

:::

Zgodnie z tą definicją, rekomendacje mogą wyrażać lub wskazywać:

- elementy lub działania istotne lub wymagane w zalecanym planie operacyjnym,
- sugestie dotyczące sposobów opracowania i wdrażania zalecanego planu,
- czynniki, które należy uwzględnić w trakcie opracowywania i realizacji planu,
- polecane rozwiązania lub dobre praktyki,
- sposoby monitoringu i ewaluacji,
- inne wskazówki, np. dotyczące publikacji planu.

#### Forma rekomendacji

Rekomendacje poprzedzamy nagłówkiem 2 w brzmieniu `## Rekomendacje`.

Wszystkie rekomendacje prezentujemy w formie listy numerowanej – **jednostopniowej** lub **wielostopniowej**. Unikamy stosowania rozbudowanych list wielopoziomowych. Zwykle powinny wystarczyć dwa, maksymalnie trzy poziomy.   

Elementy listy, zależnie od ich charakteru, ujmujemy w formę zdania, równoważnika zdania lub zawiadomienia. Przed wyliczeniem używamy zdania wprowadzającego, aby wyjaśnić listę. W listach wielostopniowych rolę zdania wprowadzającego dla listy podrzędnej spełnia punkt nadrzędny.

### Uzasadnienie

Zalecenia muszą zawierać uzasadnienie. W uzasadnieniu przedstawiamy **kluczowe motywy** przemawiające za wydaniem zalecenia i wdrożeniem go w organizacji. Celem uzasadnienia jest wyjaśnienie, dlaczego zalecenie zostało zdefiniowane oraz przedstawienie znaczenia i korzyści, jakie ma wdrożenie zalecenia dla skutecznego wdrażania dostępności cyfrowej.

Na optymalny schemat motywu składają się:

- przedstawienie warunku lub problemu skutecznego zarządzania zapewnianiem dostępności cyfrowej,
- wniosek, iż z tego względu właściwe lub korzystne jest wdrożenie środków wskazanych w zaleceniu.

Każdy motyw powinien przedstawiać rzeczywisty powód lub istotny argument, który przemawia za wydaniem lub wdrożeniem zalecenia lub zawartych w nim rekomendacji.

- Należy unikać uzasadnień będących w całości lub części odesłaniami do aktów prawnych lub konkretnych przepisów.
- Nie trzeba uzasadniać osobno każdej rekomendacji zawartej w zaleceniu.
- Każdy motyw ujmujemy w odrębnym akapicie.

### Podstawy prawne

W części „Podstawy prawne” wyliczamy akty prawne uwzględnione w opracowaniu zalecenia albo akty prawne, które powinni uwzględnić odbiorcy zalecenia.

Listę poprzedzamy nagłówkiem 2 w brzmieniu `## Podstawy prawne`.

#### Zdanie wprowadzające

Proste przywołanie aktów prawnych, które uwzględniono przy opracowaniu zalecenia, może sugerować, że treść zalecenia jest wiążąca. Aby uniknąć takich interpretacji, listę uwzględnionych aktów prawnych poprzedzamy zdaniem: „W zaleceniu uwzględniono poniżej wymienione przepisy:”

#### Lista aktów prawnych

Używamy listy punktowanej. W każdym punkcie podajemy jeden przepis aktu prawnego, który został uwzględniony podczas opracowywania. Najpierw przywołujemy przepis, następnie nazwę aktu prawnego ewentualnie z dopiskiem „z późn. zmianami”, a na końcu w nawiasie miejsce publikacji np. „Art. 5 ustawy o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych z dnia 4 kwietnia 2019 r. z późn. zmianami (Dz. U. 2019, poz. 848)”.

### Źródła i opracowania

Do każdego zalecenia podajemy zestawienie opracowań przydatnych w realizacji zalecenia, w tym wykorzystanych źródeł.

Wszystkie opracowania prezentujemy w formie numerowanej listy jednostopniowej. Kolejność na liście ustalamy raczej na podstawie wagi publikacji niż porządku alfabetycznego.

Jeśli publikacja została przetłumaczona na język polski, na liście umieszczamy dane tłumaczenia.

Na opis każdego opracowania składa się:

- **nazwa autora**: osoba lub grupa osób, jeśli zostały podane jako autorzy; podajemy skrót imienia i nazwisko;
- **tytuł publikacji**: zapisujemy kursywą; jeśli tytuł zawiera w sobie słowa obce, które normalnie zapisalibyśmy kursywą, zapisujemy je bez kursywy („odwracamy” rodzaj wyróżnienia); w tytułach publikacji w języku angielskim, wszystkie wyrazy poza spójnikami i przyimkami zapisujemy wielką literą;
- **miejsce publikacji**: nazwa strony internetowej albo nazwa czasopisma (zarówno wydawnictw codziennych, jak i periodyków), albo nazwę organizacji, instytucji, partii, stowarzyszenia, itp.; gdy publikacja jest pracą zbiorową, sygnowaną nazwą organizacji i gdy wydawca nie podaje autora, a jedynie nazwy osób, które współtworzyły opracowanie podajemy w tym miejscu nazwę tej organizacji, a pole „autor” pozostawimy puste;
- **data publikacji lub ostatniej aktualizacji**: podajemy przynajmniej rok, jeśli ustalenie daty jest możliwe; całą datę podajemy w formacie DD.MM.RRRR, a jeśli znany jest miesiąc i rok, miesiąc podajemy słownie, np. luty 2025
- **ścieżka dostępu**: podajemy adres URL miejsca, w którym znajduje się publikacja; w przypadku wydawnictw naukowych, które generują numer DOI dla poszczególnych publikacji, zamiast łącza wklejamy numer DOI.
- **data dostępu**: podajemy datę, kiedy korzystaliśmy z dostępu do treści, poprzedzoną słowem „dostęp:”.

W przypadku publikacji internetowych tytuł publikacji zamieniamy na łącze, a ścieżkę dostępu podajemy zwykłym tekstem, na przykład:

```md
- [WAI W3C, Accessibility Fundamentals Overview](https://www.w3.org/WAI/fundamentals/), 
  dostęp: 30 października 2025 
```

### Historia wersji

Historię wersji rozpoczynamy od wstępnie opracowanej wersji przedstawionej do oceny zespołowi Sieci. Tę wersję oznaczamy numerem 0.9. Kolejną jest wersja zgłoszona przez zespół do prezentacji na spotkaniu Sieci. Oznaczamy ją jako RC (kandydat do wydania). Wersję zaakceptowaną przez Sieć oznaczamy numerem 1.0.

Historię wersji umieszczamy w tabeli danych z 4 kolumnami: Nr wersji, Autor, Data Opis zmian. Tabelę poprzedzamy nagłówkiem 2 w brzmieniu „Historia wersji”, np.:

```md
## Historia wersji
| Nr wersji |     Autor       |  Data          |     Opis zmian       |
|-----------|-----------------|----------------|----------------------|
| 0.9       | Imię i Nazwisko | 10 marca 2025  | kandydat do wydania  |
```