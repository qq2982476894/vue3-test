<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import HelloWorld from "./components/HelloWorld.vue";
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme:dark)");
let currentTheme = ref(localStorage.getItem("theme"));
const text = computed(() => {
  return currentTheme.value == "light" ? "关灯" : "开灯";
});
const btnText = ref(text);

const autoChangeTheme = (e: any) => {
  if (e.matches) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
};
const changeTheme = () => {
  if (prefersDarkScheme.onchange) {
    prefersDarkScheme.onchange = null;
  }
  document.body.classList.toggle("dark");
  let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
    currentTheme.value = theme;
    localStorage.setItem("theme", theme);
  } else {
    theme = "light";
    currentTheme.value = theme;
    localStorage.setItem("theme", theme);
  }
  console.log(currentTheme.value);
};
if (!currentTheme.value) {
  prefersDarkScheme.onchange = autoChangeTheme;
} else {
  document.body.classList.add(currentTheme.value);
}
</script>
<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/shop">购物</RouterLink>
        <RouterLink to="/imageFall">瀑布流</RouterLink>
        <RouterLink to="/down">导出字段</RouterLink>
      </nav>
    </div>
  </header>
  <button class="button" @click="changeTheme">{{ btnText }}</button>
  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}
.button {
  position: fixed;
  right: 40px;
  top: 40px;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border: none;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
