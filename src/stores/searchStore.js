import { defineStore } from 'pinia'
import { useStore } from './store'
import { ref,computed } from 'vue'


// export const useSearchStore = defineStore('searchStore', {
//     state:()=>{
//         posts:[
//         ]
//     },
//     getters:{
//         GetPosts(){
//             return this.posts
//         }
//     },
//     actions:{
//         async fetchPosts(search = 'bitcoin'){
//            const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=4b71b3a4fa0e4265a498fbb01b3e2229`);
//            const data = await res.json();
//            this.posts = data.articles
//            console.log(data)
//            let counter = 1
//            for (const post of this.posts){
//                 post.id = counter
//                 post.isSearch = true
//                 counter++
//            }
          
//         },
//         addToFavourite(obj){
//             let store = useStore()
//             store.posts.push({...obj,isWatched:false})
//             store.activeTab = 1
//         }
//     }
// })

export const useSearchStore = defineStore('searchStore', ()=>{
    const posts = ref([])

    const GetPosts = computed(()=>{
        return posts.value
    })

    const fetchPosts = async (search = 'bitcoin')=>{
        const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=4b71b3a4fa0e4265a498fbb01b3e2229`);
        const data = await res.json();
        posts.value = data.articles
        localStorage.setItem('posts', JSON.stringify(data))
        console.log(data)
        let counter = 1
        for (const post of posts.value){
             post.id = counter
             post.isSearch = true
             counter++
        }
    }

    const addToFavourite = (obj) => {
        let store = useStore()
        store.posts.push({...obj,isWatched:false})
        localStorage.setItem("posts",JSON.stringify(store.posts))
        store.activeTab = 1
    }

    return {
        posts,
        GetPosts,
        fetchPosts,
        addToFavourite
    }
})   
  