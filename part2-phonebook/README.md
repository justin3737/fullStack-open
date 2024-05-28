# LINE BC 前端專案

### Technology Stack

Yarn, React, Typescript, TailwindCSS, Vite...

### 遵循 React 設計規範

-   [官網文件](https://react.dev/)

# Getting Started

### Setup your project

```
1. Upgrade your nodejs above 16
2. Run `npm install yarn --g`
3. Run `yarn`
```

`Tip1`: [Yarn](https://yarnpkg.com/) docs.

### Available commands

##### Run in development mode

```
yarn dev
```

##### Create production build

```
yarn build
```

##### Run ESLint linting

```
yarn lint
```

##### Run ESLint linting and fix

```
yarn lint:fix
```

`Tips`: Please follow [Airbnb JS Style Guide](https://github.com/airbnb/javascript) and [Airbnb React Style Guide](https://github.com/airbnb/javascript/tree/master/react)

##### Run ESLint linting and type check

```
yarn validate
```

`Tips`: This command will be automatically executed before each git push.

### VSCode Extensions

Install all extensions on your recommend view.

# File Structure

```
root/
├───.env[.production]        環境變數設定
├───.eslintignore            eslint ignore 設定檔
├───.eslintrc                eslint 設定檔
├───.gitignore
├───.prettierignore
├───.prettierrc.json
├───package.json
├───postcss.config.js        css 設定檔
├───README.md
├───tailwind.config.js       tailwindcss 設定檔
├───tsconfig.json            typescript 設定檔
├───vite.config.js           vite 設定檔，主要專案建置工具
├───yarn.lock
│
└───.vscode/
│   ├───extensions.json      vscode 擴充元件推薦列表
│   └───settings.json        vscode 設定檔(formatter, formatOnSave, cSpell whitelist)
│
└───tools/                   建置工具/輔助工具等 (ex: sourcemap or CI/CD scripts)
│   │   ...
│
├───public/                  靜態檔案
│   ├───images/
│   ├───fonts/               字型
│   ├───venders/             第三方套件
│   │   ...
│
└───src/
    ├───app/
    │   ├─ App.tsx
    │   ├─ index.tsx
    │   ├─ index.css
    │   ├─ routes.tsx
    │
    │
    ├───components/
    │   │   {component}/            UI components
    │   │   ├───{Component}.tsx
    │   │   ├───types.ts
    │   │   ├───index.ts
    │   │   ├───{subComponent}/
    │   │   ...
    │
    ├───hooks/
    │   │   {hooks}/
    │   │   ├───{hooks}.tsx　
    │   │   ├───index.ts
    │   │   ├───types.ts
    │   │   ...
    │
    │
    ├───pages/              功能頁面
    │   │   {功能代碼}/
    │   │   ├───components/ 特定頁面功能使用的元件
    │   │   ├───states/　　　特定頁面功能使用的狀態
    │   │   ├───{Feature}Page.tsx
    │   │   ├───types.ts
    │   │   ├───index.ts
    │   │   ...
    │
    ├───routes/             頁面路由
    │   │   routes.tsx      主路由設定檔
    │
    ├───types/              共用類型別檔
    │   ├───{features}.types.ts
    │   ├───{features}.enums.ts
    │   │   ...
    │
    ├───utils/              helpers/common/constants
    │   │   ...
    │
    ├───vite-env.ts         vite 環境變數型別定義
    │   ...

```

### 命名規則

資料夾與`非`元件類檔案統一小駝峰，元件類(src/components)檔案統一大駝峰

#### 功能頁面 /src/pages/...

-   格式：/src/pages/{功能名稱}{功能類型}{元件類型}.tsx
-   功能類型：
    -   查詢頁 List
    -   流程
        -   設定頁 Setting
        -   確認頁 Confirm
        -   結果完成頁 {State}Result
-   範例：
    -   /src/pages/{功能名稱}/TwdDepositSettingPage.tsx
    -   /src/pages/{功能名稱}/TwdDepositSettingPage.test.ts
    -   /src/pages/{功能名稱}/types.ts
    -   /src/pages/{功能名稱}/index.ts

#### 共用元件 /src/components/...

-   格式：/src/components/{功能名稱}/{功能名稱}.tsx
-   Rule：`經常重複使用`的共用元件或`全站顯示`的元件放在 components 資料夾底下，並依據功能名稱命名資料夾，相同類型或相關元件會放置在同一個功能資料夾中
-   範例：
    -   /src/components/button/Button.tsx
    -   /src/components/button/Button.test.ts
    -   /src/components/button/ScrollTopButton.tsx
    -   /src/components/button/ScrollTopButton.test.tsx
    -   /src/components/button/types.ts
    -   /src/components/button/index.ts
