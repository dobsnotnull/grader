function getLetterGrade(score) {

    if (score >= 70) {
        return "A";
    }

    if (score >= 60) {
        return "B";
    }

    if (score >= 50) {
        return "C";
    }

    if (score >= 45) {
        return "D";
    }

    if (score >= 40) {
        return "E";
    }

    return "F"
}

function hasPassed(score) {

    if (score >= 40) {
        return true

    } else {
        return false
    }
    
}

function getFeedback(grade) {

    if (grade === "A") {
        return "Greatness";
    }

    if (grade === "B") {
        return "Almost at greatness kilo, try harder";
    }

    if (grade === "C") {
        return "Keep trying bro";

    } else {
        return "No more way for poor people💔";
    }

}

function createGradeReport(name, score) {

    const grade = getLetterGrade(score);

    return {

        name: name,
        score: score,
        grade: grade,
        passed: hasPassed(score),
        feedback: getFeedback(grade)

    };
}

console.log (createGradeReport("Doubra", 98));