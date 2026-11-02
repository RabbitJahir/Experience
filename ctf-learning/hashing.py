import hashlib


name = "MILLER"

encoded = b"MILLER"

hashing = hashlib.sha256(encoded).hexdigest()


print(hashing)

print(len(hashing))


for i, character in enumerate(hashing):
    print(i, character)


positions = [4, 5, 3, 6, 2, 7, 1, 8]

for i in positions:
    print(i, "->", hashing[i])