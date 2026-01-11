---
id: weryfikacja-tresci-przed-publikacja
title: Stworzenie działającego procesu weryfikacji publikowanych treści pod kątem dostępności cyfrowej
sidebar_position: 0
sidebar_label: Weryfikacja dostępności treści
keywords: [weryfikacja treści]
tags: [weryfikacja treści]
opracowanie: Aleksandra Cybulska
data_zgloszenia: 14 listopada 2025 r.
data_aktualizacji:  18 listopada 2025 r.
wersja_robocza: true
---

## Cel dokumentu
Celem tego opracowania jest przedstawienie rekomendowanego systemu oraz procedur weryfikacji treści cyfrowych - tekstowych i nietekstowych (grafika, multimedia np.: audio, wideo) - 
przed ich publikacją, aby zapewnić ich zgodność z zasadami dostępności cyfrowej. System obejmuje także przypadek korekty treści już opublikowanych (np. publikacje nietekstowe w mediach społecznościowych).

## Zakres
Proces obejmuje wszystkie formaty materiałów publikowanych w kanałach cyfrowych organizacji, w tym:
- **Grafiki** (statyczne, infografiki, banery)
- **Pliki tekstowe** (PDF, DOCX, załączniki)
- **Multimedia** (audio, wideo, podcasty, krótkie formy wideo)

## Podstawy prawne i standardy
- **Web Content Accessibility Guidelines WCAG 2.1** (na poziomie AA)
- **Ustawa o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych**
- **Inne ustawy, wytyczne, standardy krajowe i branżowe**

## Opis procesu weryfikacji

### 1. Etap przygotowania treści
- Autor treści stosuje zasady dostępności:
  - **Teksty**: prosta struktura, nagłówki, listy, język zrozumiały.
  - **Grafiki**: dodanie tekstów alternatywnych (alt).
  - **Multimedia**: przygotowanie napisów rozszerzonych, transkrypcji, audiodeskrypcji (jeśli wymagane).

### 2. Weryfikacja techniczna
- Sprawdzenie:
  - **Grafiki** – czy mają poprawne opisy alternatywne.
  - **Pliki tekstowe** – czy są przygotowane prawidłowo (np. określony język, poprawna struktura nagłówków, obecność tekstów alternatywnych dla osadzonych grafik, zachowany wymagany wskaźnik kontrastu kolorystycznego między tekstem a tłem).
  - **Multimedia** – czy zawierają prawidłowo przygotowane napisy rozszerzone lub transkrypcje czy audiodeskrypcję.

### 3. Narzędzia wspierające
- Automatyczne testery (np. WAVE, axe, Pa11y).
- Walidatory PDF/Word (np. PAC, wbudowane funkcje edytorów treści).
- Kontrola manualna (np. czy alt jest adekwatny do treści prezentowanej na grafice, czy napisy są zsynchronizowane i zapewniają komplet informacji oraz płynność czytania).

### 4. Akceptacja i publikacja
- Publikacja możliwa dopiero po pozytywnej weryfikacji.
- W przypadku braków lub konieczności wprowadzenia poprawek – zwrot do autora z listą obszarów do uzupełnienia lub poprawienia oraz ze wskazaniem narzędzi czy funkcji wbudowanych w edytory, 
z pomocą których można treść prawidłowo przygotować. Skróceniu tego kroku sprzyja możliwość konsultacji ze specjalistą w zakresie dostępności cyfrowej telefonicznej, osobistej.

### 5. Przegląd treści opublikowanych przed kontrolą (media społecznościowe)
UWAGA: specyfiką publikacji w mediach społecznościowych jest dynamika ich powstawania i publikowania (harmonigram działań) oraz - szczególnie w przypadku większych instytucji - ich liczebność. 
Dodatkowo często zdarza się, że funkcje pozwalające zapewniać dostepność w platformach społecznościowych często działają wadliwie i dodanie tekstów alternatywnych lub napisów do filmów 
często nie jest możliwe w czasie publikacji, określonym harmonogramem działań promocyjnych, komunikacyjnych.
- Okresowy (np. cotygodniowy) przegląd publikacji w kanałach społecznościowych instytucji publicznej (obsługiwanych przez dużą grupę osób) pod kątem zgodniości z zasadami dostępności.
- W przypadku braków lub konieczności wprowadzenia poprawek do publikacji – informacja zwrotna do autora publikacji z listą obszarów do uzupełnienia lub poprawienia oraz z ustaleniem terminu wprowadzenia koniecznych zmian.

---

## Role i odpowiedzialności
- **Autor treści** – przygotowanie materiału zgodnie z zasadami dostępności cyfrowej.
- **Osoba weryfikująca** – sprawdzenie zgodności z WCAG i wytycznymi. Konsultacje specjalistyczne.
- **Administrator publikacji** – zatwierdzenie i publikacja.

---

## Rekomendowane dobre praktyki
- Szkolenia dla autorów i weryfikatorów z zakresu tworzenia treści dostępnych cyfrowo.
- [Stworzenie podręcznika dla twórców treści cyfrowo dostępnych](podrecznik-tworzenia-tresci-dostepnych)
- [Stosowanie listy kontrolnej dostępności dla każdego typu treści](listy-kontrolne-dostepnosci)
- Baza wiedzy z informacjami z zakresu tworzenia treści dostępnych do wykorzystania po szkoleniu.
- Konsultowanie wątpliwości lub trudności autora bezpośrednio ze specjalistą z zakresu tworzenia treści cyfrowo dostępnych (mailowo, telefonicznie, na dyżurach eksperckich).
- Regularne audyty dostępności publikowanych materiałów.

---

## Przykładowy workflow (diagram)

![Przykładowy przepływ pracy](/komunikacja/weryfikacja-tresci/weryfikacja-tresci.svg)


---


<!--
W kodzie, gdyby go uzyc, trzeba dodać przed każdym nawiasem kątowym jeszcze jeden myślnik (łącznik)

```mermaid
flowchart TD
    A[Autor treści] -> B[Przygotowanie materiału zgodnie z zasadami dostępności]
    B -> C[Weryfikacja techniczna przez osobę odpowiedzialną]
    C ->|Braki| D[Zwrot do autora z listą poprawek]
    C ->|OK| E[Akceptacja]
    E -> F[Publikacja w kanałach cyfrowych]

    %% Oddzielny proces dla social media
    B -> G[Publikacja w mediach społecznościowych]
    G -> H[Okresowy przegląd treści opublikowanych w mediach społecznościowych]
    H ->|Braki| I[Informacja zwrotna do autora + ustalenie terminu poprawek]
    I -> H[Okresowy przegląd treści opublikowanych w mediach społecznościowych]
    H ->|OK| E[Akceptacja]

-->

