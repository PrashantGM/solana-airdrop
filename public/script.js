document.querySelector('#airdrop').addEventListener('click', async (e) => {
  e.preventDefault();
  const solAddress = document.querySelector('input[name="address"]').value;
  const sol = document.querySelector('#amount').value;

  const response = await fetch('/airdrop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ solAddress, sol }),
  });
  const result = await response.json();
  alert(result.msg);
  console.log(result);
});
