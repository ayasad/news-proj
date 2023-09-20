<template>
  <div class="main">
    <div class="wrapper">
      <header class="header">
        <div class="tabs">
          <Button :class="{btnActive: store.activeTab === 1}" @click="store.SetActiveTab(1)">Favorite</Button>
          <Button :class="{btnActive: store.activeTab === 2}" @click="store.SetActiveTab(2)">Search</Button>
        </div>
      </header>
      <main v-if="store.activeTab===1">
        <div class="posts">
          <div class="posts-title">Watched posts ({{store.WatchedPosts.length}}):</div>
          <Post v-for="post of store.WatchedPosts" :key="post.id" :post="post"></Post>
        </div>
        <div class="posts">
          <div class="posts-title">All posts:</div>
          <Post v-for="post of store.posts" :key="post.id" :post="post"></Post>
        </div>
      </main>
      <div v-else>
        <Search />
      </div>
    </div>
  
  </div>
</template>

<script setup>
import Post from './components/Post.vue'
import Search from './components/Search.vue';
import { useStore } from './stores/store'
import Button from './components/Button.vue';
import { useSearchStore } from './stores/searchStore';


const store = useStore()
const searchStore = useSearchStore()

import { onMounted, watch } from 'vue';

onMounted(() => {
  searchStore.fetchPosts()
  store.posts = loadPostsFromLocalStorage();
})


const loadPostsFromLocalStorage = () => {
  const storedPosts = localStorage.getItem('posts');
  console.log(JSON.parse(storedPosts))
  return storedPosts ? JSON.parse(storedPosts) : [];
};

</script>



<style scoped>
.main {
  display: flex;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  gap: 70px;
}

.wrapper {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

}

.posts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.posts-title {
  font-size: 30px;
  margin-left: 10px;
}

.tabs {
  display: flex;
  justify-content: space-around;
}

.btnActive {
  background-color: rgb(128, 247, 245);
}
</style>
