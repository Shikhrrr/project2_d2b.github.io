document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#submit").disabled = true;
    document.querySelector("#submit").style.cursor = 'not-allowed';

    document.querySelector("#from").onkeyup = function(){

        if(document.querySelector("#from").value.length > 0){
            document.querySelector("#submit").disabled = false;
            document.querySelector("#submit").style.cursor = 'grab';
        
        } else {
            document.querySelector("#submit").disabled = true;
            document.querySelector("#submit").style.cursor = 'not-allowed';
        }
    }

    document.querySelector("#dec-bin").onclick = function(){
        document.querySelector("#output").style.display = 'block';
    }

    let binary = [];
    
    document.querySelector('form').onsubmit = function() {
        var deci = parseInt(document.querySelector("#from").value);
        
        for (let i = deci; i > 0; i = Math.floor(i/2)) {
            binary.push(i%2);
        }
        document.querySelector("#from").value = '';
        document.querySelector("#finalOutput").innerHTML = `The binary form of ${deci} is ${binary.reverse().join('')}`;
        binary = [];

        return false;
    }

    document.querySelector("#reset").onclick = function(){
        document.querySelector("#finalOutput").innerHTML = 'Output will appear here';
        document.querySelector("#output").style.display = 'none';
        document.querySelector("#from").value = '';
        binary = [];
    }
});