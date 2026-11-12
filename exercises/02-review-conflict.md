# Oefening 2: review en conflict

**Duur:** 15 min · **Werkvorm:** duo's · **Laptops open**

**Doel:** je doet een echte review en lost een conflict op.

## Deel A: review (5 min)

1. Open de PR van je **partner** op GitHub.
2. Ga naar **Files changed** en bekijk de wijziging.
3. Laat minstens **1 commentaar** achter op een regel (bv. een suggestie of een vraag).
4. Kies **Review changes** en dan **Approve**.

Tip: reviewen is commentaar geven op de **code**, niet op de persoon.

## Deel B: conflict (10 min)

Jullie hebben allebei een nieuwe regel op **dezelfde plek** toegevoegd. Dat gaat botsen.

1. **Persoon A** merget de eigen PR (kies **Squash and merge**).
2. **Persoon B** ziet nu op de eigen PR: *This branch has conflicts that must be resolved*.
3. Persoon B lost het conflict op. Kies zelf hoe:
   - **Op GitHub:** klik **Resolve conflicts** en bewerk het bestand in de editor, of
   - **Lokaal:**

     ```bash
     git switch main && git pull
     git switch add-jouw-naam
     git merge main      # conflict!
     # bewerk CONTRIBUTORS.md, verwijder de markers
     git add CONTRIBUTORS.md
     git commit
     git push
     ```

4. In `CONTRIBUTORS.md` moeten **beide namen** blijven staan, zonder `<<<<<<<`, `=======` of `>>>>>>>`.
5. Persoon A reviewt en approvet de opgeloste PR. Persoon B merget.

## Klaar als

- [ ] Beide PRs zijn gemerged
- [ ] `CONTRIBUTORS.md` op `main` bevat beide namen en geen conflict markers
- [ ] Je hebt minstens 1 review-commentaar gegeven

## Bonus

Zet **branch protection** aan op `main`: **Settings, Branches, Add rule**, vink **Require a pull request before merging** en **Require approvals (1)** aan. Probeer daarna rechtstreeks op `main` te pushen. Wat gebeurt er?
