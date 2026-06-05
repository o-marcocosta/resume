function printResume() {
  window.print();
}

function downloadPDF() {
  // download a fixed, pre-generated PDF file named 'resume.pdf' located in the assets folder
  const url = '.\\assets\\resume.pdf';
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Marco_Tulio_Costa_Resume.pdf';
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
