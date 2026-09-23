function printResume() {
  window.print();
}

function downloadPDF() {
  const lang = document.documentElement.lang === 'pt' ? 'pt' : 'en';
  const url = `./assets/Resume-${lang}.pdf`;
  const filename = lang === 'pt'
    ? 'Marco_Tulio_Costa_Curriculo.pdf'
    : 'Marco_Tulio_Costa_Resume.pdf';
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('printBtn')?.addEventListener('click', printResume);
  document.getElementById('pdfBtn')?.addEventListener('click', downloadPDF);

  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  initLang();
});
