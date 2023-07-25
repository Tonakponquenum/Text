var likeCount = 3
var likeSpan1 = document.querySelector("#count-1");

function countLike() {
    likeCount++
    likeSpan1.innerText = likeCount + "like(s)"
}
