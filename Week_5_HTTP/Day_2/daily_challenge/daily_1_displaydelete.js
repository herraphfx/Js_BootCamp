console.log('exercises');
// Daily Challenge
let form = document.forms.gif_search;
let search = document.forms.gif_search.search;
let gifs = document.getElementById('gifs');
let eraseAll = document.getElementById('eraseAll');

form.addEventListener('submit', submitForm);
eraseAll.addEventListener('click', function(){
  let arr = gifs.children;

  for(let idx in arr){
    console.log(arr[idx]);
    gifs.removeChild(arr[idx])
    //gifs.removeChild(gifs.firstElementChild);
 
    // When iterating, idx changes from 0 to 2
    // if you use gifs.removeChild(gif), it will remove gif at pos 0
    // then gif at pos 1 become 0, gif at pos 2, becomes 1
    // at idx = 1, gif at new pos 1 is removed, leaving only gif at pos 0

    // therefore, use lastElementChild or firstElementChild
    // alternatively, use idx to remove from last index
  }
})

function submitForm(event){
  event.preventDefault();
  console.log('Search requested');
  make_gif_search();
}

let category = "";
function make_gif_search(){
  console.log('Searching...');
  let xhr = new XMLHttpRequest();
  category = search.value;
  let url = `https://api.giphy.com/v1/gifs/search?q=${category}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
  console.log(url);
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.send();

  let gif_obj;
  xhr.onload = function(){
    if (xhr.status === 200){
      console.log(xhr.response);
      data = xhr.response.data;
      console.log(data[0]);
      append_gif(gif_obj, category);
      
    }
    else{
      console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    }
  }

  xhr.onprogress = function(event){
    if (event.lengthComputable) {
          console.log(`Received ${event.loaded} of ${event.total} bytes`);
      }
      else {
          console.log(`Received ${event.loaded} bytes`); // no Content-Length
      }
  }

 

}

function append_gif(gif_obj, category){
  let div = document.createElement('div');
  let title = document.createElement('h3');
  let iframe = document.createElement('iframe');
  let del_gif = document.createElement('button');
  let del_div = document.createElement('div');

  // iframe.setAttribute('src', `https://giphy.com/embed/${gif.id}`);
  iframe.setAttribute('src', gif_obj.embed_url);
  iframe.width = '240px';

  title.innerText = category;
  title.style.width = '240px';
  div.style.margin = '20px';
  div.style.textAlign = 'center';

  // To delete gif
  del_gif.innerText = 'Delete GIF';
  del_gif.addEventListener('click', function(){
    gifs.removeChild(div);
  })

  del_div.appendChild(del_gif);
  div.appendChild(title);
  div.appendChild(iframe);
  div.appendChild(del_div);

  gifs.appendChild(div);
}

