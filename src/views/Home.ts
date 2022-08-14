import { UITextBox, UILabel } from './../Objective-UI';
import { Product } from './../viewModel/Product';
import { AppCustomButton, AppTableItems, AppTextBox } from './../components/Components';
import { Col, Row, UIView, ViewLayout, UIImage, UIHead, VirtualFunction} from "../Objective-UI";


export class HomeView extends UIView {

    public static $: HomeView;

    private caixa: string = '01'
    private operador: string = 'Emerson Tinoco'
    
    private produtosCliente: Product[] = [
        new Product({name: 'Escova de dentes', value: 2.99, count: 2}),
        new Product({name: 'Pasta de dentes', value: 4.99, count: 1}),
        new Product({name: 'Shampoo', value: 9.99, count: 2}),
        new Product({name: 'Fralda', value: 19.99, count: 1}),
        new Product({name: 'Creme de Pele', value: 29.99, count: 10}),
        new Product({name: 'Escova de dentes', value: 2.99, count: 2}),
        new Product({name: 'Pasta de dentes', value: 4.99, count: 1}),
        new Product({name: 'Shampoo', value: 9.99, count: 2}),
        new Product({name: 'Fralda', value: 19.99, count: 1}),
        new Product({name: 'Creme de Pele', value: 29.99, count: 10}),
        new Product({name: 'Escova de dentes', value: 2.99, count: 2}),
        new Product({name: 'Pasta de dentes', value: 4.99, count: 1}),
        new Product({name: 'Shampoo', value: 9.99, count: 2}),
        new Product({name: 'Fralda', value: 19.99, count: 1}),
        new Product({name: 'Creme de Pele', value: 29.99, count: 10}),
    ]

    // -----------------------------Primeira Coluna ------------------------------------- //
        // ---- Linha 1 --- //
    widthButton = '90px'
    invoiceButtom = new AppCustomButton({name: 'invoiceButtom', btnClass: 'btn-success', text: 'NOTA FISCAL', 
        iconClass: 'bi-cloud-arrow-up-fill', iconSize: '1.7rem', widthSize: this.widthButton})
    contingencyButtom = new AppCustomButton({name: 'contingencyButtom', btnClass: 'btn-warning', text: 'CONTINGÊNCIA', 
        iconClass: 'bi-exclamation-square-fill', iconSize: '1.7rem', widthSize: this.widthButton })
    balanceButtom = new AppCustomButton({name: 'balanceButtom', btnClass: 'btn-danger', text: 'BALANÇO', 
        iconClass: 'bi-repeat', iconSize: '1.7rem', widthSize: this.widthButton })
    headText = new UIHead({ name: 'headText', headType: 'div', text: ''})

        // ---- Linha 2 --- //
    tableTitle = new UIHead({ name: 'listTitle', headType: 'h2', text: ''});
    calculatorButtom = new AppCustomButton({name: 'calculatorButtom', btnClass: 'btn-success', text: 'CALCULADORA', 
        iconClass: 'bi-calculator-fill', iconSize: '1.7rem', widthSize: this.widthButton })
        // ---- Linha 3 --- //
    tableFooter = new UILabel({name: 'tableFooter', text: 'TOTAL DA COMPRA'})
    tableTotal = new UILabel({name: 'tableTotal', text: ''})

        // ---- Tabela de Produtos --- //
    tableItems = new AppTableItems({name: 'tableItems', tableHead: ['#', 'ITEM', 'QTD.', '(R$)']})


    // -----------------------------Terceira Coluna ------------------------------------- //
    // Texto de atalhos
    shortcut: string[] = ['F4 - CLIENTE', 'F2 - DESCONTO / ACRÉSCIMO', 'F6 - PAGAMENTO AVANÇADO', 'F10 - RECEBIMENTO RÁPIDO', 'F11 - MAIS ATALHOS'];
    // Componentes da Terceira Coluna
    logo1 = new UIImage({ name: 'logo1', src: '../img/logo1.png', cssClass: 'w-100' })
    logo2 = new UIImage({ name: 'logo2', src: '../img/logo2.png', cssClass: 'w-100' })
    logo3 = new UIImage({ name: 'logo3', src: '../img/logo3.png', cssClass: 'w-100' })
    infoLabel1 = new AppTextBox({ name: 'text-box-pdv', titleText: 'MENU PDV' })
    infoLabel2 = new AppTextBox({
        name: 'text-box-shortcut', titleText: 'ATALHOS', contentText: this.shortcut
    })

    constructor() {
        super();

        HomeView.$ = this;
    }

    private CliqueBotao(){
        var funcaoJS = new VirtualFunction({
            fnName: 'minhaFuncao',
            fnArgNames: ['nome'],
            fnContent: `alert(nome)`,            
        })
        funcaoJS.call('Irenaldo')
    }

    buildLayout(): ViewLayout {
        //const panelClass = 'bg-app-grey font-app-green d-flex flex-column justify-content-center align-items-center py-1';

        return new ViewLayout('app', [
            new Row('primaryRow', {
                columns: [
                    new Col('listItems', {
                        colHeight: '100vh', colClass: 'col-6 d-flex flex-column p-0 bg-light', rows: [
                            new Row('listItems-div-1', {
                                rowClass: 'bg-app-grey d-flex flex-row align-items-center justify-content-between p-2', 
                                rowHeidth: '80px'}),
                            new Row('listItems-div-2', {
                                rowClass: 'd-flex flex-row align-items-center justify-content-between mx-3 py-5 app-border', 
                                rowHeidth: '80px'}),
                            new Row('listItems-div-3', {
                                rowClass: 'd-flex flex-column flex-grow-1 overflow-auto align-items-center justify-content-between  mx-3'}),
                            new Row('listItems-div-4', {    
                                rowClass: 'd-flex flex-row align-items-end justify-content-between m-3 pr-5',                       
                            }),
                        ]
                    }),
                    new Col('insertItems', { colHeight: '100vh', colClass: 'col-4 bg-app-green' }),
                    new Col('infoPanel', {
                        colHeight: '100vh', 
                        colClass: 'col-2 d-flex flex-column justify-content-around pb-3', 
                        rows: [
                            new Row('infoPanel-div-1', {}),
                            new Row('infoPanel-div-2', { 
                                rowClass: 'justify-content-center', 
                                rowHeidth: '100px' }),
                            new Row('infoPanel-div-3', { 
                                rowClass: 'justify-content-center' }),
                            new Row('infoPanel-div-4', { 
                                rowClass: 'px-1 bg-app-grey shadow-app' }),
                        ]
                    })
                ]
            })
        ]);
    }
    composeView(): void {

        this.addWidgets('listItems-div-1', this.invoiceButtom, this.contingencyButtom, this.balanceButtom, this.headText)
        this.addWidgets('listItems-div-2', this.tableTitle, this.calculatorButtom)
        this.addWidgets('listItems-div-3', this.tableItems)
        this.addWidgets('listItems-div-4', this.tableFooter, this.tableTotal)

        this.addWidgets('infoPanel-div-1', this.logo1)
        this.addWidgets('infoPanel-div-2', this.infoLabel1)
        this.addWidgets('infoPanel-div-3', this.infoLabel2)
        this.addWidgets('infoPanel-div-4', this.logo2, this.logo3)


        
    }
    onViewDidLoad(): void {
        // Cabeçalho
        this.headText.addCSSClass('font-app-green')        
        this.headText.addCSSClass('flex-grow-1')
        this.headText.addCSSClass('text-right')        
        this.headText.applyCSS('font-weight', 'bold')
        this.headText.setText(`${this.operador.toUpperCase()} - CAIXA ${this.caixa}`)
        // 
        this.tableFooter.addCSSClass('font-app-green')
        this.tableFooter.addCSSClass('font-app-footer')

        // Lista
        this.tableTitle.setText('Lista de Compras'.toUpperCase())
        this.tableTitle.addCSSClass('font-app-green')

        this.tableItems.setProdutcs(this.produtosCliente)
        this.tableTotal.setText("R$ "+this.totalOrder())
        this.tableTotal.addCSSClass('font-app-total')

    }
    
    totalOrder(): string {
        let total = this.produtosCliente.map(product => product.getTotalValues())
            .reduce((previousValue, currentValue) => previousValue + currentValue)
        return total.toString()
    }
}
