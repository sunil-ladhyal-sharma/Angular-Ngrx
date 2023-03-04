import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { FEATURE_NAME_CONSTANTS } from "../shared/constants/constants";
import { CounterComponent } from "./counter.component";
import { counterReducer } from "./state/counter.reducer";


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
        RouterModule.forChild(routes),
        StoreModule.forFeature(FEATURE_NAME_CONSTANTS.COUNTER_FEATURE_NAME, counterReducer)
    ]
})

export class CounterModule {}