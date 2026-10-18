# Prosty język — documentation/docs/zaopatrzenie/zasady-oceny-ofert/definiowanie-i-ocena-wymagan-dostepnosci-cyfrowej-w-ofertach .md

- **ID:** `9245aeda-9449-4d06-8166-77e558f55401`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/zaopatrzenie/zasady-oceny-ofert/definiowanie-i-ocena-wymagan-dostepnosci-cyfrowej-w-ofertach .md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 65:są formułowane
- skróty bez rozwinięcia: AAA@44, RC@119

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Celem zalecenia jest zapewnienie, aby organizacja określała wymagania dostępności cyfrowej dla nabywanych produktów i usług cyfrowych oraz sposób wykazania przez oferentów zdolności do spełnienia tych wymagań.
- `linia 17`: Zalecenie wspiera organizacje w ocenie wiarygodności deklaracji składanych przez oferentów, ograniczaniu ryzyka wyboru wykonawcy niezdolnego do zapewnienia i utrzymania dostępności cyfrowej oraz wzmacnianiu odpowiedzialności wykonawców za zgodność oferowanych rozwiązań z wymaganiami zamawiającego.
- `linia 43`: Organizacja może określić dodatkowe wymagania dostępności cyfrowej wykraczające poza minimalne wymagania określone w EN 301 549, jeżeli jest to uzasadnione potrzebami użytkowników, charakterem nabywanego rozwiązania lub sposobem jego wykorzystania.
- `linia 44`: Dodatkowe wymagania mogą obejmować w szczególności wybrane kryteria sukcesu WCAG na poziomie AAA oraz inne wymagania zwiększające dostępność, użyteczność lub komfort korzystania z rozwiązania przez osoby z niepełnosprawnościami.

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
