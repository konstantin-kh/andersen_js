function request(url) {
  return new Promise((resolve, reject) => {
    const DELAY_TIME = Math.floor(Math.random() * 10000) + 1;
    setTimeout(() => resolve(url), DELAY_TIME);
  });
}

async function getAll(items) {
  const resolvedArray = [];
  let result = null;
  for (let i = 0; i < items.length; i++) {
    result = await request(items[i]);
    resolvedArray.push(result);
  }
  return resolvedArray;
}

const urls = [
  'https://miro.medium.com/max/668/1*hcws3Wa6u9IqaEZ_4X04uw.jpeg',
  'https://beginpc.ru/images/internet/js_logo.jpg',
  'https://static.tildacdn.com/tild3761-6135-4035-a466-663961303730/g12.png',
];

getAll(urls).then(array => array);