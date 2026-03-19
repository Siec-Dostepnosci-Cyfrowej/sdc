---
id: rozdzial-2
title: "Poradnik: Cykl życia technologii informacyjno-komunikacyjnej"
description: W fazie projektowania projektujemy interfejsy, architekturę informacji i procesy, dbając o ich dostępność cyfrową już na poziomie makiet czy prototypów.
sidebar_label: Cykl życia TIK. R. 2
sidebar_position: 2 
keywords: [
WCAG 2.1 AA, 
dostepnosc cyfrowa, 
cykl życia TIK
]
tags: [
WCAG 2.1 AA, 
dostepnosc cyfrowa, 
cykl życia TIK
]
data_zgloszenia: 8 lipca 2025 r.
ostatnia_aktualizacja: 30 października 2025 r.
opracowanie: Angelika Sosnowska
wersja_robocza: true
---

## Rozdział 2. Projektowanie rozwiązań cyfrowych z uwzględnieniem dostępności

Projektowanie jest jedną z kluczowych faz w cyklu życia rozwiązań
cyfrowych, ponieważ to właśnie tutaj zapadają decyzje, które będą miały
bezpośredni wpływ na użyteczność i dostępność końcowego produktu. Jest
to moment, w którym koncepcje przekształcają się w realne struktury
wizualne i funkcjonalne: interfejsy użytkownika, układ treści, ścieżki
nawigacyjne czy hierarchię informacji. Jeśli na tym etapie uwzględni się
potrzeby wszystkich użytkowników, w tym osób z różnymi ograniczeniami
funkcjonalnymi, można nie tylko spełnić wymagania dostępności, ale też
stworzyć rozwiązania bardziej przyjazne dla każdego.

### 2.1 Projektowanie inkluzywne i uniwersalne

Projektowanie inkluzywne to podejście, które zakłada tworzenie rozwiązań
użytecznych dla jak najszerszej grupy użytkowników - bez konieczności
adaptowania czy specjalnego dostosowywania ich później. W praktyce
oznacza to, że już na poziomie projektowania uwzględniamy różnorodność
potrzeb i ograniczeń: osób z niepełnosprawnościami, osób starszych,
użytkowników korzystających z różnych urządzeń i technologii
wspomagających, a także osób o niższych kompetencjach cyfrowych.

Inkluzywność nie polega na tworzeniu alternatywnych wersji, lecz na
zapewnieniu równego i komfortowego dostępu wszystkim. Projektowanie
uniwersalne to jego techniczne i metodologiczne rozwinięcie - opiera
się na siedmiu zasadach, w tym m.in. elastyczności użytkowania,
prostocie i intuicyjności interfejsu oraz łatwości percepcji.

Zamiast projektować osobne wersje produktów dla „osób z
niepełnosprawnościami”, należy tworzyć jeden produkt dostępny dla
wszystkich - to podstawowa zasada dostępności uniwersalnej.

- Makiety i prototypy powinny odzwierciedlać zasady dostępności, np.:
  - odpowiednie kontrasty kolorystyczne,
  - wielkość i odstępy między elementami interaktywnymi,
  - zrozumiałe etykiety przycisków i formularzy.
- Nawigacja musi być logiczna i dostępna za pomocą klawiatury.
- Struktura powinna zawierać nagłówki H1-H6 (w odpowiedniej hierarchii
  i bez pomijania) i logiczne grupowanie treści.

### 2.2 Organizacja procesu projektowego

- **W projekcie powinna uczestniczyć osoba odpowiedzialna za dostępność (lub zespół ds. dostępności).**\
  To kluczowy element organizacyjny, który zapewnia, że potrzeby dostępności będą monitorowane i
  egzekwowane na każdym etapie projektowania. Osoba ta może pełnić
  funkcję łącznika między zespołem technicznym, projektowym i
  decyzyjnym. Odpowiedzialność za dostępność może być przypisana do
  osoby, która pełni inną istotną rolę w projekcie. Najważniejsze, aby
  była to osoba kompetentna.
  
- **Projektant powinien znać standard WCAG i PN ETSI EN 301 549.**\
  Wiedza o tych standardach umożliwia podejmowanie trafnych decyzji projektowych,
  które już na wczesnym etapie wykluczają pojawianie się barier.
  Projektant powinien rozumieć zarówno techniczne, jak i funkcjonalne
  konsekwencje niespełniania tych wymagań.
- **Twórz dokumentację projektową uwzględniając wymagania dostępności.**\
  Dokumentacja powinna zawierać wytyczne dotyczące struktury treści,
  sposobu implementacji dostępnych interfejsów oraz odniesienia do
  konkretnych kryteriów sukcesu WCAG. To zwiększa przewidywalność i
  ułatwia egzekwowanie jakości dostępności na kolejnych etapach
  projektu.
- **Konsultuj makiety/prototypy z osobami z niepełnosprawnościami lub z zespołem eksperckim.**\
  Takie konsultacje pozwalają zweryfikować
  założenia projektowe w praktyce oraz wychwycić potencjalne bariery
  niedostrzegalne na etapie makiet czy symulacji. Wczesna konsultacja
  znacząco ogranicza konieczność późniejszych poprawek.
- **Uwzględniaj testowalność projektu na późniejszych etapach.**\
  Już na etapie projektowania należy planować, jak dany produkt będzie
  testowany pod kątem dostępności: jakie będą scenariusze testowe, czy
  możliwe będzie zautomatyzowane sprawdzanie zgodności, oraz jak będą
  wyglądały testy z udziałem użytkowników końcowych.

### 2.3 Narzędzia i technologie wspierające projektowanie dostępne

- **Edytory makiet (np. Figma, Adobe XD) z rozszerzeniami do analizy kontrastu.**\
  Te narzędzia pozwalają projektantom tworzyć interaktywne
  prototypy i wizualizacje interfejsów. Rozszerzenia takie jak „Able"
  czy „Contrast Checker" umożliwiają automatyczne wykrywanie błędów
  kontrastu oraz ocenę czytelności tekstów, co pozwala na szybkie
  korygowanie niezgodności z zasadami WCAG już na etapie projektowania.
  
- **Kreatory stylów i szablonów zgodnych z WCAG.**\
  Narzędzia tego typu pomagają w tworzeniu systemów projektowych (<em lang="en">design systems</em>), które
  zawierają zdefiniowane style kolorystyczne, rozmiary czcionek, odstępy
  i komponenty. Dzięki nim można budować spójne i dostępne interfejsy,
  bez konieczności każdorazowego sprawdzania zgodności.
- **Biblioteki komponentów UI zgodnych z zasadami dostępności.**\
  Biblioteki komponentów UI (<em lang="en">User Interface</em>) to zestawy gotowych
  elementów interfejsu użytkownika - takich jak przyciski, pola
  formularzy, okna dialogowe czy menu - które można wykorzystywać
  wielokrotnie w różnych projektach. Ich celem jest ułatwienie i
  przyspieszenie tworzenia spójnych, funkcjonalnych i estetycznych
  interfejsów. W kontekście dostępności szczególnie istotne są
  biblioteki, które zaprojektowano zgodnie z zasadami WCAG, czyli tak,
  aby każdy komponent był dostępny dla wszystkich użytkowników - także
  tych korzystających z czytników ekranu lub nawigujących za pomocą
  klawiatury. Gotowe biblioteki komponentów interfejsu użytkownika (np.
  przyciski, formularze, menu) mogą znacznie ułatwić projektowanie
  dostępnych stron i aplikacji. Przykładem są biblioteki, które
  korzystają z tzw. znaczników ARIA (<em lang="en">Accessible Rich Internet
  Applications</em>) - specjalnych atrybutów dodawanych do kodu, które
  pomagają technologiom wspomagającym, takim jak czytniki ekranu, lepiej
  zrozumieć strukturę i funkcję elementów na stronie. Użycie komponentów
  z bibliotek takich jak <em lang="en">ARIA Patterns</em>, <em lang="en">React Aria</em> czy <em lang="en">Material Design
  for Accessibility</em> pozwala szybciej wdrożyć interfejsy zgodne z WCAG,
  oszczędzając przy tym czas i minimalizując ryzyko błędów.
- **Walidatory WCAG dla prototypów interaktywnych.**\
  Walidacja to proces  sprawdzania, czy projekt lub produkt spełnia określone standardy - w
  tym przypadku wytyczne dostępności cyfrowej WCAG. Narzędzia takie jak
  axe DevTools, WAVE czy Lighthouse umożliwiają automatyczną ocenę
  dostępności projektów i prototypów - wykrywają błędy takie jak zbyt
  niski kontrast, brak alternatywnych opisów obrazów, nieczytelna
  struktura nagłówków czy problemy z nawigacją klawiaturą. Dla osób
  niebędących specjalistami to bardzo ważne narzędzia - umożliwiają
  szybkie zweryfikowanie jakości wykonania przez wykonawcę i stanowią
  podstawę do wymagań wobec firm tworzących strony czy aplikacje. Użycie
  walidatorów już na etapie projektowania pozwala wcześnie
  zidentyfikować problemy i zapobiec kosztownym poprawkom po wdrożeniu.
  Ich użycie na etapie projektowania pozwala wykryć i usunąć błędy zanim
  przejdzie się do fazy implementacji. (np. Figma, Adobe XD) z
  rozszerzeniami do analizy kontrastu.

### 2.4 Na co zwrócić uwagę w zależności od produktu

#### Dokumenty 

- **Tworzyć czytelną strukturę dokumentu.**\
  Dokumenty cyfrowe powinny mieć przejrzystą strukturę, która umożliwia łatwe przeglądanie treści
  - zarówno wizualnie, jak i przy pomocy czytników ekranu. Oznacza to
  stosowanie właściwej hierarchii nagłówków (H1, H2, H3 itd.), logiczne
  rozdzielenie sekcji, wyróżnianie tytułów i utrzymywanie jednolitego
  stylu formatowania.
  
- **Konsekwentne formatowanie treści.**\
  Używaj jednolitych stylów nagłówków, akapitów i czcionek w całym dokumencie. Ułatwia to odbiór
  treści i zapewnia przewidywalność struktury dokumentu dla użytkowników
  z różnymi potrzebami poznawczymi.
- **Stosowanie czytelnego formatowania tekstu.**\
  Czcionki powinny być proste, bezszeryfowe (np. Arial, Calibri), o odpowiednim rozmiarze -
  minimum 12 pkt. Należy unikać całych akapitów pisanych wersalikami
  (dużymi literami), pochyleniem lub podkreśleniem, które mogą utrudniać
  czytanie. Tekst powinien być wyrównany do lewej - justowanie
  (wyrównanie do obu krawędzi) może tworzyć nierówne odstępy między
  wyrazami i pogarszać czytelność, zwłaszcza dla osób z dysleksją.
- **Listy elementów.**\
  Zamiast ciągłego tekstu warto stosować wypunktowania i numeracje tam, gdzie wymieniamy cechy, kroki lub
  elementy. Ułatwia to zrozumienie struktury treści i poprawia
  dostępność - zarówno wizualną, jak i dla osób korzystających z
  technologii wspomagających.
- **Zrozumiałe linki.**\
  Teksty odnośników powinny być jednoznaczne i informować użytkownika, dokąd prowadzi dany link (np. „pobierz raport
  PDF" zamiast „kliknij tutaj"). Czytniki ekranu często odczytują listę
  linków osobno, dlatego każdy z nich powinien mieć sens również poza
  kontekstem.
- **Uwzględnienie tekstów alternatywnych dla grafik i wykresów.**\
  Obrazy, wykresy i inne elementy wizualne powinny być opatrzone tekstem
  alternatywnym (tzw. ALT), który opisuje ich zawartość lub funkcję.
  Tekst alternatywny to krótki opis, który odczytywany jest przez
  technologie wspomagające (np. czytniki ekranu), dzięki czemu osoby
  niewidome mogą zrozumieć, co znajduje się na ilustracji. Dobrze
  sformułowany ALT powinien być konkretny, rzeczowy i oddawać sens
  obrazu - np. „Wykres słupkowy przedstawiający wzrost liczby
  użytkowników w latach 2020-2024". Jeśli obraz pełni funkcję
  dekoracyjną, można oznaczyć go jako pomijany przez czytniki.
- **Formularze i interaktywne formy.**\
  Jeśli dokument zawiera formularze (np. deklaracje, wnioski), każdy jego element powinien być odpowiednio
  opisany - pola tekstowe muszą mieć etykiety, które będą odczytywane
  przez czytniki ekranu, a komunikaty o błędach powinny być zrozumiałe i
  jednoznaczne. Należy również zadbać o możliwość wypełniania formularzy
  z użyciem klawiatury oraz o logiczną kolejność przechodzenia między
  polami. W przypadku formularzy w formacie PDF ważne jest, aby były to
  rzeczywiste, edytowalne pola formularzy, a nie tylko pola zaznaczone
  graficznie.
- **Dbanie o prosty i zrozumiały język.**\
  Dokumenty kierowane do szerokiej grupy odbiorców powinny unikać zbyt specjalistycznego
  słownictwa, skrótów bez objaśnień oraz złożonych struktur
  gramatycznych. Pomaga to w odbiorze treści osobom z trudnościami
  poznawczymi oraz o niższych kompetencjach językowych. Warto wspierać
  ten proces korzystając z narzędzi, które automatycznie sprawdzają
  poziom trudności języka - takich jak Jasnopis, Logios czy Hemmingway
  App - umożliwiających ocenę, czy tekst jest zrozumiały dla szerokiego
  grona odbiorców.
- **Unikanie tabel do celów układu graficznego.**\
  Tabele powinny być wykorzystywane wyłącznie do prezentowania danych. Nie należy ich
  stosować do tworzenia układu wizualnego, ponieważ utrudnia to
  nawigację i zrozumienie dokumentu przez osoby korzystające z czytników
  ekranu.
- **Unikanie skanów dokumentów jako jedynej formy udostępniania treści.**\
  Pliki PDF będące skanami są w większości przypadków
  całkowicie niedostępne dla czytników ekranu, chyba że zostaną
  rozpoznane i przekształcone na dokumenty tekstowe z poprawną
  strukturą.
- **Zaplanowanie możliwości konwersji treści do dostępnych formatów.**\
  Treść dokumentu powinna być możliwa do przekształcenia w alternatywne
  wersje - np. wersję audio, powiększoną, brajlowską lub uproszczoną.
  Warto zadbać o dostępność pliku źródłowego, z którego można
  wygenerować różne wersje bez utraty informacji. Najlepiej pracować w
  edytowalnym formacie źródłowym (np. DOCX, ODT), a dopiero na końcu
  tworzyć z niego wersję PDF - z zachowaniem struktury nagłówków i
  oznaczeń dostępności.
- **Zastosowanie poprawnych metadanych.**\
  Dokumenty cyfrowe, szczególnie w formacie PDF, powinny zawierać metadane, takie jak tytuł, autor,
  język dokumentu i słowa kluczowe. Poprawne oznaczenie języka (np.
  „pl-PL") jest niezbędne dla czytników ekranu, aby mogły prawidłowo
  interpretować wymowę tekstu.

#### Strony internetowe 

- **Zgodność struktury z semantyką HTML.**\
  Elementy strony powinny być
  oznaczone zgodnie z ich funkcją - nagłówki jako `<h1>` - `<h6>`, listy
  jako `<ul>`/`<ol>`, przyciski jako `<button>`, a formularze z
  etykietami `<label>`. Dzięki temu użytkownicy technologii
  asystujących mogą lepiej zrozumieć strukturę strony i szybciej
  zidentyfikować poszczególne sekcje. Narzędzia wspomagające:
  validator.w3.org, HTML CodeSniffer.
  
- **Opisowe i unikalne tytuły stron.**\
  Każda podstrona powinna mieć unikalny tytuł (`<title>`), który jasno określa jej zawartość. To
  kluczowy element orientacji - pozwala użytkownikom szybko zorientować
  się, gdzie się znajdują, oraz ułatwia nawigację w historii
  przeglądania czy wynikach wyszukiwania. Można je sprawdzić ręcznie w
  kodzie strony lub przy użyciu narzędzi do testowania SEO/dostępności
  (np. WAVE, axe).
- **Alternatywne opisy obrazów (atrybut** `alt`**).**\
  Każdy istotny obraz powinien mieć przypisany tekst alternatywny (`alt`), który
  opisuje jego funkcję lub treść. Dzięki temu osoby korzystające z
  czytników ekranu mogą zrozumieć znaczenie grafiki. Obrazy pełniące
  funkcję dekoracyjną należy oznaczyć pustym atrybutem `alt=""`, aby nie
  przeszkadzały w nawigacji. Testowanie: WAVE, axe DevTools, Siteimprove
  Accessibility Checker.
- **Spójne i przewidywalne menu nawigacyjne.**\
  Elementy menu powinny być logicznie uporządkowane i identycznie rozmieszczone na wszystkich
  podstronach. Konsystencja w nawigacji poprawia orientację i
  minimalizuje ryzyko zagubienia się użytkownika. Menu powinno być
  również dostępne z poziomu klawiatury.
- **Zgodność z zasadą „widoczny fokus”.**\
  Każdy element, który może uzyskać fokus (np. „widoczny fokus” oznacza, że podczas poruszania się
  po stronie za pomocą klawiatury (np. klawiszem Tab), aktualnie
  zaznaczony element (np. link, przycisk) jest wyraźnie widoczny poprzez
  wyróżnik graficzny - taki jak obramowanie, zmiana koloru lub tła.
  Dzięki temu użytkownik wie, który element będzie aktywowany, jeśli
  naciśnie Enter. Jest to szczególnie ważne dla osób niewidzących lub
  mających trudności z używaniem myszy, ponieważ umożliwia świadomą
  nawigację po stronie linki, przyciski), musi mieć wyraźny wskaźnik
  (np. obramowanie, podkreślenie), który informuje użytkownika o
  aktualnym położeniu kursora klawiatury. Jest to niezbędne dla osób
  korzystających wyłącznie z klawiatury. Można to sprawdzić wizualnie
  lub za pomocą narzędzi jak tota11y lub axe.
- **Przystosowanie formularzy.**\
  Formularze powinny zawierać czytelne etykiety, odpowiednie komunikaty o błędach i możliwość przesyłania
  danych bez użycia myszy. Należy unikać tzw. *placeholderów* (czyli
  tymczasowych podpowiedzi wyświetlanych wewnątrz pola formularza) jako
  jedynego sposobu oznaczenia pól - są one trudne do odczytania i mogą
  znikać po wypełnieniu pola. Wszystkie elementy formularza muszą mieć
  unikalne identyfikatory i powiązane etykiety (`<label for="id">`).
- **Unikanie migających elementów i błysków.**\
  Treści migające z częstotliwością 3-50 Hz mogą wywołać ataki epileptyczne. 
  Zgodnie z WCAG należy ich unikać lub zapewnić alternatywną formę prezentacji
  informacji. Zamiast błysków można używać łagodnych przejść lub ikon z
  komunikatem.
- **Projektowanie nawigacji klawiaturą.**\
  Strona musi być w pełni dostępna przy użyciu klawiatury. Użytkownik powinien móc przechodzić
  przez wszystkie elementy interfejsu za pomocą klawisza <kbd>Tab</kbd>, a
  aktywować je klawiszem <kbd>Enter</kbd> lub <kbd>Spacja</kbd>. Porządek przechodzenia
  (ang. tab order) powinien być logiczny i zgodny z naturalną strukturą
  strony.
- **Unikanie treści dynamicznych niezgodnych z WCAG.**\
  Elementy takie jak karuzele, automatyczne pokazy slajdów, banery, wyskakujące okna
  (pop-upy) czy dynamicznie ładowane treści muszą być dostępne - np.
  dawać możliwość zatrzymania/slajdowania i posiadać opisy dla czytników
  ekranu. Zmiany treści bez działania użytkownika powinny być
  sygnalizowane (np. przy użyciu <em lang="en">ARIA live regions</em>).
- **Zgodność z zasadą responsywności.**\
  Strona powinna dostosowywać się do różnych rozdzielczości ekranów - nie tylko na komputerach, ale
  także na urządzeniach mobilnych. Powiększenie interfejsu nie może
  prowadzić do utraty treści, konieczności przewijania w poziomie ani do
  nałożenia się elementów.
- **Zastosowanie kontrastów i dostępnych kolorów.**\
  Kontrast między tekstem a tłem powinien wynosić co najmniej 4.5:1 dla tekstu zwykłego
  i 3:1 dla dużego tekstu. Nie należy opierać przekazu wyłącznie na
  kolorze - np. informacje błędu nie mogą być oznaczone jedynie
  czerwonym kolorem bez tekstu lub ikonki. Do sprawdzania kontrastu
  można użyć narzędzi takich jak Contrast Checker (WebAIM), axe, Stark
  (dla Figma/Sketch/Adobe XD).

#### Aplikacje mobilne 

- **Zgodność z systemowymi wytycznymi dostępności.**\
  Aplikacje mobilne powinny przestrzegać zaleceń producentów systemów operacyjnych, takich
  jak <em lang="en">Android Accessibility Guidelines</em> i  <em lang="en">Apple Human Interface
  Guidelines</em>. Wytyczne te określają m.in. jak zapewnić poprawne
  działanie z czytnikami ekranu, obsługę gestów, etykiety elementów oraz
  odpowiednią strukturę widoków. Narzędzia pomocnicze: <em lang="en">Android
  Accessibility Scanner, Accessibility Inspector (iOS)</em>, <em lang="en">axe for Android</em>.
  
- **Projektowanie widoków dostosowanych do czytników mobilnych.**\
  Interfejs aplikacji powinien zawierać etykiety, które czytniki ekranu
  (np. TalkBack, VoiceOver) potrafią odczytać i zinterpretować. Elementy
  interaktywne muszą być odpowiednio oznaczone, aby użytkownicy
  wiedzieli, jaką akcję wykonują. Testowanie: TalkBack (Android),
  VoiceOver (iOS), Accessibility Scanner.
- **Zrozumiała hierarchia nawigacji.**\
  Aplikacja powinna posiadać logiczną strukturę ekranów i przewidywalne zachowanie elementów
  nawigacyjnych. Dzięki temu użytkownicy mogą intuicyjnie przemieszczać
  się między widokami, bez potrzeby zapamiętywania ścieżek dostępu.
- **Uwzględnienie możliwości powiększania i zmiany kontrastu.**\
  Aplikacja powinna umożliwiać zmianę rozmiaru tekstu bez utraty
  czytelności lub funkcjonalności. Równie istotna jest możliwość
  przełączenia się na tryb wysokiego kontrastu dla osób niedowidzących.
  Wsparcie tych funkcji zwiększa użyteczność dla szerokiego grona
  odbiorców. Testowanie: ustawienia dostępności systemowej Android/iOS,
  tryb wysokiego kontrastu, skalowanie czcionek.
- **Minimalizowanie rozpraszających animacji i przejść.**\
  Efekty wizualne, takie jak dynamiczne przejścia ekranów czy migające
  elementy, powinny być ograniczone lub opcjonalne. Nadmiar animacji
  może dezorientować użytkowników oraz wpływać negatywnie na osoby z
  zaburzeniami neurologicznymi.
- **Obsługa aplikacji za pomocą alternatywnych metod wejścia.**\
  Aplikacja powinna wspierać nie tylko dotyk, ale również obsługę za
  pomocą klawiatury ekranowej, przycisków fizycznych, gestów systemowych
  i technologii wspomagających.
- **Testowanie na różnych urządzeniach i z technologiami wspomagającymi.**\
  Każda aplikacja mobilna powinna być testowana z
  użyciem popularnych czytników ekranu (TalkBack, VoiceOver), a także na
  urządzeniach o różnych rozmiarach i konfiguracjach. Testy te pomagają
  zidentyfikować problemy z dostępnością na wczesnym etapie. Narzędzia
  testowe: TalkBack, VoiceOver, Switch Access, emulatory mobilne z
  ustawieniami dostępności.
- **Projektowanie widoków dostosowanych do czytników mobilnych.**\
  Interfejs aplikacji powinien zawierać etykiety, które czytniki ekranu
  (np. TalkBack, VoiceOver) potrafią odczytać i zinterpretować. Elementy
  interaktywne muszą być odpowiednio oznaczone, aby użytkownicy
  wiedzieli, jaką akcję wykonują.
- **Zastosowanie znaczników ARIA (<em lang="en">Accessible Rich Internet Applications</em>).**\
  Choć ARIA była pierwotnie rozwijana z myślą o
  stronach internetowych, wiele atrybutów może być przydatnych również w
  aplikacjach mobilnych. Pozwalają one technologiom wspomagającym (jak
  TalkBack czy VoiceOver) lepiej zrozumieć strukturę i funkcje
  interfejsu - np. aria-label, aria-hidden, aria-live.
- **Automatycznie zmieniające się treści.**\
  Aplikacja powinna informować użytkownika o automatycznych zmianach treści (np. ładowaniu danych,
  komunikatach systemowych) za pomocą komunikatów ARIA live lub
  systemowych powiadomień dostępnych dla czytników ekranu.
- **Język treści w aplikacjach mobilnych.**\
  Wszystkie treści powinny mieć prawidłowo oznaczony język, aby czytniki ekranu mogły poprawnie
  interpretować wymowę słów i składni. Brak ustawienia języka może
  prowadzić do błędnej syntezy mowy.
- **Limity czasowe.**\
  Jeśli aplikacja zawiera limity czasowe (np.   formularz z wygasającą sesją), 
  użytkownik powinien zostać odpowiednio   wcześniej ostrzeżony i mieć możliwość 
  przedłużenia działania. Jest to ważne z punktu widzenia użytkowników 
  z trudnościami poznawczymi lub motorycznymi.
- **Multimedia.**\
  Elementy multimedialne (np. filmy, dźwięki) muszą
  posiadać napisy, alternatywę tekstową lub transkrypcję. Multimedia nie
  mogą być uruchamiane automatycznie bez zgody użytkownika.
- **Obsługa aplikacji na ekranie dotykowym.**\
  Interaktywne elementy muszą być odpowiednio duże i mieć odpowiedni odstęp (co najmniej 48×48
  px), by można je było obsłużyć palcem. Ważna jest również czytelność
  etykiet przycisków oraz ich jednoznaczna funkcja.
- **Wyskakujące okienka powiadomień.**\
  Muszą być widoczne, czytelne oraz obsługiwalne przy pomocy czytnika ekranu. Użytkownik musi mieć
  możliwość ich zamknięcia lub przeczytania pełnej treści komunikatu -
  w tym również z poziomu dostępności systemowej.

### 2.5 Lista kontrolna - faza projektowania

|Nr   | Kryterium kontrolne                           | Tak | Nie |   Uwagi     |
|  --|  -----------------------|  --|  --|  ------|
|  1  | Czy projekt uwzględnia zasady projektowania uniwersalnego dla różnych grup użytkowników?  | | | |
|  2  | Czy przewidziano testy z użytkownikami na wczesnym etapie projektowania? | | | |             
|  3  | Czy wykorzystywane są biblioteki i wzorce zgodne z zasadami dostępności np. ARIA, komponenty UI)?  | | | |     
|  4  | Czy przewidziano użycie narzędzi walidacyjnych (axe, WAVE, Lighthouse)?  | | | |   
|  5  | Czy dokumenty mają poprawną strukturę  nagłówków i logiczne formatowanie treści?  | | | |     
|  6  | Czy dokumenty zawierają opisy  alternatywne dla grafik i innych  elementów wizualnych? | | | |     
|  7  | Czy formularze są czytelne, mają etykiety i są obsługiwalne z klawiatury? | | | |            
|  8  | Czy linki w dokumentach i na stronach są zrozumiałe i jednoznaczne?  | | | |          
|  9  | Czy użyto odpowiedniego kontrastu i zadbano o zasadę focus visible?  | | | |      
|-10  | Czy treści w dokumentach i aplikacjach są napisane prostym, zrozumiałym  językiem?  | | | |                  
| 11  | Czy zastosowano unikanie skanów dokumentów jako jedynej formy treści?  | | | | 
| 12  | Czy treści dynamiczne (na stronach i w aplikacjach) są zgodne z zasadami ARIA? | | | |      
| 13  | Czy multimedia posiadają napisy, opisy lub transkrypcje oraz nie uruchamiają się automatycznie?  | | | |           
| 14  | Czy aplikacje mobilne działają poprawnie z TalkBack, VoiceOver, i  innymi technologiami wspomagającymi? | | | |      
| 15  | Czy wszystkie interaktywne elementy w aplikacjach mobilnych są odpowiednio duże i łatwe do obsługi dotykiem? | | | |         
| 16  | Czy aplikacje i strony zawierają poprawne oznaczenie języka treści?  | | | |           
| 17  | Czy aplikacje przewidują możliwość  przedłużenia limitów czasowych? | | | |            
| 18  | Czy wyskakujące komunikaty w aplikacjach są czytelne i możliwe do odczytania przez czytniki ekranu? | | | |        

