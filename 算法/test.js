const test_node = [{
    "flag": "",
    "method": "",
    "examinetag": 'defaultHandleTypeState',//办理类型下拉框的type值
    "memo": "",
    "wfleveId": "1597864831270",
    "fileTypeId": "0a7fb7308a664118abbec9d0c8dfa7f4",
    "type": "1",
    "remind": {	//提醒方式
        "content": "内容，一般设置为title即可",
        "isRemind": "是否提醒，根据checkbox选中状态，提醒为1，不提醒为0",
        "remindType": [//
            "1"//如果isRemind为1，提醒，则remindType设置为1即可，可以写死。
        ]
    },
    "nodes": [{
        "deptName": "5处-1/测试5/河北单位",
        "flag": "",
        "deptType": "2",
        "fileTypeId": "0a7fb7308a664118abbec9d0c8dfa7f4",
        "type": "dept",
        "isFindSuper": "",
        "nodes": [{
            "deptName": "5处-1/测试5/河北单位",
            "deptId": "504222",
            "type": "user",
            "name": "阿萨德",
            "only": "false",
            "checked": "true",
            "id": "504251",
            "selected": "true",
            "status": ""
        }, {
            "deptName": "5处-1/测试5/河北单位",
            "deptId": "504222",
            "type": "user",
            "name": "libai",
            "only": "false",
            "checked": "true",
            "id": "453534543",
            "selected": "true",
            "status": ""
        }],
        "nextWfleveId": "1597883950261",
        "name": "5处-1/测试5/河北单位",
        "only": "false",
        "checked": "false",
        "id": "504222",
        "selected": "false"
    }, {
        "deptName": "5处-2/测试2/秦岭单位",
        "flag": "",
        "deptType": "2",
        "fileTypeId": "0a7fb7308a664118abbec9d0c8dfa7f4",
        "type": "dept",
        "isFindSuper": "",
        "nodes": [{
            "deptName": "5处-2/测试2/秦岭单位",
            "deptId": "2",
            "type": "user",
            "name": "李白",
            "only": "false",
            "checked": "true",
            "id": "12321312",
            "selected": "true",
            "status": ""
        }, {
            "deptName": "5处-2/测试2/秦岭单位",
            "deptId": "2",
            "type": "user",
            "name": "libai",
            "only": "false",
            "checked": "true",
            "id": "645564654",
            "selected": "true",
            "status": ""
        }],
        "nextWfleveId": "1597883950261",
        "name": "5处-2/测试2/秦岭单位",
        "only": "false",
        "checked": "false",
        "id": "2",
        "selected": "false"
    }],
    "nextWfleveId": "1597883950261",
    "opCond": "",
    "name": "发送到处领导审核",
    "limit": [],
    "id": "1597916579032"
}];
let test_node_last = [{
    "flag": "",
    "method": "",
    "examinetag": 'defaultHandleTypeState',//办理类型下拉框的type值
    "memo": "",
    "wfleveId": "1597864831270",
    "fileTypeId": "0a7fb7308a664118abbec9d0c8dfa7f4",
    "type": "1",
    "remind": {	//提醒方式
        "content": "内容，一般设置为title即可",
        "isRemind": "是否提醒，根据checkbox选中状态，提醒为1，不提醒为0",
        "remindType": [//
            "1"//如果isRemind为1，提醒，则remindType设置为1即可，可以写死。
        ]
    },
    "nodes": [{
        "deptName": "5处-1/测试5/河北单位",
        "flag": "",
        "deptType": "2",
        "fileTypeId": "0a7fb7308a664118abbec9d0c8dfa7f4",
        "type": "dept",
        "isFindSuper": "",
        "nodes": [{
            "deptName": "5处-1/测试5/河北单位",
            "deptId": "504222",
            "type": "user",
            "name": "阿萨德",
            "only": "false",
            "checked": "true",
            "id": "504251",
            "selected": "true",
            "status": ""
        }],
        "nextWfleveId": "1597883950261",
        "name": "5处-1/测试5/河北单位",
        "only": "false",
        "checked": "false",
        "id": "504222",
        "selected": "false"
    }],
    "nextWfleveId": "1597883950261",
    "opCond": "",
    "name": "发送到处领导审核",
    "limit": [],
    "id": "1597916579032"
}];
const targrtkey = ['504251', '12321312'];

function test(val, targrtkey) {
    let unit = val[0].nodes;
    let result = [];
    // console.log('unit', unit);

    for (let i = 0; i < unit.length; i++) {
        const persons = unit[i].nodes;
        // console.log('persons', persons);
        for (let j = 0; j < persons.length; j++) {
            const person = persons[j];
            // console.log('person:', person);
            if (targrtkey.indexOf(person.id) !== -1) {
                // 如果result 为[]
                if (result.length === 0) {

                    result.push({
                        "deptName": person.deptName,
                        "deptType": unit[0].fileTypeId,
                        "fileTypeId": unit[0].fileTypeId,
                        "flag": "",
                        "id": person.deptId,//部门ID
                        "name": person.deptName,// 与「deptName」长的一样
                        "nextWfleveId": "选择的环节名称中对应的nextWfleveId值",
                        "nodes": [
                            {
                                "id": person.id,//选择的用户ID
                                "name": person.name,//选择的用户姓名
                                "status": person.status
                            }
                        ],
                        "type": person.type
                    })

                } else {
                    console.log('1 result', result);
                    // 检查result 是否已有单位 人员
                    for (let k = 0; k < result.length; k++) {
                        //                         
                        const r = result[k];
                        console.log('r', r);
                        if (r.id === person.deptId) {
                            //  有
                            console.log('r.id', r.id);
                            console.log('person.dep', person.deptId);
                            // 是否已经存在
                            const element = [];
                            for (let m = 0; m < r.nodes.length; m++) {                                
                                element.push(r.nodes[m].id);                                                          
                            }

                            if (element.indexOf(person.id) === -1) {
                                r.nodes.push({
                                    "id": person.id,//选择的用户ID
                                    "name": person.name,//选择的用户姓名
                                    "status": person.status
                                })
                            }      
                        } else {
                            //无 
                            result.push({
                                "deptName": person.deptName,
                                "deptType": unit[0].fileTypeId,
                                "fileTypeId": unit[0].fileTypeId,
                                "flag": "",
                                "id": person.deptId,//部门ID
                                "name": person.deptName,// 与「deptName」长的一样
                                "nextWfleveId": "选择的环节名称中对应的nextWfleveId值",
                                "nodes": [
                                    {
                                        "id": person.id,//选择的用户ID
                                        "name": person.name,//选择的用户姓名
                                        "status": person.status
                                    }
                                ],
                                "type": person.type
                            })
                        }

                    }
                }

            } else {

            }

        }

    }
    console.log(result);
    return result;
}

test(test_node, targrtkey,'','');