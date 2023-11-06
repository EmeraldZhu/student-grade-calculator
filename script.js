function calculateGrade() {
    const studentName = document.getElementById("studentName").value;
    const assignment1 = parseFloat(document.getElementById("assignment1").value);
    const assignment2 = parseFloat(document.getElementById("assignment2").value);
    const cat = parseFloat(document.getElementById("cat").value);
    const finalExam = parseFloat(document.getElementById("finalExam").value);

    if (isNaN(assignment1) || isNaN(assignment2) || isNaN(cat) || isNaN(finalExam)) {
        document.getElementById("error").innerHTML = "All fields must be valid numbers.";
        return;
    }

    if (assignment1 < 0 || assignment1 > 100 || assignment2 < 0 || assignment2 > 100 || cat < 0 || cat > 100 || finalExam < 0 || finalExam > 100) {
        document.getElementById("error").innerHTML = "All fields must be between 0 and 100.";
        return;
    }

    const totalScore = assignment1 + assignment2 + cat + finalExam;
    const grade = getGradeLetter(totalScore);

    const table = document.querySelector("table");
    const row = table.insertRow(-1);
    const cellName = row.insertCell(0);
    const cellAssignment1 = row.insertCell(1);
    const cellAssignment2 = row.insertCell(2);
    const cellCAT = row.insertCell(3);
    const cellFinalExam = row.insertCell(4);
    const cellTotalScore = row.insertCell(5);
    const cellGrade = row.insertCell(6);

    cellName.innerHTML = studentName;
    cellAssignment1.innerHTML = assignment1;
    cellAssignment2.innerHTML = assignment2;
    cellCAT.innerHTML = cat;
    cellFinalExam.innerHTML = finalExam;
    cellTotalScore.innerHTML = totalScore.toFixed(2);
    cellGrade.innerHTML = grade;

    document.getElementById("studentName").value = "";
    document.getElementById("assignment1").value = "";
    document.getElementById("assignment2").value = "";
    document.getElementById("cat").value = "";
    document.getElementById("finalExam").value = "";
    document.getElementById("error").innerHTML = "";
}

function getGradeLetter(score) {
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}
