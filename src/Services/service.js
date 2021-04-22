export async function getAllPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  })
}

export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(responce => responce.json())
      .then(data => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      });
  })
}
