# Oefening 1: branch, commit, push, PR

**Duur:** 15 min · **Werkvorm:** duo's · **Laptops open**

**Doel:** je doorloopt de volledige GitHub flow: branch, commit, push, pull request.

## Voorbereiding

1. Eén van jullie maakt via **Use this template** een eigen repo (bv. `git-oefening-<naam1>-<naam2>`).
2. Voeg je partner toe: **Settings, Collaborators, Add people**.
3. Allebei clonen de repo:

```bash
git clone <url-van-jullie-repo>
cd <repo>
```

## Opdracht

Elk van jullie doet dit, op een eigen branch:

1. Maak een branch: `add-<jouw-naam>`

   ```bash
   git switch -c add-jouw-naam
   ```

2. Open `CONTRIBUTORS.md` en voeg **je naam toe op een nieuwe regel op het einde** van de lijst.
3. Commit met een duidelijke message, bv. `docs: add <jouw-naam> to contributors`.
4. Push de branch en open op GitHub een **pull request** naar `main`.
5. Geef je PR een goede titel en een korte beschrijving (wat en waarom).

## Klaar als

- [ ] Je hebt een eigen branch met 1 commit
- [ ] Er staat een open PR met een duidelijke titel
- [ ] Je partner heeft ook een open PR

## Niet mergen!

Laat beide PRs open staan. Je gebruikt ze in oefening 2.

## Hulp nodig?

- `git status` toont op welke branch je zit en wat gewijzigd is
- Push lukt niet? Controleer of je ingelogd bent op GitHub (SSH key of token)
