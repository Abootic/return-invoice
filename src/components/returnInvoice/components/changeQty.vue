<template>
     <div class="modal" style="display:inline" id="exampleModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
    
          <button type="button" class="btn-close" data-bs-dismiss="modal"  @click="close" aria-label="Close"></button>
        </div>
     
        <div class="modal-body">
            <div class="mb-1">
              
              <h1 class="modal-title fs-5 text-center" >{{ languageStore.TRANSLATE("changeQty") }}</h1>
              <div class="qty-Container" >
                <!-- @click="Increase()"  -->
               <input type='button' value='+' class='qtyplus plus' field='quantity' />
               
              
                   
              <input type="number" v-model="rrStore.changeQtyObj.quantity" class="form-control col-sm-5 mt-1 mb-1 qty" id="recipient-name">
             
          
            <input type='button' value='-'  @click="Dcrease()"  class='qtyminus minus' field='quantity' />
              </div>
            </div>
            <div class="mb-3 btn-group">
            <button type="button" class="btn btn-secondary m-2"  @click="close" data-bs-dismiss="modal">{{ languageStore.TRANSLATE("closeBtn") }}</button>
          <div  @click="onChange()" class="btn btn-primary m-2" >{{ languageStore.TRANSLATE("saveBtn") }}</div>
            </div>
       
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary"  @click="close" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" :disabled="disable" >Save</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style scoped>
.qty {
  width: 200px;
    height: 34px;
    text-align: center;
  /* width: 99px;
    height: 34px;
    text-align: center; */
}
input.qtyplus { 
  width: 29px;
    height: 30px;
    border: 1px solid #6c757ddb;
    border-radius: 5px;
    font-size: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}
input.qtyminus { 
  width: 29px;
    height: 30px;
    border: 1px solid #6c757ddb;
    border-radius: 5px;
    font-size: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column-reverse;
}
.qty-Container{
  background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
<script>
import { useLanguageStore } from '@/stores/languageStore';
import { useReturnInvoiceStore } from '@/stores/returnInvoiceStore';
export default{
    setup(){
        const languageStore =useLanguageStore();
        const rrStore=useReturnInvoiceStore();
        return {languageStore,rrStore};
    },
    name:"change-qty",
 

    data(){
        return{
    
            disable:false,
        }
    },
    
    computed:{
        getQty(){
          const rStore=useReturnInvoiceStore();
          
      
return rStore.changeQtyObj
//{"qty":rStore.changeQtyObj.qty,"counter":rStore.changeQtyObj.counter};
        }
    },
    methods:{
      Dcrease(){
        const rStore=useReturnInvoiceStore();
        if(  rStore.changeQtyObj.quantity>0){
          rStore.changeQtyObj.quantity--;
        }
      },
      Increase(){
        const rStore=useReturnInvoiceStore();
        rStore.changeQtyObj.quantity++;
      },
        close:function(){
   
         this.$emit("close");
     },
     onChange(){
      const rStore=useReturnInvoiceStore();
      let total=0;
        if(rStore.returnDataList.length>0){
            let f=rStore.returnDataList.some(a=>a.counter==rStore.changeQtyObj.counter);
            if(f){
             rStore.returnDataList.map(function(item){
              if(rStore.changeQtyObj.quantity>0){
                if(rStore.changeQtyObj.quantity<item.quantity){
                    item.quantity-=rStore.changeQtyObj.quantity; 
                    item.discount-=rStore.changeQtyObj.discount;
                    total=(rStore.changeQtyObj.price*  item.quantity)-item.discount;
                    item.Subtotal-=total;
                  }
                }
                })
            }
        }
     
    
        this.$emit("close");
    
     }
    }

}
</script>