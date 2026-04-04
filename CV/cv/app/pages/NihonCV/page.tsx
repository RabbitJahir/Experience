"use client";

// ─────────────────────────────────────────────────────────────────────────────
// NihonCV – Japanese-style CV builder
//
// PDF: window.print() + @media print CSS → crisp vector output, no pixelation.
// Save: "Save as PDF" button → browser print dialog → Destination: Save as PDF.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState, useCallback, useRef } from "react";

// ── Types ────────────────────────────────────────────────────────────────────

interface TableRow {
  [key: string]: string;
}

interface PersonalInfo {
  fullName: string;
  dob: string;
  gender: string;
  address: string;
  phone: string;
  email: string;
  statement: string;
  commute: string;
  dependents: string;
  health: string;
  date: string;
  signature: string;
}

interface SectionDef {
  key: string;
  title: string;
  columns: string[];
  fields: string[];
  template: TableRow;
  widths?: string[];
}

// ── Section config ────────────────────────────────────────────────────────────

const SECTIONS: SectionDef[] = [
  {
    key: "education",
    title: "Education",
    columns: ["Date", "Institution", "Remarks"],
    fields: ["date", "institution", "remarks"],
    template: { date: "", institution: "", remarks: "" },
    widths: ["20%", "44%", "36%"],
  },
  {
    key: "skills",
    title: "Skills",
    columns: ["Skill", "Proficiency & Duration"],
    fields: ["skill", "time"],
    template: { skill: "", time: "" },
    widths: ["55%", "45%"],
  },
  {
    key: "work",
    title: "Work Experience",
    columns: ["Date", "Company / Organization", "Position"],
    fields: ["date", "company", "position"],
    template: { date: "", company: "", position: "" },
    widths: ["20%", "44%", "36%"],
  },
  {
    key: "qualifications",
    title: "Qualifications / Licenses",
    columns: ["Date", "Qualification"],
    fields: ["date", "qualification"],
    template: { date: "", qualification: "" },
    widths: ["26%", "74%"],
  },
  {
    key: "hobbies",
    title: "Hobbies & Interests",
    columns: ["Hobby", "Interest"],
    fields: ["hobby", "interest"],
    template: { hobby: "", interest: "" },
    widths: ["38%", "62%"],
  },
];

// ── CellField ─────────────────────────────────────────────────────────────────
// Edit mode    → auto-growing textarea: text wraps, row height expands as you type
// Preview mode → plain read-only <div>: not editable, text wraps naturally,
//                looks identical to what will be printed

function CellField({
  value,
  onChange,
  placeholder,
  isPreview,
  minRows = 1,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  isPreview: boolean;
  minRows?: number;
}) {
  const autoGrow = (el: HTMLTextAreaElement) => {
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  if (isPreview) {
    return (
      <div
        style={{
          fontSize: "9pt",
          fontFamily: "inherit",
          padding: "3px 4px",
          minHeight: "20px",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          lineHeight: "1.5",
          color: "#111",
        }}
      >
        {value}
      </div>
    );
  }

  return (
    <textarea
      rows={minRows}
      value={value}
      placeholder={placeholder}
      onChange={(e) => {
        onChange(e.target.value);
        autoGrow(e.target);
      }}
      onFocus={(e) => autoGrow(e.target)}
      style={{
        width: "100%",
        border: "none",
        borderBottom: "1px solid #bbb",
        fontSize: "9pt",
        fontFamily: "inherit",
        background: "transparent",
        padding: "3px 4px",
        boxSizing: "border-box",
        outline: "none",
        resize: "none",
        overflow: "hidden",
        lineHeight: "1.5",
        display: "block",
        minHeight: "24px",
      }}
    />
  );
}

// ── Row helpers ───────────────────────────────────────────────────────────────

function addRow(setter: React.Dispatch<React.SetStateAction<TableRow[]>>, template: TableRow) {
  setter((prev) => [...prev, { ...template }]);
}

function removeRow(setter: React.Dispatch<React.SetStateAction<TableRow[]>>, index: number) {
  setter((prev) => prev.filter((_, i) => i !== index));
}

function updateRow(
  setter: React.Dispatch<React.SetStateAction<TableRow[]>>,
  index: number,
  field: string,
  value: string
) {
  setter((prev) => {
    const next = [...prev];
    next[index] = { ...next[index], [field]: value };
    return next;
  });
}

// ── Shared styles ─────────────────────────────────────────────────────────────

const TABLE_BASE: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "10px",
  tableLayout: "fixed",
  fontSize: "9pt",
};

const TH_HEADER: React.CSSProperties = {
  background: "#1a1a1a",
  color: "#fff",
  textAlign: "center",
  fontSize: "9pt",
  fontWeight: 600,
  padding: "5px 8px",
  letterSpacing: "0.04em",
};

const TH_COL: React.CSSProperties = {
  background: "#f0f0f0",
  fontWeight: 600,
  fontSize: "8.5pt",
  padding: "4px 6px",
  borderBottom: "1px solid #ccc",
  textAlign: "left",
};

const TD_CELL: React.CSSProperties = {
  padding: "2px 4px",
  borderBottom: "1px solid #e8e8e8",
  verticalAlign: "top",
};

const TD_LABEL: React.CSSProperties = {
  background: "#f5f5f5",
  fontWeight: 600,
  fontSize: "8.5pt",
  padding: "5px 8px",
  borderBottom: "1px solid #ddd",
  whiteSpace: "nowrap",
  width: "26%",
  verticalAlign: "top",
};

const BTN_TOOLBAR: React.CSSProperties = {
  padding: "7px 16px",
  border: "none",
  borderRadius: "4px",
  color: "#fff",
  fontWeight: 600,
  fontSize: "12px",
  cursor: "pointer",
};

const BTN_SMALL: React.CSSProperties = {
  padding: "1px 8px",
  border: "none",
  borderRadius: "3px",
  background: "#2c3e50",
  color: "#fff",
  fontSize: "13px",
  cursor: "pointer",
  lineHeight: "18px",
  fontWeight: 700,
};

// ── Main component ────────────────────────────────────────────────────────────

export default function NihonCV() {
  const [info, setInfo] = useState<PersonalInfo>({
    fullName: "", dob: "", gender: "", address: "",
    phone: "", email: "", statement: "",
    commute: "", dependents: "", health: "", date: "", signature: "",
  });

  const [rows, setRows] = useState<Record<string, TableRow[]>>(
    Object.fromEntries(SECTIONS.map((s) => [s.key, [{ ...s.template }]]))
  );

  const [photo, setPhoto] = useState<string | null>(null);
  const [photoSize, setPhotoSize] = useState({ w: 120, h: 150 });
  const [isPreview, setIsPreview] = useState(false);

  // ── Updaters ──────────────────────────────────────────────────────────────

  const setInfoField = useCallback(
    (key: keyof PersonalInfo) => (v: string) =>
      setInfo((prev) => ({ ...prev, [key]: v })),
    []
  );

  const sectionSetter = useCallback(
    (key: string): React.Dispatch<React.SetStateAction<TableRow[]>> =>
      (action) =>
        setRows((prev) => ({
          ...prev,
          [key]: typeof action === "function" ? action(prev[key]) : action,
        })),
    []
  );

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(reader.result as string);
    reader.readAsDataURL(file);
  };

  // ── Print ─────────────────────────────────────────────────────────────────

  const handlePrint = () => {
    window.print();
  };

  // ── Section renderer ──────────────────────────────────────────────────────

  const renderSection = (section: SectionDef) => {
    const setter = sectionSetter(section.key);
    const sectionRows = rows[section.key];
    const colCount = section.columns.length;

    return (
      <table key={section.key} style={TABLE_BASE}>
        <thead>
          <tr>
            {/*
              colspan:
              - Preview/print → only data columns (action column not in DOM)
              - Edit mode     → data columns + 1 action column
            */}
            <th
              colSpan={isPreview ? colCount : colCount + 1}
              style={TH_HEADER}
            >
              {section.title}
            </th>
          </tr>
          <tr>
            {section.columns.map((col, ci) => (
              <th
                key={col}
                style={{ ...TH_COL, width: section.widths?.[ci] ?? "auto" }}
              >
                {col}
              </th>
            ))}
            {/* Action column header — not rendered at all in preview */}
            {!isPreview && (
              <th
                className="nihoncv-edit-col"
                style={{ ...TH_COL, width: "58px", textAlign: "center" }}
              >
                Rows
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {sectionRows.map((row, ri) => (
            <tr key={ri}>
              {section.fields.map((field) => (
                <td key={field} style={TD_CELL}>
                  <CellField
                    value={row[field] ?? ""}
                    onChange={(v) => updateRow(setter, ri, field, v)}
                    isPreview={isPreview}
                  />
                </td>
              ))}

              {/* + and − buttons — removed from DOM entirely in preview */}
              {!isPreview && (
                <td
                  className="nihoncv-edit-col"
                  style={{
                    ...TD_CELL,
                    textAlign: "center",
                    verticalAlign: "middle",
                    whiteSpace: "nowrap",
                  }}
                >
                  <button
                    title="Add new row"
                    onClick={() => addRow(setter, section.template)}
                    style={{ ...BTN_SMALL, marginRight: "4px" }}
                  >
                    +
                  </button>
                  {sectionRows.length > 1 && (
                    <button
                      title="Remove this row"
                      onClick={() => removeRow(setter, ri)}
                      style={{ ...BTN_SMALL, background: "#c0392b" }}
                    >
                      −
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div
      id="nihoncv-root"
      style={{
        padding: "24px",
        background: "#d0d0d0",
        minHeight: "100vh",
        fontFamily: "'Noto Serif', Georgia, serif",
      }}
    >
      {/* ── Toolbar ── */}
      <div
        className="nihoncv-toolbar"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: "20px",
          background: "#fff",
          padding: "12px 16px",
          borderRadius: "6px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.05em", marginRight: "8px" }}>
          CV Builder
        </span>

        <button
          onClick={() => setIsPreview((p) => !p)}
          style={{ ...BTN_TOOLBAR, background: isPreview ? "#555" : "#2c3e50" }}
        >
          {isPreview ? "✎  Edit" : "👁  Preview"}
        </button>

        <button onClick={handlePrint} style={{ ...BTN_TOOLBAR, background: "#1a6b3a" }}>
          🖨  Save as PDF
        </button>

        <span style={{ fontSize: "11px", color: "#888", marginLeft: "4px" }}>
          {isPreview
            ? "Read-only preview. Click Save as PDF → set Destination to 'Save as PDF'."
            : "Fill in the fields. Switch to Preview to check before saving."}
        </span>
      </div>

      {/* ── A4 Sheet ── */}
      <div
        id="nihoncv-sheet"
        style={{
          background: "#fff",
          padding: "14mm 16mm",
          boxSizing: "border-box",
          width: "210mm",
          minHeight: "297mm",
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          margin: "0 auto",
          fontFamily: "'Noto Serif', Georgia, serif",
          fontSize: "9pt",
          color: "#111",
        }}
      >
        {/* Title */}
        <h1
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "15pt",
            letterSpacing: "3px",
            borderBottom: "2.5px solid #1a1a1a",
            paddingBottom: "7px",
            margin: "0 0 14px",
          }}
        >
          Curriculum Vitae
        </h1>

        {/* ── Personal Information ── */}
        <table style={{ ...TABLE_BASE, marginBottom: "12px" }}>
          <thead>
            <tr>
              <th colSpan={3} style={TH_HEADER}>
                Personal Information
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={TD_LABEL}>Full Name</td>
              <td style={TD_CELL}>
                <CellField
                  value={info.fullName}
                  onChange={setInfoField("fullName")}
                  placeholder="Family Name   Given Name"
                  isPreview={isPreview}
                />
              </td>
              {/* Photo — spans all 6 personal rows */}
              <td
                rowSpan={6}
                style={{
                  width: "132px",
                  textAlign: "center",
                  verticalAlign: "top",
                  padding: "6px",
                  border: "1px dashed #aaa",
                }}
              >
                {photo ? (
                  <img
                    src={photo}
                    alt="Photo"
                    style={{
                      width: `${photoSize.w}px`,
                      height: `${photoSize.h}px`,
                      objectFit: "cover",
                      display: "block",
                      margin: "0 auto",
                      border: "1px solid #ccc",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: `${photoSize.w}px`,
                      height: `${photoSize.h}px`,
                      border: "1px dashed #ccc",
                      margin: "0 auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "8pt",
                      color: "#bbb",
                    }}
                  >
                    Photo
                  </div>
                )}
                {/* Photo controls — edit only, hidden in preview and print */}
                {!isPreview && (
                  <div
                    className="nihoncv-edit-col"
                    style={{ marginTop: "8px", fontSize: "7.5pt", color: "#555" }}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhoto}
                      style={{ width: "100%", fontSize: "7.5pt" }}
                    />
                    <div style={{ marginTop: "6px", display: "flex", gap: "6px", justifyContent: "center" }}>
                      <label>
                        W:&nbsp;
                        <input
                          type="number" min={60} max={200} value={photoSize.w}
                          onChange={(e) => setPhotoSize((p) => ({ ...p, w: +e.target.value }))}
                          style={{ width: "40px" }}
                        />
                      </label>
                      <label>
                        H:&nbsp;
                        <input
                          type="number" min={60} max={250} value={photoSize.h}
                          onChange={(e) => setPhotoSize((p) => ({ ...p, h: +e.target.value }))}
                          style={{ width: "40px" }}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </td>
            </tr>

            <tr>
              <td style={TD_LABEL}>Date of Birth</td>
              <td style={TD_CELL}>
                <CellField value={info.dob} onChange={setInfoField("dob")} placeholder="YYYY / MM / DD" isPreview={isPreview} />
              </td>
            </tr>
            <tr>
              <td style={TD_LABEL}>Gender</td>
              <td style={TD_CELL}>
                <CellField value={info.gender} onChange={setInfoField("gender")} placeholder="Male / Female / Other" isPreview={isPreview} />
              </td>
            </tr>
            <tr>
              <td style={TD_LABEL}>Address</td>
              <td style={TD_CELL}>
                <CellField value={info.address} onChange={setInfoField("address")} isPreview={isPreview} minRows={2} />
              </td>
            </tr>
            <tr>
              <td style={TD_LABEL}>Phone</td>
              <td style={TD_CELL}>
                <CellField value={info.phone} onChange={setInfoField("phone")} isPreview={isPreview} />
              </td>
            </tr>
            <tr>
              <td style={TD_LABEL}>Email</td>
              <td style={TD_CELL}>
                <CellField value={info.email} onChange={setInfoField("email")} isPreview={isPreview} />
              </td>
            </tr>
          </tbody>
        </table>

        {/* ── Dynamic Sections ── */}
        {SECTIONS.map(renderSection)}

        {/* ── Personal Statement ── */}
        <table style={TABLE_BASE}>
          <thead>
            <tr>
              <th style={TH_HEADER}>Reason for Application / Personal Statement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={TD_CELL}>
                <CellField
                  value={info.statement}
                  onChange={setInfoField("statement")}
                  isPreview={isPreview}
                  minRows={5}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* ── Additional Information ── */}
        <table style={TABLE_BASE}>
          <thead>
            <tr>
              <th colSpan={4} style={TH_HEADER}>Additional Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={TD_LABEL}>Commute Time</td>
              <td style={TD_CELL}>
                <CellField value={info.commute} onChange={setInfoField("commute")} placeholder="e.g. 30 min" isPreview={isPreview} />
              </td>
              <td style={TD_LABEL}>Dependents</td>
              <td style={TD_CELL}>
                <CellField value={info.dependents} onChange={setInfoField("dependents")} isPreview={isPreview} />
              </td>
            </tr>
            <tr>
              <td style={TD_LABEL}>Health</td>
              <td style={TD_CELL}>
                <CellField value={info.health} onChange={setInfoField("health")} placeholder="Good / Fair" isPreview={isPreview} />
              </td>
              <td style={TD_LABEL}>Date</td>
              <td style={TD_CELL}>
                <CellField value={info.date} onChange={setInfoField("date")} placeholder="YYYY / MM / DD" isPreview={isPreview} />
              </td>
            </tr>
            <tr>
              <td style={TD_LABEL}>Signature</td>
              <td colSpan={3} style={TD_CELL}>
                <CellField value={info.signature} onChange={setInfoField("signature")} isPreview={isPreview} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}