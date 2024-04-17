// เก็บ Token ลง session storage
export const authenticate = (storeData) => {
    // เช็คว่ามีการเปิดใช้งานเว็บหรือไม่
    if(window !== "undefined") {
        // เก็บข้อมูลลง session storage
        console.log("storeData = ", storeData);

        sessionStorage.setItem("token", JSON.stringify(storeData.data.data));
        sessionStorage.setItem("userName", JSON.stringify(storeData.data.userName));
        sessionStorage.setItem("userId", JSON.stringify(storeData.data.userId));
        // ชื่อกล่องคือ token, 
        // res.data.token คือค่าที่เราจะเก็บลงไป
        // ต้องเปลง JSON object เป็น string ก่อน
        // 
        
    }
    // next();
    // จะให้ next รับฟังก์ชันอะไรสักอย่างเข้ามา และสั่งทำงาน
}


export const getUserData = () => {
    if(window !== "undefined"){
        console.log("get user data");
        return JSON.parse(sessionStorage.getItem('userId'));
    } else {
        return false;
    }
}