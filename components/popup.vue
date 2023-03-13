<template>
    <div v-if="opened">
        <div class="bg-black/50 fixed cursor-pointer top-0 left-0 w-full h-full z-40"></div>
        <div id="popup">
            <div id="container">
                <div v-closable="{ excluded: exclude, handler: f }" id="window">
                    <slot :isOpened="opened"></slot>
                    <button class="popup__close-btn-wrap" @click="$emit('close')">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20" data-bubblesppbfhhgcdehhbjigifndnfmcihegokbbprevent-events-conflict-installed="true">
                          <g id="Lager_20" data-name="Lager 20" transform="translate(-6 -6)">
                              <path id="Path_23" data-name="Path 23" d="M18.695,16l6.752-6.752a1.886,1.886,0,0,0,0-2.668l-.027-.027a1.886,1.886,0,0,0-2.668,0L16,13.305,9.248,6.553a1.886,1.886,0,0,0-2.668,0l-.027.027a1.886,1.886,0,0,0,0,2.668L13.305,16,6.553,22.752a1.886,1.886,0,0,0,0,2.668l.027.027a1.886,1.886,0,0,0,2.668,0L16,18.695l6.752,6.752a1.886,1.886,0,0,0,2.668,0l.027-.027a1.886,1.886,0,0,0,0-2.668Z" fill="#040505"/>
                          </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.popup-opened body {
    overflow: hidden;
  }
  .popup__close-btn-wrap {
    position: absolute;
    transition: all 0.3s;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 36px;
    border: 2px solid #111111;
    border-radius: 55px;
    cursor: pointer;
    top: 16px;
    right: 16px;
  }
  .popup__close-btn-wrap svg {
    width: 20px;
    height: 20px;
  }
  .popup__close-btn-wrap svg path {
    transition: all 0.3s;
  }
  .popup__close-btn-wrap:hover {
    background-color: #111111;
  }
  .popup__close-btn-wrap:hover svg path {
    fill: white;
  }
  #popup {
    position: fixed;
    z-index: 1000000002;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  #container {
    position: relative;
    display: flex;
    align-items: center;
    width: 622px;
    max-width: 100%;
    margin: auto auto;
    min-height: 100%;
  }
  #window {
    background-color: #ffffff;
    margin: 30px 21px;
    width: 100%;
    position: relative;
    padding: 60px;
  }
  .popup-opened body {
    overflow: hidden !important;
  }
</style>

<script>
export default {
    props: {
        opened: Boolean,
        exclude: {
            type: Array,
            default: () => []
        }
    },

    mounted() {
        this.$watch(
        "opened",
        (newValue) => {
            if (newValue === true) {
                document.documentElement.classList.add("popup-opened");
            }

            if (newValue === false) {
                document.documentElement.classList.remove("popup-opened");
            }
        },
        { immediate: true, flush: 'post' }
        );
    },
    methods: {
        f() {
            this.$emit("close");
        }
    }
}
</script>