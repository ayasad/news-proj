<template>
    <main>
        <form @submit.prevent="searchStore.fetchPosts(searchValue) , ShowRequest(searchValue)">     
                <input type="text" class="input" v-model="searchValue" placeholder="Find post">              
        </form>
        <div class="posts">
                <div class="posts-title">Data with request "{{ requestValue }}" :</div>
                <Post v-for="post of searchStore.posts"
                :key="post.title"
                :post="post"
                ></Post>
        </div> 
    </main>
</template>

<script setup>
import { useSearchStore } from '../stores/searchStore';
import Post from './Post.vue';
import { ref} from 'vue';

let requestValue = ''
const searchValue = ref('')
const searchStore = useSearchStore()

const ShowRequest = (searchValue)=>{
    requestValue = searchValue
    return requestValue
}
</script>

<style scoped>
.input{
    width:100%;
    padding: 2% 2%;
    border-radius: 10px;
}

main{
  display: flex;
  flex-direction: column;
  gap:70px;
}

.posts{
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.posts-title{
  font-size: 30px;
  margin-left: 10px;
}

.input{
    height: 5%;
    border: 1px grey solid;
}
</style>