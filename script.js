document.getElementById('resumeForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const response = await fetch('/analyze', {
        method: 'POST',
        body: formData
    });

    const result = await response.blob();

    // Handle the response (display results)
    const downloadLink = document.getElementById('download_report');
    downloadLink.href = URL.createObjectURL(result);
    downloadLink.style.display = 'inline';
    downloadLink.textContent = 'Download your report';

    // Show some basic result for demo
    document.getElementById('matched_skills').textContent = "Matched Skills: Python, Machine Learning";
    document.getElementById('missing_skills').textContent = "Missing Skills: JavaScript, SQL";
});
