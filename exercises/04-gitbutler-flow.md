# Oefening 4: GitButler flow

**Duur:** 15 min · **Werkvorm:** individueel (of duo) · **Laptops open**

**Doel:** je gebruikt parallel branches, een stack, amend/squash en de project history. Alles in de **GitButler app**.

> Exacte knoppen en namen kunnen per GitButler-versie verschillen. De CLI-hints staan er als extra, de app is je hoofdgereedschap.

## Context

Je werkt aan de kleine website in `src/`. Je krijgt drie taken:

| Wijziging | Bestand | Wat |
|---|---|---|
| **A** | `src/menu.js` | Voeg het menu-item toe, **bewust met typfout**: `"Contakt"` (die herstel je in stap 4) |
| **B** | `src/footer.js` | Los de bewuste fout op: haal het jaartal uit `new Date().getFullYear()` |
| **C** | `src/menu.js` en `src/styles.css` | Maak van elk menu-item een link en geef links een kleur. **Dit bouwt voort op A** |

## Stappen

### 1. Twee wijzigingen, nog niet committen
Maak wijziging **A** en wijziging **B** in je editor. Commit nog niets. In GitButler zie je beide bij de **uncommitted changes**.

### 2. Twee parallelle branches
- Maak een branch `feature-menu` en een branch `fix-footer`.
- **Sleep** A naar `feature-menu` en B naar `fix-footer`.
- Commit beide met een duidelijke message.

Beide branches zijn nu tegelijk toegepast (applied), zonder te wisselen van branch.

### 3. Een stack
- Maak wijziging **C**.
- Zet een nieuwe branch **bovenop** `feature-menu` met het **stack-icoon** (Create new branch), bv. `menu-links`.
- Commit C op de bovenste branch.

### 4. Amend en squash
- Corrigeer de typfout in A (`"Contakt"` wordt `"Contact"`) en **sleep de wijziging naar de commit van A** (amend), zodat er geen extra "oops" commit komt.
- Maak op `fix-footer` nog 2 kleine commits (bv. een comment toevoegen) en **squash** alle commits van die branch tot 1 door ze op elkaar te slepen.

### 5. Pull requests
- Maak een PR voor `fix-footer`.
- Maak PRs voor de stack, **van onder naar boven**: eerst `feature-menu`, daarna `menu-links`.
- Controleer op GitHub: de PR van `menu-links` heeft `feature-menu` als **base**, niet `main`.

## Klaar als

- [ ] Er zijn 3 branches: `feature-menu`, `menu-links` (gestapeld) en `fix-footer`
- [ ] `feature-menu` heeft 1 nette commit (typfout geamend, geen "oops" commit)
- [ ] Er staan 3 PRs open op GitHub met de juiste base

## 🎁 Bonus 1: fout herstellen met de project history

1. Doe bewust iets stoms: squash twee verkeerde commits samen of verwijder een branch.
2. Open de **project history** (timeline) in de app.
3. Ga terug naar het punt **voor** de fout.
4. Controleer dat alles terug is.

## 🎁 Bonus 2: na een merge

1. Je partner (of jij op GitHub) merget de **onderste** PR (`feature-menu`).
2. **Update** je workspace in GitButler vanaf `origin/main`.
3. Controleer of `menu-links` netjes op `main` is geplaatst.
4. Is er een conflict? GitButler markeert de **conflicted commit**. Los het op in de app.

## CLI-spiekbriefje (optioneel)

```bash
but status
but commit -b feature-menu -m "Add contact item" <id>
but move menu-links --above feature-menu
but pr new menu-links -t
but pull
but undo
```

## Veelvoorkomende problemen

| Probleem | Oplossing |
|---|---|
| Wijziging weet niet naar welke branch | Kies zelf de branch expliciet |
| PR maken lukt niet | Is je GitHub account gekoppeld (oefening 3)? |
| Alles in 1 branch beland | Gebruik de project history of sleep de commits naar de juiste branch |
