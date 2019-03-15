const ghPages = require('gh-pages');

ghPages.publish('build', (err) => {
  console.log('Error deploying to github pages');
  console.log(err);
  throw new Error(err);
});
