// JavaScript Document
document.getElementById('loader-content').style.display ='none'

document.getElementById('match').style.display = 'none';

document.getElementsByClassName('form-container').style.display = 'none';

document.getElementById('signUp').addEventListener('submit', function(event){
    event.preventDefault()
    document.getElementsByClassName('form-container').style.display ="block"}

                                                   
                                                   
                                                   
                                                   
document.getElementById('formLogin').addEventListener('submit', function(event){
    event.preventDefault()
    document.getElementById('login').style.display = "none"
    document.getElementById('loader-content').style.display ="block"
    
    fetch('http://4graphik.com/lab/tincat/api/cats/')
        .then(response => response.json())
        .then(response =>{
            console.log(response)
            setTimeout(function(){
            document.getElementById('loader-content').style.display = 'none'
            document.getElementById('match').style.display = 'block'
            },1000)
        
            var name = response[0].name
            var path = response[0].path
            
            document.getElementById('match').append(name)
            document.getElementById('imgUrl').src = path
            document.getElementById('imgUrl').style.width = '300px'
    })
})