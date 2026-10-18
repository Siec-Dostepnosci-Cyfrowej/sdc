# Prosty język — documentation/docs/zaopatrzenie/klauzule-umowne/klauzule-umowne-zalecenie.md

- **ID:** `6392d2a9-e8c0-4e8d-9cf4-4255f4d30038`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/zaopatrzenie/klauzule-umowne/klauzule-umowne-zalecenie.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 65:są określane
- skróty bez rozwinięcia: PN@32, AAA@33, VPAT@36, ACR@36, DOCX@36, ODT@36, JSON@36, LD@36, EARL@36, SWZ@53, CSV@58, EAA@71, UE@79, ICT@80, WAI@81

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 18`: Celem niniejszego zalecenia jest wzmocnienie działań podejmowanych przez podmioty publiczne w zakresie zapewnienia i utrzymania dostępności cyfrowej produktów cyfrowych — w szczególności oprogramowania, stron internetowych i aplikacji mobilnych — poprzez stosowanie w umowach i zamówieniach publicznych odpowiednich klauzul umownych dotyczących dostępności cyfrowej.
- `linia 29`: Zaleca się, aby wszystkie podmioty publiczne, które zlecają tworzenie, zakup, rozwój lub utrzymanie produktów cyfrowych, stosowały w umowach klauzule dotyczące zapewnienia i utrzymania dostępności cyfrowej, w szczególności:

Frazy i wypełniacze (reguła 7):

- `linia 41`: „w ramach” x1
- `linia 55`: „w ramach” x1
- `linia 70`: „w ramach” x1

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
