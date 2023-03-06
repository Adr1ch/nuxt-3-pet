interface State {
    messageTest: string | null
}

/**
     * filters\[slug\][$eq]=
     * filters[category][name][$eq]=
     * populate=*
     * http://localhost:1337/api/home?populate[header][populate]=*&populate[widgets][populate]=*
     * https://strapi-backend-repository.herokuapp.com/api/articles?populate=*&_locale=all
     * https://strapi-backend-repository.herokuapp.com/api/articles?populate=*&filters[slug][$eq]=duis-aute-irure-dolor-in-reprehenderit-in-voluptate-velit-esse-cillum-1
     * https://strapi-backend-repository.herokuapp.com/api/articles?populate=*&filters[category][name][$eq][0]=pinia&filters[category][name][$eq][1]=react
     * https://strapi-backend-repository.herokuapp.com/api/categories?populate=*
     * https://strapi-backend-repository.herokuapp.com/api/articles?populate=*&filters[category][name][$eq]=${articleName}
*/

export const useHomeStore = defineStore('home', {
    state: (): State => ({
        messageTest: '🍍 Message from Pinia 🍍 & Nuxt 🍍',
    }),
    actions: {
       async fetchHome(): Promise<void> {
            const { data } = await useFetch('http://localhost:1337/api/home?populate[header][populate]=*&populate[widgets][populate]=*')
            console.log('🍍 response 🍍', data);
       }
    },
})