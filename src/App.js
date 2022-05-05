
import React, {Component} from 'react';
import './App.css';
import { UserServices } from './service/userService';
import {DataTable} from 'primereact/datatable';
import{Column} from 'primereact/column';
import{Panel} from 'primereact/panel';

import 'primereact/resources/themes/nova-accent/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class App extends Component{

  constructor(){
    super();
    this.state = {};
    this.usuarioService = new UserServices();
  }
  componentDidMount(){
    this.usuarioService.usuarioAll().then( data => this.setState({usuarios:data}))
  }

render(){
  return(
  <Panel header="Usuarios" style={{width:'80%', marginTop:'20px', margin:'0 auto'}}>
  <DataTable value= {this.state.usuarios}>
    <Column field= "usuarioide" header= "ID"></Column>
    <Column field= "usuarionombre" header= "nombre usuario"></Column>
    <Column field= "usuariopass" header= "pass"></Column>
    <Column field= "usuarioestado" header= "estado"></Column>
  </DataTable>
  </Panel>
  );
}
}