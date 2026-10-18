# Prosty język — documentation/docs/zaopatrzenie/oswiadczenie-o-zgodnosci/oswiadczenie-o-zgodnosci-z-wymaganiami-dostepnosci.md

- **ID:** `5b777a1f-866d-4905-8eab-327357974a79`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/zaopatrzenie/oswiadczenie-o-zgodnosci/oswiadczenie-o-zgodnosci-z-wymaganiami-dostepnosci.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 33:jest składane, 54:jest rozwijane, 72:została wykazana, 104:zostało złożone, 122:zostały pozyskane, 124:jest wymagana, 142:może być wykorzystywane
- skróty bez rozwinięcia: WE@136, EWG@148, II@148, III@148, ICT@155

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Celem zalecenia jest zapewnienie, aby oświadczenie dostawcy o zgodności rozwiązania cyfrowego z wymaganiami dostępności było jednoznacznym i możliwym do zweryfikowania twierdzeniem opartym na przeprowadzonej ocenie zgodności i udokumentowanych dowodach.
- `linia 23`: Organizacja wymaga od dostawcy oświadczenia o zgodności rozwiązania cyfrowego z wymaganiami dostępności mającymi zastosowanie do tego rozwiązania, opartego na przeprowadzonej ocenie zgodności i dokumentacji potwierdzającej wyniki tej oceny.
- `linia 64`: Jeżeli do rozwiązania mają zastosowanie również inne wymagania dostępności wynikające z przepisów, warunków zamówienia, umowy lub innych specyfikacji, oświadczenie określa je w zakresie objętym deklarowaną zgodnością.
- `linia 102`: Dostawca składający oświadczenie przyjmuje odpowiedzialność za prawdziwość zawartych w nim twierdzeń oraz zgodność określonego w nim zakresu z wynikami przeprowadzonej oceny i dokumentacją stanowiącą jej podstawę.

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
