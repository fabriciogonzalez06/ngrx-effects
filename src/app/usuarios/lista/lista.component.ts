import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  public usuarios:Usuario[]=[];
  public loading:boolean=false;
  error:any;


  constructor(private store:Store<AppState>) { }



  ngOnInit(): void {
    /**this.usuarioService.getUsers().subscribe(users=>{
      console.log(users);
      this.usuarios=users;
    });
    */
   this.store.select('usuarios').subscribe(({users,loading,error})=>{
     this.usuarios=users;
     this.loading=loading;
     this.error=error;
   });
   this.store.dispatch(cargarUsuarios());
  }

}
