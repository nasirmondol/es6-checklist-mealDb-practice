const loadPhotos = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}

loadPhotos();

const displayPhotos = photos =>{
    console.log(photos)
    for(const photo of photos){
        // console.log(photo)
        const sectionContainer = document.getElementById('section-container')
        const div = document.createElement('div')
        div.classList.add('card')
        div.style.margin = '10px';
        div.innerHTML = `
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text">${photo.body}</p>
            <button onclick="buttonDetails(${photo.userId})">Details</button>
        </div>
      </div>
        `;
        
        sectionContainer.appendChild(div)
    }

    
}

const buttonDetails = postId =>{
    
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data =>console.log (data.postId))
}

const photoDetails = post =>{
   console.log(post)
   const container = document.getElementById('div-container');
//    container.textContent = ''
   const div = document.createElement('div')
   div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
   `;
   container.appendChild(div)
}