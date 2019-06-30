import firebase from 'firebase';
import uuid from 'uuid';
// import Article from '../model/Article';

export function addArticle({ file, content, userId, userDisplayName, userProfileUrl, }) {
    const fileName = uuid.v1();
    const extension = file.name.split('.').pop();
    const url = `article/${fileName}.${extension}`;
    const articleRef = firebase.storage().ref().child(url);
    return articleRef.put(file)
        .then((snapshot) => {
            return snapshot.ref.getDownloadURL();
        })
        .then((downloadUrl) => {

            const articleId = uuid.v1();

            return firebase.firestore().collection('articles').doc(articleId).set({
                id: articleId,
                downloadUrl,
                content,
                userId,
                userDisplayName,
                userProfileUrl,
                likeCnt: 0,
                commentCnt: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        })
}


export function getArticleList(lastItem, count) {
    const limitCount = count || 30;
    if (lastItem) {

        return firebase.firestore().collection("articles")
            .orderBy("createdAt", "desc")
            .startAfter(lastItem)
            .limit(limitCount)
            .get()
    } else {
        return firebase.firestore().collection("articles")
            .orderBy("createdAt", "desc")
            .limit(limitCount)
            .get()
    }




}

export function getArticleItem(articleId) {
    return firebase.firestore().collection('articles').doc(articleId).get();
}



export function getCommentList(articleId, lastItem, count) {
    const limitCount = count || 5;
    if (lastItem) {

        return firebase.firestore().collection("comments")
            .where("articleId", articleId)
            .orderBy("createdAt", "desc")
            .startAfter(lastItem)
            .limit(limitCount)
            .get()
    } else {
        return firebase.firestore().collection("comments")
            .where("articleId", articleId)
            .orderBy("createdAt", "desc")
            .limit(limitCount)
            .get()
    }

}


export function addComment(userId, userDisplayName, userProfileUrl, content, articleId) {
    const commentId = uuid.v1();


    return firebase.firestore().collection('comments').doc(commentId).set({
        id: commentId,
        articleId,
        userId,
        userDisplayName,
        userProfileUrl,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
        displayTimstamp: new Date().toDateString().substring(0, 10)
    });
}




export function deleteArticle(articleId) {
    return firebase.firestore().collection('articles').doc(articleId).delete();
}


export function deleteComment(commentId) {
    return firebase.firestore().collection('comments').doc(commentId).delete();
}