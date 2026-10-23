---
name: "interview"
description: "Use when the user starts a new project, feature, document or offer with a vague brief — interview them with targeted questions before building anything."
---

# Interview — clarifier avant de construire

Objectif : transformer une demande floue en brief précis AVANT d'écrire du code, un document ou une offre. On ne produit rien tant que le brief n'est pas validé.

## Quand l'utiliser
- Nouveau projet, nouvelle feature d'app, nouveau document, nouvelle offre client
- La demande tient en une phrase mais implique beaucoup de choix implicites
- L'utilisateur dit « interview-moi », « pose-moi des questions », « /interview »

## Déroulé
1. **Reformuler** la demande en une phrase et lister les zones d'ombre détectées.
2. **Poser les questions par rondes de 3 à 4 maximum** (utiliser AskUserQuestion si disponible, avec des options concrètes + une option recommandée). Jamais 15 questions d'un coup.
3. **Couvrir ces axes**, dans cet ordre, en sautant ce qui est déjà clair :
   - Pourquoi : problème à résoudre, résultat attendu, critère de succès mesurable
   - Pour qui : utilisateur final, niveau, contexte d'usage
   - Quoi : périmètre minimum (MVP) vs. « plus tard »
   - Contraintes : budget, délai, stack/outils imposés, légal (RGPD, mentions), ton/marque
   - Risques : ce qui ferait échouer le projet, ce qui est irréversible
   - Livrable : format, où il doit atterrir, qui le valide
4. **Creuser les réponses vagues** : si une réponse est « je sais pas » ou « comme d'habitude », proposer 2-3 options concrètes avec une recommandation.
5. **S'arrêter** quand on peut écrire le brief sans inventer. 2 à 4 rondes suffisent en général.

## Sortie
Un **brief** court :
- Objectif (1 phrase) + critère de succès
- Cible
- Périmètre IN / OUT
- Contraintes
- Hypothèses retenues (marquées comme telles)
- Questions encore ouvertes
- Prochaine étape proposée

Demander validation explicite du brief avant de construire.

## Règles
- Une question = une décision. Pas de questions dont la réponse ne change rien.
- Ne jamais deviner en silence : toute hypothèse est écrite dans le brief.
- Respecter la langue de l'utilisateur (français par défaut si elle écrit en français).
