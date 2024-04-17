<template>
  <div class="store-manage-container">
    <div>
      <v-btn color="green" @click="newItem()" class="white--text">Add New Product</v-btn>
    </div>
    <!-- ทำ v-for -->
    <div class="product-table-manage">
      <!-- Product List -->
      <v-card v-for="(item, index) in myProducts" :key="index">
        <div class="product-manage-card">
          <div class="product-manage-card__img">
            <img src="../assets/products/product_1.png" alt="" />
          </div>
          <div class="product-manage-card__detail">{{ item.productName }}</div>
          <div class="product-manage-card__button">
            <v-btn color="orange" @click="editItem(item)" class="manage-card__edit white--text">แก้ไขสินค้า</v-btn>
            <v-btn color="red" @click="deleteItem(item)" class="manage-card__delete white--text">ลบสินค้า</v-btn>
            <!--  -->
          </div>
        </div>
      </v-card>
    </div>
    <!-- popup update or create -->
    <v-dialog v-model="dialogedit" max-width="500px">
      <v-card>
        <v-card-title primary-title>
          {{ savemode }}
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6">
              <v-text-field
                name="storeId"
                label="Store ID"
                id="storeId"
                v-model="postData.storeId"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="productName"
                label="Product Name"
                id="productName"
                v-model="postData.productName"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="productAmount"
                label="จำนวนสินค้า"
                id="productAmount"
                v-model="postData.productAmount"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                name="productPrice"
                label="ราคาสินค้า"
                id="productPrice"
                v-model="postData.productPrice"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="success" @click="closeItem()">cancle</v-btn>
          <v-btn text color="error" @click="saveSelect()">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { getUserData } from "../services/AllServices";
export default {
  data() {
    return {
      // userId: "",
      myProducts: [],
      id: "",
      dialogedit: false,
      postData: {
        storeId: "",
        productName: "",
        productAmount: "",
        productPrice: "",
      },
      postDefault: {
        storeId: "",
        productName: "",
        productAmount: "",
        productPrice: "",
      },
      userId: "",
    };
  },
  computed: {
    savemode() {
      return this.id == "" ? "NewItem" : "Edit Item";
    },
  },
  created() {
    this.fetchAllProduct();
    // get store id
  },
  methods: {
    async fetchAllProduct() {
      console.log("get all product");
      try {
        let allProducts = await this.axios.get(
          "http://localhost:3000/products/api/v1/products"
        );
        console.log(allProducts);
        
        // get user data id
        let userData = getUserData();
        console.log(userData);
        this.userId = userData;

        let productFullData = allProducts.data.data;
        // filter
        let myProductsFilter = productFullData.filter((item)=>{return item.storeId === userData})
        console.log("myProductsFilter =", myProductsFilter);
        // set data to state
        this.myProducts = myProductsFilter;


        
      } catch (error) {
        console.log(error);
      }
    },
    newItem() {
      this.id = "";
      this.postData = { ...this.postDefault, storeId: this.userId  };
      this.dialogedit = true;
    },
    editItem(item) {
      this.id = item._id;
      this.postData = { ...item };
      this.dialogedit = true;
    },
      deleteItem(item){
     this.id = item._id;
    //  call axios delete
    this.axios.delete(`http://localhost:3000/products/api/v1/products/${this.id}`).then((response)=>{
        console.log(response);
        this.fetchAllProduct();
    }).catch((error)=>{
        console.log(error);
    })
    },
    closeItem() {
      (this.id = ""), (this.postData = { ...this.postDefault });
      this.dialogedit = false;
    },
    showText(){
      console.log("show text");
    },
    saveSelect() {
      if (this.id != "") {
          // call put axios
        this.axios.put(`http://localhost:3000/products/api/v1/products/${this.id}`, this.postData).then((response)=>{
            console.log(response);
            // this.dialogedit = false
            this.closeItem();
            this.fetchAllProduct();
        }).catch((error)=>{
            console.log(error);
        })
        alert("อัพเดทข้อมูลสินค้าสำเร็จ");
        // console.log("create new item");
        // fetch new item
        this.fetchAllProduct();
      } else {
        // axios to server
        this.axios.post("http://localhost:3000/products/api/v1/products", this.postData).then((response)=>{
            console.log(response);
            this.closeItem();
            this.fetchAllProduct();
        }).catch((error)=>{
            console.log(error);
            this.closeItem();
            this.fetchAllProduct();
        })
        alert("สร้างสินค้าสำเร็จ");
      }
    },

  },
};
</script>

<style scope>
.store-manage-container {
  margin: 2rem 2rem;
}
.product-table-manage {
  margin-top: 2rem;
  max-width: 90vw;
  /* background: red; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 1rem;
}
.product-manage-card {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem 0;
  /* background: white; */
  /* border: 1px solid black; */
}
.product-manage-card__button {
  display: flex;
  justify-content: space-between;
  gap: 0 1rem;
}
</style>