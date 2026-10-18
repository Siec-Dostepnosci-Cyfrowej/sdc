# Prosty język — documentation/docs/cykltik/systemowe-rozwiazywanie-problemow-dostepnosci-cyfrowej/systemowe-rozwiazywanie-problemow.md

- **ID:** `3644c5d0-ac85-44d6-868e-94c803ee9cd5`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/systemowe-rozwiazywanie-problemow-dostepnosci-cyfrowej/systemowe-rozwiazywanie-problemow.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 27:jest traktowany, 56:są rejestrowane, 57:są traktowane, 58:są uwzględniane, 74:są realizowane, 88:są traktowane, 119:jest zobowiązany, 169:są identyfikowane
- skróty bez rozwinięcia: SLA@29, PN@177, ETSI@177, ICT@177, EM@182, TR@182

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 21`: "Dług dostępności" to nagromadzone, odłożone na później błędy i niezgodności w dostępności cyfrowej, które wymagają usunięcia w przyszłości, a których odwlekanie zwiększa ryzyko prawne, wizerunkowe oraz koszty utrzymania i rozwoju usług cyfrowych.
- `linia 29`: Organizacja zapewnia ciągłą zdolność realizacji procesu naprawczego poprzez utrzymywanie własnych zasobów technicznych lub precyzyjne zapisy w umowach z podmiotami zewnętrznymi, obejmujące obowiązek usuwania niezgodności w ramach ustalonego SLA (ang.
- `linia 119`: Odpowiedzialność: wykonawca jest zobowiązany do usunięcia niezgodności wykrytych w okresie gwarancji, o ile wynikają one z błędów w kodzie źródłowym lub architekturze informacji dostarczonej przez Wykonawcę.
- `linia 120`: Nadzór nad terminowością: Zamiast sztywnych kar za każdy błąd, stosuje się mechanizm zaostrzenia lub podjęcia dalszych kroków w przypadku braku reakcji wykonawcy na zgłoszenia błędów krytycznych w ustalonym czasie.

Frazy i wypełniacze (reguła 7):

- `linia 17`: „w ramach” x1
- `linia 27`: „w ramach” x1
- `linia 29`: „w ramach” x1
- `linia 173`: „w ramach” x1

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
