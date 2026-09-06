---
id: test-jezyk-czesci-strony
title: Scenariusz testu - Język części strony
sidebar_label: Język części strony
sidebar_position: 22
description: Scenariusz testu sprawdzającego, czy fragmenty treści zapisane w innym języku niż główny język strony zostały poprawnie oznaczone programowo.
keywords: [język części strony, lang, język fragmentu, język treści, dostępność cyfrowa, WCAG]
tags: [test dostępności, język strony, WCAG, okresowa ocena zgodności]
opracowanie: Stefan Wajda
data_zgloszenia: 10 czerwca 2026 r.
ostatnia_aktualizacja: 10 czerwca 2026 r.
wersja_robocza: true
----



## 1. Identyfikator testu

**testID-022**

---

## 2. Nazwa testu

**Język części strony**

---

## 3. Profil stosowania testu

Najniższy profil stosowania: **profil wstępny**

---

## 4. Opis testu

Test służy do sprawdzenia, czy fragmenty treści zapisane w języku innym niż główny język strony zostały poprawnie oznaczone programowo.

W ramach testu należy zweryfikować:

* czy fragmenty tekstu w języku obcym zostały oznaczone odpowiednim atrybutem `lang`,
* czy zastosowano poprawny kod języka,
* czy oznaczony język odpowiada rzeczywistemu językowi danego fragmentu treści.

Oznaczenie może zostać wykonane przy użyciu dowolnego elementu HTML, np. `span`, `em`, `q`, `cite`, `blockquote`, `p` lub innych elementów obejmujących dany fragment tekstu.

---

## 5. Mapowanie do standardów

### WCAG 2.1

* **3.1.2 Język części (AA)**

### EN 301 549

* **9.3.1.2 Language of Parts**
* **10.3.1.2 Language of Parts**
* **11.3.1.2 Language of Parts**
* **12.3.1.2 Language of Parts**

### Techniki WCAG

* H58 – Używanie atrybutów językowych do identyfikowania zmian języka w treści
* H57 – Użycie atrybutu `lang` w HTML

---

## 6. Zastosowanie do treści

Test stosuje się do wszystkich treści zawierających fragmenty zapisane w języku innym niż główny język strony, w szczególności:

* cytatów,
* przytoczeń,
* nazw publikacji,
* fragmentów korespondencji,
* komunikatów systemowych,
* tekstów marketingowych,
* przykładów językowych,
* treści edukacyjnych.

Nie jest wymagane oznaczanie:

* słów i zwrotów powszechnie przyjętych do języka strony,
* nazw naukowych funkcjonujących jako utrwalone określenia,
* zapożyczeń powszechnie używanych w języku głównym strony.

Przykłady:

* „déjà vu”
* „Homo sapiens”
* „status quo”

---

## 7. Oczekiwany wynik

Za zgodną uznaje się stronę, dla której:

* główny język strony został określony poprawnie,
* każdy istotny fragment treści zapisany w innym języku został oznaczony atrybutem `lang`,
* wartość atrybutu `lang` odpowiada rzeczywistemu językowi oznaczonego fragmentu,
* zastosowane kody językowe są poprawne i zgodne z rejestrem IANA.

---

## 8. Dlaczego to jest ważne

Czytniki ekranu i inne technologie wspomagające korzystają z różnych reguł wymowy dla różnych języków.

Jeżeli zmiana języka nie została oznaczona programowo, fragment może zostać odczytany zgodnie z zasadami wymowy języka głównego strony, co często prowadzi do:

* niezrozumiałego odczytu,
* błędnej wymowy nazw i cytatów,
* utraty znaczenia przekazywanych informacji,
* utrudnionego odbioru treści edukacyjnych i specjalistycznych.

Poprawne oznaczanie zmian języka umożliwia technologiom wspomagającym automatyczne przełączanie reguł wymowy oraz poprawną interpretację treści.

---

## 9. Kogo to dotyczy

Test ma szczególne znaczenie dla:

* osób niewidomych korzystających z czytników ekranu,
* osób słabowidzących korzystających z technologii TTS,
* osób z dysleksją i trudnościami w czytaniu,
* osób uczących się języków obcych,
* osób korzystających z tłumaczy automatycznych,
* osób z niepełnosprawnościami poznawczymi i językowymi.

---

## 10. Sposób testowania

### Krok 1

Zidentyfikuj fragmenty treści zapisane w języku innym niż główny język strony.

### Krok 2

Sprawdź kod źródłowy strony.

### Krok 3

Zweryfikuj, czy fragment został objęty elementem HTML zawierającym atrybut `lang`.

### Krok 4

Sprawdź wartość atrybutu `lang`.

### Krok 5

Porównaj określony język z rzeczywistym językiem oznaczonego fragmentu.

### Krok 6

Zweryfikuj poprawność kodu języka zgodnie z rejestrem IANA.

---

## 11. Kryteria oceny wyniku

### Wynik pozytywny

Wszystkie istotne zmiany języka zostały poprawnie oznaczone programowo.

### Wynik negatywny

Co najmniej jeden istotny fragment zapisany w innym języku nie został oznaczony lub został oznaczony nieprawidłowo.

---

## 12. Typowe niezgodności

Najczęściej spotykane błędy:

* brak oznaczenia cytatu w języku obcym,
* brak oznaczenia nazw lub fragmentów dokumentów obcojęzycznych,
* zastosowanie niewłaściwego kodu języka,
* oznaczenie całego akapitu zamiast właściwego fragmentu,
* pozostawienie wszystkich treści w języku głównym strony pomimo występowania zmian językowych,
* błędne oznaczenie języka fragmentu wielojęzycznego.

---

## 13. Dobre praktyki

* Oznaczanie zmian języka już na etapie tworzenia treści.
* Wbudowanie obsługi atrybutu `lang` w edytory treści i CMS.
* Weryfikowanie zmian językowych podczas kontroli jakości publikacji.
* Stosowanie oznaczeń językowych w szablonach publikacji edukacyjnych i informacyjnych.
* Uwzględnianie testu w procedurach odbioru stron internetowych.

---

## 14. Wynik testu

* Spełniony
* Niespełniony
* Nie dotyczy

---

## 15. Ustalenia

Miejsce na opis ustaleń osoby przeprowadzającej test.

---

## 16. Przykładowy opis niezgodności do raportu lub deklaracji

> Na stronie występują fragmenty treści zapisane w języku angielskim, które nie zostały oznaczone programowo za pomocą atrybutu `lang`. W rezultacie technologie wspomagające mogą odczytywać te fragmenty zgodnie z zasadami wymowy języka polskiego, co utrudnia ich zrozumienie.

lub

> Cytat w języku francuskim został oznaczony atrybutem `lang="en"` zamiast właściwego oznaczenia języka francuskiego.

---

## 17. Rekomendacje naprawcze

* Oznaczyć wszystkie istotne fragmenty treści zapisane w innym języku za pomocą atrybutu `lang`.
* Zweryfikować poprawność zastosowanych kodów językowych.
* Uzupełnić procedury publikacji o kontrolę zmian językowych.
* Przeszkolić autorów i redaktorów treści w zakresie stosowania oznaczeń językowych.
* Włączyć kontrolę oznaczeń językowych do testów odbiorczych i audytów.

---

## 18. Powiązane testy

* Język strony
* Strona wielojęzyczna
* Tytuł strony
* Poprawność kodu HTML
* Nazwa strony i identyfikacja celu
