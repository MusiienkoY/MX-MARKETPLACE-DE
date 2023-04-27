const searchInput = document.getElementById('searchInput');
const resultsList = document.getElementById('resultsList');
const allItems = document.getElementsByTagName('li'); // здесь нужно указать тэг элементов, которые нужно искать

function filterResults() {
  const searchValue = searchInput.value.toLowerCase();

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];

    if (item.innerText.toLowerCase().includes(searchValue)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
}

searchInput.addEventListener('input', filterResults);