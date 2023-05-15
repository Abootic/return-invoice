import { defineStore } from "pinia";
export const useReturnInvoiceStore=defineStore("returnInvoiceStore",{
state:()=>{
return{
    changeQtyObj:{counter:0,
        qty:0,
        name:"",
    },
    counter:0,
    returnInvoiceCache:[],
    returnDataList:[],
    returnDataListCaches:[],
   
    returnInvoice:{
         customer_id: 30,
         cashier_id: 28,
         cost_with_tax: 34.5,
         cost_without_tax: 30,
         tax: 4.5,
        is_paid: 3,  // o pending  
        order_details: [
        ],
        notes: ""
    },
   
}

},
getters:{


},
actions:{
    removeFromInvoiceList(index) {

       
  
  
  
        this.returnDataList = this.returnDataList.filter(function (item) {
  
  
          return item !== index
        });
        
  
  
      },

addToreturnDataList(item){

this.returnDataList.push(item);
},
addToReturnDataListCaches(item){
    this.returnDataListCaches.push(item);
}
},

});