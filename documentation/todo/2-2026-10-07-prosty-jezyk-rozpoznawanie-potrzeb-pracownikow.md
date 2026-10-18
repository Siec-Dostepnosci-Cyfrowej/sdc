# Prosty język — documentation/docs/pracownicy/rozpoznawanie-potrzeb-pracownikow/rozpoznawanie-potrzeb-pracownikow.md

- **ID:** `5b97337f-7b4f-4933-b71e-fc31f57dbfd9`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/pracownicy/rozpoznawanie-potrzeb-pracownikow/rozpoznawanie-potrzeb-pracownikow.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 33:mogą być pozyskiwane, 59:będą wykorzystywane, 73:są rozpoznawane, 77:mogą być postrzegane, 79:są wykorzystywane, 79:są wykorzystywane, 83:są przekazywane, 100:są przekazywane, 113:są wykorzystywane, 127:jest przekazywana
- skróty bez rozwinięcia: ONZ@135, PN@139, ICT@139

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Systemowe rozpoznawanie potrzeb pracowników związanych z dostępnością cyfrową oraz barier napotykanych w cyfrowym środowisku pracy, a także wykorzystywanie uzyskanej wiedzy do ograniczania barier i doskonalenia tego środowiska.
- `linia 83`: Wyniki rozpoznawania i analizowania potrzeb i barier są przekazywane osobom i jednostkom odpowiedzialnym za obszary, których dotyczą, oraz wykorzystywane odpowiednio do planowania i podejmowania działań, w szczególności:
- `linia 121`: Pracownicy mogą radzić sobie z nimi poprzez dodatkowy wysiłek, korzystanie z pomocy innych osób, zmianę sposobu wykonywania zadania albo rezygnację z części możliwości oferowanych przez rozwiązanie.
- `linia 121`: Skutkiem mogą być między innymi zwiększone obciążenie pracą, zależność od pomocy innych osób, ryzyko błędów lub naruszenia poufności oraz ograniczenie możliwości uczestniczenia w szkoleniach, rozwoju zawodowym i innych procesach organizacji.

Frazy i wypełniacze (reguła 7):

- `linia 119`: „istotne jest” x1

## Dlaczego nie zostało naprawione teraz

Sesja obejmowała wyłącznie przegląd wszystkich 44 zaleceń — to przegląd, nie redakcja. Zmiana treści zalecenia ingeruje w jej sens i wymaga decyzji autora wskazanego w polu `opracowanie` w froncie; gotowy tekst musi też przejść zwykły przegląd PR (2 akceptacje).

## Decyzja / potrzebne wejście

- Kto redaguje: autor zalecenia (pole `opracowanie`) czy wskazany redaktor?
- Czy wolno rozbijać zdania, skracać je i zamieniać gęste akapity na listy bez zmiany znaczenia (reguły 1, 2, 9), czy tylko skracać zdania?
- Kolejność prac: najpierw pozycje wagi Krytyczne, potem Istotne?

## Jak zweryfikować

1. Lista kontrolna `GUIDELINES.md` (13 reguł) — przeczytaj poprawiony tekst na głos:
   - Czy każde zdanie jest zrozumiałe przy pierwszym czytaniu?
   - Czy wiesz, kto ma zrobić co w każdym akapicie?
   - Czy po przeczytaniu akapitu potrafisz go streścić jednym zdaniem?
   - Czy usunąłeś frazesy i metatekst („należy zauważyć, że...”)?

## Kontekst przeglądu

Przegląd prostego języka 44 dokumentów o `sidebar_label: Zalecen*`
w `documentation/docs/` (2026-10-07). Ocena jakościowa zgodnie z `GUIDELINES.md` (reguły 1, 2, 3, 7, 8, 9, 12):
czytelność przy pierwszym czytaniu, jednoznaczność podmiotu czynności, długość
zdań i akapitów oceniane subiektywnie, nie progowo. Wagi: Krytyczne = tekst wymaga gruntownej redakcji (czytelnik gubi wątek),
Istotne = pojedyncze miejsca do poprawy (tekst zrozumiały, ale można uprościć). Cytaty i numery linii
pochodzą z przeglądu dokumentów. Zakres obejmował wyłącznie ocenę —
treść redaguje człowiek po decyzji opisanej w sekcji „Decyzja". Każdy z 44
dokumentów ma własny plik, żeby pozycję dało się usunąć niezależnie.
