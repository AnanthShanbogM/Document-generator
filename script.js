document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const get = id => document.getElementById(id).value;

  document.getElementById('univText').textContent = get('university');
  document.getElementById('collegeText').textContent = get('college');
  document.getElementById('locationText').textContent = get('location');
  document.getElementById('yearText').textContent = get('year');
  document.getElementById('semText').textContent = get('semester');
  document.getElementById('subText').textContent = get('subject');
  document.getElementById('topicText').textContent = `"${get('topic')}"`;
  document.getElementById('toNameText').textContent = get('toName');
  document.getElementById('toDesigText').textContent = get('toDesig');
  document.getElementById('byNameText').textContent = get('byName');
  document.getElementById('byClassText').textContent = get('byClass');
  document.getElementById('rollNoText').textContent = get('rollNo');

  document.getElementById('outputSection').style.display = 'block';
});

function printPage() {
  window.print();
}

function downloadPDF() {
  const element = document.getElementById('frontPage');
  html2pdf().from(element).save('Assignment_Front_Page.pdf');
}