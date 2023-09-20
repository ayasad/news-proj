<template>
  <button class="btn" :style="{backgroundColor:color}">
    <slot></slot>
  </button>
</template>

<script>
export default {
    props:{
        color: String   
    }
}
</script>

<style scoped>
.btn{
    padding: 10px 20px;
    border-radius: 10px;
    border: 2px solid black;
    font-size: medium;
}

.btn:hover{
    border: 1px solid transparent ;

}
</style>