export class AlertDom {
  constructor() {

  }
  openMsg(text,delay,tipo){
    if(document.getElementById("alerta-toast") != null){
      document.querySelector("body").removeChild(document.getElementById("alerta-toast"));
    }
    let alerta = document.createElement("div");
    let attr = document.createElement("div");
    let msg = document.createElement("div");
    let button = document.createElement("button");
    let span = document.createElement("span");
    span.innerHTML = "x";
    span.setAttribute("aria-hidden","true");
    alerta.setAttribute("class","alerta openAlerta");
    alerta.setAttribute("id","alerta-toast")
    attr.setAttribute("class","attr "+tipo);
    msg.setAttribute("class","msg");
    msg.innerHTML=text;
    button.setAttribute("class","close white-text waves-effect waves-light");
    button.appendChild(span);
    attr.appendChild(msg);
    attr.appendChild(button);
    alerta.appendChild(attr);
    button.addEventListener("click",()=>{
      alerta.setAttribute("class","alerta closeAlerta");
    });
    document.querySelector("body").appendChild(alerta);
    setTimeout(()=>{
      alerta.setAttribute("class","alerta closeAlerta");
      setTimeout(()=>{
        document.querySelector("body").removeChild(alerta);
      },500);
    },delay);
    window.scrollTo(0, 0);
  }

}

// this.classList.remove('bad');
//   this.classList.add('good');
// <div class="alerta sucesso">
//   <div class="attr">
//     <div class="msg">Mensagem</div>
//     <button type="button" class="close white-text waves-effect waves-light">
//       <span aria-hidden="true">×</span>
//     </button>
//   </div>
// </div>
