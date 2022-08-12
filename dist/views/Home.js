"use strict";
class HomeView extends UIView {
    constructor() {
        super();
        // Componentes da Terceira Coluna
        this.logo1 = new UIImage({ name: 'logo1', src: '../img/logo1.png', cssClass: 'w-100' });
        this.logo2 = new UIImage({ name: 'logo2', src: '../img/logo2.png', cssClass: 'w-100' });
        this.logo3 = new UIImage({ name: 'logo3', src: '../img/logo3.png', cssClass: 'w-100' });
        this.infoLabel1 = new UILabel({ name: 'infoLabel1', text: 'MENU PDV' });
        this.infoLabel2Title = new UILabel({ name: 'infoLabel2', text: 'ATALHOS' });
        // ATALHOS
        this.shortcut = [
            '',
            'F4 - CLIENTE', '',
            'F2 - DESCONTO / ACRÉSCIMO', '',
            'F6 - PAGAMENTO AVANÇADO', '',
            'F10 - RECEBIMENTO RÁPIDO', '',
            'F11 - MAIS ATALHOS', '',
        ];
        HomeView.$ = this;
    }
    buildLayout() {
        const panelClass = 'bg-app-grey font-app-green d-flex flex-column justify-content-center align-items-center py-1';
        return new ViewLayout('app', [
            new Row('primaryRow', {
                columns: [
                    new Col('listItems', { colHeight: '100vh', colClass: 'col-6' }),
                    new Col('insertItems', { colHeight: '100vh', colClass: 'col-4 bg-app-green' }),
                    new Col('infoPanel', {
                        colHeight: '100vh', colClass: 'col-2 d-flex flex-column justify-content-around pb-3', rows: [
                            new Row('infoPanel-div-1', {}),
                            new Row('infoPanel-div-2', { rowClass: panelClass, rowHeidth: '100px' }),
                            new Row('infoPanel-div-3', { rowClass: panelClass }),
                            new Row('infoPanel-div-4', { rowClass: 'px-1 bg-app-grey' }),
                        ]
                    })
                ]
            })
        ]);
    }
    composeView() {
        this.addWidgets('infoPanel-div-1', this.logo1);
        this.addWidgets('infoPanel-div-2', this.infoLabel1);
        this.addWidgets('infoPanel-div-3', this.infoLabel2Title);
        for (let i = 0; i < this.shortcut.length; i++) {
            const text = new UILabel({ name: `infoPanel-div-3 ${i}`, text: this.shortcut[i].toString() });
            this.addWidgets('infoPanel-div-3', text);
        }
        this.addWidgets('infoPanel-div-4', this.logo2, this.logo3);
    }
    onViewDidLoad() {
        const fontSize = 'font-size: 1.5vmax; font-weight: bold;';
        this.infoLabel1.cssFromString(fontSize);
        this.infoLabel2Title.cssFromString(fontSize);
    }
}
