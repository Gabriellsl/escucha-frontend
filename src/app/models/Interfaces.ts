export interface UseApi {
    api_key: String,
    length: number;
}

export interface Cost {
    user: String,
    lenght: number;
    cost: number;
}

export interface Analyzer{
    recognized_phrase: string,
    result: [
        {
            category: {
                name: string;
                words: [string];
            }
        }
    ]
}

export interface Car {
    vin:string;
    year:string;
}
