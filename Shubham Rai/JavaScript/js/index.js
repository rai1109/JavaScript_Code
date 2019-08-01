const fetchPromises = fetch("https://jsonplaceholder.typicode.com/photos");

view = document.getElementById("main");
main.innerHTML = "<p>Loading...";


fetchPromises.then(response =>{
    return response.json();
    
}).then (image=>{
    const thumbnail = image.map(function(album){
        return album.thumbnailUrl
        
    })
     arrItems=listOfName(image)
     li = document.getElementById('lists');
    // Loop through data in the JSON array.
    for ( var i = 0; i <= arrItems.length - 1; i++) {

     
        li = document.createElement('li');
        img = document.createElement('img');
        img.setAttribute('src', arrItems[i]);
        li.appendChild(img);
    
        

     
        
    }

});

function listOfName( image){
    const thumbnail = image.map(function(album){
        return album.thumbnailUrl
    })
    return thumbnail
}




