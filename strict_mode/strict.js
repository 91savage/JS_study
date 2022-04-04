// 전역에 strict mode의 적용하는 것은 바람직하지 않다.

// 'use strict';

// function foo() {
//     x=10;
// }

// foo();

//함수 단위로 strict mode 적용

// function foo() {
//     'use strict';

//     x=10;
// }
// foo();


function foo() {
    x=10; //에러를 발생시키지 않는다.
    'use strict';
}

foo();