---
name: "doubt-driven-dev"
description: "Use when building or debugging code, automations or apps — systematically doubt assumptions, verify each claim with evidence, and never declare 'done' without proof."
---

# Doubt-Driven Development — douter, puis prouver

Principe : chaque affirmation (« ça marche », « c'est corrigé », « cette API renvoie X ») est une hypothèse tant qu'elle n'est pas vérifiée. Le but est d'éviter les faux « c'est fini » et les bugs découverts en production.

## Quand l'utiliser
- Écriture ou modification de code, workflows (n8n, Lovable, Stripe, API…), prompts d'agents
- Debug : « ça marche pas », « pourquoi ça plante »
- Avant d'annoncer qu'une tâche technique est terminée

## Boucle de travail
1. **Lister les hypothèses** avant de coder : sur les données (format, champs vides, encodage), l'API (réponse, erreurs, limites), l'environnement (versions, clés, permissions), l'utilisateur (comportement réel).
2. **Classer** chaque hypothèse : vérifiée / vérifiable maintenant / invérifiable ici. Vérifier en priorité celles qui, si fausses, cassent tout.
3. **Vérifier par la preuve**, pas par la lecture : exécuter, tester un cas réel, lire la doc officielle, inspecter la vraie réponse. « Le code a l'air bon » n'est pas une preuve.
4. **Petits pas** : un changement → une vérification. Ne pas empiler 5 modifications non testées.
5. **Chercher activement à se contredire** : pour chaque correctif, se demander « qu'est-ce qui prouverait que j'ai tort ? » et tester ce cas (entrée vide, doublon, timeout, utilisateur non connecté, paiement refusé, caractères spéciaux/accents).
6. **Debug** : formuler 2-3 causes possibles, trouver le test qui les départage, ne corriger qu'après avoir identifié la cause.

## Avant de dire « terminé »
Fournir un **rapport de preuve** :
- ✅ Vérifié (comment : commande, test, capture, réponse API)
- ⚠️ Non vérifié (et pourquoi) + comment l'utilisateur peut le tester
- ❓ Hypothèses restantes
- Cas limites testés / non testés

## Interdits
- Dire « ça devrait marcher » sans le signaler comme non vérifié
- Inventer un nom de fonction, d'endpoint ou de paramètre sans vérifier qu'il existe
- Masquer une erreur en élargissant un try/catch ou en supprimant un test
- Annoncer un succès partiel comme un succès complet
