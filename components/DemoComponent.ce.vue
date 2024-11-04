<template>
  <div id="demo-component">
    <h3>{{ title }} - {{ data.isEditing ? 'editing' : 'readonly' }}</h3>
    <div class="editing" v-if="data.isEditing">
      <form id="form" method="POST" name="demo" :action="apiPath" autocomplete="off" @submit.prevent.stop="onSubmit" >
        <label class="row">
          <div class="column">User</div>
          <div class="column">
            <input type="text" id="username" name="username" v-model="data.username" required />
          </div>
        </label>
        <label class="row">
          <div class="column">Password</div>
          <div class="column">
            <input type="password" id="password" name="password" v-model="data.password" required  />
          </div>
        </label>
        <label class="row">
          <div class="column">Email</div>
          <div class="column">
            <input type="email" id="email" name="email" v-model="data.email" />
          </div>
        </label>
        <button type="submit">Submit</button>
        <button type="button" @click.prevent.stop="data.isEditing = false">Cancel</button>
      </form>
    </div>
    <div class="viewing" v-else>
      <input id="url" type="text" :value="apiPath" readonly />
      <pre v-show="data.response">{{ JSON.stringify(data.response) }}</pre>
      <button type="button" @click.prevent.stop="data.isEditing = true">Edit</button>
    </div>
  </div>
</template>

<script setup lang="js">
import { reactive } from 'vue';
import { postData } from './api';

defineProps({
  title: String,
  apiPath: String,
});

const data = reactive({
  isEditing: false,
  username: '',
  password: '',
  email: '',
  response: null,
});

const onSubmit = async (ev) => {
  const form = ev.target;
  const formData = new FormData(form);
  const { data: response } = await postData(form.action, Object.fromEntries(formData.entries()));
  data.response = response;
  data.isEditing = false;
};
</script>
