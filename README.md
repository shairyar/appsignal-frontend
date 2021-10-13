## Installation

Clone this repo and npm install.

```bash
npm i
```

## AppSignal integration

Add your frontend api key [here](https://github.com/shairyar/appsignal-frontend/blob/master/src/js/example.js#L3).


## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080`. This application will raise an [exception](https://github.com/shairyar/appsignal-frontend/blob/master/src/js/example.js#L22) which will be [caught](https://github.com/shairyar/appsignal-frontend/blob/master/src/js/example.js#L14) and [sent](https://github.com/shairyar/appsignal-frontend/blob/master/src/js/example.js#L15-L18) to AppSignal.

## License

This project is open source and available under the [MIT License](LICENSE).
