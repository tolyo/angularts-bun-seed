export default function HomePage() {
    const tsxValue = 42;
  
    return (
      <html>
        <head>
          <script src="https://cdn.jsdelivr.net/npm/@angular-wave/angular.ts/dist/angular-ts.umd.min.js"></script>
        </head>
        <body ng-app="">
          <div>
            <h1 ng-init= {`a = ${tsxValue}`}>
              { "Angular with TSX init: {{ a + 2 }}" }
            </h1>
  
            <h1 ng-init="b = 2">
              <span>{`TSX with Angular init: {{ b + ${tsxValue} }}`}</span>
            </h1>
          </div>
        </body>
      </html>
    );
  }
  