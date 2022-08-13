"use strict";
//Object.defineProperty(exports, "__esModule", { value: true });
//exports.AppCustomButton = //exports.AppTextBox = void 0;
class AppTextBox extends Widget {
    constructor({ name, titleText = null, contentText = [] }) {
        super(name); //mandatory for Widget inherited
        this.titleText = titleText;
        this.contentText = contentText;
    }
    htmlTemplate() {
        return `
        <div id="${this.name}" class="bg-app-grey d-flex flex-column justify-content-center font-app-green px-2 py-3 shadow-app">
            <div id="div_title" class="align-self-center font-app-size-1" ${this.titleText ? '' : 'hidden'}> a </div>
            <div id='div_content' hidden=${this.contentText ? '' : 'hidden'}></div>
        </div>
        `;
    }
    onWidgetDidLoad() {
        this.div_title = this.elementById('div_title');
        this.div_content = this.elementById('div_content');
        this.div_title.textContent = this.titleText;
        for (let i = 0; i < this.contentText.length; i++) {
            let contentMount = `<div class="font-app-size-2 mt-3">${this.contentText[i]}</div>`;
            this.div_content.insertAdjacentHTML('beforebegin', contentMount);
        }
        this.updateInfo({
            titleText: this.titleText,
            contentText: this.contentText
        });
    }
    updateInfo({ titleText = null, contentText = [] }) {
        this.titleText = titleText;
        this.contentText = contentText;
    }
    setCustomPresenter(presenter) {
        throw new Error("Method not implemented.");
    }
    value() {
        throw new Error("Method not implemented.");
    }
    setEnabled(enabled) {
        throw new Error("Method not implemented.");
    }
    addCSSClass(className) {
        throw new Error("Method not implemented.");
    }
    removeCSSClass(className) {
        throw new Error("Method not implemented.");
    }
    applyCSS(propertyName, propertyValue) {
        throw new Error("Method not implemented.");
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        throw new Error("Method not implemented.");
    }
    setVisible(visible) {
        throw new Error("Method not implemented.");
    }
}
//exports.AppTextBox = AppTextBox;
// Use Icones Bootstrap * "bi bi-xxx"
class AppCustomButton extends Widget {
    constructor({ name, text, btnClass = 'btn-success', iconClass = 'bi-question', iconSize = '1rem', widthSize = '100px', onClick = null }) {
        super(name);
        this.text = text;
        this.btnClass = btnClass;
        this.iconClass = iconClass;
        this.iconSize = iconSize;
        this.widthSize = widthSize;
        this.onClick = onClick;
    }
    //<i class="${this.iconClass}" style="font-size: ${this.iconSize}; color: white;"></i>
    htmlTemplate() {
        return `
                <button id="appCustomButton" type="button" class="btn size-app-buttom text-white d-flex flex-column align-items-center p-0 mx-2">
                        <i id="appIcon" class="bi"></i>
                        <div id="appText" class="font-app-size-buttom mx-1"></div>
                    </div>
                </button>
            `;
    }
    onWidgetDidLoad() {
        var self = this;
        this.buttonElement = this.elementById('appCustomButton');
        this.textElement = this.elementById('appText');
        this.iconELement = this.elementById('appIcon');
        this.buttonElement.classList.add(this.btnClass);
        this.buttonElement.style.setProperty('min-width', this.widthSize);
        this.textElement.innerText = this.text;
        this.iconELement.style.setProperty('font-size', this.iconSize);
        this.iconELement.classList.add(this.iconClass);
        if (self.onClick != null) {
            this.buttonElement.onclick = function (ev) {
                self.onClick(ev);
            };
        }
    }
    setText(text) {
        this.textElement.innerText = text;
    }
    value() {
        throw new Error("Button does not support value");
    }
    setVisible(visible) {
        this.buttonElement.hidden = (visible == false);
    }
    setEnabled(enabled) {
        this.buttonElement.disabled = (enabled == false);
    }
    addCSSClass(className) {
        this.buttonElement.classList.add(className);
    }
    removeCSSClass(className) {
        this.buttonElement.classList.remove(className);
    }
    applyCSS(propertyName, propertyValue) {
        this.buttonElement.style.setProperty(propertyName, propertyValue);
    }
    setPosition(position, marginLeft, marginTop, marginRight, marginBottom, transform) {
        this.buttonElement.style.position = position;
        this.buttonElement.style.left = marginLeft;
        this.buttonElement.style.top = marginTop;
        this.buttonElement.style.right = `${marginRight}`;
        this.buttonElement.style.bottom = `${marginBottom}`;
        this.buttonElement.style.transform = `${transform}`;
    }
    setCustomPresenter(renderer) {
        renderer.render(this);
    }
}
//exports.AppCustomButton = AppCustomButton;
