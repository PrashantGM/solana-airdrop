document.querySelector('#airdrop').addEventListener('click', async (e) => {
  e.preventDefault();
  const solAddress = document.querySelector('input[name="address"]').value;
  const sol = document.querySelector('#amount').value;
  try {
    const response = await fetch('/airdrop', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ solAddress, sol }),
    });
    const result = await response.json();
    if (result.success) {
      alert(result.msg);
    } else {
      alert(result.msg);
    }
  } catch (error) {
    console.log(error);
  }
});
