![Static Badge](https://img.shields.io/badge/https%3A%2F%2Fgithub.com%2Fhuysynf%2Fnpm-package-example)
# install 
```
npm install @@huyhq_syn/divide
```
# usage 

```javascript
const divide = require('@huyhq_synf/divide');

let divideNumber = divide(1,2);
```
{
  "name": "@huyhq_syn/divide",// tên npm/tên thư project
  "version": "2.0.0", // phiên bản
  "description": "divide 2 number", // mô tả
  "license": "MIT", // license
  "repository": "huysynf/npm-package-example",// github
  "main": "index.js", // file chạy chính
  "keywords": [  // từ khoá
    "divide",
    "npm",
    "package",
    "huysynf"
  ]
}

```

# tạo link github và push code lên 
# sử dụng trang https://shields.io/badges để tạo bage![Alt text](image.png)
# tạo file index.js export code của thư viện ví dụ
```
module.exports = function divide(a, b) {
    if (!a || !b) {
        return null;
      }
      if (!a || !b || a === "0" || b === "0" || typeof a === "string" || typeof b === "string") {
        return 0;
      }
      return a / b;
};

```

# commit và push lên gihub

#push lên trên npm 
```
npm publish
```

# lưu ý khi thay đổi code phải tạo version mới bằng và push lên npm
```
npm version major


```