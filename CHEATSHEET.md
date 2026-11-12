# Cheat sheet: Git, GitHub en GitButler

## De flow

1. Branch vanaf `main`
2. Kleine commits
3. Push en open een **pull request**
4. Teamgenoot doet **review** (Approve, Comment of Request changes)
5. Merge (afgesproken strategie), branch verwijderen
6. Update `main`

## Goede PR-gewoontes

- Klein, 1 doel, reviewbaar in 10 minuten
- Duidelijke titel en beschrijving, link de issue (`Closes #12`)
- Commit messages: wat en waarom (`fix: prevent empty username`)
- Draft PR voor vroege feedback
- Vaak pullen, zo blijven conflicts klein

## Merge strategies

| Strategie | Resultaat |
|---|---|
| Merge commit | Alle commits plus een merge commit |
| Squash and merge | 1 commit per PR op `main` |
| Rebase and merge | Lineaire historiek |

## Conflict oplossen

```text
<<<<<<< HEAD
jouw versie
=======
andere versie
>>>>>>> feature/x
```

Kies de uiteindelijke tekst, verwijder de markers, commit.

## GitButler: vocabulaire

| Git / GitHub | GitButler app | CLI (extra) |
|---|---|---|
| `git switch -c x` | nieuwe branch in de app | `but commit -b x` |
| `git stash` | niet nodig, branches leven parallel | |
| `git commit --amend` / rebase -i | wijziging of commit slepen | `but amend`, `but squash` |
| `git reflog` | project history | `but oplog`, `but undo` |
| `git pull --rebase` | workspace updaten | `but pull` |
| conflict markers, stop | conflicted commit oplossen | `but resolve` |
| `gh pr create` | Create pull request | `but pr new <branch>` |

## GitButler: kernideeën

- **Workspace:** alle applied branches samen in 1 werkmap (`gitbutler/workspace`)
- **Target branch:** meestal `origin/main`
- **Parallel branches:** meerdere branches tegelijk, zonder wisselen
- **Stacked branches:** afhankelijke wijzigingen, elk met een eigen kleine PR
- **Conflicts blokkeren niet:** een commit kan conflicted zijn, los het op wanneer je klaar bent
- **Project history:** alles is ongedaan te maken

## Stack publiceren

1. Maak de onderste branch en commit
2. Maak een nieuwe branch **bovenop** met het stack-icoon
3. PRs maken van **onder naar boven**
4. Mergen van onder naar boven
5. Workspace updaten

## Staging en production

- `main` is production, de target branch in GitButler is `main`
- Elke PR krijgt een preview deploy (staging)
- Omgevingen regel je met GitHub en CI/CD, niet met GitButler

## Valkuilen

- Gebruik geen gewone `git commit`, `checkout` of `rebase` in een GitButler workspace
- Auth faalt: test credentials in project settings, probeer `git push` in de terminal
- Vast? Ga terug via de project history (of `but undo`)

## AI-gebruik

- Jij blijft verantwoordelijk voor wat je commit
- AI-code gaat ook door de PR review
- Nooit wachtwoorden, API keys of persoonsgegevens in een prompt
- Volg de regels van je vak en van Howest

## Links

- [docs.gitbutler.com](https://docs.gitbutler.com)
- [GitHub Docs: pull requests](https://docs.github.com/en/pull-requests)
