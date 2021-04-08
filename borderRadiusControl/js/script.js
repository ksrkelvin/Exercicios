var input = document.querySelectorAll('.inputValue')



for(let i of input){
    i.addEventListener('change',ChangeRadius)
    let output = {}
    
}


function ChangeRadius(){
    let res = document.getElementById('resultBox')
    let ninp = Number(this.value)
    
    if(this.id == 'inputTL'){
        res.style.borderTopLeftRadius = `${ninp}px`
        output.tl = ninp  

    }else if(this.id == 'inputTR'){
        res.style.borderTopRightRadius = `${ninp}px`
        output.tr = ninp         
        
    }else if(this.id == 'inputBR'){
        res.style.borderBottomRightRadius = `${ninp}px`
        output.br = ninp   
           
    }else if(this.id == 'inputBL'){
        res.style.borderBottomLeftRadius = `${ninp}px`
        output.bl = ninp   
        
    }
    writeOut(output)
}


function writeOut(output){
    let out = document.getElementById('output')

    out.innerHTML = ''
    out.innerHTML += `<p>border-top-left-radius: ${output.tl}px;</p>`
    out.innerHTML += `<p>border-top-right-radius: ${output.tr}px;</p>`
    out.innerHTML += `<p>border-bottom-right-radius: ${output.br}px;</p>`
    out.innerHTML += `<p>border-bottom-left-radius: ${output.bl}px;</p>`
    
    
    
}

