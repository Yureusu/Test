
document.getElementById('btn1').addEventListener('click', 
    function(){ alert('Meow!');}
);

document.getElementById('btn2').addEventListener('click', myFunction);

function myFunction() {
    alert('Wassup');

    document.getElementById('hello').style.display = 'block';
}