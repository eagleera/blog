<template>
  <div class="columns mt3">
    <div class="column is-10 is-offset-1">
      <div class="columns">
        <div class="column pl0">
          <div class="card-info has-background-grey-lighter has-border-radius has-text-grey-darker">
            <fa icon="user-circle" size="lg" class="mr2" />
            {{ post.author }}
          </div>
        </div>
        <div class="column">
          <div class="card-info has-background-grey-lighter has-border-radius has-text-grey-darker">
            <fa icon="calendar" size="lg" class="mr2" />
            {{ post.date }}
          </div>
        </div>
        <div class="column pr0">
          <div class="card-info has-background-grey-lighter has-border-radius has-text-grey-darker">
            <fa icon="clock" size="lg" class="mr2" />
            Lectura de {{ post.timeToRead }} minutos
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style lang="scss">
.card-info{
  padding: 20px;
  font-weight: 400;
}
.pl0{
  padding-left: 0 !important;
}
.pr0{
  padding-right: 0 !important;
}
</style>