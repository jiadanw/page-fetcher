//const args = process.argv.splice(2);
const net = require("net");
const fs = require("fs");
const conn = net.createConnection({
  host: 'www.example.com',
  port:80
})
const request = require("request")

conn.setEncoding('UTF8');
const download = function(content){
  fs.writeFile("./index.html",content, function(error) {
    if(error) {
      console.log(error)
  } else {
    console.log(`Downloaded and saved ${(fileSize("./index.html"))} bytes to ${"./index.html"}`)
  }
  })
};
request('http://www.example.com', (err,response,body) =>{
  if(err) {
    console.log(err);
  }
  download(body);
  console.log('statusCode:', response && response.statusCode); 
  conn.end;
})



const fileSize = function(filename) {
  const stats = fs.statSync(filename);
  const fileSize = stats.size;
  return fileSize;
}
