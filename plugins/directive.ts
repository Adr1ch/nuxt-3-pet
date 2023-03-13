let handleOutsideClick = (e: any): void => {};

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('closable', {
        mounted (el, binding, vnode) {
          console.log(el, binding, vnode);

          handleOutsideClick = (e) => {
            e.stopPropagation();
            let someExcludedFind = false;
            for (const exclude of binding.value.excluded) {
              if (<HTMLElement>document.querySelector(exclude).contains(e.target)) {
                someExcludedFind = true
              }
            }
            if (!el.contains(e.target) && !someExcludedFind) {
              binding.value.handler();
            }
          }

          document.addEventListener('click', handleOutsideClick)
          document.addEventListener('touchstart', handleOutsideClick)
        },
        unmounted(el, binding, vnode) {
          document.removeEventListener('click', handleOutsideClick)
          document.removeEventListener('touchstart', handleOutsideClick)
        },
        getSSRProps (binding, vnode) {
          // you can provide SSR-specific props here
          return {}
        }
    })
})