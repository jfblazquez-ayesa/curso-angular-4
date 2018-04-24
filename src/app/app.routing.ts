import { Routes, RouterModule } from "@angular/router";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ReactiveFormsComponent } from "./components/reactive-forms/reactive-forms.component";
import { ActiveUserComponent } from "./components/active-user/active-user.component";
import { EjercicioReactiveFormComponent } from "./components/ejercicio-reactive-form/ejercicio-reactive-form.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RoutingComponent } from "./components/routing/routing.component";
import { RoutingChildComponent } from "./components/routing-child/routing-child.component";
import { ParentComponent } from "./components/parent/parent.component";
import { EjercicioDirectivaParentComponent } from "./components/ejercicio-directiva-parent/ejercicio-directiva-parent.component";
import { ContactosComponent } from "./components/contactos/contactos.component";

export const APP_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'data-binding' },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'contacts', component: ContactosComponent },
    // Este componente lo vamos a representar en otro <router-outlet>
    { path: 'pipes', component: PipesComponent, outlet: "menu2" },
    { path: 'forms', component: FormsComponent },
    { path: 'reactive-forms', component: ReactiveFormsComponent },
    { path: 'active-user', component: ActiveUserComponent },
    { path: 'ejercicio-reactive-forms', component: EjercicioReactiveFormComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'routes', component: RoutingComponent },
    { path: 'ejercicio-directiva-parent', component: EjercicioDirectivaParentComponent },
    { path: 'routes/:id', component: RoutingComponent, children: [{
        path: 'editar', component: RoutingChildComponent
    }]},
    { path: '**', component: PageNotFoundComponent }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);