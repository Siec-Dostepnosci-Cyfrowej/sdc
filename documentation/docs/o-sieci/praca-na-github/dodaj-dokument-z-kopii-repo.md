---
id: dodaj-dokument-z-kopii-repo
title: Dodaj dokument bezpośrednio na GitHubie
description: Jak dodać nowy projekt dokumentu bezpośrednio w przeglądarce.
sidebar_position: 3
sidebar_label: Dodaj dokument na GitHubie

data_zgloszenia: 18 października 2025 r.
ostatnia_aktualizacja: 3 maja 2026 r.
opracowanie: Stefan Wajda
---

## Cel

Dodasz nowy dokument do repozytorium Sieci i zgłosisz go do sprawdzenia.

Ten poradnik opisuje pracę bezpośrednio na stronie GitHub, bez instalowania dodatkowych programów.

## Zanim zaczniesz

Potrzebujesz:

- konta na GitHubie,
- dostępu do repozytorium Sieci,
- kopii repozytorium Sieci na swoim koncie, czyli forka.

Jeśli nie masz jeszcze konta lub dostępu, zacznij od poradnika:

- [Utwórz konto na GitHubie](./utworz-konto-na-githubie)

## Jak wygląda cały proces

Wykonasz pięć czynności:

1. sprawdzisz, czy Twoja kopia repozytorium jest aktualna,
2. utworzysz nową gałąź,
3. dodasz nowy plik w podkatalogu projektu,
4. zapiszesz zmianę,
5. utworzysz pull request.

## Kilka słów przed rozpoczęciem

**Fork** to kopia repozytorium Sieci na Twoim koncie.

**Gałąź** to miejsce pracy nad jedną propozycją.  
Dla każdego nowego projektu utwórz osobną gałąź.

**Commit** to zapisanie zmiany w repozytorium.

**Pull request** to zgłoszenie propozycji do sprawdzenia i przyjęcia.

## 1. Otwórz swoją kopię repozytorium

1. Zaloguj się na GitHubie.
2. Otwórz swoją kopię repozytorium Sieci.
3. Upewnij się, że jesteś w gałęzi `main`.

## 2. Zsynchronizuj swoją kopię

Przed dodaniem dokumentu sprawdź, czy Twoja kopia repozytorium jest aktualna.

1. Znajdź przycisk **Sync fork**.
2. Otwórz go.
3. Jeśli pojawi się przycisk **Update branch**, wybierz go.

Jeśli GitHub pokazuje informację, że gałąź jest aktualna, przejdź dalej.

## 3. Utwórz nową gałąź

1. Przejdź do strony **Branches**.
2. Wybierz przycisk **New branch**.
3. Wpisz nazwę gałęzi.  
   Nazwę zapisz prosto, bez polskich znaków i bez spacji.  
   Najlepiej taką, jak temat zalecenia, na przykład:

```txt
stosowanie-prostego-jezyka
```

4. Wybierz przycisk **Create branch**.
   Od tej chwili pracujesz w nowej gałęzi.

:::tip Pamiętaj

Dla każdego nowego projektu twórz osobną gałąź.
:::

## 4. Przejdź do katalogu odpowiedniego wymiaru

Na liście plików otwórz kolejno:

1. `documentation`
2. `docs`
3. katalog odpowiedniego wymiaru, na przykład `komunikacja`  
   To jest miejsce, w którym dodajesz nowy projekt dokumentu.
   
W katalogu wymiaru utworzysz osobny podkatalog dla swojego projektu.   
   
## 5. Dodaj nowy plik w nowym podkatalogu

GitHub nie tworzy pustych katalogów.  
Nowy podkatalog powstanie dopiero wtedy, gdy utworzysz w nim pierwszy plik.

Działanie składa się z dwóch części:

### 5A. Wpisz nazwę podkatalogu

1. Wybierz przycisk **Add file**.
2. Wybierz opcję **Create new file**.
3. W polu nazwy pliku wpisz nazwę podkatalogu.
4. Po nazwie podkatalogu wpisz ukośnik `/`.

Przykład:

```txt
stosowanie-prostego-jezyka/
```
Po wpisaniu ukośnika GitHub przeniesie kursor do pola nazwy pliku. 

### 5B. Wpisz nazwę pliku

4. Wpisz nazwę pliku, na przykład:

```txt
index.md
```

Cała ścieżka będzie wyglądała tak:

```txt
stosowanie-prostego-jezyka/index.md
```

Nazwa podkatalogu i nazwa pliku powinny:

- być krótkie,
- nie zawierać spacji,
- nie zawierać polskich znaków,
- używać małych liter i łączników.

Plik musi kończyć się rozszerzeniem `.md`.


## 6. Wpisz treść dokumentu

W dużym polu edycji wpisz albo wklej treść dokumentu.

Dokument zapisujemy w formacie Markdown.

Na początku pliku dodaj metadane, na przykład:

```Markdown
---
id: zalecenie-prosty-jezyk
title: Stosowanie prostego języka w komunikacji organizacji
description: Projekt zalecenia dotyczącego prostego języka.
---
```

Identyfikator (`id`) musi być dokładnie taki sam, jak nazwa pliku bez rozszerzenia `.md`.


Potem wpisz treść dokumentu.

Przykład:

```Markdown

# Stosowanie prostego języka w komunikacji organizacji

## 1. Cel zalecenia

Celem zalecenia jest...

```

## 7. Zapisz zmianę

Na GitHubie zapisanie zmiany nazywa się **commit**.

1. Wybierz przycisk **Commit changes**.
2. W oknie zapisu możesz zostawić domyślny tytuł.
3. Upewnij się, że wybrana jest opcja zapisu do Twojej nowej gałęzi.
4. Wybierz przycisk **Commit changes**.

## 8. Utwórz pull request

Po zapisaniu zmiany GitHub zwykle pokaże przycisk **Compare & pull request**.

1. Wybierz **Compare & pull request**.
2. Sprawdź tytuł pull requesta.
3. W opisie możesz krótko napisać, czego dotyczy dokument.
4. Wybierz **Create pull request**.

Pull request został utworzony. Twoja propozycja trafiła do sprawdzenia.

## 9. Sprawdź wynik automatycznych testów

Po utworzeniu pull requesta GitHub uruchomi automatyczne testy.

Jeśli wszystko jest poprawne, zobaczysz komunikaty podobne do:

- **All checks have passed** (_Wszystkie testy przeszły_)
- **No conflicts with the base branch**  (_Nie ma konfliktu z główną gałęzią_)

Jeśli pojawią się błędy, nie przejmuj się. Administrator lub osoba prowadząca repozytorium pomoże je znaleźć i poprawić.


## Gotowe

Twój projekt został zgłoszony.

Administrator repozytorium utworzy w pierwszym komentarzu link **Zobacz podgląd projektu**, dzięki któremu będzie można podejrzeć treść projektu na specjalnie utworzonej stronie internetowej.

Teraz projekt może zostać:

- sprawdzony,
- skomentowany,
- poprawiony,
- zaakceptowany,
- scalony z głównym repozytorium.

Po scaleniu gałąź można usunąć.

## Co może pójść nie tak

**Nie widzę przycisku „Sync fork”**

Upewnij się, że jesteś w swojej kopii repozytorium, a nie w repozytorium głównym Sieci.

**Nie wiem, w którym katalogu dodać dokument**

Wybierz katalog wymiaru, którego dotyczy projekt.
Jeśli nie masz pewności, dodaj dokument w najbliższym właściwym katalogu albo poproś lidera zespołu o wskazanie miejsca.

**GitHub pokazuje błąd w metadanych**

Najczęstsze przyczyny:

- brak dwukropka po nazwie pola,
- brak spacji po dwukropku,
- użycie cudzysłowu w środku opisu bez odpowiedniego zapisu,
- brak drugiego wiersza z trzema myślnikami.

**Testy automatyczne nie przeszły**

Nie oznacza to, że projekt jest zły.
Najczęściej trzeba poprawić drobny błąd techniczny w pliku.

## Wskazówki dla osób korzystających z czytnika ekranu
- Kieruj się nazwami przycisków i pól, a nie ich położeniem na ekranie.
- Najważniejsze elementy to: **Sync fork**, **New branch**, **Add file**, **Create new file**, **Commit changes**, **Compare & pull request**, **Create pull request**.
- Jeśli GitHub otworzy dodatkowe okno lub formularz, przejdź po jego polach klawiszem Tab.
- W razie problemów z odnalezieniem przycisku użyj wyszukiwania na stronie albo listy przycisków dostępnej w czytniku ekranu.