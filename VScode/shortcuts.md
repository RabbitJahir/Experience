# VS Code Power Setup (Multi-Language Dev Setup)

This guide is a **complete VS Code setup for all major programming languages**:

- Java
- Python
- C / C++
- Go
- Rust
- JavaScript / TypeScript
- HTML / CSS
- Dart / Flutter

It focuses on turning VS Code into a **real development environment (not just a text editor)**.

---

---

---

# Essential VS Code Extensions (ALL LANGUAGES)

## Core Must-Have Extensions

Install these first:

- **Error Lens** -> shows errors inline (very useful)
- **Path Intellisense** -> auto file path suggestions
- **Bracket Pair Colorizer (built-in or extension)** -> better readability
- **Material Icon Theme** -> better file icons
- **Prettier - Code formatter** -> auto formatting

---

---

---

# IMPORTANT WARNING: Code Runner vs Debugger

## Code Runner

Shortcut:

```
Ctrl + Alt + N
```

- Fast execution
- No debugging
- Breakpoints ignored
- No variable inspection

---

## Real Debugger (USE THIS)

Shortcut:

```
F5
```

✔ Breakpoints work
✔ Step-by-step execution
✔ Variables panel works
✔ Call stack visible

---

---

---

# VS Code Core Settings

Open settings:

```
Ctrl + ,
```
search for: 

- auto save 
- tab -> 2 (web) / 4 (backend languages)
- word wrap 
- auto
- color theme
- formatter

# Debug Setup (Universal)

Create `.vscode/launch.json`:

## Java / Python / C++ / Go / Rust / Dart (general)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Current File",
      "type": "auto",
      "request": "launch",
      "program": "${file}"
    }
  ]
}
```

> Note: Some languages require their own debugger (Java/Python/C++ use specific configs).  
> See debugger.md for more on debugger

---

---

---

# Debugging Workflow (REAL DEV FLOW)

## Start debugging

```
F5
```

## Controls

- F10 -> Step Over
- F11 -> Step Into
- Shift + F11 -> Step Out
- Shift + F5 -> Stop

---

---

---

# Universal Shortcuts

## Navigation

- `Ctrl + P` -> open file
- `Ctrl + Shift + O` -> go to function/symbol
- `F12` -> go to definition
- `Alt + F12` -> peek definition
- `Alt + number` -> toggle between open tabs
- `Ctrl + Tab` -> toggle between open tabs
- `Ctrl + W` -> Close current tab

## Editing

- double click on a word and `Ctrl + D` -> select next match
- double click on a word and `Ctrl + Shift + L` -> select all matches
- `Alt + up arrow / down arrow` -> move entire line
- `Shift + Alt + down arrow` -> duplicate line
- `Ctrl + Shift + K` -> delete line

## Search

- `Ctrl + F` -> search in file
- `Ctrl + Shift + F` -> search in entire project/ folder
- `Ctrl + H` -> replace

## UI

- `Ctrl + B` -> toggle files sidebar
- `Ctrl + ` -> toggle terminal
- `Ctrl + \` -> split editor
- `Ctrl + Alt + B` -> toggle AI bar

---

---

---


