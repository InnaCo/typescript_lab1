export class Direction {
    private calle: string;
    private numero: number;
    private piso: string;
    private letra: string;
    private codigoPostal: number;
    private poblacion: string;
    private provincia: string;

    constructor(_calle: string, _numero: number, _piso: string, _letra: string, _codigoPostal: number, _poblacion: string, _provincia: string)
    {
        this.calle = _calle;
        this.numero = _numero;
        this.piso = _piso;
        this.letra = _letra;
        this.codigoPostal = _codigoPostal;
        this.poblacion = _poblacion;
        this.provincia = _provincia;

    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(value: string) {
        this.calle = value;
    }

    public getNumero(): number {
        return this.numero;
    }

    public setNumero(value: number) {
        this.numero = value;
    }

    public getPiso(): string {
        return this.piso;
    }

    public setPiso(value: string) {
        this.piso = value;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(value: string) {
        this.letra = value;
    }

    public getCodigoPostal(): number {
        return this.codigoPostal;
    }

    public setCodigoPostal(value: number) {
        this.codigoPostal = value;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public setPoblacion(value: string) {
        this.poblacion = value;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(value: string) {
        this.provincia = value;
    }

}
