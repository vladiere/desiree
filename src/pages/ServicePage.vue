<template>
  <q-page padding >
    <div :class="!Platform.is.mobile ? 'row' : 'column'">
      <img class="col" src="https://images.pexels.com/photos/110473/pexels-photo-110473.jpeg?auto=compress&cs=tinysrgb&w=400" />
      <div class="col column q-gutter-y-md q-pa-md">
        <span class="text-h4 text-weight-regular">Todo List App</span>
        <span class="text-h6 text-weight-light">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</span>
        <div class="self-start">
          <q-btn flat icon="mdi-web" />
          <q-btn flat icon="mdi-github" />
        </div>
      </div>
    </div>
    <div :class="!Platform.is.mobile ? 'row' : 'column'">
      <div class="col column q-gutter-y-md q-pa-md">
        <span class="text-h4 text-weight-regular">My Unique App</span>
        <span class="text-h6 text-weight-light">Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.</span>
        <div class="self-start">
          <q-btn flat icon="mdi-web" />
          <q-btn flat icon="mdi-github" />
        </div>
      </div>
      <img class="col" src="https://images.pexels.com/photos/3571094/pexels-photo-3571094.jpeg?auto=compress&cs=tinysrgb&w=400" />
    </div>

  </q-page>
</template>

<script setup>
import { defineComponent } from 'vue';
import { Platform } from 'quasar';

defineComponent({
  name: 'ServicePage'
})
</script>
