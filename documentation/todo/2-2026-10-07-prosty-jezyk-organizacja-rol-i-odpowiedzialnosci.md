# Prosty język — documentation/docs/kultura/role-i-odpowiedzialnosc/organizacja-rol-i-odpowiedzialnosci.md

- **ID:** `4cb3be08-9068-4bc2-a739-9a7130500082`
- **Waga:** Istotne — osłabiony sygnał, myląca telemetria
- **Zarejestrowano:** 2026-10-07 · Źródło: przegląd prostego języka zaleceń (2026-10-07)
- **Zakres:** przegląd prostego języka w zaleceniach

## Lokalizacja

`documentation/docs/kultura/role-i-odpowiedzialnosc/organizacja-rol-i-odpowiedzialnosci.md`

## Co jest nie tak

- konstrukcje bierne (niejasne, kto wykonuje czynność): 76:jest odzwierciedlana, 76:może być określana, 87:jest powiązany, 107:jest przypisywana
- skróty bez rozwinięcia: RACI@81, UE@117, WAI@126, ARRM@126

Przykłady zdań wymagających uproszczenia (trzeba je przeczytać dwa razy, żeby zrozumieć):

- `linia 17`: Celem zalecenia jest zapewnienie jednoznacznego i spójnego podziału ról i odpowiedzialności za działania służące zapewnianiu dostępności cyfrowej oraz powiązanie tej odpowiedzialności z rzeczywistym sposobem działania organizacji.
- `linia 76`: Ustalona odpowiedzialność za zapewnianie dostępności cyfrowej jest odzwierciedlana w obowiązkach osób pełniących odpowiednie role w zakresie potrzebnym do ich rzeczywistego wykonywania. W zależności od sposobu organizacji pracy odpowiedzialność może być określana w szczególności w zakresach obowiązków lub czynności, opisach stanowisk, regulaminach organizacyjnych, procedurach, kartach ról, upoważnieniach albo innych dokumentach określających zadania i odpowiedzialność. Sposób dokumentowania odpowiedzialności powinien zapewniać osobie pełniącej daną rolę jednoznaczną informację o przypisanych jej zadaniach, zakresie odpowiedzialności i uprawnieniach związanych z ich wykonywaniem.
- `linia 87`: Podział ról i odpowiedzialności jest powiązany z rzeczywistymi procesami organizacji, w szczególności z tworzeniem i publikowaniem informacji i dokumentów elektronicznych, realizacją usług publicznych, projektowaniem, pozyskiwaniem i utrzymaniem rozwiązań cyfrowych, monitorowaniem dostępności, działaniami naprawczymi oraz wsparciem kompetencyjnym.
- `linia 93`: Przegląd przeprowadza także po istotnych zmianach organizacyjnych, zmianach sposobu realizacji procesów lub wdrożeniu nowych rozwiązań cyfrowych oraz wtedy, gdy ujawnione problemy wskazują na niejasny albo nieskuteczny podział odpowiedzialności.

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
