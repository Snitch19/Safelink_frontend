function checkUrl() {
    const url = document.getElementById('urlInput').value;
    fetch('safelinkback-production.up.railway.app/api/verify_url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('result').innerText = `Risk Score: ${data.riskScore}`;
    })
    .catch(err => console.error(err));
}
