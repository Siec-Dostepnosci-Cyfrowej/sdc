import React, { useState, useEffect, ChangeEvent } from "react";
import Layout from "@theme/Layout";
import JSZip from "jszip";
import mammoth from "mammoth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import "./tw/tw-tailwind.css";

interface MetaForm {
    title: string;
    description: string;
    sidebar_label: string;
    sidebar_position: string;
    keywords: string; // wprowadzane linia po linii, potem konwertowane na tablicę
    opracowanie: string;
}

interface OptionsForm {
    cleanupEmptyLines: boolean;
    normalizeHeadings: boolean;
}

const initialMeta: MetaForm = {
    title: "",
    description: "",
    sidebar_label: "",
    sidebar_position: "999",
    keywords: "",
    opracowanie: "",
};

const initialOptions: OptionsForm = {
    cleanupEmptyLines: true,
    normalizeHeadings: true,
};

function generateIdFromTitle(title: string): string {
    const base = title || "dokument";
    return base
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

function splitKeywords(text: string): string[] {
    return text
        .split(/\r?\n/)
        .map((k) => k.trim())
        .filter(Boolean);
}

function applyMarkdownCleanup(input: string, options: OptionsForm): string {
    let md = input || "";

    if (options.cleanupEmptyLines) {
        // redukuj potrójne i większe odstępy do podwójnych
        md = md.replace(/\n{3,}/g, "\n\n");
    }

    if (options.normalizeHeadings) {
        // proste wyrównanie nagłówków: ### -> ##, ## -> #
        md = md.replace(/^###\s+/gm, "## ");
        md = md.replace(/^##\s+/gm, "# ");
    }

    return md;
}

export default function GeneratorDocxMarkdown() {
    const [meta, setMeta] = useState<MetaForm>(initialMeta);
    const [options, setOptions] = useState<OptionsForm>(initialOptions);
    const [originalMarkdown, setOriginalMarkdown] = useState<string>("");
    const [markdown, setMarkdown] = useState<string>("");
    const [filenameBase, setFilenameBase] = useState<string>("converted");
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // -------------------------
    // Obsługa uploadu DOCX
    // -------------------------
    const handleDocxUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const base = file.name.replace(/\.docx$/i, "") || "converted";
        setFilenameBase(base);

        try {
            const arrayBuffer = await file.arrayBuffer();
            const result = await mammoth.convertToMarkdown({ arrayBuffer });
            const raw = result.value || "";

            setOriginalMarkdown(raw);

            const cleaned = applyMarkdownCleanup(raw, options);
            setMarkdown(cleaned);

            // jeśli tytuł pusty – spróbuj wstawić nazwę pliku jako domyślny tytuł
            if (!meta.title) {
                setMeta((prev) => ({
                    ...prev,
                    title: base,
                    sidebar_label: prev.sidebar_label || base,
                }));
            }
        } catch (err) {
            console.error(err);
            setErrors((prev) => ({
                ...prev,
                upload: "Nie udało się przetworzyć pliku DOCX.",
            }));
        }
    };

    // -------------------------
    // Zmiany metadanych
    // -------------------------
    const handleMetaChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setMeta((prev) => ({ ...prev, [name]: value }));
    };

    // -------------------------
    // Zmiana opcji przetwarzania
    // -------------------------
    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setOptions((prev) => ({ ...prev, [name]: checked }));
    };

    const handleApplyOptions = () => {
        const cleaned = applyMarkdownCleanup(markdown || originalMarkdown, options);
        setMarkdown(cleaned);
    };

    // -------------------------
    // Walidacja
    // -------------------------
    const validate = (): boolean => {
        const newErrors: { [key: string]: string } = {};
        if (!meta.title.trim()) newErrors.title = "Tytuł jest wymagany.";
        if (!meta.description.trim())
            newErrors.description = "Opis (description) jest wymagany.";
        if (!meta.sidebar_label.trim())
            newErrors.sidebar_label =
                "Etykieta w menu (sidebar_label) jest wymagana.";
        if (!markdown.trim())
            newErrors.markdown = "Brak treści Markdown do zapisania.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // -------------------------
    // Eksport do pliku .md
    // -------------------------
    const handleDownload = () => {
        if (!validate()) {
            alert("Proszę uzupełnić wymagane pola przed eksportem.");
            return;
        }

        const id = generateIdFromTitle(meta.title);
        const keywordsArray = splitKeywords(meta.keywords);

        const frontmatterLines: string[] = [
            "---",
            `id: ${id}`,
            `title: ${meta.title}`,
            `description: ${meta.description}`,
            `sidebar_label: ${meta.sidebar_label}`,
            `sidebar_position: ${meta.sidebar_position || "999"}`,
            "keywords:",
            ...(keywordsArray.length
                ? keywordsArray.map((k) => `  - ${k}`)
                : ["  - dostępność cyfrowa"]),
            `opracowanie: ${meta.opracowanie || ""}`,
            "---",
            "",
        ];

        const full = frontmatterLines.join("\n") + markdown;

        const blob = new Blob([full], {
            type: "text/markdown;charset=utf-8",
        });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${id || filenameBase}.md`;
        a.click();
    };

    // -------------------------
    // Eksport ZIP (frontmatter+markdown)
    // -------------------------
    const handleDownloadZip = async () => {
        if (!validate()) {
            alert("Proszę uzupełnić wymagane pola przed eksportem.");
            return;
        }

        const id = generateIdFromTitle(meta.title);
        const keywordsArray = splitKeywords(meta.keywords);

        const frontmatterLines: string[] = [
            "---",
            `id: ${id}`,
            `title: ${meta.title}`,
            `description: ${meta.description}`,
            `sidebar_label: ${meta.sidebar_label}`,
            `sidebar_position: ${meta.sidebar_position || "999"}`,
            "keywords:",
            ...(keywordsArray.length
                ? keywordsArray.map((k) => `  - ${k}`)
                : ["  - dostępność cyfrowa"]),
            `opracowanie: ${meta.opracowanie || ""}`,
            "---",
            "",
        ];

        const full = frontmatterLines.join("\n") + markdown;

        const zip = new JSZip();
        zip.file(`${id || filenameBase}.md`, full);

        const blob = await zip.generateAsync({ type: "blob" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${id || filenameBase}.zip`;
        a.click();
    };

    return (
        <Layout
            title="Generator DOCX na Markdown"
            description="Generator DOCX na Markdown dla Sieci Dostępności Cyfrowej"
        >
            <div className="tw">
                <div className="tw-content max-w-5xl mx-auto p-6 space-y-6">
                    <h1 className="tw-text-3xl tw-font-bold tw-text-[#003366]">
                        Generator Markdown z pliku DOCX
                    </h1>
                    <p className="tw-text-sm tw-text-gray-700">
                        Prześlij plik DOCX, uzupełnij metadane, a następnie pobierz gotowy
                        plik Markdown (z frontmatterem) lub archiwum ZIP.
                    </p>

                    {/* GŁÓWNA KARTA Z FORMULARZEM */}
                    <Card>
                        <CardContent className="tw-p-6 tw-space-y-6">
                            <div className="tw-two-col">
                                {/* LEWA KOLUMNA: upload + metadane + opcje + przyciski */}
                                <div className="tw-space-y-6">
                                    {/* Upload DOCX */}
                                    <div className="tw-space-y-2">
                                        <Label className="tw-block tw-font-semibold">Plik DOCX</Label>
                                        <Input
                                            type="file"
                                            accept=".docx"
                                            onChange={handleDocxUpload}
                                            className="tw-w-full tw-text-sm"
                                        />
                                        {errors.upload && (
                                            <p className="tw-text-xs tw-text-red-600">
                                                {errors.upload}
                                            </p>
                                        )}
                                    </div>

                                    {/* Sekcja 2: Metadane i opcje */}
                                    <div className="tw-space-y-4 tw-bg-gray-50 tw-border tw-rounded tw-p-4">
                                        <p className="tw-font-semibold tw-text-sm">
                                            Sekcja 2: Metadane i opcje
                                        </p>

                                        {/* title */}
                                        <div>
                                            <Label className="tw-block tw-font-semibold tw-mb-1">
                                                Tytuł (title) *
                                            </Label>
                                            <Input
                                                name="title"
                                                value={meta.title}
                                                onChange={handleMetaChange}
                                                className={
                                                    "tw-w-full tw-border tw-rounded tw-p-2 tw-text-sm" +
                                                    (errors.title ? " tw-border-red-500" : "")
                                                }
                                                placeholder="Tytuł dokumentu"
                                            />
                                            {errors.title && (
                                                <p className="tw-text-xs tw-text-red-600 tw-mt-1">
                                                    {errors.title}
                                                </p>
                                            )}
                                        </div>

                                        {/* description */}
                                        <div>
                                            <Label className="tw-block tw-font-semibold tw-mb-1">
                                                Opis (description) *
                                            </Label>
                                            <Textarea
                                                name="description"
                                                value={meta.description}
                                                onChange={handleMetaChange}
                                                rows={3}
                                                className={
                                                    "tw-w-full tw-border tw-rounded tw-p-2 tw-text-sm" +
                                                    (errors.description ? " tw-border-red-500" : "")
                                                }
                                                placeholder="Krótki opis zawartości dokumentu (150–200 znaków)"
                                            />
                                            {errors.description && (
                                                <p className="tw-text-xs tw-text-red-600 tw-mt-1">
                                                    {errors.description}
                                                </p>
                                            )}
                                        </div>

                                        {/* sidebar_label */}
                                        <div>
                                            <Label className="tw-block tw-font-semibold tw-mb-1">
                                                Etykieta w menu (sidebar_label) *
                                            </Label>
                                            <Input
                                                name="sidebar_label"
                                                value={meta.sidebar_label}
                                                onChange={handleMetaChange}
                                                className={
                                                    "tw-w-full tw-border tw-rounded tw-p-2 tw-text-sm" +
                                                    (errors.sidebar_label ? " tw-border-red-500" : "")
                                                }
                                                placeholder="Tekst wyświetlany w menu bocznym"
                                            />
                                            {errors.sidebar_label && (
                                                <p className="tw-text-xs tw-text-red-600 tw-mt-1">
                                                    {errors.sidebar_label}
                                                </p>
                                            )}
                                        </div>

                                        {/* sidebar_position */}
                                        <div>
                                            <Label className="tw-block tw-font-semibold tw-mb-1">
                                                Pozycja w menu (sidebar_position)
                                            </Label>
                                            <Input
                                                name="sidebar_position"
                                                type="number"
                                                value={meta.sidebar_position}
                                                onChange={handleMetaChange}
                                                className="tw-w-full tw-border tw-rounded tw-p-2 tw-text-sm"
                                            />
                                        </div>

                                        {/* keywords */}
                                        <div>
                                            <Label className="tw-block tw-font-semibold tw-mb-1">
                                                Słowa kluczowe (keywords)
                                            </Label>
                                            <Textarea
                                                name="keywords"
                                                value={meta.keywords}
                                                onChange={handleMetaChange}
                                                rows={3}
                                                className="tw-w-full tw-border tw-rounded tw-p-2 tw-text-sm"
                                                placeholder={
                                                    "Wpisz po jednym słowie / frazie w każdej linii.\nNp:\nWCAG\ndostępność cyfrowa\nzarządzanie"
                                                }
                                            />
                                            <p className="tw-text-xs tw-text-gray-600 tw-mt-1">
                                                W pliku zostaną zapisane jako tablica YAML.
                                            </p>
                                        </div>

                                        {/* opracowanie */}
                                        <div>
                                            <Label className="tw-block tw-font-semibold tw-mb-1">
                                                Opracowanie (opracowanie)
                                            </Label>
                                            <Input
                                                name="opracowanie"
                                                value={meta.opracowanie}
                                                onChange={handleMetaChange}
                                                className="tw-w-full tw-border tw-rounded tw-p-2 tw-text-sm"
                                                placeholder="Autor/ka, zespół, instytucja"
                                            />
                                        </div>

                                        {/* Opcje przetwarzania Markdown */}
                                        <div className="tw-mt-2 tw-pt-2 tw-border-t tw-space-y-2">
                                            <p className="tw-font-semibold tw-text-sm">
                                                Opcje przetwarzania Markdown
                                            </p>
                                            <label className="tw-flex tw-items-center tw-gap-2 tw-text-sm">
                                                <input
                                                    type="checkbox"
                                                    name="cleanupEmptyLines"
                                                    checked={options.cleanupEmptyLines}
                                                    onChange={handleOptionChange}
                                                />
                                                Usuń nadmiarowe puste linie
                                            </label>
                                            <label className="tw-flex tw-items-center tw-gap-2 tw-text-sm">
                                                <input
                                                    type="checkbox"
                                                    name="normalizeHeadings"
                                                    checked={options.normalizeHeadings}
                                                    onChange={handleOptionChange}
                                                />
                                                Ujednolić poziomy nagłówków
                                            </label>

                                            <Button
                                                type="button"
                                                onClick={handleApplyOptions}
                                                className="tw-mt-2"
                                            >
                                                Zastosuj wybrane opcje
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Przyciski eksportu */}
                                    <div className="tw-flex tw-flex-wrap tw-gap-3">
                                        <Button type="button" onClick={handleDownload}>
                                            Pobierz Markdown (.md)
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={handleDownloadZip}
                                        >
                                            Pobierz ZIP (.md + archiwum)
                                        </Button>
                                    </div>
                                </div>

                                {/* PRAWA KOLUMNA: edytor Markdown */}
                                <div className="tw-space-y-2">
                                    <Label className="tw-block tw-font-semibold">
                                        Edytor Markdown
                                    </Label>
                                    <Textarea
                                        value={markdown}
                                        onChange={(e) => setMarkdown(e.target.value)}
                                        className="tw-w-full tw-textarea-large tw-border tw-rounded tw-p-3 tw-text-sm tw-font-mono"
                                    />
                                    {errors.markdown && (
                                        <p className="tw-text-xs tw-text-red-600 tw-mt-1">
                                            {errors.markdown}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Podgląd wynikowego pliku */}
                    <Card>
                        <CardContent className="tw-p-4 tw-space-y-2">
                            <h2 className="tw-text-xl tw-font-semibold">
                                Podgląd wynikowego pliku
                            </h2>
                            <p className="tw-text-xs tw-text-gray-600">
                                Tak będzie wyglądała zawartość pliku po zapisaniu (frontmatter +
                                Markdown).
                            </p>
                            <pre className="tw-bg-gray-100 tw-p-4 tw-rounded tw-border tw-text-xs tw-whitespace-pre-wrap tw-overflow-x-auto">
                                {(() => {
                                    const id = generateIdFromTitle(meta.title || filenameBase);
                                    const keywordsArray = splitKeywords(meta.keywords);
                                    const frontmatterLines: string[] = [
                                        "---",
                                        `id: ${id}`,
                                        `title: ${meta.title}`,
                                        `description: ${meta.description}`,
                                        `sidebar_label: ${meta.sidebar_label}`,
                                        `sidebar_position: ${meta.sidebar_position || "999"}`,
                                        "keywords:",
                                        ...(keywordsArray.length
                                            ? keywordsArray.map((k) => `  - ${k}`)
                                            : ["  - dostępność cyfrowa"]),
                                        `opracowanie: ${meta.opracowanie || ""}`,
                                        "---",
                                        "",
                                    ];
                                    return frontmatterLines.join("\n") + markdown;
                                })()}
                            </pre>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
