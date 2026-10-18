# Prosty język — documentation/docs/wsparcie/analiza-skutecznosci/analiza-skutecznosci-wsparcia-uzytkownikow.md

- **ID:** `236a1cbe-1734-4f38-838c-cfb9eab457f4`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/wsparcie/analiza-skutecznosci/analiza-skutecznosci-wsparcia-uzytkownikow.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 72:został rozwiązany, 77:są interpretowane

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 122`: Wnioski z analizy służą przede wszystkim doskonaleniu sposobów udzielania pomocy: zmianie form wsparcia, poprawie ich organizacji, przygotowaniu pracowników oraz aktualizacji informacji, instrukcji i materiałów dla użytkowników.

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
