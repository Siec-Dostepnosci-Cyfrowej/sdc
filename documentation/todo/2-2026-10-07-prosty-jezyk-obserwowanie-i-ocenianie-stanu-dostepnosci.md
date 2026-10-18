# Prosty język — documentation/docs/cykltik/obserwowanie-i-ocenianie-dostepnosci-i-zgodnosci/obserwowanie-i-ocenianie-stanu-dostepnosci-i-zgodnosci-rozwiazan-cyfrowych.md

- **ID:** `4035d71a-99dd-4ea0-be92-60a7cee37574`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/obserwowanie-i-ocenianie-dostepnosci-i-zgodnosci/obserwowanie-i-ocenianie-stanu-dostepnosci-i-zgodnosci-rozwiazan-cyfrowych.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 82:zostały rozpoznane, 102:są przetwarzane, 104:może być wykorzystywana
- skróty bez rozwinięcia: PN@118, ETSI@118, ICT@118, EM@119, TR@119

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 26`: Informacje uzyskiwane podczas bieżącej działalności oraz ocen planowych i doraźnych organizacja przetwarza, dokumentuje i wykorzystuje do podejmowania decyzji i działań służących zapewnianiu dostępności cyfrowej, aktualizowania wiedzy o stanie rozwiązań oraz planowania dalszych ocen.
- `linia 42`: Wiedzę wykorzystuje w szczególności do identyfikowania i usuwania problemów dostępności, planowania działań naprawczych i doskonalących, oceny zmian, obsługi zgłoszeń użytkowników, odbioru i utrzymania rozwiązań cyfrowych oraz przeglądu i aktualizacji deklaracji dostępności.
- `linia 55`: Organizacja ocenia zakres, aktualność i wiarygodność otrzymanych informacji i materiałów dowodowych oraz wykorzystuje je do aktualizowania rejestru stanu dostępności i zgodności i ustalania potrzeb dalszego oceniania.
- `linia 82`: Organizacja analizuje zakres rozpoznania stanu w celu ustalenia, jakie wymagania i części rozwiązania zostały rozpoznane, gdzie występują luki w wiedzy oraz które informacje wymagają aktualizacji lub weryfikacji.

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
