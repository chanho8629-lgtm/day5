// 서버에서 게시글 목록 요청하기
const postService = (() => {
    const getList = async (callback) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const posts = await response.json();

            if (callback) {
                callback(posts);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return { getList: getList };
})();

// 받은 게시글 중 id가 짝수인 게시글의 아이디와 제목 출력하기
const printEvenIdAndTitle = (posts) => {
    posts
        .filter((post) => post.id % 2 === 0)
        .forEach((post) => {
            console.log(post.id, post.title);
        });
};
postService.getList(printEvenIdAndTitle);

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력
// 댓글 목록 요청하기
const commentService = (() => {
    const getList = async (callback, page = 1) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/comments"
            );

            const comments = await response.json();

            if (callback) {
                callback(comments);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return { getList: getList };
})();

//postId가 3인 댓글 출력
const printPostId3Comments = (comments) => {
    comments
        .filter((comment) => comment.postId === 3)
        .forEach((comment) => {
            console.log(comment.postId, comment.body);
        });
};
commentService.getList(printPostId3Comments);

// 전달받은 회원들 중, zipcode만 출력
// 회원 목록 요청하기
const userService = (() => {
    const getList = async (callback, page = 1) => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

            const users = await response.json();

            if (callback) {
                callback(users);
            }
        } catch (err) {
            console.log(err);
        }
    };
    return { getList: getList };
})();

// zipcode만 출력하기
const printUserZipcodes = (users) => {
    users.forEach((user) => {
        console.log(user.name, user.address.zipcode);
    });
};
userService.getList(printUserZipcodes);

// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.
