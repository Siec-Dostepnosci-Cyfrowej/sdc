# Prosty język — documentation/docs/cykltik/biblioteka-testow-dostepnosci/stosowanie-i-rozwijanie-biblioteki-testow-dostepnosci-cyfrowej.md

- **ID:** `372573bb-6b1c-42bd-9759-0f1f6722ea12`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/biblioteka-testow-dostepnosci/stosowanie-i-rozwijanie-biblioteki-testow-dostepnosci-cyfrowej.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 26:jest rozwijana, 36:mogą być wykorzystywane, 44:są dobierane, 56:są opisywane, 64:są dokumentowane, 66:są interpretowane, 66:zostały wykonane, 74:są opracowywane, 78:są klasyfikowane, 84:są weryfikowane
- skróty bez rozwinięcia: SZDC@114, PN@126, ETSI@126, ICT@126, EM@127, TR@127

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 36`: Scenariusze z Biblioteki mogą być wykorzystywane w różnych procesach systemu zapewniania dostępności cyfrowej, w szczególności podczas ocen planowych i doraźnych, odbiorów rozwiązań cyfrowych, kontroli przed publikacją lub wdrożeniem, testowania po zmianach, rozpoznawania problemów zgłaszanych przez użytkowników oraz weryfikowania skuteczności działań naprawczych.
- `linia 46`: Przy doborze testów uwzględnia się odpowiednio przedmiot badania, mające zastosowanie wymagania dostępności, profil oceny, wcześniejsze obserwacje i wyniki ocen, zmiany rozwiązania, problemy zgłoszone przez użytkowników oraz informacje wymagające uzyskania, uzupełnienia, aktualizacji lub zweryfikowania.
- `linia 56`: Scenariusze są opisywane w sposób umożliwiający ustalenie ich celu, przedmiotu i zakresu, warunków stosowania, sposobu przygotowania i przeprowadzenia badania, zasad ustalania, dokumentowania i interpretowania wyników oraz powiązań z wymaganiami dostępności i innymi scenariuszami.
- `linia 86`: Weryfikacja służy potwierdzeniu, że scenariusz odpowiada rozpoznanej potrzebie badawczej, może zostać prawidłowo wykonany, pozwala uzyskać informacje odpowiadające celowi testu oraz jest zgodny z zasadami i strukturą Biblioteki.

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
