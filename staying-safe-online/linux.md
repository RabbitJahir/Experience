##  WHOIS Domain Lookup

Checks domain registration info (age, registrar, owner hints), not url, only domain

```bash
whois example.com
```

### What to look for:

* Creation Date (very important)
* Registrar (e.g. Hostinger, GoDaddy)
* Domain Status
* Name servers

Red flags:

* Very recent domain (<1 year for financial sites)
* Hidden WHOIS (privacy + suspicious context)

---

##  DNS Information

Find server infrastructure

```bash
dig example.com
nslookup example.com
```

Check:

* IP addresses
* MX records (email servers)
* unusual hosting providers

---

## SSL Certificate Check

Shows encryption details and issuance date

```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates
```

### Output meaning:

* notBefore = certificate start date
* notAfter = expiry date

Red flags:

* very new certificates for "established" services

---

## HTTP Header Inspection

```bash
curl -I https://example.com
```

or full verbose:

```bash
curl -v https://example.com
```

### Check for:

* Server type
* Redirects
* Security headers

Red flags:

* aggressive blocking (403)
* unknown CDN masking real server

---

##  Full Page Fetch Test

```bash
curl https://example.com
```

 Red flags:

* JS-only challenge pages
* CAPTCHA / bot protection walls

---

## Wayback Machine (Website History)

```bash
curl "https://archive.org/wayback/available?url=example.com"
```

Or visit:

```
https://web.archive.org/web/*/example.com
```

Check:

* first appearance date
* missing history = suspicious or new site

---

## IP Reputation / Ownership

```bash
whois <IP_ADDRESS>
```

or

Use:

* VirusTotal IP lookup
* AbuseIPDB

---

#  APK Analysis (Android Apps)

- Using termux, 

## Check APK details

```bash
aapt dump badging app.apk
```

Look for:

* package name
* version
* permissions

Red flags:

* excessive permissions (SMS, contacts, mic)

---

## APK signature verification

```bash
apksigner verify --verbose app.apk
```

Check:

* valid signature
* certificate issuer

 Red flags:

* unsigned APK
* debug-signed apps in production

---

## Extract APK contents

```bash
unzip app.apk -d app_unpacked
```

Look into:

* AndroidManifest.xml
* assets/
* lib/

---

## Decompile APK

Tool:

```bash
jadx-gui app.apk
```

Check for:

* hardcoded URLs
* API endpoints
* suspicious permissions usage

---

## Find network endpoints inside APK

```bash
grep -r "http" app_unpacked/
```

or

```bash
grep -r "https" app_unpacked/
```

Red flags:

* unknown domains
* IP-based endpoints

---

## Virus scanning (recommended)

Upload to:

* [https://www.virustotal.com](https://www.virustotal.com)

Check:

* malware detections
* suspicious behaviors

---

## Website red flags

* New domain (<1 year)
* No Wayback history
* Hidden WHOIS
* JS challenge / CAPTCHA wall
* Financial or login prompts
* Unknown CDN masking origin

---

## APK red flags

* Requests SMS / contacts / mic without reason
* No signature or debug signature
* Hardcoded unknown API endpoints
* Obfuscated code
* No official Play Store presence

---

# 🛠️ BONUS TOOLS (Optional)

* VirusTotal: [https://www.virustotal.com](https://www.virustotal.com)
* urlscan: [https://urlscan.io](https://urlscan.io)
* AbuseIPDB: [https://www.abuseipdb.com](https://www.abuseipdb.com)
* Shodan: [https://www.shodan.io](https://www.shodan.io)

---