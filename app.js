document.querySelector('#copy-bib').addEventListener('click', async () => {
  const text = document.querySelector('#bibtex').textContent;
  try {
    if (navigator.clipboard && window.isSecureContext) await navigator.clipboard.writeText(text);
    else {
      const field = document.createElement('textarea'); field.value = text; document.body.append(field); field.select();
      const copied = document.execCommand('copy'); field.remove(); if (!copied) throw new Error('Copy unavailable');
    }
    document.querySelector('#copy-status').textContent = 'Citation copied.';
  } catch { document.querySelector('#copy-status').textContent = 'Please select and copy the citation above.'; }
});
