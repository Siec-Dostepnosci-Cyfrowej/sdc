# Prosty język — documentation/docs/wiedza/zarzadzanie-kompetencjami/zarzadzanie-kompetencjami.md

- **ID:** `94f0a122-c0ac-480a-9cc4-64d8b26b3bae`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/wiedza/zarzadzanie-kompetencjami/zarzadzanie-kompetencjami.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 39:jest powiązane, 74:jest powiązany, 84:są wykorzystywane, 85:są utrwalane, 101:są powiązane, 166:są wykorzystywane
- skróty bez rozwinięcia: UE@201, ICT@203, WAI@210, ARRM@210

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Celem zalecenia jest wspieranie podmiotów publicznych w budowaniu zdolności organizacji do systemowego zapewniania dostępności cyfrowej poprzez organizowanie ról, odpowiedzialności, wsparcia kompetencyjnego oraz mechanizmów uczenia się organizacji.
- `linia 44`: Organizacja nie opiera budowania zdolności do działania wyłącznie na szkoleniach lub pozyskiwaniu specjalistów, lecz rozwija kwalifikacje pracowników przede wszystkim poprzez wykonywanie zadań, rozwiązywanie problemów oraz organizowanie wsparcia kompetencyjnego.

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
