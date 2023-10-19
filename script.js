//your code here
let arr = ['Tajmahal', 'The Virupaksha Temple', 'Victoria Memorial'];

function getArticleLessString(input) {
    
    let words = input.split(" ");
    let nonArticleWords = words.filter(
        // words = [ "The", "tajmahal", "an", "umberilla" ] 
        (word) => {
            let smallCaseWord = word.toLowerCase();
            if(smallCaseWord === "the" || smallCaseWord === "an" || smallCaseWord === "a"){
                return false;
            }
            return true ;
        }
    );

    // nonArticleWords = [ "tajmahal", "umberilla" ]

    return nonArticleWords.join(" "); //  "tajmahal umberilla"
}

arr.sort((a)=>getArticleLessString(a))




















