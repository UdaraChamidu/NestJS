# NestJS

### install globally: npm install -g @nestjs/cli
### create a new project: nest new project_name
### decorators: @Module(), @Controller(), @Injectable()
- app.module.ts: same as App.jsx in react
- logics: seperate into services and controllers.
- controllers: handling incoming requests and returning responces
- services/providers: executing the business logic

- request from the internet(login a user) -> controller (it calls to a function of service) -> service -> again controller 

