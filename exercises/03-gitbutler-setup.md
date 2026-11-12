# Oefening 3: GitButler installeren en instellen

**Duur:** 10 min · **Werkvorm:** individueel · **Laptops open**

**Doel:** GitButler draait op jouw laptop en is gekoppeld aan de oefenrepo en je GitHub account.

> GitButler is **verplicht** in je project. Lukt de installatie niet, meld het meteen.

## Stappen

1. **Installeer** de GitButler desktop app via [gitbutler.com](https://gitbutler.com) (als je dit nog niet deed).
2. Open de app en kies **Add local project**. Selecteer de map van je **gekloonde oefenrepo**.
3. Kies als **target branch** `origin/main`.
4. Koppel je **GitHub account** in de instellingen, zodat GitButler pull requests kan openen.
5. Ga naar de project settings, sectie **Git**, en klik op **Test credentials**. Dit moet slagen.

## Klaar als

- [ ] De oefenrepo staat in GitButler met `origin/main` als target
- [ ] Je GitHub account is gekoppeld
- [ ] **Test credentials** slaagt
- [ ] Je ziet de workspace (nog zonder branches)

## Veelvoorkomende problemen

| Probleem | Oplossing |
|---|---|
| Test credentials faalt | Controleer of `git push` in de terminal werkt voor deze repo. Los het daar op en test opnieuw |
| Geen `origin/main` beschikbaar | Doe eerst een `git fetch` in de terminal |
| De map wordt niet herkend | Kies de map die `.git` bevat (de root van de repo) |

## Optioneel: de CLI

In de app: **Settings, General, Install CLI**. Daarna kan je in een terminal `but status` proberen. Je hebt de CLI vandaag niet nodig.

## Opgelet

In een GitButler workspace gebruik je **geen** gewone `git commit`, `git checkout` of `git rebase` meer. Werk via de app.
