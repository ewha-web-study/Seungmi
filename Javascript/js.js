var Body={
  setColor: function(color){
    document.querySelector('body').style.color=color;
  },
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor=color;
  }
}
var Links={
  setColor: function(color){
    var array =  document.querySelectorAll('a');
    var i=0;
    while(i < array.length){
      array[i].style.color = color;
      i = i + 1;
    }
  }
}

  function nightdayHandler(self){
    var target = document.querySelector('body');
    if(self.value == 'night'){
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value='day'
      Links.setColor('blue');
    } else {
      Body.setBackgroundColor('black');
      Body.setColor('white');
      self.value='night'
      Links.setColor('powderblue');
    }
 }
