# Prosty język — documentation/docs/cykltik/dostep-przy-braku-dostepnosci-cyfrowej/dostep-przy-braku-dostepnosci-cyfrowej.md

- **ID:** `23e7e63d-b0e2-4ba0-8bfa-f717ee8020a4`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/dostep-przy-braku-dostepnosci-cyfrowej/dostep-przy-braku-dostepnosci-cyfrowej.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 18:został pozbawiony, 20:jest stosowany, 105:są gromadzone, 134:jest analizowany, 135:są rozwiązywane, 142:może być interpretowany

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 18`: Celem zalecenia jest określenie sposobu postępowania z treściami, dokumentami, funkcjonalnościami i usługami niespełniającymi wymagań dostępności cyfrowej, tak aby użytkownik nie został pozbawiony dostępu do informacji lub możliwości skorzystania z usługi publicznej wyłącznie z powodu występowania problemów z dostępnością cyfrową.
- `linia 20`: Na potrzeby niniejszego zalecenia przez zapewnienie dostępu rozumie się wszystkie skuteczne działania umożliwiające użytkownikowi uzyskanie tej samej informacji lub skorzystanie z tej samej usługi pomimo występowania problemów z dostępnością cyfrową.
- `linia 26`: Jeżeli organizacja stwierdzi, że treść, dokument, funkcjonalność lub usługa nie spełnia wymagań dostępności cyfrowej, zapewnia użytkownikowi skuteczny sposób uzyskania tej samej informacji lub skorzystania z tej samej usługi oraz podejmuje działania zmierzające do usunięcia problemu.
- `linia 36`: Jeżeli organizacja stwierdzi, że treść, dokument, formularz, usługa, multimedia, grafika, mapa lub inny element objęty wymaganiami dostępności cyfrowej nie spełnia tych wymagań, podejmuje działania zgodnie z następującą kolejnością:

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
