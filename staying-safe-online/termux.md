# Termux Website and APK OSINT Guide

This guide is designed for Termux users to analyze websites and APK files to assess legitimacy and detect suspicious behavior using command-line tools.

---

# Setup in Termux

Install required tools:

```bash
pkg update && pkg upgrade
pkg install curl
pkg install whois
pkg install openssl-tool
pkg install dnsutils
pkg install git
pkg install unzip
pkg install python
```

Optional APK tools:

```bash
pkg install apksigner
pkg install jadx
```

---

# Website Analysis

## 1. WHOIS Lookup

Check domain registration details:

```bash
whois example.com
```

Key fields:

* Creation Date
* Registrar
* Expiry Date
* Name Servers

Red flags:

* Recently created domains for financial or login services
* Hidden or missing WHOIS data

---

## 2. DNS Information

```bash
dig example.com
nslookup example.com
```

Check for:

* IP address changes
* Suspicious hosting locations
* Multiple or unusual name servers

---

## 3. HTTP Headers

```bash
curl -I https://example.com
```

Verbose inspection:

```bash
curl -v https://example.com
```

Check for:

* Server type
* Redirect chains
* Security headers

Red flags:

* 403 or blocking responses
* Unknown CDN or proxy layers

---

## 4. Full Page Request

```bash
curl https://example.com
```

Red flags:

* JavaScript-only challenge pages
* CAPTCHA or browser verification walls
* Empty or blocked responses

---

## 5. SSL Certificate Inspection

```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates
```

Check:

* Certificate start date
* Expiry date

Red flags:

* Very recently issued certificates for established services

---

## 6. Wayback Machine Check

```bash
curl "https://archive.org/wayback/available?url=example.com"
```

Or open in browser:
[https://web.archive.org/web/*/example.com](https://web.archive.org/web/*/example.com)

Check:

* First appearance date
* Absence of history

---

## 7. IP Investigation

```bash
whois <IP_ADDRESS>
```

Check:

* Hosting provider
* Country location
* Abuse contacts

---

# APK Analysis

## 1. APK Metadata

```bash
aapt dump badging app.apk
```

Check:

* Package name
* Version
* Permissions

Red flags:

* Excessive permissions unrelated to app function

---

## 2. APK Signature Verification

```bash
apksigner verify --verbose app.apk
```

Check:

* Valid signature
* Certificate authenticity

Red flags:

* Unsigned APK
* Debug signatures in production apps

---

## 3. Extract APK Contents

```bash
unzip app.apk -d app_extracted
```

Inspect:

* AndroidManifest.xml
* assets folder
* lib folder

---

## 4. Decompile APK

```bash
jadx-gui app.apk
```

Check for:

* Hardcoded URLs
* API endpoints
* Obfuscated code patterns

---

## 5. Search for Network Endpoints

```bash
grep -r "http" app_extracted/
grep -r "https" app_extracted/
```

Red flags:

* Unknown domains
* Direct IP communication

---

## 6. Virus Scanning

Upload APK to external services:

* [https://www.virustotal.com](https://www.virustotal.com)

Check:

* Malware detections
* Behavioral flags

---

# Risk Indicators

## Website risks

* Newly registered domain
* No archive history
* Strong bot protection or JS challenges
* Login or payment requests on unknown sites
* Hidden or masked infrastructure

---

## APK risks

* Excessive permissions
* No signature or invalid signature
* Obfuscated or encrypted code
* Unknown external API calls

---

# Quick Risk Model

Consider high risk if:

* Domain is new
* No web history exists
* Strong anti-bot protection is present
* Sensitive data is requested (password, OTP, etc.)

---

# Optional Tools

* VirusTotal: [https://www.virustotal.com](https://www.virustotal.com)
* urlscan: [https://urlscan.io](https://urlscan.io)
* AbuseIPDB: [https://www.abuseipdb.com](https://www.abuseipdb.com)
* Shodan: [https://www.shodan.io](https://www.shodan.io)

---

# Notes

Termux limitations:

* Some desktop tools like full JADX GUI may not run properly
* Use CLI alternatives when GUI is unavailable
* Always prefer multiple signals before concluding legitimacy
