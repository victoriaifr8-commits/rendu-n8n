# Rendu N8N — Vicom Agency

Rendu du projet **chatbot de support Vicom Agency**, construit avec **n8n** et **Claude**. Le dépôt contient trois dossiers.

| Dossier | Contenu |
|---|---|
| `workflow/` | Les 3 workflows n8n du chatbot (format `.workflow.ts`) et les résultats obtenus |
| `skills/` | Les 3 skills Claude créées pour travailler sur le projet |
| `vidéo/` | La vidéo de présentation (pas encore réalisée) |

---

## workflow/

Les workflows sont écrits au format **`.workflow.ts`** de n8ncli (SDK `@n8n/workflow-sdk`), pas en JSON. Ils se synchronisent avec une instance n8n avec `n8ncli push`. Les connexions (Stripe, Gmail, Supabase, etc.) n'y figurent que sous forme de références : aucune clé secrète n'est stockée dans le dépôt.

### `Vicom - Chatbot support.workflow.ts`
Le chatbot lui-même. Un agent IA (Claude Haiku) répond aux visiteurs et aux clients de Vicom Agency depuis un chat public.
- **Mémoire** : l'historique de la conversation est gardé dans Postgres (Supabase).
- **Outils** de l'agent : `rechercher_connaissances` (base de connaissances Supabase), `lire_compte_client` (compte du client connecté), `verifier_paiement` (Stripe), `envoyer_email_client` (Gmail), `modifier_abonnement` (sous-workflow ci-dessous), `planifier_tache`, `creer_ticket_sheet` et `creer_ticket_email` (ticket pour l'équipe).
- **Règles** : l'agent demande un « oui » explicite avant tout email, changement d'abonnement ou tâche planifiée, et n'accède aux données de compte que si le client est connecté.
- **Secours** : en cas d'erreur, un message de repli est renvoyé au lieu d'une erreur.

### `Vicom - Base de connaissances.workflow.ts`
Alimente la base de connaissances que le chatbot interroge.
- Surveille un dossier Google Drive (fichier créé ou modifié), avec un déclencheur manuel pour tout relancer.
- Supprime les anciens morceaux du fichier, puis le découpe (800 caractères, 100 de chevauchement), calcule les embeddings (OpenAI) et les enregistre dans Supabase.
- Contient aussi un **assistant IA** branché sur cette base, que le chatbot peut appeler.

### `Vicom - modifier_abonnement.workflow.ts`
Sous-workflow appelé par le chatbot pour changer l'abonnement d'un client.
- Vérifie que le client est connecté et qu'il a confirmé ; sinon il refuse.
- Retrouve le client dans Stripe, puis son abonnement actif, et change le prix avec calcul au prorata.

### `Resultats - Chatbot support Vicom.md`
Quatre conversations réelles du chatbot (exécutions du 21 octobre 2026) : choix d'abonnement, changement de formule, recommandation d'agents, besoin ventes + factures.

---

## skills/

Trois skills Claude (fichier `SKILL.md` dans chaque dossier) :

- **`interview/`** : avant de construire quoi que ce soit à partir d'une demande floue, pose des questions ciblées pour obtenir un brief précis.
- **`doubt-driven-dev/`** : pour le code et les automatisations, traite chaque affirmation comme une hypothèse à vérifier et ne dit jamais « terminé » sans preuve.
- **`hostile-review/`** : critique un plan, un code, une offre ou un document sans complaisance avant sa mise en ligne, avec un classement des défauts par gravité.

---

## vidéo/

Réservé à la vidéo de présentation du projet. Elle n'a pas encore été réalisée.
