export class Mail {
    private tipoMail: string;
    private direccionMail: string;

    constructor(_tipoMail: string, _direccionMail: string){
        this.tipoMail = _tipoMail;
        this.direccionMail = _direccionMail;
    }

    public getTipo(): string {
        return this.tipoMail;
    }

    public setTipo(value: string) {
        this.tipoMail = value;
    }

    public getDireccion(): string {
        return this.direccionMail;
    }

    public setDireccion(value: string) {
        this.direccionMail = value;
    }
}
