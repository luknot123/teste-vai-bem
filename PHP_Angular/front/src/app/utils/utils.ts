declare var $,document;
export class Utils {
  constructor() {

  }
  startTutorial(id,icone,message,titulo,passo){
    return new Promise ((resolve, reject)=>{

      let bkg:any = document.createElement("div");
      bkg.setAttribute("class","tuto-bkg");



      let htmlHeight:any = document.querySelector("html");
      htmlHeight.scrollTop = 0;
      var h = htmlHeight.getBoundingClientRect().height;
      var body = document.body, html = document.documentElement;
      var height = Math.max( body.scrollHeight, body.offsetHeight, 
                            html.clientHeight, html.scrollHeight, html.offsetHeight );
      console.log(h)
      bkg.style.height = height+"px";

      var element = document.querySelector(id);
      var position = element.getBoundingClientRect();
      if((position.top/2)<0){
        htmlHeight.scrollTop = 0;
      }else{
        htmlHeight.scrollTop = (position.top/2);
      }

      // setTimeout(()=>{

        // position = element.getBoundingClientRect();
        let button = this.createButton(icone,message);
        button.style.width = position.width+"px";
        button.style.height = position.height+"px";
        button.style.position = "absolute";
        button.style.top = position.top+"px";
        button.style.left = position.left+"px";
        button.addEventListener('click',()=>{

          resolve(0);
        });

        let tittle = this.createTittle(titulo);
        tittle.style.top = (position.top/1.3)+"px";
        let msg = this.createMsg(passo);
        msg.style.left = (position.width+position.left+10)+"px";
        msg.style.top = position.top+"px";

        bkg.appendChild(button);
        bkg.appendChild(tittle);
        bkg.appendChild(msg);

        document.querySelector("body").appendChild(bkg);



      // },500);
    });


  }
  removeTutorial(){
    document.querySelector(".tuto-bkg").outerHTML="";
  }
  createButton(icon,titulo){
    let btn:any=document.createElement("button");
    btn.innerHTML=icon+titulo;
    btn.setAttribute("class","btn-flat waves-effect white btn-tuto");
    return btn;
  }
  createTittle(txt){
    let div = document.createElement("div");
    div.setAttribute("class","tuto-tittle");
    div.innerHTML=txt;
    return div;
  }
  createMsg(msg){
    let div = document.createElement("div");
    div.setAttribute("class","tuto-msg");
    div.innerHTML=msg;
    return div;
  }
  customSelect(classe,change){
    var x, i, j, l, ll, selElmnt, a, b, c;
    /* Look for any elements with the class "custom-select": */
    x = document.getElementsByClassName(classe);
    l = x.length;
    // if(document.querySelector(".select-selected")){
    //   document.querySelector(".select-selected").outerHTML="";
    //   document.querySelector(".select-items").outerHTML="";
    // }
    
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      ll = selElmnt.length;
      /* For each element, create a new DIV that will act as the selected item: */
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /* For each element, create a new DIV that will contain the option list: */
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            // console.log(e);
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            
            for (i = 0; i < sl; i++) {
              if (s.options[i].innerHTML == this.innerHTML) {
                s.selectedIndex = i;
                // console.log(s.options[i]);
                change(s.options[i].getAttribute("value"));
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                yl = y.length;
                for (k = 0; k < yl; k++) {
                  y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
              }
            }
            h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }

    function closeAllSelect(elmnt) {
      /* A function that will close all select boxes in the document,
      except the current select box: */
      var x, y, i, xl, yl, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }

    /* If the user clicks anywhere outside the select box,
    then close all select boxes: */
    document.addEventListener("click", closeAllSelect);
  }
}
