# Prosty język — documentation/docs/wsparcie/informowanie-o-dostepnosci-i-wsparciu/informowanie-o-dostepnosci-i-sposobach-uzyskania-wsparcia.md

- **ID:** `60d2b7f7-63b1-47a6-b21f-176d7d03101c`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/wsparcie/informowanie-o-dostepnosci-i-wsparciu/informowanie-o-dostepnosci-i-sposobach-uzyskania-wsparcia.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 24:są publikowane, 34:są uporządkowane, 36:może być utrzymywany, 56:są przedstawiane, 56:są one, 87:są publikowane, 97:jest przekazywana, 103:są przekazywane, 121:są uwzględniane, 131:mogą być publikowane
- skróty bez rozwinięcia: ETR@107, PJM@108

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 36`: W tym celu zasadniczy zbiór informacji może być utrzymywany w jednym miejscu, w szczególności w sekcji „Dostępność”, a w innych częściach serwisu, w szczególności w sekcji „Kontakt”, zamieszczane są odpowiednie odsyłacze lub – jeżeli wymaga tego kontekst – niezbędne informacje wraz z odsyłaczem do informacji szczegółowych.
- `linia 64`: Informacje potrzebne do skorzystania z usługi, uzyskania wsparcia, zgłoszenia problemu lub szczególnej potrzeby są dostępne również w odpowiednich częściach serwisu, bez konieczności wyszukiwania ich w deklaracji dostępności.
- `linia 87`: Informacje o dostępności i możliwościach uzyskania wsparcia są publikowane również bezpośrednio przy informacjach o konkretnych usługach i wydarzeniach, jeżeli mogą być potrzebne do skorzystania z nich.
- `linia 97`: Informacja jest przekazywana na tyle wcześnie, aby użytkownik mógł przygotować się do skorzystania z usługi lub udziału w wydarzeniu i, w razie potrzeby, zwrócić się o odpowiednie wsparcie.

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
