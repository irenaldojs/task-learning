"use strict";
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
