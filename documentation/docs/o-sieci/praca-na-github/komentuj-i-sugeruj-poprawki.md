---
id: komentuj-i-sugeruj-poprawki
title: Komentuj i sugeruj poprawki
description: Poradnik objaśnia krok po kroku, jak komentować i proponować poprawki. 
sidebar_position: 8
sidebar_label: Komentuj i sugeruj poprawki
opracowanie: Stefan Wajda
data_zgloszenia: 19 października 2025 r.
data_aktualizacji: 19 października 2025 r.
---

## Proces oceny zgłoszonych projektów 
Zgłoszone przez uczestniczki i uczestników Sieci propozycje zaleceń i rozwiązań oraz opisy praktyk do katalogu dobrych praktyk podlegają ocenie całej Sieci, która ma prawo zdecydować, które ze zgłoszonych propozycji i w jakim ostatecznie kształcie znajdą się w dokumencie końcowym Sieci.

Proces uzyskiwania akceptacji złożony jest z kilku etapów:

1. **Ocena członków zespołu roboczego**. Najpierw zgłoszone propozycje poddawane są ocenie tego zespołu
   roboczego, w którym uczestniczy osoba zgłaszająca albo zespołu, który zajmuje się wymiarem dostępności, którego dotyczy zgłoszenie.<br/>
   Członkowie zespołu i inni uczestnicy Sieci zapoznają się ze zgłoszoną propozycją, analizują ją i komentują. W komentarzach przedstawiają swoje wątpliwości, wskazują na walory i braki propozycji, sugerują uzupełnienia i poprawki.
2. **Ocena zespołu roboczego**. Autor zgłoszonej propozycji na podstawie dyskusji, w której również
   uczestniczy, ustala treść projektu, którą przedstawia do dyskusji podczas spotkania zespołu, a zespół decyduje na spotkaniu, czy chce skierować zgłoszoną propozycję pod rozwagę całej Sieci. Jeśli zespół uzna, że nie będzie rekomendować zgłoszonej propozycji, autor może zdecydować, że przedstawi ją pod rozwagę całej Sieci bez rekomendacji Zespołu.
3. **Pierwsza dyskusja podczas spotkania Sieci**. Przygotowane i przedyskutowane w zespołach propozycje  
   są publikowane na stronie Sieci (scalane z główną gałęzią repozytorium) i przedstawiane do dyskusji podczas spotkania całej Sieci. Dyskusja rozpoczyna etap <q>dojrzewania projektu</q>. W tym czasie wszyscy uczestnicy Sieci mogą zgłaszać swoje komentarze i propozycje poprawek. Prezydium Sieci wyznacza dodatkowo dwóch recenzentów projektu:
   - recenzenta ze swojego grona lub grona ekspertów Sieci oraz 
   - lidera zespołu roboczego lub - w porozumieniu z liderem zespołu roboczego - inną osobę z zespołu roboczego.
   <br/>Etap <q>dojrzewania projektu</q> trwa co najmniej jeden miesiąc. Uzgodnione poprawki są scalane z główną gałęzią repozytorium Sieci. 
4. **Ocena całej Sieci**. Nad <q>dojrzałym projektem</q> dyskusję (drugie czytanie) przeprowadza się na spotkaniu Sieci. Uczestnicy Sieci wysłuchują wystąpienia autora oraz co najmniej jednego koreferenta i podejmują decyzję o włączeniu projektu do dokumentu końcowego lub odrzuceniu.

## Jak dodawać swoje komentarze i propozycje poprawek do zgłoszonych propozycji

### Sposób 1. Użyj funkcji *<em lang="en">Issues</em>* (Problemy)

To bardzo prosty sposób. Zgłoś swój komentarz lub propozycje poprawek jako problem, używając funkcji **<em lang="en">Issues</em>**.  

#### Zgłoszenie nowego problemu
1. Przejdź do repozytorium projektu Sieci i wybierz kartę **<em lang="en">Issues</em>** (Problemy).
2. Wybierz przycisk **<em lang="en">New Issue</em>** (Nowy problem)
3. Wybierz szablon zgłoszenia
4. Wpisz w formularzu tytuł zgłoszenia. 
5. Wpisz treść zgłoszenia. 
6. Wybierz przycisk **<em lang="en">Create</em>** (Problemy).

#### Komentarz do zgłoszonego problemu
1. Przejdź do repozytorium projektu Sieci i wybierz kartę **<em lang="en">Issues</em>** (Problemy).
2. Wybierz z listy problem, do którego chcesz zgłosić komentarz.
3. W formularzu **<em lang="en">Add a Comment</em>** (Dodaj komentarz) umieść swój komentarz. Możesz:
   - posłużyć się znacznikami [Markdown](../poradniki/poradnik-do-markdown)
   - odnieść się do wypowiedzi dowolnego przedmówcy lub przedmówców: wpisz nazwę użytkownika poprzedzając ją znakiem; @
   - zacytować fragment wypowiedzi poprzednika albo fragment dokumentu, do którego chcesz się odnieść: skopiuj fragment, który chcesz zacytować, umieść na początku wiersza znak &gt; i spację, po czym wklej fragment, który chcesz oznaczyć jako cytat
   - zilustrować swój komentarz grafiką,  np. zrzutem ekranu: 

Prostota tego sposobu jest i ogromnym walorem, ale ma też swoją cenę. Żeby odnosić się do konretnego dokumentu, trzeba go otworzyć w nowym oknie, by w jednym oknie czytać i ewentualnie kopiować fragmenty, do których chcemy się odnieść, a w drugim wklejać skopiowane fragmenty i wpisywac swoje uwagi. 

W efekcie autorom również trudniej jest korzystać z uwag i sugestii komentujących.

Dlatego zalecamy i zachęcamy **sposób 2**.

### Sposób 2. Edytuj dokument
To nieco trudniejsza, ale o wiele bardziej efektywna metoda. Umożliwia komentowanie i zgłaszanie poprawek bezpośrednio w projekcie dokumentu, a cała dyskusja jest widoczna i zapamiętywana w historii **<em lang="en">pull requesta</em>**.

1. Przejdź do repozytorium Sieci i wybierz kartę **<em lang="en">Pull requests</em>** (Żądania scalenia).
2. Wybierz z listy projekt, do którego chcesz się odnieść. <br /><br />
   ![Lista żądań scalenia](./img/komentuj-lista-projektow.png)
3. Na stronie projektu wybierz łącze **<em lang="en">Files changed</em>** (Zmienione pliki)<br /><br />
   ![Lista żądań scalenia](./img/komentuj-wybierz-lacze-zmienione-pliki.png)
4. Wybierz w obszarze treści dokumentu fragment, do którego chcesz się odnieść:
   - **użytkownicy myszy**: 
     - zaznacz numer wiersza z fragmentem, którego chcesz zrecenzować (1), 
     - naciśnij <kbd>Shift</kbd> (2), 
     - przesuń wskaźnik myszy do miejsca, które chcesz wybrać (3), 
     - naciśnij przycisk **plus**, aby wywołać edytor (4), <br /><br />
   ![Lista żądań scalenia](./img/komentuj-wybierz-fragment-mysza.png)
   - **użytkownicy klawiatury**: 
     - przejdź do numeru wierszaz fragmentem, którego chcesz zrecenzować (1),
     - przenieś się <kbd>strzałką w prawo</kbd> na tekst wiersza (2), 
     - naciśnij klawisz <kbd>Shift</kbd>> i <kbd>strzałką w dół</kbd> wybierz wiersze, które chcesz skomentować (3), 
     - naciśnij <kbd>Enter</kbd>, aby wywołać edytor (4): <br /><br />
   ![Lista żądań scalenia](./img/komentuj-wybierz-fragment-klawiatura.png)
5. Możesz **skomentować** wybrany fragment lub zgłosić sugestię modyfikacji:
   - aby skomentować, wpisz treść komentarza w polu edytora: <br /><br />
    ![Miejsce na komentarz w edytorze](./img/komentuj-dodaj-komentarz.png)
   - aby zgłosić sugestię poprawki, wybierz przycisk **<em lang="en">Add a sugestion</em>** (Dodaj sugestie)<br /><br />
    ![Przycisk Dodaj sugestię](./img/komentuj-dodaj-sugestie.png)<br /><br />
    Do edytora zostanie skopiowany wybrany fragment: <br/><br />
    ![Kopia wybranego fragmentu](./img/komentuj-dodaj-sugestie-cytat.png)<br /><br />
    Popraw skopiowanny fragment<br /><br />
    ![Sugestia zmienionego zapisu](./img/komentuj-dodaj-sugestie-sugestia.png)
6. Wybierz przycisk **<em lang="en">Start a review</em>** (Rozpocznij recenzję)<br /><br />
    ![Przycisk Rozpocznij recenzję](./img/komentuj-dodaj-sugestie-start-review.png)<br /><br />
    Pojawi się podgląd wprowadzonych zmian i miejscem na komentarz kolejnego recenzenta<br /><br />
    ![Podgląd różnic](./img/komentuj-dodaj-sugestie-roznice.png)<br /><br />
7. Po wprowadzeniu wszytskich komentarzy i propozycji poprawek wybierz z paska narzędzi polecenie **<em lang="en">Submit review</em>** (Wyślij recenzję).<br /><br />
    ![Przycisk Wyślij recenzję](./img/komentuj-submit-review.png)




