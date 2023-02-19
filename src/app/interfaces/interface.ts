export interface InfoPagina {
  titulo?: string;
  email?: string;
  nombre_corto?: string;
  pagina_autor?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  tublr?: string;
  equipo_trabajo?: any[];
}

/* export interface BaseDatos {
  Equipo:        MiembroEquipo[];
  productos:     { [key: string]: Producto };
  productos_idx: ProductoIdx[];
} */

export interface MiembroEquipo {
  Email?:  string;
  Frase?:  string;
  Nombre?: string;
  Puesto?: string;
  Url?:    string;
}

export interface Producto {
  categoria?:  string;
  desc1?:      string;
  desc2?:      string;
  producto?:   string;
  resumen?:    string;
  subtitulo1?: string;
  subtitulo2?: string;
}

export interface ProductoIdx {
  categoria?: any;
  cod?:       string;
  titulo?:    any;
  url?:       string;
}
