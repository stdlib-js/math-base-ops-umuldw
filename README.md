<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# umuldw

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the double word product of two unsigned 32-bit integers.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-ops-umuldw
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var umuldw = require( '@stdlib/math-base-ops-umuldw' );
```

#### umuldw( \[out,] a, b )

Multiplies two unsigned 32-bit integers and returns an `array` of two unsigned 32-bit integers (in big endian order) which represents the unsigned 64-bit integer product.

```javascript
var v = umuldw( 1, 10 );
// returns [ 0, 10 ]

v = umuldw( 0x80000000, 0x80000000 ); // 2^31 * 2^31 = 4611686018427388000 => 32-bit integer overflow
// returns [ 1073741824, 0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   When computing the product of 32-bit integer values in double-precision floating-point format (the default JavaScript numeric data type), computing the double word product is necessary in order to **avoid** exceeding the [maximum safe double-precision floating-point integer value][@stdlib/constants/float64/max-safe-integer].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var lpad = require( '@stdlib/string-left-pad' );
var umuldw = require( '@stdlib/math-base-ops-umuldw' );

var i;
var j;
var y;

for ( i = 0xFFFFFFF0; i < 0xFFFFFFFF; i++ ) {
    for ( j = i; j < 0xFFFFFFFF; j++) {
        y = umuldw( i, j );
        console.log( '%d x %d = 0x%s%s', i, j, lpad( y[0].toString( 16 ), 8, '0' ), lpad( y[1].toString( 16 ), 8, '0' ) );
    }
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/ops/imuldw`][@stdlib/math/base/ops/imuldw]</span><span class="delimiter">: </span><span class="description">compute the double word product of two signed 32-bit integers.</span>
-   <span class="package-name">[`@stdlib/math/base/ops/umul`][@stdlib/math/base/ops/umul]</span><span class="delimiter">: </span><span class="description">perform C-like multiplication of two unsigned 32-bit integers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-ops-umuldw.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-ops-umuldw

[test-image]: https://github.com/stdlib-js/math-base-ops-umuldw/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-ops-umuldw/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-ops-umuldw/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-ops-umuldw?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-ops-umuldw.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-ops-umuldw/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-ops-umuldw/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-ops-umuldw/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-ops-umuldw/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-ops-umuldw/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-ops-umuldw/main/LICENSE

[@stdlib/constants/float64/max-safe-integer]: https://github.com/stdlib-js/constants-float64-max-safe-integer

<!-- <related-links> -->

[@stdlib/math/base/ops/imuldw]: https://github.com/stdlib-js/math-base-ops-imuldw

[@stdlib/math/base/ops/umul]: https://github.com/stdlib-js/math-base-ops-umul

<!-- </related-links> -->

</section>

<!-- /.links -->
