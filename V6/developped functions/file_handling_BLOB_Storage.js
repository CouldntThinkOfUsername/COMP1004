//Blob_Storage_Script
const a = document.querySelector('a');

const data = "test example";

//blob creation, url and download
const blob = new Blob ([data], {type: 'application/json'});

const url = URL.createObjectURL(blob);

a.href = url;
a.download = 'blob-download.txt';

/*Citations:
https://www.youtube.com/watch?v=WqBs_msUOXY

*/