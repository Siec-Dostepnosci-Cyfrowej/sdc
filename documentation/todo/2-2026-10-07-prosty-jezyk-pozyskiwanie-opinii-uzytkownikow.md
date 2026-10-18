# Prosty język — documentation/docs/wsparcie/pozyskiwanie-opinii/pozyskiwanie-opinii-uzytkownikow.md

- **ID:** `8cc78768-cb17-4dd7-ae9f-74b94a0eb794`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/wsparcie/pozyskiwanie-opinii/pozyskiwanie-opinii-uzytkownikow.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 34:jest zobowiązany, 43:powinny być utrzymywane, 72:powinny być uwzględniane
- skróty bez rozwinięcia: UE@96, WAI@113, PL@115, TXT@115, CELEX@115, CMS@127

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 19`: Celem niniejszego zalecenia jest wzmocnienie działań podmiotów publicznych w zakresie aktywnego pozyskiwania informacji zwrotnych od użytkowników dotyczących dostępności cyfrowej stron internetowych, aplikacji mobilnych oraz publikowanych dokumentów i usług cyfrowych.
- `linia 26`: Podmioty publiczne powinny systematycznie i w sposób zorganizowany pozyskiwać opinie, uwagi i sugestie od użytkowników swoich stron internetowych, aplikacji i dokumentów cyfrowych — zarówno w ramach obowiązków wynikających z przepisów prawa, jak i poprzez polecane działania dobrowolne.
- `linia 34`: Każdy podmiot publiczny jest zobowiązany do zapewnienia użytkownikom możliwości zgłaszania uwag i żądań zapewnienia dostępności cyfrowej, zgodnie z przepisami Ustawy o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.
- `linia 51`: Alert dostępności – niewielki formularz umieszczony na każdej stronie internetowej w witrynie, za pomocą którego użytkownik może zgłosić problem z dostępnością. Formularz powinien umożliwiać zarówno anonimowe zgłoszenie napotkanego problemu, a także formalny wniosek o zapewnienie dostępności cyfrowej. Rekomenduje się, aby przycisk uruchamiający alert był widoczny i dostępny z poziomu klawiatury oraz technologii asystujących.

Frazy i wypełniacze (reguła 7):

- `linia 26`: „w ramach” x1
- `linia 64`: „w ramach” x1

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
