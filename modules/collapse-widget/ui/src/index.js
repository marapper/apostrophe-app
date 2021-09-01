export default () => {
  apos.util.widgetPlayers.collapse = {
    selector: '[data-collapse]',
    player: function (el) {
      const color = el.dataset.color || 'purple'


      // Find our button
      const btn = el.querySelector('[data-collapse-button]');
      // Find our hidden text
      const target = el.querySelector('[data-collapse-detail]');

      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        // Update the button's aria attribute
        btn.setAttribute('aria-expanded', !expanded);
        // Update the `hidden` attribute on the detail
        target.hidden = expanded;
        target.style.display = 'block';
      });
    }
  };
};
