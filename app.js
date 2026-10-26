// Numbered bio links omit personal names; older named links still work.
const params = new URLSearchParams(window.location.search);
const selected = params.get('broker')?.toLowerCase();
const registrationId = params.get('id');
const brokers = [...document.querySelectorAll('[data-broker]')];
const match = registrationId
  ? brokers.find((broker) => new URL(broker.href).pathname.split('/').filter(Boolean).pop() === registrationId)
  : brokers.find((broker) => broker.dataset.broker === selected);
if (match) {
  brokers.forEach((broker) => { broker.hidden = broker !== match; });
  const name = match.querySelector('strong').textContent;
  document.getElementById('registration-title').textContent = `Register with ${name}.`;
  document.getElementById('broker-count').textContent = 'YOUR LEADER';
  document.getElementById('selection-note').textContent = `Continue to ${name}’s personal registration page below.`;
  document.title = `Register with ${name} · Panther FX`;
}
document.getElementById('year').textContent = new Date().getFullYear();
