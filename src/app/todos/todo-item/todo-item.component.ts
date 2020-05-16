import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toogle, editar, borrar } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  /* con esta directiva de angular recibo el objeto todo de todos que me envia el template
  todo-list.component.ts */
  @Input() todo: Todo;
  @ViewChild('inputfisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required);

    this.chkCompletado.valueChanges.subscribe( valor => {
      this.store.dispatch(toogle( {id: this.todo.id} ) );
    } );
  }

  editar(){
    this.editando = true;
    this.txtInput.setValue( this.todo.texto );

    setTimeout( () => {this.txtInputFisico.nativeElement.select(); }, 1);

  }

  terminarEdicion(){
    this.editando = false;
    if (this.txtInput.invalid){ return; }
    if (this.txtInput.value === this.todo.texto){ return; }

    this.store.dispatch(editar(
      {id: this.todo.id,
       texto: this.txtInput.value
      }));
  }

  borrar(){
    this.store.dispatch(borrar( {id: this.todo.id }));
  }

}
