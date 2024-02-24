<template>
    <div id="app">
        <header>
          <router-link to="/">
            <h1>tjdgkt.js</h1>
          </router-link>
        </header>
        <body>
          what does tjdgkt.js mean? it is simply my korean name written out using the english keyboard. i decided to go with this for a personalised blogging experience.
        </body>
        <router-view />
    </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 1.5rem;
}

* + * {
  margin-top: 1.5rem;
}

#app {
  margin: 0;
  padding: 0;
}
</style>
