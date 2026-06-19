# 강경성 이력서 포트폴리오 프로젝트

## 프로젝트 개요
- 강경성(kkyeongss)의 웹 개발자 이력서를 React로 구현한 정적 포트폴리오 사이트
- GitHub Pages에 배포: https://kkyeongss.github.io/resume
- 로컬 개발 서버: http://localhost:5173/resume/

## 기술 스택
- React 19 + Vite
- 테마: 미니멀 (minimal.css)
- 데이터: src/data/resume.json (모든 이력서 내용은 여기서만 수정)
- 배포: `npm run deploy` (gh-pages로 dist 폴더 배포)

## 배포 방법
```bash
npm run deploy  # 빌드 + GitHub Pages 자동 배포
```

## 프로젝트 구조
```
src/
  data/resume.json       # 이력서 데이터 (수정은 여기서만)
  components/
    ResumeContent.jsx    # 이력서 렌더링 컴포넌트
  themes/
    minimal.css          # 미니멀 테마 스타일
  App.jsx
  main.jsx
public/
  photo.jpg              # 프로필 사진
```

## 절대 잊으면 안 되는 규칙

### 데이터 수정
- 내용 변경은 반드시 `src/data/resume.json`만 수정
- 컴포넌트나 CSS는 레이아웃/스타일 변경 시에만 건드릴 것

### 이미지 경로
- public 폴더 이미지는 반드시 `import.meta.env.BASE_URL` 사용
- 예: `src={${import.meta.env.BASE_URL}photo.jpg}`
- `/photo.jpg`로 쓰면 GitHub Pages에서 깨짐 (base가 /resume/이므로)

### Vite base 설정
- vite.config.js에 `base: '/resume/'` 설정되어 있음
- 로컬: http://localhost:5173/resume/
- 배포: https://kkyeongss.github.io/resume

### Git/배포
- SSH 키 등록 완료 (GitHub 연결됨)
- 수정 후 배포: `git add . && git commit -m "..." && npm run deploy`

## 작성자 정보 (resume.json 참고용)
- 이름: 강경성
- 이메일: rudtjd0811@gmail.com
- 전화: 010-5567-5228
- GitHub: https://github.com/kkyeongss
- 경력: 총 4년 1개월 (iM 데이터시스템 재직 중)
- 사이드 프로젝트: Piggy (https://piggynote.duckdns.org/)

## 콘텐츠 원칙
- 과장 금지: 실제 한 일만 담담하게 기술
- 개발과 무관한 자격증은 제외 (사회복지사, GTQ 등)
- 기술 스택에 REST API 같은 개념/방식은 넣지 않음
- 중복되는 항목 제거 (예: SQL은 Oracle/MSSQL/PostgreSQL로 대체)
