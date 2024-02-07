const studentHogwarts = (function() {
    let privateScore = 0;
    let name = null;

    function changeScoreBy (points){
        privateScore += points;
    }

    return {
        setName: function (newName){
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1)
        },
        penalizeStudent: function () {
            changeScoreBy(-1)
        },

        getScore: function () {
            return (name + ': ' + privateScore);
        },
    };
}) ();

const harry = Object.create(studentHogwarts);

harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();


console.log(harry.getScore());

const draco = Object.create(studentHogwarts);
harry.setName('Draco');
harry.rewardStudent();
harry.penalizeStudent();
harry.penalizeStudent();
harry.penalizeStudent();

console.log(harry.getScore());

