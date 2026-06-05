function downloadResumePdf() {
  const element = document.getElementById('resume');
  const button = document.getElementById('downloadPdfBtn');
  const originalText = button.textContent;

  button.textContent = 'Generating PDF...';
  button.disabled = true;

  const options = {
    margin: [0, 0, 0, 0],
    filename: 'Marco_Tulio_Costa_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff'
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait'
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy']
    }
  };

  html2pdf()
    .set(options)
    .from(element)
    .save()
    .finally(() => {
      button.textContent = originalText;
      button.disabled = false;
    });
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('downloadPdfBtn')?.addEventListener('click', downloadResumePdf);
  document.getElementById('printBtn')?.addEventListener('click', () => window.print());
});
