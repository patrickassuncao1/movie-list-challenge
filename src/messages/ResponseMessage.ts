class ResponseMessage {

    public readonly message: string;
    public readonly data?: object | any[];

    constructor(message: string, data?: object | any[]) {
        this.message = message;
        this.data = data;
    }
}

export { ResponseMessage };