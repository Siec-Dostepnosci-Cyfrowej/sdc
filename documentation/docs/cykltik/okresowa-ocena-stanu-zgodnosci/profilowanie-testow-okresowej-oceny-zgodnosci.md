---
id: profilowanie-testow-okresowej-oceny-zgodnosci
title: Profilowanie testów okresowej oceny zgodności
sidebar_label: Profilowanie testów
sidebar_position: 5
description: Zestawienie testów przypisanych do profilu minimalnego, rozszerzonego i pogłębianego, wykorzystywanych podczas okresowej oceny stanu zgodności.
keywords: [testy dostępności, profil testów, profil minimalny, profil rozszerzony, profil pogłębiany, ocena zgodności]
tags: [testy dostępności, profil testów, profil minimalny, profil rozszerzony, profil pogłębiany, ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 16 czerwca 2026 r.
wersja_robocza: true
---

## 1. Cel dokumentu

Dokument określa profile stosowane podczas okresowej oceny stanu zgodności oraz katalog testów wykorzystywanych do systematycznego gromadzenia i rozszerzania wiedzy o stanie zgodności rozwiązania.

Dokument określa:

- profil minimalny,
- profil rozszerzony,
- profil pogłębiany,
- minimalne zestawy testów dla stron internetowych i aplikacji mobilnych,
- katalog dodatkowych testów wymagań dostępności,
- katalog testów stron, procesów, komponentów i dokumentów.

---

## 2. Profil minimalny

Profil minimalny określa minimalny zakres badania stanowiący podstawę pierwszej okresowej oceny stanu zgodności rozwiązania.

Celem profilu jest uzyskanie podstawowej, wiarygodnej wiedzy o stanie zgodności rozwiązania oraz stworzenie punktu wyjścia do systematycznego rozszerzania tej wiedzy w kolejnych ocenach.

Profil przeznaczony jest do:

- pierwszej oceny stanu zgodności rozwiązania,
- samooceny organizacji,
- okresowej oceny stanu zgodności,
- monitorowania podstawowych wymagań dostępności cyfrowej,
- oceny wykonywanej przez pracowników organizacji.

Profil obejmuje podstawowe testy pozwalające wykryć najczęściej występujące problemy dostępności oraz ocenić najważniejsze aspekty dostępności rozwiązania.


## 3. Strony internetowe i aplikacje mobilne

### 3.1. Dlaczego dokument określa odrębne zestawy testów

Dokument zawiera odrębne zestawy testów dla stron internetowych i aplikacji mobilnych.

Rozwiązanie to wynika z różnic technologicznych pomiędzy stronami internetowymi a natywnymi aplikacjami mobilnymi.

Większość wymagań dostępności cyfrowej ma zastosowanie zarówno do stron internetowych, jak i aplikacji mobilnych. W obu przypadkach użytkownik powinien mieć możliwość:

- percepcji treści,
- obsługi rozwiązania przy użyciu klawiatury lub technologii wspomagających,
- korzystania z formularzy i procesów użytkownika,
- uzyskiwania informacji o błędach i zmianach stanu,
- realizacji podstawowych zadań bez barier dostępności.

Część wymagań jest jednak realizowana odmiennie w technologiach webowych i w natywnych aplikacjach mobilnych. W takich przypadkach stosowane są odrębne scenariusze testów.

---

### 3.2. Strona internetowa a aplikacja mobilna

Strona internetowa wyświetlana na urządzeniu mobilnym pozostaje stroną internetową.

Fakt korzystania z telefonu lub tabletu nie oznacza, że oceniane rozwiązanie jest aplikacją mobilną.

Do stron internetowych zalicza się między innymi:

- strony internetowe otwierane w przeglądarce,
- responsywne serwisy internetowe,
- systemy internetowe dostępne za pomocą przeglądarki,
- aplikacje webowe działające w przeglądarce internetowej.

Do aplikacji mobilnych zalicza się rozwiązania instalowane w systemie operacyjnym urządzenia mobilnego i uruchamiane jako odrębne aplikacje.

---

### 3.3. Aplikacje wykorzystujące technologie webowe

Niektóre aplikacje mobilne są tworzone przy wykorzystaniu technologii webowych, takich jak HTML, CSS i JavaScript.

W zależności od sposobu implementacji część wymagań oraz testów stosowanych dla stron internetowych może mieć również zastosowanie do takich aplikacji.

Przy doborze testów należy uwzględniać rzeczywistą technologię zastosowaną w ocenianym rozwiązaniu oraz sposób realizacji poszczególnych funkcji.

W przypadku wątpliwości zaleca się stosowanie testów zapewniających ocenę dostępności danej funkcji niezależnie od zastosowanej technologii.


## 4. Profil rozszerzony

Profil rozszerzony przeznaczony jest do:

- okresowej oceny stanu zgodności,
- systematycznego rozszerzania wiedzy o stanie zgodności rozwiązania,
- monitorowania zmian stanu dostępności,
- weryfikacji skuteczności działań naprawczych,
- oceny wykonywanej przez osoby posiadające wiedzę z zakresu dostępności cyfrowej.

Profil rozszerzony stanowi naturalne rozwinięcie profilu minimalnego.

Celem profilu jest stopniowe zwiększanie zakresu ocenionych wymagań dostępności, stron, ekranów, komponentów, dokumentów i procesów użytkownika w taki sposób, aby organizacja systematycznie zwiększała wiedzę o stanie zgodności rozwiązania.

Profil rozszerzony obejmuje:

- wszystkie testy profilu minimalnego,
- dodatkowe testy wymagań dostępności niewykonane wcześniej,
- dodatkowe strony, ekrany, dokumenty, komponenty i procesy użytkownika nieobjęte wcześniejszymi ocenami,
- obszary rozwiązania, w których wprowadzono zmiany od poprzedniej oceny.

Zakres każdej kolejnej oceny powinien być planowany w sposób umożliwiający stopniowe zwiększanie zakresu rozpoznania stanu zgodności rozwiązania.

W każdej ocenie realizowanej zgodnie z profilem rozszerzonym zaleca się objęcie oceną:

- co najmniej 10 dodatkowych testów wymagań dostępności niewykonanych wcześniej,
- co najmniej trzech dodatkowych stron, ekranów, dokumentów, komponentów lub procesów użytkownika nieobjętych wcześniejszą oceną.

## 5. Profil pogłębiany

Profil pogłębiany przeznaczony jest do:

- uzyskania możliwie pełnej wiedzy o stanie zgodności rozwiązania,
- pogłębionych ocen dostępności cyfrowej,
- przygotowania działań modernizacyjnych lub naprawczych,
- przygotowania organizacji do audytu zgodności,
- oceny rozwiązań o dużym znaczeniu dla użytkowników lub wysokim poziomie złożoności.

Profil pogłębiany stanowi rozwinięcie profilu rozszerzonego.

Celem profilu jest systematyczne uzupełnianie wiedzy o wymaganiach, komponentach, dokumentach i procesach, które nie zostały dotychczas objęte oceną, oraz pogłębianie wiedzy o obszarach wymagających szczególnej uwagi.

Profil obejmuje:

- wszystkie testy wykonane w ramach profilu minimalnego i rozszerzonego,
- kolejne niewykonane wcześniej testy wymagań dostępności,
- pozostałe istotne strony, ekrany, dokumenty, komponenty i procesy użytkownika występujące w rozwiązaniu,
- testy wymagające pogłębionej wiedzy eksperckiej,
- testy opcjonalne wykorzystywane do doskonalenia dostępności ponad poziom wynikający z obowiązujących wymagań.

Profil pogłębiany nie zastępuje audytu zgodności, jednak może prowadzić do uzyskania zakresu wiedzy porównywalnego z szeroką oceną zgodności.

## 6. Katalog testów

### 6.1. Minimalny zestaw testów dla stron internetowych

| ID testu   | Nazwa testu                                |
| ---------- | ------------------------------------------ |
| procID-001 | Automatyczne wykrywanie błędów dostępności |
| testID-019 | Nagłówki                                   |
| testID-020 | Tytuł strony                               |
| testID-021 | Język strony                               |
| testID-023 | Dostęp z klawiatury                        |
| testID-024 | Obsługa klawiaturą                         |
| testID-025 | Pułapka klawiaturowa                       |
| testID-027 | Widoczność fokusu                          |
| testID-031 | Punkty orientacyjne                        |
| testID-032 | Wystarczający kontrast                     |
| testID-033 | Tekst alternatywny                         |
| testID-034 | Łącza pomijania                            |
| testID-035 | Cel łącza (w kontekście)                   |
| testID-039 | Widoczne etykiety lub instrukcje           |
| testID-041 | Oznaczenie pól wymaganych                  |
| testID-042 | Format danych                              |
| testID-043 | Sugestie korekty błędów                    |
| testID-044 | Identyfikacja błędów                       |
| testID-047 | Odczyt struktury przez czytnik ekranu      |
| testID-048 | Odczyt formularza przez czytnik ekranu     |
| testID-069 | Komunikaty o stanie                        |
| testID-070 | Dostępna nazwa elementu interaktywnego     |
| testID-071 | Dostępna nazwa w widocznej etykiecie       |

---

### 6.2. Minimalny zestaw testów dla aplikacji mobilnych

| ID testu   | Nazwa testu                                        |
| ---------- | -------------------------------------------------- |
| procID-001 | Automatyczne wykrywanie błędów dostępności         |
| testID-019 | Nagłówki                                           |
| testID-025 | Pułapka klawiaturowa                               |
| testID-027 | Widoczność fokusu                                  |
| testID-032 | Wystarczający kontrast                             |
| testID-033 | Tekst alternatywny                                 |
| testID-035 | Cel łącza (w kontekście)                           |
| testID-039 | Widoczne etykiety lub instrukcje                   |
| testID-041 | Oznaczenie pól wymaganych                          |
| testID-042 | Format danych                                      |
| testID-043 | Sugestie korekty błędów                            |
| testID-044 | Identyfikacja błędów                               |
| testID-047 | Odczyt struktury przez czytnik ekranu              |
| testID-048 | Odczyt formularza przez czytnik ekranu             |
| testID-070 | Dostępna nazwa elementu interaktywnego             |
| testID-071 | Dostępna nazwa w widocznej etykiecie               |
| testID-096 | Obsługa klawiaturą zewnętrzną (aplikacja mobilna)  |
| testID-098 | Kolejność fokusu (aplikacja mobilna)               |
| testID-099 | Etykiety elementów (aplikacja mobilna)             |
| testID-100 | Orientacja ekranu (aplikacja mobilna)              |
| testID-101 | Skalowanie tekstu (aplikacja mobilna)              |
| testID-102 | Ustawienia dostępności systemu (aplikacja mobilna) |
| testID-103 | Komunikaty o stanie (aplikacja mobilna)            |
| testID-137 | Język rozwiązania (aplikacja mobilna)              |
| testID-143 | Nazwa ekranu aplikacji                             |

---

### 6.3. Katalog testów wykorzystywanych w profilach rozszerzonym i pogłębianym

#### 6.3.1 Katalog dodatkowych testów wymagań dostępności dla stron internetowych

| ID         | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-022 | Język części strony                   |
| testID-029 | Zmiana po uzyskaniu fokusu            |
| testID-030 | Zmiana po wprowadzeniu danych         |
| testID-037 | Zmiana rozmiaru tekstu                |
| testID-038 | Dopasowanie do szerokości ekranu      | 
| testID-040 | Opisowe etykiety                      | 
| testID-045 | Zapobieganie błędom                   |
| testID-046 | Etykiety powiązane programowo         |
| testID-049 | Transkrypcja dla wideo bez dźwięku    |
| testID-050 | Transkrypcja dla nagrań audio         |
| testID-051 | Napisy rozszerzone                    |
| testID-052 | Audiodeskrypcja                       |
| testID-053 | Alternatywa pełnotekstowa dla multimediów |
| testID-054 | Ruch, miganie i błyski                     |
| testID-072 | Obrazy tekstu                         |
| testID-073 | Spójność identyfikacji                |
| testID-074 | Spójność nawigacji                    |
| testID-075 | Użycie koloru                         |
| testID-076 | Wiele sposobów                             |
| testID-077 | Treść spod kursora lub fokusu         |
| testID-078 | Kontrola odtwarzania dźwięku          |
| testID-079 | Regulacja czasu                       |
| testID-080 | Gesty wskaźnika                       |
| testID-082 | Aktywowanie ruchem                    |
| testID-081 | Rezygnacja ze wskazania               |
| testID-083 | Odstępy w tekście                     |
| testID-084 | Napisy rozszerzone na żywo            |
| testID-087 | Fokus niezakryty                      |
| testID-088 | Przeciąganie                          |
| testID-089 | Rozmiar celu (minimum)                |
| testID-091 | Spójna pomoc                          |
| testID-092 | Ponowne wpisy                         |
| testID-093 | Dostępne uwierzytelnianie             |
| testID-096 | Obsługa klawiaturą zewnętrzną         |
| testID-097 | Gesty systemowe i niestandardowe      |
| testID-136 | Jednoznakowe skróty klawiaturowe      |

#### 6.3.2 Katalog opcjonalnych testów wymagań dostępności dla stron internetowych

| ID         | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-028 | Wygląd fokusu                         |
| testID-036 | Cel łącza (samodzielnie)              |
| testID-085 | Nietypowe słowa                       |
| testID-086 | Skróty                                |
| testID-090 | Rozmiar celu dotyku (ulepszone)   |
| testID-094 | Dostępne uwierzytelnianie (ulepszone) |

#### 6.3.3 Katalog dodatkowych testów wymagań dostępności dla aplikacji mobilnych

| ID testu        | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-029 | Zmiana po uzyskaniu fokusu            |
| testID-030 | Zmiana po wprowadzeniu danych         |
| testID-037 | Zmiana rozmiaru tekstu                |
| testID-038 | Dopasowanie do szerokości ekranu      | 
| testID-040 | Opisowe etykiety                      | 
| testID-045 | Zapobieganie błędom                   |
| testID-046 | Etykiety powiązane programowo         |
| testID-049 | Transkrypcja dla wideo bez dźwięku    |
| testID-050 | Transkrypcja dla nagrań audio         |
| testID-051 | Napisy rozszerzone                    |
| testID-052 | Audiodeskrypcja                       |
| testID-053 | Alternatywa pełnotekstowa dla multimediów |
| testID-054 | Ruch, miganie i błyski                     |
| testID-072 | Obrazy tekstu                         |
| testID-075 | Użycie koloru                         |
| testID-077 | Treść spod kursora lub fokusu         |
| testID-078 | Kontrola odtwarzania dźwięku          |
| testID-079 | Regulacja czasu                       |
| testID-080 | Gesty wskaźnika                       |
| testID-082 | Aktywowanie ruchem                    |
| testID-081 | Rezygnacja ze wskazania               |
| testID-083 | Odstępy w tekście                     |
| testID-084 | Napisy rozszerzone na żywo            |
| testID-087 | Fokus niezakryty                      |
| testID-088 | Przeciąganie                          |
| testID-091 | Spójna pomoc                          |
| testID-092 | Ponowne wpisy                         |
| testID-093 | Dostępne uwierzytelnianie             |
| testID-096 | Obsługa klawiaturą zewnętrzną         |
| testID-097 | Gesty systemowe i niestandardowe      |
| testID-136 | Jednoznakowe skróty klawiaturowe      |

#### 6.3.4 Katalog opcjonalnych testów wymagań dostępności dla aplikacji mobilnych

| ID testu        | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-028 | Wygląd fokusu                         |
| testID-036 | Cel łącza (samodzielnie)              |
| testID-085 | Nietypowe słowa                       |
| testID-086 | Skróty                                |
| testID-090 | Rozmiar celu dotyku (ulepszone)   |
| testID-094 | Dostępne uwierzytelnianie (ulepszone) |

#### 6.3.5. Testy stron, procesów, komponentów i dokumentów

Testy wymagań dostępności służą ocenie spełniania określonych wymagań dostępności.

Niezależnie od nich organizacja może wykorzystywać testy stron, procesów, komponentów i dokumentów służące ocenie typowych obiektów występujących w rozwiązaniu.

Testy te mogą być wykorzystywane zarówno w profilu rozszerzonym, jak i pogłębianym.


#### 6.3.6. Katalog testów typowych stron, sekcji witryny, widoków

| ID testu   | Nazwa testu                                                   |
| ---------- | ------------------------------------------------------------- |
| testID-110 | Deklaracja dostępności                                        |
| testID-111 | Deklaracja dostępności (zgodność z warunkami technicznymi MC) |
| testID-112 | BIP - Informacja publiczna                                    |
| testID-113 | Lista aktualności                                             |
| testID-114 | Artykuł / komunikat / wpis                                    |
| testID-115 | Katalog usług                                                 |
| testID-116 | Karta usługi                                                  |
| testID-123 | Strona kontaktowa                                             |
| testID-124 | Informacja o podmiocie w PJM                                  |
| testID-125 | Informacja o podmiocie w ETR                                  |
| testID-126 | Polityka prywatności                                          |
| testID-127 | Strona główna                                                 |
| testID-128 | Pliki do pobrania                                             |
| testID-129 | Strona wielojęzyczna                                          |
| testID-130 | Komponent Kalendarz                                           |
| testID-131 | Strona Wydarzenie                                             |
| testID-135 | Informacje o dostępności                                      |
| testID-138 | Ekran główny aplikacji                                        |
| testID-139 | Lista funkcji aplikacji                                       |
| testID-140 | Widok szczegółów w aplikacji                                  |
| testID-141 | Ustawienia aplikacji                                          |
| testID-142 | Powiadomienia aplikacji                                       |



#### 6.3.7. Katalog testów typowych procesów

| ID         | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-117 | Złożenie wniosku                      |
| testID-118 | Rejestracja / Logowanie               |
| testID-119 | Rezerwacja terminu                    |
| testID-121 | Zgłoszenie problemu dostępności       | 
| testID-133 | Usługa lub procedura w ETR            |
| testID-134 | Obsługa użytkownika w PJM             |

#### 6.3.8. Katalog testów złożonych komponentów i widżetów

| ID testu   | Nazwa testu                |
| ---------- | -------------------------- |
| testID-055 | Modalne okno dialogowe     |
| testID-056 | Zakładki                   |
| testID-058 | Karuzela                   |
| testID-059 | Akordeon                   |
| testID-062 | Tabela danych              |
| testID-063 | Wykres                     |
| testID-064 | Wizualizacja danych        |
| testID-065 | Odtwarzacz multimedialny   |
| testID-066 | Menu nawigacyjne           |
| testID-067 | Wyszukiwanie w witrynie    |
| testID-068 | Galeria obrazów            |
| testID-095 | Obsługa czytnikiem ekranu  |
| testID-122 | Mapa dojazdu / Lokalizacja |
| testID-132 | Selektor języka            |

#### 6.3.9. Katalog testów dokumentów

| ID         | Nazwa testu                           |
| ---------- | ------------------------------------- |
| testID-120 | Formularz                             |
| testID-060 | Dokument PDF                          |
| testID-061 | Dokument DOCX / ODT                   |
| testID-104 | Skan dokumentu                        |
| testID-107 | Formularz PDF                         |    
| testID-108 | Dokument podpisany elektronicznie     |  
| testID-109 | Arkusz kalkulacyjny (CSV/XLSX)        |  
 
---

