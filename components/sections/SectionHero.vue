<template>
  <div class="flex flex-col md:flex-row my-32">
    <div class="flex-1 flex flex-col">
      <div class="flex-1">
        <h3 class="font-sm">Hej, mitt namn är</h3>
        <div class="mx-4 my-4">
          <h1 class="title mb-1">Malin Katrine Parker.</h1>
          <h2 class="subtitle mb-4">UX designer som vill designa och andas hållbart.</h2>
          <p>Motiveras av att förenkla och förbättra människors vardag. Trivs i snabba, långsamma designprocesser med känslan av att bidra med något viktigt. Jag är en formstark och inlyssnande person som gillar att leka kurragömma med min katt. </p>
        </div>
      </div>
      <div class="flex-1 flex">
        <nuxt-link to="/contact" class="btn btn-ghost">Kontakta mig</nuxt-link>
        <div class="flex-1 text-right">
          <h4 class="uppercase text-gray-500">Kontakt</h4>
          <a href="mailto:hello@malinkatrine.com" class="">hello@malinkatrine.com</a>
        </div>
        <div class="flex-1 text-right">
          <h4 class="uppercase text-gray-500">Plats</h4>
          <p class="text-primary">Göteborg</p>
        </div>
      </div>
    </div>
    <nuxt-image class="flex-1 max-w-sm h-auto" src="/img/malin-hero@2x.png" alt="Malin with crossed arms" fit="contain" />
  </div>
</template>

<script>
export default {

}
</script>
