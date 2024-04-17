<template>
  <div class="navbar-container">
    <div class="navbar__title">
      <v-icon
        class="navbar__title-icon"
        large
        color="green darken-2"
        size="x-small"
      >
        mdi-brush-outline
      </v-icon>
      <h3 class="navbar__title-logo">Brush Archive</h3>
    </div>
    <div class="navbar__menu">
      <span class="menu"><a href="/store">Home</a></span>
      <span class="menu"><a href="/store-management">My Store</a></span>
    </div>
    <div class="navbar__user">
      <div>ชื่อร้าน : {{userName}}</div>
      <button @click="logout()">LOGOUT</button>
    </div>
  </div>
</template>

<script>
// import service
import {getUserName} from "../services/AllServices";
import {getUserData} from "../services/AllServices";
import {logout} from "../services/AllServices";

export default {
  data(){
    return {
      userId:"",
      userName:""
    }
  },
  created(){
    this.getUserDataDetail();
  },
  methods: {
    getUserDataDetail(){
      let getId = getUserData();
      let getName = getUserName();
      console.log(getId);
      console.log(getName);
      this.userId = getId;
      this.userName = getName;
    },
    logout(){
      // ทำลาย session
      logout();
      // redirection
      this.$router.push('/login');
    }
  }
};
</script>

<style scope>
.navbar-container {
  --tw-bg-opacity: 1;
  background-color: rgb(253 242 248 / var(--tw-bg-opacity));
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0.5rem 2rem;
}

/* nvabar */
.navbar__title {
  display: flex;
  gap: 0 1rem;
  /* justify-content: center; */
  align-items: center;
}
.navbar__title-icon {
  background: #cf1212;
  background: linear-gradient(to right, #cf1212 0%, #ffb2f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navbar__menu {
  background: white;
  border-radius: 2rem;
  padding: 1rem;
  width: 20%;
  display: flex;
  justify-content: space-around;
  box-shadow: 2px 3px 27px -10px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 3px 27px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 27px -10px rgba(0, 0, 0, 0.75);
}

.navbar__menu a {
  font-weight: bold;
}

.navbar__user {
  display: flex;
  align-items: center;
  gap: 0 1rem;
}

.menu a{
    text-decoration:  none;
    color: black;
}
</style>