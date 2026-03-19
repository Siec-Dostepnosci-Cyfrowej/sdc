---
id: coroczny-przeglad-dostepnosci
title: Coroczny przegląd przed aktualizacją deklaracji dostępności cyfrowej
sidebar_label: Projekt zalecenia
sidebar_position: 1
description: Organizacja poprzedza coroczną aktualizację deklaracji dostępności strony internetowej przeglądem dostępności
keywords: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności]
tags: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności]
opracowanie: Stefan Wajda 
data_zgloszenia: 4 listopada 2025 r.
ostatnia_aktualizacja: 4 listopada 2025 r.
wersja_robocza: true

---


## Zalecenie

Organizacja ustala i wdraża procedurę corocznego przeglądu dostępności cyfrowej swoich stron internetowych i aplikacji mobilnych przed aktualizacją deklaracji dostępności. 

## Rekomendacje

### 🧭 Cel przeglądu dostępności

Przegląd dostępności ma umożliwić:

- weryfikację, czy stan faktyczny strony odpowiada informacjom zawartym
  w deklaracji dostępności strony internetowej lub aplikacji mobilnej,
- wychwycenie błędów, które mogły pojawić się po aktualizacjach treści lub oprogramowania,
- ocenę, czy użytkownicy mogą nadal korzystać z podstawowych funkcji
  serwisu bez barier,
- przygotowanie danych do **aktualizacji deklaracji dostępności**
  (najpóźniej do 31 marca każdego roku),


### ⚙️ Zakres przeglądu dostępności cyfrowej

Przegląd polega na przeprowadzeniu:

- analizy raportów z prac naprawczych wykonanych od czasu poprzedniego przeglądu, 
- analizy zgłoszeń niedostępności i żądań zapewnienia dostępności i dostępu alternatywnego,
- przeprowadzeniu testów automatycznych wybranego zestawu stron, w tym stron, 
  na których w poprzednim przeglądzie lub audycie stwierdzono największą liczbę
  problemów z dostępnością,
- co najmniej **audytu uproszczonego** lub **audytu zgodności**

**Audyt uproszczony** nie musi być audytem eksperckim, ale powinien 
obejmować **minimum 7 wymienionych poniżej kluczowych aspektów**
w zakresie wymagań wynikających z ustawy o dostępności cyfrowej.

Osoba odpowiedzialna za przeprowadzenie **audytu uproszczonego**
opracowuje listę testów w oparciu o sugerowaną przez W3C procedurę 
znaną jako **Łatwe testy** (<em lang="en">Easy check</em>) 
lub równoważną **uproszczoną listę kontrolną zgodności** z WCAG 2.1 
(obejmującą np. 20-25 kryteriów). 

Zakres audytu uproszczonego obejmuje co najmniej **7 poniższych kluczowych aspektów**:  

1. **Struktura i nawigacja**
   - Czy wszystkie strony mają **unikalny tytuł** (w znaczniku `<title>`)?
   - Czy wszystkie strony mają **logiczną strukturę nagłówków** (`H1` - `H6`)?
   - Czy **menu i elementy nawigacyjne** są dostępne z klawiatury 
     (<kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>ESC</kbd>, <kbd>strzałki</kbd>)?
   - Czy użytkownik wie, gdzie się znajduje (_ścieżka powrotu_, wyróżnienie aktywnej pozycji menu)?
   - Czy istnieje i działa łącze pomijania **Przejdź do treści**?  
2. **Teksty i treści redakcyjne**
   - Czy nowe artykuły, komunikaty i pliki PDF mają poprawne opisy, tytuły i strukturę?
   - Czy nie wstawiono tekstu w formie obrazu (np. skanów)?
   - Czy język treści został określony w kodzie (lang=\"pl\")?
   - Czy wszystkie treści mają **czytelny kontrast kolorystyczny**?
3. **Obrazy i multimedia**
   - Czy wszystkie obrazy mają **atrybut alt** (lub są oznaczone jako dekoracyjne)?
   - Czy nagrania wideo mają **napisy rozszerzone**, a materiały audio **transkrypcję**?
   - Czy na stronie nie ma elementów migających / powodujących dyskomfort?
4. **Formularze i interakcje**
   - Czy wszystkie **pola formularzy** mają **powiązane etykiety** (`<label>`)?
   - Czy pola obowiązkowe są prawidłowo oznaczone i komunikaty błędów są czytelne?
   - Czy możliwe jest **przesyłanie formularzy z klawiatury**?
   - Czy przyciski i linki mają jednoznaczne opisy (np. nie tylko „kliknij tutaj")?
5. **Dostępność dokumentów do pobrania**
   - Czy pliki PDF, DOCX, XLSX publikowane na stronie są dostępne (tekst, tytuły, znaczniki)?
   - Czy w miarę możliwości publikowane są **dokumenty alternatywne** (HTML, TXT)?
   - Czy w deklaracji dostępności poprawnie wskazano **liczbę niedostępnych dokumentów**?
6. **Zgodność techniczna i testy automatyczne**
   - Wykonanie testu automatycznego (np. SiteLint, Oobee, Axe, WAVE, ).
   - Ocena responsywności (działa na urządzeniach mobilnych).
   - Sprawdzenie działania czytników ekranowych (np. NVDA, VoiceOver).
7. **Procedury i zgłoszenia**
   - Czy koordynator ds. dostępności jest wskazany i dane kontaktowe są aktualne?
   - Czy działa **formularz wniosku o zapewnienie dostępności cyfrowej**?
   - Czy rejestr zgłoszeń i skarg jest prowadzony i aktualny?
   - Czy naprawiane są zgłoszone i wykryte błędy
   - Czy w porónaniu z ubiegłym przeglądem poziom dostępności uległ poprawie? 

### Terminy 

Przegląd jest wykonywany **co najmniej raz w roku** (najpóźniej do 31 marca przed aktualizacją deklaracji). 
Przegląd powinien być wykonywany także każdorazowo **po znaczącej aktualizacji treści lub systemu CMS**. 


### 🧩 Dokumentowanie i archiwizacja wyników

Po przeglądzie powstaje **raport, protokół lub karta przeglądu**, który:

- opisuje datę i osoby przeprowadzające przegląd,
- zawiera listę stwierdzonych niezgodności,
- wskazuje, które elementy strony lub dokumenty wymagają poprawy,
- podsumowuje stan zgodności (np. „zgodność 85%, 12 błędów drobnych"),
- stanowi podstawę do **aktualizacji deklaracji dostępności cyfrowej**.

Wskazane jest, aby dokumentacja (raport) przeglądu była sporządzona w formacie :
- dokumentu **HTML + JSON-LD (EARL)**, który załącza się do deklaracji dostępności,
- dokumentu biurowego (np. .docx, .odt, .xlsx) dla celów achiwalnych   

Po zatwierdzeniu przez osobę odpowiedzialną raport jest przekazywany do archiwizacji i przechowywany przez minimum 3 lata.
Wzór raportu stanowi załącznik do niniejszej procedury.

**⚙️ Dlaczego warto stosować format HTML + JSON-LD (EARL)**

- **Format HTML - dla przejrzystości i dostępności**, ponieważ raport w HTML:
  - może być **sam dostępny cyfrowo**,
  - umożliwia przeglądanie wyników przez użytkowników i audytorów,
  - pozwala linkować do konkretnych błędów i sekcji,
  - można go opublikować w **BIP lub sekcji „Deklaracja dostępności"** 
	jako *„Raport z samooceny - dowód z przeglądu"*.\
  To podnosi transparentność i zgodność z zasadą *„nic o nas bez nas"*.
- **Format JSON-LD (EARL) - dla interoperacyjności i dowodu technicznego**, 
  ponieważ raport w  EARL (Evaluation and Report Language):
  - jest **standardem W3C** do zapisu wyników testów WCAG,
  - można go automatycznie analizować i agregować (np. w pulpcie KPI),
  - umożliwia powiązanie z danymi z narzędzi automatycznych (axe, SiteLint, Pa11y),
  - stanowi **techniczny dowód** wykonania samooceny (z datą, testem, wynikiem, kryterium).\
  Dodatkowo można dodać w nim odnośniki `"reportType": "self-assessment"` 
  oraz `"relatedTo": "https://bip.nowemiasto.pl/deklaracja-dostepnosci"`
  co pozwoli powiązać raport z aktualną deklaracją.
	  
**🧩 Sugerowana struktura zestawu dokumentów**

| **Plik**                | **Format** | **Cel**             | **Status**    |
|-------------------------|------------|---------------------|---------------|
| **Raport z przeglądu dostępności (samooceny)** | HTML | Czytelna wersja do publikacji w BIP | Obowiązkowy|
| **Dane ustrukturyzowane z samooceny** | JSON-LD (EARL) | Techniczny dowód oceny | Obowiązkowy / zalecany|                     
| **Arkusz przeglądu (XLSX)** | Excel | Wersja robocza i dokument wewnętrzny | Wewnętrzny|  
| **Instrukcja i procedura** | DOCX  | Dokumentacja pomocnicza| Wewnętrzny|              

:::note Uwaga dot. VPAT, ACR, raportów z audytów zgodności

Dowodem z przeprowadzonej oceny może być aktualny raport z audytu zgodności
sporządzony przez podmiot zewnętrzny albo oświadczenie wykonawcy o zgodności 
strony lub aplikacji mobilnej z dostępnością sporządzone w formacie VPAT lub ACR.

Dokumenty te również mogą być przygotowane w formatach HTML + JSON-LD (EARL)  

:::

4. **🔍 Minimalny zestaw danych w pliku EARL dla samooceny**\

```json
{
  "@context": "http://www.w3.org/ns/earl.jsonld",
  "@type": "EvaluationReport",
  "title": "Samoocena dostępności cyfrowej - Urząd Miejski w Nowym Mieście",
  "reportType": "self-assessment",
  "dateCreated": "2025-03-15",
  "assertedBy": "Koordynator ds. dostępności cyfrowej",
  "subjectOf": {
    "@id": "https://bip.nowemiasto.pl"
  },
  "testResults": [
    {
      "@type": "Assertion",
      "test": {
        "@id": "https://www.w3.org/TR/WCAG21/#non-text-content"
      },
      "result": {
        "outcome": "passed"
      },
      "mode": "manual",
      "description": "Wszystkie obrazy mają opisy alternatywne."
    }
  ],

  "summary": {
    "totalTests": 25,
    "passed": 22,
    "failed": 3,
    "conformanceScore": 88
  }
}
```	

## Podstawy prawne
- Ustawa o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych
- Warunki techniczne publikacji i struktura dokumentu elektronicznego deklaracji dostępności
- Decyzja wykonawcza KE (UE) 2018/1523 z dnia 11 października 2018 r. ustanawiająca wzór oświadczenia w sprawie dostępności zgodnie z dyrektywą Parlamentu Europejskiego i Rady (UE) 2016/2102 w sprawie dostępności stron internetowych i mobilnych aplikacji organów sektora publicznego 

## Uzasadnienie

 -**do opracowania** 
   

   
## Załączniki
- [Szablon przeglądu dostępności cyfrowej (plik Excel)](/cykltik/przeglad-i-aktualizacja-deklaracji/szablon-przegladu-dostepnosci-cyfrowej.xlsx)
- [Instrukcja publikacji raportu samooceny dostępności cyfrowej w BIP (plik Word)](/cykltik/przeglad-i-aktualizacja-deklaracji/przeglad-instrukcja-publikacji-wynikow-w-BIP.docx)
- [Procedura przeglądu dostępności cyfrowej (plik Word)](/cykltik/przeglad-i-aktualizacja-deklaracji/procedura-przegladu-dostepnosci.docx)
- [Szablon raportu samooceny dostępności (HTML)](/cykltik/przeglad-i-aktualizacja-deklaracji/raport-samooceny-dostepnosci-szablon.txt)
- [Dowód samooceny w Deklaracji dostępności (HTML)](/cykltik/przeglad-i-aktualizacja-deklaracji/dowod-samooceny-dynamiczny-przyklad.txt)