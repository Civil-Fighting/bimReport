function getRootPath() {
	// 获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
	var curWwwPath = window.document.location.href;
	// 获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	// 获取主机地址，如： http://localhost:8080
	var localhostPath = curWwwPath.substring(0, pos);
	return (localhostPath);
}
$.extend(
	$.fn.validatebox.defaults.rules,
	{
		productNo : {
			validator : function(value, param) {
				var data = false;
				if (value.length < param[0]) {
					$.ajax({
						type : "POST",
						async : false,
						url : getRootPath() + "/claims/validatorProductNo.do",
						dataType : "json",
						data : {
							"no" : value
						},
						success : function(result) {
							data = result.success;
						}
					});
					param[1] = "借款合同编号已存在.";
					return data;
				} else {
					param[1] = "最多输入255位字符.";
					return false;
				}
				return data;
			},
			message : "{1}"
		},
		updateProductNo : {
			validator : function(value, param) {
				var data = false;
				if (value.length < param[0]) {
					$
							.ajax({
								type : "POST",
								async : false,
								url : getRootPath()
										+ "/claims/updateValidatorProductNo.do",
								dataType : "json",
								data : {
									"no" : value,
									"oldNo" : $(param[1]).data(
											"value")
								},
								success : function(result) {
									data = result.success;
								}
							});
					param[1] = "借款合同编号已存在.";
					return data;
				} else {
					param[1] = "最多输入255位字符.";
					return false;
				}
				return data;
			},
			message : "{1}"
		},
		productAmount : {
			validator : function(value, param) {
				var data = false;
				if ($(param[0]).combobox('getValue') == "3" || $(param[0]).combobox('getValue') == "2") {
					if ($(param[1]).combobox('getValue') != ""
							&& value != "") {
						$.ajax({
							type : "POST",
							async : false,
							url : getRootPath()
									+ "/product/validatorProductAmount.do",
							dataType : "json",
							data : {
								"amount" : value,
								"sid" : $(param[1])
										.combobox(
												'getValue')
							},
							success : function(result) {
								data = result.success;
							}
						});
						param[1] = "产品金额不能大于标的剩余金额！";
						return data;
					}
				} else {
					return true;
				}
			},
			message : "{1}"
		},
		updateProductAmount : {
			validator : function(value, param) {
				var data = false;
				if ($(param[0]).combobox('getValue') == "3" || $(param[0]).combobox('getValue') == "2") {
					if ($(param[1]).combobox('getValue') != ""
							&& value != "") {
						$
								.ajax({
									type : "POST",
									async : false,
									url : getRootPath()
											+ "/product/validatorUpdateProductAmount.do",
									dataType : "json",
									data : {
										"amount" : value,
										"sid" : $(param[1])
												.combobox(
														'getValue'),
										"id" : $(param[2]).val()
									},
									success : function(result) {
										data = result.success;
									}
								});
						param[1] = "产品金额不能大于标的剩余金额！";
						return data;
					}
				} else {
					return true;
				}
			},
			message : "{1}"
		},
		deadline : {
			validator : function(value, param) {
				var data = false;
				if (Number(value) > Number($(param[0]).val())) {
					param[1] = "【募集期限】应该小于等于【产品期限】";
					return data;
				} else {
					return true;
				}
			},
			message : "{1}"
		},
		temporaryCashAmount : {
			validator : function(value, param) {
				var data = null;
				if ($(param[1]).numberbox('getValue') != "" && $(param[0]).numberbox('getValue') != ""&& value != "") {
					$.ajax({
						type : "POST",
						async : false,
						url : getRootPath()
								+ "/caseRule/validatorTemporaryCashAmount.do",
						dataType : "json",
						data : {
							"deadline" : $(param[0]).numberbox('getValue'),
							"amount" : $(param[1]).numberbox('getValue')
						},
						success : function(result) {
							if(result.success){
								data = result;
							}
						}
					});
					if(data.map.drCashRule == null){
						param[1] = "没有可用规则！";
						return false;
					}
					if(data.map.drCashRule.redAmount<value){
						param[1] = "不能大于最大返现金额("+data.map.drCashRule.redAmount+"元)！";
						return false;
					}
					return true;
				}
			},
			message : "{1}"
		},
		idcard : {// 验证身份证
			validator : function(value) {
				return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
			},
			message : '身份证号码格式不正确'
		},
		maxLength : {
			validator : function(value, param) {
				return param[0] >= value.length;
			},
			message : '最多输入{0}位字符.'
		},
		minLength : {
			validator : function(value, param) {
				return value.length >= param[0];
			},
			message : '请输入至少（2）个字符.'
		},
		length : {
			validator : function(value, param) {
				var len = $.trim(value).length;
				return len >= param[0] && len <= param[1];
			},
			message : "输入内容长度必须介于{0}和{1}之间."
		},
		phone : {// 验证电话号码
			validator : function(value) {
				return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i
						.test(value);
			},
			message : '格式不正确,请使用下面格式:020-88888888'
		},
		mobile : {// 验证手机号码
			validator : function(value) {
				return /^(13|14|15|17|18)\d{9}$/i.test(value);
			},
			message : '手机号码格式不正确'
		},
		intOrFloat : {// 验证整数或小数
			validator : function(value) {
				return /^\d+(\.\d+)?$/i.test(value);
			},
			message : '请输入数字，并确保格式正确'
		},
		currency : {// 验证货币
			validator : function(value) {
				return /^\d+(\.\d+)?$/i.test(value);
			},
			message : '货币格式不正确'
		},
		qq : {// 验证QQ,从10000开始
			validator : function(value) {
				return /^[1-9]\d{4,9}$/i.test(value);
			},
			message : 'QQ号码格式不正确'
		},
		integer : {// 验证整数
			validator : function(value) {
				return /^[+]?[1-9]+\d*$/i.test(value);
			},
			message : '请输入整数'
		},
		age : {// 验证年龄
			validator : function(value) {
				return /^(?:[1-9][0-9]?|1[01][0-9]|120)$/i
						.test(value);
			},
			message : '年龄必须是0到120之间的整数'
		},
		selectValueRequired : {
			validator : function(value, param) {
				if (value == "业务员工号" || value == "-1"
						|| value.indexOf('选择') >= 0
						|| value.indexOf('全部') >= 0) {
					return false;
				} else {
					return true;
				}
			},
			message : '该下拉框为必选项'
		},

		chinese : {// 验证中文
			validator : function(value) {
				return /^[\Α-\￥]+$/i.test(value);
			},
			message : '请输入中文'
		},
		english : {// 验证英语
			validator : function(value) {
				return /^[A-Za-z]+$/i.test(value);
			},
			message : '请输入英文'
		},
		unnormal : {// 验证是否包含空格和非法字符
			validator : function(value) {
				return /.+/i.test(value);
			},
			message : '输入值不能为空和包含其他非法字符'
		},
		username : {// 验证用户名
			validator : function(value) {
				return /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
			},
			message : '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）'
		},
		faxno : {// 验证传真
			validator : function(value) {
				// return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[
				// ]){1,12})+$/i.test(value);
				return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i
						.test(value);
			},
			message : '传真号码不正确'
		},
		zip : {// 验证邮政编码
			validator : function(value) {
				return /^[1-9]\d{5}$/i.test(value);
			},
			message : '邮政编码格式不正确'
		},
		ip : {// 验证IP地址
			validator : function(value) {
				return /d+.d+.d+.d+/i.test(value);
			},
			message : 'IP地址格式不正确'
		},
		name : {// 验证姓名，可以是中文或英文
			validator : function(value) {
				return /^[\Α-\￥]+$/i.test(value)
						| /^\w+[\w\s]+\w+$/i.test(value);
			},
			message : '请输入姓名'
		},
		date : {// 验证姓名，可以是中文或英文
			validator : function(value) {
				// 格式yyyy-MM-dd或yyyy-M-d
				return /^(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))$/i
						.test(value);
			},
			message : '请输入合适的日期格式'
		},
		msn : {
			validator : function(value) {
				return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
						.test(value);
			},
			message : '请输入有效的msn账号(例：abc@hotnail(msn/live).com)'
		},
		same : {
			validator : function(value, param) {
				if ($("#" + param[0]).val() != "" && value != "") {
					return $("#" + param[0]).val() == value;
				} else {
					return true;
				}
			},
			message : '两次输入的密码不一致！'
		},
		equals : {
			validator : function(value, param) {
				return value == $(param[0]).val();
			},
			message : '两次输入的身份证号码不一致'
		},
		restrictNumber : { // 限制输入字数
			validator : function(value) {
				return value.length <= 150;
			},
			message : '输入字符不能超过150个'
		},
	    equaldDate: {  
            validator: function(value, param){  
                var d1 = $(param[0]).datetimebox('getValue');  //获取开始时间  
                return value >=d1;  //有效范围为大于开始时间的日期  
            },  
            message: '结束日期不能早于开始日期!'  
        }  
	});