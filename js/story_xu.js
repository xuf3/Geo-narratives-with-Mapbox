stories.forEach(function(content,index){
  var menu = document.getElementById("features")
  var story = document.createElement('div');
  story.setAttribute("id",content.id);
  story.setAttribute("class",content.position + " " + content.theme + " step");
  story.setAttribute("data-scrollama-index", index);

  if(content.title){
    var title = document.createElement('h3');
    title.innerHTML = content.title;
    story.appendChild(title);
  }

  if(content.image){
    var image = document.createElement('img');
    image.src = content.image;
    story.appendChild(image);
  }

  if(content.video){
    var video = document.createElement('iframe');
    video.src = content.video;
    video.height = "300";
    story.appendChild(video);
  }

  if(content.description){
    var description = document.createElement('p');
    description.innerHTML = content.description;
    story.appendChild(description);
  }

  if(index === 0){
    story.className += " " + "active";
  }

  menu.appendChild(story);
})
