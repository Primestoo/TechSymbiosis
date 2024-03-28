async function shortenUrl(event) {
  event.preventDefault();

  const longUrl = document.getElementById('longUrlInput').value;

  try {
    const response = await fetch('/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ longUrl })
    });

    if (!response.ok) {
      throw new Error('Failed to shorten URL');
    }

    const data = await response.json();
    const shortUrl = data.shortUrl;

    document.getElementById('shortUrl').innerText = shortUrl;
    document.getElementById('shortUrlContainer').classList.remove('hidden');
  } catch (error) {
    console.error('Error:', error.message);
    alert('Failed to shorten URL. Please try again later.');
  }
}
