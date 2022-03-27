export class Telefono {
    private tipoTelefono: string;
    public numeroTelefono: number;


    constructor(tipoTel: string, numeroTel: number) {
        this.tipoTelefono = tipoTel;
        this.numeroTelefono = numeroTel;
    }

    public getTipo(): string {
        return this.tipoTelefono;
    }

    public setTipo(value: string) {
        this.tipoTelefono= value;
    }

    public getNumero(): number {
        return this.numeroTelefono;
    }

    public setNumero(value: number) {
        this.numeroTelefono = value;
    }
}
