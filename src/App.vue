<template>
  <div id="app">
    <nav v-if="isLoggedIn" class="navbar">
      <div class="logo">Firebase Auth App</div>
      <div class="nav-links">
        <router-link to="/home">Home</router-link>
        <button @click="logout" class="logout-btn">Logout</button>
      </div>
    </nav>
    <div class="router-view-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
export default {
  name: 'App',
  data(){
    return{
      readyToMount: false,
      isLoggedIn: false
    }
  },
  created(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      this.readyToMount = true
      this.isLoggedIn = !!user
    })
  },
  methods: {
    logout() {
      const auth = getAuth();
      signOut(auth).then(() => {
        // this.$router.push('/login');
      }).catch((error) => {
        alert(error.message);
      });
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #4a69bd;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }

    .logout-btn {
      background-color: #e74c3c;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #c0392b;
      }
    }
  }
}

.router-view-container {
  flex: 1;
  padding: 2rem;
}
</style>
