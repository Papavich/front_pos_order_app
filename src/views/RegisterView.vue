<template>
  <div class="register-container">
    <v-card class="register-form">
      <div class="register__title">
        <v-icon class="register__title-icon" large color="green darken-2">
          mdi-brush-outline
        </v-icon>
        <h2 class="register__title-logo"> Brush Archive</h2>
      </div>
      <div class="register__form">
        <v-text-field
          name="input_storeName"
          label="ชื่อร้าน"
          id="input_storeName"
          v-model="input_storeName"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          name="input_email"
          label="อีเมล"
          id="input_email"
          v-model="input_email"
          :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          name="input_password"
          label="รหัสผ่าน"
          id="input_password"
          v-model="input_password"
          :rules="[rules.required]"
          type="password"
        ></v-text-field>
      </div>
      <div class="register__button">
        <v-btn @click="registerFormSubmit" class="btn-grad" variant="outlined"> ลงทะเบียน </v-btn>
      </div>
      <div>มีปัญชีอยู่แล้ว? <a class="register__link-to-login" href="/login">เข้าสู่ระบบ</a></div>
    </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            input_storeName: "",
            input_email: "",
            input_password: "",
            rules: {
                required: value => !!value || 'Field is required',
            },
            
        }
    },
    methods: {
        async registerFormSubmit() {
            console.log("register");
            try {
                // # 1.เรียกใช้งาน post เพื่อส่งข้อมูลลงทะเบียนไปยัง server ด้วย post method
                let registerInstance = await this.axios.post("http://localhost:3000/users/api/v1/register", {
                    userName:this.input_storeName, userEmail:this.input_email, userPassword:this.input_password
                    });
                    console.log(registerInstance);
                    if(registerInstance) {
                        // # 2.ถ้าลงทะเีบยสำเร็๗แจ้งเตือนและไปยังหน้า Login 
                        alert('ลงทะเบียนสำเร็จ');
                        this.$router.push('/login');
                    }
            } catch (error) {
                console.log(error);
                alert(error);
            }
        }
    }
};
</script>

<style scope>


.register-container {
  width: 100vw;
  height: 100vh;
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/register/register_login.jpg");
  background-size: cover;
}

.register-form {
  width: 30%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem 0;
}

.register__title {
    text-align: center;
    display: grid;
    gap: 0.5rem;
}

.register__title-icon,
.register__link-to-login,
.register__title-logo {
  background: #cf2121;
  background: linear-gradient(to right, #cf2121 0%, #cf33bb 47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

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
</style>