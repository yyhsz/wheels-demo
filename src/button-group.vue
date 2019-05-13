<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        mounted(){
            for (let node of this.$el.children){
                if (node.nodeName.toLowerCase() !== 'button'){
                    console.warn(`g-button 的子元素应该全都是 button 而你使用了 ${node.nodeName.toLowerCase()}`)
                }
            }
        }

    }
</script>
<style lang="scss">
    .g-button-group{
        display: inline-flex;
        & :not(:first-child){margin-left:-1px;}
        > .g-button{border-radius: 0;
            &:first-child{border-top-left-radius: var(--button-radius);border-bottom-left-radius: var(--button-radius);}
            &:last-child{border-top-right-radius: var(--button-radius);border-bottom-right-radius: var(--button-radius);}
            &:hover{
                position: relative;
                z-index: 1;
            }
        }




    }
</style>