# Tiled Map Editor — Options Explained (For Game Dev)
---

# 1. Orientation

This controls how your map is structured visually.

## Orthogonal (MOST COMMON)

* Grid-based flat 2D map
* Looks like Pokémon, Zelda top-down games
* Each tile is a square

```
[ ][ ][ ]
[ ][ ][ ]
[ ][ ][ ]
```

Best for:

* RPGs
* Top-down movement

---
## Isometric

* 3D-like angled view
* Tiles look diamond-shaped

```
   /\
  /__\
```

Best for:

* Strategy games
* SimCity style games

Harder to implement in JS

---

## Oblique

* Rare
* Skewed perspective version of tilemaps
* Mostly legacy style

Not commonly used today

---

## Isometric (Staggered)

* Modified isometric layout
* Tiles offset in a staggered pattern

Used for:

* More dynamic isometric maps

---

## Hexagonal (Staggered)

* Uses hexagon tiles instead of squares
* Each tile has 6 sides

Used for:

* Strategy games (like Civilization-style games)

--- 

#  2. Tile Layer Format

This controls how your map data is stored when exported.

## CSV (BEST FOR BEGINNERS)

```
1,1,1,0,0
2,2,1,0,0
```

Pros:

* Easy to read
* Easy to debug
* Perfect for JavaScript parsing

Cons:

* Larger file size


---

## Base64 (Uncompressed)

* Data is encoded into text
* Hard to read manually

Pros:

* Smaller than CSV sometimes

Cons:

* Not human-readable

---

## 🟨 Base64 (Zlib Compressed)

* Base64 + compression
* Very small file size

Pros:

* Efficient storage

Cons:

* Needs decoding in JS
* More complex

---

## Base64 (Zstandard Compressed)

* Even stronger compression than Zlib

Pros:

* Very small files

Cons:

* Hardest to decode in JS
* Overkill for small games

---

# 3. Tile Render Order

This controls how tiles are drawn on screen.

## Right Down (DEFAULT)

* Draws left to right, top to bottom

```
Row by row
```

* Most common
* Easy to understand

---

## Right Up

* Left to right, bottom to top

Used in special rendering cases

---

## Left Down

* Right to left, top to bottom

Rare

---

## Left Up

* Right to left, bottom to top

Rare

---

# Map Size, Tile Size, and Infinite Maps (Tiled + Game Development Guide)


# 1. Tile Size (Fundamental Building Block)

## What is Tile Size?

Tile size is the pixel size of a single square in your map grid.

Example:

* 16 × 16 pixels
* 32 × 32 pixels
* 64 × 64 pixels

Each tile is one “block” used to build the world.

---

## Common Tile Sizes and When to Use Them

### 16 × 16

* Very retro style
* NES / Game Boy style games

Best for:

* Pixel art games with small sprites
* Very large maps with low memory usage

Downside:

* Low visual detail

---

### 32 × 32 (MOST COMMON)

* Standard for top-down RPGs
* Pokémon-style games

Best for:

* Canvas RPG games
* Balanced detail and performance

Recommended for:

* Most beginner and intermediate projects

---

### 64 × 64

* High detail tiles
* Larger visual elements

Best for:

* Modern pixel-art games
* Games with detailed environments

Downside:

* Larger memory usage
* Smaller visible world per screen

---

## Key Rule

Tile size affects everything:

* Player size perception
* Collision precision
* Map scale

---

# 🗺️ 2. Map Size (World Dimensions)

## What is Map Size?

Map size is the number of tiles in width and height.

Example:

* 100 × 100 tiles
* 50 × 30 tiles

---

## Real World Size Calculation

To convert tiles into pixels:

```
Map Width (px) = tileWidth × numberOfTilesWidth
Map Height (px) = tileHeight × numberOfTilesHeight
```

Example:

* Tile size = 32px
* Map = 100 × 100 tiles

Result:

* 3200 × 3200 pixel world

---

## Map Size Types

### Small Maps

* 20 × 20 to 50 × 50 tiles

Best for:

* Combat arenas
* Small levels
* Testing

---

### Medium Maps (RECOMMENDED)

* 50 × 50 to 150 × 150 tiles

Best for:

* RPG towns
* Exploration games
* Canvas RPGs

---

### Large Maps

* 200 × 200+ tiles

Best for:

* Open world games

Downside:

* Performance cost
* Complex collision handling

---

# ♾️ 3. Infinite Maps (Procedural / Chunk-Based Maps)

## What is an Infinite Map?

An infinite map is a world that does not exist as one fixed grid.

Instead:

* The world is generated as the player moves
* Only nearby sections are loaded

---

## How Infinite Maps Work

The world is split into "chunks":

Example:

* Each chunk = 16 × 16 tiles

As player moves:

* New chunks are generated or loaded
* Old chunks are removed or cached

---

## Where Infinite Maps Are Used

* Minecraft-style games
* Roguelikes
* Large procedural worlds

---

## Pros

* Unlimited world size
* Memory efficient
* Dynamic gameplay

---

## Cons

* Complex to implement
* Requires procedural generation
* Requires chunk management system

---

# 4. Comparison: Map Types

| Type             | Size      | Complexity | Use Case                |
| ---------------- | --------- | ---------- | ----------------------- |
| Fixed Small Map  | Small     | Easy       | Tutorials, arenas       |
| Medium Fixed Map | Medium    | Medium     | RPG games (recommended) |
| Large Fixed Map  | Large     | Hard       | Open world games        |
| Infinite Map     | Unlimited | Very Hard  | Procedural worlds       |

---

# 5. What YOU Should Use

For JavaScript canvas RPG games:

## Recommended Setup

* Tile Size: 32 × 32
* Map Size: 50 × 50 to 120 × 120 tiles
* Map Type: Fixed map (NOT infinite)

---

## Why this is best

* Easier collision system
* Easier camera control
* Easier rendering
* Matches Pokémon-style architecture

---

# Common Mistakes

* Making maps too large too early
* Mixing tile size with sprite size incorrectly
* Trying infinite maps before mastering fixed maps
