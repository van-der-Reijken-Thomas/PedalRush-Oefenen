# Oefening 5: je echte project

**Duur:** 15 min · **Werkvorm:** in je echte projectgroep · **Laptops open**

**Doel:** je verlaat de sessie met een werkende teamworkflow en minstens 1 PR in review op jullie eigen repo.

## Checklist

### 1. Setup (5 min)
- [ ] Iedereen heeft de groepsrepo gekloond
- [ ] Iedereen heeft de repo toegevoegd in **GitButler** met `origin/main` als target (verplicht)
- [ ] **Test credentials** slaagt bij iedereen
- [ ] Branch protection staat aan op `main`: PR verplicht, **1 approval**
- [ ] Merge strategy gekozen (bv. **Squash and merge**)

### 2. Afspraken (3 min)
Vul de **teamafspraken** in en zet ze in de `README` van jullie repo:

| Onderwerp | Onze regel |
|---|---|
| Branch naamgeving | |
| Commit messages | |
| PR grootte | |
| Reviews | |
| Merge strategy | |
| Wie merget | |
| Tool | GitButler voor iedereen (verplicht) |
| Omgevingen | |

### 3. Eerste PR (7 min)
- [ ] Kies **een kleine taak** per persoon (bv. README aanvullen, een bug fixen, een bestand opkuisen)
- [ ] Werk in GitButler op een **eigen branch**
- [ ] Maak een **PR** met titel en beschrijving
- [ ] Iemand anders uit de groep doet de **review**

## Klaar als

- [ ] Iedereen heeft 1 PR open
- [ ] Elke PR heeft een reviewer toegewezen
- [ ] De teamafspraken staan in de README

## Omgevingen (staging en production)

Bespreek in je groep hoe jullie omgaan met omgevingen. Een simpele start:

- `main` is production
- Elke PR krijgt een preview deploy (bv. Netlify of Vercel) als staging
- Merge naar `main` deployt naar production

GitButler regelt je lokale werk. Omgevingen regel je met GitHub en CI/CD.

## Na de sessie

- Maak kleine PRs en review binnen een dag
- Update je workspace regelmatig vanaf `origin/main`
- Loop je vast? Gebruik de **project history** in GitButler of vraag het aan je groep
