import pages from 
const results = document.getElementById('viewpdfinfullscreen');

pages.forEach(page => {
  const listItem = document.createElement('div');
  listItem.className = 'list-item';

  const image = document.createElement('img');
  image.src = page.imageUrl;
  image.alt = 'Page Image';

  listItem.appendChild(image);
  results.appendChild(listItem);
});
