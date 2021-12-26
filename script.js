function add()
{
   let item = document.getElementById("textbox");
   let list = document.getElementById("add_item");
   if(item.value != "")
   {
       let make_li = document.createElement("li");
       make_li.appendChild(document.createTextNode(item.value));
       list.appendChild(make_li);
       item.value=""
       make_li.onclick = function(){
           this.parentNode.removeChild(this);
       }
   }
   else{
       alert("please enter a item to add");
   }
}