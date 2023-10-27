import Background from './Background';

function App() {

    var notes = [{
        'title': 'test note title 1',
        'content': 'test note content 1'
    },
    {
        'title': 'test note title 2',
        'content': 'test note content 2'
    },
    {
        'title': 'test note title 3',
        'content': 'test note content 3'
    },
    {
        'title': 'test note title 4',
        'content': 'test note content 4'
    }]


    return (
        <div>
            <Background />
        </div>
    )
}

export default App;