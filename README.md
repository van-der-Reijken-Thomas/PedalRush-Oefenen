# Git workflow: oefenrepo

Oefenrepo bij de sessie **Samen werken met Git, GitHub en GitButler** (Howest MCT).

Dit is een heel kleine statische website. Omdat de code ES modules gebruikt, werkt `index.html` niet rechtstreeks vanaf je schijf. Start een lokale server in de map:

```bash
python3 -m http.server 8000   # open dan http://localhost:8000
```

Of gebruik de VS Code extensie **Live Server**. Je hebt geen build of installatie nodig.

## Inhoud

| Pad | Wat |
|---|---|
| `index.html` | De pagina |
| `src/greeting.js` | Begroeting |
| `src/menu.js` | Navigatiemenu |
| `src/footer.js` | Footer (bevat een bewuste fout voor oefening 4) |
| `src/styles.css` | Styling |
| `CONTRIBUTORS.md` | Namen van deelnemers (oefening 1 en 2) |
| `exercises/` | De oefeningen |
| `CHEATSHEET.md` | Spiekbriefje |

## Voorbereiding (voor de sessie)

- [ ] GitHub account
- [ ] Git geïnstalleerd en je kan pushen naar GitHub (`git --version`)
- [ ] GitButler desktop app geïnstalleerd (gitbutler.com)
- [ ] Je weet in welke groep en met welke partner je werkt

## Oefeningen

1. [Branch, commit, push, PR](exercises/01-github-pr.md)
2. [Review en conflict](exercises/02-review-conflict.md)
3. [GitButler installeren en instellen](exercises/03-gitbutler-setup.md)
4. [GitButler flow](exercises/04-gitbutler-flow.md)
5. [Je echte project](exercises/05-real-project.md)
