export const MOCK_DATA = [
    {
        id: 0,
        name: 'Dinheiro',
        color: '#215c00',
        expenses: [
            {
                id: 0,
                date: new Date(Date.parse("10/10/2022")),
                name: "Seguro",
                value: 154.80,
                label: {
                    id: 0,
                    name: "Seguro"
                }
            },
            {
                id: 1,
                date: new Date(Date.parse("06/15/2022")),
                name: "Carro",
                value: 6088.44,
                installments: 12
            },
            {
                id: 2,
                date: new Date(Date.parse("09/10/2022")),
                name: "Mecânico",
                value: 3742.20,
                installments: 12
            }
        ]
    },
    {
        id: 1,
        name: 'Inter',
        color: '#ff7100',
        expenses: [
            {
                id: 0,
                date: new Date(Date.parse("10/10/2022")),
                name: "Duo Gourmet Inter",
                value: 450,
                installments: 5
            },
            {
                id: 1,
                date: new Date(Date.parse("12/21/2022")),
                name: "Ritalina",
                value: 200.00,
                installments: 3
            }
        ],
        card: {
            number: 1234,
            maxCredit: 10000
        }
    },
    {
        id: 2,
        name: 'Nubank',
        color: '#8700ad',
        expenses: [
            {
                id: 0,
                date: new Date(Date.parse("01/01/2015")),
                name: "Steam",
                value: 99.99
            },
            {
                id: 1,
                date: new Date(Date.now()),
                name: "Ritalina",
                value: 610.01
            }
        ],
        card: {
            number: 4321,
            maxCredit: 900
        }
    },
    {
        id: 3,
        name: 'C6',
        color: '#000',
        expenses: [],
        card: {
            number: 4322,
            maxCredit: 800
        }
    },
    {
        id: 4,
        name: 'Bradesco',
        color: '#a50d0d',
        expenses: [
            {
                id: 0,
                date: new Date(Date.parse("01/01/2015")),
                name: "Steam",
                value: 677.00
            },
            {
                id: 1,
                date: new Date(Date.now()),
                name: "Ritalina",
                value: 10.10
            }
        ],
        card: {
            number: 4323,
            maxCredit: 700
        }
    },
];