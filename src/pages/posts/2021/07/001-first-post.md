---
title: "결국 개발 블로그를 만들었다 (feat. GatsbyJS)"
date: "2021-07-05 23:34"
author: "Jungwon Kim"
path: "/first-post"
image: "../../../../images/default-image.jpg"
tags:
  - blog
  - first post
---

## 고민의 과정

개발 블로그를 시작해야지 하면서 이제야 제대로 된 출발을 하게 됐다.<br/>
처음에는 다른 것에 신경쓰지 않고 글만 쓰고 싶어서 Hugo에 올라와 있는 템플릿 중 그나마 마음에 드는 것을 이용해서 블로그를 만들었다.

테마가 100% 마음에 들지 않다 보니, 계속해서 다른 테마를 기웃거리면서 시간을 보냈다.<br/>
물론 커스텀을 시도해 보았으나, 뭔가 조금씩 계속 아쉬웠다.

그래서 플랫폼을 이용하는 것도 생각을 했고, 정말 많이 고민을 했던 플랫폼은 `Velog`였다.<br/>
둘러보니 글도 정말 편하게 쓸 수 있었고 velog 유저들끼리의 커뮤니케이션도 활발해 보였다.<br/>
하지만 내 성격상 개발 블로그에 있어서 만큼은 직접 만들지 않는다면 분명히 계속 아쉬움을 계속 느낄 것이 너무나도 명확했다.

결국 이렇게 마음을 쏟지 못하고 애매한 상태로 블로그를 운영하느니, 내 입맛에 맞는 블로그를 스스로 만들어보자! 라는 결단과 함꼐 작업에 착수하게 된다.

## 그래서 Gatsby를 선택한 이유는?
1. 이름이 상당히 마음에 들었다. 그냥 개인적인 취향이다.
2. Docs가 깔끔하고 이해하기 쉬웠다.
3. 내가 주로 사용하는 React를 이용해서 개발할 수 있었다.
4. Gatsby는 GraphQL을 사용하는데, 작년 12월에 토이 플젝에서 사용했던 GraphQL의 향수가 나를 휘감았다.
5. 내가 원하는 기능과 관련된 플러그인들이 있었다. (RSS, 사이트맵 등)

RSS, 사이트맵은 내가 매번 수동적으로 생성해야 하는 것은 너무나도 귀찮은 작업인데, 우리의 아름다운 `Gatsby`는 이 모든 것을 해결할 수 있는 플러그인을 제공해준다!!


## 완성 후기
아직 100% 완성은 아니다. about 페이지도 비어있는 상태라서 채워 넣어야 한다.<br/>
중간에 막히는 부분이나 에러가 발생할 때 '내가 왜 직접 만들었을까.. 그냥 velog 이용할걸' 하는 생각이 꽤 많이 들었는데, 어쩔 수 없었다. 칼을 뽑았으면 무라도 베어야지. 중간에 만들다가 마는 것은 굉장히 찝찝한 일이다.


여하튼 내가 원하는 기능들만 깔끔하게 넣어서 만들었다. 간단한 페이징과 태그들을 모아주는 페이지.
확실히 애정이 듬뿍 담기게 되고 내거라는 느낌이 강하게 드는 것이 아주 만족스럽다.

평일에는 퇴근하고 저녁먹고 운동하고 와서 자기 전에 조금씩 작업을 했고, 주말에 좀 몰아쳐서 작업을 했다.<br/>
앞으로는 내가 공부한 것들과(TIL 느낌의?) 개발과 관련된 것들 중, 내가 기록으로 남기고 싶은 것들로 나의 블로그를 채워갈 예정이다.