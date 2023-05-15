<template>
    <section id="main-dirv">
        <h1> return invoice</h1>
      <main>
        <!--The Container-->
       
        <div class="container-fluid " >
          
          <div class="row">
            <!--The Container Insider-->
            <div class="d-grid gap-2">
              <!--Card-->
              <div class="card bg-white shadow p-3 mb-5 bg-body-tertiary rounded dir-sm mt-5">
                <!--Card Bodytttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt-->
                 <!-- start Searchreturninvoice ===================================-->
                 <div class="row">
                  <div  class="col-lg-3 col-md-3 col-sm-12 col-xs-12 ">                    <button class="btn btn-info" @click="onSwitchLanguage">{{ langStore.TRANSLATE("changeLang") }}</button>
</div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <ReturnInvoiceSearch class="mb-3"/>
                  </div>
                  <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 "></div>
                 </div>
                
                    <!--  end Searchreturninvoice ============================--->
                <div class="card-body d-grid gap-2" id="f-section" >
                  <!-- <div class="row">
                    <div class="col-sm-2 mt-2"><button class="btn btn-info" @click="onSwitchLanguage">{{ langStore.TRANSLATE("changeLang") }}</button></div>
                    FRom Part
                    <div class="col-sm-4 m-2 d-grid gap-2">
                   
                      <div type="button" class="btn dash-board">
                        <div class="row">
                         
                          <div class="col-sm-10 text-center mt-2 mb-2">
  
                            {{ langStore.TRANSLATE("from") }}: <span >////////////</span> 
                          </div>
                          <div class="col-sm-2"></div>
                        </div>
                        <div class="row" style="justify-content: space-between;">
                          <div class="col-1"></div>
                          <div class="col-5">
                            <div class="col-3">
                              <a v-on:click="callModal()">
                                <img class="plus-icon" alt="Image result for plus icon svg" id="dimg_3"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADd3d16enp/f3/h4eEGBgaDg4Pk5OSLi4vCwsJaWlrPz8/W1tZycnILCwuTk5M6Ojq6urrq6ur5+fllZWVsbGzIyMiioqJPT09fX18YGBghISFBQUGsrKzy8vIzMzMpKSmLFk5YAAACjUlEQVRoge2b6bKiMBBGibKvsirgxvu/5ARwbjlI2iqtL61zc34LpwIS+msSy3oVp/CiPO+Conz5FC8StuKHLtZp9jvxD9tKmzruxYJc14WPl2bJUY/cX1ELcdJx2avTqlvYGtzndbUQCVxd5Sp3CneHKrXILmi3rXSLAu2+qt07tPuodqNveJmp3ZFxQ/AJd8foro0bguOq3Q2jGz23sLrVarFFu4lxo90bxnEb9yPoStW49bsTwu0ZN4S1/PuXwLj/O/f+Q93oLMjpVkd/4+ZwH77VXZWlL3Ekm5kkSWLJXhJOBIS7O+wkwYjnebZkO5KmTVPXURS1bdvsipVuVBXa1z6bcF2iCH8bt160vKuzsmUHoLkfu6PokaIYNj9qarLCkCVsaiH6ud++Qf6zlMxNqfb5DxGM3VdlPxxMbpHNWSwJWQRhOVgHNndj1WzuwRrY3K7F8nCzuwdrYHPXVsPm5nzGYjJQQ7nKOVVnwXLPWboLHnU7vUMjDrU7V03lwwoCDexvNVNCfAMBq2XVNOg1n5y7Gvmic4bJz4ulEXENzSKuO0ee/mqHK4syLsWukYlJ5qa6bpo0nbLUGKpktpoy1hi2Dh1hCObINoa3McTJLHdLdWPAG4NeWb61GISagsN3Tvzh7p1xf5R7//zwr3VT/RZON3rpoHHrd3uEG7147re6iaVzYvP8cOP+MvfWuD/J7TrPD0e5BdqdMo6b002ERribaL9mvnFDIDIw3E00pTL0No/f6ibmliNYTWXBK9pNdF/hG2su6h4kOvoTNzzHb2ZS9vrPcLWyUuXcw4WeUGfKta01urYrlg+fWHp9OyWrRcXY6bngN+K7d2mLf7AXlEXQ5XnkFa9XaX8ACxAwIMVyyf0AAAAASUVORK5CYII="
                                  data-atf="1" data-frt="0" />
                              </a>
                            </div>
                          </div>
                  
                          <div class="col-6">
                            <div class="col">
                              customer
                               <select @change="onSelectCustomer($event)" class="form-select mb-2 "
                                aria-label=".form-select-lg ">
                                <option>{{ langStore.TRANSLATE("selectCustomer") }}</option>
                                <option v-for="(customer, key) in customers" :key="key" :value="customer.id">
                                  {{ customer.name }}
                                </option>
                              </select> 
                             
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> 
                    FRom Part
                    To Part
                    <div class="col-sm-4 m-2 d-grid gap-2">
                      <button type="button" class="btn dash-board" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        data-bs-whatever="@mdo">
                        <div class="row">
                        
                            <div class="col-3">
                              <a v-on:click="callModal()">
                                <img class="plus-icon" alt="Image result for plus icon svg" id="dimg_3"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADd3d16enp/f3/h4eEGBgaDg4Pk5OSLi4vCwsJaWlrPz8/W1tZycnILCwuTk5M6Ojq6urrq6ur5+fllZWVsbGzIyMiioqJPT09fX18YGBghISFBQUGsrKzy8vIzMzMpKSmLFk5YAAACjUlEQVRoge2b6bKiMBBGibKvsirgxvu/5ARwbjlI2iqtL61zc34LpwIS+msSy3oVp/CiPO+Conz5FC8StuKHLtZp9jvxD9tKmzruxYJc14WPl2bJUY/cX1ELcdJx2avTqlvYGtzndbUQCVxd5Sp3CneHKrXILmi3rXSLAu2+qt07tPuodqNveJmp3ZFxQ/AJd8foro0bguOq3Q2jGz23sLrVarFFu4lxo90bxnEb9yPoStW49bsTwu0ZN4S1/PuXwLj/O/f+Q93oLMjpVkd/4+ZwH77VXZWlL3Ekm5kkSWLJXhJOBIS7O+wkwYjnebZkO5KmTVPXURS1bdvsipVuVBXa1z6bcF2iCH8bt160vKuzsmUHoLkfu6PokaIYNj9qarLCkCVsaiH6ud++Qf6zlMxNqfb5DxGM3VdlPxxMbpHNWSwJWQRhOVgHNndj1WzuwRrY3K7F8nCzuwdrYHPXVsPm5nzGYjJQQ7nKOVVnwXLPWboLHnU7vUMjDrU7V03lwwoCDexvNVNCfAMBq2XVNOg1n5y7Gvmic4bJz4ulEXENzSKuO0ee/mqHK4syLsWukYlJ5qa6bpo0nbLUGKpktpoy1hi2Dh1hCObINoa3McTJLHdLdWPAG4NeWb61GISagsN3Tvzh7p1xf5R7//zwr3VT/RZON3rpoHHrd3uEG7147re6iaVzYvP8cOP+MvfWuD/J7TrPD0e5BdqdMo6b002ERribaL9mvnFDIDIw3E00pTL0No/f6ibmliNYTWXBK9pNdF/hG2su6h4kOvoTNzzHb2ZS9vrPcLWyUuXcw4WeUGfKta01urYrlg+fWHp9OyWrRcXY6bngN+K7d2mLf7AXlEXQ5XnkFa9XaX8ACxAwIMVyyf0AAAAASUVORK5CYII="
                                  data-atf="1" data-frt="0" />
                              </a>
                            </div>
                            <div class="col-3">
                              <a v-on:click="onihowLoginmodel()">
                                <img class="login-icon" alt="Image result for plus icon svg" id="dimg_3"
                                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAADd3d16enp/f3/h4eEGBgaDg4Pk5OSLi4vCwsJaWlrPz8/W1tZycnILCwuTk5M6Ojq6urrq6ur5+fllZWVsbGzIyMiioqJPT09fX18YGBghISFBQUGsrKzy8vIzMzMpKSmLFk5YAAACjUlEQVRoge2b6bKiMBBGibKvsirgxvu/5ARwbjlI2iqtL61zc34LpwIS+msSy3oVp/CiPO+Conz5FC8StuKHLtZp9jvxD9tKmzruxYJc14WPl2bJUY/cX1ELcdJx2avTqlvYGtzndbUQCVxd5Sp3CneHKrXILmi3rXSLAu2+qt07tPuodqNveJmp3ZFxQ/AJd8foro0bguOq3Q2jGz23sLrVarFFu4lxo90bxnEb9yPoStW49bsTwu0ZN4S1/PuXwLj/O/f+Q93oLMjpVkd/4+ZwH77VXZWlL3Ekm5kkSWLJXhJOBIS7O+wkwYjnebZkO5KmTVPXURS1bdvsipVuVBXa1z6bcF2iCH8bt160vKuzsmUHoLkfu6PokaIYNj9qarLCkCVsaiH6ud++Qf6zlMxNqfb5DxGM3VdlPxxMbpHNWSwJWQRhOVgHNndj1WzuwRrY3K7F8nCzuwdrYHPXVsPm5nzGYjJQQ7nKOVVnwXLPWboLHnU7vUMjDrU7V03lwwoCDexvNVNCfAMBq2XVNOg1n5y7Gvmic4bJz4ulEXENzSKuO0ee/mqHK4syLsWukYlJ5qa6bpo0nbLUGKpktpoy1hi2Dh1hCObINoa3McTJLHdLdWPAG4NeWb61GISagsN3Tvzh7p1xf5R7//zwr3VT/RZON3rpoHHrd3uEG7147re6iaVzYvP8cOP+MvfWuD/J7TrPD0e5BdqdMo6b002ERribaL9mvnFDIDIw3E00pTL0No/f6ibmliNYTWXBK9pNdF/hG2su6h4kOvoTNzzHb2ZS9vrPcLWyUuXcw4WeUGfKta01urYrlg+fWHp9OyWrRcXY6bngN+K7d2mLf7AXlEXQ5XnkFa9XaX8ACxAwIMVyyf0AAAAASUVORK5CYII="
                                  data-atf="1" data-frt="0" />
                              </a>
                            </div>
                            <div class="col-6">
                              <div class="text-option">{{   langStore.TRANSLATE("customerdetails") }}</div>
                            </div>
                          
                         
                        </div>
                      </button>
                    </div> 
                    To Part
                   
                  </div> -->
  
                  <!---------------------------------- InvoiceTable ------------------------------->
                  <div class="row" id="t-section">
                  
                    <div class="col-lg-12 col-mb-12 col-sm-12 col-xs-12 mt-3">
                      
                        <!-- <div v-if="taskStore.isInvoiceFormValueShow" class="col-lg-12 col-mb-12 col-sm-12 col-xs-12 mt-3"> -->
                      <returnInvoiceDetails v-for="(
                            returnData, index
                          ) in rturnStore.returnDataList" :key="index" :index="index" :returnData="returnData" />
                    </div>
  
                    <!-- <returnInvoiceTable class="form-table-component dash-board d-grid gap-2" /> -->
                
                  </div>
  
                  <!---------------------------------- invoicesummery ------------------------------->
                  <!-- <invoiceSummery /> -->
                     <!---------------------------------- invoicesummery ------------------------------->
                </div>
                <!--- =========================================================== -->
                <div class="note" id="note-id">
                  <div class="note-text mt-2" >
                    <div>{{ langStore.TRANSLATE("note") }}</div>
                  </div>
                  <div class="note-input">
                    <input
               
                  type="text"
                  v-model="rturnStore.returnInvoice.notes"
                  class="form-control"
                  
                />
                  </div>
                </div>
          
                <!----------------------KKKKKKKKK------------ btn ------------------------------->
                <div class="btn-group" role="group" aria-label="Basic example" id="s-section" >
                  <button type="button" id="add-orderId" class="btn m-2 btn-success"  v-if="constrctBtn" @click="onSave($event)">
                    {{ langStore.TRANSLATE("saveBtn") }}
                  </button>
                  <button type="button" id="add-orderId" class="btn m-2 btn-success" v-if="deconstructBtn" @click="onClear($event)">
                  {{ langStore.TRANSLATE("createnew") }}
                  </button>
              
                  <a type="button" v-bind:href="downloadUrl" download="dd.pdf" target="_blank" class="btn m-2 btn-primary" v-if="isBtnShow" >
                    {{ langStore.TRANSLATE("download") }}
                  </a>
                  <button type="button" class="btn m-2 btn-info" v-if="isBtnShow">
                    {{ langStore.TRANSLATE("print") }}
                  </button>
                </div>
                <!---------------------------------- btn ------------------------------->
              </div>
            </div>
          </div>
        </div>
      </main>
      <!-- <CustomerDetails class=".custom-modal" v-if="isShomodel" @close="close" /> -->
      <!-- <login class=".custom-modal" v-if="isShowLoginmodel" @closeLogin="closeLogin" /> -->
    </section>
  </template>

  
  <script>
  import "bootstrap/dist/css/bootstrap.css";
 // import login from "../login.vue"
  
  //import returnInvoiceTable from "./components/returnInvoiceTable.vue";
  //import CustomerDetails from '../invoice/CustomerDetails.vue';
  import returnInvoiceDetails from "./components/returnInvoiceDetails.vue";
  //import invoiceSummery from "../invoice/InvoiceSummery.vue";
  import { useLanguageStore } from "../../stores/languageStore";
  import ReturnInvoiceSearch from "./components/GetReturnInvoice.vue"

  import { useReturnInvoiceStore } from '@/stores/returnInvoiceStore';
  
  
  export default {
    name: "return-invoice-card",
    components: {
    //    returnInvoiceTable,
        returnInvoiceDetails,
     
      ReturnInvoiceSearch,
   
  
  
    },
    setup(){
        const langStore=useLanguageStore();
        const rturnStore=useReturnInvoiceStore();
   
        return {langStore,rturnStore}
    },
    data(){
      return{
        deconstructBtn:false,
      constrctBtn:true,
      isBtnShow:false,
      note:"",
      }
    },
    computed:{
      rturnInvoiceDetails(){
        const rturnStore=useReturnInvoiceStore();
        return rturnStore.returnDataList;
      }
    },
methods:{
 async onSave(e){
    e.preventDefault();
    try{
          document.getElementById("add-orderId").innerHTML="<div class='spinner-border text-info'><span class='sr-only'></span></div>";
      const rturnStore=useReturnInvoiceStore();
      if(rturnStore.returnDataList.length>0){
        for(let i=0;i<rturnStore.returnDataList.length;i++){
          rturnStore.returnInvoice.order_details.push({
            order_details_id:rturnStore.returnDataList[i].order_details_id,
            id:rturnStore.returnDataList[i].id,
            name:rturnStore.returnDataList[i].name,
            price:rturnStore.returnDataList[i].price,
            quantity:rturnStore.returnDataList[i].quantity
          });
        }
      }
      console.log(" rturnStore.returnInvoice "+JSON.stringify( rturnStore.returnInvoice));
      const p_res = await this.callApi("POST", 'https://www.kifapos.com/api/v3/add-order',  rturnStore.returnInvoice);
        if (p_res.status === 200) {
           this.deconstructBtn= true;
           this.constrctBtn=false;
        
          document.getElementById("add-orderId").innerHTML="save";
       
          this.downloadUrl=p_res["data"]["data"]["invoice_link"];
        this.isBtnShow = true;
        } else {
          document.getElementById("add-orderId").innerHTML="save";
       
        }
      rturnStore.returnInvoice.order_details=[];
    }catch(e){
console.log(e)
    }
   
  },
  onClear(e){
    const rturnStore=useReturnInvoiceStore();
    e.preventDefault();
    this.deconstructBtn= false;
          this.constrctBtn=true;
          rturnStore.$reset();
          window.location.reload();
  },

},
 async   mounted(){
      const rStore=useReturnInvoiceStore();
       
        
       const returnInvoiec_res = await this.callApi(
   "Get",
   "https://www.kifapos.com/api/v3/get-invoices",
   { current_page: 1, invoice_type:3}
 );
 if(returnInvoiec_res.status===200){
   if (returnInvoiec_res["data"]["data"].length > 0) {

       rStore.returnInvoiceCache=[];
  for(let i=0;i< returnInvoiec_res["data"]["data"].length;i++){
  
           rStore.returnInvoiceCache.push(returnInvoiec_res["data"]["data"][i]);
  }
      
     
   }else{
       alert("there is an error");
   }
   let oList={};
   
  // console.log("ttttttttttt "+JSON.stringify(rStore.returnInvoiceCache));
   if(rStore.returnInvoiceCache.length>0){
    rStore.returnDataListCaches=[];
    rStore.returnInvoiceCache.map(a=>{
      oList= a.order_details.pop();
     
        rStore.returnDataListCaches.push({"invoice_number":a.invoice_number,"orderList":oList});  
          
        
    })
 
}  
 

}
   //////////////////////
 
   /////////////////////////
          
    }
    

}
   
  
  </script>
    <style scoped>
    @import url("../../assets/css/style.css");
    
    .form-table-component {
      border: 2px dashed #c2c6cb;
      border-radius: 4px;
    }
    
    
    .text-option {
      width: 119%;
        margin-left: -8%;
    }
    
    .plus-icon {
      max-width: 512px;
      height: 36px;
      /* margin-left: -17%; */
      /* margin-left: -78%; */
      width: 51px;
    }
    
    .login-icon {
      max-width: 512px;
      height: 36px;
      /* margin-left: -17%; */
      margin-left: -78%;
      width: 51px;
      background-color: red;
    }
    
    .custom-modal {
      --bs-modal-zindex: 1055;
      --bs-modal-width: 500px;
      --bs-modal-padding: 1rem;
      --bs-modal-margin: 0.5rem;
      --bs-modal-color: ;
      --bs-modal-bg: #fff;
      --bs-modal-border-color: var(--bs-border-color-translucent);
      --bs-modal-border-width: 1px;
      --bs-modal-border-radius: 0.5rem;
      --bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
      --bs-modal-inner-border-radius: calc(0.5rem - 1px);
      --bs-modal-header-padding-x: 1rem;
      --bs-modal-header-padding-y: 1rem;
      --bs-modal-header-padding: 1rem 1rem;
      --bs-modal-header-border-color: var(--bs-border-color);
      --bs-modal-header-border-width: 1px;
      --bs-modal-title-line-height: 1.5;
      --bs-modal-footer-gap: 0.5rem;
      --bs-modal-footer-bg: ;
      --bs-modal-footer-border-color: var(--bs-border-color);
      --bs-modal-footer-border-width: 1px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: var(--bs-modal-zindex);
      /*display: none; */
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      outline: 0;
      transition: opacity 0.15s linear;
    }
    .note{
    
      display: flex;
        justify-content:start;
        align-items: start;
    }
    .note-text{
      margin: 5px;
    
    }
    .note-input{
      margin: 5px;
    
      width: 100%;
    }
    </style>