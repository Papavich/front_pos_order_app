<template>
  <div class="login-container">
    <!-- <p>Hello Login Page</p> -->
    <v-card class="login-card-container">
      <!-- LEFT -->
      <div class="login__input">
        <div class="login__input--icon">
          <v-icon class="icon" large color="green darken-2">
            mdi-brush-outline
          </v-icon>
          <h1 class="icon_title">Brush Archive</h1>
        </div>
        <div class="login__input--fields">
          <v-text-field
            name="input_email"
            label="อีเมล"
            id="input_email"
            v-model="input_email"
          ></v-text-field>
          <v-text-field
            name="input_password"
            label="รหัสผ่าน"
            id="input_password"
            type="password"
            v-model="input_password"
          ></v-text-field>
        </div>
        <div class="login__input--buttons">
          <v-btn @click="formSubmit" class="btn-grad" variant="outlined"> Login </v-btn>
        </div>
        <!-- BrushOutline -->
        <div style="margin-top: 1rem;" class="link_register">
          <a href="#">Don't have Account?, Create Account Now</a>
        </div>
      </div>
      <!-- RIGHT -->
      <div class="login__pic">
        <div class="login__pic--top"></div>
        <div class="login__pic--botton"></div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input_email: "",
      input_password: "",
    };
  },
  methods: {
    async formSubmit() {
      // รับค่าเตรียมส่งข้อมูลไปยัง  server API LOGIN
      try {
        // # 1. เรียกใช้งาน axios และ ส่งข้อมูลไปยัง API  ด้วย method post
        console.log("Login");
        
      } catch (error) {
        console.log("Error!", error);
      }
    }
  }
};
</script>

<style scope>
.login-container {
  /* background: pink; */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #2c2b2c; */
  background: rgb(25,25,25);
background: linear-gradient(90deg, rgba(25,25,25,1) 0%, rgba(241,30,77,1) 48%, rgba(25,25,25,1) 100%);
}

.icon {
  background: #cf2121;
  background: linear-gradient(to right, #cf2121 0%, #cf33bb 47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.icon_title {
  /* background: #5EFFEE;
  background: linear-gradient(to right, #5EFFEE 0%, #FF3FE7 64%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  background: #9729ba;
  background: linear-gradient(to right, #9729ba 40%, #df4518 64%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.login__input {
  background: #faf0f0;
  flex: 1;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login__input--buttons {
  display: flex;
  justify-content: center;
}

/* button hover */
.btn-grad {
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #dd2476 51%,
    #ff512f 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.login__pic {
  display: flex;
  flex-direction: column;
  flex: 1;
  background: green;
}

.login__pic--top {
  /* background: yellow; */
  background: url("../assets/login/your_color_2.png");
  background-position: center center;
  flex: 1;
  background-size: cover;
}

.login__pic--botton {
  /* background: yellow; */
  background: url("../assets/login/your_color_3.png");
  background-position: center center;
  flex: 1;
  background-size: cover;
}

.login-card-container {
  width: 60%;
  height: 80%;
  display: flex;
}
</style>