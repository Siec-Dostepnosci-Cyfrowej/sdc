# Prosty język — documentation/docs/wsparcie/obsluga-zgloszen-problemow-dostepnosci/obsluga-zgloszen-problemow-dostepnosci-cyfrowej-i-dostep-alternatywny.md

- **ID:** `8bcc9eb7-1586-49fe-84b1-2e003e900655`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/wsparcie/obsluga-zgloszen-problemow-dostepnosci/obsluga-zgloszen-problemow-dostepnosci-cyfrowej-i-dostep-alternatywny.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 85:jest analizowane, 122:jest prowadzona, 128:są wykorzystywane, 136:są traktowane
- skróty bez rozwinięcia: UE@156

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Celem zalecenia jest zapewnienie użytkownikom skutecznych mechanizmów zgłaszania problemów związanych z dostępnością cyfrową oraz uzyskiwania pomocy w sytuacjach, gdy napotykają bariery uniemożliwiające lub utrudniające korzystanie z treści, usług lub technologii cyfrowych udostępnianych przez organizację.
- `linia 19`: Zalecenie obejmuje zarówno obsługę zgłoszeń dotyczących problemów dostępności cyfrowej, jak i zapewnianie dostępu alternatywnego w przypadkach, gdy usunięcie bariery nie jest możliwe niezwłocznie. Organizacja powinna mieć na uwadze przede wszystkim usunięcie przyczyny bariery.
- `linia 27`: Jeżeli nie jest to możliwe, w tym samym terminie informuje o przyczynach opóźnienia i wskazuje nowy termin realizacji, nie dłuższy niż 2 miesiące od dnia złożenia żądania,
- `linia 30`: Organizacja wdraża procedurę obsługi zgłoszeń problemów dostępności cyfrowej, żądania zapewnienia dostępności cyfrowej, zapewniania dostępu alternatywnego oraz rozpatrywania skarg związanych z dostępnością, określającą sposób przyjmowania, rejestrowania, rozpatrywania i monitorowania spraw.

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
