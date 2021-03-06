"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var question_base_1 = require("./question-base");
var TextboxQuestion = (function (_super) {
    __extends(TextboxQuestion, _super);
    function TextboxQuestion() {
        var _this = _super.call(this) || this;
        _this.controlType = 'textbox';
        return _this;
    }
    return TextboxQuestion;
}(question_base_1.QuestionBase));
exports.TextboxQuestion = TextboxQuestion;
