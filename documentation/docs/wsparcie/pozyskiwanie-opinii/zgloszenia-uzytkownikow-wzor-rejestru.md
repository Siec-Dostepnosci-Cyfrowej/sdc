---
id: zgloszenia-uzytkownikow-wzor-rejestru
title: Wzór rejestru zgłoszeń dotyczących dostępności cyfrowej 
description: Wzór rejestru
sidebar_label: Wzór rejestru
sidebar_position: 2
keywords: [cykl życia TIK, dostępność cyfrowa,dobre praktyki, zalecenia, opinie]
tags: [cykl życia TIK, dostępność cyfrowa,dobre praktyki, zalecenia, opinie]
opracowanie: Cezary Tomczyk
wspolpraca: Stefan Wajda
data_zgloszenia: 10 listopada 2025 r.
ostatnia_aktualizacja: 10 listopada 2025 r.
wersja_robocza: true
---

## 1. Cel i zastosowanie

Rejestr służy do ewidencjonowania wszystkich zgłoszeń dotyczących problemów z dostępnością cyfrową:  
- otrzymanych poprzez formularz **Alert dostępności**,  
- przekazanych pocztą elektroniczną, przez ePUAP lub w inny sposób,  
- stanowiących **anonimowe zgłoszenia** lub **formalne żądania zapewnienia dostępności**.

Rejestr powinien być prowadzony przez **osobę lub zespół ds. dostępności cyfrowej** w celu dokumentowania zgłoszeń, monitorowania czasu reakcji oraz usprawnienia działań naprawczych.

---

## 2. Zakres danych rejestrowanych

| Nr | Data wpływu | Rodzaj zgłoszenia | Kanał zgłoszenia | Adres podstrony / obszar | Opis problemu | Kategoria problemu | Dane kontaktowe zgłaszającego | Status sprawy | Data odpowiedzi / działań | Sposób załatwienia | Uwagi / dalsze działania |
|----|--------------|-------------------|------------------|--------------------------|----------------|--------------------|-------------------------------|----------------|---------------------------|--------------------|--------------------------|
| 1 | 2025-05-10 | Anonimowe | Formularz „Alert dostępności” | https://…/kontakt | Link nieczytelny w trybie kontrastowym | Treść / kolorystyka | brak | W toku | – | – | Do poprawy w aktualizacji szablonu |
| 2 | 2025-05-12 | Formalne żądanie zapewnienia dostępności | E-mail | https://…/formularz | Brak etykiety pola tekstowego | Formularz | imię i nazwisko, e-mail | Zakończone | 2025-05-16 | Formularz poprawiony, informacja wysłana do zgłaszającego | – |
| 3 | … | … | … | … | … | … | … | … | … | … | … |

---

## 3. Objaśnienia do kolumn

| Kolumna | Opis |
|----------|------|
| **Nr** | Kolejny numer wpisu. |
| **Data wpływu** | Data otrzymania zgłoszenia (np. automatycznie z systemu formularza). |
| **Rodzaj zgłoszenia** | „Anonimowe” lub „Formalne żądanie zapewnienia dostępności”. |
| **Kanał zgłoszenia** | Formularz, ePUAP, e-mail, telefon, media społecznościowe, inny. |
| **Adres podstrony / obszar** | Adres URL lub opis lokalizacji problemu w serwisie. |
| **Opis problemu** | Krótki opis przeszkody w dostępności (np. brak alternatywnego opisu, niedziałający fokus). |
| **Kategoria problemu** | Typ błędu, np. struktura nagłówków, formularz, multimedia, kontrast, plik PDF, treść. |
| **Dane kontaktowe zgłaszającego** | Jeżeli dotyczy – np. e-mail, imię i nazwisko. W przypadku zgłoszenia anonimowego – „brak danych”. |
| **Status sprawy** | np. „W toku”, „Zakończone”, „Oczekuje na odpowiedź”, „Przekazane do działu IT”. |
| **Data odpowiedzi / działań** | Data udzielenia odpowiedzi lub wprowadzenia poprawki. |
| **Sposób załatwienia** | np. „Poprawiono treść strony”, „Przekazano do wykonawcy”, „Udzielono informacji zwrotnej”. |
| **Uwagi / dalsze działania** | Dodatkowe informacje, np. rekomendacje lub konieczność testu po poprawce. |

---

## 4. Zasady prowadzenia rejestru

1. Rejestr może być prowadzony w formie **arkusza kalkulacyjnego (np. Excel, LibreOffice, Google Sheets)** lub **systemu zgłoszeniowego**.  
2. Zaleca się oznaczanie **statusu kolorem** (np. zielony – zakończone, żółty – w toku, czerwony – nowe).  
3. W przypadku formalnych żądań zapewnienia dostępności należy:  
   - udzielić odpowiedzi w terminie 7 dni,  
   - poinformować o planowanym terminie usunięcia bariery,  
   - odnotować w rejestrze datę odpowiedzi.  
4. Rejestr stanowi dokument pomocniczy w procesie **monitorowania dostępności cyfrowej** i może być wykorzystany przy opracowywaniu rocznych raportów lub planów działań.  
5. Dane osobowe przetwarzane w rejestrze należy zabezpieczyć zgodnie z przepisami RODO.  

---

## 5. Minimalny zestaw danych wymagany przepisami

Zgodnie z art. 10 ustawy o dostępności cyfrowej, podmiot publiczny powinien:
- zapewnić użytkownikom możliwość zgłaszania problemów z dostępnością,
- reagować na żądania zapewnienia dostępności w terminie 7 dni,
- prowadzić dokumentację umożliwiającą wykazanie, że obowiązki te są realizowane.

Rejestr stanowi narzędzie wspierające dokumentowanie tych obowiązków.

---

## 6. Przykład formatu CSV (nagłówki)

```csv
Nr,Data wpływu,Rodzaj zgłoszenia,Kanał zgłoszenia,Adres podstrony / obszar,Opis problemu,Kategoria problemu,Dane kontaktowe zgłaszającego,Status sprawy,Data odpowiedzi / działań,Sposób załatwienia,Uwagi / dalsze działania
