// 서버에서 게시글 목록 요청하기
// 받은 게시글 중 id가 짝수인 게시글의 아이디와 제목 출력하기

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력

// 전달받은 회원들 중, zipcode만 출력

// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.

async function getEvenPostTitles() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  posts
    .filter(post => post.id % 2 === 0)
    .forEach(post => {
      console.log(`id: ${post.id}, title: ${post.title}`);
    });
}

getEvenPostTitles();

async function getCommentsByPostId3() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();

  comments
    .filter(comment => comment.postId === 3)
    .forEach(comment => {
      console.log(comment.body);
    });
}

getCommentsByPostId3();

async function getUserZipcodes() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  users.forEach(user => {
    console.log(user.address.zipcode);
  });
}

getUserZipcodes();

async function getAlbumsByUser5() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const albums = await res.json();

  albums
    .filter(album => album.userId === 5)
    .forEach(album => {
      console.log(`userId: ${album.userId}, title: ${album.title}`);
    });
}

getAlbumsByUser5();
