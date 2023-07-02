var Ranga = /** @class */ (function () {
    function Ranga() {
    }
    Ranga.prototype.load = function () {
        this.strong();
    };
    Ranga.prototype.strong = function () {
        var strongElements = document.getElementsByTagName("strong");
        for (var i = 0; i < strongElements.length; i++) {
            var strongElement = strongElements[i];
            strongElement.addEventListener("mouseenter", this.toggleAnimation);
            strongElement.addEventListener("animationend", this.toggleAnimation);
            strongElement["params"] = {
                element: strongElement,
                animationName: "strong",
                className: "animated",
            };
        }
    };
    Ranga.prototype.toggleAnimation = function (event, element, animationName, className) {
        if (element === void 0) { element = undefined; }
        if (animationName === void 0) { animationName = undefined; }
        if (className === void 0) { className = undefined; }
        var animation = (element !== null && element !== void 0 ? element : event.target["params"].element).getAnimations().filter(isTheAnimation)[0];
        function isTheAnimation(animation) {
            return animation.animationName === (animationName !== null && animationName !== void 0 ? animationName : event.target["params"].animationName);
        }
        if (animation === undefined)
            (element !== null && element !== void 0 ? element : event.target["params"].element).classList.toggle(className !== null && className !== void 0 ? className : event.target["params"].className);
        else if (!animation.finished)
            (element !== null && element !== void 0 ? element : event.target["params"].element).classList.toggle(className !== null && className !== void 0 ? className : event.target["params"].className);
    };
    return Ranga;
}());
var ranga = new Ranga();
ranga.load();
setTimeout(mottoNotify, 1000);
function mottoNotify() {
    ranga.toggleAnimation(undefined, document.querySelector("#motto strong"), "strong", "animated");
}
//# sourceMappingURL=main.js.map