---
id: integrator
title: integrator
description: uzasadnienie
sidebar_label: integrator
sidebar_position: 999
typ: zalecenie
wymiar: Cykl życia TIK
opracowanie: Angelika Sosnowska
---

# Integracja wymagań dostępności w całym cyklu projektowym (Accessibility by Design)

## 1. 
Organizacja wdraża podejście systemowe polegające na uwzględnianiu wymagań dostępności cyfrowej na wszystkich etapach cyklu życia produktu cyfrowego – od analizy i projektowania, przez implementację, aż po testy i utrzymanie – w celu zapewnienia zgodności z wymaganiami WCAG / EN 301 549, ograniczenia kosztów poprawek oraz podniesienia jakości usług cyfrowych.

## 2. Rekomendacje

1. Organizacja zapewnia integrację wymagań dostępności co najmniej w następujących obszarach:
  * Włączanie wymagań dostępności do dokumentów projektowych
  * Wymagania dostępności są definiowane już na etapie analizy biznesowej i funkcjonalnej, jako integralna część wymagań dla produktu cyfrowego, a nie jako wymagania dodatkowe lub opcjonalne 
  * Na etapie analizy określa się wymagania dostępności dla kluczowych procesów użytkownika (np. logowanie, wypełnienie formularza, wyszukiwanie informacji, odtwarzanie multimediów), z uwzględnieniem różnych sposobów korzystania z systemu (klawiatura, technologie asystujące, brak dźwięku, powiększenie) 
  * Wymagania dostępności są uwzględniane w dokumentacji projektowej, w szczególności w: 
    * wymaganiach biznesowych i funkcjonalnych (np. „użytkownik może wykonać cały proces bez użycia myszy”) 
    * opisach przypadków użycia i scenariuszach użytkownika 
    * zadaniach w backlogu produktu (np. user stories) 
    * opisach przedmiotu zamówienia (OPZ) i dokumentacji przetargowej 
  * Dla każdej istotnej funkcjonalności określa się wymagania wynikające z odpowiednich kryteriów WCAG, w zakresie adekwatnym do jej charakteru (np. dla formularzy – etykiety, błędy, walidacja; dla multimediów – napisy, transkrypcje) 
  * Wymagania dostępności obejmują wszystkie elementy produktu cyfrowego, w tym: 
    * interfejs użytkownika (strony, widoki aplikacji) 
    * dokumenty elektroniczne (np. PDF, DOCX) 
    * multimedia (audio, wideo) 
    * komponenty i integracje z systemami zewnętrznymi 
  * Wymagania dostępności są formułowane w sposób jednoznaczny, mierzalny i możliwy do weryfikacji, tak aby mogły stanowić podstawę testów i odbioru (np. zamiast „strona powinna być dostępna” – „wszystkie elementy formularza są dostępne z klawiatury i posiadają etykiety”) 
  * W dokumentacji projektowej unika się ogólnych zapisów typu „zgodność z WCAG”, bez wskazania zakresu i sposobu realizacji, ponieważ prowadzi to do niejednoznacznej interpretacji wymagań przez wykonawców 
  * W przypadku zamówień publicznych wymagania dostępności są integralną częścią opisu przedmiotu zamówienia oraz warunków realizacji, co umożliwia ich egzekwowanie na etapie realizacji i odbioru projektu
2. Obowiązkowe adnotacje dostępności w makietach i dokumentacji UX/UI
  * Makiety, prototypy oraz dokumentacja UX/UI zawierają jednoznaczne informacje dotyczące wymagań dostępności, które stanowią podstawę implementacji przez zespół developerski 
    * W dokumentacji projektowej określa się co najmniej: 
    * strukturę treści i hierarchię nagłówków 
    * kolejność nawigacji (w tym kolejność tabowania) 
    * sposób działania elementów interaktywnych (np. przyciski, formularze, komponenty dynamiczne) 
    * zachowanie fokusu (widoczność, przechodzenie między elementami) 
  * Dla formularzy i procesów użytkownika określa się: 
    * sposób prezentacji etykiet i instrukcji 
    * sposób komunikowania błędów i walidacji 
    * wymagania dotyczące dostępności całego procesu (np. brak blokad dla użytkowników klawiatury) 
  * Dokumentacja UX/UI zawiera wymagania dotyczące percepcji treści, w szczególności: 
    * minimalne poziomy kontrastu 
    * zakaz przekazywania informacji wyłącznie kolorem 
    * czytelność i skalowalność tekstu 
  * W projektach uwzględnia się działanie interfejsu w różnych warunkach: 
    * przy powiększeniu (co najmniej 200%) 
    * na różnych urządzeniach i orientacjach ekranu 
    * przy ograniczonej precyzji interakcji (np. brak myszy, obsługa klawiaturą) 
  *  W przypadku stosowania design systemu: 
    * komponenty są opisane pod kątem dostępności 
    * określa się zasady ich użycia (np. kiedy stosować dany komponent, jakie ma ograniczenia) 
    * zapewnia się spójność dostępności w całym systemie 
  * Dokumentacja projektowa nie ogranicza się do warstwy wizualnej — zawiera także informacje niezbędne do zapewnienia dostępności technicznej (np. sposób oznaczania elementów, wymagania dla komunikatów, struktury treści) 
  * Brak adnotacji dostępności w dokumentacji projektowej traktowany jest jako brak kompletności projektu i stanowi podstawę do wstrzymania przekazania do implementacji
3. Przeglądy dostępności na etapie projektowania
  * Organizacja wprowadza obowiązkowe przeglądy dostępności projektów (makiet, prototypów, dokumentacji UX/UI) przed rozpoczęciem implementacji 
  * Przeglądy dostępności obejmują: 
    * weryfikację zgodności projektów z wymaganiami dostępności określonymi w dokumentacji 
    * identyfikację ryzyk dostępności wynikających z przyjętych rozwiązań projektowych 
    * ocenę kluczowych procesów użytkownika pod kątem ich dostępności 
  * Przeglądy przeprowadza się w szczególności: 
    * po przygotowaniu makiet lub prototypów 
    * przed przekazaniem projektu do zespołu developerskiego 
    * po wprowadzeniu istotnych zmian w projekcie 
  * W przeglądach uczestniczy osoba posiadająca kompetencje w zakresie dostępności cyfrowej, która: 
    * weryfikuje zgodność projektu z wymaganiami 
    * wskazuje potencjalne problemy i ryzyka 
    * rekomenduje zmiany projektowe 
  * Przeglądy mogą być wspierane przez listy kontrolne dostępności oraz uproszczone metody oceny (np. checklisty zgodności), które umożliwiają systematyczną weryfikację projektu 
  * Wyniki przeglądu są dokumentowane i zawierają: 
    * listę zidentyfikowanych problemów 
    * rekomendacje zmian 
    * decyzję o dopuszczeniu projektu do kolejnego etapu 
  * Projekty niespełniające minimalnych wymagań dostępności nie są przekazywane do implementacji do czasu wprowadzenia wymaganych poprawek 
  * Przeglądy dostępności na etapie projektowania uzupełniają późniejsze testy i audyty, umożliwiając wykrycie problemów na wczesnym etapie, zanim zostaną utrwalone w implementacji
4. Wymagania dostępności jako element kryteriów akceptacji i Definition of Done
  * Dla każdej funkcjonalności definiuje się kryteria akceptacji uwzględniające wymagania dostępności 
  * Kryteria akceptacji są powiązane z konkretnymi wymaganiami WCAG i opisują oczekiwane zachowanie funkcjonalności (np. obsługa klawiaturą, dostępność komunikatów, struktura treści) 
  * Wymagania dostępności są formułowane w sposób mierzalny i możliwy do weryfikacji w testach 
  * Dostępność stanowi obowiązkowy element Definition of Done dla wszystkich zadań związanych z tworzeniem lub modyfikacją produktu cyfrowego 
  * Zadanie uznaje się za zakończone wyłącznie wtedy, gdy spełnione są wymagania dostępności określone w kryteriach akceptacji 
  * Minimalny zakres Definition of Done w obszarze dostępności obejmuje co najmniej: 
    * brak błędów blokujących dostępność (uniemożliwiających wykonanie kluczowych funkcji) 
    * możliwość obsługi funkcjonalności z klawiatury 
    * logiczną kolejność nawigacji i poprawne działanie fokusu 
    * poprawne oznaczenie elementów interfejsu (semantyka, etykiety, komunikaty) 
    * dostępność treści (nagłówki, linki, alternatywy dla grafik) 
    * zrozumiałe i dostępne komunikaty błędów 
  * Weryfikacja spełnienia Definition of Done obejmuje podstawowe testy dostępności, w szczególności: 
    * test obsługi klawiaturą 
    * test przy powiększeniu 
    * wykorzystanie narzędzi automatycznych lub technologii asystujących 
  * Odbiór prac (wewnętrzny oraz od wykonawców zewnętrznych) uwzględnia spełnienie wymagań dostępności jako warunek akceptacji 
  * Brak spełnienia wymagań dostępności oznacza brak możliwości odbioru zadania lub produktu 
  * Odstępstwa od wymagań dostępności muszą być: 
    * uzasadnione (np. nadmierny koszt) 
    * udokumentowane 
    * zaakceptowane na odpowiednim poziomie decyzyjnym

5. Projektowa lista kontrolna dla zespołów UX i IT
  * Organizacja opracowuje i stosuje checklisty dostępności dopasowane do ról (UX, UI, developer, content) 
  * Checklisty są wykorzystywane na każdym etapie projektu (analiza, projektowanie, development, testy) 
  * Checklisty stanowią element procedur jakościowych i wspierają bieżące ocenianie dostępności 
  * Checklisty są aktualizowane na podstawie wyników testów, audytów oraz zgłoszeń użytkowników 
  * Wyniki weryfikacji checklist są dokumentowane 


## 3. Uzasadnienie
Uwzględnianie dostępności cyfrowej wyłącznie na etapie testów lub po wdrożeniu jest podejściem nieefektywnym i kosztownym. Kluczowe decyzje wpływające na dostępność zapadają na etapie analizy i projektowania – ich pominięcie prowadzi do powstawania błędów trudnych lub kosztownych do usunięcia w późniejszych fazach projektu.
Brak integracji dostępności w procesie projektowym prowadzi do powstawania tzw. długu technologicznego, którego usunięcie wymaga dodatkowych nakładów czasu i środków finansowych . W praktyce oznacza to konieczność przebudowy interfejsów, logiki działania systemu lub nawet całych komponentów.
Systemowe uwzględnienie dostępności w dokumentacji projektowej, makietach i kryteriach akceptacji zapewnia spójność działań zespołu projektowego. Pozwala uniknąć sytuacji, w której dostępność jest interpretowana dowolnie przez poszczególne role lub pomijana na etapie implementacji.
Podejście „Accessibility by Design” wspiera także efektywne zarządzanie projektem:
-	umożliwia wcześniejsze wykrywanie problemów, 
-	ogranicza liczbę błędów na etapie testów, 
-	pozwala lepiej planować zasoby i koszty, 
-	zwiększa przewidywalność jakości końcowego produktu. 
Integracja dostępności w całym cyklu życia produktu cyfrowego jest zgodna z zasadą projektowania uniwersalnego i stanowi podstawę tworzenia usług cyfrowych dostępnych dla wszystkich użytkowników, w tym osób ze szczególnymi potrzebami.


## 4. Podstawy prawne
-	Ustawa z dnia 4 kwietnia 2019 r. o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych 
-	Ustawa z dnia 19 lipca 2019 r. o zapewnianiu dostępności osobom ze szczególnymi potrzebami 
-	PN ETSI EN 301 549 – wymagania dostępności produktów i usług ICT 
-	Wytyczne WCAG 2.1 
-	Prawo zamówień publicznych – obowiązek uwzględniania dostępności w opisie przedmiotu zamówienia 


## 5. Źródła i opracowania
- Angelika

## 6. Historia wersji
- h

## Załączniki
_Brak załączników._
