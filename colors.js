var Body = {
    setColor: function(color){
        document.querySelector('body').style.color = color;    
    },
    
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    },
};

var Links = {
    setColor: function(color){
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            console.log(alist[i]);
            alist[i].style.color = color;
            i += 1;
        }
    }
};


function nightDayHandler(param) {
    var target = document.querySelector('body');
    if (param.value == 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        param.value = 'day';

        Links.setColor('yellow');
        
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        param.value = 'night';

        Links.setColor('blue');
        
    }
}
