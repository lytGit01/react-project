import Home from '../view/home/home.jsx'
import Start from '../view/start/start.jsx'
import Question from '../view/question/index/index.jsx'
import Food from '../view/question/food/food.jsx'
import Case from '../view/question/case/case.jsx'
import Dislike from '../view/question/dislike/dislike.jsx'
import Feel from '../view/question/feel/feel.jsx'
import Table from '../view/question/table/table.jsx'


// console.log(Bundle)
const RouteConfig = {
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/start',
            component: Start
        },
        {
            path: '/question',
            component: Question,
            children: [
                {
                    path: '/question/case',
                    component: Case
                },
                {
                    path: '/question/food',
                    component: Food
                },
                {
                    path: '/question/dislike',
                    component: Dislike
                },
                {
                    path: '/question/feel',
                    component: Feel
                },
                {
                    path: '/question/table',
                    component: Table
                }
            ]
        }

    ]
}

export default RouteConfig