# Angular.__GB__
getting started
# instalacion
ANGULAR CLI https://angular.io/cli
con el siguiente comando instalamos angular cli de forma global esto no pormite crear proyectos angular
```bash
npm install -g @angular/cli 
ng version //? verificamos la version istalada
```
para crear un proyecto en angular
```bash
ng new nombredelproyecto
```
para rodarlo
```bash
ng serve
```
crear un nuevo componente 
```bash
ng generate component hello-world
```
para hacer un buque for
```bash
*ngFor="let user of users"
```
para hacer un buque if
```bash
*ngIf="activate"
```
para hacer imputs
```bash
archivo.html
*ngFor="let user of users" [nameUser]="user"
archivo.ts
class {
@input() nameUser;
}
```
