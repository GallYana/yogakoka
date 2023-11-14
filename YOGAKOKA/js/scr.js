
const divs = document.querySelectorAll('.problem');



divs.forEach(div => div.addEventListener('mouseover',
    function () {
        {
            var changedProblems = div.getElementsByClassName("change_problem");
            var changedProblem = changedProblems[0];
            //changedProblem.animate()
            changedProblem.classList.remove("p_hidden");

            var problems = div.getElementsByClassName("problem_mouse_event");
            var problem = problems[0];
            //problem.animate()
            problem.classList.add("p_hidden");
        }
    }
),)

divs.forEach(div => div.addEventListener('mouseout',
    function () {
        {
            var changedProblems = div.getElementsByClassName("change_problem");
            var changedProblem = changedProblems[0];
            //changedProblem.animate()
            changedProblem.classList.add("p_hidden");

            var problems = div.getElementsByClassName("problem_mouse_event");
            var problem = problems[0];
            //problem.animate()
            problem.classList.remove("p_hidden");
        }
    }
),)