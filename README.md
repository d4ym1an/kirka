# Kirka.io UI Framework

A complete CSS framework extracted directly from the Kirka.io browser game source. Use this framework to build any UI that matches the game's dark navy/blue aesthetic with gold accents, skewed buttons, and tactical HUD elements.

---

## Quick Start

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Game Page</title>
  <link rel="stylesheet" href="kirka-ui.css">
</head>
<body>

  <!-- Full-screen game background -->
  <div class="game-bg">
    <div class="game-bg__pattern"></div>
    <div class="game-bg__radial"></div>
  </div>

  <!-- UI layer over the background -->
  <div class="interface text-2">

    <!-- Left sidebar nav -->
    <div class="left-icons">
      <div class="icon-btn text-1">
        <div class="wrapper">
          <svg class="icon svg-icon svg-icon--__home__">...</svg>
          <div class="text-icon">HUB</div>
        </div>
      </div>
    </div>

    <!-- Top-left user panel -->
    <div class="left-interface">
      <div class="auth-user">
        <div class="profile">
          <div class="card-cont avatar-info" hover="">
            <div class="avatar" style="width:64px;height:64px;background-image:url(avatar.png);"></div>
            <div class="username">PlayerName</div>
          </div>
          <div class="card-cont user-info" hover="">
            <div class="progress-lvl">
              <div class="progress-top">
                <div class="level-cont">
                  <div class="level-value">42</div>
                  <span class="level-text">lvl</span>
                </div>
                <div class="exp-values">1250 / 5000</div>
              </div>
              <div class="progress-line">
                <div class="progress" style="width: 25%;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom-right play button area -->
    <div class="play">
      <div class="play-content">
        <div class="play-content-up">
          <button class="button create-btn rectangle"
            style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
            <div class="triangle"></div>
            <div class="text">CREATE</div>
            <div class="WwnNWmwM">
              <div class="border-top border"></div>
              <div class="border-bottom border"></div>
            </div>
          </button>
        </div>
        <button class="button play-btn shiny"
          style="background-color: var(--gold-1); --hover-color: var(--gold-2); --top: var(--gold-2); --bottom: var(--gold-3);">
          <div class="triangle"></div>
          <div class="text">PLAY</div>
          <div class="WwnNWmwM">
            <div class="border-top border"></div>
            <div class="border-bottom border"></div>
          </div>
        </button>
      </div>
    </div>

  </div>

</body>
</html>
```

---

## Design System Overview

Kirka.io uses a **dark navy tactical** aesthetic built around:

- **Two fonts:** Rowdies (chunky display font for buttons/headers) and Exo 2 (clean UI font for everything else)
- **A dark blue navy palette** with gold accents for XP/currency
- **Skewed italic buttons** with 3D border effects
- **Semi-transparent glass panels** over a dark navy background with radial blue bloom
- **Outlined text shadows** on all UI labels (outline-style, not drop-shadow)
- **Responsive font scaling** via `html { font-size }` media queries (16px → 9px across breakpoints)

---

## Color Palette

### Primary Panels (dark navy blue)

| Token | Hex | Usage |
|-------|-----|-------|
| `--panel-1` | `#2f3957` | Main panel background |
| `--panel-2` | `#37477c` | Hover state, lighter panel |
| `--panel-3` | `#202639` | Darkest — container/window background |
| `--panel-4` | `#3c4b68` | Card/row item background |
| `--panel-5` | `#3b4975` | Icon button background |
| `--panel-6` | `#26335b` | Border/deep shadow |

> **Note:** These were obfuscated as `--wwWMNnW-1` through `--wwWMNnW-6` in the source.

### Accent Gold (XP / primary accent)

| Token | Hex | Usage |
|-------|-----|-------|
| `--gold-1` | `#ffb914` | Progress bar fill, level numbers, active accent |
| `--gold-2` | `#fcd373` | Button hover, lighter gold |
| `--gold-3` | `#b6830e` | Darker gold, button bottom border |

> **Note:** Were obfuscated as `--WwnNwMWm-1` through `--WwnNwMWm-3` in the source.

### Red / Danger

| Token | Hex | Usage |
|-------|-----|-------|
| `--red-1` | `#e24f4f` | Close buttons, death, errors |
| `--red-2` | `#f66666` | Hover red |
| `--red-3` | `#cb1414` | Dark red |
| `--red-4` | `#e73c3c` | Close button hover |

### Blue / Actions

| Token | Hex | Usage |
|-------|-----|-------|
| `--blue-4` | `#2f80ed` | CREATE/JOIN buttons |
| `--blue-5` | `#4f94f1` | Blue button hover |
| `--blue-6` | `#256fd3` | Blue button bottom |

### Green / Success

| Token | Hex | Usage |
|-------|-----|-------|
| `--green-1` | `#1cce6c` | Success, online status, teammate dots |
| `--green-4` | `#35e785` | XP reward text |

### Purple / Premium

| Token | Hex | Usage |
|-------|-----|-------|
| `--purple-1` | `#9a39d3` | Clan tags, diamond currency |
| `--purple-2` | `#af51e6` | Diamond icon color |

### Rarity Tier Colors

| Rarity | Color(s) |
|--------|---------|
| Common | `#939393` (gray) |
| Rare | `#2f83fd` → `#5fc5ff` (blue gradient) |
| Epic | `#ab16ea` → `#d660ff` (purple gradient) |
| Legendary | `#fdbb2f` → `#fddc2f` (gold gradient) |
| Mythical | `#b2fecb` (teal-mint) |

### Special / Social

| Usage | Color |
|-------|-------|
| Discord button | `#7289da` |
| Orange (reddit/external) | `#e15f30` |
| Announcement title | `#f5a623` |
| Clan name (purple) | `#a614ff` |

---

## Typography Guide

### Fonts

```css
/* Display / Headers / Buttons */
font-family: 'Rowdies', sans-serif;
font-weight: 700;

/* UI Body / Labels / Everything else */
font-family: 'Exo 2', sans-serif;
/* Available weights: 400, 500, 600, 700, 800, 900 + italic variants */
```

### Text Shadow Presets

The game uses "outlined" text shadows — dark borders around white text.

```css
/* Strong outline (HUD, icon labels, button text) */
.text-1 {
  text-shadow:
    -1px -1px 0 #0f0f0f,
     1px -1px 0 #0f0f0f,
    -1px  1px 0 #0f0f0f,
     1px  1px 0 #0f0f0f,
     0 0.13rem 1px rgba(0,0,0,.486);
}

/* Softer outline (most body text) */
.text-2 {
  text-shadow:
    -1px -1px 0 #0f0f0f,
     1px -1px 0 #0f0f0f,
    -1px  1px 0 #0f0f0f,
     1px  1px 0 #0f0f0f;
}
```

Add `.text-1` or `.text-2` class to any parent element to apply it to all text within.

### Responsive Scaling

The game scales the **root font size** based on viewport width. All `rem` values scale proportionally:

| Viewport | Font Size |
|----------|-----------|
| > 1600px | 16px |
| ≤ 1600px | 15px |
| ≤ 1440px | 14px |
| ≤ 1280px | 13px |
| ≤ 1100px | 12px |
| ≤ 900px  | 10px |
| ≤ 768px  | 9px |

---

## Component Reference

### Buttons

The game has one core button component with multiple variants. Always include all inner elements for the full visual effect.

#### Standard Skewed Button (default)
```html
<button class="button"
  style="background-color: var(--gold-1);
         --hover-color: var(--gold-2);
         --top: var(--gold-2);
         --bottom: var(--gold-3);">
  <div class="triangle"></div>
  <div class="text">PLAY</div>
  <div class="WwnNWmwM">
    <div class="border-top border"></div>
    <div class="border-bottom border"></div>
  </div>
</button>
```

#### Rectangle (non-skewed)
```html
<button class="button rectangle"
  style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
  <div class="triangle"></div>
  <div class="text">CREATE</div>
  <div class="WwnNWmwM">
    <div class="border-top border"></div>
    <div class="border-bottom border"></div>
  </div>
</button>
```

#### Shiny (light sweep animation)
```html
<button class="button shiny"
  style="background-color: var(--gold-1); --hover-color: var(--gold-2);">
  ...
</button>
```

#### Pulsing (scale animation — used for daily rewards)
```html
<button class="button pulse rectangle"
  style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
  ...
</button>
```

#### Modifier Classes & Sizes

| Class | Effect |
|-------|--------|
| `.rectangle` | No skew |
| `.shiny` | Light sweep shimmer |
| `.pulse` | Scale pulse animation |
| `.btn-sm` | Small size |
| `.btn-md` | Medium (250×60px) |
| `.btn-xl` | Extra large play button |
| `.btn-wide` | Full-width |

#### Common Color Combos

| Usage | Style attribute |
|-------|----------------|
| Gold / Play | `background-color: var(--gold-1); --hover-color: var(--gold-2); --top: var(--gold-2); --bottom: var(--gold-3);` |
| Blue / Create/Join | `background-color: var(--blue-4); --hover-color: var(--blue-5); --top: var(--blue-5); --bottom: var(--blue-6);` |
| Red / Danger | `background-color: var(--red-1); --hover-color: var(--red-4); --top: var(--red-2); --bottom: var(--red-3);` |
| Green / Accept | `background-color: var(--green-1); --hover-color: var(--green-4); --top: var(--green-4); --bottom: var(--green-3);` |

---

### Card / Panel Container

The `card-cont` class is the fundamental panel brick. It has a 3D border effect with a lighter top edge and darker bottom edge.

```html
<!-- Basic panel -->
<div class="card-cont">Content here</div>

<!-- Hoverable panel -->
<div class="card-cont" hover="">Hoverable content</div>

<!-- Rounded card (store / large windows) -->
<div class="card-cont card-lg">Rounded card</div>

<!-- Transparent glass panel -->
<div class="panel">Subtle background panel</div>
```

---

### Window / Modal

Kirka's windows have a standard `top-bar` with a home button, page title, and close button.

```html
<div class="vm--container">
  <div class="vm--overlay"></div>
  <div class="vm--modal">

    <!-- Window top bar -->
    <div class="top-bar">
      <div class="left">
        <div class="home">
          <svg class="icon-home svg-icon"></svg>
        </div>
        <div class="name-page">STORE</div>
      </div>
      <div class="close">
        <svg class="icon-close svg-icon"></svg>
      </div>
    </div>

    <!-- Window tabs (optional) -->
    <div class="tab-header">
      <div class="tab active">WEAPONS</div>
      <div class="tab">CHARACTERS</div>
      <div class="tab">BUNDLES</div>
    </div>

    <!-- Scrollable content area -->
    <div class="content">
      <!-- your content here -->
    </div>

  </div>
</div>
```

**Transitions:** The framework includes `.vm-transition--modal-enter` / `.vm-transition--modal-leave-active` and `.vm-transition--overlay-enter` classes matching the original vue-final-modal animations.

---

### Tabs

#### Floating tabs (quest/news style)
```html
<div class="tabs-wrapper">
  <div class="tabs">
    <div class="tab selected">DAILY</div>
    <div class="tab">WEEKLY</div>
    <div class="tab">EVENT</div>
    <div class="clear"></div>
  </div>
</div>
<div class="tab-content">
  <!-- content -->
</div>
```

#### Header tabs (inside a window)
```html
<div class="tab-header">
  <div class="tab active">GENERAL</div>
  <div class="tab">GRAPHICS</div>
  <div class="tab">KEYBINDS</div>
  <div class="tab">SOUNDS</div>
  <div class="tab">MODS</div>
</div>
```

---

### Progress Bar

```html
<!-- XP / level progress -->
<div class="progress-line">
  <div class="progress" style="width: 45%;"></div>
</div>

<!-- Secondary (dimmer) variant -->
<div class="progress-line">
  <div class="progress is-secondary" style="width: 60%;"></div>
</div>

<!-- Full level display -->
<div class="progress-lvl">
  <div class="progress-top">
    <div class="level-cont">
      <div class="level-value">42</div>
      <span class="level-text">lvl</span>
    </div>
    <div class="exp-values">1250 / 5000</div>
  </div>
  <div class="progress-line">
    <div class="progress" style="width: 25%;"></div>
  </div>
</div>
```

---

### Inputs

#### Text Input
```html
<div class="input-wrapper">
  <label class="label">Username</label>
  <input type="text" class="input" placeholder="Enter name...">
</div>
```

#### Dropdown / Select
```html
<div class="input-wrapper">
  <div class="input input--select">
    <div class="selected">Option A</div>
    <div class="items">
      <div>Option A</div>
      <div>Option B</div>
      <div>Option C</div>
    </div>
  </div>
</div>
```

#### Custom Checkbox
```html
<label class="custom-checkbox">
  <input type="checkbox" checked>
  <span>Enable Feature</span>
</label>
```

#### Range Slider
```html
<input type="range" class="range" min="0" max="100" value="75">
```

#### Keybind Input
```html
<input class="keybind-input" value="SPACE" readonly>
```

#### Color Input (crosshair options)
```html
<input type="color" class="color-input" value="#00ff00">
```

---

### Sidebar Navigation

```html
<div class="left-icons">
  <!-- Each nav item -->
  <div class="icon-btn text-1 active">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__home__">...</svg>
      <div class="text-icon">HUB</div>
    </div>
  </div>
  <div class="icon-btn text-1">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__market__">...</svg>
      <div class="text-icon">STORE</div>
    </div>
  </div>
  <div class="icon-btn text-1">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__server__">...</svg>
      <div class="text-icon">SERVERS</div>
    </div>
  </div>
  <div class="icon-btn text-1">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__quests__">...</svg>
      <div class="text-icon">QUESTS</div>
    </div>
  </div>
  <div class="icon-btn text-1">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__friends__">...</svg>
      <div class="text-icon">FRIENDS</div>
    </div>
  </div>
  <div class="icon-btn text-1">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__chest__">...</svg>
      <div class="text-icon">INVENTORY</div>
    </div>
  </div>
  <div class="icon-btn text-1">
    <div class="wrapper">
      <svg class="icon svg-icon svg-icon--__map-editor__">...</svg>
      <div class="text-icon">MAP</div>
    </div>
  </div>
</div>
```

**Available icon names** (use as `svg-icon--__NAME__` class):
`__home__`, `__market__`, `__server__`, `__quests__`, `__friends__`, `__chest__`, `__map-editor__`, `__settings__`, `__clock-full__`, `__coin__`, `__diamond__`, `__edit__`, `__add__`, `__close__`, `__discord__`, `__gamepad__`, `__fill-arrow-bottom__`, `__arrow-left__`, `__verified__`, `__reddit__`

---

### Currency Display

```html
<div class="moneys">
  <!-- Coins -->
  <div class="card-cont money" style="--i: 3; font-size: 20px;">
    <svg class="coin-icon svg-icon svg-icon--__coin__">...</svg>
    181095
  </div>
  <!-- Diamonds -->
  <div class="card-cont money diamonds" style="--i: 2; font-size: 20px;">
    <svg class="coin-icon svg-icon svg-icon--__diamond__">...</svg>
    269
  </div>
</div>
```

---

### Quests Panel

```html
<div class="quests">
  <!-- Timer -->
  <div class="expire">
    <svg class="icon svg-icon svg-icon--__clock-full__">...</svg>
    Expires in 19:20:02
  </div>

  <!-- Tab switcher -->
  <div class="tabs-wrapper">
    <div class="tabs">
      <div class="tab daily selected">DAILY QUESTS</div>
      <div class="tab event">EVENT QUESTS</div>
      <div class="clear"></div>
    </div>
  </div>

  <!-- Quest list -->
  <div class="subjects">
    <!-- Single quest item -->
    <div class="subject">
      <div class="quest">
        <!-- Rarity color strip (left edge) -->
        <div class="left quest-rarity rare"></div>
        <div class="right">
          <div class="description">Get 100 kills</div>
          <div class="progress-line progress-line">
            <div class="progress" style="width: 45%;"></div>
          </div>
          <div class="progress">
            <div class="progress2">45/100</div>
          </div>
          <div class="rewards">
            <div class="label">Rewards:</div>
            <div class="list">
              <div class="reward xp"><a class="amount">500 xp</a></div>
              <div class="reward coins">
                <a class="amount">1000</a>
                <svg class="icon svg-icon svg-icon--__coin__">...</svg>
              </div>
              <div class="reward diamonds">
                <a class="amount">2</a>
                <svg class="icon svg-icon svg-icon--__diamond__">...</svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

Quest rarity classes: `common`, `rare`, `epic`, `legendary`

---

### Badges & Rarity

```html
<!-- Verified badge on username -->
<div class="nickname">
  PlayerName
  <img class="badge" src="verified.svg">
</div>

<!-- Rarity circle dot -->
<span class="rarity-circle legendary"></span>

<!-- Ranked tag -->
<div class="ranked">RANKED</div>

<!-- Online indicator -->
<div class="is-online"></div>

<!-- NEW tag (top-right of card) -->
<div class="special-message-new">NEW</div>
```

---

### Player Row

Used in friends list, leaderboard, team view.

```html
<div class="player-cont">
  <div class="player-left">
    <!-- Rank number -->
    <span class="cont-name">1.</span>
    <!-- Avatar -->
    <div class="avatar avatar-head"></div>
    <!-- Name block -->
    <div class="player-name">
      <div class="nickname">
        <div class="clan-tag">CLAN</div>
        PlayerName
        <img class="badge" src="verified.svg">
      </div>
    </div>
  </div>
  <div class="player-right">
    <div class="player-value">9999</div>
    <!-- Action buttons -->
    <button class="button btn-sm rectangle">ADD</button>
  </div>
</div>
```

---

### Social Buttons (Discord / Download)

```html
<div class="settings-and-socicons">
  <!-- Discord button -->
  <div class="card-cont soc-group discord">
    <svg class="soc-icon svg-icon svg-icon--__discord__">...</svg>
  </div>

  <!-- Client download button -->
  <div class="card-cont soc-group client">
    <div class="text-soc">
      <div class="discord-name">CLIENT</div>
      <div>DOWNLOAD</div>
    </div>
    <svg class="soc-icon svg-icon svg-icon--__gamepad__">...</svg>
  </div>

  <!-- Settings icon -->
  <div class="card-cont settings card-1" hover="">
    <svg class="settings-icon svg-icon svg-icon--__settings__">...</svg>
  </div>
</div>
```

---

### Settings / Options Screen

```html
<div class="vm--modal">
  <div class="top-bar">...</div>
  <div class="tab-header">
    <div class="tab active">GENERAL</div>
    <div class="tab">GRAPHICS</div>
    <div class="tab">KEYBINDS</div>
    <div class="tab">SOUNDS</div>
    <div class="tab">MODS</div>
  </div>
  <div class="main">
    <div class="general-content">

      <!-- Section header -->
      <div class="header settings-header">AUDIO</div>

      <!-- Slider setting -->
      <div class="element">
        <div class="label">Master Volume</div>
        <div class="right">
          <div class="value">75</div>
          <input type="range" class="range" min="0" max="100" value="75">
        </div>
      </div>

      <!-- Toggle setting -->
      <div class="element">
        <div class="label">Enable Sounds</div>
        <label class="custom-checkbox">
          <input type="checkbox" checked>
          <span></span>
        </label>
      </div>

      <!-- Dropdown setting -->
      <div class="element">
        <div class="label">Graphics Quality</div>
        <div class="input input--select" style="width: 12rem;">
          <div class="selected">Medium</div>
          <div class="items">
            <div>Low</div>
            <div>Medium</div>
            <div>High</div>
          </div>
        </div>
      </div>

      <!-- Keybind -->
      <div class="keybind-element">
        <div class="label">Jump</div>
        <div class="keybind-field">
          <input class="keybind-input" value="SPACE" readonly>
          <button class="keybind-reset">RESET</button>
        </div>
      </div>

      <!-- Color picker -->
      <div class="element">
        <div class="label">Crosshair Color</div>
        <input type="color" class="color-input" value="#00ff00">
      </div>

    </div>
  </div>
</div>
```

---

### Create Custom Game

```html
<div class="vm--modal">
  <div class="top-bar">...</div>
  <div class="main">
    <div class="general-content">
      <div class="create-modal">

        <!-- Game mode selector -->
        <div class="header settings-header">GAME MODE</div>
        <div class="mods">
          <div class="mod active">FREE FOR ALL</div>
          <div class="mod">TEAM DEATHMATCH</div>
          <div class="mod">CAPTURE THE FLAG</div>
        </div>

        <!-- Map selector -->
        <div class="header settings-header">MAP</div>
        <div class="maps">
          <div class="map active">
            <img src="map_preview.jpg" width="120">
          </div>
          <div class="map">
            <img src="map2_preview.jpg" width="120">
          </div>
        </div>

        <!-- Player count -->
        <div class="element">
          <div class="label">Max Players</div>
          <div class="input input--select" style="width:8rem;">
            <div class="selected">16</div>
          </div>
        </div>

        <!-- Create button -->
        <button class="button rectangle btn-wide"
          style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
          <div class="text">CREATE GAME</div>
        </button>

      </div>
    </div>
  </div>
</div>
```

---

### Inventory

```html
<div class="inventory">
  <div class="filters">
    <div class="filter-name input-wrapper">
      <input type="text" class="input" placeholder="Search weapons...">
    </div>
    <div class="filter-rarity">
      <div class="tab active">ALL</div>
      <div class="tab">COMMON</div>
      <div class="tab">RARE</div>
      <div class="tab">EPIC</div>
      <div class="tab">LEGENDARY</div>
    </div>
  </div>

  <div class="subjects" style="display: flex; flex-wrap: wrap; gap: 0.5rem; padding: 0.5rem;">
    <div class="subject" style="position: relative; width: 8rem; height: 8rem; background: var(--panel-3); border-radius: 5px;">
      <div class="gun">
        <img class="gun-img" src="weapon.png">
      </div>
      <div class="item-name">VITA</div>
      <div class="rarity-circle legendary" style="position:absolute; top:4px; right:4px;"></div>
      <div class="hover-btns-group">
        <button class="button btn-sm rectangle inspect-btn"
          style="background-color: var(--panel-2); --hover-color: var(--panel-4);">
          <div class="text">INSPECT</div>
        </button>
      </div>
    </div>
  </div>
</div>
```

---

### Store

#### Store skin listing
```html
<div class="subjects" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; padding: 0.5rem;">
  <div class="subject store-item">
    <img class="skin-img" src="weapon_skin.png">
    <div class="rarity-label">LEGENDARY</div>
    <span class="rarity-circle legendary" style="position:absolute; top:4px; right:4px;"></span>
    <div class="hover-buy">
      <button class="button btn-sm rectangle buy-btn"
        style="background-color: var(--gold-1); --hover-color: var(--gold-2);">
        <div class="text">
          <span>2500</span>
          <svg class="icon-coin svg-icon svg-icon--__coin__">...</svg>
        </div>
      </button>
      <button class="button btn-sm rectangle inspect-btn"
        style="background-color: var(--panel-2); --hover-color: var(--panel-4);">
        <div class="text">INSPECT</div>
      </button>
    </div>
  </div>
</div>
```

---

### Friends List

```html
<div class="tab-info">
  <!-- Friend row -->
  <div class="player-cont">
    <div class="player-left">
      <div class="avatar avatar-head"></div>
      <div class="player-name">
        <div class="nickname">FriendName <span class="is-online"></span></div>
        <div class="friend-desc">In Lobby</div>
      </div>
    </div>
    <div class="player-right">
      <button class="button btn-sm rectangle"
        style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
        <div class="text">JOIN</div>
      </button>
      <button class="button btn-sm rectangle"
        style="background-color: var(--red-1); --hover-color: var(--red-4);">
        <div class="text">REMOVE</div>
      </button>
    </div>
  </div>
</div>
```

---

### Servers / Game List

```html
<div class="container-games">
  <div class="available-rooms">
    <!-- Server row -->
    <div class="tab-info">
      <div class="player-cont">
        <div class="player-left">
          <div class="bold">Free For All</div>
          <div class="info-key-cont">
            <span>NA</span>
            <span>14/16</span>
            <span>32ms</span>
          </div>
        </div>
        <div class="player-right">
          <button class="button btn-sm rectangle enter"
            style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
            <div class="text">JOIN</div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
```

---

### Hub / Leaderboard

```html
<div class="hub-container">
  <!-- Tabs: Daily / Weekly / All-Time -->
  <div class="tab-header">
    <div class="tab active">DAILY</div>
    <div class="tab">WEEKLY</div>
    <div class="tab">ALL TIME</div>
  </div>

  <div class="background-leaders">
    <!-- #1 champion row -->
    <div class="player-cont champion">
      <div class="player-left">
        <span class="cont-name">1.</span>
        <div class="avatar avatar-head"></div>
        <div class="player-name">
          <div class="nickname">TopPlayer</div>
        </div>
      </div>
      <div class="player-right">
        <div class="player-value">
          <span class="awards-span">9999</span>
          <svg class="icon svg-icon svg-icon--__coin__">...</svg>
        </div>
      </div>
    </div>

    <!-- Regular rows -->
    <div class="player-cont">
      <div class="player-left">
        <span class="cont-name">2.</span>
        <div class="avatar avatar-head"></div>
        <div class="player-name">
          <div class="nickname">Player2</div>
        </div>
      </div>
      <div class="player-right">
        <div class="player-value">8500</div>
      </div>
    </div>
  </div>
</div>
```

---

### In-Game HUD (Crosshair)

```html
<!-- CSS-only crosshair, customize via CSS variables on the container -->
<div class="crosshair-cont" style="
  --crosshair-color: #00ff00;
  --crosshair-outline: 1px;
  --crosshair-outline-color: #000;
  --crosshair-gap: 4px;
  --crosshair-arm-offset: 0px;">
  <div class="crosshair-static">
    <!-- Arms are sized via additional inline styles -->
    <div class="crosshair-arm crosshair-top"    style="width:2px; height:8px;"></div>
    <div class="crosshair-arm crosshair-bottom" style="width:2px; height:8px;"></div>
    <div class="crosshair-arm crosshair-left"   style="width:8px; height:2px;"></div>
    <div class="crosshair-arm crosshair-right"  style="width:8px; height:2px;"></div>
    <div class="crosshair-dot"                  style="width:2px; height:2px;"></div>
  </div>
</div>
```

### In-Game HUD (Kill Feed)

```html
<div class="kill-bar-cont">
  <div class="kill-bar-item">
    <span class="killer-name">PlayerA</span>
    <img class="skull" src="skull.svg">
    <span>PlayerB</span>
  </div>
</div>
```

### In-Game HUD (Minimap)

```html
<div class="minimap-state">
  <div class="minimap-container">
    <div class="minimap">
      <!-- Teammates (green) -->
      <div class="player-dot teammate" style="left: 50%; top: 50%;"></div>
      <!-- Enemies (red) -->
      <div class="player-dot enemy" style="left: 70%; top: 30%;"></div>
      <!-- Local player (white triangle) -->
      <div class="local-player-indicator"></div>
    </div>
  </div>
</div>
```

### In-Game HUD (K/D Counter)

```html
<div class="state-cont">
  <div class="kill-death">
    <div class="bg">
      <span class="kd">K: 12</span>
    </div>
    <div class="bg">
      <svg class="icon icon-death">...</svg>
      <span class="kd small">D: 3</span>
    </div>
  </div>
</div>
```

### In-Game HUD (Objective Panels)

```html
<div class="zombie-state">
  <div class="hud-panel cash">
    <div class="panel-label">CASH</div>
    <div class="panel-value">$2400</div>
  </div>
  <div class="hud-panel">
    <div class="panel-label">WAVE</div>
    <div class="panel-value">7</div>
    <div class="panel-sub">OF 12</div>
  </div>
  <div class="hud-panel">
    <div class="panel-label">REMAINING</div>
    <div class="panel-value">3</div>
    <div class="panel-sub">ENEMIES</div>
  </div>
</div>
```

### In-Game (Death Screen)

```html
<div class="death-cont">
  <div class="user-card">
    <div class="top">
      <div class="top-left">
        <div class="killer-level">23</div>
        <div class="nickname">
          <div class="clan-tag">CLAN</div>
          KillerName
          <img class="badge" src="verified.svg">
        </div>
      </div>
    </div>
    <div class="bottom">
      <span class="label-killed">KILLED BY</span>
      <span class="name-gun">VITA</span>
      <span class="damage-value">134 dmg</span>
    </div>
    <div class="respawn-in">RESPAWN IN 3s</div>
    <button class="button respawn-btn rectangle"
      style="background-color: var(--blue-4); --hover-color: var(--blue-5);">
      <div class="text">RESPAWN</div>
    </button>
  </div>
</div>
```

---

## Layout System

### Interface Shell

The UI is built as layers over a `<canvas>` element:

```
[canvas id="game"]       — WebGL game render
[.game-bg]               — CSS background (navy gradient + pattern + radial)
[.interface.text-2]      — UI container (fixed, full-screen, flex centered)
  [.left-icons]          — vertical icon sidebar (absolute, left edge)
  [.left-interface]      — top-left panel area (absolute, top-left)
  [.right-interface]     — top-right area (absolute, top-right)
  [.play]                — bottom-right play button area (absolute, bottom-right)
  [.team-section]        — center party area
  [.vm--container]       — modal overlay (fixed, z-index 999)
```

### Positioning Pattern

Almost all panels use **absolute positioning** relative to `.interface` (which is `position: fixed; width: 100%; height: 100%`). The game uses `transform: scale()` on panels for responsive scaling rather than relying solely on media queries.

### Z-Index Scale

| Layer | z-index | Token |
|-------|---------|-------|
| Background | 0 | `--z-bg` |
| Game UI panels | 3–4 | `--z-panel`, `--z-overlay` |
| HUD elements | 99999 | `--z-hud` |
| Modals | 999 | `--z-modal` |

---

## Animation Reference

| Class | Effect | Duration |
|-------|--------|----------|
| `.animate-rotate` | Continuous rotation | 10s |
| `.animate-fadein` | Fade in from below | 0.5s |
| `.animate-scale-up` | Scale from 85% to 100% | 0.3s |
| `.animate-pulse` | Opacity pulse | 2s |
| `.animate-bg-loop` | Background position loop | 20s |
| `.animate-slide-top` | Slide in from above | 0.4s |
| `.animate-list-enter` | List item pop-in | 0.3s |
| `.button.shiny` | Light sweep shimmer | 3s loop |
| `.button.pulse` | Scale pulse | 2s loop |
| `.respawn-btn--pressed` | Shake animation | 0.1s loop |

---

## Section-by-Section Guide

### Lobby (main screen)
- Components: `.game-bg`, `.interface`, `.left-interface` (auth-user, moneys), `.left-icons` (sidebar nav), `.right-interface` (settings, social), `.play` (bottom-right PLAY button area), `.team-section` (party), `.quests` (right side quest panel), `.special-message-home` (announcement banner)
- The lobby uses `transform: scale()` on panels driven by JavaScript to handle viewport scaling

### Profile Window
- Components: `.vm--modal` with `.top-bar`, `.card-profile`, `.avatar`, `.bio`, `.k-d` stats, `.progress-lvl`, `.copy-cont` (copy user ID)

### Store Window
- Tabs: Weapons / Characters / Bundles / Emotes
- Components: `.subjects` grid of `.subject.store-item` cards with `.skin-img`, `.rarity-label`, `.rarity-circle`, `.hover-buy` overlay with buy/inspect buttons
- Currency displayed as `.weapon-price` with `.icon-coin` or `.weapon-diamond`

### Servers Window
- Left: chat panel (`.chat`, `.chat-cont`)
- Right: `.container-games` with `.available-rooms` list of `.tab-info` server rows
- Filter bar at top

### Quest Window
- Full-screen modal version of the `.quests` component
- Quest items in `.subjects` list with `.subject` → `.quest` → rarity strip + progress

### Friends Window
- Active friends and pending requests as `.player-cont` rows
- Add friend input at top
- Online status with `.is-online` dot

### Inventory Window
- `.filters` row (search input + rarity tabs)
- Grid of weapon `.subject` cards with hover to show inspect button
- Weapon categories as horizontal tab bar

### Options Window (5 tabs)
1. **General** — sensitivity, FOV, gameplay toggles (`.element` with `.range` / `.custom-checkbox`)
2. **Graphics** — quality dropdowns, resolution (`.element` with `.input--select`)
3. **Keybinds** — key remapping (`.keybind-element` with `.keybind-input`)
4. **Sounds** — volume sliders (`.element` with `.range`)
5. **Mods** — visual mod toggles

### Levels / Progression Window
- Horizontal scrolling list of `.level-card` items
- Each shows level number, XP threshold, item rewards
- Current level highlighted with progress bar

### Hub Window
- Daily leaderboard tab by default
- `.hub-container` → `.tab-header` → `.background-leaders` list of `.player-cont` rows
- Champion row has `.champion` class (gold left border + gradient)

### Create Custom Game
- Map grid (`.maps` → `.map` cards)
- Mode selector (`.mods` → `.mod` pills)
- Settings (`.element` rows)
- Create button at bottom

### In-Game HUD
- `position: fixed; pointer-events: none` wrapper
- Crosshair: CSS-only using `.crosshair-arm` divs positioned with CSS variables
- Kill feed: top-right `.kill-bar-cont`
- K/D counter: top-left `.state-cont`
- Minimap: top-right (or configurable) `.minimap-state`
- Objective panels: centered top `.zombie-state` with `.hud-panel` items
- Death screen: full-screen `.death-cont` overlay

---

## CSS Variable Quick Reference

```css
/* Paste these overrides to theme a specific component */
:root {
  /* Change accent from gold to another color: */
  --gold-1: #ff6b35;   /* orange accent */
  --gold-2: #ff8c5a;
  --gold-3: #cc5520;

  /* Darken/lighten panel background: */
  --panel-1: #1a2040;  /* darker navy */
  --panel-3: #0f1525;  /* near-black container */
}
```

---

## Accessibility Notes

- All interactive elements are `cursor: pointer`
- Buttons use `text-transform: uppercase` — consider `aria-label` for screen readers
- Color-only indicators (rarity, online status) should have text alternatives
- The framework inherits `font-size` from `html` — do not override this in components
- Focus styles are minimal in the original — add `:focus-visible` outlines for production use
