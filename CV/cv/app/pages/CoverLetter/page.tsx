"use client";

import React, { useState, useRef } from "react";

// ── Components ───────────────────────────────────────────────────────────────

export default function NihonCoverLetter() {
  const [info, setInfo] = useState({
    date: "Date",
    to: "Hiring Manager\nCompany Name",
    applicant: "Your Name",
    contact: "mail@gmail.com\n+880number",
    subject: "Subject: Your Subject, Below is a guide. Click Bold to stand out words",
    content: `I am writing to express my keen interest in the Software Engineer position at TechNova Solutions. Having recently graduated from the University of Information Technology and Sciences (UITS), Bangladesh, with a Bachelor’s degree in Computer Science and Engineering and a perfect CGPA of 4.00/4.00, I am eager to apply my technical background to your innovative team.

My expertise lies in developing scalable, user-focused applications using Java, Python, and C++. Beyond core development, I am deeply passionate about Artificial Intelligence and Cybersecurity. I have focused my efforts on building AI-integrated systems that prioritize reliability and security, aiming to reduce the risks of misuse in modern automated tools.

Thank you for your time and consideration. I welcome the opportunity to discuss how my technical skills and dedication to innovation can contribute to the continued success of TechNova Solutions.`,
  });

  const [isPreview, setIsPreview] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handlePrint = () => {
    if (!document.getElementById("coverletter-print-styles")) {
      const style = document.createElement("style");
      style.id = "coverletter-print-styles";
      style.textContent = `
        @media print {
          body { background: white !important; margin: 0 !important; }
          .cl-toolbar { display: none !important; }
          #cl-root { padding: 0 !important; background: white !important; }
          #cl-sheet {
            width: 100% !important;
            box-shadow: none !important;
            padding: 20mm !important;
            margin: 0 !important;
            border: none !important;
          }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        @page { size: A4; margin: 0; }
      `;
      document.head.appendChild(style);
    }
    window.print();
  };

  const execCommand = (command: string) => {
    document.execCommand(command, false);
  };

  // ── Styles ─────────────────────────────────────────────────────────────────

  const labelStyle: React.CSSProperties = {
    backgroundColor: "#f2f2f2",
    fontWeight: 600,
    width: "20%",
    fontSize: "10pt",
    padding: "8px",
    border: "1px solid #444",
  };

  const dataStyle: React.CSSProperties = {
    padding: "8px",
    border: "1px solid #444",
    verticalAlign: "top",
  };

  return (
    <div
      id="cl-root"
      style={{
        padding: "40px 20px",
        background: "#d1d1d1", // Gray background to show A4 limits
        minHeight: "100vh",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >
      {/* ── Toolbar ── */}
      <div
        className="cl-toolbar"
        style={{
          maxWidth: "210mm",
          margin: "0 auto 20px",
          background: "#fff",
          padding: "15px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          display: "flex",
          gap: "10px",
          alignItems: "center",
          position: "sticky",
          top: "10px",
          zIndex: 100,
        }}
      >
        <button
          onClick={() => setIsPreview(!isPreview)}
          style={{
            padding: "8px 15px",
            background: isPreview ? "#444" : "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isPreview ? "✎ Edit" : "👁 Preview"}
        </button>

        {!isPreview && (
          <button
            onMouseDown={(e) => {
              e.preventDefault();
              execCommand("bold");
            }}
            style={{
              padding: "8px 15px",
              background: "#eee",
              border: "1px solid #ccc",
              fontWeight: "bold",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Bold 
          </button>
        )}

        <button
          onClick={handlePrint}
          style={{
            padding: "8px 15px",
            background: "#27ae60",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🖨 Save PDF
        </button>
      </div>

      {/* ── A4 Sheet ── */}
      <div
        id="cl-sheet"
        style={{
          background: "#fff",
          width: "210mm",
          height: "297mm", // Strict A4 Height
          margin: "0 auto",
          padding: "20mm",
          boxSizing: "border-box",
          boxShadow: "0 0 20px rgba(0,0,0,0.2)",
          position: "relative",
          overflow: "hidden", // Prevents content from spilling out of A4
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 300,
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "30px",
            borderBottom: "1.5px solid #000",
            paddingBottom: "10px",
            fontSize: "20pt",
          }}
        >
          Cover Letter
        </h1>

        {/* ── Info Table ── */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <tbody>
            <tr>
              <td style={labelStyle}>Date</td>
              <td style={dataStyle}>
                <input
                  disabled={isPreview}
                  value={info.date}
                  onChange={(e) => setInfo({ ...info, date: e.target.value })}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontFamily: "inherit",
                    fontSize: "11pt",
                  }}
                />
              </td>
              <td style={labelStyle}>To</td>
              <td style={dataStyle}>
                <textarea
                  disabled={isPreview}
                  value={info.to}
                  onChange={(e) => setInfo({ ...info, to: e.target.value })}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontFamily: "inherit",
                    fontSize: "10pt",
                    resize: "none",
                  }}
                  rows={2}
                />
              </td>
            </tr>
            <tr>
              <td style={labelStyle}>Applicant</td>
              <td style={dataStyle}>
                <input
                  disabled={isPreview}
                  value={info.applicant}
                  onChange={(e) => setInfo({ ...info, applicant: e.target.value })}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontFamily: "inherit",
                    fontSize: "11pt",
                    fontWeight: "bold",
                  }}
                />
              </td>
              <td style={labelStyle}>Contact</td>
              <td style={dataStyle}>
                <textarea
                  disabled={isPreview}
                  value={info.contact}
                  onChange={(e) => setInfo({ ...info, contact: e.target.value })}
                  style={{
                    width: "100%",
                    border: "none",
                    background: "transparent",
                    outline: "none",
                    fontFamily: "inherit",
                    fontSize: "9pt",
                    resize: "none",
                  }}
                  rows={2}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* ── Letter Content ── */}
        <div
          style={{
            border: "1px solid #444",
            padding: "30px",
            minHeight: "550px",
            fontSize: "11pt",
            lineHeight: "1.6",
          }}
        >
          <input
            disabled={isPreview}
            value={info.subject}
            onChange={(e) => setInfo({ ...info, subject: e.target.value })}
            style={{
              width: "100%",
              fontWeight: "bold",
              textDecoration: "underline",
              border: "none",
              marginBottom: "20px",
              outline: "none",
              fontSize: "11pt",
            }}
          />

          <p>Dear Hiring Manager,</p>

          <div
            ref={contentRef}
            contentEditable={!isPreview}
            suppressContentEditableWarning
            style={{
              outline: "none",
              minHeight: "300px",
              whiteSpace: "pre-wrap",
              textAlign: "justify",
            }}
          >
            {info.content}
          </div>

          {/* ── Signature ── */}
          <div
            style={{
              marginTop: "40px",
              textAlign: "right",
            }}
          >
            <p>Sincerely,</p>
            <br />
            <input
              disabled={isPreview}
              value={info.applicant}
              onChange={(e) => setInfo({ ...info, applicant: e.target.value })}
              style={{
                textAlign: "right",
                fontWeight: "bold",
                border: "none",
                outline: "none",
                fontSize: "11pt",
                width: "200px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}