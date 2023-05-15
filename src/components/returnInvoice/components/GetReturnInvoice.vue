<template>
  <div class="container" style="border: 3px dashed lightgray">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
        <div class="row">
          <label class="col-form-label text-center fs-5"> {{ langStore.TRANSLATE("search") }}</label>
          <input type="text" class="form-control mb-2 m-1" v-model="searchId"  v-on:input="typeSerch()"/>
          <span class="text-danger">{{ searchErr }}</span>
          <button class="btn btn-info mb-2 m-1" @click="onSubmitSearch($event)">
            {{ langStore.TRANSLATE("search") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useReturnInvoiceStore } from "@/stores/returnInvoiceStore";
import { useLanguageStore } from "@/stores/languageStore";

export default {
  name: "ReturnInvoiceSearch",
setup(){
const langStore=useLanguageStore();
return {langStore}
},
  data() {
    return {
      searchId: "",
      searchErr: "",
      err: "",
      // counter:0,
    };
  },
  methods: {
    typeSerch(){
this.searchErr="";
    },
    onSubmitSearch(e) {
      let j = 0;
      let data = {};
      const rStore = useReturnInvoiceStore();
      e.preventDefault();
      if (this.searchId == "") {
        this.searchErr = "enter the invoice id";
      } else {
        if (rStore.returnDataListCaches.length > 0) {
        
          for (let i = 0; i < rStore.returnDataListCaches.length; i++) {
        
            if (
              this.searchId == rStore.returnDataListCaches[i].invoice_number
            ) {
              rStore.$state.counter++;
              j = rStore.$state.counter;
              data = {
                order_details_id:
                  rStore.returnDataListCaches[i].orderList.order_details_id,
                id: rStore.returnDataListCaches[i].orderList.id,
                name: rStore.returnDataListCaches[i].orderList.name,
                quantity: rStore.returnDataListCaches[i].orderList.quantity,
                price: rStore.returnDataListCaches[i].orderList.price,
                discount: rStore.returnDataListCaches[i].orderList.discount,
                counter: j,
                Subtotal:rStore.returnDataListCaches[i].orderList.total_price,
              };
              rStore.addToreturnDataList(data);
              this.searchId="";
              break;
            } else {
              this.err = "there is no data for the " + this.searchId;
            }
          }
        } else {
          console.log("11111111111111111111111111111111111111");
        }
        if (this.err != "") {
          console.log(this.err);
        }
      }
    },
  },
};
</script>
