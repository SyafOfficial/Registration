// A personal bio URL such as ?broker=pablo keeps one broker's registration link.
const selected = new URLSearchParams(window.location.search).get('broker')?.toLowerCase();
const brokers = [...document.querySelectorAll('[data-broker]')];
const match = brokers.find((broker) => broker.dataset.broker === selected);
if (match) {
  brokers.forEach((broker) => { broker.hidden = broker !== match; });
  const name = match.querySelector('strong').textContent;
  document.getElementById('registration-title').textContent = `Register with ${name}.`;
  document.getElementById('broker-count').textContent = 'YOUR INTRODUCING BROKER';
  document.getElementById('selection-note').textContent = `Continue to ${name}’s personal registration page below.`;
  document.title = `Register with ${name} · Panther FX`;
}
document.getElementById('year').textContent = new Date().getFullYear();
