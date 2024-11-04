<template>
  <main>
    <h1>App</h1>
    <wc-demo-component id="foo" title="WebComponent Foo" api-path="/api/foo" />
    <wc-demo-component id="bar" title="WC Bar" api-path="/api/bar" />
    <DemoComponent id="baz" title="Regular Vue Component" apiPath="/api/baz" />

    <div v-once>
      <p>There are 3 components, 2 of them are web-components, and a regular Vue component</p>
      <p>There are 3 `#demo-component`, `#form`, `#username`, etc. However, web-components have their own scopes under `#shadow-root`. They are isolated, all the events and behaviours are not going to pop-up to root document.</p>
    </div>
  </main>
</template>

<script setup>
import DemoComponent from './DemoComponent.ce.vue';
</script>

<style>
main {
  max-width: 400px;
}
</style>
