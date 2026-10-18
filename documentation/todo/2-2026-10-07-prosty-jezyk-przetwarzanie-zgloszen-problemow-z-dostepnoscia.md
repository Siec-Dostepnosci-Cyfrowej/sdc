# Prosty język — documentation/docs/cykltik/przetwarzanie-zgloszen/przetwarzanie-zgloszen-problemow-z-dostepnoscia.md

- **ID:** `e224bc12-e404-4c32-a699-0e8b71cbe03f`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/przetwarzanie-zgloszen/przetwarzanie-zgloszen-problemow-z-dostepnoscia.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 16:zostały one
- skróty bez rozwinięcia: UE@103, PL@103, TXT@103, CELEX@103, TR@104

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 16`: Celem niniejszego zalecenia jest ustalenie ram postępowania w przypadku zgłoszeń dotyczących problemów z dostępnością cyfrową, w tym ich identyfikacji, rejestracji, analizy oraz dostarczenie wskazówek i rekomendacji dotyczących rozwiązywania tych problemów, niezależnie od tego, czy zostały one zgłoszone przez użytkowników, czy wykryte w ramach monitoringu, przeglądów okresowych, audytów lub testów.
- `linia 22`: Podmioty publiczne zobowiązane są do systematycznego identyfikowania, rejestrowania, analizowania i rozwiązywania problemów z dostępnością cyfrową, zapewniając wprowadzanie poprawek, informowanie o postępach oraz wykorzystanie zebranych danych do planowania działań naprawczych i rozwoju dostępności.
- `linia 36`: Utworzyć rejestr problemów z dostępnością cyfrową, wspólny dla zgłoszeń użytkowników i ustaleń z monitoringu, zawierający m.in.: datę, opis bariery, źródło wykrycia, status, osobę odpowiedzialną i planowany termin rozwiązania.
- `linia 37`: Przekazać obowiązki związane z koordynacją procesu przetwarzania problemów z dostępnością osobie lub podmiotowi odpowiedzialnemu za cyfrową dostępność, która będzie nadzorować obieg informacji aktualizować deklarację dostępności i monitorować realizację działań naprawczych.

Frazy i wypełniacze (reguła 7):

- `linia 16`: „w ramach” x1

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
