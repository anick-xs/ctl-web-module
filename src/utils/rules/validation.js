import { validateMoneyNumber,passwordCheck,validateQQ,mobile,checkTel,validateSymbol,integer,onlyChinese,letterNumber,onlyNumber,luhmCheck,onlyChineseLetter,letterNumberBrack} from '@/utils/rules/validate'
export default{
    install(Vue,options){
        /**
         * 注意:  定义type 规则时 不用做非空验证
         *        只需要传入 required:true 即可
         * */
        /*密码校验*/
        const passwordCk = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if (!passwordCheck(value)){
                    callback(new Error('请输入6-16位由数字,字母组合的密码'));
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*保留两位小数-金额*/
        const isvalidateMoney = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if (parseFloat(value)<0.01||parseFloat(value)>20000.00){
                    callback(new Error('请输入0.01-20000.00之间的数字'));
                }
                if(!validateMoneyNumber(value)) {
                    callback(new Error('请输入两位小数以内的数字'))
                } else {
                    callback()
                }

            }
            else{
                callback();
            }
        };

        const isvalidateBigDecimal = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if (parseFloat(value)<=0||parseFloat(value)>999999999.99){
                    callback(new Error('请输入0-999999999.99之间的数字'));
                }
                if(!validateMoneyNumber(value)) {
                    callback(new Error('请输入两位小数以内的数字'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        //数值限制在8位以内
        const isvalidateBigNumber = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!integer(value)) {
                    callback(new Error('请输入正整数!'))
                }else if (parseFloat(value)<1||parseFloat(value)>99999999){
                    callback(new Error('请输入1-99999999之间的正整数'));
                }
                else {
                    callback()
                }
            }
            else{
                callback();
            }
        };

        /*100-9999.99保留两位小数*/
        const isvalidateCurRent = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if (parseFloat(value)<10||parseFloat(value)>9999.99){
                    callback(new Error('请输入10-9999.99之间的数字'));
                }
                if(!validateMoneyNumber(value)) {
                    callback(new Error('最多保留两位小数!'))
                } else {
                    callback()
                }

            }
            else{
                callback();
            }
        };

        /*0-100.0000保留四位小数*/
        const twoDecima = (rule, value, callback) => {
            if(value !== null && value !== "") {
                let reg = new RegExp("^(((\\d{1,2})[.]((\\d{1,4})?))|100|(?:0|[1-9][0-9]?)|100.0|100.00|100.000|100.0000)$")
                if(isNaN(value) || !reg.test(value) ) {
                    callback(new Error('请输入0-100.0000间的数字，最多保留四位小数'))
                } else {
                    callback()
                }
            }else{
                callback();
            }
        };


        /*验证QQ号码*/
        const isvalidateQQ= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!validateQQ(value)) {
                    callback(new Error('您输入的QQ号不正确!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*验证手机号*/
        const isValidateMobile= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!mobile(value)) {
                    callback(new Error('您输入的手机号不正确!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*验证座机号*/
        const isValidateCall= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!checkTel(value)) {
                    callback(new Error('您输入的号码不正确! 请输入11位手机号码或座机号码'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };

        /*含有非法字符(只能输入字母、汉字)*/
        const isvalidateRegexn= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(validateSymbol(value)) {
                    callback(new Error('含有非法字符(只能输入字母、汉字、数字)!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*请输入正整数*/
        const isvalidateInteger= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!integer(value)) {
                    callback(new Error('请输入正整数!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*0-30的正整数*/
        const isvalidatePeople= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!integer(value)) {
                    callback(new Error('请输入正整数!'))
                }else if (parseFloat(value)<1||parseFloat(value)>30){
                    callback(new Error('请输入1-30之间的数字'));
                }
                else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*1-100的正整数（0既不是正数也不是负数，而是正数和负数的分界点。）*/
        const hundred = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!integer(value)) {
                    callback(new Error('请输入正整数!'))
                }else if (parseFloat(value)<=0||parseFloat(value)>100){
                    callback(new Error('请输入1-100之间的正整数'));
                }
                else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*1-1000的正整数（0既不是正数也不是负数，而是正数和负数的分界点。）*/
        const thousand = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!integer(value)) {
                    callback(new Error('请输入正整数!'))
                }else if (parseFloat(value)<0||parseFloat(value)>1000){
                    callback(new Error('请输入0-1000之间的数字'));
                }
                else {
                    callback()
                }
            }
            else{
                callback();
            }
        };

        /*范围input校验*/
        const inputRange = (rule, value, callback) => {
            if((!value[0] || !value[1]) || (value[0] === '' || value[1] === '')) {
                callback(new Error('请输入范围!'));
                return
            }
            if(onlyNumber(value[0]) || onlyNumber(value[1])) {
                callback(new Error('只能输入正数字!'));
                return
            }
            if(value[0] > value[1]){
                callback(new Error('最小值不能大于最大值!'));
            }
            callback();

        };
        /*请输入中文*/
        const isValidateOnlyChinese= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(onlyChinese(value)) {
                    callback(new Error('只能输入汉字!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*只能中文字母*/
        const isValidateOnlyChineseLetter = (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!onlyChineseLetter(value)) {
                    callback(new Error('只能输入汉字或字母!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };

        /*请输入数字*/
        const isValidateOnlyNumber= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(onlyNumber(value)) {
                    callback(new Error('只能输入正数字!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };

        /*请输入字母或数字*/
        const isValidateLetterNumber= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!letterNumber(value)) {
                    callback(new Error('只能输入字母或数字!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /*请输入字母或数字括号*/
        //新增学员信息变更申请用到
        const isLetterNumberBrack= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!letterNumberBrack(value)) {
                    callback(new Error('只能输入字母、数字和英文括号!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /* 必填值 */
        const requiredValue= (rule, value, callback) => {
            if(value===null||value===''||value === undefined) {
                callback(new Error('该输入项为必填项!'))
            } else if(typeof value === 'string') {
                if(value.split(" ").join("").length === 0){
                    callback(new Error('输入项不能全为空格!'))
                }else{
                    callback();
                }
            }
            else{
               callback();
            }
        };
        /* 银行卡 */
        const isValidateBank= (rule, value, callback) => {
            if(value !== null && value !== "") {
                if(!luhmCheck(value)) {
                    callback(new Error('银行卡输入错误!'))
                } else {
                    callback()
                }
            }
            else{
                callback();
            }
        };
        /* 时间转换 */
        const isValidate= (rule, value, callback) => {
            new Date(value)
            if(value===null||value==='') {
                callback(new Error('请选择时间!'))
            } else{
                callback()
            }
        };

        // 身份证号
		const isValidateIdNum= (rule, value, callback) => {
			if(!value) {
				// callback(new Error('该输入项为必填项!'))
				return false
			}
			if(!value.match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X)$)/)){
                callback(new Error('身份证号输入错误!'));
                return false
            }
			let  birthdayno, birthdaytemp;

			if (value.length === 18) {
				birthdayno = value.substring(6, 14)
			} else if (value.length === 15) {
				birthdaytemp = value.substring(6, 12)
				birthdayno = "19" + birthdaytemp;
			} else {
				callback(new Error('身份证号输入错误!'))
				return false
			}
			if(parseInt(birthdayno.substring(0, 4))>parseInt(new Date().getFullYear())||
				parseInt(birthdayno.substring(4, 6))>12){
				callback(new Error('身份证号输入错误!'))
				return false
			}
			else{
				callback();
			}
		};
        /* 校验空数组 空对象 */
        const isEmptyArrayOrObject= (rule, value, callback) => {
            if( value && value.constructor === Array && value.length < 1 ) {
                callback(new Error('该输入项为必填项!'))
            } else if ( value && value.constructor === Object && Object.keys(value).length < 1 ) {
                callback(new Error('该输入项为必填项!'))
            } else {
                callback()
            }
        };
        const arrayDict = (rule, value, callback) => {
            if( value && value.constructor === Array && value.length < 1 ) {
                callback(new Error('该输入项为必填项!'))
            } else if ( value && value.constructor === Object && Object.keys(value).length < 1 ) {
                callback(new Error('该输入项为必填项!'))
            } else if(value && value.constructor === Array && value.length < 2 ){
                callback(new Error('请选择市!'))
            }
            else {
                callback()
            }
        };


        /**
         * 参数 item
         * required true  必填项
         * maxLength  字符串的最大长度
         * min 和 max 必须同时给 min < max  type=number
         * type 手机号 mobile
         *      邮箱   email
         *      网址   url
         *      各种自定义类型   定义在 src/utils/validate 中    持续添加中.......
         * */

        Vue.prototype.check_rules = function (item){
            let rules = [];
            if(item.required){
                rules.push({validator: requiredValue, required: true, trigger: ['change','blur'] });
            }
            if(item.maxLength){
                rules.push({ min:1,max:item.maxLength, message: '最多输入'+item.maxLength+'个字符!', trigger: ['blur','change'] })
            }
            if(item.min&&item.max){
                rules.push({ min:item.min,max:item.max, message: '字符长度在'+item.min+'至'+item.max+'之间!', trigger: 'blur' })
            }
            if(item.type){
                let type = item.type;
                switch(type) {
                    case 'idNum':
                        rules.push({ validator: isValidateIdNum,  trigger: ['blur','change'] });
                        break;
                    case 'passwordCk':
                        rules.push({ validator: passwordCk,  trigger: ['blur','change'] });
                        break;
                    case 'reference':
                        rules.push({ validator: isEmptyArrayOrObject, required: true, trigger: ['blur','change'] });
                        break;
                    case 'twoDecima':
                    rules.push({ validator: twoDecima,  trigger: ['blur','change'] });
                    break;
                    case 'isvalidateBigNumber':
                    rules.push({ validator: isvalidateBigNumber,  trigger: ['blur','change'] });
                    break;
                    case 'email':
                        rules.push({ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur','change']  });
                        break;
                    case 'select':
                        rules.push({ message: '请选择一项', trigger: ['blur','change']  });
                        break;
                    case 'date':
                        rules.push({ validator: isValidate,type: 'date', message: '请选择日期', trigger: ['change']  });
                        break;
                    case 'array':
                        rules.push({ required: true, type: 'array',  message: '请至少选择一个', trigger: ['blur','change'] });
                        break;
                    case 'arrayDict':
                        rules.push({ required: true,  validator: arrayDict,   trigger: ['blur','change'] });
                        break;
                    case 'radio':
                        rules.push({  message: '请选择', trigger: ['blur','change'] });
                        break;
                    case 'textBox':
                        rules.push({  message: '请填写', trigger: ['blur','change'] });
                        break;
                    case 'decimal':
                        rules.push({ validator: isvalidateMoney, trigger: ['blur','change'] });
                        break;
                    case 'bigDecimal':
                        rules.push({ validator: isvalidateBigDecimal, trigger: ['blur','change'] });
                        break;
                    case 'curRent':
                        rules.push({ validator: isvalidateCurRent, trigger: ['blur','change'] });
                        break;
                    case 'people':
                        rules.push( { validator: isvalidatePeople, trigger: ['blur','change'] });
                        break;
                    case 'qq':
                        rules.push( { validator: isvalidateQQ, trigger: ['blur','change'] });
                        break;
                    case 'mobile':
                        rules.push( { validator: isValidateMobile, trigger: ['blur','change'] });
                        break;
                    case 'call':
                        rules.push( { validator: isValidateCall, trigger: ['blur','change'] });
                        break;
                    case 'noSymbol':
                        rules.push( { validator: isvalidateRegexn, trigger: ['blur','change'] });
                        break;
                    case 'integer':
                        rules.push( { validator: isvalidateInteger, trigger: ['blur','change'] });
                        break;
                    case 'chinese':
                        rules.push( { validator: isValidateOnlyChinese, trigger: ['blur','change'] });
                        break;
                    //只能 字母+数字
                    case 'letterAndNumber':
                        rules.push( { validator: isValidateLetterNumber, trigger: ['blur','change'] });
                        break;
                    case 'letterNumberBrack':
                        rules.push( { validator: isLetterNumberBrack, trigger: ['blur','change'] });
                        break;
                    case 'chineseLetter':
                        rules.push( { validator: isValidateOnlyChineseLetter, trigger: ['blur','change' ]});
                        break;
                    //只能 正数字
                    case 'number':
                        rules.push( { validator: isValidateOnlyNumber, trigger: ['change','blur'] });
                        break;
                    case 'bank':
                        rules.push( { validator: isValidateBank, trigger: ['blur','change'] });
                        break;
                    case 'hundred':
                    rules.push({ validator:hundred, trigger:['blur','change'] });
                        break;
                    case 'thousand':
                    rules.push({ validator:thousand, trigger:['blur','change'] });
                        break;
                    case 'inputRange':
                    rules.push({ validator:inputRange, trigger:['blur','change'] });
                        break;
                    default:
                        rules.push({});
                        break;
                }
            }
            return rules;
        };
    }
}
