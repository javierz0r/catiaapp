import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    jsonData: any;
 
    constructor() {
 
        this.jsonData=[
      {"id":1,"label":"saw","name":"Restautante: Rest el mono"},
      {"id":2,"label":"saw1","name":"El mono feliz"},
      {"id":3,"label":"saw2","name":"El mono Grande Promosion"},
      {"id":3,"label":"saw2","name":"El Mono lindo Promosion"},
      {"id":3,"label":"saw2","name":"El mono loco Promosion"},
      {"id":3,"label":"saw2","name":"El rincon criollo Promosion"},
      {"id":3,"label":"saw2","name":"Comida criolla lista peru Promosion"},
      {"id":3,"label":"saw2","name":"comida de promo"},
      {"id":3,"label":"saw2","name":"Promo vip"},
      {"id":3,"label":"saw2","name":"otra promo"},
      {"id":3,"label":"saw2","name":"una promosion buena"},
      {"id":3,"label":"saw2","name":"tu rica promosion"}

      ];
 
    }
 
    filterItems(searchTerm){
 
       return this.jsonData.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
        });  
 
    }
 
}