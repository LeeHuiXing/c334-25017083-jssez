import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat@1.46.5/dist/chat.bundle.es.js';

createChat({
  webhookUrl: 'https://agenticflows.tokencraze.org/webhook/92ff99c8-a46c-4746-becb-177a38470da3/chat',
  mode: 'window',
  loadPreviousSession: false,
  initialMessages: [
    'Hello. What would you like to know about the JS-SEZ?',
    'Ask about zones, SETUP, incentives or staff passes.',
  ],
  i18n: {
    en: {
      title: 'JS-SEZ advisor',
      subtitle: 'A guide for manufacturers',
      getStarted: 'New conversation',
      inputPlaceholder: 'Ask a JS-SEZ question...',
    },
  },
});

const chatToggle = document.querySelector('#n8n-chat .chat-window-toggle');

if (chatToggle) {
  chatToggle.setAttribute('role', 'button');
  chatToggle.setAttribute('tabindex', '0');
  chatToggle.setAttribute('aria-label', 'Open JS-SEZ advisor');
  chatToggle.setAttribute('aria-expanded', 'false');

  chatToggle.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      chatToggle.click();
    }
  });

  chatToggle.addEventListener('click', () => {
    const expanded = chatToggle.getAttribute('aria-expanded') === 'true';
    chatToggle.setAttribute('aria-expanded', String(!expanded));
    chatToggle.setAttribute('aria-label', expanded ? 'Open JS-SEZ advisor' : 'Close JS-SEZ advisor');
  });
} else {
  console.error('The JS-SEZ advisor chat toggle was not rendered.');
}
