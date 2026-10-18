# Prosty język — documentation/docs/cykltik/archiwizacja-i-wycofywanie-zasobow-cyfrowych/archiwizacja-i-wycofywanie-zasobow-cyfrowych.md

- **ID:** `96007806-3026-4ab2-a952-9bcbed72d2a6`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/archiwizacja-i-wycofywanie-zasobow-cyfrowych/archiwizacja-i-wycofywanie-zasobow-cyfrowych.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 18:są powiązane, 20:jest archiwizowany, 24:są opisane, 54:mogą być dostosowane, 144:jest powiązane, 152:powinny być planowane
- skróty bez rozwinięcia: SDC@41, TIK@41, BIP@80, RODO@95, UE@95, EZD@114, JRWA@118

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 18`: Celem zalecenia jest uporządkowanie zasad zapewniania dostępności cyfrowej zasobów, które utraciły aktualność, wymagają migracji, powinny pozostać dostępne jako zasoby archiwalne, mają zostać wycofane z publikacji albo są powiązane z wycofywanym systemem teleinformatycznym.
- `linia 41`: Powiązać zasady postępowania z zasobami archiwalnymi, migrowanymi i wycofywanymi z innymi zaleceniami SDC dotyczącymi załączników, treści od innych podmiotów, multimediów, deklaracji dostępności i cyklu życia TIK.
- `linia 46`: Tymczasem zasoby archiwalne, historyczne, migrowane albo wycofywane nadal mogą być publicznie dostępne, potrzebne do załatwienia sprawy, istotne dla informacji publicznej albo wykorzystywane jako dokumentacja działań podmiotu.
- `linia 48`: Usunięcie linku, ukrycie strony, przeniesienie pliku do innego katalogu albo wyłączenie systemu może ograniczyć użytkownikowi dostęp do informacji, nawet jeżeli zasób nadal istnieje w zapleczu technicznym lub dokumentacyjnym.

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
