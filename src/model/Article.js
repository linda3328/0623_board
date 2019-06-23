export default class Article {
    constructor(
        id,
        imageUrl,
        content,
        userId,
        userDisplayName,
        userProfileUrl,
        lickCnt,
        commentCnt,
        createAt,
        updatedAt
    ) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.content = content;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.userProfileUrl = userProfileUrl;
        this.lickCnt = lickCnt;
        this.commentCnt = commentCnt;

        this.createAt = createAt;
        this.updatedAt = updatedAt;
    }



}