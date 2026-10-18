# Prosty język — documentation/docs/cykltik/przeglad-i-aktualizacja-deklaracji/przeglad-i-aktualizacja-deklaracji-dostepnosci.md

- **ID:** `06e4540b-8091-4010-a8b5-239618363366`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/przeglad-i-aktualizacja-deklaracji/przeglad-i-aktualizacja-deklaracji-dostepnosci.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 26:jest uruchamiany, 36:jest uruchamiany, 45:jest aktualizowana, 53:jest ona
- skróty bez rozwinięcia: UE@130

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 24`: Organizacja utrzymuje wiarygodność deklaracji dostępności przez jej przegląd i aktualizację na podstawie aktualnej i udokumentowanej wiedzy o stanie dostępności i zgodności strony internetowej lub aplikacji mobilnej.
- `linia 26`: Proces jest uruchamiany przez coroczny termin przeglądu albo zmianę mogącą mieć wpływ na dostępność cyfrową i prowadzi do aktualizacji deklaracji lub, w przypadku zmiany rozwiązania, udokumentowanego ustalenia, że aktualizacja nie jest potrzebna.
- `linia 55`: Jeżeli posiadana wiedza jest niewystarczająca lub wymaga aktualizacji, uzupełnienia albo zweryfikowania, organizacja zapewnia przeprowadzenie potrzebnej oceny zgodnie z zasadami obserwowania i oceniania stanu dostępności i zgodności.
- `linia 75`: W przypadku procesu rozpoczętego w związku ze zmianą rozwiązania porównanie może zostać ograniczone do informacji, na które zmiana mogła mieć wpływ, chyba że dokonane ustalenia wskazują na potrzebę rozszerzenia przeglądu.

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
