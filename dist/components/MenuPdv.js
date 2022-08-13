"use strict";
class MenuPdv extends Widget {
    constructor({ name, panelTitle = null, panelContent = null }) {
        super(name); //mandatory for Widget inherited
        this.panelTitle = panelTitle;
        this.panelContent = panelContent;
    }
    htmlTemplate() {
        return `
        <div id="panel-pdv" class="bg-app-grey text-center font-app-green p-2">
            <h2 id="h2-title">
                Olá
            </h2>
            <p id="p-content" class="text-start">
                F4 - CLIENTE
            </p>
        </div>
        `;
    }
    onWidgetDidLoad() {
        this.h2_title = this.elementById('h2-title');
        this.p_content = this.elementById('p-content');
        this.updateInfo({
            panelTitle: this.panelTitle,
            panelContent: this.panelContent
        });
    }
    updateInfo({ panelTitle = null, panelContent = null }) {
        this.h2_title.textContent = panelTitle;
        this.p_content.textContent = panelContent;
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
