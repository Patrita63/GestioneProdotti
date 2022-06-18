export interface Provincia {
    ID: number;
    Name: string;
    numAbitanti: number;
    annoFondazione: Date;
    isCapoluogo: boolean;
    IdRegione: number;
}

export const province = [
    {
        ID: 1,
        Name: 'Roma',
        numAbitanti: 2012,
        annoFondazione: new Date(),
        isCapoluogo: true,
        IdRegione: 1,
    },
    {
        ID: 2,
        Name: 'Palermo',
        numAbitanti: 2044,
        annoFondazione: new Date(),
        isCapoluogo: true,
        IdRegione: 2,
    },
    {
        ID: 3,
        Name: 'Milano',
        numAbitanti: 2000,
        annoFondazione: new Date(),
        isCapoluogo: true,
        IdRegione: 3,
    },
    {
        ID: 4,
        Name: 'Rieti',
        numAbitanti: 100,
        annoFondazione: 2020,
        isCapoluogo: true,
        IdRegione: 1,
    },
    {
        ID: 5,
        Name: 'Trapani',
        numAbitanti: 300,
        annoFondazione: new Date(),
        isCapoluogo: true,
        IdRegione: 2,
    },
    {
        ID: 6,
        Name: 'Monza',
        numAbitanti: 700,
        annoFondazione: new Date(),
        isCapoluogo: true,
        IdRegione: 3,
    }
];
