// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Live-search listings as the user types in the navbar search box.
(() => {
  const form = document.getElementById('live-search-form');
  const input = document.getElementById('live-search-input');

  if (!form || !input) return;

  let debounceTimer;

  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      const query = input.value.trim();
      const params = new URLSearchParams(window.location.search);
      const selectedCategory = params.get('category');
      const nextParams = new URLSearchParams();

      if (selectedCategory) nextParams.set('category', selectedCategory);
      if (query) nextParams.set('q', query);

      const actionUrl = `${form.action}${nextParams.toString() ? `?${nextParams.toString()}` : ''}`;
      window.location.href = actionUrl;
    }, 250);
  });
})();
