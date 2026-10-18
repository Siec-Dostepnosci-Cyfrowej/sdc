# Prosty język — documentation/docs/komunikacja/kontrola-dostepnosci-przed-publikacja/procedura-kontroli-dostepnosci-przed-publikacja.md

- **ID:** `b770c3a9-950c-4cae-84b6-29fb77ab347b`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/komunikacja/kontrola-dostepnosci-przed-publikacja/procedura-kontroli-dostepnosci-przed-publikacja.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 30:jest dostosowany, 43:są wykrywane, 47:jest wykonywana, 47:jest dokumentowany, 47:jest stosowany
- skróty bez rozwinięcia: CMS@30, ETSI@62, ICT@62, TR@63, WAI@64, SDC@73, NIE@75

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 26`: Podmiot publiczny ustanawia kontrolę dostępności jako stały punkt procesu publikacji treści cyfrowych i określa sposób jej wykonania, odpowiedzialność uczestników procesu, sposób dokumentowania wyniku oraz zasady postępowania z materiałem, w którym stwierdzono bariery dostępności.
- `linia 30`: Kontrola obejmuje treści cyfrowe przygotowywane, zatwierdzane lub publikowane przez podmiot publiczny, w szczególności strony i aktualności publikowane w systemach CMS, dokumenty i inne pliki udostępniane do pobrania, załączniki publikowane w Biuletynie Informacji Publicznej, formularze i komunikaty transakcyjne, newslettery, grafiki i infografiki, materiały audio i wideo, treści publikowane w mediach społecznościowych oraz treści w systemach wewnętrznych, jeżeli podlegają wymaganiom dostępności cyfrowej.
- `linia 33`: Dla materiałów o większym znaczeniu, złożonych technicznie lub służących realizacji istotnych zadań użytkownika zaleca się, aby kontrolę wykonywała inna osoba niż autor materiału albo osoba posiadająca odpowiednie kompetencje w zakresie dostępności.
- `linia 38`: Podmiot publiczny wykorzystuje wyniki kontroli do poprawy szablonów, materiałów pomocniczych, organizacji pracy i kompetencji osób uczestniczących w publikacji, jeżeli analiza wyników wskazuje na powtarzające się błędy lub ryzyka.

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
