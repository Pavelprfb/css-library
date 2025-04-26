document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('*').forEach(element => {
    element.classList.forEach(cls => {
      if (cls.includes('#')) {
        const parts = cls.split('#');
        if (parts.length >= 2) {
          if (parts[0] === 'c') {
            element.style.color = parts[1];
          } else if (parts[0] === 'bg') {
            element.style.backgroundColor = parts[1];
          } else if (parts[0] === 'b') {
            element.style.border = parts.slice(1).join(' ');
          } else if (parts[0] === 'fs') {
            element.style.fontSize = parts[1];
          }
        }
      }
    });
  });
});
alert();
