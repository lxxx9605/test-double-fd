class GradeService {
    constructor(gradeSystem) {
        this.gradeSystem = gradeSystem;
    }

    calculateAverageGrades(studentId) {
        const grades = this.gradeSystem.gradesFor(studentId);

        return grades.reduce((a, b) => a + b) / grades.length;
    }
}

export default GradeService;