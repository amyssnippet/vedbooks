
import articles from '/JAVASCRIPT/list.js';

const searchBox = document.getElementById('search-box');
const results = document.getElementById('results');

searchBox.addEventListener('keyup', function() {
  const searchTerm = this.value.toLowerCase();

  let filteredArticles = articles.filter(article => article.title.toLowerCase().includes(searchTerm));

  if (searchTerm.length > 0) {
    results.innerHTML = '';

    if (filteredArticles.length > 0) {
      const list = document.createElement('ul');
      results.appendChild(list);
      results.style.display = 'block';

      filteredArticles.forEach(article => {
        const listItem = document.createElement('li');
        listItem.className = 'items-list';
        
        // Create image element
        const image = document.createElement('img');
        image.src = article.image;
        image.alt = article.title;
        image.className = 'list-images';
        listItem.appendChild(image);

        // Create content container
        const content = document.createElement('div');
        content.className = 'article-content';
        listItem.appendChild(content);

        // Create title element
        const title = document.createElement('a');
        title.href = article.url;
        title.textContent = article.title;
        title.className = 'title';
        content.appendChild(title);

        // Create description element
        const description = document.createElement('p');
        description.textContent = article.description;
        description.className = 'description';
        content.appendChild(description);

        list.appendChild(listItem);
      });
    } else {
      results.textContent = 'No articles found.';
      results.style.display = 'block';
    }
  } else {
    results.style.display = 'none';
  }
});
                                                   
