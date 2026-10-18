# Prosty język — documentation/docs/cykltik/inwentaryzacja/rejestr-zasobow-cyfrowych.md

- **ID:** `92f0370e-5b18-4d19-9202-b64375132c5f`
- **Waga:** Krytyczne — błąd infrastruktury zgłaszany fałszywie jako sukces
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/cykltik/inwentaryzacja/rejestr-zasobow-cyfrowych.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 58:jest uzasadniona, 60:jest udostępniany, 76:jest ujmowany, 134:była ograniczona, 142:jest wymagana, 148:jest powiązany, 229:są zidentyfikowane, 231:są powiązane, 232:jest określona, 233:jest wskazany
- skróty bez rozwinięcia: AA@96, CMDB@248, GRC@248, UE@274, EAA@275, ICT@278, TIK@292, TR@302, WAI@303

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 22`: Organizacja prowadzi i utrzymuje systematyczną inwentaryzację zasobów cyfrowych, która zapewnia aktualną wiedzę o zasobach, odpowiedzialności za nie, mających zastosowanie wymaganiach oraz znanym stanie ich dostępności cyfrowej.
- `linia 32`: Na potrzeby inwentaryzacji zasobem cyfrowym jest rozwiązanie cyfrowe, za którego utworzenie, zakup, utrzymanie, rozwój, publikację lub udostępnianie organizacja odpowiada w całości albo w części lub na które ma realny wpływ.
- `linia 78`: Przegląd kompletności obejmuje co najmniej porównanie rejestru z aktualną wiedzą komórek organizacyjnych, rejestrami technicznymi, umowami, domenami, wykazami usług oraz zasobami publikowanymi na stronach internetowych i w aplikacjach.
- `linia 96`: Jeżeli wymagania wynikają z WCAG, organizacja wskazuje właściwą wersję i poziom zgodności, na przykład WCAG 2.1 AA albo WCAG 2.2 AA, jeżeli taki poziom ma zastosowanie.

Frazy i wypełniacze (reguła 7):

- `linia 56`: „w ramach” x1

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
