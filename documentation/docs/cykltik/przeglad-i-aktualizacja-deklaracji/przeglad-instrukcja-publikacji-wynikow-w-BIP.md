---
id: przeglad-instrukcja-publikacji-wynikow-w-BIP
title: Instrukcja publikacji raportu samooceny dostępności cyfrowej w Biuletynie Informacji Publicznej (BIP)
sidebar_label: Instrukcja publikacji raportu samooceny w BIP
sidebar_position: 5
description: Organizacja poprzedza coroczną aktualizację deklaracji dostępności strony internetowej przeglądem dostępności
keywords: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności]
tags: [cykl życia TIK, dostępność cyfrowa, deklaracja dostępności, przegląd dostępności]
opracowanie: Stefan Wajda 
data_zgloszenia: 4 listopada 2025 r.
ostatnia_aktualizacja: 4 listopada 2025 r.
wersja_robocza: true

---


Zgodnie z przepisami ustawy o dostępności cyfrowej każda jednostka 
sektora publicznego powinna corocznie przeprowadzać samoocenę 
dostępności cyfrowej i opublikować jej wyniki w postaci dowodu samooceny. 
Wyniki powinny być załączone do Deklaracji dostępności 
oraz mogą być publikowane w Biuletynie Informacji Publicznej (BIP).

## 1. Cel dokumentu

Celem niniejszej instrukcji jest przedstawienie kroków niezbędnych do
wdrożenia, edycji i publikacji edytowalnego raportu samooceny
dostępności cyfrowej w formacie HTML i EARL (JSON-LD) w Biuletynie
Informacji Publicznej.

## 2. Przygotowanie środowiska

1.  Skopiuj plik „Samoocena_edytowalny_panel_z_eksportem.html" do
    katalogu BIP, np. /bip/files/samoocena/.

2.  Zmień jego nazwę na np. raport_samooceny_2025.html.

3.  Upewnij się, że plik ma publiczny adres URL, np.
    https://bip.twoj-urzad.gov.pl/files/samoocena/raport_samooceny_2025.html.

## 3. Wypełnianie i zapis raportu

1.  Otwórz plik HTML w przeglądarce internetowej (np. Chrome, Edge).

2.  W panelu edycyjnym po lewej stronie wprowadź nazwę jednostki, wynik
    procentowy, datę, nazwisko osoby odpowiedzialnej, link do raportu i
    uwagi.

3.  Wybierz przycisk „Zastosuj dane", aby zaktualizować podgląd i dane
    EARL.

4.  Użyj przycisku „💾 Pobierz dane EARL", aby zapisać dane
    ustrukturyzowane w formacie JSON-LD.

5.  (Opcjonalnie) Wybierz „Drukuj → Zapisz jako PDF", aby utworzyć
    wersję raportu w formacie PDF.

## 4. Publikacja w deklaracji dostępności

W treści deklaracji dostępności w BIP dodaj linki do raportu i danych
EARL, np.:

- 🔗 Raport: /files/samoocena/raport_samooceny_2025.html

- 📄 Dane EARL: /files/samoocena/earl_2025.jsonld

## 5. Archiwizacja i cykliczność

Przechowuj raporty z poprzednich lat w tym samym katalogu przez co
najmniej 3 lata, nadając im nazwy zgodne z rokiem samooceny, np.
raport_samooceny_2024.html, earl_2024.jsonld.

## 6. Dobre praktyki techniczne

- Sprawdź dostępność raportu narzędziami automatycznymi (SortSite,
  SiteLint).

- Zweryfikuj poprawność składni JSON-LD w narzędziu JSONLint.

- Nie osadzaj skryptów w publikowanej wersji raportu -- używaj czystego
  HTML + JSON-LD.

- Ustal coroczny termin aktualizacji raportu (np. marzec każdego roku).

## 7. Efekt końcowy

Po wdrożeniu w BIP będą dostępne trzy elementy:

- Raport HTML (interaktywny) -- np. raport_samooceny_2025.html

- Dane EARL (ustrukturyzowany plik JSON-LD) -- np. earl_2025.jsonld

- Link w deklaracji dostępności -- sekcja „Dowód przeprowadzenia
  samooceny".

Dokument zatwierdzony przez:

Data zatwierdzenia:
