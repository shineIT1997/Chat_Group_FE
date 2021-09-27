# react-start-kit

> A react project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run start

# build for production with minification
npm run build

# run tests
npm test

# API proxy config
package.json proxy
```

## Work space

``` bash
└── src
    ├── index.js    # main app
    ├── App.js      # main app component
    ├── layouts     # app layout components
    ├── routes      # app routes
    ├── store       # app redux-store
    ├── modulus     # app modulus
    │   ├── core    # core module
    │   │   ├── components  # app simple component (home, 404, 403)
    │   │   ├── routes.js   # register react-router
    │   │   └── service.js  # abstractions for making API requests
    │   │
    │   ├── todo    # todo module [demo] [API]
    │   │   ├── components  # module components
    │   │   ├── routes.js   # module router
    │   │   └── service.js  # module service
    │   │
    │   ├── test    # test module [demo] [!API]
    │   │   ├── components  # module components
    │   │   ├── routes.js   # module router
    │   │   └── service.js  # module service
    │   │
    │   └── ...
    │
    ├── styles      # global - helper style
    └── utils       # utility functions
```

### Util plugins:
|     Plugin          |     Installed location  |
|     ------------    |     -----------         |
| HTTP client | [axios](https://github.com/axios/axios) |

<!-- Todo
### Commands (run with node)

`vue-start-kit` responds to the following commands:

Example: `node commander addModule --name="todo"`
|     Command          |     Description  |
|     ------------     |     -----------  |
|     ------------     |     -----------  |
|     ------------     |     -----------  | -->
