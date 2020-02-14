const currentDockerUrl = 'http://127.0.0.1:5000';

const get = (url, callback) => {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(JSON.parse(xmlHttp.responseText));
  };
  xmlHttp.open('GET', url, true);
  xmlHttp.send(null);
};

export function getCategories(callback) {
  get(`${currentDockerUrl}/categories`, result => {
    callback(result.data);
  });
}

export function getItems(callback) {
  get(`${currentDockerUrl}/items`, result => {
    callback(result.data);
  });
}

export function getItem(id, callback) {
  get(`${currentDockerUrl}/items/${id}`, callback);
}
