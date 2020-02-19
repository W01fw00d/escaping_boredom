const currentDockerUrl = 'http://127.0.0.1:5000';
const isMocked = true;

const httpGet = (params, callback) => {
  const url = `${currentDockerUrl}/${params}`;
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(JSON.parse(xmlHttp.responseText));
  };
  xmlHttp.open('GET', url, true);
  xmlHttp.send(null);
};

function mockedGet(params, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType('application/json');
  rawFile.open('GET', `fake_data/${params}.json`, true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 && rawFile.status == '200') {
      callback(JSON.parse(rawFile.responseText));
    }
  };
  rawFile.send(null);
}

const getData = (params, callback) => (isMocked ? mockedGet : httpGet)(params, callback);

export function getTags(callback) {
  getData('tags', callback);
}

export function getRooms(callback) {
  getData('rooms', callback);
}

export function getRoomDetails(id, callback) {
  isMocked ? mockedGet(`room-details`, callback) : httpGet(`room-details/${id}`, callback);
}
