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