const categories = document.querySelector('#categories');
const liItems = categories.querySelectorAll('.item');
console.log(`Number of categories: ${liItems.length}`);

liItems.forEach(liItem => {
  console.log(`Category: ${liItem.querySelector('h2').innerHTML}`);
  console.log(`Elements: ${liItem.querySelectorAll('ul li').length}`);
});
