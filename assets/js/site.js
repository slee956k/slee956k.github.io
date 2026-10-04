(() => {
  const article = document.getElementById('article-content');
  const toc = document.getElementById('toc');
  if (!article || !toc) return;

  const headings = [...article.querySelectorAll('h2, h3')];
  if (!headings.length) {
    toc.parentElement.style.display = 'none';
    return;
  }

  headings.forEach((heading, i) => {
    if (!heading.id) {
      heading.id = heading.textContent.trim().toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-') || `section-${i + 1}`;
    }
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    if (heading.tagName === 'H3') link.classList.add('toc-sub');
    toc.appendChild(link);
  });
})();
