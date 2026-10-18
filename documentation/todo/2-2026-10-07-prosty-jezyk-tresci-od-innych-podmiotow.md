# Prosty język — documentation/docs/komunikacja/tresci-od-innych-podmiotow/tresci-od-innych-podmiotow.md

- **ID:** `05bdccce-e657-4af5-b8b0-716f9fdc7628`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/komunikacja/tresci-od-innych-podmiotow/tresci-od-innych-podmiotow.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 30:został wytworzony, 34:został wytworzony, 35:został sfinansowany, 36:jest uprawniony, 38:jest uwzględniana, 47:jest traktowany, 55:zostały spełnione, 61:został wytworzony, 61:jest uprawniony, 94:mogą być dostosowywane
- skróty bez rozwinięcia: UE@76, ETSI@77, ICT@77, SDC@88

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 22`: Celem zalecenia jest uporządkowanie sposobu postępowania z treściami przekazywanymi do publikacji przez inne podmioty, tak aby ich pochodzenie nie prowadziło do automatycznego uznawania materiału za wyłączony z wymagań dostępności cyfrowej.
- `linia 26`: Podmioty publiczne wdrażają procedurę postępowania z treściami pochodzącymi od innych podmiotów, która pozwala ustalić warunki ich wykorzystania i modyfikacji, obowiązek publikacji oraz sposób postępowania w przypadku braku dostępności cyfrowej.
- `linia 47`: Sam fakt, że materiał pochodzi od innego podmiotu, nie jest traktowany jako wystarczająca podstawa do uznania, że podmiot publiczny nie może go zmodyfikować albo zapewnić jego dostępności cyfrowej.
- `linia 61`: W szczególności konieczne może być ustalenie, czy materiał został wytworzony, sfinansowany lub nabyty przez podmiot publiczny oraz czy podmiot jest uprawniony do dokonania modyfikacji niezbędnej do zapewnienia dostępności cyfrowej.

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
