const emailValidationSpecs = require("./specs/emailvalidation.spec.js");
for(const prop in emailValidationSpecs){
    const func = emailValidationSpecs[prop];
    func();
};
const fullNameSpecs = require("./specs/fullname.spec.js");
for(const prop in fullNameSpecs){
    const func = fullNameSpecs[prop];
    func();
};