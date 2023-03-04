import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CounterComponent } from "./counter.component";


const routes :Routes = [{
    path: '',
    component: CounterComponent,
  }]

@NgModule({
    declarations:[CounterComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        RouterModule.forChild(routes)
    ]
})

export class CounterModule {}