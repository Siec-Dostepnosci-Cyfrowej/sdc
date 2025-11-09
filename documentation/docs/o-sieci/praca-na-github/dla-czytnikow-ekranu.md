---
title: Obsługa z użyciem czytnika ekranu
id: dla-czytnikow-ekranu
sidebar_label: Obsługa z czytnikiem ekranu
sidebar_position: 8 
data_zgloszenia: 25 października 2025 r.
ostatnia_aktualizacja: 25 października 2025 r.
opracowanie: Jacek Zadrożny
---

## Warunki wstępne

Ten poradnik jest przeznaczony dla osób korzystających z czytników ekranu. Pomoże opanować pracę w Github przez stronę internetową oraz z aplikacją Github Desktop.

Zanim zaczniesz pracę, musisz:

1. Założyć konto na platformie Github. Tu znajdziesz [poradnik na ten temat](utworz-konto-na-githubie)
2. Zainstalować Github Desktop. Tu [instrukcja instalacji](zainstaluj-github-destkop)
3. Zalogować się w Github Desktop za pomocą swojego konta Github.

## Stworzenie własnego forka

Fork to Twoja własna kopia głównego repozytorium. Możesz w nim robić dowolne eksperymenty, bez wpływu na główne repozytorium.

:::note
Tworzenie forka to jest czynność jednorazowa. Jeżeli go nie usuniesz lub nie uszkodzisz w inny sposób, nie trzeba tej procedury powtarzać.
:::

Po zalogowaniu wejdź na stronę repozytorium: https://github.com/Siec-Dostepnosci-Cyfrowej/sdc

1. Przejdź do głównego obszaru klawiszem <kbd>d</kbd>. (NVDA).
2. Kliknij na link <q lang="en">Fork</q>.
3. W otwartym formularzu zostaw wszystko domyślnie. Nazwa użytkownika to Twoja nazwa na Github. Nazwa repozytorium jest kopią forkowanego repozytorium.
4. Kliknij na przycisk <q lang="en">Create fork</q>.
5. Zostaniesz automatycznie przeniesiony na stronę swojego forka, na przykład [https://github.com/JacZad/sdc](https://github.com/JacZad/sdc)

I to już koniec forkowania, czyli rozwidlenia repozytorium.

## Praca z Github Desktop

1. Uruchom aplikację Github Desktop.
2. Sklonuj swój fork za pomocą menu <q lang="en">file->Clone repository</q> lub za pomocą skrótu klawiszowego <kbd>Ctrl+Shift+o</kbd>.
3. W otwartym oknie cofnij się <kbd>Shift+Tab</kbd> do zakładek i wybierz zakładkę 3. Automatycznie przeniesiesz się do pola edycyjnego, gdzie wklej adres swojego forka. Wygląda z grubsza tak:  [https://github.com/JacZad/sdc](https://github.com/JacZad/sdc)
4. Klawiszem Tab przejdź do pola <q lang="en">Local path</q> i nie zmieniaj tam niczego, chyba że potrzebujesz innej ścieżki dla repozytorium.
5. Przejdź do przycisku <q lang="en">Clone</q> i naciśnij go.
6. Repozytorium jest już sklonowane i pojawi się okno, jak chcesz go używać. Domyślna opcja <q lang="en">To contribute to the parent project</q> jest prawidłowa. Oznacza, że będzie można dodawać elementy do głównego repozytorium, a nie tylko do Twojego rozwidlenia.
7. Kliknij przycisk <q lang="en">Continue</q> i to już koniec.

W głównym oknie masz informację, jakie jest aktualne repozytorium i jaki branch, czyli odgałęzienie.

:::tip Przydatne skróty klawiszowe w Github Desktop
- <kbd>Ctrl+Shift+f</kbd> - przejście do folderu z plikami na dysku
- <kbd>Ctrl+Shift+a</kbd> - otwarcie zewnętrznego edytora, na przykład Visual Studio Code
- <kbd>Ctrl+Shift+g</kbd> - przejście do repozytorium na stronie internetowej
- <kbd>Ctrl+p</kbd> - wypchnięcie na serwer
- <kbd>Ctrl+Shift+p</kbd> - pobranie aktualnej wersji z serwera
:::

