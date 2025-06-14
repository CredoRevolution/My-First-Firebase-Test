<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "Login",
  data() {
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    loginUser(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            this.$router.push('home')
          })
          .catch((error) => {
            alert(error)
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
  }
}
</script>

<template>
<div class="login-container">
  <div class="login-card">
    <h2>Sign In</h2>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Enter your email" v-model="email">
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" placeholder="Enter your password" v-model="password">
    </div>
    <button class="login-btn" @click="loginUser">Sign In</button>
    <div class="signup-link">
      <p>Don't have an account? <router-link to="signup">Sign Up</router-link></p>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    color: #4a69bd;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #666;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: #4a69bd;
    }
  }
}

.login-btn {
  width: 100%;
  padding: 0.75rem;
  background-color: #4a69bd;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3a559c;
  }
}

.signup-link {
  margin-top: 1.5rem;
  text-align: center;

  p {
    color: #666;

    a {
      color: #4a69bd;
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
