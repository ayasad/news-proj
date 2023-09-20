import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";


// export const useStore = defineStore('store', {
//     state:()=>({
//       posts:[],
//       activeTab:1,
//     }),
//     getters:{
//       WatchedPosts(){
//         return this.posts.filter( el => el.isWatched)
//       }
//     },
//     actions:{
//       SetActiveTab(id){
//         this.activeTab = id
//       },
//       SetWatchedBtn(id){
//         const indx = this.posts.findIndex(el => el.id === id)
//         this.posts[indx].isWatched = !this.posts[indx].isWatched
//       },
//       DeletePost(id){
//         this.posts = this.posts.filter(el => !(el.id === id))
//       }
//     }
//   }
// )


export const useStore = defineStore("store", () => {
  const posts = ref([]);
  const activeTab = ref(1);

  

  let postsInLocalStorage = localStorage.getItem('posts')
 
  if(postsInLocalStorage){
    posts.value = JSON.parse( postsInLocalStorage)
    
  }

 const savePostsToLocalStorage = () =>{
  localStorage.setItem('posts', JSON.stringify(posts.value))
 }

  const WatchedPosts = computed(() => {
    return posts.value.filter((el) => el.isWatched);
  });

  const SetActiveTab = (id) => {
    activeTab.value = id;
  };

  const SetWatchedBtn = (id) => {
    const indx = posts.value.findIndex((el) => el.id === id);
    posts.value[indx].isWatched = !posts.value[indx].isWatched;
  };

  const DeletePost = (id) => {
    posts.value = posts.value.filter((el) => !(el.id === id));
  };

  return {
    posts,
    activeTab,
    WatchedPosts,
    SetActiveTab,
    SetWatchedBtn,
    DeletePost,
  };
});
