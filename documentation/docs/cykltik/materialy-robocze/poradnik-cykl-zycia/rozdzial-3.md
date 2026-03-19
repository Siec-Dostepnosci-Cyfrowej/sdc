---
id: rozdzial-3
title: "Poradnik: Cykl życia technologii informacyjno-komunikacyjnej"
description: W fazie testowania i walidacji produkt w wersji testowej sprawdzamy pod kątem zapewnienia dostępności cyfrowej.
sidebar_label: Cykl życia TIK. R. 3
sidebar_position: 3 
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

## Rozdział 3. Faza wytwarzania i testów

Faza wytwarzania to etap, w którym projektowane rozwiązania przybierają
rzeczywisty kształt - powstaje kod, treści, grafiki, dokumenty i
interfejsy. Jest to kluczowy moment, ponieważ właśnie tutaj można
wdrożyć (lub utracić) dostępność cyfrową w praktyce. Dobre praktyki i
założenia z faz wcześniejszych muszą zostać konsekwentnie przełożone na
gotowy produkt. Jednocześnie już w trakcie wytwarzania powinno się
prowadzić testy - zarówno automatyczne za pomocą dostępnych narzędzi
internetowych, jak i ręczne - aby wcześnie wykryć i wyeliminować
bariery dostępności.

### 3.1 Tworzenie treści i kodu zgodnych z dostępnością

Aby produkt cyfrowy był zgodny z WCAG oraz normą PN ETSI EN 301 549, należy
przestrzegać konkretnych zasad technicznych i redakcyjnych:

- **Semantyczny i poprawny kod HTML**: wszystkie elementy powinny być
  opisane za pomocą właściwych znaczników (np. nagłówki, listy,
  przyciski, formularze). Unikamy ich nadużywania w celu strukturyzacji
  treści.
  
- **Poprawne oznaczenia ARIA**: np. `aria-label`, `aria-labelledby`,
  `aria-live` powinny wspierać komponenty dynamiczne, szczególnie
  formularze, zakładki, okna modalne i powiadomienia.
- **Dostępność interfejsu dla klawiatury**: wszystkie interaktywne
  elementy muszą być dostępne z poziomu klawiatury (<kbd>Tab</kbd>, <kbd>Shift+Tab</kbd>,
  <kbd>Enter</kbd>, <kbd>Spacja</kbd>), z zachowaniem logicznej kolejności przejścia
  (`tabindex`) i wyraźne fokusem.
- **Odpowiedni kontrast kolorystyczny**: tekst powinien mieć
  współczynnik kontrastu co najmniej 4.5:1 (dla tekstu standardowego) i
  3:1 dla powiększonego tekstu.
- **Tekstowe alternatywy dla grafik i multimedialnych treści**: każdy
  obrazek musi mieć atrybut `alt`, a treści wideo napisy i/lub
  audiodeskrypcję. Obrazy dekoracyjne powinny mieć `alt=""`.
- **Dostępne dokumenty cyfrowe**: dokumenty (np. PDF, DOCX, PPTX) muszą
  zawierać strukturę nagłówków, znaczniki czytelne przez czytniki
  ekranu, opisy obrazów, edytowalne formularze.

### 3.2 Testy dostępności: przegląd metod i narzędzi

Kompleksowe testowanie powinno obejmować cztery główne podejścia:

**Lista kontrolna (samodzielna ocena)**

- Narzędzie do szybkiej oceny zgodności z WCAG. Lista zawiera pytania
  podzielone na poziomy: podstawowy (np. obecność alt), średni (np.
  focus, ARIA), zaawansowany (np. analiza kodu, skrypty dynamiczne).
- Pozwala przygotować się do sporządzenia deklaracji dostępności, ocenić
  strony przed audytem, wykluczyć najpoważniejsze błędy i
  niedociągnięcia

**Testy automatyczne**

- Narzędzia takie jak axe DevTools, WAVE, Lighthouse wykrywają błędy
  techniczne: brak etykiet, niski kontrast, nieprawidłowe tabele,
  niewłaściwe nagłówki.
- Nadają się do testów przyrostowych w CI/CD. Nie zastępują testów z
  kontekstem treści.
- Ich wyniki wymagają analizy, w tym właściwej interpretacji.

**Testy z technologiami asystującymi**

- Testy z czytnikami ekranu (NVDA, JAWS, VoiceOver), powiększaniem
  ekranu, nawigacją bez myszy, przełącznikami.
- Symulacja realnych warunków użytkownika (zmiana rozmiaru tekstu,
  orientacji ekranu, dostęp do etykiet).

**Testy z użytkownikami z niepełnosprawnościami**

- Organizowane z udziałem rzeczywistych użytkowników, testujących główne
  scenariusze np.: logowanie, zamówienie, rezerwacja, płatności
- Dzięki nim można wykryć bariery użytecznościowe, nawet przy zgodności
  z WCAG.

### 3.3 Organizacja procesu testowego

Testowanie dostępności nie powinno być odkładane - musi być logicznie
wkomponowane w cały cykl wytwarzania:

- **Testy iteracyjne** - każde rozszerzenie lub komponent powinien być
  testowany osobno, zanim zostanie zintegrowany z całością.
- **Dokumentacja wyników** - każdy test (automatyczny i ręczny)
  powinien kończyć się raportem z opisem problemów, ich wpływem na
  użytkownika i propozycją naprawy.
- **Weryfikacja poprawek** - po naprawieniu błędów należy przeprowadzić
  ponowne testy. Tylko wtedy można mieć pewność, że problem został
  usunięty, a nie „zamaskowany".
- **Zaangażowanie różnych ról** - za testowanie nie odpowiada wyłącznie
  zespół programistów. Redaktorzy, projektanci, osoby decyzyjne również
  powinni rozumieć podstawy dostępności i potrafić rozpoznać podstawowe
  błędy.
- **Testy regresyjne** - pozwalają zweryfikować, czy wdrożona zmiana
  (np. nowa funkcjonalność) nie pogorszyła dostępności już wdrożonych
  elementów.

### 3.4 Na co zwrócić uwagę w zależności od produktu

#### Dokumenty 

- **Czy stosujesz style i strukturę nagłówków?**\
  Nagłówki muszą być tworzone przy pomocy stylów, a nie pogrubień i
  rozmiaru czcionki. Tylko wtedy czytniki ekranu potrafią rozpoznać
  strukturę i umożliwić szybkie przeskakiwanie między sekcjami.
- **Czy formularze w dokumentach PDF są edytowalne i mają etykiety?**\
  Pola formularzy muszą być rzeczywiste (nie grafika) i zawierać
  widoczne oraz odczytywalne etykiety. Powinny być także obsługiwalne z
  klawiatury i zawierać logiczną kolejność przejścia między nimi.
- **Czy obrazy mają teksty alternatywne?**\
  Każda grafika musi być opisana - tekstem alternatywnym, który oddaje
  sens obrazu. Obrazy dekoracyjne muszą być oznaczone jako pomijane
  (`alt=""`), aby nie przeszkadzały w nawigacji.
- **Czy dokument został sprawdzony przy użyciu narzędzi takich jak Acrobat Pro czy Microsoft Accessibility Checker?**\
  Te narzędzia pomagają wykryć typowe błędy, takie jak brak struktury
  nagłówków, nieprawidłowe tabele, brak języka dokumentu, niedostępne
  formularze lub brak opisów ALT.

#### Strony internetowe 

- **Czy każda strona ma unikalny tytuł?**\
  Tytuł (`<title>`) powinien jednoznacznie określać treść strony -
  ułatwia to poruszanie się po witrynie oraz w historii przeglądarki.
- **Czy wszystkie obrazy mają atrybut alt?**\
  Każdy istotny obraz musi mieć tekst alternatywny. Obrazy dekoracyjne
  powinny mieć pusty atrybut, aby nie były odczytywane przez czytniki.
- **Czy formularze są poprawnie zbudowane (`<label for="id">`)?**\
  Pola formularzy muszą być powiązane z etykietami - tylko wtedy
  technologia wspomagająca może poprawnie je interpretować. Dodatkowo
  komunikaty o błędach powinny być jasne i dostępne.
- **Czy użyto testera kontrastu?**\
  Kontrast należy testować z użyciem specjalnych narzędzi - np. WebAIM
  Contrast Checker lub wtyczek do przeglądarek. Subiektywne ocenianie
  kontrastu (na oko) może być mylące.
- **Czy elementy nawigacyjne są dostępne za pomocą klawiatury?**\
  Nawigacja musi być możliwa bez użycia myszy. Elementy interaktywne
  muszą być widoczne podczas nawigacji (focus) i możliwe do aktywacji
  klawiszem Enter lub Spacja.

#### Aplikacje mobilne 

- **Czy aplikacja działa z VoiceOver (iOS) i TalkBack (Android)?**\
  Każdy ekran i jego elementy muszą być testowane z użyciem wbudowanych
  czytników ekranu. Brak odpowiednich etykiet i nieczytelna struktura to
  częste błędy.
- **Czy wszystkie interaktywne elementy mają odpowiednie etykiety?**\
  Przycisk z samą ikoną jest bezużyteczny bez opisu. Każdy element musi
  mieć czytelną nazwę dla użytkownika i dla czytnika ekranu.
- **Czy możliwa jest zmiana rozmiaru tekstu i kontrastu?**\
  Aplikacja powinna automatycznie reagować na ustawienia systemowe
  użytkownika - np. powiększony tekst lub tryb wysokiego kontrastu.
- **Czy wykonano testy automatyczne i z użytkownikami ?**\
  Testy automatyczne to za mało - potrzebne są też testy ręczne na
  urządzeniach i testy z użytkownikami z niepełnosprawnościami.
  Umożliwia to wykrycie barier w prawdziwych warunkach.

### 3.5 Audyt ekspercki i raportowanie

Audyt ekspercki jest kluczowym elementem zapewnienia jakości dostępności
cyfrowej. Pozwala na ocenę zgodności serwisu lub aplikacji z wytycznymi
WCAG oraz normą PL ETSI EN 301 549. Audyt taki powinien być przeprowadzany
niezależnie, przez wyspecjalizowaną osobę lub zespół posiadający wiedzę
techniczną, doświadczenie w testowaniu z technologiami asystującymi oraz
znajomość potrzeb osób z niepełnosprawnościami.

**Rodzaje audytów:**

- **Audyt pełny** - obejmuje całościową ocenę rozwiązania (np. cała
    strona internetowa, aplikacja mobilna, system back-office). Wymaga
    testów wszystkich kluczowych funkcjonalności i szlaków użytkownika.
- **Audyt częściowy** - koncentruje się na wybranych komponentach lub
    podsystemach (np. formularz kontaktowy, system logowania, dostępność
    dokumentów PDF).
- **Audyt weryfikacyjny** - realizowany po wdrożeniu poprawek
    dostępnościowych, w celu oceny, czy usunięto wskazane wcześniej
    niezgodności.

**Etapy audytu:**
1. **Analiza automatyczna** - z wykorzystaniem narzędzi typu axe,
   WAVE, Pa11y, Accessibility Insights; identyfikacja błędów
   technicznych i strukturalnych.
2. **Analiza ręczna kodu** - weryfikacja semantyki HTML, zastosowania
   ról ARIA, nagłówków, formularzy, tabel, struktur dynamicznych.
3. **Testy z technologiami asystującymi** - m.in. NVDA, VoiceOver,
   TalkBack, lupa ekranowa, klawiatura; sprawdzenie czy zawartość jest
   prawidłowo odczytywana i dostępna.
4. **Testy scenariuszowe** - symulacja rzeczywistych zadań użytkownika
   (np. rejestracja konta, zakup, wypełnienie formularza) przez audytora.

**Raport audytu powinien zawierać:**

- **Zakres badania** - jakie strony, widoki, komponenty zostały
    przetestowane.
- **Opis metodyki** - jakich narzędzi i technologii użyto, w jakich
    środowiskach (przeglądarki, systemy operacyjne).
- **Lista błędów** - z klasyfikacją wagową (krytyczne, wysokie,
    średnie, niskie), identyfikatorem i lokalizacją.
- **Zalecenia naprawcze** - konkretne propozycje rozwiązań (zmiany w
    kodzie, treści, stylach, komponentach).
- **Załączniki** - zrzuty ekranu, logi z narzędzi, pliki testowe.
- **Krótkie podsumowanie zarządcze** - pozwala osobom decyzyjnym w
    organizacji zorientować się w najważniejszych ustaleniach audytowych,
    bez konieczności czytania całego raportu.

**Rekomendacje:**

- Raport powinien być dostarczony zarówno w formie dokumentu, jak i
    arkusza kalkulacyjnego (np. Excel), ułatwiającego śledzenie postępu
    wdrażania poprawek.
- W przypadku współpracy z wykonawcą zewnętrznym, audyt ekspercki może
    stanowić podstawę do odbioru przedmiotu zamówienia.
- Raport powinien zawierać także zalecenia strategiczne - np. w
    zakresie szkoleń zespołu redakcyjnego lub zmian procesów redakcyjnych.

Audyt ekspercki nie jest zamiennikiem testów z użytkownikami z
niepełnosprawnościami, lecz ich uzupełnieniem. Wspólnie zapewniają
najwyższy poziom wiarygodności oceny dostępności cyfrowej.

- **Audyt ekspercki**: prowadzony przez niezależnego specjalistę ds.
  WCAG, testującego strony zgodnie z normami (PN ETSI EN 301 549, WCAG 2.1/2.2).
- **Rodzaje audytu**: pełny (cała aplikacja), częściowy (np.
  formularze), weryfikacyjny (po poprawkach).

- **Etapy audytu**:
  - testy automatyczne,
  - analiza kodu,
  - testy z czytnikami,
  - testy scenariuszowe z użytkownikami.

- **Raport audytu** zawiera: profil badania, spis problemów,
  klasyfikację wagową (krytyczny, wysoki, średni), opis, zrzuty ekranu i
  rekomendacje.
- **Audyt weryfikacyjny**: wykonuje się go po wdrożeniu poprawek;
  potwierdza usunięcie błędów i zgodność z ustawą.

### 3.6 Lista kontrolna - faza wytwarzania i testów

|  Nr | Kryterium kontrolne                           | Tak | Nie |   Uwagi     |
|  --|  -----------------------|  --|  --|  ------|
|  1  | Czy kod zawiera semantyczne znaczniki HTML?    | | | |               
|  2  | Czy formularze i elementy interaktywne są  dostępne klawiaturą?  | | | |                                        
|  3  | Czy obrazy mają poprawne opisy alternatywne?   | | | |  
|  4  | Czy przeprowadzono testy automatyczne (axe, WAVE, Lighthouse)?   | | | |
|  5  | Czy zastosowano odpowiednie oznaczenia ARIA?   | | | |
|  6  | Czy zapewniono kontrast między tekstem a tłem min. 4.5:1?   | | | |                     
|  7  | Czy formularze mają widoczne i czytelne  etykiety?   | | | |                 
|  8  | Czy wykonano testy z czytnikami ekranu (NVDA, JAWS)?   | | | |                  
|  9  | Czy wykonano testy na urządzeniach mobilnych  (TalkBack, VoiceOver)?   | | | | 
| 10  | Czy wykonano testy z użytkownikami z niepełnosprawnościami?  | | | |                
| 11  | Czy elementy dynamiczne są oznaczone ARIA-live?  | | | |                             
| 12  | Czy zastosowano tryb wysokiego powiększenia (min. 200%)?  | | | |                            
| 13  | Czy wszystkie poprawki zostały ponownie przetestowane?   | | | |                            
| 14  | Czy przeprowadzono audyt ekspercki?  | | | |
| 15  | Czy utworzono dokumentację testów i raport dostępności?   | | | |                 

