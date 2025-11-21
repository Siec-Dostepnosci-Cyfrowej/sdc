import React, { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JSZip from "jszip";

// Izolacja Tailwind
import "./tw/tw-tailwind.css";

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
type LanguageWarnings = { zalecenie: string[]; rekomendacje: string[] };

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

  if (/\b(zrób|opracuj|przygotuj|zapewnij|zadbaj|rozważ|sprawdź|upewnij się|wprowadź|wdroż)\b/.test(lower)) {
    warnings.push(
      "Wykryto tryb rozkazujący. Zalecenia powinny stosować język neutralny, np. „Organizacje opracowują…”."
    );
  }

  if (/\b(ty|tobie|twoje|twoja|twój)\b/.test(lower)) {
    warnings.push("Wykryto bezpośrednie zwroty do odbiorcy. Zalecenia są kierowane do organizacji.");
  }

  if (/\b(powinien|powinna|powinno|powinni)\b/.test(lower)) {
    warnings.push("Występuje czasownik „powinien”. Zaleca się formę opisową, np. „Organizacje ustanawiają…”.");
  }

  return warnings;
}

function generateMdx(form: RecommendationForm, files: File[]): string {
  const id = generateId(form.title || "zalecenie");
  const heading = form.typ === "dezyderat" ? "Dezyderat" : "Zalecenie";
  const description = shorten(form.uzasadnienie || form.zalecenie, 160);

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
${linesToList(form.rekomendacje, "_Brak rekomendacji._")}

## 3. Uzasadnienie
${form.uzasadnienie || "_Brak uzasadnienia._"}

## 4. Podstawy prawne
${linesToList(form.podstawyPrawne, "_Brak podstaw prawnych._")}

## 5. Źródła i opracowania
${linesToList(form.zrodla, "_Brak źródeł._")}

## 6. Historia wersji
${linesToList(form.historia, "- Wersja 0.1 – projekt wstępny")}

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

  /** LOAD FROM STORAGE */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setForm({ ...initialForm, ...JSON.parse(saved) });
      } catch {}
    }
  }, []);

  /** SAVE TO STORAGE */
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  /** UPDATE MDX PREVIEW */
  useEffect(() => {
    setMdx(generateMdx(form, files));
  }, [form, files]);

  /** ANALYZE LANGUAGE */
  useEffect(() => {
    setLangWarnings({
      zalecenie: analyzeNeutralLanguage(form.zalecenie),
      rekomendacje: analyzeNeutralLanguage(form.rekomendacje),
    });
  }, [form.zalecenie, form.rekomendacje]);

  /** VALIDATION */
  const validate = (data: RecommendationForm): Errors => {
    const e: Errors = {};

    if (!data.title.trim()) e.title = "Tytuł jest wymagany.";
    if (!data.wymiar.trim()) e.wymiar = "Wymiar jest wymagany.";
    if (!data.zalecenie.trim()) e.zalecenie = "Treść zalecenia jest wymagana.";

    const sentences = data.zalecenie.split(/[.!?]+/).filter((s) => s.trim().length);
    if (sentences.length > 1) {
      e.zalecenie = (e.zalecenie || "") + " Zalecenie powinno być jednym zdaniem.";
    }

    if (!data.autor.trim()) e.autor = "Autor/ka opracowania jest wymagana.";
    return e;
  };

  /** INPUT CHANGE */
  const handleChange = (e: ChangeEvent<any>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  /** FILE UPLOAD */
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/zip",
      "application/x-zip-compressed",
    ];

    const newErrors: Errors = {};
    const newFiles: File[] = [];

    selected.forEach((file) => {
      if (!allowed.includes(file.type)) {
        newErrors[`file:${file.name}`] = "Tylko PDF, DOCX, ZIP.";
      } else if (file.size > 5 * 1024 * 1024) {
        newErrors[`file:${file.name}`] = "Maksymalny rozmiar pliku: 5 MB.";
      } else newFiles.push(file);
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

  /** EXPORT ZIP */
  const handleExportZip = async () => {
    const v = validate(form);
    if (Object.keys(v).length) {
      setErrors(v);
      alert("Popraw błędy w formularzu.");
      return;
    }

    const id = generateId(form.title);
    const zip = new JSZip();
    zip.file(`${id}.mdx`, mdx);
    files.forEach((f) => zip.file(f.name, f));

    const blob = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${id}.zip`;
    a.click();
  };

  return (
    <div className="tw">
      <div className="tw-content max-w-5xl mx-auto p-6 space-y-6">

        <h1 className="text-3xl font-bold text-[#003366]">Generator zaleceń</h1>
        <p className="text-sm text-gray-700">
          Formularz generuje plik <code>.mdx</code> zgodny z Księgą Zaleceń Sieci Dostępności Cyfrowej.
        </p>

        <Card>
          <CardContent className="p-4 space-y-4">

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* LEWA KOLUMNA */}
              <div className="space-y-4">

                <div>
                  <Label className="tw-label">Tytuł*</Label>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className={`tw-input ${errors.title ? "border-red-500" : ""}`}
                  />
                  {errors.title && <p className="tw-error">{errors.title}</p>}
                </div>

                <div>
                  <Label className="tw-label">Typ dokumentu*</Label>
                  <select
                    name="typ"
                    value={form.typ}
                    onChange={handleChange}
                    className="tw-input"
                  >
                    <option value="zalecenie">Zalecenie</option>
                    <option value="dezyderat">Dezyderat</option>
                  </select>
                </div>

                <div>
                  <Label className="tw-label">Wymiar*</Label>
                  <select
                    name="wymiar"
                    value={form.wymiar}
                    onChange={handleChange}
                    className={`tw-input ${errors.wymiar ? "border-red-500" : ""}`}
                  >
                    <option value="">-- wybierz wymiar --</option>
                    <option value="Komunikacja">Komunikacja</option>
                    <option value="Wiedza i umiejętności">Wiedza i umiejętności</option>
                    <option value="Wsparcie">Wsparcie</option>
                    <option value="Cykl życia TIK">Cykl życia TIK</option>
                    <option value="Pracownicy">Pracownicy</option>
                    <option value="Zaopatrzenie">Zaopatrzenie</option>
                    <option value="Zarządzanie i kultura">Zarządzanie i kultura</option>
                  </select>
                  {errors.wymiar && <p className="tw-error">{errors.wymiar}</p>}
                </div>

                <div>
                  <Label className="tw-label">Autor/ka opracowania*</Label>
                  <Input
                    name="autor"
                    value={form.autor}
                    onChange={handleChange}
                    className={`tw-input ${errors.autor ? "border-red-500" : ""}`}
                    placeholder="Imię i nazwisko"
                  />
                  {errors.autor && <p className="tw-error">{errors.autor}</p>}
                </div>

                <div>
                  <Label className="tw-label">Kontakt</Label>
                  <Input
                    name="kontakt"
                    value={form.kontakt}
                    onChange={handleChange}
                    className="tw-input"
                  />
                </div>
              </div>

              {/* PRAWA KOLUMNA */}
              <div className="space-y-4">

                <div>
                  <Label className="tw-label">Treść zalecenia (jedno zdanie)*</Label>
                  <Textarea
                    name="zalecenie"
                    value={form.zalecenie}
                    onChange={handleChange}
                    rows={3}
                    className={`tw-textarea ${errors.zalecenie ? "border-red-500" : ""}`}
                  />
                  {errors.zalecenie && <p className="tw-error">{errors.zalecenie}</p>}

                  {langWarnings.zalecenie.length > 0 && (
                    <ul className="tw-warning">
                      {langWarnings.zalecenie.map((w, i) => (
                        <li key={i}>• {w}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <Label className="tw-label">Rekomendacje (po 1 w wierszu)</Label>
                  <Textarea
                    name="rekomendacje"
                    value={form.rekomendacje}
                    onChange={handleChange}
                    rows={5}
                    className="tw-textarea"
                    placeholder={"Np.\nOrganizacje ustanawiają role...\nOrganizacje prowadzą szkolenia..."}
                  />

                  {langWarnings.rekomendacje.length > 0 && (
                    <ul className="tw-warning">
                      {langWarnings.rekomendacje.map((w, i) => (
                        <li key={i}>• {w}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </form>

            {/* STOPKA FORMULARZA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

              <div className="space-y-4">
                <div>
                  <Label className="tw-label">Uzasadnienie</Label>
                  <Textarea
                    name="uzasadnienie"
                    value={form.uzasadnienie}
                    onChange={handleChange}
                    rows={4}
                    className="tw-textarea"
                  />
                </div>

                <div>
                  <Label className="tw-label">Podstawy prawne</Label>
                  <Textarea
                    name="podstawyPrawne"
                    value={form.podstawyPrawne}
                    onChange={handleChange}
                    rows={4}
                    className="tw-textarea"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="tw-label">Źródła i opracowania</Label>
                  <Textarea
                    name="zrodla"
                    value={form.zrodla}
                    onChange={handleChange}
                    rows={4}
                    className="tw-textarea"
                  />
                </div>

                <div>
                  <Label className="tw-label">Historia wersji</Label>
                  <Textarea
                    name="historia"
                    value={form.historia}
                    onChange={handleChange}
                    rows={4}
                    className="tw-textarea"
                  />
                </div>
              </div>
            </div>

            {/* ZAŁĄCZNIKI */}
            <div className="tw-section space-y-2">
              <Label className="tw-label">Załączniki</Label>

              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="tw-input"
              />

              {Object.entries(errors)
                .filter(([k]) => k.startsWith("file:"))
                .map(([k, m]) => (
                  <p className="tw-error" key={k}>{m}</p>
                ))}

              {files.length > 0 && (
                <ul className="text-sm space-y-1">
                  {files.map((f) => (
                    <li key={f.name} className="flex justify-between">
                      <span>{f.name}</span>
                      <button
                        className="text-red-600 text-xs underline"
                        onClick={() => removeFile(f.name)}
                      >
                        Usuń
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <Button className="tw-button-primary" onClick={handleExportZip}>
                Pobierz ZIP (MDX + załączniki)
              </Button>
            </div>

          </CardContent>
        </Card>

        {/* PODGLĄD MDX */}
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-1">Podgląd MDX</h2>
            <pre className="tw-preview">{mdx}</pre>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
