---
id: wprowadzenie-do-git-i-github
title: Wprowadzenie do Git i Github  
sidebar_label: Wprowadzenie do Git i Github 
sidebar_position: 0 

data_zgloszenia: 18 października 2025 r.
ostatnia_aktualizacja: 18 października 2025 r.
opracowanie: Stefan Wajda
---

**Git** i **Github** to niezwykłe narzedzia programistów do pracy nad projektami. Służą głównie do pracy nad kodem, ale można je wykorzystać do pracy nad dokumentami, które chcemy publikować w Sieci. I jest to równie łatwe, jak na platformie Google Docs czy podobnej, a może nawet łatwiejsze.

**Git** to system kontroli wersji, czyli oprogramowanie, które pozwala programistom śledzić zmiany w kodzie źródłowym. 
Dzieki temu można łatwo zarządzać wieloma różnymi wersjami plików. Ułatwia to znacznie pracę indywidualną, ale przede wszystkim pracę zespołową. Największy walor to możliwość cofania się do wcześniejszych wersji, jeśli zajdzie taka potrzeba.

**Github** to **oparta na Gicie** utrzymywana przez Microsoft **platforma internetowa** do przechowywania i współdzielenia projektów. Przede wszystkim umożliwia dostęp do projektów z każdego miejsca na ziemi (no, prawie z każdego). Oferuje wiele funkcji, takich jak zarządzanie zadaniami, system śledzenia błędów czy **<em lang="en">GitHub Pages</em>** do tworzenia stron internetowych dla projektów.

## Kilka ważnych pojęć

Najgtrudniejsze dla nowicjuszy są pierwsze kroki. Aby było łatwiej, poznaj na początek kilka podstawowych pojęć.

- **Repozytorium** – miejsce przechowywania projektu. Może być lokalne lub zdalne (na GitHubie).
- **Fork** - rozgałęzienie, utworzenie kopii projektu, które może posłużyć do pracy nad macierzystym projektem albo do rozwijania włąsnej, niezaeżnej wersji, wykorzystującej kod projektu. 
- **Clone** - klonowanie, czyli tworzenie kopii repozytorium na lokalnym komputerze
- **Branch** – gałąź, która pozwala na równoległe rozwijanie projektu, co programistom pomaga dodawać i testować nowe funkcje bez wpływu na główną wersję kodu, a nam pomoże inicjować dodanie nowych dokumentów, a następnie dyskutować nad nimi i korygować jeszcze przed publikacją na stronie i później po opublikowaniu.  
- **Commit** – zapisanie zmian w repozytorium. Każdy **<em lang="en">commit</em>** powinien mieć zwięzły opis, co ułatwia śledzenie zmian.
- **Merge** – łączenie zmian z różnych gałęzi, co pozwala na integrację nowego kodu z istniejącym projektem lub poprawek i modyfikacji w finalnych dokumentach.
- **Push** - wysyłanie (wypychanie) lokalnych zmian do zdalnego repozytorium
- **Pull** - pobranie najnowszych zmian ze zdalnego repozytorium
- **Issues** - funkcja wspomagająca organizację i zarządzanie zadaniami w projekcie, która umożliwia zgłaszanie problemów, przypisywanie zadań, śledzenie postępów prac, tagowanie zgłoszeń, komentarze i dyskusje, integrację z **pull requestami**.
- **Pull requesty** - żądania scalenia; sposób na wprowadzanie zmian, dzięki któremu można proponować, a następnie analizować, testować, rozwijać, korygować, przeglądać, komentować i zatwierdzać zmiany w kodzie, a w naszym przypadku w dokumenatach.   

## Krótko o pull requestach

**Pull requesty** to jeden z najważniejszych elementów współpracy w GitHubie. Będziemy z nich korzystać w **trzech celach**:
- aby dodawać swoje projekty zaleceń, rozwiązań systemowych oraz opisy praktyk
- aby komentować i sugerować zmiany w projektach zaleceń oraz opisów rozwiązań i praktyk  
- aby proponować poprawki do opublikowanych dokumentów  

Aby wykorzystać **pull request**:
- **utwórz nową gałąź**: zarówno wtedy, gdy chcesz dodać swój projekt lub dokument do projektu, jak i zaproponować poprawkę do opublikowanego dokumentu
- **wprowadź zmiany**: utwórz w tej gałęzi nowy dokument w odpowiednim katalogu przeznaczonym na projekty albo wprowadź zmiany w istniejącym dokumencie
- **wykonaj commit**: po wprowadzeniu zmian wyślij je do repozytorium (wykonaj *commit*), w oknie wysyłania opisz jasno i zwięźle wprowadzone zmiany
- **wyślij zmiany do Github**: użyj polecenia *push*, aby przesłać swoją gałąź do zdalnego repozytorium na GitHubie
- **utwórz i otwórz pull request**: użyj funkcji tworzenia *pull requesta* w Github Destkop lub na stronie swojego repozytorium na Github, aby utworzyć i otworzyć *pull request* w repozytorium Sieci.
- **rozpatrz zgłaszane komentarze i sugestie**: napraw błędy, jeśli zostaną wykazane w testach automatycznych, odnoś się do każdej zgłoszonej uwagi aż zostanie rozstrzygnięta, rozważ i zdecyduj o losie sugerowanych poprawek.     

Gdy zostaną rozpatrzone wszystkie komentarze i zgłoszone sugestie oraz projekt przejdzie wymagane testy i uzyska wymagane akcepatcje wskazanych osób kierujących pracą, proponowany nowy dokument lub poprawki do istniejącego dokumentu zostaną scalone z główną gałęzią. Po scaleniu usuń swoją gałąź, aby zachować w repozytorium porządek.   

Szczegółowe informacje znajdziesz w poradnikach:

- [Dodaj dokument bezpośrednio do Github](./dodaj-dokument-z-kopii-repo) 
- [Dodaj projekt z Github Destkop](./dodaj-dokument-z-github-destkop)
- [Komentuj i sugeruj poprawki](./komentuj-i-sugeruj-poprawki)