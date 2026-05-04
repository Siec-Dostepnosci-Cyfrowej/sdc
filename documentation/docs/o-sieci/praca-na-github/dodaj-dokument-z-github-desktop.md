---
id: dodaj-dokument-z-github-desktop
title: Dodaj dokument z GitHub Desktop
description: Jak dodać nowy dokument z użyciem GitHub Desktop i zgłosić go do sprawdzenia
sidebar_label: Dodaj dokument z GitHub Desktop
sidebar_position: 10
data_zgloszenia: 18 października 2025 r.
ostatnia_aktualizacja: 3 maja 2026 r.
opracowanie: Stefan Wajda
---

## Cel

Dodasz nowy dokument z użyciem GitHub Desktop i zgłosisz go do sprawdzenia.

## Zanim zaczniesz

Potrzebujesz:

- konta na GitHubie,
- dostępu do repozytorium Sieci,
- zainstalowanego GitHub Desktop,
- edytora tekstu lub kodu.

## Jak wygląda cały proces

Wykonasz sześć czynności:

1. otworzysz repozytorium w GitHub Desktop,
2. utworzysz nową gałąź,
3. dodasz nowy plik w podkatalogu projektu,
4. zapiszesz zmianę,
5. opublikujesz gałąź,
6. utworzysz pull request.

## 1. Otwórz repozytorium

1. Uruchom GitHub Desktop.
2. Wybierz repozytorium Sieci.
3. Upewnij się, że pracujesz na aktualnej wersji.

Jeśli program pokazuje przycisk **Fetch origin** albo **Pull origin**, wybierz go przed rozpoczęciem pracy.

## 2. Utwórz nową gałąź

1. Otwórz listę **Current branch**.
2. Wybierz **New branch**.
3. Wpisz nazwę gałęzi.

Przykład:

```txt
zalecenie-prosty-jezyk
```
4. Wybierz **Create branch**.

Potem:

5. Jeśli GitHub Desktop zapyta, czy chcesz utworzyć fork repozytorium, wybierz: 
**Fork this repository**
6. Następnie wybierz opcję: **To contribute to the parent project** (_Aby wnosić swój wkład do głównego projektu_).

## 3. Otwórz pliki w edytorze

W GitHub Desktop wybierz: **Open in external editor** (_Otwórz w edytorze zewnętrznym_)

Otworzy się katalog z plikami repozytorium.

## 4. Przejdź do katalogu odpowiedniego wymiaru

W edytorze otwórz kolejno:

1. `documentation`
2. `docs`
3. katalog odpowiedniego wymiaru, na przykład `komunikacja`

W katalogu wymiaru utworzysz osobny podkatalog dla swojego projektu.

## 5. Utwórz podkatalog i nowy plik

W edytorze utwórz nowy podkatalog dla swojego projektu.

Nazwa podkatalogu powinna:

- być krótka,
- nie zawierać spacji,
- nie zawierać polskich znaków,
- używać małych liter i łączników.

Przykład:

```txt
stosowanie-prostego-jezyka
```

W tym podkatalogu utwórz nowy plik z rozszerzeniem `.md`.

Najprostsza nazwa pliku to:

```txt
index.md
```

Cała ścieżka do pliku będzie wyglądała tak:

```txt
documentation/docs/komunikacja/stosowanie-prostego-jezyka/index.md
```

Możesz też użyć nazwy pliku zgodnej z tematem projektu, na przykład:


```txt
documentation/docs/komunikacja/stosowanie-prostego-jezyka/zalecenie-prosty-jezyk.md
```

## 6. Wpisz treść dokumentu

Na początku pliku dodaj metadane:

```md
---
id: zalecenie-prosty-jezyk
title: Stosowanie prostego języka w komunikacji organizacji
description: Projekt zalecenia dotyczącego prostego języka.
---
```

Identyfikator (`id`) musi być dokładnie taki sam, jak nazwa pliku bez rozszerzenia `.md`.

Następnie wpisz treść dokumentu:

```md
# Stosowanie prostego języka w komunikacji organizacji

## 1. Cel zalecenia

Celem zalecenia jest...
```

Zapisz plik w edytorze.

## 7. Wróć do GitHub Desktop

GitHub Desktop pokaże zmieniony plik.

Wpisz krótki opis zmiany, na przykład:

```txt
Dodanie projektu zalecenia o prostym języku
```

Wybierz przycisk: **Commit to [nazwa gałęzi]**

## 8. Opublikuj gałąź

Po zapisaniu zmiany wybierz: **Publish branch**

Dzięki temu Twoja gałąź zostanie wysłana na GitHub.

## 9. Utwórz pull request

W GitHub Desktop wybierz: **Create pull request**

Program otworzy stronę GitHub w przeglądarce.

Na stronie GitHub:

- sprawdź tytuł,
- dodaj krótki opis, jeśli chcesz,
- wybierz **Create pull request**.

## 10. Sprawdź testy

Po utworzeniu pull requesta GitHub uruchomi automatyczne testy.

Jeśli wszystko jest poprawne, zobaczysz komunikaty podobne do:

- **All checks have passed** (_Wszystkie testy przeszły_)
- **No conflicts with the base branch**  (_Nie ma konfliktu z główną gałęzią_)

Jeśli pojawią się błędy, nie przejmuj się. 
Najczęściej chodzi o drobny błąd techniczny w pliku. Administrator lub osoba prowadząca repozytorium pomoże je znaleźć i poprawić.

## Gotowe

Twój projekt został zgłoszony.

Administrator repozytorium utworzy w pierwszym komentarzu link **Zobacz podgląd projektu**, dzięki któremu będzie można podejrzeć treść projektu na specjalnie utworzonej stronie internetowej.

Teraz projekt może zostać:

- sprawdzony,
- skomentowany,
- poprawiony,
- zaakceptowany,
- scalony z głównym repozytorium.

## Co może pójść nie tak

**Nie widzę repozytorium w GitHub Desktop**

Sprawdź, czy jesteś zalogowany na właściwe konto GitHub.

**Program pyta o fork**

To normalne. Wybierz Fork this repository.

**Nie widzę zmian w GitHub Desktop**

Upewnij się, że plik został zapisany w edytorze i znajduje się we właściwym katalogu.

**Nie wiem, gdzie utworzyć podkatalog**

Utwórz go w katalogu wymiaru, którego dotyczy projekt, na przykład `komunikacja`.  
Jeśli nie masz pewności, wybierz najbliższy właściwy katalog albo poproś lidera zespołu o wskazanie miejsca.

**Nie wiem, co wpisać w commit**

Wpisz krótko, co zrobiłeś, na przykład:

```txt
Dodanie projektu zalecenia
```

## Wskazówki dla osób korzystających z czytnika ekranu

- W GitHub Desktop kieruj się nazwami przycisków: **Current branch**, **New branch**, **Commit**, **Publish branch**, **Create pull request**.
- Jeśli edytor jest wygodniejszy niż GitHub Desktop, większość pracy wykonuj w edytorze.
- Po zapisaniu pliku wróć do GitHub Desktop, aby wykonać commit i pull request.

:::tip Przydatne skróty klawiszowe w GitHub Desktop
- <kbd>Ctrl+Shift+f</kbd> - przejście do folderu z plikami na dysku
- <kbd>Ctrl+Shift+a</kbd> - otwarcie zewnętrznego edytora, na przykład Visual Studio Code
- <kbd>Ctrl+Shift+g</kbd> - przejście do repozytorium na stronie internetowej
- <kbd>Ctrl+p</kbd> - wypchnięcie na serwer
- <kbd>Ctrl+Shift+p</kbd> - pobranie aktualnej wersji z serwera
:::