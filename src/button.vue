<template>
    <button class="g-button yyhsz12" :class=`icon-${iconPosition}`
            @click="$emit('click')">
        <g-icon name="loading" class="loading icon" v-if="loading" ></g-icon>
        <g-icon v-if="icon && !loading" :name="icon"  class="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    import Icon from './icon'
    export default {
        components:{
          'g-icon':Icon
        },
        props: {
            icon:{},
            loading:{
                type:Boolean,
                default:false,
            },
            iconPosition:{
                type:String,
                default:'left',
                validator: function (value) {
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>
<style lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .g-button {
        height: var(--button-height);padding: 0 1em;font-size: var(--font-size);
        border-radius: var(--button-radius);border: 1px solid var(--border-color);background: var(--button-bg);
        display: flex;justify-content: center;align-items: center;
        > .icon{order:1;margin-right: .2em;}
        > .content{order:2;}
        &.icon-right{
            > .icon{order: 2;margin-left: .2em;margin-right: 0;}
            > .content{order:1;}
        }
        > div{
            margin-top: -.1em;
        }
        > .loading{
            animation: spin 2s infinite linear;
        }

        &:hover {border-color: var(--border-color-hover);cursor: pointer}
        &:focus {outline: none;}
        &:active {background-color: var(--button-active-bg);}
    }
</style>