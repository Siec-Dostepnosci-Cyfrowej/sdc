import React, { useState, useEffect, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import JSZip from "jszip";
import "../css/tw-tailwind.css";

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
${files.map((f) => "- " + f.name).join("\n")}
`;
}

type Errors = { [key: string]: string };

export default function GeneratorDobrejPraktyki() {
  const [form, setForm] = useState<any>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [mdx, setMdx] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});

  // wczytanie z localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setForm({ ...initialForm, ...parsed });
      } catch {
        // ignorujemy błędny zapis
      }
    }
  }, []);

  // zapis do localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  // generowanie MDX na żywo
  useEffect(() => {
    setMdx(generateMdx(form, files));
  }, [form, files]);

  // walidacja formularza
  const validate = (data: any): Errors => {
    const newErrors: Errors = {};
    if (!data.title.trim()) newErrors.title = "Tytuł jest wymagany.";
    if (!data.podmiot.trim())
      newErrors.podmiot = "Podmiot realizujący jest wymagany.";
    if (!data.zglaszajacy.trim())
      newErrors.zglaszajacy = "Zgłaszający jest wymagany.";
    if (!data.wymiar.trim())
      newErrors.wymiar = "Wymiar dostępności cyfrowej jest wymagany.";

    const opisLen = data.opis.trim().length;
    if (opisLen < 500 || opisLen > 1500) {
      newErrors.opis = "Krótki opis musi mieć od 500 do 1500 znaków.";
    }

    return newErrors;
  };

  // walidacja na żywo przy zmianie pól
  useEffect(() => {
    setErrors((prev) => ({ ...prev, ...validate(form) }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const newFileErrors: Errors = {};
    const newFiles: File[] = [];

    selected.forEach((file) => {
      if (!accepted.includes(file.type)) {
        newFileErrors[`file:${file.name}`] =
          "Dozwolone formaty: PDF, DOCX, ZIP.";
      } else if (file.size > 5 * 1024 * 1024) {
        newFileErrors[`file:${file.name}`] =
          "Maksymalny rozmiar pliku to 5 MB.";
      } else {
        newFiles.push(file);
      }
    });

    setErrors((prev) => ({ ...prev, ...newFileErrors }));
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
      alert("Proszę poprawić błędy w formularzu przed eksportem.");
      return;
    }

    const id = generateId(form.title || "dobra-praktyka");
    const zip = new JSZip();

    zip.file(`${id}.mdx`, mdx);
    files.forEach((file) => {
      zip.file(file.name, file);
    });

    const content = await zip.generateAsync({ type: "blob" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(content);
    a.download = `${id}.zip`;
    a.click();
  };

  const opisLength = (form.opis || "").trim().length;
  const opisValid = opisLength >= 500 && opisLength <= 1500;

  return (
    <div className="tw">
      <div className="tw-content max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-[#003366]">
          Generator opisu dobrej praktyki (MDX)
        </h1>
        <p className="text-sm text-gray-700">
          Wypełnij formularz. Na dole zobaczysz podgląd pliku <code>.mdx</code>.
          Możesz pobrać archiwum ZIP z plikiem MDX i załącznikami.
        </p>

        <Card>
          <CardContent className="p-4 space-y-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lewa kolumna – metryczka */}
              <div className="space-y-3">
                <div>
                  <Label>Tytuł*</Label>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Krótka nazwa dobrej praktyki"
                    className={errors.title ? "border-red-500" : ""}
                  />
                  {errors.title && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.title}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Podmiot realizujący*</Label>
                  <Input
                    name="podmiot"
                    value={form.podmiot}
                    onChange={handleChange}
                    placeholder="Nazwa instytucji"
                    className={errors.podmiot ? "border-red-500" : ""}
                  />
                  {errors.podmiot && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.podmiot}
                    </p>
                  )}
                </div>

                <div>
                  <Label>Zgłaszający*</Label>
                  <Input
                    name="zglaszajacy"
                    value={form.zglaszajacy}
                    onChange={handleChange}
                    placeholder="Imię i nazwisko"
                    className={errors.zglaszajacy ? "border-red-500" : ""}
                  />
                  {errors.zglaszajacy && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.zglaszajacy}
                    </p>
                  )}
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
                      Zarządzanie i kultura
                    </option>
                  </select>
                  {errors.wymiar && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.wymiar}
                    </p>
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

              {/* Prawa kolumna – opis praktyki */}
              <div className="space-y-3">
                <div>
                  <Label>Krótki opis (500–1500 znaków)*</Label>
                  <Textarea
                    name="opis"
                    value={form.opis}
                    onChange={handleChange}
                    rows={6}
                    maxLength={1500}
                    placeholder="Zwięźle opisz, na czym polega praktyka i jak pomaga w zarządzaniu dostępnością cyfrową."
                    className={
                      !form.opis
                        ? ""
                        : opisValid
                        ? "border-green-600"
                        : "border-red-500"
                    }
                  />
                  <div className="flex justify-between text-xs mt-1">
                    <span
                      className={
                        opisValid ? "text-green-700" : "text-red-600"
                      }
                    >
                      {opisLength}/1500 znaków
                    </span>
                    {errors.opis && (
                      <span className="text-red-600">{errors.opis}</span>
                    )}
                  </div>
                </div>

                <div>
                  <Label>Problem</Label>
                  <Textarea
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Jaki problem lub wyzwanie rozwiązuje ta praktyka?"
                  />
                </div>

                <div>
                  <Label>Cele</Label>
                  <Textarea
                    name="cele"
                    value={form.cele}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Jakie cele miała realizować praktyka?"
                  />
                </div>

                <div>
                  <Label>Jak wdrożono praktykę</Label>
                  <Textarea
                    name="dzialania"
                    value={form.dzialania}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Najważniejsze kroki, działania, etapy wdrożenia."
                  />
                </div>

                <div>
                  <Label>Rezultaty</Label>
                  <Textarea
                    name="rezultaty"
                    value={form.rezultaty}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Jakie konkretne rezultaty udało się osiągnąć?"
                  />
                </div>
              </div>
            </form>

            {/* Załączniki */}
            <div className="mt-4 space-y-2">
              <Label>Załączniki (artefakty)</Label>
              <p className="text-xs text-gray-700">
                Dodaj pliki ilustrujące praktykę (np. plan działania, procedury,
                konspekty zajęć). Dozwolone formaty: PDF, DOCX, ZIP. Maksymalny
                rozmiar pliku: 5 MB.
              </p>
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="text-sm"
              />

              {/* błędy plików */}
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
              Ten tekst zostanie zapisany jako plik <code>.mdx</code> w
              archiwum ZIP.
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
