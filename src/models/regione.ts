import { getLocaleDateFormat } from '@angular/common';

export interface Regione {
    ID: number;
    Name: string;
    numAbitanti: number;
    annoFondazione: Date;
    isAutonoma: boolean;
}

/* export const regioni = [
    {
        ID: 1,
        Name: 'Lazio',
        numAbitanti: 2012,
        annoFondazione: new Date(),
        isAutonoma: true,
    },
    {
        ID: 2,
        Name: 'Sicilia',
        numAbitanti: 2044,
        annoFondazione: new Date(),
        isAutonoma: true,
    },
    {
        ID: 3,
        Name: 'Lombardia',
        numAbitanti: 2000,
        annoFondazione: new Date(),
        isAutonoma: true,
    }
]; */

