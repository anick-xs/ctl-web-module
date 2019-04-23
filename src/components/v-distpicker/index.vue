<template>
    <div>
        <el-cascader
                :change-on-select="changeOnSelect"
                :key="regionKey"
                size="small"
                separator="-"
                :show-all-levels="showAllLevels"
                :options="options"
                v-model="selectedOptions"
                :props="propsData"
                clearable
                :disabled="disabled"
                @change="handleChange">
        </el-cascader>
    </div>
</template>
<script>
   // import store from '@/store'
    //let DISTRICTS = (store.state.state.login.area_tree === undefined || store.state.state.login.area_tree === null)?[]:store.state.state.login.area_tree[0].children;
    export default {
        props:{
            hideArea:[Boolean],
            hideCity:[Boolean],
            showAllLevels:{
                type:[Boolean],
                default(){
                    return true
                }
            },
            changeOnSelect:{
                type:[Boolean],
                default(){
                    return true
                }
            },
            value:[Array],
            showCountry:{
                type:[Boolean],
                default(){
                    return false
                }
            },
            disabled:[Boolean],
            DISTRICTS:{
                type:[Array],
                default(){
                    return []
                }
            }
        },
        model: {
            prop: 'value',
            event: 'change'
        },
        data() {
            return {
                propsData:{
                    value:'code',
                    label:'name',
                },
                options: [],
                selectedOptions: [],
                regionKey:0,
            };
        },
        watch:{
            value:{
                immediate:true,
                handler(newVal,oldVal){
                    this.selectedOptions = !newVal ? [] : newVal;
                },
                deep:true
            },
            selectedOptions:{
                handler(newVal,oldVal){
                    if(newVal.length < 1) newVal = null;
                    this.$emit('change',newVal)
                }
            }
        },
        methods: {
            handleChange(value) {
                let codes = JSON.parse(JSON.stringify(value));
                let obj ={};
                let citys = [];
                let countys = [];
                if(this.DISTRICTS.length === 0)return;
                let provinces = JSON.parse(JSON.stringify(this.DISTRICTS));
                if(codes.length === 0 || provinces.length === 0)return '';

                //判断是否有国家,暂时去掉国家code
                if(this.showCountry){
                    codes = codes.slice(1);

                }

                // 省份
                if(codes.length === 1){
                    provinces.forEach(province=>{
                        if(province.code === codes[0]){
                            obj.province = {label:province.name,value:province.code};
                            citys = province.children;
                        }
                    });
                    obj.level = 'province';
                }
                // 市
                if(codes.length === 2){
                    provinces.forEach(province=>{
                        if(province.code === codes[0]){
                            obj.province = {label:province.name,value:province.code};
                            citys = province.children;
                        }
                    });
                    citys.forEach(city=>{
                        if(city.code === codes[1]) {
                            obj.city = {label: city.name, value: city.code};
                        }
                    });
                    obj.level = 'city';
                }
                // 区
                if(codes.length === 3){
                    provinces.forEach(province=>{
                        if(province.code === codes[0]){
                            obj.province = {label:province.name,value:province.code};
                            citys = province.children;
                        }
                    });
                    citys.forEach(city=>{
                        if(city.code === codes[1]) {
                            obj.city = {label: city.name, value: city.code};
                            countys = city.children;
                        }
                    });
                    countys.forEach(county=>{
                        if(county.code === codes[2]) {
                            obj.county = {label: county.name, value: county.code};
                        }
                    });
                    obj.level = 'county';
                }

                //判断是否有国家
                if(this.showCountry){
                    obj.country = {label:'全国',value:'0'};
                    obj.level = (obj.level === undefined || obj.level === '')?'country':obj.level;
                }


                this.$emit('objData',obj);
                this.$emit('laseCode',value[value.length-1]);
            },
            hideFun(){
                if(this.DISTRICTS.length === 0)return [];
                let data = JSON.parse(JSON.stringify(this.DISTRICTS));
                //删除区
                if(this.hideArea){
                    data.forEach(item=>{
                        if(item.children && item.children.length>0){
                            item.children.forEach(res=>{
                                res.children = null;

                            });
                        }
                    });
                }else if(this.hideCity){ //删除市
                    data.forEach(item=>{
                        item.children = null;
                    });
                }
                //判断是否显示全国
                let arr = [];
                if(this.showCountry){
                    arr[0] = {name:'全国',code:'0'};
                    arr[0].children = data;
                }else{
                    arr = data
                }
                return arr;
            },
        },
        created(){
            this.options =  this.hideFun();

        }
    };
</script>
