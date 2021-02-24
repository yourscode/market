<template>
  <div class="titleBox">
      <span class="title">
          {{title}}
      </span>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style>
.titleBox{
    width: 30%;
}
div>.title{
    position: relative;
    display:inline-block;
    margin-left: 20px;
    line-height: 1rem;
    font-size: .5rem;
}
div>.title:before {
    content: "";
    display: block;
    position: absolute;
    left: -25px;
    top: 12px;
    width: .2rem;
    height: .6rem;
    border-radius: 10px 10px;
    background-color: deepskyblue;
    /* background: -webkit-linear-gradient(45deg, rgba(75, 65, 45, .3), rgba(123, 456, 789, .3), rgba(854, 183, 729, .3)); */
    /* background: linear-gradient(45deg, rgba(75, 65, 45, .3), rgba(123, 456, 789, .3), rgba(854, 183, 729, .3)); */
    z-index: 1;
}
</style>