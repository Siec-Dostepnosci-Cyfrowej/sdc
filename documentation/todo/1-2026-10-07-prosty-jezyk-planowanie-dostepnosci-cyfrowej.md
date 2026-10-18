# Prosty język — documentation/docs/kultura/planowanie-dostepnosci-cyfrowej/planowanie-dostepnosci-cyfrowej.md

- **ID:** `641aa12b-5c09-40ed-9111-4fc44815a45e`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/kultura/planowanie-dostepnosci-cyfrowej/planowanie-dostepnosci-cyfrowej.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 158:mogą być umiejscawiane, 171:są one, 205:jest ponawiane, 223:są włączane
- skróty bez rozwinięcia: UE@241, ICT@242

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Celem zalecenia jest przeciwdziałanie planowaniu dostępności cyfrowej jako zbioru odrębnych działań, bez rozpoznania potrzebnych zmian sposobu funkcjonowania organizacji i powiązania ich z właściwymi mechanizmami planowania i zarządzania.
- `linia 23`: Wypracowane interwencje włącza do właściwych mechanizmów planowania i zarządzania organizacją, kontroluje przebieg wprowadzanych zmian i osiągane rezultaty oraz wykorzystuje uzyskiwaną wiedzę do korygowania działania i dalszego planowania.
- `linia 31`: Organizacja rozpoczyna planowanie od określenia zdolności potrzebnych do trwałego zapewniania dostępności cyfrowej oraz rozpoznania, jak odpowiadające im działania rzeczywiście funkcjonują w organizacji i jakie rezultaty organizacja osiąga.
- `linia 67`: Organizacja planuje zmiany w sposobie funkcjonowania potrzebne do budowania, utrzymywania i doskonalenia zdolności do trwałego zapewniania dostępności cyfrowej oraz do osiągania i utrzymywania dostępności rozwiązań i treści cyfrowych.

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
