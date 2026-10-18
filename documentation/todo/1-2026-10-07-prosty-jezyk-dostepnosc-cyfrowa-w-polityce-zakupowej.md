# Prosty język — documentation/docs/zaopatrzenie/polityka-zakupowa/dostepnosc-cyfrowa-w-polityce-zakupowej.md

- **ID:** `3828fb61-09f7-4b44-8031-e1ca9c600e92`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/zaopatrzenie/polityka-zakupowa/dostepnosc-cyfrowa-w-polityce-zakupowej.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 26:są stosowane, 44:mogą być przyjmowane, 73:powinny być określane, 141:powinny być wykorzystywane, 157:powinny być uwzględniane, 161:są uwzględniane
- skróty bez rozwinięcia: PN@69, ETSI@69, WAI@179, GSA@185, RC@198

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 24`: Organizacje ustanawiają, stosują i doskonalą zasady uwzględniania wymagań dostępności cyfrowej podczas nabywania technologii, produktów, usług i treści cyfrowych oraz rozwiązań zawierających elementy technologii i treści cyfrowych.
- `linia 46`: Przyjęcie wspólnych zasad sprzyja spójności działań, ogranicza ryzyko stosowania różnych standardów przez poszczególne jednostki oraz ułatwia budowanie kompetencji, przygotowywanie wzorów dokumentów i monitorowanie realizacji wymagań dostępności w całej organizacji.
- `linia 73`: W przypadku rozwiązań objętych zakresem normy wymagania dostępności powinny być określane przez odwołanie do odpowiednich postanowień PN-ETSI EN 301 549 lub standardów wskazanych w tej normie, w szczególności WCAG.
- `linia 75`: Jeżeli dla danego rodzaju produktu, usługi lub technologii nie istnieje odpowiedni standard lub norma techniczna określająca wymagania dostępności, rekomenduje się definiowanie wymagań w oparciu o funkcjonalne kryteria efektywności określone w PN-ETSI EN 301 549.

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
