export interface IAppConfig {
    env: {
        name: string;
    };
    appInsights: {
        instrumentationKey: string;
    };
    logging: {
        console: boolean;
        appInsights: boolean;
    };
    GridPager: {
        productPagerItems: number;
        productPagerItemsPerPage: number;
    };
    apiServer: {
        apiUrlHttp: string;
        apiUrlHttps: string;
    };

    mail: {
        smtpServer: string;
        from: string;
        port: number;
    }
}
