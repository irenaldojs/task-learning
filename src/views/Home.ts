import { Col, Row, UIView, ViewLayout, UIList, UIImage } from "../Objective-UI";
import { AppTextBox } from '../components/Components';


export class HomeView extends UIView {

    public static $: HomeView;
    private sideMenu: UIList;

    // ATALHOS
    shortcut: string[] = ['F4 - CLIENTE','F2 - DESCONTO / ACRÉSCIMO', 'F6 - PAGAMENTO AVANÇADO', 'F10 - RECEBIMENTO RÁPIDO', 'F11 - MAIS ATALHOS']

    // Componentes da Terceira Coluna
    logo1 = new UIImage({ name: 'logo1', src: '../img/logo1.png', cssClass: 'w-100' })
    logo2 = new UIImage({ name: 'logo2', src: '../img/logo2.png', cssClass: 'w-100' })
    logo3 = new UIImage({ name: 'logo3', src: '../img/logo3.png', cssClass: 'w-100' })
    //infoLabel1 = new UILabel({ name: 'infoLabel1', text: 'MENU PDV' })
    //infoLabel2Title = new UILabel({ name: 'infoLabel2', text: 'ATALHOS' })
    infoLabel1 = new AppTextBox({ name: 'text-box-pdv', titleText: 'MENU PDV' })
    infoLabel2 = new AppTextBox({
        name: 'text-box-shortcut', titleText: 'ATALHOS', contentText: this.shortcut})

    constructor() {
        super();

        HomeView.$ = this;
    }

    buildLayout(): ViewLayout {
        //const panelClass = 'bg-app-grey font-app-green d-flex flex-column justify-content-center align-items-center py-1';

        return new ViewLayout('app', [
            new Row('primaryRow', {
                columns: [
                    new Col('listItems', { colHeight: '100vh', colClass: 'col-6' }),
                    new Col('insertItems', { colHeight: '100vh', colClass: 'col-4 bg-app-green' }),
                    new Col('infoPanel', {
                        colHeight: '100vh', colClass: 'col-2 d-flex flex-column justify-content-around pb-3', rows: [
                            new Row('infoPanel-div-1', {}),
                            new Row('infoPanel-div-2', { rowClass: 'justify-content-center' , rowHeidth: '100px'}),
                            new Row('infoPanel-div-3', { rowClass: 'justify-content-center'}),
                            new Row('infoPanel-div-4', { rowClass: 'px-1 bg-app-grey shadow-app'}),
                        ]
                    })
                ]
            })
        ]);
    }
    composeView(): void {
        this.addWidgets('infoPanel-div-1', this.logo1)
        this.addWidgets('infoPanel-div-2', this.infoLabel1)
        this.addWidgets('infoPanel-div-3', this.infoLabel2)
        /*
        for (let i = 0; i < this.shortcut.length; i++) {
            const text = new UILabel({ name: `infoPanel-div-3 ${i}`, text: this.shortcut[i].toString() })
            this.addWidgets('infoPanel-div-3', text)
        }        
        */
        this.addWidgets('infoPanel-div-4', this.logo2, this.logo3)
    }
    onViewDidLoad(): void {
        const fontSize = 'font-size: 1.5vmax; font-weight: bold;'
        //this.infoLabel1.cssFromString(fontSize)
        //this.infoLabel2Title.cssFromString(fontSize)
    }

}
