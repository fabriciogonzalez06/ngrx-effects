import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const cargarUsuario= createAction(
    '[Usuario] Cargar Usuario',
      props<{id:string}>()
    );

export const cargarUsuarioSuccess= createAction(
    '[Usuarios] Cargar Usuario Succss',
    props<{usuario:Usuario}>()
);

export const cargarUsuarioError=createAction(
    '[Usuario]  Cargar Usuario Error',
    props<{payload:any}>()
    );
