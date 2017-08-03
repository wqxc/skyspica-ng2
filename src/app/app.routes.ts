import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {MainFirstComponent} from './main-first/main-first.component';
import {MainSecondComponent} from './main-second/main-second.component';
export const appRoutes=[
	{
		path:'',
		redirectTo:'main-first',
		pathMatch:'full'
	},
	{
		path:'main-first',
		component:MainFirstComponent
	},
	{
		path:'main-second',
		component:MainSecondComponent
	},
];
