const appel_par_le_chatbot = trigger({
  type: 'n8n-nodes-base.executeWorkflowTrigger',
  version: 1.3,
  config: { name: 'Appel par le chatbot', parameters: { inputSource: 'workflowInputs', workflowInputs: { values: [{ name: 'userId', type: 'string' }, { name: 'confirmation', type: 'boolean' }, { name: 'nouvelleOffre', type: 'string' }] } }, position: [0, 96] }
});

const userId_et_confirmation_valides = node({
  type: 'n8n-nodes-base.if',
  version: 2.4,
  config: { name: 'userId et confirmation valides ?', parameters: { conditions: { options: { caseSensitive: true, leftValue: '', typeValidation: 'loose', version: 2 }, conditions: [{ id: 'c1', leftValue: expr('{{ $json.userId }}'), rightValue: '', operator: { type: 'string', operation: 'notEmpty' } }, { id: 'c2', leftValue: expr('{{ $json.confirmation }}'), rightValue: '', operator: { type: 'boolean', operation: 'true', singleValue: true } }], combinator: 'and' }, looseTypeValidation: true }, position: [224, 96] }
});

const stripe_trouver_le_client = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.2,
  config: { name: 'Stripe - trouver le client', parameters: { method: 'GET', url: 'https://api.stripe.com/v1/customers/search', authentication: 'predefinedCredentialType', nodeCredentialType: 'stripeApi', sendQuery: true, queryParameters: { parameters: [{ name: 'query', value: expr('metadata[\'userId\']:\'{{ $json.userId }}\'') }] } }, credentials: { stripeApi: newCredential('Stripe account', 'm12wBSXdnW2rRXR7') }, position: [448, 0] }
});

const stripe_trouver_abonnement = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.2,
  config: { name: 'Stripe - trouver abonnement', parameters: { method: 'GET', url: 'https://api.stripe.com/v1/subscriptions', authentication: 'predefinedCredentialType', nodeCredentialType: 'stripeApi', sendQuery: true, queryParameters: { parameters: [{ name: 'customer', value: expr('{{ $json.data[0].id }}') }, { name: 'status', value: 'active' }, { name: 'limit', value: '1' }] } }, credentials: { stripeApi: newCredential('Stripe account', 'm12wBSXdnW2rRXR7') }, position: [672, 0] }
});

const stripe_modifier_abonnement = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.2,
  config: { name: 'Stripe - modifier abonnement', parameters: { method: 'POST', url: expr('https://api.stripe.com/v1/subscriptions/{{ $json.data[0].id }}'), authentication: 'predefinedCredentialType', nodeCredentialType: 'stripeApi', sendBody: true, contentType: 'form-urlencoded', bodyParameters: { parameters: [{ name: 'items[0][id]', value: expr('{{ $json.data[0].items.data[0].id }}') }, { name: 'items[0][price]', value: expr('{{ $(\'Appel par le chatbot\').item.json.nouvelleOffre }}') }, { name: 'proration_behavior', value: 'create_prorations' }] } }, credentials: { stripeApi: newCredential('Stripe account', 'm12wBSXdnW2rRXR7') }, position: [896, 0] }
});

const r_ponse_succ_s = node({
  type: 'n8n-nodes-base.set',
  version: 3.5,
  config: { name: 'Réponse succès', parameters: { mode: 'manual', assignments: { assignments: [{ id: 'a1', name: 'statut', value: 'succes', type: 'string' }, { id: 'a2', name: 'message', value: 'L\'abonnement a bien été modifié.', type: 'string' }] } }, position: [1120, 0] }
});

const r_ponse_refus = node({
  type: 'n8n-nodes-base.set',
  version: 3.5,
  config: { name: 'Réponse refus', parameters: { mode: 'manual', assignments: { assignments: [{ id: 'r1', name: 'statut', value: 'refuse', type: 'string' }, { id: 'r2', name: 'message', value: expr('{{ !$json.userId ? "Refusé : l\'utilisateur n\'est pas connecté (userId manquant)." : "Refusé : confirmation explicite du client absente." }}'), type: 'string' }] } }, position: [448, 192] }
});

const wf = workflow('akBcisJskqKiX1C5', 'Vicom - modifier_abonnement', { executionOrder: 'v1' });

export default wf
  .add(appel_par_le_chatbot)
  .to(userId_et_confirmation_valides.onTrue(stripe_trouver_le_client
    .to(stripe_trouver_abonnement)
    .to(stripe_modifier_abonnement)
    .to(r_ponse_succ_s)).onFalse(r_ponse_refus))
