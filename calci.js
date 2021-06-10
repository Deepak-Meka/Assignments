var x,y
function number(val){
    
    document.getElementById('enter').value+=val
}
function result(){
    x=document.getElementById('enter').value
    y=eval(x)
    document.getElementById('enter').value=y
}
function clr(){
    document.getElementById('enter').value=" "
}