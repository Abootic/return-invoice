<template>
    <form class="row" v-on:submit="handelSubmit($event)">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3">
        <div class="row">
          <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="row">
              <!-- <input    v-model="data.pid"  class="from-control table-form"> -->
              <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">{{ langStore.TRANSLATE("pname") }}</div>
  
              <div class="col-lg-12 col-md-12 col-sm-12 mt-2" id="dropdown-wrapper">
                <input placeholder="productname" class="form-control search-input" />
                <!-- <div class="selected-item" @click="isArrowVisible = !isArrowVisible">
                  <span style="    font-size: 13px; font-weight: bold;">{{ selectedItem != null ?
                    selectedItem.name : langStore.TRANSLATE("selectPruduct") }}</span>
                  <svg class="dtp-down-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path
                      d="M12.9999 16.1716L18.3638 10.8076L19.778 12.2218L11.9999 20L4.22168 12.2218L5.63589 10.8076L10.9999 16.1716V4H12.9999V16.1716Z">
                    </path>
                  </svg>
                </div> -->
  
                <!-- <div class="dropdown-popover" v-if="isArrowVisible">
                  <input placeholder="search" v-model="store.data.name" class="form-control search-input" />
                  <span v-if="filterComboBox.length === 0"> No data Available</span>
                  <div class="options">
                    <ul>
                      <li @click="onSelectedItem(product)" v-for="(product, key) in filterComboBox" :key="key"
                        :value="product.id">{{ product.name }}</li>
  
                    </ul>
                  </div>
                </div> -->
              </div>
              <!-- <span class="text-danger">{{ nameError }}</span> -->
            </div>
          </div>
          <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
                {{ langStore.TRANSLATE("Quantity") }}
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                <input type="number" 
                  class="from-control table-form" />
              </div>
            </div>
          </div>
          <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
                {{ langStore.TRANSLATE("price") }}
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                <!-- v-on:input="onPrice($event)" -->
                <input readonly type="text" class="from-control table-form" />
              </div>
              <!-- <span class="text-danger">{{ priceErr }}</span> -->
            </div>
          </div>
          <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
                {{ langStore.TRANSLATE("discount") }}
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                <!-- v-on:input="onDiscount($event)" -->
                <input readonly type="number" class="from-control table-form" />
              </div>
              <!-- <span class="text-danger">{{ discountErr }}</span> -->
            </div>
          </div>
          <div id="col-start" class="col-lg-2 col-md-2 col-sm-2 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
                {{ langStore.TRANSLATE("afterdiscount") }}
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                <!-- v-on:input="onDiscount($event)" -->
                <input readonly type="number"  class="from-control table-form" />
              </div>
              <!-- <span class="text-danger">{{ discountErr }}</span> -->
            </div>
          </div>
  
          <div class="col-lg-2 col-md-2 col-sm-2">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 table-header text-center">
                {{ langStore.TRANSLATE("total") }}
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 mt-2">
                <input type="number" readonly class="from-control table-form" />
              </div>
            </div>
          </div>
        </div>
  
        <div class="row" style="text-align: initial; justify-content: space-between">
          <div class="col-8 mt-3 mb-3">
  
          </div>
  
          <div class="col-12 mt-3 mb-3">
            <div class="row">
              <button type="submit" class="btn btn-info col-12 mt-3 mb-3">
                <span>{{ langStore.TRANSLATE("addItem") }}</span>
              </button>
  
            </div>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <script>


  import { useLanguageStore } from '@/stores/languageStore';
  
  //import { mapActions } from 'pinia';
  
  //import {ref} from "vue";
  export default {
    name: "returnInvoiceTable",
    setup() {
     
      const langStore = useLanguageStore();
      return { langStore };
    },
  
    data() {
      return {
  
        
  
  
        
      };
    },
    computed: {
    ///////////////////////
    },
  
    methods: {
      ///////////////////////// start handelSubmit /////////////////
  
      handelSubmit(e){
        console.log(e);
      }
  
    
  
     
  
     
  
    },
  
  
  };
  </script>
  <style scoped>
  .table-header {
    /* text-align: initial; */
    background-color: #dee2e6;
  }
  
  .table-form {
    height: 40px;
    border: 1px solid #dc2020;
    width: 7rem;
    border-radius: 5px;
  }
  
  .description-input {
    height: 60px;
    border: 1px solid #dc2020;
    width: 98%;
    border-radius: 5px;
  }
  
  .icon-svg {
    max-width: 30px;
    width: 32px;
    height: 28px;
    margin: 0px;
    margin-block: 14px;
  }
  
  .third-section-select-form {
    height: 60px;
    border: 1px solid #dc2020;
    width: 6rem;
    border-radius: 5px;
  }
  
  .selected-item {
    height: 40px;
  
    border: 2px solid lightgray;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    font-weight: 400;
  }
  
  .dropdown-popover {
    border: 2px solid lightgray;
  
    width: 100%;
  }
  
  .search-input {
    margin-bottom: 10px;
    height: 40px;
    border: 1px solid #dc2020;
    font-size: 20px;
    border-radius: 5px;
  }
  
  .options {
    width: 100%;
  
  }
  
  ul {
   
    list-style: none;
    text-align: center;
    padding-left: 8px;
    padding-right: 15px;
    max-height: 120px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  
  li {
  
    width: inherit;
    border-bottom: 1px solid lightgray;
    padding: 6px ;
  
  
    cursor: pointer;
  background-color: #fff;
    font-size: 17px;
  }
  
  li:hover {
    background: #70878a;
    color: #fff;
  }
  </style>