export interface UseApi {
    api_key: String,
    length: number;
}

export interface Cost {
    user: String,
    length: number;
    cost: number;
}

export interface Analyzer {
    recognized_phrase: string,
    result: [
        {
            category: string; 
            words: [string];
            
        }
    ]
}

export interface Category {
    category: string; 
    word: string;
}
