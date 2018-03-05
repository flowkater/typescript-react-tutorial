# TypeScript 정리

```
create-react-app typescript-react-tutorial --scripts-version=react-scripts-ts
```

- create-react-app 으로 script-version 설정해서 생성

```
yarn add redux react-redux immutable redux-actions
yarn add --dev @types/redux @types/react-redux @types/immutable @types/redux-actions
```

- 라이브러리를 추가할때 --dev @types/ 를 통해서 추가해야한다.
- warning이 뜨면서 원래 추가되어있는 라이브러리는 다시 remove 해주면 된다.

## 써보니 장점

- 타입을 강제하니 개발할때 조금 더 구조에 대해서 고민을 하게 됨 (기존에는 일단 짜놓고 타입을 맞춰보는 경우가 종종 있엇음. 해당 부분이 정리가 안되 추후 개발 유지보수가 힘들어지거나 에러가 유발되었음)
- 무엇보다 vscode 의 자동완성. src 루트 폴더로 바로 import 했을때나 bindCreateAction 등을 통해서 묶어서 바인딩 했을때는 자동완성이 지원이 안되는데 모두 자동완성 및 Go to Definition 가능

## 생각해보아야할/신경써야할 부분

- 타입캐스팅
- ? -> null 지원
- TodoItemData 를 정의를 할때 생성자에서 id 세팅이 있는데 이 부분을 한 번 다시 봐야함.
- 타입지원에서는 Map 보다는 Record
- handleAction 리듀서 만들때 타입 캐스팅을 해줘야함 <TodosState>, as TodosState
- 구조를 잘 구성해서 모듈화를 잘하고 원칙을 지켜나가자.
- 타입스크립트 자체에 대한 이해도를 높일 필요가 있음.

[참고글](https://velopert.com/3595)