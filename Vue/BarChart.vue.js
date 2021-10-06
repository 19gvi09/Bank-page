const BarChart = {
    template: `
        <div class="wrapper">
            <h4>{{dataItems.name}}</h4>
            <div class="chart">
                <div class="chart__section" v-for="item in dataItems.items" :key="item.value" :style="{background: item.color, height: 100 + '%', width: item.width + '%'}"><h5 class="value">{{item.value}}</h5></div>
                <div class="chart__mark" :style="{left: dataItems.mark.width + '%'}"><h5 class="value">{{dataItems.mark.value}}</h5></div>
            </div>
        </div>
    `,
    props: {
        items: Object
    },
    computed: {
        dataItems() {
            // Блоки кода разделены между собой пустой строкой

            // БЛОК 1
            // Находим минимальное и максимальное значение входных данных, чтобы график не упирался в черточку, желтое или красное значение, а имел еще некоторое расстояние по бокам
            // Для этого собираем все входные значения в один массив
            let values = []
            this.items.items.map(e => {
                values.push(e.value)
            })
            values.push(this.items.mark.value)
            // Вычисляем конец отсчета (конец красной зоны) и заносим это значение в массив секций
            this.items.items.push({
                value: Math.max.apply(null, values)*1.2, // Значение коэффициента должно быть строго больше 1. Чем больше значение, тем больше будет красная зона
                color: "#ff0000"
            })

            // БЛОК 2
            // Приводим значения из БД к нормальному виду
            this.items.items.map(e => {
                e.value = (e.value*100).toFixed(2)
            })
            this.items.mark.value = (this.items.mark.value*100).toFixed(2)

            // БЛОК 3
            // Вычисление размеров секций и расположения черточки
            // 3.1 Вычисляем начало отсчета на графике
            let min = Math.min.apply(null, values)*0.8 // Значение коэффициента должно быть строго меньше 1. Чем меньше значение, тем больше будет зеленая зона
            //console.log("НАЧАЛО ОТСЧЕТА " + min)
            // Задаем первое предыдущее значение, так как это будет необходимо для вычисления разности значений для первой секции
            let prev = min
            // Вычисляем числовую "длину" графика (конец отсчета - начало отсчета)
            let realWidth = this.items.items[this.items.items.length-1].value - min
            // 3.2 Цикл, который вычисляет конечную долю (ширину) каждой секции
            for (let i = 0; i < this.items.items.length; i++) {
                // Вычисляем разность соседних значений
                let difference = this.items.items[i].value - prev
                //console.log("Значение секции " + this.items.items[i].value)
                //console.log("Предыдущее значение " + prev)
                //console.log("Разница значений " + difference)
                //console.log("Относительная ширина " + realWidth)
                // Вычисляем процентную долю секции от всей ширины графика
                this.items.items[i].width = 100*difference/realWidth
                //console.log("Процент секции " + this.items.items[i].width + "%")
                // Текущее значение становится предыдущим относительно следующего (для вычисления разности значений соседних секций)
                prev = this.items.items[i].value
            }
            // 3.3 Вычисление расположения черточки
            this.items.mark.width = (100*(this.items.mark.value - min))/realWidth
            // 3.4 Задаем пустую строку в значение конца красной секции, чтобы оно не отображалось сверху графика
            this.items.items[this.items.items.length-1].value = ""
            return this.items
        }
    },
    mounted() {
        this.dataItems()
    }
}