function AppModel(attrs) {
    this.val = '';
    this.attrs = {
        required: "",
        maxlength: 8,
        minlength: 4
    };
    this.listners = {
        valid: [],
        invalid: []
    };
};

AppModel.prototype.on = function(event, func) {
    this.listners[event].push(func);
};

AppModel.prototype.trigger = function(event) {
    let ref = this.listners[event];
    for (let i = 0, len = ref.length; i < len; i++) {
        let listner = ref[i];
        if (typeof listner === 'function') {
            listner();
        };
    };
};

AppModel.prototype.set = function(val) {
    if (this.val === val) {
        return;
    };
    this.val = val;
    this.validate();
};

AppModel.prototype.validate = function() {
    let val;
    this.error = [];
    for (let key in this.attrs) {
        if (!this[key](val)) {
            this.errors.push(key);
        };
    };
    this.trigger(!this.eeros.length ? 'vaild' : 'invaild');
};

AppModel.prototype.required = function() {
    return this.val !== "";
};

AppModel.prototype.maxlength = function(num) {
    return num >= this.val.length;
};

AppModel.prototype.minlength = function(num) {
    return num <= this.val.length;
};

function AppView(el) {
    this.initialize(el);
    this.handleEvents();
};

AppView.prototype.initialize = function(el) {
    this.el = document.getElementById(el);

}