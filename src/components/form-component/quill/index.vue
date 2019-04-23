/**
* User: wuxinshuang
* Date: 2019/4/22
* Time: 10:24
* remark:
*/
<template>
    <el-form-item :label="model.name" :key="model.key" :prop="model.key" :rules="model.rules" >
        <div class="quill" >
            <vue-ueditor-wrap
                    style="line-height: 0"
                    class="ueditor"
                    ref="ueditor"
                    v-model="formData[model.key]"
                    :config="config"
                    :destroy="true"
                    :init="init"/>
        </div>
    </el-form-item>
</template>

<script>
    import VueUeditorWrap from 'vue-ueditor-wrap'
    import config from './ueditor.config'
    import init from './init'

    export default {
        name: "index",
        components:{
            VueUeditorWrap
        },
        data(){
            return{
                config,
                ueditorValue:'',
            }
        },
        props: {
            formData:[Object],
            model:[Object],
            formModel:[Object],
            value: {
                type: [String],
            },
        },
     /*   watch: {
            value: {
                handler (val) {
                    if (this.ueditorValue !== val) {
                        this.ueditorValue = val
                    }
                },
                immediate: true
            },
            ueditorValue (val) {
                this.$emit('input', val)
            }
        },*/
        methods: {
            init () {
                this.$refs.ueditor.registerButton(init)
            }
        }
    }
</script>

<style scoped>
    .ueditor{
        line-height: 0;
    }
</style>
