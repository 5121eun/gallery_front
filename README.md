# Gallery 프론트엔드
## 설명
사진 공유 사이트

<br/>

## 사용 툴
![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](	https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)

![image](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![image](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green)
![image](https://img.shields.io/badge/django%20rest-ff1709?style=for-the-badge&logo=django&logoColor=white)
![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

<br/>

## 주요기능
### 회원가입  
![join](https://github.com/5121eun/gallery_front/assets/121006954/b9315323-65c8-4f68-8d02-2fe487be7514)

- [JoinPage](https://github.com/5121eun/gallery_front/blob/main/app/account/join/page.tsx#L3)
- [JoinForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/account/join/joinform.tsx#L13) - zod를 통해 유효성 검사 후 회원가입 API 호출
<br/>

### 로그인  
![login](https://github.com/5121eun/gallery_front/assets/121006954/21f27af5-94d2-437f-9153-03e6a78c332a)

- [LoginPage](https://github.com/5121eun/gallery_front/blob/main/app/account/login/page.tsx#L3)
- [LoginForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/account/login/loginform.tsx#L13) - zod를 통해 유효성 검사 후 로그인 API 호출
<br/>

### 글 작성
![create](https://github.com/5121eun/gallery_front/assets/121006954/5f1dc5e0-fd53-41c5-a6e6-737aea684652)

- [PostCreatePage](https://github.com/5121eun/gallery_front/blob/main/app/post/create/page.tsx#L3)
- [PostCreatForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/create/post-create-form.tsx#L14)
- [Dropzone](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/dropzone.tsx#L6) - 드래그 앤 드롭 파일 첨부 구현
- [Tags](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/tags.tsx#L13) - 태그 자동완성 구현
<br/>

### 메인 페이지 및 글 조회
![show](https://github.com/5121eun/gallery_front/assets/121006954/a85fabf4-933f-4282-84ab-165e87d22049)

- [MainPage](https://github.com/5121eun/gallery_front/blob/main/app/page.tsx#L7) - 로딩 스켈레톤 구현
- [Search](https://github.com/5121eun/gallery_front/blob/main/app/ui/search.tsx#L8) - 검색 기능 및 자동 완성 기능 구현
- [Gallery](https://github.com/5121eun/gallery_front/blob/main/app/ui/gallery.tsx#L10) - 그리드 레이아웃 및 페이지 크기에 따른 맞춤형 갤러리 배치 구현
<br/>

- [PostDetailPage](https://github.com/5121eun/gallery_front/blob/main/app/post/%5Bid%5D/detail/page.tsx#L6) - 로딩 스켈레톤 구현
- [PostDetailForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/detail/post-detail-form.tsx#L16)
  
