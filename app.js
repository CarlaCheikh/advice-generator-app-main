async function generate() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    document.querySelector("h1").innerText =   `Advice #${data.slip.id}`;
    document.querySelector("p").innerText = `"${data.slip.advice}"`;
  }


document.querySelector('.dice-image').onclick = () => {
  generate();
}