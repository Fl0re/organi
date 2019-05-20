import { Component, OnInit } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop'  ;    ;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page extends NgDragDropModule implements OnInit {
  pourcentage = 0;
  taches =false;
  hair= false;
  linge= false;
  gouter= false;
  plat= false;
  dej= false;
  vaisselle= false;
  shower: boolean;
  etendoir: boolean;
  brosse: boolean;
  repas: boolean;
  vaiss: boolean;
  ffod: boolean;
  sport: boolean;
  abdo: boolean;
arrayicone = [
  { name: 'abdos',
  show: false,
  save:false,
    selection:false,
     position:'',
  
  icon:'../../assets/abdos.png'
},
{ name: 'children',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/children.png'
},
{ name: 'couple',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/couple.png'
},
{ name: 'dent',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/dent.png'
},
{ name: 'vaisselle',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/dishwasher.png'
},
{ name: 'enveloppe',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/envellope.png'
},
{ name: 'etendoir',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/etendoir.png'
},
{ name: 'gouter',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/gouter.png'
},
{ name: 'hair-dryer',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/hair-dryer.png'
},
{ name: 'jeu',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/jeu.png'
},
{ name: 'lavelinge',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/lavelinge.png'
},
{ name: 'lune',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/lune.png'
},
{ name: 'promenade',
icon:'../../assets/promenade.png',
show: false,
save:false,
  selection:false,
   position:'',
},
{ name: 'ptitdej',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/ptitdej.png'
},
{ name: 'vaiselle',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/dishwasher.png'
},
{ name: 'shower',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/shower.png'
},
{ name: 'sport',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/sport.png'
},

{ name: 'vaiss',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/vaiss.png'
},
{ name: 'baggage',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/baggage.png'
},
{ name: 'balai',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/balai.png'
},
{ name: 'basket',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/basket.png'
},
{ name: 'brico',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/brico.png'
},
{ name: 'bus',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/bus.png'
},
{ name: 'console',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/console.png'
},
{ name: 'dance',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/dance.png'
},
{ name: 'foot',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/foot.png'
},
{ name: 'jardinage',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/jardinage.png'
},

{ name: 'lit',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/lit.png'
},
{ name: 'repasser',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/repasser.png'
},
{ name: 'sac',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/sac.png'
},
{ name: 'sacados',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/sacados.png'
},
{ name: 'serpillere',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/serpillere.png'
},
{ name: 'taxi',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/taxi.png'
},
{ name: 'tele',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/tele.png'
},
{ name: 'tennis',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/tennis.png'
},
{ name: 'vitre',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/vitre.png'
},
{ name: 'voiture',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/voiture.png'
},
{ name: 'amis',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/amis.png'
},
{ name: 'course',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/course.png'
},
{ name: 'accrobranche',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/accrobranche.png'
},{ name: 'avion',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/avion.png'
},{ name: 'barbecue',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/barbecue.png'
},{ name: 'bateau',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/bateau.png'
},{ name: 'beach',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/beach.png'
},{ name: 'boitenuit',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/boitenuit.png'
},{ name: 'cadeau',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/cadeau.png'
},{ name: 'camping',
show: false,
save:false,
  selection:false,
   position:'',

icon:'../../assets/camping.png'
},

{ name: 'canape',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/canape.png'
},
{ name: 'canoe',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/canoe.png'
},{ name: 'chalet',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/chalet.png'
},{ name: 'cheval',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/cheval.png'
},{ name: 'cinema',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/cinema.png'
},{ name: 'cuisine',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/cuisine.png'
},{ name: 'dj',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/dj.png'
},{ name: 'ecolo',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/ecolo.png'
},
{ name: 'eglise',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/eglise.png'
},{ name: 'guitar',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/guitar.png'
},{ name: 'livre',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/livre.png'
},{ name: 'maison',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/maison.png'
},{ name: 'nature',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/nature.png'
},{ name: 'neige',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/neige.png'
},{ name: 'parc',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/parc.png'
},{ name: 'phone',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/phone.png'
},{ name: 'piano',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/piano.png'
},{ name: 'piscine',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/piscine.png'
},{ name: 'prier',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/prier.png'
},{ name: 'school',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/school.png'
},{ name: 'skate',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/skate.svg'
},{ name: 'ski',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/ski.png'
},{ name: 'tambour',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/tambour.png'
},{ name: 'tele',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/tele.png'

},{ name: 'theatre',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/theatre.png'
},{ name: 'tobogan',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/tobogan.png'
},{ name: 'travail',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/travail.png'
},{ name: 'trumpet',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/trumpet.png'
},
{ name: 'violon',
show: false,
save:false,
  selection:false,
   position:'',
icon:'../../assets/violin.png'
}
]
  showicontoplaces = false;

ngOnInit(){

}
selectionne(icon){
if(icon.selection === false){
  icon.selection = true;
  document.getElementById(icon.name).style.backgroundColor ='#11f311'
  document.getElementById(icon.name).style.borderRadius ='5px';

}
else{
  icon.selection = false;
  document.getElementById(icon.name).style.backgroundColor = 'white'
  document.getElementById(icon.name).style.borderRadius ='0px';
}
}

cancel(){
  for(let i =0; i< this.arrayicone.length; i++){
    if(this.arrayicone[i].selection === true){
      this.arrayicone[i].selection = false
    }
  }
  document.getElementById('addActivity').style.display ='none'
  document.getElementById('placer').style.display ='flex'

}

save(){
  for(let i =0; i< this.arrayicone.length; i++){
    if(this.arrayicone[i].selection === true){
      this.arrayicone[i].save = true;
      this.arrayicone[i].selection = false
      console.log('ok', this.arrayicone[i].save )
    }
  }
  document.getElementById('addActivity').style.display ='none'
  document.getElementById('placer').style.display ='block'



}

showiconetoplace(){
  if(this.showicontoplaces === false){
    this.showicontoplaces =true
    document.getElementById('programme').style.display ='flex'

  }
  else{
    document.getElementById('programme').style.display ='none'

  }

}

onStart(e: any, x: any){
console.log(e,x)
}
  
}
