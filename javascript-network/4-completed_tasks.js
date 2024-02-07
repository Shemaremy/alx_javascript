const request = require('request');

const url = process.argv[2];

request.get(url, function(error, response, body){
    const users = JSON.parse(body);
    const completed_task = {};
    users.forEach((user) => {
        if (user.completed){
            if (completed_task[user.userId]){
                completed_task[user.userId]++;
            }
            else{
                completed_task[user.userId] = 1;
            }
        }
        
    });
    const users_completed_tasks = {};
    for (const userId in completed_task){
        users_completed_tasks[userId] = completed_task[userId]
    };
    console.log(users_completed_tasks);
});


