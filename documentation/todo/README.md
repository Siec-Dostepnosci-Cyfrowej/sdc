# TODO — rejestr odroczonych prac

Ten katalog to jedyny backlog prac znalezionych, ale świadomie **niewykonanych**
w bieżącej zmianie (poza zakresem, wymaga decyzji produktowej lub behawioralnej,
wymaga nowych kluczy tłumaczeń, zablokowane przez narzędzie itd.). Zastępuje
dawniejszy pojedynczy plik `TODO.md`.

**Jedna otwarta pozycja = jeden plik.** Poprawka lub nowe spostrzeżenie dotyka
wyłącznie własnego pliku, więc praca równoległa nigdy nie koliduje na wspólnym
dokumencie. **Brak pliku indeksowego jest zamierzony** — listowanie katalogu jest
indeksem. Nie dodawaj takiego pliku; przywróciłby on pojedynczy wspólny cel zapisu.

Sekcja `AGENTS.md` „Odroczone prace — `todo/`" powtarza te zasady w skróconej
formie; **niniejszy plik jest źródłem autorytatywnym**.

## Schemat nazwy pliku

```text
<waga>-<data-zapisu>-<slug>.md
```

- `<waga>` — jedna cyfra, żeby listowanie katalogu (`ls`, w Windows `dir`)
  sortowało od pozycji o najwyższym priorytecie:
  `1` (Krytyczne) · `2` (Istotne) · `3` (Drobne) · `9` nota informacyjna
  (nie jest zadaniem). Cyfry `4`–`8` są zarezerwowane — nie używaj ich.
  Cyfra odpowiada poziomowi słownemu w polu **Waga** (patrz „Legenda wagi").
- `<data-zapisu>` — `YYYY-MM-DD`, data zapisania spostrzeżenia; **musi być taka
  sama jak pole `Zarejestrowano`** w nagłówku pliku.
- `<slug>` — mały, myślnikowy tytuł (bez interpunkcji i backticków), przycięty do
  ~64 znaków. Na tyle opisowy, żeby dało się go znaleźć przez grep.

Listowanie katalogu czyta się wtedy jak posortowaną kolejkę, która nie wymaga
utrzymywania.

## Legenda wagi

Wagi słowne (używane w polu **Waga** nagłówka) odpowiadają cyfrom w nazwie pliku.
Kolejność w listingu to kolejność priorytetów: **`1` > `2` > `3`**.

| Cyfra | Poziom | Kryterium (elastyczne) |
| --- | --- | --- |
| `1` | **Krytyczne** | tekst wymaga **gruntownej redakcji** — czytelnik gubi się, wraca do poprzednich akapitów, nie rozumie kto ma zrobić co |
| `2` | **Istotne** | **pojedyncze miejsca do poprawy** — tekst jest zrozumiały, ale można go wyraźnie uprościć |
| `3` | **Drobne** | **usprawnienia stylu** — tekst poprawny, drobne korekty dla płynności |
| `9` | — | nota informacyjna, zweryfikowana referencja (np. „to nie są osierocone pliki, nie ruszać"). Nie jest zadaniem — nie przypisuj jej wagi zadania. |

Trzy poziomy opisują wpływ na czytelność: **Krytyczne** > **Istotne** > **Drobne**.
Oceniaj jakościowo, nie liczbowo — sztywne progi (np. „ponad 10 długich zdań") nie oddają
rzeczywistej trudności tekstu.

## Nagłówek pliku

Każdy plik zaczyna się tym blokiem, żeby pozycje dało się znaleźć przez grep:

```markdown
# <Tytuł>

- **ID:** `<uuid-v4>`
- **Waga:** <Krytyczne|Istotne|Drobne> — <opis z legendy>
- **Zarejestrowano:** <YYYY-MM-DD> · **Źródło:** <ref do zadania lub commit>
- **Zakres:** <nazwa grupowania albo "ogólne (bez zakresu)">
```

- `ID` to unikalny identyfikator pozycji w formacie UUID v4 (np.
  `3f8a2c1e-4d5b-4a6c-8e9f-0a1b2c3d4e5f`). Generuj przy tworzeniu pliku
  (`uuidgen` na macOS/Linux, PowerShell `New-Guid` na Windows). ID nie zmienia się
  nigdy — nawet gdy zmieni się nazwa pliku, treść czy zakres. Pozwala jednoznacznie
  odwołać się do pozycji w komunikacji, commitach i zewnętrznych narzędziach.
- `Zarejestrowano` to data zapisania pozycji — zgodna z datą w nazwie pliku.
  `Źródło` wskazuje notatkę zadania lub commit, z którego wynika pozycja,
  żeby dało się ją prześledzić po zniknięciu czatu.
- Zachowaj kolejność pól i separatory `·`.
- Dodawaj wiersz `- **Zaktualizowano:** <YYYY-MM-DD> · …`, gdy późniejsza zmiana
  zmienia fakty.
- `Zakres` opisuje genezę znaleziska („znalezione przy okazji …"). Pozycje
  z tego samego zakresu zawierają na dole sekcję `## Kontekst przeglądu` z tym samym
  tłem, dzięki czemu każdy plik jest samowystarczalny bez czytania rodzeństwa.
  Zasady utrzymania tej sekcji: patrz „Cykl życia".

## Część główna — plik musi być samowystarczalny

Ktoś musi móc podjąć pozycję później bez wracania do oryginalnego zadania ani do
czatu. Minimum:

1. **Lokalizacja** — `plik:linia`.
2. **Co jest nie tak** — opis jakościowy problemu (bez sztywnych progów liczbowych):
   które zdania są niezrozumiałe przy pierwszym czytaniu, gdzie czytelnik gubi wątek,
   co utrudnia szybkie przyswojenie treści. Konkretne przykłady z liniami.
3. **Dlaczego nie zostało naprawione teraz** — limit zakresu albo blokada.
4. **Decyzja / potrzebne wejście** — jaki wybór musi podjąć człowiek, zanim poprawka
   wyląduje w kodzie.
5. **Jak zweryfikować** — lista kontrolna do przejścia (np. reguły `GUIDELINES.md`,
   czytanie na głos), niekoniecznie polecenie.

Jedna pozycja do wykonania na plik. Nie pakuj niepowiązanych poprawek; ściśle
powiązane mogą dzielić zakres, ale każdy musi mieć swój plik, żeby dało się go
usunąć niezależnie.

## Cykl życia

- **Dodaj** plik za każdym razem, gdy świadomie odkładasz realne znalezisko.
  Nigdy nie porzucaj znanej usterki po cichu.
- **Usuń** plik w tym samym commicie, który naprawia pozycję. **Nie** oznaczaj jej
  jako „zrobione" i nie zostawiaj pliku w katalogu — ten backlog zawiera wyłącznie
  otwarte prace.
- Pozycja **odrzucona, przestarzała albo nie do zrobienia** też kończy się usunięciem
  pliku, a decyzja wraz z uzasadnieniem trafia w wiadomość commita. Nie zmieniaj
  pola statusu na „zamknięte" zamiast usunąć pliku — tu nie ma statusów.
- **Edytuj** tylko plik zmienianej pozycji. Gdy zmiana przebudowuje kontekst całego
  zakresu, zaktualizuj `## Kontekst przeglądu` **we wszystkich plikach** tego zakresu:
  blok ma być identyczny we wszystkich kopiach i krótki (kilka wierszy), żeby
  duplikacja nie zdążyła się rozejść. Rodzeństwa zakresu szukaj przez grep pola
  `Zakres` — poza tym w katalogu nie ma żadnego łączenia między plikami.

## Czego nie robić

- Nie tworzymy ani nie utrzymujemy pliku `INDEX.md` ani żadnej listy zbiorczej.
- Nie używaj tego katalogu jako dokumentu projektowego ani notatnika. Zakończone
  lub porzucone pomysły trafiają w wiadomość commita albo do notatki roboczej
  poza repo, nie tutaj. Jedyny wyjątek to `## Kontekst przeglądu` — to jedyna treść
  współdzielona, jaka tu wolno.
- Nie nadawaj numerów plikom kodującym kolejność poza `<waga>-<data>`; ręczne
  sortowanie to powód, dla którego dawny wspólny plik był konfliktogenny.
