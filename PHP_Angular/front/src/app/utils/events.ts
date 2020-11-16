declare var $;
export class Events {
  constructor() {

  }
  openEvent(id){
    this.eventFire(document.getElementById(id), 'click');
  }
  eventFire(el, etype){
    if(el.fireEvent){
      el.fireEvent('on' + etype);
    }else{
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }
  start(etapa){
    if(etapa=='fluxo1'){
      alert("MARILENE");
      this.fluxo1();
    }
  }
  fluxo1(){
    this.openEvent('meu-perfil');
  }
}
