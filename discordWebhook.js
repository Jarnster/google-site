async function webhook() {
        const content = document.getElementById('message').value;
        const username = document.getElementById('username').value || 'DefaultBot';

        const response = await fetch('/api/webhook', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, content })
        });

        if (response.ok) {
          alert('Message sent, thanks for the feedback!');
        } else {
          alert('Something went wrong, please try again later');
        }
      }