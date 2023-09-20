<template>
    <div class="post">
        <div class="post-name">
            <div class="post-title">{{ post.title }}</div>
            <div class="post-id">{{ post.id }}</div>
        </div>    
        <div class="post-description">{{ post.description }}</div>
        <div class="post-content">{{ post.content }}</div>
        <div class="post-footer">
            <div class="post-author">Author: {{ post.author }}</div>
            <div class="post-date">{{ post.publishedAt }}</div>
        </div>
        <div class="post-btns" v-if="store.activeTab === 1">
            <Button :color="'green'" @click="store.SetWatchedBtn(post.id)">
                <span v-if="post.isWatched" >Watched</span>
                <span v-else>Unwatched</span>
            </Button>
            <Button :color="'red'" @click="store.DeletePost(post.id)">Delete</Button>
        </div>
        <div class="post-btns" v-else>
            <Button :color="'green'" @click="searchStore.addToFavourite(post)">Add</Button>
        </div>
    </div>
  
</template>

<script setup>
//4b71b3a4fa0e4265a498fbb01b3e2229 token
import Button from './Button.vue';
import { useStore } from '../stores/store';
import { useSearchStore } from '../stores/searchStore';

const store = useStore()
const searchStore = useSearchStore()

const props = defineProps({
    post:{
        type: Object,
        required: true,
        default: ()=>{}

    }
})

;
</script>

<style scoped>
.post{
    padding: 20px 20px;
    border: 2px solid black;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    gap: 10px;
}

.post-name{
    display: flex;
    justify-content: space-between;
}
.post-title{
    font-size: 40px;
    font-weight: bold;
    word-wrap: break-word;

}
.post-id{
    color: blue;
}

.post-description{
    font-size:20px;
    font-style: italic;
    word-wrap: break-word;
    color:darkgray;
}

.post-content{
    font-size:26px;
    font-style: italic;
    word-wrap: break-word;
}

.post-footer{
    display: flex;
    justify-content: space-between;
    font-weight: bolder;
}
.post-btns{
    display: flex;
    justify-content: space-between;
}
</style>