const CapitalAllocation = {
    template: `
        <div>
            <div class="heading">
                <h3>Отчет об аллокации капитала банка (в % от основного капитала)</h3>
            </div>
            <div class="content">
                <div>
                    <h4 class="chart__name">Типы рисков, %</h4>
                    <ColumnChart :data= data.riskTypes />
                </div>
                <div>
                    <h4 class="chart__name">Структурные подразделения, %</h4>
                    <ColumnChart :data= data.structuralUnits />
                </div>
                <div>
                    <h4 class="chart__name">Направления бизнеса, %</h4>
                    <ColumnChart :data= data.buisnessLines />
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