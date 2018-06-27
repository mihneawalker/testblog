<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Merriweather');

html {
  font-family: "Merriweather", serif;
  letter-spacing: 0.01rem;
  font-size: 0.9em;
  line-height: 1.75em;
  color: #3A4145;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
article {
  position: relative;
    width: 80%;
    max-width: 710px;
    margin: 4rem auto;
    padding-bottom: 4rem;
    border-bottom: #EBF2F6 1px solid;
    word-wrap: break-word;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  &:after {
    display: block;
    content: "";
    width: 7px;
    height: 7px;
    border: #E7EEF2 1px solid;
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -5px;
    background: #FFF;
    border-radius: 100%;
    box-shadow: #FFF 0 0 0 5px;
  }
  a {
    font-size: 2em;
    color: #2E2E2E;
    line-height: 1.15em;
    margin: 0 0 0.4em 0;
    font-family: "Open Sans", sans-serif;
    text-rendering: geometricPrecision;
  }
}
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
  color: #4A4A4A;
  transition: color 0.3s ease;
}
.router-link-active {
  font-style: italic;
  font-size: 1.5em;
  text-decoration: underline;
}
.blog-article-title {
  font-size: 2.5em;
}
.blog-article-content {
  & p {
    margin-bottom: 1em;
  }
}
</style>