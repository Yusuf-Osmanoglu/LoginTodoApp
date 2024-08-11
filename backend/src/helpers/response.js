const apiResponse = (props = {}) => {

    const defaults = {
        status: true,
        messages: {},
        data: {},
    };

    props = Object.assign(defaults, props);

    return props;
}

const joiParse = (errors) => {
    var ret = {};

    for(var i=0;i<errors.length;i++){
        if(ret[errors[i].context.key] == undefined){
            ret[errors[i].context.key] = [];
        }

        ret[errors[i].context.key].push(errors[i].message);
    }

    return ret;
}

module.exports = {
    apiResponse,
    joiParse
}