const BarChart = {
    template: `
        <div class="wrapper">
            <h4>{{dataItems.name}}</h4>
            <div class="chart">
                <div class="chart__section" v-for="item in dataItems.items" :key="item.value" :style="{background: item.color, height: 100 + '%', width: /*item.width*/ item.width + '%'}"><h5 class="value">{{item.value}}</h5></div>
                <div class="chart__mark" :style="{left: dataItems.mark.width + 'px'}"><h5 class="value">{{dataItems.mark.value}}</h5></div>
            </div>
        </div>
    `,
    props: {
        items: Object
    },
    computed: {
        dataItems() {
            let values = []
            let prev = 0
            this.items.items.map(e => {
                values.push(e.value)
            })
            this.items.items.push({
                value: Math.max.apply(null, values)*1.1,
                color: "#ff0000"
            })
            for (let i = 0; i < this.items.items.length; i++) {
                this.items.items[i].width = 100*(this.items.items[i].value - prev)/this.items.items[this.items.items.length-1].value
                prev = this.items.items[i].value
            }
            this.items.mark.width = 100*this.items.mark.value/this.items.items[this.items.items.length-1].value
            this.items.items[this.items.items.length-1].value = ""
            return this.items
        }
    }
}