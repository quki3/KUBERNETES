# Angular.__GB__
getting started
- Documentacion muy interezante https://github.com/angular
# instalacion
ANGULAR CLI https://angular.io/cli
con el siguiente comando instalamos angular cli de forma global esto no pormite crear proyectos angular
```bash
npm install -g @angular/cli 
ng version //? verificamos la version istalada
ng --version //? idem
```
para crear un proyecto en angular
```bash
ng new nombredelproyecto
```
dentro de la carpeta creada por angular tenemosel archivo angular.json
```json

```
para rodarlo
```bash
ng serve
ng --port 4600 //? cambia el puerto que se levanta la ap
ng build --prod //? crea la caarpeta dist
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
