<template>
  <q-page padding class="q-gutter-y-md">
    <div class="row q-gutter-x-lg justify-center">
      <div class="column text-center items-center q-pa-md rounded-borders bg-grey-2" style="width: 280px">
        <q-icon name="mdi-map-marker" size="2em"/>
        <span class="text-h6 text-grey-10 text-weight-regular">Address</span>
        <span class="text-subtitle1 text-weight-light text-grey-7">Publacion Cordova Cebu</span>
      </div>
      <div class="column text-center items-center q-pa-md rounded-borders bg-grey-2" style="width: 280px">
        <q-icon name="mdi-phone" size="2em"/>
        <span class="text-h6 text-grey-10 text-weight-regular">Phone</span>
        <span class="text-subtitle1 text-weight-light text-grey-7">09101583759</span>
      </div>
      <div class="column text-center items-center q-pa-md rounded-borders bg-grey-2" style="width: 280px">
        <q-icon name="mdi-email" size="2em"/>
        <span class="text-h6 text-grey-10 text-weight-regular">Email</span>
        <span class="text-subtitle1 text-weight-light text-grey-7">desireerendon19@gmail.com</span>
      </div>
    </div>

    <div class="row q-gutter-x-md justify-center">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15704.555558799788!2d123.94099023226275!3d10.250380403260834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99af518835cd9%3A0x9b54201fef660c0b!2sPoblacion%2C%20Cordova%2C%20Cebu!5e0!3m2!1sen!2sph!4v1702276486687!5m2!1sen!2sph" width="600" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="col column q-gutter-y-md">
        <div class="row q-gutter-x-lg">
          <q-input class="col" outlined color="red-5" label="Your name" dense/>
          <q-input class="col" outlined color="red-5" label="Your email" dense/>
        </div>
        <q-input class="col" outlined color="red-5" label="Your message" type="textarea"/>
        <q-btn color="red-5" label-color="grey-1" label="Send Message" no-caps />
      </div>
    </div>
  </q-page>
</template>

<script setup>
</script>
