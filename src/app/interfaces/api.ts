export interface Grupo {
    url: string;
    nombre: string;
    fecha: boolean;
    quehacer_set: QueHacer[];
}

export interface QueHacer {
    url: string;
    tarea: string;
    realizado: boolean;
}
