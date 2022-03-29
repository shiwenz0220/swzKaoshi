<template>
  <div class="login">
    <div class="form">
      <h2>Login Form</h2>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="pass">
          <el-input v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 400px" type="primary" @click="submitForm"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import instance from '../api/index';
export default {
  name: "Mylogin",
  data() {
    let userFn = function (rule, value, callback) {
      let rg = /^\w{5,10}$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    let pawFn = function (rule, value, callback) {
      let rg = /^\w{5,10}$/;
      if (rg.test(value)) return;
      return callback(new Error("用户格式不对"));
    };
    return {
      ruleForm: {
        pass: "admin",
        checkPass: "123456",
      },
      rules: {
        user: [{ validator: userFn, trigger: "blur" }],
        paw: [{ validator: pawFn, trigger: "blur" }],
      },
    };
  },
  methods: {
    async submitForm() {
      let user = this.ruleForm.pass;
      let paw = this.ruleForm.checkPass;
      let {data} = await instance.post("/login", { user, paw })
    //   console.log(data)
    //   console.log(data.data.token)
      if(data.message === "fail")return this.$message.error("登录失败")
      if(data.message==="success"){
          // 存token
          localStorage.setItem("token",data.data.token)
          this.$message({
              type:"success",
              message:"登录成功",
              onClose:()=>{
                  this.$router.push({name:"home"})
              }
          })
      }
    },
  },
};
</script>
<style scoped>
.login {
  background: rgb(0, 10, 43);
  height: 100vh;
  padding-top: 150px;
}
.login .form h2 {
  margin-left: 100px;
  text-align: center;
  color: #fff;
  line-height: 100px;
}
.login .form {
  width: 500px;
  margin: 0 auto;
}
</style>