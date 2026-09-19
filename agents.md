# Zasady redakcyjne Sieci Dostępności Cyfrowej

Zalążek pliku na potrzeby obszaru „Formatowanie dokumentów” z [Analiza niespójności na poziomie repozytorium #283](https://github.com/Siec-Dostepnosci-Cyfrowej/sdc/issues/283).

Poniżej skrót zasady poziomów nagłówków z [Ujednolicenie struktury nagłówków w dokumentach #310](https://github.com/Siec-Dostepnosci-Cyfrowej/sdc/issues/310). Pełny opis jest w [`CONTRIBUTING.md`](CONTRIBUTING.md).

## Poziomy nagłówków

Zasada dotyczy dokumentów publikowanych w serwisie: zaleceń, kart ról, scenariuszy testów, wzorów, formularzy i bloga. Typ dokumentu może wpływać na nazwy sekcji, ale nie na hierarchię nagłówków. Nie dotyczy plików Markdown używanych tylko na GitHubie (np. `CONTRIBUTING.md`, README, szablony Issue) ani stron TSX.

- Tytuł pochodzi z pola `title` we frontmatterze i jest wyświetlany jako H1 strony. W treści dokumentu nie stosuj `#`.
- W treści używaj `##`, `###` i `####`. Nie używaj `######`.
- `#####` tylko wtedy, gdy naprawdę wynika ze struktury dokumentu, np. przy wiernym odwzorowaniu źródła. Nie używaj nagłówka do wyróżnienia ani jako etykiety listy. W pozostałych przypadkach stosuj listę, pogrubienie albo osobną sekcję.
- Nie pomijaj poziomów nagłówków.
- Numerowanie sekcji jest opcjonalne i zależy od rodzaju dokumentu. Zalecenia i dłuższe opracowania mogą je stosować; pozostałe dokumenty nie muszą. Jeśli numeracja jest stosowana, musi odpowiadać poziomowi, np. `## 7.`, `### 7.2.`, `#### 7.2.1.`.
