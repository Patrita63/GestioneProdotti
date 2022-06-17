export interface Comune{
    ID: number;
    Name: string;
    numAbitanti: number;
    annoFondazione: Date;
    IdProvincia: number;
}

export const comuni = [
    {
        ID: 1,
        Name: 'Corleone',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 2,
    },
    {
        ID: 2,
        Name: 'Cinisi',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 2,
    },
    {
        ID: 3,
        Name: 'Castelvetrano',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 5,
    },
    {
        ID: 4,
        Name: 'Marsala',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 5,
    },
    {
        ID: 5,
        Name: 'Fregene',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 1,
    },
    {
        ID: 6,
        Name: 'Fiumicino',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 1,
    },
    {
        ID: 7,
        Name: 'cittaducale',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 4,
    },
    {
        ID: 8,
        Name: 'Borgorose',
        numAbitanti: 20,
        annoFondazione: new Date(),
        IdProvincia: 4,
    },
    {
        ID: 9,
        Name: 'Legnano',
        numAbitanti: 201,
        annoFondazione: new Date(),
        IdProvincia: 3,
    },
    {
        ID: 10,
        Name: 'rho',
        numAbitanti: 205,
        annoFondazione: new Date(),
        IdProvincia: 3,
    },
    {
        ID: 11,
        Name: 'Lissone',
        numAbitanti: 201,
        annoFondazione: new Date(),
        IdProvincia: 6,
    },
    {
        ID: 12,
        Name: 'Seregno',
        numAbitanti: 205,
        annoFondazione: new Date(),
        IdProvincia: 6,
    }
];
