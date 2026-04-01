1. [Folder Structure](#folder-structure)
2. [Changing App Icon](#changing-app-icon)
3. [Running Flutter](#running-flutter)

# Flutter Running Apps for Low-End PCs

Developing Flutter applications on low-end PCs or laptops with limited RAM and CPU can be challenging. Choosing the right editor or IDE is crucial for smooth development, fast feedback, and minimal resource usage. Below is a detailed comparison of several editors suitable for Flutter development in low-RAM environments.

---

## 1) Neovim (with LSP + Dart plugin) — Terminal Power Editor

Neovim is a modern, lightweight terminal editor that, when combined with a Dart Language Server (LSP), can provide real IntelliSense and code analysis for Flutter projects entirely in the terminal.

**Pros:**

- Extremely fast and low memory footprint
- Full code autocompletion (e.g., `Colors.blue`) with LSP
- Jump-to-definition and inline diagnostics
- Fully terminal-based; ideal for remote development or low-resource environments
- Highly customizable once configured

**Cons:**

- Requires some initial setup (installing LSP, plugins, configuring `init.lua`)
- Vim-style keybindings can be unintuitive for beginners

**Setup Overview:**

1. Install Neovim: `sudo apt install neovim`
2. Install Dart & Flutter SDK
3. Install Dart LSP (`dart language_server`)
4. Install a Neovim LSP client, e.g., `nvim-lspconfig`
5. Configure `init.lua` to attach Dart LSP to Neovim

**Result:** You get an extremely lightweight environment with features close to a full IDE — autocompletion, error highlighting, and navigation — all inside a terminal.

---

## 2) Helix Editor — Rust-Based Modern Terminal Editor

Helix is a modern terminal editor inspired by Vim, with modal editing and Tree-sitter syntax highlighting.

**Pros:**

- Fast and lightweight
- Tree-sitter provides advanced syntax highlighting
- Modal editing similar to Vim
- Lightweight alternative to VS Code for terminal usage

**Cons:**

- Fewer plugins than Neovim, Dart/Flutter support is still maturing
- Less community support than Neovim or VS Code

**Ideal For:** Developers who want Vim-like efficiency with a modern editor interface but do not require full IDE-level features.

---

## 3) Emacs with Dart/Flutter Mode

Emacs is a highly customizable editor that can be configured for Flutter and Dart development using LSP and specific plugins.

**Pros:**

- Extremely powerful and flexible
- Can be configured for Dart LSP with autocompletion, navigation, and inline diagnostics
- Works in both terminal and GUI modes

**Cons:**

- Steep learning curve
- Heavier than Neovim or Helix; can be slower on very low-end PCs

**Ideal For:** Developers who prefer Emacs and want full control over their development environment.

---

## 4) Lightweight GUI Options

If you prefer a graphical interface but want to avoid heavy IDEs like VS Code:

### Lite XL

- Very lightweight and fast
- Supports plugins for code snippets and syntax highlighting

### Geany

- Lightweight IDE with basic code completion
- Good for small projects and quick edits

### Kate (KDE Editor)

- Lightweight but feature-rich
- Provides syntax highlighting and basic suggestions
- Works well for moderate Flutter projects

**Ideal For:** Developers who prefer a GUI but want low CPU/RAM usage.

---

## 5) VS Code — Full Feature IDE (Resource Heavier)

VS Code is one of the most popular IDEs for Flutter development, offering extensive support through Flutter and Dart extensions.

**Pros:**

- Full IntelliSense and code autocompletion
- Hot reload integration and debugger
- Rich plugin ecosystem for Flutter, Dart, Git, and more
- Easy setup for Flutter development

**Cons:**

- Resource-intensive compared to terminal editors
- Can slow down significantly on low-RAM PCs

**Ideal For:** Developers with sufficient system resources who want the fastest development workflow with full IDE features.

---

### Summary Recommendation

| Editor                 | Autocomplete | Terminal | RAM Usage   | Ease of Setup | Best Use                                     |
| ---------------------- | ------------ | -------- | ----------- | ------------- | -------------------------------------------- |
| Neovim + LSP           | Full         | ✔        | Very Low    | Medium        | Low-RAM terminal workflows                   |
| Helix                  | Basic        | ✔        | Low         | Easy          | Terminal workflow, modern alternative to Vim |
| Emacs                  | Full         | ✔/GUI    | Medium      | Hard          | Full control in terminal or GUI              |
| Lite XL / Geany / Kate | Basic        | GUI      | Low         | Easy          | Lightweight GUI editing                      |
| VS Code                | Full         | Partial  | Medium-High | Easy          | Best full IDE experience                     |

> **Tip:** For low-end Linux pc, the combination of **Neovim / SubLime Text+ Dart LSP** or **Helix** offers the most balance between performance, autocomplete, and code analysis. Use VS Code only if you have enough RAM to handle its heavier footprint.

---

# Starting

> `flutter create app_name`, app_name has to be small and no space

> Widgets are capital, Arguements are small
---

# Folder Structure

### lib

- where all edits are done

### pubspec.yaml

- indentation driven
- changing name, adding packages, versions

---

# Flutter running online

> `flulab.io`, make a simple project, understand it, covnert to dart, use AI, get the apk

# Making a flutter project, desktop

---

# Changing App Icon

> make `assests` folder in root folder where pubspec.yaml is. Inside assets make `icon` folder, and add your something.png.

> Come to `pubspec.yaml`, 
>
> ```dart
> dev_dependencies:
>  flutter_test:
>    sdk: flutter        # Flutter's built-in testing framework
>  flutter_launcher_icons: ^0.13.1 # add this line
> ```
> & and this code
>
> ```jsx
> flutter_launcher_icons: android: "launcher_icon";
> ios: true;
> image_path: "assets/icon/something.png";
> ```

> run the commands in root terminal, `flutter pub get` & `flutter pub run flutter_launcher_icons`

---

# Running Flutter

> `flutter analyze`, analyze before running
> `flutter devices`, list of devices flutter can run on

## ---> Running on Chrome//browser

> `flutter run -d chrome`, runs in chrome.

## ---> Running on android via USB

#### setting up android toolchain

1. `https://developer.android.com/studio#cmdline-tools`, download android studio or command line tools only (scroll down)
2. install packages using this path, `cd ~/Android/Sdk/cmdline-tools/latest/bin` make sure the downloads are following this path, for more details google.
3. `flutter config --android-sdk ~/Android/Sdk` telling flutter where the sdk is.

#### setting up phone and running process

1. get android developer, enable USB debugging
2. connect phone to laptop, enable file transfer
3. (must have flutter installed), in terminal run `flutter doctor`, to check if flutter is ok
4. run `adb devices`, Android Device Bridge devices, if you dont see your phone, make sure step 2 is done correctly, and check if wire has any issues. `lsusb` for linux users to check in another way.
5. Final check `flutter devices`, if you see your device, cd to the project folder and `flutter run -d 192.168.0.404:5555`. your ip obviously.

## Connecting via same wifi, to run without cable

1. You need to complete step 5 from above.
2. `adb tcpip 5555`, tcpip: switches to wifi, 5555: network port that adb uses
3. `adb connect <PHONE_IP>:5555`, something like :`adb connect 192.168.0.105:5555`
4. `flutter run -d 192.168.0.404:5555`, takes a long while, can be upto 20 minutes.

---
