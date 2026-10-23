# Résultats du chatbot support Vicom

Conversations réelles tirées des exécutions n8n du workflow **Vicom - Chatbot support** (21 octobre 2026). Visiteur non connecté, langue : français.

Le chatbot tourne sur Claude Haiku, avec l'outil `rechercher_connaissances` (base de connaissances Supabase : Vicom-FAQ.pdf, Vicom-Offres.pdf, Vicom-Guides-par-metier.pdf).

---

## 1. Choix d'abonnement

**Visiteur :** quel abonnement choisir puis je changer ?

**Chatbot :**

Vicom Agency propose cinq formules, selon le nombre d'agents dont vous avez besoin :

| Formule | Prix | Agents inclus | Pour qui |
|---|---|---|---|
| **Classic Solo** | 19 €/mois | 1 agent au choix | Indépendant qui veut déléguer un métier |
| **Classic Duo** | 29 €/mois | 2 agents au choix | Petite structure avec deux besoins clés |
| **Premium** | 49 €/mois | 4 agents au choix | PME qui veut une vraie équipe |
| **Complet** | 89 €/mois | Les 7 agents | Toute l'équipe, sans limite |
| **Entreprise** | À partir de 120 €/poste/an | Tous les agents, pour vos salariés | Entreprises avec plusieurs utilisateurs |

Les prix sont indicatifs TTC. Les formules sont sans engagement, sauf la formule Entreprise, qui est annuelle.

**Changer de formule :** c'est possible à tout moment depuis votre espace, vers une formule supérieure. Vous pouvez aussi changer d'agents depuis la page de choix des agents, dans la limite de votre formule.

Pour vous aider à choisir, dites-moi quel métier vous intéresse (RH, finance, ventes, marketing, support client, juridique, administratif) et combien d'agents vous souhaitez utiliser. Pour modifier votre abonnement, il faudra vous connecter à votre compte.

*Outil appelé : rechercher_connaissances · 5 743 tokens · 3,6 s*

---

## 2. Changement d'abonnement (suite de la même session)

**Visiteur :** si je choisie un abonnement duo je peux changer après?

**Chatbot :**

Oui, vous pourrez passer à une formule supérieure à tout moment, depuis votre espace. Par exemple, de Classic Duo (29 €/mois) vers Premium (49 €/mois) ou Complet (89 €/mois).

Vous pourrez aussi changer d'agents depuis la page de choix des agents, dans la limite de votre formule. Avec Classic Duo, vous disposez de 2 agents au choix.

Je n'ai pas d'information sur le passage à une formule inférieure. Pour cette question, vous pouvez contacter notre équipe via le formulaire de contact.

Si vous souhaitez modifier votre abonnement, connectez-vous à votre compte.

*Réponse depuis la mémoire de session, sans nouvel appel d'outil · 6 072 tokens · 3,0 s*

---

## 3. Recommandation d'agents (profil comptable)

**Visiteur :** je suis domaine compta je cherche deux agents lesquels me proposes tu

**Chatbot :**

Pour un profil comptable, je vous recommande :

1. **Marc (Finance)** : c'est l'agent central de votre domaine. Il gère les factures, les relances d'impayés, le prévisionnel de trésorerie et l'analyse des marges. Il propose aussi des modèles prêts à l'emploi (mentions obligatoires d'une facture, note de frais, échéancier de paiement, mise en demeure, tableau de bord mensuel) et un résumé hebdomadaire des factures reçues.

2. **Alex (Organisation)** ou **Clara (Juridique)**, selon votre besoin :
   - **Alex** si vous voulez structurer vos procédures internes, suivre vos fournisseurs et piloter vos projets.
   - **Clara** si vous avez surtout besoin d'un appui sur les contrats, les CGV ou le RGPD.

Pour deux agents, la formule **Classic Duo** à **29 €/mois** correspond à votre besoin. Les formules supérieures (Premium à 49 €/mois pour 4 agents, Complet à 89 €/mois pour les 7 agents) sont aussi disponibles.

Quel est votre besoin principal : la gestion quotidienne des factures et de la trésorerie, ou l'organisation et les aspects juridiques de votre activité ? Je pourrai alors affiner mon conseil sur le second agent.

*Outil appelé 2 fois : rechercher_connaissances · 9 919 tokens · 4,1 s*

---

## 4. Ventes + factures

**Visiteur :** J'ai besoin de 2 agents, un pour les ventes et un pour les factures. Quelle formule me conseillez-vous et combien ça coûte ?

**Chatbot :**

Pour vos deux besoins (ventes et factures), la formule la plus adaptée est la **Classic Duo à 29 €/mois**, qui inclut 2 agents au choix.

- **Tom – Ventes** : prospection, rendez-vous et propositions commerciales.
- **Marc – Finance** : factures, relances d'impayés, trésorerie et marges.

Les deux agents disposent de leurs propres missions guidées, modèles et routines automatiques. Par exemple, Marc peut vous envoyer chaque semaine, le lundi à 9h, un résumé des factures reçues par email.

Vous n'êtes pas encore connecté, je ne peux donc pas modifier d'abonnement pour le moment. Pour souscrire ou changer de formule, connectez-vous à votre espace Vicom Agency. Si vous avez d'autres questions sur les agents ou les offres, je suis là pour vous aider.

*Outil appelé 2 fois : rechercher_connaissances · 8 833 tokens · 2,3 s*

---

## Ce que montrent ces résultats

- Le chatbot cherche dans la base de connaissances avant de répondre et ne cite que des prix et des agents qui y figurent.
- Il garde le fil d'une conversation (exemples 1 et 2 : même session, la 2e réponse s'appuie sur la 1re sans nouvel appel d'outil).
- Quand l'information manque (passage à une formule inférieure), il le dit et renvoie vers le formulaire de contact au lieu d'inventer.
- Sans utilisateur connecté, il n'appelle aucun outil de compte (abonnement, paiement) et invite à se connecter.
