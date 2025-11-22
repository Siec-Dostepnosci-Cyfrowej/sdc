---
id: z5-instrukcja-rejestracji-i-publikacji-mikroposwiadczen
title: Instrukcja rejestracji i publikacji mikropoświadczeń CKDC w systemie Europass Digital Credentials (EDC)
description: Projekt Instrukcji rejestracji i publikacji mikropoświadczeń CKDC  
sidebar_label: Instrukcji rejestracji...
sidebar_position: 7
keywords: [dostępność cyfrowa, mikropoświadczenie]
tags: [dostępność cyfrowa, mikropoświadczenie]
opracowanie: Stefan Wajda
data_zgloszenia: 10 listopada 2025 r.
ostatnia_aktualizacja: 10 listopada 2025 r.
wersja_robocza: true
---


## Metryczka przykładowa
**Data opracowania:** 2025-11-08  
**Wersja:** 1.0  
**Opracował:** Zespół ds. Mikropoświadczeń i Certyfikacji CKDC  
**Zatwierdził:** Dyrektor Centrum Kompetencji Dostępności Cyfrowej  

---

## 1. Cel dokumentu

Celem niniejszej instrukcji jest określenie zasad i procedur technicznych dotyczących **rejestracji, publikacji i weryfikacji mikropoświadczeń CKDC** w formacie **Europass Digital Credential (EDC, JSON-LD)**, zgodnie z wytycznymi Komisji Europejskiej i Europejskiego Portalu Europass.

---

## 2. Zakres stosowania

Instrukcja ma zastosowanie do:
- wszystkich mikropoświadczeń opracowanych i wydawanych przez CKDC,  
- działań Zespołu ds. Mikropoświadczeń i Certyfikacji,  
- procesów integracji z systemem **Europass Digital Credentials Infrastructure (EDCI)**,  
- publikacji i aktualizacji poświadczeń w Rejestrze CKDC oraz w portalu **Europass**.

---

## 3. Podstawy prawne i odniesienia

1. Decyzja Komisji Europejskiej z dnia 10 czerwca 2022 r. w sprawie ram mikropoświadczeń w edukacji i szkoleniach.  
2. Specyfikacja techniczna **Europass Digital Credentials Infrastructure (EDCI)**, wersja 3.2.  
3. Wytyczne CEDEFOP dotyczące interoperacyjności mikropoświadczeń.  
4. Standardy otwarte: **JSON-LD 1.1**, **schema.org**, **EQF**, **ESCO**.  
5. Polityka certyfikacji CKDC (rozdz. 9 – Rejestr mikropoświadczeń).

---

## 4. Definicje

- **Mikropoświadczenie (EDC)** – cyfrowy dokument w formacie JSON-LD, potwierdzający określone efekty uczenia się.  
- **Rejestr CKDC** – wewnętrzny system przechowujący dane o wydanych poświadczeniach.  
- **Issuer (wydawca)** – Centrum Kompetencji Dostępności Cyfrowej (CKDC).  
- **Holder (posiadacz)** – osoba, której przyznano mikropoświadczenie.  
- **Verification** – proces sprawdzenia autentyczności i integralności pliku EDC.  

---

## 5. Struktura mikropoświadczenia (JSON-LD)

Każde mikropoświadczenie CKDC posiada strukturę zgodną ze specyfikacją EDC.  
Poniżej przedstawiono podstawowy model:

```json
{
  "@context": "https://schema.org/",
  "@type": "EducationalOccupationalCredential",
  "identifier": "PL-ACC-001",
  "name": "Autor dostępnych dokumentów Word i PowerPoint",
  "description": "Mikropoświadczenie potwierdzające kompetencje w zakresie tworzenia dokumentów cyfrowych zgodnych z WCAG 2.1.",
  "educationalLevel": "EQF 4",
  "learningOutcome": [
    "Stosuje style i hierarchię nagłówków.",
    "Tworzy dokumenty zgodne z zasadami dostępności."
  ],
  "competencyRequired": [
    "Znajomość zasad WCAG 2.1.",
    "Umiejętność pracy w programach Word i PowerPoint."
  ],
  "educationalCredentialAwarded": {
    "@type": "EducationalOccupationalProgram",
    "name": "Szkolenie: Tworzenie dostępnych dokumentów biurowych",
    "provider": {
      "@type": "Organization",
      "name": "Centrum Kompetencji Dostępności Cyfrowej"
    }
  },
  "awardingBody": {
    "@type": "Organization",
    "name": "Centrum Kompetencji Dostępności Cyfrowej"
  },
  "validFor": "P3Y",
  "dateCreated": "2025-11-08",
  "credentialCategory": "Mikropoświadczenie kompetencji cyfrowych",
  "inLanguage": "pl"
}
