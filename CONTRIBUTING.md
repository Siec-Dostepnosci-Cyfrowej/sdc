# Sieć Dostępności Cyfrowej — zasady tworzenia treści i komentarzy

## Cel dokumentu

Zapewnić, aby wszystkie treści tworzone w tym repozytorium były:

- merytoryczne,
- zrozumiałe,
- zgodne ze standardami dostępności,
- wolne od marketingowego języka,
- faktycznie pomocne dla sektora publicznego.

---

## Jak pisać treści

- **Pisz zrozumiale** — używaj prostego języka, krótkich zdań, konkretów.
- **Pisz rzeczowo** — każda sekcja musi wnosić wartość: definicję, przykład, rekomendację lub procedurę.
- **Odwołuj się do aktów prawnych i standardów** — WCAG, EN 301 549, ustawa o dostępności cyfrowej. Linkuj do źródeł, jeśli to możliwe.

---

## Jak korzystać z AI

- **AI jako narzędzie pomocnicze** — może pomóc w szkicu, strukturze i przykładach, ale finalna treść wymaga samodzielnej redakcji i weryfikacji autora.
- **Zawsze redaguj** — nie wklejaj odpowiedzi AI bez przeredagowania.
- **Sprawdzaj fakty** — AI może się mylić; weryfikuj standardy, definicje, wymagania prawne.
- **Unikaj ogólników** — usuwaj puste frazy typu „ważne jest zapewnienie dostępności dla wszystkich”.
- **Dodawaj przykłady z praktyki** — AI nie zna kontekstu sektora publicznego w Polsce, a Ty go znasz.

---

## Czego nie robić

- **Nie kopiuj AI bez zmian** — to obniża jakość dokumentu i utrudnia czytanie.
- **Nie pisz ogólników** — treść musi być konkretna i praktyczna.
- **Nie używaj języka marketingowego** — dokument ma charakter techniczny i operacyjny.
- **Nie powtarzaj oczywistości** — np. „dostępność jest ważna”.
- **Nie opisuj narzędzi jako magicznych** — narzędzia wspierają analizę, nie „rozwiązują dostępności”.

---

## Struktura treści

Każdy nowy materiał powinien zawierać:

- **Cel** — dlaczego treść jest potrzebna.
- **Zakres** — co obejmuje, czego nie obejmuje.
- **Rekomendacje** — konkretne, operacyjne, możliwe do wdrożenia.
- **Przykłady** — najlepiej z sektora publicznego.
- **Podstawy prawne / standardy** — linki do WCAG, EN 301 549, ustawy o dostępności cyfrowej, itd.

---

## Nagłówki w dokumentach serwisu

Nagłówki tworzą strukturę dokumentu wykorzystywaną przez czytniki ekranu do nawigacji, a w serwisie dokumentacji dodatkowo budują spis treści strony. Poziom nagłówka ma znaczenie funkcjonalne, a nie tylko wizualne.

Zasada dotyczy dokumentów publikowanych w serwisie, to znaczy zaleceń, kart ról, scenariuszy testów, wzorów, formularzy i bloga. Typ dokumentu może wpływać na nazwy sekcji, ale nie na hierarchię nagłówków.

Nie dotyczy plików Markdown używanych tylko na GitHubie (ten plik, README, szablony Issue) ani stron TSX. Tam nie ma tytułu z frontmattera, więc `#` pozostaje nagłówkiem pierwszego poziomu.

- Tytuł dokumentu pochodzi z pola `title` we frontmatterze i jest wyświetlany jako nagłówek pierwszego poziomu (H1). W treści dokumentu nie stosujemy `#`.
- Sekcje główne mają poziom drugi (`##`), podsekcje trzeci (`###`) i czwarty (`####`). Na stronie odpowiadają one poziomom H2–H4. Unikamy głębszego zagnieżdżania niż cztery poziomy (H1 ze strony plus `##`-`####`).
- Nagłówka szóstego poziomu (`######`) nie stosujemy.
- Nagłówka piątego poziomu (`#####`) używamy tylko wtedy, gdy naprawdę wynika ze struktury dokumentu, na przykład przy wiernym odwzorowaniu źródła. Nie używamy go do wyróżniania tekstu ani jako etykiety listy. W pozostałych przypadkach stosujemy listę, pogrubienie albo osobną sekcję poziomu wyżej.
- Poziomy nagłówków następują po sobie bez przeskoków.
- Nagłówek zapowiada treść sekcji. Nie służy do wyróżniania ani do linii poziomej. Do wyróżnień stosujemy pogrubienie, do list — listy.
- Numerowanie sekcji jest opcjonalne i zależy od rodzaju dokumentu. Zalecenia i dłuższe opracowania mogą je stosować; szablony, opisy praktyk, scenariusze testów i karty ról nie muszą. Jeśli numeracja jest stosowana, musi odpowiadać poziomowi, na przykład `## 7.`, `### 7.2.`, `#### 7.2.1.`.

---

## Jak strukturyzować długie dokumenty

Dokumenty zawierające wiele sekcji wymagają szczególnej dbałości o strukturę. Hierarchia nagłówków — w sekcji [Nagłówki w dokumentach serwisu](#nagłówki-w-dokumentach-serwisu).

- **Rozpoczynaj od wprowadzenia** — 2–3 zdania o celu dokumentu.
- **Dziel treść na logiczne bloki** — każdy rozdział powinien obejmować jeden spójny temat.
- **Stosuj listy i tabele** — ułatwiają skanowanie treści.
- **Zachowaj spójną długość sekcji** — unikaj rozdziałów skrajnie krótkich lub nadmiernie rozbudowanych.
- **Oddzielaj przykład od definicji** — przykłady umieszczaj bezpośrednio po treści, którą ilustrują.

---

## Przed dodaniem treści — lista punktów do weryfikacji

- Czy treść jest konkretna?
- Czy wnosi wartość?
- Czy jest zgodna ze standardami?
- Czy hierarchia nagłówków jest zgodna z zasadą (brak `#` w treści, brak przeskoków, najwyżej `####` poza uzasadnionym H5)?
- Czy została przeredagowana po użyciu AI?
- Czy nie zawiera marketingu?
- Czy jest zrozumiała dla urzędnika, który nie jest ekspertem?

---

## Styl i ton

- neutralny,
- techniczny,
- bez emocji,
- bez marketingu,
- bez przesady,
- bez określeń typu „AI-powered”.

---

## Proces zgłaszania treści

- **Utwórz Issue** — aby zaproponować temat, zgłosić błąd lub zadać pytanie.
- **Przygotuj Pull Request (PR)** — jeśli masz gotową treść lub poprawki:
  - krótko opisz, co zmieniasz i dlaczego,
  - jeśli PR odnosi się do konkretnego Issue, oznacz je.
- **Recenzja** — każdy PR jest recenzowany pod kątem:
  - zgodności z wytycznymi,
  - poprawności merytorycznej,
  - czytelności i praktycznej użyteczności.
- **Poprawki** — wprowadź zmiany sugerowane przez recenzentów.
- **Zatwierdzenie i scalenie** — po akceptacji PR zostanie scalony z główną gałęzią repozytorium.
- **Unikaj rozbudowanych PR-ów** — duże PR-y są trudne do oceny i spowalniają proces.
- **Formatowanie** — wszystkie treści zapisujemy w standardzie Markdown (`.md`).

---

## Komentarze i dyskusje

Komentarze w tym repozytorium służą wymianie wiedzy, wyjaśnianiu wątpliwości i wspólnemu wypracowywaniu najlepszych rozwiązań. Nie są miejscem na automatycznie generowane odpowiedzi, które nie wnoszą nowej wartości.

### Zasady komentowania

- **Komentuj merytorycznie** — wskazuj konkretne problemy, odwołuj się do fragmentów tekstu, standardów lub własnego doświadczenia. Unikaj ogólnych opinii typu „to jest dobre” lub „to jest złe” bez uzasadnienia.

- **Proponuj poprawki** – najlepiej w formie PR lub konkretnego fragmentu tekstu z propozycją zmiany. Jeśli nie masz pewności, jak sformułować poprawkę, zaproponuj kierunek zmiany i poproś o pomoc.

- **Nie wklejaj surowych odpowiedzi z AI** - jeśli korzystasz z AI do przygotowania odpowiedzi lub analizy:
  - zawsze przeredaguj treść, dostosowując ją do kontekstu dyskusji,
  - zweryfikuj fakty i standardy, zanim je przytoczysz,
- **dodaj coś od siebie** — własną opinię, przykład z praktyki, wątpliwość lub doświadczenie. Sama wygenerowana odpowiedź bez Twojego wkładu nie wnosi wartości i utrudnia konstruktywną dyskusję,
- jeśli cytujesz AI, wyraźnie to zaznacz (np. „Po konsultacji z AI i przeanalizowaniu...” lub „AI podpowiedziało mi następujące źródło, ale...”).

- **Buduj na odpowiedziach innych** – jeśli zgadzasz się z czyjąś opinią, rozwiń ją, dodaj własny przykład lub uzupełnij o dodatkowy kontekst. Samo „zgadzam się” nie wnosi nowej wartości.

- **Zadawaj pytania** – jeśli czegoś nie rozumiesz, pytaj. Prawdopodobnie inni też mają tę samą wątpliwość, a odpowiedź pomoże wielu osobom.

### Czego unikać w komentarzach

| Czego unikać | Dlaczego |
|--------------|----------|
| **Wklejania całych odpowiedzi z AI bez redakcji** | Obniża jakość dyskusji, wprowadza ogólniki, które nie odpowiadają na konkretny kontekst, i zniechęca innych do udziału. |
| **Komentarzy wyłącznie aprobujących** („+1”, „zgadzam się”) | Nie wnoszą wartości. Jeśli się zgadzasz, wyjaśnij dlaczego lub dodaj własną perspektywę. |
| **Powtarzania oczywistości** | „Dostępność jest ważna” – to nie wnosi nic nowego do dyskusji. |
| **Odpowiadania bez przeczytania całego wątku** | Prowadzi do powtarzania argumentów i chaosu w dyskusji. |
| **Używania języka emocjonalnego lub osobistych ataków** | Dyskusja ma być merytoryczna i oparta na faktach, nie na emocjach. |
| **Kolokwializmów, skrótów myślowych i nieprofesjonalnego tonu** | Komentarze są częścią oficjalnej dokumentacji i mogą być czytane przez urzędników, ekspertów oraz osoby spoza branży. Używaj pełnych zdań, poprawnej polszczyzny i neutralnego, technicznego języka. Unikaj: „hej”, „siema”, „super”, „ogarnąć”, „załatwić”, „działa”, „nie ogarniam”, „spoko”, „okej”, „luz”, „git”, „mega”, itp. oraz nadużywania emotikon (🙂, 👍). Forma wypowiedzi świadczy o szacunku do odbiorców i profesjonalizmie całego przedsięwzięcia. |

### Przykład dobrego komentarza

> W sekcji 2.3. proponuję dodać przykład z urzędu miasta X, gdzie wprowadzono napisy rozszerzone na wszystkich nagraniach z sesji rady miasta. Moim zdaniem to dobrze ilustruje rekomendację, ponieważ pokazuje, że nawet mniejsze instytucje mogą to wdrożyć. Sprawdziłem w BIP tego urzędu i faktycznie od 2024 roku wszystkie nagrania mają napisy. Czy ktoś ma kontakt do osoby odpowiedzialnej, żeby zapytać o szczegóły techniczne?

### Przykład złego komentarza (do unikania)

> (wklejony surowy output z AI bez żadnych zmian ani własnego wkładu)
> 
> „Zgodnie z WCAG 2.1, kryterium 1.2.2 wymaga, aby dla wszystkich nagrań wideo zsynchronizowanych z dźwiękiem zapewnić napisy rozszerzone...”

*Dlaczego to zły komentarz?* – Nie wnosi nic nowego, nie odnosi się do konkretnego kontekstu dyskusji, brak własnego doświadczenia lub refleksji. Każdy z uczestników może samodzielnie skopiować ten sam fragment z WCAG.

### Co zrobić, jeśli chcesz pomóc, ale nie znasz odpowiedzi?

- **Zaproponuj źródło** – jeśli nie znasz odpowiedzi, ale wiesz, gdzie można jej szukać, podziel się linkiem do dokumentacji, standardu lub artykułu.
- **Zadaj doprecyzowujące pytanie** – pomóż innym lepiej zrozumieć problem, zadając pytania, które zawężą temat.
- **Poproś o wyjaśnienie** – jeśli nie rozumiesz zagadnienia, napisz o tym. Często samo sformułowanie pytania pomaga innym lepiej wyjaśnić temat.
- **Odczekaj** – jeśli nie masz nic wartościowego do dodania, lepiej zaczekać na wypowiedź kogoś, kto ma wiedzę lub doświadczenie w danym obszarze.

### Dlaczego to takie ważne?

Repozytorium ma być miejscem wymiany **rzetelnej wiedzy** i **praktycznych doświadczeń**, a nie miejscem odpowiedzi wygenerowanych przez AI. Twoja unikalna perspektywa, znajomość polskiego sektora publicznego i codzienna praktyka są tym, co wyróżnia tę społeczność. Wartość dodana pochodzi od ludzi, nie od algorytmów.
