const app = Vue.createApp({
    el: "#app",
    components: {
        CapitalStructure,
        CapitalAllocation,
        LimitUtilization
    },
    data() {
      return {
        // Сюда запихните вашу функцию, которая делает запрос к серверу
      }
    },
    computed: {
        // Пропс для первой секции (Отчет об агрегированном объеме значимых рисков и структура потребления капитала)
        CapitalStructureData() {return {
            // Рендеринг графика
            items: [
                {
                color: "#0000ff",
                value: 40, // Сюда значение совокупного уровня рисков для графика
                name: "Совокупный уровень рисков (текущая утилизация лимитов)"
                },
                {
                color: "#1e90ff",
                value: 30, // Сюда значение стресс-буфера для графика
                name: "Стресс-буфер (с учетом риска концентрации)"
                },
                {
                color: "#008080",
                value: 30, // Сюда значение резерва по капиталу для графика
                name: "Резерв по капиталу"
                },
            ],
            // Рендеринг списка справа от графика
            values: {
                first: "31.359", // Сюда значение совокупного капитала
                second: "28.093", // Сюда основной капитал в т.ч.
                third: "18.481", // Сюда совокупный уровень рисков
                fourth: "3.038", // Сюда стресс-буфер
                fifth: "6.574" // Сюда резерв капитала
            }
        }},
        // Пропс для второй секции (Отчет об аллокации капитала банка (в % от основного капитала))
        CapitalAllocationData() {return {
            // Рендер графика Типы рисков
            riskTypes: [
                {
                    color: "#0000ff",
                    value: 43.16, // Сюда значение
                    name: "Кред. риск"
                },
                {
                    color: "#1e90ff",
                    value: 16.03, // Сюда значение
                    name: "Опер. риск"
                },
                {
                    color: "#008080",
                    value: 4.83, // Сюда значение
                    name: "ПРБК"
                },
                {
                    color: "#00ff00",
                    value: 1.49, // Сюда значение
                    name: "Рыночный риск (ПРТК)"
                },
                {
                    color: "#ffa500",
                    value: 0.06, // Сюда значение
                    name: "Рыночный риск (ВР)"
                },
                {
                    color: "#5a009d",
                    value: 0.22, // Сюда значение
                    name: "Риск ликвидн."
                },
                {
                    color: "#808080",
                    value: 0, // Сюда значение
                    name: "Риск конц.*"
                },
            ],
            // Рендеринг графика Структурные подразделения
            structuralUnits: [
                {
                    color: "#0000ff",
                    value: 26.93, // Сюда значение
                    name: "ДПК"
                },
                {
                    color: "#1e90ff",
                    value: 9.2, // Сюда значение
                    name: "Сеть"
                },
                {
                    color: "#008080",
                    value: 0.69, // Сюда значение
                    name: "ДКБКО (Казн-во.)"
                },
                {
                    color: "#00ff00",
                    value: 6.34, // Сюда значение
                    name: "ДКБКО (Корп. Бизн.)"
                },
                {
                    color: "#ffa500",
                    value: 5.05, // Сюда значение
                    name: "ДУАП"
                },
            ],
            // Рендеринг графика Направления бизнеса
            buisnessLines: [
                {
                    color: "#0000ff",
                    value: 16.67, // Сюда значение
                    name: "POS-Loans"
                },
                {
                    color: "#1e90ff",
                    value: 2.87, // Сюда значение
                    name: "Car Loans"
                },
                {
                    color: "#008080",
                    value: 7.38, // Сюда значение
                    name: "POS Xsel"
                },
                {
                    color: "#00ff00",
                    value: 0.16, // Сюда значение
                    name: "Корп. кредиты"
                },
                {
                    color: "#ffa500",
                    value: 7.85, // Сюда значение
                    name: "Нецелев. кредиты"
                },
                {
                    color: "#5a009d",
                    value: 1.04, // Сюда значение
                    name: "Сеть (Карты Бранч)"
                },
                {
                    color: "#808080",
                    value: 0.14, // Сюда значение
                    name: "Ипотека"
                },
                {
                    color: "#ffff00",
                    value: 6.34, // Сюда значение
                    name: "Корп. бизнес"
                },
                {
                    color: "#ff0000",
                    value: 0.69, // Сюда значение
                    name: "Опер. на фин. рынках"
                },
                {
                    color: "#ff00ff",
                    value: 5.05, // Сюда значение
                    name: "Упр. структ. баланса"
                },
            ]
        }},
        LimitUtilizationData() {return {
            riskTypes: [
                // КРЕДИТНЫЙ РИСК
                {
                    data: {
                        name: "Кредитный риск",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: "ДПК",
                                items: [
                                    {
                                        value: 40.85, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 43, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 26.93 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Сеть",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "ДКБКО (Корп. бизнес)",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "ДКБКО (Казн-во)",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "POS-Loans",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Car Loans",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Кредитные карты, перекрестные продажи",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Ипотека",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "МСБ",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Нецелевое кредитование",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Кредитные карты (Бранч)",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Корпоративный бизнес",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                        {
                            data: {
                                name: "Операции на финансовых рынках",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        },
                    ]
                },
                // РЫНОЧНЫЙ РИСК (ПТРК)
                {
                    data: {
                        name: "Рыночный риск (процентный риск торговой книги, ПТРК)",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: "ДУАП",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "Управление структурой баланса",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ]
                },
                // РЫНОЧНЫЙ РИСК (ВАЛЮТНЫЙ РИСК)
                {
                    data: {
                        name: "Рыночный риск (Валютный риск)",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: "ДУАП",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "Управление структурой баланса",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ]
                },
                // ПРОЦЕНТНЫЙ РИСК БАНКОВСКОЙ КНИГИ
                {
                    data: {
                        name: "Процентный риск банковской книги",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: "ДУАП",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "Управление структурой баланса",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ]
                },
                // ОПЕРАЦИОННЫЙ РИСК
                {
                    data: {
                        name: "Операционный риск",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: 'АО "ОТП Банк"',
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "Все бизнес линии",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ]
                },
                // РИСК КОНЦЕНТРАЦИИ
                {
                    data: {
                        name: "Риск концентрации",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: 'АО "ОТП Банк"',
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "Все бизнес линии",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ]
                },
                // РИСК ЛИКВИДНОСТИ
                {
                    data: {
                        name: "Риск ликвидности",
                        items: [
                            {
                                value: 57, //yellow
                                color: "#00ff00"
                            },
                            {
                                value: 60, //red
                                color: "#ffff00"
                            }
                        ],
                        mark: {
                            value: 43.16 //black
                        }
                    },
                    structuralUnits: [
                        {
                            data: {
                                name: "ДУАП",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ],
                    buisnessLines: [
                        {
                            data: {
                                name: "Управление структурой баланса",
                                items: [
                                    {
                                        value: 57, //yellow
                                        color: "#00ff00"
                                    },
                                    {
                                        value: 60, //red
                                        color: "#ffff00"
                                    }
                                ],
                                mark: {
                                    value: 43.16 //black
                                }
                            }
                        }
                    ]
                },
            ]
        }}
    }
})

app.component("Capital-Structure", CapitalStructure)
app.component("Capital-Allocation", CapitalAllocation)
app.component("Limit-Utilization", LimitUtilization)
app.mount("#app")