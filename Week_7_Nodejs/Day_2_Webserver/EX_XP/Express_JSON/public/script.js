

fetch('http://localhost:3000')
.then(res => res.json()
.then((data) =>{
  console.log('obj: ', data);
  let body = document.body;
  let p = document.createElement('p');
  p.innerText = JSON.stringify(data);
  body.appendChild(p);
}))
.catch(e => console.log(e));