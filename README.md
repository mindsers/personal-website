![Repo header image](https://repository-images.githubusercontent.com/217519248/74458700-5118-11ea-9d97-7563f10f9067)

# @mindsersit/website

_"MindsersIT Website"_ is a portfolio and freelance showcase for [nathanaelcherrier.com](https://nathanaelcherrier.com). This part of the site is based on [Angular](https://angular.com).

This repo host the Angular application that powers [nathanaelcherrier.com](https://nathanaelcherrier.com).

## Getting started

```bash
yarn --pure-lockfile
```

As this is a localized application you need to specify the language when you start the project (even in development mode):

```bash
yarn start
```

Navigate to `http://localhost:4200/en/`. The app will automatically reload if you change any of the source files.

To load different language you have to specify it like `yarn start:fr`. You can then access to the website at `http://localhost:4200/fr/`. Available languages are listed in the `package.json`.

### Production build

A command helps you build the project targetting a production environment.

```bash
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## License

MIT License

**Copyright (c) 2012 Nathanaël CHERRIER**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
