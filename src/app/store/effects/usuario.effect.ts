import { Injectable } from '@angular/core';

import {Actions, createEffect,ofType, act } from '@ngrx/effects';
import * as usuariosActions from '../actions/index';;
import { tap,mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects{
    
    constructor(
        private actions$:Actions,
        private usuariosService:UsuarioService
    ){}

    
    //tiene que regresar una accion y ya sea success o error
    cargarUsuario$=createEffect(
        ()=> this.actions$.pipe(
            ofType(usuariosActions.cargarUsuario),//solo estar pendiente de la accion de cargar usuarios
            tap(data=>console.log('effect tap ',data)),
            mergeMap(
                (action)=> this.usuariosService.getUserById(action.id).pipe(
                    tap(data=>console.log('getUsers effect ',data)),
                    map(user=>  {
                        console.log('usuario cargar usuario', user);
                        return usuariosActions.cargarUsuarioSuccess({usuario:user});
                    }),
                    catchError((err)=> of(usuariosActions.cargarUsuarioError({payload:err})))
                )
            )
        )
    );

}