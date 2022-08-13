import { AppCustomButton } from './../components/Components';
import { Col, Row, UIView, ViewLayout, UIImage} from "../Objective-UI";
import { AppTextBox } from '../components/Components';


export class HomeView extends UIView {

    public static $: HomeView;
    // -----------------------------Primeira Coluna ------------------------------------- //
    invoiceButtom = new AppCustomButton({name: 'invoiceButtom', btnClass: 'btn-success', text: 'NOTA FISCAL', iconClass: 'bi-cloud-arrow-up-fill', iconSize: '1.7rem', widthSize: '80px' })
    contingencyButtom = new AppCustomButton({name: 'contingencyButtom', btnClass: 'btn-warning', text: 'CONTINGÊNCIA', iconClass: 'bi-exclamation-square-fill', iconSize: '1.7rem', widthSize: '80px' })
    balanceButtom = new AppCustomButton({name: 'balanceButtom', btnClass: 'btn-danger', text: 'BALANÇO', iconClass: 'bi-repeat', iconSize: '1.7rem', widthSize: '80px' })
    calculatorButtom = new AppCustomButton({name: 'calculatorButtom', btnClass: 'btn-success', text: 'CALCULADORA', iconClass: 'bi-calculator-fill', iconSize: '1.7rem', widthSize: '80px' })
            
    // -----------------------------Terceira Coluna ------------------------------------- //
    // Texto de atalhos
    shortcut: string[] = ['F4 - CLIENTE', 'F2 - DESCONTO / ACRÉSCIMO', 'F6 - PAGAMENTO AVANÇADO', 'F10 - RECEBIMENTO RÁPIDO', 'F11 - MAIS ATALHOS'];
    // Componentes da Terceira Coluna
    logo1 = new UIImage({ name: 'logo1', src: '../img/logo1.png', cssClass: 'w-100' })
    logo2 = new UIImage({ name: 'logo2', src: '../img/logo2.png', cssClass: 'w-100' })
    logo3 = new UIImage({ name: 'logo3', src: '../img/logo3.png', cssClass: 'w-100' })
    //infoLabel1 = new UILabel({ name: 'infoLabel1', text: 'MENU PDV' })
    //infoLabel2Title = new UILabel({ name: 'infoLabel2', text: 'ATALHOS' })
    infoLabel1 = new AppTextBox({ name: 'text-box-pdv', titleText: 'MENU PDV' })
    infoLabel2 = new AppTextBox({
        name: 'text-box-shortcut', titleText: 'ATALHOS', contentText: this.shortcut
    })

    constructor() {
        super();

        HomeView.$ = this;
    }

    buildLayout(): ViewLayout {
        //const panelClass = 'bg-app-grey font-app-green d-flex flex-column justify-content-center align-items-center py-1';

        return new ViewLayout('app', [
            new Row('primaryRow', {
                columns: [
                    new Col('listItems', {
                        colHeight: '100vh', colClass: 'col-6 d-flex flex-column p-0', rows: [
                            new Row('listItems-div-1', {rowClass: 'bg-app-grey d-flex flex-row align-items-center justify-content-around px-2', rowHeidth: '80px'}),
                            new Row('listItems-div-2', {rowClass: ''}),
                            new Row('listItems-div-3', {rowClass: ''}),
                            new Row('listItems-div-4', {rowClass: ''}),
                        ]
                    }),
                    new Col('insertItems', { colHeight: '100vh', colClass: 'col-4 bg-app-green' }),
                    new Col('infoPanel', {
                        colHeight: '100vh', colClass: 'col-2 d-flex flex-column justify-content-around pb-3', rows: [
                            new Row('infoPanel-div-1', {}),
                            new Row('infoPanel-div-2', { rowClass: 'justify-content-center', rowHeidth: '100px' }),
                            new Row('infoPanel-div-3', { rowClass: 'justify-content-center' }),
                            new Row('infoPanel-div-4', { rowClass: 'px-1 bg-app-grey shadow-app' }),
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

        this.addWidgets('listItems-div-1', this.invoiceButtom, this.contingencyButtom, this.balanceButtom, this.calculatorButtom)
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
