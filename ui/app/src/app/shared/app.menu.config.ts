import { MenuRootItem } from 'ontimize-web-ngx';

import { ScorekaartKandidaatCardComponent } from './ScorekaartKandidaat-card/ScorekaartKandidaat-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'ScorekaartKandidaat', name: 'SCOREKAARTKANDIDAAT', icon: 'view_list', route: '/main/ScorekaartKandidaat' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    ScorekaartKandidaatCardComponent

];