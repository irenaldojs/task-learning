import { UIHead } from './../Objective-UI';
import { ICustomWidgetPresenter, Widget } from "../Objective-UI";

export class AppTextBox extends Widget {

    public div_title: HTMLDivElement;
    public div_content: HTMLDivElement;

    private name: string;
    private titleText: string;
    private contentText: string[];

    constructor({ name, titleText = null, contentText = [] }:
        {
            name: string,
            titleText?: string,
            contentText?: string[],

        }) {
        super(name); //mandatory for Widget inherited

        this.titleText = titleText;
        this.contentText = contentText;
    }

    protected htmlTemplate(): string {
        return `
        <div id="${this.name}" class="bg-app-grey d-flex flex-column justify-content-center font-app-green px-2 py-3 shadow-app">
            <div id="div_title" class="align-self-center font-app-size-1" ${this.titleText ? '' : 'hidden'}> a </div>
            <div id='div_content' hidden=${this.contentText ? '' : 'hidden'}></div>
        </div>
        `;
    }

    protected onWidgetDidLoad(): void {
        this.div_title = this.elementById('div_title')
        this.div_content = this.elementById('div_content')

        this.div_title.textContent = this.titleText;
        for (let i = 0; i < this.contentText.length; i++) {
            let contentMount = `<div class="font-app-size-2 mt-3">${this.contentText[i]}</div>`
            this.div_content.insertAdjacentHTML('beforebegin', contentMount)
        }

        this.updateInfo({
            titleText: this.titleText,
            contentText: this.contentText
        });
    }
    public updateInfo({ titleText = null, contentText = [] }:
        {
            titleText?: string,
            contentText?: string[],
        }) {

        this.titleText = titleText;
        this.contentText = contentText
    }

    public setCustomPresenter(presenter: ICustomWidgetPresenter<Widget>): void {
        throw new Error("Method not implemented.");
    }
    public value(): string {
        throw new Error("Method not implemented.");
    }
    public setEnabled(enabled: boolean): void {
        throw new Error("Method not implemented.");
    }
    public addCSSClass(className: string): void {
        throw new Error("Method not implemented.");
    }
    public removeCSSClass(className: string): void {
        throw new Error("Method not implemented.");
    }
    public applyCSS(propertyName: string, propertyValue: string): void {
        throw new Error("Method not implemented.");
    }
    public setPosition(position: string, marginLeft: string, marginTop: string, marginRight: string, marginBottom: string, transform?: string): void {
        throw new Error("Method not implemented.");
    }
    public setVisible(visible: boolean): void {
        throw new Error("Method not implemented.");
    }

}

// Use Icones Bootstrap * "bi bi-xxx"
export class AppCustomButton extends Widget {

    public buttonElement: HTMLButtonElement;
    public textElement: HTMLDivElement;

    private text: string;
    public onClick: Function;
    private btnClass: string;
    private iconClass: string;
    private iconSize: string;
    private widthSize: string;

    constructor({ name, text, btnClass = 'btn-success', iconClass = 'bi-question', iconSize = '1rem', widthSize = '100px'}:
        {
            name: string;
            text: string;
            btnClass?: string;
            iconClass?: string;
            iconSize?: string;
            widthSize?: string;

        }) {
        super(name);

        this.text = text;
        this.btnClass = btnClass;
        this.iconClass = iconClass;
        this.iconSize = iconSize;
        this.widthSize = widthSize;

          }
    //<i class="${this.iconClass}" style="font-size: ${this.iconSize}; color: white;"></i>
    protected htmlTemplate(): string {
        return `
                <button id="appCustomButton" type="button" class="btn size-app-buttom p-1">
                        <i id="appIcon" style="color:white;";"></i>
                        <div id="appText" class="font-app-size-buttom p-0" style="color:white;"></div>                
                    </div>
                </button>
            `
    }
    protected onWidgetDidLoad(): void {
        var self = this;
        this.buttonElement = this.elementById('appCustomButton');
        this.textElement = this.elementById('appText')
        this.buttonElement.classList.add(this.btnClass);
        this.setText(this.text);
        this.applyCSSById('appText', 'width', this.widthSize);
        this.applyCSSById('appIcon', 'font-size', this.iconSize);
        this.addCSSClassById('appIcon', this.iconClass);


        if(self.onClick != null) {
            this.buttonElement.onclick = function (ev) {
                self.onClick(ev);
            };
        }
    }

    public setText(text: string) {
        this.textElement.innerText = text;
    }
    

    private addCSSClassById(nameId: string,  className: string) {
        const element: HTMLDivElement = this.elementById(nameId);
        element.classList.add(className);
    }

    public applyCSSById(nameId: string,  propertyName: string, propertyValue: string): void {
        const element: HTMLDivElement = this.elementById(nameId);
        element.style.setProperty(propertyName, propertyValue);
    }

    public value(): string {
        throw new Error("Button does not support value");
    }

    public setVisible(visible: boolean): void {
        this.buttonElement.hidden = (visible == false);
    }

    public setEnabled(enabled: boolean): void {
        this.buttonElement.disabled = (enabled == false);
    }

    public addCSSClass(className: string): void {
        this.buttonElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this.buttonElement.classList.remove(className);
    }

    public applyCSS(propertyName: string, propertyValue: string): void {
        this.buttonElement.style.setProperty(propertyName, propertyValue);
    }

    public setPosition(position: string,
        marginLeft: string,
        marginTop: string,
        marginRight?: string,
        marginBottom?: string,
        transform?: string): void {
        this.buttonElement.style.position = position;
        this.buttonElement.style.left = marginLeft;
        this.buttonElement.style.top = marginTop;
        this.buttonElement.style.right = `${marginRight}`;
        this.buttonElement.style.bottom = `${marginBottom}`;
        this.buttonElement.style.transform = `${transform}`;
    }

    public setCustomPresenter(renderer: ICustomWidgetPresenter<AppCustomButton>): void {
        renderer.render(this);
    }
}