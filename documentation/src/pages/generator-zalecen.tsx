import React, { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JSZip from "jszip";
import "../css/tw-tailwind.css";

const STORAGE_KEY = "zalecenieForm";

interface RecommendationForm {
  title: string;
  typ: "zalecenie" | "dezyderat";
  wymiar: string;
  zalecenie: string;
  rekomendacje: string;
  uzasadnienie: string;
  podstawyPrawne: string;
  zrodla: string;
  historia: string;
  autor: string;
  kontakt: string;
}

type Errors = { [key: string]: string };

type LanguageWarnings = {
  zalecenie: string[];
  rekomendacje: string[];
};

const initialForm: RecommendationForm = {
  title: "",
  typ: "zalecenie",
  wymiar: "",
  zalecenie: "",
  rekomendacje: "",
  uzasadnienie: "",
  podstawyPrawne: "",
  zrodla: "",
  historia: "",
  autor: "",
  kontakt: "",
};

function generateId(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function shorten(text: string, max: number): string {
  const t = text.trim();
  if (!t) return "Zalecenie dotyczące zapewniania dostępności cyfrowej";
  if (t.length <= max) return t;
  return t.substring(0, max - 3).trimEnd() + "...";
}

function linesToList(text: string, placeholder: string): string {
  const lines = text
    .split(/\r?\n+/)
    .map((l) => l.trim())
    .filter(Boolean);
 if (!lines.length) return placeholder;

  return lines.map((l) => "- " + l).join("\n");
}

function analyzeNeutralLanguage(text: string): string[] {
  const warnings: string[] = [];
  const lower = text.toLowerCase();

  if (/(zrób|zrob|opracuj|przygotuj|zapewnij|zadbaj|rozważ|sprawdź|upewnij się|wprowadź|wdroż)/.test(lower)) {
    warnings.push(
      "Wykryto formy trybu rozkazującego (np. „zrób”, „opracuj”). W zaleceniach lepiej stosować formy neutralne, np. „Organizacje opracowują…”."
    );
  }

  if (/(ty|tobie|ciebie|cię|ciebie|twoja|twoje|twój|twoi)/.test(lower)) {
    warnings.push(
      "Wykryto bezpośrednie zwroty do adresata (2. osoba liczby pojedynczej). Zalecenia są kierowane do organizacji – rozważ użycie form bezosobowych lub „Organizacje…”."
    );
  }

  if (/(powinien|powinna|powinno|powinny|powinni)/.test(lower)) {
    warnings.push(
      "W tekście występuje czasownik „powinien” lub jego formy. Czasem lepiej zastąpić go opisem stanu, np. „Organizacje ustanawiają…”."
    );
  }

  return warnings;
}

function generateMdx(form: RecommendationForm, files: File[]): string {
  const id = generateId(form.title || "zalecenie");
  const heading = form.typ === "dezyderat" ? "Dezyderat" : "Zalecenie";
  const description = shorten(form.uzasadnienie || form.zalecenie, 160);

  const rekomendacjeList = linesToList(
    form.rekomendacje,
    "_Brak szczegółowych rekomendacji._"
  );

  const podstawyList = linesToList(
    form.podstawyPrawne,
    "_Brak wskazanych podstaw prawnych (zaleca się ich dodanie)._"
  );

  const zrodlaList = linesToList(
    form.zrodla,
    "_Brak wskazanych źródeł i opracowań._"
  );

  const historiaList = linesToList(
    form.historia,
    "- Wersja 0.1 – projekt wstępny"
  );

  return `---
id: ${id}
title: ${form.title}
description: ${description}
sidebar_label: ${form.title}
sidebar_position: 999
typ: ${form.typ}
wymiar: ${form.wymiar}
opracowanie: ${form.autor}
---

# ${heading}: ${form.title}

## 1. Zalecenie
${form.zalecenie}

## 2. Rekomendacje
${rekomendacjeList}

## 3. Uzasadnienie
${form.uzasadnienie || "_Uzasadnienie do uzupełnienia._"}

## 4. Podstawy prawne
${podstawyList}

## 5. Źródła i opracowania
${zrodlaList}

## 6. Historia wersji
${historiaList}

## Załączniki
${files.length ? files.map((f) => "- " + f.name).join("\n") : "_Brak załączników._"}
`;
}

export default function GeneratorZalecen() {
  const [form, setForm] = useState<RecommendationForm>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [mdx, setMdx] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [langWarnings, setLangWarnings] = useState<LanguageWarnings>({
    zalecenie: [],
    rekomendacje: [],
  });

  // load from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setForm({ ...initialForm, ...parsed });
      } catch {
        // ignore
      }
    }
  }, []);

  // save to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  // update MDX preview
  useEffect(() => {
    setMdx(generateMdx(form, files));
  }, [form, files]);

  // analyze neutral language
  useEffect(() => {
    setLangWarnings({
      zalecenie: analyzeNeutralLanguage(form.zalecenie),
      rekomendacje: analyzeNeutralLanguage(form.rekomendacje),
    });
  }, [form.zalecenie, form.rekomendacje]);

  const validate = (data: RecommendationForm): Errors => {
    const newErrors: Errors = {};

    if (!data.title.trim()) newErrors.title = "Tytuł jest wymagany.";
    if (!data.wymiar.trim())
      newErrors.wymiar = "Wymiar dostępności cyfrowej jest wymagany.";
    if (!data.zalecenie.trim())
      newErrors.zalecenie = "Treść zalecenia jest wymagana.";

    const sentenceParts = data.zalecenie
      .split(/[.!?]+/)
      .map((s) => s.trim())
      .filter(Boolean);
    if (sentenceParts.length > 1) {
      newErrors.zalecenie =
        (newErrors.zalecenie ? newErrors.zalecenie + " " : "") +
        "Postaraj się sformułować zalecenie w jednym zdaniu.";
    }

    if (!data.autor.trim()) newErrors.autor = "Autor/ka opracowania jest wymagana.";

    return newErrors;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    const accepted = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/zip",
      "application/x-zip-compressed",
    ];

    const newErrors: Errors = {};
    const newFiles: File[] = [];

    selected.forEach((file) => {
      if (!accepted.includes(file.type)) {
        newErrors[`file:${file.name}`] =
          "Dozwolone formaty załączników: PDF, DOCX, ZIP.";
      } else if (file.size > 5 * 1024 * 1024) {
        newErrors[`file:${file.name}`] =
          "Maksymalny rozmiar pojedynczego pliku to 5 MB.";
      } else {
        newFiles.push(file);
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
    setErrors((prev) => {
      const copy = { ...prev };
      delete copy[`file:${name}`];
      return copy;
    });
  };

  const handleExportZip = async () => {
    const v = validate(form);
    setErrors((prev) => ({ ...prev, ...v }));
    if (Object.keys(v).length > 0) {
      alert("Proszę poprawić błędy w formularzu przed eksportem.");
      return;
    }

    const id = generateId(form.title || "zalecenie");
    const zip = new JSZip();
    zip.file(`${id}.mdx`, mdx);
    files.forEach((file) => zip.file(file.name, file));

    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = `${id}.zip`;
    a.click();
  };

  return (
    <div className="tw">
      <div className="tw-content max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-[#003366]">
          Generator zaleceń i dezyderatów (MDX)
        </h1>
        <p className="text-sm text-gray-700">
          Wypełnij formularz, aby przygotować projekt zalecenia lub dezyderatu
          w spójnym formacie MDX. Poniżej zobaczysz podgląd generowanego
          dokumentu.
        </p>

        <Card>
          <CardContent className="p-4 space-y-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kolumna lewa – metryczka i typ */}
              <div className="space-y-3">
                <div>
                  <Label>Tytuł*</Label>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Krótka nazwa zalecenia"
                    className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                    <p className="text-xs text-red-600 mt-1">{errors.title}</p>
                  )}
                </div>

                <div>
                  <Label>Typ dokumentu*</Label>
                  <select
                    name="typ"
                    value={form.typ}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full text-sm"
                  >
                    <option value="zalecenie">Zalecenie</option>
                    <option value="dezyderat">Dezyderat</option>
                  </select>
                </div>

                <div>
                  <Label>Wymiar dostępności cyfrowej*</Label>
                  <select
                    name="wymiar"
                    value={form.wymiar}
                    onChange={handleChange}
                    className={
                      "border rounded px-2 py-1 w-full text-sm " +
                      (errors.wymiar ? "border-red-500" : "")
                    }
                  >
                    <option value="">-- wybierz wymiar --</option>
                    <option value="Komunikacja">Komunikacja</option>
                    <option value="Wiedza i umiejętności">
                      Wiedza i umiejętności
                    </option>
                    <option value="Wsparcie">Wsparcie</option>
                    <option value="Cykl życia TIK">Cykl życia TIK</option>
                    <option value="Pracownicy">Pracownicy</option>
                    <option value="Zaopatrzenie">Zaopatrzenie</option>
                    <option value="Zarządzanie i kultura">
                      Zarządzanie i kultura organizacyjna
                    </option>
                  </select>
                  {errors.wymiar && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.wymiar}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Autor/ka opracowania*</Label>
                  <Input
                    name="autor"
                    value={form.autor}
                    onChange={handleChange}
                    placeholder="Imię i nazwisko"
                    className={errors.autor ? "border-red-500" : ""}
                  />
                  {errors.autor && (
                    <p className="text-xs text-red-600 mt-1">{errors.autor}</p>
                  )}
                </div>

                <div>
                  <Label>Dane kontaktowe</Label>
                  <Input
                    name="kontakt"
                    value={form.kontakt}
                    onChange={handleChange}
                    placeholder="Adres e-mail lub telefon"
                  />
                </div>
              </div>

              {/* Kolumna prawa – treść zalecenia i rekomendacje */}
              <div className="space-y-3">
                <div>
                  <Label>
                    Treść zalecenia (jedno zdanie)*
                  </Label>
                  <Textarea
                    name="zalecenie"
                    value={form.zalecenie}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Np. „Organizacje opracowują i wdrażają politykę zarządzania dostępnością cyfrową…”"
                    className={errors.zalecenie ? "border-red-500" : ""}
                  />
                  {errors.zalecenie && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.zalecenie}
                    </p>
                  )}
                  {langWarnings.zalecenie.length > 0 && (
                    <ul className="mt-1 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2 space-y-1">
                      {langWarnings.zalecenie.map((w, i) => (
                        <li key={i}>• {w}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <Label>
                    Rekomendacje (jedna rekomendacja w każdym wierszu)
                  </Label>
                  <Textarea
                    name="rekomendacje"
                    value={form.rekomendacje}
                    onChange={handleChange}
                    rows={5}
placeholder={
  "Np.\nOrganizacje określają role i odpowiedzialności w zakresie dostępności cyfrowej.\nOrganizacje zapewniają szkolenia dla kluczowych ról."
}

                  />
                  {langWarnings.rekomendacje.length > 0 && (
                    <ul className="mt-1 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded p-2 space-y-1">
                      {langWarnings.rekomendacje.map((w, i) => (
                        <li key={i}>• {w}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </form>

            {/* Uzasadnienie, podstawy prawne, źródła, historia */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="space-y-3">
                <div>
                  <Label>Uzasadnienie</Label>
                  <Textarea
                    name="uzasadnienie"
                    value={form.uzasadnienie}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Najważniejsze motywy przemawiające za przyjęciem zalecenia lub dezyderatu."
                  />
                </div>

                <div>
                  <Label>Podstawy prawne (po jednej w wierszu)</Label>
                  <Textarea
                    name="podstawyPrawne"
                    value={form.podstawyPrawne}
                    onChange={handleChange}
                    rows={4}
                    placeholder={
                      "Np. Art. 5 ustawy o dostępności cyfrowej stron internetowych i aplikacji mobilnych podmiotów publicznych z dnia 4 kwietnia 2019 r. (Dz. U. 2019, poz. 848)."
                    }
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <Label>Źródła i opracowania (po jednym w wierszu)</Label>
                  <Textarea
                    name="zrodla"
                    value={form.zrodla}
                    onChange={handleChange}
                    rows={4}
                    placeholder={
                      "Np. W3C WAI, Accessibility Maturity Model, 2023."
                    }
                  />
                </div>

                <div>
                  <Label>Historia wersji (po jednej w wierszu)</Label>
                  <Textarea
                    name="historia"
                    value={form.historia}
                    onChange={handleChange}
                    rows={4}
                    placeholder={
                      "Np. 0.1 – wersja robocza zespołu; 0.9 – wersja przedłożona Sieci."
                    }
                  />
                </div>
              </div>
            </div>

            {/* Załączniki */}
            <div className="mt-4 space-y-2">
              <Label>Załączniki (artefakty)</Label>
              <p className="text-xs text-gray-700">
                Dodaj pliki ilustrujące zalecenie (np. wzory procedur, schematy
                procesów, szablony dokumentów). Dozwolone formaty: PDF, DOCX,
                ZIP. Maksymalny rozmiar pliku: 5 MB.
              </p>
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="text-sm"
              />

              {Object.entries(errors)
                .filter(([key]) => key.startsWith("file:"))
                .map(([key, msg]) => (
                  <p key={key} className="text-xs text-red-600">
                    {msg}
                  </p>
                ))}

              {files.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm">
                  {files.map((file) => (
                    <li
                      key={file.name}
                      className="flex items-center justify-between"
                    >
                      <span>{file.name}</span>
                      <button
                        type="button"
                        className="text-red-600 text-xs underline"
                        onClick={() => removeFile(file.name)}
                      >
                        Usuń
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4">
              <Button type="button" onClick={handleExportZip}>
                Pobierz ZIP (MDX + załączniki)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Podgląd MDX */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Podgląd MDX</h2>
            <p className="text-xs text-gray-600">
              Ten tekst zostanie zapisany jako plik <code>.mdx</code> i może
              zostać opublikowany w Księdze zaleceń Sieci.
            </p>
            <pre className="bg-gray-100 p-3 rounded text-xs whitespace-pre-wrap overflow-x-auto border border-gray-200">
{mdx}
            </pre>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
