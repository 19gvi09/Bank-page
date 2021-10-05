const ColumnChart = {
    template: `
        <div class="column-chart-wrapper">
            <div class="column-chart">
                <div class="column-chart__section" v-for="item in mass" :key="item.name" :style="{background: item.color, height: item.height /*item.value*/ + '%', width: 100 + '%'}"></div>
            </div>
            <div class="labels">
                <div v-for="item in mass" :key="item.name" class="labels__label">
                    <div class="labels__square" :style="{background: item.color}"></div>
                    <h4 class="labels__value">{{item.name}} ({{item.value}}%)</h4>
                </div>
            </div>
        </div>
    `,
    props: {
        data: Array
    },
    computed: {
        mass() {
            this.data.map(e => {
                e.height = 100*e.value/this.data.reduce((prev, curr) => { return prev + curr.value }, 0);
                return e; 
            })
            return this.data
        }
    }
}