<h3 align="center">
  <img src="https://user-images.githubusercontent.com/58083563/115131968-a67b9e80-9fd2-11eb-8af7-0bb44bbe3719.png" alt="NodeJS" width="150" />&nbsp&nbsp&nbsp&nbsp
  &nbsp
  <img src="https://user-images.githubusercontent.com/58083563/89603440-87bbea00-d83f-11ea-88f1-40ded3561784.png" alt="Typescript" width="150" />
</h3>
<h3 align="center">NodeJS + Typescript + TypeORM</h3>
<br>
<p align="center">
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wrench-Configuration">Configuration</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gift-Others-commands">Others</a>&nbsp;&nbsp;&nbsp;
</p>

## :rocket: Technologies

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Babel](https://babeljs.io/)
- [TypeORM](https://typeorm.io/#/)

## :wrench: Configuration

#### 1. Install all dependencies with

```sh
$ npm install 
```

or using yarn

```sh
$ yarn
```

#### 2. Start the dev server 

```sh
$ npm run dev
```

or using yarn

```sh
$ yarn dev
```

## :gift: Others commands

```sh
# Build (compiled to build/)
$ npm run build

# Run for production (needs npm run build first)
$ npm run start

# Run migrations
$ npm run typeorm migrate:run
```

or using yarn

```sh
# Build web (compiled to build/)
$ yarn build

# Run for production (needs yarn build first)
$ yarn start

# Run migrations
$ yarn typeorm migrate:run
```
