$(function() {

    var skills = ['HTML/CSS', 'SASS', 'jQuery', 'JavaScript', 'Wordpress'];
    var counter = 0;
    
    var skill = $('#skills');

    setInterval(function(){
        
        skill.text(skills[counter++]);
        
        if(counter >= skills.length){
            counter = 0;
        }
    }, 800)
});