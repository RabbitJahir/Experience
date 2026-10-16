- https://learn.cylabacademy.org/learning-paths/18/193

---

## must solve section 1 (do overthewire bandit first)

---

## Section 2

```md
### mod26 
- tr "A-Za-z" "N-ZA-Mn-za-m" < values.txt
```

```md
### warmed up , 2warm
- 0x is a prefix meaning hexa
- echo $(( .. )), perform arithmetics , [ echo $((16#3D)) ], 16#, 16 base, convert 16 base number to decimal
- auto converts to decimal 
- [ python3 -c 'print(int("3D", 16))' ]

-----------------------------------------
--

- Hexadecimal input to decimal output : [ printf '%d' "$((16#3D))" ]
- Hexadecimal input to octal output : [ printf '%o' "$((16#3D))" ]
- Hexadecimal input to hexadecimal output : [ printf '%X' "$((16#3D))" ]
- python3 -c 'print(bin(42))' 
- echo 'obase=2; 42' | bc

- [ bc ], basic usage, calculator
```

```md
### bases
- [ echo 'bDNhcm5fdGgzX3IwcDM1' | base64 -d ]
- base64, 26 capital english letters, 26 small english letters, 10 0-9 digits, 2 + /, 26+26+10+2
```

---

## Section 3

```md
### wave a flag
- cat, file, strings, ./ --help, ./
- ls -l warm
- chmod +x warm
- ./warm
```

```md
### tab tab attack
- unzip 
- ls -l
- ./
- strings
```

```md
### inspectors
- ctrl shift i, elements, source
- ctrl u
- curl website
- curl website/.css
- curl website/.js
```

```md
### strings it
- ls -l
- chmod +x 
- ./
- man strings
- strings | grep *
```

```md
### first grep
- actually read the grep tutorial
```

```md
### where are the robots
- curl website/robots.txt
- curl website/disallow
- Robots or crawlers → check /robots.txt
- A sitemap or website map → check /sitemap.xml
```

---

## Section 4

```md
### python wrangling
- sudo apt install python3-cryptography
- python3 use_this.py -d to_decrypt_this.txt.en < use_this_password.txt
```

```md
### pw crack1
- read the python file
- python use_this.py -d to_decrypt_this.enc
```

```md
### pw crack2
- [ python -c 'print(chr(0x64) + chr(0x65) + chr(0x37) +chr(0x36))' ]
```

```md
### pw crack3
- echo 12 | level3.py
- [ for p in {1,2,3,4}; do echo ${p} | python3 level3.py; done; ]
```

```md
### pw crack4
- [ sed -i 's/"//g' pass.txt ], ( sed is edit text, -i is modify directly and save, s/OLD/NEW/FLAGS , s is substitute, / is to separate the parts, g means every matching is changed )
- [ for p in $(cat pass.txt); do echo ${p} | level4.py; done; ]
```

```md
### pw check5
- [ for p in $(cat dictionary.txt); do echo ${p} | python level5.py; done  > result.txt; ]
```

---

## Section 5

```md
### Enhance
- strings image, look
```

```md
### big zip
- tree 
- grep -r "academy*" .
```

```md
### vault door training
- substring
```

```md
### keygenme-py
```


---