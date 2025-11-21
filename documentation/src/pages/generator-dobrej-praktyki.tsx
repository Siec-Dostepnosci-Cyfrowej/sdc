import React, { useState, useEffect, ChangeEvent } from "react";
import Layout from "@theme/Layout";
import JSZip from "jszip";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";


// Import izolowanego Tailwind
import "./tw/tw-tailwind.css";

const STORAGE_KEY = "dobraPraktykaForm";

const initialForm = {
  title: "",
  opis: "",
  podmiot: "",
  zglaszajacy: "",
  wymiar: "",
  kontakt: "",
  problem: "",
  cele: "",
  dzialania: "",
  rezultaty: "",
};

function generateId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function generateMdx(form: any, files: File[]) {
  const id = generateId(form.title || "dobra-praktyka");

  return `---
id: ${id}
title: ${form.title}
description: Krótki opis dobrej praktyki
sidebar_label: ${form.title}
sidebar_position: 999
opracowanie: ${form.zglaszajacy}
---

# Dobra praktyka: ${form.title}

## Metryczka
- **Podmiot realizujący:** ${form.podmiot}
- **Zgłaszający:** ${form.zglaszajacy}
- **Wymiar:** ${form.wymiar}
- **Kontakt:** ${form.kontakt}

## Krótki opis
${form.opis}

## Problem
${form.problem}

## Cele
${form.cele}

## Jak wdrożono praktykę
${form.dzialania}

## Rezultaty
${form.rezultaty}

## Załączniki
${files.length ? files.map((f) => "- " + f.name).join("\n") : "_Brak załączników._"}
`;
}

type Errors = { [key: string]: string };

export default function GeneratorDobrejPraktyki() {
  const [form, setForm] = useState<any>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [mdx, setMdx] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  // Load from localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setForm({ ...initialForm, ...JSON.parse(saved) });
      } catch {}
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  // Generate MDX preview
  useEffect(() => {
    setMdx(generateMdx(form, files));
  }, [form, files]);

  // Validation
  const validate = (data: any): Errors => {
    const newErrors: Errors = {};

    if (!data.title.trim()) newErrors.title = "Tytuł jest wymagany.";
    if (!data.podmiot.trim()) newErrors.podmiot = "Podmiot jest wymagany.";
    if (!data.zglaszajacy.trim())
      newErrors.zglaszajacy = "Zgłaszający jest wymagany.";
    if (!data.wymiar.trim())
      newErrors.wymiar = "Wymiar dostępności jest wymagany.";

    const opisLen = data.opis.trim().length;
    if (opisLen < 500 || opisLen > 1500)
      newErrors.opis = "Opis musi mieć od 500 do 1500 znaków.";

    return newErrors;
  };

  // Live validation on key fields
  useEffect(() => {
    setErrors((prev) => ({ ...prev, ...validate(form) }));
  }, [form.title, form.podmiot, form.zglaszajacy, form.wymiar, form.opis]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
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
        newErrors[`file:${file.name}`] = "Dozwolone formaty: PDF, DOCX, ZIP.";
      } else if (file.size > 5 * 1024 * 1024) {
        newErrors[`file:${file.name}`] = "Maksymalny rozmiar to 5 MB.";
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
    const formErrors = validate(form);
    setErrors((prev) => ({ ...prev, ...formErrors }));
    if (Object.keys(formErrors).length > 0) {
      alert("Proszę poprawić błędy przed eksportem.");
      return;
    }

    const id = generateId(form.title);
    const zip = new JSZip();
    zip.file(`${id}.mdx`, mdx);
    files.forEach((file) => zip.file(file.name, file));

    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = `${id}.zip`;
    a.click();
  };

    const opisLength = (form.opis || "").trim().length;
    const opisValid = opisLength >= 500 && opisLength <= 1500;

    return (
        <Layout
            title="Generator opisu dobrej praktyki"
            description="Generator MDX dla opisów dobrych praktyk w Sieci Dostępności Cyfrowej"
        >
    <div className="tw">
      <div className="tw-content max-w-5xl mx-auto p-6 space-y-6">

        <h1 className="text-3xl font-bold text-[#003366]">
          Generator opisu dobrej praktyki (MDX)
        </h1>

        <p className="text-sm text-gray-700">
          Uzupełnij formularz. Na końcu pobierzesz ZIP z plikiem MDX i załącznikami.
        </p>

        <Card>
          <CardContent className="p-4 space-y-4">

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Lewa kolumna */}
              <div className="space-y-4">

                {/* Tytuł */}
                <div>
                  <Label className="tw-label">Tytuł*</Label>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    className={`tw-input ${errors.title ? "border-red-500" : ""}`}
                    placeholder="Krótka nazwa dobrej praktyki"
                  />
                  {errors.title && <p className="tw-error">{errors.title}</p>}
                </div>

                {/* Podmiot */}
                <div>
                  <Label className="tw-label">Podmiot realizujący*</Label>
                  <Input
                    name="podmiot"
                    value={form.podmiot}
                    onChange={handleChange}
                    className={`tw-input ${errors.podmiot ? "border-red-500" : ""}`}
                    placeholder="Nazwa instytucji"
                  />
                  {errors.podmiot && <p className="tw-error">{errors.podmiot}</p>}
                </div>

                {/* Zgłaszający */}
                <div>
                  <Label className="tw-label">Zgłaszający*</Label>
                  <Input
                    name="zglaszajacy"
                    value={form.zglaszajacy}
                    onChange={handleChange}
                    className={`tw-input ${errors.zglaszajacy ? "border-red-500" : ""}`}
                    placeholder="Imię i nazwisko"
                  />
                  {errors.zglaszajacy && (
                    <p className="tw-error">{errors.zglaszajacy}</p>
                  )}
                </div>

                {/* Wymiar */}
                <div>
                  <Label className="tw-label">Wymiar dostępności cyfrowej*</Label>
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

                {/* Kontakt */}
                <div>
                  <Label className="tw-label">Dane kontaktowe</Label>
                  <Input
                    name="kontakt"
                    value={form.kontakt}
                    onChange={handleChange}
                    className="tw-input"
                    placeholder="Adres e-mail lub numer telefonu"
                  />
                </div>

              </div>

              {/* Prawa kolumna */}
              <div className="space-y-4">

                {/* Opis */}
                <div>
                  <Label className="tw-label">Krótki opis (500–1500 znaków)*</Label>
                  <Textarea
                    name="opis"
                    value={form.opis}
                    onChange={handleChange}
                    className={`tw-textarea ${
                      !form.opis
                        ? ""
                        : opisLength >= 500 && opisLength <= 1500
                        ? "border-green-600"
                        : "border-red-500"
                    }`}
                    rows={6}
                    maxLength={1500}
                    placeholder="Zwięźle opisz, na czym polega praktyka i jak pomaga w zarządzaniu dostępnością."
                  />
                  <div className="flex justify-between tw-counter">
                    <span className={opisLength >= 500 && opisLength <= 1500 ? "text-green-600" : "text-red-600"}>
                      {opisLength}/1500
                    </span>
                    {errors.opis && <span className="text-red-600">{errors.opis}</span>}
                  </div>
                </div>

                {/* Problem */}
                <div>
                  <Label className="tw-label">Problem</Label>
                  <Textarea
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    className="tw-textarea"
                    rows={3}
                    placeholder="Jaki problem rozwiązuje praktyka?"
                  />
                </div>

                {/* Cele */}
                <div>
                  <Label className="tw-label">Cele</Label>
                  <Textarea
                    name="cele"
                    value={form.cele}
                    onChange={handleChange}
                    className="tw-textarea"
                    rows={3}
                    placeholder="Jakie cele realizuje praktyka?"
                  />
                </div>

                {/* Wdrożenie */}
                <div>
                  <Label className="tw-label">Jak wdrożono praktykę</Label>
                  <Textarea
                    name="dzialania"
                    value={form.dzialania}
                    onChange={handleChange}
                    className="tw-textarea"
                    rows={4}
                    placeholder="Najważniejsze działania i etapy."
                  />
                </div>

                {/* Rezultaty */}
                <div>
                  <Label className="tw-label">Rezultaty</Label>
                  <Textarea
                    name="rezultaty"
                    value={form.rezultaty}
                    onChange={handleChange}
                    className="tw-textarea"
                    rows={3}
                    placeholder="Jakie efekty uzyskano?"
                  />
                </div>

              </div>
            </form>

            {/* Załączniki */}
            <div className="tw-section space-y-2">
              <Label className="tw-label">Załączniki (PDF, DOCX, ZIP)</Label>

              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="tw-input text-sm"
              />

              {Object.entries(errors)
                .filter(([k]) => k.startsWith("file:"))
                .map(([k, m]) => (
                  <p key={k} className="tw-error">{m}</p>
                ))}

              {files.length > 0 && (
                <ul className="space-y-1 text-sm">
                  {files.map((file) => (
                    <li key={file.name} className="flex justify-between">
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

            <div>
              <Button className="tw-button-primary" onClick={handleExportZip}>
                Pobierz ZIP (MDX + załączniki)
              </Button>
            </div>

          </CardContent>
        </Card>

        {/* Podgląd MDX */}
        <Card>
          <CardContent className="p-4 space-y-2">
            <h2 className="text-xl font-semibold">Podgląd MDX</h2>

            <pre className="tw-preview">
{mdx}
            </pre>
          </CardContent>
                </Card>
            </div>
        </div>
    </Layout >
  );
}
