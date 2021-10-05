const CapitalStructure = {
    template: `
        <div>
            <div class="heading">
                <h3>Отчет об агрегированном объеме значимых рисков и структура потребления капитала</h3>
            </div>
            <div class="content">
                <div class="">
                    <h4 class="chart__name">Основной капитал, %</h4>
                    <ColumnChart :data= data.items />
                </div>
                <div>
                    <div class="item">
                        <h4>Совокупный капитал</h4>
                        <h4 class="item__value">{{data.values.first}} млрд. руб.</h4>
                    </div>
                    <div class="item">
                        <h4>Основной капитал, в т.ч.:</h4>
                        <h4 class="item__value">{{data.values.second}} млрд. руб.</h4>
                    </div>
                    <ul>
                        <div class="item">
                            <li>Совокупный уровень рисков</li>
                            <h4 class="item__value">{{data.values.third}} млрд. руб.</h4>
                        </div>
                        <div class="item">
                            <li>Стресс-буфер</li>
                            <h4 class="item__value">{{data.values.fourth}} млрд. руб.</h4>
                        </div>
                        <div class="item">
                            <li>Резерв капитала</li>
                            <h4 class="item__value">{{data.values.fifth}} млрд. руб.</h4>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    `,
    components: {
        ColumnChart
    },
    props: {
        data: Object
    }
}