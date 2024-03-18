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
![join-ezgif com-video-to-gif-converter](https://github.com/5121eun/gallery_front/assets/121006954/05fd4613-1fb9-49be-9c37-cb49245ee886)

- [JoinPage](https://github.com/5121eun/gallery_front/blob/main/app/account/join/page.tsx#L3)
- [JoinForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/account/join/joinform.tsx#L13) - zod를 통해 유효성 검사 후 회원가입 API 호출
<br/>

### 로그인  
![login-ezgif com-video-to-gif-converter](https://github.com/5121eun/gallery_front/assets/121006954/b4e5b66e-fc8c-472f-aa9f-fa831f20f109)


- [LoginPage](https://github.com/5121eun/gallery_front/blob/main/app/account/login/page.tsx#L3)
- [LoginForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/account/login/loginform.tsx#L13) - zod를 통해 유효성 검사 후 로그인 API 호출
<br/>

### 글 작성
![post_create-ezgif com-video-to-gif-converter](https://github.com/5121eun/gallery_front/assets/121006954/1f5f9825-f993-4867-bc07-a0b01b805b80)


- [PostCreatePage](https://github.com/5121eun/gallery_front/blob/main/app/post/create/page.tsx#L3)
- [PostCreatForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/create/post-create-form.tsx#L14)
- [Dropzone](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/dropzone.tsx#L6) - 드래그 앤 드롭 파일 첨부 구현
- [Tags](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/tags.tsx#L13) - 태그 자동완성 구현
<br/>

### 메인 페이지 및 글 조회
![post_detail-ezgif com-video-to-gif-converter](https://github.com/5121eun/gallery_front/assets/121006954/17a4b5b4-8605-4bd8-9db1-b337b637bd85)

- [MainPage](https://github.com/5121eun/gallery_front/blob/main/app/page.tsx#L7) - 로딩 스켈레톤 구현
- [Search](https://github.com/5121eun/gallery_front/blob/main/app/ui/search.tsx#L8) - 검색 기능 및 자동 완성 기능 구현
- [Gallery](https://github.com/5121eun/gallery_front/blob/main/app/ui/gallery.tsx#L10) - 그리드 레이아웃 및 페이지 크기에 따른 맞춤형 갤러리 배치 구현
<br/>

- [PostDetailPage](https://github.com/5121eun/gallery_front/blob/main/app/post/%5Bid%5D/detail/page.tsx#L6) - 로딩 스켈레톤 구현
- [PostDetailForm](https://github.com/5121eun/gallery_front/blob/main/app/ui/post/detail/post-detail-form.tsx#L16)
  
