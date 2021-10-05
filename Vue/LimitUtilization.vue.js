const LimitUtilization = {
    template: `
        <div>
            <div class="heading">
                <h3>Отчет об утилизации лимитов и достижении сигнальных значений</h3>
            </div>
            <div class="container">
                <div class="column">
                    <h4>Типы рисков, %</h4>
                </div>
                <div class="column">
                    <h4>Структурные подразделения, %</h4>
                </div>
                <div class="column">
                    <h4>Направления бизнеса, %</h4>
                </div>
            </div>
            <div class="container" v-for="item in data.riskTypes" :key="item" >
                <div class="column">
                    <BarChart :items= item.data />
                </div>
                <div class="column">
                    <BarChart v-for="item in item.structuralUnits" :key="item" :items= item.data />
                </div>
                <div class="column">
                    <BarChart v-for="item in item.buisnessLines" :key="item" :items= item.data />
                </div>
            </div>
        </div>
    `,
    components: {
        BarChart
    },
    props: {
        data: Object
    }
}