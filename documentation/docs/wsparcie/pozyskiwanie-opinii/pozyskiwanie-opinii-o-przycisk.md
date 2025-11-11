---
id: pozyskiwanie-opinii-o-przycisk
title: o Przycisku Zgłoś problem z dostępnością
description: O stosowaniu przycisku Zgłoś problem z dostępnością
sidebar_label: Uwagi o  przycisku
sidebar_position: 5
keywords: [cykl życia TIK, dostępność cyfrowa,dobre praktyki, zalecenia, opinie]
tags: [cykl życia TIK, dostępność cyfrowa,dobre praktyki, zalecenia, opinie]
opracowanie: Cezary Tomczyk
data_zgloszenia: 26 października 2025 r.
ostatnia_aktualizacja: 10 listopada 2025 r.
wersja_robocza: true
---

## Zasady wdrożenia i dostosowania

- **Widoczność**:\
  Przycisk powinien być widoczny na wszystkich podstronach (np. w prawym dolnym rogu lub w nagłówku witryny). 
  Można dodać wersję kontrastową w zależności od motywu strony.
- **Dostępność**:\
  Przycisk ma atrybuty aria-expanded i aria-controls oraz czytelny tekst.\
  Cały panel jest możliwy do obsługi z klawiatury i czytnikami ekranu.\
  Formularz nie wymaga JavaScript do działania podstawowego (skrypt służy tylko do rozwijania/zamykania panelu).
- **Integracja z mechanizmem prawnym:**:\
  Zgłoszenia można kierować na adres e-mail podany w deklaracji dostępności.\
  Formularz może być rozszerzony o klauzulę RODO i przekierowanie do systemu rejestrującego zgłoszenia (np. rejestr w pliku CSV lub system ticketowy).
- **Anonimowość:**:\
  Użytkownik może nie podawać danych osobowych.\
  W przypadku formalnych żądań dostępności należy wymagać podania danych kontaktowych (zgodnie z art. 10 ust. 2 ustawy o dostępności cyfrowej).

## Wersja treści RODO / klauzuli informacyjnej

> Administratorem danych osobowych jest [pełna nazwa podmiotu publicznego].\
  Dane przetwarzane są wyłącznie w celu obsługi zgłoszenia dotyczącego dostępności cyfrowej.
  Podanie danych osobowych jest dobrowolne, ale może być niezbędne do otrzymania odpowiedzi.
  Masz prawo dostępu do swoich danych, ich poprawiania oraz żądania usunięcia.
  Szczegółowe informacje znajdują się w Polityce prywatności

## Wskazówki dla administratora

- Ustaw w atrybucie action="/sciezka-do-obslugi-zgloszenia" właściwy adres obsługi formularza (np. endpoint w CMS, adres e-mail lub system ticketowy).
- W CMS można osadzić ten kod jako blok HTML lub shortcode w stopce szablonu.
- Zapewnij odpowiedni kontrast i widoczność przycisku, dostosowaną do motywu graficznego.
- Formularz powinien działać poprawnie z klawiatury i czytnikami ekranu – testuj m.in. z NVDA i VoiceOver.
- Zgłoszenia można zapisywać w rejestrze (np. CSV lub system CRM) w celu monitorowania realizacji obowiązków ustawowych.
- Formularz można uzupełnić o potwierdzenie wysyłki (komunikat: „Dziękujemy za zgłoszenie problemu z dostępnością. Odpowiemy w ciągu 7 dni.”).

Dodatkowe możliwości (warianty rozszerzone)

- Dodanie pola typu „checkbox” do akceptacji polityki prywatności (jeśli wymagane przez RODO).
- Możliwość przesyłania zrzutu ekranu (jako plik pomocniczy).
- Połączenie z systemem ticketowym (np. ServiceDesk, HelpDesk, ePUAP).
- Statystyka zgłoszeń widoczna w panelu administratora (np. „Liczba zgłoszeń w tym miesiącu: 12”).








