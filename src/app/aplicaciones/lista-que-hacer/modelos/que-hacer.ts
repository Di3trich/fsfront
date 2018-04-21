export class QueHacer {
    id: number;
    titulo: string;
    completado: boolean;

    constructor(titulo: string, completado: boolean = false) {
        this.titulo = titulo;
        this.completado = completado;
    }
}
