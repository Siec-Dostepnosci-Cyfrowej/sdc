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
  const id = generateId(form.title);

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

export default function GeneratorDobrejPraktyki() {
  const [form, setForm] = useState<any>(initialForm);
  const [files, setFiles] = useState<File[]>([]);
  const [mdx, setMdx] = useState<string>("");

  // wczytanie z localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setForm({ ...initialForm, ...parsed });
      } catch {
        // ignorujemy błędne dane
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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selected]);
    e.target.value = "";
  };

  const removeFile = (name: string) => {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  };

  const handleExportZip = async () => {
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

  return (
    <div className="tw">
      <div className="tw-content max-w-5xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-[#003366]">
          Generator opisu dobrej praktyki (MDX)
        </h1>
        <p className="text-sm text-gray-700">
          Uzupełnij formularz. Na dole zobaczysz podgląd pliku <code>.mdx</code>.
          Możesz pobrać archiwum ZIP z plikiem MDX i załącznikami.
        </p>

        <Card>
          <CardContent className="p-4 space-y-4">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kolumna lewa – dane podstawowe */}
              <div className="space-y-3">
                <div>
                  <Label>Tytuł</Label>
                  <Input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Krótka nazwa dobrej praktyki"
                  />
                </div>

                <div>
                  <Label>Podmiot realizujący</Label>
                  <Input
                    name="podmiot"
                    value={form.podmiot}
                    onChange={handleChange}
                    placeholder="Nazwa instytucji"
                  />
                </div>

                <div>
                  <Label>Zgłaszający</Label>
                  <Input
                    name="zglaszajacy"
                    value={form.zglaszajacy}
                    onChange={handleChange}
                    placeholder="Imię i nazwisko"
                  />
                </div>

                <div>
                  <Label>Wymiar dostępności cyfrowej</Label>
                  <select
                    name="wymiar"
                    value={form.wymiar}
                    onChange={handleChange}
                    className="border rounded px-2 py-1 w-full text-sm"
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

              {/* Kolumna prawa – opis praktyki */}
              <div className="space-y-3">
                <div>
                  <Label>Krótki opis (500–1500 znaków)</Label>
                  <Textarea
                    name="opis"
                    value={form.opis}
                    onChange={handleChange}
                    rows={6}
                    maxLength={1500}
                    placeholder="Zwięźle opisz, na czym polega praktyka i jak pomaga w zarządzaniu dostępnością cyfrową."
                  />
                  <p className="text-xs text-gray-600 mt-1">
                    {opisLength}/1500 znaków
                  </p>
                </div>

                <div>
                  <Label>Problem</Label>
                  <Textarea
                    name="problem"
                    value={form.problem}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Jaki problem rozwiązuje ta praktyka?"
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
                    placeholder="Jakie rezultaty udało się osiągnąć?"
                  />
                </div>
              </div>
            </form>

            {/* Załączniki */}
            <div className="mt-4 space-y-2">
              <Label>Załączniki (artefakty)</Label>
              <p className="text-xs text-gray-700">
                Dodaj pliki ilustrujące praktykę (np. plan działania, procedury,
                konspekty zajęć, itp.).
              </p>
              <Input
                type="file"
                multiple
                onChange={handleFileChange}
                className="text-sm"
              />
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
              Ten tekst zostanie zapisany jako plik <code>.mdx</code>.
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
