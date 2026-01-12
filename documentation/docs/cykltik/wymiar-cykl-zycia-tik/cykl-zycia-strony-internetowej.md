# Cykl życia strony internetowej (TIK). Ramowe wytyczne

---
id: cykl-zycia-strony-internetowej
title: Cykl życia strony internetowej (TIK). Ramowe wytyczne
sidebar_label: Cykl życia strony internetowej
sidebar_position: 4 
keywords: [dostepnosc cyfrowa, cykl życia, monitoring dostępności]
tags: [dostepnosc cyfrowa, cykl życia]
data_zgloszenia: 6 października 2025 r.
ostatnia_aktualizacja: 12 stycznia 2026 r.
opracowanie: Dawid Górny
wersja_robocza: false
---

## 1. Cel dokumentu

Celem dokumentu jest przedstawienie minimalnych zasad, według których instytucja publiczna powinna planować, zamawiać, tworzyć, testować, utrzymywać i wycofywać stronę internetową w sposób zgodny z wymogami ustawowymi. Treść ma charakter ramowy i uwzględnia potrzebę ciągłego monitorowania dostępności przy wykorzystaniu różnych metod weryfikacji.

## 2. Podstawy prawne i standardy techniczne

### Podstawa prawna

* **Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych.** Jest to nadrzędny akt prawny określający obowiązki podmiotu.
* **Ustawa z dnia 6 września 2001 r. o dostępie do informacji publicznej**.

### Standardy i normy (narzędzia realizacji)

* **Wymagania techniczne określone w załączniku do ustawy:** Oparte na standardzie **WCAG 2.1 na poziomie AA**. Jest to prawnie wiążący poziom dostępności.
* **EN 301 549:** Europejska norma techniczna, służąca do interpretacji wymagań technicznych.
* **WCAG 2.2:** Nowsza wersja standardu, zalecana jako dobra praktyka (ponadstandardowa).

## 3. Role i odpowiedzialność

### 3.1 Opis ról

* **Koordynator dostępności** – nadzór nad procesem, monitorowanie serwisu i koordynacja obsługi żądań zapewnienia dostępności.
* **Administrator** – wsparcie techniczne, aktualizacje i dbanie o techniczną poprawność Deklaracji Dostępności.
* **Redaktorzy** – osoby publikujące treści. Odpowiadają za dostępność dodawanych materiałów (tekstów, plików, multimediów) oraz ich weryfikację przed publikacją.
* **Wykonawca zewnętrzny** – podmiot odpowiedzialny za dostarczenie produktu w pełni dostępnego cyfrowo (zgodnie z wymogami ustawy) oraz co najmniej wyników z przeprowadzonych testów automatycznych i, jeśli to możliwe, ręcznych, potwierdzających tę dostępność.

### 3.2 Matryca RACI (model dla urzędu)

| Faza | Koordynator | Administrator | Redaktorzy | Wykonawca |
| :--- | :---: | :---: | :---: | :---: |
| Planowanie | A | R | C | - |
| Projektowanie i Wykonanie | C | A | I | R |
| Testowanie (odbiór) | A | R | C | R |
| Utrzymanie (treści) | C | I | R | - |
| Obsługa żądań dostępu | A | C | R | - |

*Legenda: R – wykonuje, A – odpowiada, C – konsultuje, I – informowany.*

## 4. Szkolenia

* **Dla redaktorów:** Tworzenie dostępnych treści i obsługa narzędzi do bieżącej weryfikacji przed publikacją.
* **Dla administratorów:** Wdrażanie i obsługa systemów monitoringu automatycznego.
* **Okresowo:** Aktualizacja wiedzy (min. raz na 12 miesięcy).

## 5. Fazy cyklu życia strony

### Faza 1 – Koncepcja i wymogi

Wymóg pełnej zgodności z załącznikiem do ustawy w umowach z wykonawcami.

### Faza 2 – Projektowanie i Wykonanie

Tworzenie dostępnych szablonów i funkcjonalności zgodnie z projektowaniem uniwersalnym.

### Faza 3 – Testowanie i Odbiór

Weryfikacja strony pod kątem technicznym i sporządzenie pierwszej Deklaracji Dostępności.

### Faza 4 – Publikacja i bieżąca kontrola

* **Weryfikacja przed publikacją:** Redaktor przed zatwierdzeniem treści ma obowiązek sprawdzić ją za pomocą dostępnych narzędzi wspomagających (np. wbudowane funkcje sprawdzania dostępności w edytorach treści lub przeglądarkach).
* Publikacja następuje po wyeliminowaniu błędów (np. brakujących tekstów alternatywnych, błędnej hierarchii nagłówków).

### Faza 5 – Utrzymanie i ciągły monitoring

* **Monitorowanie wielopoziomowe:** Stosowanie metod automatycznych i ręcznych w celu wykrywania błędów powstałych w trakcie eksploatacji.
* **Obsługa żądań zapewnienia dostępności:** Reagowanie na wnioski użytkowników.
* **Dostęp alternatywny:** Zapewnienie wsparcia w innej formie, gdy treść cyfrowa pozostaje (czasowo) niedostępna.
* **Aktualizacja Deklaracji:** Co roku do 31 marca.

### Faza 6 – Starzenie się i wycofanie

Archiwizacja treści w sposób zapewniający ich dalszą dostępność.

## 6. Monitorowanie dostępności i kontrola jakości

System kontroli opiera się na trzech uzupełniających się metodach monitoringu, co pozwala na reagowanie i planowanie w zależności od kontekstu:

1. **Weryfikacja przed publikacją:** Wykorzystanie narzędzi, które weryfikują treść bezpośrednio podczas jej tworzenia lub przeglądania. Pozwala to na weryfikację i ewentualną poprawę zawartości jeszcze przed jej publikacją.
2. **Monitoring po publikacji:** Regularne badanie całego serwisu w celu wykrycia błędów technicznych i regresji dostępności (np. niedziałające linki, błędy w kodzie szablonu, błędy po aktualizacji serwisu). Monitoring ten może być realizowany w dwóch wariantach:
    * **Wariant A: Audyt pełny (crawling całego serwisu).** Polega na sprawdzeniu każdej podstrony. 
        * *Zaleta:* Kompletność danych. 
        * *Wada:* Wysokie obciążenie zasobów przy dużych serwisach i ryzyko generowania szumu informacyjnego przy tysiącach archiwalnych lub nieużywanych podstron.
    * **Wariant B: Audyt na bazie ruchu użytkowników.** Polega na badaniu tylko tych miejsc, które są faktycznie odwiedzane.
        * *Zaleta:* Skupienie uwagi na realnych barierach, na które napotykają obywatele; optymalizacja wydajności. 
        * *Wada:* Ryzyko przeoczenia błędów w rzadziej odwiedzanych, ale istotnych prawnie sekcjach (np. rzadko używane formularze).
3. **Monitoring ręczny:** Cykliczna weryfikacja elementów niemożliwych do sprawdzenia przez automatyczne testy. Obejmuje audyty okresowe służące bieżącej poprawie, a także do aktualizacji Deklaracji Dostępności.

## 7. Planowane dokumenty pomocnicze

* Wzór zapisu o dostępności do umowy.
* Instrukcja obsługi narzędzi do weryfikacji treści przed publikacją.
* Procedura obsługi żądania zapewnienia dostępności i dostępu alternatywnego.